import { BasePage } from '../../utils/BasePage';
import { Page } from '@playwright/test';
import { readFromYamlFilePath } from '../../utils/YamlReader';

export default class MonitorAgoraScreenSharing extends BasePage {
    page: Page;
    readonly loc_Monitor_AgoraMeetingRoom_Screen_Share_Lbl: string;
    readonly loc_Monitor_AgoraMeetingRoom_Interviewer_Lbl: string;





    constructor(page: Page) {
        super(page);
        this.page = page;
        this.loc_Monitor_AgoraMeetingRoom_Screen_Share_Lbl = "//*[contains(text(),'が画面を共有中')]";
        this.loc_Monitor_AgoraMeetingRoom_Interviewer_Lbl = "//*[contains(text(),'interviewer_name')]";
    }

    public async verifyScreenSharing(user: string) {
        console.log(user);
        const page = await this.getUserPage(user);
        await page.bringToFront();
        await this.waitForSecond(5);
        const locator = page.locator(this.loc_Monitor_AgoraMeetingRoom_Screen_Share_Lbl);
        await this.locatorShouldBePresent(locator);
    }

    public async verifyInterviewerName(user: string) {
        const interviewerName = readFromYamlFilePath('Clientdetails')['clientUserName']
        console.log(user);
        const page = await this.getUserPage(user);
        await page.bringToFront();
        const locator = page.locator(this.loc_Monitor_AgoraMeetingRoom_Interviewer_Lbl.replace('interviewer_name', interviewerName));
        await this.locatorShouldBePresent(locator);

    }

}




