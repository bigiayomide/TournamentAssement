using HWBTournament.Data.Contracts;
using HWBTournament.Model.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HWBTournament.Data
{
    public class HWBTournamentDbInitializer
    {
        private static HWBTournamentContext context;
        public static void Initialize(IServiceProvider serviceProvider)
        {
            context = (HWBTournamentContext)serviceProvider.GetService(typeof(HWBTournamentContext));
            context.Database.Migrate();

            InitializeDatabase();
        }

        private static void InitializeDatabase()
        {
            if (!context.Roles.Any())
            {
                var jockey = new Tournament() { tournament_name = "Jockey 2013" };
                var vaal = new Tournament() { tournament_name = "Vaal" };

                context.EventDetailStatuses.AddRange(new List<EventDetailStatus>()
                {
                    new EventDetailStatus() { event_detail_status_name = "Active" },
                    new EventDetailStatus() {event_detail_status_name = "Scratched" },
                    new EventDetailStatus() {  event_detail_status_name = "Closed" },
                });

                jockey.Events.AddRange(new List<Event>()
                {
                    new Event  { event_name="Race", event_number=1, event_date_time=DateTime.Now, event_end_date_time=DateTime.Now.AddDays(4), auto_close = true },

                    new Event  { event_name="Race", event_number=1, event_date_time=DateTime.Now, event_end_date_time=DateTime.Now.AddDays(4), auto_close = true },
                });

                vaal.Events.AddRange(new List<Event>()
                {
                    new Event { event_name="Race", event_number=1, event_date_time=DateTime.Now,  auto_close = true },
                    new Event  { event_name="Race", event_number=2, event_date_time=DateTime.Now, auto_close = true },
                    new Event  { event_name="Race", event_number=3, event_date_time=DateTime.Now, auto_close = true,
                                  event_details = new List<EventDetail>()
                                  {
                                       new EventDetail() { event_detail_name= "Auriferous",  event_detail_odd= 8.330000M, finishing_position = 1, event_status_id=1, first_timer = false },
                                       new EventDetail() { event_detail_name= "Gallipoli", event_detail_odd=  14.290000M, finishing_position = 1,event_status_id=1, first_timer = false },
                                       new EventDetail() { event_detail_name= "Ninja Warior", event_detail_odd= 10.000000M, finishing_position = 1,event_status_id=1, first_timer = false },
                                       new EventDetail() { event_detail_name= "Scientist", event_detail_odd= 20.000000M, finishing_position = 1, event_status_id=1,first_timer = false },
                                       new EventDetail() { event_detail_name= "Augusta Pines", event_detail_odd= 33.330000M, finishing_position = 1,event_status_id=1, first_timer = false },
                                       new EventDetail() { event_detail_name= "Golden Guinea", event_detail_odd= 33.330000M, finishing_position = 1,event_status_id=1, first_timer = false },
                                       new EventDetail() { event_detail_name= "Royal Stock", event_detail_odd= 50.000000M, finishing_position = 1,event_status_id=1, first_timer = false,  },
                                  }
                    },
                    new Event  { event_name="Race", event_number=4, event_date_time=DateTime.Now, auto_close = true },
                    new Event  { event_name="Race", event_number=5, event_date_time=DateTime.Now, auto_close = true },
                    new Event  { event_name="Race", event_number=6, event_date_time=DateTime.Now, auto_close = true }
                });

                context.Database.ExecuteSqlCommand("ALTER DATABASE HWB SET ENABLE_BROKER WITH ROLLBACK IMMEDIATE ;");
                context.Database.ExecuteSqlCommand(@"
                                                    CREATE TABLE[Log](
                                                       [Id] int IDENTITY(1, 1) NOT NULL,
                                                       [Message] nvarchar(max) NULL,
                                                       [MessageTemplate] nvarchar(max) NULL,
                                                       [Level] nvarchar(128) NULL,
                                                       [TimeStamp] datetimeoffset(7) NOT NULL,
                                                       [Exception] nvarchar(max) NULL,
                                                       [Properties] xml NULL,
                                                       [LogEvent] nvarchar(max) NULL
                                                       CONSTRAINT[PK_Log]
                                                         PRIMARY KEY CLUSTERED([Id] ASC)
                                                     
                                                    ) ");
                context.Database.ExecuteSqlCommand(@"CREATE PROCEDURE PI_Insert_Event_Detail(
                                                    @event_id INT,
                                                    @event_status_id INT, 
                                                    @event_detail_name VARCHAR(50),
                                                    @event_detail_number SMALLINT,
                                                    @event_detail_odd DECIMAL,
                                                    @finishing_position SMALLINT,
                                                    @first_timer BIT
                                                   )
                                                   AS 
                                                   
                                                   BEGIN
                                                   INSERT INTO hwb.EventDetail
                                                   SELECT @event_id, @event_status_id,@event_detail_name,@event_detail_number,@event_detail_odd,@finishing_position,@first_timer
                                                   
                                                   END"
                                                   );

                context.Database.ExecuteSqlCommand(@"CREATE PROCEDURE PI_Insert_Event(
                                                    @tournament_id INT,
                                                    @event_name VARCHAR(100), 
                                                    @event_number VARCHAR(50),
                                                    @event_date_time DATETIME,
                                                    @event_end_date_time DATETIME,
                                                    @auto_close BIT
                                                   )
                                                   AS 
                                                   
                                                   BEGIN
                                                   INSERT INTO hwb.Event
                                                   SELECT @tournament_id, @event_name,@event_number,@event_date_time,@event_end_date_time,@auto_close
                                                   
                                                   END");

                context.Roles.Add(new Microsoft.AspNetCore.Identity.IdentityRole() {Name="Admin", NormalizedName="Admin"  });
                context.Tournaments.AddRange(jockey, vaal);
                context.SaveChanges();
            }

        }
    }
}
