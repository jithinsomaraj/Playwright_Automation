import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';


When('Click on the broadcast messaging button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_BroadcastMessaging.clickOnTheBroadcastMessagingButton();
});

When(
  'Enter the message {string} in client broadcast message text area',
  async function (this: ICustomWorld, message: string) {
    await this.PageObject?.obj_Client_BroadcastMessaging.typeTheMessageInClientBroadcastChatTextArea(
      message,
    );
  },
);

When('Click on client broadcast message send button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_BroadcastMessaging.clickOnTheClientBroadcastChatSendButton();
});
