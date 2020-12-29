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
    public class EFRefOperation : IRepository<RefOperation>
    {

        private EFDbContext db;

        public EFRefOperation(EFDbContext db)
        {

            this.db = db;
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IQueryable<RefOperation> Context
        {
            get { return db.RefOperation; }
        }

        public IEnumerable<RefOperation> Get()
        {
            try
            {
                return db.Select<RefOperation>();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public RefOperation Get(int id)
        {
            try
            {
                return db.Select<RefOperation>(id);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public void Add(RefOperation item)
        {
            try
            {
                db.Insert<RefOperation>(item);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void Update(RefOperation item)
        {
            try
            {
                db.Update<RefOperation>(item);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void AddOrUpdate(RefOperation item)
        {
            try
            {
                RefOperation dbEntry = db.RefOperation.Find(item.idOperation);
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
                RefOperation item = db.Delete<RefOperation>(idAction);
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

        public RefOperation Refresh(RefOperation item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<RefOperation>(item.idOperation);
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

        public void Add(IEnumerable<RefOperation> items)
        {
            try
            {
                db.Inserts<RefOperation>(items);
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
                db.Delete<RefOperation>(items);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void Update(IEnumerable<RefOperation> items)
        {
            try
            {
                db.Updates<RefOperation>(items);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
