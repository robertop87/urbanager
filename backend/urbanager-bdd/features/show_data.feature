Feature: Show data inserted in my Name input
 As a PO
 I want my system replicate the data inserted in a input

 Scenario: When no data inserted, there is a initial value
  Given Main page opened
   Then Message page shows "Result here"
  
 
 Scenario: When data is inserted, the data is shown
  Given Main page opened
   When I insert "Testing data" in the input field
    And Click on Submit Button
   Then Message page shows "Testing data"
