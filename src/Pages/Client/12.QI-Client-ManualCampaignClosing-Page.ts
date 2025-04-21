import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';
import { readFromYamlFilePath } from '../../utils/YamlReader';

export default class Client_ManualCampaignClosing extends BasePage {
  page: Page;
  sampleRadioButtonLocator?: Locator;
  radiobuttonXpathLocator: string;
  readonly sampleListParameterloc: string;

  readonly rightarrowlocator: Locator;
  readonly leftarrowlocator: Locator;
  readonly selectYearloc: string;
  readonly selectDateValue: string;
  readonly loc_Client_CampaignDetails_CampaigncloseButton_Btn: Locator;
  readonly loc_Client_CampaignDetails_CampaignCloseConfirmation_Btn: Locator;
  readonly loc_Client_CampaignList_CompletedCampaignListTab_Tab: Locator;
  readonly loc_Client_CompletedCampaignList_CampaignTitle_Lbl: string;
  constructor(page: Page) {
    super(page);
    this.page = page;

    this.radiobuttonXpathLocator = '//*[(text()="fieldname")]/following::span[text()="value"]';
    this.sampleListParameterloc = '//li[text()="sampleListParametervalue"]';

    this.selectYearloc = '//button[text()="year"]';
    this.selectDateValue = '//button[text()="datevalue"]';

    this.rightarrowlocator = this.page.locator('//button[@aria-label="Next month"]');
    this.leftarrowlocator = this.page.locator('//button[@aria-label="Previous month"]');
    this.loc_Client_CampaignDetails_CampaigncloseButton_Btn = this.page.getByRole('button', { name: '案件を終了' });
    this.loc_Client_CampaignDetails_CampaignCloseConfirmation_Btn = this.page.getByTestId('modal-onAgree');
    this.loc_Client_CampaignList_CompletedCampaignListTab_Tab = this.page.getByRole('tab', { name: '完了済み' });

    this.loc_Client_CompletedCampaignList_CampaignTitle_Lbl =
      "//tbody/tr/td[2][(text()='CampaignTitle')]";
  }
  public async clickOnCampaignClosingButton() {
    await this.waitForSecond(2);
    await this.page.waitForLoadState('load', { timeout: 90000 })
    await this.loc_Client_CampaignDetails_CampaigncloseButton_Btn.click();
  }

  public async acceptTheCampaignClosingConfirmation() {
    await this.waitForSecond(3);
    await this.page.waitForLoadState('load', { timeout: 90000 })
    await this.loc_Client_CampaignDetails_CampaignCloseConfirmation_Btn.click();
    await this.waitForSecond(4);
    await this.page.waitForLoadState('load', { timeout: 90000 })
  }

  public async clickOnCompletedCampaignList() {
    await this.waitForSecond(2);
    await this.loc_Client_CampaignList_CompletedCampaignListTab_Tab.click();
  }

  public async verifyCampaignInTheList(campaignTitle: string) {
    const title = readFromYamlFilePath('CampaignData')[campaignTitle];
    const locator = this.page.locator(
      this.loc_Client_CompletedCampaignList_CampaignTitle_Lbl.replace(
        'CampaignTitle',
        title
      ),
    );
    console.log(locator);
    this.waitForSecond(5)
    if (await this.locatorShouldBePresent(locator) == false) {
      console.log("Campaign is not closed properly")

    }


  }
}
