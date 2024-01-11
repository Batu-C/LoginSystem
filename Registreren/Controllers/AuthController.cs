// Controllers/AuthController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

[Route("api/auth")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;

    public AuthController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] User user)
    {
        if (user == null)
            return BadRequest("Invalid data");

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return Ok("Registration successful");
    }
[HttpPost("login")]
public IActionResult Login([FromBody] UserCredentials credentials)
{
    if (credentials == null)
        return BadRequest("Invalid data");

    // Zoek de gebruiker in de database op basis van de verstrekte naam
    var user = _context.Users.FirstOrDefault(u => u.Naam == credentials.Naam);

    // Controleer of de gebruiker is gevonden en het wachtwoord overeenkomt
    if (user != null && user.Wachtwoord == credentials.Wachtwoord)
    {
        // Inloggen is succesvol
        return Ok("Login successful");
    }
    else
    {
        // Inloggen is mislukt
        return BadRequest("Invalid credentials");
    }
}

}