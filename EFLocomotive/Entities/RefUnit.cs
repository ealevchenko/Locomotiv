namespace EFLocomotive.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("RefUnit")]
    public partial class RefUnit
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public RefUnit()
        {
            LnkUDO = new HashSet<LnkUDO>();
        }

        [Key]
        public int idUnit { get; set; }

        public int IDSystem { get; set; }

        [Required]
        [StringLength(50)]
        public string Unit { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LnkUDO> LnkUDO { get; set; }

        public virtual RefSystems RefSystems { get; set; }
    }
}
