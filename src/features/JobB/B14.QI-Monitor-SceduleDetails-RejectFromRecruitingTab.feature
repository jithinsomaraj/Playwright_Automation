@jobB

Feature: All the above dates are NG

    Scenario: Verify all the above dates are NG

        Given Launch the monitor application as "Normal"
        When Enter the user name "monitor3"
        When Enter the password "monitor3"
        And Click on the login button
        Then Verify the top page navigation

        Given Click on the project title "campaignTitle1"
        Then Verify the page navigation to project details page

        When Click on the proceed button
        Then Accept the recruitment conditions pop up
        Then Verify page navigated to the schedule details page

        When Select the all the above dates are NG
        And Click on the answer button
        When Click on the search for other open jobs button
        Then Verify the top page navigation

        Then Verify the campaign not listed in the recruiting tab "campaignTitle1"

