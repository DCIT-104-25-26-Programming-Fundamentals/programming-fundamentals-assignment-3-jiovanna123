const readlineSync = require('readline-sync');


function readMatrix(rows, cols, name = "Matrix") {
    const matrix = [];
    console.log(`\nEnter values for ${name} (${rows} x ${cols}):`);
    for (let i = 0; i < rows; i++) {
        const input = readlineSync.question(`Enter row ${i + 1}: `);
        const row = input.trim().split(/\s+/).map(Number);
        if (row.length !== cols || row.some(isNaN)) {
            console.log(`Invalid input. Please enter exactly ${cols} numbers.`);
            i--
        } else {
            matrix.push(row);
        }
    }
    return matrix;
}


function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let rowStr = '';
        for (let j = 0; j < matrix[i].length; j++) {
            rowStr += matrix[i][j].toString().padEnd(6, ' ');
        }
        console.log(rowStr);
    }
}


function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = [];

    for (let j = 0; j < cols; j++) {
        const newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        transposed.push(newRow);
    }
    return transposed;
}


function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const cols = matrixA[0].length;
    const result = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }
    return result;
}


function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;
    const result = [];

    for (let i = 0; i < rowsA; i++) {
        const row = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}


function main() {
    console.log('=== PART A: TRANSPOSE MATRIX ===');
    const rowsA = readlineSync.questionInt('Enter number of rows: ');
    const colsA = readlineSync.questionInt('Enter number of columns: ');
    const matrixA = readMatrix(rowsA, colsA, 'Original Matrix');

    console.log('\nOriginal Matrix:');
    printMatrix(matrixA);

    const transposed = transposeMatrix(matrixA);
    console.log('\nTransposed Matrix:');
    printMatrix(transposed);

    console.log('\n==================================');
    console.log('=== PART B: ADD TWO MATRICES ===');
    console.log(`Entering Matrix B with same dimensions (${rowsA} x ${colsA})...`);
    const matrixB = readMatrix(rowsA, colsA, 'Matrix B');

    console.log('\nMatrix A + Matrix B:');
    const sumMatrix = addMatrices(matrixA, matrixB);
    printMatrix(sumMatrix);

    console.log('\n==================================');
    console.log('=== PART C: MULTIPLY TWO MATRICES ===');
    console.log(`For A x C, Matrix C must have ${colsA} rows.`);
    const colsC = readlineSync.questionInt('Enter number of columns for Matrix C: ');
    const matrixC = readMatrix(colsA, colsC, 'Matrix C');

    console.log('\nMatrix A x Matrix C:');
    const productMatrix = multiplyMatrices(matrixA, matrixC);
    printMatrix(productMatrix);
}


main();
