// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.


const calc=(num1,num2,operator)=>{

    switch(operator){
        case "+": return num1 + num2
        case "-": return num1 - num2
        case "*": return num1 * num2
        case "/": return num1 / num2
    }
}

const num1= 2;
const num2= 5;
const operator= '-';
const output = calc(num1,num2,operator)
console.log(output);