using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HWBTournament.Data.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "hwb");

            migrationBuilder.CreateTable(
                name: "EventDetailStatus",
                schema: "hwb",
                columns: table => new
                {
                    EventDetailsStatusID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    EventDetailsStatusName = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventDetailStatus", x => x.EventDetailsStatusID);
                });

            migrationBuilder.CreateTable(
                name: "Tournament",
                schema: "hwb",
                columns: table => new
                {
                    TournamentID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    TournamentName = table.Column<string>(maxLength: 200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tournament", x => x.TournamentID);
                });

            migrationBuilder.CreateTable(
                name: "Event",
                schema: "hwb",
                columns: table => new
                {
                    EventID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FK_TournamentID = table.Column<int>(nullable: false),
                    EventName = table.Column<string>(maxLength: 100, nullable: false),
                    EventNumber = table.Column<short>(nullable: false),
                    EventDateTime = table.Column<DateTime>(nullable: false),
                    EventEndDateTime = table.Column<DateTime>(nullable: false),
                    AutoClose = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Event", x => x.EventID);
                    table.ForeignKey(
                        name: "FK_Event_Tournament_FK_TournamentID",
                        column: x => x.FK_TournamentID,
                        principalSchema: "hwb",
                        principalTable: "Tournament",
                        principalColumn: "TournamentID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EventDetail",
                schema: "hwb",
                columns: table => new
                {
                    EventDetailID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FK_EventID = table.Column<int>(nullable: false),
                    FK_EventDetailStatusID = table.Column<int>(nullable: false),
                    EventDetailName = table.Column<string>(maxLength: 50, nullable: false),
                    EventDetailNumber = table.Column<short>(nullable: false),
                    EventDetailOdd = table.Column<decimal>(nullable: false),
                    FinishingPosition = table.Column<short>(nullable: false),
                    FirstTimer = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventDetail", x => x.EventDetailID);
                    table.ForeignKey(
                        name: "FK_EventDetail_Event_FK_EventID",
                        column: x => x.FK_EventID,
                        principalSchema: "hwb",
                        principalTable: "Event",
                        principalColumn: "EventID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EventDetail_EventDetailStatus_FK_EventDetailStatusID",
                        column: x => x.FK_EventDetailStatusID,
                        principalSchema: "hwb",
                        principalTable: "EventDetailStatus",
                        principalColumn: "EventDetailsStatusID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Event_FK_TournamentID",
                schema: "hwb",
                table: "Event",
                column: "FK_TournamentID");

            migrationBuilder.CreateIndex(
                name: "IX_EventDetail_FK_EventID",
                schema: "hwb",
                table: "EventDetail",
                column: "FK_EventID");

            migrationBuilder.CreateIndex(
                name: "IX_EventDetail_FK_EventDetailStatusID",
                schema: "hwb",
                table: "EventDetail",
                column: "FK_EventDetailStatusID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EventDetail",
                schema: "hwb");

            migrationBuilder.DropTable(
                name: "Event",
                schema: "hwb");

            migrationBuilder.DropTable(
                name: "EventDetailStatus",
                schema: "hwb");

            migrationBuilder.DropTable(
                name: "Tournament",
                schema: "hwb");
        }
    }
}
