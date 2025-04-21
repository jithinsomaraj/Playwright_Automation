/* eslint-disable @typescript-eslint/no-unused-vars */
import ScenarioContext from '../../support/ScenarioContext';
import { config } from '../../support/config';
import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';

export default class Cliet_AfterAcceptSheduleOffer extends BasePage {
  page: Page;
  sampleRadioButtonLocator?: Locator;
  radiobuttonXpathLocator: string;
  readonly sampleListParameterloc: string;

  readonly rightarrowlocator: Locator;
  readonly leftarrowlocator: Locator;
  readonly selectYearloc: string;
  readonly selectDateValue: string;
  readonly loc_Client_CampaignDetailsPage_RedDotNotification_Btn: string;
  readonly loc_Client_ScheduleOffering_MeetingLink_Lnk: Locator;
  readonly loc_Client_ScheduleOffering_MeetingId_Lbl: Locator;
  readonly loc_Client_ScheduleOffering_MeetingPass_Lbl: Locator;
  readonly loc_Client_ScheduleOffering_MeetingJoiningButton_Btn: Locator;
  readonly loc_Client_ScheduleOffering_MeetingDetailsCopyButton_Btn: Locator;
  readonly loc_Client_ScheduleOffering_MeetingDetailsCopySuccessMessage_Lbl: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.radiobuttonXpathLocator = '//*[(text()="fieldname")]/following::span[text()="value"]';
    this.sampleListParameterloc = '//li[text()="sampleListParametervalue"]';

    this.selectYearloc = '//button[text()="year"]';
    this.selectDateValue = '//button[text()="datevalue"]';

    this.rightarrowlocator = this.page.locator('//button[@aria-label="Next month"]');
    this.leftarrowlocator = this.page.locator('//button[@aria-label="Previous month"]');
    this.loc_Client_CampaignDetailsPage_RedDotNotification_Btn = "//div[text()='Monitor']/div";
    this.loc_Client_ScheduleOffering_MeetingLink_Lnk = this.page.locator(
      "//div[contains(text(),'" + config.meetingBaseUrl + "/video-chat/auth/login?meetingId=')]",
    );
    this.loc_Client_ScheduleOffering_MeetingId_Lbl = this.page.locator(
      "//div[text()='ID']/following-sibling::div",
    );
    this.loc_Client_ScheduleOffering_MeetingPass_Lbl = this.page.locator(
      "//div[text()='パスコード']/following-sibling::div",
    );
    this.loc_Client_ScheduleOffering_MeetingJoiningButton_Btn = page.getByTestId('join-room');
    this.loc_Client_ScheduleOffering_MeetingDetailsCopyButton_Btn = this.page.locator(
      "//div[text()='詳細情報']/parent::div/child::div[2]",
    );
    this.loc_Client_ScheduleOffering_MeetingDetailsCopySuccessMessage_Lbl = this.page.locator(
      "//p[text()='クリックボードにコピー済み']",
    );
  }
  public async verifyTheRedDotNotificationIsPresent(monitor: string) {
    const locator = this.page.locator(
      this.loc_Client_CampaignDetailsPage_RedDotNotification_Btn.replace('Monitor', monitor),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async verifyTheMeetingLinkIsPresent() {
    console.log(this.loc_Client_ScheduleOffering_MeetingLink_Lnk);
    await this.locatorShouldBePresent(this.loc_Client_ScheduleOffering_MeetingLink_Lnk);
  }

  public async verifyTheMeetingIdIsPresent() {
    await this.locatorShouldBePresent(this.loc_Client_ScheduleOffering_MeetingId_Lbl);
    const id = await this.loc_Client_ScheduleOffering_MeetingId_Lbl.innerText();
    if (id == '') {
      throw new Error('The meeting id must be provided');
    }
  }

  public async verifyTheMeetingPasswordIsPresent() {
    await this.locatorShouldBePresent(this.loc_Client_ScheduleOffering_MeetingPass_Lbl);
    const id = await this.loc_Client_ScheduleOffering_MeetingPass_Lbl.innerText();
    if (id == '') {
      throw new Error('The meeting password must be provided');
    }
  }

  public async verifyTheMeetingJoiningButtonIsPresent() {
    await this.locatorShouldBePresent(this.loc_Client_ScheduleOffering_MeetingJoiningButton_Btn);
  }
  public async clickOnTheMeetingJoiningButton() {
    const context = ScenarioContext.get('context1');
    const pagePromise = context.waitForEvent('page');
    await this.waitForSecond(2);
    await this.loc_Client_ScheduleOffering_MeetingJoiningButton_Btn.click();

    const newTab = await pagePromise;
    await newTab.waitForLoadState('load', { timeout: 90000 });
    ScenarioContext.put('NewTab', newTab);
  }
  public async clickOnTheCopyLinkButton() {
    await this.loc_Client_ScheduleOffering_MeetingDetailsCopyButton_Btn.click();
  }

  public async verifyTheCopiedSuccessfulMessage() {
    await this.locatorShouldBePresent(
      this.loc_Client_ScheduleOffering_MeetingDetailsCopySuccessMessage_Lbl,
    );
  }

  public async verifyTheAgorameetingSettingsPageTitle() {
    const title = await this.page.title();
    if (title != 'Customer app') {
      throw new Error("The title of the page should be 'Customer app'");
    }
  }
}
