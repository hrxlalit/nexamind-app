using MongoDB.Driver;
using nexamind.Data;
using nexamind.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace nexamind.BO.UserDetailRepository
{
    public class UserDetailRepository : IUserDetailRepository
    {
        private readonly INexamindDBContext _context;

        public UserDetailRepository(INexamindDBContext context)
        {
            _context = context;
        }

        //to get the list of all users
        public async Task<IEnumerable<UserDetail>> GetAllUsers()
        {
            return await _context.UserDetails.Find(_ => true).ToListAsync();
        }


        //to get the detail of a single user
        public Task<UserDetail> GetUser(string name)
        {
            FilterDefinition<UserDetail> filter = Builders<UserDetail>.Filter.Eq(m => $"{m.FirstName} {m.LastName}", name);

            return _context.UserDetails.Find(filter).FirstOrDefaultAsync();
        }

        //create a new user
        public async Task Create(UserDetail user)
        {
            try
            {
                await _context.UserDetails.InsertOneAsync(user);
            }
            catch (Exception ex)
            {
                throw new Exception("New game has not been created successfully", ex);
            }


        }

        //to update a user
        public async Task<bool> Update(UserDetail user)
        {
            ReplaceOneResult updateResult = await _context.UserDetails.ReplaceOneAsync(
            filter: g => g.Id == user.Id,
            replacement: user);

            return updateResult.IsAcknowledged && updateResult.ModifiedCount > 0;

        }

        //to delete a user
        public async Task<bool> Delete(string name)
        {
            FilterDefinition<UserDetail> filter = Builders<UserDetail>.Filter.Eq(m => $"{m.FirstName} {m.LastName}", name);

            DeleteResult deleteResult = await _context.UserDetails.DeleteOneAsync(filter);

            return deleteResult.IsAcknowledged && deleteResult.DeletedCount > 0;
        }

    }
}
