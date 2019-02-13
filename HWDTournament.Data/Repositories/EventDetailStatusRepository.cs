using HWBTournament.Data.Contracts;
using HWBTournament.Model.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace HWBTournament.Data.Repositories
{
    public class EventDetailStatusRepository : EntityBaseRepository<EventDetailStatus>, IEventDetailStatusRepository
    {
        public EventDetailStatusRepository(HWBTournamentContext context)
            : base(context)
        {
        }
        public EventDetailStatus CreateEventStatusDetail(EventDetailStatus neweventdetailstatus)
        {
            Add(neweventdetailstatus);
            Commit();
            return neweventdetailstatus;
        }

        public EventDetailStatus GetSingleById(int eventstatusdetailId)
        {
            return GetSingle(eventstatusdetailId);
        }

        public IEnumerable<EventDetailStatus> GetEventStatusDetails()
        {
            return GetAll();
        }

        public EventDetailStatus UpdateEventStatusDetail(EventDetailStatus neweventdetailstatus)
        {
            Update(neweventdetailstatus);
            Commit();

            return neweventdetailstatus;
        }
    }
}
