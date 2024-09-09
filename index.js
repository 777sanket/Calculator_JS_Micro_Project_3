// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Selecting the input field
  const inputField = document.querySelector('.input-container input');
  
  // Getting all the buttons
  const buttons = document.querySelectorAll('.key');

  // Variable to hold the current input and previous value for the calculation
  let currentInput = '';
  let operator = null;
  let previousInput = '';

  // Function to update the display
  function updateDisplay(value) {
    inputField.value = value;
  }

  // Adding event listener to each button
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;

      if (value === 'RESET') {
        currentInput = '';
        previousInput = '';
        operator = null;
        updateDisplay('');
      } else if (value === 'DEL') {
        currentInput = currentInput.slice(0, -1); // Remove the last character
        updateDisplay(currentInput);
      } else if (value === '=') {
        if (previousInput && operator && currentInput) {
          const result = calculate(Number(previousInput), Number(currentInput), operator);
          updateDisplay(result);
          previousInput = '';
          operator = null;
          currentInput = result.toString();
        }
      } else if (['+', '-', 'x', '/'].includes(value)) {
        if (currentInput) {
          previousInput = currentInput;
          currentInput = '';
          operator = value;
        }
      } else {
        currentInput += value;
        updateDisplay(currentInput);
      }
    });
  });

  // Function to perform calculations based on the operator
  function calculate(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case 'x':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return num2;
    }
  }
});
