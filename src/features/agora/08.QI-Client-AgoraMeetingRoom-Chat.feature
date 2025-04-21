@agoraTest3
@jobCTest
Feature: Agora Chat feature

    Scenario: interviewer Send Message to Monitor

        Given Launch the client application
        When Login to client application
        Then Verify the client top page navigation
        Given Navigate to the campaign list page
        When  Click on the campaign from campaign list "campaignTitle"
        When Click on a monitor
        When Select schedule offer tab
        And Save guest user information
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


        When Click on the chat list button for "Interviewer1"
        When Click on the monitor chat tab for "Interviewer1"
        When Enter the message in Monitor chat from "Interviewer1"
        And Click Send button for "Interviewer1"
        When Click on meeting room more icon for "monitor7"
        And Click on monitor agora chat button for "monitor7"
        And Verify the text message received by "monitor7"


        When Enter the message in monitor chat textarea for "monitor7"
        And Click on the message send button for "monitor7"
        And Verify the text message from monitor received by "Interviewer1"


        Given Open browser for "backroom1"
        And Launch the application for "backroom1"
        When Enter the client guest userid for "backroom1"
        When Enter the client guest password for "backroom1"
        And Click on login button for "backroom1"
        When Enter the backroom user name for "backroom1"
        And Click on the join as backroom button for "backroom1"
        And Accept the confirmation popup to join the interview for "backroom1"
        When Click on the backroom chat list button for "backroom1"
        When Click on the backroom monitor chat tab for "backroom1"
        When Enter the backroom message in Monitor chat from "backroom1"
        And Click backroom Send button for "backroom1"
        When Click on the backroom chat tab for "Interviewer1"
        And Verify the text message from backroom received by "Interviewer1"