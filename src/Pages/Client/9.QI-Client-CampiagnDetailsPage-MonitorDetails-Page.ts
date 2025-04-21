
import { BasePage } from '../../utils/BasePage';
import { int } from 'aws-sdk/clients/datapipeline';

import { Locator, Page } from '@playwright/test';
export default class Client_MonitorDetails extends BasePage {
  page: Page;
  sampleRadioButtonLocator?: Locator;
  radiobuttonXpathLocator: string;
  readonly sampleListParameterloc: string;

  readonly rightarrowlocator: Locator;
  readonly leftarrowlocator: Locator;
  readonly selectYearloc: string;
  readonly selectDateValue: string;
  readonly loc_Client_CampaignDetails_MonitorAttributes_lbl: string;
  readonly loc_Client_CampaignDetails_MonitorStatus_Lbl: string;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.radiobuttonXpathLocator = '//*[(text()="fieldname")]/following::span[text()="value"]';
    this.sampleListParameterloc = '//li[text()="sampleListParametervalue"]';

    this.selectYearloc = '//button[text()="year"]';
    this.selectDateValue = '//button[text()="datevalue"]';

    this.rightarrowlocator = this.page.locator('//button[@aria-label="Next month"]');
    this.leftarrowlocator = this.page.locator('//button[@aria-label="Previous month"]');
    this.loc_Client_CampaignDetails_MonitorAttributes_lbl =
      "//div[(text()='NickName')]/following::td[Count][(text()='Value')]";
    this.loc_Client_CampaignDetails_MonitorStatus_Lbl =
      '//div[(text()="NickName")]/following::*[text()="Status"]'
  }
  public async verifyMonitorAttributes(nickName: string, monitorAttribute: string, Count: int) {
    console.log(
      'Locator : ' +
      this.loc_Client_CampaignDetails_MonitorAttributes_lbl
        .replace('NickName', nickName)
        .replace('Value', monitorAttribute)
        .replace('Count', Count.toString()),
    );

    const locator = this.page.locator(
      this.loc_Client_CampaignDetails_MonitorAttributes_lbl
        .replace('NickName', nickName)
        .replace('Value', monitorAttribute)
        .replace('Count', Count.toString()),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async verifyMonitorStatus(nickName: string, status: string) {
    console.log(
      'Locator Status: ' +
      this.loc_Client_CampaignDetails_MonitorStatus_Lbl
        .replace('NickName', nickName)
        .replace('Status', status),
    );

    const locator = this.page.locator(
      this.loc_Client_CampaignDetails_MonitorStatus_Lbl
        .replace('NickName', nickName)
        .replace('Status', status),
    );
    await this.locatorShouldBePresent(locator);
  }
}
