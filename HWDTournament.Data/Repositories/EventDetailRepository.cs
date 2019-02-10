using HWBTournament.Data.Contracts;
using HWBTournament.Model.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace HWBTournament.Data.Repositories
{
    public class EventDetailRepository : EntityBaseRepository<EventDetail>, IEventDetailRepository
    {
        public HWBTournamentContext _context;
        public EventDetailRepository(HWBTournamentContext context)
            : base(context)
        {
            _context = context;
        }
        public EventDetail CreateEventDetail(EventDetail neweventdetail)
        {
            //Add(neweventdetail);
            //Commit();
            _context.Database.ExecuteSqlCommand("EXEC PI_Insert_Event_Detail @event_id, @event_status_id,@event_detail_name,@event_detail_number,@event_detail_odd,@finishing_position,@first_timer",
                                                 new SqlParameter("@event_id", neweventdetail.event_id),
                                                 new SqlParameter("@event_status_id", neweventdetail.event_status_id),
                                                 new SqlParameter("@event_detail_name", neweventdetail.event_detail_name),
                                                 new SqlParameter("@event_detail_number", neweventdetail.event_detail_number),
                                                 new SqlParameter("@event_detail_odd", neweventdetail.event_detail_odd),
                                                 new SqlParameter("@finishing_position", neweventdetail.finishing_position),
                                                 new SqlParameter("@first_timer", neweventdetail.first_timer));
            return neweventdetail;
        }

        public EventDetail GetSingleById(int eventdetailId)
        {
            return GetSingle(eventdetailId);
        }

        public IEnumerable<EventDetail> GetEventDetails()
        {
            return GetAll();
        }

        public EventDetail UpdateEventDetail(EventDetail updateEventDetail)
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
