using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HWBTournament.Model.Entities
{
    [Table("EventDetail", Schema = "hwb")]
    public class eventdetail : IEntityBase
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("EventDetailID")]
        public int Id { get; set; }

        [Required]
        [Column("EventDetailID")]
        public int event_detail_id { get; set; }

        [Required]
        [Column("EventDetailName")]
        [MaxLength(50, ErrorMessage ="Too Much characters for field Event Detail Name")]
        public string event_detail_name { get; set; }

        [Required]
        [Column("EventDetailNumber")]
        public short event_detail_number { get; set; }

        [Required]
        [Column("EventDetailOdd")]
        [PrecisionAndScale(8, 2, ErrorMessage = "Total Cost must not exceed $9999.99")]
        public decimal event_detail_odd { get; set; }

        [Required]
        [Column("FinishingPosition")]
        public short finishing_position { get; set; }

        [Required]
        [Column("FirstTimer")]
        public bool first_timer { get; set; }
        public @event @event { get; set; }
        public eventdetailstatus event_detail_status { get; set; }

    }

    public class PrecisionAndScaleAttribute : RegularExpressionAttribute
    {
        public PrecisionAndScaleAttribute(int precision, int scale) : base($@"^(0|-?\d{{0,{precision - scale}}}(\.\d{{0,{scale}}})?)$")
        {

        }
    }

}
