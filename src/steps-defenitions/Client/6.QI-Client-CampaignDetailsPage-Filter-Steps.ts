
import { ICustomWorld } from '../../support/custom-world';
import { Given, Then, When } from '@cucumber/cucumber';

Given('Launch the filter popup', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetails_MonitorListFilter.loadTheMonitorFilterPopup();
});

When(
  'Select the filter criteria as {string}',
  async function (this: ICustomWorld, filterCriteria: string) {
    await this.PageObject?.obj_ClientCampaignDetails_MonitorListFilter.selectFiletrcondition(
      filterCriteria,
    );
  },
);

Then('Submit with the filter criteria', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetails_MonitorListFilter.submitTheFilterCondition();
});

When('Expand the area section', async function (this: ICustomWorld) {
  return 'pending';
});

When(
  'Select the professional income range from {string} to {string}',
  async function (this: ICustomWorld, incomeFrom: string, incomeTo: string) {

    console.log(incomeFrom + ' ' + incomeTo);
    return 'pending';
  },
);

When(
  'Select the house-holding income range from {string} to {string}',
  async function (this: ICustomWorld, incomeFrom: string, incomeTo: string) {

    console.log(incomeFrom + ' ' + incomeTo);
    return 'pending';
  },
);

When(
  'Verify the monitor {string} is present',
  async function (this: ICustomWorld, nickName: string) {
    await this.PageObject?.obj_ClientCampaignDetails_MonitorListFilter.verifyTheMonitorIsPresent(
      nickName,
    );
  },
);

When(
  'Verify the column {string} has disappeared from the grid ',
  async function (this: ICustomWorld, column: string) {
    await this.PageObject?.obj_ClientCampaignDetails_MonitorListFilter.gridColumnAddOrRemoveVerification(
      column,
    );
  },
);

When(
  'Select the {string} as the filter criteria {string}',
  async function (this: ICustomWorld, filterCriteria: string, filterValue: string) {
    await this.PageObject?.obj_ClientCampaignDetails_MonitorListFilter.monitorListFilterWithCriteriaAndValue(
      filterCriteria,
      filterValue,
    );
  },
);

When('Clear the filter selection', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetails_MonitorListFilter.clickOnTheFilterClearButton();
});
