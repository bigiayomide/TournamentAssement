using HWBTournament.Data.Contracts;
using HWBTournament.Model.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace HWBTournament.Data.Repositories
{
    public class EventDetailRepository : EntityBaseRepository<eventdetail>, IEventDetailRepository
    {
        public EventDetailRepository(HWBTournamentContext context)
            : base(context)
        {
        }
        public eventdetail CreateEventDetail(eventdetail neweventdetail)
        {
            Add(neweventdetail);
            Commit();
            return neweventdetail;
        }

        public eventdetail GetSingleById(int eventdetailId)
        {
            return GetSingle(eventdetailId);
        }

        public IEnumerable<eventdetail> GetEventDetails()
        {
            return GetAll();
        }

        public eventdetail UpdateEventDetail(eventdetail updateEventDetail)
        {
            var eventdetail = GetSingle(updateEventDetail.Id);

            eventdetail.event_detail_name = updateEventDetail.event_detail_name;
            eventdetail.event_detail_number = updateEventDetail.event_detail_number;
            eventdetail.event_detail_odd = updateEventDetail.event_detail_odd;
            eventdetail.event_detail_status = updateEventDetail.event_detail_status;
            eventdetail.finishing_position = updateEventDetail.finishing_position;
            eventdetail.first_timer = updateEventDetail.first_timer;

            Update(updateEventDetail);
            Commit();

            return updateEventDetail;
        }
    }
}
