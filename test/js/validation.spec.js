import { validateEmail } from '../../src/js/validation';
import { expect } from 'chai';

describe('validateEmail function', () => {
  it('should return false if no @ is present', () => {
    expect(validateEmail('kjfdshkjhfdskg')).to.be.false;
  });

  it('should return true if an @ is present', () => {
    expect(validateEmail('kjfdshkj@hfdskg')).to.be.true;
  });
});
