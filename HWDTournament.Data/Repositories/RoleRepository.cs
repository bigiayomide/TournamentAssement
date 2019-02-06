using HWBTournament.Data.Contracts;
using HWBTournament.Model.Entities;
using HWBTournament.Data.Repositories;

namespace HWBTournament.Data.Repositories
{
    public class RoleRepository : EntityBaseRepository<role>, IRoleRepository
    {
        public RoleRepository(HWBTournamentContext context)
            : base(context)
        { }
    }
}
