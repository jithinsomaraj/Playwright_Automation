/* eslint-disable no-console */
import ScenarioContext from '../../support/ScenarioContext';
import { BasePage } from '../../utils/BasePage';
import { Page } from '@playwright/test';
import { config } from '../../support/config';
import { readFromYamlFilePath } from '../../utils/YamlReader';

export default class ClientScreenSharing extends BasePage {
    basePath_batfile_chrome_entirescreen_sharing_popup = "/Fixtures/Chrome-entirescreen-sharing.bat"

    basePath_shell_script_entirescreen_sharing = "/Fixtures/Chrome-entirescreen-sharing.sh"

    basePath_shell_script_window_sharing = '/Fixtures/Chrome-window-sharing.sh';

    basePath_batfile_chrome_window_sharing_popup = '/Fixtures/Chrome-window-sharing.bat';


    basePath_shell_script_tab_sharing = '/Fixtures/Chrome-tab-sharing.sh';

    basePath_batfile_chrome_tab_sharing_popup = '/Fixtures/Chrome-tab-sharing.bat';

    page: Page;
    loc_Client_Screen_Share_Btn: string;
    loc_Client_Screen_Share_Lbl: string;
    loc_Client_Screen_Share_UserName: string;
    loc_Client_Screen_Share_Monitor_UserName: string;







    constructor(page: Page) {
        super(page);
        this.page = page;
        this.loc_Client_Screen_Share_Btn = "//*[@id='shareControl']";
        this.loc_Client_Screen_Share_Lbl = "//*[text()='が画面を共有中']";
        this.loc_Client_Screen_Share_UserName = "//*[@id='interviewername']/div[2]/div[text()='username']"
        this.loc_Client_Screen_Share_Monitor_UserName = "//*[@id='othersname']/div[2][text()='M_userName']"
    }


    public async clickOnScreenSharingButton(user: string) {
        console.log(user);

        const page3 = ScenarioContext.get('NewTab');
        await page3.bringToFront();
        const locator = page3.locator(this.loc_Client_Screen_Share_Btn);
        await locator.click();
        this.waitForSecond(2);
        const currentFolder = __dirname.toString();;
        const newpath = currentFolder.replace("\\src\\Pages\\Client", "").replaceAll("\\", "/").trim();
        const fullFilePath_chrome_entirescreen = newpath + this.basePath_batfile_chrome_entirescreen_sharing_popup;
        await this.batFileExecution(fullFilePath_chrome_entirescreen);
    }

    public async selectSharingMode(SharingMode: string) {
        this.waitForSecond(2);
        const currentFolder = __dirname.toString();;
        const newpath = currentFolder.replace("\\src\\Pages\\Client", "").replaceAll("\\", "/").trim();
        const fullFilePath_chrome_entirescreen = newpath + this.basePath_batfile_chrome_entirescreen_sharing_popup;
        const fullFilePath_shell_script_entirescreen_sharing = newpath + this.basePath_shell_script_entirescreen_sharing;
        const fullFilePath_basePath_shell_script_window_sharing = newpath + this.basePath_shell_script_window_sharing;
        const fullFilePath_basePath_batfile_chrome_window_sharing_popup = newpath + this.basePath_batfile_chrome_window_sharing_popup;
        const fullFilePath_basePath_shell_script_tab_sharing = newpath + this.basePath_shell_script_tab_sharing;
        const fullFilePath_basePath_batfile_chrome_tab_sharing_popup = newpath + this.basePath_batfile_chrome_tab_sharing_popup;



        if (SharingMode.match('EntireScreen')) {
            if (config.serverOs.match('Linux')) {
                await this.batFileExecution(fullFilePath_shell_script_entirescreen_sharing);
            } else if (config.serverOs.match('Windows')) {
                console.log('Windows Entire Screen Sharing');
                await this.batFileExecution(fullFilePath_chrome_entirescreen);
            }
        } else if (SharingMode.match('Window')) {
            if (config.serverOs.match('Linux')) {
                await this.batFileExecution(fullFilePath_basePath_shell_script_window_sharing);
            } else if (config.serverOs.match('Windows')) {
                await this.batFileExecution(fullFilePath_basePath_batfile_chrome_window_sharing_popup);
            }
        } else if (SharingMode.match('Tab')) {
            if (config.serverOs.match('Windows')) {
                await this.batFileExecution(fullFilePath_basePath_batfile_chrome_tab_sharing_popup);
            } else if (config.serverOs.match('Linux')) {
                await this.batFileExecution(fullFilePath_basePath_shell_script_tab_sharing);
            }
        }

        this.waitForSecond(3);
    }


    public async verifyScreenSharing(user: string) {
        console.log(user + "screensharing ----->");
        await this.waitForSecond(5);
        const page3 = ScenarioContext.get('NewTab');
        await page3.bringToFront();
        const locator = page3.locator(this.loc_Client_Screen_Share_Lbl);
        await this.locatorShouldBePresent(locator);
    }


    public async VerifyClientUserName(user: string) {
        {
            console.log(user);

            const page3 = ScenarioContext.get('NewTab');
            const userName = readFromYamlFilePath('Clientdetails')['clientUserName']
            const locator = page3.locator(this.loc_Client_Screen_Share_UserName.replace('username', userName));
            await this.locatorShouldBePresent(locator);
        }
    }

    public async VerifyMonitorUserName(userName: string, user: string) {
        {
            console.log(user);

            const page3 = ScenarioContext.get('NewTab');
            const locator = page3.locator(this.loc_Client_Screen_Share_Monitor_UserName.replace('M_userName', userName));
            console.log(locator);
            await this.locatorShouldBePresent(locator);
        }
    }













}