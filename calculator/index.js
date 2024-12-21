const result = document.querySelector(".result");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const reset = document.querySelector(".reset");

class Calculator {
  #initialValue;
  constructor(initialValue = 0) {
    this.#initialValue = initialValue;
  }

  add(value) {
    this.#initialValue += value;
    return this.#initialValue;
  }

  subtract(value) {
    this.#initialValue -= value;
    return this.#initialValue;
  }

  multiply(value) {
    this.#initialValue *= value;
    return this.#initialValue;
  }

  divide(value) {
    if (value === 0) {
      alert("На ноль делить нельзя");
      return this.#initialValue;
    }
    this.#initialValue /= value;
    return this.#initialValue;
  }

  reset() {
    this.#initialValue = 0;
    return this.#initialValue;
  }
}

let calculator = new Calculator();

function updateResult(value) {
  result.textContent = value;
}

plus.addEventListener("click", function () {
  const value = parseFloat(prompt("Введите число"));
  if (!isNaN(value)) {
    updateResult(calculator.add(value));
  }
});

minus.addEventListener("click", function () {
  const value = parseFloat(prompt("Введите число"));
  if (!isNaN(value)) {
    updateResult(calculator.subtract(value));
  }
});

multiply.addEventListener("click", function () {
  const value = parseFloat(prompt("Введите число"));
  if (!isNaN(value)) {
    updateResult(calculator.multiply(value));
  }
});

divide.addEventListener("click", function () {
  const value = parseFloat(prompt("Введите число"));
  if (!isNaN(value)) {
    updateResult(calculator.divide(value));
  }
});

reset.addEventListener("click", function () {
  updateResult(calculator.reset());
});
