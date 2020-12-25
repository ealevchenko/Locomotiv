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

    }
}
