describe('Tests de Nightwatch via duckduckgo.com', function() {

    before(client => {
		client
		.maximizeWindow()
		.navigateTo('https://www.duckduckgo.com/')
	});
  
    test('recherche de "voyage thailand" sur le site duckduckgo', client => {
      client
        .waitForElementVisible('body')
        .assert.titleContains('DuckDuckGo')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', 'voyage thailand')
        .assert.visible('input[type=submit]')
        .click('input[type=submit]')
        .waitForElementVisible('.results--main')
        .assert.textContains('#r1-0', 'voyage')
    });
	test('check si le premier lien trouvé est lastminute', client => {
		client
		.click('#r1-0 .eVNpHGjtxRBq_gLOfGDr')
		.assert.urlEquals('https://www.fr.lastminute.com/sejour/voyage-thailande.html')
        .waitForElementVisible('body')
	})
  
    after(client => client.end());
  });
  