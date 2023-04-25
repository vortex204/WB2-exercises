// formula tip amount = Food Bill x (tip percentage / 100)
// assign value to foodBill and tipPercentage
let foodBill = 50;
let tipPercentage = 20;

//calculate tip amount 
let tipAmount = foodBill * (tipPercentage / 100);

// print results
console.log("the tip on $" + foodBill.toFixed(2) + " food bill is $" + tipAmount.toFixed(2));