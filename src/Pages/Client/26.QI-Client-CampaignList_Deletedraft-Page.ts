import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';
import { readFromYamlFilePath } from '../../utils/YamlReader';

export default class CampaignDeletion extends BasePage {
  page: Page;
  sampleRadioButtonLocator?: Locator;

  readonly loc_Client_CampaignList_DraftCampaignDelete_Btn: string;
  readonly loc_Client_CampaignList_CancelButtonInCampaignDeleteConfirmationPopup_Btn: Locator;
  readonly loc_Client_CampaignList_AcceptButtonInCampaignDeleteConfirmationPopup_Btn: Locator;
  readonly loc_Client_CampaignList_CampaignTitle_Lbl: string;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.loc_Client_CampaignList_DraftCampaignDelete_Btn = 
      "//*[text()='CampaignTitle']/following-sibling::*//div[contains(@data-testid,'delete-action')]"; // can't change
    this.loc_Client_CampaignList_CancelButtonInCampaignDeleteConfirmationPopup_Btn = this.page.getByTestId('modal-onDisAgree');
    this.loc_Client_CampaignList_AcceptButtonInCampaignDeleteConfirmationPopup_Btn = this.page.getByTestId('modal-onAgree');
    this.loc_Client_CampaignList_CampaignTitle_Lbl = "//tbody/tr/td[2][(text()='CampaignTitle')]"; // can't change
    }
  public async clickOnDraftCampaignDeleteButton(campaignTitle: string) {
    const title = readFromYamlFilePath('CampaignData')[campaignTitle]
    const locator = this.page.locator(
      this.loc_Client_CampaignList_DraftCampaignDelete_Btn.replace('CampaignTitle', title),
    );
    await this.waitForSecond(2);
    await locator.click();
  }

  public async clickOnCancelButtonInCampaignDeleteConfirmationPopup() {
    await this.loc_Client_CampaignList_CancelButtonInCampaignDeleteConfirmationPopup_Btn.click();
  }

  public async clickOnAcceptButtonInCampaignDeleteConfirmationPopup() {
    await this.loc_Client_CampaignList_AcceptButtonInCampaignDeleteConfirmationPopup_Btn.click();
  }

  public async verifyTheCampaignRemovedFromTheGrid(campaignTitle: string) {
    await this.waitForSecond(3);
    const locator = this.page.locator(
      this.loc_Client_CampaignList_CampaignTitle_Lbl.replace('CampaignTitle', campaignTitle),
    );
    await this.locatorShouldNotBePresent(locator);
  }
}
