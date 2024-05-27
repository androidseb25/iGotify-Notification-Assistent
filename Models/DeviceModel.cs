using iGotify_Notification_Assist.Services;
using SecNtfyNuGet;

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
        return true;
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
    public async Task SendNotifications(GotifyMessage iGotifyMessage, string clientToken)
    {
        var title = iGotifyMessage.title;
        var msg = iGotifyMessage.message;
        const string imageUrl = "";


        var usr = await DatabaseService.GetUser(clientToken);

        if (usr.Uid == 0)
        {
            Console.WriteLine("THERE'S SOMETHING WRONG HERE? NO USER FOUND");
        }
        
        var ntfy = new SecNtfy(Environment.GetEnvironmentVariable("SECNTFY_SERVER_URL") ?? "https://api.secntfy.app");
        _ = ntfy.SendNotification(usr.DeviceToken, title, msg, iGotifyMessage.priority == 10, imageUrl, iGotifyMessage.priority);
    }
}