
@agoraTest71
@jobCTest
Feature: Client Agora Meeting

    Scenario: Verify Client Agora meeting
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


        Given Open browser for "backroom1"
        And Launch the application for "backroom1"
        When Enter the client guest userid for "backroom1"
        When Enter the client guest password for "backroom1"
        And Click on login button for "backroom1"
        When Enter the backroom user name for "backroom1"
        And Click on the join as backroom button for "backroom1"
        And Accept the confirmation popup to join the interview for "backroom1"



        Given Open browser for "monitor7"
        And Launch the application for Agora for "monitor7"
        When Login as "monitor7" application
        When Click on the particiapation tab for "monitor7"
        And Click on the project title for "monitor7"
        And Click on the interview join button from campaign details page for "monitor7"
        And Click on the enter interview room button for "monitor7"
        And Accept the confirmation popup to join the interview for "monitor7"
        And Verify that the monitor joining request is not present for "backroom1"
        And Verify that screensharing button is not present for "backroom1"



        When Accept the monitor joining request for "Interviewer1"
        Then Verify the campaign title for "Interviewer1"
        # Then Verify the recording icon is present for "Interviewer1"

        Then Verify the monitor nickname for "Interviewer1"
        Then Verify the monitor gender for "Interviewer1"
        Then Verify the monitor prefecture for "Interviewer1"
        When Click on the participant list icon for "Interviewer1"
        Then Verify the participant name for "Interviewer1"
        When Enable the video for "interviewer1"
        When Enable the mic for user for "Interviewer1"
        Then Verify the mic has been enabled for "Interviewer1"
        Then Verify the interview schedule for "Interviewer1"
        Then Verify the interview duration for "Interviewer1"
        When Click on the chat list button for "Interviewer1"
        Then Verify the chat tab "バックルーム" for "Interviewer1"
        Then Verify the chat tab "モニター" for "Interviewer1"
        And Click on interview leave button for "monitor7"
        And Click on Interview leaving confirmation accept button for "monitor7"




# Scenario: customer Exiting from interview
#     And Click on the meeting leave button for "Interviewer1"
#     And Accept meeting leaving confirmation popup
#     And Click on Interview feedback cancel button
#     And Click on Retry button
#     And Verify that user is navigated to settings page
#     When Enter the user name "clientUserName" for "Interviewer1"
#     And Click on the join as interviewer button for "Interviewer1"
#     And Accept the confirmation popup to join the interview




# # Scenario: Customer Exiting from interview with feedback

# And Click on the meeting leave button for "Interviewer1"
# And Accept meeting leaving confirmation popup
# And Verify the feedback question 1
# And Verify the feedback question 2
# And Click submit button
# And Verify the error message
# And Enter question 2 answer as "FeedbackAnswer2"
# And Verify the maximum character validation
# And Click on Rating "5"
# And Enter question 2 answer as "FeedbackAnswer1"
# And Click submit button
