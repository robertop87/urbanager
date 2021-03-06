Feature: Check server status
 In order to know the server status
 As an API consumer
 I want to check the Web Server Status

  Scenario: Server is down
   When make a get request to /ping-fake resource
   Then the response is not OK status

  Scenario: Server is up
   When make a get request to /ping
   Then the response is OK status

  Scenario: Server send pong response
   When make a get request to /ping
   Then the response is OK status
      And and response has a JSON with pong message
