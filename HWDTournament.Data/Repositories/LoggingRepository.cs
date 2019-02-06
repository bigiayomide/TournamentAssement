using HWBTournament.Data.Contracts;
using HWBTournament.Model.Entities;

namespace HWBTournament.Data.Repositories
{
    public class LoggingRepository : EntityBaseRepository<error>, ILoggingRepository
    {
        public LoggingRepository(HWBTournamentContext context)
            : base(context)
        { }

        public override void Commit()
        {
            try
            {
                base.Commit();
            }
            catch { }
        }
    }
}
