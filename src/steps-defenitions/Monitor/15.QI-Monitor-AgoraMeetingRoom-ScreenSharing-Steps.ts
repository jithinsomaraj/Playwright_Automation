import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';



When(
    'Verify that the screen is shared to {string}',
    async function (this: ICustomWorld, user: string) {
        await this.PageObject?.obj_monitor_screensharing.verifyScreenSharing(user);
    },
);


When('Verify that the interviewer name is present in {string}',
    async function (this: ICustomWorld, user: string) {
        await this.PageObject?.obj_monitor_screensharing.verifyInterviewerName(user);
    },
);

