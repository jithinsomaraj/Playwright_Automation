import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When(
  'Click on the video sharing page link {string}',
  async function (this: ICustomWorld, campaignTitle: string) {
    await this.PageObject?.obj_Client_VideoSharing.clickOnTheVideoSharingPageLink(campaignTitle);
  },
);

When(
  'Verify the page navigation to the video sharing campaignlist page',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_Client_VideoSharing.verifyPageNavigationToVideoSharingCampaignListPage();
  },
);
When(
  'Verify the campaign title {string}',
  async function (this: ICustomWorld, campaignTitle: string) {
    await this.PageObject?.obj_Client_VideoSharing.verifyTheCampaignTitle(campaignTitle);
  },
);

When(
  'Verify the campaign date {string} of the monitor {string}',
  async function (this: ICustomWorld, campaignDate: string, monitorName: string) {
    await this.PageObject?.obj_Client_VideoSharing.verifyTheCampaignDate(monitorName, campaignDate);
  },
);

When(
  'Verify the monitor name {string} with campaign date {string}',
  async function (this: ICustomWorld, monitorName: string, campaignDate: string) {
    await this.PageObject?.obj_Client_VideoSharing.verifyTheMonitorName(campaignDate, monitorName);
  },
);

When(
  'Verify the monitor profile details {string} and {string}',
  async function (this: ICustomWorld, monitorAttribute: string, value: string) {
    await this.PageObject?.obj_Client_VideoSharing.verifyTheMonitorProfileDetails(
      monitorAttribute,
      value,
    );
  },
);
