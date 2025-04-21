/* eslint-disable no-console */
import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When('Click on the monitor chat tab', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_IndividualChatFunction.selectMonitorAppliedChatTab();
});



When(
  'Enter the message {string} in monitor chat textarea',
  async function (this: ICustomWorld, message: string) {
    await this.PageObject?.obj_Monitor_IndividualChatFunction.typeTheMessageInMonitorChatTextArea(
      message,
    );
  },
);

When('Click on the message send button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_IndividualChatFunction.clickOnTheMonitorChatSendButton();
});

When(
  'Verify the text message {string} received by monitor',
  async function (this: ICustomWorld, message: string) {
    await this.PageObject?.obj_Monitor_IndividualChatFunction.verifyTextMessageReceivedInMonitorSide(
      message,
    );
  },
);

When(
  'Verify the text message {string} not received by monitor',
  async function (this: ICustomWorld, message: string) {
    await this.PageObject?.obj_Monitor_IndividualChatFunction.verifyTextMessageNotReceivedInMonitorSide(
      message,
    );
  },
);

When(
  'Verify the time of monitor received message {string}',
  async function (this: ICustomWorld, message: string) {
    await this.PageObject?.obj_Monitor_IndividualChatFunction.verifyTextMessageTimeInMonitorSide(
      message,
    );
  },
);

When('Upload image {string}', async function (this: ICustomWorld, fileName: string) {
  console.log(fileName);
  await this.PageObject?.obj_Monitor_IndividualChatFunction.monitorChatImageFileUpload(fileName);
});

When('Upload file {string}', async function (this: ICustomWorld, fileName: string) {
  console.log(fileName);
  await this.PageObject?.obj_Monitor_IndividualChatFunction.monitorChatFileUpload(fileName);
});

When(
  'Verify the image {string} received  in client side',
  async function (this: ICustomWorld, fileName: string) {
    await this.PageObject?.obj_Monitor_IndividualChatFunction.verifyImageReceivedInClientside(
      fileName,
    );
  },
);
When(
  'Verify the file {string} received in client side',
  async function (this: ICustomWorld, fileName: string) {
    await this.PageObject?.obj_Monitor_IndividualChatFunction.verifyTheFileReceivedInClientSide(
      fileName,
    );
  },
);
When('Get the image count from client chat', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_IndividualChatFunction.getTheImageCountFromTheChat();
});
