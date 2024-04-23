using System.Net.WebSockets;
using iGotify_Notification_Assist.Models;
using SecNtfyNuGet;

namespace iGotify_Notification_Assist.Services;

public class GotifySocketService
{
    public bool isInit { get; private set; }

    private static GotifySocketService? _instance;

    // Datenstruktur zur Verfolgung von Threads und WebSocket-Verbindungen
    private static Dictionary<string, WebSockClient>? WebsocketThreads = null;

    public static GotifySocketService getInstance()
    {
        return _instance ??= new GotifySocketService();
    }
    
    public void Init()
    {
        var path = $"{GetLocationsOf.App}/data";

        if (!Directory.Exists(path))
            Directory.CreateDirectory(path);
        
        //Create Database File
        var isDbFileExists = DatabaseService.CreateDatebase(path);
        Console.WriteLine($"Database is created: {isDbFileExists}");
        isInit = isDbFileExists;
    }

    public static void KillWsThread(string clientToken)
    {
        if (WebsocketThreads != null)
        {
            WebsocketThreads.TryGetValue(clientToken, out var wsc);
            if (wsc == null) return;
            wsc.Stop();
            WebsocketThreads.Remove(clientToken);
        }
    }

    public static void StartWsThread(string gotifyServerUrl, string clientToken)
    {
        var thread = new Thread(() => StartWsConn(gotifyServerUrl, clientToken));
        thread.Start();
    }

    private static void StartWsConn(string gotifyServerUrl, string clientToken)
    {
        while (true)
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

                // Fügen Sie den Thread und die zugehörige WebSocket-Verbindung zur Datenstruktur hinzu
                if (WebsocketThreads == null)
                    WebsocketThreads = new Dictionary<string, WebSockClient>();
                
                WebsocketThreads.Add(clientToken, wsc);
                
                Thread.Sleep(Timeout.Infinite);
            }
            catch (WebSocketException wse)
            {
                Console.WriteLine($"Unable to Connect to WS or WSS connection aborted with clientToken: {clientToken}");
                Console.WriteLine(wse.StackTrace);
                //currentProcess.Kill(true);
            }
        }
    }

    /// <summary>
    /// Initialise WebSocket with all passed variables from container
    /// </summary>
    public async void Start()
    {
        var secntfyUrl = Environment.GetEnvironmentVariable("SECNTFY_SERVER_URL") ?? "https://api.secntfy.app";

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
                StartDelayedConnection(userList, secntfyUrl);
                return;
            }

            Console.WriteLine($"Gotify - Url: {user.GotifyUrl}");
            Console.WriteLine($"Is Gotify - Url available: {isGotifyAvailable}");
            Console.WriteLine($"SecNtfy Server - Url: {secntfyUrl}");
            Console.WriteLine($"Is SecNtfy Server - Url available: {isSecNtfyAvailable}");
            Console.WriteLine($"Client - Token: {user.ClientToken}");
            
            StartWsThread(user.GotifyUrl, user.ClientToken);
        }
    }

    private async void StartDelayedConnection(List<Users> userList, string secntfyUrl)
    {
        Console.WriteLine("Gotify Server is not available try to reconnect in 10s.");
        await Task.Delay(10000);
        Console.WriteLine("Reconnecting...");
        StartConnection(userList, secntfyUrl);
    }
}