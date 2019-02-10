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
            CreateMap<EventViewModel,Event>();
            CreateMap<EventDetailViewModel,EventDetail>();
            CreateMap<EventStatusViewModel,EventDetailStatus> ();
            CreateMap<TournamentViewModel,Tournament >();
        }
    }
}
