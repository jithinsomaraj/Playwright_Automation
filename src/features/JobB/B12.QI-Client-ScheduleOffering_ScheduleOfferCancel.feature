@jobB

Feature: Client_ScheduleOfferCancellation

        Scenario: Verify the client schedule offer cancellation (monitor apply, schedule grant and monitor approving the slot)          

                Given Launch the client application
                When Login to client application
                Given Open browser for "monitor7"
                And Launch the application for Agora for "monitor7"
                When Login as "monitor7" application
                And Apply the campaign "campaignTitle2" for "monitor7"
                Given Navigate to the campaign list page
                When Click on the campaign from campaign list "campaignTitle2"
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
                And  Click on the project title "campaignTitle2"
                Then Verify the submit button is disabled
                When Select the schedule time "20:00 〜 22:00"
                When Submit the selected date
                When Click on the accept button from the confirmation popup
                And Click on the acknowledgement close button
       

 Scenario: Verify the client schedule offer cancellation (client cancel)

                Given Launch the client application
                When Enter the client userid
                When Enter the client password
                And Click on login button
                And Accept already logged message
                Then Verify the client top page navigation
                Given Navigate to the campaign list page
                When  Click on the campaign from campaign list "campaignTitle2"
                Given Click on a monitor "test41"
                When Select schedule offer tab
                When Click on the schedule offering cancel button
                And  Click on the accept the confirmation popup
                And  Click on the ticket consumption confirmation popup
                Given Navigate to the campaign list page
                When  Click on the campaign from campaign list "campaignTitle2"
                When Click on a monitor "test41"
                And Select schedule offer tab
                Then Verify the cancelled details present in schedule adjusting tab

