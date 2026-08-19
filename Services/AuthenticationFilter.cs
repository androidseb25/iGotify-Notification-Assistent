using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace iGotify_Notification_Assist.Services;

public class AuthenticationFilter : IAsyncActionFilter, IAsyncAuthorizationFilter
{
    private string? token = "";

    public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
    {
        //Console.WriteLine(token);
        await next();
    }

    public void OnActionExecuted(ActionExecutedContext context)
    {
        // our code after action executes
    }

    public async Task OnAuthorizationAsync(AuthorizationFilterContext context)
    {
        var auth = context.HttpContext.Request.Headers.Authorization;

        if (auth.ToString().Length > 0 && auth.ToString().Contains("Bearer"))
        {
            var cleared = auth.ToString().Replace("Bearer ", "");
            token = cleared;
            var result = PasswordGenerator.IsValid(token);
            if (!result)
                context.Result = new UnauthorizedResult();
        }
        else
        {
            context.Result = new UnauthorizedResult();
        }
    }
}