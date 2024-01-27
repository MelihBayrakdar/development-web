using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
public interface IUserStorage
{
  Task AddUser(User newUser);
  Task<ICollection<User>> GetUsers(int from, int to);

  Task DeleteUser(string name, string surname);
}

public class UserStorage : IUserStorage
{
    public async Task AddUser(User newUser)
    {
        var path = $"users/{newUser.Name + " " + newUser.Surname}.json";
        await System.IO.File.WriteAllTextAsync(path, JsonSerializer.Serialize(newUser));
    }

    public async Task<ICollection<User>> GetUsers(int from, int to)
    {
        throw new NotImplementedException();
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