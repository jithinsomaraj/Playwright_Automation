import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When('Refresh the page', async function (this: ICustomWorld) {
  await this.page?.reload();
  await this.page?.waitForLoadState('load', { timeout: 90000 });
});

When(
  'Click on the project title {string}',
  async function (this: ICustomWorld, projectTitle: string) {
    await this.PageObject?.obj_MonitorTopPage.clickOnTheProjectTitle(projectTitle);
  },
);

When('Verify the page navigation to project details page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorTopPage.verifyPageNavigationToProjectDetailsPage('案件一覧');
});

When(
  'Verify the project parameters title {string}',
  async function (this: ICustomWorld, projectDetails: string) {
    await this.PageObject?.obj_MonitorProjectDetailsPage.verifyProjectDetailsPageProjectParametersTitle(
      projectDetails,
    );
  },
);

When(
  'Verify the project parameters value {string} and {string}',
  async function (this: ICustomWorld, projectDetailstitle: string, projectDetailsValue: string) {
    await this.PageObject?.obj_MonitorProjectDetailsPage.verifyProjectDetailsPageProjectParametersValues(
      projectDetailstitle,
      projectDetailsValue,
    );
  },
);

When('Click on the proceed button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorProjectDetailsPage.clickOnProceedToApplyButton();
});

When('Accept the recruitment conditions pop up', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorProjectDetailsPage.aceeptRecruitmentConditionPopUp();
});
When('Verify page navigated to the schedule details page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorProjectDetailsPage.verifyPageNavigationToSceduleDetailsPage();
});


When(
  'Click on the back button for project details page navigation',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_MonitorProjectDetailsPage.clickOnProjectDetailspageBackButton();
  },
);
When('Veify page navigated to the top page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorProjectDetailsPage.verifyPageNavigationToSceduleDetailsPage();
});
