@jobB
@jobB13
Feature: Monitor Individual Chat Function

	Scenario: Verify Monitor Individual Chat Function
		Given Launch the client application
		When Login to client application
		And Accept already logged message

		Given Navigate to the campaign list page
		When  Click on the campaign from campaign list "campaignTitle1"

		Given Click on a monitor "Test-44"
		And Click on the client individual chat tab
		And Get the image count from client chat

		Given Launch the monitor application as "Normal"
		When Enter the user name "monitor10"
		When Enter the password "monitor10"
		And Click on the login button

		When Click on the participation tab
		And  Click on the project title "campaignTitle1"
		And Click on the monitor chat tab

		When Upload image "MonitorImage2.jpg"
		And Click on the message send button

		And Upload file "TestPDF.pdf"
		And Click on the message send button

		When Enter the message "Sample Message1" in monitor chat textarea
		And Click on the message send button
		#----- the following not applicable after special character validation added
		# When Enter the message "https://zoom1.com" in monitor chat textarea
		# And Click on the message send button
		# When Enter the message "https://teams.microsoft.com/l/meetup1" in monitor chat textarea
		# And Click on the message send button
		# When Enter the message "https://skype1.com" in monitor chat textarea
		# And Click on the message send button
		# When Enter the message "https://meet1.google.com" in monitor chat textarea
		# And Click on the message send button
		# When Enter the message "http://zoom1.com" in monitor chat textarea
		# And Click on the message send button
		# When Enter the message "http://teams.microsoft.com/l/meetup1" in monitor chat textarea
		# And Click on the message send button
		# When Enter the message "http://skype1.com " in monitor chat textarea
		# And Click on the message send button
		# When Enter the message "http://meet1.google.com" in monitor chat textarea
		# And Click on the message send button


		Given Launch the client application
		When Enter the client userid
		When Enter the client password
		And Click on login button
		And Accept already logged message
		Then Verify the client top page navigation

		Given Navigate to the campaign list page
		When  Click on the campaign from campaign list "campaignTitle1"

		Given Click on a monitor "Test-44"
		And Click on the client individual chat tab
		Then Verify the image "MonitorImage2.jpg" received  in client side

		Then Verify the file "TestPDF.pdf" received in client side

		Then Verify the message "Sample Message1" received in client chat

# Then Verify the message "https://zoom1.com" not received in client chat
# Then Verify the message "https://teams.microsoft.com/l/meetup1" not received in client chat
# Then Verify the message "https://skype1.com" not received in client chat
# Then Verify the message "https://meet1.google.com" not received in client chat
# Then Verify the message "http://zoom1.com" not received in client chat
# Then Verify the message "http://teams.microsoft.com/l/meetup1" not received in client chat
# Then Verify the message "http://skype1.com " not received in client chat
# Then Verify the message "http://meet1.google.com" not received in client chat




