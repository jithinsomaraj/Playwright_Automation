import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';




When('Click on the monitor chat tab for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_Agora_chat.selectMonitorChatTab(user);
});



When('Enter the message in Monitor chat from {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_Agora_chat.typeTheMessageInTextbox(user);
});

When('Click Send button for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_Agora_chat.clickSendButton(user);
});

When('Verify the text message received by {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_Agora_chat.verifyTextMessageReceivedInMonitorSide(user);
});


When('Enter the message in monitor chat textarea for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_Agora_chat.typeTheMessageInMonitorChatTextArea(user);
});

When('Click on the message send button for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_Agora_chat.clickOnTheMonitorChatSendButton(user);
});

When('Verify the text message from monitor received by {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_Agora_chat.verifyTextMessageReceivedInInterviewerSide(user);
});


When(
    'Click on the backroom chat list button for {string}',
    async function (this: ICustomWorld, user: string) {
        await this.PageObject?.obj_Agora_chat.clickOnAgoraMeetingFocusedChatListButton(user);
    },
);


When('Click on the backroom monitor chat tab for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_Agora_chat.selectInterviewerChatTab(user);
});


When('Enter the backroom message in Monitor chat from {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_Agora_chat.typeTheMessageInTextbox2(user);
});

When('Click backroom Send button for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_Agora_chat.clickBackroomChatSendButton(user);
});

When('Verify the text message from backroom received by {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_Agora_chat.verifyTextMessageReceivedInInterviewerSide2(user);
});



When('Click on the backroom chat tab for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_Agora_chat.selectBackroomChatTab(user);
});



