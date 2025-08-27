using iGotify_Notification_Assist.Services;

namespace iGotify_Notification_Assist.Models;

public sealed class ThreadSocket
{
    public ThreadSocket()
    {
        cts = new CancellationTokenSource();
    }

    public Thread? thread = null;
    public WebSockClient? ws = null;
    public string? clientToken = null;
    public CancellationTokenSource? cts;
}