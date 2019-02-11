using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HWBTournament.API.Core
{
    public static class AuthService
    {
        public static void ConfigurejwtAuth(this IServiceCollection services, string securitykey)
        {
            services.AddAuthorization(auth =>
            {
                auth.AddPolicy("Bearer", new AuthorizationPolicyBuilder()
                    .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme)
                    .RequireAuthenticatedUser().Build());

                auth.AddPolicy("AdminOnly", policy => policy.RequireRole("Admin")
                .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme)
                .RequireAuthenticatedUser().Build());
            });

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
           .AddJwtBearer(options =>
           {
               options.RequireHttpsMetadata = false;
               options.SaveToken = true;
               options.TokenValidationParameters = new TokenValidationParameters()
               {
                   ValidateIssuer = true,
                   ValidateAudience = false,
                   ValidateLifetime = true,
                   ValidateIssuerSigningKey = true,
                   ValidIssuer = "hwb.co.za",
                   // ValidAudience = "yourdomain.com",
                   IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(securitykey))
               };
           });
        }
    }
}
