using System.Net.WebSockets;
using iGotify_Notification_Assist.Models;
using SecNtfyNuGet;

namespace iGotify_Notification_Assist.Services;

public class GotifySocketService
{
    public bool isInit { get; private set; }

    private static GotifySocketService? _instance;

    // Datenstruktur zur Verfolgung von Threads und WebSocket-Verbindungen
    private static Dictionary<string, WebSockClient>? _websocketThreads;

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
        if (_websocketThreads != null)
        {
            _websocketThreads.TryGetValue(clientToken, out var wsc);
            if (wsc == null) return;
            wsc.Stop();
            _websocketThreads.Remove(clientToken);
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
                if (_websocketThreads == null)
                    _websocketThreads = new Dictionary<string, WebSockClient>();
                
                _websocketThreads.Add(clientToken, wsc);
                
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

        // [FEATURE REQUEST] #59 - https://github.com/androidseb25/iGotify-Notification-Assistent/issues/59
        // First try of implementing local running instances without app configuration
        var gotifyServers = Environment.GetEnvironmentVariable("GOTIFY_SERVERS") ?? "";
        var gotifyClientTokens = Environment.GetEnvironmentVariable("GOTIFY_CLIENTS") ?? "";
        var ntfyTokens = Environment.GetEnvironmentVariable("NTFY_TOKENS") ?? "";
        
        var gotifyServerList = new List<string>();
        var gotifyClientList = new List<string>();
        var ntfyTokenList = new List<string>();
        
        if (gotifyServers.Length > 0 && gotifyClientTokens.Length > 0 && ntfyTokens.Length > 0)
        {
            try
            {
                gotifyServerList = gotifyServers.Split(";").ToList();
                gotifyClientList = gotifyClientTokens.Split(";").ToList();
                ntfyTokenList = ntfyTokens.Split(";").ToList();

                var clientCounter = 0;
                foreach (string client in gotifyClientList)
                {
                    var dm = new DeviceModel();
                    dm.ClientToken = client;
                    if (!await DatabaseService.CheckIfUserExists(dm))
                    {
                        dm.GotifyUrl = gotifyServerList.ElementAt(clientCounter);
                        dm.DeviceToken = ntfyTokenList.ElementAt(clientCounter);
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
            var statusServerList = gotifyServerList.Count == 0 ? "empty" : "filled";
            Console.WriteLine($"Gotify Server list is: {statusServerList}");
            var statusClientList = gotifyClientList.Count == 0 ? "empty" : "filled";
            Console.WriteLine($"Gotify Client list is: {statusClientList}");
            var statusNtfyList = ntfyTokenList.Count == 0 ? "empty" : "filled";
            Console.WriteLine($"NTFY Token list is: {statusNtfyList}");
            Console.WriteLine($"If one or more lists are empty please check the environment variable! GOTIFY_SERVERS or GOTIFY_CLIENTS or NTFY_TOKENS");
            Console.WriteLine($"If all lists are empty do nothing, you will configure the gotify server over the iGotify app.");
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