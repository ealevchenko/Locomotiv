using System.Web;
using System.Web.Optimization;

namespace WEB_UI
{
    public class BundleConfig
    {
        // Дополнительные сведения об объединении см. на странице https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Используйте версию Modernizr для разработчиков, чтобы учиться работать. Когда вы будете готовы перейти к работе,
            // готово к выпуску, используйте средство сборки по адресу https://modernizr.com, чтобы выбрать только необходимые тесты.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            //bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
            //          "~/Scripts/bootstrap.js"));

            //bootstrap --------------------------------------------------------------------------
            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                        "~/Scripts/bootstrap.js"
                       ));

            bundles.Add(new StyleBundle("~/bootstrap/css").Include(
                      "~/Content/bootstrap.css"
                      ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      //"~/Content/bootstrap.css",
                      "~/Content/site.css"
                      ));

            // Плагин таблицы --------------------------------------------------------------------------
            bundles.Add(new ScriptBundle("~/bundles/DataTables").Include(
                // ------- 
                "~/Scripts/DataTables/js/jquery.dataTables.min.js",
                // ------- КНОПКИ
                "~/Scripts/DataTables/Buttons/js/dataTables.buttons.min.js",
                "~/Scripts/DataTables/Buttons/js/buttons.html5.min.js",
                "~/Scripts/DataTables/Buttons/js/buttons.print.min.js",
                "~/Scripts/DataTables/Buttons/js/buttons.colVis.min.js",
                // ------- ВЫБОР
                "~/Scripts/DataTables/Select/js/dataTables.select.min.js",
                // ------- ДЛЯ EXCEL
                "~/Scripts/jszip.min.js"
                ));

            bundles.Add(new StyleBundle("~/DataTables/css").Include(
                // ------- СТИЛЬ DATATABLES
                "~/Content/DataTables/css/jquery.dataTables.min.css",
                 // ------- СТИЛЬ КНОПОК
                 "~/Content/DataTables/Buttons/css/buttons.dataTables.min.css",
                 // ------- СТИЛЬ ВЫБОРА
                 "~/Content/DataTables/Select/css/select.dataTables.min.css"
                 ));

            // Moment ---------------------------------------------------------------------------
            bundles.Add(new ScriptBundle("~/bundles/Moment").Include(
                "~/Scripts/moment.min.js"
                ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/site.css"
                      ));
        }
    }
}
