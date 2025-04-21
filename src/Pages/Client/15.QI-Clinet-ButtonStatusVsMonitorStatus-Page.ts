/* eslint-disable no-console */
import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';

export default class ButtonStatusVsInterviewStatus extends BasePage {
  page: Page;
  sampleRadioButtonLocator?: Locator;
  radiobuttonXpathLocator: string;
  readonly sampleListParameterloc: string;

  readonly rightarrowlocator: Locator;
  readonly leftarrowlocator: Locator;
  readonly selectYearloc: string;
  readonly selectDateValue: string;
  readonly loc_CampaignDetails_SelectMonitorBasedOnStatus_ChkBox: string;
  readonly loc_Client_ScheduleOffering_ChatButton_Btn: Locator;
  readonly loc_Client_ScheduleOffering_ScheduleOfferingButton_Btn: Locator;
  loc_Client_ScheduleOffering_SendoffButton_Btn: Locator;
  loc_Client_ScheduleOffering_DisabledChatButton_Btn: Locator;
  loc_Client_ScheduleOffering_MonitorCount_TblRow: Locator;
  constructor(page: Page) {
    super(page);
    this.page = page;

    this.radiobuttonXpathLocator = '//*[(text()="fieldname")]/following::span[text()="value"]';
    this.sampleListParameterloc = '//li[text()="sampleListParametervalue"]';

    this.selectYearloc = '//button[text()="year"]';
    this.selectDateValue = '//button[text()="datevalue"]';

    this.rightarrowlocator = this.page.locator("//button[@aria-label='Next month']");
    this.leftarrowlocator = this.page.locator("//button[@aria-label='Previous month']");
    this.loc_CampaignDetails_SelectMonitorBasedOnStatus_ChkBox =
      "(//button[(text()='MonitorStatus')]/following::*[@type='checkbox'])[1]";
    this.loc_Client_ScheduleOffering_ScheduleOfferingButton_Btn = this.page.getByText('候補日程を送る');
    this.loc_Client_ScheduleOffering_ChatButton_Btn = this.page.getByText('メッセージを送る');
    this.loc_Client_ScheduleOffering_SendoffButton_Btn = this.page.getByText('見送る');
    this.loc_Client_ScheduleOffering_DisabledChatButton_Btn = this.page.getByText('メッセージを送る');
    this.loc_Client_ScheduleOffering_MonitorCount_TblRow = this.page.locator(
      '//*[@role="tabpanel"]//tbody/tr',
    );
  }
  public async selectMonitorBasedOnStatus(monitorStatus: string) {
    await this.waitForSecond(5);
    const count = await this.loc_Client_ScheduleOffering_MonitorCount_TblRow.count();
    console.log(monitorStatus + '  count :' + count);
    for (let i = 2; i <= count; i++) {
      const locator = this.page.locator('//tbody/tr[' + i + ']/td[2]/div');
      console.log(await locator.innerText());
      if ((await locator.innerText()) == monitorStatus) {
        console.log(monitorStatus + '  count :' + i);
        const locator = this.page.locator('//tbody/tr[' + i + ']/td[1]//input');
        await this.waitForSecond(2);
        await locator.click();
        i = count + 1;
        await this.waitForSecond(3);
      }
    }
  }

  public async verifyScheduleOfferingButtonEnabled() {
    await this.loc_Client_ScheduleOffering_ScheduleOfferingButton_Btn.isVisible();
  }

  public async verifyBulkMessagingButtonEnabled() {
    await this.loc_Client_ScheduleOffering_ChatButton_Btn.isVisible();
  }

  public async verifySendoffButtonEnabled() {
    await this.loc_Client_ScheduleOffering_SendoffButton_Btn.isVisible();
  }

  public async verifyScheduleOfferingButtonDisabled() {
    await this.loc_Client_ScheduleOffering_ScheduleOfferingButton_Btn.isDisabled();
  }

  public async verifyBulkMessagingButtonDisabled() {
    await this.loc_Client_ScheduleOffering_DisabledChatButton_Btn.isDisabled();
  }

  public async verifySendoffButtonDisabled() {
    await this.loc_Client_ScheduleOffering_SendoffButton_Btn.isDisabled();
  }
}
