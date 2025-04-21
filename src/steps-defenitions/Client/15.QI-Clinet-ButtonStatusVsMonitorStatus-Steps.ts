import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When(
  'Select a monitor with status {string}',
  async function (this: ICustomWorld, monitorStatus: string) {
    await this.PageObject?.obj_buttonstatusvsinterviewstatus.selectMonitorBasedOnStatus(
      monitorStatus,
    );
  },
);

When('Verify schedule offering button is Enabled', async function (this: ICustomWorld) {
  await this.PageObject?.obj_buttonstatusvsinterviewstatus.verifyScheduleOfferingButtonEnabled();
});

When('Verify messageing button is Enabled', async function (this: ICustomWorld) {
  await this.PageObject?.obj_buttonstatusvsinterviewstatus.verifyBulkMessagingButtonEnabled();
});

When('Verify sendoff button is Enabled', async function (this: ICustomWorld) {
  await this.PageObject?.obj_buttonstatusvsinterviewstatus.verifySendoffButtonEnabled();
});

When('Verify schedule offering button is Disabled', async function (this: ICustomWorld) {
  await this.PageObject?.obj_buttonstatusvsinterviewstatus.verifyScheduleOfferingButtonDisabled();
});

When('Verify messageing button is Disabled', async function (this: ICustomWorld) {
  await this.PageObject?.obj_buttonstatusvsinterviewstatus.verifyBulkMessagingButtonDisabled();
});

When('Verify sendoff button is Disabled', async function (this: ICustomWorld) {
  await this.PageObject?.obj_buttonstatusvsinterviewstatus.verifySendoffButtonDisabled();
});
