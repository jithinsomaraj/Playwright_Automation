import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When('Click on the recruitment close button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_manualrecruitmentclose.clickOnRecruitmentcloseButton();
});

When('Click on the submit button on the popup', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_manualrecruitmentclose.clickOnRecruitmentCloseSubmitButton();
});

When(
  'Verify the status of the campaign {string}',
  async function (this: ICustomWorld, campaignTitle: string) {
    await this.PageObject?.obj_client_manualrecruitmentclose.verifyTheStatusOfTheCampaign(
      campaignTitle,
    );
  },
);

When(
  'Verify the campaign {string} is present',
  async function (this: ICustomWorld, campaignTitle: string) {
    await this.PageObject?.obj_client_manualrecruitmentclose.verifyCampaignIsPresentInMonitorTopPage(
      campaignTitle,
    );
  },
);

When(
  'Verify the campaign {string} is not present',
  async function (this: ICustomWorld, campaignTitle: string) {
    await this.PageObject?.obj_client_manualrecruitmentclose.verifyCampaignIsNotPresentInMonitorTopPage(
      campaignTitle,
    );
  },
);
