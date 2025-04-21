
import { BasePage } from '../../utils/BasePage';

import { Locator, Page } from '@playwright/test';
import { readFromYamlFilePath } from '../../utils/YamlReader';

export class ClientCampaignDetailsPage_Popup extends BasePage {
  loc_Client_CampaignDetails_CampaignDetailsPopup_lnk: Locator;
  loc_Client_CampaignDetails_CampaignDetailsInPopup_lbl: string;
  loc_Client_CampaignDetails_CampaignDetailsPopup_Heading_lbl: Locator;
  loc_Client_CampaignDetails_CampaignDetailsPopup_Close_Btn: Locator;
  loc_Client_CampaignDetails_ProjectTitle_lbl: string;
  loc_Client_CampaignDetails_recruitmentCondition_lbl: string;
  loc_Client_CampaignDetails_NgConditions_lbl: string;
  loc_Client_CampaignDetails_monitorCountlbl: string;
  loc_Client_CampaignDetails_interviewDuration_lbl: string;
  loc_Client_CampaignDetails_Gender_lbl: string;

  loc_Client_CampaignDetails_Age_lbl: string;
  loc_Client_CampaignDetails_PlaceOfResidence_lbl: string;
  loc_Client_CampaignDetails_MaritalStatus_lbl: string;
  loc_Client_CampaignDetails_ChildrenStatus_lbl: string;
  loc_Client_CampaignDetails_Profession_lbl: string;
  loc_Client_CampaignDetails_PersonalAnnualIncome_lbl: string;
  loc_Client_CampaignDetails_HouseholdIncome: string;

  constructor(page: Page) {
    super(page);

    this.loc_Client_CampaignDetails_CampaignDetailsInPopup_lbl =
      "(//div[(text()='field')]/following::div/div[(text()='value')])[1]";

    this.loc_Client_CampaignDetails_CampaignDetailsPopup_lnk = page.getByRole('button', { name: '件詳細を確認' });

    this.loc_Client_CampaignDetails_CampaignDetailsPopup_Heading_lbl =
      this.page.locator('#alert-dialog-title');

    this.loc_Client_CampaignDetails_ProjectTitle_lbl = '(//div[(text()="募集タイトル")]/following::*[text()="projectTitle"])[1]'
    this.loc_Client_CampaignDetails_recruitmentCondition_lbl = '(//div[(text()="募集条件")]/following::*[text()="recruitmentCondition"])[1]';
    this.loc_Client_CampaignDetails_NgConditions_lbl = '(//div[(text()="NG条件")]/following::*[text()="NgConditions"])[1]';
    this.loc_Client_CampaignDetails_monitorCountlbl = '(//div[(text()="募集人数")]/following::*[text()="monitorCount"])[1]';
    this.loc_Client_CampaignDetails_interviewDuration_lbl = '(//div[(text()="インタビュー実施時間")]/following::*[text()="interviewDuration"])[1]';
    this.loc_Client_CampaignDetails_Gender_lbl = '(//div[(text()="性別")]/following::*[text()="Gender"])[1]';
    this.loc_Client_CampaignDetails_Age_lbl = '(//div[(text()="年齢")]/following::*[text()="Age歳"])[1]';
    this.loc_Client_CampaignDetails_PlaceOfResidence_lbl = '(//div[(text()="居住地")]/following::*[text()="PlaceOfResidence"])[1]';
    this.loc_Client_CampaignDetails_MaritalStatus_lbl = '(//div[(text()="未既婚")]/following::*[text()="MaritalStatus"])[1]';
    this.loc_Client_CampaignDetails_ChildrenStatus_lbl = '(//div[(text()="子供の有無")]/following::*[text()="ChildrenStatus"])[1]';
    this.loc_Client_CampaignDetails_Profession_lbl = '(//div[(text()="職業")]/following::*[text()="Profession"])[1]';
    this.loc_Client_CampaignDetails_HouseholdIncome = '(//div[(text()="世帯年収")]/following::*[text()="HouseholdIncome万円"])[1]';
    this.loc_Client_CampaignDetails_PersonalAnnualIncome_lbl = '(//div[(text()="個人年収")]/following::*[text()="PersonalAnnualIncome万円"])[1]';



    this.loc_Client_CampaignDetails_CampaignDetailsPopup_Close_Btn = page.getByTestId('modal-onAgree');
  }

  public async loadTheCampaignDetailsPopup() {
    await this.waitForSecond(3);
    await this.loc_Client_CampaignDetails_CampaignDetailsPopup_lnk.click();
  }

  public async verifyTheCampaignDetailsPopupLoaded() {
    await this.locatorShouldBePresent(
      this.loc_Client_CampaignDetails_CampaignDetailsPopup_Heading_lbl,
    );
  }

  public async verifyTheCampaignDetails_ProjectTitle(campaignName: string) {
    const project_Title = readFromYamlFilePath('CampaignData')[campaignName];
    const locator = this.page.locator(this.loc_Client_CampaignDetails_ProjectTitle_lbl.replace('projectTitle', project_Title));
    console.log("locator: " + locator);
    await this.locatorShouldBePresent(locator);
  }


  public async verifyTheCampaignDetails_recruitmentCondition() {
    const recruitment_Condition = readFromYamlFilePath('CampaignData')['recruitmentCondition'];
    const locator = this.page.locator(this.loc_Client_CampaignDetails_recruitmentCondition_lbl.replace('recruitmentCondition', recruitment_Condition));
    console.log("locator: " + locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyTheCampaignDetails_NgConditions() {
    const NgConditions = readFromYamlFilePath('CampaignData')['NGConditions'];
    const locator = this.page.locator(this.loc_Client_CampaignDetails_NgConditions_lbl.replace('NgConditions', NgConditions));
    console.log("locator: " + locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyTheCampaignDetails_monitorCount() {
    const monitorCount = readFromYamlFilePath('CampaignData')['monitorCount'];
    const locator = this.page.locator(this.loc_Client_CampaignDetails_monitorCountlbl.replace('monitorCount', monitorCount));
    console.log("locator: " + locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyTheCampaignDetails_interviewDuration() {
    const interviewDuration = readFromYamlFilePath('CampaignData')['interviewDuration'];
    const locator = this.page.locator(this.loc_Client_CampaignDetails_interviewDuration_lbl.replace('interviewDuration', interviewDuration));
    console.log("locator: " + locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyTheCampaignDetails_Gender() {
    const Gender = readFromYamlFilePath('CampaignData')['Gender'];
    const locator = this.page.locator(this.loc_Client_CampaignDetails_Gender_lbl.replace('Gender', Gender));
    console.log("locator: " + locator);
    await this.locatorShouldBePresent(locator);
  }

  public async verifyTheCampaignDetails_LowerAge() {
    const LowerAge = readFromYamlFilePath('CampaignData')['LowerAge'];
    const locator = this.page.locator(this.loc_Client_CampaignDetails_Age_lbl.replace('Age', LowerAge));
    console.log("locator: " + locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyTheCampaignDetails_UpperAge() {
    const UpperAge = readFromYamlFilePath('CampaignData')['UpperAge'];
    const locator = this.page.locator(this.loc_Client_CampaignDetails_Age_lbl.replace('Age', UpperAge));
    console.log("locator: " + locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyTheCampaignDetails_PlaceOfResidence() {
    const PlaceOfResidence = readFromYamlFilePath('CampaignData')['Place of residence'];
    const locator = this.page.locator(this.loc_Client_CampaignDetails_PlaceOfResidence_lbl.replace('PlaceOfResidence', PlaceOfResidence));
    console.log("locator: " + locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyTheCampaignDetails_MaritalStatus() {
    const MaritalStatus = readFromYamlFilePath('CampaignData')['Marital status'];
    const locator = this.page.locator(this.loc_Client_CampaignDetails_MaritalStatus_lbl.replace('MaritalStatus', MaritalStatus));
    console.log("locator: " + locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyTheCampaignDetails_ChildrenStatus() {
    const ChildrenStatus = readFromYamlFilePath('CampaignData')['ChildrenStatus'];
    const locator = this.page.locator(this.loc_Client_CampaignDetails_ChildrenStatus_lbl.replace('ChildrenStatus', ChildrenStatus));
    console.log("locator: " + locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyTheCampaignDetails_Profession() {
    const Profession = readFromYamlFilePath('CampaignData')['Profession'];
    const locator = this.page.locator(this.loc_Client_CampaignDetails_Profession_lbl.replace('Profession', Profession));
    console.log("locator: " + locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyTheCampaignDetails_LowerPersonalAnnualIncome() {
    const LowerPersonalAnnualIncome = readFromYamlFilePath('CampaignData')['LowerPersonalAnnualIncome'];
    const locator = this.page.locator(this.loc_Client_CampaignDetails_PersonalAnnualIncome_lbl.replace('PersonalAnnualIncome', LowerPersonalAnnualIncome));
    console.log("locator: " + locator);
    await this.locatorShouldBePresent(locator);
  }

  public async verifyTheCampaignDetails_UpperPersonalAnnualIncome() {
    const UpperPersonalAnnualIncome = readFromYamlFilePath('CampaignData')['UpperPersonalAnnualIncome'];
    const locator = this.page.locator(this.loc_Client_CampaignDetails_PersonalAnnualIncome_lbl.replace('PersonalAnnualIncome', UpperPersonalAnnualIncome));
    console.log("locator: " + locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyTheCampaignDetails_LowerHouseholdIncome() {
    const LowerHouseholdIncome = readFromYamlFilePath('CampaignData')['LowerHouseholdIncome'];
    const locator = this.page.locator(this.loc_Client_CampaignDetails_HouseholdIncome.replace('HouseholdIncome', LowerHouseholdIncome));
    console.log("locator: " + locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyTheCampaignDetails_UpperHouseholdIncome() {
    const UpperHouseholdIncome = readFromYamlFilePath('CampaignData')['UpperHouseholdIncome'];
    const locator = this.page.locator(this.loc_Client_CampaignDetails_HouseholdIncome.replace('HouseholdIncome', UpperHouseholdIncome));
    console.log("locator: " + locator);
    await this.locatorShouldBePresent(locator);
  }
  public async closeTheCampaignDetailsPopup() {
    await this.waitForSecond(2);
    await this.loc_Client_CampaignDetails_CampaignDetailsPopup_Close_Btn.click();
  }
}
