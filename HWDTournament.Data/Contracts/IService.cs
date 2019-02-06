using System;
using System.Collections.Generic;
using System.Text;
using HWBTournament.Data;
using HWBTournament.Model;
using HWBTournament.Data.Services;
using System.Threading.Tasks;
using HWBTournament.Model.Entities;

namespace HWBTournament.Data.Contracts
{
    public interface IService
    {
    }


    public interface IEncryptionService
    {
        /// <summary>
        /// Creates a random salt
        /// </summary>
        /// <returns></returns>
        string CreateSalt();
        /// <summary>
        /// Generates a Hashed password
        /// </summary>
        /// <param name="password"></param>
        /// <param name="salt"></param>
        /// <returns></returns>
        string EncryptPassword(string password, string salt);
    }

    public interface IMembershipService
    {
        MembershipContext ValidateUser(string username, string password);
        user CreateUser(/*string username, string email, string password*/user objuser, int[] roles);
        user GetUser(int userId);
        List<role> GetUserRoles(string username);
    }
}
