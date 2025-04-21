/* eslint-disable no-console */
import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';
import { readFromYamlFilePath } from '../../utils/YamlReader';

When('Click on a monitor {string}', async function (this: ICustomWorld, monitor: string) {
  await this.PageObject?.obj_client_individualscheduleoffer.clickOnAMonitor(monitor);
});

When('Click on a monitor', async function (this: ICustomWorld) {
  const data = readFromYamlFilePath('CampaignData')['monitorname']
  await this.PageObject?.obj_client_individualscheduleoffer.clickOnAMonitor(data);
});

When('Select schedule offer tab', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_individualscheduleoffer.selectScheduleOfferTab();
});

When('Send schedule offer for {string}', async function (this: ICustomWorld, time: string) {
  await this.PageObject?.obj_client_individualscheduleoffer.sendScheduleOffer(time);
});



When(
  'Select one offering date with time {string}',
  async function (this: ICustomWorld, time: string) {
    const additionaOfDay = 1;
    await this.PageObject?.obj_client_individualscheduleoffer.selectOneOfferDate(
      additionaOfDay,
      time,
    );
  },
);

When('Click on schedule offer submit button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_individualscheduleoffer.clickOnOfferSubmitButton();
});

When('Click on the accept the confirmation popup', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_individualscheduleoffer.clickOnOfferConfirmationSubmitButton();
});
When('Click on the ticket consumption confirmation popup', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_individualscheduleoffer.clickOnTicketConsumptionConfirmationSubmitButton();
});

When('Select new schedule dates option button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_individualscheduleoffer.selectDifferentScheduleOfferingOptionButton();
});

When('Click on the calendar {string}', async function (this: ICustomWorld, count: string) {
  await this.PageObject?.obj_client_individualscheduleoffer.clickOnCalendarIcon(count);
});

When('Click on the calendar', async function (this: ICustomWorld,) {
  await this.PageObject?.obj_client_individualscheduleoffer.clickOnCalendarIcononly();
});


When('Select new offering date', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_individualscheduleoffer.selectNewOfferingDate();
});

When(
  'Click on the schedule time combobox {string}',
  async function (this: ICustomWorld, count: string) {
    await this.PageObject?.obj_client_individualscheduleoffer.clickOnNewOfferTimeComboBox(count);
  },
);


When(
  'Select interview time period {string}',
  async function (this: ICustomWorld, interviewTime: string) {
    await this.PageObject?.obj_client_individualscheduleoffer.selectNewOfferingTime(interviewTime);
  },
);

When('Add additional row for multiple schedules', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_individualscheduleoffer.addNewRowForOfferDate();
});

When('Save guest user information', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_individualscheduleoffer.saveGuestUserInfo();
});

