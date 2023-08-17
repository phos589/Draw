const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 500;

let isDrawing = false;
let X = 0;
let Y = 0;

canvas.addEventListener('mousedown', startDraing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

function startDraing(e){
  isDrawing = true;
  [X , Y] = [e.offsetX , e.offsetY];
}

function draw(e){
  if(!isDrawing) return;

  ctx.beginPath();
  ctx.moveTo(X, Y);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.lineWidth = 3;

  [X, Y] = [e.offsetX, e.offsetY];
}

function stopDrawing(){
  isDrawing = false;
  [X, Y] = [0, 0];
}

//color

let black = document.querySelector('.color-change1');
window.getComputedStyle(black).getPropertyValue('background-color');

function blackColor(){
  ctx.strokeStyle = window.getComputedStyle(black).getPropertyValue('background-color'); 
}
let gray = document.querySelector('.color-change2');
window.getComputedStyle(gray).getPropertyValue('background-color');

function graykColor(){
  ctx.strokeStyle = window.getComputedStyle(gray).getPropertyValue('background-color'); 
}

let white = document.querySelector('.color-change3');
window.getComputedStyle(white).getPropertyValue('background-color');

function whiteColor(){
  ctx.strokeStyle = window.getComputedStyle(white).getPropertyValue('background-color'); 
}
let red = document.querySelector('.color-change4');
window.getComputedStyle(red).getPropertyValue('background-color');
function redColor(){
  ctx.strokeStyle = window.getComputedStyle(red).getPropertyValue('background-color'); 
}
let yellow = document.querySelector('.color-change5');
window.getComputedStyle(yellow).getPropertyValue('background-color');
function yellowColor(){
  ctx.strokeStyle = window.getComputedStyle(yellow).getPropertyValue('background-color'); 
}
let green = document.querySelector('.color-change6');
window.getComputedStyle(green).getPropertyValue('background-color');
function greenColor(){
  ctx.strokeStyle = window.getComputedStyle(green).getPropertyValue('background-color'); 
}
let blue = document.querySelector('.color-change7');
window.getComputedStyle(blue).getPropertyValue('background-color');
function blueColor(){
  ctx.strokeStyle = window.getComputedStyle(blue).getPropertyValue('background-color'); 
}
let purple = document.querySelector('.color-change8');
window.getComputedStyle(purple).getPropertyValue('background-color');
function purpleColor(){
  ctx.strokeStyle = window.getComputedStyle(purple).getPropertyValue('background-color'); 
}

//cler
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

})