using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using HWBTournament.Data;
using HWBTournament.Data.Contracts;
using HWBTournament.Data.Repositories;
using HWBTournament.Data.Services;
using HWBTournament.Model.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
namespace HWBTournament.Data
{
    public class HWBTournamentContext : DbContext
    {

        public HWBTournamentContext() { }

        public HWBTournamentContext(DbContextOptions<HWBTournamentContext> options)
            : base(options)
        { }

        public DbSet<tournament> Tournaments { get; set; }
        public DbSet<@event> Events { get; set; }
        public DbSet<eventdetail> EventDetails { get; set; }
        public DbSet<eventdetailstatus> EventDetailStatuses { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ApplyConfiguration(new eventConfiguration());
            builder.ApplyConfiguration(new  eventdetailConfiguration ());
            builder.ApplyConfiguration(new tournamentConfiguration());
            builder.ApplyConfiguration(new eventdetailstatusConfiguration());
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=(LocalDb)\\Mssqllocaldb;Initial Catalog=HWB; Connection Timeout=5; Packet Size=4096;");
            };
        }
    }
}
