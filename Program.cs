using iGotify_Notification_Assist.Services;
using Microsoft.AspNetCore.Http.Json;
using Scalar.AspNetCore;
using Environments = iGotify_Notification_Assist.Services.Environments;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors();

builder.Services.AddControllers(opt => { opt.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = true; })
    .AddJsonOptions(opt =>
    {
        opt.JsonSerializerOptions.PropertyNamingPolicy = null;
        opt.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
    });
builder.Services.Configure<JsonOptions>(options =>
{
    options.SerializerOptions.PropertyNameCaseInsensitive = true; // Enable case-insensitivity
    options.SerializerOptions.PropertyNamingPolicy = null; // Preserve exact casing
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

if (Environments.enableScalarUi)
{
    app.MapOpenApi();
    app.MapScalarApiReference(options =>
    {
        options.WithTitle("iGotify Notification Assist API")
            .HideModels()
            .WithClassicLayout()
            .WithTheme(ScalarTheme.Default)
            .WithDefaultHttpClient(ScalarTarget.CSharp, ScalarClient.HttpClient);
    });
}

//app.UseEndpoints(endpoints => { endpoints.MapControllers(); });

app.MapControllers();

app.Run();