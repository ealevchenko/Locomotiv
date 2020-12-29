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
    public class EFRefNumLoko : IRepository<RefNumLoko>
    {

        private EFDbContext db;

        public EFRefNumLoko(EFDbContext db)
        {

            this.db = db;
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IQueryable<RefNumLoko> Context
        {
            get { return db.RefNumLoko; }
        }

        public IEnumerable<RefNumLoko> Get()
        {
            try
            {
                return db.Select<RefNumLoko>();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public RefNumLoko Get(int id)
        {
            try
            {
                return db.Select<RefNumLoko>(id);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public void Add(RefNumLoko item)
        {
            try
            {
                db.Insert<RefNumLoko>(item);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void Update(RefNumLoko item)
        {
            try
            {
                db.Update<RefNumLoko>(item);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void AddOrUpdate(RefNumLoko item)
        {
            try
            {
                RefNumLoko dbEntry = db.RefNumLoko.Find(item.idNumLoko);
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
                RefNumLoko item = db.Delete<RefNumLoko>(idAction);
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

        public RefNumLoko Refresh(RefNumLoko item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<RefNumLoko>(item.idNumLoko);
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

        public void Add(IEnumerable<RefNumLoko> items)
        {
            try
            {
                db.Inserts<RefNumLoko>(items);
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
                db.Delete<RefNumLoko>(items);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void Update(IEnumerable<RefNumLoko> items)
        {
            try
            {
                db.Updates<RefNumLoko>(items);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
