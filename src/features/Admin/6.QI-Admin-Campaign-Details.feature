@admincampaigndetails
@adminjob
Feature: Admin Campaign Details
 Scenario: Verify the  basic data dispalyed in the campaign details page
        Given Launch the admin application
        Given Login as admin user
        And Click on the Project list in the side menu     
        Then Enter campaign name in the search field as "campaignTitle"
        Then Enter the implementation duration date range
        Then Enter the campaign interview duration
        And Click on the search button
        Then Click on the campaignId
        Then Verify the page Title of campaign details page      
        Then Verify the campaign Title is present "campaignTitle"
        Then Verify the campaign Condition section is present
        Then Verify the campaign Details page link is present
        Then Verify the applicant List tab is present
        Then Verify the confirmed List tab is present
        When Expand the Campaign condition section
        Then Verify the Reruitment condition "recruitmentCondition"
        Then Verify the NGConditions "NGConditions"
        Then Verify the NGIndustries "NGIndustries"



    Scenario:Verify the Campaign data with complete details

        And Click on Point output tab
        And Click on the Project list in the side menu
        Then Enter campaign name in the search field as "campaignTitle"
        Then Enter the implementation duration date range
        Then Enter the campaign interview duration
        And Click on the search button
        Then Click on the campaignId
        Given Click on the Campaign details popup link
        Then Verify the Campaign details popup has loaded
        Then Verify the Project title from recruitment details for "campaignTitle"
        Then Verify the RecruitmentCondition from recruitment details
        Then Verify the NG conditions from Recruitment details
        Then Verify the Monitor count from Recruitment details
        Then Verify the Interview duration from recruitment details
        Then Verify the Gender from recruitment details
        Then Verify the Lower Age from recruitment details
        Then Verify the Upper Age from recruitment details
        Then Verify the Marital status from Recruitment details
        Then Verify the Children status from Recruitment details
        Then Verify the Profession from Recruitment details
        Then Verify the lower Household income from Recruitment details
        Then Verify the upper Household income from Recruitment details
        Then Verify the lower Personal annual income from Recruitment details
        Then Verify the upper Personal annual income from Recruitment details
        When Campaign details Popup close button
        Then Verify the campaign Title is present "campaignTitle"
   



Scenario: Verify the monitor delete feature


And Click on Point output tab
And Click on the Project list in the side menu    
Then Enter the implementation duration date range 
Then Enter campaign name in the search field as "campaignTitleforschedulesend"
And Click on the search button
Then Click on the campaignId
Then Select the monitor "Test-44" from the monitor list
Then Verify the monitor delete button is present
Then Click on the monitor delete button
Then Click on the confirm button in the popup
Then Verify the monitors "Test-44" status is "削除済"


Scenario: Verify the monitor sentoff feature


And Click on Point output tab
And Click on the Project list in the side menu    
Then Enter the implementation duration date range  
Then Enter campaign name in the search field as "campaignTitleforschedulesend"
And Click on the search button
Then Click on the campaignId
Then Select the monitor "test_45" from the monitor list
Then Verify the monitor sendOff button is present
Then Click on the monitor sendoff button
Then Click on the confirm button in the popup
Then Verify the monitors "test_45" status is "見送り"



Scenario: Verify the monitor status change from sent off to recruiting feature

And Click on Point output tab
And Click on the Project list in the side menu
Then Enter the implementation duration date range     
Then Enter campaign name in the search field as "campaignTitleforschedulesend"
And Click on the search button
Then Click on the campaignId
Then Select the monitor "test_45" from the monitor list
Then Verify the monitor recruit button is present
Then Click on the monitor recruit button
Then Click on the confirm button in the popup
Then Verify the monitors "test_45" status is "応募済"




Scenario: Verify the monitor recruitment close feature

    And Click on Point output tab
    And Click on the Project list in the side menu     
    Then Enter campaign name in the search field as "campaignTitleforClose"
    Then Enter the implementation duration date range
    And Click on the search button
    Then Click on the campaignId
    Then Verify the page Title of campaign details page
    Then Click on the close monitor requirment button
    Then Click on the confirm button in popup dispalyed and button changes to open monitor recruitment
     


Scenario: Verify the monitor recruitment open feature

And Click on Point output tab
    And Click on the Project list in the side menu     
    Then Enter campaign name in the search field as "campaignTitleforClose"
    Then Enter the implementation duration date range
    And Click on the search button
    Then Click on the campaignId
    Then Verify the page Title of campaign details page
    Then Click on the open monitor requirment button
    Then Click on the confirm button in popup dispalyed and button changes to close monitor recruitment


 
Scenario: Verify the monitor campaign  close feature

    And Click on Point output tab
    And Click on the Project list in the side menu     
    Then Enter campaign name in the search field as "campaignTitleforClose"
    Then Enter the implementation duration date range
    And Click on the search button
    Then Click on the campaignId
    Then Verify the page Title of campaign details page
    Then Click on the close campaign button
    Then Click on the confirm button in popup dispalyed and button changes to open campaign


Scenario: Verify the monitor campaign open feature

And Click on Point output tab
    And Click on the Project list in the side menu     
    Then Enter campaign name in the search field as "campaignTitleforClose"
    Then Enter the implementation duration date range
    And Click on the search button
    Then Click on the campaignId
    Then Verify the page Title of campaign details page
    Then Click on the open campaign button
    Then Click on the confirm button in popup dispalyed and button changes to close campaign






 Scenario: Verify the interview delivery video details from project list

And Click on Point output tab
        And Click on the Project list in the side menu  
         And Clear the filter date range   
       Then Enter campaign name in the search field as "campaignTitlefordeliveryvideo"
        And Click on the search button
       And Click on the delivery video link of campaign 
       Then Verify the Campaign title "campaignTitlefordeliveryvideo"
       Then Verify the Campaign date "deliverycampaignDate" of the monitor "deliverycampaignmonitor"
       Then Verify the Monitor name "deliverycampaignmonitor" with campaign date "deliverycampaignDate"
       Then Verify the Monitor profile details "deliverycampaignmonitorGenderTitle" and "deliverycampaignmonitorGender"






 Scenario: Verify the campaign edit feature 

And Click on Point output tab
And Click on the Project list in the side menu     
Then Enter campaign name in the search field as "campaignTitle"
Then Enter the implementation duration date range 
And Click on the search button
Then Click on the campaignId
Then Click on campaign edit button
Then Enter the campiagn name as "updatedcampaignTitle"
Then Edit the recruitment conditions as "updatedrecruitmentCondition"
Then Edit the NG conditions as "updatedNGConditions"
Then CLick on the update button
Then Click on confirm update button
When Expand the Campaign condition section
Then Verify the campaign Title is present "updatedcampaignTitle"
Then Verify the Reruitment condition "updatedrecruitmentCondition"
Then Verify the NGConditions "updatedNGConditions"



 Scenario: Verify the campaign draft release feature 

And Click on Point output tab
And Click on the Project list in the side menu     
Then Enter campaign name in the search field as "campaignTitledraft"
Then Click on date clear icon
And Click on the search button
Then Click on the campaignId
Then Verify that campaign Details page is dispalyed

        When Enter Recruitment condition "recruitmentCondition"
        When Enter the NG Conditions "NGConditions"
        And Click on the NGindustry Button
        And Select Multiple NGindustries as group "メディア・広告・リサーチ業"
       
        And Click on the NGindustry popup submit Button
        When Enter Required monitor count "monitorCount"
        When Click on Interview duration listbox
        And Select the Interview duration from list "interviewDuration"
        When Click on the Campaign creation schedule calendar
        When Select the Interview schedule from date
        When Select the Interview schedule To date
        Then Verify Maximum number of applicant
        # When Click on Slot selection area
        # slot selection after 5 days from start date , 3 consecutive days will select , same timeslot of 10.00 AM
        And Select slot from Slot selection area "0","3","08.00"
        When Disable survey Details section
        And Accept survey disabled Confirmation popup
        And Click on Gender as "no answer" radio button
        And Select Lower age as "18"
        And Select Upper age as "90"
        And Select Place of residence as "佐賀県"
        And Click on draft submit button
        And Click on draft submit confirm button
        Then Enter campaign name in the search field as "campaignTitledraft"
        Then Click on date clear icon        
        Then Click on the campaignId
        Then Verify the page Title of campaign details page