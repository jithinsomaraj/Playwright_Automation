/* eslint-disable no-console */
import ScenarioContext from '../../support/ScenarioContext';
import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';

export default class Monitor_SendoffFromParticipation extends BasePage {
  page: Page;
  sampleRadioButtonLocator?: Locator;

  readonly loc_Monitor_ParticipationTab_SendOffButton_Btn: Locator;
  readonly loc_Monitor_ParticipationTab_CompletionTab_Lnk: Locator;
  readonly loc_Client_ScheduleOffering_CancellationStatus_Lbl: Locator;
  readonly loc_Client_ScheduleOffering_ChatTab_Lnk: Locator;
  readonly loc_Client_ScheduleOffering_ChatTextBox_Txt: Locator;
  readonly loc_Client_ScheduleOffering_ChatTextSendButton_Btn: Locator;
  readonly loc_Client_Ticket_HeaderTicketCount_Lbl: Locator;
  readonly loc_Monitor_ParticipationTab_OpenScheduleToOtherMonitor_Btn: Locator;
  readonly loc_Monitor_ParticipationTab_OpenScheduleToOtherSuccessMessage_Msg: Locator;
  readonly loc_Monitor_ParticipationTab_CloseSchedule_Btn: Locator;
  readonly loc_Monitor_ParticipationTab_CloseScheduleSuccessMessage_Msg: Locator;
  loc_Client_ScheduleOffering_ChatText_TxtBox: Locator;
  loc_Client_ScheduleOffering_ChatFileButton_Btn: Locator;
  loc_Client_ScheduleOffering_ChatImageButton_Btn: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;


    this.loc_Monitor_ParticipationTab_SendOffButton_Btn = this.page.locator(
      '(//*[@data-testid="back-button"])[2]',
    );
    this.loc_Monitor_ParticipationTab_CompletionTab_Lnk = page.getByRole('tab', { name: '完了' });
    this.loc_Client_ScheduleOffering_CancellationStatus_Lbl = page.getByText('のインタビューがキャンセルされました');
    this.loc_Client_ScheduleOffering_ChatTab_Lnk = this.page.getByTestId('MuiTab2');
    this.loc_Client_ScheduleOffering_ChatTextBox_Txt = this.page.locator(
      '[placeholder="メッセージを送信"]',
    );
    this.loc_Client_ScheduleOffering_ChatTextSendButton_Btn = this.page.locator(
      "//div/button[text()='送信'][@disabled]",
    );

    this.loc_Client_ScheduleOffering_ChatFileButton_Btn = this.page.locator(
      '(//*[@type="file"][@disabled])[2]',
    );

    this.loc_Client_ScheduleOffering_ChatText_TxtBox = this.page.locator(
      "//*[@placeholder='メッセージを送信'][@disabled]",
    );


    this.loc_Client_ScheduleOffering_ChatImageButton_Btn = this.page.locator(
      '//*[@data-testid="file-input"][@disabled]',
    );






    this.loc_Client_Ticket_HeaderTicketCount_Lbl = this.page.locator(
      '//div[@data-testid="app-actions"]/div/div',
    );
    this.loc_Monitor_ParticipationTab_OpenScheduleToOtherMonitor_Btn = page.getByText('応募できるようにする');
    this.loc_Monitor_ParticipationTab_OpenScheduleToOtherSuccessMessage_Msg = page.getByText('日程がオファーできるようになりました。');
    this.loc_Monitor_ParticipationTab_CloseSchedule_Btn = page.getByText('応募できるようにしない');
    this.loc_Monitor_ParticipationTab_CloseScheduleSuccessMessage_Msg = page.getByText('この日程は日程候補から削除しました。')
  }
  public async clickOnSendOffFromParticipationTab() {
    console.log('Im Here');
    await this.waitForSecond(2);
    await this.loc_Monitor_ParticipationTab_SendOffButton_Btn.click();
  }

  public async clickOnTheCompletionTab() {
    await this.waitForSecond(2);
    await this.loc_Monitor_ParticipationTab_CompletionTab_Lnk.click();
  }

  public async verifyCancellationStatusInScheduleOfferingTab() {
    await this.loc_Client_ScheduleOffering_CancellationStatus_Lbl.isVisible();
  }

  public async clickOnTheChatTab() {
    await this.waitForSecond(2);
    await this.loc_Client_ScheduleOffering_ChatTab_Lnk.click();
  }

  public async typeTheMessageInTextbox(txtMesssage: string) {
    await this.loc_Client_ScheduleOffering_ChatTextBox_Txt.fill(txtMesssage);
    const currentTime = await this.getCurrentTime();
    console.log('Current Time :' + currentTime);

    ScenarioContext.put(txtMesssage, currentTime);
  }

  public async verifyMessageSendButtonIsDisabled() {
    await this.locatorShouldBePresent(this.loc_Client_ScheduleOffering_ChatTextSendButton_Btn);
  }

  public async verifyMessageTextFieldIsDisabled() {
    await this.locatorShouldBePresent(this.loc_Client_ScheduleOffering_ChatText_TxtBox);
  }


  public async verifyMessageFileButtonDisabled() {
    await this.locatorShouldBePresent(this.loc_Client_ScheduleOffering_ChatFileButton_Btn);
  }


  public async verifyMessageImageButtonDisabled() {
    await this.locatorShouldBePresent(this.loc_Client_ScheduleOffering_ChatImageButton_Btn);
  }


  public async getTheTicketCountFromTheHeader() {
    const locator = this.page.locator('//div[@data-testid="app-actions"]/div/div');
    await this.locatorShouldBePresent(locator);
  }

  public async clickOnOpenOfferToOtherMonitorsButton() {
    await this.waitForSecond(2);
    await this.loc_Monitor_ParticipationTab_OpenScheduleToOtherMonitor_Btn.click();
  }

  public async verifySuccessfulMessageForOpenOfferToOtherMonitors() {
    await this.locatorShouldBePresent(
      this.loc_Monitor_ParticipationTab_OpenScheduleToOtherSuccessMessage_Msg,
    );
  }

  public async clickOnOfferCloseButton() {
    await this.waitForSecond(2);
    await this.loc_Monitor_ParticipationTab_CloseSchedule_Btn.click();
  }

  public async verifySuccessfulMessageToCloseTheOffering() {
    await this.locatorShouldBePresent(
      this.loc_Monitor_ParticipationTab_CloseScheduleSuccessMessage_Msg,
    );
  }
}
