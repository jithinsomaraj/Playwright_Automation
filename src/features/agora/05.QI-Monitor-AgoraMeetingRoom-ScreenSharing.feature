@agoraTest5
@jobCTest
Feature: Monitor Agora Screensharing
    Scenario:Screensharing from customer viewing from monitor

        Given Launch the client application
        When Login to client application
        Then Verify the client top page navigation
        Given Navigate to the campaign list page
        When  Click on the campaign from campaign list "campaignTitle"
        When Click on a monitor
        When Select schedule offer tab
        And Click on the meeting joining button from schedule offering tab
        When Enter the user name "clientUserName" for "Interviewer1"
        And Click on the join as interviewer button for "Interviewer1"
        And Accept the confirmation popup to join the interview

        Given Open browser for "monitor7"
        And Launch the application for Agora for "monitor7"
        When Login as "monitor7" application
        When Click on the particiapation tab for "monitor7"
        And Click on the project title for "monitor7"
        And Click on the interview join button from campaign details page for "monitor7"
        And Click on the enter interview room button for "monitor7"
        And Accept the confirmation popup to join the interview for "monitor7"
        When Accept the monitor joining request for "Interviewer1"
        When Click on the sharing button by "Interviewer1"
        And Select the sharing mode as "entirescreen" sharing
        And Verify that the screen is shared to "monitor7"
        And Verify that the interviewer name is present in "monitor7"
        And Click on interview leave button for "monitor7"
        And Click on Interview leaving confirmation accept button for "monitor7"
