import { BasePage } from '../../utils/BasePage';
import { Page } from '@playwright/test';


export default class ClientLoginflow extends BasePage {
    page: Page;
    loc_Client_LoginFlow_Lbl: string;
    loc_Client_LoginFlow_Agree_Btn: string
    loc_Client_LoginFlow_confidentiality_Lbl: string
    loc_Client_Inquiry_Btn: string




    constructor(page: Page) {
        super(page);
        this.page = page;
        this.loc_Client_LoginFlow_Lbl = '//*[@id="alert-dialog-title"]/div[text()="Interview Zero法人会員利用規約"]';

        this.loc_Client_LoginFlow_Agree_Btn = '//*[@id="confirmation-agreeButton"]';

        this.loc_Client_LoginFlow_confidentiality_Lbl = "//*[@id='alert-dialog-title']/div[text()='通信秘密同意書']";
        this.loc_Client_Inquiry_Btn = "//div/div[2]/div[1][text()='問い合わせ窓口']"


    }

    public async verifyTerms() {
        const locator = this.page.locator(this.loc_Client_LoginFlow_Lbl);
        await this.locatorShouldBePresent(locator);
    }

    public async clickAgreeButton() {
        const locator = this.page.locator(this.loc_Client_LoginFlow_Agree_Btn);
        await locator.click();
    }


    public async verifyConfidentialityAgreement() {
        const locator = this.page.locator(this.loc_Client_LoginFlow_confidentiality_Lbl);
        await this.locatorShouldBePresent(locator);
    }

    public async clickInquiryButton() {
        const locator = this.page.locator(this.loc_Client_Inquiry_Btn);
        await locator.click();
    }







}









