import { ICustomWorld } from '../../support/custom-world';
import { Then, When } from '@cucumber/cucumber';

When('Click on the client individual chat tab', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_IndividualChatFunction.selectClientIndividualChatTab();
});

When(
  'Enter the message in client individual chat',
  async function (this: ICustomWorld, message: string) {
    await this.PageObject?.obj_Client_IndividualChatFunction.typeTheMessageInClientIndividualChatTextArea(
      message,
    );
  },
);

When('Click on client individual chat send button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_IndividualChatFunction.clickOnTheClientIndividualChatSendButton();
});

Then(
  'Verify the message {string} received in client chat',
  async function (this: ICustomWorld, message: string) {
    await this.PageObject?.obj_Client_IndividualChatFunction.verifyTextMessageReceivedInClientSide(
      message,
    );
  },
);

Then(
  'Verify the message {string} not received in client chat',
  async function (this: ICustomWorld, message: string) {
    await this.PageObject?.obj_Client_IndividualChatFunction.verifyTextMessageNotReceivedInClientSide(
      message,
    );
  },
);

When(
  'Verify the time of client received message {string}',
  async function (this: ICustomWorld, message: string) {
    await this.PageObject?.obj_Client_IndividualChatFunction.verifyTextMessageReceivedTimeInClientSide(
      message,
    );
  },
);
