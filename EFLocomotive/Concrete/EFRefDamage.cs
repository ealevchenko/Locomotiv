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
    public class EFRefDamage : IRepository<RefDamage>
    {

        private EFDbContext db;

        public EFRefDamage(EFDbContext db)
        {

            this.db = db;
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IQueryable<RefDamage> Context
        {
            get { return db.RefDamage; }
        }

        public IEnumerable<RefDamage> Get()
        {
            try
            {
                return db.Select<RefDamage>();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public RefDamage Get(int id)
        {
            try
            {
                return db.Select<RefDamage>(id);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public void Add(RefDamage item)
        {
            try
            {
                db.Insert<RefDamage>(item);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void Update(RefDamage item)
        {
            try
            {
                db.Update<RefDamage>(item);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void AddOrUpdate(RefDamage item)
        {
            try
            {
                RefDamage dbEntry = db.RefDamage.Find(item.idDamage);
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
                RefDamage item = db.Delete<RefDamage>(idAction);
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

        public RefDamage Refresh(RefDamage item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<RefDamage>(item.idDamage);
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

        public void Add(IEnumerable<RefDamage> items)
        {
            try
            {
                db.Inserts<RefDamage>(items);
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
                db.Delete<RefDamage>(items);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void Update(IEnumerable<RefDamage> items)
        {
            try
            {
                db.Updates<RefDamage>(items);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
