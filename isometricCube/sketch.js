let c1;
let c2;
let c3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  c1 = color(162, 0, 255);
  c2 = color(230, 0, 255);
  c3 = color(255, 149, 0);

  noStroke();
}

function draw() {
  background(255);
  isometricCube(createVector(width/2, height/2), (sin(frameCount * 0.05) + 1) * (windowHeight * 0.5 * 0.5 - 30), c2, c3, c1);
}

function isometricCube(center, length, left = color(255, 80, 80), right = color(80, 255, 80), top = color(80, 80, 255)) {

  // Point 1
  p1 = p2c(length, (PI / 3) * 0);
  // Point 2
  p2 = p2c(length, (PI / 3) * 1);
  // Point 3
  p3 = p2c(length, (PI / 3) * 2);
  // Point 4
  p4 = p2c(length, (PI / 3) * 3);
  // Point 5
  p5 = p2c(length, (PI / 3) * 4);
  // Point 6
  p6 = p2c(length, (PI / 3) * 5);

  // print(p1);
  // print(p2);
  // print(p3);
  // print(p4);
  // print(p5);
  // print(p6);

  // Drawing
  push();
  translate(center.x, center.y)
  rotate(PI / 6)

  // text('O', 0, 0);
  // text('P1', p1.x, p1.y);
  // text('P2', p2.x, p2.y);
  // text('P3', p3.x, p3.y);
  // text('P4', p4.x, p4.y);
  // text('P5', p5.x, p5.y);
  // text('P6', p6.x, p6.y);

  fill(left);
  quad(0, 0, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
  fill(right);
  quad(0, 0, p2.x, p2.y, p1.x, p1.y, p6.x, p6.y);
  fill(top);
  quad(0, 0, p6.x, p6.y, p5.x, p5.y, p4.x, p4.y);

  pop();
}

function p2c(r, angle) {
  return createVector(
    r * cos(angle),
    r * sin(angle)
  );
}
