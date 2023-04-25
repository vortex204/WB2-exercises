// Assign values to length and width variables
let length = 12;
let width = 10;

// Calculate total area of room in square feet
let area = length * width;

// Calculate number of tiles needed
let tilesNeeded = Math.ceil(area / 1);

// Calculate number of boxes needed, with 10% extra tiles
let boxesNeeded = Math.ceil(tilesNeeded * 1.1 / 12);

// Print result to console
console.log("You will need " + boxesNeeded + " boxes of tiles.");
