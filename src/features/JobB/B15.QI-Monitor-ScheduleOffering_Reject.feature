@jobB
@job15
# @testingnew
Feature: Monitor Reject Schedule Offering


    Scenario: Verify the reject the schedule offering by monitor


        Given Launch the client application
        When Login to client application
        Given Open browser for "monitor7"
        And Launch the application for Agora for "monitor7"
        When Login as "monitor7" application
        And Apply the campaign "campaignTitle3" for "monitor7"


        Given Navigate to the campaign list page
        When Click on the campaign from campaign list "campaignTitle3"
        Given Click on a monitor "test41"
        When Select schedule offer tab
        Given Select new schedule dates option button
        When Click on the calendar

        And Select new offering date
        And Click on the schedule time combobox "1"
        And Select interview time period "20:00〜22:00"
        When Click on schedule offer submit button
        And Click on the accept the confirmation popup


        Given Launch the monitor application as "Normal"
        When Enter the user name "monitor7"
        When Enter the password "monitor7"
        And Click on the login button


        When Click on the applied tab
        And  Click on the project title "campaignTitle3"
        And Select all the dates are NG option
        And Click on cancel confirmation popup
        And Select all the dates are NG option
        When Click on the accept button from the confirmation popup
# And Click on the acknowledgement close button



