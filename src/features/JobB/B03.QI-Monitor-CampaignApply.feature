@jobB
@jobB03
Feature: Meeting details after accepting schedule offer by monitor


    # Apply Campaign

    # Scenario:  Verify the campaign apply feature
    # Given Launch the monitor application as "Normal"
    # Then Login as Monitor


    # Given Open browser for "monitor7"
    # And Launch the application for Agora for "monitor7"
    # When Login as "monitor7" application


    # Then Verify the top page navigation
    # Given Click on the project title "campaignTitle1"
    # Then Verify the page navigation to project details page
    # When Click on the proceed button
    # When Select the option button to accept the schedule
    # And Click on the answer button
    # When Verify the apply button is enabled
    # When Accept the recruitment conditions1
    # When Accept the recruitment conditions2
    # When Accept the recruitment conditions3
    # Then Verify the apply button is enabled
    # When Click on the apply button
    # And Accept the campaign apply confirmation
    # Then Verify the top page navigation
    # Given Click on the applied tab
    # Then Verify the project parameters "campaignTitle1"

    Scenario:campaign apply for monitor 7

        Given Open browser for "monitor7"
        And Launch the application for Agora for "monitor7"
        When Login as "monitor7" application
        And Apply the campaign "campaignTitle1" for "monitor7"


    Scenario:campaign apply for monitor 8

        Given Open browser for "monitor8"
        And Launch the application for Agora for "monitor8"
        When Login as "monitor8" application
        And Apply the campaign "campaignTitle1" for "monitor8"


    Scenario:campaign apply for monitor 9

        Given Open browser for "monitor9"
        And Launch the application for Agora for "monitor9"
        When Login as "monitor9" application
        And Apply the campaign "campaignTitle1" for "monitor9"



    Scenario:campaign apply for monitor 10

        Given Open browser for "monitor10"
        And Launch the application for Agora for "monitor10"
        When Login as "monitor10" application
        And Apply the campaign "campaignTitle1" for "monitor10"








