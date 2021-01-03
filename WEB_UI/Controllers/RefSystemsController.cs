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
    [RoutePrefix("api/ref_systems")]
    public class RefSystemssController : ApiController
    {
        EFDbContext ef_contex;
        public RefSystemssController()
        {
            ef_contex = new EFDbContext();
        }

        // GET: api/ref_systems/all
        [Route("all")]
        [ResponseType(typeof(RefSystems))]
        public IHttpActionResult GetRefSystems()
        {
            try
            {
                EFRefSystems ef_act = new EFRefSystems(new EFDbContext());
                List<RefSystems> list = ef_act
                    .Context
                    .ToList()
                    .Select(m => m.GetRefSystems())
                    .ToList();
                return Ok(list);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // GET: api/ref_systems/id/1
        [Route("id/{id:int}")]
        [ResponseType(typeof(RefSystems))]
        public IHttpActionResult GetRefSystemsOfID(int id)
        {
            try
            {
                EFRefSystems ef_act = new EFRefSystems(new EFDbContext());
                List<RefSystems> list = ef_act
                    .Context
                    .Where(d=>d.idSystem == id)
                    .ToList()
                    .Select(m => m.GetRefSystems())
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
