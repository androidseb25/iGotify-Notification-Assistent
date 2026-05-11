using System.Net.Sockets;
using System.Net.WebSockets;
using System.Collections.Concurrent;
using iGotify_Notification_Assist.Models;
using SecNtfyNuGet;

namespace iGotify_Notification_Assist.Services;

public class GotifySocketService
{
    public bool isInit { get; private set; }

    private static GotifySocketService? _instance;

    // Data structure for tracking threads and WebSocket connections
    private static List<ThreadSocket>? _threadSockets;
    private static readonly ConcurrentDictionary<string, NativeSocketRuntime> _nativeSockets = new();

    private sealed class NativeSocketRuntime
    {
        public required CancellationTokenSource Cts { get; init; }
        public Task RunnerTask { get; set; } = Task.CompletedTask;
        public required WebSockClientNative Client { get; init; }
    }

    public static GotifySocketService getInstance()
    {
        return _instance ??= new GotifySocketService();
    }

    public void Init()
    {
        var path = $"{GetLocationsOf.App}/data";

        if (!Directory.Exists(path))
            Directory.CreateDirectory(path);

        // Create Database File
        var isDbFileExists = DatabaseService.CreateDatebase(path);
        if (isDbFileExists)
        {
            DatabaseService.UpdateDatebase(path, "Users", "Headers", "text not null default ''");
        }

        AppLog.Info("Startup", $"Database initialized success={isDbFileExists}");
        isInit = isDbFileExists;
    }

    public static void KillWsThread(string clientToken)
    {
        if (_threadSockets != null)
        {
            var threadSocket = _threadSockets.Find(x => x.clientToken == clientToken);
            if (threadSocket == null) return;

            try
            {
                // 1) Signal termination
                threadSocket.cts?.Cancel();

                // 2) If you have a WebSocket, close it actively so that blocking reads wake up
                threadSocket.ws!.Stop();

                // 3) Wait for thread end (short timeout so nothing hangs)
                if (threadSocket.thread!.IsAlive)
                    threadSocket.thread.Join(millisecondsTimeout: 500);
            }
            finally
            {
                threadSocket.cts?.Dispose();
                _threadSockets.Remove(threadSocket);
            }
        }

        StopNativeSocket(clientToken);
    }

    public static void KillAllWsThread()
    {
        if (_threadSockets != null)
        {
            foreach (var threadSocket in _threadSockets)
            {
                try
                {
                    // 1) Signal termination
                    threadSocket.cts?.Cancel();

                    // 2) If you have a WebSocket, close it actively so that blocking reads wake up
                    threadSocket.ws!.Stop();

                    // 3) Wait for thread end (short timeout so nothing hangs)
                    if (threadSocket.thread!.IsAlive)
                        threadSocket.thread.Join(millisecondsTimeout: 500);
                }
                catch (Exception e)
                {
                    AppLog.Error("WebSocket", "Failed to stop legacy websocket thread", e);
                }
                finally
                {
                    threadSocket.cts?.Dispose();
                }
            }

            _threadSockets.Clear();
        }

        foreach (var clientToken in _nativeSockets.Keys)
        {
            StopNativeSocket(clientToken);
        }
    }

    public static void StartWsThread(string gotifyServerUrl, string clientToken)
    {
        // Add the thread and the associated WebSocket connection to the data structure
        if (_threadSockets == null)
            _threadSockets = new List<ThreadSocket>();

        var threadSocket = _threadSockets.Find(x => x.clientToken == clientToken);
        if (threadSocket == null)
        {
            threadSocket = new ThreadSocket();
            _threadSockets.Add(threadSocket);

            threadSocket.thread = new Thread(() => StartWsConn(threadSocket, gotifyServerUrl, clientToken));
            threadSocket.thread.Start();
        }
        else
            AppLog.Info("WebSocket", $"Legacy client already running client={AppLog.MaskSecret(clientToken)}");
    }

    public static void StartWsThread(Users user)
    {
        // Add the thread and the associated WebSocket connection to the data structure
        if (_threadSockets == null)
            _threadSockets = new List<ThreadSocket>();

        var threadSocket = _threadSockets.Find(x => x.clientToken == user.ClientToken);
        if (threadSocket == null)
        {
            threadSocket = new ThreadSocket();
            _threadSockets.Add(threadSocket);

            threadSocket.thread = new Thread(() => StartWsConn(threadSocket, user));
            threadSocket.thread.Start();
        }
        else
            AppLog.Info("WebSocket", $"Legacy client already running client={AppLog.MaskSecret(user.ClientToken)}");
    }

    public static void StartNativeWsTask(Users user)
    {
        if (string.IsNullOrWhiteSpace(user.ClientToken))
            return;

        var cts = new CancellationTokenSource();
        var nativeClient = new WebSockClientNative();
        var runtime = new NativeSocketRuntime
        {
            Cts = cts,
            Client = nativeClient
        };

        if (!_nativeSockets.TryAdd(user.ClientToken, runtime))
        {
            AppLog.Info("WebSocket", $"Client already running client={AppLog.MaskSecret(user.ClientToken)}");
            cts.Cancel();
            cts.Dispose();
            return;
        }

        AppLog.Info("WebSocket",
            $"Starting client={AppLog.MaskSecret(user.ClientToken)} gotify={AppLog.SafeUrl(user.GotifyUrl)}");

        runtime.RunnerTask = Task.Run(() => nativeClient.RunAsync(user, cts.Token), cts.Token);
        runtime.RunnerTask.ContinueWith(_ =>
        {
            if (_nativeSockets.TryRemove(user.ClientToken, out var completedRuntime))
                completedRuntime.Cts.Dispose();
        }, TaskScheduler.Default);
    }

    private static void StartWsConn(ThreadSocket threadSocket, Users user)
    {
        while (!threadSocket.cts!.IsCancellationRequested)
        {
            try
            {
                string wsUrl;
                string socket;

                socket = user.GotifyUrl.Contains("http://") ? "ws" : "wss";
                var gotifyServerUrl = user.GotifyUrl.Replace("http://", "").Replace("https://", "").Replace("\"", "");
                wsUrl = $"{socket}://{gotifyServerUrl}/stream?token={user.ClientToken}";

                // Starting WebSocket instance
                AppLog.Info("WebSocket", $"Legacy connecting client={AppLog.MaskSecret(user.ClientToken)}");
                var wsc = new WebSockClient { URL = wsUrl, user = user };
                wsc.Start(user.ClientToken);
                // Connect the client
                threadSocket.clientToken = user.ClientToken;
                threadSocket.ws = wsc;
                Thread.Sleep(Timeout.Infinite);
            }
            catch (WebSocketException wse)
            {
                AppLog.Error("WebSocket", $"Legacy connection failed client={AppLog.MaskSecret(user.ClientToken)}",
                    wse);
                //currentProcess.Kill(true);
            }
        }

        AppLog.Info("WebSocket", $"Legacy stopped client={AppLog.MaskSecret(user.ClientToken)}");
    }

    private static void StartWsConn(ThreadSocket threadSocket, string gotifyServerUrl, string clientToken)
    {
        while (!threadSocket.cts!.IsCancellationRequested)
        {
            try
            {
                string wsUrl;
                string socket;

                socket = gotifyServerUrl.Contains("http://") ? "ws" : "wss";
                gotifyServerUrl = gotifyServerUrl.Replace("http://", "").Replace("https://", "").Replace("\"", "");
                wsUrl = $"{socket}://{gotifyServerUrl}/stream?token={clientToken}";

                // Starting WebSocket instance
                AppLog.Info("WebSocket", $"Legacy connecting client={AppLog.MaskSecret(clientToken)}");
                var wsc = new WebSockClient { URL = wsUrl };
                wsc.Start(clientToken);
                // Connect the client

                wsc.Start(clientToken);
                // Connect the client
                threadSocket.clientToken = clientToken;
                threadSocket.ws = wsc;
                Thread.Sleep(Timeout.Infinite);
            }
            catch (WebSocketException wse)
            {
                AppLog.Error("WebSocket", $"Legacy connection failed client={AppLog.MaskSecret(clientToken)}", wse);
                //currentProcess.Kill(true);
            }
        }

        AppLog.Info("WebSocket", $"Legacy stopped client={AppLog.MaskSecret(clientToken)}");
    }

    /// <summary>
    /// Initialise WebSocket with all passed variables from container
    /// </summary>
    public async void Start()
    {
        var secntfyUrl = Environments.secNtfyUrl;

        var gotifyUrls = Environments.gotifyUrls;
        var gotifyClientTokens = Environments.gotifyClientTokens;
        var secntfyTokens = Environments.secNtfyTokens;

        var gotifyUrlList = new List<string>();
        var gotifyClientList = new List<string>();
        var secntfyTokenList = new List<string>();

        if (gotifyUrls.Length > 0 && gotifyClientTokens.Length > 0 && secntfyTokens.Length > 0)
        {
            try
            {
                gotifyUrlList = gotifyUrls.Split(";").ToList();
                gotifyClientList = gotifyClientTokens.Split(";").ToList();
                secntfyTokenList = secntfyTokens.Split(";").ToList();

                var clientCounter = 0;
                foreach (string client in gotifyClientList)
                {
                    var dm = new DeviceModel();
                    dm.ClientToken = client;
                    if (!await DatabaseService.CheckIfUserExists(dm))
                    {
                        dm.GotifyUrl = gotifyUrlList.ElementAt(clientCounter);
                        dm.DeviceToken = secntfyTokenList.ElementAt(clientCounter);
                        if (!await DatabaseService.InsertUser(dm))
                        {
                            throw new ApplicationException("Insert Database Exception!");
                        }
                    }

                    clientCounter++;
                }
            }
            catch (Exception e)
            {
                AppLog.Error("Startup", "Failed to import connection settings from environment variables", e);
                AppLog.Warn("Startup", "Check GOTIFY_URLS, GOTIFY_CLIENT_TOKENS and SECNTFY_TOKENS.");
            }
        }
        else
        {
            var statusServerList = gotifyUrlList.Count == 0 ? "empty" : "filled";
            AppLog.Info("Startup", $"GOTIFY_URLS={statusServerList}");
            var statusClientList = gotifyClientList.Count == 0 ? "empty" : "filled";
            AppLog.Info("Startup", $"GOTIFY_CLIENT_TOKENS={statusClientList}");
            var statusNtfyList = secntfyTokenList.Count == 0 ? "empty" : "filled";
            AppLog.Info("Startup", $"SECNTFY_TOKENS={statusNtfyList}");
            AppLog.Info("Startup", "No environment connections found; waiting for app configuration.");
        }

        var userList = await DatabaseService.GetUsers();
        await StartConnection(userList, secntfyUrl);
    }

    private async Task StartConnection(List<Users> userList, string secntfyUrl)
    {
        try
        {
            var isSecNtfyAvailable = await SecNtfy.CheckIfUrlReachable(secntfyUrl);
            if (!isSecNtfyAvailable)
                AppLog.Warn("SecNtfy", $"Server unavailable url={AppLog.SafeUrl(secntfyUrl)}");
        }
        catch
        {
            AppLog.Warn("SecNtfy",
                $"Availability check failed url={AppLog.SafeUrl(secntfyUrl)}; websocket clients will still start.");
        }

        foreach (var user in userList)
        {
            AppLog.Info("WebSocket",
                $"Configured client={AppLog.MaskSecret(user.ClientToken)} gotify={AppLog.SafeUrl(user.GotifyUrl)} secntfy={AppLog.SafeUrl(secntfyUrl)}");

            // StartWsThread(user); // legacy websocket.client implementation
            StartNativeWsTask(user);
        }
    }

    private static void StopNativeSocket(string clientToken)
    {
        if (!_nativeSockets.TryRemove(clientToken, out var runtime))
            return;

        AppLog.Info("WebSocket", $"Stopping client={AppLog.MaskSecret(clientToken)}");

        try
        {
            runtime.Cts.Cancel();
            runtime.Client.StopAsync().GetAwaiter().GetResult();
            runtime.RunnerTask.Wait(millisecondsTimeout: 500);
        }
        catch (Exception e)
        {
            AppLog.Error("WebSocket", $"Failed to stop client={AppLog.MaskSecret(clientToken)}", e);
        }
        finally
        {
            runtime.Cts.Dispose();
        }
    }
}
