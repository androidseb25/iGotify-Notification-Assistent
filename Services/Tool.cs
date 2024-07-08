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