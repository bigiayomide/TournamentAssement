using System;
using System.Collections.Generic;
using System.Text;

namespace HWBTournament.Data
{
    public class HWBTournamentDbInitializer
    {
        private static HWBTournamentContext context;
        public static void Initialize(IServiceProvider serviceProvider)
        {
            context = (HWBTournamentContext)serviceProvider.GetService(typeof(HWBTournamentContext));

            InitializeDatabase();
        }

        private static void InitializeDatabase()
        {
            // code to inialize database if there is a need
        }
    }
}
