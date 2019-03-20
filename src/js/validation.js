import 'core-js/features/string/includes';

const charEmail = '@';

export const toto = 'TOTO';

/**
 * Valide un email
 * @param {string} email L'email à valider
 * @returns {boolean} true si le mail est valide
 */
function validateEmail(email) {
  return email.includes(charEmail);
}

export { validateEmail };
