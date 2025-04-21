import { BasePage } from '../../utils/BasePage';
import { Page } from '@playwright/test';
import ScenarioContext from '../../support/ScenarioContext';
import { readFromYamlFilePath } from '../../utils/YamlReader';



// import path from 'path';
// import { readFromYamlFilePath } from '../../utils/YamlReader';
// import * as fs from 'fs';
// import * as yaml from 'js-yaml';





export class AdminCampaignDetails extends BasePage {

    loc_Admin_CampaignId: string;
    loc_Admin_CampaigndetailsTitle: string;
    loc_Admin_CampaignDetails_CampaignTitle_Lbl: string;

    loc_Admin_CampaignDetails_CampaignCondition_Lnk: String;

    loc_Admin_CampaignDetails_CampaignDetailsPage_Lnk: String;
    loc_Admin_CampaignDetails_MonitorListTab_Lnk: String;
    loc_Admin_CampaignDetails_ConfirmedListTab_Lnk: String;
    loc_Admin_CampaignDetails_CampaignCondition_Lbl: string;
    loc_Admin_CampaignDetails_ExpandingOption_Lnk: string;
    loc_Admin_CampaignDetails_CampaignNGIndustries_Lbl: string;
    loc_Admin_CampaignDetails_NGCondition_Lbl: string;
    loc_Admin_CampaignDetails_CampaignDetailsInPopup_lbl: string;





    loc_Admin_CampaignDetails_CampaignDetailsPopup_lnk: string;
    loc_Admin_CampaignDetails_CampaignDetailsPopup_Heading_lbl: string;

    loc_Admin_CampaignDetails_ProjectTitle_lbl: string;





    loc_Admin_CampaignDetails_recruitmentCondition_lbl: string;
    loc_Admin_CampaignDetails_NgConditions_lbl: string;
    loc_Admin_CampaignDetails_monitorCountlbl: string;
    loc_Admin_CampaignDetails_interviewDuration_lbl: string;
    loc_Admin_CampaignDetails_Gender_lbl: string;

    loc_Admin_CampaignDetails_Age_lbl: string;
    loc_Admin_CampaignDetails_PlaceOfResidence_lbl: string;
    loc_Admin_CampaignDetails_MaritalStatus_lbl: string;
    loc_Admin_CampaignDetails_ChildrenStatus_lbl: string;
    loc_Admin_CampaignDetails_Profession_lbl: string;
    loc_Admin_CampaignDetails_PersonalAnnualIncome_lbl: string;
    loc_Admin_CampaignDetails_HouseholdIncome: string;
    loc_Admin_CampaignDetails_CampaignDetailsPopup_Close_Btn: string;
    loc_Admin_CampaignDetails_CampaignDetails_edit: string;
    loc_Admin_CampaignDetails_CampaignDetails_edit_titlename: string;
    loc_Admin_CampaignDetails_CampaignDetails_edit_submit: string;
    loc_Admin_CampaignDetails_CampaignDetails_edit_recruitconditions: string;
    loc_Admin_CampaignDetails_CampaignDetails_edit_NGconditions: string;




    loc_Admin_CampaignDetails_closemonitorrequiremnt: string;
    loc_Admin_CampaignDetails_openmonitorrequiremnt: string;
    loc_Admin_CampaignDetails_CloseCampaign: string;
    loc_Admin_CampaignDetails_openCampaign: string;

    loc_Admin_CampaignDetails_closemonitorrequiremnt_confirm: string

    // #=============================================================
    // video delivery

    loc_Admin_CampaignList_deliveryvideolink: string;
    readonly loc_Admin_VideoUpload_PageNavigation_Lnk: string;
    readonly loc_Admin_VideoUpload_CampaignName_Lbl: string;
    readonly loc_Admin_VideoUpload_CampaignDate_Lbl: string;
    readonly loc_Admin_VideoUpload_MonitorName_Lbl: string;
    // loc_Admin_VideoUpload_CampaignCampaignListPage_Lbl: Locator;
    readonly loc_Admin_VideoUpload_MonitorProfileDetails_Lbl: string;



    loc_Admin_CampaignDetails_MonitorCount_TblRow: string;
    loc_Admin_CampaignDetails_MonitorDelete_Btn: string;
    loc_Admin_CampaignDetails_COnfirm_Btn: string
    loc_Admin_CampaignDetails_MonitorSendOFF_Btn: string;
    loc_Admin_CampaignDetails_MonitorStatus_Lbl: string;
    loc_Admin_CampaignDetails_Monitorrecruit_Btn: string;
    loc_Admin_CampaignDetails_Campaignupdateconfirm: string;
    loc_Admin_CampaignCreation_SurveySection_EnabledOrDisabledToggle_Btn: string

    // loc_Client_CampaignDetails_SendOffButtonSection_Lbl: string;

    // ============================================================
    // Draft submit


    maleRadioButton: string;
    femaleRadioButton: string;
    noAnswerRadioButton: string;
    ageLowerDropdown: string;
    ageUpperDropdown: string;
    residenceButton: string;
    residenceValue: string;
    genderRadioButton: string;

    residenceConfirmationButton: string;

    professionButton: string;
    professionValue: string;
    professionConfirmationButton: string;
    marriedStatusRadioButton: string;

    childrenStatusRadioButton: string;
    householdLowerDropdown: string;
    householdUpperDropdown: string;
    personalIncomeLowerDropdown: string;
    personalIncomeUpperDropdown: string;
    loc_Monitor_Survey_Proceed_Btn: string;
    loc_Monitor_Survey_apply_Btn: string;



    readonly loc_Admin_CampaignDraft_Confirmation_Screen_Btn: string;
    readonly loc_Admin_CampaignDraftt_Publish_Btn: string;


    readonly loc_Admin_CampaignCreation_RecruitmentCondition_TxtBox: string;
    readonly loc_Admin_CampaignCreation_NGIndustry_Btn: string;
    readonly loc_Admin_CampaignCreation_NGIndustryPopup_SelectGroup_ChkBox: string;
    readonly loc_Admin_CampaignCreation_NGIndustryPopup_SelectIndividual_ChkBox: string;

    readonly loc_Admin_CampaignCreation_NGIndustryPopup_Submit_Btn: string;
    readonly loc_Admin_CampaignCreation_RequiredMonitorCount_Txt: string;

    readonly loc_Admin_CampaignCreation_InterviewDuration_LstBox: string;
    readonly loc_Admin_CampaignCreation_InterviewDuration_List_LstBox: string;
    readonly loc_Admin_CampaignCreation_RequiredTicket_Lbl: string;
    loc_Admin_CampaignCreation_InterviewScheduleFrom_Cal: string;
    loc_Admin_CampaignCreation_InterviewScheduleTo_Cal: string;
    readonly loc_Admin_CampaignCreation_MaximumCountOfApplicant_Lbl: string;
    readonly loc_Admin_CampaignCreation_SlotSelectionSection_Lbl: string;
    readonly loc_Admin_CampaignCreation_SelectSlot_Btn: string;
    readonly loc_Admin_CampaignCreation_CampaignCreationPopup_Btn: string;
    readonly loc_Admin_CampaignCreation_InterviewSchedule_Cal: string;


    loc_Admin_Income_DropdownValue_Opt: string;
    loc_Monitor_CampaignApplyConfirmationPopupSubmit_Btn: string;
    loc_Monitor_Survey_Applybutton_Enabled_Btn: string;
    loc_Monitor_Survey_RecruitmentCondition3_Option: string;
    loc_Monitor_Survey_RecruitmentCondition2_Option: string;
    loc_Monitor_Survey_RecruitmentCondition1_Option: string;
    loc_IndividualScheduleOffer_DifferentOffer_Monitor_Btn: string;

    loc_IndividualSchedule_Btn: string;
    loc_Monitor_TopPage_AppliedTab_Lnk: string;

    loc_Monitor_ScheduleOffering_ConfirmationPopupAccept_Btn: string;
    loc_Monitor_ScheduleOffering_Accept_radio_Btn: string;
    loc_Monitor_ScheduleOffering_EnabledAcceptButton_Btn: string;
    loc_Monitor_ScheduleOffering_AcknowledgementClose_Btn: string;
    loc_Client_CampaignCreation_ImplementationDate_lbl: string;
    loc_Client_CampaignCreation_ReleaseDate_lbl: string;
    loc_Client_CampaignCreation_MonitorCount_lbl: string;
    loc_Client_CampaignCreation_NGCondition_TxtBox: string;
    loc_Admin_CampaignDraftDaterangeClearIcon: string;
    loc_Admin_CampaigneditTitle: string;
    loc_Client_CampaignCreation_SurveySection_DisableConfirmationPopup_Btn: string;







    constructor(page3: Page) {
        super(page3);
        this.page = page3;


        this.loc_Admin_CampaigneditTitle = '募集案件の編集'
        this.loc_Admin_CampaignId = 'caseId0'
        this.loc_Admin_CampaigndetailsTitle = '//*[text()="案件詳細"]'
        this.loc_Admin_CampaignDetails_CampaignTitle_Lbl = "//*[@id='title'][(text()='CampaignTitle')]";
        this.loc_Admin_CampaignDetails_CampaignCondition_Lnk = '条件を詳しくみる';
        this.loc_Admin_CampaignDetails_CampaignDetailsPage_Lnk = '案件詳細を確認';
        this.loc_Admin_CampaignDetails_MonitorListTab_Lnk = 'MuiTab0';
        this.loc_Admin_CampaignDetails_ConfirmedListTab_Lnk = 'MuiTab1';
        this.loc_Admin_CampaignDetails_CampaignCondition_Lbl = '//*[@id="includeCondition"]/pre[text()="condition"]';
        this.loc_Admin_CampaignDetails_ExpandingOption_Lnk = '条件を詳しくみる';
        this.loc_Admin_CampaignDetails_CampaignNGIndustries_Lbl = '//*[@id="ngIndustries"][text()="NGIndustries"]';
        this.loc_Admin_CampaignDetails_NGCondition_Lbl = '//*[@id="excludeCondition"]/pre[(text()="NGconditionstoreplace")]';
        this.loc_Admin_CampaignDetails_CampaignDetailsInPopup_lbl = '(//div[(text()="field")]/following::div/div[(text()="Value")])[1]';
        this.loc_Admin_CampaignDetails_Monitorrecruit_Btn = '応募中に変更';
        this.loc_Admin_CampaignDetails_CampaignDetailsPopup_lnk = '//*[@id="projectDetails"]';
        this.loc_Admin_CampaignDetails_CampaignDetailsPopup_Heading_lbl = '#alert-dialog-title';
        this.loc_Admin_CampaignDetails_ProjectTitle_lbl = '(//div[(text()="募集タイトル")]/following::*[text()="projectTitle"])[1]'
        this.loc_Admin_CampaignDetails_recruitmentCondition_lbl = '//div[(text()="募集条件")]/following::div[2]/child::div[1]/pre[1][text()="recruitmentCondition"]'

        this.loc_Admin_CampaignCreation_SurveySection_EnabledOrDisabledToggle_Btn = 'campaign.creation.form.survey-creation'



        this.loc_Admin_CampaignDetails_NgConditions_lbl = '//div[(text()="NG条件")]/following::div[2]/child::pre[1][text()="NG Conditions"]';
        this.loc_Admin_CampaignDetails_monitorCountlbl = '//div[(text()="募集人数")]/following::*[text()="monitorCount"]';
        this.loc_Admin_CampaignDetails_interviewDuration_lbl = '(//div[(text()="インタビュー実施時間")]/following::*[text()="interviewDuration"])[1]';
        this.loc_Admin_CampaignDetails_Gender_lbl = '(//div[(text()="性別")]/following::*[text()="Gender"])[1]';
        this.loc_Admin_CampaignDetails_Age_lbl = '(//div[(text()="年齢")]/following::*[text()="Age歳"])[1]';
        this.loc_Admin_CampaignDetails_PlaceOfResidence_lbl = '//div[(text()="居住地")]/following::div[2][text()="PlaceOfResidence"]';
        this.loc_Admin_CampaignDetails_MaritalStatus_lbl = '//div[(text()="未既婚")]/following::*[text()="MaritalStatus"]';
        this.loc_Admin_CampaignDetails_ChildrenStatus_lbl = '//div[(text()="子供の有無")]/following::*[text()="ChildrenStatus"]';
        this.loc_Admin_CampaignDetails_Profession_lbl = '//div[(text()="職業")]/following::*[text()="Profession"]';
        this.loc_Admin_CampaignDetails_HouseholdIncome = '//div[(text()="世帯年収")]/following::*[text()="HouseholdIncome万円"][1]';
        this.loc_Admin_CampaignDetails_PersonalAnnualIncome_lbl = '//div[(text()="個人年収")]/following::*[text()="PersonalAnnualIncome万円"][1]';
        this.loc_Admin_CampaignDetails_CampaignDetailsPopup_Close_Btn = 'modal-onAgree'
        this.loc_Admin_CampaignDetails_COnfirm_Btn = 'modal-onAgree'
        this.loc_Admin_CampaignDetails_CampaignDetails_edit = '編集'
        this.loc_Admin_CampaignDetails_CampaignDetails_edit_titlename = 'interview.section1.title-placeholder'
        this.loc_Admin_CampaignDetails_CampaignDetails_edit_recruitconditions = 'interview.section1.conditions-placeholder'
        this.loc_Admin_CampaignDetails_CampaignDetails_edit_NGconditions = 'interview.section1.exclusion-placeholder'
        this.loc_Admin_CampaignDetails_CampaignDetails_edit_submit = '公開する'
        this.loc_Admin_CampaignDetails_closemonitorrequiremnt = 'モニタ募集終了'
        this.loc_Admin_CampaignDetails_openmonitorrequiremnt = 'モニタ募集再'
        this.loc_Admin_CampaignDetails_CloseCampaign = '案件終了'
        this.loc_Admin_CampaignDetails_openCampaign = '案件再開'
        this.loc_Admin_CampaignDetails_MonitorStatus_Lbl = "//*[(text()='Monitor')]/parent::*/preceding-sibling::td[2]//button[(text()='Status')]";
        this.loc_Admin_CampaignDetails_closemonitorrequiremnt_confirm = 'modal-onAgree'
        this.loc_Admin_CampaignDetails_Campaignupdateconfirm = '編集内容を保存する';
        this.loc_Client_CampaignCreation_SurveySection_DisableConfirmationPopup_Btn = 'はい'

        //*[text()='モニタ募集終了']

        this.loc_Admin_CampaignList_deliveryvideolink = '0'
        this.loc_Admin_VideoUpload_PageNavigation_Lnk = "//*[contains(@data-testid,'titles')]/div[text()='CampaignTitle']/../following-sibling::td/div[text()='納品動画を確認']";
        this.loc_Admin_VideoUpload_CampaignName_Lbl = "//*[@id='title'][text()='CampaignTitle']";
        this.loc_Admin_VideoUpload_CampaignDate_Lbl = "//*[text()='MonitorName']/../following-sibling::div/div/div[text()='CampaignDate']";
        this.loc_Admin_VideoUpload_MonitorName_Lbl = "//div/div/div[text()='CampaignDate']/../../preceding-sibling::div/div[text()='MonitorName']";
        // this.loc_Admin_VideoUpload_CampaignCampaignListPage_Lbl = page3.locator("//main//div[text()='インタビュー動画一覧']",);
        // this.loc_Admin_VideoUpload_MonitorProfileDetails_Lbl = "(//div[(text()='MonitorAttribute')]/following::div/div[(text()='Value')]";
        this.loc_Admin_VideoUpload_MonitorProfileDetails_Lbl = '//*[(text()="MonitorAttribute")]/following::div[1]/child::div[1][contains(text(),"Value")]';
        this.loc_Admin_CampaignDetails_MonitorCount_TblRow = '//*[@role="tabpanel"]//tbody/tr' // can't change
        this.loc_Admin_CampaignDetails_MonitorDelete_Btn = '削除';
        this.loc_Admin_CampaignDetails_MonitorSendOFF_Btn = 'sendoff-button';

        // this.loc_Admin_CampaignDetails_SendOffButtonSection_Lbl = '人のモニタを選択中';




        // Draft submit
        this.loc_Admin_CampaignDraftDaterangeClearIcon = 'ClearIcon'
        this.loc_Admin_CampaignDraftt_Publish_Btn = 'submit-form';
        this.loc_Admin_CampaignDraft_Confirmation_Screen_Btn = 'publish-button'
        this.loc_Admin_CampaignCreation_RecruitmentCondition_TxtBox = 'interview.section1.conditions-placeholder'
        this.loc_Admin_CampaignCreation_NGIndustry_Btn = 'NG業種を選択'
        this.loc_Admin_CampaignCreation_NGIndustryPopup_SelectGroup_ChkBox =
            '//input[@name="IndustryGroup"][not(@value)]';
        this.loc_Admin_CampaignCreation_NGIndustryPopup_SelectIndividual_ChkBox =
            '//input[@name="IndustryName"][@value]';
        this.loc_Admin_CampaignCreation_NGIndustryPopup_Submit_Btn = '設定'
        this.loc_Admin_CampaignCreation_RequiredMonitorCount_Txt = 'interview.section2.monitorscount'

        // this.loc_Admin_CampaignCreation_InterviewDuration_LstBox = page3.locator(
        //   '[aria-labelledby="mui-component-select-duration"]',
        // );
        this.loc_Admin_CampaignCreation_InterviewDuration_LstBox = '選択してください。'
        this.loc_Admin_CampaignCreation_InterviewDuration_List_LstBox =
            '//div/ul/li[text()="InterviewDuration 分"]';
        this.loc_Admin_CampaignCreation_RequiredTicket_Lbl =
            '//*[text()="必要なチケット数："]/../div[2]/div[text()="RequiredTicket"]';
        this.loc_Admin_CampaignCreation_InterviewSchedule_Cal =
            '期間を選択してください'
        this.loc_Admin_CampaignCreation_InterviewScheduleFrom_Cal =
            '(//*[@role="presentation"])[1]//*[text()="FromDate"]';
        this.loc_Admin_CampaignCreation_InterviewScheduleTo_Cal =
            '(//*[@role="presentation"])[2]//*[text()="ToDate"]';
        this.loc_Admin_CampaignCreation_MaximumCountOfApplicant_Lbl =
            '//*[text()="残り選択可能数："]/../div[2]/div[text()="MaximumApplicantCount"]';
        this.loc_Admin_CampaignCreation_SlotSelectionSection_Lbl = '上記の項目を全て入力すると設定可能になります'
        this.loc_Admin_CampaignCreation_SelectSlot_Btn = '[id="StartDate-StartTime"]';
        this.loc_Admin_CampaignCreation_CampaignCreationPopup_Btn = 'campaign-create'






        //  this.loc_Admin_CampaignCreation_FirstOneFromSelectedNGIndustry_Cancel_Btn =page.getByTestId('CancelIcon')
        this.maleRadioButton = '//input[@type="radio"][@value="1"][@name="gender"]';
        this.femaleRadioButton = '//input[@type="radio"][@value="2"][@name="gender"]';
        this.genderRadioButton = '//*[@name="gender"][@value="samplevalue"]';
        this.marriedStatusRadioButton = '//*[@name="married"][@value="samplevalue"]';
        this.noAnswerRadioButton = '//input[@type="radio"][@value="3"][@name="gender"]';
        //not able to change the age button xpath
        this.ageLowerDropdown = "//div[@id='mui-component-select-age.lower']"
        this.ageUpperDropdown = "//div[@id='mui-component-select-age.upper']"
        this.residenceButton = '居住地を選択'
        this.residenceValue = "input[name='areaValue']";
        this.residenceConfirmationButton = '設定'
        this.professionButton = '職業を選択'
        this.professionValue = "input[name='professionValue']";
        this.professionConfirmationButton = '設定'

        this.childrenStatusRadioButton =
            '//*[@name="children"][@value="samplevalue"]'


        this.householdLowerDropdown = "//div[@id='mui-component-select-householdIncome.lower']";
        this.householdUpperDropdown = "//div[@id='mui-component-select-householdIncome.upper']";
        this.personalIncomeLowerDropdown = "//div[@id='mui-component-select-personalIncome.lower']";
        this.personalIncomeUpperDropdown = "//div[@id='mui-component-select-personalIncome.upper']";
        this.loc_Admin_Income_DropdownValue_Opt = "[data-value='Income']";
        this.loc_Monitor_Survey_Proceed_Btn =
            '//button[contains(text(),"応募画面に進")]'


        this.loc_Monitor_Survey_apply_Btn = "//div/button[text()='回答する']";
        this.loc_Monitor_CampaignApplyConfirmationPopupSubmit_Btn =
            "[id = 'confirmation-agreeButton']",


            this.loc_Monitor_Survey_Applybutton_Enabled_Btn =
            "//button[text()='応募する' and not(@disabled)]";

        this.loc_Monitor_Survey_RecruitmentCondition3_Option =
            '(//span[(text()="承諾する")])[2]';

        this.loc_Monitor_Survey_RecruitmentCondition2_Option =
            '(//span[(text()="承諾する")])[1]';


        this.loc_Monitor_Survey_RecruitmentCondition1_Option =
            '//span[(text()="上記の条件を満たしています")]/preceding-sibling::div//input';
        this.loc_IndividualScheduleOffer_DifferentOffer_Monitor_Btn = "//div[(text()='NickName')]";

        this.loc_IndividualSchedule_Btn = '//*[@id="slotarea"]/div[2]/label/div/span/input';
        this.loc_Monitor_TopPage_AppliedTab_Lnk = '//div[text()="応募済"]';

        this.loc_Monitor_ScheduleOffering_ConfirmationPopupAccept_Btn = '[id="confirmation-agreeButton"]';
        this.loc_Monitor_ScheduleOffering_AcknowledgementClose_Btn = '[id="confirmation-agreeButton"]';
        this.loc_Monitor_ScheduleOffering_Accept_radio_Btn = '(//*[@name="slot-0"])[1]'
        this.loc_Monitor_ScheduleOffering_EnabledAcceptButton_Btn = "//div/button[text()='日程を回答する']";
        this.loc_Client_CampaignCreation_ImplementationDate_lbl = "//td[text()='title']/following::*[text()='date'][1]"
        this.loc_Client_CampaignCreation_ReleaseDate_lbl = "//td[text()='title']/following::td[text()='date'][1]"
        this.loc_Client_CampaignCreation_MonitorCount_lbl = "//td[text()='title']/following-sibling::td[text()='count'][1]"
        this.loc_Client_CampaignCreation_NGCondition_TxtBox = '仕事で使用するPCを購入した人';


    }
    public async Verifypagetitle() {
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByText(this.loc_Admin_CampaigneditTitle)
        await this.locatorShouldBePresent(locator);
    }

    public async clickOnCampaignID() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const campaignID = await page3.getByTestId(this.loc_Admin_CampaignId);
        await campaignID.click();

    }


    public async VerifyCampaignDetailsTitle() {
        const page3 = ScenarioContext.get('NewTab');
        const title = await page3.locator(this.loc_Admin_CampaigndetailsTitle);
        await this.locatorShouldBePresent(title);
    }


    public async adminCampaignDetails_VerifyCampaignTitle(campaignTitle: string) {
        const page3 = ScenarioContext.get('NewTab');
        const title = readFromYamlFilePath('AdminCampaignData')[campaignTitle];
        const campaignbtn = await page3.locator(this.loc_Admin_CampaignDetails_CampaignTitle_Lbl.replace('CampaignTitle', title));
        await this.locatorShouldBePresent(campaignbtn);
    }


    public async adminCampaignDetails_VerifyCamapaignConditionSection() {
        const page3 = ScenarioContext.get('NewTab');
        const element = await page3.getByText(this.loc_Admin_CampaignDetails_CampaignCondition_Lnk);
        await this.locatorShouldBePresent(element);
    }


    public async adminCampaignDetails_VerifyCampaignDetailsPageLink() {
        const page3 = ScenarioContext.get('NewTab');
        const element = await page3.getByText(this.loc_Admin_CampaignDetails_CampaignDetailsPage_Lnk);
        await this.locatorShouldBePresent(element);
    }

    public async adminCampaignDetails_VerifyMonitorList() {
        const page3 = ScenarioContext.get('NewTab');
        const element = await page3.getByTestId(this.loc_Admin_CampaignDetails_MonitorListTab_Lnk);
        await this.locatorShouldBePresent(element);
    }

    public async adminCampaignDetails_VerifyConfirmedMonitorListTab() {
        const page3 = ScenarioContext.get('NewTab');
        const element = await page3.getByTestId(this.loc_Admin_CampaignDetails_ConfirmedListTab_Lnk);
        await this.locatorShouldBePresent(element);
    }

    public async expandCampaignCondition() {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(2);
        await page3.getByText(this.loc_Admin_CampaignDetails_ExpandingOption_Lnk).click();
    }

    public async verifyCampaignCondition(CampaignConditionValue: string) {
        const page3 = ScenarioContext.get('NewTab');
        const condition = readFromYamlFilePath('AdminCampaignData')[CampaignConditionValue];
        const locator = await page3.locator(this.loc_Admin_CampaignDetails_CampaignCondition_Lbl.replace('condition', condition));
        console.log(locator);
        await this.locatorShouldBePresent(locator);
    }


    public async verifyNGCondition(NGConditions: string) {
        const page3 = ScenarioContext.get('NewTab');
        const condition = readFromYamlFilePath('AdminCampaignData')[NGConditions]
        console.log(condition)
        const locator = await page3.locator(this.loc_Admin_CampaignDetails_NGCondition_Lbl.replace('NGconditionstoreplace', condition));
        console.log(locator);
        await this.locatorShouldBePresent(locator);
    }

    public async verifyNGIndustries(NGIndustry: string) {
        const page3 = ScenarioContext.get('NewTab');
        const industry = readFromYamlFilePath('AdminCampaignData')[NGIndustry]
        const locator = await page3.locator(this.loc_Admin_CampaignDetails_CampaignNGIndustries_Lbl.replace('NGIndustries', industry));
        console.log(locator);
        await this.locatorShouldBePresent(locator);

    }


    public async loadTheCampaignDetailsPopup() {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(3);
        await page3.locator(this.loc_Admin_CampaignDetails_CampaignDetailsPopup_lnk).click();
    }

    public async verifyTheCampaignDetailsPopupLoaded() {
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.locator(this.loc_Admin_CampaignDetails_CampaignDetailsPopup_Heading_lbl);
        await this.locatorShouldBePresent(locator);
    }

    public async verifyTheCampaignDetails_ProjectTitle(campaignName: string) {
        const page3 = ScenarioContext.get('NewTab');
        const project_Title = readFromYamlFilePath('AdminCampaignData')[campaignName];
        const locator = await page3.locator(this.loc_Admin_CampaignDetails_ProjectTitle_lbl.replace('projectTitle', project_Title));
        await this.locatorShouldBePresent(locator);
    }




    public async verifyTheCampaignDetails_recruitmentCondition() {
        const page3 = ScenarioContext.get('NewTab');
        const recruitment_Condition = readFromYamlFilePath('AdminCampaignData')['recruitmentCondition'];
        const locator = page3.locator(this.loc_Admin_CampaignDetails_recruitmentCondition_lbl.replace('recruitmentCondition', recruitment_Condition));
        console.log("locator: " + locator);
        await this.locatorShouldBePresent(locator);
    }
    public async verifyTheCampaignDetails_NgConditions() {
        const page3 = ScenarioContext.get('NewTab');
        const NgConditions = readFromYamlFilePath('AdminCampaignData')['NGConditions'];
        const locator = page3.locator(this.loc_Admin_CampaignDetails_NgConditions_lbl.replace('NG Conditions', NgConditions));
        console.log("locator: " + locator);
        await this.locatorShouldBePresent(locator);
    }




    public async verifyTheCampaignDetails_monitorCount() {
        const page3 = ScenarioContext.get('NewTab');
        const monitorCount = readFromYamlFilePath('AdminCampaignData')['monitorCount'];
        const locator = page3.locator(this.loc_Admin_CampaignDetails_monitorCountlbl.replace('monitorCount', monitorCount));
        console.log("locator: " + locator);
        await this.locatorShouldBePresent(locator);
    }
    public async verifyTheCampaignDetails_interviewDuration() {
        const page3 = ScenarioContext.get('NewTab');
        const interviewDuration = readFromYamlFilePath('AdminCampaignData')['interviewDuration'];
        const locator = page3.locator(this.loc_Admin_CampaignDetails_interviewDuration_lbl.replace('interviewDuration', interviewDuration));
        console.log("locator: " + locator);
        await this.locatorShouldBePresent(locator);
    }
    public async verifyTheCampaignDetails_Gender() {
        const page3 = ScenarioContext.get('NewTab');
        const Gender = readFromYamlFilePath('AdminCampaignData')['Gender'];
        const locator = page3.locator(this.loc_Admin_CampaignDetails_Gender_lbl.replace('Gender', Gender));
        console.log("locator: " + locator);
        await this.locatorShouldBePresent(locator);
    }

    public async verifyTheCampaignDetails_LowerAge() {
        const page3 = ScenarioContext.get('NewTab');
        const LowerAge = readFromYamlFilePath('AdminCampaignData')['LowerAge'];
        const locator = page3.locator(this.loc_Admin_CampaignDetails_Age_lbl.replace('Age', LowerAge));
        console.log("locator: " + locator);
        await this.locatorShouldBePresent(locator);
    }
    public async verifyTheCampaignDetails_UpperAge() {
        const page3 = ScenarioContext.get('NewTab');
        const UpperAge = readFromYamlFilePath('AdminCampaignData')['UpperAge'];
        const locator = page3.locator(this.loc_Admin_CampaignDetails_Age_lbl.replace('Age', UpperAge));
        console.log("locator: " + locator);
        await this.locatorShouldBePresent(locator);
    }
    public async verifyTheCampaignDetails_PlaceOfResidence() {
        const page3 = ScenarioContext.get('NewTab');
        const PlaceOfResidence = readFromYamlFilePath('AdminCampaignData')['Place of residence'];
        const locator = page3.locator(this.loc_Admin_CampaignDetails_PlaceOfResidence_lbl.replace('PlaceOfResidence', PlaceOfResidence));
        console.log("locator: " + locator);
        await this.locatorShouldBePresent(locator);
    }
    public async verifyTheCampaignDetails_MaritalStatus() {
        const page3 = ScenarioContext.get('NewTab');
        const MaritalStatus = readFromYamlFilePath('AdminCampaignData')['Marital status'];
        const locator = page3.locator(this.loc_Admin_CampaignDetails_MaritalStatus_lbl.replace('MaritalStatus', MaritalStatus));
        console.log("locator: " + locator);
        await this.locatorShouldBePresent(locator);
    }
    public async verifyTheCampaignDetails_ChildrenStatus() {
        const page3 = ScenarioContext.get('NewTab');
        const ChildrenStatus = readFromYamlFilePath('AdminCampaignData')['ChildrenStatus'];
        const locator = page3.locator(this.loc_Admin_CampaignDetails_ChildrenStatus_lbl.replace('ChildrenStatus', ChildrenStatus));
        console.log("locator: " + locator);
        await this.locatorShouldBePresent(locator);
    }
    public async verifyTheCampaignDetails_Profession() {
        const page3 = ScenarioContext.get('NewTab');
        const Profession = readFromYamlFilePath('AdminCampaignData')['Profession'];
        const locator = page3.locator(this.loc_Admin_CampaignDetails_Profession_lbl.replace('Profession', Profession));
        console.log("locator: " + locator);
        await this.locatorShouldBePresent(locator);
    }
    public async verifyTheCampaignDetails_LowerPersonalAnnualIncome() {
        const page3 = ScenarioContext.get('NewTab');
        const LowerPersonalAnnualIncome = readFromYamlFilePath('AdminCampaignData')['LowerPersonalAnnualIncome'];
        const locator = page3.locator(this.loc_Admin_CampaignDetails_PersonalAnnualIncome_lbl.replace('PersonalAnnualIncome', LowerPersonalAnnualIncome));
        this.waitForSecond(5);
        console.log("locator: " + locator);
        await this.locatorShouldBePresent(locator);
    }

    public async verifyTheCampaignDetails_UpperPersonalAnnualIncome() {
        const page3 = ScenarioContext.get('NewTab');
        const UpperPersonalAnnualIncome = readFromYamlFilePath('AdminCampaignData')['UpperPersonalAnnualIncome'];
        const locator = page3.locator(this.loc_Admin_CampaignDetails_PersonalAnnualIncome_lbl.replace('PersonalAnnualIncome', UpperPersonalAnnualIncome));
        this.waitForSecond(5);
        console.log("locator: " + locator);
        await this.locatorShouldBePresent(locator);
    }
    public async verifyTheCampaignDetails_LowerHouseholdIncome() {

        const page3 = ScenarioContext.get('NewTab');
        const LowerHouseholdIncome = readFromYamlFilePath('AdminCampaignData')['LowerHouseholdIncome'];
        const locator = page3.locator(this.loc_Admin_CampaignDetails_HouseholdIncome.replace('HouseholdIncome', LowerHouseholdIncome));
        console.log("locator: " + locator);
        await this.locatorShouldBePresent(locator);
    }
    public async verifyTheCampaignDetails_UpperHouseholdIncome() {
        const page3 = ScenarioContext.get('NewTab');
        const UpperHouseholdIncome = readFromYamlFilePath('AdminCampaignData')['UpperHouseholdIncome'];
        const locator = page3.locator(this.loc_Admin_CampaignDetails_HouseholdIncome.replace('HouseholdIncome', UpperHouseholdIncome));
        console.log("locator: " + locator);
        await this.locatorShouldBePresent(locator);
    }


    public async closeTheCampaignDetailsPopup() {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(2);
        await page3.getByTestId(this.loc_Admin_CampaignDetails_CampaignDetailsPopup_Close_Btn).click();
    }



    public async editCampaign() {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        await page3.getByText(this.loc_Admin_CampaignDetails_CampaignDetails_edit).click();
    }


    public async entercampaigneditname(campaignName: string) {
        const page3 = ScenarioContext.get('NewTab');
        const campaignname = readFromYamlFilePath('AdminCampaignData')[campaignName];
        const locator = page3.getByTestId(this.loc_Admin_CampaignDetails_CampaignDetails_edit_titlename);
        await locator.click();
        await locator.fill('');
        await locator.fill(campaignname);
    }

    public async enterrecruitmentconditionedit(updatedrecruitmentCondition: string) {
        const page3 = ScenarioContext.get('NewTab');
        const recruitment = readFromYamlFilePath('AdminCampaignData')[updatedrecruitmentCondition];
        const locator = page3.getByTestId(this.loc_Admin_CampaignDetails_CampaignDetails_edit_recruitconditions);
        await locator.click();
        await locator.fill('');
        await locator.fill(recruitment);
    }

    public async enterNGIndustriesedit(updatedNGConditions: string) {
        const page3 = ScenarioContext.get('NewTab');
        const NGconditions = readFromYamlFilePath('AdminCampaignData')[updatedNGConditions];
        const locator = page3.getByTestId(this.loc_Admin_CampaignDetails_CampaignDetails_edit_NGconditions);
        await locator.click();
        await locator.fill('');
        await locator.fill(NGconditions);
    }

    public async confirmupdate() {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        await page3.getByText(this.loc_Admin_CampaignDetails_Campaignupdateconfirm).click();
    }




    public async editCampaignsubmit() {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        await page3.getByText(this.loc_Admin_CampaignDetails_CampaignDetails_edit_submit).click();

    }


    public async clickmonitorrecruitclose() {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        await page3.getByText(this.loc_Admin_CampaignDetails_closemonitorrequiremnt).click();

    }

    public async clickmonitorrecruitcloseconfirm() {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        await page3.getByTestId(this.loc_Admin_CampaignDetails_closemonitorrequiremnt_confirm).click();
        const locator = await page3.getByText(this.loc_Admin_CampaignDetails_openmonitorrequiremnt);
        await this.locatorShouldBePresent(locator);


    }


    public async clickmonitorrecruitopen() {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        await page3.getByText(this.loc_Admin_CampaignDetails_openmonitorrequiremnt).click();

    }

    public async clickmonitorrecruitOpenConfirm() {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        await page3.getByTestId(this.loc_Admin_CampaignDetails_closemonitorrequiremnt_confirm).click();
        const locator = await page3.getByText(this.loc_Admin_CampaignDetails_closemonitorrequiremnt);
        await this.locatorShouldBePresent(locator);


    }




    public async clickcampaignclose() {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        await page3.getByText(this.loc_Admin_CampaignDetails_CloseCampaign).click();

    }

    public async clickcampaigncloseconfirm() {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        await page3.getByTestId(this.loc_Admin_CampaignDetails_closemonitorrequiremnt_confirm).click();
        const locator = await page3.getByText(this.loc_Admin_CampaignDetails_openCampaign);
        await this.locatorShouldBePresent(locator);


    }


    public async clickcampaignopen() {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        await page3.getByText(this.loc_Admin_CampaignDetails_openCampaign).click();

    }

    public async clickcampaignOpenConfirm() {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        await page3.getByTestId(this.loc_Admin_CampaignDetails_closemonitorrequiremnt_confirm).click();
        const locator = await page3.getByText(this.loc_Admin_CampaignDetails_CloseCampaign);
        await this.locatorShouldBePresent(locator);



    }







    // ==================================================================================================================================

    public async clickdeliverylink() {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        await page3.getByTestId(this.loc_Admin_CampaignList_deliveryvideolink).click();
    }


    public async verifyTheCampaignTitle(campaignTitle: string) {
        const page3 = ScenarioContext.get('NewTab');
        const campaignName = readFromYamlFilePath('AdminCampaignData')[campaignTitle];
        const locator = await page3.locator(this.loc_Admin_VideoUpload_CampaignName_Lbl.replace('CampaignTitle', campaignName));
        console.log(locator);
        await this.locatorShouldBePresent(locator);
    }

    public async verifyTheCampaignDate(campaignDate: string, monitorName: string) {
        const page3 = ScenarioContext.get('NewTab');
        const Monitorname = readFromYamlFilePath('AdminCampaignData')[monitorName];
        const CampaignDate = readFromYamlFilePath('AdminCampaignData')[campaignDate];
        const locator = await page3.locator(this.loc_Admin_VideoUpload_CampaignDate_Lbl.replace('MonitorName', Monitorname).replace('CampaignDate', CampaignDate));
        console.log(locator);
        await this.locatorShouldBePresent(locator);
    }

    public async verifyTheMonitorName(campaignDate: string, monitorName: string) {
        const page3 = ScenarioContext.get('NewTab');
        const Monitorname = readFromYamlFilePath('AdminCampaignData')[monitorName];
        const CampaignDate = readFromYamlFilePath('AdminCampaignData')[campaignDate];
        const locator = await page3.locator(this.loc_Admin_VideoUpload_MonitorName_Lbl.replace('MonitorName', Monitorname).replace('CampaignDate', CampaignDate));
        console.log(locator);
        await this.locatorShouldBePresent(locator);
    }
    public async verifyTheMonitorProfileDetails(monitorAttribute: string, value: string) {
        const page3 = ScenarioContext.get('NewTab');
        const MonitorAttribute = readFromYamlFilePath('AdminCampaignData')[monitorAttribute];
        const Value = readFromYamlFilePath('AdminCampaignData')[value];

        // const a = (this.loc_Admin_VideoUpload_MonitorProfileDetails_Lbl.replace('MonitorAttribute', MonitorAttribute).replace('Value', Value));
        const locator = await page3.locator(this.loc_Admin_VideoUpload_MonitorProfileDetails_Lbl.replace('MonitorAttribute', MonitorAttribute).replace('Value', Value));
        console.log(locator);
        // console.log(a);

        await this.locatorShouldBePresent(locator);
    }


    public async selectMonitorFromTheList(nickName: string) {
        await this.waitForSecond(3);
        const page3 = ScenarioContext.get('NewTab');
        const locator1 = await page3.locator(this.loc_Admin_CampaignDetails_MonitorCount_TblRow);
        console.log(locator1);
        const count = await locator1.count();

        console.log(nickName + '  count :' + count);
        for (let i = 2; i <= count; i++) {
            const locator = await page3.locator('//tbody/tr[' + i + ']/td[4]/div');
            console.log(locator);
            console.log(await locator.innerText());
            if ((await locator.innerText()) == nickName) {
                console.log(nickName + '  count :' + i);
                const locator = await page3.locator('//tbody/tr[' + i + ']/td[1]//input');
                await locator.click();
                i = count + 1;
            }
        }

    }





    public async verifymonitordeletebutton() {
        await this.waitForSecond(2);
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByText(this.loc_Admin_CampaignDetails_MonitorDelete_Btn);
        console.log(locator);
        await this.locatorShouldBePresent(locator);
    }

    public async clickmonitordeletebutton() {
        await this.waitForSecond(2);
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByText(this.loc_Admin_CampaignDetails_MonitorDelete_Btn);
        await locator.click();
    }



    public async clickconfirmbutton() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await page3.getByTestId(this.loc_Admin_CampaignDetails_COnfirm_Btn).click();

    }


    public async verifymonitordeletedisable() {
        await this.waitForSecond(3);
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByText(this.loc_Admin_CampaignDetails_MonitorDelete_Btn);
        await locator.isDisabled();

    }

    public async verifymonitorSENDOFFbutton() {
        await this.waitForSecond(2);
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByTestId(this.loc_Admin_CampaignDetails_MonitorSendOFF_Btn);
        console.log(locator);
        await this.locatorShouldBePresent(locator);
    }

    public async clickmonitorSendOFFbutton() {
        await this.waitForSecond(2);
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByTestId(this.loc_Admin_CampaignDetails_MonitorSendOFF_Btn);
        await locator.click();
    }


    public async verifyTheMonitorStatus(monitor: string, status: string) {


        const page3 = ScenarioContext.get('NewTab');
        console.log(
            'Locator : ' +
            this.loc_Admin_CampaignDetails_MonitorStatus_Lbl
                .replace('Monitor', monitor)
                .replace('Status', status),
        );

        const locator = await page3.locator(
            this.loc_Admin_CampaignDetails_MonitorStatus_Lbl
                .replace('Monitor', monitor)
                .replace('Status', status),
        );
        await this.locatorShouldBePresent(locator);
    }



    public async verifymonitorrecruitbutton() {
        await this.waitForSecond(2);
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByText(this.loc_Admin_CampaignDetails_Monitorrecruit_Btn);
        console.log(locator);
        await this.locatorShouldBePresent(locator);
    }

    public async clickrecruitbutton() {
        await this.waitForSecond(2);
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByText(this.loc_Admin_CampaignDetails_Monitorrecruit_Btn);
        await locator.click();
    }


    public async enterRecruitmentCondition(recruitmentCondition: string) {
        const page3 = ScenarioContext.get('NewTab');
        const recruitment_Condition = readFromYamlFilePath('CampaignData')[recruitmentCondition];
        this.waitForSecond(3);
        const locator = await page3.getByTestId(this.loc_Admin_CampaignCreation_RecruitmentCondition_TxtBox);
        console.log(locator);
        await locator.click();
        await locator.fill(recruitment_Condition);
    }
    public async disableSurverSectionByClickingToggleButton() {
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByTestId(this.loc_Admin_CampaignCreation_SurveySection_EnabledOrDisabledToggle_Btn);
        await this.waitForSecond(2);
        await locator.click();
    }


    public async clickOnSurveyDisabledConfirmationPopup() {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(2);
        const locator = await page3.getByText(this.loc_Client_CampaignCreation_SurveySection_DisableConfirmationPopup_Btn);
        await locator.click();
        await this.waitForSecond(2);
    }

    public async enterNGCondition(NGCondition: string) {
        const page3 = ScenarioContext.get('NewTab');
        const NGt_Condition = readFromYamlFilePath('CampaignData')[NGCondition];
        const locator = await page3.getByPlaceholder(this.loc_Client_CampaignCreation_NGCondition_TxtBox);
        await locator.fill(NGt_Condition);
    }



    public async clickOnTheNGIndustryButton() {
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByText(this.loc_Admin_CampaignCreation_NGIndustry_Btn);
        await locator.click();
        await this.waitForSecond(2);
    }

    public async selectMultipleNGIndustriesAsGroup(industryGroupName: string) {
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.locator(
            this.loc_Admin_CampaignCreation_NGIndustryPopup_SelectGroup_ChkBox.replace(
                'IndustryGroup',
                industryGroupName,
            ),
        );
        //await this.waitForSecond(2);
        await locator.click();
    }

    public async selectNGIndustriesAsIndividual(industryName: string) {
        const page3 = ScenarioContext.get('NewTab');
        const locator = page3.locator(
            this.loc_Admin_CampaignCreation_NGIndustryPopup_SelectIndividual_ChkBox.replace(
                'IndustryName',
                industryName,
            ),
        );
        await this.waitForSecond(1);
        await locator.click();
    }



    public async clickOnTheNGIndustryPopupSubmitButton() {
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByRole('button', { name: '設定' });
        await this.waitForSecond(2);
        await locator.click();
    }

    public async enterRequiredMonitorCount(monitorCount: string) {
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByTestId(this.loc_Admin_CampaignCreation_RequiredMonitorCount_Txt);
        const monitor_Count = readFromYamlFilePath('CampaignData')[monitorCount]
        await locator.fill(monitor_Count);
    }



    public async clickOnInterviewDurationListBox() {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(2);
        const locator = await page3.getByText(this.loc_Admin_CampaignCreation_InterviewDuration_LstBox);
        await locator.click();
    }

    public async selectTheInterviewDurationFromList(interviewDuration: string) {
        const page3 = ScenarioContext.get('NewTab');

        const interview_Duration = readFromYamlFilePath('CampaignData')[interviewDuration]
        const locator = page3.locator(
            this.loc_Admin_CampaignCreation_InterviewDuration_List_LstBox.replace(
                'InterviewDuration',
                interview_Duration,
            ),
        );
        //await this.waitForSecond(2);
        await locator.click();
    }



    public async clickOnTheCampaignCreationScheduleCalender() {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(2);
        const locator = await page3.getByPlaceholder(this.loc_Admin_CampaignCreation_InterviewSchedule_Cal);
        await locator.click();
        await this.waitForSecond(2);
    }


    public async selectTheInterviewScheduleFrom() {
        const page3 = ScenarioContext.get('NewTab');
        const scheduleFrom = (await this.getDates('D', 1)).toString();
        const locator = page3.locator(
            this.loc_Admin_CampaignCreation_InterviewScheduleFrom_Cal.replace('FromDate', scheduleFrom),
        );
        console.log("befor if condtn---------")
        if (await locator.isDisabled()) {
            console.log("in if lopp-----")
            const locator2 = page3.locator(
                this.loc_Admin_CampaignCreation_InterviewScheduleTo_Cal.replace('ToDate', scheduleFrom));
            await locator2.click();
        } else {
            //await this.waitForSecond(2);
            console.log("ese cndtn----------");

            console.log(locator);
            await locator.click();
        }
    }


    public async selectTheInterviewScheduleTo() {
        const page3 = ScenarioContext.get('NewTab');
        const scheduleTo = (await this.getDates('D', 30)).toString();
        const locator = page3.locator(
            this.loc_Admin_CampaignCreation_InterviewScheduleTo_Cal.replace('ToDate', scheduleTo),
        );
        // await this.waitForSecond(2);
        await locator.click();
    }


    public async verifyMaximumCountOfApplicant() {
        const page3 = ScenarioContext.get('NewTab');
        const CountOfApplicant = readFromYamlFilePath('CampaignData')['monitorCount'];
        const maxCountOfApplicant = parseInt(CountOfApplicant) * 10;
        const locator = page3.locator(
            this.loc_Admin_CampaignCreation_MaximumCountOfApplicant_Lbl.replace(
                'MaximumApplicantCount',
                maxCountOfApplicant.toString(),
            ),
        );
        await this.locatorShouldBePresent(locator);
    }

    public async clickOnSlotSelectionArea() {
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByText(this.loc_Admin_CampaignCreation_SlotSelectionSection_Lbl);
        await this.waitForSecond(2);
        await locator.click();
    }

    public async selectSlotFromSlotSelectionArea(startDate: string, numberOfDays: string, startTime: string) {
        const page3 = ScenarioContext.get('NewTab');
        let hrsIndex = parseInt(startTime.substring(0, 2));
        hrsIndex = (hrsIndex - 8) * 2;
        let minIndex = parseInt(startTime.substring(3, 5));
        if (minIndex == 30) {
            minIndex = 1;
        }
        const interviewDuration = readFromYamlFilePath('CampaignData')['interviewDuration'];

        const timeIndex = hrsIndex + minIndex;
        console.log("timeIndex: " + timeIndex);

        for (let i = 1; i <= parseInt(numberOfDays); i++) {
            console.log(
                'Xpath :' +
                this.loc_Admin_CampaignCreation_SelectSlot_Btn
                    .replace('StartDate', startDate)
                    .replace('StartTime', timeIndex.toString()),
            );

            // const locator = page3.locator(this.loc_Client_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex.toString()));
            // await this.waitForSecond(2);
            // await locator.click();
            if (interviewDuration == '30') {

                const timeIndex2 = timeIndex + 1;
                const timeIndex3 = timeIndex2 + 1;
                const locator = page3.locator(this.loc_Admin_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex.toString()));
                const locator2 = page3.locator(this.loc_Admin_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex2.toString()));
                const locator3 = page3.locator(this.loc_Admin_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex3.toString()));
                if (timeIndex <= 27) {
                    await locator.click();
                }

                if (timeIndex2 <= 27) {
                    await locator2.click();
                }

                if (timeIndex3 <= 27) {
                    await locator3.click();
                }

            } else if (interviewDuration == '60') {

                const timeIndex2 = timeIndex + 2;

                const timeIndex3 = timeIndex2 + 2;

                const locator = page3.locator(this.loc_Admin_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex.toString()));
                const locator2 = page3.locator(this.loc_Admin_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex2.toString()));
                const locator3 = page3.locator(this.loc_Admin_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex3.toString()));
                if (timeIndex <= 26) {
                    await locator.click();
                }

                if (timeIndex2 <= 26) {
                    await locator2.click();
                }

                if (timeIndex3 <= 26) {
                    await locator3.click();
                }

            } else if (interviewDuration == '90') {

                const timeIndex2 = timeIndex + 3;

                const timeIndex3 = timeIndex2 + 3;

                const locator = page3.locator(this.loc_Admin_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex.toString()));
                const locator2 = page3.locator(this.loc_Admin_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex2.toString()));
                const locator3 = page3.locator(this.loc_Admin_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex3.toString()));
                if (timeIndex <= 25) {
                    this.waitForSecond(3);
                    await locator.click();
                }

                if (timeIndex2 <= 25) {
                    await locator2.click();
                }

                if (timeIndex3 <= 25) {
                    await locator3.click();
                }

            } else if (interviewDuration == '120') {

                const timeIndex2 = timeIndex + 4;

                const timeIndex3 = timeIndex2 + 4;

                const locator = page3.locator(this.loc_Admin_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex.toString()));
                const locator2 = page3.locator(this.loc_Admin_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex2.toString()));
                const locator3 = page3.locator(this.loc_Admin_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex3.toString()));
                if (timeIndex <= 24) {
                    await locator.click();
                } else {
                    console.log("slot not available for the given time")
                }

                if (timeIndex2 <= 24) {
                    await locator2.click();
                } else {
                    console.log("slot not available for the given time")
                }

                if (timeIndex3 <= 24) {
                    await locator3.click();
                } else {
                    console.log("slot not available for the given time")
                }

            }


            startDate = (parseInt(startDate) + 1).toString();



        }
        await this.waitForSecond(2);
    }



    // ----------------------------------------------------------------

    public async clickGenderRadioButton(gendername: string) {
        const page3 = ScenarioContext.get('NewTab');


        if (gendername == "male") {
            const locator = await page3.locator((this.genderRadioButton).replace('samplevalue', '1'));
            await this.waitForSecond(2);
            await (locator).click();
        }
        else if (gendername == "female") {
            const locator = await page3.locator((this.genderRadioButton).replace('samplevalue', '2'));
            await this.waitForSecond(2);
            await this.waitForSecond(2);
            await (locator).click();
        } else if (gendername == "no answer") {
            const locator = await page3.locator((this.genderRadioButton).replace('samplevalue', '3'));
            await this.waitForSecond(2);
            await this.waitForSecond(2);
            await (locator).click();
        }




    }
    public async clickNoAnswerRadioButton() {
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.locator(this.noAnswerRadioButton);
        await this.waitForSecond(2);
        await locator.click();
    }

    public async selectLowerAge(age: string) {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(2);
        const locator = await page3.locator(this.ageLowerDropdown);
        await locator.click();
        await page3.getByRole('option', { name: age + ' 歳' }).click();
    }

    public async selectUpperAge(age: string) {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(2);
        const locator = await page3.locator(this.ageUpperDropdown);
        await locator.click();
        await page3.getByRole('option', { name: age + ' 歳' }).click();
    }

    public async clickPlaceOfResidence() {
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByText(this.residenceButton);
        await this.waitForSecond(2);
        await locator.click();
    }

    public async selectResidence(area: string) {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        this.clickPlaceOfResidence();
        await page3.locator(this.residenceValue.replace('areaValue', area)).check();
        await this.waitForSecond(2);
        const locator2 = await page3.getByRole('button', { name: '設定' });
        await locator2.click();
    }

    public async clickProfession() {
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByText(this.professionButton);
        await this.waitForSecond(2);
        await locator.click();
    }

    public async selectProfession(Profession: string) {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(2);
        this.clickProfession();
        await page3.locator(this.professionValue.replace('professionValue', Profession)).check();
        await this.waitForSecond(2);
        const locator2 = await page3.getByText(this.professionConfirmationButton);
        await locator2.click();
    }

    public async clickMarriedStatusRadioButton(marriedstatus: string) {
        const page3 = ScenarioContext.get('NewTab');
        let locator;

        if (marriedstatus == "unmarried") {
            locator = this.marriedStatusRadioButton.replace('samplevalue', '1');
            await this.waitForSecond(2);
            await page3.locator(locator).click();
        }
        else if (marriedstatus == "married") {
            locator = this.marriedStatusRadioButton.replace('samplevalue', '2');
            await this.waitForSecond(2);
            await page3.locator(locator).click();
        } else if (marriedstatus == "no answer") {
            locator = this.marriedStatusRadioButton.replace('samplevalue', '3');
            await this.waitForSecond(2);
            await page3.locator(locator).click();
        }


    }


    public async clickChildrenStatusRadioButton(childrenStatus: string) {
        const page3 = ScenarioContext.get('NewTab');


        if (childrenStatus == "yes") {
            const locator = await page3.locator(this.childrenStatusRadioButton).replace('samplevalue', '1');
            await this.waitForSecond(2);
            await locator.click();
        }
        else if (childrenStatus == "no") {
            const locator = await page3.locator(this.childrenStatusRadioButton).replace('samplevalue', '2');
            await this.waitForSecond(2);
            await locator.click();
        } else if (childrenStatus == "no answer") {
            const locator = await page3.locator(this.childrenStatusRadioButton).replace('samplevalue', '3');
            await this.waitForSecond(2);
            await locator.click();
        }

    }




    public async clickLowerHouseholdDropdown() {
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.locator(this.householdLowerDropdown);
        await this.waitForSecond(2);
        await locator.click();
    }

    public async selectLowerHouseHoldIncome(income: string) {
        const page3 = ScenarioContext.get('NewTab');
        //not able to change the combobox locator
        await this.clickLowerHouseholdDropdown();
        const locator = page3.locator(
            this.loc_Admin_Income_DropdownValue_Opt.replace('Income', income),
        );
        await this.waitForSecond(2);
        await locator.click();
    }

    public async clickUpperHouseholdDropdown() {
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.locator(this.householdUpperDropdown);
        await this.waitForSecond(2);
        await locator.click();


    }

    public async selectUpperHouseHoldIncome(income: string) {
        const page3 = ScenarioContext.get('NewTab');
        await this.clickUpperHouseholdDropdown();
        const locator = page3.locator(
            this.loc_Admin_Income_DropdownValue_Opt.replace('Income', income),
        );
        await this.waitForSecond(2);
        await locator.click();
    }

    public async clickLowerPersonalIncomeDropdown() {
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.locator(this.personalIncomeLowerDropdown);
        await this.waitForSecond(2);
        await locator.click();
    }

    public async selectLowerPersonalIncome(income: string) {
        const page3 = ScenarioContext.get('NewTab');
        await this.clickLowerPersonalIncomeDropdown();
        const locator = page3.locator(
            this.loc_Admin_Income_DropdownValue_Opt.replace('Income', income),
        );
        await this.waitForSecond(2);
        await locator.click();
    }

    public async clickUpperPersonalIncomeDropdown() {
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.locator(this.personalIncomeUpperDropdown);
        await this.waitForSecond(2);
        await locator.click();
    }

    public async selectUpperPersonalIncome(income: string) {
        const page3 = ScenarioContext.get('NewTab');
        await this.clickUpperPersonalIncomeDropdown();
        const locator = page3.locator(
            this.loc_Admin_Income_DropdownValue_Opt.replace('Income', income),
        );
        await this.waitForSecond(2);
        await locator.click();
    }



    public async selectQuestionTypeAsMultiChoice() {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(2);
        await page3.getByLabel('複数選択').click();
        await this.waitForSecond(2);
        await page3.getByRole('option', { name: '複数選択' }).click();
        await this.page
            .locator('//*[text()="設問文"]/parent::*/parent::*/parent::*//textarea[1]')
            .fill('Multi Choice Question');
    }

    public async enterOptions() {
        const page3 = ScenarioContext.get('NewTab');
        await page3.getByPlaceholder('選択肢A').fill('Option1');
        await page3.getByPlaceholder('選択肢B').fill('Option2');
        await page3.getByPlaceholder('選択肢C').fill('Option3');
    }

    public async clickAdditionalQuestionAddButton() {
        const page3 = ScenarioContext.get('NewTab');
        await page3.getByRole('button', { name: '設問の追加' }).click();
    }

    public async selectQuestionTypeAsSingleChoice() {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(2);
        await page3.getByLabel('複数選択').click();
        await this.waitForSecond(2);
        await page3.getByRole('option', { name: '単一選択' }).click();
        await this.page
            .locator('//*[text()="設問文"]/parent::*/parent::*/parent::*//textarea[1]')
            .fill('Single Choice Question');
    }
    public async selectQuestionTypeAsDescriptive() {
        await this.waitForSecond(2);
        const page3 = ScenarioContext.get('NewTab');
        await page3.getByLabel('複数選択').click();
        await this.waitForSecond(2);
        await page3.getByRole('option', { name: '記述式' }).click();
        await page3
            .locator('//*[text()="設問文"]/parent::*/parent::*/parent::*//textarea[1]')
            .fill('Descriptive Question');
        await this.waitForSecond(2);
        await page3.getByRole('button', { name: '設問の追加' }).click();
        await this.waitForSecond(2);
        await page3.getByTestId('question-remove').click();
    }


    public async admincleardaterange() {

        const page3 = ScenarioContext.get('NewTab');
        const daterange = page3.getByTestId(this.loc_Admin_CampaignDraftDaterangeClearIcon);
        await daterange.click();


    }


    public async draftsubmit() {
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByTestId(this.loc_Admin_CampaignDraftt_Publish_Btn);
        await this.waitForSecond(2);
        await locator.click();
    }


    public async draftsubmitconfirm() {
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByTestId(this.loc_Admin_CampaignDraft_Confirmation_Screen_Btn);
        await this.waitForSecond(2);
        await locator.click();
    }






}



























