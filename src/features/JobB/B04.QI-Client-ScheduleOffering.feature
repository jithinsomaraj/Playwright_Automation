@jobB

Feature: Client Bulk Schedule Offering

    @jobBulk
    Scenario: Verify the bulk schedule offering cancel the submission
        Given Launch the client application
        When Login to client application



        Given Navigate to the campaign list page
        When  Click on the campaign from campaign list "campaignTitle1"
        And Select monitor "test_43" from the monitor list
        And Select monitor "Test-44" from the monitor list


        When Click on the bulk schedule offering button
        Then Verify the selected monitor count "2"
        Then Verify the selected monitor nickname "test_43"
        Then Verify the selected monitor nickname "Test-44"
        When Select a schedule date with time "scheduleTime2"
        When Click on the schedule popup cancel button
        Then Verify schedule offering button is Enabled

        When Click on the bulk schedule offering button
        When Select a schedule date with time "scheduleTime2"
        And Click on the schedule offering popup submit button
        Then Verify the schedule offering success message
        And Select monitor "test_43" from the monitor list
        And Select monitor "Test-44" from the monitor list
        Then Verify schedule offering button is Disabled


        Given Click on a monitor "Test-44"
        When Select schedule offer tab
        When Select one offering date with time "scheduleTime2"
        When Click on schedule offer submit button
        Then Verify the schedule offering success message
        And Click on the accept the confirmation popup
        When Close the individual schedule offer popover


        Given Navigate to the campaign list page
        When  Click on the campaign from campaign list "campaignTitle1"

        Given Click on a monitor "Test-44"
        When Select schedule offer tab
        Given Select new schedule dates option button


        When Click on the calendar
        And Select new offering date
        And Click on the schedule time combobox "1"
        And Select interview time period "20:00〜22:00"
        When Click on schedule offer submit button
        And Click on the accept the confirmation popup
        Then Verify the schedule offering success message





