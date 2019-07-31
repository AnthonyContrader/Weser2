using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Weser2.Enumeration;
using Weser2.Models;

namespace Weser2.DBContexts
{
    public class WeserContext : DbContext
    {
        public WeserContext(DbContextOptions<WeserContext> options) : base(options)
        {
        }
        public DbSet<User> User { get; set; }
        public DbSet<Emergency> Emergency { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = 1,
                    Username = "admin",
                    Password = "admin",
                    Email = "admin@localhost",
                    Authorities = Authorities.ROLE_ADMIN,
                },
                new User
                {
                    Id = 2,
                    Username = "device",
                    Password = "device",
                    Email = "device@localhost",
                    Authorities = Authorities.ROLE_DEVICE,
                },
                new User
                {
                    Id = 3,
                    Username = "doctor",
                    Password = "doctor",
                    Email = "doctor@localhost",
                    Authorities = Authorities.ROLE_DOCTOR,
                },
                 new User
                 {
                     Id = 4,
                     Username = "tutor",
                     Password = "tutor",
                     Email = "tutor@localhost",
                     Authorities = Authorities.ROLE_TUTOR,
                 }
            );

            modelBuilder.Entity<Emergency>().HasData(
             

            );
        }
    }
}






