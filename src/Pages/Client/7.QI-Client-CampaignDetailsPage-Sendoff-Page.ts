/* eslint-disable no-console */
import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';
export default class MonitorSendoffByClient extends BasePage {
  page: Page;

  readonly loc_Client_CampaignDetails_SelectMonitor_ChkBx: string;
  readonly loc_Client_CampaignDetails_SendOffButtonSection_Lbl: Locator;
  readonly loc_Client_CampaignDetails_SendOffButton_Btn: Locator;
  readonly loc_Client_CampaignDetails_SendOffCancelButton_Btn: Locator;
  readonly loc_Client_CampaignDetails_SendOffSubmitButton_Btn: Locator;
  readonly loc_Client_CampaignDetails_SendOffPopupNickName_Lbl: string;
  readonly loc_Client_CampaignDetails_MonitorCount_TblRow: Locator;
  readonly loc_Client_CampaignDetails_MonitorStatus_Lbl: string;
  readonly loc_Client_CampaignDetails_ScheduleOfferbutton_Disabled_Btn: Locator;
  readonly loc_Client_CampaignDetails_SendoffButton_Disabled_Btn: Locator;
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.loc_Client_CampaignDetails_SelectMonitor_ChkBx = '//tr[Row]/td[1]//input';
    this.loc_Client_CampaignDetails_SendOffButtonSection_Lbl = this.page.getByText('人のモニタを選択中');
    this.loc_Client_CampaignDetails_MonitorCount_TblRow = this.page.locator(
      '//*[@role="tabpanel"]//tbody/tr',
    );
    this.loc_Client_CampaignDetails_SendOffButton_Btn = this.page.getByTestId('sendoff-button');
    this.loc_Client_CampaignDetails_SendOffCancelButton_Btn = this.page.getByRole('button', { name: 'いいえ' });
    this.loc_Client_CampaignDetails_SendOffSubmitButton_Btn = this.page.getByTestId('agree-button');
    this.loc_Client_CampaignDetails_SendOffPopupNickName_Lbl =
      "//div[@role='dialog']//li[(text()='NickName')]";

    this.loc_Client_CampaignDetails_MonitorStatus_Lbl =
      "(//*[(text()='Monitor')]/parent::*/preceding-sibling::td[1]//button[(text()='Status')])[1]";

    this.loc_Client_CampaignDetails_ScheduleOfferbutton_Disabled_Btn = this.page.getByRole('button', { name: '候補日程を送る' });

    this.loc_Client_CampaignDetails_SendoffButton_Disabled_Btn = this.page.getByRole('button', { name: '見送る' });
  }
  public async selectMonitorFromTheList(nickName: string) {
    await this.waitForSecond(3);
    const count = await this.loc_Client_CampaignDetails_MonitorCount_TblRow.count();
    console.log(nickName + '  count :' + count);
    for (let i = 2; i <= count; i++) {
      const locator = this.page.locator('(//tbody/tr[' + i + ']/td[3]/div)[1]');
      console.log(await locator.innerText());
      if ((await locator.innerText()) == nickName) {
        console.log(nickName + '  count :' + i);
        const locator = this.page.locator('(//tbody/tr[' + i + ']/td[1]//input)[1]');
        await locator.click();
        i = count + 1;
      }
    }

  }

  public async verifyTheSendOffButtonIsPresent() {
    await this.waitForSecond(2);
    await this.locatorShouldBePresent(this.loc_Client_CampaignDetails_SendOffButtonSection_Lbl);
  }

  public async clickOnSendOffButton() {
    await this.waitForSecond(2);
    await this.loc_Client_CampaignDetails_SendOffButton_Btn.click();
  }

  public async clickOnSendOffPopupCancelButton() {
    await this.waitForSecond(2);
    await this.loc_Client_CampaignDetails_SendOffCancelButton_Btn.click();
  }

  public async clickOnSendOffPopupSubmitButton() {
    await this.waitForSecond(2);
    await this.loc_Client_CampaignDetails_SendOffSubmitButton_Btn.click();
  }

  public async verifySendOffPopupNickName(nickName: string) {
    await this.waitForSecond(2);
    const locator = this.page.locator(
      this.loc_Client_CampaignDetails_SendOffPopupNickName_Lbl.replace('NickName', nickName),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async verifyTheMonitorStatus(monitor: string, status: string) {
    console.log(
      'Locator : ' +
      this.loc_Client_CampaignDetails_MonitorStatus_Lbl
        .replace('Monitor', monitor)
        .replace('Status', status),
    );

    const locator = this.page.locator(
      this.loc_Client_CampaignDetails_MonitorStatus_Lbl
        .replace('Monitor', monitor)
        .replace('Status', status),
    );
    await this.locatorShouldBePresent(locator);
  }
  public async verifyTheButtonStatus(button: string) {
    if (button == 'schedule offering') {
      await this.loc_Client_CampaignDetails_ScheduleOfferbutton_Disabled_Btn.isDisabled();
    } else if (button == 'sendoff') {
      await this.loc_Client_CampaignDetails_SendoffButton_Disabled_Btn.isDisabled();
    }
  }
}
