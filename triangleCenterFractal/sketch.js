let a;
let b;
let c;
let n;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);

  a = createVector(0, 0);
  b = createVector(width, height);
  c = createVector(0, height);

}

function draw() {
  background(0);

  fractalTriangle(a, b, c, 0, n);
}

function fractalTriangle(a, b, c, count = 0, limit = 5) {
  push();
  strokeWeight(limit - count);

  // Calculating the center
  let g = createVector(
    (a.x + b.x + c.x) / 3,
    (a.y + b.y + c.y) / 3
  );

  // Drawing
  line(a.x, a.y, b.x, b.y);
  line(b.x, b.y, c.x, c.y);
  line(a.x, a.y, c.x, c.y);

  line(a.x, a.y, g.x, g.y);
  line(b.x, b.y, g.x, g.y);
  line(c.x, c.y, g.x, g.y);

  pop();
  // Recursiveness
  if (count < limit) {
    fractalTriangle(a, b, g, count + 1, limit);
    fractalTriangle(a, c, g, count + 1, limit);
    fractalTriangle(c, b, g, count + 1, limit);
  }
}
