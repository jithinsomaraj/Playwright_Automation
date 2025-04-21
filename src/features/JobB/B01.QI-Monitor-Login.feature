@jobB @MonitorLogin

Feature: MonitorLogin

    Scenario: Login with invalid username
        Given Launch the monitor application as "Normal"
        When Enter the user name "invalidusername"
        When Enter the password "monitor7"
        And Click on the login button
        Then Verify the invalid login error message

    # Scenario: Login with invalid password
    #     Given Launch the monitor application as "Normal"
    #     When Enter the user name "monitor_34"
    #     When Enter the password "wrongpassword"
    #     And Click on the login button
    #     Then Verify the invalid login error message
    @jobB133
    Scenario: Login with a valid credentials
        Given Launch the monitor application as "Normal"
        When Enter the user name "monitor7"
        When Enter the password "monitor7"
        And Click on the login button
        Then Verify the top page navigation

    Scenario: Logout Monitor
        When Click on the logout link
        And Click on logout confirmation button