using Microsoft.EntityFrameworkCore;
using WahidRiceTradingAPI.Context;
using WahidRiceTradingAPI.Models;
using WahidRiceTradingAPI.Models.ViewModels;

namespace WahidRiceTradingAPI.Services
{
    public interface IUserService
    {
        Task<IEnumerable<User>> GetAllUsersAsync();
        Task<User> GetUserByIdAsync(int userId);
        Task<User> Login(AdminLoginVM user);
        Task<User> CreateUserAsync(User user);
        Task<bool> UpdateUserAsync(int userId, User user);
        Task<bool> DeleteUserAsync(int userId);
    }
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _context;
        public UserService(ApplicationDbContext context) {

            _context = context;
        }

        public async Task<IEnumerable<User>> GetAllUsersAsync()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<User> GetUserByIdAsync(int userId)
        {
            return await _context.Users.FindAsync(userId);
        }

        public async Task<User> Login(AdminLoginVM user)
        {
            return await _context.Users.Where(x => x.UserName == user.UserName && x.Password == user.Password).FirstOrDefaultAsync();
        }

        public async Task<User> CreateUserAsync(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<bool> UpdateUserAsync(int userId, User user)
        {
            var existingUser = await _context.Users.FindAsync(userId);

            if (existingUser == null)
            {
                return false; // User not found
            }

            existingUser.FirstName = user.FirstName;
            existingUser.LastName = user.LastName;
            existingUser.UserName = user.UserName;
            existingUser.Password = user.Password;
            _context.Users.Update(existingUser);

            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteUserAsync(int userId)
        {
            var user = await _context.Users.FindAsync(userId);

            if (user == null)
            {
                return false; // User not found
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
