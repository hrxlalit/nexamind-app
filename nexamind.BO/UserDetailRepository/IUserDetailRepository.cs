using nexamind.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace nexamind.BO.UserDetailRepository
{
    public interface IUserDetailRepository
    {
        Task<IEnumerable<UserDetail>> GetAllUsers();

        Task<UserDetail> GetUser(string name);

        Task Create(UserDetail user);

        Task<bool> Update(UserDetail user);

        Task<bool> Delete(string name);
    }
}
