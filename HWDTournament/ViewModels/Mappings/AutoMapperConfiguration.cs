using AutoMapper;

namespace HWBTournament.API.ViewModels.Mappings
{
    public class AutoMapperConfiguration : Profile
    {
        public static void Configure()
        {

            var config = new AutoMapper.MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new DomainToViewModelMappingProfile());
                cfg.AddProfile(new ViewModelToDomainMappingProfile());
            });
        }
    }
}
