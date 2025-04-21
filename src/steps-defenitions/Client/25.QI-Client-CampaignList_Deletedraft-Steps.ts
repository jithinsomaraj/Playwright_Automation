import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When(
  'Click on the delete button of drafted campaign {string}',
  async function (this: ICustomWorld, campaignTitle: string) {
    await this.PageObject?.obj_campaigndeletion.clickOnDraftCampaignDeleteButton(campaignTitle);
  },
);

When('Cancel the campaign deletion confirmation popup', async function (this: ICustomWorld) {
  await this.PageObject?.obj_campaigndeletion.clickOnCancelButtonInCampaignDeleteConfirmationPopup();
});

When('Accept the campaign deletion confirmation popup', async function (this: ICustomWorld) {
  await this.PageObject?.obj_campaigndeletion.clickOnAcceptButtonInCampaignDeleteConfirmationPopup();
});

When(
  'Verify the campaign has removed from the list {string}',
  async function (this: ICustomWorld, campaignTitle: string) {
    await this.PageObject?.obj_campaigndeletion.verifyTheCampaignRemovedFromTheGrid(campaignTitle);
  },
);
