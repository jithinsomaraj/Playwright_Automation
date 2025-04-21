import { Then } from "@cucumber/cucumber";
import { ICustomWorld } from "../../support/custom-world";





Then('Click on the user management link in the side menu and verify the page navigation', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminusermanagement.clickonUsermanagementMenuLnk();
    await this.PageObject?.obj_adminusermanagement.UsermanagementpageNavigationVerify();
});

Then('Enter the login id for {string}', async function (this: ICustomWorld, loginid: string) {
    await this.PageObject?.obj_adminusermanagement.enterloginid(loginid);

});

Then('Enter the name as {string}', async function (this: ICustomWorld, name: string) {
    await this.PageObject?.obj_adminusermanagement.entersearchname(name);

});

Then('Enter the email as {string}', async function (this: ICustomWorld, email: string) {
    await this.PageObject?.obj_adminusermanagement.entersearchemail(email);

});


Then('Select the authority as {string}', async function (this: ICustomWorld, authority: string) {
    await this.PageObject?.obj_adminusermanagement.clickonAuthority(authority);

});



Then('Click on search button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminusermanagement.clickonsearchbuuton();
});

Then('Verify the result dispalyed is {string} and {string} and {string} and {string}', async function (this: ICustomWorld, loginid: string, name: string, email: string, authority: string) {
    await this.PageObject?.obj_adminusermanagement.verifysearchresults(loginid, name, email, authority);
});


Then('Click on edit button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminusermanagement.clickoneditbuuton();
});

Then('Select the authority radiobutton as {string}', async function (this: ICustomWorld, Authority: string) {
    await this.PageObject?.obj_adminusermanagement.editauthority(Authority);
});


Then('Click on user edit submit button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminusermanagement.clickoneditsubmittbutton();
});
