﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HWBTournament.Model.Entities
{
    [Table("Tournament", Schema = "hwb")]
    public class tournament : IEntityBase
    {
        public tournament()
        {
            @events = new List<@event>();
        }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        [Column("TournamentID")]
        public int Id { get; set; }
        [Required]
        [Column("TournamentName")]
        [MaxLength(200, ErrorMessage = "Too Much characters for field Tournament Name")]
        public string tournament_name {get;set;}
        public List<@event> @events { get; set; }
    }
}
