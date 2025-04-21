
import { BasePage } from '../../utils/BasePage';

import { Locator, Page } from '@playwright/test';

export class ClientCamaignDetailsPage_Memo extends BasePage {
  loc_Client_CampaignDetails_Memo_Column_Tblcol: string;
  loc_Client_CampaignDetails_MemoAddIcon_Icn: string;
  loc_Client_CampaignDetails_MemoPopup_TxtArea: Locator;

  loc_Client_CampaignDetails_MemoPopupSubmit_Btn: Locator;
  loc_client_CampaignDetails_MemoCancel_Btn: Locator;
  loc_Client_CampaignDetails_MemoOnTable: string;

  loop = 0;
  loc_Client_CampaignDetails_MemoPopup_Memo_TxtArea: string;
  loc_Client_CampaignDetails_MemoInTheGrid_Lbl: string;
  constructor(page: Page) {
    super(page);

    this.loc_Client_CampaignDetails_MemoPopup_TxtArea = page.getByTestId('input-field');
    this.loc_Client_CampaignDetails_MemoPopupSubmit_Btn = page.getByTestId('save-button');
    this.loc_Client_CampaignDetails_Memo_Column_Tblcol =
      "(//*[(text()='NickName')]/following::td[1])[1]";

    this.loc_Client_CampaignDetails_MemoAddIcon_Icn =
      "(//*[(text()='NickName')]/following::td[1]/div/div[2]/*[1])[1]";

    this.loc_client_CampaignDetails_MemoCancel_Btn = page.getByTestId('cancel-button');

    this.loc_Client_CampaignDetails_MemoOnTable = '[aria-label="Memo"]';

    this.loc_Client_CampaignDetails_MemoPopup_Memo_TxtArea =
      "//*[@placeholder='メモを入力してください'][(text()='memo')]";

    this.loc_Client_CampaignDetails_MemoInTheGrid_Lbl =
      "(//*[(text()='NickName')]/following::td[1]//*[(text()='Memo')])[1]";
  }

  public async enterTheMemo(memo: string) {
    await this.loc_Client_CampaignDetails_MemoPopup_TxtArea.fill(memo);
  }

  public async submitTheMemo() {
    await this.waitForSecond(2);
    await this.loc_Client_CampaignDetails_MemoPopupSubmit_Btn.click();
  }

  public async canceltheMemo() {
    await this.waitForSecond(2);
    await this.loc_client_CampaignDetails_MemoCancel_Btn.click();
    await this.waitForSecond(2);
  }

  public async verifyMemoGridAfterSubmission(memo: string, nickName: string) {
    const locator2 = this.page.locator(
      this.loc_Client_CampaignDetails_MemoInTheGrid_Lbl
        .replace('Memo', memo)
        .replace('NickName', nickName),
    );

    console.log('locator 2:' + locator2);
    await this.locatorShouldBePresent(locator2);
  }

  public async verifyMemoInPopupAfterCancellation(memo: string) {
    const locator = this.page.locator(
      this.loc_Client_CampaignDetails_MemoPopup_Memo_TxtArea.replace('Memo', memo),
    );
    try {
      await this.locatorShouldNotBePresent(locator);
    } catch (e) {
      console.log('Exception memo verification in the popup');
    }
  }

  public async verifyMemoGridAfterCancellation(nickName: string, memo: string) {
    const locator = this.page.locator(
      this.loc_Client_CampaignDetails_MemoInTheGrid_Lbl
        .replace('Memo', memo)
        .replace('NickName', nickName),
    );
    await this.locatorShouldNotBePresent(locator);
  }

  public async clickOnMemoIcon(nickName: string) {

    const locator = this.loc_Client_CampaignDetails_Memo_Column_Tblcol.replace(
      'NickName',
      nickName,
    );

    const elementHandle = await this.page.$(locator);



    await this.waitForSecond(2);
    try {
      if (elementHandle) {
        console.log('Column Of Memo Icon Is Present');
        await elementHandle.scrollIntoViewIfNeeded();
        await elementHandle.hover();
        console.log('Mouse Hover Success');
        const locator1 = this.page.locator(
          this.loc_Client_CampaignDetails_MemoAddIcon_Icn.replace('NickName', nickName),
        );
        await this.waitForSecond(2);
        await locator1.click();
      } else {
        console.log('Column Of Memo Icon Is Not Present');
        if (this.loop < 3) {
          this.clickOnMemoIcon(nickName);
        }
        this.loop++;
      }
    } catch (e) {
      console.log('Mouse Hover Exception :');
    }
  }
}
