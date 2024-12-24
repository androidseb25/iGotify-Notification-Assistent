namespace iGotify_Notification_Assist.Services;

/// <summary>
/// Get Location of the App path when application is running
/// </summary>
public static class GetLocationsOf
{
    public static readonly string? App =
        Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);
}

public static class GetConnectionString
{
    public static string UsersDb(string databaseFilePath)
    {
        return $"Data Source={databaseFilePath}";
    }
}


public class Environments
{
    public static bool isLogEnabled
    {
        get
        {
            return Environment.GetEnvironmentVariable("ENABLE_CONSOLE_LOG") == "true";
        }
    }
    public static bool enableScalarUi
    {
        get
        {
            return Environment.GetEnvironmentVariable("ENABLE_SCALAR_UI") == "true";
        }
    }

    public static string gotifyUrls
    {
        get
        {
            return Environment.GetEnvironmentVariable("GOTIFY_URLS") ?? "";
        }
    }

    public static string gotifyClientTokens
    {
        get
        {
            return Environment.GetEnvironmentVariable("GOTIFY_CLIENT_TOKENS") ?? "";
        }
    }

    public static string secNtfyTokens
    {
        get
        {
            return Environment.GetEnvironmentVariable("SECNTFY_TOKENS") ?? "";
        }
    }

    public static string secNtfyUrl
    {
        get
        {
            return Environment.GetEnvironmentVariable("SECNTFY_SERVER_URL") ?? "https://api.secntfy.app";
        }
    }
    
}