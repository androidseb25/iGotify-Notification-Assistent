using iGotify_Notification_Assist.Services;
using Microsoft.OpenApi.Models;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors();

builder.Services.AddControllers(opt => { opt.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = true; })
    .AddJsonOptions(opt =>
    {
        opt.JsonSerializerOptions.PropertyNamingPolicy = null;
        opt.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
    });

builder.Services.AddSingleton(builder.Configuration);
builder.Services.AddOpenApi();

builder.Services.AddTransient<IStartupFilter, StartUpBuilder>();

var app = builder.Build();
app.UsePathBase("/api");

app.UseCors(x => x
    .WithOrigins("http://localhost:4200")
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader()
);

app.UseHttpsRedirection();

app.UseRouting();

string enableScalarUiString = Environment.GetEnvironmentVariable("ENABLES_SCALAR_UI") ?? "false";

if (enableScalarUiString == "true")
{
    app.MapOpenApi();
    app.MapScalarApiReference(options =>
    {
        options.WithTitle("iGotify Notification Assist API")
            .WithModels(false)
            .WithLayout(ScalarLayout.Classic)
            .WithTheme(ScalarTheme.Moon)
            .WithDefaultHttpClient(ScalarTarget.CSharp, ScalarClient.HttpClient);
    });
}

//app.UseEndpoints(endpoints => { endpoints.MapControllers(); });

app.MapControllers();

app.Run();