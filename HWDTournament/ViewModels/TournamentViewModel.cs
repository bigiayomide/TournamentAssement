﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HWBTournament.API.ViewModels
{
    public class TournamentViewModel
    {

        public int Id { get; set; }
        public string tournament_name { get; set; }
        //public List<@event> @events { get; set; }
    }
}