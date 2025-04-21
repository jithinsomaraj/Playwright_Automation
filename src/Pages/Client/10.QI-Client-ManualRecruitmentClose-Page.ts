import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';
import { readFromYamlFilePath } from '../../utils/YamlReader';

export default class Client_ManualRecruitmentClose extends BasePage {
  page: Page;
  sampleRadioButtonLocator?: Locator;
  radiobuttonXpathLocator: string;
  readonly sampleListParameterloc: string;

  readonly rightarrowlocator: Locator;
  readonly leftarrowlocator: Locator;
  readonly selectYearloc: string;
  readonly selectDateValue: string;
  readonly loc_Client_CampaignDetails_RecruitmentCloseButton_Btn: Locator;
  readonly loc_Client_CampaignDetails_RecruitmentCloseConfirmationPopupSubmit_Btn: Locator;
  readonly loc_Client_CampaignDetails_CampaignStatus_Lbl: string;
  loc_Monitor_TopePage_VerifyCampaignTitle_Lbl: string;
  constructor(page: Page) {
    super(page);
    this.page = page;

    this.radiobuttonXpathLocator = '//*[(text()="fieldname")]/following::span[text()="value"]';
    this.sampleListParameterloc = '//li[text()="sampleListParametervalue"]';

    this.selectYearloc = '//button[text()="year"]';
    this.selectDateValue = '//button[text()="datevalue"]';

    this.rightarrowlocator = this.page.locator('//button[@aria-label="Next month"]');
    this.leftarrowlocator = this.page.locator('//button[@aria-label="Previous month"]');
    this.loc_Client_CampaignDetails_RecruitmentCloseButton_Btn = page.getByRole('button', { name: '募集を終了' });
    this.loc_Client_CampaignDetails_RecruitmentCloseConfirmationPopupSubmit_Btn = page.getByRole('button', { name: '終了する' });
    this.loc_Client_CampaignDetails_CampaignStatus_Lbl =
      "//*[(text()='CampaignTitle')]/preceding-sibling::td/button[(text()='募集終了')]";

    this.loc_Monitor_TopePage_VerifyCampaignTitle_Lbl =
      "(//*[@id='campaign-title'][text()='CampaignTitle'])[1]";
  }
  public async clickOnRecruitmentcloseButton() {
    await this.waitForSecond(3);
    await this.page.waitForLoadState('load', { timeout: 90000 })
    await this.loc_Client_CampaignDetails_RecruitmentCloseButton_Btn.click();
    await this.page.waitForLoadState('load', { timeout: 90000 })
    await this.waitForSecond(3);
  }

  public async clickOnRecruitmentCloseSubmitButton() {
    await this.waitForSecond(2);
    await this.page.waitForLoadState('load', { timeout: 90000 })
    await this.loc_Client_CampaignDetails_RecruitmentCloseConfirmationPopupSubmit_Btn.click();
    await this.waitToDisappearElement(
      this.loc_Client_CampaignDetails_RecruitmentCloseConfirmationPopupSubmit_Btn,
    );
  }

  public async verifyTheStatusOfTheCampaign(campaignTitle: string) {
    const campaign_Title = readFromYamlFilePath('CampaignData')[campaignTitle]
    const locator = this.page.locator(
      this.loc_Client_CampaignDetails_CampaignStatus_Lbl.replace('CampaignTitle', campaign_Title),
    );
    await this.locatorShouldBePresent(locator);
  }
  public async verifyCampaignIsPresentInMonitorTopPage(campaignTitle: string) {
    const campaign_Title = readFromYamlFilePath('CampaignData')[campaignTitle]
    const locator = this.page.locator(
      this.loc_Monitor_TopePage_VerifyCampaignTitle_Lbl.replace('CampaignTitle', campaign_Title),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async verifyCampaignIsNotPresentInMonitorTopPage(campaignTitle: string) {
    const campaign_Title = readFromYamlFilePath('CampaignData')[campaignTitle]
    const locator = this.page.locator(
      this.loc_Monitor_TopePage_VerifyCampaignTitle_Lbl.replace('CampaignTitle', campaign_Title),
    );
    await this.locatorShouldNotBePresent(locator);
  }
}
