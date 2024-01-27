using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;


public record User(string Name, string Surname, string StudyPoints);

[Route("exam")]
public class UserController : Controller
{
    readonly IUserStorage _userStorage;
    public UserController()
    {
        _userStorage = new UserStorage();
    }

    // [HttpGet("add")]
    // GET http://localhost:5000/exam/add?a=5&b=3
    // public async Task<IActionResult> getUser([FromQuery] int from, [FromQuery] int to)
    // {
        
    // }

    [HttpGet("users")]
    // - GET the users from 100 to 200 with a paginated endpoint
    public async Task<IActionResult> getUsers([FromQuery] int from, [FromQuery] int to)
    {
        var users = await _userStorage.GetUsers(from, to);
        return Ok(users);
    }
    
    // POST http://localhost:5000/exam/createStudent
    [HttpPost("createStudent")]
    public async Task<IActionResult> createStudent([FromBody] User newUser)
    {
        
        _userStorage.AddUser(newUser);
        return Ok();
    }
    
    [HttpDelete("deleteStudent")]
    public async Task<IActionResult> deleteStudent([FromQuery] string name, string surname)
    {
        _userStorage.DeleteUser(name, surname);
        return Ok();
    }
}

