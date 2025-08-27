using System.Data;
using Dapper;
using iGotify_Notification_Assist.Models;
using Microsoft.Data.Sqlite;

namespace iGotify_Notification_Assist.Services;

public static class DatabaseService
{
    /// <summary>
    /// Create date if not exists
    /// </summary>
    /// <param name="path">db path</param>
    /// <returns></returns>
    public static bool CreateDatebase(string path)
    {
        //Create Database File
        var pathToDb = Path.Combine(path, "users.db");
        var isDbFileExists = File.Exists(pathToDb);

        if (isDbFileExists) return true;
        var connectionString = GetConnectionString.UsersDb(pathToDb);
        using var dbConnection = new SqliteConnection(connectionString);
        dbConnection.Open();

        // Create a sample table
        const string createTableQuery =
            "create table if not exists Users (Uid integer primary key, ClientToken text not null, DeviceToken text not null, Headers text not null);";
        dbConnection.Execute(createTableQuery);

        // Perform other database operations as needed

        // Close the connection when done
        dbConnection.Close();

        return true;
    }

    /// <summary>
    /// Update database
    /// </summary>
    /// <param name="path">db path</param>
    /// <param name="tableName">table which you will update</param>
    /// <param name="columnName">column that will be added</param>
    /// <param name="columnDefinition">column values e.g. text not null default ''</param>
    /// <returns></returns>
    public static bool UpdateDatebase(string path, string tableName, string columnName, string columnDefinition)
    {
        var pathToDb = Path.Combine(path, "users.db");
        var isDbFileExists = File.Exists(pathToDb);
        var isExists = false;

        if (!isDbFileExists) return isExists;
        using var dbConnection = new SqliteConnection(GetConnectionString.UsersDb(pathToDb));
        dbConnection.Open();

        // 1. Spalteninformationen abfragen
        var columns = dbConnection.Query<PragmaTableInfo>(
            $"PRAGMA table_info({tableName});");

        bool exists = columns.Any(c => string.Equals(c.Name, columnName, StringComparison.OrdinalIgnoreCase));

        // 2. Falls Spalte fehlt → hinzufügen
        if (!exists)
        {
            string sql = $"ALTER TABLE {tableName} ADD COLUMN {columnName} {columnDefinition};";
            dbConnection.Execute(sql);
        }

        return true;
    }

    /// <summary>
    /// check if user or instance exists
    /// </summary>
    /// <param name="dm"></param>
    /// <returns></returns>
    public static async Task<bool> CheckIfUserExists(DeviceModel dm)
    {
        var path = $"{GetLocationsOf.App}/data";
        //Create Database File
        var pathToDb = Path.Combine(path, "users.db");
        var isDbFileExists = File.Exists(pathToDb);
        var isExists = false;

        if (!isDbFileExists) return isExists;
        await using var dbConnection = new SqliteConnection(GetConnectionString.UsersDb(pathToDb));
        dbConnection.Open();

        // Create a sample table
        var selectQuery = $"select count(*) from Users u where u.ClientToken = '{dm.ClientToken}';";
        var id = await dbConnection.ExecuteScalarAsync<int>(selectQuery);

        isExists = id > 0;

        // Perform other database operations as needed

        // Close the connection when done
        dbConnection.Close();

        return isExists;
    }

    /// <summary>
    /// Delete user or instance by token
    /// </summary>
    /// <param name="clientToken">Clienttoken for verify the correct entry</param>
    /// <returns></returns>
    public static async Task<bool> DeleteUser(string clientToken)
    {
        var path = $"{GetLocationsOf.App}/data";
        //Create Database File
        var pathToDb = Path.Combine(path, "users.db");
        var isDbFileExists = File.Exists(pathToDb);
        var isDeleted = false;

        if (!isDbFileExists) return isDeleted;
        await using var dbConnection = new SqliteConnection(GetConnectionString.UsersDb(pathToDb));
        dbConnection.Open();

        // Create a sample table
        var deleteQuery = $"delete from Users where ClientToken = '{clientToken}';";
        var rows = await dbConnection.ExecuteAsync(deleteQuery);

        isDeleted = rows > 0;

        // Perform other database operations as needed

        // Close the connection when done
        dbConnection.Close();

        return isDeleted;
    }

    /// <summary>
    /// Update User to add custom header
    /// </summary>
    /// <param name="usr"></param>
    /// <returns></returns>
    public static async Task<bool> UpdateUser(Users usr)
    {
        var path = $"{GetLocationsOf.App}/data";
        //Create Database File
        var pathToDb = Path.Combine(path, "users.db");
        var isDbFileExists = File.Exists(pathToDb);
        var isUpdated = false;

        if (!isDbFileExists) return isUpdated;
        await using var dbConnection = new SqliteConnection(GetConnectionString.UsersDb(pathToDb));
        dbConnection.Open();

        // Create a sample table
        var updateQuery = $"UPDATE Users SET Headers = '{usr.Headers}' WHERE Uid = {usr.Uid};";
        var rows = await dbConnection.ExecuteAsync(updateQuery);

        isUpdated = rows > 0;

        // Perform other database operations as needed

        // Close the connection when done
        dbConnection.Close();

        return isUpdated;
    }

    /// <summary>
    /// Add a new entry
    /// </summary>
    /// <param name="dm"></param>
    /// <returns></returns>
    public static async Task<bool> InsertUser(DeviceModel dm)
    {
        var path = $"{GetLocationsOf.App}/data";
        //Create Database File
        var pathToDb = Path.Combine(path, "users.db");
        var isDbFileExists = File.Exists(pathToDb);
        var inserted = false;

        if (!isDbFileExists) return inserted;
        await using var dbConnection = new SqliteConnection(GetConnectionString.UsersDb(pathToDb));
        dbConnection.Open();

        // Create a sample table
        var insertQuery =
            $"insert into Users (ClientToken, DeviceToken, GotifyUrl, Headers) values ('{dm.ClientToken}', '{dm.DeviceToken}', '{dm.GotifyUrl}', '');";
        var id = await dbConnection.ExecuteAsync(insertQuery);

        inserted = id > 0;

        // Perform other database operations as needed

        // Close the connection when done
        dbConnection.Close();

        return inserted;
    }

    /// <summary>
    /// Get single User or instance by token
    /// </summary>
    /// <param name="clientToken">Clienttoken for verify the correct entry</param>
    /// <returns></returns>
    public static async Task<Users> GetUser(string clientToken)
    {
        var usr = new Users();
        var path = $"{GetLocationsOf.App}/data";
        //Create Database File
        var pathToDb = Path.Combine(path, "users.db");
        var isDbFileExists = File.Exists(pathToDb);

        if (!isDbFileExists) return usr;
        await using var dbConnection = new SqliteConnection(GetConnectionString.UsersDb(pathToDb));
        dbConnection.Open();

        // Create a sample table
        var selectUserQuery = $"SELECT * FROM Users u where u.ClientToken = '{clientToken}';";
        if (clientToken.Contains("NTFY-DEVICE-"))
            selectUserQuery = $"SELECT * FROM Users u where u.DeviceToken = '{clientToken}';";
        usr = (await dbConnection.QueryAsync<Users>(selectUserQuery)).ToList().FirstOrDefault() ?? usr;

        // Perform other database operations as needed

        // Close the connection when done
        dbConnection.Close();

        return usr;
    }

    /// <summary>
    /// Get all Users or instances in the database
    /// </summary>
    /// <returns></returns>
    public static async Task<List<Users>> GetUsers()
    {
        var userList = new List<Users>();
        var path = $"{GetLocationsOf.App}/data";
        //Create Database File
        var pathToDb = Path.Combine(path, "users.db");
        var isDbFileExists = File.Exists(pathToDb);

        if (!isDbFileExists) return userList;
        await using var dbConnection = new SqliteConnection(GetConnectionString.UsersDb(pathToDb));
        dbConnection.Open();

        // Create a sample table
        const string selectAllQuery = "SELECT * FROM Users u;";
        userList = (await dbConnection.QueryAsync<Users>(selectAllQuery)).ToList();

        // Perform other database operations as needed

        // Close the connection when done
        dbConnection.Close();

        return userList;
    }
}