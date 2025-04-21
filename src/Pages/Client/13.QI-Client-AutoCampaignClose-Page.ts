
import { BasePage } from '../../utils/BasePage';
import { Locator, Page, expect } from '@playwright/test';


export default class Client_AutoCampaignClose extends BasePage {
  page: Page;
  loc_Client_CampaignList_CampaignCount_TblRow: Locator;
  loc_Client_CampaignList_NextPageBUtton: string;


  constructor(page: Page) {
    super(page);
    this.page = page;
    this.loc_Client_CampaignList_CampaignCount_TblRow = this.page.locator('[data-testid*="title"]'); // can't change
    this.loc_Client_CampaignList_NextPageBUtton = '(//*[@data-testid="mint-pagination-PageNumber"])[1]'; // can't change


  }
  public async verifyCampaignStatusForCampaignEndDateLessthanToday() {
    let pageNumber = 1;
    let loop = 'Start';

    while (loop == 'Start') {
      try {
        const locator = this.page.locator(
          this.loc_Client_CampaignList_NextPageBUtton.replace('PageNumber', pageNumber.toString()),
        );
        await this.waitForSecond(2);
        await locator.click();
      } catch (e) {
        console.log('No More Pages');
        loop = 'Stop';
      }


      await this.waitForSecond(3);

      const count = await this.loc_Client_CampaignList_CampaignCount_TblRow.count();
      console.log('Campaign count :' + pageNumber + '  ' + count);

      for (let i = 1, j = 0; i <= count; i++, j++) {
        const locator = this.page.locator('//tr[' + i + ']/td[1]//button');
        const buttonvalue = await locator.innerText();
        console.log(' buttonvalue ' + buttonvalue);
        if (buttonvalue == '公開前') {
          continue;
        } else {
          console.log('Else condition');
        }

        const loc_Client_CampaignList_Date = this.page.locator('//*[@data-testid="implementationPeriod' + j + '"]');

        const loc_Client_CampaignList_CampaignTitle = this.page.locator('//*[@data-testid="title' + j + '"]');

        const dateString = await loc_Client_CampaignList_Date.innerText();

        const camTitleString = await loc_Client_CampaignList_CampaignTitle.innerText();

        if (dateString == '' || dateString == null) {
          continue;
        } else {
          console.log(
            'LocDate :' +
            dateString.substring(dateString.length - 10, dateString.length) +

            '  LocCamTitle :' +
            camTitleString,
          );

          const targetDate = new Date(
            dateString.substring(dateString.length - 10, dateString.length),
          );

          const today = new Date();

          if (targetDate < today) {
            console.log('The campaign end date is less than today\n');

            expect
              .soft(
                true,
                `The campaign: ${camTitleString} is not closed by automatic campaign closing`,
              )
              .toBe(false);
          }
        }
      }

      pageNumber = pageNumber + 1;
    }
  }
}
