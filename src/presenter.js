import sumar from "./sumador";
import fizzbuzz from "./FIZZBUZZ.JS";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const fizzBuzzForm = document.querySelector("#fizzbuzz-form");
const fizzBuzzInput = document.querySelector("#num_fizzbuzz");
const fizzBuzzResult = document.querySelector("#fizzbuzz");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

fizzBuzzForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const number = Number.parseInt(fizzBuzzInput.value, 10);

  fizzBuzzResult.textContent = fizzbuzz(number);
});
