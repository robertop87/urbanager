const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const {Builder, By, Key, until} = require('selenium-webdriver');

let contentStatusDiv;
When('open main ui', async function () {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:8080/ui');
    await driver.findElement(By.name('statusDiv')).getText()
      .then(function (text) {
        console.log("### Text from statusDiv: ", text);
        contentStatusDiv = text;
      });
    await driver.wait(until.titleIs('React App'), 1000);
  } finally {
    await driver.quit();
  }
});

Then('the label text is {string}', function (string) {
  expect(contentStatusDiv).to.eql(string);  
});
