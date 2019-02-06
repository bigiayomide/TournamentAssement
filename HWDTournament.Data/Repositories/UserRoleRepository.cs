using HWBTournament.Data.Contracts;
using HWBTournament.Model.Entities;
using HWBTournament.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace HWBTournament.Data.Repositories
{
    public class UserRoleRepository : EntityBaseRepository<userrole>, IUserRoleRepository
    {
        public UserRoleRepository(HWBTournamentContext context)
            : base(context)
        { }
    }
}
