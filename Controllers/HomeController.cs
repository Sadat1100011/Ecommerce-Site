using Microsoft.AspNetCore.Mvc;

namespace InventoryManagement_Adnan.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}