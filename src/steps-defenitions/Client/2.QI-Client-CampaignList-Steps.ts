

import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';





When('Navigate to the campaign list page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignList.navigateToCampaignList();
});
When('Navigate to the project details page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignList.navigateToProjectDetailsPage();
});

When('Close the campaign from list page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignList.closeCampaignFromList();
});


When('Verify the campaign list', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignList.verifyClientCampaignList();
});

When(
  'Verify campaign in the campaign list page {string}',
  async function (this: ICustomWorld, campaignTitle: string) {
    await this.PageObject?.obj_Client_CampaignCreation.verifyTheCampaignInTheCampaignListPage(
      campaignTitle,
    );
  },
);

When(
  'Verify campaign implementation date {string} and {string}',
  async function (this: ICustomWorld, startDate: string, endDate: string) {
    await this.PageObject?.obj_Client_CampaignCreation.verifyImplementationDate(
      startDate, endDate
    );
  },
);



When(
  'Verify campaign release date {string}',
  async function (this: ICustomWorld, date: string) {
    await this.PageObject?.obj_Client_CampaignCreation.verifyReleaseDate(
      date,
    );
  },
);


When(
  'Verify campaign monitor count {string}',
  async function (this: ICustomWorld, count: string) {
    await this.PageObject?.obj_Client_CampaignCreation.verifyMonitorCount(
      count,
    );
  },
);



When('Get the campaignid by API {string}', async function (this: ICustomWorld, campaignId: string) {
  await this.PageObject?.obj_ClientCampaignList.getTheCampaignIdByAPI(campaignId);
});
