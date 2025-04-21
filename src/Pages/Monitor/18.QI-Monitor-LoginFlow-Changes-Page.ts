import { BasePage } from '../../utils/BasePage';
import { Page } from '@playwright/test';

export default class MonitorLoginflowChanges extends BasePage {
    page: Page;

    loc_Monitor_LoginFlow_terms_Lbl: string;
    loc_Monitor_LoginFlow_terms_CheckBox: string;
    loc_Monitor_LoginFlow_terms_agreeBtn: string;
    loc_Monitor_LoginFlow_confidentiality_Lbl: string;
    loc_Monitor_LoginFlow_inquiry_Btn: string;
    loc_Monitor_inquiry_type_radio_Btn1: string;
    loc_Monitor_inquiry_type_radio_Btn2: string;

    loc_Monitor_inquiry_back_Btn: string;



    constructor(page: Page) {
        super(page);
        this.page = page;
        this.loc_Monitor_LoginFlow_terms_Lbl = '//*[@id="authentication-layout"]/div/div[1][text()="利用規約"]';
        this.loc_Monitor_LoginFlow_terms_CheckBox = '//*[@id="authentication-layout"]/div/div[2]/div[3]/label/div/span/input';
        this.loc_Monitor_LoginFlow_terms_agreeBtn = "//*[@id='authentication-layout']/div/div[2]/div[4]/button[text()='同意して進む']";
        this.loc_Monitor_LoginFlow_confidentiality_Lbl = "//*[@id='authentication-layout']/div/div[1][text()='通信秘密同意書']";
        this.loc_Monitor_LoginFlow_inquiry_Btn = "//*[@id='authentication-layout']/div/div[2]/div[2]/div/section[7]/div[4]/div/div[2]/div[1][text()='問い合わせ窓口']";
        this.loc_Monitor_inquiry_type_radio_Btn1 = "//*[@id='authentication-layout']//div[text()='問い合わせ']";
        this.loc_Monitor_inquiry_type_radio_Btn2 = "//*[@id='//*[@id='authentication-layout']//div[text()='問い合わせ']-layout']//div[text()='通報']";
        this.loc_Monitor_inquiry_back_Btn = "//*[@id='authentication-layout']/div/div[1]/div[2]/div[text()='ホーム']";

    }


    public async verifyTermsPage(user: string) {
        const page = await this.getUserPage(user);
        await this.locatorShouldBePresent(page.locator(this.loc_Monitor_LoginFlow_terms_Lbl));
    }


    public async clickTermsCheckBox(user: string) {
        const page = await this.getUserPage(user);
        await page.locator(this.loc_Monitor_LoginFlow_terms_CheckBox).click();
    }

    public async clickAgreeButton(user: string) {
        const page = await this.getUserPage(user);
        await page.locator(this.loc_Monitor_LoginFlow_terms_agreeBtn).click();
    }

    public async clickInquiryButton(user: string) {
        const page = await this.getUserPage(user);
        await page.locator(this.loc_Monitor_LoginFlow_inquiry_Btn).click();
    }






    public async verifyConfidentialityAgreement(user: string) {
        const page = await this.getUserPage(user);
        await this.locatorShouldBePresent(page.locator(this.loc_Monitor_LoginFlow_confidentiality_Lbl));
    }



    public async clickInquiryTypeRadioBtn(InquiryType: string, user: string) {

        const page = await this.getUserPage(user);
        if (InquiryType == "問い合わせ") {
            await page.locator(this.loc_Monitor_inquiry_type_radio_Btn1).click();

        }
        else if (InquiryType == "通報") {
            await page.locator(this.loc_Monitor_inquiry_type_radio_Btn2).click();

        }
        else {
            console.log("inquiry type not found");
        }
    }

    public async clickBackButton(user: string) {
        const page = await this.getUserPage(user);
        await page.locator(this.loc_Monitor_inquiry_back_Btn).click();
    }







}
