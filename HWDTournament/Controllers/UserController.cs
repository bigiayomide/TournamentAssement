using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using AutoMapper;
using HWBTournament.Data.Contracts;
using HWBTournament.API.Core;
using HWBTournament.API.ViewModels;
using HWBTournament.Data.Services;
using Microsoft.AspNetCore.Authorization;
using HWBTournament.Model.Entities;

namespace HWBTournament.API.Controllers
{
    [Produces("application/json")]
    [Route("api/User")]
    public class UserController : Controller
    {

        //  private readonly emailadminconfig _eadc;
        private readonly IUserRepository _userRepository;
        private readonly ILoggingRepository _loggingRepository;
        //int page = 1;
        //int pageSize = 10;

        public UserController(IEncryptionService encryptionService,IUserRepository userRepository, 
                         ILoggingRepository _errorRepository)
        {

            _userRepository = userRepository;
            _loggingRepository = _errorRepository;
        }

        [HttpGet("{id}", Name = "GetUser")]
        public IActionResult Get(long id)
        {
            user _user = _userRepository.GetSingle(u => u.Id == id);
            if (_user != null)
            {
                UserViewModel _userVM = Mapper.Map<user, UserViewModel>(_user);
                return new OkObjectResult(_userVM);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public IActionResult Create([FromBody] UserViewModel uservm)
        {
            if (!ModelState.IsValid || uservm == null)
            {
                return BadRequest(ModelState);
            }
            //var companydetail = _companyDetailRepository.GetSingle(uservm.company_detail_id);

            user _newuser = new user
            {
                username = uservm.username,
                usr_code = 0,
                hashed_password = uservm.password,
                salt = "",
                isactive = uservm.isactive,
                date_created = DateTime.Now,
            };

            user _newUser = _userRepository.CreateUser(_newuser, new int[] { 2 });


            if (_newUser == null)
            {
                return new OkObjectResult(uservm);
            }

            uservm = new UserViewModel
            {
                Id = _newUser.Id,
                usr_code = _newUser.usr_code,
                username = _newUser.username,
                password = _newUser.hashed_password,
                salt = "",
                isactive = _newUser.isactive,
                date_created = _newUser.date_created,
                date_updated = _newuser.date_updated
            };

            return new OkObjectResult(uservm);
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("resetpassword")]
        public IActionResult ResetPassword([FromBody]  UserViewModel uservm)
        {
            if (!ModelState.IsValid || uservm == null)
            {
                return BadRequest(ModelState);
            }

            user _updateuser = new user
            {
                Id = uservm.Id,
                usr_code = uservm.usr_code,
                username = uservm.username,
                hashed_password = uservm.password,
                salt = "",
                isactive = uservm.isactive,
                date_created = DateTime.Now
            };

            user _newUser = _userRepository.UpdateUserPasswordUser(_updateuser);

            uservm = new UserViewModel
            {
                Id = _newUser.Id,
                username = _newUser.username,
                usr_code = _newUser.usr_code,
                password = "",
                salt = "",
                isactive = _newUser.isactive,
                date_created = DateTime.Now,
                date_updated = DateTime.Now
            };

            return new OkObjectResult(uservm);
        }

        [HttpPost]
        [Route("getaccount")]
        public IActionResult getAccount([FromBody] LoginViewModel user)
        {
            if (!ModelState.IsValid || user == null)
            {
                return BadRequest(ModelState);
            }

            user _user = _userRepository.GetSingle(u => u.username == user.username);

            if (_user != null)
            {
                UserViewModel _userVM = Mapper.Map<user, UserViewModel>(_user);
                return new OkObjectResult(_userVM);
            }
            else
            {
                return NotFound();
            }
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("authenticate")]
        public async Task<IActionResult> Login([FromBody] LoginViewModel objuser)
        {
            IActionResult _result = new ObjectResult(false);
            GenericResult _authenticationResult = null;
            LoginViewModel _objlogin = new LoginViewModel();
            if (objuser == null)
            {
                _authenticationResult = new GenericResult()
                {
                    Succeeded = false,
                    Message = ""
                };

                _result = new ObjectResult(_authenticationResult);
                return _result;
            }
            try
            {
                MembershipContext _userContext = _userRepository.ValidateUser(objuser.username, objuser.password);

                if (_userContext.objuser != null)
                {
                    IEnumerable<role> _roles = _userRepository.GetUserRoles(objuser.username);
                    List<Claim> _claims = new List<Claim>();
                    objuser.Id = _userContext.objuser.Id;

                    foreach (role role in _roles)
                    {
                        if (_objlogin.myrole == 0)
                            _objlogin.myrole = role.Id;
                        Claim _claim = new Claim(ClaimTypes.Role, role.description, ClaimValueTypes.String, objuser.username);
                        _claims.Add(_claim);
                    }

                    await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme,
                    new ClaimsPrincipal(new ClaimsIdentity(_claims, CookieAuthenticationDefaults.AuthenticationScheme)),
                    new Microsoft.AspNetCore.Authentication.AuthenticationProperties { IsPersistent = objuser.rememberMe });

                    _objlogin.username = _userContext.objuser.username;
                    _objlogin.Id = _userContext.objuser.Id;
                }
                else
                {
                    _objlogin.Id = 0;
                    _objlogin.myrole = 0;
                    _objlogin.username = objuser.username;
                }
            }
            catch (Exception ex)
            {
                _objlogin.Id = 0;
                _objlogin.myrole = 0;
                _objlogin.username = objuser.username;
                _loggingRepository.Add(new error() { message = ex.Message, stacktrace = ex.StackTrace, date_created = DateTime.Now });
                _loggingRepository.Commit();
            }
            // SendMailtoAdmin(_eadc.emailaddress, objuser.username);
            return new ObjectResult(_objlogin);
        }

        [HttpPost]
        [Route("logout")]
        public async Task<IActionResult> Logout()
        {
            try
            {
                await HttpContext.Authentication.SignOutAsync("Cookies");
                return Ok();
            }
            catch (Exception ex)
            {
                _loggingRepository.Add(new error() { message = ex.Message, stacktrace = ex.StackTrace, date_created = DateTime.Now });
                _loggingRepository.Commit();

                return BadRequest();
            }
        }
    }
}
