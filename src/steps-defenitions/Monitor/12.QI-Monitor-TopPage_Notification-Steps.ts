import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When('Verify the todays interview popup', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_TopPageNotification.verifyMonitorTopPageTodaysInterviewPopup();
});

When(
  'Verify the todays interview popup interview name {string}',
  async function (this: ICustomWorld, interviewName: string) {
    await this.PageObject?.obj_Monitor_TopPageNotification.verifyMonitorTopPageTodaysInterviewPopupInterviewName(
      interviewName,
    );
  },
);

When(
  'Click on the todays interview popup with interview name {string}',
  async function (this: ICustomWorld, interviewName: string) {
    await this.PageObject?.obj_Monitor_TopPageNotification.clickOnTheMonitorTopPageTodaysInterviewPopup(
      interviewName,
    );
  },
);

When(
  'Click on the interview join button from campaign details page',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_Monitor_TopPageNotification.clickOnInterviewJoinButton();
  },
);

When(
  'Click on the interview join button from campaign details page for {string}',
  async function (this: ICustomWorld, userName: string) {
    await this.PageObject?.obj_Monitor_TopPageNotification.clickOnInterviewJoinButtonAgora(userName);
  },
);


When(
  'Verify the campaign name {string} is displayed for {string}',
  async function (this: ICustomWorld, title: string, userName: string) {
    await this.PageObject?.obj_Monitor_TopPageNotification.verifyCampaignTitle(title, userName);
  },
);








When(
  'Verify the popup interview schedule {string}',
  async function (this: ICustomWorld, interviewSchedule: string) {
    await this.PageObject?.obj_Monitor_TopPageNotification.verifyMonitorTopPageTodaysInterviewPopupInterviewSchedule(
      interviewSchedule,
    );
  },
);

When('Click on the todo list link', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_TopPageNotification.clickOnTheMonitorTopPageToDoList();
});


When('Verify that the Monitor notice is listed {string} for {string}', async function (this: ICustomWorld, title: string, username: string) {
  await this.PageObject?.obj_Monitor_TopPageNotification.findnotification(title, username);
});

When('Verify the details in the notice details page is {string} and {string} for {string}', async function (this: ICustomWorld, Noticetitle: string, Noticesubject: string, username: string) {
  await this.PageObject?.obj_Monitor_TopPageNotification.verifynoticedetails(Noticetitle, Noticesubject, username);
});





When('Click on the latest news link', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_TopPageNotification.clickOnTheMonitorTopPageLatestNews();
});

When('Click on the latest news link {string}', async function (this: ICustomWorld, monitor: string) {
  await this.PageObject?.obj_Monitor_TopPageNotification.clickOnTheMonitorTopPageLatestNewsforagora(monitor);
});


When(
  'Verify the page navigation by clicking on the notification',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_Monitor_TopPageNotification.verifyThePageNavigationToNotificationPage();
  },
);

When('Navigate to the monitor top page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_TopPageNotification.monitorTopPageNavigation();
});

When('Verify the page navigation to do list page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_TopPageNotification.verifyToDoListPageNavigation();
});

When('Verify the page navigation to latest news page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_TopPageNotification.verifyPageNavigationToLatestNews();
});
When('Close the todays interview popup', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_TopPageNotification.clickOnTheCloseButtonOfTodaysInterviewPopup();
});

When(
  'Verify the todo list notification {string}',
  async function (this: ICustomWorld, notification: string) {
    await this.PageObject?.obj_Monitor_TopPageNotification.verifyToDoListNotification(notification);
  },
);

When(
  'Verify latest new notification {string}',
  async function (this: ICustomWorld, notification: string) {
    await this.PageObject?.obj_Monitor_TopPageNotification.verifyLatestNewsNotification(
      notification,
    );
  },
);

When('Navigate to the notification list page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_TopPageNotification.navigateToTheNotificationListPage();
});

When(
  'Click on the todo list notification {string}',
  async function (this: ICustomWorld, notification: string) {
    await this.PageObject?.obj_Monitor_TopPageNotification.clickOnTheToDoListNotification(
      notification,
    );
  },
);
When('Click on the news {string}', async function (this: ICustomWorld, notification: string) {
  await this.PageObject?.obj_Monitor_TopPageNotification.clickOnTheNews(notification);
});
When(
  'Click on the latest news notification {string}',
  async function (this: ICustomWorld, notification: string) {
    await this.PageObject?.obj_Monitor_TopPageNotification.clickOnTheLatestNewstNotification(
      notification,
    );
  },
);

When('Verify the page navigation to campaign details page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_TopPageNotification.verifyPageNavigationToCampaignDetailsPage();
});

When('Verify the page navigation to the chat page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_TopPageNotification.verifyPageNavigationToMonitorChatTab();
});

When('Click on the latest news notification tab', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_TopPageNotification.clickOnTheLatestNewsNotificationTab();
});
When(
  'Verify the company name is displayed {string}',
  async function (this: ICustomWorld, companyName: string) {
    await this.PageObject?.obj_Monitor_TopPageNotification.verifyTheCompanyNameDisplayedInCampaignDetailsPage(
      companyName,
    );
  },
);
When(
  'Verify the campaign schedule date {string} and time {string}',
  async function (this: ICustomWorld, scheduleDate: string, scheduleTime: string) {
    await this.PageObject?.obj_Monitor_TopPageNotification.verifyTheCampaignScheduleDateIsDisplayed(
      scheduleDate,
      scheduleTime,
    );
  },
);


When(
  'Verify the company name is displayed for {string}',
  async function (this: ICustomWorld, username: string) {
    await this.PageObject?.obj_Monitor_TopPageNotification.verifyTheCompanyNameDisplayedInCampaignDetailsPageAgora(username);
  },
);

When(
  'Verify the campaign schedule date {string} is displayed for {string}',
  async function (this: ICustomWorld, date: string, username: string) {
    await this.PageObject?.obj_Monitor_TopPageNotification.verifyTheCampaignScheduleDateIsDisplayed2(date, username);
  },
);
When(
  'Verify the campaign schedule date {string} displayed for {string}',
  async function (this: ICustomWorld, date: string, username: string) {
    await this.PageObject?.obj_Monitor_TopPageNotification.verifyTheCampaignScheduleDateIsDisplayed3(date, username);
  },
);
When(
  'Verify the campaign schedule time {string} is displayed for {string}',
  async function (this: ICustomWorld, time: string, username: string) {
    await this.PageObject?.obj_Monitor_TopPageNotification.verifyTheCampaignScheduleTimeIsDisplayed(time, username);
  },
);

When(
  'Click on the enter interview room button for {string}',
  async function (this: ICustomWorld, userName: string) {
    await this.PageObject?.obj_Monitor_TopPageNotification.clickOnEnterInterviewRoomButtonAgora(userName);
  },
);

