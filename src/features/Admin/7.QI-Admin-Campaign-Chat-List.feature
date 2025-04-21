@adminchatlist

Feature: Admin Chat List
 Scenario: Verify the  page navigation
        Given Launch the admin application
        Given Login as admin user
        And Click on the Chat list in the side menu and verify the page navigation
      


 Scenario: Verify whether user can search for OK messages by applying filters and verify the data for message sent from client to monitor
        # Given Launch the admin application
        # Given Login as admin user
        And Click on the Project list in the side menu
        And Click on the Chat list in the side menu and verify the page navigation
        And Click on OK checkbox
        And Enter the message text as "MessagetextFromClientOK"
        And Enter the Customer name as "Customername"
        And Enter the campaign as "CampaignName"
        And Click on Search button
        And Verify the result displayed is "OK" and "MessagetextFromClientOK" and "Customername" and "CampaignName" and "Monitornickname"
     
      


    Scenario: Verify whether user can search for OK messages by applying filters and verify the data for message sent from monitor to client
        # Given Launch the admin application
        # Given Login as admin user
        And Click on the Project list in the side menu
        And Click on the Chat list in the side menu and verify the page navigation
        And Click on OK checkbox
        And Enter the message text as "MessagetextFromMonitorOK"
        And Enter the Monitor name as "Monitornickname"
        And Enter the campaign as "CampaignName"
        And Click on Search button
        And Verify the result displayed is "OK" and "MessagetextFromMonitorOK" and "Monitornickname" and "CampaignName" and "Customername"
     


 Scenario: Verify whether user can search for NG messages by applying filters and verify the data for message sent from client to monitor
        # Given Launch the admin application
        # Given Login as admin user
        And Click on the Project list in the side menu
        And Click on the Chat list in the side menu and verify the page navigation
        And Click on NG checkbox
        And Enter the message text as "ClientNGMessagecombined"
        And Enter the Customer name as "Customername"
        And Enter the campaign as "CampaignName"
        And Click on Search button
        And Verify the result displayed is "NG" and "ClientNGMessagecombined" and "Customername" and "CampaignName" and "Monitornickname"
       
      


    Scenario: Verify whether user can search for NG messages by applying filters and verify the data for message sent from monitor to client
        # Given Launch the admin application
        # Given Login as admin user
        And Click on the Project list in the side menu
        And Click on the Chat list in the side menu and verify the page navigation
        And Click on NG checkbox
        And Enter the message text as "MonitorNGMessagecombined"
        And Enter the Monitor name as "Monitornickname"
        And Enter the campaign as "CampaignName"
        And Click on Search button
        And Verify the result displayed is "NG" and "MonitorNGMessagecombined" and "Monitornickname" and "CampaignName" and "Customername"
       



Scenario: Verify whether user can search for OK messages by applying filters and verify the data for message received by monitor
        # Given Launch the admin application
        # Given Login as admin user
        And Click on the Project list in the side menu
        And Click on the Chat list in the side menu and verify the page navigation
        And Click on OK checkbox
        And Click on Receive radiobutton
        And Enter the message text as "MessagetextFromClientOK"
        And Enter the Monitor name as "Monitornickname"
        And Enter the campaign as "CampaignName"
        And Click on Search button
        And Verify the result displayed is "OK" and "MessagetextFromClientOK" and "Customername" and "CampaignName" and "Monitornickname"
     


    Scenario: Verify whether user can search for OK messages by applying filters and verify the data for message received by client
        # Given Launch the admin application
        # Given Login as admin user
        And Click on the Project list in the side menu
        And Click on the Chat list in the side menu and verify the page navigation
        And Click on OK checkbox
        And Click on Receive radiobutton
        And Enter the message text as "MessagetextFromMonitorOK"
        And Enter the Customer name as "Customername"
        And Enter the campaign as "CampaignName"
        And Click on Search button
        And Verify the result displayed is "OK" and "MessagetextFromMonitorOK" and "Monitornickname" and "CampaignName" and "Customername"



