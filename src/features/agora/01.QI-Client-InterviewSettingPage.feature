
@agoraTest1
@jobCTest
Feature: Client Before Interview Page

	Scenario: Verify the client interview settings page
		Given Launch the client application
		When Login to client application
		Then Verify the client top page navigation
		And Navigate to the campaign list page
		When Click on the campaign from campaign list "campaignTitle"
		When Click on a monitor
		When Select schedule offer tab
		And Click on the meeting joining button from schedule offering tab
		When Disable the background blur button in the client meeting settings page
		When Verify the blur button got enabled in the client meeting settings page
		When Switch off the video in the client meeting settings page
		When Switch off the mic in the client meeting settings page
		When Verify the mic is getting off in the client meeting settings page
		And Verify the campaign titile for "interviewer1"
		And verify the schedule time for "interviewer1"
		And verify the schedule date for "interviewer1"
		And Verify the interview joining time message for "interviewer1"
		And Click on the join as interviewer button for "Interviewer1"
		And Verify the validation message for "Interviewer1"
		When Enter the user name "clientUserNameMixedData" for "Interviewer1"
		And Click on the join as interviewer button for "Interviewer1"
		Then Verify that username field accept all characters







