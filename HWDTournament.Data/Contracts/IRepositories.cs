using HWBTournament.Model.Entities;
using System.Collections.Generic;

namespace HWBTournament.Data.Contracts
{
    public interface ITournamentRepository : IEntityBaseRepository<Tournament>
    {
        IEnumerable<Tournament> GetTournaments();
        Tournament CreateTournament(Tournament newtournament);
        Tournament UpdateTournament(Tournament updatetournament);
    }

    public interface IEventRepository : IEntityBaseRepository<Event>
    {
        IEnumerable<Event> GetEvents();
        Event CreateEvent(Event newevent);
        Event UpdateEvent(Event newevent);
        Event GetSingleById(int Event);
    }

    public interface IEventDetailRepository : IEntityBaseRepository<EventDetail>
    {
        IEnumerable<EventDetail> GetEventDetails();
        EventDetail CreateEventDetail(EventDetail newevent);
        EventDetail UpdateEventDetail(EventDetail newevent);
        EventDetail GetSingleById(int eventdetailId);
    }

    public interface IEventDetailStatusRepository : IEntityBaseRepository<EventDetailStatus>
    {
        IEnumerable<EventDetailStatus> GetEventStatusDetails();
        EventDetailStatus CreateEventStatusDetail(EventDetailStatus neweventstatus);
        EventDetailStatus UpdateEventStatusDetail(EventDetailStatus neweventstatus);
        EventDetailStatus GetSingleById(int eventstatusdetailId);
    }
}
