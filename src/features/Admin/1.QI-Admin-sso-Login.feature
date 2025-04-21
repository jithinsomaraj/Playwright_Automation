@adminsuite1
# @adminsuite2
@adminlogin

Feature: Admin sso Login
    Scenario: Admin sso Login verification
        Given Launch the admin application
        When Enter the admin userid
        When Enter the admin password
        And Click on admin login button
        Then Verify the admin top page navigation
        And Click on Interview zero Button
        And Click on the Login confirmation pop up accept button
        And Verify the page title
        And Navigate to Login page


