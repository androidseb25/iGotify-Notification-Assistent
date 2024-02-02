namespace iGotify_Notification_Assist;

public class StartUpBuilder : IStartupFilter
{
    public Action<IApplicationBuilder> Configure(Action<IApplicationBuilder> next)
    {
        return builder =>
        {
            // Create GotifyInstance after starting of the API
            
            GotifySocketService gss = GotifySocketService.getInstance();
            gss.Init();
            if (gss.isInit)
                gss.Start();

            next(builder);
        };
    }
}