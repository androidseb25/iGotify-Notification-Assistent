using System.Globalization;
using Microsoft.VisualBasic;
using Newtonsoft.Json;

namespace iGotify_Notification_Assist;

public class DeviceModel
{
    public DeviceModel() { }

    public string? DM_TOKEN { get; set; }
    public string? DM_NAME { get; set; }

    /// <summary>
    /// Add device token to txt file
    /// </summary>
    /// <returns></returns>
    public async Task<bool> Insert()
    {
        string tokenFile = Path.Combine($"{GetLocationsOf.App}/data", "igotify-token.txt");

        // if file exists add them as new line
        if (File.Exists(tokenFile))
        {
            string readText = File.ReadAllText(tokenFile);
            if (!readText.Contains(DM_TOKEN!))
            {
                readText = $"{readText}{DM_TOKEN}{Environment.NewLine}";
                await File.WriteAllTextAsync(tokenFile, readText);
                readText = File.ReadAllText(tokenFile);
                return readText.Contains(DM_TOKEN!);
            }
            else
            {
                return true;
            }
        }

        return false;
    }

    /// <summary>
    /// delete device token 
    /// </summary>
    /// <returns></returns>
    public async Task<bool> Delete()
    {
        string tokenFile = Path.Combine($"{GetLocationsOf.App}/data", "igotify-token.txt");

        // if file exists delete them from it
        if (File.Exists(tokenFile))
        {
            string readText = File.ReadAllText(tokenFile);
            string toReplace = $"{DM_TOKEN}{Environment.NewLine}";
            if (readText.Contains(toReplace))
            {
                readText = readText.Replace(toReplace, "");
                await File.WriteAllTextAsync(tokenFile, readText);
                readText = File.ReadAllText(tokenFile);
                return !readText.Contains(DM_TOKEN!);
            }
            else
            {
                return false;
            }
        }

        return false;
    }

    /// <summary>
    /// Send the passed notification from the gotify instance that was passed via WebSocket
    /// </summary>
    /// <param name="iGotifyMessage"></param>
    public async Task SendNotifications(GotifyMessage iGotifyMessage)
    {
        string? title = iGotifyMessage.title;
        string? msg = iGotifyMessage.message;
        string imageUrl = "";
        
        string tokenFile = Path.Combine($"{GetLocationsOf.App}/data", "igotify-token.txt");

        // Check if file exists
        if (File.Exists(tokenFile))
        {
            // Load all device tokens
            string readText = File.ReadAllText(tokenFile);
            if (readText.Length > 0)
            {
                // Split the string by the new line
                List<string> tokens = readText.Split(
                    new string[] { Environment.NewLine },
                    StringSplitOptions.None
                ).ToList();
                
                foreach (string token in tokens)
                {
                    if (token.Length == 0)
                        continue;
                    // Send notification to current devices via token
                    _ = Tool.SendNotification(token, title, msg, iGotifyMessage.priority == 10, imageUrl, iGotifyMessage.priority);
                }
            }
            else
            {
                Console.WriteLine("NO DEVICES FOUND FOR SENDING MESSAGES!");
                return;
            }
        }
        else
        {
            Console.WriteLine("THERE'S SOMETHING WRONG HERE? NO DATA FOUND");
        }
    }
}