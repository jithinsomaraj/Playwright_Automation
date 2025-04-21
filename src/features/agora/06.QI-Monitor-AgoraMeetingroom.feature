@jobCTest
Feature: MonitorAgoraMeeting

    Scenario: Monitor Interview room verification

        Given Launch the client application
        When Login to client application
        Then Verify the client top page navigation
        Given Navigate to the campaign list page
        When Click on the campaign from campaign list "campaignTitle"
        And Click on a monitor "test41"
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
        Then Verify meeting room campaign name for "monitor7"
        When Enable the video button for "monitor7"
        When Disable the video button for "monitor7"
        When Enable the video button for "monitor7"
        When Disable the mic button for "monitor7"
        When Enable the mic for "monitor7"
        When Click on meeting room more icon for "monitor7"
        When Click on meeting room participants list icon for "monitor7"
        When Verify meeting room monitor name "monitorname" for "monitor7"
        When Click on meeting room participants list close button for "monitor7"
        And Click on interview leave button for "monitor7"
        And Click on Interview leaving confirmation accept button for "monitor7"













# Scenario: Monitor Exiting from interview

#     Given Open browser for "monitor7"
#     And Launch the application for Agora for "monitor7"
#     When Login as "monitor7" application
#     When Click on the particiapation tab for "monitor7"
#     And Click on the project title for "monitor7"
#     And Click on the interview join button from campaign details page for "monitor7"
#     And Click on the enter interview room button for "monitor7"
#     And Accept the confirmation popup to join the interview for "monitor7"
#     When Accept the monitor joining request for "Interviewer1"
#     And Click on interview leave button for "monitor7"
#     And Click on Interview leaving confirmation cancel button for "monitor7"
#     And Click on interview leave button for "monitor7"
#     And Click on Interview leaving confirmation accept button for "monitor7"
#     And Click on Interview feedback cancel button for "monitor7"
#     And Click on Retry button for "monitor7"
#     And Verify that "monitor7" is navigated to settings page
#     And Click on the enter interview room button for "monitor7"
#     And Accept the confirmation popup to join the interview for "monitor7"
#     When Accept the monitor joining request for "Interviewer1"
#     And Click on interview leave button for "monitor7"
#     And Click on Interview leaving confirmation accept button for "monitor7"
#     And Click on Interview feedback cancel button for "monitor7"
#     And Click on Close screen button for "monitor7"
#     And Verify that "monitor7" is navigated to participant tab



# Scenario: Monitor Exiting from interview with feedback

#     Given Open browser for "monitor7"
#     And Launch the application for Agora for "monitor7"
#     When Login as "monitor7" application
#     When Click on the particiapation tab for "monitor7"
#     And Click on the project title for "monitor7"
#     And Click on the interview join button from campaign details page for "monitor7"
#     And Click on the enter interview room button for "monitor7"
#     And Accept the confirmation popup to join the interview for "monitor7"
#     When Accept the monitor joining request for "Interviewer1"
#     And Click on interview leave button for "monitor7"
#     And Click on Interview leaving confirmation accept button for "monitor7"
#     And Verify feedback question 1 for "monitor7"
#     And Verify feedback question 2 for "monitor7"
#     And Click Rating "5" for "monitor7"
#     And Enter the question 2 answer as "Good" for "monitor7"
#     And Click feedback submit button for "monitor7"
