const payRate = 10; // hourly pay rate
const hoursWorked = 50; // total hours worked
let grossPay;

if(hoursWorked <= 40) {
// if worked hours is less than or equal to 40 calculate regular pay
grossPay = payRate * hoursWorked;
}
else{
    //if hours worked is greater than 40, calculate regular poy + overtime pay
    const regularPay = payRate * 40// pay for first 40 hours 
    const overtimePay = (hoursWorked - 40) *
    (payRate * 1.5); // pay for overtime hours at 1.5 times regular rate
    grossPay = regularPay + overtimePay;
}

console.log(`Gross pay: $${grossPay}`);