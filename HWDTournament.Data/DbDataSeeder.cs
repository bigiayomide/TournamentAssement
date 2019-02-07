using HWBTournament.Model.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using HWBTournament.Data.Contracts;

namespace HWBTournament.Data
{
    public class DbDataSeeder: IDbDataSeeder
    {
        private HWBTournamentContext context;
        public DbDataSeeder(HWBTournamentContext context)
        {
            this.context = context;
        }


    }
}
