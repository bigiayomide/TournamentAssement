using HWBTournament.Data.Services;
using HWBTournament.Model.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace HWBTournament.Data.Contracts
{
    public interface IUserRepository : IEntityBaseRepository<user>
    {
        user GetSingleByUsername(string username);
        IEnumerable<role> GetUserRoles(string username);
        user CreateUser(user newuser, int[] roles);
        MembershipContext ValidateUser(string username, string password);
        user UpdateUserPasswordUser(user updateuser);
    }

    public interface ITournamentRepository : IEntityBaseRepository<tournament>
    {
        IEnumerable<tournament> GetTournaments();
        tournament CreateTournament(tournament newtournament);
        tournament UpdateTournament(tournament updatetournament);
    }

    public interface IEventRepository : IEntityBaseRepository<@event>
    {
        IEnumerable<@event> GetEvents();
        @event CreateEvent(@event newevent);
        @event UpdateEvent(@event newevent);
        @event GetSingleById(int @event);
    }

    public interface IEventDetailRepository : IEntityBaseRepository<eventdetail>
    {
        IEnumerable<eventdetail> GetEventDetails();
        eventdetail CreateEventDetail(eventdetail newevent);
        eventdetail UpdateEventDetail(eventdetail newevent);
        eventdetail GetSingleById(int eventdetailId);
    }

    public interface IEventDetailStatusRepository : IEntityBaseRepository<eventdetailstatus>
    {
        IEnumerable<eventdetailstatus> GetEventStatusDetails();
        eventdetailstatus CreateEventStatusDetail(eventdetailstatus neweventstatus);
        eventdetailstatus UpdateEventStatusDetail(eventdetailstatus neweventstatus);
        eventdetailstatus GetSingleById(int eventstatusdetailId);
    }

    public interface IUserRoleRepository : IEntityBaseRepository<userrole> { }

    public interface ILoggingRepository : IEntityBaseRepository<error> { }

    public interface IRoleRepository : IEntityBaseRepository<role> { }
}
