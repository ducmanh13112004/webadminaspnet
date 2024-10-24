$(function () {
    // Biểu đồ Area
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            iphone: 2666,
            ipad: null,
            itouch: 2647
        }, {
            period: '2010 Q2',
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2010 Q3',
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }, {
            period: '2010 Q4',
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: '2011 Q1',
            iphone: 6810,
            ipad: 1914,
            itouch: 2293
        }, {
            period: '2011 Q2',
            iphone: 5670,
            ipad: 4293,
            itouch: 1881
        }, {
            period: '2011 Q3',
            iphone: 4820,
            ipad: 3795,
            itouch: 1588
        }, {
            period: '2011 Q4',
            iphone: 15073,
            ipad: 5967,
            itouch: 5175
        }, {
            period: '2012 Q1',
            iphone: 10687,
            ipad: 4460,
            itouch: 2028
        }, {
            period: '2012 Q2',
            iphone: 8432,
            ipad: 5713,
            itouch: 1791
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    //// Biểu đồ Donut
    //var ctx = document.getElementById('categoryChart').getContext('2d');
    //var categoryChart = new Chart(ctx, {
    //    type: 'doughnut',
    //    data: {
    //        labels: @Html.Raw(Json.Serialize(productCountByCategory.Select(c => c.CategoryName).ToList())),
    //        datasets: [{
    //            label: 'Số lượng sản phẩm',
    //            data: @Html.Raw(Json.Serialize(productCountByCategory.Select(c => c.ProductCount).ToList())),
    //            backgroundColor: [
    //                'rgba(255, 99, 132, 0.2)',
    //                'rgba(54, 162, 235, 0.2)',
    //                'rgba(75, 192, 192, 0.2)'
    //            ],
    //            borderColor: [
    //                'rgba(255, 99, 132, 1)',
    //                'rgba(54, 162, 235, 1)',
    //                'rgba(75, 192, 192, 1)'
    //            ],
    //            borderWidth: 1
    //        }]
    //    },
    //    options: {
    //        responsive: true,
    //        plugins: {
    //            legend: {
    //                position: 'top',
    //            },
    //            title: {
    //                display: true,
    //                text: 'Thống kê sản phẩm theo danh mục'
    //            }
    //        }
    //    }
    //});
});
