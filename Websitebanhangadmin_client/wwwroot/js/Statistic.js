document.addEventListener('DOMContentLoaded', function () {
    // Lấy dữ liệu từ ViewBag
    var productData = @Html.Raw(Newtonsoft.Json.JsonConvert.SerializeObject(ViewBag.ProductData));

    // Kiểm tra dữ liệu
    console.log(productData); // In dữ liệu để kiểm tra

    // Chuẩn bị dữ liệu cho biểu đồ
    var labels = productData.map(function (item) {
        return item.CategoryName;
    });

    var data = productData.map(function (item) {
        return item.ProductCount;
    });

    // Vẽ biểu đồ
    var ctx = document.getElementById('productChart').getContext('2d');
    var productChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Số lượng sản phẩm',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
