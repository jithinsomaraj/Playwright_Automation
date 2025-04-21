
import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When('Verify the To-do list section', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorTopPage.verifyToDoListSectionIsPresent();
});

When('Verify the Latest news', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorTopPage.verifyLatestNewsSectionIsPresent();
});

When('Verify the List of projects heading', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorTopPage.verifyListOfProjectsHeadingIsPresent();
});

When('Verify the four tabs are there', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorTopPage.verifyProjectStatusTabsArePresent1();
  await this.PageObject?.obj_MonitorTopPage.verifyProjectStatusTabsArePresent2();
  await this.PageObject?.obj_MonitorTopPage.verifyProjectStatusTabsArePresent3();
  await this.PageObject?.obj_MonitorTopPage.verifyProjectStatusTabsArePresent3();
});

When('Verify the sorting option is there', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorTopPage.verifyProjectSortingListBoxIsPresent();
});

When(
  'Verify the sorting option {string}',
  async function (this: ICustomWorld, SortingListItems: string) {
    if (SortingListItems === '新着順') {
      await this.PageObject?.obj_MonitorTopPage.clickOnProjectSortingListBox();
    }

    await this.PageObject?.obj_MonitorTopPage.verifyProjectSortingListBoxItems(SortingListItems);
  },
);

When('Verify the menu option is there', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorTopPage.verifyLeftPaneMenuIsPresent();
});
When('Click on left pane menu icon', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorTopPage.clickOnLeftPaneMenuIcon();
});
When('Verify the menu list {string}', async function (this: ICustomWorld, menuListItems: string) {
  await this.PageObject?.obj_MonitorTopPage.verifyLeftPaneMenuList(menuListItems);
});

When(
  'Verify the project parameters {string}',
  async function (this: ICustomWorld, projectTitle: string) {
    await this.PageObject?.obj_MonitorTopPage.verifyProjectParameters_title(projectTitle);
  },
);
When(
  'Verify the recruitment condition title for {string}',
  async function (this: ICustomWorld, projectTitle: string) {
    await this.PageObject?.obj_MonitorTopPage.verifyProjectParameters_recruitment_condition_title(projectTitle);
  },
);
When(
  'Verify the recruitment condition for {string}',
  async function (this: ICustomWorld, projectTitle: string) {
    await this.PageObject?.obj_MonitorTopPage.verifyProjectParameters_recruitment_condition(projectTitle);
  },
);
When(
  'Verify the NGIndustry title for {string}',
  async function (this: ICustomWorld, projectTitle: string) {
    await this.PageObject?.obj_MonitorTopPage.verifyProjectParameters_NGIndustry_title(projectTitle);
  },
);
When(
  'Verify the NGIndustry for {string}',
  async function (this: ICustomWorld, projectTitle: string) {
    await this.PageObject?.obj_MonitorTopPage.verifyProjectParameters_NGIndustry(projectTitle);
  },
);
When(
  'Verify the project title for {string}',
  async function (this: ICustomWorld, projectTitle: string) {
    await this.PageObject?.obj_MonitorTopPage.verifyProjectParameters_title(projectTitle);
  },
);
When(
  'Verify the reward value title for {string}',
  async function (this: ICustomWorld, projectTitle: string) {
    await this.PageObject?.obj_MonitorTopPage.verifyProjectParameters_reward_value_title(projectTitle);
  },
);
When(
  'Verify the interview duration title for {string}',
  async function (this: ICustomWorld, projectTitle: string) {
    await this.PageObject?.obj_MonitorTopPage.verifyProjectParameters_interview_duration_title(projectTitle);
  },
);
When(
  'Verify the title for monitor_count for {string}',
  async function (this: ICustomWorld, projectTitle: string) {
    await this.PageObject?.obj_MonitorTopPage.verifyProjectParameters_monitor_count_title(projectTitle);
  },
);
When(
  'Verify the reward value for {string}',
  async function (this: ICustomWorld, projectTitle: string) {
    await this.PageObject?.obj_MonitorTopPage.verifyProjectParameters_rewardValue(projectTitle);
  },
);
When(
  'Verify the interview_duration for {string}',
  async function (this: ICustomWorld, projectTitle: string) {
    await this.PageObject?.obj_MonitorTopPage.verifyProjectParameters_interview_duration(projectTitle);
  },
);
When(
  'Verify the monitor_count for {string}',
  async function (this: ICustomWorld, projectTitle: string) {
    await this.PageObject?.obj_MonitorTopPage.verifyProjectParameters_monitor_count(projectTitle);
  },
);
When(
  'Verify the project parameters {string} and {string}{string}',
  async function (this: ICustomWorld, projectTitle: string, projectDetails: string, count: string) {
    await this.PageObject?.obj_MonitorTopPage.verifyProjectParameters(
      projectTitle,
      projectDetails,
      count,
    );
  },
);


When('Click on the sorting list box', async function (this: ICustomWorld) {
  await this.PageObject?.obj_MonitorTopPage.clickOnProjectSortingListBox();
});

When(
  'Select the sorting option {string}',
  async function (this: ICustomWorld, sortingOption: string) {
    await this.PageObject?.obj_MonitorTopPage.selectSortingOption(sortingOption);
  },
);

When(
  'Verify the sorting order of the project list {string}',
  async function (this: ICustomWorld, sortingOrder: string) {
    await this.PageObject?.obj_MonitorTopPage.VerifyMonitorTopPageProjectSortingOrder(sortingOrder);
  },
);

