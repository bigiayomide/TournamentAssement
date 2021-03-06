﻿using HWBTournament.Data.Contracts;
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
                    new Event { event_name="Race", event_number=1, event_date_time=DateTime.Now, event_end_date_time=DateTime.Now.AddDays(4),  auto_close = true },
                    new Event  { event_name="Race", event_number=2, event_date_time=DateTime.Now, event_end_date_time=DateTime.Now.AddDays(4),  auto_close = true },
                    new Event  { event_name="Race", event_number=3, event_date_time=DateTime.Now, event_end_date_time=DateTime.Now.AddDays(4),  auto_close = true,
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
                    new Event  { event_name="Race", event_number=4, event_date_time=DateTime.Now, event_end_date_time=DateTime.Now.AddDays(4),  auto_close = true },
                    new Event  { event_name="Race", event_number=5, event_date_time=DateTime.Now, event_end_date_time=DateTime.Now.AddDays(4), auto_close = true },
                    new Event  { event_name="Race", event_number=6, event_date_time=DateTime.Now, event_end_date_time=DateTime.Now.AddDays(4), auto_close = true }
                });


                context.Roles.Add(new Microsoft.AspNetCore.Identity.IdentityRole() { Name = "Admin", NormalizedName = "Admin" });
                context.Tournaments.AddRange(jockey, vaal);
                context.SaveChanges();

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
                context.Database.ExecuteSqlCommand(@"
                                                    CREATE FUNCTION GetHttp
                                                    (
                                                        @url varchar(8000)      
                                                    )
                                                    returns varchar(8000)
                                                    as
                                                    BEGIN
                                                        DECLARE @win int 
                                                        DECLARE @hr  int 
                                                        DECLARE @text varchar(8000)
                                                    
                                                        EXEC @hr=sp_OACreate 'WinHttp.WinHttpRequest.5.1',@win OUT 
                                                        IF @hr <> 0 EXEC sp_OAGetErrorInfo @win
                                                    
                                                        EXEC @hr=sp_OAMethod @win, 'Open',NULL,'GET',@url,'false'
                                                        IF @hr <> 0 EXEC sp_OAGetErrorInfo @win
                                                    
                                                        EXEC @hr=sp_OAMethod @win,'Send'
                                                        IF @hr <> 0 EXEC sp_OAGetErrorInfo @win
                                                    
                                                        EXEC @hr=sp_OAGetProperty @win,'ResponseText',@text OUTPUT
                                                        IF @hr <> 0 EXEC sp_OAGetErrorInfo @win
                                                    
                                                        EXEC @hr=sp_OADestroy @win 
                                                        IF @hr <> 0 EXEC sp_OAGetErrorInfo @win 
                                                       RETURN @text
                                                    END
                                                    
                                                    ");
                context.Database.ExecuteSqlCommand(@"
                                                    CREATE PROCEDURE PU_Update_Event(
                                                      @event_id INT,
                                                      @tournament_id INT,
                                                      @event_name VARCHAR(100), 
                                                      @event_number SMALLINT,
                                                      @event_date_time DATETIME,
                                                      @event_end_date_time DATETIME,
                                                      @auto_close BIT
                                                     )
                                                     AS 
                                                     
                                                     BEGIN
                                                     UPDATE hwb.Event
                                                      SET fk_tournamentid = @tournament_id,
                                                          eventname = @event_name,
                                                    	  eventnumber = @event_number,
                                                    	  eventdatetime = @event_date_time,
                                                    	  eventenddatetime = @event_end_date_time,
                                                    	  autoclose = @auto_close
                                                     WHERE 
                                                     	  eventid = @event_id
                                                     END");
                context.Database.ExecuteSqlCommand(@"
                                                     CREATE PROCEDURE PU_Update_EventDetail(
                                                       @EventDetailID INT,
                                                       @FK_EventID INT,
                                                       @FK_EventDetailStatusID INT, 
                                                       @EventDetailName VARCHAR(50),
                                                       @EventDetailNumber SMALLINT,
                                                       @EventDetailOdd DECIMAL,
                                                       @FinishingPosition SMALLINT,
                                                       @FirstTimer BIT
                                                      )
                                                      AS 
                                                      BEGIN
                                                      UPDATE hwb.EventDetail
                                                       SET FK_EventID = @FK_EventID,
                                                     	  FK_EventDetailStatusID = @FK_EventDetailStatusID,
                                                     	  EventDetailName = @EventDetailName,
                                                     	  EventDetailNumber = @EventDetailNumber,
                                                     	  EventDetailOdd = @EventDetailOdd,
                                                     	  FinishingPosition= @FinishingPosition,
                                                     	  FirstTimer=@FirstTimer
                                                      WHERE 
                                                      	  EventDetailID = @EventDetailID
                                                      END
                                                     ");

                context.Database.ExecuteSqlCommand(@"EXEC sp_configure 'show advanced options', 1 
                                                   RECONFIGURE; 
                                                   EXEC sp_configure 'Ole Automation Procedures', 1 
                                                   RECONFIGURE; 
                                                   EXEC sp_configure 'show advanced options', 1 
                                                   RECONFIGURE
                                                 ");
                context.Database.ExecuteSqlCommand(@"CREATE TRIGGER EventDetailInsertTrigger  
                                                    ON hwb.EventDetail  
                                                    AFTER INSERT,UPDATE   
                                                    AS
                                                    BEGIN
                                                     DECLARE @id INT;
                                                     SELECT @id= i.EventDetailID from inserted i
                                                     select dbo.GetHttp('http://localhost:52940/NotificationEventDetail/'+CAST(@id as varchar(600)))
                                                    END
                                                   ");
            }

        }
    }
}
