@jobB
@now
Feature: Campaign details page monitor filter

     Scenario: Verification of campaign details page filter
          Given Launch the client application
          When Enter the client userid
          When Enter the client password
          And Click on login button
          And Accept already logged message


          Given Navigate to the campaign list page
          When  Click on the campaign from campaign list "campaignTitle1"

          Given Launch the filter popup
          When Select the filter criteria as "has memo"
          Then Submit with the filter criteria
          Then Verify the memo "Sample Memo" against the monitor "test41" after submission
          When Launch the filter popup
          And Clear the filter selection
          Then Submit with the filter criteria


          Given Launch the filter popup
          When Select the filter criteria as "male"
          Then Submit with the filter criteria
          Then Verify the monitor "test_42" is present
          Then Verify the monitor "test41" is present
          When Launch the filter popup
          And Clear the filter selection
          Then Submit with the filter criteria


          Given Launch the filter popup
          When Select the filter criteria as "married"
          Then Submit with the filter criteria
          Then Verify the monitor "Test-44" is present
          When Launch the filter popup
          And Clear the filter selection
          Then Submit with the filter criteria


          Given Launch the filter popup
          # When Select the filter criteria as "no children"
          When Select the filter criteria as "have children"
          Then Submit with the filter criteria
          Then Verify the monitor "test41" is present
          When Launch the filter popup
          And Clear the filter selection
          Then Submit with the filter criteria


          Given Launch the filter popup
          When Select the "Profession" as the filter criteria "会社員(その他)"
          Then Submit with the filter criteria
          Then Verify the monitor "test_42" is present
          When Launch the filter popup
          And Clear the filter selection
          Then Submit with the filter criteria

