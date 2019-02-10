using AutoMapper;
using HWBTournament.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HWBTournament.API.ViewModels.Mappings
{
    public class DomainToViewModelMappingProfile : Profile
    {
        public DomainToViewModelMappingProfile()
        {
            CreateMap<Event, EventViewModel>();
            CreateMap<EventDetail, EventDetailViewModel>();
            CreateMap<EventDetailStatus, EventStatusViewModel>();
            CreateMap<Tournament, TournamentViewModel>();
            //CreateMap<user, UserViewModel>();

        }
    }
}
