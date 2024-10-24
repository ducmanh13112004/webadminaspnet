using Microsoft.AspNetCore.Mvc;
using Websitebanhangadmin_client.Repositories;
using System.Linq;
using System.Threading.Tasks;

namespace Websitebanhangadmin_client.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class StatisticController : Controller
    {
        private readonly IProductRepository _productRepository;
        private readonly ICategoryRepository _categoryRepository;

        public StatisticController(IProductRepository productRepository, ICategoryRepository categoryRepository)
        {
            _productRepository = productRepository;
            _categoryRepository = categoryRepository;
        }

        public async Task<IActionResult> Index()
        {
            // Lấy toàn bộ sản phẩm và danh mục
            var products = await _productRepository.GetAllAsync();
            var categories = await _categoryRepository.GetAllAsync();

            // Đếm số lượng sản phẩm theo 3 danh mục
            var productCountByCategory = from p in products
                                         join c in categories on p.CategoryId equals c.Id
                                         where c.Name == "Giày Đi Bộ" || c.Name == "Giày Chạy Bộ" || c.Name == "Giày SamBa"
                                         group p by c.Name into productGroup
                                         select new
                                         {
                                             CategoryName = productGroup.Key,
                                             ProductCount = productGroup.Count()
                                         };

            // Truyền dữ liệu đến view
            ViewBag.ProductData = productCountByCategory.ToList();

            return View();
        }
    }
}
