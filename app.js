'use strict';

// var imgContainer = document.getElementById('img-container');
var leftEl = document.getElementById('left');
var centerEl = document.getElementById('center');
var rightEl = document.getElementById('right');
var imgContainerEl = document.getElementById('img-container');

var prevImgs = []; // this reassigns the numbers that were used in the previous roll
var allProducts = [];
var totalClicks = 0;
var clickLimit = 5;

var img = [
  { path:'img/bag.jpg', name: 'bag'},
  { path:'img/banana.jpg', name: 'banana'},
  { path:'img/bathroom.jpg', name: 'bathroom'},
  { path:'img/boots.jpg', name: 'boots'},
  { path:'img/breakfast.jpg', name: 'breakfast'},
  { path:'img/tauntaun.jpg', name: 'taun taun'},
  { path: 'img/wine-glass.jpg', name: 'wine glass'},
  { path:'img/bubblegum.jpg', name: 'bubble gum'},
  { path:'img/chair.jpg', name: 'chair'},
  { path:'img/cthulhu.jpg', name: 'cthulhu'},
  { path:'img/dog-duck.jpg', name: 'dog duck'},
  { path:'img/dragon.jpg', name: 'dragon'},
  { path:'img/unicorn.jpg', name: 'unicorn'},
  { path:'img/usb.gif', name: 'usb'},
  { path:'img/pen.jpg', name: 'pen'},
  { path:'img/pet-sweep.jpg', name:'pet sweep' },
  { path:'img/scissors.jpg', name: 'scissors'},
  { path:'img/shark.jpg', name: 'shark'},
  { path:'img/sweep.png', name: 'sweep'},
  { path:'img/water-can.jpg', name: 'water can'},
];

function Product(name, path){ //product cunstructor
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.path = path;
}
for (var i = 0; i < img.length; i++) {  //create array of all products
  // console.log('name: ', img[i].name);
  // console.log('path: ', img[i].path);
  allProducts.push(new Product(img[i].name, img[i].path));
}
console.log(allProducts);

function randomNum(){
  return Math.floor(Math.floor(Math.random() * img.length));
};

function chooseRandomPics() { //choosing the pics from the array
  prevImgs = [];
  var leftIndex = randomNum();
  var leftImg = allProducts[leftIndex];
  prevImgs.push(leftIndex);

  var centerIndex = randomNum();
  while (centerIndex === leftIndex){
    centerIndex = randomNum();
  }
  var centerImg = allProducts[centerIndex];
  prevImgs.push(centerIndex);
  var rightIndex = randomNum();
  while(rightIndex === leftIndex || rightIndex === centerIndex){
    var rightIndex = randomNum();
  }
  var rightImg = allProducts[rightIndex];
  prevImgs.push(rightIndex);
}

function drawImgs(){ //generating imgs on the page

  var leftImgElement = document.getElementById('left');
  leftImgElement.setAttribute('src', allProducts[prevImgs[0]].path);
  leftImgElement.dataset.productIndex = prevImgs[0];
  allProducts[prevImgs[0]].views++;

  var centerImgElement = document.getElementById('center');
  centerImgElement.setAttribute('src', allProducts[prevImgs[1]].path);
  centerImgElement.dataset.productIndex = prevImgs[1];
  allProducts[prevImgs[1]].views++;

  var rightImgElement = document.getElementById('right');
  rightImgElement.setAttribute('src', allProducts[prevImgs[2]].path);
  rightImgElement.dataset.productIndex = prevImgs[2];
  allProducts[prevImgs[2]].views++;
}
chooseRandomPics();
drawImgs();

imgContainerEl.addEventListener('click', handleClick); //attaching the click event to the img-container
function handleClick(event){
  console.log('handle Click', event);
  console.log(event.target.dataset.productIndex);
  allProducts[event.target.dataset.productIndex].clicks++;
  console.log(allProducts[event.target.dataset.productIndex].clicks);
  chooseRandomPics();
  drawImgs();
  totalClicks++;
  keepTheClicksGoing();
};
function keepTheClicksGoing() {
  if (totalClicks < clickLimit) {
    drawImgs();
  }
  else {
    imgContainerEl.removeEventListener('click', handleClick);
    function saveProductsToLocalStorage(allProducts) {
      localStorage.allProducts = JSON.stringify(allProducts);
      console.log('Saved to local storage');
    }
    saveProductsToLocalStorage(allProducts);
  }
};
