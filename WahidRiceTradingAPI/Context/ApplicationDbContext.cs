using Microsoft.EntityFrameworkCore;
using WahidRiceTradingAPI.Models;

namespace WahidRiceTradingAPI.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
       : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}
