import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When(
  'Verify the new notification mark on the top of the bell icon',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_Client_TopPageNotification.verifyClientTopPageBellIconNotification();
  },
);

When(
  'Verify the notification for {string}',
  async function (this: ICustomWorld, notification: string) {
    await this.PageObject?.obj_Client_TopPageNotification.verifyNewMessageNotification(
      notification,
    );
  },
);

When(
  'Click on the notification {string}',
  async function (this: ICustomWorld, notification: string) {
    await this.PageObject?.obj_Client_TopPageNotification.clickOnTheNewMessageNotification(
      notification,
    );
  },
);

When(
  'Verify the campaign name of the new notification {string}',
  async function (this: ICustomWorld, campaignName: string) {
    await this.PageObject?.obj_Client_TopPageNotification.verifyCampaignNameOfNewMessageNotification(
      campaignName,
    );
  },
);

When(
  'Verify the monitor name from todays interview details',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_Client_TopPageNotification.verifyMonitorNameTodaysInterviewDetails(

    );
  },
);

When(
  'Click on the todays interview for monitor {string}',
  async function (this: ICustomWorld, interviewDetails: string) {
    await this.PageObject?.obj_Client_TopPageNotification.clickOnTheTodaysInterviewInterviewDetails(
      interviewDetails,
    );
  },
);
When(
  'Verify the campaign title from todays interview details',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_Client_TopPageNotification.verifyCampaignTitleFromTodaysInterviewDetails(

    );
  },
);

When(
  'Verify the scheduled time from todays interview details',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_Client_TopPageNotification.verifySceduledTimeFromTodaysInterviewDetails(

    );
  },
);

When('Click on the see all notification link', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_TopPageNotification.clickOnSeeAllNotificationLink();
});

When('Verify the page navigation to the notice page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_TopPageNotification.verifyThePageNavigationToNoticePage();
});

When('Navigate to the client top page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_TopPageNotification.navigateToTheClientTopPage();
});

When('Verify the page navigation to the individual chat tab', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_TopPageNotification.verifyThePageNavigationToIndividualChatTab();
});

When('Verify the page navigation to the schedule offering popup', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_TopPageNotification.verifyThePageNavigationToScheduleOfferingPopup();
});

When(
  'Verify the page navigation to the campaign details page',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_Client_TopPageNotification.verifyThePageNavigationToCampaignDetailsPage();
  },
);

When('Verify the notice listed and click {string}', async function (this: ICustomWorld, title: string) {
  await this.PageObject?.obj_Client_TopPageNotification.findandclicknotice(title);
});


When('Verify the notice details {string} and {string}', async function (this: ICustomWorld, title: string, subject: string) {
  await this.PageObject?.obj_Client_TopPageNotification.verifynoticedetails(title, subject);
});


