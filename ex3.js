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

let c = `hello`;
let b = ``;
for(let d = c.length; d >= 0 ; d-=1){
   console.log(c[d]);
}

//Write a program that loops through an array of numbers (e.g., [10, 20, 30, 40]) and calculates the total sum of all elements.

