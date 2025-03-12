// // Right-Aligned Triangle

// // Prompt: Given an integer N, print a right-aligned triangle of asterisks *.
// // Example (for N = 5):
// //     *
// //    **
// //   ***
// //  ****
// // *****

// console.log("Right-Aligned Triangle");
// rowContent = "";
// gap = " ";
// symb = "*"
// count = 6;
// for(let i = 0; i < count; i++) {
//   rowContent = "";
//   for(let j = 0; j < count - i; j++) {
//     rowContent = rowContent + gap;
//   }
//   for(let k = 0; k < i; k++){
//     rowContent = rowContent + symb;
//   }
// console.log(rowContent);
// }

// // Left-Aligned Triangle

// // Prompt: Given an integer N, print a left-aligned triangle of asterisks *.
// // Example (for N = 4):
// // *
// // **
// // ***
// // ****

// console.log("Left-Aligned Triangle");
// rowContent = "";
// symb = "*"
// count = 5;
// for(let i = 0; i < count; i++) {
//   rowContent = "";
//   for(let j = 0; j < i; j++) {
//     rowContent = rowContent + symb;
//   }
// console.log(rowContent);
// }

// // Inverted Triangle

// // Prompt: Given an integer N, print an inverted triangle of asterisks *.
// // Example (for N = 4):
// // ****
// // ***
// // **
// // *

// console.log("Inverted Triangle");
// rowContent = "";
// symb = "*"
// count = 5;
// for(let i = 0; i <= count; i++) {
//   rowContent = "";
//   for(let j = 1; j <= count - i; j++) {
//     rowContent = rowContent + symb;
//   }
// console.log(rowContent);
// }

// // Pyramid

// // Prompt: Given an integer N, print a pyramid of asterisks * with N rows, centered horizontally.
// // Example (for N = 5):
// //     *
// //    ***
// //   *****
// //  *******
// // *********

// console.log("Pyramid");
// rowContent = "";
// gap = " ";
// symb = "*"
// count = 5;
// for(let i = 1; i < count; i++) {
//   rowContent = "";
//   for(let j = 0; j < count - i; j++) {
//     rowContent = rowContent + gap ;
//   }
//   for(let k = 1; k <= i; k++){
//     if(k === 1){
//       rowContent = rowContent + symb;
//     }
//     else{
//       rowContent = rowContent + symb +symb;
//     }
    
//   }
// console.log(rowContent);
// }

// console.log("Pyramid");
// rowContent = "";
// gap = " ";
// symb = "*"
// count = 5;
// for(let i = 0; i < count; i++) {
//   rowContent = "";
//   for(let j = 0; j < count - 1 - i; j++) {
//     rowContent = rowContent + gap ;
//   }
//   for(let k = 1; k <= i*2 + 1; k++){
//     // if(k === 1){
//       rowContent = rowContent + symb;
//     // }
//     // else{
//       // rowContent = rowContent + symb +symb;
//     // }
    
//   }
// console.log(rowContent);
// }

// Diamond

// Prompt: Given an integer N, print a diamond shape of asterisks *. Use N for the total height (which should be an odd number for a perfect diamond).
// Example (for N = 5):
//   *
//  ***
// *****
//  ***
//   *

// console.log("Diamond");
// rowContent = "";
// gap = "-";
// symb = "*"
// count = 5;
// for(let i = 1; i <= count; i++) {
//   rowContent = "";
//   for(let j = 0; j <= count - i; j++) {
//     rowContent = rowContent + gap ;
//   }
//   for(let k = 1; k <= i; k++){
//     if(k === 1){
//       rowContent = rowContent + symb;
//     }
//     else{
//       rowContent = rowContent + symb +symb;
//     }
//   }
//   console.log(rowContent);
// }
// for(let i = 1; i <= count; i++) {
//   rowContent = "";
//   for(let j = 0; j <= i; j++) {
//     rowContent = rowContent + gap ;
//   }
//   for(let k = 1; k <= count - i; k++){
//     if(k === 1){
//       rowContent = rowContent + symb;
//     }
//     else{
//       rowContent = rowContent + symb + symb;
//     }
//   }
//   console.log(rowContent);
// }


// Hollow Square

// Prompt: Given an integer N, print a hollow square of side length N. Only the borders should be asterisks, and the inside should be spaces.
// Example (for N = 5):
// *****
// *   *
// *   *
// *   *
// *****

// console.log("Hollow Square");
// gap = " ";
// count = 5;
// let index = "";

// for(let i = 1; i <= count; i++){
//   index = "";
//   for(let j = 1; j <= count; j++) {
//     if(i === 1 || i === count){
//       index += (`${i},${j}`);;
//     }
//     else if(j === 1){
//       index += (`${i},${j}`);;
//     }
//     else if(j === count){
//       // console.log("J Value", j)
//       index += (`${i},${j}`);;
//     }
//     else if(j != 1 || j != count || j < count){
//       index = index + gap + gap + gap;
//     }
//   }
  
//   console.log(index);
// }


// console.log("Mul");
// for(let y = 2; y <= 7; y++){
//   console.log("-----------------------------");
//   console.log(`Table ${y}`)
//   console.log("-----------------------------");
//   for(let i = 1; i <= 10; i++){

//     console.log(`${i} x ${y} = ${i *y}`);
// }
// }


// Checkerboard Pattern

// Prompt: Given an integer N, print an N x N checkerboard pattern using two different characters (e.g., * and #) in alternating positions.
// Example (for N = 4):
// *#*#
// #*#*
// *#*#
// #*#*


// let count = 4;
// let symb = "*";
// let symb1 = "#";
// let str = "";

// for (let i = 1; i <= count; i++) {
//   str = "";
//   for (let j = 1; j <= count; j++) {
//     if ((i + j) % 2 === 0) {
//       str += symb;
//     } else {
//       str += symb1;
//     }
//   }
//   console.log(str); 
// }


// Numeric Triangle (1, 2, 3...)

// Prompt: Given an integer N, print a left-aligned numeric triangle that increments numbers each row.
// Example (for N = 5):
// 1
// 12
// 123
// 1234
// 12345

// count = 5;
// rowcontent = "";
// for(i = 1; i <= count; i++){
//   rowcontent = "";
//   for(j = 1; j <= i; j++){
//     rowcontent = rowcontent + j;
//   }
//   console.log(rowcontent);
// }


// Floyd’s Triangle

// Prompt: Given an integer N, print the first N rows of Floyd’s Triangle, where each row contains an increasing count of consecutive numbers starting from 1.
// Example (for N = 5):
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

count = 5;
rowcontent = "";
rc = 1;
for(i = 1; i <= count; i++){
  rowcontent = "";
  for(j = 1; j <= i; j++){
    rowcontent = rowcontent + rc + " ";
    rc++;
  }
  console.log(rowcontent);
}

// Pascal’s Triangle

// Prompt: Given an integer N, print the first N rows of Pascal’s Triangle. Each number is the sum of the two numbers directly above it.
// Example (for N = 5):
  //     1
  //    1 1
  //   1 2 1
  //  1 3 3 1
  // 1 4 6 4 1

console.log("Pascal’s Triangle");

let numRows = 5; 
for (let i = 0; i < numRows; i++) {
    let rowContent = "";
    let num = 1; 
    for (let j = 0; j < numRows - i - 1; j++) {
        rowContent = rowContent + " ";
    }
    for (let k = 0; k <= i; k++) {
        rowContent = rowContent + num + " "; 
        num = num * (i - k) / (k + 1);
    }
    console.log(rowContent);
}

// console.log("Pascal’s Triangle");

// let numRows = 15; 
// for (let i = 0; i < numRows; i++) {
//     let rowContent = "\t";
//     let num = 1; 
//     for (let j = 0; j < numRows - i - 1; j++) {
//         rowContent = rowContent + "\t";
//     }
//     for (let k = 0; k <= i; k++) {
//         rowContent = rowContent + num + "\t\t"; 
//         num = num * (i - k) / (k + 1);
//     }
//     console.log(rowContent);
// }