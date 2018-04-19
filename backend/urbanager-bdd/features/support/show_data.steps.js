const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const {Builder, By, Key, until} = require('selenium-webdriver');

let h1ResultText;
let driverChrome;

Given('Main page opened', async function () {
  driverChrome = await new Builder().forBrowser('chrome').build();
  try {
    await driverChrome.get('http://localhost:8080/ui');
    await driverChrome.findElement(By.name('h1Result')).getText()
      .then(function (text) {
        h1ResultText = text;
      });
  } finally { }
});

When('I insert {string} in the input field', async function (string) {
  try {
    await driverChrome.findElement(By.name('nameInput')).sendKeys(string);
  } finally { }
});

When('Click on Submit Button', async function () {
  try {
    await driverChrome.findElement(By.name('submitButton')).click();
  } finally { }
});

Then('Message page shows {string}', async function (string) {
  try {
    await driverChrome.findElement(By.name('h1Result')).getText()
    .then(function (text) {
      h1ResultText = text;
  });
  expect(h1ResultText).to.eql(string);
  } finally {
    driverChrome.quit();
  }
});


