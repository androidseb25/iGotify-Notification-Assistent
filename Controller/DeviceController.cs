using iGotify_Notification_Assist.Models;
using iGotify_Notification_Assist.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SecNtfyNuGet;
using Environments = iGotify_Notification_Assist.Services.Environments;

namespace iGotify_Notification_Assist.Controller;

[ApiController]
[Route("[controller]")]
public class DeviceController : ControllerBase
{
    /// <summary>
    /// Add device token to the TXT for sending the push notificcation
    /// </summary>
    /// <param name="deviceModel"></param>
    /// <returns></returns>
    [HttpPost]
    public async Task<IActionResult> PostDeviceModel(DeviceModel deviceModel)
    {
        string result;
        bool resultBool;

        Console.WriteLine($"ClientToken: {deviceModel.ClientToken}");
        Console.WriteLine($"DeviceToken: {deviceModel.DeviceToken}");
        Console.WriteLine($"GotifyUrl: {deviceModel.GotifyUrl}");

        if (
            deviceModel.ClientToken.Length == 0 || deviceModel.ClientToken == "string" ||
            deviceModel.DeviceToken.Length == 0 || deviceModel.DeviceToken.Length < 60 ||
            deviceModel.DeviceToken == "string" ||
            deviceModel.GotifyUrl.Length == 0 || deviceModel.GotifyUrl == "string"
        )
        {
            result = "Fehler beim hinzugefügen des Gerätes!";
            resultBool = false;
            return Ok(new { Message = result, Successful = resultBool });
        }

        if (await deviceModel.Insert())
        {
            var gss = GotifySocketService.getInstance();
            GotifySocketService.KillAllWsThread();
            gss.Start();
            result = "Gerät erfolgreich hinzugefügt";
            resultBool = true;
        }
        else
        {
            result = "Fehler beim hinzugefügen des Gerätes!";
            resultBool = false;
        }

        return Ok(new { Message = result, Successful = resultBool });
    }

    /// <summary>
    /// Delete device from TXT when loggin out from iGotify
    /// </summary>
    /// <param name="token">Clienttoken for verify the correct entry</param>
    /// <returns></returns>
    [HttpDelete]
    public async Task<IActionResult> DeleteDevcice(string token)
    {
        string result;
        bool resultBool;

        Console.WriteLine($"Delete Token: {token}");
        if (token.Length == 0 || token == "string")
        {
            result = "Error deleting device!";
            resultBool = false;
            return Ok(new { Message = result, Successful = resultBool });
        }

        var deviceModel = new DeviceModel { ClientToken = token };
        var usr = await DatabaseService.GetUser(token);
        if (await deviceModel.Delete())
        {
            var gss = GotifySocketService.getInstance();
            GotifySocketService.KillAllWsThread();
            gss.Start();
            result = "Device deleted successfully!";
            resultBool = true;
        }
        else
        {
            result = "Error deleting device!";
            resultBool = false;
        }

        return Ok(new { Message = result, Successful = resultBool });
    }

    /// <summary>
    /// Add Custom Headers e.g. Cloudflare, Pangolin authentication
    /// </summary>
    /// <param name="customHeaders">Custome Header items</param>
    /// <param name="token">Clienttoken for verify the correct entry and instance</param>
    /// <returns></returns>
    [HttpPost("CustomHeaders/{token}")]
    public async Task<IActionResult> CustomHeaders([FromBody] List<CustomHeaders> customHeaders, string token)
    {
        string result = "";
        bool resultBool = false;

        if (token == null || token.Length == 0)
        {
            resultBool = false;
            result = "Token not set!";
            return BadRequest(new { Message = result, Successful = resultBool });
        }

        if (customHeaders.Count == 0)
        {
            resultBool = false;
            result = "CustomHeaders were not set!";
            return BadRequest(new { Message = result, Successful = resultBool });
        }

        var usr = await DatabaseService.GetUser(token);
        usr.Headers = JsonConvert.SerializeObject(customHeaders);
        resultBool = await usr.Update();

        if (resultBool)
        {
            var gss = GotifySocketService.getInstance();
            GotifySocketService.KillAllWsThread();
            gss.Start();
            result = "CustomHeaders successfully added!";
        }

        return Ok(new { Message = result, Successful = resultBool });
    }

    /// <summary>
    /// Send a Test message if remote notification work
    /// </summary>
    /// <param name="deviceToken">SecNtfy Token</param>
    /// <returns></returns>
    [HttpGet("Test/{deviceToken}")]
    public async Task<IActionResult> Test(string deviceToken)
    {
        var ntfy = new SecNtfy(Environments.secNtfyUrl);
        if (deviceToken.Length > 0)
            _ = await ntfy.SendNotification(deviceToken, "Test", "Test Notification");
        if (Environments.isLogEnabled)
            Console.WriteLine(ntfy.encTitle);

        return Ok();
    }
}