using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
public interface IUserStorage
{
  Task AddUser(User newUser);
  Task<List<User>> GetUsers(int from, int to);

  Task DeleteUser(string name, string surname);
}

public class UserStorage : IUserStorage
{
    // private static int _id = 0;
    public async Task AddUser(User newUser)
    {
        var path = $"users/{newUser.Name + " " + newUser.Surname}.json";
        await System.IO.File.WriteAllTextAsync(path, JsonSerializer.Serialize(newUser));
    }

    public async Task<List<User>> GetUsers(int from, int to)
    {
        var users = new List<User>();
        var files = System.IO.Directory.GetFiles("users");
        foreach (var file in files)
        {
            var user = JsonSerializer.Deserialize<User>(await System.IO.File.ReadAllTextAsync(file));
            users.Add(user);
        }

        var usersInRange = users.Skip(from).Take(to - from).ToList();
        return usersInRange;
    }

    public async Task DeleteUser(string name, string surname)
    {
        // get user from users/{userId}.json
        try
        {
            // var user = await System.IO.File.ReadAllTextAsync($"users/{name + " " + surname}.json");

            // delete user from users/{userId}.json
            System.IO.File.Delete($"../server/users/{name + " " + surname}.json");
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
    } 
}