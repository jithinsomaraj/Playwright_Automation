/* eslint-disable import/namespace */
// import ScenarioContext from '../../support/ScenarioContext';

import { config } from '../../support/config';
import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';
import { readFromYamlFilePath } from '../../utils/YamlReader';
export default class Monitor_TopPageNotification extends BasePage {
  page: Page;
  sampleRadioButtonLocator?: Locator;

  readonly loc_Monitor_TopPage_TodaysInterviewTopNotification_Lbl: Locator;
  readonly loc_Monitor_TopPage_TodaysInterviewTopNotification_InterviewName_Lbl: string;
  readonly loc_Monitor_TopPage_TodaysInterviewTopNotification_Schedule_Lbl: string;
  readonly loc_Monitor_TopPage_TodoList_Lnk: Locator;
  readonly loc_Monitor_TopPage_LatestNews_Lnk: Locator;
  readonly loc_Monitor_TopPage_LatestNews_Lnk_Agora: string
  readonly loc_Monitor_NotificationPage_Heading_Lbl: Locator;
  loc_Monitor_NotificationPage_SelectedTodoListTabHeading_Lbl: Locator;
  loc_Monitor_NotificationPage_SelectedLatestNewsTabHeading_Lbl: Locator;
  loc_Monitor_NotificationPage_TodaysInterviewPopupClose_Btn: Locator;
  loc_Monitor_NotificationPage_ToDoListNotification_Lbl: string;
  loc_Monitor_NotificationPage_LatestNewsNotification_Lbl: string;
  loc_Monitor_NotificationPage_CampaignDetailsTab_Lbl: Locator;
  loc_Monitor_NotificationPage_CampaignChatTab_Lbl: Locator;
  loc_Monitor_NotificationPage_LatestNewsTabHeading_Lbl: Locator;
  loc_Monitor_CampaignDetailsPage_InterviewJoin_Btn: Locator;
  loc_Monitor_CampaignDetailsPage_CampaignScedule_Lbl: string;
  loc_Monitor_CampaignDetailsPage_CompanyName: string;
  loc_Monitor_NotificationPage_News_Lbl: string;
  loc_Monitor_CampaignDetailsPage_CampaignSceduleDate: string;
  loc_Monitor_CampaignDetailsPage_CampaignSceduleDate3: string;
  loc_Monitor_CampaignDetailsPage_CampaignSceduleTime: string;
  loc_Monitor_CampaignDetailsPage_InterviewRoom_Btn_Agora: string;
  loc_Monitor_CampaignDetailsPage_InterviewJoin_Btn_Agora: string;
  loc_Monitor_CampaignDetailsPage_CampaignTitle: string;
  loc_monitor_noticelisttitle: string;
  loc_monitor_noticedetailsTitle: string;
  loc_monitor_noticedetailsSubject: string;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.rightarrowlocator = this.page.locator('//button[@aria-label="Next month"]');
    this.leftarrowlocator = this.page.locator('//button[@aria-label="Previous month"]');
    this.loc_Monitor_TopPage_TodaysInterviewTopNotification_Lbl = this.page.locator(
      "//div[text()='本日インタビューの案件があります']",
    );
    this.loc_Monitor_TopPage_TodaysInterviewTopNotification_InterviewName_Lbl =
      "//*[text()='本日インタビューの案件があります']/parent::div/div[contains(text(),'InterviewName')]";
    this.loc_Monitor_TopPage_TodaysInterviewTopNotification_Schedule_Lbl =
      "//*[text()='本日インタビューの案件があります']/parent::div/div[contains(text(),'InterviewTime')]";
    this.loc_Monitor_TopPage_TodoList_Lnk = page.getByText('やることリスト');
    this.loc_Monitor_TopPage_LatestNews_Lnk = this.page.getByText('新着のお知らせ');

    this.loc_Monitor_TopPage_LatestNews_Lnk_Agora = '新着のお知らせ'

    this.loc_Monitor_NotificationPage_Heading_Lbl = this.page.locator(
      "//div/div[text()='お知らせ一覧']",
    );
    this.loc_Monitor_NotificationPage_SelectedTodoListTabHeading_Lbl = page.getByRole('tab', { name: 'やること' });
    this.loc_Monitor_NotificationPage_SelectedLatestNewsTabHeading_Lbl = this.page.getByRole('tab', { name: 'お知らせ' });
    this.loc_Monitor_NotificationPage_LatestNewsTabHeading_Lbl = this.page.locator(
      "//div/div[text()='お知らせ']",
    );
    this.loc_Monitor_NotificationPage_TodaysInterviewPopupClose_Btn = this.page.locator(
      "//button[@title='Close']",
    );
    this.loc_Monitor_NotificationPage_ToDoListNotification_Lbl =
      "(//div[@id='simple-tabpanel-0']//div/div[text()='Notification'])[1]";
    this.loc_Monitor_NotificationPage_News_Lbl = "(//div[text()='News'])[1]";

    this.loc_Monitor_NotificationPage_LatestNewsNotification_Lbl =
      "(//div[@id='simple-tabpanel-1']//div/div[text()='Notification'])[1]";
    this.loc_Monitor_NotificationPage_CampaignDetailsTab_Lbl = page.getByRole('tab', { name: '案件詳細' })
    this.loc_Monitor_NotificationPage_CampaignChatTab_Lbl = this.page.getByRole('tab', { name: 'メッセージ' });
    this.loc_Monitor_CampaignDetailsPage_InterviewJoin_Btn =
      this.page.locator("[id='joinInterview']");

    this.loc_Monitor_CampaignDetailsPage_CompanyName = "//*[text()='CompanyName']";
    this.loc_Monitor_CampaignDetailsPage_CampaignScedule_Lbl =
      "//*[@id='campaign-duration'][contains(text(),'ScheduleDate')][contains(text(),'ScheduleTime')]";
    this.loc_Monitor_CampaignDetailsPage_CampaignSceduleDate =
      "(//*[contains(text(),'ScheduleDate')])[2]";
    this.loc_Monitor_CampaignDetailsPage_CampaignSceduleDate3 =
      "(//*[contains(text(),'ScheduleDate')])";
    this.loc_Monitor_CampaignDetailsPage_CampaignSceduleTime =
      "//*[contains(text(),'ScheduleTime')]";
    this.loc_Monitor_CampaignDetailsPage_InterviewRoom_Btn_Agora = "//*[text()='インタビュールームに入室']";
    this.loc_Monitor_CampaignDetailsPage_InterviewJoin_Btn_Agora = "//*[text()='インタビュールームへ入室']";
    this.loc_Monitor_CampaignDetailsPage_CampaignTitle = '//*[@id="dashboard-layout"]/div[2]//*[text()="Title"]';

    this.loc_monitor_noticelisttitle = '//div[contains(text(), "NotificationTitle")]';
    this.loc_monitor_noticedetailsTitle = '//*[@data-testid="gotoNotification"]/following::div[1]/child::div[1]/child::div[1]/child::div[1][contains(text(), "NotificationTitle")]';
    this.loc_monitor_noticedetailsSubject = '//*[@data-testid="gotoNotification"]/following::div[1]/child::div[1]/child::div[2]/child::div[1][contains(text(), "NotificationSubject")]';










  }
  public async verifyMonitorTopPageTodaysInterviewPopup() {
    await this.locatorShouldBePresent(this.loc_Monitor_TopPage_TodaysInterviewTopNotification_Lbl);
  }

  public async verifyMonitorTopPageTodaysInterviewPopupInterviewName(interviewName: string) {
    const locator = this.page.locator(
      this.loc_Monitor_TopPage_TodaysInterviewTopNotification_InterviewName_Lbl.replace(
        'InterviewName',
        interviewName,
      ),
    );
    await this.locatorShouldBePresent(locator);
  }
  public async clickOnTheMonitorTopPageTodaysInterviewPopup(interviewName: string) {
    const locator = this.page.locator(
      this.loc_Monitor_TopPage_TodaysInterviewTopNotification_InterviewName_Lbl.replace(
        'InterviewName',
        interviewName,
      ),
    );
    await this.waitForSecond(2);
    await locator.click();
  }

  public async verifyMonitorTopPageTodaysInterviewPopupInterviewSchedule(
    interviewSchedule: string,
  ) {

    const locator = this.page.locator(
      this.loc_Monitor_TopPage_TodaysInterviewTopNotification_Schedule_Lbl.replace(
        'InterviewTime',
        interviewSchedule,
      ),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async clickOnTheMonitorTopPageToDoList() {
    await this.waitForSecond(2);
    await this.loc_Monitor_TopPage_TodoList_Lnk.click();
  }
  public async clickOnInterviewJoinButton() {
    await this.waitForSecond(2);
    await this.loc_Monitor_CampaignDetailsPage_InterviewJoin_Btn.click();

  }
  public async clickOnTheMonitorTopPageLatestNews() {
    await this.waitForSecond(2);
    await this.loc_Monitor_TopPage_LatestNews_Lnk.click();
  }


  public async clickOnTheMonitorTopPageLatestNewsforagora(username: string) {
    const page1 = await this.getUserPage(username);
    await this.waitForSecond(2);
    const locator = await page1.getByText(this.loc_Monitor_TopPage_LatestNews_Lnk_Agora);
    await locator.click();
  }

  public async verifyThePageNavigationToNotificationPage() {
    await this.locatorShouldBePresent(this.loc_Monitor_NotificationPage_Heading_Lbl);
  }
  public async monitorTopPageNavigation() {
    await this.page.goto(config.monitorTopPageURL);
  }
  public async verifyToDoListPageNavigation() {
    await this.locatorShouldBePresent(
      this.loc_Monitor_NotificationPage_SelectedTodoListTabHeading_Lbl,
    );
  }

  public async verifyPageNavigationToLatestNews() {
    await this.locatorShouldBePresent(
      this.loc_Monitor_NotificationPage_SelectedLatestNewsTabHeading_Lbl,
    );
  }
  public async clickOnTheCloseButtonOfTodaysInterviewPopup() {
    await this.waitForSecond(2);
    await this.loc_Monitor_NotificationPage_TodaysInterviewPopupClose_Btn.click();
  }
  public async verifyToDoListNotification(notification: string) {
    const locator = this.page.locator(
      this.loc_Monitor_NotificationPage_ToDoListNotification_Lbl.replace(
        'Notification',
        notification,
      ),
    );
    await this.locatorShouldBePresent(locator);
  }
  public async verifyLatestNewsNotification(notification: string) {
    const locator = this.page.locator(
      this.loc_Monitor_NotificationPage_LatestNewsNotification_Lbl.replace(
        'Notification',
        notification,
      ),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async verifyPageNavigationToCampaignDetailsPage() {
    await this.locatorShouldBePresent(this.loc_Monitor_NotificationPage_CampaignDetailsTab_Lbl);
  }

  public async verifyPageNavigationToMonitorChatTab() {
    await this.locatorShouldBePresent(this.loc_Monitor_NotificationPage_CampaignChatTab_Lbl);
  }

  public async navigateToTheNotificationListPage() {
    await this.page.goto(config.monitorNotificationPageURL);
  }

  public async clickOnTheToDoListNotification(notification: string) {
    const locator = this.page.locator(
      this.loc_Monitor_NotificationPage_ToDoListNotification_Lbl.replace(
        'Notification',
        notification,
      ),
    );
    await locator.click();
    console.log("locator-----------" + locator);
  }
  public async clickOnTheNews(notification: string) {
    const locator = this.page.locator(
      this.loc_Monitor_NotificationPage_News_Lbl.replace('News', notification),
    );
    await locator.click();
  }


  public async clickOnTheLatestNewstNotification(notification: string) {
    const locator = this.page.locator(
      this.loc_Monitor_NotificationPage_LatestNewsNotification_Lbl.replace(
        'Notification',
        notification,
      ),
    );
    await this.waitForSecond(2);
    await locator.click();
  }

  public async clickOnTheLatestNewsNotificationTab() {
    await this.waitForSecond(2);
    await this.loc_Monitor_NotificationPage_LatestNewsTabHeading_Lbl.click();
  }
  public async verifyTheCompanyNameDisplayedInCampaignDetailsPage(companyName: string) {
    const locator = this.page.locator(
      this.loc_Monitor_CampaignDetailsPage_CompanyName.replace('CompanyName', companyName),
    );
    await this.locatorShouldBePresent(locator);
  }
  public async verifyTheCampaignScheduleDateIsDisplayed(
    scheduleDate: string,
    scheduleTime: string,
  ) {
    const locator = this.page.locator(
      this.loc_Monitor_CampaignDetailsPage_CampaignScedule_Lbl
        .replace('ScheduleDate', scheduleDate)
        .replace('ScheduleTime', scheduleTime),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async verifyTheCompanyNameDisplayedInCampaignDetailsPageAgora(userName: string) {
    const page = await this.getUserPage(userName);
    const companyName = readFromYamlFilePath('CampaignData')['companyName']
    const locator = page.locator(
      this.loc_Monitor_CampaignDetailsPage_CompanyName.replace('CompanyName', companyName),
    );
    await this.locatorShouldBePresent(locator);
  }


  public async verifyTheCampaignScheduleDateIsDisplayed2(date: string, username: string) {
    const scheduleDate = readFromYamlFilePath('CampaignData')[date]
    console.log(scheduleDate)
    const page = await this.getUserPage(username);
    const locator = page.locator(
      this.loc_Monitor_CampaignDetailsPage_CampaignSceduleDate.replace(
        'ScheduleDate',
        scheduleDate,
      ),
    );
    console.log(locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyTheCampaignScheduleDateIsDisplayed3(date: string, username: string) {
    const scheduleDate = readFromYamlFilePath('CampaignData')[date]
    console.log("The schedule date" + scheduleDate)
    await this.waitForSecond(5);
    const page = await this.getUserPage(username);
    await page.bringToFront();
    const locator = page.locator(
      this.loc_Monitor_CampaignDetailsPage_CampaignSceduleDate3.replace(
        'ScheduleDate',
        scheduleDate,
      ),
    );
    console.log("ScheduleDatelocator", locator);
    await this.locatorShouldBePresent(locator);
  }


  public async verifyTheCampaignScheduleTimeIsDisplayed(time: string, username: string) {
    const scheduleTime = readFromYamlFilePath('CampaignData')[time]
    const page = await this.getUserPage(username);
    const locator = page.locator(
      this.loc_Monitor_CampaignDetailsPage_CampaignSceduleTime.replace(
        'ScheduleTime',
        scheduleTime,
      ),
    );
    await this.locatorShouldBePresent(locator);
  }



  public async clickOnEnterInterviewRoomButtonAgora(userName: string) {
    const page = await this.getUserPage(userName);
    await page.locator(this.loc_Monitor_CampaignDetailsPage_InterviewRoom_Btn_Agora).click();
  }

  public async clickOnInterviewJoinButtonAgora(userName: string) {
    const page = await this.getUserPage(userName);
    await page.locator(this.loc_Monitor_CampaignDetailsPage_InterviewJoin_Btn_Agora).click();
  }

  public async verifyCampaignTitle(title: string, username: string) {
    const Campaign_title = readFromYamlFilePath('CampaignData')[title]
    const page = await this.getUserPage(username);
    const locator = page.locator(
      this.loc_Monitor_CampaignDetailsPage_CampaignTitle.replace(
        'Title',
        Campaign_title,
      ),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async findnotification(titletext: string, username: string) {
    const page1 = await this.getUserPage(username);
    await this.waitForSecond(2);
    const title = readFromYamlFilePath('AdminNoticeData')[titletext];
    const locator = await page1.locator(this.loc_monitor_noticelisttitle.replace('NotificationTitle', title));
    console.log(locator);
    await locator.click();
  }



  public async verifynoticedetails(Noticetitle: string, Noticesubject: string, username: string) {
    this.waitForSecond(2);

    const page1 = await this.getUserPage(username);
    const title = readFromYamlFilePath('AdminNoticeData')[Noticetitle];
    const subject = readFromYamlFilePath('AdminNoticeData')[Noticesubject];

    const titlelocator = await page1.locator(this.loc_monitor_noticedetailsTitle.replace('NotificationTitle', title,),);
    const subjectlocator = await page1.locator(this.loc_monitor_noticedetailsSubject.replace('NotificationSubject', subject,),);

    await this.locatorShouldBePresent(titlelocator);
    await this.locatorShouldBePresent(subjectlocator);


  }









}
