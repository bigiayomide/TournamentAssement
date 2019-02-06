using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace HWBTournament.Model.Entities
{
    [Table("roles", Schema = "hwb")]
    public class role : IEntityBase
    {
        public int Id { get; set; }
        public string description { get; set; }
        public bool isactive { get; set; }
        public DateTime date_created { get; set; }
        public DateTime? date_updated { get; set; }
    }
}
