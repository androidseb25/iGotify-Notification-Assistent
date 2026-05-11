namespace iGotify_Notification_Assist.Services;

internal static class AppLog
{
    public static void Info(string area, string message)
    {
        Write("INFO", area, message);
    }

    public static void Warn(string area, string message)
    {
        Write("WARN", area, message);
    }

    public static void Error(string area, string message, Exception? exception = null)
    {
        Write("ERROR", area, exception == null ? message : $"{message} ({exception.GetType().Name}: {exception.Message})");
    }

    public static void Debug(string area, string message)
    {
        Write("DEBUG", area, message);
    }

    public static string MaskSecret(string? value)
    {
        if (string.IsNullOrWhiteSpace(value))
            return "<empty>";

        var trimmed = value.Trim();
        if (trimmed.Length <= 8)
            return "****";

        return $"{trimmed[..4]}...{trimmed[^4..]}";
    }

    public static string SafeUrl(string? value)
    {
        if (string.IsNullOrWhiteSpace(value))
            return "<empty>";

        var normalized = value.Trim().Trim('"');
        if (!normalized.StartsWith("http://", StringComparison.OrdinalIgnoreCase) &&
            !normalized.StartsWith("https://", StringComparison.OrdinalIgnoreCase))
        {
            normalized = $"https://{normalized}";
        }

        return Uri.TryCreate(normalized, UriKind.Absolute, out var uri)
            ? uri.GetLeftPart(UriPartial.Authority)
            : "<invalid-url>";
    }

    private static void Write(string level, string area, string message)
    {
        if (!Environments.isLogEnabled)
            return;

        Console.WriteLine($"[{level}] [{area}] {message}");
    }
}
