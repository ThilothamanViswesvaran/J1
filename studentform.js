// //write a code for finite number of students entering 5 subject marks with their name, 
// // compare the total of each student and find out the topper, and subject name 

// let studentcount = 5;
// // let students = [];
// for (let i = 0; i < studentcount; i++){
//     let studentname = 'S' + i;
//     console.log(studentname);
// }

// let num = prompt("Enter the number:");
// if (num > 0){
//     console.log("The number is positive");
// } else if( num < 0){
//     console.log("The number is negative");
// } else {
//     console.log("The number is zero");
// }

// let num = prompt("Enter the number:");
// if( num % 2 === 0){
//     console.log("The number is even");
// } else{
//     console.log("The Number is Odd");
// }

// let age = prompt("Enter the age:");
// if(age >=18){
//     console.log("You're eligible to vote");
// }else {
//     console.log("You're not eligible");
// }

// let a = prompt("Enter first number:");
// let b = prompt("Enter second number:");

// if (a > b) {
//     console.log(`${a} is greater.`);
// } else if (b > a) {
//     console.log(`${b} is greater.`);
// } else {
//     console.log("Both numbers are equal.");
// }

// let char = prompt("Enter a single letter:").toLowerCase();

// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//     console.log("It's a vowel.");
// } else {
//     console.log("It's a consonant.");
// }

// let num = prompt("Enter the number");
// if( num % 5 === 0){
//     console.log("Entered number is divisible by 5");
// }else {
//     console.log("Entered number is not divisible by 5");
// }

// let year = prompt("Enter the Year:");
// if( year % 4 === 0){
//     console.log("It's a leap year");
// }else {
//     console.log("Not a leap year");
// }

// let a = parseInt(prompt("Enter Angle 1:"));
// let b = parseInt(prompt("Enter Angle 2:"));
// let c = parseInt(prompt("Enter Angle 3:"));
// if(a + b + c === 180){
//     console.log("Valid Triangle");
// }else {
//     console.log("Not a valid triangle")
// }
// let n = parseInt(prompt("Enter Number"));
// let i = 1;
// while (i <= n) { 
//   console.log( i );
//   i++;
// }

// function sumOfNaturalNumbers(N) {
//   let sum = 0;
//   for (let i = 1; i <= N; i++) {
//     sum += i;
//   }
//   return sum;
// }

// let N = parseInt(prompt("Enter the number:"));

// console.log("Sum of first", N, "natural numbers is:", sumOfNaturalNumbers(N));


function createCounter(init) {
  let current = init;
  
  return {
      increment: function() {
          return ++current;
      },
      decrement: function() {
          return --current;
      },
      reset: function() {
          current = init;
          return current;
      }
  };
}

let 
const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.decrement()); // 5
console.log(counter.reset());     // 5
