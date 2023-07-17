// IMPORT THE MODULE

import { add, subtract, multiply, divide } from "./modules/calculator.js";
// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let num1
let num2
let operator
let result

function collection(num1, num2, operator) {
    
do {
    num1 = Number(prompt(`Please enter the first number.`))  
    } while (isNaN(num1));

do {
    num2 = Number(prompt(`Please enter the second number.`))
    } while (isNaN(num2));

do {
    operator = prompt(`What operation would you like to perform (add, subtract, multiply, divide)?`)
    } while (operator != 'add' && operator != 'subtract' && operator != 'multiply' && operator != 'divide');

    // alert(`Invalid operation has been selected, reinitialiing calculator.`)    

// CHECK TO SEE WHAT OPERATION THEY'RE USING
var result
switch (operator) {
    case 'add':
        result = add(num1, num2);
        break;
    case 'subtract':
        result = subtract(num1, num2);
            break;
    case 'multiply':
        result = multiply(num1, num2);
        break;
    case 'divide':
        result = divide(num1, num2);
        break;
}
console.log(result)
// console.log(num1, num2, operator)
}
// CALL THE APPROPRIATE FUNCTION
function init() {
    let playAgain = ('y')
    do {
        collection()
        playAgain = prompt('Would you like to crunch some more numbers? (y/n)')
    } while (playAgain === 'y')

    alert('I hope to assist you with future calculations!')
}
        

init()
