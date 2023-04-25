// formula Distance = √((x2 - x1)^2 + (y2 - y1)^2)
// Assign values to x1, y1, x2, and y2 variables
let x1 = 1;
let y1 = 2;
let x2 = 4;
let y2 = 6;

// Calculate distance using formula
let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

// Format output string
let output = "The distance between (" + x1 + "," + y1 + ") and (" + x2 + "," + y2 + ") is " + distance.toFixed(2);

// Print result to console
console.log(output);
