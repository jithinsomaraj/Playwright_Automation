
import { BasePage } from '../../utils/BasePage';

import { Locator, Page } from '@playwright/test';

export class ClientCampaignDetails_MonitorListFilter extends BasePage {
  loc_Client_CampaignDetails_MonitorFilterPopup_lnk: Locator;
  loc_Client_CampaignDetails_MonitorFilter_HasMemo_ChkBx: Locator;
  loc_Client_CampaignDetails_MonitorFilter_Male_ChkBx: Locator;
  loc_Client_CampaignDetails_MonitorFilterPopup_Verify_Lbl: Locator;
  loc_Client_CampaignDetails_MonitorFilterPopup_Submit_Btn: Locator;
  loc_Client_CampaignDetails_NickName_Tblcol: string;
  loc_Client_CampaignDetails_MonitorFilter_Married_ChkBx: Locator;
  loc_Client_CampaignDetails_MonitorFilter_UnMarried_ChkBx: Locator;
  loc_Client_CampaignDetails_GridHeading_Lbl: string;
  loc_Client_CampaignDetails_MonitorFilter_NoChildren_ChkBx: Locator;
  loc_Client_CampaignDetails_MonitorFilter_HaveChildren_ChkBx: Locator;
  loc_Client_CampaignDetails_MonitorFilter_Profession_ChkBx: string;
  loc_Client_CampaignDetails_MonitorFilterPopup_FilterClear_Btn: Locator;

  constructor(page: Page) {
    super(page);

    this.loc_Client_CampaignDetails_MonitorFilterPopup_lnk = this.page.locator("(//*[@data-testid='filter-button'])[1]");

    this.loc_Client_CampaignDetails_MonitorFilterPopup_Submit_Btn = this.page.getByTestId('filter-submit');

    this.loc_Client_CampaignDetails_MonitorFilter_HasMemo_ChkBx = this.page.getByText('あり');

    this.loc_Client_CampaignDetails_MonitorFilter_Male_ChkBx = this.page.locator("//*[@name='gender.male']")   // not working with get - getByRole('checkbox',{name :'男性'});

    this.loc_Client_CampaignDetails_MonitorFilterPopup_Verify_Lbl = this.page.getByRole('dialog');

    this.loc_Client_CampaignDetails_NickName_Tblcol = "(//*[(text()='NickName')])[1]"; //can't change

    this.loc_Client_CampaignDetails_MonitorFilter_Married_ChkBx = this.page.locator("//*[@name='isMarried.yes']")  // not working with get - getByText('未婚');

    this.loc_Client_CampaignDetails_MonitorFilter_UnMarried_ChkBx = this.page.locator("//*[@name='isMarried.no']")
    this.loc_Client_CampaignDetails_MonitorFilter_NoChildren_ChkBx = this.page.locator("//*[@name='hasChildren.no']") // not working - this.page.getByText('いる'); 
    this.loc_Client_CampaignDetails_MonitorFilter_HaveChildren_ChkBx = this.page.locator("//*[@name='hasChildren.yes']")
    this.loc_Client_CampaignDetails_MonitorFilter_Profession_ChkBx =
      "//*[(text()='Profession')]/preceding-sibling::div/span/input";

    this.loc_Client_CampaignDetails_GridHeading_Lbl =
      "//div[@role='tabpanel']//th[(text()='Column')]";

    this.loc_Client_CampaignDetails_MonitorFilterPopup_FilterClear_Btn = this.page.getByRole('button', { name: '条件をクリア' });
  }

  public async loadTheMonitorFilterPopup() {
    await this.waitForSecond(2);
    await this.loc_Client_CampaignDetails_MonitorFilterPopup_lnk.click();
    try {
      await this.locatorShouldBePresent(
        this.loc_Client_CampaignDetails_MonitorFilterPopup_Verify_Lbl,
      );
    } catch (e) {
      await this.loadTheMonitorFilterPopup();
    }
    await this.waitForSecond(5);
  }

  public async selectFiletrcondition(filtercondition: string) {

    await this.waitForSecond(2);
    switch (filtercondition) {
      case 'has memo':
        await this.loc_Client_CampaignDetails_MonitorFilter_HasMemo_ChkBx.click();
        break;
      case 'male':
        await this.loc_Client_CampaignDetails_MonitorFilter_Male_ChkBx.click();
        break;
      case 'married':
        await this.loc_Client_CampaignDetails_MonitorFilter_Married_ChkBx.click();
        break;
      case 'no children':
        await this.loc_Client_CampaignDetails_MonitorFilter_NoChildren_ChkBx.click();
        break;
      case 'unmarried':
        await this.loc_Client_CampaignDetails_MonitorFilter_UnMarried_ChkBx.click();
        break;
      case 'have children':
        await this.loc_Client_CampaignDetails_MonitorFilter_HaveChildren_ChkBx.click();
        break;

    }
  }

  public async monitorListFilterWithCriteriaAndValue(filterCriteria: string, filterValue: string) {
    let locator;
    if (filterCriteria == 'Profession') {
      locator = this.page.locator(
        this.loc_Client_CampaignDetails_MonitorFilter_Profession_ChkBx.replace(
          filterCriteria,
          filterValue,
        ),
      );
    }

    await locator?.click();
  }

  public async submitTheFilterCondition() {
    await this.waitForSecond(2);
    await this.loc_Client_CampaignDetails_MonitorFilterPopup_Submit_Btn.click();
  }

  public async clickOnTheFilterClearButton() {
    await this.waitForSecond(2);
    await this.loc_Client_CampaignDetails_MonitorFilterPopup_FilterClear_Btn.click();
  }

  public async verifyTheMonitorIsPresent(nickName: string) {
    console.log(
      'Monitor NickName Locator:' +
      this.loc_Client_CampaignDetails_NickName_Tblcol.replace('NickName', nickName),
    );
    const locator = this.page.locator(
      this.loc_Client_CampaignDetails_NickName_Tblcol.replace('NickName', nickName),
    );
    this.waitForSecond(3)

    await this.locatorShouldBePresent(locator);
  }

  public async gridColumnAddOrRemoveVerification(column: string) {
    const locator = this.page.locator(
      this.loc_Client_CampaignDetails_GridHeading_Lbl.replace('Column', column),
    );
    await this.locatorShouldBePresent(locator);
  }
}
