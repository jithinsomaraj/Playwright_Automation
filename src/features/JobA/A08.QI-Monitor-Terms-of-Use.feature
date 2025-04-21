@jobA111
@monitorlogin
Feature: Monitor Terms of Use
    Scenario: Verify the terms of use page
        Given Launch the monitor application as "Normal"
        When Enter the user name "monitor1"
        When Enter the password "monitor1"
        And Click on the login button
        And Click the terms of service button
        And Verify the monitor terms of service page

        And Click the Information security policy button
        And Verify the information security policy page

        And Click the privacy policy button
        And Verify the Privacy policy page