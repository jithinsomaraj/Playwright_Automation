
import { ICustomWorld } from '../../support/custom-world';

import { When } from '@cucumber/cucumber';
import { readFromYamlFilePath } from '../../utils/YamlReader';


When('Click on the sharing button by {string}', async function (this: ICustomWorld, User: string) {
    await this.PageObject?.obj_client_screensharing.clickOnScreenSharingButton(User);
});

When(
    'Select the sharing mode as {string} sharing',
    async function (this: ICustomWorld, Sharingmode: string) {
        await this.PageObject?.obj_client_screensharing.selectSharingMode(Sharingmode);
    },
);

When(
    'Verify that the screen is shared from {string}',
    async function (this: ICustomWorld, user: string) {
        await this.PageObject?.obj_client_screensharing.verifyScreenSharing(user);
    },
);

When(
    'Verify that the {string} name is present',
    async function (this: ICustomWorld, user: string) {
        await this.PageObject?.obj_client_screensharing.VerifyClientUserName(user);
    },
);


When(
    'Verify that the monitor name is present for {string}',
    async function (this: ICustomWorld, user: string) {
        const monitorName = readFromYamlFilePath('CampaignData')['monitorname']
        await this.PageObject?.obj_client_screensharing.VerifyMonitorUserName(monitorName, user);
    },
);
