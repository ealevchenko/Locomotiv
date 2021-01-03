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
    [RoutePrefix("api/ref_unit")]
    public class RefUnitsController : ApiController
    {
        EFDbContext ef_contex;
        public RefUnitsController()
        {
            ef_contex = new EFDbContext();
        }

        // GET: api/ref_unit/all
        [Route("all")]
        [ResponseType(typeof(RefUnit))]
        public IHttpActionResult GetRefUnit()
        {
            try
            {
                EFRefUnit ef_act = new EFRefUnit(new EFDbContext());
                List<RefUnit> list = ef_act
                    .Context
                    .ToList()
                    .Select(m => m.GetRefUnit())
                    .ToList();
                return Ok(list);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // GET: api/ref_unit/id/1
        [Route("id/{id:int}")]
        [ResponseType(typeof(RefUnit))]
        public IHttpActionResult GetRefUnitOfID(int id)
        {
            try
            {
                EFRefUnit ef_act = new EFRefUnit(new EFDbContext());
                List<RefUnit> list = ef_act
                    .Context
                    .Where(d=>d.idUnit == id)
                    .ToList()
                    .Select(m => m.GetRefUnit())
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
