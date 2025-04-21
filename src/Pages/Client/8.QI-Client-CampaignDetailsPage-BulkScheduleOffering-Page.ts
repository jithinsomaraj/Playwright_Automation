/* eslint-disable no-console */
import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';
import { readFromYamlFilePath } from '../../utils/YamlReader';

export default class Client_BulkScheduleOffering extends BasePage {
  page: Page;
  sampleRadioButtonLocator?: Locator;
  loc_Client_ScheduleOffering_DisabledScheduleOfferDate_Lbl: string;
  readonly loc_Client_ScheduleOffering_PopupLaunchButton_Btn: Locator;
  readonly loc_Client_ScheduleOffering_SelectedMonitorCount_Lbl: Locator;
  readonly loc_Client_ScheduleOffering_NickName_Lbl: Locator;
  readonly loc_Client_ScheduleOffering_OfferDate_ChkBx: string;
  readonly loc_Client_ScheduleOffering_PopupSubmitButton_Btn: Locator;
  readonly loc_Client_ScheduleOffering_PopupCancelButton_Btn: Locator;
  readonly loc_Client_ScheduleOffering_SuccessMessage_Lbl: Locator;
  readonly loc_Client_ScheduleOffering_DisabledScheduleOfferingButton_Btn: Locator;
  readonly loc_Client_ScheduleOffering_IndividualScheduleOfferPopover_Btn: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.loc_Client_ScheduleOffering_IndividualScheduleOfferPopover_Btn = this.page.locator('(//button[@data-testid="drawer-close"])[1]');
    this.loc_Client_ScheduleOffering_DisabledScheduleOfferDate_Lbl =
      '//div[contains(text(), "Date") and contains(text(), "Time")]';
    this.loc_Client_ScheduleOffering_PopupLaunchButton_Btn = this.page.getByRole('button', { name: ' 候補日程を送る' });
    this.loc_Client_ScheduleOffering_SelectedMonitorCount_Lbl = this.page.locator(
      "//*[@role='presentation']//div[(text()='samplelocvalue')][(text()='人選択中')]",
    );
    this.loc_Client_ScheduleOffering_NickName_Lbl = this.page.locator(
      "//*[@id='applicantsList']//*[(text()='samplelocvalue')]",
    );
    this.loc_Client_ScheduleOffering_OfferDate_ChkBx =
      "//*[(text()='offerDate')]/preceding-sibling::div/span/input";
    this.loc_Client_ScheduleOffering_PopupSubmitButton_Btn = this.page.getByTestId('offer-button');
    this.loc_Client_ScheduleOffering_PopupCancelButton_Btn = this.page.getByText('キャンセル');
    this.loc_Client_ScheduleOffering_SuccessMessage_Lbl = this.page.getByText('日程を送信しました');
    this.loc_Client_ScheduleOffering_DisabledScheduleOfferingButton_Btn = this.page.locator(
      "//button[(text()=' 候補日程を送る')][@disabled='']",
    );
  }
  public async clickOnScheduleOfferingButton() {
    await this.waitForSecond(2);
    await this.loc_Client_ScheduleOffering_PopupLaunchButton_Btn.click();
  }

  public async verifySelectedMonitorCount(monitorCount: string) {
    const locator = this.page.locator(
      "//*[@role='presentation']//div[(text()='" + monitorCount + "')][(text()='人選択中')]",
    );
    await this.locatorShouldBePresent(locator);
  }

  public async verifyScheduleOfferingPopupNickName(nickName: string) {
    const locator = this.page.locator("//*[@id='applicantsList']//*[(text()='" + nickName + "')]");
    await this.locatorShouldBePresent(locator);
  }

  public async selectAScheduleDate(additionOfDay: number, time: string) {
    const scheduleTime = readFromYamlFilePath('CampaignData')[time]
    const date = new Date(await this.getDates('yyyy/mm/dd', additionOfDay));
    const dayOfWeek = new Intl.DateTimeFormat('ja-JP', { weekday: 'short' }).format(date);
    const offeringDate = String((await this.getDates('yyyy/mm/dd', additionOfDay)) + '（' + dayOfWeek + '）' + scheduleTime);



    console.log('offeringDate :' + offeringDate);
    const locator = this.page.locator(
      this.loc_Client_ScheduleOffering_OfferDate_ChkBx.replace('offerDate', offeringDate),
    );
    console.log('locator :' + locator);
    await locator.click();
  }

  public async clickOnScheduleOfferingPopupSubmitButton() {
    await this.waitForSecond(2);
    await this.loc_Client_ScheduleOffering_PopupSubmitButton_Btn.click();
  }

  public async clickOnSchedulePopupCancelButton() {
    await this.waitForSecond(2);
    await this.loc_Client_ScheduleOffering_PopupCancelButton_Btn.click();
  }
  public async closeTheIndividualScheduleOfferPopover() {
    await this.waitForSecond(2);
    await this.loc_Client_ScheduleOffering_IndividualScheduleOfferPopover_Btn.click();
  }
  public async verifyScheduleOfferingSuccessMessage() {
    await this.loc_Client_ScheduleOffering_SuccessMessage_Lbl.isVisible();
  }

  public async verifyScheduleOfferingButtonDisabled() {
    await this.locatorShouldBePresent(
      this.loc_Client_ScheduleOffering_DisabledScheduleOfferingButton_Btn,
    );
  }
  public async verifyAcceptedDateIsDisplayed(additionOfDate: number, time: string) {

    const offerDate = String(await this.getDates('yyyy/mm/dd', additionOfDate));
    const locator = this.page.locator(
      this.loc_Client_ScheduleOffering_DisabledScheduleOfferDate_Lbl
        .replace('Date', offerDate)
        .replace('Time', time),
    );
    console.log(locator);
    await this.locatorShouldBePresent(locator);

  }
}
