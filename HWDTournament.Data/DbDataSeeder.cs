﻿using HWBTournament.Model.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace HWBTournament.Data
{
    public class DbDataSeeder
    {
        private HWBTournamentContext context;
        public DbDataSeeder(HWBTournamentContext context)
        {
            this.context = context;
        }

        public void Seed()
        {
            if (!context.Tournaments.Any())
            {
                var jockey = new tournament() { tournament_name = "Jockey 2013" };
                var vaal = new tournament() { tournament_name = "Vaal" };

                jockey.events.AddRange(new List<@event>()
                {
                    new @event  { event_name="Race", event_number=1, event_date_time=DateTime.Now, event_end_date_time=DateTime.Now.AddDays(4), auto_close = true },

                    new @event  { event_name="Race", event_number=1, event_date_time=DateTime.Now, event_end_date_time=DateTime.Now.AddDays(4), auto_close = true },
                });

                vaal.events.AddRange(new List<@event>()
                {
                    new @event { event_name="Race", event_number=1, event_date_time=DateTime.Now,  auto_close = true },
                    new @event  { event_name="Race", event_number=2, event_date_time=DateTime.Now, auto_close = true },
                    new @event  { event_name="Race", event_number=3, event_date_time=DateTime.Now, auto_close = true,
                                  event_details = new List<eventdetail>()
                                  {
                                       new eventdetail() { event_detail_name= "Auriferous",  event_detail_odd= 8.330000M, finishing_position = 1, first_timer = false },
                                       new eventdetail() { event_detail_name= "Gallipoli", event_detail_odd=  14.290000M, finishing_position = 1, first_timer = false },
                                       new eventdetail() { event_detail_name= "Ninja Warior", event_detail_odd= 10.000000M, finishing_position = 1, first_timer = false },
                                       new eventdetail() { event_detail_name= "Scientist", event_detail_odd= 20.000000M, finishing_position = 1, first_timer = false },
                                       new eventdetail() { event_detail_name= "Augusta Pines", event_detail_odd= 33.330000M, finishing_position = 1, first_timer = false },
                                       new eventdetail() { event_detail_name= "Golden Guinea", event_detail_odd= 33.330000M, finishing_position = 1, first_timer = false },
                                       new eventdetail() { event_detail_name= "Royal Stock", event_detail_odd= 50.000000M, finishing_position = 1, first_timer = false,  },
                                  }
                    },
                    new @event  { event_name="Race", event_number=4, event_date_time=DateTime.Now, auto_close = true },
                    new @event  { event_name="Race", event_number=5, event_date_time=DateTime.Now, auto_close = true },
                    new @event  { event_name="Race", event_number=6, event_date_time=DateTime.Now, auto_close = true }
                });

                context.EventDetailStatuses.AddRange(new List<eventdetailstatus>()
                {
                    new eventdetailstatus() { event_detail_status_name = "Active" },
                    new eventdetailstatus() { event_detail_status_name = "Scratched" },
                    new eventdetailstatus() { event_detail_status_name = "Closed" },
                });
                context.Tournaments.AddRange(jockey, vaal);


                context.SaveChanges();
            }
        }
    }
}
