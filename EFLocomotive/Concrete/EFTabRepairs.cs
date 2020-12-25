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
    public class EFTabRepairs : IRepository<TabRepairs>
    {

        private EFDbContext db;

        public EFTabRepairs(EFDbContext db)
        {

            this.db = db;
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IQueryable<TabRepairs> Context
        {
            get { return db.TabRepairs; }
        }

        public IEnumerable<TabRepairs> Get()
        {
            try
            {
                return db.Select<TabRepairs>();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public TabRepairs Get(int id)
        {
            try
            {
                return db.Select<TabRepairs>(id);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public void Add(TabRepairs item)
        {
            try
            {
                db.Insert<TabRepairs>(item);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void Update(TabRepairs item)
        {
            try
            {
                db.Update<TabRepairs>(item);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void AddOrUpdate(TabRepairs item)
        {
            try
            {
                TabRepairs dbEntry = db.TabRepairs.Find(item.idRepair);
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

        public void Delete(int id)
        {
            try
            {
                TabRepairs item = db.Delete<TabRepairs>(id);
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

        public TabRepairs Refresh(TabRepairs item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<TabRepairs>(item.idRepair);
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

        public void Add(IEnumerable<TabRepairs> items)
        {
            try
            {
                db.Inserts<TabRepairs>(items);
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
                db.Delete<TabRepairs>(items);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void Update(IEnumerable<TabRepairs> items)
        {
            try
            {
                db.Updates<TabRepairs>(items);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
