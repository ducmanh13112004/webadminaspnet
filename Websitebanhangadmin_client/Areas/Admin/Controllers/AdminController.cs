using Microsoft.AspNetCore.Mvc;

namespace Websitebanhangadmin_client.Areas.Admin.Controllers
{
    public class AdminController : Controller
    {
        [Area("Admin")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
