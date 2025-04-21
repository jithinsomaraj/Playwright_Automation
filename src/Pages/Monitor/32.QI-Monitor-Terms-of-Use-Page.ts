import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';
import ScenarioContext from '../../support/ScenarioContext';


export default class MonitorTermsOfUse extends BasePage {
    page: Page;
    loc_Monitor_termsOfUse_Btn: Locator;

    loc_Monitor_termsOfUse_Lbl: Locator;
    loc_Monitor_privacyPolicy_Btn: string;
    loc_Monitor_privacyPolicy_Lbl: string;
    loc_Monitor_SecurityPolicy_Lbl: Locator;
    loc_Monitor_SecurityPolicy_Btn: Locator;








    constructor(page: Page) {
        super(page);
        this.page = page;
        this.loc_Monitor_termsOfUse_Btn = this.page.getByText('利用規約');
        this.loc_Monitor_termsOfUse_Lbl = this.page.getByText('Interview Zeroモニタ利用規約');
        this.loc_Monitor_privacyPolicy_Btn = "//div[text()='プライバシーポリシー']";
        this.loc_Monitor_privacyPolicy_Lbl = '//*[text()="株式会社マクロミル　個人情報保護方針"]';
        this.loc_Monitor_SecurityPolicy_Lbl = this.page.locator("//div[text()='情報セキュリティ基本方針']");
        this.loc_Monitor_SecurityPolicy_Btn = this.page.getByText('情報セキュリティポリシー');




    }

    public async clickTermsOfUseButton() {

        await this.loc_Monitor_termsOfUse_Btn.click();
    }

    public async verifyTermsOfServicePage() {
        await this.loc_Monitor_termsOfUse_Lbl.isVisible();

    }




    public async clickPrivacyPolicyButton() {

        const context = ScenarioContext.get('context1');
        const pagePromise = context.waitForEvent('page');
        const loc = await this.page.locator(this.loc_Monitor_privacyPolicy_Btn);
        await loc.click()
        const newTab = await pagePromise;

        await newTab.waitForLoadState('load', { timeout: 90000 });
        ScenarioContext.put('NewTab', newTab);

    }

    public async verifyPrivacyPolicyPage() {


        const page3 = ScenarioContext.get('NewTab');
        this.page = page3
        const locator = this.page.locator(this.loc_Monitor_privacyPolicy_Lbl);
        await this.locatorShouldBePresent(locator);

    }




    public async clickSecurityPolicyButton() {

        await this.loc_Monitor_SecurityPolicy_Btn.click();

    }

    public async verifySecurityPolicyPage() {
        await this.loc_Monitor_SecurityPolicy_Lbl.isVisible();

    }
















}