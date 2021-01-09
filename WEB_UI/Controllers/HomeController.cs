using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WEB_UI.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        /// <summary>
        /// Начальник ДЕПО
        /// </summary>
        /// <returns></returns>
        public ActionResult HeadDEPO()
        {
            return View();
        }
        /// <summary>
        /// Начальник смены
        /// </summary>
        /// <returns></returns>
        public ActionResult ShiftSupervisor()
        {
            return View();
        }

    }


}
