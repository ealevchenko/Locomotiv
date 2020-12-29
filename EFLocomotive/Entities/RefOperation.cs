namespace EFLocomotive.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("RefOperation")]
    public partial class RefOperation
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public RefOperation()
        {
            LnkUDO = new HashSet<LnkUDO>();
        }

        [Key]
        public int idOperation { get; set; }

        [Required]
        [StringLength(50)]
        public string Operation { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LnkUDO> LnkUDO { get; set; }
    }
}
