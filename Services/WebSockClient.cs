using System.Net.WebSockets;
using System.Reactive.Linq;
using iGotify_Notification_Assist.Models;
using Newtonsoft.Json;
using Websocket.Client;

namespace iGotify_Notification_Assist.Services;

public class WebSockClient
{
    public string? URL { get; init; }

    private WebsocketClient? ws;

    public void Start(string clientToken, bool isRestart = false)
    {
        if (URL is { Length: 0 })
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
            var wsName = ws.Name;
            Console.WriteLine($"Disconnection happened, type: {type.Type}");
            switch (type.Type)
            {
                case DisconnectionType.Lost:
                    Console.WriteLine("Connection lost reconnect to Websocket...");
                    Stop();
                    Start(wsName, true);
                    break;
                case DisconnectionType.Error:
                    Console.WriteLine("Webseocket Reconnection failed with Error. Try to reconnect in 10s.");
                    ReconnectDelayed(wsName);
                    break;
                case DisconnectionType.Exit:
                    break;
                case DisconnectionType.ByServer:
                    break;
                case DisconnectionType.NoMessageReceived:
                    break;
                case DisconnectionType.ByUser:
                    break;
            }
        });
        
        // Listening to the WebSocket when message received
        ws.MessageReceived.Select(msg => Observable.FromAsync(async () => {
                //Console.WriteLine($"Message received: {msg}");
                // Convert the payload from gotify and replace values because so we can cast it better cast it to an object
                var message = msg.ToString().Replace("client::display", "clientdisplay")
                    .Replace("client::notification", "clientnotification")
                    .Replace("android::action", "androidaction");
                if (Environments.isLogEnabled)
                    Console.WriteLine("Message converted: " + message);
                // var jsonData = JsonConvert.SerializeObject(message);
                var gm = JsonConvert.DeserializeObject<GotifyMessage>(message);
                // If object is null return and listen to the next message
                if (gm == null)
                {
                    Console.WriteLine("GotifyMessage is null");
                    return;
                }
                
                // Go and send the message 
                Console.WriteLine($"WS Instance from: {ws.Name}");
                await new DeviceModel().SendNotifications(gm, ws);
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

    private async void ReconnectDelayed(string clientToken)
    {
        ws = null;
        await Task.Delay(10000);
        Start(clientToken, true);
    }
}