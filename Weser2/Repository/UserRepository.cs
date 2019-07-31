using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Weser2.DBContexts;
using Weser2.Models;

namespace Weser2.Repository
{
    public class UserRepository : IUserRepository 
    {
        private readonly WeserContext _dbContext;

        public UserRepository(WeserContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void DeleteUser(int Id)
        {
            var user = _dbContext.User.Find(Id);
            _dbContext.User.Remove(user);
            Save();
        }

        public User GetUserByID(int Id)
        {
            return _dbContext.User.Find(Id);
        }

        public IEnumerable<User> GetUsers()
        {
            return _dbContext.User.ToList();
        }

        public void InsertUser(User user)
        {
            _dbContext.Add(user);
            Save();
        }

        public void Save()
        {
            _dbContext.SaveChanges();
        }

        public void UpdateUser(User user)
        {
            _dbContext.Entry(user).State = EntityState.Modified;
            Save();
        }

    }
}
