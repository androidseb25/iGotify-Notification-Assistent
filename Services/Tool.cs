using System.Net;
using System.Net.Http.Headers;
using System.Net.Security;
using System.Security.Authentication;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using iGotify_Notification_Assist.Helpers;
using iGotify_Notification_Assist.Models;
using Newtonsoft.Json;

namespace iGotify_Notification_Assist;

public class Tool
{
    /// <summary>
    /// Sending notification to SecNtfy
    /// </summary>
    /// <param name="deviceToken"></param>
    /// <param name="title"></param>
    /// <param name="msg"></param>
    /// <param name="isCritical"></param>
    /// <param name="imageUrl"></param>
    /// <param name="priority"></param>
    /// <returns></returns>
    public static async Task<object?> SendNotification(string deviceToken, string? title, string? msg, bool isCritical,
        string imageUrl = "", int priority = 0)
    {
        string webAddr = "";
        string publicKey = "";

        // If token not contains "NTFY-DEVICE-" please skip
        if (!deviceToken.Contains("NTFY-DEVICE-"))
            return null;

        var customWebAddr = Environment.GetEnvironmentVariable("SECNTFY_SERVER_URL") ?? "https://api.secntfy.app";

        if (customWebAddr.Length > 0 && customWebAddr != webAddr)
            webAddr = customWebAddr;

        // trim notification body because the payload size can't be higher then 4kb under APN
        msg = msg!.Length > 150 ? string.Concat(msg.AsSpan(0, 150), msg!.Length > 150 ? "..." : "") : msg;

        // Getting the public key from SecNtfy
        publicKey = await GetPubKeyFromDevice(webAddr, deviceToken);
        
        // If not available or not found skip it
        if (publicKey.Length == 0)
            return null;

        // Encrypt now title and message body
        title = new MsgCrypto(publicKey, title ?? "").Encrypt();
        msg = new MsgCrypto(publicKey, msg).Encrypt();

        var clientHandler = new HttpClientHandler();
        var client = new HttpClient(clientHandler);

        var myRequest = new HttpRequestMessage(HttpMethod.Post, $"{webAddr}/Message");

        myRequest.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        
        // Add device key to header for authentication for SecNtfy
        myRequest.Headers.Add("X-NTFYME-DEVICE-KEY", $"{deviceToken}");

        // Prepare Payload for SecNtfy
        SecNtfyModel model = new SecNtfyModel();
        model.title = title;
        model.body = msg;
        model.image = imageUrl;
        model.notification = new SecNtfyNotification();
        model.notification.mutablecontent = 1;
        model.notification.critical = isCritical;
        model.notification.priority = priority;
        model.notification.sound = new SecNtfySound();
        model.notification.sound.name = "default";
        model.notification.sound.volume = (decimal)1.0;

        // convert object to a json object 
        var jsonObj = JsonConvert.SerializeObject(model, Formatting.None, new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore });
        
        //Console.WriteLine(jsonObj);

        // create data from json object
        var data = new StringContent(jsonObj, Encoding.UTF8, "application/json");

        myRequest.Content = data;

        // Sending the request and getting result and don't evaluate it because it's not necessary 
        var response = client.SendAsync(myRequest).GetAwaiter().GetResult();
        var result = response.Content.ReadAsStringAsync().Result;
        SecNtfyResponse? ntfyResponse = JsonConvert.DeserializeObject<SecNtfyResponse>(result);
        //Console.WriteLine(result);
        return null;
    }

    /// <summary>
    /// Getting the public key from SecNtfy with device token
    /// </summary>
    /// <param name="webAddr"></param>
    /// <param name="deviceToken"></param>
    /// <returns></returns>
    private static async Task<string> GetPubKeyFromDevice(string webAddr, string deviceToken)
    {
        var clientHandler = new HttpClientHandler();
        var client = new HttpClient(clientHandler);

        var myRequest = new HttpRequestMessage(HttpMethod.Get, $"{webAddr}/Message/Device");

        myRequest.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        
        // Add device key to header for authentication for SecNtfy
        myRequest.Headers.Add("X-NTFYME-DEVICE-KEY", $"{deviceToken}");
        try
        {
            var response = client.SendAsync(myRequest).GetAwaiter().GetResult();
            //Console.WriteLine(response);
            var result = response.Content.ReadAsStringAsync().Result;
            //Console.WriteLine(result);
            SecNtfyResponse? ntfyResponse = JsonConvert.DeserializeObject<SecNtfyResponse>(result);
            //Console.WriteLine(ntfyResponse);

            await Task.Run(() => { });

            // return the public key, the Token value is used to simplify the return values of the api
            if (ntfyResponse != null && ntfyResponse.Status == 200)
                return ntfyResponse.Token;
            else
                return "";
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
            Console.WriteLine(e.StackTrace);
            return "";
        }
    }

    public static async Task<bool> CheckIfUrlReachable(string url)
    {
        var clientHandler = new HttpClientHandler();
        var client = new HttpClient(clientHandler);

        url = url.Replace("api.", "").Replace("/api", "");
        
        var myRequest = new HttpRequestMessage(HttpMethod.Get, url);
        
        try
        {
            var response = client.SendAsync(myRequest).GetAwaiter().GetResult();
            var result = response.Content.ReadAsStringAsync().Result;
            return response.StatusCode == HttpStatusCode.OK;
        }
        catch (WebException)
        {
            return false;
        }
    }
}

/// <summary>
/// Get Location of the App path when application is running
/// </summary>
public class GetLocationsOf
{
    public static readonly string? App =
        Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);
}