import { ICustomWorld } from '../../support/custom-world';
import { When, Then } from '@cucumber/cucumber';



When('Click the terms of service button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_monitor_terms_of_use.clickTermsOfUseButton();
});



Then('Verify the monitor terms of service page', async function (this: ICustomWorld) {

    await this.PageObject?.obj_monitor_terms_of_use.verifyTermsOfServicePage();
});



When('Click the privacy policy button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_monitor_terms_of_use.clickPrivacyPolicyButton();
});



Then('Verify the Privacy policy page', async function (this: ICustomWorld) {
    await this.PageObject?.obj_monitor_terms_of_use.verifyPrivacyPolicyPage();
});


When('Click the Information security policy button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_monitor_terms_of_use.clickSecurityPolicyButton();
});



Then('Verify the information security policy page', async function (this: ICustomWorld) {
    await this.PageObject?.obj_monitor_terms_of_use.verifySecurityPolicyPage();
});

