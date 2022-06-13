describe('Ecosia.org Demo', function() {

    before(browser => browser.navigateTo('https://www.ecosia.org/'));
  
    it('Demo test ecosia.org', browser => {
      browser
        .waitForElementVisible('body')
        .assert.titleContains('Ecosia')
        .assert.visible('input[type=search]')
        .setValue('input[type=search]', 'nightwatch')
        .assert.visible('button[type=submit]')
        .click('button[type=submit]')
        .waitForElementVisible('.heading--h2')
        .assert.textContains('.heading--h2', 'Nightwatch');
    });
  
    after(browser => browser.end());
  });
  