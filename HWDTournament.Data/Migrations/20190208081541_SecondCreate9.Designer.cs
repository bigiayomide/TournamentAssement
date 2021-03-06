﻿// <auto-generated />
using System;
using HWBTournament.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace HWBTournament.Data.Migrations
{
    [DbContext(typeof(HWBTournamentContext))]
    [Migration("20190208081541_SecondCreate9")]
    partial class SecondCreate9
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.1-servicing-10028")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("HWBTournament.Model.Entities.event", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("EventID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("auto_close")
                        .HasColumnName("AutoClose");

                    b.Property<DateTime>("event_date_time")
                        .HasColumnName("EventDateTime");

                    b.Property<DateTime>("event_end_date_time")
                        .HasColumnName("EventEndDateTime");

                    b.Property<string>("event_name")
                        .IsRequired()
                        .HasColumnName("EventName")
                        .HasMaxLength(100);

                    b.Property<short>("event_number")
                        .HasColumnName("EventNumber");

                    b.Property<int>("tournament_id")
                        .HasColumnName("FK_TournamentID");

                    b.HasKey("Id");

                    b.HasIndex("tournament_id");

                    b.ToTable("Event","hwb");
                });

            modelBuilder.Entity("HWBTournament.Model.Entities.eventdetail", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("EventDetailID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("event_detail_name")
                        .IsRequired()
                        .HasColumnName("EventDetailName")
                        .HasMaxLength(50);

                    b.Property<short>("event_detail_number")
                        .HasColumnName("EventDetailNumber");

                    b.Property<decimal>("event_detail_odd")
                        .HasColumnName("EventDetailOdd")
                        .HasColumnType("decimal(18, 2)");

                    b.Property<int>("event_id")
                        .HasColumnName("FK_EventID");

                    b.Property<int>("event_status_id")
                        .HasColumnName("FK_EventDetailStatusID");

                    b.Property<short>("finishing_position")
                        .HasColumnName("FinishingPosition");

                    b.Property<bool>("first_timer")
                        .HasColumnName("FirstTimer");

                    b.HasKey("Id");

                    b.HasIndex("event_id");

                    b.HasIndex("event_status_id");

                    b.ToTable("EventDetail","hwb");
                });

            modelBuilder.Entity("HWBTournament.Model.Entities.eventdetailstatus", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("EventDetailsStatusID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("event_detail_status_name")
                        .IsRequired()
                        .HasColumnName("EventDetailsStatusName")
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("EventDetailStatus","hwb");
                });

            modelBuilder.Entity("HWBTournament.Model.Entities.role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("date_created");

                    b.Property<DateTime?>("date_updated");

                    b.Property<string>("description");

                    b.Property<bool>("isactive");

                    b.HasKey("Id");

                    b.ToTable("roles","hwb");
                });

            modelBuilder.Entity("HWBTournament.Model.Entities.tournament", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("TournamentID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("tournament_name")
                        .IsRequired()
                        .HasColumnName("TournamentName")
                        .HasMaxLength(200);

                    b.HasKey("Id");

                    b.ToTable("Tournament","hwb");
                });

            modelBuilder.Entity("HWBTournament.Model.Entities.user", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("date_created");

                    b.Property<DateTime?>("date_updated");

                    b.Property<string>("hashed_password");

                    b.Property<bool>("isactive");

                    b.Property<string>("salt");

                    b.Property<string>("username");

                    b.Property<int>("usr_code");

                    b.HasKey("Id");

                    b.ToTable("users","hwb");
                });

            modelBuilder.Entity("HWBTournament.Model.Entities.userrole", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("date_created");

                    b.Property<DateTime?>("date_updated");

                    b.Property<bool>("isactive");

                    b.Property<int>("roleid");

                    b.Property<int>("userid");

                    b.HasKey("Id");

                    b.HasIndex("roleid");

                    b.HasIndex("userid");

                    b.ToTable("userroles","hwb");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("HWBTournament.Model.Entities.event", b =>
                {
                    b.HasOne("HWBTournament.Model.Entities.tournament", "tournament")
                        .WithMany("events")
                        .HasForeignKey("tournament_id")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("HWBTournament.Model.Entities.eventdetail", b =>
                {
                    b.HasOne("HWBTournament.Model.Entities.event", "event")
                        .WithMany("event_details")
                        .HasForeignKey("event_id")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("HWBTournament.Model.Entities.eventdetailstatus", "event_detail_status")
                        .WithMany("eventdetails")
                        .HasForeignKey("event_status_id")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("HWBTournament.Model.Entities.userrole", b =>
                {
                    b.HasOne("HWBTournament.Model.Entities.role", "role")
                        .WithMany()
                        .HasForeignKey("roleid")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("HWBTournament.Model.Entities.user")
                        .WithMany("userroles")
                        .HasForeignKey("userid")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
