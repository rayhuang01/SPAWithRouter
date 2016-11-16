using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SPAWithRouter.Controllers
{
    public class HomeController : Controller
    {
        [AllowAnonymous]
        public ActionResult Index(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;
            return View();
        }

        [AllowAnonymous]
        [HttpGet]
        public ActionResult Login(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;
            //if (!string.IsNullOrEmpty(returnUrl))
            //{
            //    //return RedirectToRoute(new { controller = "spa", action = "spaPage" });
            //    return Json(new { a = returnUrl });
            //}
            return View();
        }

        [AllowAnonymous]
        [HttpPost]
        public ActionResult LoginSpa(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;

            //return RedirectToRoute(new { controller = "spa", action = "spaPage" });
            return Json(new { a = returnUrl });
        }
    }
}