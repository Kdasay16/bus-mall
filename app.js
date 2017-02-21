'use strict';

var picOne = new Picture();
var picTwo = new Picture();
var picThree = new Picture();


var img = [
  './img/bag.jpg', './img/banana.jpg',
  './img/bathroom.jpg', './img/boots.jpg',
  './img/breakfast.jpg', './img/tauntaun.jpg',
  './img/wine-glass.jpg', './img/bubblegum.jpg',
  './img/chair.jpg', './img/cthulhu.jpg',
  './img/dog-duck.jpg', './img/dragon.jpg',
  './img/unicorn.jpg', './img/usb.gif',
  './img/pen.jpg', './img/pet-sweep.jpg',
  './img/scissors.jpg', './img/shark.jpg',
  './img/sweep.png', './img/water-can.jpg'];

//REAL CODE TO FOLLOW//

var prevImgs = [];

function randomNum () {
  math.random;
};

var allProducts = [];
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
previousImgs.push(rightIndex);
