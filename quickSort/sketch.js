const w = 1;
let vals;

function setup() {
  createCanvas(windowWidth, windowHeight);
  vals = new Array(floor(width / w));
  for (let i = 0; i < vals.length; i++) {
    vals[i] = random(height)
  }
  quicksort(vals, 0, vals.length - 1)
}

let i = 0;

function draw() {
  background(255);
  noStroke();
  colorMode(HSB)

  for (let i = 0; i < vals.length; i++) {
    fill(map(vals[i], 0, height, 0, 360), 100, 100);
    rect(i * w, height - vals[i], w, vals[i]);
  }

  stroke(0);
  strokeWeight(4);
  line(0, height, width, height);
  noLoop();
}

function swap(l, i, j) {
  [l[i], l[j]] = [l[j], l[i]];
}

function partition(l, start, end){
    // Taking the last element as the pivot
    const pivotValue = l[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (l[i] < pivotValue) {
        // Swapping elements
        swap(l, i, pivotIndex);
        // Moving to next element
        pivotIndex++;
        }
    }

    // Putting the pivot value in the middle
    swap(l, pivotIndex, end);
    return pivotIndex;
};

function quicksort(l, start, end) {
  if (start >= end) {
    return;
  }
  pivot = partition(l, start, end);
  quicksort(l, start, pivot - 1);
  quicksort(l, pivot + 1, end);
}
