using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HWBTournament.Data.Migrations
{
    public partial class SecondCreate7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "roles",
                schema: "hwb",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    description = table.Column<string>(nullable: true),
                    isactive = table.Column<bool>(nullable: false),
                    date_created = table.Column<DateTime>(nullable: false),
                    date_updated = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "users",
                schema: "hwb",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    username = table.Column<string>(nullable: true),
                    usr_code = table.Column<int>(nullable: false),
                    hashed_password = table.Column<string>(nullable: true),
                    salt = table.Column<string>(nullable: true),
                    isactive = table.Column<bool>(nullable: false),
                    date_created = table.Column<DateTime>(nullable: false),
                    date_updated = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "userroles",
                schema: "hwb",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    userid = table.Column<int>(nullable: false),
                    roleid = table.Column<int>(nullable: false),
                    isactive = table.Column<bool>(nullable: false),
                    date_created = table.Column<DateTime>(nullable: false),
                    date_updated = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_userroles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_userroles_roles_roleid",
                        column: x => x.roleid,
                        principalSchema: "hwb",
                        principalTable: "roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_userroles_users_userid",
                        column: x => x.userid,
                        principalSchema: "hwb",
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_userroles_roleid",
                schema: "hwb",
                table: "userroles",
                column: "roleid");

            migrationBuilder.CreateIndex(
                name: "IX_userroles_userid",
                schema: "hwb",
                table: "userroles",
                column: "userid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "userroles",
                schema: "hwb");

            migrationBuilder.DropTable(
                name: "roles",
                schema: "hwb");

            migrationBuilder.DropTable(
                name: "users",
                schema: "hwb");
        }
    }
}
