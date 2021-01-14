namespace EFLocomotive.Model
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class status_repairs_lokomotive
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int idNumLoko { get; set; }

        [Key]
        [Column(Order = 1)]
        [StringLength(15)]
        public string NumLoko { get; set; }

        public int? idRepair { get; set; }

        public DateTime? DateTimeStartRepair { get; set; }

        public DateTime? DateTimeEndRepair { get; set; }

        public int? repair { get; set; }

        public int? idAction { get; set; }

        public int? IDLnkUDO { get; set; }

        [StringLength(50)]
        public string Unit { get; set; }

        [StringLength(50)]
        public string Operation { get; set; }

        public float? HRresourse { get; set; }
    }
}
