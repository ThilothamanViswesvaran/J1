// // Right-Aligned Triangle

// // Prompt: Given an integer N, print a right-aligned triangle of asterisks *.
// // Example (for N = 5):
// //     *
// //    **
// //   ***
// //  ****
// // *****

function rightAlignedTriangle(size) {
  console.log(`Right-Aligned Triangle size - ${size}`);
  save = "";
  for (i = 0; i < size; i++) {
    let save = "";
    for (j = 0; j <= size; j++) {
      save += (j < size - i) ? " " : "*";
    }
    console.log(save);
  }
}

rightAlignedTriangle(5);

function innerLoop(i, size) {
  let save = "";
  for (let j = 0; j < size; j++) {
    save += (j < size - i) ? " " : "*";
  }
  return save;
}

function rightAlignedTriangle(size) {
  console.log(`Right-Aligned Triangle size - ${size}`);

  for (let i = 0; i < size; i++) {
    let result = innerLoop(i, size);  
    console.log(result);
  }
}

rightAlignedTriangle(5);


// // Left-Aligned Triangle

// // Prompt: Given an integer N, print a left-aligned triangle of asterisks *.
// // Example (for N = 4):
// // *
// // **
// // ***
// // ****

function leftAlignedTriangle(count) {
  console.log(`Left-Aligned Triangle - ${count}`);
  rowContent = "";
  symb = "*"
  for (let i = 0; i < count; i++) {
    rowContent = "";
    for (let j = 0; j <= i; j++) {
      rowContent = rowContent + symb;
    }
    console.log(rowContent);
  }
}

leftAlignedTriangle(5)

// // Inverted Triangle

// // Prompt: Given an integer N, print an inverted triangle of asterisks *.
// // Example (for N = 4):
// // ****
// // ***
// // **
// // *

function invertedTriangle(size) {
  console.log(`Inverted Triangle - ${size}`);
  rowContent = "";
  symb = "*"
  count = 5;
  for (let i = 0; i <= count; i++) {
    rowContent = "";
    for (let j = 1; j <= count - i; j++) {
      rowContent = rowContent + symb;
    }
    console.log(rowContent);
  }
}

invertedTriangle(5)


// // Pyramid

// // Prompt: Given an integer N, print a pyramid of asterisks * with N rows, centered horizontally.
// // Example (for N = 5):
// //     *
// //    ***
// //   *****
// //  *******
// // *********

function pyramid(size) {
  console.log(`Pyramid - ${size}`)
  count = 5;
  save = "";
  symb = "*";
  for (let i = 0; i < count; i++) {
    let save = "";

    for (let j = 0; j < count + i; j++) {
      if (j < count - i - 1) {
        save = save + " ";
      } else {
        save = save + symb;
      }
    }

    console.log(save);
  }
}

pyramid(5)

// Diamond

// Prompt: Given an integer N, print a diamond shape of asterisks *. Use N for the total height (which should be an odd number for a perfect diamond).
// Example (for N = 5):
//   *
//  ***
// *****
//  ***
//   *

function diamond(count) {
  console.log(`Diamond - ${count}`);
  rowContent = "";
  gap = " ";
  symb = "*"
  for (let i = 1; i <= count; i++) {
    rowContent = "";
    for (let j = 0; j <= count - i; j++) {
      rowContent = rowContent + gap;
    }
    for (let k = 1; k <= i; k++) {
      if (k === 1) {
        rowContent = rowContent + symb;
      }
      else {
        rowContent = rowContent + symb + symb;
      }
    }
    console.log(rowContent);
  }
  for (let i = 1; i <= count; i++) {
    rowContent = "";
    for (let j = 0; j <= i; j++) {
      rowContent = rowContent + gap;
    }
    for (let k = 1; k <= count - i; k++) {
      if (k === 1) {
        rowContent = rowContent + symb;
      }
      else {
        rowContent = rowContent + symb + symb;
      }
    }
    console.log(rowContent);
  }
}

diamond(5)


// Hollow Square

// Prompt: Given an integer N, print a hollow square of side length N. Only the borders should be asterisks, and the inside should be spaces.
// Example (for N = 5):
// *****
// *   *
// *   *
// *   *
// *****

function hollowSquare(count) {
  console.log(`Hollow Square - ${count}`);
  gap = " ";
  let index = "";
  for (let i = 1; i <= count; i++) {
    index = "";
    for (let j = 1; j <= count; j++) {
      if (i === 1 || i === count) {
        index += (`${i},${j}`);;
      }
      else if (j === 1) {
        index += (`${i},${j}`);;
      }
      else if (j === count) {
        // console.log("J Value", j)
        index += (`${i},${j}`);;
      }
      else if (j != 1 || j != count || j < count) {
        index = index + gap + gap + gap;
      }
    }
    console.log(index);
  }
}

hollowSquare(5)


function mul() {
  console.log("Mul");
  for (let y = 2; y <= 7; y++) {
    console.log("-----------------------------");
    console.log(`Table ${y}`)
    console.log("-----------------------------");
    for (let i = 1; i <= 10; i++) {

      console.log(`${i} x ${y} = ${i * y}`);
    }
  }
}

mul()

// Checkerboard Pattern

// Prompt: Given an integer N, print an N x N checkerboard pattern using two different characters (e.g., * and #) in alternating positions.
// Example (for N = 4):
// *#*#
// #*#*
// *#*#
// #*#*

function checkerBoard(count) {
  console.log(`Checkerboard Pattern - ${count}`)
  let symb = "*";
  let symb1 = "#";
  let str = "";

  for (let i = 1; i <= count; i++) {
    str = "";
    for (let j = 1; j <= count; j++) {
      if ((i + j) % 2 === 0) {
        str += symb;
      } else {
        str += symb1;
      }
    }
    console.log(str);
  }
}

checkerBoard(4)

// Numeric Triangle (1, 2, 3...)

// Prompt: Given an integer N, print a left-aligned numeric triangle that increments numbers each row.
// Example (for N = 5):
// 1
// 12
// 123
// 1234
// 12345

function leftAlignedNumericTriangle(count) {
  console.log(`Left Aligned Numeric Triangle - ${count}`)
  rowcontent = "";
  for (i = 1; i <= count; i++) {
    rowcontent = "";
    for (j = 1; j <= i; j++) {
      rowcontent = rowcontent + j;
    }
    console.log(rowcontent);
  }
}

leftAlignedNumericTriangle(5)

// Floyd’s Triangle

// Prompt: Given an integer N, print the first N rows of Floyd’s Triangle, where each row contains an increasing count of consecutive numbers starting from 1.
// Example (for N = 5):
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

function floydsTriangle(count) {
  console.log(`Floyd's Triangle - ${count}`)
  rowcontent = "";
  rc = 1;
  for (i = 1; i <= count; i++) {
    rowcontent = "";
    for (j = 1; j <= i; j++) {
      rowcontent = rowcontent + rc + " ";
      rc++;
    }
    console.log(rowcontent);
  }
}

floydsTriangle(5)


// Pascal’s Triangle

// Prompt: Given an integer N, print the first N rows of Pascal’s Triangle. Each number is the sum of the two numbers directly above it.
// Example (for N = 5):
//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1

function pascalsTriangle(numRows) {

  console.log(`Pascal’s Triangle - ${numRows}`);
  for (let i = 0; i < numRows; i++) {
    let rowContent = "";
    let num = 1;
    for (let j = 0; j < numRows - i - 1; j++) {
      rowContent = rowContent + " "; //add "\t" when count is more than 1 digit instead of gap
    }
    for (let k = 0; k <= i; k++) {
      rowContent = rowContent + num + " "; //add "\t" when count is more than 1 digit instead of gap
      num = num * (i - k) / (k + 1);
    }
    console.log(rowContent);
  }
}

pascalsTriangle(5)

// Hourglass

// 1 1 1 1 1
//  2 2 2 2
//   3 3 3
//    4 4
//     5
//     1
//    2 2
//   3 3 3
//  4 4 4 4
// 5 5 5 5 5/

function hourGlass(count) {
  console.log(`Hour Glass - ${count}`)
  for (l = 1; l <= count; l++) {
    rowContent = "";
    for (o = 0; o <= l - 2; o++) {
      rowContent = rowContent + " ";
    }
    for (p = 1; p <= count - l + 1; p++) {
      rowContent = rowContent + l + " ";
    }
    console.log(rowContent);
  }
  for (i = 1; i <= count; i++) {
    rowContent = "";
    for (j = 0; j <= count - i - 1; j++) {
      rowContent = rowContent + " ";
    }
    for (k = 1; k <= i; k++) {
      rowContent = rowContent + i + " ";
    }
    console.log(rowContent);
  }

}

hourGlass(5)

// *       *       *
//  *   *    *   *
//    *        *

function zigzag(count) {
  console.log(`Zig Zag ${count}`)
  symb = "*";
  save = "";
  for (row = 0; row < count / 2; row++) {
    save = " ";
    for (column = 0; column < count; column++) {
      if (row === column || column === (count - row - 1)) {
        save = save + "*"
      }
      else {
        save = save + " "
      }
    }
    console.log(save)
  }
}

zigzag(5)


function addone(number){
  console.log("Add One");
  return number + 1;
}

let r = addone(5)
console.log(r);


function addtwo(number){
  console.log("Add Two");
  return number + 2;
}

let b = addtwo(8)
console.log(b);


function addthree(number){
  console.log("Add Three");
  return number + 3;
}

let a = addthree(5)
console.log(a);