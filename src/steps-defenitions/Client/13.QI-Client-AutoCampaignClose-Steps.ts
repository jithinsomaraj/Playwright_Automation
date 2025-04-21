import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When(
  'Verify the active campaign list not having end date less than today',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_client_autocampaignclose.verifyCampaignStatusForCampaignEndDateLessthanToday();
  },
);
