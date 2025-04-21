import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When('Navigate to the client meeting settings page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_BeforeInterview.pageNavigationToTheMeetingSettingsPage();
});

When(
  'Switch off the video in the client meeting settings page',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_Client_BeforeInterview.clickOnButtonToOffVideoPreview();
  },
);

When(
  'Switch on the video in the client meeting settings page',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_Client_BeforeInterview.clickOnButtonToOnTheVideoPreview();
  },
);

When(
  'Verify the video preview is off in the client meeting settings page',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_Client_BeforeInterview.verifyVideoPreviewIsDisabledInMeetingSettingsPage();
  },
);

When('Switch off the mic in the client meeting settings page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_BeforeInterview.clickOnButtonToOffMic();
});

When(
  'Verify the mic is getting off in the client meeting settings page',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_Client_BeforeInterview.verifyMicIsOffInMeetingSettingsPage();
  },
);

When(
  'Disable the background blur button in the client meeting settings page',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_Client_BeforeInterview.disableTheBackgroundBlur();
  },
);

When(
  'Verify the blur button got enabled in the client meeting settings page',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_Client_BeforeInterview.verifyBlurButtonEnabledInMeetingSettingsPage();
  },
);
