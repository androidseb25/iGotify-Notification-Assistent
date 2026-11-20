using System.Net;
using System.Text.Json;

namespace iGotify_Notification_Assist.Services;

public sealed class GotifyRegistration(HttpClient httpClient)
{
    public async Task<string?> VerifyAsync(string gotifyUrl, string clientToken, CancellationToken cancellationToken)
    {
        if (!TryNormalizeUrl(gotifyUrl, allowMissingScheme: true, out var target) ||
            string.IsNullOrWhiteSpace(clientToken) || clientToken.Any(c => c is < '!' or > '~'))
            return null;

        var entries = Environments.gotifyRegistrationUrls.Split(';',
            StringSplitOptions.TrimEntries | StringSplitOptions.RemoveEmptyEntries);
        foreach (var entry in entries)
        {
            var urls = entry.Split('|', StringSplitOptions.TrimEntries);
            if (urls.Length > 2 ||
                !TryNormalizeUrl(urls[0], allowMissingScheme: false, out var appUrl) ||
                !SameUrl(target, appUrl))
                continue;

            var validationUrl = appUrl;
            if (urls.Length == 2 && !TryNormalizeUrl(urls[1], allowMissingScheme: false, out validationUrl))
                return null;

            return await IsTokenValidAsync(validationUrl, clientToken, cancellationToken)
                ? appUrl.AbsoluteUri.TrimEnd('/')
                : null;
        }

        return null;
    }

    private async Task<bool> IsTokenValidAsync(Uri validationUrl, string clientToken, CancellationToken cancellationToken)
    {
        try
        {
            var currentUserUrl = validationUrl.AbsoluteUri.TrimEnd('/') + "/current/user";
            using var request = new HttpRequestMessage(HttpMethod.Get, currentUserUrl);
            request.Headers.Add("X-Gotify-Key", clientToken);

            using var response = await httpClient.SendAsync(request, cancellationToken);
            if (response.StatusCode != HttpStatusCode.OK ||
                !string.Equals(response.Content.Headers.ContentType?.MediaType, "application/json",
                    StringComparison.OrdinalIgnoreCase))
                return false;

            using var json = await JsonDocument.ParseAsync(
                await response.Content.ReadAsStreamAsync(cancellationToken), cancellationToken: cancellationToken);
            return json.RootElement.ValueKind == JsonValueKind.Object &&
                   json.RootElement.TryGetProperty("id", out var id) &&
                   id.ValueKind == JsonValueKind.Number && id.TryGetInt64(out var userId) && userId > 0;
        }
        catch (HttpRequestException)
        {
            return false;
        }
        catch (OperationCanceledException) when (!cancellationToken.IsCancellationRequested)
        {
            return false;
        }
        catch (JsonException)
        {
            return false;
        }
    }

    private static bool TryNormalizeUrl(string value, bool allowMissingScheme, out Uri uri)
    {
        uri = null!;
        value = value.Trim();
        if (value.Contains('?') || value.Contains('#'))
            return false;

        if (allowMissingScheme && !value.Contains("://", StringComparison.Ordinal))
            value = "https://" + value;

        if (!Uri.TryCreate(value, UriKind.Absolute, out var parsed) ||
            parsed.Scheme is not ("http" or "https") ||
            !string.IsNullOrEmpty(parsed.UserInfo) ||
            !string.IsNullOrEmpty(parsed.Query) ||
            !string.IsNullOrEmpty(parsed.Fragment))
            return false;

        uri = parsed;
        return true;
    }

    private static bool SameUrl(Uri left, Uri right) =>
        string.Equals(left.Scheme, right.Scheme, StringComparison.OrdinalIgnoreCase) &&
        string.Equals(left.IdnHost, right.IdnHost, StringComparison.OrdinalIgnoreCase) &&
        left.Port == right.Port &&
        string.Equals(left.GetComponents(UriComponents.Path, UriFormat.UriEscaped).TrimEnd('/'),
            right.GetComponents(UriComponents.Path, UriFormat.UriEscaped).TrimEnd('/'), StringComparison.Ordinal);

}
