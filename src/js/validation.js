(function() {
  const charEmail = "@";

  /**
   * Valide un email
   * @param {string} email L'email à valider
   * @returns {boolean} true si le mail est valide
   */
  function validateEmail(email) {
    return email.indexOf(charEmail) !== -1;
  }

  window.validateEmail = validateEmail;
})();
