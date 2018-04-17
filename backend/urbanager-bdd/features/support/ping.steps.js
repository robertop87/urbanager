const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const request = require('request')
const rp = require('request-promise')
const HttpStatus = require('http-status')

let httpResponseStatusCode = 0;
When('make a get request to /ping-fake resource', function () {
  let me = this;
  request.get("http://localhost:8080/ping-fake")
    .on('error', function(error) {
      console.log("There was an error");
      httpResponseStatusCode = 0;
    })
    .on('response', function(response) {
      httpResponseStatusCode = response.statusCode;
    });
});

Then('the response is not OK status', function () {
  expect(httpResponseStatusCode).to.not.eql(HttpStatus.OK);
});

When('make a get request to /ping', async function () {
  await rp.get("http://localhost:8080/api/ping")
    .on('response', function(response) {
      if (response && response.statusCode) {
        httpResponseStatusCode = response.statusCode;
      }
    })
    .on('error', function(error) {
      if (error)
        console.log("There was an error in connecting with the server")
    });
});

Then('the response is OK status', function () {
  expect(httpResponseStatusCode).to.eql(HttpStatus.OK);
});
