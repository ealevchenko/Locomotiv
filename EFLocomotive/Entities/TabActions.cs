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
        public int idAction { get; set; }

        public int IDRepair { get; set; }

        public int IDLnkUDO { get; set; }

        public DateTime DateActiion { get; set; }

        public float? HRresourse { get; set; }

        public virtual LnkUDO LnkUDO { get; set; }

        public virtual TabRepairs TabRepairs { get; set; }
    }
}
