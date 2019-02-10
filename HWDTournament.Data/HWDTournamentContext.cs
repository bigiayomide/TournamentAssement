using HWBTournament.Model.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
namespace HWBTournament.Data
{
    public class HWBTournamentContext : IdentityDbContext<IdentityUser>
    {
        private IConfiguration _configuration;
        public HWBTournamentContext() { }

        public HWBTournamentContext(DbContextOptions<HWBTournamentContext> options, IConfiguration configuration)
            : base(options)
        {
            _configuration = configuration;
        }

        public DbSet<Tournament> Tournaments { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<EventDetail> EventDetails { get; set; }
        public DbSet<EventDetailStatus> EventDetailStatuses { get; set; }
        //public DbSet<Error> Errorlogs { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ApplyConfiguration(new EventConfiguration());
            builder.ApplyConfiguration(new EventdetailConfiguration());
            builder.ApplyConfiguration(new TournamentConfiguration());
            builder.ApplyConfiguration(new EventdetailstatusConfiguration());
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(_configuration["DefaultConnection"]);
            };
        }
    }
}
