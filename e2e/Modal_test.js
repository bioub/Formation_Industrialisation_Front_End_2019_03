Feature('Modal');

Scenario('Modal show be visible on click', (I) => {
  I.amOnPage('/');
  I.click('.btn-lg');
  I.wait(1);
  I.seeElement('.modal');
});
