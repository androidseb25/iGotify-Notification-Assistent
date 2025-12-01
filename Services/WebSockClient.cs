using System.Net;
using System.Net.WebSockets;
using System.Reactive.Linq;
using iGotify_Notification_Assist.Models;
using Newtonsoft.Json;
using Websocket.Client;

namespace iGotify_Notification_Assist.Services;

public class WebSockClient
{
    public string? URL { get; init; }
    public Users? user { get; init; }
    private WebsocketClient? ws;

    private bool isStopped = false;

    public void Start(string clientToken, bool isRestart = false)
    {
        isStopped = false;
        if (URL is { Length: 0 })
            throw new ApplicationException("URL is empty!");
        if (user != null && user.Headers.Length > 0)
        {
            List<CustomHeaders>? customHeaders = JsonConvert.DeserializeObject<List<CustomHeaders>>(user.Headers);
            if (customHeaders != null)
            {
                var factory = new Func<ClientWebSocket>(() =>
                {
                    var client = new ClientWebSocket();
                    foreach (var header in customHeaders)
                    {
                        if (header.Key == null || header.Value == null)
                            continue;
                        client.Options.SetRequestHeader(header.Key, header.Value);
                    }

                    return client;
                });

                // Init WebSocket 
                ws = new WebsocketClient(new Uri(URL!), factory);
            }
            else
            {
                // Init WebSocket 
                ws = new WebsocketClient(new Uri(URL!));
            }
        }
        else
        {
            // Init WebSocket 
            ws = new WebsocketClient(new Uri(URL!));
        }

        ws.Name = clientToken;
        ws.ReconnectTimeout = TimeSpan.FromSeconds(10);
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
                    // Stop();
                    Start(wsName, true);
                    break;
                case DisconnectionType.Error:
                    if (type.Exception != null && type.Exception.Message.Contains("401"))
                    {
                        Console.WriteLine($"ClientToken: {wsName} is not authorized and returned a 401 Unauthorized error! Skipping reconnection...");
                        Stop();
                    }
                    else
                    {
                        Console.WriteLine(
                            $"Webseocket Reconnection failed with Error. Try to reconnect ClientToken: {wsName} in 10s.");
                        ReconnectDelayed(wsName);
                    }

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
        ws.MessageReceived.Select(msg => Observable.FromAsync(async () =>
            {
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
        if (ws != null)
            await ws!.Stop(WebSocketCloseStatus.Empty, "Connection closing.");
        ws = null;
        isStopped = true;
        await Task.Delay(1000);
    }

    private async void ReconnectDelayed(string clientToken)
    {
        await Task.Delay(10000);
        if (!isStopped)
            Start(clientToken, true);
    }
}