using HWBTournament.Data.Contracts;
using HWBTournament.Model.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace HWBTournament.Data.Repositories
{
    public class EventRepository : EntityBaseRepository<Event>, IEventRepository
    {
        private HWBTournamentContext _context;
        public EventRepository(HWBTournamentContext context)
            : base(context)
        {
            _context = context;
        }
        public Event CreateEvent(Event newevent)
        {
            _context.Database.ExecuteSqlCommand("EXEC PI_Insert_Event @tournament_id, @event_name,@event_number,@event_date_time,@event_end_date_time,@auto_close",
                                      new SqlParameter("@tournament_id", newevent.tournament_id),
                                      new SqlParameter("@event_name", newevent.event_name),
                                      new SqlParameter("@event_number", newevent.event_number),
                                      new SqlParameter("@event_date_time", newevent.event_date_time),
                                      new SqlParameter("@event_end_date_time", newevent.event_end_date_time),
                                      new SqlParameter("@auto_close", newevent.auto_close));
            return newevent;
        }

        public Event GetSingleById(int Event)
        {
            return GetSingle(Event);
        }

        public IEnumerable<Event> GetEvents()
        {
            return GetAll();
        }

        public Event UpdateEvent(Event updateEvent)
        {
            var Event = GetSingle(updateEvent.Id);

            Event.auto_close = updateEvent.auto_close;
            Event.event_date_time = updateEvent.event_date_time;
            Event.event_number = updateEvent.event_number;
            Event.event_end_date_time = updateEvent.event_end_date_time;
            Event.event_name = updateEvent.event_name;

            Update(Event);
            Commit();

            return Event;
        }
    }
}
