@jobB
@jobB7
Feature: Add Or Edit Memo

    Scenario: Verification of the Add or Edit Memo
        Given Launch the client application
        When Enter the client userid
        When Enter the client password
        And Click on login button
        And Accept already logged message

        Given Navigate to the campaign list page
        When  Click on the campaign from campaign list "campaignTitle1"

        When Click on memo icon for the monitor having nick name "test41"
        And Enter the memo "Sample Memo"
        And Click on the memo cancel button
        Then Verify the memo "Sample Memo" against the monitor "test41" after cancellation

        When Click on memo icon for the monitor having nick name "test41"
        And Enter the memo "Sample Memo"
        And Click on the memo submit button
        Then Verify the memo "Sample Memo" against the monitor "test41" after submission

