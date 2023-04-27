const payRate = 10; // hourly pay rate
const hoursWorked = 50; // total hours worked
const filingStatus = "Single"; // filing status ("Single" or "Joint")

// Calculate gross pay
let grossPay;

if (hoursWorked <= 40) {
  // if worked hours is less than or equal to 40, calculate regular pay
  grossPay = payRate * hoursWorked;
} else {
  // if worked hours is greater than 40, calculate regular pay + overtime pay
  const regularPay = payRate * 40; // pay for first 40 hours
  const overtimePay = (hoursWorked - 40) * (payRate * 1.5); // pay for overtime hours at 1.5 times regular rate
  grossPay = regularPay + overtimePay;
}

// Calculate annual gross pay (52 weeks in a year)
const annualGrossPay = grossPay * 52;

// Determine tax rate based on filing status and income
let taxRate;

if (filingStatus === "Single") {
  if (annualGrossPay < 12000) {
    taxRate = 0.05;
  } else if (annualGrossPay < 25000) {
    taxRate = 0.10;
  } else if (annualGrossPay < 75000) {
    taxRate = 0.15;
  } else {
    taxRate = 0.20;
  }
} else if (filingStatus === "Joint") {
  if (annualGrossPay < 12000) {
    taxRate = 0.00;
  } else if (annualGrossPay < 25000) {
    taxRate = 0.06;
  } else if (annualGrossPay < 75000) {
    taxRate = 0.11;
  } else {
    taxRate = 0.20;
  }
}

// Calculate federal tax based on tax rate and annual gross income
const federalTax = annualGrossPay * taxRate;

console.log(`Federal tax: $${federalTax}`);
