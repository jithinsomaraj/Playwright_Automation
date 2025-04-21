/* eslint-disable prettier/prettier */
import { ICustomWorld } from '../../support/custom-world';
import { Then, When } from '@cucumber/cucumber';
import { readFromYamlFilePath } from '../../utils/YamlReader';

When(
  'Click on the campaign from campaign list {string}',
  async function (this: ICustomWorld, campaignTitle: string) {
    await this.PageObject?.obj_ClientCampaignList.clientCampaignDetails_navigateToCampaignDetailsPage(
      campaignTitle,
    );
  },
);

When(
  'Click on the campaign from campaign list',
  async function (this: ICustomWorld) {
    const campaignTitle = readFromYamlFilePath('CampaignData')['campaignTitle']
    await this.PageObject?.obj_ClientCampaignList.clientCampaignDetails_navigateToCampaignDetailsPage(
      campaignTitle,
    );
  },
);


When(
  'Verify the campaign details page navigationClick on the campaign',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_ClientCampaignList.navigateToCampaignList();
  },
);

Then('Verify the recruitment closing button is present', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Elements.clientCampaignDetails_VerifyRecruitmentClosingButton();
});

Then('Verify the campaign closing button is present', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Elements.clientCampaignDetails_VerifyCampaignclosingButton();
});

Then(
  'Verify the campaign condition section is present {string}',
  async function (this: ICustomWorld, campaignTitle: string) {
    await this.PageObject?.obj_ClientCampaignDetailsPage_Elements.clientCampaignDetails_VerifyCampaignTitle(
      campaignTitle,
    );
  },
);

When('Verify the campaign condition section is present', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Elements.clientCampaignDetails_VerifyCamapaignConditionSection();
});

Then('Verify the campaign details page link is present', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Elements.clientCampaignDetails_VerifyCampaignDetailsPageLink();
});

Then('Verify the applicant list tab is present', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Elements.clientCampaignDetails_VerifyMonitorList();
});

Then('Verify the confirmed list tab is present', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Elements.clientCampaignDetails_VerifyConfirmedMonitorListTab();
});

Then(
  'Verify the campaign title is present {string}',
  async function (this: ICustomWorld, campaignTitle: string) {
    await this.PageObject?.obj_ClientCampaignDetailsPage_Elements.clientCampaignDetails_VerifyCampaignTitle(
      campaignTitle,
    );
  },
);

When('Expand the campaign condition section', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Elements.expandCampaignCondition();
});
When(
  'Verify the recruitment condition {string}',
  async function (this: ICustomWorld, recruitmentCondition: string) {
    await this.PageObject?.obj_ClientCampaignDetailsPage_Elements.verifyCampaignCondition(recruitmentCondition);
  },
);
When('Verify the NGCondition {string}', async function (this: ICustomWorld, NGCondition: string) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Elements.verifyNGCondition(NGCondition);
});
When(
  'Verify the NG Industries {string}',
  async function (this: ICustomWorld, NGIndustries: string) {
    await this.PageObject?.obj_ClientCampaignDetailsPage_Elements.verifyNGIndustries(NGIndustries);
  },
);
