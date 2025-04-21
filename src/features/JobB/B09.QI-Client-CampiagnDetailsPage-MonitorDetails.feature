@jobB

# @testingnew
Feature: Client_MonitorDetails

    Scenario: Verify monitor details in Campaign details page
        Given Launch the client application
        When Enter the client userid
        When Enter the client password
        And Click on login button
        And Accept already logged message

        Given Navigate to the campaign list page
        When  Click on the campaign from campaign list "campaignTitle1"

        Then Verify the "gender" for "test41"
        Then Verify the "Age" for "test41"
        Then Verify the "Place of residence" for "test41"
        Then Verify the "Marital status" for "test41"
        Then Verify the "Children status" for "test41"
        Then Verify the "Profession" for "test41"
        Then Verify the "Personal annual income" for "test41"
        Then Verify the "Household income" for "test41"





