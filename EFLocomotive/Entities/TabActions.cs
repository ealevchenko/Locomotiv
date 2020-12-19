namespace EFLocomotive.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class TabActions
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int idAction { get; set; }

        public int IDRepair { get; set; }

        public int IDLnkUDO { get; set; }

        [Column(TypeName = "date")]
        public DateTime DateActiion { get; set; }

        public float? HRresourse { get; set; }

        public virtual LnkUDO LnkUDO { get; set; }

        public virtual TabRepairs TabRepairs { get; set; }
    }
}
