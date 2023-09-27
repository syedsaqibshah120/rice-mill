using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using WahidRiceTradingAPI.Context;
using WahidRiceTradingAPI.Models;
namespace WahidRiceTradingAPI.Context
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using var context = new ApplicationDbContext(
                serviceProvider.GetRequiredService<DbContextOptions<ApplicationDbContext>>());

            // Check if there are any existing users
            if (context.Users.Any())
            {
                return; // Database has been seeded
            }

            // Create an administrator user
            var adminUser = new User
            {
                FirstName = "Admin",
                LastName = "User",
                UserName = "admin",
                Password = "admin123" // You should hash the password in a real application
            };

            context.Users.Add(adminUser);
            context.SaveChanges();
        }
    }
}
