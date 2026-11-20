using iGotify_Notification_Assist.Models;
using iGotify_Notification_Assist.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SecNtfyNuGet;
using Environments = iGotify_Notification_Assist.Services.Environments;

namespace iGotify_Notification_Assist.Controller;

[ApiController]
[Route("[controller]")]
public class DeviceController(GotifyRegistration registration) : ControllerBase
{
    /// <summary>
    /// Add device token to the TXT for sending the push notificcation
    /// </summary>
    /// <param name="deviceModel"></param>
    /// <returns></returns>
    [HttpPost]
    public async Task<IActionResult> PostDeviceModel(DeviceModel deviceModel)
    {
        const string failure = "Fehler beim hinzugefügen des Gerätes!";
        if (
            string.IsNullOrWhiteSpace(deviceModel.ClientToken) || deviceModel.ClientToken == "string" ||
            string.IsNullOrWhiteSpace(deviceModel.DeviceToken) || deviceModel.DeviceToken.Length < 60 ||
            string.IsNullOrWhiteSpace(deviceModel.GotifyUrl) || deviceModel.GotifyUrl == "string"
        )
            return Ok(new { Message = failure, Successful = false });

        var gotifyUrl = await registration.VerifyAsync(deviceModel.GotifyUrl, deviceModel.ClientToken,
            HttpContext.RequestAborted);
        if (gotifyUrl is null)
            return Ok(new { Message = failure, Successful = false });

        HttpContext.RequestAborted.ThrowIfCancellationRequested();
        deviceModel.GotifyUrl = gotifyUrl;
        AppLog.Info("Device", $"Register request client={AppLog.MaskSecret(deviceModel.ClientToken)} device={AppLog.MaskSecret(deviceModel.DeviceToken)} gotify={AppLog.SafeUrl(gotifyUrl)}");
        if (!await deviceModel.Insert())
            return Ok(new { Message = failure, Successful = false });

        var gss = GotifySocketService.getInstance();
        GotifySocketService.KillAllWsThread();
        gss.Start();
        return Ok(new { Message = "Gerät erfolgreich hinzugefügt", Successful = true });
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

        AppLog.Info("Device", $"Delete request client={AppLog.MaskSecret(token)}");
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
        AppLog.Debug("Device", $"Test notification encryptedTitle={ntfy.encTitle}");

        return Ok();
    }
}
