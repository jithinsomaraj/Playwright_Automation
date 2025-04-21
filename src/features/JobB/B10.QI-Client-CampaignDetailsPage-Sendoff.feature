@jobB

@RegressionSuite1 @Flow1 @DateCheck1
Feature: Sendoff By Client

    Scenario: Verify monitor sendoff by client
        Given Launch the client application
        When Enter the client userid
        When Enter the client password
        And Click on login button
        And Accept already logged message


        Given Navigate to the campaign list page
        When  Click on the campaign from campaign list "campaignTitle1"


        Given Select monitor "test41" from the monitor list
        Then Verify the sendoff button is present
        When Click on the sendoff button
        Then Verify the sendoff popup nickname "test41"
        And Click on the sendoff popup cancellation button


        Then Verify the sendoff button is present
        When Click on the sendoff button
        When Click on the sendoff submit button
        Then Verify the monitor "test41" status is "見送り"


        When Select monitor "test41" from the monitor list
        Then Verify the "schedule offering" button is disabled
        Then Verify the "sendoff" button is disabled

