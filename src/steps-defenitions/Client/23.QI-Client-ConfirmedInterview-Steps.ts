import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When('Click on the confirmed monitor list tab', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_InterviewConfirmTab.clickOnTheConfirmedMonitorListTab();
});

When(
  'Verify the nick name {string} of the monitor in confirmed monitor list',
  async function (this: ICustomWorld, NickName: string) {
    await this.PageObject?.obj_Client_InterviewConfirmTab.verifyTheNickNameOfTheMonitorInConfirmedMonitorsList(
      NickName,
    );
  },
);

When(
  'Verify the monitor status in confirmed monitor list {string}',
  async function (this: ICustomWorld, NickName: string) {
    await this.PageObject?.obj_Client_InterviewConfirmTab.verifyTheMonitorStatusInTheConfirmedMonitorList(
      NickName,
    );
  },
);

When(
  'Verify the schedule date with time {string} of the monitor {string} in confirmed monitor list',
  async function (this: ICustomWorld, Time: string, nickName: string) {
    const additionOfDay = 3;
    await this.PageObject?.obj_Client_InterviewConfirmTab.verifyTheDateAndTimeInTheConfirmedMonitorList(
      nickName,
      additionOfDay,
      Time,
    );
  },
);

When(
  'Click on the button to copy the meeting details from confirmed monitor list {string}',
  async function (this: ICustomWorld, nickName: string) {
    await this.PageObject?.obj_Client_InterviewConfirmTab.copyTheMeetingDetailsFromConfirmedMonitorListPage(
      nickName,
    );
  },
);

When(
  'Verify the successful message for the copy the meeting details',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_Client_InterviewConfirmTab.verifyTheLinkCopiedSuccessMessage();
  },
);

When('Verify the copied text coniains the meeting link', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_InterviewConfirmTab.verifyTheLinkIsPresentInTheCopiedLink();
});

When('Click on the meeting joining button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_InterviewConfirmTab.clickOnTheMeetingJoiningButton();
});

When('Verify the navigation to the meeting joining page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_InterviewConfirmTab.pageNavigationToMeetingJoiningPage();
});
