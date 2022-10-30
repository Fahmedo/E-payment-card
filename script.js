"use strict";
// ==================================================

// Input elements

// ==================================================
const inputName = document.getElementById("input-name");
const inputNumber = document.getElementById("input-number");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");
const inputCvc = document.getElementById("cvc");
const nameError = document.querySelector(".errorMsg-name");
const numberError = document.querySelector(".errorMsg-number");
const othersError = document.querySelector(".errorMsg-others");

// ==================================================

// Card elements

// ==================================================

let cardName = document.getElementById("card-name");
let cardNumber = document.getElementById("card-number");
let cardMonth = document.getElementById("card-month");
let cardYear = document.getElementById("card-year");
let cardCvc = document.getElementById("card-cvc");

// ==================================================

// functions to display input

// ==================================================
const nameEntry = function () {
  cardName.textContent = inputName.value;
};
const numberEntry = function () {
  cardNumber.textContent = inputNumber.value;
};

const monthEntry = function () {
  cardMonth.textContent = inputMonth.value;
};
const yearEntry = function () {
  cardYear.textContent = inputYear.value;
};
const cvcEntry = function () {
  cardCvc.textContent = inputCvc.value;
};

// ==================================================

// Adding event listener on keyup to display to card

// ==================================================
inputName.addEventListener("keyup", nameEntry);
inputNumber.addEventListener("keyup", numberEntry);
inputMonth.addEventListener("keyup", monthEntry);
inputYear.addEventListener("keyup", yearEntry);
inputCvc.addEventListener("keyup", cvcEntry);

function submit() {
  if (!inputName.value) {
    nameError.textContent = "sorry you need to fill this";
  } else {
    nameError.textContent = "";
  }
  if (!inputNumber.value) {
    numberError.textContent = "sorry you need to fill this";
  } else {
    numberError.textContent = "";
  }
  if (!inputCvc.value || !inputMonth.value || !inputYear.value) {
    othersError.textContent = "sorry you need to fill this";
  } else {
    othersError.textContent = "";
  }
}
