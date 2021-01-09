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
        /// <summary>
        /// Показать все записи
        /// </summary>
        /// <returns></returns>
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
        /// <summary>
        /// Показать запись по id тепловоза в ДЕПО
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("id/{id:int}")]
        [ResponseType(typeof(TabActions))]
        public IHttpActionResult GetTabActionsOfID(int id)
        {
            try
            {
                EFTabActions ef_act = new EFTabActions(new EFDbContext());
                TabActions action = ef_act
                    .Context
                    .Where(a => a.idAction == id)
                    .ToList()
                    .Select(m => m.GetTabActions())
                    .FirstOrDefault();
                return Ok(action);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // GET: api/tab_action/repair/id/1
        /// <summary>
        /// Показать запись по id тепловоза в ДЕПО
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("repair/id/{id:int}")]
        [ResponseType(typeof(TabActions))]
        public IHttpActionResult GetTabActionsOfIDRepair(int id)
        {
            try
            {
                EFTabActions ef_act = new EFTabActions(new EFDbContext());
                List<TabActions> list = ef_act
                    .Context
                    .Where(a => a.IDRepair == id)
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

        // POST api/tab_action
        /// <summary>
        /// Добавить запись
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("")]
        public int PostTabActions([FromBody] TabActions value)
        {
            try
            {
                EFTabActions ef_act = new EFTabActions(new EFDbContext());
                ef_act.Add(value);
                return ef_act.Save();
            }
            catch (Exception e)
            {
                return -1;
            }
        }

        // PUT api/tab_action/id
        /// <summary>
        /// Обновить запись
        /// </summary>
        /// <param name="id"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("id/{id:int}")]
        public int PutTabActions(int id, [FromBody] TabActions value)
        {
            try
            {
                EFTabActions ef_act = new EFTabActions(new EFDbContext());
                ef_act.Update(value);
                return ef_act.Save();
            }
            catch (Exception e)
            {
                return -1;
            }
        }

        // DELETE api/tab_action/id
        /// <summary>
        /// Удалить запись
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("id/{id:int}")]
        public int DeleteTabActions(int id)
        {
            try
            {
                EFTabActions ef_act = new EFTabActions(new EFDbContext());
                ef_act.Delete(id);
                return ef_act.Save();
            }
            catch (Exception e)
            {
                return -1;
            }
        }

    }
}
