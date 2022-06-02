let a;
let b;
let c;

function setup() {
  createCanvas(400, 400)
  a = createVector(width / 2, 0);
  b = createVector(width, height);
  c = createVector(0, height);
}

function draw() {
  background(0);
  sierpiskiTriangle(a, b, c, 0, 5)
}

function sierpiskiTriangle(a, b, c, count = 0, limit = 5) {
  push();
  stroke(255);
  strokeWeight(1);

  // Middle points
  let m1 = createVector(
    a.x + (b.x - a.x) / 2,
    a.y + (b.y - a.y) / 2
  )
  let m2 = createVector(
    b.x + (c.x - b.x) / 2,
    b.y + (c.y - b.y) / 2
  )
  let m3 = createVector(
    a.x + (c.x - a.x) / 2,
    a.y + (c.y - a.y) / 2
  )

  // Drawing
  line(a.x, a.y, b.x, b.y);
  line(b.x, b.y, c.x, c.y);
  line(a.x, a.y, c.x, c.y);

  line(m1.x, m1.y, m2.x, m2.y);
  line(m2.x, m2.y, m3.x, m3.y);
  line(m3.x, m3.y, m1.x, m1.y);

  pop();
  // Recursiveness
  if (count < limit) {
    sierpiskiTriangle(a, m1, m3, count + 1, limit);
    sierpiskiTriangle(b, m1, m2, count + 1, limit);
    sierpiskiTriangle(c, m2, m3, count + 1, limit);
  }
}
