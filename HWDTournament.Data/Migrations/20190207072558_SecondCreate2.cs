using Microsoft.EntityFrameworkCore.Migrations;

namespace HWBTournament.Data.Migrations
{
    public partial class SecondCreate2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "EventDetailOdd",
                schema: "hwb",
                table: "EventDetail",
                type: "decimal(18, 2)",
                nullable: false,
                oldClrType: typeof(decimal));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "EventDetailOdd",
                schema: "hwb",
                table: "EventDetail",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18, 2)");
        }
    }
}
