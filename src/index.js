"use strict";
const validateEmail = require("./js/validation").validateEmail;

const emailInputElt = document.querySelector("input[type=email]");

emailInputElt.addEventListener("blur", event => {
  const value = emailInputElt.value;
  console.log(validateEmail(value));
});
