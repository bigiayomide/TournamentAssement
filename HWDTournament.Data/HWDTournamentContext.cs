using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HWBTournament.Model.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

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
    }
}
