@jobB
# @jobB2
@jobB05
Feature: Monitor sendoff from participation tab

    Scenario: Campaign sendoff from participation tab for first monitor
        Given Launch the client application
        When Login to client application



        Given Open browser for "monitor8"
        And Launch the application for Agora for "monitor8"
        When Login as "monitor8" application
        And Apply the campaign "campaignTitle2" for "monitor8"

        Given Open browser for "monitor9"
        And Launch the application for Agora for "monitor9"
        When Login as "monitor9" application
        And Apply the campaign "campaignTitle2" for "monitor9"


        Given Navigate to the campaign list page
        When Click on the campaign from campaign list "campaignTitle2"
        Given Click on a monitor "test_42"
        When Send schedule offer for "20:00〜22:00"

        Given Launch the monitor application as "Normal"
        When Enter the user name "monitor8"
        When Enter the password "monitor8"
        And Click on the login button
        When Click on the applied tab
        And  Click on the project title "campaignTitle2"

        When Select the schedule time "20:00 〜 22:00"
        When Submit the selected date
        When Click on the accept button from the confirmation popup
        And Click on the acknowledgement close button

        When Click on the participation tab
        And Click on the project title "campaignTitle2"
        And Click on the sendoff button from participation tab
        And Click on the accept the confirmation popup
        And Click on the acknowledgement close button

        When Click on the completion tab
        Then Verify the campaign "campaignTitle2" is present


    # -------------------------------------------------------------


    Scenario: Campaign sendoff from participation tab for second monitor

        Given Launch the client application
        When Enter the client userid
        When Enter the client password
        And Click on login button
        And Accept already logged message
        Then Verify the client top page navigation

        Given Navigate to the campaign list page
        When  Click on the campaign from campaign list "campaignTitle2"

        When Click on a monitor "test_42"
        And Select schedule offer tab
        Then Verify the cancelled details present in schedule adjusting tab

        # When Select schedule offer tab
        And Click on open offer to other monitors
        Then Verify successful message for open offer to other monitors
        Given Navigate to the campaign list page
        When  Click on the campaign from campaign list "campaignTitle2"
        Given Click on a monitor "test_43"
        When Send schedule offer for "20:00〜22:00"

        Given Launch the monitor application as "Normal"
        When Enter the user name "monitor9"
        When Enter the password "monitor9"
        And Click on the login button
        When Click on the applied tab
        And  Click on the project title "campaignTitle2"
        When Select the schedule time "20:00 〜 22:00"
        When Submit the selected date
        When Click on the accept button from the confirmation popup
        And Click on the acknowledgement close button
        When Click on the participation tab
        And Click on the project title "campaignTitle2"
        And Click on the sendoff button from participation tab
        And Click on the accept the confirmation popup
        And Click on the acknowledgement close button



        Given Navigate to the campaign list page
        When  Click on the campaign from campaign list "campaignTitle2"
        When Click on a monitor "test_43"
        And Select schedule offer tab
        And Click on the close the offer button
        And Verify successful message for close the offer

