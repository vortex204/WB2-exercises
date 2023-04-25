// Years to double = 72 / IR
// Assign values to x and IR variables
let x = 1000;
let IR = 5;

// Calculate years to double using rule of 72 formula
let yearsToDouble = 72 / IR;

// Print result 
console.log("It will take " + yearsToDouble.toFixed(2) + " years for a savings account worth $" + x + " to double in value with an interest rate of " + IR + "%.");
