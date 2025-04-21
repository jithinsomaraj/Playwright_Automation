import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';
import ScenarioContext from '../../support/ScenarioContext';


export default class ClientTermsOfUse extends BasePage {
    page: Page;
    loc_Client_termsOfUse_Btn: Locator;

    loc_Client_termsOfUse_Lbl: Locator;
    loc_Client_privacyPolicy_Btn: Locator;
    loc_Client_privacyPolicy_Lbl: Locator
    loc_Client_SecurityPolicy_Lbl: Locator;
    loc_Client_SecurityPolicy_Btn: Locator;
    loc_Client_SecuritySheet_Lbl: Locator;
    loc_Client_SecuritySheet_Btn: Locator;
    loc_Client_privacyPolicy_Lnk: Locator;







    constructor(page: Page) {
        super(page);
        this.page = page;


        this.loc_Client_termsOfUse_Btn = this.page.getByText('利用規約')
        this.loc_Client_termsOfUse_Lbl = this.page.getByText('Interview Zero法人会員利用規約');
        this.loc_Client_privacyPolicy_Btn = this.page.getByText('プライバシーポリシー');
        this.loc_Client_privacyPolicy_Lnk = this.page.getByTestId('back-button');
        this.loc_Client_privacyPolicy_Lbl = this.page.getByText('1. 適切な個人情報の取得、利用、提供について');
        this.loc_Client_SecurityPolicy_Lbl = this.page.getByText('情報セキュリティポリシー');
        this.loc_Client_SecurityPolicy_Btn = this.page.getByText('情報セキュリティポリシー');
        this.loc_Client_SecuritySheet_Lbl = this.page.getByText('Interview Zeroセキュリティチェックシート');
        this.loc_Client_SecuritySheet_Btn = this.page.getByText('セキュリティチェックシート');





    }

    public async clickTermsOfUseButton() {

        await this.loc_Client_termsOfUse_Btn.click();

    }

    public async verifyTermsOfServicePage() {

        await this.loc_Client_termsOfUse_Lbl.isVisible();

    }




    public async clickPrivacyPolicyButton() {

        await this.loc_Client_privacyPolicy_Btn.click();
    }
    public async clickPrivacyPolicyLink() {




        const context = ScenarioContext.get('context1');
        const pagePromise = context.waitForEvent('page');

        await this.loc_Client_privacyPolicy_Lnk.click();

        const newTab = await pagePromise;
        await newTab.waitForLoadState('load', { timeout: 90000 });
        ScenarioContext.put('NewTab', newTab);



    }




    public async verifyPrivacyPolicyPage() {


        const page3 = ScenarioContext.get('NewTab');
        this.page = page3

        await this.loc_Client_privacyPolicy_Lbl.isVisible();

    }




    public async clickSecurityPolicyButton() {

        await this.loc_Client_SecurityPolicy_Btn.click();
    }

    public async verifySecurityPolicyPage() {

        await this.loc_Client_SecurityPolicy_Lbl.isVisible();
    }



    public async clickSecuritySheetButton() {

        await this.loc_Client_SecuritySheet_Btn.click();
    }

    public async verifySecuritySheetPage() {
        this.waitForSecond(5);
        await this.loc_Client_SecuritySheet_Lbl.isVisible();
    }













}