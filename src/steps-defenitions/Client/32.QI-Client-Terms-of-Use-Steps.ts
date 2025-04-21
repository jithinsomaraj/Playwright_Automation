import { ICustomWorld } from '../../support/custom-world';
import { When, Then } from '@cucumber/cucumber';





When('Click on the terms of service button', async function (this: ICustomWorld,) {
    await this.PageObject?.obj_client_terms_of_use.clickTermsOfUseButton();
});



Then('Verify the terms of service page', async function (this: ICustomWorld) {
    await this.PageObject?.obj_client_terms_of_use.verifyTermsOfServicePage();


});



When('Click on the privacy policy button', async function (this: ICustomWorld,) {
    await this.PageObject?.obj_client_terms_of_use.clickPrivacyPolicyButton();
});

When('Click on the privacy policy link', async function (this: ICustomWorld) {
    await this.PageObject?.obj_client_terms_of_use.clickPrivacyPolicyLink();
});



Then('Verify the privacy policy page', async function (this: ICustomWorld) {
    await this.PageObject?.obj_client_terms_of_use.verifyPrivacyPolicyPage();
});


When('Click on the Information security policy button', async function (this: ICustomWorld,) {

    await this.PageObject?.obj_client_terms_of_use.clickSecurityPolicyButton();
});



Then('Verify the Information security policy page', async function (this: ICustomWorld) {
    await this.PageObject?.obj_client_terms_of_use.verifySecurityPolicyPage();
});


When('Click on the security check sheet button', async function (this: ICustomWorld,) {
    await this.PageObject?.obj_client_terms_of_use.clickSecuritySheetButton();
});



Then('Verify the security check sheet page', async function (this: ICustomWorld) {
    await this.PageObject?.obj_client_terms_of_use.verifySecuritySheetPage();
});
