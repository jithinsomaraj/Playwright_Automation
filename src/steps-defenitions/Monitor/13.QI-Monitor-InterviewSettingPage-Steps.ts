import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When('Disable The Mic In Monitor Settings Page for {string}', async function (this: ICustomWorld, userName: string) {
  await this.PageObject?.obj_monitor_beforeinterview.clickTheButtonToDisableTheMicInMonitorSettingsPage(userName);
});

When('Verify the mic button is disabled for {string}', async function (this: ICustomWorld, userName: string) {
  await this.PageObject?.obj_monitor_beforeinterview.verifyTheMicButtonDisabled(userName);
});

When('Verify the mic button enabled for {string}', async function (this: ICustomWorld, userName: string) {
  await this.PageObject?.obj_monitor_beforeinterview.verifyTheMicButtonIsEnabled(userName);
});

When('Enable The Mic In Monitor Settings Page for {string}', async function (this: ICustomWorld, userName: string) {
  await this.PageObject?.obj_monitor_beforeinterview.clickTheButtonToEnableTheMicInMonitorSettingsPage(userName);
});

When('Verify Disabled Backroom Join Buttonin Settings Page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_monitor_beforeinterview.verifyDisabledBackroomJoinButtoninSettingsPage();
});

When('Click On Audio And Video Settings Button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_monitor_beforeinterview.clickOnAudioAndVideoSettingsButton();
});

When('Click On Audio And Video Settings Popup Close Button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_monitor_beforeinterview.clickOnAudioAndVideoSettingsPopupCloseButton();
});

When('Click on the interview join button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_monitor_beforeinterview.clickOnInterviewerJoinButtoninSettingsPage();
});

When('Click on the backroom member join button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_monitor_beforeinterview.clickOnBackroomJoinButtoninSettingsPage();
});

When('Click on the agree button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_monitor_beforeinterview.clickOnAcceptButtonOfMeetingJoiningConfirmationPopup();
});

When('Verify the join request submitted message in UI', async function (this: ICustomWorld) {
  await this.PageObject?.obj_monitor_beforeinterview.VerifyTheJoiningRequestHasSent();
});

When(
  'Enable the background blur button in the monitor meeting settings page for {string}',
  async function (this: ICustomWorld, username: string) {
    await this.PageObject?.obj_monitor_beforeinterview.enableMonitorMeetingSettingsBackgroundBlurButton(username);
  },
);
When(
  'Verify the blur button got enabled in the monitor meeting settings page for {string}',
  async function (this: ICustomWorld, username: string) {
    await this.PageObject?.obj_monitor_beforeinterview.verifyTheMonitorMeetingSettingsBackgroundBlurButtonEnabled(username);
  },
);

When('Disable the video in the monitor meeting settings page for {string}', async function (this: ICustomWorld, username: string) {
  await this.PageObject?.obj_monitor_beforeinterview.enableMonitorMeetingSettingsVideo(username);
});

When(
  'Verify the video preview is off in the monitor meeting settings page',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_monitor_beforeinterview.verifyTheMonitorMeetingVideoPreviewButtonEnabled();
  },
);
