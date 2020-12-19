namespace EFLocomotive.Model
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Model1 : DbContext
    {
        public Model1()
            : base("name=LM")
        {
        }

        public virtual DbSet<LnkUDO> LnkUDO { get; set; }
        public virtual DbSet<RefDamage> RefDamage { get; set; }
        public virtual DbSet<RefNumLoko> RefNumLoko { get; set; }
        public virtual DbSet<RefOperation> RefOperation { get; set; }
        public virtual DbSet<RefSystems> RefSystems { get; set; }
        public virtual DbSet<RefUnit> RefUnit { get; set; }
        public virtual DbSet<sysdiagrams> sysdiagrams { get; set; }
        public virtual DbSet<TabActions> TabActions { get; set; }
        public virtual DbSet<TabRepairs> TabRepairs { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<LnkUDO>()
                .HasMany(e => e.TabActions)
                .WithRequired(e => e.LnkUDO)
                .HasForeignKey(e => e.IDLnkUDO)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<RefDamage>()
                .HasMany(e => e.LnkUDO)
                .WithRequired(e => e.RefDamage)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<RefNumLoko>()
                .HasMany(e => e.TabRepairs)
                .WithRequired(e => e.RefNumLoko)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<RefOperation>()
                .HasMany(e => e.LnkUDO)
                .WithRequired(e => e.RefOperation)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<RefSystems>()
                .HasMany(e => e.RefUnit)
                .WithRequired(e => e.RefSystems)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<RefUnit>()
                .HasMany(e => e.LnkUDO)
                .WithRequired(e => e.RefUnit)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<TabRepairs>()
                .HasMany(e => e.TabActions)
                .WithRequired(e => e.TabRepairs)
                .WillCascadeOnDelete(false);
        }
    }
}
