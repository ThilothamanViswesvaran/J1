// Given a 2D array and two variables row and col, print the element at that position.

function matrix() {
    let matrix = [
        [10, 20, 30],
        [40, 50, 60],
        [70, 80, 90]
    ];

    console.log("Current Value of matrix is " + matrix[1][2] + "\n")
}

matrix()

// Write a program that assigns a new value to a specific position in a 2D array, given row, col, and value.

function assignNewValue() {
    let matrix = [
        [100, 200, 300],
        [400, 500, 600],
        [700, 800, 50]
    ];

    matrix[2][1] = 999;

    console.log("Updated Value of Matrix [2],[1] = " + matrix[2][1] + "\n")
}

assignNewValue()

// // Given a 2D array and two positions (r1, c1) and (r2, c2), swap the elements at those positions.

function numberSwap() {

    let matrix = [
        [45, 63, 20],
        [21, 32, 99],
        [75, 15, 23]
    ];
    console.log("After Swap")
    matrix[0][0] = matrix[0][0] + matrix[2][2]
    matrix[2][2] = matrix[0][0] - matrix[2][2]
    matrix[0][0] = matrix[0][0] - matrix[2][2]

    console.log(matrix)

}

numberSwap();

//Given a matrix and a row number, print all the elements in that row.

function printMatrix() {
    let matrix = [
        [40, 50, 60],
        [21, 32, 99],
        [75, 15, 23]
    ];
    console.log("Printing Row")
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[0][i]);

    }
}

printMatrix();


// Given a matrix and a column index, print all the elements in that column.

function printColumn() {
    let matrix = [
        [40, 30, 60],
        [21, 60, 99],
        [75, 90, 23]
    ];
    console.log("Printing Column")
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][1]);

    }
}

printColumn()

// Write a program that sets all elements of a specified row to a given value (e.g., 0 or -1).

function updateElementsInRow(){
    let matrix = [
        [40, 30, 60],
        [21, 60, 99],
        [75, 90, 23]
    ];
    console.log("Update Elements in a Specific Row")
    for (let i = 0; i < matrix.length; i++) {
        matrix[0][i] = -1
        console.log(matrix[0][i]);
        
    }
}

updateElementsInRow();

//Set all elements in a given column to a specified value.

function updateElementsInColumn(){
    let matrix = [
        [40, 30, 60],
        [21, 60, 99],
        [75, 90, 23]
    ];
    console.log("Update Elements in a Specific Column")
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][0] = 999;
        console.log(matrix[i][0]);

    }
}

updateElementsInColumn()

// Search the matrix for a given value and print its row and column index. 

function matrixForGivenValue(){
    let matrix = [
        [40, 30, 99],
        [21, 50, 60],
        [75, 90, 23]
    ];
    let querry = 60;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(querry === matrix[i][j]){
                console.log(`${i},${j}`)
            }
        }
    }
}

matrixForGivenValue()

// Loop through the entire matrix and replace any even number with 0.

function replaceEvenNoWithZero() {
    let matrix = [
        [2, 3, 4],
        [5, 6, 7],
        [8, 9, 10]
    ];
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] % 2 === 0){
                matrix[i][j] = 0 
            }  
        }
    }
    console.log(matrix)
}

replaceEvenNoWithZero()

//Print the elements where row index === column index.

function rowIndexColumnIndex() {
    let matrix = [
        [2, 3, 4],
        [5, 6, 7],
        [8, 9, 10]
    ];
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(i === j){
               console.log(matrix[i][j])
            }
        }
    }

}

rowIndexColumnIndex()