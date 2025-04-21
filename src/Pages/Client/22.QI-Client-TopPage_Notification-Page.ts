/* eslint-disable import/namespace */
import { config } from '../../support/config';
import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';
import { readFromYamlFilePath } from '../../utils/YamlReader';
export default class Client_TopPageNotification extends BasePage {
  page: Page;
  sampleRadioButtonLocator?: Locator;
  readonly loc_Client_TopPage_BellIconNotification_Icon: Locator;
  readonly loc_Client_TopPage_TodaysInterviewDetails_Lbl: string;
  readonly loc_Client_TopPage_SeeAllNotification_Lnk: Locator;
  readonly loc_Client_NoticePage_Heading_Txt: Locator;
  readonly loc_Client_TopPage_NewMessageNotification_Lbl: string;
  loc_Client_TopPage_CampaignName_Lbl: string;
  loc_Client_CampaignDetails_IndividualChatTab_Lbl: Locator;
  loc_Client_CampaignDetails_ScheduleOfferingPopup_Lbl: Locator;
  loc_Client_TopPage_MenuIcon_Lnk: Locator;
  loc_Client_TopPage_MenuItem_Lnk: string;
  loc_Client_CampaignDetails_MonitorListHeading_Lbl: Locator;
  loc_client_noticelisttitle: string;
  loc_Client_NoticeDetailTitle: string;
  loc_Client_NoticeDetailContent: string;


  constructor(page: Page) {
    super(page);
    this.page = page;

    this.loc_Client_TopPage_BellIconNotification_Icon = this.page.locator('//header//span/span'); //can't change
    this.loc_Client_TopPage_NewMessageNotification_Lbl =
      "(//*[@id='main-container']//*[text()='Notification'])[1]"; //can't change
    this.loc_Client_TopPage_CampaignName_Lbl =
      "(//ul)[2]//div/div[text()='案件名 : '][text()='CampaignName']"; //can't change
    this.loc_Client_TopPage_SeeAllNotification_Lnk = this.page.getByText('すべて見る');
    this.loc_Client_NoticePage_Heading_Txt = this.page.getByText('お知らせ');
    this.loc_Client_CampaignDetails_IndividualChatTab_Lbl = this.page.getByText('メッセージ');

    this.loc_Client_CampaignDetails_ScheduleOfferingPopup_Lbl = this.page.getByRole('tab', { name: '日程' });
    this.loc_Client_TopPage_TodaysInterviewDetails_Lbl =
      "(//*[@data-testid='go-to-schedule']//div[text()='InterviewDetails'])[1]"; //can't change
    this.loc_Client_TopPage_MenuIcon_Lnk = this.page.getByTestId('menu-bar');
    this.loc_Client_TopPage_MenuItem_Lnk = "//ul/li/div//*[text()='MenuItem']"; //can't change

    this.loc_Client_CampaignDetails_MonitorListHeading_Lbl = this.page.getByText('件表示されています');
    this.loc_client_noticelisttitle = '//div[contains(text(), "NotificationTitle")]';
    this.loc_Client_NoticeDetailTitle = '//*[@class="MuiBox-root css-2da0ki"]//child::div[1]/child::div[1][contains(text(), "NotificationTitle")]';
    this.loc_Client_NoticeDetailContent = '    //*[@class="MuiBox-root css-19n8dai"]//child::div[1][contains(text(), "NotificationContent")]';


  }
  public async verifyClientTopPageBellIconNotification() {
    await this.locatorShouldBePresent(this.loc_Client_TopPage_BellIconNotification_Icon);
  }

  public async verifyNewMessageNotification(notification: string) {
    const locator = this.page.locator(
      this.loc_Client_TopPage_NewMessageNotification_Lbl.replace('Notification', notification),
    );
    await this.locatorShouldBePresent(locator);
  }
  public async clickOnTheNewMessageNotification(notification: string) {
    const locator = this.page.locator(
      this.loc_Client_TopPage_NewMessageNotification_Lbl.replace('Notification', notification),
    );
    await this.waitForSecond(2);
    await locator.click();
  }
  public async verifyCampaignNameOfNewMessageNotification(campaignName: string) {
    const locator = this.page.locator(
      this.loc_Client_TopPage_CampaignName_Lbl.replace('CampaignName', campaignName),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async verifyMonitorNameTodaysInterviewDetails() {
    const monitorname = readFromYamlFilePath('CampaignData')['monitorname'];
    const locator = this.page.locator(
      this.loc_Client_TopPage_TodaysInterviewDetails_Lbl.replace(
        'InterviewDetails',
        monitorname,
      ),
    );
    await this.locatorShouldBePresent(locator);
  }
  public async verifySceduledTimeFromTodaysInterviewDetails() {
    const sceduledtime = readFromYamlFilePath('CampaignData')['scheduleTime'];
    const replacedScheduledTime = sceduledtime.replace("~", "-");
    console.log(replacedScheduledTime);
    const locator = this.page.locator(
      this.loc_Client_TopPage_TodaysInterviewDetails_Lbl.replace(
        'InterviewDetails',
        replacedScheduledTime,
      ),
    );
    console.log(locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyCampaignTitleFromTodaysInterviewDetails() {
    const campaignTitle = readFromYamlFilePath('CampaignData')['campaignTitle'];
    const locator = this.page.locator(
      this.loc_Client_TopPage_TodaysInterviewDetails_Lbl.replace(
        'InterviewDetails',
        campaignTitle,
      ),
    );
    await this.locatorShouldBePresent(locator);
  }
  public async clickOnTheTodaysInterviewInterviewDetails(interviewDetails: string) {
    const locator = this.page.locator(
      this.loc_Client_TopPage_TodaysInterviewDetails_Lbl.replace(
        'InterviewDetails',
        interviewDetails,
      ),
    );
    await this.waitForSecond(2);
    await locator.click();
  }
  public async clickOnSeeAllNotificationLink() {
    await this.waitForSecond(2);
    await this.loc_Client_TopPage_SeeAllNotification_Lnk.click();
  }

  public async verifyThePageNavigationToNoticePage() {
    await this.loc_Client_NoticePage_Heading_Txt.isVisible();
  }

  public async navigateToTheClientTopPage() {
    await this.page.goto(config.clientHomePageURL);
  }

  public async verifyThePageNavigationToIndividualChatTab() {
    await this.loc_Client_CampaignDetails_IndividualChatTab_Lbl.isVisible();
  }

  public async verifyThePageNavigationToScheduleOfferingPopup() {
    await this.loc_Client_CampaignDetails_ScheduleOfferingPopup_Lbl.isVisible();
  }
  public async verifyThePageNavigationToCampaignDetailsPage() {
    await this.loc_Client_CampaignDetails_MonitorListHeading_Lbl.isVisible();
  }
  public async clickOnTheMenuIcon() {
    await this.waitForSecond(2);
    await this.loc_Client_TopPage_MenuIcon_Lnk.click();
  }
  public async verifyMenuItems(menuItem: string) {
    const locator = this.page.locator(
      this.loc_Client_TopPage_MenuItem_Lnk.replace('MenuItem', menuItem),
    );
    await this.locatorShouldBePresent(locator);
  }


  public async findandclicknotice(title: string) {
    await this.waitForSecond(2);
    const titletext = readFromYamlFilePath('AdminNoticeData')[title];
    const locator = await this.page.locator(this.loc_client_noticelisttitle.replace('NotificationTitle', titletext));
    console.log(locator);
    await locator.click();

  }


  public async verifynoticedetails(title: string, content: string) {
    this.waitForSecond(1);
    const titletext = readFromYamlFilePath('AdminNoticeData')[title];
    const contenttext = readFromYamlFilePath('AdminNoticeData')[content];
    const titlelocator = await this.page.locator(this.loc_Client_NoticeDetailTitle.replace('NotificationTitle', titletext));
    await this.locatorShouldBePresent(titlelocator);

    const subjectlocator = await this.page.locator(this.loc_Client_NoticeDetailContent.replace('NotificationContent', contenttext));
    await this.locatorShouldBePresent(subjectlocator);
  }




















}
