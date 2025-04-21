
@jobA
Feature: ClientInquiry
	Scenario: Verify Client Inquiry
		Given Launch the client application
		When Enter the client userid
		When Enter the client password
		And Click on login button
		And Accept already logged message
		Then Verify the client top page navigation


		Given Click on the menu link
		When Verify the inquiry submit button is disabled
		And Enter the email "asukadentokyo@gmail.com"
		And Enter the inquiry title "Sample Inquiry title1"
		And Enter the inquiry subject "Sample Inquiry Subject"
		# And Click on the inquiry submit button
		# And Click on the inquiry agreement popup button
		# Then Verify the success submission message

		Given Select the inform option button
		When Verify the inquiry submit button is disabled
		And Enter the email "asukadentokyo@gmail.com"
		And Enter the inquiry title "Sample info title1"
		And Enter the inquiry subject "Sample info Subject"
# And Click on the inquiry submit button
# And Click on the inquiry agreement popup button
# Then Verify the success submission message
