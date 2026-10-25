// Predefined (static) values
var principal = 10000;   // P = principal amount
var rate = 0.05;         // r = annual interest rate (5% written as 0.05)
var n = 4;               // n = times interest is compounded per year
var time = 3;            // t = time in years

// Formula: A = P * (1 + r/n) ^ (n*t)
var amount = principal * Math.pow(1 + rate / n, n * time);

// Display the result using console.log()
console.log("The compound interest after " + time + " years is: " + amount.toFixed(2));