using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WahidRiceTradingAPI.Context;
using WahidRiceTradingAPI.Helper;
using WahidRiceTradingAPI.Models;
using WahidRiceTradingAPI.Models.ViewModels;
using WahidRiceTradingAPI.Services;

namespace WahidRiceTradingAPI.Controllers.Account
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAllUsers()
        {
               var users = await _userService.GetAllUsersAsync();
            return Ok(users);
        }

        // GET: api/users/1
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUserById(int id)
        {
            var user = await _userService.GetUserByIdAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        // POST: api/users
        [HttpPost("login")]
        public async Task<ActionResult<ApiResponse<User>>> Login(AdminLoginVM userVM)
        {
            var user = await _userService.Login(userVM);
            if(user == null)
            {
                return ApiResponseFactory.RecordNotFound<User>();
            }

            return ApiResponseFactory.Success(user);
        }

        // POST: api/users
        [HttpPost]
        public async Task<ActionResult<User>> CreateUser(User user)
        {
            var createdUser = await _userService.CreateUserAsync(user);

            return CreatedAtAction(nameof(GetUserById), new { id = createdUser.UserID }, createdUser);
        }

        // PUT: api/users/1
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, User user)
        {
            if (id != user.UserID)
            {
                return BadRequest();
            }

            var updated = await _userService.UpdateUserAsync(id, user);
            
            if (!updated)
            {
                return NotFound();
            }

            return NoContent();
        }

        // DELETE: api/users/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var deleted = await _userService.DeleteUserAsync(id);

            if (!deleted)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}