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
    public class EFRefSystems : IRepository<RefSystems>
    {

        private EFDbContext db;

        public EFRefSystems(EFDbContext db)
        {

            this.db = db;
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IQueryable<RefSystems> Context
        {
            get { return db.RefSystems; }
        }

        public IEnumerable<RefSystems> Get()
        {
            try
            {
                return db.Select<RefSystems>();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public RefSystems Get(int id)
        {
            try
            {
                return db.Select<RefSystems>(id);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public void Add(RefSystems item)
        {
            try
            {
                db.Insert<RefSystems>(item);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void Update(RefSystems item)
        {
            try
            {
                db.Update<RefSystems>(item);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void AddOrUpdate(RefSystems item)
        {
            try
            {
                RefSystems dbEntry = db.RefSystems.Find(item.idSystem);
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
                RefSystems item = db.Delete<RefSystems>(idAction);
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

        public RefSystems Refresh(RefSystems item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<RefSystems>(item.idSystem);
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

        public void Add(IEnumerable<RefSystems> items)
        {
            try
            {
                db.Inserts<RefSystems>(items);
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
                db.Delete<RefSystems>(items);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void Update(IEnumerable<RefSystems> items)
        {
            try
            {
                db.Updates<RefSystems>(items);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
