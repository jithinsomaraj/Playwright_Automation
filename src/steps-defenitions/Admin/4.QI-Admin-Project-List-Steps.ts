import { Then } from "@cucumber/cucumber";
import { ICustomWorld } from "../../support/custom-world";



Then('Click on the Project list in the side menu', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_projectlist.clickProjectListSideMenu();
});

Then('Verify the Page heading in the Project list page', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_projectlist.VerifypageTitle();
});



Then('Enter campaign name in the search field as {string}', async function (this: ICustomWorld, campaigname: string) {
    await this.PageObject?.obj_admin_projectlist.enterCampaignName(campaigname);
});

Then('Enter the implementation duration date range', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_projectlist.enterImplementationsearchDates();
});

Then('Enter the campaign interview duration', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_projectlist.enterslotduration();
    await this.PageObject?.obj_admin_projectlist.chooseslotvalue();

});


Then('Click on the search button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_projectlist.clicksearch();

});


Then('Verify the campaign name', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_projectlist.verifycampaignname();
});




