

import ScenarioContext from '../../support/ScenarioContext';
import { config } from '../../support/config';
//import { config } from '../../support/config';
import { ICustomWorld } from '../../support/custom-world';
//import { toInteger } from 'lodash';
import { Given, Then, When } from '@cucumber/cucumber';



Given('Launch the admin application', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_sso_login.launchAdminApplication();
});


When('Enter the admin userid', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_sso_login.adminLogin_EnterUserName(config.adminUserID);
});

When('Enter the admin password', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_sso_login.adminLogin_EnterPassword(config.adminPassword);
});

When('Click on admin login button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_sso_login.adminLogin_ClickOnLoginButton();
});

When('Login as admin user', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_sso_login.adminSingleLogin(config.adminUserID, config.adminPassword);
});


Then('Verify the admin top page navigation', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_sso_login.adminLogin_VerifyTopPageNavigation();
});


Then('Click on Interview zero Button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_sso_login.adminLogin_ClickOnInterviewZeroButton();
});


Then('Click on the Login confirmation pop up accept button', async function (this: ICustomWorld) {
    this.page = await ScenarioContext.get('NewTab');
    await this.PageObject?.obj_admin_sso_login.adminLogin_ClickOnLoginAcceptButton();
});



Then('Verify the page title', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_sso_login.adminLogin_VerifyPageTitle();
});

Then('Navigate to Login page', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_sso_login.launchAdminApplication();
});
