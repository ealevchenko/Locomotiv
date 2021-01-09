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
    [RoutePrefix("api/lnk_udo")]
    public class LnkUDOsController : ApiController
    {
        EFDbContext ef_contex;
        public LnkUDOsController()
        {
            ef_contex = new EFDbContext();
        }

        // GET: api/lnk_udo/all
        [Route("all")]
        [ResponseType(typeof(LnkUDO))]
        public IHttpActionResult GetLnkUDO()
        {
            try
            {
                EFLnkUDO ef_act = new EFLnkUDO(new EFDbContext());
                List<LnkUDO> list = ef_act
                    .Context
                    .ToList()
                    .Select(m => m.GetLnkUDO())
                    .ToList();
                return Ok(list);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // GET: api/lnk_udo/id/1
        [Route("id/{id:int}")]
        [ResponseType(typeof(LnkUDO))]
        public IHttpActionResult GetLnkUDOOfID(int id)
        {
            try
            {
                EFLnkUDO ef_act = new EFLnkUDO(new EFDbContext());
                LnkUDO link = ef_act
                    .Context
                    .Where(d=>d.idLinkUDO == id)
                    .ToList()
                    .Select(m => m.GetLnkUDO())
                    .FirstOrDefault();
                return Ok(link);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}
