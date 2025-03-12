// Prompt: Given an integer N, print a right-aligned triangle of asterisks *.
// Example (for N = 5):
//     *
//    **
//   ***
//  ****
// *****

// let q = 5;
// for(let i = 1; i <= q; i++){
//     let w = "*";
//     for(let k = 1; k <= q; k++){
//         let e = " ";
//         e += (i * k) + "\t";
//     } 
//     console.log(w);
// }

// let fruits = ["apple, pineapple"];

// fruits.unshift("orange");

// console.log(fruits)

// let x = "*";
// let c = 4;
// for(let i = 0; i < c; i++, x+="*"){
//     console.log(x);
    
// }

// let a = 5;
// let b = "";
// for(let i = 0; i <= a; i++){
//     for(let l = 0; l <= a; l++){ 
//         b = b + `(${i},${l})` + "\n";
//     }
//     console.log(b);
// }


// for(i = 0; i < 5; i++){
//     for(j=0; j < 5; j++){
//         let str += (`(${i},${j})`);
//         console.log(str);
//     }
//     console.log("Outside loop", i)
// }

// i = 0;
// rowContent = "";
// for(let j =0; j < 5; j ++) {
//   rowContent += (${i},${j});
// }
// console.log(rowContent);

rowContent = "";
count = 5;
for(let i = 0; i < count; i++) {
//   console.log('Inner Loop is about to begin for', i);
  rowContent = "";
  for(let j =0; j < count; j ++) {
    // console.log('Inner Loop iteration', i, j);
    rowContent = rowContent + `(${i},${j})`;
  }
//   console.log('Inner Loop ended for', i);
//   rowContent = rowContent + '\n';
console.log(rowContent);
}
