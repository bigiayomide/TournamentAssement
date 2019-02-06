using HWBTournament.Model;
using System.Collections.Generic;
using HWBTournament.Data.Contracts;
using HWBTournament.Data.Services;
using System;
using System.Security.Principal;
using System.Security.Cryptography;
using System.Text;
using System.Linq;
using HWBTournament.Model.Entities;
using HWBTournament.Data.Repositories;

namespace HWBTournament.Data.Repositories
{
    public class UserRepository : EntityBaseRepository<user>, IUserRepository
    {
        #region Variables
        // IRoleRepository _roleReposistory;      
        IRoleRepository _roleRepository;
        IUserRoleRepository _userRoleRepository;
        IEncryptionService _encryptionService;
        #endregion

        public UserRepository(HWBTournamentContext context, IRoleRepository roleRepository, IUserRoleRepository userRoleRepository, IEncryptionService encryptionService)
            : base(context)
        {
            _roleRepository = roleRepository;
            _userRoleRepository = userRoleRepository;
            _encryptionService = encryptionService;
        }

        public MembershipContext ValidateUser(string username, string password)
        {
            var membershipCtx = new MembershipContext();

            var newuser = GetSingleByUsername(username);
            if (newuser != null && isUserValid(newuser, password))
            {
                var userRoles = GetUserRoles(newuser.username);
                membershipCtx.objuser = newuser;

                var identity = new GenericIdentity(newuser.username);
                membershipCtx.Principal = new GenericPrincipal(
                    identity,
                    userRoles.Select(x => x.description).ToArray());
            }

            return membershipCtx;
        }

        public user CreateUser(user newuser, int[] roles)
        {
            //try
            //{           
            var existingUser = GetSingleByUsername(newuser.username);

            if (existingUser != null)
            {
                return null;
            }

            var passwordSalt = CreateSalt();

            user _newUser = new user
            {
                hashed_password = EncryptPassword(newuser.hashed_password, passwordSalt),
                username = newuser.username,
                salt = passwordSalt,
                date_created = DateTime.Now,
                isactive = true,
                date_updated = DateTime.Now
            };

            Add(_newUser);

            Commit();
            user createduser = GetSingleByUsername(newuser.username);
            if (roles != null || roles.Length > 0)
            {
                foreach (var role in roles)
                {
                    addUserToRole(createduser, role);
                }
            }

            Commit();

            return createduser;
            //}
            //catch (Exception ex)
            //{
            //    return null;
            //}
        }

        public user GetSingleByUsername(string username)
        {
            return this.GetSingle(x => x.username == username);
        }

        public IEnumerable<role> GetUserRoles(string username)
        {
            List<role> _roles = null;

            user _user = this.GetSingle(u => u.username == username, u => u.userroles);
            if (_user != null)
            {
                _roles = new List<role>();
                foreach (var _userRole in _user.userroles)
                    _roles.Add(_roleRepository.GetSingle(_userRole.roleid));
            }

            return _roles;
        }

        public user UpdateUserPasswordUser(user updateuser)
        {
            var existingUser = GetSingleByUsername(updateuser.username);

            if (existingUser == null)
            {
                return null;
            }

            var passwordSalt = CreateSalt();

            existingUser.salt = passwordSalt;
            existingUser.hashed_password = EncryptPassword(updateuser.hashed_password, passwordSalt);
            existingUser.date_updated = DateTime.Now;
            this.Update(existingUser);
            Commit();
            return existingUser;
        }

        #region Helper methods
        private void addUserToRole(user _newuser, int roleId)
        {
            var role = _roleRepository.GetSingle(roleId);
            if (role == null)
                throw new Exception("Role doesn't exist.");

            var userRole = new userrole()
            {
                roleid = role.Id,
                userid = _newuser.Id,
                isactive = true,
                date_created = DateTime.Now,
                date_updated = DateTime.Now
            };
            _userRoleRepository.Add(userRole);

            Commit();
        }

        private bool isPasswordValid(user newuser, string password)
        {
            return string.Equals(_encryptionService.EncryptPassword(password, newuser.salt), newuser.hashed_password);
        }

        private bool isUserValid(user newuser, string password)
        {
            if (isPasswordValid(newuser, password))
            {
                return newuser.isactive;
            }

            return false;
        }
        public string CreateSalt()
        {
            var data = new byte[0x10];

            var cryptoServiceProvider = System.Security.Cryptography.RandomNumberGenerator.Create();
            cryptoServiceProvider.GetBytes(data);
            return Convert.ToBase64String(data);
        }

        public string EncryptPassword(string password, string salt)
        {
            using (var sha256 = SHA256.Create())
            {
                var saltedPassword = string.Format("{0}{1}", salt, password);
                byte[] saltedPasswordAsBytes = Encoding.UTF8.GetBytes(saltedPassword);
                return Convert.ToBase64String(sha256.ComputeHash(saltedPasswordAsBytes));
            }
        }
        #endregion
    }
}
