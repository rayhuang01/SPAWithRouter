using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace SPAWithRouter
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.IgnoreRoute("{resource}.jslog/{*pathInfo}");

            

            //routes.MapRoute(
            //    name: "Default",
            //    url: "{controller}/{action}/{param1}/{param2}/{param3}",
            //    defaults: new { controller = "Home", action = "Login", param1 = UrlParameter.Optional, param2 = UrlParameter.Optional, param3 = UrlParameter.Optional },
            //    namespaces: new string[] { "Self.Service.Controllers" }
            //);

            //routes.MapRoute(
            //  name: "spa",
            //  url: "spa/{controllers}/{action}/{id}",
            //  defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            //);

            routes.MapRoute(
              name: "spa",
              url: "spa/SpaPage",
              defaults: new { controller = "Home", action = "Index" }
            );
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Login", id = UrlParameter.Optional }
            );
        }
    }
}