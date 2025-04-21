@adminsuite
@adminblacklist
Feature: AdminBlacklist
    Scenario: Upload the blacklist file and verify
        Given Launch the admin application
        When Enter the admin userid
        When Enter the admin password
        And Click on admin login button
        Then Verify the admin top page navigation
        And Click on Interview zero Button
        And Click on the Login confirmation pop up accept button
        And Verify the page title
        And Click on the Black list in the side menu
        Then Verify the Page heading in the Black list page     
       Then Select the textfile
       Then Click on confirmbutton
       Then Click on confirm uploaded button
       Then Verify the file uploaded
 







