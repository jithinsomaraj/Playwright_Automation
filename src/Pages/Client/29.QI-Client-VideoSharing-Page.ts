/* eslint-disable no-console */
import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';

export default class VideoSharing extends BasePage {
  page: Page;

  readonly loc_Client_VideoUpload_PageNavigation_Lnk: string;
  readonly loc_Client_VideoUpload_CampaignName_Lbl: string;
  readonly loc_Client_VideoUpload_CampaignDate_Lbl: string;
  readonly loc_Client_VideoUpload_MonitorName_Lbl: string;
  loc_Client_VideoUpload_CampaignCampaignListPage_Lbl: Locator;
  loc_Client_VideoUpload_MonitorProfileDetails_Lbl: string;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.loc_Client_VideoUpload_PageNavigation_Lnk =
      "//*[contains(@data-testid,'titles')]/div[text()='CampaignTitle']/../following-sibling::td/div[text()='納品動画を確認']";
    this.loc_Client_VideoUpload_CampaignName_Lbl = "//*[@id='title'][text()='CampaignTitle']";
    this.loc_Client_VideoUpload_CampaignDate_Lbl =
      "//*[text()='MonitorName']/../following-sibling::div/div/div[text()='CampaignDate']";
    this.loc_Client_VideoUpload_MonitorName_Lbl =
      "//div/div/div[text()='CampaignDate']/../../preceding-sibling::div/div[text()='MonitorName']";
    this.loc_Client_VideoUpload_CampaignCampaignListPage_Lbl = this.page.locator(
      "//main//div[text()='インタビュー動画一覧']",
    );
    this.loc_Client_VideoUpload_MonitorProfileDetails_Lbl =
      "(//div[(text()='MonitorAttribute')]/following::div/div[(text()='Value')])[1]";
  }
  public async clickOnTheVideoSharingPageLink(campaignTitle: string) {
    const locator = this.page.locator(
      this.loc_Client_VideoUpload_PageNavigation_Lnk.replace('CampaignTitle', campaignTitle),
    );

    console.log(locator);
    await this.waitForSecond(2);
    await locator.click();
  }
  public async verifyPageNavigationToVideoSharingCampaignListPage() {
    await this.locatorShouldBePresent(this.loc_Client_VideoUpload_CampaignCampaignListPage_Lbl);
  }
  public async verifyTheCampaignTitle(campaignTitle: string) {
    const locator = this.page.locator(
      this.loc_Client_VideoUpload_CampaignName_Lbl.replace('CampaignTitle', campaignTitle),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async verifyTheCampaignDate(monitorName: string, campaignDate: string) {
    const locator = this.page.locator(
      this.loc_Client_VideoUpload_CampaignDate_Lbl
        .replace('MonitorName', monitorName)
        .replace('CampaignDate', campaignDate),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async verifyTheMonitorName(campaignDate: string, monitorName: string) {
    const locator = this.page.locator(
      this.loc_Client_VideoUpload_CampaignDate_Lbl
        .replace('MonitorName', monitorName)
        .replace('CampaignDate', campaignDate),
    );
    await this.locatorShouldBePresent(locator);
  }
  public async verifyTheMonitorProfileDetails(monitorAttribute: string, value: string) {
    const locator = this.page.locator(
      this.loc_Client_VideoUpload_MonitorProfileDetails_Lbl
        .replace('MonitorAttribute', monitorAttribute)
        .replace('Value', value),
    );
    await this.locatorShouldBePresent(locator);
  }
}
