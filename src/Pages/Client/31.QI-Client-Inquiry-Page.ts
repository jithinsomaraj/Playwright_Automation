import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';

export default class ClientInquiry extends BasePage {
  page: Page;

  readonly loc_Client_MenuList_Inquiry_Lnk: Locator;
  readonly loc_Client_Inquiry_DisabledSubmitButton_Lnk: Locator;
  readonly loc_Client_Inquiry_EmailField_Txt: Locator;
  readonly loc_Client_Inquiry_Title_Txt: Locator;
  readonly loc_Client_Inquiry_InquiryField_Txt: Locator;
  readonly loc_Client_Inquiry_EnabledSubmitButton_Lnk: Locator;
  readonly loc_Client_Inquiry_InformOptionButton_Btn: Locator;
  readonly loc_Client_Inquiry_InquiryOptionButton_Btn: Locator;
  readonly loc_Client_Inquiry_InquirySubmitAcceptPopup_Btn: Locator;
  readonly loc_Client_Inquiry_SuccessMessage_Lbl: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.loc_Client_MenuList_Inquiry_Lnk = this.page.getByText('問い合わせ');
    this.loc_Client_Inquiry_DisabledSubmitButton_Lnk = this.page.getByText('送信');
    this.loc_Client_Inquiry_EmailField_Txt = this.page.getByPlaceholder('abc@macromill.com');
    this.loc_Client_Inquiry_Title_Txt = this.page.getByPlaceholder('タイトルを入力してください。');
    this.loc_Client_Inquiry_InquiryField_Txt = this.page.locator('[name="inquiry"]'); // cant change
    this.loc_Client_Inquiry_EnabledSubmitButton_Lnk = this.page.getByText('送信');
    this.loc_Client_Inquiry_InformOptionButton_Btn = this.page.getByRole('radio',{name: '通報'});
    this.loc_Client_Inquiry_InquiryOptionButton_Btn = this.page.getByRole('radio',{name: '問い合わせ'});
    this.loc_Client_Inquiry_InquirySubmitAcceptPopup_Btn = this.page.getByTestId('modal-onAgree');
    this.loc_Client_Inquiry_SuccessMessage_Lbl = this.page.getByText('問い合わせは送信されました。');
  }
  public async clickOnTheInquiryMenuItem() {
    
    await this.loc_Client_MenuList_Inquiry_Lnk.click();
  }

  public async verifySubmitButtonDisabled() {
    await this.loc_Client_Inquiry_DisabledSubmitButton_Lnk.isDisabled();

  }

  public async entertheEmailId(email: string) {
    await this.loc_Client_Inquiry_EmailField_Txt.fill(email);
  }

  public async enterTheInquiryTitle(title: string) {
    await this.loc_Client_Inquiry_Title_Txt.fill(title);
  }

  public async enterTheInquirySubject(inquiry: string) {
    await this.loc_Client_Inquiry_InquiryField_Txt.fill(inquiry);
  }

  public async clickOnTheInquirySubmitButton() {
    await this.loc_Client_Inquiry_EnabledSubmitButton_Lnk.click();
  }

  public async selectInformOptionButton() {
    await this.loc_Client_Inquiry_InformOptionButton_Btn.click();
  }

  public async selectInquiryOptionButton() {
    await this.loc_Client_Inquiry_InquiryOptionButton_Btn.click();
  }

  public async clickOnInquiryAgreementPopup() {
    await this.loc_Client_Inquiry_InquirySubmitAcceptPopup_Btn.click();
  }

  public async verifyTheInquirySubmissionSuccessMessage() {
    await this.loc_Client_Inquiry_SuccessMessage_Lbl.isVisible();
    this.waitForSecond(3);
  }
}
