using System.Reflection;
using iGotify_Notification_Assist.Models;
using iGotify_Notification_Assist.Services;
using Microsoft.AspNetCore.Mvc;

namespace iGotify_Notification_Assist.Controller;

[ApiController]
[Route("[controller]")]
public class UsersController : ControllerBase
{
    [HttpGet]
    [ServiceFilter(typeof(AuthenticationFilter))]
    public async Task<IActionResult> GetAllUsers()
    {
        List<Users> userList = await DatabaseService.GetUsers();
        return Ok(new { Message = "Users successfully retrieved!", Data = userList });
    }

    [HttpPatch]
    [ServiceFilter(typeof(AuthenticationFilter))]
    public async Task<IActionResult> PatchUser([FromBody] Users? user)
    {
        if (user == null)
            return Ok(new { Message = "User Body is empty!" });

        bool isUpdated = await DatabaseService.UpdateUser(user);

        if (isUpdated)
        {
            var gss = GotifySocketService.getInstance();
            GotifySocketService.KillAllWsThread();
            gss.Start();
        }

        return Ok(new { Message = isUpdated ? "User successfully updated!" : "User didn't updated!" });
    }

    [HttpDelete("{userId}")]
    [ServiceFilter(typeof(AuthenticationFilter))]
    public async Task<IActionResult> DeleteUser(int userId)
    {
        bool isDeleted = false;
        List<Users> userList = await DatabaseService.GetUsers();
        Users? usr = userList.Find(x => x.Uid == userId);
        if (usr != null)
            isDeleted = await usr.Delete();

        if (isDeleted)
        {
            var gss = GotifySocketService.getInstance();
            GotifySocketService.KillAllWsThread();
            gss.Start();
        }

        return Ok(new { Message = isDeleted ? "User successfully deleted!" : "User didn't deleted!" });
    }
}