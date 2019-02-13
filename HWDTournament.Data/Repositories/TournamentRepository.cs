using HWBTournament.Data.Contracts;
using HWBTournament.Model.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace HWBTournament.Data.Repositories
{
    public class TournamentRepository : EntityBaseRepository<Tournament>, ITournamentRepository
    {
        public TournamentRepository(HWBTournamentContext context)
            : base(context)
        {
        }
        public Tournament CreateTournament(Tournament newtournament)
        {
            Add(newtournament);
            Commit();
            return newtournament;
        }

        public Tournament GetSingleById(int tournamentid)
        {
            return GetSingle(tournamentid);
        }

        public IEnumerable<Tournament> GetTournaments()
        {
            return GetAll();
        }

        public Tournament UpdateTournament(Tournament updateTournament)
        {
            Update(updateTournament);
            Commit();

            return updateTournament;
        }
    }
}
