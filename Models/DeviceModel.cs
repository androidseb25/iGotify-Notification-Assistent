using iGotify_Notification_Assist.Services;

namespace iGotify_Notification_Assist.Models;

public class DeviceModel
{
    public DeviceModel() { }

    public string ClientToken { get; set; }
    public string DeviceToken { get; set; }
    public string GotifyUrl { get; set; }

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
        return await DatabaseService.DeleteUser(this.ClientToken);
    }

    /// <summary>
    /// Send the passed notification from the gotify instance that was passed via WebSocket
    /// </summary>
    /// <param name="iGotifyMessage"></param>
    public async Task SendNotifications(GotifyMessage iGotifyMessage, string clientToken)
    {
        string? title = iGotifyMessage.title;
        string? msg = iGotifyMessage.message;
        string imageUrl = "";


        Users usr = await DatabaseService.GetUser(clientToken);

        if (usr.Uid == 0)
        {
            Console.WriteLine("THERE'S SOMETHING WRONG HERE? NO USER FOUND");
        }
        
        _ = Tool.SendNotification(usr.DeviceToken, title, msg, iGotifyMessage.priority == 10, imageUrl, iGotifyMessage.priority);
    }
}