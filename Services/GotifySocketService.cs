using System.Net.Sockets;
using System.Net.WebSockets;
using iGotify_Notification_Assist.Models;
using SecNtfyNuGet;

namespace iGotify_Notification_Assist.Services;

public class GotifySocketService
{
    public bool isInit { get; private set; }

    private static GotifySocketService? _instance;

    // Data structure for tracking threads and WebSocket connections
    private static List<ThreadSocket>? _threadSockets;

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

        Console.WriteLine($"Database is created: {isDbFileExists}");
        isInit = isDbFileExists;
    }

    public static async void KillWsThread(string clientToken)
    {
        if (_threadSockets != null)
        {
            var threadSocket = _threadSockets.Find(x => x.clientToken == clientToken);
            if (threadSocket == null) return;

            try
            {
                // 1) Signal termination
                threadSocket.cts.Cancel();

                // 2) If you have a WebSocket, close it actively so that blocking reads wake up
                threadSocket.ws!.Stop();

                // 3) Wait for thread end (short timeout so nothing hangs)
                if (threadSocket.thread.IsAlive)
                    threadSocket.thread.Join(millisecondsTimeout: 500);
            }
            finally
            {
                threadSocket.cts.Dispose();
                _threadSockets.Remove(threadSocket);
            }
        }
    }

    public static async void KillAllWsThread()
    {
        if (_threadSockets != null)
        {
            foreach (var threadSocket in _threadSockets)
            {
                try
                {
                    // 1) Signal termination
                    threadSocket.cts.Cancel();

                    // 2) If you have a WebSocket, close it actively so that blocking reads wake up
                    threadSocket.ws!.Stop();

                    // 3) Wait for thread end (short timeout so nothing hangs)
                    if (threadSocket.thread.IsAlive)
                        threadSocket.thread.Join(millisecondsTimeout: 500);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                }
                finally
                {
                    threadSocket.cts.Dispose();
                }
            }

            _threadSockets.Clear();
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
            Console.WriteLine($"Client: {clientToken} already connected! Skipping...");
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
            Console.WriteLine($"Client: {user.ClientToken} already connected! Skipping...");
    }

    private static void StartWsConn(ThreadSocket threadSocket, Users user)
    {
        while (!threadSocket.cts.IsCancellationRequested)
        {
            try
            {
                string wsUrl;
                string socket;

                socket = user.GotifyUrl.Contains("http://") ? "ws" : "wss";
                var gotifyServerUrl = user.GotifyUrl.Replace("http://", "").Replace("https://", "").Replace("\"", "");
                wsUrl = $"{socket}://{gotifyServerUrl}/stream?token={user.ClientToken}";

                // Starting WebSocket instance
                Console.WriteLine("Client connecting...");
                var wsc = new WebSockClient { URL = wsUrl, user = user };
                wsc.Start(user.ClientToken);
                // Connect the client
                threadSocket.clientToken = user.ClientToken;
                threadSocket.ws = wsc;
                Thread.Sleep(Timeout.Infinite);
            }
            catch (WebSocketException wse)
            {
                Console.WriteLine(
                    $"Unable to Connect to WS or WSS connection aborted with clientToken: {user.ClientToken}");
                Console.WriteLine(wse.StackTrace);
                //currentProcess.Kill(true);
            }
        }

        Console.WriteLine($"Client disconnected: {user.ClientToken}");
    }

    private static void StartWsConn(ThreadSocket threadSocket, string gotifyServerUrl, string clientToken)
    {
        while (!threadSocket.cts.IsCancellationRequested)
        {
            try
            {
                string wsUrl;
                string socket;

                socket = gotifyServerUrl.Contains("http://") ? "ws" : "wss";
                gotifyServerUrl = gotifyServerUrl.Replace("http://", "").Replace("https://", "").Replace("\"", "");
                wsUrl = $"{socket}://{gotifyServerUrl}/stream?token={clientToken}";

                // Starting WebSocket instance
                Console.WriteLine("Client connecting...");
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
                Console.WriteLine($"Unable to Connect to WS or WSS connection aborted with clientToken: {clientToken}");
                Console.WriteLine(wse.StackTrace);
                //currentProcess.Kill(true);
            }
        }

        Console.WriteLine($"Client disconnected: {clientToken}");
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
                Console.WriteLine($"Error: {e.Message}");
                Console.WriteLine("Something went wrong when inserting you're connection!");
                Console.WriteLine("Please check you're environment lists!");
            }
        }
        else
        {
            var statusServerList = gotifyUrlList.Count == 0 ? "empty" : "filled";
            Console.WriteLine($"Gotify Url list is: {statusServerList}");
            var statusClientList = gotifyClientList.Count == 0 ? "empty" : "filled";
            Console.WriteLine($"Gotify Client list is: {statusClientList}");
            var statusNtfyList = secntfyTokenList.Count == 0 ? "empty" : "filled";
            Console.WriteLine($"SecNtfy Token list is: {statusNtfyList}");
            Console.WriteLine(
                $"If one or more lists are empty please check the environment variable! GOTIFY_SERVERS or GOTIFY_CLIENTS or NTFY_TOKENS");
            Console.WriteLine(
                $"If all lists are empty do nothing, you will configure the gotify server over the iGotify app.");
        }

        var userList = await DatabaseService.GetUsers();

        StartConnection(userList, secntfyUrl);
    }

    private void StartConnection(List<Users> userList, string secntfyUrl)
    {
        foreach (var user in userList)
        {
            string isGotifyAvailable;
            string isSecNtfyAvailable;
            try
            {
                isGotifyAvailable = SecNtfy.CheckIfUrlReachable(user.GotifyUrl) ? "yes" : "no";

                if (isGotifyAvailable == "no")
                {
                    StartConnection(userList, secntfyUrl);
                    return;
                }

                isSecNtfyAvailable = SecNtfy.CheckIfUrlReachable(secntfyUrl) ? "yes" : "no";
            }
            catch
            {
                Console.WriteLine($"Gotify Server: '{user.GotifyUrl}' is not available try to reconnect in 10s.");
                StartDelayedConnection(userList, secntfyUrl);
                return;
            }

            Console.WriteLine($"Gotify - Url: {user.GotifyUrl}");
            Console.WriteLine($"Is Gotify - Url available: {isGotifyAvailable}");
            Console.WriteLine($"SecNtfy Server - Url: {secntfyUrl}");
            Console.WriteLine($"Is SecNtfy Server - Url available: {isSecNtfyAvailable}");
            Console.WriteLine($"Client - Token: {user.ClientToken}");

            StartWsThread(user);
        }
    }

    private async void StartDelayedConnection(List<Users> userList, string secntfyUrl)
    {
        await Task.Delay(10000);
        Console.WriteLine("Reconnecting...");
        StartConnection(userList, secntfyUrl);
    }
}