namespace iGotify_Notification_Assist.Models;

public class Users
{
    public int Uid { get; init; }
    public string ClientToken { get; init; } = "";
    public string DeviceToken { get; init; } = "";
    public string GotifyUrl { get; init; } = "";
}