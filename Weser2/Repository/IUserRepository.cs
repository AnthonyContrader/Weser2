using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Weser2.Models;

namespace Weser2.Repository
{
    public interface IUserRepository
    {
        IEnumerable<User> GetUsers();
        User GetUserByID(int Id);
        void InsertUser(User user);
        void DeleteUser(int Id);
        void UpdateUser(User user);
        void Save();
    }
}
