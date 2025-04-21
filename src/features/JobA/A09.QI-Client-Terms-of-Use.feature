@jobA111
Feature: Client Terms of Use

    Scenario: Verify the terms of use page
        Given Launch the client application
        When Login to client application
        Then Verify the client top page navigation
        And Click on the terms of service button
        And Verify the terms of service page

        And Click on the privacy policy button
        And Click on the privacy policy link
        And Verify the privacy policy page


        And Click on the Information security policy button
        And Verify the Information security policy page


        And Click on the security check sheet button
        And Verify the security check sheet page

