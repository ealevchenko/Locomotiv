using EFLocomotive.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFLocomotive.Helper
{
    public static class Loc_Library
    {
        public static TabRepairs GetTabRepairs(this TabRepairs r)
        {
            if (r == null) return null;
            return new TabRepairs()
            {
                idRepair = r.idRepair,
                IDNumLoko = r.IDNumLoko,
                DateTimeStartRepair = r.DateTimeStartRepair,
                DateTimeEndRepair = r.DateTimeEndRepair,
                RefNumLoko = r.RefNumLoko.GetRefNumLoko()
            };
        }

        public static RefNumLoko GetRefNumLoko(this RefNumLoko l)
        {
            if (l == null) return null;
            return new RefNumLoko()
            {
                idNumLoko = l.idNumLoko,
                NumLoko = l.NumLoko
            };
        }

        public static TabActions GetTabActions(this TabActions a)
        {
            if (a == null) return null;
            return new TabActions()
            {
                idAction = a.idAction,
                IDRepair = a.IDRepair,
                IDLnkUDO = a.IDLnkUDO,
                DateActiion = a.DateActiion,
                HRresourse = a.HRresourse,
                LnkUDO = a.LnkUDO,
                TabRepairs = a.TabRepairs, 
            };
        }

        public static RefDamage GetRefDamage(this RefDamage d)
        {
            if (d == null) return null;
            return new RefDamage()
            {
                idDamage = d.idDamage,
                Damage = d.Damage
            };
        }
    }
}
