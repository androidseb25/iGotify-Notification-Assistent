using System.Net.WebSockets;
using iGotify_Notification_Assist.Models;
using SecNtfyNuGet;

namespace iGotify_Notification_Assist.Services;

public class GotifySocketService
{
    public bool isInit { get; set; }

    private static GotifySocketService? _instance = null;

    // Datenstruktur zur Verfolgung von Threads und WebSocket-Verbindungen
    private static readonly Dictionary<string, WebSockClient> WebsocketThreads = new Dictionary<string, WebSockClient>();

    public GotifySocketService() { }

    public static GotifySocketService getInstance()
    {
        if (_instance == null)
            _instance = new GotifySocketService();
        return _instance;
    }
    
    public void Init()
    {
        string path = $"{GetLocationsOf.App}/data";

        if (!Directory.Exists(path))
            Directory.CreateDirectory(path);
        
        //Create Database File
        bool isDbFileExists = DatabaseService.CreateDatebase(path);
        Console.WriteLine($"Database is created: {isDbFileExists}");
        isInit = isDbFileExists;
    }

    public void KillWsThread(string clientToken)
    {
        WebSockClient? wsc = new WebSockClient();
        WebsocketThreads.TryGetValue(clientToken, out wsc);

        if (wsc != null)
        {
            wsc.Stop();
            WebsocketThreads.Remove(clientToken);
        }
    }

    public void StartWSThread(string gotifyServerUrl, string clientToken)
    {
        Thread thread = new Thread(() => StartWSConn(gotifyServerUrl, clientToken));
        thread.Start();
    }

    private void StartWSConn(string gotifyServerUrl, string clientToken)
    {
        while (true)
        {
            try
            {
                string? wsUrl = "";
                string? socket = "";
                
                socket = gotifyServerUrl.Contains("http://") ? "ws" : "wss";
                gotifyServerUrl = gotifyServerUrl.Replace("http://", "").Replace("https://", "").Replace("\"", "");
                wsUrl = $"{socket}://{gotifyServerUrl}/stream?token={clientToken}"; 
                
                // Starting WebSocket instance
                Console.WriteLine("Client connecting...");
                WebSockClient wsc = new WebSockClient();
                wsc.URL = wsUrl;
                wsc.Start(clientToken);
                // Connect the client

                // Fügen Sie den Thread und die zugehörige WebSocket-Verbindung zur Datenstruktur hinzu
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
        string? secntfyUrl = Environment.GetEnvironmentVariable("SECNTFY_SERVER_URL") ?? "https://api.secntfy.app";

        List<Users> userList = await DatabaseService.GetUsers();

        StartConnection(userList, secntfyUrl);
    }

    private void StartConnection(List<Users> userList, string secntfyUrl)
    {
        foreach (Users user in userList)
        {
            string isGotifyAvailable = "";
            string isSecNtfyAvailable = "";
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
            
            StartWSThread(user.GotifyUrl, user.ClientToken);
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