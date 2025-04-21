import { Then } from "@cucumber/cucumber";
import { ICustomWorld } from "../../support/custom-world";



Then('Click on the customer id', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.clickOnCustomerID();
});

Then('Verify that the Ticket granting page is displayed', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.VerifypageTitle();
});

Then('Verify the customer ID', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.VerifyCustomerID();
});

Then('Verify the customer Details', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.VerifyCustomerdetails();
});



Then('Click on the status edit button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.clickOnstatusEditbutton();
});

Then('Select the inactive status from dropdown', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.clickOnstatusdropdown();
    await this.PageObject?.obj_admin_ticketGranting.Selectinactivestatus();
});

Then('Choose the active status from dropdown', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.clickOnstatusdropdown();
    await this.PageObject?.obj_admin_ticketGranting.Selectactivestatus();
});

Then('Click on submit button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.Statussubmit();
});

Then('verify the invalid status change', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.VerifyinvalidStatus();
});

Then('verify the valid  status change', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.VerifyvalidStatus();
});


Then('Click on ticket grant button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.clickOnTicketGrantButton();
});

Then('Enter the ticket count to be granted', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.enterTickets();
});

Then('Enter the expiry date of the ticket', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.enterTicketExpiry();
});

Then('Enter the add message text', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.enterAddTicketaddmessage();
});

Then('Enter the remove message text', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.enterRemoveTicketaddmessage();
});

Then('Click on submit button to grant the tickets', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.AddTicketSubmit();
});


Then('Click On agree button in the add ticket confirmation button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.clickOnAgree();
});


Then('Click on ticket delete button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.clickTicketRemove();
});


Then('Enter the ticket count to be removed', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.enterinvalidTickets();
});

Then('Click on submit button to remove the tickets', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.RemoveTicketSubmit();
});

Then('Click On agree button in the remove ticket confirmation button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.clickOnAgree();
});


Then('Verify that the ticket has been credited', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.VerifyAddedTickets();
});


Then('Verify that the ticket has been removed', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.VerifyRemovedTickets();
});

Then('Verify that the campaign is listed', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.findCampaign();
});

Then('Click on ticket consumption history tab', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.clickConsumptionhistory();
});



Then('Verify whther the ticket deleted is listed in the ticket consumption history', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.findticketconsumptionentry();
});


Then('Click on Inquiry history tab', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_ticketGranting.clickInquiry();
});


Then('Verify whether the inquiry is received and its details of {string}', async function (this: ICustomWorld, type: string) {
    await this.PageObject?.obj_admin_ticketGranting.findinquiryentry(type);
});






