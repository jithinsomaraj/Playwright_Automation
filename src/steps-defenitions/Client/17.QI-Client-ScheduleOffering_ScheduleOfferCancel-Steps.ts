import { ICustomWorld } from '../../support/custom-world';
import {When } from '@cucumber/cucumber';

When('Click on the schedule offering cancel button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_ScheduleOffercanCellation.clickOnTheScheduleOfferCancelButton( );
});

When('Verify all the schedule date has disabled in schedule offer tab', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_ScheduleOffercanCellation.verifyAllScheduleOfferDateHasDisabledInScheduleOfferTab( );
});

