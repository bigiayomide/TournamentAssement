using System;
using System.Collections.Generic;
using System.Globalization;
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
                    return Ok(new ResultVM
                    {
                        Status = Status.Error,
                        Message = "Invalid data",
                        Data = "<li>User already exists</li>"
                    });
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

                    return Ok(new ResultVM
                    {
                        Status = Status.Success,
                        Message = "User Created",
                        Data = user
                    });
                }
                else
                {
                    var resultErrors = result.Errors;
                    return BadRequest(new ResultVM
                    {
                        Status = Status.Error,
                        Message = "User Created",
                        Data = resultErrors
                    });
                    //return BadRequest(resultErrors);
                }
            }

            var errors = ModelState.Keys.Select(e => "<li>" + e + "</li>");
            return BadRequest(errors);
        }

        //[HttpPost]
        //public async Task<ResultVM> EditUser([FromBody] RegisterVM model)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        // logic could be moved into a service
        //        var user = await _userManager.FindByIdAsync(model.Id);
        //        user.UserName = model.UserName;
        //        user.Email = model.Email;
        //        await _userManager.UpdateAsync(user);
        //        var roles = await _userManager.GetRolesAsync(user);
        //        if (model.IsAdmin)
        //        {
        //            if (!roles.Contains("Admin"))
        //            {
        //                await _userManager.AddToRoleAsync(user, "Admin");
        //            }
        //        }
        //        else
        //        {
        //            if (roles.Contains("Admin"))
        //            {
        //                await _userManager.RemoveFromRoleAsync(user, "Admin");
        //            }
        //        }
        //        return new ResultVM
        //        {
        //            Status = Status.Success,
        //            Message = "User Updated",
        //            Data = user
        //        };
        //    }
        //    return new ResultVM
        //    {
        //        Status = Status.Success,
        //        Message = "Invalid data",
        //        Data = "Could not verify the user model"
        //    };
        //}

        //[HttpPost]
        //public async Task<ResultVM> DeleteUser([FromBody] string userId)
        //{
        //    // logic could be moved into a service
        //    var user = await _userManager.FindByIdAsync(userId);
        //    if (user != null)
        //    {
        //        try
        //        {
        //            var roles = await _userManager.GetRolesAsync(user);
        //            if (roles.Count > 0)
        //            {
        //                await _userManager.RemoveFromRolesAsync(user, roles);
        //            }
        //            await _userManager.DeleteAsync(user);
        //            return new ResultVM
        //            {
        //                Status = Status.Success,
        //                Message = "User Deleted",
        //                Data = user
        //            };
        //        }
        //        catch (Exception ex)
        //        {
        //            return new ResultVM
        //            {
        //                Status = Status.Error,
        //                Message = ex.Message,
        //                Data = user
        //            };
        //        }
        //    }
        //    return new ResultVM
        //    {
        //        Status = Status.Error,
        //        Message = $"Could not find user with id {userId}",
        //        Data = ""
        //    };

        //}

        [HttpPost(Name ="token")]
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

        [HttpGet (Name ="Claims")]
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

        //[HttpGet]
        //public async Task<List<AppUser>> GetUsers()
        //{
        //    var users = await _userManager.Users.ToListAsync();
        //    var result = users.Select(x => new AppUser()
        //    {
        //        Id = x.Id,
        //        UserName = x.UserName,
        //        Email = x.Email,
        //        IsAdmin = _userManager.GetRolesAsync(x).Result.Contains("Admin")
        //    });

        //    return result.ToList();
        //}

        [HttpPost(Name ="Signout")]
        public async Task SignOut()
        {
            await _signInManager.SignOutAsync();
        }

        //[HttpGet]
        //public async Task<IActionResult> ResetPassword(string email)
        //{
        //    var user = await _userManager.FindByEmailAsync(email);
        //    if (user != null)
        //    {
        //        var resetToken = await _userManager.GeneratePasswordResetTokenAsync(user);
        //        var resetLink = _configuration["clientUrl"] + $"#/reset-password?resetToken={resetToken}&&userId={user.Id}";
        //        var body = MailMessageHelper.PasswordResertMessage(user.UserName, resetLink);
        //        _emailService.sendEmail(user.Email, user.UserName, "Password Reset", body);
        //        return Ok("Reset email sent");
        //    }
        //    return BadRequest($"No user found for {email}");
        //}

        //[HttpPost]
        //public async Task<IActionResult> ResetPassword([FromBody] PasswordResetModel model)
        //{
        //    var user = await _userManager.FindByIdAsync(model.Id);
        //    if (ModelState.IsValid)
        //    {
        //        if (user != null)
        //        {
        //            var result = await _userManager.ResetPasswordAsync(user, model.ResetToken, model.Password);
        //            if (result.Succeeded)
        //            {
        //                return Ok("Password reset successful");
        //            }
        //            else
        //            {
        //                BadRequest(result.Errors.ToString());
        //            }
        //        }
        //        return BadRequest($"Could not find user email {model.Email}");
        //    }
        //    return BadRequest("model state invalid");
        //}


        private async Task<List<Claim>> GetValidClaims(IdentityUser user, List<string> roles)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(JwtRegisteredClaimNames.Sub, user.Id)
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
