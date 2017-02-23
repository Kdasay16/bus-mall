'use strict';

function saveProductsToLocalStorage(allProducts) {
  localStorage.allProducts = JSON.stringify(allProducts);
  console.log('Saved to local storage');
}

var allProducts = JSON.parse(localStorage.allProducts); //grabbing data to form chart. Put on globel scope

function allProductClicks(products){
  var productClicks = [];

  for (var i = 0; i < products.length; i++) {
    productClicks.push(products[i].clicks);
  }
  console.log('All Product Clicks: ', productClicks);
  return productClicks;
}

function allProductNames(products){
  var productNames = [];

  for (var i = 0; i < products.length; i++) {
    productNames.push(products[i].name);
  }
  console.log('All Product Names: ', productNames);
  return productNames;
}

var clickData = allProductClicks(allProducts); //products is now allProducts. replacingvar data above
var nameData = allProductNames(allProducts);

var clickData = allProductClicks(allProducts); //products is now allProducts. replacingvar data above
var nameData = allProductNames(allProducts);

var chartData = {
  type: 'bar',
  data: {
    labels: nameData,
    datasets: [{
      label: 'Number of Votes / Picture', //chart title
      data: clickData,
      backgroundColor: navy,
    }],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
};

// chartData.options.scales.yAxes[0].ticks.beginAtZero = true;

var myChart = new Chart(ctx, chartData);
