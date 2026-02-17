using System.Net.WebSockets;
using System.Text;
using iGotify_Notification_Assist.Models;
using Newtonsoft.Json;

namespace iGotify_Notification_Assist.Services;

public sealed class WebSockClientNative
{
    private ClientWebSocket? _socket;
    private volatile bool _isStopped;

    public async Task RunAsync(Users user, CancellationToken cancellationToken)
    {
        var wsUrl = BuildWsUrl(user);
        var reconnectDelaySeconds = 1;

        while (!cancellationToken.IsCancellationRequested && !_isStopped)
        {
            try
            {
                using var socket = CreateSocket(user);
                _socket = socket;

                Console.WriteLine($"Client connecting (native): {user.ClientToken}");
                await socket.ConnectAsync(new Uri(wsUrl), cancellationToken);
                Console.WriteLine($"Client connected (native): {user.ClientToken}");

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
                    Console.WriteLine(
                        $"ClientToken: {user.ClientToken} is not authorized and returned a 401 Unauthorized error! Skipping reconnection...");
                    break;
                }

                Console.WriteLine(
                    $"Unable to connect or connection aborted for clientToken: {user.ClientToken}. {wse.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Unexpected websocket error for clientToken: {user.ClientToken}. {ex.Message}");
            }
            finally
            {
                _socket = null;
            }

            if (cancellationToken.IsCancellationRequested || _isStopped)
                break;

            var jitterMs = Random.Shared.Next(250, 1250);
            var delay = TimeSpan.FromSeconds(reconnectDelaySeconds) + TimeSpan.FromMilliseconds(jitterMs);

            Console.WriteLine(
                $"WebSocket reconnect for clientToken: {user.ClientToken} in {Math.Round(delay.TotalSeconds, 1)}s");

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

        Console.WriteLine($"Client disconnected (native): {user.ClientToken}");
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
                await _socket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Connection closing",
                    CancellationToken.None);
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

            socket.Options.SetRequestHeader(header.Key, header.Value);
        }

        return socket;
    }

    private static string BuildWsUrl(Users user)
    {
        var socket = user.GotifyUrl.Contains("http://") ? "ws" : "wss";
        var gotifyServerUrl = user.GotifyUrl.Replace("http://", "").Replace("https://", "").Replace("\"", "");
        return $"{socket}://{gotifyServerUrl}/stream?token={user.ClientToken}";
    }

    private static async Task ReceiveLoopAsync(ClientWebSocket socket, string wsUrl, string clientToken,
        CancellationToken cancellationToken)
    {
        var buffer = new byte[8 * 1024];

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

            if (Environments.isLogEnabled)
                Console.WriteLine("Message converted: " + message);

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
                Console.WriteLine("GotifyMessage is null");
                continue;
            }

            Console.WriteLine($"WS Instance from (native): {clientToken}");
            await new DeviceModel().SendNotifications(gm, wsUrl, clientToken);
        }
    }
}
