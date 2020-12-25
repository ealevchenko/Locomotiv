namespace EFLocomotive.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class TabRepairs
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public TabRepairs()
        {
            TabActions = new HashSet<TabActions>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int idRepair { get; set; }

        public int IDNumLoko { get; set; }

        public DateTime DateTimeStartRepair { get; set; }

        public DateTime? DateTimeEndRepair { get; set; }

        public virtual RefNumLoko RefNumLoko { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TabActions> TabActions { get; set; }
    }
}
