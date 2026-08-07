const readlineSync = require('readline-sync');


function printSingleTable(num) {
    console.log(`\nMultiplication Table for ${num}:`);
    for (let i = 1; i <= 12; i++) {
        const product = num * i;
        const multiplierStr = i.toString().padEnd(2, ' ');
        console.log(`${num}  x  ${multiplierStr} =  ${product}`);
    }
}


function printTablesUpToN(n) {
    for (let i = 1; i <= n; i++) {
        printSingleTable(i);
        if (i < n) {
            console.log('---------------------------');
        }
    }
}


function main() {
    console.log('=== PART A: SINGLE TABLE ===');
    const num = readlineSync.questionInt('Enter a number: ');

    if (num <= 0) {
        console.log('Error: Number must be a positive integer.');
        return;
    }

    printSingleTable(num);

    console.log('\n====================================');
    console.log('=== PART B: TABLES FROM 1 TO N ===');
    const limit = readlineSync.questionInt('Enter N: ');

    if (limit <= 0) {
        console.log('Error: N must be a positive integer.');
        return;
    }

    printTablesUpToN(limit);
}

main();
