using HWBTournament.Data.Contracts;
using HWBTournament.Model.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace HWBTournament.Data.Repositories
{
    public class EventDetailStatusRepository : EntityBaseRepository<eventdetailstatus>, IEventDetailStatusRepository
    {
        public EventDetailStatusRepository(HWBTournamentContext context)
            : base(context)
        {
        }
        public eventdetailstatus CreateEventStatusDetail(eventdetailstatus neweventdetailstatus)
        {
            Add(neweventdetailstatus);
            Commit();
            return neweventdetailstatus;
        }

        public eventdetailstatus GetSingleById(int eventstatusdetailId)
        {
            return GetSingle(eventstatusdetailId);
        }

        public IEnumerable<eventdetailstatus> GetEventStatusDetails()
        {
            return GetAll();
        }

        public eventdetailstatus UpdateEventStatusDetail(eventdetailstatus neweventdetailstatus)
        {
            var eventdetailstatus = GetSingle(neweventdetailstatus.Id);

            eventdetailstatus.event_detail_status_name = neweventdetailstatus.event_detail_status_name;

            Update(eventdetailstatus);
            Commit();

            return neweventdetailstatus;
        }
    }
}
