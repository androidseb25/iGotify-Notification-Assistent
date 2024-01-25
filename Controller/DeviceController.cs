using Microsoft.AspNetCore.Mvc;

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
        
        Console.WriteLine($"TOKEN: {deviceModel.DM_TOKEN}");
        Console.WriteLine($"DEVICE: {deviceModel.DM_NAME}");

        if (deviceModel.DM_TOKEN!.Length == 0 || deviceModel.DM_TOKEN.Length < 60 || deviceModel.DM_TOKEN == "string")
        {
            result = "Fehler beim hinzugefügen des Gerätes!";
            resultBool = false;
            return Ok(new { Message = result, Successful = resultBool });
        }
        
        if (await deviceModel.Insert())
        {
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
        if (token.Length == 0 || token.Length < 60 || token == "string")
        {
            result = "Fehler beim löschen des Gerätes!";
            resultBool = false;
            return Ok(new { Message = result, Successful = resultBool });
        }

        DeviceModel deviceModel = new DeviceModel();
        deviceModel.DM_TOKEN = token;
        if (await deviceModel.Delete())
        {
            result = "Gerät erfolgreich gelöscht";
            resultBool = true;
        } else {
            result = "Fehler beim löschen des Gerätes!";
            resultBool = false;
        }
        
        return Ok(new { Message = result, Successful = resultBool });
    }
    
    [HttpGet("Test/{deviceToken}")]
    public IActionResult Test(string deviceToken)
    {
        if (deviceToken.Length > 0)
            _ = Tool.SendNotification(deviceToken, "Test", "Test Nachricht", false, "", 0);

        return Ok();
    }
}