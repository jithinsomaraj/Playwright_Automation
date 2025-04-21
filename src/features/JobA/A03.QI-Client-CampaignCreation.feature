@jobA
@jobA0302187
Feature: Client_CampaignCreation
    @test
    @jobA03
    Scenario: Verify campaign creation and Create campaigns for Job B
        Given Launch the client application
        When Enter the client userid
        When Enter the client password
        And Click on login button
        And Accept already logged message
        Then Verify the client top page navigation
        And Navigate to the campaign list page
        And  Create a campaign "campaignTitle1"
        And Navigate to the campaign list page
        And  Create a campaign "campaignTitle2"
        And Navigate to the campaign list page
        And  Create a campaign "campaignTitle3"
        And Navigate to the campaign list page
        And  Create a campaign with basic attributes and survey for "campaignTitleBasic1"
    # And  Create a campaign with basic attributes and without survey for "campaignTitleBasic2"

    # ------------- mayoori code start--------------------

    # After job 2

    # Scenario: Login with a valid credentials
    #     Given Launch the monitor application as "Normal"
    #     When Enter the user name "monitor1"
    #     When Enter the password "monitor1"
    #     And Click on the login button

    # Scenario: Verify page navigation to top page
    #     Then Verify the project title for "campaignTitle5"
    #     Then Verify the project title for "campaignTitle6"
    #     Then Verify the project title for "campaignTitle7"

    # ------------- mayoori code end--------------------





    @jobAT
    Scenario: Create a campaign as draft
        Given Launch the client application
        When Login to client application
        Then Verify the client top page navigation
        And Navigate to the campaign list page
        When Click on the campaign creation button
        When Enter campaign title "campaignTitle5"
        And Click on the campaign draft button
        Then Verify campaign in the campaign list page "campaignTitle5"

        When Click on the campaign from campaign list "campaignTitle5"
        When Enter recruitment condition "recruitmentCondition"
        When Enter required monitor count "monitorCount"
        When Click on interview duration listbox
        And Select the interview duration from list "interviewDuration"
        When Click on the campaign creation schedule calendar
        When Select the interview schedule from date
        When Select the interview schedule To date
        # slot selection after 5 days from start date , 3 consecutive days will select , same timeslot of 10.00 AM
        # And Click on slot selection area
        And Select slot from slot selection area "0","3","08:00"
        When Disable survey details section
        And Accept survey disabled confirmation popup
        # And Click on campaign publish button
        And Click on campaign confirmation screen button
        Then Verify the campaign creation summary page has loaded
        And Click on campaign publish button
        And Accept the campaign creation confirmation popup
        Then Verify campaign in the campaign list page "campaignTitle5"


    Scenario: Verify the draft campaign deletion
        Given Launch the client application
        When Enter the client userid
        When Enter the client password
        And Click on login button
        And Accept already logged message

        Given Navigate to the campaign list page
        When Click on the campaign creation button
        When Enter campaign title "campaignTitle7"
        And Click on the campaign draft button
        Then Verify campaign in the campaign list page "campaignTitle7"

        Given Navigate to the campaign list page
        When Click on the delete button of drafted campaign "campaignTitle7"
        When Cancel the campaign deletion confirmation popup
        When Click on the delete button of drafted campaign "campaignTitle7"
        When Accept the campaign deletion confirmation popup
        Then Verify the campaign has removed from the list "campaignTitle7"

    @jobA03full
    Scenario: Create a campaign with full details
        Given Launch the client application
        When Login to client application
        Then Verify the client top page navigation


        # ---------------------------Campaign Creation with full details-------------------------------------------
        Given Navigate to the campaign list page
        And Click on the campaign creation button
        When Enter campaign title "campaignTitle6"
        When Enter recruitment condition "recruitmentCondition"
        When Enter NG condition "NGConditions"
        And Click on the NGindustry button
        And Select multiple ngindustries as group "メディア・広告・リサーチ業"
        And Select multiple ngindustries as group "金融・保険業"
        And Select multiple ngindustries as group "建設・不動産業"
        And Select multiple ngindustries as group "運送・輸送業"
        And Select multiple ngindustries as group "情報通信業"
        And Select multiple ngindustries as group "電気・ガス・熱供給・水道業"
        And Select multiple ngindustries as group "製造業"
        And Select multiple ngindustries as group "卸売・小売業"
        And Select multiple ngindustries as group "宿泊・飲食・サービス業"
        And Select multiple ngindustries as group "医療業"
        And Select multiple ngindustries as group "協同組合・教育関連・公務員"
        And Select NGindustries as individual "鉄鋼業"

        And Click on the NGindustry popup submit button
        When Enter required monitor count "monitorCount"
        When Click on interview duration listbox
        And Select the interview duration from list "interviewDuration"
        When Click on the campaign creation schedule calendar
        When Select the interview schedule from date
        When Select the interview schedule To date
        Then Verify maximum number of applicant
        # When Click on slot selection area
        # 	# slot selection after 5 days from start date , 3 consecutive days will select , same timeslot of 10.00 AM


        And Select slot from slot selection area "0","3","08.00"
        When Select question type as multichoice
        And Enter the options
        And Click on the additional question add button
        And Select question type as single choice
        And Enter the options
        And Click on the additional question add button
        And Select question type as descriptive type


        And Click on gender as "no answer" radio button
        # And Click on gender as "female" radio button
        # And Click on gender as "male" radio button
        And Select lower age as "18"
        And Select upper age as "90"
        And Select place of residence as "佐賀県"
        And Select profession as "学生"

        And Click on married status as "no answer" radio button
        # And Click on married status as "married" radio button
        # And Click on married status as "unmarried" radio button

        And Click on children status as "no answer" radio button
        # And Click on children status as "no" radio button
        # And Click on children status as "yes" radio button


        And Select lower house hold income as "200"
        And Select upper house hold income as "2000"
        And Select lower personal income as "200"
        And Select upper personal income as "2000"
        And Click on campaign confirmation screen button
        Then Verify the campaign creation summary page has loaded
        And Click on campaign publish button
        And Accept the campaign creation confirmation popup
        And Navigate to the campaign list page
        Then Verify campaign in the campaign list page "campaignTitle6"


    Scenario: Verify the mandatory field validations for campaign creation
        Given Launch the client application
        When Login to client application
        Then Verify the client top page navigation
        Given Navigate to the campaign list page
        And Click on the campaign creation button
        And Click on campaign confirmation screen button
        Then Verify campaign title mandatory validation message
        Then Recruitment condition mandatory validation message

        And Click on the NGindustry button
        And Select multiple ngindustries as group "建設・不動産業"
        And Click on the NGindustry popup submit button
        And Remove all selected NG industries
        Then Verify all the selected NG industries got removed

        When Enter required monitor count "monitorCount"
        When Click on interview duration listbox
        And Select the interview duration from list "interviewDuration"
        Then Verify the ticket required is correct
        Then Verify maximum number of applicant