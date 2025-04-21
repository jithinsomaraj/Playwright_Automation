/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */

import ScenarioContext from '../../support/ScenarioContext';
import { config } from '../../support/config';
import { ICustomWorld } from '../../support/custom-world';
import { toInteger } from 'lodash';
import { Given, Then, When } from '@cucumber/cucumber';
import { readFromYamlFilePath } from '../../utils/YamlReader';

When('Open browser for {string}', async function (this: ICustomWorld, user: string) {
  await this.PageObject?.obj_ClientLoginPage.launchNewBrowserForAUser(user);
});

Given('Launch the client application', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientLoginPage.launchclientApplication();
});


Given('Launch the application for {string}', async function (this: ICustomWorld, User: string) {


  const index = User.substring(User.length - 1, User.length);
  const index1 = toInteger(index) - 1;

  let pageKey = '';
  let URL = '';
  const BackRoomURL = readFromYamlFilePath('GuestUserDetails')['Guest_url']
  if (User.includes('interviewer')) {
    pageKey = 'page' + config.userList[index1] + '-INT';
    URL = config.clientBaseUrl;
  } else if (User.includes('monitor')) {
    pageKey = 'page' + config.userList[index1] + '-MON';
    URL = config.monitorBaseUrl;
  } else if (User.includes('backroom')) {
    pageKey = 'page' + config.userList[index1] + '-BR';
    URL = BackRoomURL;
  }

  const userpage = ScenarioContext.get(pageKey);

  await this.PageObject?.obj_ClientLoginPage.launchclientApplication2(userpage, URL);
});



Given('Launch the application for Agora for {string}', async function (this: ICustomWorld, User: string) {

  const BackRoomURL = readFromYamlFilePath('GuestUserDetails')['Guest_url']
  console.log(BackRoomURL);
  const index = User.substring(User.length - 1, User.length);
  const index1 = toInteger(index) - 1;

  let pageKey = '';
  let URL = '';

  if (User.includes('interviewer')) {
    pageKey = 'page' + config.userList[index1] + '-INT';
    URL = config.clientBaseUrl;
  } else if (User.includes('monitor')) {
    pageKey = 'page' + config.userList[index1] + '-MON';
    URL = config.monitorBaseUrl;
  } else if (User.includes('backroom')) {
    pageKey = 'page' + config.userList[index1] + '-BR';
    URL = BackRoomURL;
  }

  const userpage = ScenarioContext.get(pageKey);

  await this.PageObject?.obj_ClientLoginPage.launchclientApplication2(userpage, URL);
});











When('Enter the client userid', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientLoginPage.clientLogin_EnterUserName(config.clientUserId);
});

When('Enter the client userid for context {string}', async function (this: ICustomWorld, client: string) {
  await this.PageObject?.obj_ClientLoginPage.clientLogin_EnterUserName_Context(config.clientUserId, client);
});




When('Enter the client invalid userid', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientLoginPage.clientLogin_EnterUserName('InvalidUserId');
});

When('Enter the client password', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientLoginPage.clientLogin_EnterPassword(config.clientPassword);
});
When('Enter the client invalid password', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientLoginPage.clientLogin_EnterPassword('InvalidPassword@1234');
});

When('Click on login button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientLoginPage.clientLogin_ClickOnLoginButton();
});

When('Click on login button for {string}', async function (this: ICustomWorld, userName: string) {
  await this.PageObject?.obj_ClientLoginPage.clientLogin_ClickOnLoginButton2(userName);
});

Then('Verify the client top page navigation', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientLoginPage.clientLogin_VerifyTopPageNavigation();
});

Then('Verify invalid login error message', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientLoginPage.clientLogin_VerifyInvaidLoginError();
});

When('Accept already logged message', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientLoginPage.clientLogin_ClickOkOnAlreadyLoggedProptMessage();
});

When('Login to client application', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientLoginPage.clientLogin();
});


When(
  'Enter the client guest userid for {string}',
  async function (this: ICustomWorld, userName: string) {
    await this.PageObject?.obj_ClientLoginPage.clientLogin_EnterUserName2(userName);
  },
);

When('Enter the client guest password for {string}', async function (this: ICustomWorld, userName: string) {
  await this.PageObject?.obj_ClientLoginPage.clientLogin_EnterPassword2(userName);
});


When('Click on the logout link', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientLoginPage.clickOnMonitorLogoutLink();
});

When('Click on logout confirmation button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientLoginPage.clickOnLogoutConfirmationButton();
});
