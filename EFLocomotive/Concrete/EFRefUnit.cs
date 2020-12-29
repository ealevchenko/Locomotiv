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
    public class EFRefUnit : IRepository<RefUnit>
    {

        private EFDbContext db;

        public EFRefUnit(EFDbContext db)
        {

            this.db = db;
        }

        public Database Database
        {
            get { return this.db.Database; }
        }

        public IQueryable<RefUnit> Context
        {
            get { return db.RefUnit; }
        }

        public IEnumerable<RefUnit> Get()
        {
            try
            {
                return db.Select<RefUnit>();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public RefUnit Get(int id)
        {
            try
            {
                return db.Select<RefUnit>(id);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public void Add(RefUnit item)
        {
            try
            {
                db.Insert<RefUnit>(item);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void Update(RefUnit item)
        {
            try
            {
                db.Update<RefUnit>(item);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void AddOrUpdate(RefUnit item)
        {
            try
            {
                RefUnit dbEntry = db.RefUnit.Find(item.idUnit);
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
                RefUnit item = db.Delete<RefUnit>(idAction);
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

        public RefUnit Refresh(RefUnit item)
        {
            try
            {
                db.Entry(item).State = EntityState.Detached;
                return db.Select<RefUnit>(item.idUnit);
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

        public void Add(IEnumerable<RefUnit> items)
        {
            try
            {
                db.Inserts<RefUnit>(items);
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
                db.Delete<RefUnit>(items);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public void Update(IEnumerable<RefUnit> items)
        {
            try
            {
                db.Updates<RefUnit>(items);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
