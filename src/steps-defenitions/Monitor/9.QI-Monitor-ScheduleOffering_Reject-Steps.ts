import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When('Select all the dates are NG option', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_RejectScheduleOffer.selectAllOfferingAreNG();
});

When('Verify all the schedule date selecteion got disabled', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Monitor_RejectScheduleOffer.verifyAllDateSelectionHasDisabled();
});
