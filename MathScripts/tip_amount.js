// formula tip amount = bill amount x (tip percentage / 100)
// assign value to bill amount and tipPercentage
let billAmount = 50;
let tipPercentage = 20;

//calculate tip amount 
let tipAmount = billAmount * (tipPercentage / 100);

// print results
console.log("the tip amount is: $" + tipAmount.toFixed(2));