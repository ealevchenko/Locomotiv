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
    [RoutePrefix("api/ref_num_loko")]
    public class RefNumLokosController : ApiController
    {
        EFDbContext ef_contex;
        public RefNumLokosController()
        {
            ef_contex = new EFDbContext();
        }

        // GET: api/ref_num_loko/all
        [Route("all")]
        [ResponseType(typeof(RefNumLoko))]
        public IHttpActionResult GetRefNumLoko()
        {
            try
            {
                EFRefNumLoko ef_act = new EFRefNumLoko(new EFDbContext());
                List<RefNumLoko> list = ef_act
                    .Context
                    .ToList()
                    .Select(m => m.GetRefNumLoko())
                    .ToList();
                return Ok(list);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // GET: api/ref_num_loko/id/1
        [Route("id/{id:int}")]
        [ResponseType(typeof(RefNumLoko))]
        public IHttpActionResult GetRefNumLokoOfID(int id)
        {
            try
            {
                EFRefNumLoko ef_act = new EFRefNumLoko(new EFDbContext());
                List<RefNumLoko> list = ef_act
                    .Context
                    .Where(d=>d.idNumLoko == id)
                    .ToList()
                    .Select(m => m.GetRefNumLoko())
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
