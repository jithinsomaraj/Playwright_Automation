
import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';


export default class Monitor_AcceptingScheduleOffer extends BasePage {
  page: Page;
  sampleRadioButtonLocator?: Locator;
  radiobuttonXpathLocator: string;
  readonly sampleListParameterloc: string;

  readonly rightarrowlocator: Locator;
  readonly leftarrowlocator: Locator;
  readonly selectYearloc: string;
  readonly selectDateValue: string;
  readonly loc_Monitor_ScheduleOffering_AcceptButton_Btn: Locator;
  readonly loc_Monitor_ScheduleOffering_OfferDate_Lbl: string;

  readonly loc_Monitor_ScheduleOffering_ScheduleTime_Lbl: string;

  loc_Monitor_ScheduleOffering_ScheduleTime_OptBtn: string;
  readonly loc_Monitor_ScheduleOffering_ConfirmationPopupCancel_Btn: Locator;
  readonly loc_Monitor_ScheduleOffering_ConfirmationPopupAccept_Btn: Locator;
  readonly loc_Monitor_ScheduleOffering_AcknowledgementClose_Btn: Locator;
  loc_Monitor_ScheduleOffering_OfferDateCount_Lbl: Locator;
  loc_Monitor_ScheduleOffering_OfferDateTab_Lbl: string;
  loc_Monitor_ParticipationTab_Lnk: Locator;
  loc_Monitor_ParticipationTab_Lnk_agora: string;
  loc_Monitor_Notification_POpUP_Btn: string;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.radiobuttonXpathLocator = '//*[(text()="fieldname")]/following::span[text()="value"]'; //cant change
    this.sampleListParameterloc = '//li[text()="sampleListParametervalue"]'; // cant change
    this.selectYearloc = '//button[text()="year"]';
    this.selectDateValue = '//button[text()="datevalue"]';

    this.rightarrowlocator = this.page.locator('//button[@aria-label="Next month"]');
    this.leftarrowlocator = this.page.locator('//button[@aria-label="Previous month"]');
    this.loc_Monitor_ScheduleOffering_AcceptButton_Btn = this.page.getByTestId('slot-submit');
    this.loc_Monitor_ScheduleOffering_OfferDate_Lbl =
      "//div[@id='panel1a-header']//div[contains(text(),'OfferDate')]"; //cant change
    this.loc_Monitor_ScheduleOffering_OfferDateTab_Lbl =
      "(//div[@id='panel1a-header']//div/div/div)[Count]"; //cant change
    this.loc_Monitor_ScheduleOffering_OfferDateCount_Lbl = this.page.getByRole('radiogroup');

    this.loc_Monitor_ScheduleOffering_ScheduleTime_Lbl =
      '(//div[@role="radiogroup"])[Count]//span[text()="Time"]'; //cant change
    this.loc_Monitor_ScheduleOffering_ScheduleTime_OptBtn =
      "//*[@id='time-period'][contains(text(),'Time')]"; //cant change
    this.loc_Monitor_ScheduleOffering_ConfirmationPopupCancel_Btn = this.page.getByRole('button', { name: '他の日程を選択' });
    this.loc_Monitor_ScheduleOffering_ConfirmationPopupAccept_Btn = this.page.getByTestId('modal-onAgree');
    this.loc_Monitor_ScheduleOffering_AcknowledgementClose_Btn = this.page.getByRole('button', { name: '閉じる' });
    this.loc_Monitor_ParticipationTab_Lnk = this.page.locator("//div[text()='参加']");
    this.loc_Monitor_ParticipationTab_Lnk_agora = "//div[text()='参加']";
    this.loc_Monitor_Notification_POpUP_Btn = '//*[@id="confirmation-agreeButton"][text()="Yes"]';
  }
  public async verifyScheduleAcceptSubmitbottonDisabled() {
    await this.loc_Monitor_ScheduleOffering_AcceptButton_Btn.isDisabled();
  } public async verifyClientOfferedDateIsPresent() {
    const day = await this.getDates('DD', 3);
    const month = await this.getDates('MM', 1);
    const offerDate = month + '月' + day + '日';
    console.log('offerDate :' + offerDate);
    const locator = this.page.locator(
      this.loc_Monitor_ScheduleOffering_OfferDate_Lbl.replace('OfferDate', offerDate),
    );

    await this.locatorShouldBePresent(locator);
  }

  public async clickOnThescheduleDate(additionOfDay: number) {
    const day = await this.getDates('DD', additionOfDay);
    const month = await this.getDates('MM', additionOfDay);
    const offerDate = month + '月' + day + '日';
    const locator = this.page.locator(
      this.loc_Monitor_ScheduleOffering_OfferDate_Lbl.replace('OfferDate', offerDate),
    );
    await this.waitForSecond(2);
    await locator.click();
  }

  public async verifyTheScheduleOfferTimeIsPresent(offerTime: string, additionOfDay: number) {


    const day = await this.getDates('DD', additionOfDay);
    const month = await this.getDates('MM', additionOfDay);
    const offerDate = month + '月' + day + '日';

    console.log(' offerDate :' + offerDate);

    const count = await this.loc_Monitor_ScheduleOffering_OfferDateCount_Lbl.count();

    console.log(' Count :' + count);

    for (let i = 1; i <= count; i++) {
      console.log(
        'UI Locator :' +
        this.loc_Monitor_ScheduleOffering_OfferDateTab_Lbl.replace('Count', i.toString()),
      );
      const locator = this.page.locator(
        this.loc_Monitor_ScheduleOffering_OfferDateTab_Lbl.replace('Count', i.toString()),
      );
      const UIDate = await locator.innerText();
      if (UIDate.match(offerDate)) {
        console.log('UI Date :' + UIDate + ' \n  offerDate :' + offerDate);

        const scheduleTime = this.page.locator(
          this.loc_Monitor_ScheduleOffering_ScheduleTime_Lbl
            .replace('Time', offerTime)
            .replace('Count', i.toString()),
        );

        console.log('scheduleTime :' + scheduleTime);

        await this.locatorShouldBePresent(scheduleTime);

        this.loc_Monitor_ScheduleOffering_ScheduleTime_OptBtn =
          this.loc_Monitor_ScheduleOffering_ScheduleTime_OptBtn
            .replace('Time', offerTime)
            .replace('Count', i.toString());
      }
    }
  }

  public async clickOnTheOptionButtonOfScheduleTime(time: string) {
    const locator = this.page.locator(this.loc_Monitor_ScheduleOffering_ScheduleTime_OptBtn.replace('Time', time));
    await this.waitForSecond(2);
    await locator.click();
  }

  public async verifyScheduleAcceptSubmitbottonEnabled() {
    await this.loc_Monitor_ScheduleOffering_AcceptButton_Btn.isVisible();
  }

  public async clickOnSubmitButton() {
    await this.waitForSecond(2);
    await this.loc_Monitor_ScheduleOffering_AcceptButton_Btn.click();
  }

  public async clickOnCancelConfirmationPopup() {
    await this.waitForSecond(2);
    await this.loc_Monitor_ScheduleOffering_ConfirmationPopupCancel_Btn.click();
  }

  public async clickOnAcceptConfirmationPopup() {
    await this.waitForSecond(3);
    await this.loc_Monitor_ScheduleOffering_ConfirmationPopupAccept_Btn.click();
  }

  public async clickOnTheAcknowledgementPopupButton() {
    await this.waitForSecond(2);
    await this.loc_Monitor_ScheduleOffering_AcknowledgementClose_Btn.click();
  }

  public async clickOnTheParticipationTab() {
    await this.waitForSecond(2);
    await this.loc_Monitor_ParticipationTab_Lnk.click();
  }

  public async clickOnTheParticipationTabAgora(userName: string) {
    await this.waitForSecond(2);
    const page = await this.getUserPage(userName);
    await page.locator(this.loc_Monitor_ParticipationTab_Lnk_agora).click(userName);
    await this.clickIFlocatorIsPresent(page.locator(this.loc_Monitor_Notification_POpUP_Btn));
  }

}
