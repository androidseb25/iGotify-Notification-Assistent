
using System.Net.WebSockets;
using iGotify_Notification_Assist;
using Microsoft.OpenApi.Models;

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
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "iGotify Notification Assist API", Version = "v1" });
});

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

// Enable middleware to serve generated Swagger as a JSON endpoint.
app.UseSwagger(c => { c.RouteTemplate = "/swagger/{documentName}/swagger.json"; });

// Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
// specifying the Swagger JSON endpoint.
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/api/swagger/v1/swagger.json", "iGotify Notification Assist API");
    c.RoutePrefix = string.Empty;
    c.DefaultModelsExpandDepth(-1);
});

//app.UseEndpoints(endpoints => { endpoints.MapControllers(); });

app.MapControllers();

app.Run();