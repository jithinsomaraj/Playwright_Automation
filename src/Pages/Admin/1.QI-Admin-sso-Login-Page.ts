import { BasePage } from '../../utils/BasePage';

import { config } from '../../support/config';
import { Locator, Page } from '@playwright/test';

//import { parse } from 'csv-parse';
import ScenarioContext from '../../support/ScenarioContext';


export class AdminSsoLogin extends BasePage {

    loc_Admin_sso_Login_UserName_Txt: Locator;
    loc_Admin_sso_Login_Password_Txt: Locator;
    loc_Admin_HomePage_Heading_Label: string;
    loc_Admin_sso_Login_Submit_Btn: Locator;
    loc_Admin_Interview_zero_Btn: Locator;

    loc_Admin_confirmation_Btn: string;
    loc_Admin_InterviewZero_Label: string;




    constructor(page: Page) {
        super(page);

        this.loc_Admin_sso_Login_UserName_Txt = page.locator('//*[@name="userId"]');
        this.loc_Admin_sso_Login_Password_Txt = page.locator('//*[@name="password"]');
        this.loc_Admin_HomePage_Heading_Label = "(//*[text()='全体メニュー'])[4]";
        this.loc_Admin_sso_Login_Submit_Btn = page.locator('//*[@name="login"]');
        this.loc_Admin_Interview_zero_Btn = page.locator('//*[text()="[ Interview Zero 運用サイト ]"]');
        this.loc_Admin_confirmation_Btn = 'modal-onAgree'
        this.loc_Admin_InterviewZero_Label = 'Interview Zero';

    }



    public async launchAdminApplication() {
        await this.page.goto(config.adminBaseUrl);
    }


    public async adminLogin_EnterUserName(username: string) {
        await this.loc_Admin_sso_Login_UserName_Txt.fill(username);
    }

    public async adminLogin_EnterPassword(password: string) {
        await this.loc_Admin_sso_Login_Password_Txt.fill(password);
    }

    public async adminLogin_ClickOnLoginButton() {
        await this.loc_Admin_sso_Login_Submit_Btn.click();
    }

    public async adminSingleLogin(username: string, password: string) {
        await this.adminLogin_EnterUserName(username);
        await this.adminLogin_EnterPassword(password);
        await this.adminLogin_ClickOnLoginButton();
        await this.adminLogin_ClickOnInterviewZeroButton();
        await this.adminLogin_ClickOnLoginAcceptButton()
    }






    public async adminLogin_VerifyTopPageNavigation() {
        //const page3 = ScenarioContext.get('NewTab');
        const title = this.page.locator(this.loc_Admin_HomePage_Heading_Label);
        await this.locatorShouldBePresent(title);
    }



    public async adminLogin_ClickOnInterviewZeroButton() {
        const context = ScenarioContext.get('context1');
        const pagePromise = context.waitForEvent('page');

        await this.loc_Admin_Interview_zero_Btn.click();
        const newTab = await pagePromise;
        await newTab.waitForLoadState('load', { timeout: 90000 });
        ScenarioContext.put('NewTab', newTab);
    }


    public async adminLogin_ClickOnLoginAcceptButton() {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(2)
        const confirmbutton = page3.getByTestId(this.loc_Admin_confirmation_Btn);
        await confirmbutton.click();
    }

    public async adminLogin_VerifyPageTitle() {
        const page3 = ScenarioContext.get('NewTab');
        const title = page3.getByText(this.loc_Admin_InterviewZero_Label);
        await this.locatorShouldBePresent(title)
    }




















}
