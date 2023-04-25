// formula Taxes withheld = x * 0.23
// Assign value to salary variable
let salary = 5000;

// Calculate taxes withheld using formula
let taxes = salary * 0.23;

// Format output string
let output = "Federal taxes withheld from a monthly salary of $" + salary.toFixed(2) + " is $" + taxes.toFixed(2);

// Print result to console
console.log(output);
