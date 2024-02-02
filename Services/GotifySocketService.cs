using System.Diagnostics;
using System.Net.WebSockets;

namespace iGotify_Notification_Assist;

public class GotifySocketService
{
    public bool isInit { get; set; }

    public WebSockClient? wsc { get; set; }

    private static GotifySocketService? _instance = null;

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
        string tokenFile = Path.Combine(path, "igotify-token.txt");

        bool isFileCreated = File.Exists(tokenFile);

        // is file created? No created it now
        if (!isFileCreated)
        {
            if (!Directory.Exists(path))
                Directory.CreateDirectory(path);
            // Create() creates a file at pathName 
            _ = File.Create(tokenFile);
            isFileCreated = File.Exists(tokenFile);
        }

        // check if myFile.txt file is created at the specified path 
        Console.WriteLine(isFileCreated ? "File is created." : "File is not created.");
        isInit = isFileCreated;
    }

    /// <summary>
    /// Initialise WebSocket with all passed variables from container
    /// </summary>
    public void Start()
    {
        // Get the current process.
        Process currentProcess = Process.GetCurrentProcess();
        
        string? url = "";
        string? iGotifyClientToken = "";
        string? socket = "";
        string gotifyServerUrl = "";

        string? envGotifyServUrl = Environment.GetEnvironmentVariable("GOTIFY_SERVER_URL");
        string? secntfyUrl = Environment.GetEnvironmentVariable("SECNTFY_SERVER_URL") ?? "https://api.secntfy.app/api";
        if (envGotifyServUrl == null)
        {
            envGotifyServUrl = "http://gotify";
            socket = "ws";
        }
        else
            socket = envGotifyServUrl.Contains("http://") ? "ws" : "wss";

        gotifyServerUrl = envGotifyServUrl.Replace("http://", "").Replace("https://", "").Replace("\"", "");

#if DEBUG
        iGotifyClientToken = "<CLIENT_TOKEN>";
        socket = "ws"; // or "wss" for secure websocket connection
        gotifyServerUrl = "0.0.0.0:8680"; // example url IP OR DOMAIN OF GOTIFY INSTANCE WITH PORT
        url = $"{socket}://{gotifyServerUrl}/stream?token={iGotifyClientToken}"; 
#else
        iGotifyClientToken = Environment.GetEnvironmentVariable("IGOTIFY_CLIENT_TOKEN").Replace("\"", "");
        url = $"{socket}://{gotifyServerUrl}/stream?token={iGotifyClientToken}";
#endif

        Console.WriteLine($"Client - Token: {iGotifyClientToken}");
        Console.WriteLine($"Gotify - Url: {url}");
        Console.WriteLine($"SecNtfy Server - Url: {secntfyUrl}");

        try
        {
            // Starting WebSocket instance
            Console.Write("Client connecting...");
            wsc = new WebSockClient();
            wsc.URL = url;
            wsc.Start();
            // Connect the client
            Console.WriteLine("Done!");
        }
        catch (WebSocketException wse)
        {
            Console.WriteLine($"Unable to Connect to WS or WSS connection aborted");
            Console.WriteLine(wse.StackTrace);
            //currentProcess.Kill(true);
        }
    }
}