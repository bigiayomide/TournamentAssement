using AutoMapper;
using HWBTournament.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HWBTournament.API.ViewModels.Mappings
{
    public class ViewModelToDomainMappingProfile : Profile
    {

        public  ViewModelToDomainMappingProfile()
        {
            CreateMap<@event, EventViewModel>();
            CreateMap<eventdetail, EventDetailViewModel>();
            CreateMap<eventdetailstatus, EventStatusViewModel>();
            CreateMap<tournament, TournamentViewModel>();
            CreateMap<user, UserViewModel>();
        }
    }
}
