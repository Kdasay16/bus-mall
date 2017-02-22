'use strict';

// var imgContainer = document.getElementById('img-container');
var leftEl = document.getElementById('left');
var centerEl = document.getElementById('center');
var rightEl = document.getElementById('right');
var imgContainerEl = document.getElementById('img-container');

var prevImgs = []; // this reassigns the numbers that were used in the previous roll
var allProducts = [];
var totalClicks = 0;
var clickLimit = 25;

var img = [
  'img/bag.jpg',
  'img/banana.jpg',
  'img/bathroom.jpg',
  'img/boots.jpg',
  'img/breakfast.jpg',
  'img/tauntaun.jpg',
  'img/wine-glass.jpg',
  'img/bubblegum.jpg',
  'img/chair.jpg',
  'img/cthulhu.jpg',
  'img/dog-duck.jpg',
  'img/dragon.jpg',
  'img/unicorn.jpg',
  'img/usb.gif',
  'img/pen.jpg',
  'img/pet-sweep.jpg',
  'img/scissors.jpg',
  'img/shark.jpg',
  'img/sweep.png',
  'img/water-can.jpg'
];

//REAL CODE TO FOLLOW//

function Product(name){ //product cunstructor
  this.name = img; //picName array
  this.views = 0;
  this.clicks = 0;
  // this.path = 'img/' + name + '.jpg'; //don't forget gif
}
// for (var i = 0; i < img.length; i++) {  //create array of all products
//   allProducts.push(new Product(img[i]));
// }

// var prevImgs = [];

function randomNum(){
  return Math.floor(Math.floor(Math.random() * img.length));
};

function chooseRandomPics() { //choosing the pics from the array
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

  var leftImgElement = document.createElement('img');
  leftImgElement.setAttribute('src', img[prevImgs[0]]);
  leftEl.appendChild(leftImgElement);

  leftImgElement.setAttribute('id', img[prevImgs[0]].name);

  var centerImgElement = document.createElement('img');
  centerImgElement.setAttribute('src', img[prevImgs[1]]);
  centerEl.appendChild(centerImgElement);

  centerImgElement.setAttribute('id', img[prevImgs[1]].name);

  var rightImgElement = document.createElement('img');
  rightImgElement.setAttribute('src', img[prevImgs[2]]);
  rightEl.appendChild(rightImgElement);

  rightImgElement.setAttribute('id', img[prevImgs[2]].name);
}
chooseRandomPics();
drawImgs();

imgContainerEl.addEventListener('click', handleClick); //attaching the click event to the img-container
function handleClick(event){
  console.log('handle Click', event);
};
