//separating loops using functions

function star1(rowNumber, rowSize) {
    let save = "";
    for (let j = 0; j < rowSize; j++) {
        save += (j < rowSize - rowNumber - 1) ? " " : "*";
    }
    return save;
}

function rightAlignedTriangle(size) {
    console.log(`Right-Aligned Triangle size - ${size}`);

    for (let i = 0; i < size; i++) {
        let result = star1(i, size);
        console.log(result);
    }
}

rightAlignedTriangle(5);

function star2(rowNumber, rowSize) {
    rowContent = "";
    symb = "*";
    for (let j = 1; j <= rowSize - rowNumber; j++) {
        rowContent = rowContent + symb;
    }
    return rowContent
}

function invertedTriangle(rowSize) {
    console.log(`Inverted Triangle - ${rowSize}`);
    for (let i = 0; i <= rowSize; i++) {
        let result = star2(i, rowSize)
        console.log(result);
    }
}

invertedTriangle(5)

function star3(i) {
    rowContent = "";
    symb = "*"
    for (let j = 0; j <= i; j++) {
        rowContent = rowContent + symb;
    }
    return rowContent;
}
function leftAlignedTriangle(count) {
    console.log(`Left-Aligned Triangle - ${count}`);

    for (let i = 0; i < count; i++) {
        rowContent = "";
        let result = star3(i, count)
        console.log(result);
    }
}

leftAlignedTriangle(5)

function star4(i, count) {
    save = "";
    symb = "*";
    for (let j = 0; j < count + i; j++) {
        if (j < count - i - 1) {
            save = save + " ";
        } else {
            save = save + symb;
        }
    }
    return save
}

function pyramid(count) {
    console.log(`Pyramid - ${count}`)
    for (let i = 0; i < count; i++) {
        let result = star4(i, count);
        console.log(result);
    }
}

pyramid(5)

function star5(i, count) {

}

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

function square(i, count) {
    let index = "";
    gap = " ";
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
    return index
}
function hollowSquare(count) {
    console.log(`Hollow Square - ${count}`);
    for (let i = 1; i <= count; i++) {
        index = "";
        let result = square(i, count)
        console.log(result);
    }
}

hollowSquare(5)

function board(i, count) {
    let symb = "*";
    let symb1 = "#";
    let str = "";
    for (let j = 1; j <= count; j++) {
        if ((i + j) % 2 === 0) {
            str += symb;
        } else {
            str += symb1;
        }
    }
    return str
}
function checkerBoard(count) {
    console.log(`Checkerboard Pattern - ${count}`)
    for (let i = 1; i <= count; i++) {
        str = "";
        let result = board(i, count)
        console.log(result);
    }
}

checkerBoard(4)

function numeric(i) {
    rowcontent = "";
    for (j = 1; j <= i; j++) {
        rowcontent = rowcontent + j;
    }
    return rowcontent
}
function leftAlignedNumericTriangle(count) {
    console.log(`Left Aligned Numeric Triangle - ${count}`)
    for (i = 1; i <= count; i++) {
        rowcontent = "";
        let result = numeric(i)
        console.log(result);
    }
}

leftAlignedNumericTriangle(5)


function symbolic(i, start) {
    rowcontent = "";
    rc = start;
    for (j = 1; j <= i; j++) {
        rowcontent = rowcontent + rc + " ";
        rc++;
    }
    return rowcontent

}

function floydsTriangle(count) {
    console.log(`Floyd's Triangle - ${count}`)
    let start = 1;
    for (i = 1; i <= count; i++) {
        rowcontent = "";
        let result = symbolic(i, start)
        start = start + 1
        console.log(result);
    }
}

floydsTriangle(5)

function star6(i, numRows) {
    let rowContent = "";
    let num = 1;
    for (let j = 0; j < numRows - i - 1; j++) {
        rowContent = rowContent + " "; //add "\t" when count is more than 1 digit instead of gap
    }
    for (let k = 0; k <= i; k++) {
        rowContent = rowContent + num + " "; //add "\t" when count is more than 1 digit instead of gap
        num = num * (i - k) / (k + 1);
    }
    return rowContent
}
function pascalsTriangle(numRows) {

    console.log(`Pascal’s Triangle - ${numRows}`);
    for (let i = 0; i < numRows; i++) {
        let save = star6(i, numRows)
        console.log(save);
    }
}

pascalsTriangle(5)

