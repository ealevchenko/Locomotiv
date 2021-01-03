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
                Damage = d.Damage, 
                LnkUDO = null
            };
        }

        public static RefSystems GetRefSystems(this RefSystems s)
        {
            if (s == null) return null;
            return new RefSystems()
            {
                idSystem = s.idSystem,
                System = s.System,
                RefUnit = null
            };
        }

        public static RefOperation GetRefOperation(this RefOperation o)
        {
            if (o == null) return null;
            return new RefOperation()
            {
                idOperation = o.idOperation,
                Operation = o.Operation,
                LnkUDO = null
            };
        }

        public static RefUnit GetRefUnit(this RefUnit u)
        {
            if (u == null) return null;
            return new RefUnit()
            {
                idUnit = u.idUnit,
                IDSystem = u.IDSystem,
                Unit = u.Unit,
                LnkUDO = null,
                RefSystems = u.RefSystems.GetRefSystems()
            };
        }

        public static LnkUDO GetLnkUDO(this LnkUDO l)
        {
            if (l == null) return null;
            return new LnkUDO()
            {
                idLinkUDO = l.idLinkUDO,
                IDUnit = l.IDUnit,
                IDDamage = l.IDDamage,
                IDOperation = l.IDOperation,
                HumanHour = l.HumanHour,
                Note = l.Note,
                RefUnit = l.RefUnit.GetRefUnit(),
                RefDamage = l.RefDamage.GetRefDamage(),
                RefOperation = l.RefOperation.GetRefOperation(),
                TabActions = null
            };
        }
    }
}
