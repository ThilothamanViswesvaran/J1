//separating loops using functions

function rightAlignedTriangleStar(rowNumber, rowSize) {
    let save = "";
    for (let j = 0; j < rowSize; j++) {
        save += (j < rowSize - rowNumber - 1) ? " " : "*";
    }
    return save;
}

function rightAlignedTriangle(size) {
    console.log(`Right-Aligned Triangle size - ${size}`);

    for (let i = 0; i < size; i++) {
        let result = rightAlignedTriangleStar(i, size);
        console.log(result);
    }
}

function invertedTriangleStar(rowNumber, rowSize) {
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
        let result = invertedTriangleStar(i, rowSize)
        console.log(result);
    }
}

function leftAlignedTriangleStar(i) {
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
        let result = leftAlignedTriangleStar(i, count)
        console.log(result);
    }
}

function pyramidStar(i, count) {
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
        let result = pyramidStar(i, count);
        console.log(result);
    }
}
function star5(i, count) {

}

function diamond1(count) {
    let rowContent = "";
    let gap = " ";
    let symb = "*";
    for (let j = 0; j < count - 1; j++) {
        rowContent = rowContent + gap;
    }
    for (let k = 0; k < 1; k++) {
        rowContent = rowContent + symb;
    }
    console.log(rowContent);
}


function diamond2(gapCount, starCount){
    let rowContent = "";
    let symb1 = " ";
    let symb2 = "*";
    for(let i = 0; i < gapCount; i++){
        rowContent = rowContent + symb1;
    }
    for(let j = 0; j < starCount; j++){
        rowContent = rowContent + symb2;
    }
    console.log(rowContent)
}

function diamond3(rowNumber, diamondSize){
    let gapCount = ((rowNumber - diamondSize)+ 1);
    if(gapCount > 0){
        gapCount = gapCount
    }
    else{
        gapCount = ((diamondSize - rowNumber)+ 1)
    }
    let starCount = diamondSize - rowNumber;
    if(starCount > 0){
        starCount = ((rowNumber *2)-1);
    }
    else {
        let result1 = (rowNumber - diamondSize);
        let result2 = ((diamondSize * 2)-1);
        let result3 = (result1 * 2);
        starCount = result2 - result3;
    }
    let save = diamond2(gapCount, starCount);
    // console.log(gapCount, starCount);
}

// diamond3(9,7)
// diamond3(5,7)
// diamond3(1,7)
// diamond3(7,7)

let diamondSize = 5;
for(let i = 0; i <= diamondSize * 2; i++){
    let save = diamond3(i,diamondSize)
}

function firsthalf(i, count) {
    rowContent = "";
    gap = "-";
    symb = "*"
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
    return rowContent
}

function secondhalf(i, count) {
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
    return rowContent
}

function diamond(count) {
    console.log(`Diamond - ${count}`);
    for (let i = 1; i <= count; i++) {
        rowContent = "";
        let save = firsthalf(i, count)
        console.log(save);
    }
    for (let i = 1; i <= count; i++) {
        rowContent = "";
        let result = secondhalf(i, count)
        console.log(result);
    }
}

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

function pascalsTriangleStar(i, numRows) {
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
        let save = pascalsTriangleStar(i, numRows)
        console.log(save);
    }
}

// rightAlignedTriangle(5);

// invertedTriangle(5)

// leftAlignedTriangle(5)

// pyramid(5)

// diamond1(5)

// diamond(5)

// hollowSquare(5)

// checkerBoard(4)

// leftAlignedNumericTriangle(5)

// floydsTriangle(5)

// pascalsTriangle(5)

// diamond2(3,5)

// diamond3(5, 5)
