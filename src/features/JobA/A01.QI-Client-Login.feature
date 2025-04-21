@jobA @ClientLogin
@retest
Feature: Client Login
    Scenario: Login with a invalid username
        Given Launch the client application
        When Enter the client invalid userid
        When Enter the client password
        And Click on login button
        Then Verify invalid login error message

    # Scenario: Login with a invalid password
    #     Given Launch the client application
    #     When Enter the client userid
    #     When Enter the client invalid password
    #     And Click on login button
    #     Then Verify invalid login error message
    @jobA2232
    Scenario: Login with a valid credentials
        Given Launch the client application
        When Enter the client userid
        When Enter the client password
        And Click on login button
        And Accept already logged message
        Then Verify the client top page navigation


    Scenario: Logout client
        Given Launch the client application
        When Enter the client userid
        When Enter the client password
        And Click on login button
        And Accept already logged message
        When Click on the logout link
        And Click on logout confirmation button
