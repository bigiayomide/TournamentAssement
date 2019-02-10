using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HWBTournament.Model.Entities
{
    [Table("Event", Schema = "hwb")]
    public class Event : IEntityBase
    {
        public Event()
        {
            event_details = new List<EventDetail>();
        }
        [Key]
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("EventID")]
        public int Id { get; set; }

        [Column("FK_TournamentID")]
        public int tournament_id { get; set; }

        [Column("EventName")]
        [Required]
        [MaxLength(100, ErrorMessage ="Too many Characters. Maximum is 200")]
        public string event_name { get; set; }

        [Column("EventNumber")]
        [Required]
        public short event_number { get; set; }

        [Column("EventDateTime")]
        [Required]
        public DateTime event_date_time { get; set; }

        [Column("EventEndDateTime")]
        public DateTime event_end_date_time { get; set; }

        [Column("AutoClose")]
        [Required]
        public bool auto_close { get; set; }
        public List<EventDetail> event_details { get; set; }

        public Tournament tournament { get; set; }
    }

    public class EventConfiguration : IEntityTypeConfiguration<Event>
    {
        public void Configure(EntityTypeBuilder<Event> builder)
        {
            builder.HasMany(x => x.event_details)
                  .WithOne(x => x.Event)
                  .HasForeignKey(x => x.event_id)
                  .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(x => x.tournament)
                .WithMany(x => x.Events)
                .HasForeignKey(x => x.tournament_id);
        }
    }
}
