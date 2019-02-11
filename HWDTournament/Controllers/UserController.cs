using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using HWBTournament.API.Core;
using HWBTournament.API.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Identity;

namespace HWBTournament.API.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]/[action]")]
    public class UserController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly IConfiguration _configuration;
        private ResultVM _resultVM { get; set; }

        public UserController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] RegisterVM model)
        {
            // logic could be moved into a service
            if (ModelState.IsValid)
            {
                IdentityResult result;
                var user = await _userManager.FindByNameAsync(model.UserName);

                if (user != null)
                {
                    _resultVM = new ResultVM
                    {
                        Status = Status.Error,
                        Message = "Invalid data",
                        Data = "User already exists"
                    };
                    return Ok(_resultVM);
                }

                user = new IdentityUser
                {
                    Id = Guid.NewGuid().ToString(),
                    UserName = model.UserName,
                    Email = model.Email
                };

                result = await _userManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    await _userManager.AddToRoleAsync(user, "Admin");

                    _resultVM = new ResultVM
                    {
                        Status = Status.Success,
                        Message = "User Created",
                        Data = user
                    };
                    return Ok(_resultVM);
                }

                return BadRequest(new ResultVM
                {
                    Status = Status.Error,
                    Message = "An Error Occured",
                    Data = string.Join("", result.Errors.Select(x=>x.Description))
                });
            }


            return BadRequest(new ResultVM
            {
                Status = Status.Error,
                Message = "An Error Occured"
            });

        }

     

        [HttpPost(Name = "token")]
        public async Task<IActionResult> Token([FromBody] LoginVM model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var user = await _userManager.FindByNameAsync(model.UserName);

                    if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
                    {
                        await _signInManager.PasswordSignInAsync(model.UserName, model.Password, true, lockoutOnFailure: false);
                        var userRoles = await _userManager.GetRolesAsync(user);
                        var claims = await GetValidClaims(user, userRoles?.ToList());

                        var key = _configuration["SecurityKey"];
                        var token = TokenGenerator.GetToken(claims, key);

                        return Ok(new ResultVM
                        {
                            Status = Status.Success,
                            Message = "Succesfull login",
                            Token = token,
                            Username = user.UserName,
                            Roles = userRoles,
                            Data = model
                        });
                    }

                    return BadRequest(new ResultVM
                    {
                        Status = Status.Error,
                        Message = "Invalid data",
                        Data = "<li>Could not verify username and password</li>"
                    });
                }
                catch (Exception ex)
                {
                    return BadRequest("Could not verify username and password " + ex.Message);
                }
            }

            var errors = ModelState.Keys.Select(e => "<li>" + e + "</li>");
            return BadRequest(new ResultVM
            {
                Status = Status.Error,
                Message = "Invalid data",
                Data = string.Join("", errors)
            });
        }

        [HttpGet(Name = "Claims")]
        [Authorize]
        public async Task<UserClaims> Claims()
        {
            var loggedInUser = await _userManager.GetUserAsync(User);
            var userClaims = await _userManager.GetClaimsAsync(loggedInUser);

            var claims = userClaims.Union(User.Claims).Select(c => new ClaimVM
            {
                Type = c.Type,
                Value = c.Value
            });

            return new UserClaims
            {
                UserName = User.Identity.Name,
                Claims = claims
            };
        }

        [HttpGet(Name = "IsAuthenticated")]
        public UserStateVM Authenticated()
        {
            return new UserStateVM
            {
                IsAuthenticated = User.Identity.IsAuthenticated,
                Username = User.Identity.IsAuthenticated ? User.Identity.Name : string.Empty
            };
        }

        [HttpPost(Name = "Signout")]
        public async Task SignOut()
        {
            await _signInManager.SignOutAsync();
        }

        private async Task<List<Claim>> GetValidClaims(IdentityUser user, List<string> roles)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(JwtRegisteredClaimNames.Sub, user.Id),
				// new Claim(_options.ClaimsIdentity.UserNameClaimType, user.UserName)
			};
            var userClaims = await _userManager.GetClaimsAsync(user);
            claims.AddRange(userClaims);
            foreach (var userRole in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, userRole));
            }
            return claims;
        }

    }
}
