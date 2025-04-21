/* eslint-disable no-console */
import ScenarioContext from '../../support/ScenarioContext';
import { config } from '../../support/config';
import { BasePage } from '../../utils/BasePage';
import { Locator, Page, expect } from '@playwright/test';
export default class Client_InterviewConfirmTab extends BasePage {
  page: Page;
  sampleRadioButtonLocator?: Locator;
  readonly loc_Monitor_CampaignDetailsPage_ConfirmedMonitorsTab_Lnk: Locator;
  readonly loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_NickName_Lbl: string;
  readonly loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_Status_Lbl: string;
  readonly loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_DateAndTime_Lbl: string;
  readonly loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_MeetingLinkCopy_Btn: string;
  readonly loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_MeetingLinkCopied_SuccessMsg_Lbl: Locator;
  loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_MeetingJoining_Btn: Locator;
  loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_MeetingJoiningPage_Lbl: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.loc_Monitor_CampaignDetailsPage_ConfirmedMonitorsTab_Lnk = page.getByRole('tab', { name: 'インタビュー確定者' });
    this.loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_NickName_Lbl =
      "//tr/td//div[text()='NickName']";
    this.loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_Status_Lbl =
      "//div[text()='NickName']/following::*//button[text()='日程確定']";
    this.loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_DateAndTime_Lbl =
      "//div[text()='NickName']/following::*[text()='DateAndTime']";
    this.loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_MeetingLinkCopy_Btn =
      "//div[text()='NickName']/following::*//button[text()='招待リンクをコピー']";
    this.loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_MeetingLinkCopied_SuccessMsg_Lbl =
      this.page.locator("//p[text()='クリックボードにコピー済み']");
    this.loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_MeetingJoining_Btn = this.page.locator(
      "(//*[text()='インタビューに参加'])[1]",
    );
    this.loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_MeetingJoiningPage_Lbl =
      this.page.locator("//*[text()='PCを購入した経験と利用方法についてインタビュー']");
  }
  public async clickOnTheConfirmedMonitorListTab() {
    await this.loc_Monitor_CampaignDetailsPage_ConfirmedMonitorsTab_Lnk.click();
  }

  public async verifyTheNickNameOfTheMonitorInConfirmedMonitorsList(nickName: string) {
    console.log(
      'Monitor NickName :' +
      this.loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_NickName_Lbl.replace(
        'NickName',
        nickName,
      ),
    );
    const locator = this.page.locator(
      this.loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_NickName_Lbl.replace(
        'NickName',
        nickName,
      ),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async verifyTheMonitorStatusInTheConfirmedMonitorList(nickName: string) {
    console.log(
      'Monitor Status :' +
      this.loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_Status_Lbl.replace(
        'NickName',
        nickName,
      ),
    );
    const locator = this.page.locator(
      this.loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_Status_Lbl.replace(
        'NickName',
        nickName,
      ),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async verifyTheDateAndTimeInTheConfirmedMonitorList(
    nickName: string,
    additionOfDay: number,
    time: string,
  ) {
    const dateAndTime = (await this.getDates('yyyy/mm/dd', additionOfDay)) + ' ' + time;
    console.log(
      'Date and Time Xpath:' +
      this.loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_DateAndTime_Lbl
        .replace('DateAndTime', dateAndTime)
        .replace('NickName', nickName),
    );
    const locator = this.page.locator(
      this.loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_DateAndTime_Lbl
        .replace('DateAndTime', dateAndTime)
        .replace('NickName', nickName),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async copyTheMeetingDetailsFromConfirmedMonitorListPage(nickName: string) {
    await this.waitForSecond(2);
    const locator = this.page.locator(
      this.loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_MeetingLinkCopy_Btn.replace(
        'NickName',
        nickName,
      ),
    );
    await locator.click();
  }

  public async verifyTheLinkCopiedSuccessMessage() {
    await this.locatorShouldBePresent(
      this.loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_MeetingLinkCopied_SuccessMsg_Lbl,
    );
  }
  public async verifyTheLinkIsPresentInTheCopiedLink() {
    const clipboardText = await this.page.evaluate(() => {
      return navigator.clipboard.readText();
    });

    console.log('clipboardText :' + clipboardText);
    await expect(clipboardText).toContain(config.clientBaseUrl + '/video-chat/auth/login?');
  }

  public async clickOnTheMeetingJoiningButton() {
    const pagePromise = this.context1.waitForEvent('page');
    await this.loc_Monitor_CampaignDetailsPage_ConfirmedMonitors_MeetingJoining_Btn.click();


    const newPage = await pagePromise;
    await newPage.waitForLoadState('load', { timeout: 90000 });
    const newPageUrl = await newPage.url();
    console.log(newPageUrl);
    if (newPageUrl.toContain('video-chat/app/meeting')) {
      ScenarioContext.put('PageNavigation', 'Success');
    }


  }
  public async pageNavigationToMeetingJoiningPage() {
    if (ScenarioContext.get('PageNavigation') == 'Success') {
      console.log('Page navigation was success');
    } else {
      throw Error('Page navigation not success');
    }

  }
}
