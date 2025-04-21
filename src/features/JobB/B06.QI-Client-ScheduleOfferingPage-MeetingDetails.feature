
@jobB
@jobB05



Feature: Meeting details after accepting schedule offer by monitor

        # ---------------------- Verify the meeting link from schedule offering tab after accepting the schedule ----------------------
        Scenario: Verify the Meeting details after accepting schedule offer by monitor
                Given Launch the client application
                When Enter the client userid
                When Enter the client password
                And Click on login button
                And Accept already logged message

                Given Navigate to the campaign list page
                When  Click on the campaign from campaign list "campaignTitle1"

                And Click on a monitor "Test-44"
                And Select schedule offer tab
                Then Verify already accepted date with time "20:00 〜 22:00" is displayed

                Then Verify the meeting link is available
                Then Verify the meeting id is available
                Then Verify the meeting password is available
                Then Verify the meeting join button is there

                Given Navigate to the campaign list page
                When  Click on the campaign from campaign list "campaignTitle1"
                When Click on the confirmed monitor list tab
                # Monitor-34
                When Verify the nick name "Test-44" of the monitor in confirmed monitor list
                When Verify the monitor status in confirmed monitor list "Test-44"
                When Verify the schedule date with time "20:00 〜 22:00" of the monitor "Test-44" in confirmed monitor list
                When Click on the button to copy the meeting details from confirmed monitor list "Test-44"


