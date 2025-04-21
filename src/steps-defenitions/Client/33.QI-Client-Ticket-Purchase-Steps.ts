import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When('Navigate to the ticket purchase page', async function (this: ICustomWorld) {
    await this.PageObject?.obj_client_ticket_purchase.navigateToTicketPurchasePage();
});
When('Click on buy ticket  button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_client_ticket_purchase.clickBuyTicketButton();
});
When('Click on accept the terms and conditions button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_client_ticket_purchase.clickTermsAndConditionsButton();
});
When('Click on accept the age condition button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_client_ticket_purchase.clickageConditionsButton();
});

When('Click on accept the disclosure condition button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_client_ticket_purchase.clickdisclosureConditionsButton();
});

When('Verify the subtotal dispayed in the ticket purchase page', async function (this: ICustomWorld) {
    await this.PageObject?.obj_client_ticket_purchase.verifySubtotalInTicketPage();
});
When('Click on Proceed to payment button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_client_ticket_purchase.clickProceedTopaymentButton();
});
When('Select count for Set of 2 tickets', async function (this: ICustomWorld) {
    await this.PageObject?.obj_client_ticket_purchase.selectticketcountfor2set();
});
When('Select count for Set of 20 tickets', async function (this: ICustomWorld) {
    await this.PageObject?.obj_client_ticket_purchase.selectticketcountfor20set();
});