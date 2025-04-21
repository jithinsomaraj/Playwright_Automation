

import ScenarioContext from '../../support/ScenarioContext';

import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';
import { readFromYamlFilePath } from '../../utils/YamlReader';
import { ClientCampaignList } from '../Client/2.QI-Client-CampaignList-Page';
import * as fs from 'fs';
import * as yaml from 'js-yaml';




export default class Client_CampaignCreation extends BasePage {
  page: Page;
  maleRadioButton: Locator;
  femaleRadioButton: Locator;
  noAnswerRadioButton: Locator;
  ageLowerDropdown: Locator;
  ageUpperDropdown: Locator;
  residenceButton: Locator;
  residenceValue: string;
  genderRadioButton: string;
  Client_CampaignList: ClientCampaignList;

  residenceConfirmationButton: Locator;

  professionButton: Locator;
  professionValue: string;
  professionConfirmationButton: Locator;
  marriedStatusRadioButton: string;

  childrenStatusRadioButton: string;
  householdLowerDropdown: Locator;
  householdUpperDropdown: Locator;
  personalIncomeLowerDropdown: Locator;
  personalIncomeUpperDropdown: Locator;
  loc_Monitor_Survey_Proceed_Btn: string;
  loc_Monitor_Survey_apply_Btn: string;


  readonly loc_Client_CampaignCreation_AcceptAgreement_Btn: Locator;
  readonly loc_Client_CampaignCreation_Confirmation_Screen_Btn: Locator;
  readonly loc_Client_CampaignCreation_Publish_Btn: Locator;
  readonly loc_Client_CampaignCreation_CampaignTitle_ValidationMsg_Lbl: Locator;
  readonly loc_Client_CampaignCreation_RecruitmentConditions_ValidationMsg_Lbl: Locator;
  readonly loc_Client_CampaignCreation_CampaignTitle_TxtBox: Locator;
  readonly loc_Client_CampaignCreation_RecruitmentCondition_TxtBox: Locator;
  readonly loc_Client_CampaignCreation_NGIndustry_Btn: Locator;
  readonly loc_Client_CampaignCreation_NGIndustryPopup_SelectGroup_ChkBox: string;
  readonly loc_Client_CampaignCreation_NGIndustryPopup_SelectIndividual_ChkBox: string;
  readonly loc_Client_CampaignCreation_NGIndustryPopup_Cancel_Btn: Locator;
  readonly loc_Client_CampaignCreation_NGIndustryPopup_Submit_Btn: Locator;
  readonly loc_Client_CampaignCreation_RequiredMonitorCount_Txt: Locator;
  readonly loc_Client_CampaignCreation_RequiredMonitorCount_MaximumLimit_ValidationMsg_Lbl: Locator;
  readonly loc_Client_CampaignCreation_InterviewDuration_LstBox: Locator;
  readonly loc_Client_CampaignCreation_InterviewDuration_List_LstBox: string;
  readonly loc_Client_CampaignCreation_RequiredTicket_Lbl: string;
  loc_Client_CampaignCreation_InterviewScheduleFrom_Cal: string;

  loc_Client_CampaignCreation_InterviewScheduleTo_Cal: string;


  readonly loc_Client_CampaignCreation_MaximumCountOfApplicant_Lbl: string;
  readonly loc_Client_CampaignCreation_SlotSelectionSection_Lbl: Locator;
  readonly loc_Client_CampaignCreation_SelectSlot_Btn: string;
  readonly loc_Client_CampaignCreation_CampaignCreationPopup_Btn: Locator;
  readonly loc_Client_CampaignCreation_InterviewSchedule_Cal: Locator;
  readonly loc_Client_CampaignCreation_SurveySection_EnabledOrDisabledToggle_Btn: Locator;
  readonly loc_Client_CampaignCreation_SummaryPageHeading_Lbl: Locator;

  readonly loc_Client_CampaignCreation_SurveySection_DisableConfirmationPopup_Btn: Locator;
  readonly loc_Client_CampaignCreation_PublishConfirmationPopup_Btn: Locator;
  loc_Client_CampaignCreation_Draft_Btn: Locator;
  loc_Client_CampaignCreation_DraftLimitValidationMessage_Lbl: Locator;
  loc_Client_CampaignCreation_CampaignTitleFieldLengthValidation_Lbl: Locator;
  loc_Client_CampaignCreation_CampaignRecruitmentConditionFieldLengthValidation_Lbl: Locator;
  loc_Client_CampaignCreation_FirstOneFromSelectedNGIndustry_Lbl: Locator;
  loc_Client_CampaignCreation_FirstOneFromSelectedNGIndustry_Cancel_Btn: Locator;
  loc_Client_CampaignCreation_CampaignTitle_lbl: string;
  loc_Client_Income_DropdownValue_Opt: string;
  loc_Monitor_CampaignApplyConfirmationPopupSubmit_Btn: string;
  loc_Monitor_Survey_Applybutton_Enabled_Btn: string;
  loc_Monitor_Survey_RecruitmentCondition3_Option: string;
  loc_Monitor_Survey_RecruitmentCondition2_Option: string;
  loc_Monitor_Survey_RecruitmentCondition1_Option: string;
  loc_IndividualScheduleOffer_DifferentOffer_Monitor_Btn: string;
  loc_IndividualScheduleOffer_OfferTab_Tab: Locator;
  loc_IndividualSchedule_Btn: string;
  loc_Monitor_TopPage_AppliedTab_Lnk: string;
  loc_IndividualScheduleOffer_OfferSubmitButton_Btn: Locator;
  loc_Monitor_ScheduleOffering_ConfirmationPopupAccept_Btn: string;
  loc_Monitor_ScheduleOffering_Accept_radio_Btn: string;
  loc_Monitor_ScheduleOffering_EnabledAcceptButton_Btn: string;
  loc_Monitor_ScheduleOffering_AcknowledgementClose_Btn: string;
  loc_Client_CampaignCreation_ImplementationDate_lbl: string;
  loc_Client_CampaignCreation_ReleaseDate_lbl: string;
  loc_Client_CampaignCreation_MonitorCount_lbl: string;
  loc_Client_CampaignCreation_NGCondition_TxtBox: Locator;
  readonly loc_Monitor_TopPage_CampaignListPageCount: Locator;
  loc_MeetsCritieria_Btn: string;
  loc_MeetsCritieria_NextBtn: string;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.Client_CampaignList = new ClientCampaignList(page);
    this.loc_Monitor_TopPage_CampaignListPageCount = this.page.locator(
      '[data-testid*="page-item"]:not([aria-label="Go to previous page"]):not([aria-label="git s"]'); //cant change
    this.loc_Client_CampaignCreation_CampaignTitle_lbl = "//tr/td[text()='Campaigntitle']";
    this.loc_Client_CampaignCreation_AcceptAgreement_Btn =
      this.page.locator('//button[text()="同意する"]');;
    this.loc_Client_CampaignCreation_Publish_Btn = page.getByTestId('publish-button');
    this.loc_Client_CampaignCreation_Confirmation_Screen_Btn = page.getByRole('button', { name: "確認画面へ" });
    this.loc_Client_CampaignCreation_CampaignTitle_ValidationMsg_Lbl = page.getByText('募集タイトル 必須')
    this.loc_Client_CampaignCreation_RecruitmentConditions_ValidationMsg_Lbl = page.getByText('募集条件 必須')
    this.loc_Client_CampaignCreation_CampaignTitle_TxtBox = page.getByPlaceholder('個人でPCの購入をしたことがあり、プライベートで日常的にPCを使用する人にお話を聞きたいです。')
    this.loc_Client_CampaignCreation_RecruitmentCondition_TxtBox =
      page.getByPlaceholder('個人でPCを購入したことがある人')
    this.loc_Client_CampaignCreation_NGIndustry_Btn = page.getByText('NG業種を選択');
    this.loc_Client_CampaignCreation_NGIndustryPopup_SelectGroup_ChkBox =
      '//input[@name="IndustryGroup"][not(@value)]';
    this.loc_Client_CampaignCreation_NGIndustryPopup_SelectIndividual_ChkBox =
      '//input[@name="IndustryName"][@value]';
    this.loc_Client_CampaignCreation_NGIndustryPopup_Cancel_Btn = this.page.locator(
      '//button[text()="キャンセル"]',
    );
    this.loc_Client_CampaignCreation_NGIndustryPopup_Submit_Btn = page.getByRole('button', { name: '設定' });
    this.loc_Client_CampaignCreation_RequiredMonitorCount_Txt =
      page.getByTestId('interview.section2.monitorscount')
    this.loc_Client_CampaignCreation_RequiredMonitorCount_MaximumLimit_ValidationMsg_Lbl =
      this.page.locator('//div/p[text()="The maximum value allowed is 40."]');

    this.loc_Client_CampaignCreation_InterviewDuration_LstBox = page.getByText('選択してください。');
    this.loc_Client_CampaignCreation_InterviewDuration_List_LstBox =
      '//div/ul/li[text()="InterviewDuration 分"]';
    this.loc_Client_CampaignCreation_RequiredTicket_Lbl =
      '//*[text()="必要なチケット数："]/../div[2]/div[text()="RequiredTicket"]';
    this.loc_Client_CampaignCreation_InterviewSchedule_Cal = page.getByTestId('mint-date-picker');
    this.loc_Client_CampaignCreation_InterviewScheduleFrom_Cal = '//*[@data-timestamp="dateEpoch"]'

    this.loc_Client_CampaignCreation_InterviewScheduleTo_Cal = '//*[@data-timestamp="dateEpoch"]'



    this.loc_Client_CampaignCreation_MaximumCountOfApplicant_Lbl =
      '//*[text()="残り選択可能数："]/../div[2]/div[text()="MaximumApplicantCount"]';
    this.loc_Client_CampaignCreation_SlotSelectionSection_Lbl = page.getByTestId('schedule-open');
    this.loc_Client_CampaignCreation_SelectSlot_Btn = '[id="StartDate-StartTime"]';
    this.loc_Client_CampaignCreation_CampaignCreationPopup_Btn = page.getByTestId('campaign-create')
    this.loc_Client_CampaignCreation_SurveySection_EnabledOrDisabledToggle_Btn = this.page.locator(
      "[class*='Mui-checked']>[data-testid='campaign.creation.form.survey-creation']",
    );
    this.loc_Client_CampaignCreation_SummaryPageHeading_Lbl = page.getByText('入力内容の確認')
    this.loc_Client_CampaignCreation_PublishConfirmationPopup_Btn = page.getByText('はい');
    this.loc_Client_CampaignCreation_SurveySection_DisableConfirmationPopup_Btn = page.getByText('はい')
    this.loc_Client_CampaignCreation_Draft_Btn = page.getByText('下書き保存')
    this.loc_Client_CampaignCreation_DraftLimitValidationMessage_Lbl = this.page.locator(
      '//*[@aria-describedby="confirmation-dialog-description"]//*[text()="「公開前」の案件は100件までです。"]',
    );
    this.loc_Client_CampaignCreation_CampaignTitleFieldLengthValidation_Lbl = this.page.locator(
      "//*[text()='募集タイトル']/parent::div/div[2][text()='50/50 ']",
    );
    this.loc_Client_CampaignCreation_CampaignRecruitmentConditionFieldLengthValidation_Lbl =
      this.page.locator("//*[text()='募集条件']/parent::div/div[2][text()='500/500 ']");

    this.loc_Client_CampaignCreation_FirstOneFromSelectedNGIndustry_Lbl = this.page.locator(
      "(//*[text()='NG 業種']/parent::div/following-sibling::div//span)[2]",
    );
    this.loc_Client_CampaignCreation_FirstOneFromSelectedNGIndustry_Cancel_Btn = this.page.locator(
      '(//*[@data-testid="CancelIcon"])[1]',
    );

    this.maleRadioButton = this.page.locator("//input[@type='radio'][@value='1'][@name='gender']");
    this.femaleRadioButton = this.page.locator(
      "//input[@type='radio'][@value='2'][@name='gender']",
    );
    this.genderRadioButton = '//*[@name="gender"][@value="samplevalue"]';
    this.marriedStatusRadioButton = '//*[@name="married"][@value="samplevalue"]';
    this.noAnswerRadioButton = this.page.locator(
      "//input[@type='radio'][@value='3'][@name='gender']",
    );

    this.ageLowerDropdown = this.page.locator("//div[@id='mui-component-select-age.lower']");
    this.ageUpperDropdown = this.page.locator("//div[@id='mui-component-select-age.upper']");
    this.residenceButton = page.getByText('居住地を選択');
    this.residenceValue = "input[name='areaValue']";
    this.residenceConfirmationButton = page.getByRole('button', { name: '設定' });
    this.professionButton = page.getByText('職業を選択')
    this.professionValue = "input[name='professionValue']";
    this.professionConfirmationButton = page.getByRole('button', { name: '設定' });

    this.childrenStatusRadioButton =
      '//*[@name="children"][@value="samplevalue"]'


    this.householdLowerDropdown = this.page.locator(
      "//div[@id='mui-component-select-householdIncome.lower']",
    );
    this.householdUpperDropdown = this.page.locator(
      "//div[@id='mui-component-select-householdIncome.upper']",
    );
    this.personalIncomeLowerDropdown = this.page.locator(
      "//div[@id='mui-component-select-personalIncome.lower']",
    );
    this.personalIncomeUpperDropdown = this.page.locator(
      "//div[@id='mui-component-select-personalIncome.upper']",
    );

    this.loc_Client_Income_DropdownValue_Opt = "[data-value='Income']";

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
    this.loc_IndividualScheduleOffer_DifferentOffer_Monitor_Btn = "(//div[(text()='NickName')])[1]";
    this.loc_IndividualScheduleOffer_OfferTab_Tab = this.page.locator("//div[(text()='日程')]");
    this.loc_IndividualSchedule_Btn = '//*[@id="slotarea"]/div[2]/label/div/span/input';
    this.loc_Monitor_TopPage_AppliedTab_Lnk = '//div[text()="応募済"]';
    this.loc_IndividualScheduleOffer_OfferSubmitButton_Btn =
      this.page.locator("//*[(text()='候補日程を送る')]");
    this.loc_Monitor_ScheduleOffering_ConfirmationPopupAccept_Btn = '[id="confirmation-agreeButton"]';
    this.loc_Monitor_ScheduleOffering_AcknowledgementClose_Btn = '[id="confirmation-agreeButton"]';
    this.loc_Monitor_ScheduleOffering_Accept_radio_Btn = '(//*[@name="slot-0"])[1]'
    this.loc_Monitor_ScheduleOffering_EnabledAcceptButton_Btn = "//div/button[text()='日程を回答する']";
    this.loc_Client_CampaignCreation_ImplementationDate_lbl = "//tr[td[text()='title']]/td/div/div[contains(text(),'startDate') and contains(text(),'endDate')]"
    this.loc_Client_CampaignCreation_ReleaseDate_lbl = "//td[text()='title']/following::td[text()='date'][1]"
    this.loc_Client_CampaignCreation_MonitorCount_lbl = "//td[text()='title']/following-sibling::td[text()='count'][1]"
    this.loc_Client_CampaignCreation_NGCondition_TxtBox = page.getByPlaceholder('仕事で使用するPCを購入した人');
    this.loc_MeetsCritieria_Btn = '[id="apply.confirmation.agree"]';
    this.loc_MeetsCritieria_NextBtn = '//*[text()="次へ"]';





  }
  public async campaignTitleCharLengthValidation() {
    await this.locatorShouldBePresent(
      this.loc_Client_CampaignCreation_CampaignTitleFieldLengthValidation_Lbl,
    );
  }
  public async campaignRecruitmentConditionCharLengthValidation() {
    await this.locatorShouldBePresent(
      this.loc_Client_CampaignCreation_CampaignRecruitmentConditionFieldLengthValidation_Lbl,
    );
  }
  public async clickOnTheCampaignCreationButton() {
    console.log("Entering in clickOnTheCampaignCreationButton");
    await this.page.waitForLoadState('load', { timeout: 90000 });
    await this.waitForSecond(3);
    await this.loc_Client_CampaignCreation_CampaignCreationPopup_Btn.click();
  }

  public async verifyTheCampaignInTheCampaignListPage(campaignTitle: string) {
    await this.waitForSecond(4);
    const projectTitle = readFromYamlFilePath('CampaignData')[campaignTitle];
    console.log("title:...................." + projectTitle);
    const locator = this.page.locator(
      this.loc_Client_CampaignCreation_CampaignTitle_lbl.replace('Campaigntitle', projectTitle),
    );
    console.log(locator);
    const campaignCount = await locator.count();
    if (campaignCount == 0) {
      console.log("campaign count" + campaignCount);
      await this.Client_CampaignList.navigateToCampaignList();
      await this.waitForSecond(5);
    }
    await this.locatorShouldBePresent(locator);
    this.waitForSecond(3);
  }


  public async verifyImplementationDate(startDate: string, endDate: string) {
    this.waitForSecond(2);
    const timeZone = await this.page.evaluate(() => {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    })

    console.log("time zone: " + timeZone);


    const implementationStartDate = readFromYamlFilePath('CampaignData')[startDate];
    const implementationEndDate = readFromYamlFilePath('CampaignData')[endDate];


    const projectTitle = readFromYamlFilePath('CampaignData')['campaignTitle1'];
    const locator = await this.page.locator(this.loc_Client_CampaignCreation_ImplementationDate_lbl.replace('startDate', implementationStartDate).replace('title', projectTitle).replace('endDate', implementationEndDate));
    console.log("locator: " + locator);
    this.waitForSecond(3);
    await this.locatorShouldBePresent(locator);

  }



  public async verifyReleaseDate(Release_Date: string) {
    this.waitForSecond(2);
    const Date = readFromYamlFilePath('CampaignData')[Release_Date];
    const projectTitle = readFromYamlFilePath('CampaignData')['campaignTitle1'];
    const locator = this.page.locator(
      this.loc_Client_CampaignCreation_ReleaseDate_lbl.replace('date', Date).replace('title', projectTitle),
    );
    await this.locatorShouldBePresent(locator);
    this.waitForSecond(3);
  }


  public async verifyMonitorCount(count: string) {
    this.waitForSecond(2);
    const MonitorCount = readFromYamlFilePath('CampaignData')[count];
    const projectTitle = readFromYamlFilePath('CampaignData')['campaignTitle1'];
    const locator = this.page.locator(
      this.loc_Client_CampaignCreation_MonitorCount_lbl.replace('count', MonitorCount).replace('title', projectTitle),
    );
    await this.locatorShouldBePresent(locator);
    this.waitForSecond(3);
  }


  public async clickOnTheCampaignDraftButton() {
    await this.waitForSecond(2);
    await this.loc_Client_CampaignCreation_Draft_Btn.click();
  }
  public async clickOnTheAgreementAcceptButton() {
    await this.waitForSecond(2);
    await this.loc_Client_CampaignCreation_AcceptAgreement_Btn.click();
  }

  public async navigateToCampaignConfirmationScreen() {
    await this.waitForSecond(3);
    await this.loc_Client_CampaignCreation_Confirmation_Screen_Btn.click();
    await this.page.waitForLoadState('load', { timeout: 90000 });
  }

  public async clickOnCampaignPublishButton() {
    await this.waitForSecond(3);
    await this.page.waitForLoadState('load', { timeout: 90000 });
    await this.loc_Client_CampaignCreation_Publish_Btn.click();
    console.log('Campaign publish btn cliked------->');

  }

  public async campaignTitleMandatoryValidationMessage() {
    await this.locatorShouldBePresent(
      this.loc_Client_CampaignCreation_CampaignTitle_ValidationMsg_Lbl,
    );
  }

  public async recruitmentConditionMandatoryValidationMessage() {
    await this.locatorShouldBePresent(
      this.loc_Client_CampaignCreation_RecruitmentConditions_ValidationMsg_Lbl,
    );
  }

  public async enterCampaignTitle(campaignTitle: string) {

    const campaign_title = await this.generateCamapignTitle()
    await this.updateYAMLField(campaignTitle, campaign_title);
    await this.waitForSecond(2);
    console.log("Title---------:" + campaign_title);
    await this.loc_Client_CampaignCreation_CampaignTitle_TxtBox.fill(campaign_title);
  }

  public async enterRecruitmentCondition(recruitmentCondition: string) {
    const recruitment_Condition = readFromYamlFilePath('CampaignData')[recruitmentCondition]
    await this.loc_Client_CampaignCreation_RecruitmentCondition_TxtBox.fill(recruitment_Condition);
  }


  public async enterNGCondition(NGCondition: string) {
    const NGt_Condition = readFromYamlFilePath('CampaignData')[NGCondition]
    await this.loc_Client_CampaignCreation_NGCondition_TxtBox.fill(NGt_Condition);
  }




  public async clickOnTheNGIndustryButton() {
    await this.loc_Client_CampaignCreation_NGIndustry_Btn.click();
    await this.waitForSecond(2);
  }

  public async selectMultipleNGIndustriesAsGroup(industryGroupName: string) {
    const locator = this.page.locator(
      this.loc_Client_CampaignCreation_NGIndustryPopup_SelectGroup_ChkBox.replace(
        'IndustryGroup',
        industryGroupName,
      ),
    );
    await this.waitForSecond(2);
    await locator.click();
  }

  public async selectNGIndustriesAsIndividual(industryName: string) {
    const locator = this.page.locator(
      this.loc_Client_CampaignCreation_NGIndustryPopup_SelectIndividual_ChkBox.replace(
        'IndustryName',
        industryName,
      ),
    );
    await this.waitForSecond(1);
    await locator.click();
  }

  public async removeAllSelectedNGIndustries() {

    let loop = 'start';

    while (loop == 'start') {
      try {
        await this.locatorShouldBePresent(
          this.loc_Client_CampaignCreation_FirstOneFromSelectedNGIndustry_Cancel_Btn,
        );
        await this.waitForSecond(2);
        await this.loc_Client_CampaignCreation_FirstOneFromSelectedNGIndustry_Cancel_Btn.click();
      } catch {
        console.log('All elements were removed');
        loop = 'end';
      }
    }
  }

  public async verifyAllSelectedNGIndustriesGotRemoved() {
    try {
      await this.locatorShouldBePresent(
        this.loc_Client_CampaignCreation_FirstOneFromSelectedNGIndustry_Lbl,
      );
      console.log('Element got removed');
    } catch {
      new Error('Industry not removed');
    }
  }

  public async clickOnTheNGIndustryPopupCancelButton() {
    await this.waitForSecond(2);
    await this.loc_Client_CampaignCreation_NGIndustryPopup_Cancel_Btn.click();
  }

  public async clickOnTheNGIndustryPopupSubmitButton() {
    await this.waitForSecond(2);
    await this.loc_Client_CampaignCreation_NGIndustryPopup_Submit_Btn.click();
  }

  public async enterRequiredMonitorCount(monitorCount: string) {
    const monitor_Count = readFromYamlFilePath('CampaignData')[monitorCount]
    await this.loc_Client_CampaignCreation_RequiredMonitorCount_Txt.fill(monitor_Count);
  }

  public async requiredMonitorCountMaximumLimitValidationMessage() {
    await this.locatorShouldBePresent(
      this.loc_Client_CampaignCreation_RequiredMonitorCount_MaximumLimit_ValidationMsg_Lbl,
    );
  }

  public async clickOnInterviewDurationListBox() {
    await this.waitForSecond(2);
    await this.loc_Client_CampaignCreation_InterviewDuration_LstBox.click();
  }

  public async selectTheInterviewDurationFromList(interviewDuration: string) {

    const interview_Duration = readFromYamlFilePath('CampaignData')[interviewDuration]
    const locator = this.page.locator(
      this.loc_Client_CampaignCreation_InterviewDuration_List_LstBox.replace(
        'InterviewDuration',
        interview_Duration,
      ),
    );

    await locator.click();
  }

  public async verifyTheTicketRequiredIsCorrect() {
    await this.campaignCreationTicketCount();
    const requiredTicketCount = ScenarioContext.get('RequiredTicketCount');
    console.log('TicketRequired :' + requiredTicketCount);
    const locator = this.page.locator(
      this.loc_Client_CampaignCreation_RequiredTicket_Lbl.replace(
        'RequiredTicket',
        requiredTicketCount,
      ),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async clickOnTheCampaignCreationScheduleCalender() {
    await this.waitForSecond(2);
    await this.loc_Client_CampaignCreation_InterviewSchedule_Cal.click();
    await this.waitForSecond(2);
  }


  public async selectTheInterviewScheduleFrom() {
    let epochStartdate: string;
    const Startdatefrocalendar = await this.getDates('yyyy-mm-dd', 1);
    epochStartdate = await this.epochtodate(Startdatefrocalendar);
    const locator = this.page.locator(this.loc_Client_CampaignCreation_InterviewScheduleFrom_Cal.replace('dateEpoch', epochStartdate),
    );
    await locator.click();

  }



  public async selectTheInterviewScheduleTo() {

    let epochStartdate: string;
    const Startdatefrocalendar = await this.getDates('yyyy-mm-dd', 30);
    epochStartdate = await this.epochtodate(Startdatefrocalendar);
    const locator = this.page.locator(
      this.loc_Client_CampaignCreation_InterviewScheduleTo_Cal.replace('dateEpoch', epochStartdate),
    );
    await locator.click();
  }


  public async selectTheInterviewScheduleFrom2(scheduleFrom: string) {
    const locator = this.page.locator(this.loc_Client_CampaignCreation_InterviewScheduleFrom_Cal.replace("dateEpoch", scheduleFrom));
    await locator.click();
  }

  public async selectTheInterviewScheduleTo2(scheduleTo: string) {
    const locator = this.page.locator(this.loc_Client_CampaignCreation_InterviewScheduleTo_Cal.replace("dateEpoch", scheduleTo));
    console.log(locator);
    await locator.click();
  }


  public async verifyMaximumCountOfApplicant() {
    const CountOfApplicant = readFromYamlFilePath('CampaignData')['monitorCount'];
    const maxCountOfApplicant = parseInt(CountOfApplicant) * 10;
    const locator = this.page.locator(
      this.loc_Client_CampaignCreation_MaximumCountOfApplicant_Lbl.replace(
        'MaximumApplicantCount',
        maxCountOfApplicant.toString(),
      ),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async clickOnSlotSelectionArea() {
    await this.waitForSecond(5);
    console.log("slot selection area is not available in dev pls change whenrunning staging")

  }

  public async selectSlotFromSlotSelectionArea(startDate: string, numberOfDays: string, startTime: string) {
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
        this.loc_Client_CampaignCreation_SelectSlot_Btn
          .replace('StartDate', startDate)
          .replace('StartTime', timeIndex.toString()),
      );


      if (interviewDuration == '30') {

        const timeIndex2 = timeIndex + 1;
        const timeIndex3 = timeIndex2 + 1;
        const locator = this.page.locator(this.loc_Client_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex.toString()));
        const locator2 = this.page.locator(this.loc_Client_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex2.toString()));
        const locator3 = this.page.locator(this.loc_Client_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex3.toString()));
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

        const locator = this.page.locator(this.loc_Client_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex.toString()));
        const locator2 = this.page.locator(this.loc_Client_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex2.toString()));
        const locator3 = this.page.locator(this.loc_Client_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex3.toString()));
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

        const locator = this.page.locator(this.loc_Client_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex.toString()));
        const locator2 = this.page.locator(this.loc_Client_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex2.toString()));
        const locator3 = this.page.locator(this.loc_Client_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex3.toString()));
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

        const locator = this.page.locator(this.loc_Client_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex.toString()));
        const locator2 = this.page.locator(this.loc_Client_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex2.toString()));
        const locator3 = this.page.locator(this.loc_Client_CampaignCreation_SelectSlot_Btn.replace('StartDate', startDate).replace('StartTime', timeIndex3.toString()));
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

  public async clickOnTheCampaignCreationConfirmationPopup() {
    await this.waitForSecond(3);

    await this.loc_Client_CampaignCreation_PublishConfirmationPopup_Btn.click();
    await this.waitForSecond(3);
    await this.waitToDisappearElement(
      this.loc_Client_CampaignCreation_PublishConfirmationPopup_Btn,
    );
    console.log("campaign confirmation popup clicked")
    await this.waitForSecond(4);
  }

  public async verifyThePageNavigationToTheCampaignCreationSummaryPage() {
    await this.waitForSecond(1);
    await this.locatorShouldBePresent(this.loc_Client_CampaignCreation_SummaryPageHeading_Lbl);
  }
  public async disableSurverSectionByClickingToggleButton() {
    await this.waitForSecond(2);
    await this.loc_Client_CampaignCreation_SurveySection_EnabledOrDisabledToggle_Btn.click();
  }

  public async clickOnSurveyDisabledConfirmationPopup() {
    await this.waitForSecond(2);
    await this.loc_Client_CampaignCreation_SurveySection_DisableConfirmationPopup_Btn.click();
    await this.waitForSecond(2);
  }


  public async clickMaleRadioButton() {
    await this.waitForSecond(2);
    await this.maleRadioButton.click();
  }

  public async clickGenderRadioButton(gendername: string) {
    let locator;

    if (gendername == "male") {
      locator = this.genderRadioButton.replace('samplevalue', '1');
      await this.waitForSecond(2);
      await this.page.locator(locator).click();
    }
    else if (gendername == "female") {
      locator = this.genderRadioButton.replace('samplevalue', '2');
      await this.waitForSecond(2);
      await this.page.locator(locator).click();
    } else if (gendername == "no answer") {
      locator = this.genderRadioButton.replace('samplevalue', '3');
      await this.waitForSecond(2);
      await this.page.locator(locator).click();
    }




  }
  public async clickNoAnswerRadioButton() {
    await this.waitForSecond(2);
    await this.noAnswerRadioButton.click();
  }

  public async selectLowerAge(age: string) {
    await this.waitForSecond(2);
    await this.ageLowerDropdown.click();
    await this.page.getByRole('option', { name: age + ' 歳' }).click();
  }

  public async selectUpperAge(age: string) {
    await this.waitForSecond(2);
    await this.ageUpperDropdown.click();
    await this.page.getByRole('option', { name: age + ' 歳' }).click();
  }

  public async clickPlaceOfResidence() {
    await this.waitForSecond(2);
    await this.residenceButton.click();
  }

  public async selectResidence(area: string) {
    await this.waitForSecond(1);
    this.clickPlaceOfResidence();
    await this.page.locator(this.residenceValue.replace('areaValue', area)).check();
    await this.waitForSecond(2);
    await this.residenceConfirmationButton.click();
  }

  public async clickProfession() {
    await this.waitForSecond(2);
    await this.professionButton.click();
  }

  public async selectProfession(Profession: string) {
    await this.waitForSecond(2);
    this.clickProfession();
    await this.page.locator(this.professionValue.replace('professionValue', Profession)).check();
    await this.waitForSecond(2);
    await this.professionConfirmationButton.click();
  }

  public async clickMarriedStatusRadioButton(marriedstatus: string) {
    let locator;

    if (marriedstatus == "unmarried") {
      locator = this.marriedStatusRadioButton.replace('samplevalue', '1');
      await this.waitForSecond(2);
      await this.page.locator(locator).click();
    }
    else if (marriedstatus == "married") {
      locator = this.marriedStatusRadioButton.replace('samplevalue', '2');
      await this.waitForSecond(2);
      await this.page.locator(locator).click();
    } else if (marriedstatus == "no answer") {
      locator = this.marriedStatusRadioButton.replace('samplevalue', '3');
      await this.waitForSecond(2);
      await this.page.locator(locator).click();
    }


  }


  public async clickChildrenStatusRadioButton(childrenStatus: string) {
    let locator;

    if (childrenStatus == "yes") {
      locator = this.childrenStatusRadioButton.replace('samplevalue', '2');
      await this.waitForSecond(2);
      await this.page.locator(locator).click();
    }
    else if (childrenStatus == "no") {
      locator = this.childrenStatusRadioButton.replace('samplevalue', '1');
      await this.waitForSecond(2);
      await this.page.locator(locator).click();
    } else if (childrenStatus == "no answer") {
      locator = this.childrenStatusRadioButton.replace('samplevalue', '3');
      await this.waitForSecond(2);
      await this.page.locator(locator).click();
    }

  }




  public async clickLowerHouseholdDropdown() {
    await this.waitForSecond(2);
    await this.householdLowerDropdown.click();
  }

  public async selectLowerHouseHoldIncome(income: string) {

    await this.clickLowerHouseholdDropdown();
    const locator = this.page.locator(
      this.loc_Client_Income_DropdownValue_Opt.replace('Income', income),
    );
    await this.waitForSecond(2);
    await locator.click();
  }

  public async clickUpperHouseholdDropdown() {
    await this.waitForSecond(2);
    await this.householdUpperDropdown.click();
  }

  public async selectUpperHouseHoldIncome(income: string) {
    await this.clickUpperHouseholdDropdown();
    const locator = this.page.locator(
      this.loc_Client_Income_DropdownValue_Opt.replace('Income', income),
    );
    await this.waitForSecond(2);
    await locator.click();
  }

  public async clickLowerPersonalIncomeDropdown() {
    await this.waitForSecond(2);
    await this.personalIncomeLowerDropdown.click();
  }

  public async selectLowerPersonalIncome(income: string) {
    await this.clickLowerPersonalIncomeDropdown();
    const locator = this.page.locator(
      this.loc_Client_Income_DropdownValue_Opt.replace('Income', income),
    );
    await this.waitForSecond(2);
    await locator.click();
  }

  public async clickUpperPersonalIncomeDropdown() {
    await this.waitForSecond(2);
    await this.personalIncomeUpperDropdown.click();
  }

  public async selectUpperPersonalIncome(income: string) {
    await this.clickUpperPersonalIncomeDropdown();
    const locator = this.page.locator(
      this.loc_Client_Income_DropdownValue_Opt.replace('Income', income),
    );
    await this.waitForSecond(2);
    await locator.click();
  }

  public async maximumDraftcampaignValidationMessage() {
    await this.locatorShouldBePresent(
      this.loc_Client_CampaignCreation_DraftLimitValidationMessage_Lbl,
    );
  }

  public async selectQuestionTypeAsMultiChoice() {
    await this.clickAdditionalQuestionAddButton();
    await this.waitForSecond(2);
    await this.page.getByLabel('単一選択').click();
    await this.waitForSecond(2);
    await this.page.getByRole('option', { name: '複数選択' }).click();
    await this.page.getByPlaceholder('設問文を入力してください').fill('Multi Choice Question');
  }

  public async enterOptions() {
    await this.page.getByPlaceholder('選択肢A').fill('Option1');
    await this.page.getByPlaceholder('選択肢B').fill('Option2');
    await this.page.getByPlaceholder('選択肢C').fill('Option3');
  }

  public async clickAdditionalQuestionAddButton() {
    await this.page.getByRole('button', { name: '設問の追加' }).click();
  }

  public async selectQuestionTypeAsSingleChoice() {
    await this.clickAdditionalQuestionAddButton();
    await this.waitForSecond(2);
    await this.page.getByLabel('単一選択').click();
    await this.waitForSecond(2);
    await this.page.getByRole('option', { name: '単一選択' }).click();
    await this.page.getByPlaceholder('設問文を入力してください').fill('Single Choice Question');
  }
  public async selectQuestionTypeAsDescriptive() {
    await this.clickAdditionalQuestionAddButton();
    await this.waitForSecond(2);
    await this.page.getByLabel('単一選択').click();
    await this.waitForSecond(2);
    await this.page.getByRole('option', { name: '記述式' }).click();
    await this.page.getByPlaceholder('設問文を入力してください').fill('Descriptive Question');
    await this.waitForSecond(2);
    await this.page.locator('//*[text()="保存"]').click();
  }



  public async generateCamapignTitle() {

    const currentTimeEpoch = await Math.floor(new Date().getTime() / 1000);
    const campaignTitle = ("Auto" + currentTimeEpoch)

    return campaignTitle;
  }



  public async updateYAMLField(fieldToUpdate: string, newValue: string) {
    try {
      // Read YAML file
      const yamlFile = fs.readFileSync('Fixtures/data.yaml', 'utf8');

      // Parse YAML content
      const data: any = yaml.load(yamlFile);

      // Update the desired field
      if (fieldToUpdate === 'campaignTitle') {
        data.CampaignData[0].campaignTitle = newValue;
      }
      else if (fieldToUpdate === 'interviewSchedule') {
        data.CampaignData[1].interviewSchedule = newValue;
      }
      else if (fieldToUpdate === 'scheduleDate') {
        data.CampaignData[3].scheduleDate = newValue;
      }
      else if (fieldToUpdate === 'scheduleTime') {
        data.CampaignData[2].scheduleTime = newValue;
      }
      else if (fieldToUpdate === 'scheduleDate2') {
        data.CampaignData[5].scheduleDate2 = newValue;
      }
      else if (fieldToUpdate === 'scheduleTime2') {
        data.CampaignData[4].scheduleTime2 = newValue;
      }
      else if (fieldToUpdate === 'implementationStartDate') {
        data.CampaignData[11].implementationStartDate = newValue;
      }
      else if (fieldToUpdate === 'implementationEndDate') {
        data.CampaignData[12].implementationEndDate = newValue;
      } else if (fieldToUpdate === 'releaseDate') {
        data.CampaignData[13].releaseDate = newValue;
      } else if (fieldToUpdate === 'campaignTitle1') {
        data.CampaignData[20].campaignTitle1 = newValue;
      } else if (fieldToUpdate === 'campaignTitle2') {
        data.CampaignData[21].campaignTitle2 = newValue;
      } else if (fieldToUpdate === 'campaignTitle3') {
        data.CampaignData[22].campaignTitle3 = newValue;
      } else if (fieldToUpdate === 'campaignTitle4') {
        data.CampaignData[23].campaignTitle4 = newValue;
      } else if (fieldToUpdate === 'campaignTitle5') {
        data.CampaignData[24].campaignTitle5 = newValue;
      } else if (fieldToUpdate === 'campaignTitle6') {
        data.CampaignData[25].campaignTitle6 = newValue;
      } else if (fieldToUpdate === 'campaignTitle7') {
        data.CampaignData[26].campaignTitle7 = newValue;
      }
      else if (fieldToUpdate === 'scheduleDate3') {
        data.CampaignData[27].scheduleDate3 = newValue;
      } else if (fieldToUpdate === 'campaignTitleBasic1') {
        data.CampaignData[28].campaignTitleBasic1 = newValue;
      } else if (fieldToUpdate === 'campaignTitleBasic2') {
        data.CampaignData[29].campaignTitleBasic2 = newValue;
      }








      else if (fieldToUpdate === 'Guest_url') {
        data.GuestUserDetails[0].Guest_url = newValue;
      }
      else if (fieldToUpdate === 'Guest_userID') {
        data.GuestUserDetails[1].Guest_userID = newValue;
      }

      else if (fieldToUpdate === 'Guest_password') {
        data.GuestUserDetails[2].Guest_password = newValue;
      }





      else {
        console.error('Invalid fieldToUpdate parameter');
        return;
      }

      // Convert data back to YAML format
      const updatedYAML = yaml.dump(data);

      // Write updated YAML back to file
      fs.writeFileSync('Fixtures/data.yaml', updatedYAML, 'utf8');

      console.log('YAML file updated successfully.');
    } catch (error) {
      console.error('Error updating YAML file:', error);
    }
  }



  public async createCampaign(campaignTitle: string) {
    console.log('Creating campaign');


    // Get the current time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // If current time is between 22:00 and 8:00, set it to 8:00
    if (hours >= 22 || hours < 8) {
      hours = 8;
      minutes = 0;
    } else {
      // Round the minutes to the nearest 30 minutes
      if (minutes > 30) {
        hours++; // Move to the next hour
        minutes = 0; // Reset minutes to 0
      } else {
        minutes = 30; // Set minutes to 30
      }
    }

    // Set the time components
    now.setHours(hours);
    now.setMinutes(minutes);

    // Format and print the rounded time in local time zone
    let formattedTime = now.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });

    console.log('Rounded Local Time1:', formattedTime);
    const duration = readFromYamlFilePath('CampaignData')['interviewDuration']
    if (duration == '30') {
      now.setMinutes(now.getMinutes() + 30);
    } else if (duration == '60') {
      now.setMinutes(now.getMinutes() + 60);
    } else if (duration == '90') {
      now.setMinutes(now.getMinutes() + 90);
    } else if (duration == '120') {
      now.setMinutes(now.getMinutes() + 120);
    }


    // Format and print the time after adding 30 minutes
    let addedTime = now.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });
    const addedHours = now.getHours();
    if (addedHours >= 22 || addedHours < 8) {
      formattedTime = '08:00';
      addedTime = '10:00';

    }

    console.log('Added Time:', addedTime);
    // Print current time



    const currentDate = new Date();



    // Get the day of the month
    const dayOfMonth = (currentDate.getDate()).toString().padStart(2, '0');
    let dayOfMonthForYaml;

    let epochStartdate: string = '';

    if (hours.toString() >= '20') {
      // Advance the date by one day
      console.log("hours: .............", hours);
      dayOfMonthForYaml = (currentDate.getDate() + 1).toString();
      const Startdatefrocalendar = await this.getDates('yyyy-mm-dd', 1);
      epochStartdate = await this.epochtodate(Startdatefrocalendar);


      this.waitForSecond(2);



    } else {
      dayOfMonthForYaml = (currentDate.getDate()).toString();
      const Startdatefrocalendar = await this.getDates('yyyy-mm-dd', 1);
      epochStartdate = await this.epochtodate(Startdatefrocalendar);

    }



    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const currentMonthFOrYaml = (currentDate.getMonth() + 1).toString();


    const interviewSchedule = currentMonthFOrYaml + "月" + dayOfMonthForYaml + "日" + ' ' + formattedTime + '〜' + addedTime.toString();

    const interviewScheduletime = formattedTime + ' 〜 ' + addedTime.toString();

    const interviewScheduleDate = currentMonth + "月" + dayOfMonth + "日";


    const EndDate = new Date(currentDate);
    const ImplementationStartDay = new Date(currentDate);
    ImplementationStartDay.setDate(currentDate.getDate() + 1);

    EndDate.setDate(currentDate.getDate() + 5);

    const Enddatefrocalendar = await this.getDates('yyyy-mm-dd', 5);
    const epochenddate = await this.epochtodate(Enddatefrocalendar);
    console.log(epochenddate);
    console.log(epochStartdate);

    const releaseDate = currentDate.toISOString().split('T')[0].replace(/-/g, '/');


    const implementationStartDate = ImplementationStartDay.toISOString().split('T')[0].replace(/-/g, '/');
    const implementationEndDate = EndDate.toISOString().split('T')[0].replace(/-/g, '/');
    const interviewScheduleAgoraMonitor = currentMonthFOrYaml + "月" + dayOfMonthForYaml + "日"



    await this.updateYAMLField('implementationStartDate', implementationStartDate);
    await this.updateYAMLField('implementationEndDate', implementationEndDate);
    await this.updateYAMLField('releaseDate', releaseDate);

    await this.updateYAMLField('interviewSchedule', interviewSchedule);
    await this.updateYAMLField('scheduleDate3', interviewScheduleAgoraMonitor);


    if (campaignTitle === 'campaignTitle1' || campaignTitle === 'campaignTitle') {
      await this.updateYAMLField('scheduleTime2', interviewScheduletime);

      await this.updateYAMLField('scheduleDate2', interviewScheduleDate);
    }

    await this.clickOnTheCampaignCreationButton();
    await this.enterCampaignTitle(campaignTitle);
    await this.enterRecruitmentCondition('recruitmentCondition');
    await this.enterRequiredMonitorCount('monitorCount');
    await this.clickOnInterviewDurationListBox();
    await this.selectTheInterviewDurationFromList('interviewDuration');
    await this.clickOnTheCampaignCreationScheduleCalender();
    console.log("epoc:" + epochStartdate, epochenddate)
    await this.selectTheInterviewScheduleFrom2(epochStartdate);
    console.log("epocTIME IS GIVEN:" + epochStartdate)
    await this.selectTheInterviewScheduleFrom2(epochenddate);
    await this.verifyMaximumCountOfApplicant();
    await this.clickOnSlotSelectionArea();

    let newformattedTime;

    if (formattedTime >= "20:00") {
      newformattedTime = "08:00";
      await this.selectSlotFromSlotSelectionArea("0", "2", newformattedTime);
    } else {
      await this.selectSlotFromSlotSelectionArea("0", "2", formattedTime);
    }
    await this.disableSurverSectionByClickingToggleButton();
    await this.clickOnSurveyDisabledConfirmationPopup();
    await this.clickGenderRadioButton("male")  //filter conditions for campaign listing
    await this.selectLowerAge("31");//filter conditions for campaign listing
    await this.selectUpperAge("31");//filter conditions for campaign listing
    await this.selectProfession("会社員(その他)");//filter conditions for campaign listing
    await this.clickMarriedStatusRadioButton("married");//filter conditions for campaign listing
    await this.clickChildrenStatusRadioButton("yes");//filter conditions for campaign listing
    await this.selectLowerHouseHoldIncome("600");//filter conditions for campaign listing
    await this.selectUpperHouseHoldIncome("800");//filter conditions for campaign listing
    await this.selectLowerPersonalIncome("400");//filter conditions for campaign listing
    await this.selectUpperPersonalIncome("600");//filter conditions for campaign listing
    await this.navigateToCampaignConfirmationScreen();
    await this.clickOnCampaignPublishButton();
    await this.clickOnTheCampaignCreationConfirmationPopup();
  }

  public async createCampaignForAgoraMeeting(campaignTitle: string) {





    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();


    if (hours >= 22 || hours < 8) {
      hours = 8;
      minutes = 0;
    } else {
      // Round the minutes to the nearest 30 minutes
      if (minutes > 30) {
        hours++; // Move to the next hour
        minutes = 0; // Reset minutes to 0
      } else {
        minutes = 30; // Set minutes to 30
      }
    }

    // Set the time components
    now.setHours(hours);
    now.setMinutes(minutes);

    // Format and print the rounded time in local time zone
    let formattedTime = now.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });



    console.log('Rounded Local Time1:', formattedTime);
    const duration = readFromYamlFilePath('CampaignData')['interviewDuration']
    if (duration == '30') {
      now.setMinutes(now.getMinutes() + 30);
    } else if (duration == '60') {
      now.setMinutes(now.getMinutes() + 60);
    } else if (duration == '90') {
      now.setMinutes(now.getMinutes() + 90);
    } else if (duration == '120') {
      now.setMinutes(now.getMinutes() + 120);
    }


    // Format and print the time after adding 30 minutes
    let addedTime = now.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });
    const addedHours = now.getHours();
    if (addedHours >= 22 || addedHours < 8) {
      formattedTime = '08:00';
      addedTime = '10:00';

    }

    console.log('Added Time:', addedTime);
    // Print current time



    const currentDate = new Date();



    // Get the day of the month
    const dayOfMonth = (currentDate.getDate()).toString().padStart(2, '0');
    let dayOfMonthForYaml;

    let epochStartdate: string = '';

    if (hours.toString() >= '20') {
      // Advance the date by one day
      console.log("hours: .............", hours);
      dayOfMonthForYaml = (currentDate.getDate() + 1).toString();
      const Startdatefrocalendar = await this.getDates('yyyy-mm-dd', 0);
      epochStartdate = await this.epochtodate(Startdatefrocalendar);


      this.waitForSecond(2);



    } else {
      dayOfMonthForYaml = (currentDate.getDate()).toString();
      const Startdatefrocalendar = await this.getDates('yyyy-mm-dd', 0);
      epochStartdate = await this.epochtodate(Startdatefrocalendar);

    }



    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const currentMonthFOrYaml = (currentDate.getMonth() + 1).toString();


    const interviewSchedule = currentMonthFOrYaml + "月" + dayOfMonthForYaml + "日" + ' ' + formattedTime + '~' + addedTime.toString();

    const interviewScheduletime = formattedTime + ' 〜 ' + addedTime.toString();

    const interviewScheduleDate = currentMonth + "月" + dayOfMonth + "日";


    const EndDate = new Date(currentDate);
    const ImplementationStartDay = new Date(currentDate);
    ImplementationStartDay.setDate(currentDate.getDate() + 1);

    EndDate.setDate(currentDate.getDate() + 5);

    const Enddatefrocalendar = await this.getDates('yyyy-mm-dd', 5);
    const epochenddate = await this.epochtodate(Enddatefrocalendar);
    console.log(epochenddate);
    console.log(epochStartdate);

    const releaseDate = currentDate.toISOString().split('T')[0].replace(/-/g, '/');


    const implementationStartDate = ImplementationStartDay.toISOString().split('T')[0].replace(/-/g, '/');
    const implementationEndDate = EndDate.toISOString().split('T')[0].replace(/-/g, '/');
    const interviewScheduleAgoraMonitor = currentMonthFOrYaml + "月" + dayOfMonthForYaml + "日"



    await this.updateYAMLField('implementationStartDate', implementationStartDate);
    await this.updateYAMLField('implementationEndDate', implementationEndDate);
    await this.updateYAMLField('releaseDate', releaseDate);

    await this.updateYAMLField('interviewSchedule', interviewSchedule);
    await this.updateYAMLField('scheduleDate3', interviewScheduleAgoraMonitor);


    //await this.updateYAMLField(campaignTitle, campaign_title);

    if (campaignTitle === 'campaignTitle1' || campaignTitle === 'campaignTitle') {
      await this.updateYAMLField('scheduleTime2', interviewScheduletime);

      await this.updateYAMLField('scheduleDate2', interviewScheduleDate);
    }

    await this.clickOnTheCampaignCreationButton();
    await this.enterCampaignTitle(campaignTitle);
    await this.enterRecruitmentCondition('recruitmentCondition');
    await this.enterRequiredMonitorCount('monitorCount');
    await this.clickOnInterviewDurationListBox();
    await this.selectTheInterviewDurationFromList('interviewDuration');
    await this.clickOnTheCampaignCreationScheduleCalender();
    console.log("epoc:" + epochStartdate, epochenddate)
    await this.selectTheInterviewScheduleFrom2(epochStartdate);
    await this.selectTheInterviewScheduleFrom2(epochenddate);
    await this.verifyMaximumCountOfApplicant();
    await this.clickOnSlotSelectionArea();
    let newformattedTime;

    if (formattedTime >= "20:00") {
      newformattedTime = "08:00";
      await this.selectSlotFromSlotSelectionArea("0", "2", newformattedTime);
    } else {
      await this.selectSlotFromSlotSelectionArea("0", "2", formattedTime);
    }
    await this.disableSurverSectionByClickingToggleButton();
    await this.clickOnSurveyDisabledConfirmationPopup();
    await this.clickGenderRadioButton("male")  //filter conditions for campaign listing
    await this.selectLowerAge("31");//filter conditions for campaign listing
    await this.selectUpperAge("31");//filter conditions for campaign listing
    await this.selectProfession("会社員(その他)");//filter conditions for campaign listing
    await this.clickMarriedStatusRadioButton("married");//filter conditions for campaign listing
    await this.clickChildrenStatusRadioButton("yes");//filter conditions for campaign listing
    await this.selectLowerHouseHoldIncome("600");//filter conditions for campaign listing
    await this.selectUpperHouseHoldIncome("800");//filter conditions for campaign listing
    await this.selectLowerPersonalIncome("400");//filter conditions for campaign listing
    await this.selectUpperPersonalIncome("600");//filter conditions for campaign listing
    await this.navigateToCampaignConfirmationScreen();
    await this.clickOnCampaignPublishButton();
    await this.clickOnTheCampaignCreationConfirmationPopup();
    await this.waitForSecond(4);
  }


  public async createCampaignWithSurvey(campaignTitle: string) {
    console.log('Creating campaign---------------------');

    // Get the current time
    const now = new Date();
    let hours = now.getHours();
    console.log('hours' + hours);
    let minutes = now.getMinutes();

    // If current time is between 22:00 and 8:00, set it to 8:00
    if (hours >= 22 || hours < 8) {
      hours = 8;
      minutes = 0;
    } else {
      // Round the minutes to the nearest 30 minutes
      if (minutes > 30) {
        hours++; // Move to the next hour
        minutes = 0; // Reset minutes to 0
      } else {
        minutes = 30; // Set minutes to 30
      }
    }

    // Set the time components
    now.setHours(hours);
    now.setMinutes(minutes);

    // Format and print the rounded time in local time zone
    const formattedTime = now.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });

    console.log('Rounded Local Time4:', formattedTime);

    const duration = readFromYamlFilePath('CampaignData')['interviewDuration']
    if (duration == '30') {
      now.setMinutes(now.getMinutes() + 30);
    } else if (duration == '60') {
      now.setMinutes(now.getMinutes() + 60);
    } else if (duration == '90') {
      now.setMinutes(now.getMinutes() + 90);
    } else if (duration == '120') {
      now.setMinutes(now.getMinutes() + 120);
    }

    // Format and print the time after adding 30 minutes
    const addedTime = now.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });

    console.log('Added Time:', addedTime);

    // Print current time

    const currentDate = new Date();

    // Get the day of the month

    let dayOfMonthForYaml;
    let epochStartdate: string;

    if (hours.toString() >= '20') {
      // Advance the date by one day
      console.log("hours: .............", hours);
      dayOfMonthForYaml = (currentDate.getDate() + 1).toString();
      const Startdatefrocalendar = await this.getDates('yyyy-mm-dd', 1);
      epochStartdate = await this.epochtodate(Startdatefrocalendar);

      this.waitForSecond(2);
    } else {
      dayOfMonthForYaml = (currentDate.getDate()).toString();
      const Startdatefrocalendar = await this.getDates('yyyy-mm-dd', 0);
      epochStartdate = await this.epochtodate(Startdatefrocalendar);

    }



    const EndDate = new Date(currentDate);
    EndDate.setDate(currentDate.getDate() + 5);
    const Enddatefrocalendar = await this.getDates('yyyy-mm-dd', 5);
    const epochenddate = await this.epochtodate(Enddatefrocalendar);








    await this.clickOnTheCampaignCreationButton();
    await this.enterCampaignTitle(campaignTitle);
    await this.enterRecruitmentCondition('recruitmentCondition');
    await this.enterRequiredMonitorCount('monitorCount');
    await this.clickOnInterviewDurationListBox();
    await this.selectTheInterviewDurationFromList('interviewDuration');
    await this.clickOnTheCampaignCreationScheduleCalender();
    console.log('dayOfMonthForYaml' + dayOfMonthForYaml);
    await this.selectTheInterviewScheduleFrom2(epochStartdate);
    await this.selectTheInterviewScheduleFrom2(epochenddate);
    await this.verifyMaximumCountOfApplicant();
    await this.clickOnSlotSelectionArea();
    console.log("formattedTime: " + formattedTime);

    let newformattedTime;

    if (formattedTime >= "20:00") {
      newformattedTime = "08:00";
      await this.selectSlotFromSlotSelectionArea("0", "5", newformattedTime);
    } else {
      await this.selectSlotFromSlotSelectionArea("0", "5", formattedTime);
    }
    await this.clickOnTheNGIndustryButton();


    await this.selectMultipleNGIndustriesAsGroup('メディア・広告・リサーチ業');
    await this.selectMultipleNGIndustriesAsGroup('金融・保険業');
    await this.selectMultipleNGIndustriesAsGroup('建設・不動産業');
    await this.selectMultipleNGIndustriesAsGroup('運送・輸送業');
    await this.selectMultipleNGIndustriesAsGroup('協同組合・教育関連・公務員');
    await this.selectMultipleNGIndustriesAsGroup('医療業');
    await this.selectMultipleNGIndustriesAsGroup('宿泊・飲食・サービス業');
    await this.selectMultipleNGIndustriesAsGroup('卸売・小売業');
    await this.selectMultipleNGIndustriesAsGroup('製造業');
    await this.selectMultipleNGIndustriesAsGroup('電気・ガス・熱供給・水道業');
    await this.clickOnTheNGIndustryPopupSubmitButton()
    await this.selectQuestionTypeAsMultiChoice();
    await this.enterOptions();
    await this.selectQuestionTypeAsSingleChoice();
    await this.enterOptions();
    await this.selectQuestionTypeAsDescriptive();
    await this.clickGenderRadioButton("male");
    await this.selectUpperAge('18');
    await this.clickMarriedStatusRadioButton('unmarried');
    await this.clickChildrenStatusRadioButton('no');
    await this.selectResidence('佐賀県')
    await this.selectProfession('学生')
    await this.selectUpperPersonalIncome('200');
    await this.navigateToCampaignConfirmationScreen();
    await this.clickOnCampaignPublishButton();
    await this.clickOnTheCampaignCreationConfirmationPopup();
    await this.waitForSecond(15);
  }
  public async createCampaignWithOutSurvey(campaignTitle: string) {
    console.log('Creating campaign---------------------');

    // Get the current time
    const now = new Date();
    let hours = now.getHours();
    console.log('hours' + hours);
    let minutes = now.getMinutes();

    // If current time is between 22:00 and 8:00, set it to 8:00
    if (hours >= 22 || hours < 8) {
      hours = 8;
      minutes = 0;
    } else {
      // Round the minutes to the nearest 30 minutes
      if (minutes > 30) {
        hours++; // Move to the next hour
        minutes = 0; // Reset minutes to 0
      } else {
        minutes = 30; // Set minutes to 30
      }
    }

    // Set the time components
    now.setHours(hours);
    now.setMinutes(minutes);

    // Format and print the rounded time in local time zone
    const formattedTime = now.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });

    console.log('Rounded Local Time3:', formattedTime);

    const duration = readFromYamlFilePath('CampaignData')['interviewDuration']
    if (duration == '30') {
      now.setMinutes(now.getMinutes() + 30);
    } else if (duration == '60') {
      now.setMinutes(now.getMinutes() + 60);
    } else if (duration == '90') {
      now.setMinutes(now.getMinutes() + 90);
    } else if (duration == '120') {
      now.setMinutes(now.getMinutes() + 120);
    }

    // Format and print the time after adding 30 minutes
    const addedTime = now.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });

    console.log('Added Time:', addedTime);

    // Print current time


    const currentDate = new Date();

    // Get the day of the month
    let dayOfMonthForYaml;
    let epochStartdate: string;
    if (hours.toString() >= '20') {
      // Advance the date by one day
      console.log("hours: .............", hours);
      dayOfMonthForYaml = (currentDate.getDate() + 1).toString();
      const Startdatefrocalendar = await this.getDates('yyyy-mm-dd', 1);
      epochStartdate = await this.epochtodate(Startdatefrocalendar);




      this.waitForSecond(2);
    } else {
      dayOfMonthForYaml = (currentDate.getDate()).toString();
      const Startdatefrocalendar = await this.getDates('yyyy-mm-dd', 0);
      epochStartdate = await this.epochtodate(Startdatefrocalendar);



    }


    const EndDate = new Date(currentDate);
    EndDate.setDate(currentDate.getDate() + 5);



    const Enddatefrocalendar = await this.getDates('yyyy-mm-dd', 5);
    const epochenddate = await this.epochtodate(Enddatefrocalendar);




    await this.clickOnTheCampaignCreationButton();
    await this.enterCampaignTitle(campaignTitle);
    await this.enterRecruitmentCondition('recruitmentCondition');
    await this.enterRequiredMonitorCount('monitorCount');
    await this.clickOnInterviewDurationListBox();
    await this.selectTheInterviewDurationFromList('interviewDuration');
    await this.clickOnTheCampaignCreationScheduleCalender();
    console.log('dayOfMonthForYaml' + dayOfMonthForYaml);
    await this.selectTheInterviewScheduleFrom2(epochStartdate);
    await this.selectTheInterviewScheduleFrom2(epochenddate);
    await this.verifyMaximumCountOfApplicant();
    await this.clickOnSlotSelectionArea();
    console.log("formattedTime: " + formattedTime);

    let newformattedTime;

    if (formattedTime >= "20:00") {
      newformattedTime = "08:00";
      await this.selectSlotFromSlotSelectionArea("0", "5", newformattedTime);
    } else {
      await this.selectSlotFromSlotSelectionArea("0", "5", formattedTime);
    }


    await this.clickGenderRadioButton("male");
    await this.selectLowerAge('18');
    await this.selectUpperAge('19');
    await this.clickMarriedStatusRadioButton('unmarried');
    await this.clickChildrenStatusRadioButton('no');
    await this.selectResidence('佐賀県')
    await this.selectProfession('学生')
    await this.selectUpperPersonalIncome('200');
    await this.disableSurverSectionByClickingToggleButton();
    await this.clickOnSurveyDisabledConfirmationPopup();
    await this.navigateToCampaignConfirmationScreen();
    await this.clickOnCampaignPublishButton();
    await this.clickOnTheCampaignCreationConfirmationPopup();
    this.waitForSecond(15);
  }





  public async createCampaignWithSurveyAndNoBasicAttributes(campaignTitle: string) {
    const now = new Date();
    let hours = now.getHours();
    console.log('hours' + hours);
    let minutes = now.getMinutes();

    // If current time is between 22:00 and 8:00, set it to 8:00
    if (hours >= 22 || hours < 8) {
      hours = 8;
      minutes = 0;
    } else {
      // Round the minutes to the nearest 30 minutes
      if (minutes > 30) {
        hours++; // Move to the next hour
        minutes = 0; // Reset minutes to 0
      } else {
        minutes = 30; // Set minutes to 30
      }
    }

    // Set the time components
    now.setHours(hours);
    now.setMinutes(minutes);

    // Format and print the rounded time in local time zone
    const formattedTime = now.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });

    console.log('Rounded Local Time2:', formattedTime);

    const duration = readFromYamlFilePath('CampaignData')['interviewDuration']
    if (duration == '30') {
      now.setMinutes(now.getMinutes() + 30);
    } else if (duration == '60') {
      now.setMinutes(now.getMinutes() + 60);
    } else if (duration == '90') {
      now.setMinutes(now.getMinutes() + 90);
    } else if (duration == '120') {
      now.setMinutes(now.getMinutes() + 120);
    }

    // Format and print the time after adding 30 minutes
    const addedTime = now.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });

    console.log('Added Time:', addedTime);

    // Print current time

    const currentDate = new Date();

    // Get the day of the month
    const dayOfMonth = (currentDate.getDate()).toString().padStart(2, '0');
    let dayOfMonthForYaml;
    let epochStartdate: string;
    if (hours.toString() >= '20') {
      // Advance the date by one day
      console.log("hours: .............", hours);
      dayOfMonthForYaml = (currentDate.getDate() + 1).toString();
      const Startdatefrocalendar = await this.getDates('yyyy-mm-dd', 1);
      epochStartdate = await this.epochtodate(Startdatefrocalendar);

      this.waitForSecond(2);
    } else {
      dayOfMonthForYaml = (currentDate.getDate()).toString();
      const Startdatefrocalendar = await this.getDates('yyyy-mm-dd', 0);
      epochStartdate = await this.epochtodate(Startdatefrocalendar);

    }

    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const currentMonthFOrYaml = (currentDate.getMonth() + 1).toString();

    const interviewSchedule = currentMonthFOrYaml + "月" + dayOfMonthForYaml + "日" + ' ' + formattedTime + '〜' + addedTime.toString();
    const interviewScheduletime = formattedTime + '〜' + addedTime.toString();
    const interviewScheduleDate = currentMonth + "月" + dayOfMonth + "日";

    const EndDate = new Date(currentDate);
    EndDate.setDate(currentDate.getDate() + 5);



    const Enddatefrocalendar = await this.getDates('yyyy-mm-dd', 5);
    const epochenddate = await this.epochtodate(Enddatefrocalendar);






    const implementationStartDate = currentDate.toISOString().split('T')[0].replace(/-/g, '/');
    const implementationEndDate = EndDate.toISOString().split('T')[0].replace(/-/g, '/');
    const interviewScheduleAgoraMonitor = currentMonthFOrYaml + "月" + dayOfMonthForYaml + "日";

    await this.updateYAMLField('implementationStartDate', implementationStartDate);
    await this.updateYAMLField('implementationEndDate', implementationEndDate);
    await this.updateYAMLField('releaseDate', implementationStartDate);
    await this.updateYAMLField('interviewSchedule', interviewSchedule);
    await this.updateYAMLField('scheduleDate3', interviewScheduleAgoraMonitor);
    await this.updateYAMLField('scheduleTime2', interviewScheduletime);
    await this.updateYAMLField('scheduleDate2', interviewScheduleDate);

    await this.clickOnTheCampaignCreationButton();
    await this.enterCampaignTitle(campaignTitle);
    await this.enterRecruitmentCondition('recruitmentCondition');
    await this.enterRequiredMonitorCount('monitorCount');
    await this.clickOnInterviewDurationListBox();
    await this.selectTheInterviewDurationFromList('interviewDuration');
    await this.clickOnTheCampaignCreationScheduleCalender();
    console.log('dayOfMonthForYaml' + dayOfMonthForYaml);
    await this.selectTheInterviewScheduleFrom2(epochStartdate);
    await this.selectTheInterviewScheduleFrom2(epochenddate);
    await this.verifyMaximumCountOfApplicant();
    await this.clickOnSlotSelectionArea();
    console.log("formattedTime: " + formattedTime);

    let newformattedTime;

    if (formattedTime >= "20:00") {
      newformattedTime = "08:00";
      await this.selectSlotFromSlotSelectionArea("0", "5", newformattedTime);
    } else {
      await this.selectSlotFromSlotSelectionArea("0", "5", formattedTime);
    }

    await this.selectQuestionTypeAsMultiChoice();
    await this.enterOptions();
    await this.clickAdditionalQuestionAddButton();
    await this.selectQuestionTypeAsSingleChoice();
    await this.enterOptions();
    await this.clickAdditionalQuestionAddButton();
    await this.selectQuestionTypeAsDescriptive();
    await this.navigateToCampaignConfirmationScreen();
    await this.clickOnCampaignPublishButton();
    await this.clickOnTheCampaignCreationConfirmationPopup();
    await this.waitForSecond(6);
  }




  public async clickOnTheProjectTitle1(projectTitle: string, page: any) {
    const locator = page.locator('//div[(text()="' + projectTitle + '")]');
    console.log(locator)
    await locator.click();
    this.waitForSecond(1);
  }


  public async applyCampaign(title: string, user: string) {

    const page = await this.getUserPage(user);

    await this.clickOnTheProjectTitleAgora(title, user);






    const locator = page.locator(this.loc_Monitor_Survey_Proceed_Btn);

    await locator.click();
    //pop up agreement
    const CriteriaBtn_locator = page.locator(this.loc_MeetsCritieria_Btn);

    await CriteriaBtn_locator.click();
    const CriteriaNext_Btn_locator = page.locator(this.loc_MeetsCritieria_NextBtn);


    await CriteriaNext_Btn_locator.click();

    //apply button 2
    const locat = page.locator(this.loc_Monitor_Survey_apply_Btn);
    await locat.click();

    //survey page

    const check = page.locator(this.loc_Monitor_Survey_RecruitmentCondition1_Option);
    await check.click();

    //conditions

    const condition2 = page.locator(
      this.loc_Monitor_Survey_RecruitmentCondition2_Option
    );
    await condition2.click();

    const condition3 = page.locator(
      this.loc_Monitor_Survey_RecruitmentCondition3_Option);

    await condition3.click();
    //apply final button
    const applyBtn = page.locator(
      this.loc_Monitor_Survey_Applybutton_Enabled_Btn)

    await applyBtn.click();


    const confirmBtn = page.locator(
      this.loc_Monitor_CampaignApplyConfirmationPopupSubmit_Btn);

    await confirmBtn.click()
    this.waitForSecond(3);




  }

  public async clickOnAMonitor(monitor: string) {
    const locator = this.page.locator(
      this.loc_IndividualScheduleOffer_DifferentOffer_Monitor_Btn.replace('NickName', monitor),
    );
    await locator.click();
  }


  public async selectScheduleOfferTab() {
    await this.loc_IndividualScheduleOffer_OfferTab_Tab.click();
  }


  public async clickSchedule() {

    const locator = this.page.locator(this.loc_IndividualSchedule_Btn)

    await locator.click();


  }

  public async clickOnAppliedTab(page: any) {

    const locator = page.locator(this.loc_Monitor_TopPage_AppliedTab_Lnk);
    await locator.click();
  }


  public async clickOnOfferSubmitButton() {
    this.waitForSecond(3)

    await this.loc_IndividualScheduleOffer_OfferSubmitButton_Btn.click();
  }
  public async sendSchedule() {
    const monitorName = readFromYamlFilePath('CampaignData')['monitorname']
    await this.clickOnAMonitor(monitorName)
    await this.selectScheduleOfferTab();
    await this.clickSchedule();
    await this.clickOnOfferSubmitButton();


  }

  public async clickOnSubmitButton(page: any) {
    await page.bringToFront();
    this.waitForSecond(2)
    const locator = page.locator(this.loc_Monitor_ScheduleOffering_EnabledAcceptButton_Btn);
    await locator.click();

  }

  public async clickConnfirmations(page: any) {
    this.waitForSecond(2)

    const locator = page.locator(this.loc_Monitor_ScheduleOffering_ConfirmationPopupAccept_Btn);
    await locator.click();

    const locator2 = page.locator(this.loc_Monitor_ScheduleOffering_AcknowledgementClose_Btn);
    await locator2.click();

  }


  public async acceptSchedule(user: string) {

    const page = await this.getUserPage(user);
    await this.clickOnAppliedTab(page)
    const projectTitle = readFromYamlFilePath('CampaignData')['campaignTitle']
    await this.clickOnTheProjectTitle(projectTitle, page)
    const loc = page.locator(this.loc_Monitor_ScheduleOffering_Accept_radio_Btn);
    await loc.click();
    await this.clickOnSubmitButton(page);
    await this.clickConnfirmations(page);

  }



}


