// Module IIFE
// Immediately Invoked Function Expression
(function() {
  const emailInputElt = document.querySelector("input[type=email]");

  console.log(validateEmail);

  emailInputElt.addEventListener("blur", () => {
    const value = emailInputElt.value;

    console.log(validateEmail(value));
  });
})();
