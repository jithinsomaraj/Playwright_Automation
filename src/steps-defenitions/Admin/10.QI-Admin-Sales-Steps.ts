import { Then } from "@cucumber/cucumber";
import { ICustomWorld } from "../../support/custom-world";





Then('Click on the sales management link in the side menu and verify the page navigation', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminsales.clickonSalesLnk();
    await this.PageObject?.obj_adminsales.SalespageNavigationVerify();
});



Then('Click on the {string} tab', async function (this: ICustomWorld, tab: string) {
    await this.PageObject?.obj_adminsales.clickonTab(tab);
});

Then('Enter the Deposit date in the search field', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminsales.purchasedatefield();
});

Then('Enter the Purchase date in the search field', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminsales.paymentdatefield();
});

Then('Select payment method as {string}', async function (this: ICustomWorld, paymenttype: string) {
    await this.PageObject?.obj_adminsales.selectpaymenttype(paymenttype);
});



Then('Click on data search button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminsales.Search();
});


Then('Verify that deposit result is displayed after search', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminsales.depositresultdisplay();
});


Then('Click on csv download button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminsales.adminPurchase_ClickCSVDownloadButton();
});


Then('Verify the number of data in csv with the result for {string}', async function (this: ICustomWorld, csvtype: string) {
    await this.PageObject?.obj_adminsales.adminPurchase_verifyCSVData(csvtype);
});


Then('Enter the Consumption date in the search field', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminsales.salesdate();
});


Then('Verify that sales result is displayed after search', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminsales.salesresultdisplay();
});

Then('Verify the number of data in csv with the result for ticket', async function (this: ICustomWorld) {
    await this.PageObject?.obj_adminsales.adminTicket_verifyCSVData();
});

