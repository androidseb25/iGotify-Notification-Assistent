using System.Net.WebSockets;
using System.Text;
using iGotify_Notification_Assist.Models;
using Newtonsoft.Json;

namespace iGotify_Notification_Assist.Services;

public sealed class WebSockClientNative
{
    private const int BufferSize = 8 * 1024;
    private static readonly TimeSpan CloseTimeout = TimeSpan.FromSeconds(5);
    private ClientWebSocket? _socket;
    private volatile bool _isStopped;

    public async Task RunAsync(Users user, CancellationToken cancellationToken)
    {
        var wsUrl = BuildWsUrl(user);
        var reconnectDelaySeconds = 1;
        var client = AppLog.MaskSecret(user.ClientToken);
        var gotify = AppLog.SafeUrl(user.GotifyUrl);

        AppLog.Info("WebSocket", $"Url is: {wsUrl}");
        while (!cancellationToken.IsCancellationRequested && !_isStopped)
        {
            try
            {
                using var socket = CreateSocket(user);
                _socket = socket;

                AppLog.Info("WebSocket", $"Connecting client={client} gotify={gotify}");
                await socket.ConnectAsync(new Uri(wsUrl), cancellationToken);
                AppLog.Info("WebSocket", $"Connected client={client}");

                reconnectDelaySeconds = 1;
                await ReceiveLoopAsync(socket, wsUrl, user.ClientToken, cancellationToken);
            }
            catch (OperationCanceledException) when (cancellationToken.IsCancellationRequested || _isStopped)
            {
                break;
            }
            catch (WebSocketException wse)
            {
                if (wse.Message.Contains("401"))
                {
                    AppLog.Warn("WebSocket",
                        $"Unauthorized client={client}; token rejected by Gotify. Reconnect stopped.");
                    break;
                }

                AppLog.Warn("WebSocket", $"Connection failed client={client}: {wse.Message}");
            }
            catch (Exception ex)
            {
                AppLog.Error("WebSocket", $"Unexpected error client={client}", ex);
            }
            finally
            {
                _socket = null;
            }

            if (cancellationToken.IsCancellationRequested || _isStopped)
                break;

            var jitterMs = Random.Shared.Next(250, 1250);
            var delay = TimeSpan.FromSeconds(reconnectDelaySeconds) + TimeSpan.FromMilliseconds(jitterMs);

            AppLog.Info("WebSocket", $"Reconnect scheduled client={client} delay={Math.Round(delay.TotalSeconds, 1)}s");

            try
            {
                await Task.Delay(delay, cancellationToken);
            }
            catch (OperationCanceledException)
            {
                break;
            }

            reconnectDelaySeconds = Math.Min(reconnectDelaySeconds * 2, 30);
        }

        AppLog.Info("WebSocket", $"Stopped client={client}");
    }

    public async Task StopAsync()
    {
        _isStopped = true;

        if (_socket == null)
            return;

        try
        {
            if (_socket.State == WebSocketState.Open || _socket.State == WebSocketState.CloseReceived)
            {
                using var closeCts = new CancellationTokenSource(CloseTimeout);
                await _socket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Connection closing",
                    closeCts.Token);
            }
            else
            {
                _socket.Abort();
            }
        }
        catch
        {
            _socket.Abort();
        }
    }

    private static ClientWebSocket CreateSocket(Users user)
    {
        var socket = new ClientWebSocket();
        socket.Options.KeepAliveInterval = TimeSpan.FromSeconds(30);

        if (string.IsNullOrWhiteSpace(user.Headers))
            return socket;

        List<CustomHeaders>? customHeaders;
        try
        {
            customHeaders = JsonConvert.DeserializeObject<List<CustomHeaders>>(user.Headers);
        }
        catch
        {
            customHeaders = null;
        }

        if (customHeaders == null)
            return socket;

        foreach (var header in customHeaders)
        {
            if (string.IsNullOrWhiteSpace(header.Key) || string.IsNullOrWhiteSpace(header.Value))
                continue;

            try
            {
                socket.Options.SetRequestHeader(header.Key, header.Value);
            }
            catch (ArgumentException ex)
            {
                AppLog.Warn("WebSocket", $"Skipping invalid custom header name='{header.Key}': {ex.Message}");
            }
        }

        return socket;
    }

    private static string BuildWsUrl(Users user)
    {
        var gotifyUrl = user.GotifyUrl.Trim().Trim('"');
        if (!gotifyUrl.StartsWith("http://", StringComparison.OrdinalIgnoreCase) &&
            !gotifyUrl.StartsWith("https://", StringComparison.OrdinalIgnoreCase))
        {
            gotifyUrl = $"https://{gotifyUrl}";
        }

        var builder = new UriBuilder(gotifyUrl)
        {
            Scheme = gotifyUrl.StartsWith("http://", StringComparison.OrdinalIgnoreCase) ? "ws" : "wss",
            Path = CombinePath(new Uri(gotifyUrl).AbsolutePath, "stream"),
            Query = $"token={Uri.EscapeDataString(user.ClientToken)}"
        };

        return builder.Uri.ToString();
    }

    private static async Task ReceiveLoopAsync(ClientWebSocket socket, string wsUrl, string clientToken,
        CancellationToken cancellationToken)
    {
        var buffer = new byte[BufferSize];

        while (!cancellationToken.IsCancellationRequested && socket.State == WebSocketState.Open)
        {
            using var ms = new MemoryStream();
            WebSocketReceiveResult result;

            do
            {
                result = await socket.ReceiveAsync(new ArraySegment<byte>(buffer), cancellationToken);

                if (result.MessageType == WebSocketMessageType.Close)
                {
                    if (socket.State == WebSocketState.Open || socket.State == WebSocketState.CloseReceived)
                    {
                        await socket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Server closed connection",
                            cancellationToken);
                    }

                    return;
                }

                ms.Write(buffer, 0, result.Count);
            } while (!result.EndOfMessage);

            var rawMessage = Encoding.UTF8.GetString(ms.ToArray());
            var message = rawMessage.Replace("client::display", "clientdisplay")
                .Replace("client::notification", "clientnotification")
                .Replace("android::action", "androidaction");

            AppLog.Debug("WebSocket", $"Message received client={AppLog.MaskSecret(clientToken)} payload={message}");

            GotifyMessage? gm;
            try
            {
                gm = JsonConvert.DeserializeObject<GotifyMessage>(message);
            }
            catch
            {
                gm = null;
            }

            if (gm == null)
            {
                AppLog.Warn("WebSocket", $"Message ignored client={AppLog.MaskSecret(clientToken)} reason=invalid-json");
                continue;
            }

            AppLog.Debug("WebSocket", $"Forwarding notification client={AppLog.MaskSecret(clientToken)}");
            await new DeviceModel().SendNotifications(gm, wsUrl, clientToken);
        }
    }

    private static string CombinePath(string basePath, string path)
    {
        var normalizedBasePath = string.IsNullOrWhiteSpace(basePath) || basePath == "/"
            ? ""
            : basePath.TrimEnd('/');

        return $"{normalizedBasePath}/{path.TrimStart('/')}";
    }
}
