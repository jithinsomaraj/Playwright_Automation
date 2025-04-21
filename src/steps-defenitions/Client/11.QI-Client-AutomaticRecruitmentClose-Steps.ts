import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';
When(
  'Verify the status {string} of the campaign {string}',
  async function (this: ICustomWorld, campaignStatus: string, campaignTitle: string) {
    await this.PageObject?.obj_client_autorecruitmentclose.verifyCampaignStatuFromClientCampaignList(
      campaignStatus,
      campaignTitle,
    );
  },
);
