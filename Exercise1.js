//Write a program that checks if a given number is even or odd.

let a = parseInt(prompt("Enter the number:"));

if (a % 2 == 0){
    console.log("Even Number");
}
else{
    console.log("Odd Number");
}

// Write a program that, given a score (0–100), assigns a grade:

// 90 or above: A
// 80–89: B
// 70–79: C
// Below 70: F

let score = parseInt(prompt("Enter Your Score:"));

if (score >= 90){
    console.log("Your Grade is A");
}
else if(score >= 80 && score <= 89){
    console.log("Your Grade is B");
}
else if(score >= 70 && score <= 79){
    console.log("Your Grade is C");
}
else{
    console.log("Your Grade is F");
}

// Write a program that takes a username and:

// If it exactly matches "admin", print "Welcome, admin!"
// Otherwise, print "Welcome, user!"

let username = prompt("Enter Your Username:");

if(username === "admin"){
    console.log("Welcome, admin");
}
else{
console.log("Welcome, user!");
}

// Write a program that checks if a person is an adult:

// If age ≥ 18, print "Adult"
// Otherwise, print "Underage"

let age = prompt("Enter your age:");

if(age >= 18){
    console.log("Adult");
}
else{
    console.log("Underage");
}

// Write a program that checks if a given number is between 0 and 9 (inclusive):

// If yes, print "Valid single digit"
// Otherwise, print "Invalid single digit"

let number = prompt("Enter the number:");

if (number >= 0 && number <= 9){
    console.log("Valid single digit")
}
else{
    console.log("Invalid single digit")
}

// Write a program to determine if a given integer is positive, negative, or zero.

let integer = prompt("Enter the integer");

if(integer > 0){
    console.log("Positive");
}
else if(integer < 0){
    console.log("Negative")
}
else{
    console.log("Zero");
}

// Write a program that classifies a temperature (in Celsius) as:

// Below 0: "Freezing"
// 0–15: "Cold"
// 16–30: "Warm"
// Above 30: "Hot"

let temp = prompt("Enter the Temperature:");

if(temp > 30){
    console.log("Hot");
}
else if(temp >= 16 && temp <= 30){
    console.log("Warm");
}
else if(temp >= 0 && temp <= 15){
    console.log("Cold");
}
else{
    console.log("Freezing");
}

// Write a program that compares an enteredPassword to a storedPassword:

// If they match exactly, print "Login successful"
// Otherwise, print "Invalid password"

let enteredPassword = prompt("Enter your password:");
let storedPassword = "at";
if (enteredPassword === storedPassword){
    console.log("Login Successful");
}
else{
    console.log("Invalid Password")
}

// Write a program that outputs a greeting based on an hour of the day (0–23):

// Less than 12: "Good morning"
// 12–17: "Good afternoon"
// Greater than 17: "Good evening"

let hours = prompt("Enter the hour:");

if (hours < 12){
    console.log("Good Morning");
}
else if(hours > 12 && hours < 17){
    console.log("Good Afternoon");
}
else{
    console.log("Good Evening");
}

// Write a program to check a user's discount eligibility:

// If the user is a "member", always apply a discount
// Otherwise, if they spend more than 100, apply a discount
// Otherwise, no discount

let member = prompt("Are you a member(yes/no):");
let amount = parseInt(prompt("Enter your bill amount:"));
let discount = amount * 0.1;
let discountedPrice = amount - discount;
if(member === "yes"){
    console.log(discountedPrice);
}
else if(amount >= 100){
    console.log(discountedPrice);
}
else{
    console.log(amount);
}