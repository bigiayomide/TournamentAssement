using HWBTournament.Model.Entities;
using System;
using System.Collections.Generic;
using System.Security.Principal;
using System.Text;

namespace HWBTournament.Data.Services
{
    public class MembershipContext
    {
        public IPrincipal Principal { get; set; }
        public user objuser { get; set; }
        public bool IsValid()
        {
            return Principal != null;
        }
    }
}
