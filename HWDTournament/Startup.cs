using System;
using System.Net;
using System.Security.Claims;
using AutoMapper;
using FluentValidation.AspNetCore;
using HWBTournament.API.Core;
using HWBTournament.Data;
using HWBTournament.Data.Contracts;
using HWBTournament.Data.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using Swashbuckle.AspNetCore.Swagger;

namespace HWBTournament
{
    public class Startup
    {
        private static string _applicationPath = string.Empty;
        string sqlConnectionString = string.Empty;

        public IConfigurationRoot Configuration { get; }
        public Startup(IHostingEnvironment env)
        {
            _applicationPath = env.WebRootPath;

            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();


            Configuration = builder.Build();
        }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<HWBTournamentContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));



            //services.AddScoped<ILoggingRepository, LoggingRepository>();

            services.AddScoped<ITournamentRepository, TournamentRepository>();
            services.AddScoped<IEventDetailRepository, EventDetailRepository>();
            services.AddScoped<IEventRepository, EventRepository>();
            services.AddScoped<IEventDetailStatusRepository, EventDetailStatusRepository>();
            services.AddScoped<IDbDataSeeder, DbDataSeeder>();

            services.AddScoped<IEncryptionService, EncryptionService>();
            


            services.AddMvc().AddJsonOptions(opts =>
            {  
                opts.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            }).AddFluentValidation();

            var securitykey = Configuration["SecurityKey"];
            services.ConfigurejwtAuth(securitykey);


            services.AddIdentity<IdentityUser, IdentityRole>(
                    op => { op.Tokens.PasswordResetTokenProvider = TokenOptions.DefaultEmailProvider; })
              .AddDefaultTokenProviders()
              .AddSignInManager()
              .AddEntityFrameworkStores<HWBTournamentContext>()
              .AddDefaultTokenProviders();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", 
                    new Info {
                        Title = "HWBTournament API",
                        Version = "v1",
                        Description = "Tournament Application API",
                        TermsOfService = "None",
                        Contact = new Contact
                        {
                            Name = "Ayomide Fajobi",
                            Email = string.Empty,
                            Url = "https://www.instagram.com/iamayof/"
                        }
                    });
                c.AddSecurityDefinition("Bearer", new ApiKeyScheme
                {
                    Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
                    Name = "Authorization",
                    In = "header",
                    Type = "apiKey"
                });
            });

            services.AddAutoMapper();

            services.AddCors();

            return services.BuildServiceProvider();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "MyAPI V1");
            });

            app.UseAuthentication();
            app.UseCors(builder => builder.AllowAnyOrigin()
             .AllowAnyMethod()
             .AllowAnyHeader()
             .AllowCredentials());


            app.UseExceptionHandler(
              builder =>
              {
                  builder.Run(
                    async context =>
                    {
                        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                        context.Response.Headers.Add("Access-Control-Allow-Origin", "*");
                         var error = context.Features.Get<IExceptionHandlerFeature>();
                        if (error != null)
                        {
                            context.Response.AddApplicationError(error.Error.Message);
                            await context.Response.WriteAsync(error.Error.Message).ConfigureAwait(false);
                        }
                    });
              });

            app.ConfigureExceptionHandler(loggerFactory);
            app.UseMvcWithDefaultRoute();
            app.UseDefaultFiles();
            app.UseStaticFiles();

            HWBTournamentDbInitializer.Initialize(app.ApplicationServices);
        }
    }
}
