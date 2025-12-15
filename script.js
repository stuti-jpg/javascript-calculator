const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

let currentInput = "";
let expression = "";
let firstOperand = null;
let operator = null;

// Number buttons
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentInput += button.dataset.number;
    display.innerText = expression + currentInput;
  });
});

// Operator buttons
operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (currentInput === "") return;

    if (firstOperand === null) {
      firstOperand = parseFloat(currentInput);
    }

    operator = button.dataset.operator;
    expression = firstOperand + " " + operator + " ";
    display.innerText = expression;
    currentInput = "";
  });
});

// Equals button
equalsButton.addEventListener("click", () => {
  if (currentInput === "" || operator === null) return;

  const secondOperand = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "/":
      result = secondOperand === 0 ? "Error" : firstOperand / secondOperand;
      break;
  }

  display.innerText = expression + secondOperand + " = " + result;

  // Reset state for next calculation
  currentInput = "";
  expression = "";
  firstOperand = null;
  operator = null;
});

// Clear
clearButton.addEventListener("click", () => {
  currentInput = "";
  expression = "";
  firstOperand = null;
  operator = null;
  display.innerText = "0";
});