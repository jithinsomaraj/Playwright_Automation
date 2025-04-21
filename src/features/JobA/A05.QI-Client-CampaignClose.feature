@jobA
Feature: Client Manual Recruitment Close

    Scenario: Verify the manual recruitment close functionality

        Given Launch the client application
        When Enter the client userid
        When Enter the client password
        And Click on login button
        And Accept already logged message

        And Navigate to the campaign list page
        And  Create a campaign "campaignTitle7"

        Given Navigate to the campaign list page
        When  Click on the campaign from campaign list "campaignTitle7"

        When Click on the recruitment close button
        And Click on the submit button on the popup
        And Navigate to the campaign list page
        Then Verify the status of the campaign "campaignTitle7"

    Scenario: Verify the manual campaign close functionality

        Given Launch the client application
        When Enter the client userid
        When Enter the client password
        And Click on login button

        And Navigate to the campaign list page
        And  Create a campaign "campaignTitle7"
        Given Navigate to the campaign list page
        When  Click on the campaign from campaign list "campaignTitle7"


        Given Click on the campaign closing button
        When Accept the campaign closing confirmation popup
        And Navigate to the campaign list page
        And Navigate to the completed campaign list tab
        Then Verify the campaign in the list "campaignTitle7"


