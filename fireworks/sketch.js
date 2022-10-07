const gravity = 0.4;
let fireworks = [];
let sparkles = [];

function setup() {
	createCanvas(600, 900);
	colorMode(HSB, 99);
}

function draw() {
	background(0, 100);

	if (random() < 0.2) {
		fireworks.push(new Firework(random(width), height));
	}

	for (let i = fireworks.length - 1; i >= 0; i--) {
		fireworks[i].update();
		fireworks[i].show();
		if (fireworks[i].exploded) {
			fireworks.splice(i, 1);
		}
	}

	for (let i = sparkles.length - 1; i >= 0; i--) {
		sparkles[i].show();
		sparkles[i].update();
		if (sparkles[i].done) {
			sparkles.splice(i, 1);
		}
	}
}



class Particle {
	constructor(x, y, r = 4) {
		this.pos = createVector(x, y);
		this.vel = createVector(0, 0);
		this.acc = createVector(0, 0);
		this.r = r;
		this.color = color(255, 255, 255);
	}

	show() {
		push();
		strokeWeight(this.r);
		stroke(this.color);
		point(this.pos.x, this.pos.y);
		pop();
	};

	applyForce(x, y) {
		this.acc.add(createVector(x, y));
	};

	setVel(x, y) {
		this.vel.set(x, y)
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	};

	setColor(h, s, b, a = 100) {
		this.color = color(h, s, b, a);
	};

	getColor() {
		return this.color();
	}

	getAlpha() {
		return alpha(this.color);
	}
};

class Firework extends Particle {
	constructor(x, y, r = 6, lifetime = 1000) {
		super(x, y, r);
		
		this.done = false;
		this.exploded = false;
		this.lifetime = lifetime;
		this.vel.y = -random(10, 25);
		this.color = color(random(100), 100, 100);
		this.sparkles_number = 360 + floor(random(90));
	};

	applyForce(x, y) {
		this.acc.add(createVector(x, y));
	};

	update() {
		if (this.vel.y < 0) {
			this.applyForce(0, gravity);
		} else {
			this.done = true;
		}

		if (!this.done) {
			this.vel.add(this.acc);
			this.pos.add(this.vel);
			this.acc.mult(0);
		}

		if (this.done && !this.exploded) {
			this.exploded = true;
			for (let i = 0; i < this.sparkles_number; i++) {
				const newSparkle = new Sparkle(this.pos.x, this.pos.y, i, random(3, 5));
				newSparkle.color = this.color;
				sparkles.push();
			}
		}
	};

	show() {
		if (!this.done) {
			push();
			strokeWeight(this.r);
			stroke(this.color);
			point(this.pos.x, this.pos.y);
			pop();
		}
	};
};

class Sparkle extends Particle {
	constructor(x, y, angle, r = 4) {
		super(x, y, r)

		this.vel = createVector(1, 0).rotate(angle);
		this.vel.setMag(random(0.1, 0.2));
		this.done = false
		print(this.getAlpha())
	}

	update() {
		this.applyForce(0, gravity);

		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);

		if (this.getAlpha() <= 0) {
			this.done = true
		}

		this.color.alpha = 100;
	};
}