// calling dom elements
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
const decimalButton = document.querySelector(".decimal");
const clearButton = document.querySelector(".clearButton");
const buttons = document.querySelectorAll("button");
const equalsButton = document.querySelector("#equals");
const resultlDisplay = document.querySelector("#resultDisplay");
const previousNumberDisplay = document.querySelector("#previousNumberDisplay");

// disables the operator buttons so user cant enter operator before they enter a number
document.getElementById("multiply").disabled = true;
document.getElementById("add").disabled = true;
document.getElementById("divide").disabled = true;
document.getElementById("subtract").disabled = true;
document.getElementById("equals").disabled = true;

// global variables
let displayValue = "";
let number1;
let number2;
let operator = "";
let result = "";

// event listener to add numbers into the display and after inputting the number to the display we enable the operator buttons
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    displayValue += numberButton.textContent;
    document.getElementById("display").textContent = displayValue;
    document.getElementById("multiply").disabled = false;
    document.getElementById("add").disabled = false;
    document.getElementById("divide").disabled = false;
    document.getElementById("subtract").disabled = false;
    if (
      (number1 >= 0 && operator === "multiply") ||
      operator === "divide" ||
      operator === "add" ||
      operator === "subtract"
    ) {
      document.getElementById("equals").disabled = false;
    }
  });
});

// event listener for the operator buttons
operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    number1 = displayValue;
    displayValue = "";
    displayValue += operatorButton.textContent;
    operator += operatorButton.id;
    document.getElementById("previousNumberDisplay").textContent += number1;
    document.getElementById("display").textContent = displayValue;
    document.getElementById("multiply").disabled = true;
    document.getElementById("add").disabled = true;
    document.getElementById("divide").disabled = true;
    document.getElementById("subtract").disabled = true;
  });
});

// event listener for the clear button which calls the clear function
clearButton.addEventListener("click", () => {
  clear();
});

// event listener for the = button which calls the equals function
equalsButton.addEventListener("click", () => {
  equals();
});

// function to calculate the result. first removes non numbers from number2 then makes number1 and 2 a number then
function equals() {
  number2 = displayValue.replace(/\D+/g, "");
  number1 = Number(number1);
  number2 = Number(number2);
  let result = operate(operator, number1, number2);
  console.log(result);
  populateResultDisplay(result);
  clear();
}
// function to reset the variables back to default values and to disable operator buttons
function clear() {
  display.textContent = "";
  displayValue = "";
  operator = "";
  number1 = undefined;
  document.getElementById("previousNumberDisplay").textContent = "";

  document.getElementById("multiply").disabled = true;
  document.getElementById("add").disabled = true;
  document.getElementById("divide").disabled = true;
  document.getElementById("subtract").disabled = true;
  document.getElementById("equals").disabled = true;
}

function populateResultDisplay(result) {
  document.getElementById("resultDisplay").textContent = result;
}

// a function that populates the display when you click the number buttons.
// function that adds two values together
function add(value1, value2) {
  return (displayValue = value1 + value2);
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
  if (operator === "add") {
    return add(value1, value2);
  }
  if (operator === "subtract") {
    return subtract(value1, value2);
  }
  if (operator === "divide") {
    return divide(value1, value2);
  }
  if (operator === "multiply") {
    return multiply(value1, value2);
  }
}
