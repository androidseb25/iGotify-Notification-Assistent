namespace iGotify_Notification_Assist.Services;

public static class Environments
{
    private const string EnableConsoleLog = "ENABLE_CONSOLE_LOG";
    private const string EnableScalarUi = "ENABLE_SCALAR_UI";
    private const string EnableUserUi = "ENABLE_USER_UI";
    private const string GotifyUrls = "GOTIFY_URLS";
    private const string GotifyClientTokens = "GOTIFY_CLIENT_TOKENS";
    private const string SecNtfyTokens = "SECNTFY_TOKENS";
    private const string SecNtfyServerUrl = "SECNTFY_SERVER_URL";

    public static bool isLogEnabled => GetBool(EnableConsoleLog, defaultValue: true);

    public static bool enableScalarUi => GetBool(EnableScalarUi, defaultValue: true);

    public static bool enableUserUi => GetBool(EnableUserUi, defaultValue: true);

    public static string gotifyUrls => GetString(GotifyUrls);

    public static string gotifyClientTokens => GetString(GotifyClientTokens);

    public static string secNtfyTokens => GetString(SecNtfyTokens);

    public static string secNtfyUrl => GetString(SecNtfyServerUrl, "https://api.secntfy.app");

    private static bool GetBool(string name, bool defaultValue)
    {
        var value = Environment.GetEnvironmentVariable(name);
        return string.IsNullOrWhiteSpace(value) ? defaultValue : bool.TryParse(value, out var parsed) && parsed;
    }

    private static string GetString(string name, string defaultValue = "")
    {
        return Environment.GetEnvironmentVariable(name)?.Trim() ?? defaultValue;
    }
}
