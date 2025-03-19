function generateGapsAndStar(gapCount, starCount){
    let rowContent = "";
    let symb1 = " ";
    let symb2 = "*";
    for(let i = 0; i < gapCount; i++){
        rowContent = rowContent + symb1;
    }
    for(let j = 0; j < starCount; j++){
        rowContent = rowContent + symb2;
    }
    return rowContent;
}

function generateRowsAndStars(rowNumber, diamondSize){
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
    console.log(generateGapsAndStar(gapCount, starCount));
    // console.log(gapCount, starCount);
}

// generateRowsAndStars(9,7)
// generateRowsAndStars(5,7)
// generateRowsAndStars(1,7)
// generateRowsAndStars(7,7)

function generateDiamond(diamondSize){
for(let i = 1; i <= diamondSize * 2 - 1; i++){
    generateRowsAndStars(i,diamondSize)
}
}
generateDiamond(5);