import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';
When(
  'Verify the mandatory field alert messages for questionare',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_MonitorSurveyPage.verifyQuestionnaireMandatoryFieldValidationMessageIsPresent();
  },
);
When(
  'Verify the mandatory field alert messages for conditions',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_MonitorSurveyPage.verifyConditionMandatoryFieldValidationMessageIsPresent();
  },
);
When(
  'Answer the question {string} and {string}',
  async function (this: ICustomWorld, answer: string, type: string) {
    await this.PageObject?.obj_MonitorSurveyPage.chooseTheAnswer(answer, type);
  },
);

When('Verify the apply button is disabled', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorSurveyPage.verifyTheApplyButtonIsEnabledOrDisabled('disabled');
});

When('Accept the recruitment conditions1', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorSurveyPage.recruitmentCondition1();
});

When('Accept the recruitment conditions2', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorSurveyPage.recruitmentCondition2();
});

When('Accept the recruitment conditions3', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorSurveyPage.recruitmentCondition3();
});

When('Verify the apply button is enabled', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorSurveyPage.verifyTheApplyButtonIsEnabledOrDisabled('enabled');
});

When('Click on the apply button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorSurveyPage.clickOnApplyButton();
});

When('Click on the applied tab', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorSurveyPage.clickOnAppliedTab();
});

When(
  'Verify the campaign listed in the applied tab {string}',
  async function (this: ICustomWorld, campaignName: string) {
    await this.PageObject?.obj_MonitorSurveyPage.verifyCampaignInAppliedTab(campaignName);
  },
);

When('Accept the campaign apply confirmation', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorSurveyPage.clickOnCampaignApplyConfirmationButton();
});
