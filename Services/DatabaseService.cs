using System.Data;
using Dapper;
using iGotify_Notification_Assist.Models;
using Microsoft.Data.Sqlite;

namespace iGotify_Notification_Assist.Services;

public class DatabaseService
{
    public static bool CreateDatebase(string path)
    {
        //Create Database File
        string pathToDb = Path.Combine(path, "users.db");
        bool isDbFileExists = File.Exists(pathToDb);

        if (!isDbFileExists)
        {
            string? connectionString = GetConnectionString.UsersDb(pathToDb);
            using (IDbConnection dbConnection = new SqliteConnection(connectionString))
            {
                dbConnection.Open();

                // Create a sample table
                string createTableQuery = "create table if not exists Users (Uid integer primary key, ClientToken text not null, DeviceToken text not null, GotifyUrl text not null);";
                dbConnection.Execute(createTableQuery);

                // Perform other database operations as needed

                // Close the connection when done
                dbConnection.Close();
            }
        }
        
        return true;
    }

    public static async Task<bool> CheckIfUserExists(DeviceModel dm)
    {
        string path = $"{GetLocationsOf.App}/data";
        //Create Database File
        string pathToDb = Path.Combine(path, "users.db");
        bool isDbFileExists = File.Exists(pathToDb);
        bool isExists = false;
        
        if (isDbFileExists)
        {
            using (IDbConnection dbConnection = new SqliteConnection(GetConnectionString.UsersDb(pathToDb)))
            {
                dbConnection.Open();

                // Create a sample table
                string selectQuery = $"select count(*) from Users u where u.ClientToken = '{dm.ClientToken}';";
                var id = await dbConnection.ExecuteScalarAsync<dynamic>(selectQuery);

                isExists = id > 0;
                
                // Perform other database operations as needed

                // Close the connection when done
                dbConnection.Close();
            }
        }
        
        return isExists;
    }

    public static async Task<bool> DeleteUser(string clientToken)
    {
        string path = $"{GetLocationsOf.App}/data";
        //Create Database File
        string pathToDb = Path.Combine(path, "users.db");
        bool isDbFileExists = File.Exists(pathToDb);
        bool isDeleted = false;
        
        if (isDbFileExists)
        {
            using (IDbConnection dbConnection = new SqliteConnection(GetConnectionString.UsersDb(pathToDb)))
            {
                dbConnection.Open();

                // Create a sample table
                string deleteQuery = $"delete from Users where ClientToken = '{clientToken}';";
                var rows = await dbConnection.ExecuteAsync(deleteQuery);

                isDeleted = rows > 0;
                
                // Perform other database operations as needed

                // Close the connection when done
                dbConnection.Close();
            }
        }
        
        return isDeleted;
    }

    public static async Task<bool> InsertUser(DeviceModel dm)
    {
        string path = $"{GetLocationsOf.App}/data";
        //Create Database File
        string pathToDb = Path.Combine(path, "users.db");
        bool isDbFileExists = File.Exists(pathToDb);
        bool inserted = false;
        
        if (isDbFileExists)
        {
            using (IDbConnection dbConnection = new SqliteConnection(GetConnectionString.UsersDb(pathToDb)))
            {
                dbConnection.Open();

                // Create a sample table
                string insertQuery = $"insert into Users (ClientToken, DeviceToken, GotifyUrl) values ('{dm.ClientToken}', '{dm.DeviceToken}', '{dm.GotifyUrl}');";
                var id = await dbConnection.ExecuteAsync(insertQuery);

                inserted = id > 0;
                
                // Perform other database operations as needed

                // Close the connection when done
                dbConnection.Close();
            }
        }
        
        return inserted;
    }

    public static async Task<Users> GetUser(string clientToken)
    {
        Users usr = new Users();
        string path = $"{GetLocationsOf.App}/data";
        //Create Database File
        string pathToDb = Path.Combine(path, "users.db");
        bool isDbFileExists = File.Exists(pathToDb);
        
        if (isDbFileExists)
        {
            using (IDbConnection dbConnection = new SqliteConnection(GetConnectionString.UsersDb(pathToDb)))
            {
                dbConnection.Open();

                // Create a sample table
                string selectUserQuery = $"SELECT * FROM Users u where u.ClientToken = '{clientToken}';";
                if (clientToken.Contains("NTFY-DEVICE-"))
                    selectUserQuery = $"SELECT * FROM Users u where u.DeviceToken = '{clientToken}';";
                usr = (await dbConnection.QueryAsync<Users>(selectUserQuery)).ToList().FirstOrDefault() ?? usr;

                // Perform other database operations as needed

                // Close the connection when done
                dbConnection.Close();
            }
        }

        return usr;
    }

    public static async Task<List<Users>> GetUsers()
    {
        List<Users> userList = new List<Users>();
        string path = $"{GetLocationsOf.App}/data";
        //Create Database File
        string pathToDb = Path.Combine(path, "users.db");
        bool isDbFileExists = File.Exists(pathToDb);
        
        if (isDbFileExists)
        {
            using (IDbConnection dbConnection = new SqliteConnection(GetConnectionString.UsersDb(pathToDb)))
            {
                dbConnection.Open();

                // Create a sample table
                string selectAllQuery = "SELECT * FROM Users u;";
                userList = (await dbConnection.QueryAsync<Users>(selectAllQuery)).ToList();

                // Perform other database operations as needed

                // Close the connection when done
                dbConnection.Close();
            }
        }

        return userList;
    }
}