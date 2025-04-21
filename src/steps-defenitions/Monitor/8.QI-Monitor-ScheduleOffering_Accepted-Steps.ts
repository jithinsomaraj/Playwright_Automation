import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When('Verify the submit button is disabled', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_AcceptingScheduleOffer.verifyScheduleAcceptSubmitbottonDisabled();
});

When('Verify the client offered date is present', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_AcceptingScheduleOffer.verifyClientOfferedDateIsPresent();
});

When('Click on the date', async function (this: ICustomWorld) {
  const additionOfDay = 1;
  await this.PageObject?.obj_Monitor_AcceptingScheduleOffer.clickOnThescheduleDate(additionOfDay);
});

When(
  'Verify the time {string} under the offer date is correct',
  async function (this: ICustomWorld, offerTime: string) {
    const additionOfDay = 1;
    await this.PageObject?.obj_Monitor_AcceptingScheduleOffer.verifyTheScheduleOfferTimeIsPresent(
      offerTime,
      additionOfDay,
    );
  },
);

When('Select the schedule time {string}', async function (this: ICustomWorld, time: string) {
  await this.PageObject?.obj_Monitor_AcceptingScheduleOffer.clickOnTheOptionButtonOfScheduleTime(time);
});

When('Verify the submit button is enabled', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_AcceptingScheduleOffer.verifyScheduleAcceptSubmitbottonEnabled();
});

When('Submit the selected date', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_AcceptingScheduleOffer.clickOnSubmitButton();
});

When('Click on cancel confirmation popup', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_AcceptingScheduleOffer.clickOnCancelConfirmationPopup();
});

When('Click on the accept button from the confirmation popup', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_AcceptingScheduleOffer.clickOnAcceptConfirmationPopup();
});

When('Click on the acknowledgement close button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_AcceptingScheduleOffer.clickOnTheAcknowledgementPopupButton();
});

When('Click on the participation tab', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_AcceptingScheduleOffer.clickOnTheParticipationTab();
});

When(
  'Verify the project title {string}',
  async function (this: ICustomWorld, projectTitle: string) {
    await this.PageObject?.obj_MonitorTopPage.verifyProjectParameters_title(projectTitle);
  },
);

When(
  'Verify the monitor campaign status {string}',
  async function (this: ICustomWorld, campaignStatus: string) {
    await this.PageObject?.obj_MonitorTopPage.verifyTheStatusOfTheCampaign(campaignStatus);
  },
);

When('Click on the particiapation tab for {string}', async function (this: ICustomWorld, userName: string) {
  await this.PageObject?.obj_Monitor_AcceptingScheduleOffer.clickOnTheParticipationTabAgora(userName);
})

When(
  'Click on the project title for {string}',
  async function (this: ICustomWorld, userName: string) {

    await this.PageObject?.obj_MonitorTopPage.clickOnTheProjectTitleAgora(userName);
  },
);


