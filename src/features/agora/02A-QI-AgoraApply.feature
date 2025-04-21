@agorajob2a
@job2A
Feature: Apply Acceept and Schedule


    Scenario: Apply campaign from monitor

        Given Launch the client application
        Given Open browser for "monitor7"
        And Launch the application for Agora for "monitor7"
        When Login as "monitor7" application
        And Apply the campaign "campaignTitle" for "monitor7"
        And Login to client application
        Then Verify the client top page navigation
        And Navigate to the campaign list page
        When Click on the campaign from campaign list "campaignTitle"
        And Send a schedule to monitor
        And Accept the schedule from "monitor7"
        Given Navigate to the campaign list page
        When  Click on the campaign from campaign list "campaignTitle"
        And Click on a monitor "test41"
        When Select schedule offer tab
        And Save guest user information

