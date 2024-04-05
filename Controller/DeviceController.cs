using iGotify_Notification_Assist.Models;
using iGotify_Notification_Assist.Services;
using Microsoft.AspNetCore.Mvc;
using SecNtfyNuGet;

namespace iGotify_Notification_Assist.Controller;

[ApiController]
[Route("[controller]")]
public class DeviceController : ControllerBase
{
    private readonly ILogger<DeviceController> _logger;
    
    public DeviceController(ILogger<DeviceController> logger)
    {
        _logger = logger;
    }

    /// <summary>
    /// Add device token to the TXT for sending the push notificcation
    /// </summary>
    /// <param name="deviceModel"></param>
    /// <returns></returns>
    [HttpPost]
    public async Task<IActionResult> PostDeviceModel(DeviceModel deviceModel)
    {
        string result = "";
        bool resultBool = false;
        
        Console.WriteLine($"ClientToken: {deviceModel.ClientToken}");
        Console.WriteLine($"DeviceToken: {deviceModel.DeviceToken}");
        Console.WriteLine($"GotifyUrl: {deviceModel.GotifyUrl}");

        if (
            deviceModel.ClientToken!.Length == 0 || deviceModel.ClientToken == "string" ||
            deviceModel.DeviceToken!.Length == 0 || deviceModel.DeviceToken.Length < 60 || deviceModel.DeviceToken == "string" ||
            deviceModel.GotifyUrl!.Length == 0 || deviceModel.GotifyUrl == "string"
            )
        {
            result = "Fehler beim hinzugefügen des Gerätes!";
            resultBool = false;
            return Ok(new { Message = result, Successful = resultBool });
        }
        
        if (await deviceModel.Insert())
        {
            GotifySocketService gss = GotifySocketService.getInstance();
            gss.StartWSThread(deviceModel.GotifyUrl, deviceModel.ClientToken);
            result = "Gerät erfolgreich hinzugefügt";
            resultBool = true;
        } else {
            result = "Fehler beim hinzugefügen des Gerätes!";
            resultBool = false;
        }

        return Ok(new { Message = result, Successful = resultBool });
    }

    /// <summary>
    /// Delete device from TXT when loggin out from iGotify
    /// </summary>
    /// <param name="token"></param>
    /// <returns></returns>
    [HttpDelete]
    public async Task<IActionResult> DeleteDevcice(string token)
    {
        string result = "";
        bool resultBool = false;
        
        Console.WriteLine($"Delete Token: {token}");
        if (token.Length == 0 || token == "string")
        {
            result = "Fehler beim löschen des Gerätes!";
            resultBool = false;
            return Ok(new { Message = result, Successful = resultBool });
        }

        DeviceModel deviceModel = new DeviceModel();
        deviceModel.ClientToken = token;
        Users usr = await DatabaseService.GetUser(token);
        if (await deviceModel.Delete())
        {
            if (usr.Uid > 0)
            {
                GotifySocketService gss = GotifySocketService.getInstance();
                gss.KillWsThread(usr.ClientToken);
            }
            result = "Gerät erfolgreich gelöscht";
            resultBool = true;
        } else {
            result = "Fehler beim löschen des Gerätes!";
            resultBool = false;
        }
        
        return Ok(new { Message = result, Successful = resultBool });
    }
    
    [HttpGet("Test/{deviceToken}")]
    public async Task<IActionResult> Test(string deviceToken)
    {
        SecNtfy ntfy = new SecNtfy(Environment.GetEnvironmentVariable("SECNTFY_SERVER_URL") ?? "https://api.secntfy.app");
        if (deviceToken.Length > 0)
            _ = await ntfy.SendNotification(deviceToken, "Test", "Test Nachricht", false, "", 0);
        Console.WriteLine(ntfy.encTitle);

        return Ok();
    }
}