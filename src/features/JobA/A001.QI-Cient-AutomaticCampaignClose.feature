@jobA @close
Feature: Client Automatic Campaign Close

    Scenario: Closing all the active campaign
        Given Launch the client application
        When Login to client application
        Then Verify the client top page navigation
        And Navigate to the campaign list page
        And Close the campaign from list page


