@jobA
Feature: Client campaign details page

    Scenario: Verify the Campaign details page elements
        Given Launch the client application
        When Login to client application

        Given Navigate to the campaign list page
        When  Click on the campaign from campaign list "campaignTitle6"


        Then Verify the recruitment closing button is present
        Then Verify the campaign closing button is present
        Then Verify the campaign title is present "campaignTitle6"
        Then Verify the campaign condition section is present
        Then Verify the campaign details page link is present
        Then Verify the applicant list tab is present
        Then Verify the confirmed list tab is present


        When Expand the campaign condition section
        Then Verify the recruitment condition "recruitmentCondition"
        Then Verify the NGCondition "NGConditions"
        Then Verify the NG Industries "NGIndustries"


    Scenario:Verify the campaing data with complete details

        Given Launch the client application
        When Enter the client userid
        When Enter the client password
        And Click on login button
        And Accept already logged message
        Then Verify the client top page navigation

        When Navigate to the campaign list page
        When Click on the campaign from campaign list "campaignTitle6"

        Given Click on the campaign details popup link
        Then Verify the campaign details popup has loaded

        Then Verify the projecttitle from recruitment details for "campaignTitle6"
        Then Verify the recruitmentCondition from recruitment details
        Then Verify the NG conditions from recruitment details
        Then Verify the monitor count from recruitment details
        Then Verify the interview duration from recruitment details
        Then Verify the gender from recruitment details
        Then Verify the lower Age from recruitment details
        Then Verify the upper Age from recruitment details
        Then Verify the Place of residence from recruitment details
        Then Verify the Marital status from recruitment details
        Then Verify the Children status from recruitment details
        Then Verify the Profession from recruitment details
        Then Verify the lower Household income from recruitment details
        Then Verify the upper Household income from recruitment details
        Then Verify the lower Personal annual income from recruitment details
        Then Verify the upper Personal annual income from recruitment details
        When Campaign details popup close button
