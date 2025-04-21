import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';

export default class MonitorInquiry extends BasePage {
    page: Page;
    readonly loc_Monitor_inquiry_tab_Btn: Locator;
    loc_Monitor_inquiry_type_radio_Btn1: Locator;
    loc_Monitor_inquiry_type_radio_Btn2: Locator;
    loc_Monitor_inquiry_title_txt: Locator;
    loc_Monitor_inquiry_content_txt: Locator;
    loc_Monitor_inquiry_send_Btn: Locator;
    loc_Monitor_inquiry_success_msg: Locator;
    loc_Monitor_inquiry_close_Btn: Locator;
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.loc_Monitor_inquiry_tab_Btn = this.page.getByRole('button', { name: '問い合わせ・通報' });

        this.loc_Monitor_inquiry_type_radio_Btn1 = this.page.getByRole('radio', { name: '問い合わせ' });
        this.loc_Monitor_inquiry_type_radio_Btn2 = this.page.getByRole('radio', { name: '通報' });
        this.loc_Monitor_inquiry_title_txt = this.page.getByPlaceholder('タイトルを入力してください');
        this.loc_Monitor_inquiry_content_txt = this.page.getByRole('textbox', { name: '内容 ' });

        this.loc_Monitor_inquiry_send_Btn = this.page.getByRole('button', { name: '送信' })
        this.loc_Monitor_inquiry_close_Btn = this.page.getByTestId('modal-onAgree');
        this.loc_Monitor_inquiry_success_msg = this.page.getByText('問い合わせは送信されました。');


    }


    public async clickOnInquiryTab() {


        await this.loc_Monitor_inquiry_tab_Btn.click();

    }


    public async clickInquiryTypeRadioBtn(InquiryType: string) {


        if (InquiryType == "問い合わせ") {
            await this.loc_Monitor_inquiry_type_radio_Btn1.click();

        }
        else if (InquiryType == "通報") {
            await this.loc_Monitor_inquiry_type_radio_Btn2.click();

        }
        else {
            console.log("inquiry type not found");
        }
    }




    public async inputInquiryTitle(InquiryTitle: string) {


        await this.loc_Monitor_inquiry_title_txt.fill(InquiryTitle);
    }



    public async inputInquiryContent(InquiryContent: string) {


        await this.loc_Monitor_inquiry_content_txt.fill(InquiryContent);
    }


    public async clickOnSendButton() {


        await this.loc_Monitor_inquiry_send_Btn.click();
    }



    public async clickOnCloseButton() {


        await this.loc_Monitor_inquiry_close_Btn.click();
    }










    public async verifySucessMessage() {
        await this.loc_Monitor_inquiry_success_msg.isVisible();
        await this.waitForSecond(2);
    }


    public async verifySendButtonIsDisabled() {


        await this.loc_Monitor_inquiry_send_Btn.isDisabled();


    }



}