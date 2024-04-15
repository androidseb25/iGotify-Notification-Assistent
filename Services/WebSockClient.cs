using System.Net.WebSockets;
using System.Reactive.Linq;
using iGotify_Notification_Assist.Models;
using Newtonsoft.Json;
using Websocket.Client;

namespace iGotify_Notification_Assist.Services;

public class WebSockClient
{
    public string? URL { get; set; }

    private WebsocketClient? ws = null;

    public void Start(string clientToken, bool isRestart = false)
    {
        if (URL != null && URL.Length == 0)
            throw new ApplicationException("URL is empty!");

        // Init WebSocket 
        ws = new WebsocketClient(new Uri(URL!));
        ws.Name = clientToken;
        ws.IsReconnectionEnabled = false;

        ws.ReconnectionHappened.Subscribe(info =>
        {
            //Console.WriteLine($"ReconnectionHappened {info.Type}");
            if (info.Type == ReconnectionType.Initial && isRestart)
            {
                Console.WriteLine($"Gotify with Clienttoken: \"{clientToken}\" is successfully reconnected!");
            }
        });
        
        // When a disconnection happend try to reconnect the WebSocket
        ws.DisconnectionHappened.Subscribe(type =>
        {
            string wsName = ws.Name;
            Console.WriteLine($"Disconnection happened, type: {type.Type}");
            if (type.Type == DisconnectionType.Lost)
            {
                Console.WriteLine($"Connection lost reconnect to Websocket...");
                Stop();
                Start(wsName, true);
            } else if (type.Type == DisconnectionType.Error)
            {
                Console.WriteLine($"Webseocket Reconnection failed with Error. Try to reconnect in 10s.");
                ReconnectDelayed(wsName);
            }
        });
        
        // Listening to the WebSocket when message received
        ws.MessageReceived.Select(msg => Observable.FromAsync(async () => {
                //Console.WriteLine($"Message received: {msg}");
                // Convert the payload from gotify and replace values because so we can cast it better cast it to an object
                string message = msg.ToString().Replace("client::display", "clientdisplay")
                    .Replace("client::notification", "clientnotification")
                    .Replace("android::action", "androidaction");
                Console.WriteLine("Message converted: " + message);
                var jsonData = JsonConvert.SerializeObject(message);
                GotifyMessage? gm = JsonConvert.DeserializeObject<GotifyMessage>(message);
                // If object is null return and listen to the next message
                if (gm == null)
                {
                    Console.WriteLine("GotifyMessage is null");
                    return;
                }
                
                // Go and send the message 
                Console.WriteLine($"WS Instance from: {ws.Name}");
                await new DeviceModel().SendNotifications(gm, ws.Name);
            }))
            .Concat() // executes sequentially
            .Subscribe();
        ws.Start();
        if (!isRestart)
            Console.WriteLine("Done!");
    }

    /// <summary>
    /// Stop and clear the WebSocket value
    /// </summary>
    public async void Stop()
    {
        await ws!.Stop(WebSocketCloseStatus.Empty, "Connection closing.");
        ws = null;
        await Task.Delay(1000);
    }

    public async void ReconnectDelayed(string clientToken)
    {
        ws = null;
        await Task.Delay(10000);
        Start(clientToken, true);
    }
}