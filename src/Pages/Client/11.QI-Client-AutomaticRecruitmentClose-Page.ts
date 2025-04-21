/* eslint-disable no-console */
import { BasePage } from '../../utils/BasePage';
import { Page } from '@playwright/test';

export default class Client_AutoRecruitmentClose extends BasePage {
  page: Page;
  loc_clientCampaignList_CampaignStatus_Lbl: string;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.loc_clientCampaignList_CampaignStatus_Lbl =
      "//*[(text()='CampaignTitle')]/preceding-sibling::td/button[(text()='CampaignStatus')]";
  }
  public async verifyCampaignStatuFromClientCampaignList(
    campaignStatus: string,
    campaignTitle: string,
  ) {
    const locator = this.page.locator(
      this.loc_clientCampaignList_CampaignStatus_Lbl
        .replace('CampaignStatus', campaignStatus)
        .replace('CampaignTitle', campaignTitle),
    );
    console.log(
      'Campaign Status Locator :' +
        this.loc_clientCampaignList_CampaignStatus_Lbl
          .replace('CampaignStatus', campaignStatus)
          .replace('CampaignTitle', campaignTitle),
    );
    await this.locatorShouldBePresent(locator);
  }
}
