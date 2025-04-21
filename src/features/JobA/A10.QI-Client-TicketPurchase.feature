@jobA000
Feature: Client Ticket Purchase
    Scenario: Verify ticket purchase functionality
        Given Launch the client application
        When Login to client application
        Then Verify the client top page navigation
        Given Navigate to the ticket purchase page
        And Click on buy ticket  button
        And Select count for Set of 2 tickets
        And Select count for Set of 20 tickets
        And Verify the subtotal dispayed in the ticket purchase page
        And Click on accept the terms and conditions button
        And Click on accept the age condition button
        And Click on accept the disclosure condition button
        And Click on Proceed to payment button