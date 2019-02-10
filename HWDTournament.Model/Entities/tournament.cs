using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HWBTournament.Model.Entities
{
    [Table("Tournament", Schema = "hwb")]
    public class Tournament : IEntityBase
    {
        public Tournament()
        {
            Events = new List<Event>();
        }
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        [Column("TournamentID")]
        public int Id { get; set; }
        [Required]
        [Column("TournamentName")]
        [MaxLength(200, ErrorMessage = "Too Much characters for field Tournament Name")]
        public string tournament_name {get;set;}
        public List<Event> Events { get; set; }
    }
    public class TournamentConfiguration : IEntityTypeConfiguration<Tournament>
    {
        public void Configure(EntityTypeBuilder<Tournament> builder)
        {
            builder.HasMany(x => x.Events)
                .WithOne(x => x.tournament)
                .HasForeignKey(x => x.tournament_id)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
