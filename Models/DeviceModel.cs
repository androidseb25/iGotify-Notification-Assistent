using iGotify_Notification_Assist.Services;
using SecNtfyNuGet;
using Websocket.Client;
using Environments = iGotify_Notification_Assist.Services.Environments;

namespace iGotify_Notification_Assist.Models;

public class DeviceModel
{
    public string ClientToken { get; set; } = "";
    public string DeviceToken { get; set; } = "";
    public string GotifyUrl { get; set; } = "";

    /// <summary>
    /// Add device token to txt file
    /// </summary>
    /// <returns></returns>
    public async Task<bool> Insert()
    {
        if (!await DatabaseService.CheckIfUserExists(this))
            return await DatabaseService.InsertUser(this);
        else
            return false;
    }

    /// <summary>
    /// delete device token 
    /// </summary>
    /// <returns></returns>
    public async Task<bool> Delete()
    {
        return await DatabaseService.DeleteUser(ClientToken);
    }

    /// <summary>
    /// Send the passed notification from the gotify instance that was passed via WebSocket
    /// </summary>
    /// <param name="iGotifyMessage"></param>
    /// <param name="clientToken"></param>
    public async Task SendNotifications(GotifyMessage iGotifyMessage, WebsocketClient webSock)
    {
        var title = iGotifyMessage.title;
        var msg = iGotifyMessage.message;
        
        var protocol = webSock.Url.ToString().Contains("ws://") ? "http://" : "https://";
        var gotifyServerUrl = webSock.Url.ToString().Replace("ws://", "").Replace("wss://", "").Replace("\"", "").Split("/stream");
        var imageUrl = gotifyServerUrl.Length > 0 ? $"{protocol}{gotifyServerUrl[0]}$$${iGotifyMessage.appid}$$${webSock.Name}" : "";
        
        var usr = await DatabaseService.GetUser(webSock.Name!);

        if (usr.Uid == 0)
        {
            Console.WriteLine("THERE'S SOMETHING WRONG HERE? NO USER FOUND");
        }
        
        var ntfy = new SecNtfy(Environments.secNtfyUrl);
        _ = ntfy.SendNotification(usr.DeviceToken, title, msg, iGotifyMessage.priority == 10, imageUrl, iGotifyMessage.priority);
    }
}