let body1;
let body2;
let velDiv1;
let velDiv2;

function setup() {
  createCanvas(90*15, 160*5.5);
  body1 = new Body(width/3, height - 100, 3);
  body2 = new Body(width/3 * 2, height - 100, 6);
  velDiv1 = createDiv();
  velDiv2 = createDiv();
}

function draw() {
  colorMode(RGB)
  background(0, 10);
  if (mouseIsPressed) {
    if (keyCode === UP_ARROW) {
      let mouse = createVector(mouseX, mouseY);
      let f1 = mouse.sub(body1.pos);
      f1.setMag(-1);
      let f2 = mouse.sub(body2.pos);
      f2.setMag(-1);
      body1.addForce(f1);
      body2.addForce(f2);
    }
  }
  body1.update();
  body1.edge();
  body1.show();
  body2.update();
  body2.edge();
  body2.show();

  velDiv1.html(body1.vel.mag());
  velDiv2.html(body2.vel.mag());
}


function keyReleased() {
  body1.vel.setMag(0);
  body2.vel.setMag(0);
}
