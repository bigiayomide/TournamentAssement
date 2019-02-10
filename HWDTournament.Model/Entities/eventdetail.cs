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
    public class EventDetail : IEntityBase
    {
        [Key]
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("EventDetailID")]
        public int Id { get; set; }

        [Column("FK_EventID")]
        public int event_id { get; set; }

        [Column("FK_EventDetailStatusID")]
        public int event_status_id { get; set; }

        [Required]
        [Column("EventDetailName")]
        [MaxLength(50, ErrorMessage ="Too Much characters for field Event Detail Name")]
        public string event_detail_name { get; set; }

        [Required]
        [Column("EventDetailNumber")]
        public short event_detail_number { get; set; }

        [Required]
        [Column("EventDetailOdd", TypeName = "decimal(18, 2)")]
        public decimal event_detail_odd { get; set; }

        [Required]
        [Column("FinishingPosition")]
        public short finishing_position { get; set; }

        [Required]
        [Column("FirstTimer")]
        public bool first_timer { get; set; }
        public Event Event { get; set; }
        public EventDetailStatus event_detail_status { get; set; }

    }

    public class EventdetailConfiguration : IEntityTypeConfiguration<EventDetail>
    {
        public void Configure(EntityTypeBuilder<EventDetail> builder)
        {
            builder.HasOne(x => x.Event)
                .WithMany(x => x.event_details)
                .HasForeignKey(x => x.event_id);

            builder.HasOne(x => x.event_detail_status)
                .WithMany(x => x.eventdetails)
                .HasForeignKey(x => x.event_status_id);
        }
    }

}
