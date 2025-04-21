import { ICustomWorld } from '../../support/custom-world';
import { Then, When } from '@cucumber/cucumber';

When(
  'Select monitor {string} from the monitor list',
  async function (this: ICustomWorld, nickName: string) {
    await this.PageObject?.obj_MonitorSendoffByClient.selectMonitorFromTheList(nickName);
  },
);

When('Verify the sendoff button is present', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorSendoffByClient.verifyTheSendOffButtonIsPresent();
});

When('Click on the sendoff button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorSendoffByClient.clickOnSendOffButton();
});

When('Click on the sendoff popup cancellation button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorSendoffByClient.clickOnSendOffPopupCancelButton();
});

When('Click on the sendoff submit button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorSendoffByClient.clickOnSendOffPopupSubmitButton();
});

When(
  'Verify the sendoff popup nickname {string}',
  async function (this: ICustomWorld, nickName: string) {
    await this.PageObject?.obj_MonitorSendoffByClient.verifySendOffPopupNickName(nickName);
  },
);

When(
  'Verify the monitor {string} status is {string}',
  async function (this: ICustomWorld, monitor: string, status: string) {
    await this.PageObject?.obj_MonitorSendoffByClient.verifyTheMonitorStatus(monitor, status);
  },
);

Then('Verify the {string} button is disabled', async function (this: ICustomWorld, button: string) {
  await this.PageObject?.obj_MonitorSendoffByClient.verifyTheButtonStatus(button);
});
