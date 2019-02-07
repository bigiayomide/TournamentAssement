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
    public class @event : IEntityBase
    {
        public @event()
        {
            event_details = new List<eventdetail>();
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
        public List<eventdetail> event_details { get; set; }

        public tournament tournament { get; set; }
    }

    public class eventConfiguration : IEntityTypeConfiguration<@event>
    {
        public void Configure(EntityTypeBuilder<@event> builder)
        {
            builder.HasMany(x => x.event_details)
                  .WithOne(x => x.@event)
                  .HasForeignKey(x => x.event_id)
                  .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(x => x.tournament)
                .WithMany(x => x.@events)
                .HasForeignKey(x => x.tournament_id);
        }
    }
}
