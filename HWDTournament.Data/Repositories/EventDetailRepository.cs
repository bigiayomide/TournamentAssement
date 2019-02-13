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
            return _context.EventDetails.Include(x=>x.Event).Include(x=>x.event_detail_status);
        }

        public EventDetail UpdateEventDetail(EventDetail updateEventDetail)
        {
            _context.Database.ExecuteSqlCommand(@" EXEC PU_Update_EventDetail  @EventDetailID ,@FK_EventID,@FK_EventDetailStatusID ,
                                                                               @EventDetailName ,@EventDetailNumber,@EventDetailOdd ,
                                                                               @FinishingPosition ,@FirstTimer",
                                                 new SqlParameter("@EventDetailID", updateEventDetail.Id),
                                                 new SqlParameter("@FK_EventID", updateEventDetail.event_id),
                                                 new SqlParameter("@FK_EventDetailStatusID", updateEventDetail.event_status_id),
                                                 new SqlParameter("@EventDetailName", updateEventDetail.event_detail_name),
                                                 new SqlParameter("@EventDetailNumber", updateEventDetail.event_detail_number),
                                                 new SqlParameter("@EventDetailOdd", updateEventDetail.event_detail_odd),
                                                 new SqlParameter("@FinishingPosition", updateEventDetail.finishing_position),
                                                 new SqlParameter("@FirstTimer", updateEventDetail.first_timer));

            return GetSingle(updateEventDetail.Id);
        }
    }
}
