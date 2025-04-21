@jobA @ClientLogin11
@jobA2131313
Feature: Client Campaign List Verification

    Scenario: Verify the campaign list
        Given Launch the client application
        When Login to client application
        Then Verify the client top page navigation
        And Navigate to the campaign list page
        Then  Create a campaign "campaignTitle1"
        And  Navigate to the campaign list page
        Then Verify campaign in the campaign list page "campaignTitle1"
        And Verify campaign implementation date "implementationStartDate" and "implementationEndDate"
        And Verify campaign release date "releaseDate"
        And Verify campaign monitor count "monitorCount"