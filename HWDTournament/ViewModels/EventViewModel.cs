using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HWBTournament.API.ViewModels
{
    public class EventViewModel
    {
        public int id { get; set; }

        public int tournament_id { get; set; }

        public string event_name { get; set; }

        public short event_number { get; set; }

        public DateTime event_date_time { get; set; }

        public DateTime event_end_date_time { get; set; }

        public bool auto_close { get; set; }
        //public List<eventdetail> event_details { get; set; }

        public TournamentViewModel tournament { get; set; }
    }
}
