let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let equals = document.querySelector('.equals');
let del = document.querySelector('.delete');
let reset = document.querySelector('.reset');
let input = document.querySelector('.input-container');

let currentValue = '';

updateInput = (value) => {
  input.innerHTML = value;
}

numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (number.textContent === '.') {
      if (currentValue.includes('.')) {
        return;
      }
    }
    currentValue += number.textContent;
    updateInput(currentValue);
  });
});

del.addEventListener('click', () => {
  currentValue = currentValue.slice(0, -1);
  updateInput(currentValue);
});

reset.addEventListener('click', () => {
  currentValue = '';
  updateInput('');
})

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    if (currentValue || '-') {
      let operatorSymbol;
      if (operator.textContent === 'x') {
        operatorSymbol = '*';
      } else {
        operatorSymbol = operator.textContent;
      }
      currentValue += operatorSymbol;
      updateInput(currentValue);
    }
  });
})

equals.addEventListener('click', () => {
  try {
    if (currentValue) {
      let result = eval(currentValue);
      result = parseFloat(result.toFixed(3));
      updateInput(result);
      currentValue = '';
    }
  } catch (error) {
    alert('Invalid Input, Check Again');
    currentValue = '';
  }
})