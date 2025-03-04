//Write a program that uses a loop to print all integers from 1 to 10.

 for (let i = 1; i <= 10;  i++){
    console.log(i);
 }
 
 //Write a program that reads a value N (e.g., 5) and then uses a loop to calculate the sum of the integers from 1 up to N.

 let N = 5;
 let sum = 0;
 for(let i = 1; i <= N; i++){
    sum+=i;
 }
 console.log(sum);

 //Write a program that prints the multiplication table of a given number (e.g., 7) from 1 through 10.

 let A = 7; 
 let limit = 10; 

 console.log(`Multiplication Table of ${A}:`);
 for (let i = 1; i <= limit; i++) {
    console.log(`${A} x ${i} = ${A * i}`);
 }

//Write a program that takes a number N (e.g., 5) and prints a countdown from N to 1.

let B = 5;

console.log(`Reverse Countdown of ${B} :`);
for (let s = B; s >= 1; s -= 1){
   console.log(s);
}

//Write a program that takes a string (e.g., "hello") and uses a loop to reverse it (e.g., "olleh").

let c = `hello world!`;
let rev = ``;
for(let d = c.length-1; d >= 0 ; d--){
   rev+=c[d];
}
console.log(rev);

//Write a program that loops through an array of numbers (e.g., [10, 20, 30, 40]) and calculates the total sum of all elements.

let z = [10, 20, 30, 40];
let summ = 0;
for (let i = 0; i < z.length ; i++){
   summ+=z[i];
}
console.log(summ);


//Write a program that loops through an array of numbers (e.g., [1, 2, 3, 4, 5, 6]) and prints only the even numbers.

let arr = [42, 2, 3, 5, 6];
for(let i = 0; i < arr.length ; i++){
   if(arr[i] % 2 === 0){
      console.log(arr[i]);
   }
}

//Write a program that computes the factorial of a given number N (e.g., 5! = 120) using a loop.

console.log("Factorial of given number");

let l = 5;
let fac = 1;
for(let i = 1; i <= l; i++){
   fac *= i
}
console.log(fac);

//Write a program that prints the first N terms of the Fibonacci sequence (e.g., for N = 6, output 0, 1, 1, 2, 3, 5).

console.log("Fibonacci Sequence");
let f = 6;
let fib = 0;
for(i = 0; i < f; i++){
   console.log(i);
}

// Write a program that uses nested loops to print a simple star pattern (e.g., for N = 4, the output might be):
// *
// **
// ***
// ****

// let symb = "*";
// let pat = ``;
// for(i =)