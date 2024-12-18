const readline = require('readline');

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
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// Example usage:
console.log(add(5, 3));        // Output: 8
console.log(subtract(5, 3));   // Output: 2
console.log(multiply(5, 3));   // Output: 15
console.log(divide(5, 3));     // Output: 1.6666666666666667

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
        rl.question('Enter operation (add, subtract, multiply, divide): ', (operation) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            let result;

            switch (operation) {
                case 'add':
                    result = add(a, b);
                    break;
                case 'subtract':
                    result = subtract(a, b);
                    break;
                case 'multiply':
                    result = multiply(a, b);
                    break;
                case 'divide':
                    try {
                        result = divide(a, b);
                    } catch (error) {
                        console.error(error.message);
                        rl.close();
                        return;
                    }
                    break;
                default:
                    console.log('Invalid operation');
                    rl.close();
                    return;
            }

            console.log(`Result: ${result}`);
            rl.close();
        });
    });
});
