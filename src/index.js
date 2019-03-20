import './scss/app.scss';

import { Clock } from './js/horloge';

const emailInputElt = document.querySelector('input[type=email]');

emailInputElt.addEventListener('blur', async () => {
  const value = emailInputElt.value;

  emailInputElt.classList.remove('is-invalid');

  const { validateEmail } = await import('./js/validation');

  if (!validateEmail(value)) {
    emailInputElt.classList.add('is-invalid');
  }
});

const horlogeElt = document.querySelector('.navbar-nav:last-child .nav-link');
const clock = new Clock(horlogeElt);
clock.start();
