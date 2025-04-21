
//import ScenarioContext from '../../support/ScenarioContext';
//import { config } from '../../support/config';
import { ICustomWorld } from '../../support/custom-world';
//import { toInteger } from 'lodash';
import { When } from '@cucumber/cucumber';




When('Click on Point output tab', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_point_export.adminPointOutput_ClickPointOutputTab();
});


When('Verify the Point output page', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_point_export.adminPointOutput_VerifyPointOutputPage();
});


When('Input project title as {string}', async function (this: ICustomWorld, title: string) {
    await this.PageObject?.obj_admin_point_export.adminPointOutput_inputProjectTitle(title);
});

When('Clear the filter date range', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_point_export.adminPointOutput_cleardaterange2();
});

When('Click filter submit button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_point_export.adminPointOutput_ClickFilterSubmitButton();
});


When('Click CSV download button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_point_export.adminPointOutput_ClickCSVDownloadButton();
});


When('Verify the downloaded CSV data', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admin_point_export.adminPointOutput_verifyCSVData();
});










