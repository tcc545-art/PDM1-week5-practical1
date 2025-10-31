let starX = [];
let starY = [];

function setup() {
createCanvas(500,500);
}

function draw() {
background(50,50,255);
  updateStars();
  drawAllStars();
}

/**
 * Draws a star at the given coordinates.
 * @param {number} x 
 * @param {number} y 
 */
function star(x, y) {
    fill(255, 234, 0);
    noStroke();
    triangle(x, y - 50, x - 20, y, x + 20, y);
    triangle(x - 50, y - 20, x, y - 20, x, y + 10);
    triangle(x + 50, y - 20, x, y - 20, x, y + 10);
    triangle(x - 20, y - 5, x, y + 10, x - 35, y + 30);
    triangle(x, y + 10, x + 20, y - 5, x + 35, y + 30);
}
function drawAllStars() {
  for (let i = 0; i < starX.length; i++) {
    star(starX[i], starY[i]);
  }
}

function updateStars() {
  for (let i = 0; i < starY.length; i++) {
    starY[i] += 2; 
  }
}
function mouseClicked() {
  starX.push(mouseX);
  starY.push(mouseY);
  return false; 
}