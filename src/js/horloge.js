import { format } from 'date-fns';
// import css from '../scss/_horloge.module.scss';

class Clock {
  /** @param {HTMLElement} parentElt*/
  constructor(parentElt) {
    this.parentElt = parentElt;
  }

  update() {
    const now = new Date();
    this.parentElt.innerHTML = format(now, 'HH:mm:ss');
  }

  start() {
    this.update();
    // this.parentElt.classList.add(css.horloge);
    setInterval(this.update.bind(this), 1000);
  }
}

export { Clock };
