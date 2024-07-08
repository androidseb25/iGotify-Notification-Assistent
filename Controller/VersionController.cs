using System.Reflection;
using iGotify_Notification_Assist.Models;
using Microsoft.AspNetCore.Mvc;

namespace iGotify_Notification_Assist.Controller;

[ApiController]
[Route("[controller]")]
public class VersionController : ControllerBase
{
    /// <summary>
    /// Get the current version of the container
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public IActionResult GetVersion()
    {
        var sv = new ServerVersion { version = Assembly.GetEntryAssembly()?.GetName().Version?.ToString() ?? "" };
        var buildDate = new FileInfo(Assembly.GetExecutingAssembly().Location).LastWriteTime;
        sv.buildDate = buildDate.ToString("yyyy-MM-dd'T'HH:mm:ss");
        sv.commit = Programms.StartUpCommit;
        return Ok(sv);
    }
}

public static class Programms
{
    public static readonly string? StartUpCommit = Guid.NewGuid().ToString().Replace("-", "");
}