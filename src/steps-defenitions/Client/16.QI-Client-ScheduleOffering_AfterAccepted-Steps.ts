import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When(
  'Verify the Red dot notification is present for the monitor {string}',
  async function (this: ICustomWorld, monitor: string) {
    await this.PageObject?.obj_Cliet_AfterAcceptSheduleoffer.verifyTheRedDotNotificationIsPresent(
      monitor,
    );
  },
);

When('Verify the meeting link is available', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Cliet_AfterAcceptSheduleoffer.verifyTheMeetingLinkIsPresent();
});

When('Verify the meeting id is available', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Cliet_AfterAcceptSheduleoffer.verifyTheMeetingIdIsPresent();
});

When('Verify the meeting password is available', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Cliet_AfterAcceptSheduleoffer.verifyTheMeetingPasswordIsPresent();
});

When('Verify the meeting join button is there', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Cliet_AfterAcceptSheduleoffer.verifyTheMeetingJoiningButtonIsPresent();
});

When('Click on the copy link button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Cliet_AfterAcceptSheduleoffer.clickOnTheCopyLinkButton();
});

When('Verify the copied successful message is present', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Cliet_AfterAcceptSheduleoffer.verifyTheCopiedSuccessfulMessage();
});

When(
  'Click on the meeting joining button from schedule offering tab',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_Cliet_AfterAcceptSheduleoffer.clickOnTheMeetingJoiningButton();
  },
);

When(
  'Verify the page navigation to the Agora meeting settings page',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_Cliet_AfterAcceptSheduleoffer.verifyTheAgorameetingSettingsPageTitle();
  },
);
