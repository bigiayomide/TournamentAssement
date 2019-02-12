using HWBTournament.API.ViewModels;
using HWBTournament.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HWBTournament.API.Hubs
{
    public interface ITypedHubClient
    {
        Task BroadcastMessage(EventDetailViewModel EventDetailViewModel);
    }
}
