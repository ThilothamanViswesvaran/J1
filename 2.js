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