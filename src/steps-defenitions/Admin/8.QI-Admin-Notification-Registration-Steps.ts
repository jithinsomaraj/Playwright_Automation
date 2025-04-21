import { Then } from "@cucumber/cucumber";
import { ICustomWorld } from "../../support/custom-world";





Then('Click on the Notification managment link in the side menu and verify the page navigation', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminnoticelist.clickonNoticeListMenuLnk();
    await this.PageObject?.obj_adminnoticelist.noticelistpageNavigationVerify();
});



Then('Click on the Add notice button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminnoticelist.clickonAddnotice();
});

Then('Click on the monitor checkbox', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminnoticelist.clickonMonitorchckbox();
});


Then('Click on the client checkbox', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminnoticelist.clickonClientchckbox();
});

Then('Enter the subject for {string}', async function (this: ICustomWorld, subject: string) {
    await this.PageObject?.obj_adminnoticelist.enterSubject(subject);
});


Then('Enter the Notice contents {string}', async function (this: ICustomWorld, content: string) {
    await this.PageObject?.obj_adminnoticelist.enterContent(content);
});

Then('Click on Publish button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminnoticelist.clickonpublishbtn();
});

Then('Click on confirm button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminnoticelist.clickonpublishconfirmbtn();
});


Then('Click on Draft button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminnoticelist.clickondraftbtn();
})



Then('CLick on the draft campaign {string}', async function (this: ICustomWorld, drafttitle: string) {
    await this.PageObject?.obj_adminnoticelist.findandclick(drafttitle);
})



Then('CLick on the delete button of the notice in list {string}', async function (this: ICustomWorld, drafttitle: string) {
    await this.PageObject?.obj_adminnoticelist.findandclickdelete(drafttitle);
})


Then('CLick on the delete button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminnoticelist.clickondeletebtn();
})

Then('Verify that deleted draft message not listed {string}', async function (this: ICustomWorld, drafttitle: string) {
    await this.PageObject?.obj_adminnoticelist.finddeletednotice(drafttitle);
})



Then('Verify the notice is listed and its contents with status {string} and {string} and {string}', async function (this: ICustomWorld, status: string, titletag: string, subjecttag: string) {
    await this.PageObject?.obj_adminnoticelist.findnotice(status, titletag, subjecttag);
});
