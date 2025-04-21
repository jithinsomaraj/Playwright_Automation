
import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';

export default class Monitor_RejectScheduleOffer extends BasePage {
  page: Page;
  sampleRadioButtonLocator?: Locator;
  radiobuttonXpathLocator: string;
  readonly sampleListParameterloc: string;

  readonly rightarrowlocator: Locator;
  readonly leftarrowlocator: Locator;
  readonly selectYearloc: string;
  readonly selectDateValue: string;
  readonly loc_Monitor_ScheduleOffering_Reject_OptBtn: Locator;
  readonly loc_Monitor_ScheduleOffering_DisabledDateSelection_OptBtn: Locator;
  loc_Monitor_ScheduleOffering_OfferDateCount_Lbl: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.radiobuttonXpathLocator = '//*[(text()="fieldname")]/following::span[text()="value"]';
    this.sampleListParameterloc = '//li[text()="sampleListParametervalue"]';

    this.selectYearloc = '//button[text()="year"]';
    this.selectDateValue = '//button[text()="datevalue"]';

    this.rightarrowlocator = this.page.locator('//button[@aria-label="Next month"]');
    this.leftarrowlocator = this.page.locator('//button[@aria-label="Previous month"]');
    this.loc_Monitor_ScheduleOffering_Reject_OptBtn = page.getByRole('button', { name: '上記の日時は全てNG' });
    this.loc_Monitor_ScheduleOffering_DisabledDateSelection_OptBtn = this.page.locator(
      "//*[@disabled][@type='radio']",
    );

    this.loc_Monitor_ScheduleOffering_OfferDateCount_Lbl = this.page.locator('[role="radiogroup"]');
  }
  public async selectAllOfferingAreNG() {
    await this.waitForSecond(2);
    await this.loc_Monitor_ScheduleOffering_Reject_OptBtn.click();
  }

  public async verifyAllDateSelectionHasDisabled() {
    await this.waitForSecond(2);
    const count = (await this.loc_Monitor_ScheduleOffering_OfferDateCount_Lbl.count()) + 1;

    const disablecount = await this.page.locator("//*[@disabled][@type='radio']").count();


    if (count == disablecount) {
      console.log('All option button got disabled');
    } else {
      throw new Error('Dates are not disabled');
    }
  }


}
