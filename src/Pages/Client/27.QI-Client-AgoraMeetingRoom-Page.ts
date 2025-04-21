/* eslint-disable no-console */
import ScenarioContext from '../../support/ScenarioContext';
import { BasePage } from '../../utils/BasePage';
import { Page } from '@playwright/test';
import { readFromYamlFilePath } from '../../utils/YamlReader';

export default class ClientAgoraMeeting extends BasePage {

  page: Page;

  readonly loc_Client_MeetingSettingsPage_NickName_TxtBox: string;
  readonly loc_Client_MeetingSettingsPage_JoinAsInterviewer_Btn: string;
  readonly loc_Client_MeetingSettingsPage_JoinAsBackroom_Btn: string;
  readonly loc_Client_AgoraMeetingRoom_CampaignTitle_Lbl: string;
  readonly loc_Client_AgoraMeetingRoom_InterviewerName_Lbl: string;
  readonly loc_Client_AgoraMeetingRoom_Recording_Icon: string;
  readonly loc_Client_AgoraMeetingRoom_EnabledMic_Btn: string;
  readonly loc_Client_AgoraMeetingRoom_DisabledMic_Btn: string;
  readonly loc_Client_AgoraMeetingRoom_DisabledVideo_Btn: string;
  readonly loc_Client_AgoraMeetingRoom_EnabledVideo_Btn: string;
  readonly loc_Client_AgoraMeetingRoom_NotFocusedMonitorInfo_Btn: string;
  readonly loc_Client_AgoraMeetingRoom_NotFocusedParticipantsList_Btn: string;
  readonly loc_Client_AgoraMeetingRoom_NotFocusedChat_Btn: string;
  readonly loc_Client_AgoraMeetingRoom_FocusedMonitorInfo_Btn: string;
  readonly loc_Client_AgoraMeetingRoom_FocusedParticipantsList_Btn: string;
  readonly loc_Client_AgoraMeetingRoom_FocusedChat_Btn: string;
  readonly loc_Client_AgoraMeetingRoom_LeaveButton_Btn: string;
  readonly loc_Client_AgoraMeetingRoom_MonitorNickName_Lbl: string;
  readonly loc_Client_AgoraMeetingRoom_MonitorGender_Lbl: string;
  readonly loc_Client_AgoraMeetingRoom_MonitorPrefecture_Lbl: string;
  readonly loc_Client_AgoraMeetingRoom_MonitorJoiningRequestPopupAccept_Btn: string;
  readonly loc_Client_AgoraMeetingRoom_ParticipantName_Lbl: string;
  readonly loc_Client_AgoraMeetingRoom_ScheduleDate_Lbl: string;
  readonly loc_Client_AgoraMeetingRoom_InterviewDuration_Lbl: string;
  readonly loc_Client_AgoraMeetingRoom_ChatTabs_Lbl: string;
  loc_Client_MeetingSettingsPage_ConfirmationPopupAccept_Btn: string;

  loc_Client_MeetingSettingsPage_LeavingConfirmationPopupAccept_Btn: string;
  loc_Clienr_AgoraMeetingRoom_InterviewLeavingFeedbackCancel_Btn: string;
  loc_Client_AgoraMeetingRoom_InterviewLeavingRetry_Btn: string;
  loc_Monitor_AgoraMeetingRoom_InterviewLeavingCloseScreen_Btn: string;
  loc_Client_CompletionTab_Project_Feedback_Q1_Lbl: string;
  loc_Client_CompletionTab_Project_Feedback_Q2_Lbl: string;
  loc_Client_CompletionTab_Project_Feedback_rating_Btn: string;
  loc_Client_CompletionTab_Project_Feedback_Answer_Txt_Box: string;
  loc_Client_CompletionTab_Project_Feedback_Submit_Btn: string;
  loc_Client_CompletionTab_Project_Feedback_Error_Msg: string;
  loc_Client_Logout_Btn: string;

  loc_Client_Logout_Btn2: string;
  loc_Client_MeetingSettingsPage_validation_msg: string;
  loc_Client_MeetingSettingsPage_campaignTitle_lbl: string;
  loc_Client_CampaignDetailsPage_CampaignScheduleDate: string;
  loc_Client_CampaignDetailsPage_CampaignSceduleTime: string;
  loc_Client_CampaignDetailsPage_Campaign_join_msg: string;
  loc_Client_Screen_Share_Btn: string;
  loc_Client_CompletionTab_Project_Feedback_Max_Char_Error_Msg: string;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.loc_Client_MeetingSettingsPage_LeavingConfirmationPopupAccept_Btn =
      "(//button/div[text()='退出する'])[2]";
    this.loc_Client_MeetingSettingsPage_ConfirmationPopupAccept_Btn = "//button[text()='了承する']";

    this.loc_Client_MeetingSettingsPage_NickName_TxtBox = "[data-testid='nickname']";

    this.loc_Client_MeetingSettingsPage_JoinAsInterviewer_Btn = '[data-testid="video-join-button"]';
    this.loc_Client_MeetingSettingsPage_JoinAsBackroom_Btn =
      "[data-testid='video-join-button-back-room']";
    this.loc_Client_AgoraMeetingRoom_CampaignTitle_Lbl =
      "//*[@id='campaignTitle']/div[text()='CampaignTitle']";
    this.loc_Client_AgoraMeetingRoom_InterviewerName_Lbl =
      "//*[@id='interviewername']//*[text()='InterviewerName']";
    this.loc_Client_AgoraMeetingRoom_Recording_Icon = "//*[@id='recordingIcon']";
    this.loc_Client_AgoraMeetingRoom_EnabledMic_Btn =
      "//*[@data-testid='mick-button']//*[@fill-rule='evenodd']/parent::*";
    this.loc_Client_AgoraMeetingRoom_DisabledMic_Btn =
      "(//*[@data-testid='mick-button']//*[@fill='white'])[1]";
    this.loc_Client_AgoraMeetingRoom_DisabledVideo_Btn =
      "//*[@id='videoControl']";
    this.loc_Client_AgoraMeetingRoom_EnabledVideo_Btn =
      "(//*[@id='videoControl']//*[@fill='white'])[1]";
    this.loc_Client_AgoraMeetingRoom_NotFocusedMonitorInfo_Btn =
      "(//*[@id='monitorInfo']//*[@fill='white'])[1]";
    this.loc_Client_AgoraMeetingRoom_NotFocusedParticipantsList_Btn =
      "(//*[@id='participants']//*[@fill='white'])[1]/parent::*";
    this.loc_Client_AgoraMeetingRoom_NotFocusedChat_Btn =
      "(//*[@id='chat']//*[@fill='white'])[1]/parent::*";
    this.loc_Client_AgoraMeetingRoom_FocusedMonitorInfo_Btn =
      "(//*[@id='monitorInfo'][not(contains(@fill,'white'))])[1]";
    this.loc_Client_AgoraMeetingRoom_FocusedParticipantsList_Btn =
      "(//*[@id='participants'][not(contains(@fill,'white'))])[1]";
    this.loc_Client_AgoraMeetingRoom_FocusedChat_Btn =
      "(//*[@id='chat']//*[@fill='#0A1826']/parent::*)[1]";
    this.loc_Client_AgoraMeetingRoom_LeaveButton_Btn = "//div[text()='退出する']";
    this.loc_Client_AgoraMeetingRoom_MonitorNickName_Lbl =
      "//div[@id='basic']//div[text()='NickName']";
    this.loc_Client_AgoraMeetingRoom_MonitorGender_Lbl = "//div[@id='basic']//div[text()='Gender']";
    this.loc_Client_AgoraMeetingRoom_MonitorPrefecture_Lbl =
      "//div[@id='basic']//div[text()='Prefecture']";
    this.loc_Client_AgoraMeetingRoom_MonitorJoiningRequestPopupAccept_Btn =
      "//button[text()='参加許可']";
    this.loc_Client_AgoraMeetingRoom_ParticipantName_Lbl =
      "//*[@id='name']//*[text()='ParticipantName']";
    this.loc_Client_AgoraMeetingRoom_ScheduleDate_Lbl =
      "//*[@id='dateInfo']//div[text()='InterviewSchedule']";
    this.loc_Client_AgoraMeetingRoom_InterviewDuration_Lbl =
      "//*[@id='timeInfo']//div[text()='InterviewDuration']";
    this.loc_Client_AgoraMeetingRoom_ChatTabs_Lbl = "//*[@role='tablist']//*[text()='ChatTab']";
    this.loc_Clienr_AgoraMeetingRoom_InterviewLeavingFeedbackCancel_Btn = "//div[text()='閉じる']";
    this.loc_Client_AgoraMeetingRoom_InterviewLeavingRetry_Btn = "//*[text()='再入室']";
    this.loc_Monitor_AgoraMeetingRoom_InterviewLeavingCloseScreen_Btn = "//*[text()='この画面を閉じる']"
    this.loc_Client_CompletionTab_Project_Feedback_Q1_Lbl = "//*[text()='今回のインタビューの満足度をお知らせください。']";
    this.loc_Client_CompletionTab_Project_Feedback_Q2_Lbl = "//*[text()='理由などございましたらお書きください。']";
    this.loc_Client_CompletionTab_Project_Feedback_rating_Btn = "//*[@id='rating_No']";
    this.loc_Client_CompletionTab_Project_Feedback_Answer_Txt_Box = '//*[@placeholder="500文字まで"]';
    this.loc_Client_CompletionTab_Project_Feedback_Submit_Btn = "//*[text()='この内容で回答']";
    this.loc_Client_CompletionTab_Project_Feedback_Error_Msg = "//*[text()='※ 必須項目が選択されていません。']";
    this.loc_Client_CompletionTab_Project_Feedback_Max_Char_Error_Msg = "//*[text()='※ 500文字以下で入力してください。']";
    this.loc_Client_Logout_Btn = "//div[6]/div[text()='ログアウト']";
    this.loc_Client_Logout_Btn2 = '//*[@id="confirmation-agreeButton"]';
    this.loc_Client_MeetingSettingsPage_validation_msg = "//*[@id='details']/p[text()='※ 20文字以下で入力してください。']"
    this.loc_Client_MeetingSettingsPage_campaignTitle_lbl = '//*[@id="heading"]//*[text()="title"]';
    this.loc_Client_CampaignDetailsPage_CampaignScheduleDate = "//*[contains(text(),'ScheduleDate')]"
    this.loc_Client_CampaignDetailsPage_CampaignSceduleTime = '//*[contains(text(),"ScheduleTime")]'
    this.loc_Client_CampaignDetailsPage_Campaign_join_msg = '//*[text()="※入室はインタビュー開始時間の5分前から可能です。"]';
    this.loc_Client_Screen_Share_Btn = "//*[@id='shareControl']";
  }
  public async enterTheClientUserName(username: string) {
    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_MeetingSettingsPage_NickName_TxtBox);
    await locator.fill(readFromYamlFilePath('Clientdetails')[username]);
  }

  public async enterTheClientUserName2(user: string,) {
    const page = await this.getUserPage(user);
    const userName = readFromYamlFilePath('BackroomData')['backroomUserName']
    const locator = page.locator(this.loc_Client_MeetingSettingsPage_NickName_TxtBox);
    await locator.fill(userName);
  }









  public async clickOnJoinAsInterviewerButton(user: string) {
    console.log(user);

    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_MeetingSettingsPage_JoinAsInterviewer_Btn);
    await locator.click();
  }
  public async acceptTheConfirmationToJoinTheInterview() {
    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_MeetingSettingsPage_ConfirmationPopupAccept_Btn);
    await locator.click();
    await this.waitForSecond(4);
  }



  public async VerifyUsernamefieldInput() {
    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_MeetingSettingsPage_ConfirmationPopupAccept_Btn);
    await this.locatorShouldBePresent(locator);
  }










  public async verifyTheCampaignTitleAgora(user: string) {
    console.log(user);
    const page3 = ScenarioContext.get('NewTab');
    const Campaign_title = readFromYamlFilePath('CampaignData')['campaignTitle']
    const locator = page3.locator(
      this.loc_Client_MeetingSettingsPage_campaignTitle_lbl.replace(
        'title',
        Campaign_title,
      ),
    );
    console.log(locator);
    await this.locatorShouldBePresent(locator);
  }


  public async verifyScheduleDateAgora(user: string) {
    console.log(user);
    const page3 = ScenarioContext.get('NewTab');
    const scheduleDate = readFromYamlFilePath('CampaignData')['scheduleDate3']
    console.log(scheduleDate)
    const locator = page3.locator(
      this.loc_Client_CampaignDetailsPage_CampaignScheduleDate.replace(
        'ScheduleDate',
        scheduleDate,
      ),
    )
    await this.locatorShouldBePresent(locator);

  }


  public async verifyJoiningMsg(user: string) {
    console.log(user);
    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_CampaignDetailsPage_Campaign_join_msg);
    await this.locatorShouldBePresent(locator);

  }



  public async verifyScheduleTimeAgora(user: string) {
    console.log(user);
    const page3 = ScenarioContext.get('NewTab');
    const scheduleTime = readFromYamlFilePath('CampaignData')['scheduleTime2']
    console.log(scheduleTime)
    const locator = page3.locator(
      this.loc_Client_CampaignDetailsPage_CampaignSceduleTime.replace(
        'ScheduleTime',
        scheduleTime,
      ),
    )
    await this.locatorShouldBePresent(locator);

  }


  public async verifyValidation(user: string) {
    console.log(user);
    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_MeetingSettingsPage_validation_msg);
    await this.locatorShouldBePresent(locator);
  }












  public async acceptTheConfirmationToJoinTheInterviewAgora(userName: string) {
    const page = await this.getUserPage(userName);
    await page.locator(this.loc_Client_MeetingSettingsPage_ConfirmationPopupAccept_Btn).click();

  }




  public async verifyMonitorJoinRequestNotPresent(userName: string) {
    const page = await this.getUserPage(userName);
    const locator = page.locator(this.loc_Client_AgoraMeetingRoom_MonitorJoiningRequestPopupAccept_Btn)
    await this.locatorShouldNotBePresent(locator);

  }


  public async verifyScreenShareBtnNotPresent(userName: string) {
    const page = await this.getUserPage(userName);
    const locator = page.locator(this.loc_Client_Screen_Share_Btn)
    await this.locatorShouldNotBePresent(locator);

  }




  public async acceptTheMeetingLeavingConfirmationPopup() {
    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(
      this.loc_Client_MeetingSettingsPage_LeavingConfirmationPopupAccept_Btn,
    );
    await locator.click();
  }

  public async clickOnJoinAsBackroomButton(user: string) {
    console.log(user);
    const page = await this.getUserPage(user);
    const locator = page.locator(this.loc_Client_MeetingSettingsPage_JoinAsBackroom_Btn);
    await locator.click();
  }

  public async verifyTheCampaignTitle(campaignTitle: string) {
    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(
      this.loc_Client_AgoraMeetingRoom_CampaignTitle_Lbl.replace('CampaignTitle', campaignTitle),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async verifyTheAgoraMeetingClientUserName(interviewername: string, user: string) {
    console.log(user);
    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(
      this.loc_Client_MeetingSettingsPage_NickName_TxtBox.replace(
        'InterviewerName',
        interviewername,
      ),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async verifyRecordingIconIsPresent(user: string) {
    console.log(user);

    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_AgoraMeetingRoom_Recording_Icon);
    await this.locatorShouldBePresent(locator);
  }

  public async clickOnAgoraMeetingEnabledMic(user: string) {
    console.log(user);
    this.waitForSecond(2);
    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_AgoraMeetingRoom_EnabledMic_Btn);

    await locator.click();
  }

  public async verifyTheMicGotDisabled(user: string) {
    console.log(user);

    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_AgoraMeetingRoom_DisabledMic_Btn);
    await this.locatorShouldBePresent(locator);
  }

  public async clickOnAgoraMeetingDisabledMic(user: string) {
    console.log(user);

    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_AgoraMeetingRoom_DisabledMic_Btn);
    await locator.click();
  }

  public async verifyTheMicGotEnabled(user: string) {
    console.log(user);
    this.waitForSecond(2);
    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_AgoraMeetingRoom_DisabledMic_Btn);
    await this.locatorShouldBePresent(locator);
  }

  public async clickOnAgoraMeetingDisabledVideoButton(user: string) {
    console.log(user);

    const page3 = ScenarioContext.get('NewTab');
    await page3.reload();
    const locator = page3.locator(this.loc_Client_AgoraMeetingRoom_DisabledVideo_Btn);
    await locator.click();
  }

  public async clickOnAgoraMeetingEnabledVideoButton(user: string) {
    console.log(user);
    this.waitForSecond(2);
    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_AgoraMeetingRoom_EnabledVideo_Btn);
    await locator.click();
  }

  public async clickOnAgoraMeetingNotFocusedMonitorInfoButton(user: string) {
    console.log(user);

    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_AgoraMeetingRoom_NotFocusedMonitorInfo_Btn);
    await locator.click();
  }

  public async clickOnAgoraMeetingNotFocusedParticipantsListButton(user: string) {
    console.log(user);

    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_AgoraMeetingRoom_NotFocusedParticipantsList_Btn);
    await locator.click();
  }

  public async clickOnAgoraMeetingNotFocusedChatListButton(user: string) {
    console.log(user);

    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_AgoraMeetingRoom_NotFocusedChat_Btn);
    await locator.click();
  }

  public async clickOnAgoraMeetingFocusedMonitorInfoButton(user: string) {
    console.log(user);

    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_AgoraMeetingRoom_FocusedMonitorInfo_Btn);
    await locator.click();
  }

  public async clickOnAgoraMeetingFocusedParticipantsListButton(user: string) {
    console.log(user);

    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_AgoraMeetingRoom_FocusedParticipantsList_Btn);
    await locator.click();
  }

  public async clickOnAgoraMeetingFocusedChatListButton(user: string) {
    console.log(user);

    const page3 = ScenarioContext.get('NewTab');
    await page3.bringToFront();
    const locator = page3.locator(this.loc_Client_AgoraMeetingRoom_NotFocusedChat_Btn);
    await locator.click();
  }

  public async clickOnAgoraMeetingLeaveButton(user: string) {
    console.log(user);

    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_AgoraMeetingRoom_LeaveButton_Btn);
    await locator.click();
  }

  public async verifyAgoraMeetingMonitorNickName(nickName: string, user: string) {
    console.log(user);

    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(
      this.loc_Client_AgoraMeetingRoom_MonitorNickName_Lbl.replace('NickName', nickName),
    );
    console.log("monitor---------------------" + locator);
    await this.locatorShouldBePresent(locator);
    console.log(locator);

  }

  public async verifyAgoraMeetingMonitorGender(user: string) {
    console.log(user);

    const page3 = ScenarioContext.get('NewTab');
    const gender = readFromYamlFilePath('monitordetails')['gender']
    const locator = page3.locator(
      this.loc_Client_AgoraMeetingRoom_MonitorGender_Lbl.replace('Gender', gender),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async verifyAgoraMeetingMonitorPrefecture(user: string) {
    console.log(user);

    const page3 = ScenarioContext.get('NewTab');
    const prefecture = readFromYamlFilePath('monitordetails')['prefecture']
    const locator = page3.locator(
      this.loc_Client_AgoraMeetingRoom_MonitorPrefecture_Lbl.replace('Prefecture', prefecture),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async acceptAgoraMeetingMonitorJoiningRequest(user: string) {
    console.log(user);
    await this.waitForSecond(3);
    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(
      this.loc_Client_AgoraMeetingRoom_MonitorJoiningRequestPopupAccept_Btn,
    );
    await locator.click();
    await this.waitForSecond(3);
  }

  public async verifyTheAgoraMeetingParticipantsName(participantsName: string, user: string) {
    console.log(user);

    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(
      this.loc_Client_AgoraMeetingRoom_ParticipantName_Lbl.replace(
        'ParticipantName',
        participantsName,
      ),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async verifyTheAgoraMeetingInterviewSchedule(interviewSchedule: string, user: string) {
    console.log(user);

    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(
      this.loc_Client_AgoraMeetingRoom_ScheduleDate_Lbl.replace(
        'InterviewSchedule',
        interviewSchedule,
      ),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async verifyTheAgoraMeetingInterviewDuration(interviewDuration: string, user: string) {
    console.log(user);

    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(
      this.loc_Client_AgoraMeetingRoom_InterviewDuration_Lbl.replace(
        'InterviewDuration',
        interviewDuration,
      ),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async logOut(user: string) {
    console.log(user);
    const page3 = ScenarioContext.get('NewTab');
    const locator1 = page3.locator(this.loc_Client_Logout_Btn);
    await locator1.click();
    const locator2 = page3.locator(this.loc_Client_Logout_Btn2);
    await locator2.click();
    this.waitForSecond(1);

  }










  public async verifyTheAgoraMeetingChatTab(chatTab: string, user: string) {
    console.log(user);

    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(
      this.loc_Client_AgoraMeetingRoom_ChatTabs_Lbl.replace('ChatTab', chatTab),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async clickOnFeedbackCancelButton() {
    await this.waitForSecond(4);
    const page3 = ScenarioContext.get('NewTab');
    await page3.locator(this.loc_Clienr_AgoraMeetingRoom_InterviewLeavingFeedbackCancel_Btn).click();
  }

  public async clickRetryButton() {
    const page3 = ScenarioContext.get('NewTab');
    this.waitForSecond(3);
    await page3.locator(this.loc_Client_AgoraMeetingRoom_InterviewLeavingRetry_Btn).click();
    await this.waitForSecond(2);
  }


  public async verifySettingsPage() {
    const page3 = ScenarioContext.get('NewTab');
    await this.locatorShouldBePresent(page3.locator(this.loc_Client_MeetingSettingsPage_JoinAsInterviewer_Btn));
  }

  public async clickCloseScreenButton() {
    const page3 = ScenarioContext.get('NewTab');
    await page3.locator(this.loc_Monitor_AgoraMeetingRoom_InterviewLeavingCloseScreen_Btn).click();
  }

  public async verifyFeedbackQuestion1() {

    const page3 = ScenarioContext.get('NewTab');
    await this.locatorShouldBePresent(page3.locator(this.loc_Client_CompletionTab_Project_Feedback_Q1_Lbl));
  }


  public async verifyFeedbackQuestion2() {

    const page3 = ScenarioContext.get('NewTab');
    await this.locatorShouldBePresent(page3.locator(this.loc_Client_CompletionTab_Project_Feedback_Q2_Lbl));
  }


  public async clickRatingBtn(rating: string) {

    const page = ScenarioContext.get('NewTab');

    await page.locator(this.loc_Client_CompletionTab_Project_Feedback_rating_Btn.replaceAll('rating_No', rating)).click();
  }





  public async answerQuestion2(answer: string) {

    const page3 = ScenarioContext.get('NewTab');
    const feedback = readFromYamlFilePath('CampaignData')[answer]
    await page3.locator(this.loc_Client_CompletionTab_Project_Feedback_Answer_Txt_Box).fill(feedback);
  }


  public async clickFeedbackSubmitButton() {

    const page3 = ScenarioContext.get('NewTab');
    await page3.locator(this.loc_Client_CompletionTab_Project_Feedback_Submit_Btn).click();
    await this.waitForSecond(2);
  }


  public async verifyErrorMessage() {

    const page3 = ScenarioContext.get('NewTab');
    await this.locatorShouldBePresent(page3.locator(this.loc_Client_CompletionTab_Project_Feedback_Error_Msg));
  }

  public async verifyMaximumCharacterValidation() {

    const page3 = ScenarioContext.get('NewTab');
    await this.locatorShouldBePresent(page3.locator(this.loc_Client_CompletionTab_Project_Feedback_Max_Char_Error_Msg));
  }







}