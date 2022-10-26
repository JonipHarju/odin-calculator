// calling dom elements
const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
const decimalButton = document.querySelector(".decimal");
const clearButton = document.querySelector(".clearButton");

// function that adds two values together
function add(value1, value2) {
  return value1 + value2;
}

//function that subtracts one value from another
function subtract(value1, value2) {
  return value1 - value2;
}

// function that multiplies two values
function multiply(value1, value2) {
  return value1 * value2;
}

// function that divides value with another
function divide(value1, value2) {
  return value1 / value2;
}
// function that takes three values: operator, value1 and value2.
//checks what operator is and returns the corresponding function call with value1 and value 2 as parameters
function operate(operator, value1, value2) {
  if (operator === "+") {
    return add(value1, value2);
  }
  if (operator === "-") {
    return subtract(value1, value2);
  }
  if (operator === "÷") {
    return divide(value1, value2);
  }
  if (operator === "×") {
    return multiply(value1, value2);
  }
}
