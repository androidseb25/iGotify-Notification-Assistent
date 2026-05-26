using System.Security.Cryptography;
using Microsoft.AspNetCore.Identity;

namespace iGotify_Notification_Assist.Services;

public class PasswordGenerator
{
    public static void EnsurePasswordExists()
    {
        var path = $"{GetLocationsOf.App}/data/secure";
        //Create Database File
        var passwordFile = Path.Combine(path, "api-password.hash");
        Directory.CreateDirectory(Path.GetDirectoryName(passwordFile)!);
        if (File.Exists(passwordFile))
            return;

        var password = GenerateSecurePassword();
        var hasher = new PasswordHasher<string>();
        var hash = hasher.HashPassword("api", password);
        File.WriteAllText(passwordFile, hash);
        AppLog.Info("PG", "====================================================");
        AppLog.Info("PG", "Initial API password generated:");
        AppLog.Info("PG", $"{password}");
        AppLog.Info("PG", "Please save this password. It will not be shown again.");
        AppLog.Info("PG", "====================================================");
    }

    public static bool IsValid(string password)
    {
        var path = $"{GetLocationsOf.App}/data/secure";
        //Create Database File
        var passwordFile = Path.Combine(path, "api-password.hash");
        if (!File.Exists(passwordFile))
            return false;

        var hash = File.ReadAllText(passwordFile);
        var hasher = new PasswordHasher<string>();
        var result = hasher.VerifyHashedPassword("api", hash, password);
        return result == PasswordVerificationResult.Success || result == PasswordVerificationResult.SuccessRehashNeeded;
    }

    private static string GenerateSecurePassword(int length = 32)
    {
        const string chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@$%_-";
        var bytes = RandomNumberGenerator.GetBytes(length);
        return new string(bytes.Select(b => chars[b % chars.Length]).ToArray());
    }
}