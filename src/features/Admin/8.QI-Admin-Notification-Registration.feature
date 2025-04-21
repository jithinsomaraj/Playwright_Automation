@adminnoticelist

Feature: Admin Notification registration
 Scenario: Verify the  page navigation
        Given Launch the admin application
        Given Login as admin user
        And Click on the Notification managment link in the side menu and verify the page navigation


  Scenario: Verify the monitor notification registration and verfiy the listing 
        # Given Launch the admin application
        # Given Login as admin user   
        And Click on the Notification managment link in the side menu and verify the page navigation
        And Click on the Add notice button
        And Click on the monitor checkbox
        And Enter the subject for "Monitor_Noticetitle"
        And Enter the Notice contents "Monitor_Noticesubject"
        And Click on Publish button
        And Click on confirm button
        And Verify the notice is listed and its contents with status "公開済" and "Monitor_Noticetitle" and "Monitor_Noticesubject"



  Scenario: Verify the client notification registration and verfiy the listing 
        # Given Launch the admin application
        # Given Login as admin user   
        And Click on the Notification managment link in the side menu and verify the page navigation
        And Click on the Add notice button
        And Click on the client checkbox
        And Enter the subject for "Client_Noticetitle"
        And Enter the Notice contents "Client_Noticesubject"
        And Click on Publish button
        And Click on confirm button
        And Verify the notice is listed and its contents with status "公開済" and "Client_Noticetitle" and "Client_Noticesubject"






  Scenario: Verify the draft notification registration and verfiy the listing 
        # Given Launch the admin application
        # Given Login as admin user   
        And Click on the Notification managment link in the side menu and verify the page navigation
        And Click on the Add notice button
        And Click on the client checkbox
        And Enter the subject for "Draft_Noticetitle"
        And Enter the Notice contents "Draft_Noticesubject"
        And Click on Draft button
        And Verify the notice is listed and its contents with status "下書き" and "Draft_Noticetitle" and "Draft_Noticesubject"






  Scenario: Verify the draft notice deletion from draft details page
        # Given Launch the admin application
        # Given Login as admin user
        And Click on the Project list in the side menu
        And Click on the Notification managment link in the side menu and verify the page navigation
        And CLick on the draft campaign "Draft_Noticetitle"
        And CLick on the delete button    
        And Click on confirm button
        And Verify that deleted draft message not listed "Draft_Noticetitle"




  Scenario: Verify the draft notice deletion from list
        # Given Launch the admin application
        # Given Login as admin user
        And Click on the Project list in the side menu
        And Click on the Notification managment link in the side menu and verify the page navigation
        And Click on the Add notice button
        And Click on the client checkbox
        And Enter the subject for "Draft_Noticetitle"
        And Enter the Notice contents "Draft_Noticesubject"
        And Click on Draft button
        And CLick on the delete button of the notice in list "Draft_Noticetitle"
        And Click on confirm button
        And Verify that deleted draft message not listed "Draft_Noticetitle" 










 Scenario: Verify the draft publish feature and verify the publish status
        # Given Launch the admin application
        # Given Login as admin user
        And Click on the Project list in the side menu
        And Click on the Notification managment link in the side menu and verify the page navigation
        And Click on the Add notice button
        And Click on the client checkbox
        And Enter the subject for "Draft_Noticetitle"
        And Enter the Notice contents "Draft_Noticesubject"
        And Click on Draft button
        And CLick on the draft campaign "Draft_Noticetitle"
        And Click on Publish button
        And Click on confirm button
        And Verify the notice is listed and its contents with status "公開済" and "Draft_Noticetitle" and "Draft_Noticesubject"




  Scenario: Verify the monitor notification is received at monitor side and  verify the contents  

          Given Open browser for "monitor1"
        And Launch the application for Agora for "monitor1"
        When Login as "monitor1" application
        Then Verify the top page navigation "monitor1"
        Then Click on the latest news link "monitor1" 
        Then Verify that the Monitor notice is listed "Monitor_Noticetitle" for "monitor1"
        Then Verify the details in the notice details page is "Monitor_Noticetitle" and "Monitor_Noticesubject" for "monitor1"



  Scenario: Verify the client notification is received at client side and  verify the contents  
    
    Given Launch the client application
        When Enter the client userid
        When Enter the client password
        And Click on login button
     And Accept already logged message
        And Verify the page navigation to the notice page
        And Verify the notice listed and click "Client_Noticetitle"
        And Verify the notice details "Client_Noticetitle" and "Client_Noticesubject"
    








      


  


