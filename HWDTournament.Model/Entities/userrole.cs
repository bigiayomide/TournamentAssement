using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HWBTournament.Model.Entities
{
    [Table("userroles", Schema = "hwb")]
    public class userrole : IEntityBase
    {
        public int Id { get; set; }

        public int userid { get; set; }
        public int roleid { get; set; }
        public bool isactive { get; set; }
        public DateTime date_created { get; set; }
        public DateTime? date_updated { get; set; }
        public virtual role role { get; set; }
    }
}
