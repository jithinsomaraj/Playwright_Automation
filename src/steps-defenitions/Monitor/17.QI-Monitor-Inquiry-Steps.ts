import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When('Click on the inquiry button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_monitor_inquiry.clickOnInquiryTab();
})


When('Select the inquiry type as {string}', async function (this: ICustomWorld, InquiryType: string) {
    await this.PageObject?.obj_monitor_inquiry.clickInquiryTypeRadioBtn(InquiryType);
})

When('Input the inquiry title as {string}', async function (this: ICustomWorld, InquiryTitle: string) {
    await this.PageObject?.obj_monitor_inquiry.inputInquiryTitle(InquiryTitle);
})

When('Input the inquiry content as {string}', async function (this: ICustomWorld, InquiryContent: string) {
    await this.PageObject?.obj_monitor_inquiry.inputInquiryContent(InquiryContent);
})
When('Click inquiry send button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_monitor_inquiry.clickOnSendButton();
})

When('Click on the Inquiry sent message close button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_monitor_inquiry.clickOnCloseButton();
})


When('Verify the inquiry success message', async function (this: ICustomWorld) {
    await this.PageObject?.obj_monitor_inquiry.verifySucessMessage();
})





When('Verify that the send button is disabled', async function (this: ICustomWorld) {
    await this.PageObject?.obj_monitor_inquiry.verifySendButtonIsDisabled();
})
















