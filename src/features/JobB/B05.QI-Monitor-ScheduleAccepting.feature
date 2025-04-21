@jobB
# @RegressionSuite2 @Flow1 @DateCheck1
Feature: Meeting details after accepting schedule offer by monitor

    # # ---------------------- Schedule accepted ---------------------------------

    Scenario:  Verify the Schedule accepting from Monitor
        Given Launch the monitor application as "Normal"
        When Enter the user name "monitor10"
        When Enter the password "monitor10"
        And Click on the login button

        When Click on the applied tab
        And  Click on the project title "campaignTitle1"
        Then Verify the submit button is disabled


        When Select the schedule time "20:00 〜 22:00"
        Then Verify the submit button is enabled
        When Submit the selected date
        And Click on cancel confirmation popup
        When Submit the selected date
        When Click on the accept button from the confirmation popup
        And Click on the acknowledgement close button

        When Click on the participation tab
        Then Verify the project title "campaignTitle1"

# --------------------------------------

