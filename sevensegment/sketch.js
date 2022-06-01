let displays;
let inputBox;
const digitsOnly = /\d/;


class SevenSegment {
  constructor(x, y, value = 0, color = [255, 0, 0], size = 10) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.color = color
    this.size = size;
  }

  getColor(value, shift) {
    let num = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B][value]
    let [r, g, b] = [0, 0, 0]
    if (Array.isArray(this.color)) {
      [r, g, b] = this.color
    } else {
      [r, g, b] = [this.color.r, this.color.g, this.color.b]
    }
    let a = 40 + 255 * ((num >> shift) & 1)
     return color(r, g, b, a);

  }

  show() {

    push();
    // A
    fill(this.getColor(this.value, 6));
    rect(this.x + this.size, this.y, this.size * 3, this.size, 10, 10);
    // B
    fill(this.getColor(this.value, 5));
    rect(this.x + this.size * 4, this.y + this.size, this.size, this.size * 3, 10, 10);
    // C
    fill(this.getColor(this.value, 4));
    rect(this.x + this.size * 4, this.y + this.size * 5, this.size, this.size * 3, 10, 10);
    // D
    fill(this.getColor(this.value, 3));
    rect(this.x + this.size, this.y + this.size * 8, this.size * 3, this.size, 10, 10);
    // E
    fill(this.getColor(this.value, 2));
    rect(this.x, this.y + this.size * 5, this.size, this.size * 3, 10, 10);
    // F
    fill(this.getColor(this.value, 1));
    rect(this.x, this.y + this.size, this.size, this.size * 3, 10, 10);
    // G
    fill(this.getColor(this.value, 0));
    rect(this.x + this.size, this.y + this.size * 4, this.size * 3, this.size, 10, 10);

    pop();
  }
}


function setup() {
  createCanvas(1000, 800);
  frameRate(3);
  displays = [
    new SevenSegment(10,  10,  0, [255, 255, 0]),
    new SevenSegment(70,  10,  1, [255, 255, 0]),
    new SevenSegment(130, 10, 2, [255, 255, 0]),
    new SevenSegment(190, 10, 3, [255, 255, 0]),
    new SevenSegment(250, 10, 4, [255, 255, 0])
  ];
  inputBox = createInput()
}

function draw() {
  background(0);
  let nums = digitsOnly.exec(inputBox.value())
  nums = nums ? nums : [0]
  for (let i = 0; i < displays.length; i++) {
    displays[i].show()
    let index = i - displays.length
    val = int(nums.slice(index)[0])
    displays[i].value = val ? val : 0
  }

}
