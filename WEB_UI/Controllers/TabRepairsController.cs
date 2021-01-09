using EFLocomotive.Concrete;
using EFLocomotive.Entities;
using EFLocomotive.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace WEB_UI.Controllers
{
    public class view_status_lokomotive
    {
        public int idNumLoko { get; set; }
        public string NumLoko { get; set; }
        public int? idRepair { get; set; }
        public DateTime? DateTimeStartRepair { get; set; }
        public int? repair { get; set; }
    }



    [RoutePrefix("api/tab_repairs")]
    public class TabRepairsController : ApiController
    {
        EFDbContext ef_contex;
        public TabRepairsController()
        {
            ef_contex = new EFDbContext();
        }

        // GET: api/tab_repairs/all
        [Route("all")]
        [ResponseType(typeof(TabRepairs))]
        public IHttpActionResult GetTabRepairs()
        {
            try
            {
                EFTabRepairs ef_trep = new EFTabRepairs(new EFDbContext());
                List<TabRepairs> list = ef_trep
                    .Context
                    .ToList()
                    .Select(m => m.GetTabRepairs())
                    .ToList();
                return Ok(list);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // GET: api/tab_repairs/view/status_locomotive
        [Route("view/status_locomotive")]
        [ResponseType(typeof(view_status_lokomotive))]
        public IHttpActionResult GetViewStatusLocomotive()
        {
            try
            {
                EFTabRepairs ef_trep = new EFTabRepairs(new EFDbContext());
                string sql = "select * from [dbo].[get_last_wms]() order by idNumLoko";
                List<view_status_lokomotive> list = ef_trep.Database.SqlQuery<view_status_lokomotive>(sql).ToList();
                return Ok(list);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // PUT api/tab_repairs/close/id
        /// <summary>
        /// Закрыть запись
        /// </summary>
        /// <param name="id"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("close/id/{id:int}")]
        public int PutCloseTabRepairs(int id)
        {
            try
            {
                EFTabRepairs ef_trep = new EFTabRepairs(new EFDbContext());
                TabRepairs value = ef_trep.Context.Where(r => r.idRepair == id).FirstOrDefault();
                value.DateTimeEndRepair = DateTime.Now;
                ef_trep.Update(value);
                return ef_trep.Save();
            }
            catch (Exception e)
            {
                return -1;
            }
        }

        // PUT api/tab_repairs/open/id
        /// <summary>
        /// Отправить в ремонт
        /// </summary>
        /// <param name="id"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("open/id/{id:int}")]
        public int PutOpenTabRepairs(int id)
        {
            try
            {
                EFTabRepairs ef_trep = new EFTabRepairs(new EFDbContext());
                TabRepairs value = new TabRepairs()
                {
                    idRepair = 0,
                    IDNumLoko = id,
                    DateTimeStartRepair = DateTime.Now,
                    DateTimeEndRepair = null

                };
                ef_trep.Add(value);
                return ef_trep.Save();
            }
            catch (Exception e)
            {
                return -1;
            }
        }



    }
}
