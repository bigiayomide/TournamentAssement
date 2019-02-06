using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HWBTournament.Model.Entities
{
    [Table("errors", Schema = "hwb")]
    public class error : IEntityBase
    {
        public int Id { get; set; }
        public string message { get; set; }
        public string stacktrace { get; set; }
        public DateTime date_created { get; set; }
    }
}
