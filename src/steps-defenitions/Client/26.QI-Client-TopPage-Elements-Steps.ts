import { ICustomWorld } from '../../support/custom-world';
import {When } from '@cucumber/cucumber';


When('Click on the menu icon', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_TopPageElements.clickOnTheMenuIcon();
});

When('Click on the menu item {string}', async function (this: ICustomWorld ,menuItem :string) {
  await this.PageObject?.obj_Client_TopPageElements.clickOnMenuItems(menuItem);
});

When('Verify the menu list disappeared', async function (this: ICustomWorld ) {
  await this.PageObject?.obj_Client_TopPageElements.verifyTheMenulistIsHidden();
});

When('Click on the ticket icon', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_TopPageElements.clickOnTheTicketIcon();
});

When('Verify the page navigation to ticket page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_TopPageElements.verifyPageNavigationToTicketPage();
});

When('Verify the page navigation to interview video list page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_TopPageElements.verifyPageNavigationToInterviewVideoListPage();
});


When('Verify the page navigation to inquiry page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_TopPageElements.verifyPageNavigationToInquiryPage();
});

When('Verify the page navigation to campaign list page', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_TopPageElements.verifyPageNavigationToCampaignListPage();
});