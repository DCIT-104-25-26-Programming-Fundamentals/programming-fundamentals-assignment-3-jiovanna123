const readlineSync = require('readline-sync');


function generateFibonacci(n) {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }

    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        const nextTerm = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextTerm);
    }
    return sequence;
}


function isFibonacciNumber(num) {
    if (num < 0) {
        return false;
    }
    
    let a = 0;
    let b = 1;

    while (a < num) {
        const temp = a + b;
        a = b;
        b = temp;
    }

    return a === num;
}


function main() {
    console.log('=== PART A: PRINT FIRST N TERMS ===');
    const count = readlineSync.questionInt('How many terms? ');

    if (count <= 0) {
        console.log('Error: N must be a positive integer.');
    } else {
        const terms = generateFibonacci(count);
        console.log(`Fibonacci sequence: ${terms.join(' ')}`);
    }

    console.log('\n====================================');
    console.log('=== PART B: CHECK FIBONACCI NUMBER ===');
    const checkNum = readlineSync.questionInt('Enter a number to check: ');

    if (isFibonacciNumber(checkNum)) {
        console.log(`${checkNum} is a Fibonacci number.`);
    } else {
        console.log(`${checkNum} is NOT a Fibonacci number.`);
    }
}


main();
