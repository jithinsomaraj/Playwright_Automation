import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When('Click on the sendoff button from participation tab', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_SendoffFromParticipation.clickOnSendOffFromParticipationTab();
});

When('Click on the completion tab', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_SendoffFromParticipation.clickOnTheCompletionTab();
});

When(
  'Verify the cancelled details present in schedule adjusting tab',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_Monitor_SendoffFromParticipation.verifyCancellationStatusInScheduleOfferingTab();
  },
);

When('Click on the chat tab', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_SendoffFromParticipation.clickOnTheChatTab();
});

When(
  'Enter the message {string} in client individual chat',
  async function (this: ICustomWorld, txtMesssage: string) {
    await this.PageObject?.obj_Monitor_SendoffFromParticipation.typeTheMessageInTextbox(
      txtMesssage,
    );
  },
);


When('Verify the text field is disabled', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_SendoffFromParticipation.verifyMessageTextFieldIsDisabled();
});


When('Verify the file button is disabled', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_SendoffFromParticipation.verifyMessageFileButtonDisabled();
});



When('Verify the image button is disabled', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_SendoffFromParticipation.verifyMessageImageButtonDisabled();
});


When('Verify the send button is disabled', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_SendoffFromParticipation.verifyMessageSendButtonIsDisabled();
});

When('Verify the ticket count from the header', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_SendoffFromParticipation.getTheTicketCountFromTheHeader();
});

When('Click on open offer to other monitors', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_SendoffFromParticipation.clickOnOpenOfferToOtherMonitorsButton();
});

When(
  'Verify successful message for open offer to other monitors',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_Monitor_SendoffFromParticipation.verifySuccessfulMessageForOpenOfferToOtherMonitors();
  },
);

When('Click on the close the offer button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_SendoffFromParticipation.clickOnOfferCloseButton();
});

When('Verify successful message for close the offer', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_SendoffFromParticipation.verifySuccessfulMessageToCloseTheOffering();
});


