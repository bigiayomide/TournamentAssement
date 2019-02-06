using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HWBTournament.Model.Entities
{
    [Table("EventDetailStatus", Schema = "hwb")]
    public class eventdetailstatus:IEntityBase
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        [Column("EventDetailsStatusID")]
        public int Id { get; set; }

        [Column("EventDetailsStatusName")]
        [Required]
        [MaxLength(50, ErrorMessage = "Too Much characters for field Event Detail Name")]
        public string event_detail_status_name { get; set; }
    }
}
