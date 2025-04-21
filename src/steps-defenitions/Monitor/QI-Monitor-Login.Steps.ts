/* eslint-disable prettier/prettier */
import { ICustomWorld } from '../../support/custom-world';
import { Given, Then, When } from '@cucumber/cucumber';
Given(
  'Launch the monitor application as {string}',
  async function (this: ICustomWorld, windowsize: string) {
    await this.PageObject?.obj_MonitorLoginPage.monitorLogin_LaunchMonitorApplication(windowsize);

  },
);

When('Enter the user name {string}', async function (this: ICustomWorld, userName: string) {
  await this.PageObject?.obj_MonitorLoginPage.monitorLogin_EnterUserName(userName);
});
When('Enter the password {string}', async function (this: ICustomWorld, password: string) {
  await this.PageObject?.obj_MonitorLoginPage.monitorLogin_EnterPassword(password);
});
When('Click on the login button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorLoginPage.monitorLogin_ClickOnLoginButton();
});

When('Login as Monitor', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorLoginPage.monitorLogin_LoginAsMonitor();
});





Then('Verify the top page navigation', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorLoginPage.monitorLogin_VerifyTopPageNavigation();
});

Then('Verify the top page navigation {string}', async function (this: ICustomWorld, username: string) {
  await this.PageObject?.obj_MonitorLoginPage.monitorLogin_VerifyTopPageNavigationforagora(username);
});




Then('Verify the invalid login error message', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorLoginPage.monitorLogin_VerifyInvaidLoginError();
});

When('Enter the nick-name {string}', async function (this: ICustomWorld, nickName: string) {
  await this.PageObject?.obj_MonitorLoginPage.enterNickName(nickName);
});

When('Click on the submit button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorLoginPage.clickOnNickNameSubmitButton();
});

Given('Login as {string} application', async function (this: ICustomWorld, monitor: string) {
  await this.PageObject?.obj_MonitorLoginPage.monitorLogin(monitor);
});


