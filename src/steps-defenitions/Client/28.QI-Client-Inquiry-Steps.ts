import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When('Click on the menu link', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_ClientInquiry.clickOnTheInquiryMenuItem();
});

When('Verify the inquiry submit button is disabled', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_ClientInquiry.verifySubmitButtonDisabled();
});

When('Enter the email {string}', async function (this: ICustomWorld, email: string) {
  await this.PageObject?.obj_client_ClientInquiry.entertheEmailId(email);
});

When('Enter the inquiry title {string}', async function (this: ICustomWorld, title: string) {
  await this.PageObject?.obj_client_ClientInquiry.enterTheInquiryTitle(title);
});

When('Enter the inquiry subject {string}', async function (this: ICustomWorld, inquiry: string) {
  await this.PageObject?.obj_client_ClientInquiry.enterTheInquirySubject(inquiry);
});

When('Click on the inquiry submit button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_ClientInquiry.clickOnTheInquirySubmitButton();
});

When('Select the inform option button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_ClientInquiry.selectInformOptionButton();
});

When('Select the inquiry option button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_ClientInquiry.selectInquiryOptionButton();
});

When('Click on the inquiry agreement popup button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_ClientInquiry.clickOnInquiryAgreementPopup();
});
When('Verify the success submission message', async function (this: ICustomWorld) {
  await this.PageObject?.obj_client_ClientInquiry.verifyTheInquirySubmissionSuccessMessage();
});
