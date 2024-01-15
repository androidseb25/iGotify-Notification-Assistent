namespace iGotify_Notification_Assist.Models;

public class SecNtfyModel
{
    public string title { get; set; } = "";
    public string body { get; set; } = "";
    public string image { get; set; } = "";
    public SecNtfyNotification notification { get; set; } = new SecNtfyNotification();
}

public class SecNtfyNotification
{
    public SecNtfySound sound { get; set; } = new SecNtfySound();
    public bool critical { get; set; }
    public int priority { get; set; }
    public int mutablecontent { get; set; }
}

public class SecNtfySound
{
    public string name { get; set; } = "";
    public decimal volume { get; set; } = 0;
}

public class SecNtfyResponse
{
    public string Message { get; set; } = "";
    public string Token { get; set; } = "";
    public int Status { get; set; } = 0;
}