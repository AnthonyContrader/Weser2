using Microsoft.AspNetCore.Mvc;
using Weser2.Models;
using System;
using System.Collections.Generic;
using System.Transactions;
using Weser2.Repository;

namespace Weser2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var users = _userRepository.GetUsers();
            return new OkObjectResult(users);
        }

        [HttpGet("{Id}", Name = "Get")]
        public IActionResult Get(int Id)
        {
            var user = _userRepository.GetUserByID(Id);
            return new OkObjectResult(user);
        }

        [HttpPost]
        public IActionResult Post([FromBody] User user)
        {
            using (var scope = new TransactionScope())
            {
                _userRepository.InsertUser(user);
                scope.Complete();
                return CreatedAtAction(nameof(Get), new { id = user.Id }, user);
            }
        }

        [HttpPut]
        public IActionResult Put([FromBody] User user)
        {
            if (user != null)
            {
                using (var scope = new TransactionScope())
                {
                    _userRepository.UpdateUser(user);
                    scope.Complete();
                    return new OkResult();
                }
            }
            return new NoContentResult();
        }

        [HttpDelete("{Id}")]
        public IActionResult Delete(int Id)
        {
            _userRepository.DeleteUser(Id);
            return new OkResult();
        }
    }
}

