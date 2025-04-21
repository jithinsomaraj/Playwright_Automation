@jobA
@testingnew
@monitorlogin
Feature: Monitor Inquiry
    Scenario:Monitor Inquiry with inquiry type as 問い合わせ
        Given Launch the monitor application as "Normal"
        When Enter the user name "monitor1"
        When Enter the password "monitor1"
        And Click on the login button
        Then Verify the top page navigation
        And Click on the inquiry button
        And Select the inquiry type as "問い合わせ"
        And Input the inquiry title as "This is an automated Test"
        And Input the inquiry content as "Test content 問い合わせ"
    # And Click inquiry send button
    # And Click on the Inquiry sent message close button
    # And Verify the inquiry success message
    # When Click on the logout link
    # And Click on logout confirmation button


    Scenario:Monitor Inquiry with inquiry type as 通報
        Given Launch the monitor application as "Normal"
        When Enter the user name "monitor1"
        When Enter the password "monitor1"
        And Click on the login button
        Then Verify the top page navigation
        And Click on the inquiry button
        And Select the inquiry type as "通報"
        And Input the inquiry title as "This is an automated Test"
        And Input the inquiry content as "Test content 通報"
    # And Click inquiry send button
    # And Click on the Inquiry sent message close button
    # And Verify the inquiry success message
    # When Click on the logout link
    # And Click on logout confirmation button


    Scenario:Verify send button without title and description
        Given Launch the monitor application as "Normal"
        When Enter the user name "monitor1"
        When Enter the password "monitor1"
        And Click on the login button
        Then Verify the top page navigation
    # And Click on the inquiry button
    # And Verify that the send button is disabled
    # When Click on the logout link
    # And Click on logout confirmation button



    Scenario:Verify send button without title
        Given Launch the monitor application as "Normal"
        When Enter the user name "monitor1"
        When Enter the password "monitor1"
        And Click on the login button
        Then Verify the top page navigation
    # And Click on the inquiry button
    # And Input the inquiry title as "This is an automated Test"
    # And Verify that the send button is disabled
    # When Click on the logout link
    # And Click on logout confirmation button



    Scenario:Verify send button without description
        Given Launch the monitor application as "Normal"
        When Enter the user name "monitor1"
        When Enter the password "monitor1"
        And Click on the login button
        Then Verify the top page navigation
# And Click on the inquiry button
# And Input the inquiry content as "Test content 通報"
# And Verify that the send button is disabled
# When Click on the logout link
# And Click on logout confirmation button
