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
    [RoutePrefix("api/ref_damage")]
    public class RefDamagesController : ApiController
    {
        EFDbContext ef_contex;
        public RefDamagesController()
        {
            ef_contex = new EFDbContext();
        }

        // GET: api/ref_damage/all
        [Route("all")]
        [ResponseType(typeof(RefDamage))]
        public IHttpActionResult GetRefDamage()
        {
            try
            {
                EFRefDamage ef_act = new EFRefDamage(new EFDbContext());
                List<RefDamage> list = ef_act
                    .Context
                    .ToList()
                    .Select(m => m.GetRefDamage())
                    .ToList();
                return Ok(list);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // GET: api/ref_damage/id/1
        [Route("id/{id:int}")]
        [ResponseType(typeof(RefDamage))]
        public IHttpActionResult GetRefDamageOfID(int id)
        {
            try
            {
                EFRefDamage ef_act = new EFRefDamage(new EFDbContext());
                List<RefDamage> list = ef_act
                    .Context
                    .Where(d=>d.idDamage == id)
                    .ToList()
                    .Select(m => m.GetRefDamage())
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
