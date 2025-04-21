import { Then } from "@cucumber/cucumber";
import { ICustomWorld } from "../../support/custom-world";





Then('Click on the Chat list in the side menu and verify the page navigation', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminchatlist.clickonChatListMenuLnk();
    await this.PageObject?.obj_adminchatlist.chatlistpageNavigationVerify();
});

Then('Click on OK checkbox', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminchatlist.selectOKcheckbox();
});

Then('Enter the message text as {string}', async function (this: ICustomWorld, MessagetextFromClientOK: string) {
    await this.PageObject?.obj_adminchatlist.enterMessagetext(MessagetextFromClientOK);
});


Then('Enter the Customer name as {string}', async function (this: ICustomWorld, Customername: string) {
    await this.PageObject?.obj_adminchatlist.enterCustomerName(Customername);
});

Then('Enter the Monitor nick name as {string}', async function (this: ICustomWorld, Monitornickname: string) {
    await this.PageObject?.obj_adminchatlist.entermonitornickName(Monitornickname);
});



Then('Enter the campaign as {string}', async function (this: ICustomWorld, CampaignName: string) {
    await this.PageObject?.obj_adminchatlist.enterCampaignName(CampaignName);
});


Then('Click on Search button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminchatlist.search();
});

Then('Verify the result displayed is {string} and {string} and {string} and {string} and {string}', async function (this: ICustomWorld, status: string, Messagetext: string, Sendername: string, CampaignName: string, Receivername: string) {
    await this.PageObject?.obj_adminchatlist.verifychatstatus(status);
    await this.PageObject?.obj_adminchatlist.verifymessagetext(Messagetext);
    await this.PageObject?.obj_adminchatlist.verifysendername(Sendername);
    await this.PageObject?.obj_adminchatlist.verifyreceivername(Receivername);
    await this.PageObject?.obj_adminchatlist.verifycampaignname(CampaignName);
});

Then('Enter the Monitor name as {string}', async function (this: ICustomWorld, Monitornickname: string) {
    await this.PageObject?.obj_adminchatlist.entermonitornickName(Monitornickname);
});

Then('Click on NG checkbox', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminchatlist.selectNGcheckbox();
});

Then('Click on Receive radiobutton', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminchatlist.selectreceiveRadio();
});

Then('Verify the NG chat result displayed is {string} and {string} and {string} and {string} and {string} and {string}', async function (this: ICustomWorld, status: string, Messagetext: string, ClientNGadditionaltext: string, Sendername: string, CampaignName: string, Receivername: string) {
    await this.PageObject?.obj_adminchatlist.verifychatstatus(status);
    await this.PageObject?.obj_adminchatlist.verifyNGmessagetext(Messagetext, ClientNGadditionaltext);
    await this.PageObject?.obj_adminchatlist.verifysendername(Sendername);
    await this.PageObject?.obj_adminchatlist.verifyreceivername(Receivername);
    await this.PageObject?.obj_adminchatlist.verifycampaignname(CampaignName);

});


