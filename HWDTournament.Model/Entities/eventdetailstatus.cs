using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HWBTournament.Model.Entities
{
    [Table("EventDetailStatus", Schema = "hwb")]
    public class EventDetailStatus:IEntityBase
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        [Column("EventDetailsStatusID")]
        public int Id { get; set; }

        [Column("EventDetailsStatusName")]
        [Required]
        [MaxLength(50, ErrorMessage = "Too Much characters for field Event Detail Name")]
        public string event_detail_status_name { get; set; }
        public List<EventDetail> eventdetails { get; set; }
    }
    public class EventdetailstatusConfiguration : IEntityTypeConfiguration<EventDetailStatus>
    {
        public void Configure(EntityTypeBuilder<EventDetailStatus> builder)
        {
            builder.HasMany(x => x.eventdetails)
                .WithOne(x => x.event_detail_status)
                .HasForeignKey(x => x.event_status_id)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
