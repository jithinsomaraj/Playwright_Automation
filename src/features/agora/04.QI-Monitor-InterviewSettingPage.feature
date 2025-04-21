@agoraTest4
@agorajob2
@jobCTest
Feature: Monitor Before Interview Page

	Scenario: Verify the monitor interview settings page
		Given Open browser for "monitor7"
		And Launch the application for Agora for "monitor7"
		When Login as "monitor7" application


		When Click on the particiapation tab for "monitor7"
		And Click on the project title for "monitor7"
		Then Verify the company name is displayed for "monitor7"
		Then Verify the campaign schedule date "scheduleDate2" is displayed for "monitor7"
		Then Verify the campaign schedule time "scheduleTime2" is displayed for "monitor7"



		And Click on the interview join button from campaign details page for "monitor7"
		Then Verify the campaign name "campaignTitle" is displayed for "monitor7"
		Then Verify the campaign schedule date "scheduleDate3" displayed for "monitor7"
		Then Verify the campaign schedule time "scheduleTime2" is displayed for "monitor7"
		# When Enable the background blur button in the monitor meeting settings page for "monitor7"
		When Disable the video in the monitor meeting settings page for "monitor7"
# When Verify the blur button got enabled in the monitor meeting settings page for "monitor7"


# When Disable The Mic In Monitor Settings Page for "monitor7"
# Then Verify the mic button is disabled for "monitor7"
# When Enable The Mic In Monitor Settings Page for "monitor7"
# Then Verify the mic button enabled for "monitor7"
