import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When('Click on the bulk schedule offering button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_bulkscheduleoffering.clickOnScheduleOfferingButton();
});

When(
  'Verify the selected monitor count {string}',
  async function (this: ICustomWorld, monitorCount: string) {
    await this.PageObject?.obj_client_bulkscheduleoffering.verifySelectedMonitorCount(monitorCount);
  },
);

When(
  'Verify the selected monitor nickname {string}',
  async function (this: ICustomWorld, nickName: string) {
    await this.PageObject?.obj_client_bulkscheduleoffering.verifyScheduleOfferingPopupNickName(
      nickName,
    );
  },
);

When(
  'Select a schedule date with time {string}',
  async function (this: ICustomWorld, scheduleTime: string) {
    const additionOfDay = 1;
    await this.PageObject?.obj_client_bulkscheduleoffering.selectAScheduleDate(
      additionOfDay,
      scheduleTime,
    );
  },
);

When('Click on the schedule offering popup submit button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_bulkscheduleoffering.clickOnScheduleOfferingPopupSubmitButton();
});

When('Click on the schedule popup cancel button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_bulkscheduleoffering.clickOnSchedulePopupCancelButton();
});
When('Close the individual schedule offer popover', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_bulkscheduleoffering.closeTheIndividualScheduleOfferPopover();
});
When('Verify the schedule offering success message', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_bulkscheduleoffering.verifyScheduleOfferingSuccessMessage();
});

When('Verify scehdule offering button disabled', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_bulkscheduleoffering.verifyScheduleOfferingButtonDisabled();
});

When(
  'Verify already accepted date with time {string} is displayed',
  async function (this: ICustomWorld, time: string) {
    const additionOfDay = 3;
    await this.PageObject?.obj_client_bulkscheduleoffering.verifyAcceptedDateIsDisplayed(
      additionOfDay,
      time,
    );
  },
);
