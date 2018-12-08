using Microsoft.Extensions.Options;
using MongoDB.Driver;
using nexamind.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace nexamind.Data
{
    public class NexamindDBContext : INexamindDBContext
    {

        private readonly IMongoDatabase _db;
        public NexamindDBContext (IOptions<Settings> options)
        {
            var client = new MongoClient(options.Value.ConnectionString);
            _db = client.GetDatabase(options.Value.Database);
        }


        //To store the detail of a user
        public IMongoCollection<UserDetail> UserDetails => _db.GetCollection<UserDetail>("UserDetails");
    }
}
