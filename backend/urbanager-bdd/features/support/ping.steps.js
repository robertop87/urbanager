const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const request = require('request')
const HttpStatus = require('http-status')

let httpResponse = 0;
When('make a get request to /ping-fake resource', function () {
  let me = this;
  request
    .get("http://localhost:8080/ping-fake")
    .on('error', function(error) {
      console.log("There was an error");
    });
});

Then('the response is not OK status', function () {
  expect(httpResponse).to.not.eql(HttpStatus.OK);
});
