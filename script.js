/**

This JavaScript code is a simple calculator that performs basic arithmetic operations such as addition, subtraction, multiplication, and division. It also includes the ability to clear the screen, input decimals, and calculate percentages.
*/


// Select all elements with the class "number"
const numbers = document.querySelectorAll(".number");

// Set initial values for variables
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

// Select the calculator screen and update its value
const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
calculatorScreen.value = number;
};

// Input a number and update the calculator screen
const inputNumber = (number) => {
if (currentNumber === "0") {
currentNumber = number;
} else {
currentNumber += number;
}
};

// Loop through each number element and add a click event listener to it
numbers.forEach((number) => {
number.addEventListener("click", (event) => {
inputNumber(event.target.value);
updateScreen(currentNumber);
});
});

// Select all elements with the class "operator"
const operators = document.querySelectorAll(".operator");

// Input an operator and update the current and previous numbers
const inputOperator = (operator) => {
if (calculationOperator === "") {
prevNumber = currentNumber;
}
calculationOperator = operator;
currentNumber = "0";
};

// Loop through each operator element and add a click event listener to it
operators.forEach((operator) => {
operator.addEventListener("click", (event) => {
inputOperator(event.target.value);
});
});

// Select the equal sign element and perform the calculation when clicked
const equalSign = document.querySelector(".equal-sign");
const calculate = () => {
let result = "";
switch (calculationOperator) {
case "+":
result = parseFloat(prevNumber) + parseFloat(currentNumber);
break;
case "-":
result = parseFloat(prevNumber) - parseFloat(currentNumber);
break;
case "*":
result = parseFloat(prevNumber) * parseFloat(currentNumber);
break;
case "/":
result = parseFloat(prevNumber) / parseFloat(currentNumber);
break;
default:
break;
}
currentNumber = result;
calculationOperator = "";
};

// Add a click event listener to the equal sign element
equalSign.addEventListener("click", () => {
calculate();
updateScreen(currentNumber);
});

// Select the clear button and reset all values
const clearBtn = document.querySelector(".all-clear");
const clearAll = () => {
prevNumber = "";
calculationOperator = "";
currentNumber = "0";
};

// Add a click event listener to the clear button
clearBtn.addEventListener("click", () => {
clearAll();
updateScreen(currentNumber);
});

// Select the decimal element and input a decimal point
const decimal = document.querySelector(".decimal");
const inputDecimal = (dot) => {
if (currentNumber.includes(".")) {
return;
}
currentNumber += dot;
};

// Add a click event listener to the decimal element
decimal.addEventListener("click", (event) => {
inputDecimal(event.target.value);
updateScreen(currentNumber);
});

// Select the percentage element and calculate the percentage of the current number
const percentage = document.querySelector(".percentage");
const hasilPersen = () => {
currentNumber = currentNumber / 100;
};

// Add a click event listener to the percentage element
percentage.addEventListener("click", () => {
hasilPersen();
updateScreen(currentNumber);
});