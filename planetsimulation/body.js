const gAcc = 0.98;

function Body(x, y, m) {
  this.pos = createVector(x, y);
  this.mass = m;
  this.r = this.mass * 10;

  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);

  this.addForce = function(force) {
    let f = force.copy().div(this.mass);
    this.acc.add(f);
  }

  this.applyGravity = function() {
    let g = this.mass * gAcc;
    this.addForce(createVector(0, g));
  }

  this.edge = function() {
    if (this.pos.y >= height  - (this.r / 2)) {
      this.pos.y = height  - (this.r / 2);
      this.vel.y = -this.vel.y
    }

    if (this.pos.x <= this.r / 2) {
      this.pos.x = this.r / 2;
      this.vel.x = -this.vel.x;
    } else if (this.pos.x >= width - (this.r / 2)) {
      this.pos.x = width - (this.r / 2);
      this.vel.x = -this.vel.x;
    }
  }

  this.update = function() {
    this.applyGravity();

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.show = function() {
    push();
    noStroke();
    colorMode(HSB)
    let hue = map(this.vel.mag(), 0, 100, 0, 360) % 360
    fill(hue, 100, 100, 100);
    ellipseMode(CENTER);
    ellipse(this.pos.x, this.pos.y, this.r);

    // strokeWeight(this.r)
    // stroke(hue, 100, 100, 100)
    // line(this.pos.x, this.pos.y, this.pos.x - this.vel.x * 3, this.pos.y - this.vel.y * 3)
    pop();
  }
}
