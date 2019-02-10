﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Serilog;

namespace HWBTournament
{
    public class Program
    {
        //public static IConfiguration Configuration { get; } = new ConfigurationBuilder()
        //.SetBasePath(Directory.GetCurrentDirectory())
        //.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
        //.AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production"}.json", optional: true)
        //.Build();


        //public static void Main(string[] args)
        //{
        //    Log.Logger = new LoggerConfiguration()
        //    .ReadFrom.Configuration(Configuration)
        //    .CreateLogger();
        //    BuildWebHost(args).Run();

        //    try
        //    {
        //        Log.Information("Getting the motors running...");

        //        BuildWebHost(args).Run();
        //    }
        //    catch (Exception ex)
        //    {
        //        Log.Fatal(ex, "Host terminated unexpectedly");
        //    }
        //    finally
        //    {
        //        Log.CloseAndFlush();
        //    }

        //}

        //public static IWebHost BuildWebHost(string[] args) =>
        //     WebHost.CreateDefaultBuilder(args)
        //     .UseKestrel()
        //     .UseContentRoot(Directory.GetCurrentDirectory())
        //      //.UseIISIntegration()
        //      .UseStartup<Startup>()
        //    .UseSerilog()
        //     .UseDefaultServiceProvider(options =>
        //     options.ValidateScopes = false)
        //      .Build();


        public static IConfiguration Configuration { get; } = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
            .AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production"}.json", optional: true)
            .Build();

        public static void Main(string[] args)
        {
            Log.Logger = new LoggerConfiguration()
                .ReadFrom.Configuration(Configuration)
                .CreateLogger();

            try
            {
                Log.Information("Getting the motors running...");

                BuildWebHost(args).Run();
            }
            catch (Exception ex)
            {
                Log.Fatal(ex, "Host terminated unexpectedly");
            }
            finally
            {
                Log.CloseAndFlush();
            }
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                   .UseStartup<Startup>()
                   .UseConfiguration(Configuration)
                   .UseSerilog()
                   .Build();
    }
}
