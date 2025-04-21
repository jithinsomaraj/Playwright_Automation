@adminSales

Feature: Admin Sales
 Scenario: Verify the page navigation
        Given Launch the admin application
        Given Login as admin user
        And Click on the sales management link in the side menu and verify the page navigation





  Scenario: Search and verify that the result is dispalyed in deposit tab and verify result in csv
        # Given Launch the admin application
        # Given Login as admin user   
        And Click on the Project list in the side menu
        And Click on the sales management link in the side menu and verify the page navigation
        And Click on the "deposit" tab
        And Enter the Deposit date in the search field 
        And Enter the Purchase date in the search field
        And Select payment method as "Card"
        And Click on data search button          
        And Verify that deposit result is displayed after search
        Then Click on csv download button 
        Then Verify the number of data in csv with the result for "deposit"


 

 Scenario: Search and verify that the result is dispalyed in deposit tab and verify result in csv
        # Given Launch the admin application
        # Given Login as admin user   
        And Click on the Project list in the side menu
        And Click on the sales management link in the side menu and verify the page navigation
        And Click on the "sales" tab
        And Enter the Consumption date in the search field
        And Click on data search button          
        And Verify that sales result is displayed after search
        Then Click on csv download button
      #   Then Verify the number of data in csv with the result for "sales"
        Then Verify the number of data in csv with the result for ticket
      


  Scenario: Download and verify result in csv
        # Given Launch the admin application
        # Given Login as admin user   
        And Click on the Project list in the side menu
        And Click on the sales management link in the side menu and verify the page navigation
        And Click on the "ticket" tab
        Then Click on csv download button
        Then Verify the number of data in csv with the result for ticket








      


  


