//Write a program that uses a loop to print all integers from 1 to 10.

console.log("Print Integer from 1 to 10");
let N = 10;
for(let i = 1; i <= N; i++){
    console.log(i);
}

//Write a program that reads a value N (e.g., 5) and then uses a loop to calculate the sum of the integers from 1 up to N.

console.log("Sum of the integers from 1 to 5")
let m = 5;
let sum = 0;
for(let i = 1; i <= m; i++){
    sum+=i;
}
console.log(sum);

//Write a program that prints the multiplication table of a given number (e.g., 7) from 1 through 10.

console.log("Multiplication of 7")
let mul = 7;
let a = 0;
for(let i = 1; i <= 10; i++){
    console.log(`${i} x ${mul} = ${i *mul}`);
}

//Write a program that takes a number N (e.g., 5) and prints a countdown from N to 1.

console.log("countdown");
let q = 5;
for(let i = q; i > 0; i--){
    console.log(i);
}

//Write a program that takes a string (e.g., "hello") and uses a loop to reverse it (e.g., "olleh").

console.log("Reverse Text");
let w = "hello";
let e = "";
for(let i = w.length-1; i >= 0; i--){
   e+=w[i]
}
console.log(e);

//Write a program that loops through an array of numbers (e.g., [10, 20, 30, 40]) and calculates the total sum of all elements.

console.log("Total Sum");
let r = [10, 20, 30, 40];
let y = 0;
for(let i = 0; i < r.length; i++){
    y+=r[i];
}
console.log(y);

//Write a program that loops through an array of numbers (e.g., [1, 2, 3, 4, 5, 6]) and prints only the even numbers.

console.log("Print only Even Numbers")
let u = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < u.length; i++){
    if( u[i] % 2 === 0){
        console.log(u[i]);
    }
}

//Write a program that computes the factorial of a given number N (e.g., 5! = 120) using a loop.

console.log("Factorial of given number");
let p = 10;
let h = 1;
for(let i = 1; i <= p; i++){
    h*=i;
}
console.log(h);

//Write a program that prints the first N terms of the Fibonacci sequence (e.g., for N = 6, output 0, 1, 1, 2, 3, 5).

console.log("Fibonacci sequence");
let j = 6;
let k = [0, 1];
let l = 0;
for( let i = 2; i <= j; i++){
    l = k [i -1] + k[i-2];
    k.push(l)
}
console.log(k);

// Write a program that uses nested loops to print a simple star pattern (e.g., for N = 4, the output might be):
// *
// **
// ***
// ****

let x = "*";
let c = 4;
for(let i = 0; i < c; i++, x+="*"){
    console.log(x);
    
}
