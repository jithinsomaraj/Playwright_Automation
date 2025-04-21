@jobB02879

Feature: Monitor Project Details Page

    Scenario: Verify Monitor Project Details Page
        Given Launch the monitor application as "Normal"
        When Enter the user name "monitor7"
        When Enter the password "monitor7"
        And Click on the login button

        Given Click on the project title "campaignTitle1"
        Then Verify the page navigation to project details page

        Then Verify the project title for "campaignTitle1"
        Then Verify the reward value title for "campaignTitle1"
        Then Verify the reward value for "campaignTitle1"
        Then Verify the interview duration title for "campaignTitle1"
        Then Verify the interview_duration for "campaignTitle1"
        Then Verify the title for monitor_count for "campaignTitle1"
        Then Verify the monitor_count for "campaignTitle1"
        Then Verify the recruitment condition title for "campaignTitle1"
        Then Verify the recruitment condition for "campaignTitle1"
        Then Verify the NGIndustry title for "campaignTitle1"

        When Click on the proceed button
        Then Accept the recruitment conditions pop up

        Then Verify page navigated to the schedule details page

        When Click on the back button for project details page navigation
        Then Verify the page navigation to project details page

        When Click on the proceed button
        Then Accept the recruitment conditions pop up
        Then Verify page navigated to the schedule details page
