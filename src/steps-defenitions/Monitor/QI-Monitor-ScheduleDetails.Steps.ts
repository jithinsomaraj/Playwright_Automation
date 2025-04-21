import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When('Select the option button to accept the schedule', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorscheduleDetailsPage.clickOnScheduleAcceptOptionButton();
});

When('Select the all the above dates are NG', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorscheduleDetailsPage.clickOnScheduleRejectionOptionButton();
});

When('Click on the answer button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorscheduleDetailsPage.clickOnTheAnswerButton();
});

When('Verify the page navigated to the survey page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorscheduleDetailsPage.verifyPageNavigationToSurveyPage();
});

When('Verify the rejection popup heading', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorscheduleDetailsPage.verifyProjectRejectionPopupHeading();
});

When('Verify the rejection popup text', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorscheduleDetailsPage.verifyProjectRejectionPopupText();
});

When('Click on the search for other open jobs button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorscheduleDetailsPage.clickOnAlertSubmitButton();
});
When('Click on the interview schedule page navigation button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorscheduleDetailsPage.clickOnBackToScheduleDetailsLink();
});

When(
  'Verify the campaign not listed in the recruiting tab {string}',
  async function (this: ICustomWorld, campaignTitle: string) {
    await this.PageObject?.obj_MonitorscheduleDetailsPage.verifyTheCampaignNotListedInTheRecruitingTab(
      campaignTitle,
    );
  },
);


