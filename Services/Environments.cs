namespace iGotify_Notification_Assist.Services;

public class Environments
{
    public static bool isLogEnabled
    {
        get
        {
            var value = Environment.GetEnvironmentVariable("ENABLE_CONSOLE_LOG") ?? "true";
            return value == "true";
        }
    }

    public static bool enableScalarUi
    {
        get
        {
            var value = Environment.GetEnvironmentVariable("ENABLE_SCALAR_UI") ?? "true";
            return value == "true";
        }
    }

    public static string gotifyUrls
    {
        get { return Environment.GetEnvironmentVariable("GOTIFY_URLS") ?? ""; }
    }

    public static string gotifyClientTokens
    {
        get { return Environment.GetEnvironmentVariable("GOTIFY_CLIENT_TOKENS") ?? ""; }
    }

    public static string secNtfyTokens
    {
        get { return Environment.GetEnvironmentVariable("SECNTFY_TOKENS") ?? ""; }
    }

    public static string secNtfyUrl
    {
        get { return Environment.GetEnvironmentVariable("SECNTFY_SERVER_URL") ?? "https://api.secntfy.app"; }
    }
}