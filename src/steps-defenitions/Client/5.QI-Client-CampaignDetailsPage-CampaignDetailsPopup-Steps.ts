
import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When('Click on the campaign details popup link', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Popup.loadTheCampaignDetailsPopup();
});

When('Verify the campaign details popup has loaded', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Popup.verifyTheCampaignDetailsPopupLoaded();
});

When('Verify the projecttitle from recruitment details for {string}', async function (this: ICustomWorld, campaignName: string) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Popup.verifyTheCampaignDetails_ProjectTitle(campaignName);
});
When('Verify the recruitmentCondition from recruitment details', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Popup.verifyTheCampaignDetails_recruitmentCondition();
});
When('Verify the NG conditions from recruitment details', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Popup.verifyTheCampaignDetails_NgConditions();
});
When('Verify the monitor count from recruitment details', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Popup.verifyTheCampaignDetails_monitorCount();
});
When('Verify the interview duration from recruitment details', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Popup.verifyTheCampaignDetails_interviewDuration();
});
When('Verify the gender from recruitment details', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Popup.verifyTheCampaignDetails_Gender();
});
When('Verify the lower Age from recruitment details', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Popup.verifyTheCampaignDetails_LowerAge();
});
When('Verify the upper Age from recruitment details', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Popup.verifyTheCampaignDetails_UpperAge();
});
When('Verify the Place of residence from recruitment details', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Popup.verifyTheCampaignDetails_PlaceOfResidence();
});
When('Verify the Marital status from recruitment details', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Popup.verifyTheCampaignDetails_MaritalStatus();
});
When('Verify the Children status from recruitment details', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Popup.verifyTheCampaignDetails_ChildrenStatus();
});
When('Verify the Profession from recruitment details', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Popup.verifyTheCampaignDetails_Profession();
});
When('Verify the lower Personal annual income from recruitment details', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Popup.verifyTheCampaignDetails_LowerPersonalAnnualIncome();
});
When('Verify the upper Personal annual income from recruitment details', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Popup.verifyTheCampaignDetails_UpperPersonalAnnualIncome();
});

When('Verify the lower Household income from recruitment details', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Popup.verifyTheCampaignDetails_LowerHouseholdIncome();
});
When('Verify the upper Household income from recruitment details', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Popup.verifyTheCampaignDetails_UpperHouseholdIncome();
});

When('Campaign details popup close button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Popup.closeTheCampaignDetailsPopup();
});
