const readlineSync = require('readline-sync');


function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function main() {
    const input = readlineSync.questionInt('Enter a number: ');
    
    if (isPrime(input)) {
        console.log(`${input} is a prime number.`);
    } else {
        console.log(`${input} is NOT a prime number.`);
    }
}


main();
