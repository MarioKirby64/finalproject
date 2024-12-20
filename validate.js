"use strict";

let subButton = document.getElementById("subButton");

//Validation for Name, Card type, Card Number, and month/year
subButton.addEventListener("click", validateName);

subButton.addEventListener("click", validateCard);

subButton.addEventListener("click", validateNumber);

subButton.addEventListener("click", validateMonth);

subButton.addEventListener("click", validateYear);

subButton.addEventListener("click", validateCVC); 

//Check if credit card has been selected
function validateCard() {
    let card = document.forms.payment.elements.credit[0];
    if (card.validity.valueMissing) {
       card.setCustomValidity("Select your credit card");
    } else {
       card.setCustomValidity("");
    }
 }
 
 //Check if card number is valid
 function validateNumber () {
    let cNum = document.getElementById("cardNumber");
    if (cNum.validity.valueMissing) {
       cNum.setCustomValidity("Enter your credit card number");
    } else if (cNum.validity.patternMismatch) {
       cNum.setCustomValidity("Enter a valid card number");
    } else if (luhn(cNum.value) == false) {
       cNum.setCustomValidity("Enter a legitimate card number");
    } else {
       cNum.setCustomValidity("");
    }
 }
 
 //Check that a month is selected for the expiration date
 function validateMonth() {
    let month = document.getElementById("expMonth");
    if (month.selectedIndex == 0) {
       month.setCustomValidity("Select the expiration month");
    } else {
       month.setCustomValidity("");
    }
 
 }
 
 //Check that a year is selected for the expiration date
 function validateYear() {
    let year = document.getElementById("expYear");
    if (year.selectedIndex == 0) {
       year.setCustomValidity("Select the expiration year");
    } else {
       year.setCustomValidity("");
    }
 }
 
 //
 function validateCVC () {
    let card = document.querySelector('input[name="credit"]:checked').value;
    let cvc = document.getElementById("cvc");
 
    //Validate the CVC value
    if (cvc.validity.valueMissing) {
       cvc.setCustomValidity("Enter your CVC number");
    } else if ((card == "amex") && !(/^\d{4}$/.test(cvc.value))) {
       cvc.setCustomValidity("Enter a 4-digit number");
    } else if ((card !== "amex") && !(/^\d{3}$/.test(cvc.value))) {
       cvc.setCustomValidity("Enter a 3 digit number");
    } else {
       cvc.setCustomValidity("");
    }
 }
 
 function validateName() {
    let cardName = document.getElementById("cardName");
    if (cardName.validity.valueMissing){
       cardName.setCustomValidity("Enter you name as it appears on the card");
    } else {
       cardName.setCustomValidity("");
    }
 
 }