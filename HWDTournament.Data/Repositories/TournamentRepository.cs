using HWBTournament.Data.Contracts;
using HWBTournament.Model.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace HWBTournament.Data.Repositories
{
    public class TournamentRepository : EntityBaseRepository<tournament>, ITournamentRepository
    {
        public TournamentRepository(HWBTournamentContext context)
            : base(context)
        {
        }
        public tournament CreateTournament(tournament newtournament)
        {
            Add(newtournament);
            Commit();
            return newtournament;
        }

        public tournament GetSingleById(int tournamentid)
        {
            return GetSingle(tournamentid);
        }

        public IEnumerable<tournament> GetTournaments()
        {
            return GetAll();
        }

        public tournament UpdateTournament(tournament updateTournament)
        {
            var tournament = GetSingle(updateTournament.Id);

            tournament.tournament_name = updateTournament.tournament_name;

            Update(tournament);
            Commit();

            return tournament;
        }
    }
}
