namespace EFLocomotive.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("LnkUDO")]
    public partial class LnkUDO
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public LnkUDO()
        {
            TabActions = new HashSet<TabActions>();
        }

        [Key]
        public int idLinkUDO { get; set; }

        public int IDUnit { get; set; }

        public int IDDamage { get; set; }

        public int IDOperation { get; set; }

        public float? HumanHour { get; set; }

        public string Note { get; set; }

        public virtual RefDamage RefDamage { get; set; }

        public virtual RefOperation RefOperation { get; set; }

        public virtual RefUnit RefUnit { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TabActions> TabActions { get; set; }
    }
}
