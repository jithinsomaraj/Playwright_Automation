import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When('Verify the terms of service page for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_monitor_loginFlow.verifyTermsPage(user);
});

When('Click terms check box for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_monitor_loginFlow.clickTermsCheckBox(user);
});


When('Click Agree button for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_monitor_loginFlow.clickAgreeButton(user);
});


When('Verify confidentiality agreement pop up for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_monitor_loginFlow.verifyConfidentialityAgreement(user);
});


When('Click inquiry button for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_monitor_loginFlow.clickInquiryButton(user);
});

When('Select the terms inquiry type as {string} for {string}', async function (this: ICustomWorld, InquiryType: string, user: string) {
    await this.PageObject?.obj_monitor_loginFlow.clickInquiryTypeRadioBtn(InquiryType, user);
})


When('Click back button for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_monitor_loginFlow.clickBackButton(user);
})



