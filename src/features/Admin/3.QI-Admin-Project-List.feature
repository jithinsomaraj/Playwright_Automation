# @adminsuite1
# @adminsuite2
@adminpointprojectlist

Feature: Admin Project list 
    Scenario: Navigate To Project List page
        Given Launch the admin application
        When Enter the admin userid
        When Enter the admin password
        And Click on admin login button
        Then Verify the admin top page navigation
        And Click on Interview zero Button
        And Click on the Login confirmation pop up accept button
        And Verify the page title
        And Click on the Project list in the side menu
        Then Verify the Page heading in the Project list page

    Scenario: Search using campaign name, implementation period and implementation time
     Given Launch the admin application
        When Enter the admin userid
        When Enter the admin password
        And Click on admin login button
        Then Verify the admin top page navigation
        And Click on Interview zero Button
        And Click on the Login confirmation pop up accept button
        And Verify the page title
        And Click on the Project list in the side menu
       
       Then Enter campaign name in the search field as "campaignTitle"
       Then Enter the implementation duration date range
       Then Enter the campaign interview duration
       And Click on the search button 

     Scenario: Verify the campaign listed after search

       And Verify the campaign name







