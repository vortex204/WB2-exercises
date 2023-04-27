const a = 5;
const b = 10;
const c = 15;

// Determine the smallest number
let smallest = a;

if (b < smallest) {
  smallest = b;
}

if (c < smallest) {
  smallest = c;
}

console.log(`Smallest number: ${smallest}`);

// Determine the largest number
let largest = a;

if (b > largest) {
  largest = b;
}

if (c > largest) {
  largest = c;
}

console.log(`Largest number: ${largest}`);
