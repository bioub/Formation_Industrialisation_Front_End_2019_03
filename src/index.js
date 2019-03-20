import { validateEmail } from "./js/validation";

const emailInputElt = document.querySelector("input[type=email]");

emailInputElt.addEventListener("blur", () => {
  const value = emailInputElt.value;

  emailInputElt.classList.remove("is-invalid");

  if (!validateEmail(value)) {
    emailInputElt.classList.add("is-invalid");
  }
});
