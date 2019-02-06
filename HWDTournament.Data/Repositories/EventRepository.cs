using HWBTournament.Data.Contracts;
using HWBTournament.Model.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace HWBTournament.Data.Repositories
{
    public class EventRepository : EntityBaseRepository<@event>, IEventRepository
    {
        public EventRepository(HWBTournamentContext context)
            : base(context)
        {
        }
        public @event CreateEvent(@event newevent)
        {
            Add(newevent);
            Commit();
            return newevent;
        }

        public @event GetSingleById(int @event)
        {
            return GetSingle(@event);
        }

        public IEnumerable<@event> GetEvents()
        {
            return GetAll();
        }

        public @event UpdateEvent(@event updateEvent)
        {
            var @event = GetSingle(updateEvent.Id);

            @event.auto_close = updateEvent.auto_close;
            @event.event_date_time = updateEvent.event_date_time;
            @event.event_number = updateEvent.event_number;
            @event.event_end_date_time = updateEvent.event_end_date_time;
            @event.event_name = updateEvent.event_name;

            Update(@event);
            Commit();

            return @event;
        }
    }
}
