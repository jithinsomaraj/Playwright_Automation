import { Then } from "@cucumber/cucumber";
import { ICustomWorld } from "../../support/custom-world";



Then('Click on the Black list in the side menu', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_blacklist.clickBlackListSideMenu();
});

Then('Verify the Page heading in the Black list page', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_blacklist.VerifypageTitle();
});

Then('Select the textfile', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_blacklist.selectfile();
});

Then('Click on confirmbutton', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_blacklist.confirmfile();
});

Then('Click on confirm uploaded button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_blacklist.confirmfileuploaded();
});


Then('Verify the file uploaded', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_blacklist.Verifyfile();
});






