@adminsuite1
# @job1
@adminpointexport


Feature: Admin Point Export
    Scenario: Admin Point CSV Export
        Given Launch the admin application
        Given Login as admin user
        And Click on Point output tab
        And Verify the Point output page
        And Clear the filter date range
        And Input project title as "CampaignTitle"
        
        And Click filter submit button
        And Click CSV download button
        And Verify the downloaded CSV data



