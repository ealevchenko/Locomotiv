using EFLocomotive.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace WEB_UI.Controllers
{
    public class report_repairs_lokomotive
    {

        public int idNumLoko { get; set; }
        public string NumLoko { get; set; }
        public int? idRepair { get; set; }
        public DateTime? DateTimeStartRepair { get; set; }
        public DateTime? DateTimeEndRepair { get; set; }
        public int? repair { get; set; }
        public int? idAction { get; set; }
        public int? IDLnkUDO { get; set; }
        public string Unit { get; set; }
        public string Operation { get; set; }
        public float? HRresourse { get; set; }
    }

    [RoutePrefix("api/reports")]
    public class ReportsController : ApiController
    {
        EFDbContext ef_contex;
        public ReportsController()
        {
            ef_contex = new EFDbContext();
        }

        // GET: api/reports/repairs_lokomotive/id/1/start/2020-10-01T00:00:00/stop/2020-10-30T23:59:59
        /// <summary>
        /// Показать запись по id тепловоза в ДЕПО
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("repairs_lokomotive/id/{id:int}/start/{start:datetime}/stop/{stop:datetime}")]
        [ResponseType(typeof(report_repairs_lokomotive))]
        public IHttpActionResult GetReportRepairsOfLokomotive(int id, DateTime start, DateTime stop)
        {
            try
            {
                string sql = "select * from [dbo].[get_reports_repairs_lokomotive]() where idNumLoko = "+ id.ToString() + " AND [DateTimeStartRepair] >= Convert(datetime, '" + start.ToString("yyyy-MM-dd HH:mm:ss") + "',120) AND [DateTimeStartRepair] <= Convert(datetime, '" + stop.ToString("yyyy-MM-dd HH:mm:ss") + "',120)";
                List<report_repairs_lokomotive> list = ef_contex.Database.SqlQuery<report_repairs_lokomotive>(sql).ToList();
                return Ok(list);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
