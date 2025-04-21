@adminsuite
@adminticketgrant
Feature: Admin Ticket Granting 
 Scenario: Verify the data dispalyed in the Ticket granting screen
        Given Launch the admin application
        Given Login as admin user
        And Click on the Project list in the side menu     
       Then Enter campaign name in the search field as "campaignTitle"
       Then Enter the implementation duration date range
       Then Enter the campaign interview duration
       And Click on the search button
       Then Click on the customer id
       And Verify that the Ticket granting page is displayed 
        Then Verify the customer ID
        Then Verify the customer Details


 Scenario: Verify whether customer status can be changed to disabled

       Then Click on the status edit button
       And Select the inactive status from dropdown
       Then Click on submit button
      And verify the invalid status change 


 Scenario: Verify whether customer status can be changed to enabled

       Then Click on the status edit button
       And Choose the active status from dropdown
       Then Click on submit button
       And verify the valid  status change 
 
 Scenario: Verify Ticket granting and verify

      Then Click on ticket grant button
      Then Enter the ticket count to be granted
       Then Enter the expiry date of the ticket
      Then Enter the add message text
      Then Click on submit button to grant the tickets
      Then Click On agree button in the add ticket confirmation button
      Then Verify that the ticket has been credited


Scenario: Verify Ticket deletion and verify

      Then Click on ticket delete button
      Then Enter the ticket count to be removed
      Then Enter the remove message text
      Then Click on submit button to remove the tickets
      Then Click On agree button in the remove ticket confirmation button
      Then Verify that the ticket has been removed


Scenario: Verify project List and its details
           
       Then Verify that the campaign is listed


Scenario: Verify the ticket deletion history list

       Then Click on ticket consumption history tab
       Then Verify whther the ticket deleted is listed in the ticket consumption history


       Scenario: Verify the inquiry received from customer

      Then Click on Inquiry history tab
       Then Verify whether the inquiry is received and its details of "問い合わせ"



      Scenario: Verify the information received from customer
       Then Click on Inquiry history tab
       Then Verify whether the inquiry is received and its details of "通報"



