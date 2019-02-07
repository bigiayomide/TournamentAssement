using HWBTournament.Model.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HWBTournament.API.ViewModels
{
    public class EventDetailViewModel
    {
        public int Id { get; set; }

        public int event_id { get; set; }

        public int event_status_id { get; set; }

        public string event_detail_name { get; set; }

        public short event_detail_number { get; set; }

        public decimal event_detail_odd { get; set; }

        public short finishing_position { get; set; }
        public bool first_timer { get; set; }
        //public @event @event { get; set; }
        //public eventdetailstatus event_detail_status { get; set; }
    }
}
