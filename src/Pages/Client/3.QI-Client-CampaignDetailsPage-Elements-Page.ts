
import { BasePage } from '../../utils/BasePage';

import { Locator, Page } from '@playwright/test';
import { readFromYamlFilePath } from '../../utils/YamlReader';

export class ClientCamaignDetailsPage_Elements extends BasePage {
  loc_Client_CampaignDetails_RecruitmentClosing_Btn: Locator;
  loc_Client_CampaignDetails_CampaignClosing_Btn: Locator;
  loc_Client_CampaignDetails_CampaignTitle_Lbl: string;
  loc_Client_CampaignDetails_CampaignCondition_Lnk: Locator;
  loc_Client_CampaignDetails_CampaignDetailsPage_Lnk: Locator;
  loc_Client_CampaignDetails_MonitorListTab_Lnk: Locator;
  loc_Client_CampaignDetails_ConfirmedListTab_Lnk: Locator;

  loc_Client_CampaignDetails_CampaignCondition_Lbl: string;
  loc_Client_CampaignDetails_ExpandingOption_Lnk: Locator;
  loc_Client_CampaignDetails_CampaignNGIndustries_Lbl: string;
  loc_Client_CampaignDetails_NGCondition_Lbl: string;

  constructor(page: Page) {
    super(page);

    this.loc_Client_CampaignDetails_RecruitmentClosing_Btn = page.getByText('募集を終了');
    this.loc_Client_CampaignDetails_CampaignClosing_Btn = page.getByText('案件を終了');
    this.loc_Client_CampaignDetails_CampaignTitle_Lbl =
      "//p[@id='title'][(text()='CampaignTitle')]";
    this.loc_Client_CampaignDetails_CampaignCondition_Lnk = page.getByText('条件を詳しくみる');
    this.loc_Client_CampaignDetails_CampaignDetailsPage_Lnk = page.getByText('案件詳細を確認');
    this.loc_Client_CampaignDetails_MonitorListTab_Lnk =
      page.getByText('応募者一覧');
    this.loc_Client_CampaignDetails_ConfirmedListTab_Lnk = page.getByText('インタビュー確定者');

    this.loc_Client_CampaignDetails_CampaignCondition_Lbl =
      "//*[@id='includeCondition']/pre[text()='condition']";

    this.loc_Client_CampaignDetails_ExpandingOption_Lnk = page.getByText('条件を詳しくみる');
    this.loc_Client_CampaignDetails_CampaignNGIndustries_Lbl = '//*[@id="ngIndustries"][text()="NGIndustries"]';
    this.loc_Client_CampaignDetails_NGCondition_Lbl = '//*[@id="excludeCondition"]/pre[text()="condition"]';
  }

  public async clientCampaignDetails_VerifyRecruitmentClosingButton() {
    await this.locatorShouldBePresent(this.loc_Client_CampaignDetails_RecruitmentClosing_Btn);
  }
  public async clientCampaignDetails_VerifyCampaignclosingButton() {
    await this.locatorShouldBePresent(this.loc_Client_CampaignDetails_CampaignClosing_Btn);
  }

  public async clientCampaignDetails_VerifyCampaignTitle(campaignTitle: string) {
    const title = readFromYamlFilePath('CampaignData')[campaignTitle]
    const campaign = this.page.locator(
      this.loc_Client_CampaignDetails_CampaignTitle_Lbl.replace('CampaignTitle', title),
    );
    await this.locatorShouldBePresent(campaign);
  }

  public async clientCampaignDetails_VerifyCamapaignConditionSection() {
    await this.locatorShouldBePresent(this.loc_Client_CampaignDetails_CampaignCondition_Lnk);
  }

  public async clientCampaignDetails_VerifyCampaignDetailsPageLink() {
    await this.locatorShouldBePresent(this.loc_Client_CampaignDetails_CampaignDetailsPage_Lnk);
  }

  public async clientCampaignDetails_VerifyMonitorList() {
    await this.locatorShouldBePresent(this.loc_Client_CampaignDetails_MonitorListTab_Lnk);
  }

  public async clientCampaignDetails_VerifyConfirmedMonitorListTab() {
    await this.locatorShouldBePresent(this.loc_Client_CampaignDetails_ConfirmedListTab_Lnk);
  }

  public async expandCampaignCondition() {
    await this.waitForSecond(2);
    await this.loc_Client_CampaignDetails_ExpandingOption_Lnk.click();
  }

  public async verifyCampaignCondition(CampaignConditionValue: string) {
    const condition = readFromYamlFilePath('CampaignData')[CampaignConditionValue]
    const locator = this.page.locator(
      this.loc_Client_CampaignDetails_CampaignCondition_Lbl.replace('condition', condition),
    );
    await this.locatorShouldBePresent(locator);
  }



  public async verifyNGCondition(NGConditionValue: string) {
    const condition = readFromYamlFilePath('CampaignData')[NGConditionValue]
    const locator = this.page.locator(
      this.loc_Client_CampaignDetails_NGCondition_Lbl.replace('condition', condition),
    );
    await this.locatorShouldBePresent(locator);
  }











  public async verifyNGIndustries(NGIndustry: string) {
    const industry = readFromYamlFilePath('CampaignData')[NGIndustry]
    const locator = this.page.locator(
      this.loc_Client_CampaignDetails_CampaignNGIndustries_Lbl.replace('NGIndustries', industry),
    );
    console.log(locator);
    await this.locatorShouldBePresent(locator);
  }




















}
