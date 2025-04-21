@adminusermanagement

Feature: Admin User management
 Scenario: Verify the  page navigation
        Given Launch the admin application
        Given Login as admin user
        And Click on the user management link in the side menu and verify the page navigation





  Scenario: Search and verify the details of a operator user 
        # Given Launch the admin application
        # Given Login as admin user   
        And Click on the Project list in the side menu
        And Click on the user management link in the side menu and verify the page navigation       
        And Enter the login id for "OperatorLoginID"
        And Enter the name as "OperatorName"
        And Enter the email as "OperatorEmail"
        And Select the authority as "OperatorAuthority"
        Then Click on search button
        And Verify the result dispalyed is "OperatorLoginID" and "OperatorName" and "OperatorEmail" and "OperatorAuthority" 


  Scenario: Edit the authority of the Operator to Campiagn manager and verify
        # Given Launch the admin application
        # Given Login as admin user  
        And Click on the Project list in the side menu
        And Click on the Project list in the side menu 
        And Click on the user management link in the side menu and verify the page navigation           
        And Enter the login id for "OperatorLoginID"
        And Enter the name as "OperatorName"
        And Enter the email as "OperatorEmail"
        And Select the authority as "OperatorAuthority"
        Then Click on search button
        And Verify the result dispalyed is "OperatorLoginID" and "OperatorName" and "OperatorEmail" and "OperatorAuthority"         
        Then Click on edit button
        Then Select the authority radiobutton as "CampaignmanagerAuthority"
        Then Click on user edit submit button
        And Click on the user management link in the side menu and verify the page navigation           
        And Enter the login id for "OperatorLoginID"
        And Enter the name as "OperatorName"
        And Enter the email as "OperatorEmail"
        And Select the authority as "CampaignmanagerAuthority"
        Then Click on search button
        And Verify the result dispalyed is "OperatorLoginID" and "OperatorName" and "OperatorEmail" and "CampaignmanagerAuthority"



Scenario: Edit the authority of the Operator to Service manager and verify
   # Given Launch the admin application
        # Given Login as admin user   
        And Click on the Project list in the side menu
        And Click on the user management link in the side menu and verify the page navigation           
        And Enter the login id for "OperatorLoginID"
        And Enter the name as "OperatorName"
        And Enter the email as "OperatorEmail"
        And Select the authority as "CampaignmanagerAuthority"
        Then Click on search button
        And Verify the result dispalyed is "OperatorLoginID" and "OperatorName" and "OperatorEmail" and "CampaignmanagerAuthority"         
        Then Click on edit button
        Then Select the authority radiobutton as "ServicemanageAuthority"
        Then Click on user edit submit button
        And Click on the user management link in the side menu and verify the page navigation           
        And Enter the login id for "OperatorLoginID"
        And Enter the name as "OperatorName"
        And Enter the email as "OperatorEmail"
        And Select the authority as "ServicemanageAuthority"
        Then Click on search button
        And Verify the result dispalyed is "OperatorLoginID" and "OperatorName" and "OperatorEmail" and "ServicemanageAuthority"
        
Scenario: Change the authority back to operator


  # Given Launch the admin application
        # Given Login as admin user 
         And Click on the user management link in the side menu and verify the page navigation   
        And Click on the Project list in the side menu        
        And Enter the login id for "OperatorLoginID"
        And Enter the name as "OperatorName"
        And Enter the email as "OperatorEmail"
Then Click on edit button
        Then Select the authority radiobutton as "OperatorAuthority"
        Then Click on user edit submit button






  








      


  


