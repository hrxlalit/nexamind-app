using MongoDB.Driver;
using nexamind.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace nexamind.Data
{
    public interface INexamindDBContext
    {
        IMongoCollection<UserDetail> UserDetails { get; }
    }
}
