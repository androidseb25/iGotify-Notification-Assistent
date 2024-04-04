using System.Net;
using System.Net.Http.Headers;
using System.Net.Security;
using System.Security.Authentication;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using iGotify_Notification_Assist.Helpers;
using iGotify_Notification_Assist.Models;
using Newtonsoft.Json;

namespace iGotify_Notification_Assist.Services;

/// <summary>
/// Get Location of the App path when application is running
/// </summary>
public class GetLocationsOf
{
    public static readonly string? App =
        Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);
}

public class GetConnectionString
{
    public static string? UsersDb(string databaseFilePath)
    {
        return $"Data Source={databaseFilePath}";
    }
}