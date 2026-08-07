const readlineSync = require('readline-sync');


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return null;
    }
    return a / b;
}

function modulus(a, b) {
    if (b === 0) {
        return null;
    }
    return a % b;
}

function power(a, b) {
    return a ** b;
}


function showMenu() {
    console.log('\n============================');
    console.log('     SIMPLE CALCULATOR');
    console.log('============================');
    console.log('1. Addition');
    console.log('2. Subtraction');
    console.log('3. Multiplication');
    console.log('4. Division');
    console.log('5. Modulus');
    console.log('6. Exponentiation');
    console.log('7. Quit');
}


function main() {
    let running = true;

    while (running) {
        showMenu();
        const choice = readlineSync.questionInt('Select an operation (1-7): ');

        if (choice === 7) {
            console.log('Goodbye!');
            running = false;
            continue;
        }

        if (choice < 1 || choice > 7) {
            console.log('Invalid choice. Please enter a number between 1 and 7.');
            continue;
        }

        const num1 = readlineSync.questionFloat('Enter first number : ');
        const num2 = readlineSync.questionFloat('Enter second number: ');

        let result = null;
        let symbol = '';

        switch (choice) {
            case 1:
                result = add(num1, num2);
                symbol = '+';
                break;
            case 2:
                result = subtract(num1, num2);
                symbol = '-';
                break;
            case 3:
                result = multiply(num1, num2);
                symbol = '*';
                break;
            case 4:
                result = divide(num1, num2);
                symbol = '/';
                break;
            case 5:
                result = modulus(num1, num2);
                symbol = '%';
                break;
            case 6:
                result = power(num1, num2);
                symbol = '**';
                break;
        }

        if (result === null) {
            console.log('Error: Cannot divide or perform modulus by zero.');
        } else {
            console.log(`Result: ${num1} ${symbol} ${num2} = ${result.toFixed(2)}`);
        }
    }
}


main();
