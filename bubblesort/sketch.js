let increment = 0.05
let r;
let vals;
let index = 0;
let steps = 0;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(100, 100);
  r = height / 2 - 10;
  vals = new Array(360);
  for (let i = 0; i < vals.length; i++) {
    vals[i] = random(vals.length)
  }
  angleMode(DEGREES);
  colorMode(HSB);
  strokeWeight(r * 0.03);
  frameRate(120)
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  // translate(mouseX, mouseY);
  rotate(-90);

  for (let _ = 0; _ < 100; _++) {
    if (vals[index] > vals[index + 1]) {
      swap(vals, index, index + 1);
    }

    index++;
    steps++;
    if (index >= vals.length) {
      index = 0;
    }
    if (steps >= 250000) {
      noLoop();
    }
  }

  for (let i = 0; i < vals.length; i++) {
    stroke(vals[i], 100, 100);
    let p = p2c(r, i);
    line(0, 0, p.x, p.y);
  }

}

function p2c(r, angle) {
  return createVector(
    r * cos(angle),
    r * sin(angle)
  );
}

function swap(l, i, j) {
  [l[i], l[j]] = [l[j], l[i]];
}
