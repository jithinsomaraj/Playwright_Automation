@jobB
@jobB05
Feature: Client_Broadcast Messaging

	Scenario: Verification of Broadcast Messaging
		Given Launch the client application
		When Enter the client userid
		When Enter the client password
		And Click on login button
		And Accept already logged message
		Then Verify the client top page navigation


		Given Navigate to the campaign list page
		When  Click on the campaign from campaign list "campaignTitle1"

		And Select monitor "test_42" from the monitor list
		And Select monitor "test_43" from the monitor list
		And Click on the broadcast messaging button
		When Enter the message "New Broadcast Message From Client" in client broadcast message text area
		And Click on client broadcast message send button

		Given Launch the monitor application as "Normal"
		When Enter the user name "monitor9"
		When Enter the password "monitor9"
		And Click on the login button

		When Click on the applied tab
		And  Click on the project title "campaignTitle1"
		And Click on the monitor chat tab
		Then Verify the text message "New Broadcast Message From Client" received by monitor

		Given Launch the monitor application as "Normal"
		When Enter the user name "monitor8"
		When Enter the password "monitor8"
		And Click on the login button


		When Click on the applied tab
		And  Click on the project title "campaignTitle1"
		And Click on the monitor chat tab
		Then Verify the text message "New Broadcast Message From Client" received by monitor

