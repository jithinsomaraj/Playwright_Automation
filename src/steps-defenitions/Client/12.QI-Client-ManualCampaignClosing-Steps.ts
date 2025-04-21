import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When('Click on the campaign closing button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_manualcampaignclosing.clickOnCampaignClosingButton();
});

When('Accept the campaign closing confirmation popup', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_manualcampaignclosing.acceptTheCampaignClosingConfirmation();
});

When('Navigate to the completed campaign list tab', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_manualcampaignclosing.clickOnCompletedCampaignList();
});

When(
  'Verify the campaign in the list {string}',
  async function (this: ICustomWorld, campaignTitle: string) {
    await this.PageObject?.obj_client_manualcampaignclosing.verifyCampaignInTheList(campaignTitle);
});
