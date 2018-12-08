using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using nexamind.BO.UserDetailRepository;
using nexamind.Data.Models;

namespace nexamind_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserDetailRepository _userDetailRepository;

        public UserController(IUserDetailRepository userDetailRepository)
        {
            _userDetailRepository = userDetailRepository;
        }



        [HttpGet("All")]
        public async Task<IActionResult> Get()
        {
            return new ObjectResult(await _userDetailRepository.GetAllUsers());
        }


        [HttpGet("Get")]
        public async Task<IActionResult> Get(string name)
        {
            var user = await _userDetailRepository.GetUser(name);

            if (user == null)
            {
                return new NotFoundResult();
            }

            return new ObjectResult(user);
        }

        [HttpPost("Create")]
        public async Task<IActionResult> CreateUser([FromBody]UserDetail user)
        {
            await _userDetailRepository.Create(user);
            return new OkObjectResult(user);
        }

        [HttpPut("Update")]
        public async Task<IActionResult> Update(string name, [FromBody]UserDetail user)
        {
            var userFromDb = await _userDetailRepository.GetUser(name);

            if (userFromDb == null)
            {
                return new NotFoundResult();
            }

            user.Id = userFromDb.Id;
            await _userDetailRepository.Update(user);

            return new OkObjectResult(user);
        }

        [HttpDelete("Delete")]
        public async Task<IActionResult> Delete(string name)
        {
            var gameFromDb = await _userDetailRepository.GetUser(name);

            if (gameFromDb == null)
            {
                return new NotFoundResult();
            }

            await _userDetailRepository.Delete(name);

            return new OkResult();
        }
    }
}