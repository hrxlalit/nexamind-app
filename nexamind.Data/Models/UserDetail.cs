using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace nexamind.Data.Models
{
    public class UserDetail
    {
        [BsonId]
        public ObjectId Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string CountryDialingCode { get; set; }

        public string PhoneNumber { get; set; }

        public string AddressLine1 { get; set; }

        public string AddressLine2 { get; set; }

        public string City { get; set; }

        public string ZipCode { get; set; }

        public string State { get; set; }

        public string Country { get; set; }

        public DateTime CreatedDate { get; set; }

        public ObjectId CreatedBy { get; set; }

        public DateTime ModifiedDate { get; set; }

        public ObjectId ModifiedBy { get; set; }

        public bool IsActive { get; set; }
    }
}
