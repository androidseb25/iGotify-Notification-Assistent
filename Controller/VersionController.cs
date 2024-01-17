using System.Reflection;
using System.Security.Cryptography;
using iGotify_Notification_Assist.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace iGotify_Notification_Assist.Controller;

[ApiController]
[Route("[controller]")]
public class VersionController : ControllerBase
{
    private readonly ILogger<DeviceController> _logger;
    
    public VersionController(ILogger<DeviceController> logger)
    {
        _logger = logger;
    }
    
    /// <summary>
    /// Get the current version of the container
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public IActionResult GetVersion()
    {
        ServerVersion sv = new ServerVersion();
        sv.version = Assembly.GetEntryAssembly()?.GetName().Version?.ToString() ?? "";
        DateTime buildDate = new FileInfo(Assembly.GetExecutingAssembly().Location).LastWriteTime;
        sv.buildDate = buildDate.ToString("yyyy-MM-dd'T'HH:mm:ss");
        sv.commit = Programms.StartUpCommit;
        return Ok(sv);
    }
}

public static class Programms
{
    public static string? StartUpCommit = Guid.NewGuid().ToString().Replace("-", "");
}