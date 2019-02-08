using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace HWBTournament.API.ViewModels
{
    class AccountViewModels
    {
    }
    public class ResultVM
    {
        public Status Status { get; set; }
        public string Message { get; set; }
        public string Token { get; set; }
        public string Username { get; set; }
        public IEnumerable<string> Roles { get; set; }
        public object Data { get; set; }

    }

    public enum Status
    {
        Success = 1,
        Error = 2
    }

    public class ClaimVM
    {
        public string Type { get; set; }
        public string Value { get; set; }
    }

    public class UserClaims
    {
        public IEnumerable<ClaimVM> Claims { get; set; }
        public string UserName { get; set; }
    }

    public class LoginVM
    {
        public string UserName { get; set; }

        [DataType(DataType.Password)]
        public string Password { get; set; }
    }

    public class RegisterVM
    {
        public string Id { get; set; }
        public string UserName { get; set; }

        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Compare("Password")]
        [DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }

        public bool IsAdmin { get; set; }
    }

    public class UserStateVM
    {
        public bool IsAuthenticated { get; set; }
        public string Username { get; set; }
    }

    public class PasswordResetModel
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string ResetToken { get; set; }
    }
}
