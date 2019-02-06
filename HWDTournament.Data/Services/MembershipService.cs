using HWBTournament.Data.Contracts;
using HWBTournament.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;

namespace HWBTournament.Data.Services
{
    public class MembershipService : IMembershipService
    {
        #region Variables

        private readonly IUserRepository _userRepository;
        private readonly IRoleRepository _roleRepository;
        private readonly IUserRoleRepository _userRoleRepository;
        private readonly IEncryptionService _encryptionService;
        #endregion
        public MembershipService(IUserRepository userRepository, IRoleRepository roleRepository, IUserRoleRepository userRoleRepository, IEncryptionService encryptionService)
        {
            //  _userRepository = userRepository;
            _userRepository = userRepository;
            _roleRepository = roleRepository;
            _userRoleRepository = userRoleRepository;
            _encryptionService = encryptionService;
        }

        #region IMembershipService Implementation

        public MembershipContext ValidateUser(string username, string password)
        {
            var membershipCtx = new MembershipContext();

            var user = _userRepository.GetSingleByUsername(username);
            if (user != null && isUserValid(user, password))
            {
                var userRoles = GetUserRoles(user.username);
                membershipCtx.objuser = user;

                var identity = new GenericIdentity(user.username);
                membershipCtx.Principal = new GenericPrincipal(identity, userRoles.Select(x => x.description).ToArray());
            }

            return membershipCtx;
        }
        public user CreateUser(user objuser, int[] roles)
        {
            var existingUser = _userRepository.GetSingleByUsername(objuser.username);

            if (existingUser != null)
            {
                throw new Exception("Username is already in use");
            }

            var passwordSalt = _encryptionService.CreateSalt();

            user _newuser = new user
            {
                salt = passwordSalt,
                hashed_password = _encryptionService.EncryptPassword(objuser.hashed_password, passwordSalt)
            };

            _userRepository.Add(objuser);

            _userRepository.Commit();

            if (roles != null || roles.Length > 0)
            {
                foreach (var role in roles)
                {
                    addUserToRole(objuser, role);
                }
            }

            _userRepository.Commit();

            return objuser;
        }

        public user GetUser(int userId)
        {
            return _userRepository.GetSingle(userId);
        }

        public List<role> GetUserRoles(string username)
        {
            List<role> _result = new List<role>();

            var existingUser = _userRepository.GetSingleByUsername(username);

            if (existingUser != null)
            {
                foreach (var userRole in existingUser.userroles)
                {
                    _result.Add(userRole.role);
                }
            }

            return _result.Distinct().ToList();
        }
        #endregion

        #region Helper methods
        private void addUserToRole(user user, int roleId)
        {
            var role = _roleRepository.GetSingle(roleId);
            if (role == null)
                throw new Exception("Role doesn't exist.");

            var userRole = new userrole()
            {
                roleid = role.Id,
                userid = user.Id
            };
            _userRoleRepository.Add(userRole);

            _userRepository.Commit();
        }

        private bool isPasswordValid(user user, string password)
        {
            // return true;
            return string.Equals(_encryptionService.EncryptPassword(password, user.salt), user.hashed_password);
        }

        private bool isUserValid(user user, string password)
        {
            if (isPasswordValid(user, password))
            {
                return !user.isactive;
            }

            return false;
        }
        #endregion
    }
}
