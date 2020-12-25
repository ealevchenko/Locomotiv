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
    [RoutePrefix("api/tab_action")]
    public class TabActionssController : ApiController
    {
        EFDbContext ef_contex;
        public TabActionssController()
        {
            ef_contex = new EFDbContext();
        }

        // GET: api/tab_action/all
        [Route("all")]
        [ResponseType(typeof(TabActions))]
        public IHttpActionResult GetTabActions()
        {
            try
            {
                EFTabActions ef_act = new EFTabActions(new EFDbContext());
                List<TabActions> list = ef_act
                    .Context
                    .ToList()
                    .Select(m => m.GetTabActions())
                    .ToList();
                return Ok(list);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // GET: api/tab_action/id/1
        [Route("id/{id:int}")]
        [ResponseType(typeof(TabActions))]
        public IHttpActionResult GetTabActionsOfID(int id)
        {
            try
            {
                EFTabActions ef_act = new EFTabActions(new EFDbContext());
                List<TabActions> list = ef_act
                    .Context
                    .Where(a=>a.IDRepair == id)
                    .ToList()
                    .Select(m => m.GetTabActions())
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
