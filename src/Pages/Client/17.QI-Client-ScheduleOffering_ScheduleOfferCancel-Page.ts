/* eslint-disable no-console */
import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';

export default class Client_ScheduleOfferCancellation extends BasePage {
  page: Page;
  sampleRadioButtonLocator?: Locator;
  loc_Monitor_ParticipationTab__OfferDateCount_Lbl: Locator;

  readonly loc_Client_ScheduleOffering_OfferCancelButton_Btn: Locator;
  constructor(page: Page) {
    super(page);
    this.page = page;

    this.loc_Client_ScheduleOffering_OfferCancelButton_Btn = this.page.getByTestId('cancellation-button');

    this.loc_Monitor_ParticipationTab__OfferDateCount_Lbl = this.page.locator(
      '//*[@id="slotContainer"]/label',
    );
  }
  public async clickOnTheScheduleOfferCancelButton() {
    await this.waitForSecond(2);
    await this.loc_Client_ScheduleOffering_OfferCancelButton_Btn.click();
  }

  public async verifyAllScheduleOfferDateHasDisabledInScheduleOfferTab() {
    await this.waitForSecond(2);
    const count = (await this.loc_Monitor_ParticipationTab__OfferDateCount_Lbl.count()) + 1;

    const disablecount = await this.page.locator("//*[@disabled][@type='checkbox']").count();

    console.log('The Count : ' + count + '  ' + disablecount);
    if (count == disablecount) {
      console.log('All option button got disabled');
    } else {
      throw new Error('Dates are not disabled');
    }
  }
}
