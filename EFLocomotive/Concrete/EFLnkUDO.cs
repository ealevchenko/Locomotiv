using EFLocomotive.Abstract;
using EFLocomotive.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFLocomotive.Concrete
{
    public class EFLnkUDO : IRepository<LnkUDO>
    {

        private EFDbContext db;

        public EFLnkUDO(EFDbContext db)
        {

            this.db = db;
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IQueryable<LnkUDO> Context
        {
            get { return db.LnkUDO; }
        }

        public IEnumerable<LnkUDO> Get()
        {
            try
            {
                return db.Select<LnkUDO>();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public LnkUDO Get(int id)
        {
            try
            {
                return db.Select<LnkUDO>(id);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public void Add(LnkUDO item)
        {
            try
            {
                db.Insert<LnkUDO>(item);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void Update(LnkUDO item)
        {
            try
            {
                db.Update<LnkUDO>(item);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void AddOrUpdate(LnkUDO item)
        {
            try
            {
                LnkUDO dbEntry = db.LnkUDO.Find(item.idLinkUDO);
                if (dbEntry == null)
                {
                    Add(item);
                }
                else
                {
                    Update(item);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

        }

        public void Delete(int idAction)
        {
            try
            {
                LnkUDO item = db.Delete<LnkUDO>(idAction);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public int Save()
        {
            try
            {
                return db.SaveChanges();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return -1;
            }
        }

        public LnkUDO Refresh(LnkUDO item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<LnkUDO>(item.idLinkUDO);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        private bool disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    db.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public void Add(IEnumerable<LnkUDO> items)
        {
            try
            {
                db.Inserts<LnkUDO>(items);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void Delete(IEnumerable<int> items)
        {
            try
            {
                db.Delete<LnkUDO>(items);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void Update(IEnumerable<LnkUDO> items)
        {
            try
            {
                db.Updates<LnkUDO>(items);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
