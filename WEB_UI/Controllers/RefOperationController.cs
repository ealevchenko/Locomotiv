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
    [RoutePrefix("api/ref_operation")]
    public class RefOperationsController : ApiController
    {
        EFDbContext ef_contex;
        public RefOperationsController()
        {
            ef_contex = new EFDbContext();
        }

        // GET: api/ref_operation/all
        [Route("all")]
        [ResponseType(typeof(RefOperation))]
        public IHttpActionResult GetRefOperation()
        {
            try
            {
                EFRefOperation ef_act = new EFRefOperation(new EFDbContext());
                List<RefOperation> list = ef_act
                    .Context
                    .ToList()
                    .Select(m => m.GetRefOperation())
                    .ToList();
                return Ok(list);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // GET: api/ref_operation/id/1
        [Route("id/{id:int}")]
        [ResponseType(typeof(RefOperation))]
        public IHttpActionResult GetRefOperationOfID(int id)
        {
            try
            {
                EFRefOperation ef_act = new EFRefOperation(new EFDbContext());
                List<RefOperation> list = ef_act
                    .Context
                    .Where(d=>d.idOperation == id)
                    .ToList()
                    .Select(m => m.GetRefOperation())
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
