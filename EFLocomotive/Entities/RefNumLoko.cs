namespace EFLocomotive.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("RefNumLoko")]
    public partial class RefNumLoko
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public RefNumLoko()
        {
            TabRepairs = new HashSet<TabRepairs>();
        }

        [Key]
        public int idNumLoko { get; set; }

        [Required]
        [StringLength(15)]
        public string NumLoko { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TabRepairs> TabRepairs { get; set; }
    }
}
