import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';
export default class Monitor_BeforeInterview extends BasePage {
  page: Page;
  sampleRadioButtonLocator?: Locator;
  radiobuttonXpathLocator: string;
  readonly sampleListParameterloc: string;
  readonly rightarrowlocator: Locator;
  readonly leftarrowlocator: Locator;
  readonly selectYearloc: string;
  readonly selectDateValue: string;
  readonly loc_Monitor_MeetingSettingsPage_EnabledMic_Btn: Locator;
  readonly loc_Monitor_MeetingSettingsPage_DisabledMic_Btn: Locator;
  readonly loc_Monitor_MeetingSettingsPage_DisabledMonitorJoin_Btn: Locator;
  readonly loc_Monitor_MeetingSettingsPage_DisabledBackroomJoin_Btn: Locator;
  readonly loc_Monitor_MeetingSettingsPage_AudioAndVideoSettings_Btn: Locator;
  readonly loc_Monitor_MeetingSettingsPage_AudioAndVideoSettingsPopupClose_Btn: Locator;
  readonly loc_Monitor_MeetingSettingsPage_EnabledMonitorJoin_Btn: Locator;
  readonly loc_Monitor_MeetingSettingsPage_EnabledBackroomJoin_Btn: Locator;
  loc_Monitor_MeetingSettingsPage_MeetingJoiningConfirmationPopup_Btn: Locator;
  loc_Monitor_MeetingSettingsPage_MeetingJoiningRequestSentConfirmation_Lbl: Locator;
  loc_Monitor_MeetingSettingsPage_EnabledBlur_Btn: Locator;
  loc_Monitor_MeetingSettingsPage_DisabledBlur_Btn: Locator;
  loc_Monitor_MeetingSettingsPage_EnabledVideo_Btn: Locator;
  loc_Monitor_MeetingSettingsPage_DisabledVideo_Btn: Locator;
  constructor(page: Page) {
    super(page);
    this.page = page;

    this.radiobuttonXpathLocator = '//*[(text()="fieldname")]/following::span[text()="value"]';
    this.sampleListParameterloc = '//li[text()="sampleListParametervalue"]';

    this.selectYearloc = '//button[text()="year"]';
    this.selectDateValue = '//button[text()="datevalue"]';

    this.rightarrowlocator = this.page.locator('//button[@aria-label="Next month"]');
    this.leftarrowlocator = this.page.locator('//button[@aria-label="Previous month"]');
    this.loc_Monitor_MeetingSettingsPage_EnabledMic_Btn = this.page.locator(
      "//span[contains(@class,'Mui-checked')]/input[@name='audio']",
    );
    this.loc_Monitor_MeetingSettingsPage_DisabledMic_Btn = this.page.locator(
      "//span[not(contains(@class,'Mui-checked'))]/input[@name='audio']",
    );
    this.loc_Monitor_MeetingSettingsPage_EnabledMonitorJoin_Btn = this.page.locator(
      "//button[text()='インタビュールームに入室']",
    );
    this.loc_Monitor_MeetingSettingsPage_DisabledMonitorJoin_Btn = this.page.locator(
      '//button[@data-testid="video-join-button"][@disabled]',
    );
    this.loc_Monitor_MeetingSettingsPage_DisabledBackroomJoin_Btn = this.page.locator(
      '//button[@data-testid="video-join-button-back-room"][@disabled]',
    );
    this.loc_Monitor_MeetingSettingsPage_AudioAndVideoSettings_Btn =
      this.page.locator('[id="settings"]');
    this.loc_Monitor_MeetingSettingsPage_AudioAndVideoSettingsPopupClose_Btn =
      this.page.locator("//button[text()='閉じる']");
    this.loc_Monitor_MeetingSettingsPage_EnabledBackroomJoin_Btn = this.page.locator(
      '//button[@data-testid="video-join-button-back-room"][not(contain(@disabled))]',
    );

    this.loc_Monitor_MeetingSettingsPage_MeetingJoiningConfirmationPopup_Btn = this.page.locator(
      '[data-testid="modal-onAgree"]',
    );
    this.loc_Monitor_MeetingSettingsPage_MeetingJoiningRequestSentConfirmation_Lbl =
      this.page.locator("(//div/div/div[text()='しばらくお待ちください'])[2]");

    this.loc_Monitor_MeetingSettingsPage_EnabledBlur_Btn = this.page.locator(
      "//*[contains(@class,'Mui-checked ')]/input[@name='blur']",
    );
    this.loc_Monitor_MeetingSettingsPage_DisabledBlur_Btn = this.page.locator(
      "//*[not(contains(@class,'Mui-checked '))]/input[@name='blur']",
    );

    this.loc_Monitor_MeetingSettingsPage_EnabledVideo_Btn = this.page.locator(
      "//*[contains(@class,'Mui-checked ')]/input[@name='video']",
    );
    this.loc_Monitor_MeetingSettingsPage_DisabledVideo_Btn = this.page.locator(
      "//*[not(contains(@class,'Mui-checked '))]/input[@name='video']",
    );
  }
  public async clickTheButtonToDisableTheMicInMonitorSettingsPage() {
    await this.waitForSecond(2);
    await this.loc_Monitor_MeetingSettingsPage_EnabledMic_Btn.click();
  }
  public async verifyTheMicButtonDisabled() {
    await this.locatorShouldBePresent(this.loc_Monitor_MeetingSettingsPage_DisabledMic_Btn);
  }
  public async clickTheButtonToEnableTheMicInMonitorSettingsPage() {
    await this.waitForSecond(2);
    await this.loc_Monitor_MeetingSettingsPage_DisabledMic_Btn.click();
  }
  public async verifyTheMicButtonIsEnabled() {
    await this.locatorShouldBePresent(this.loc_Monitor_MeetingSettingsPage_EnabledMic_Btn);
  }


  public async verifyDisabledBackroomJoinButtoninSettingsPage() {
    const locator = this.page.locator(
      '//button[@data-testid="video-join-button-back-room"][@disabled]',
    );
    await this.locatorShouldBePresent(locator);
  }

  public async clickOnAudioAndVideoSettingsButton() {
    await this.waitForSecond(2);
    await this.loc_Monitor_MeetingSettingsPage_AudioAndVideoSettings_Btn.click();
  }

  public async clickOnAudioAndVideoSettingsPopupCloseButton() {
    await this.loc_Monitor_MeetingSettingsPage_AudioAndVideoSettingsPopupClose_Btn.click();
  }

  public async clickOnInterviewerJoinButtoninSettingsPage() {
    await this.loc_Monitor_MeetingSettingsPage_EnabledMonitorJoin_Btn.click();
  }

  public async clickOnBackroomJoinButtoninSettingsPage() {
    await this.loc_Monitor_MeetingSettingsPage_EnabledBackroomJoin_Btn.click();
  }

  public async clickOnAcceptButtonOfMeetingJoiningConfirmationPopup() {
    await this.loc_Monitor_MeetingSettingsPage_MeetingJoiningConfirmationPopup_Btn.click();
  }
  public async VerifyTheJoiningRequestHasSent() {
    await this.locatorShouldBePresent(
      this.loc_Monitor_MeetingSettingsPage_MeetingJoiningRequestSentConfirmation_Lbl,
    );
  }

  public async enableMonitorMeetingSettingsBackgroundBlurButton() {
    await this.waitForSecond(2);
    await this.loc_Monitor_MeetingSettingsPage_DisabledBlur_Btn.click();
  }

  public async verifyTheMonitorMeetingSettingsBackgroundBlurButtonEnabled() {
    await this.locatorShouldBePresent(this.loc_Monitor_MeetingSettingsPage_EnabledBlur_Btn);
  }

  public async enableMonitorMeetingSettingsVideo() {
    await this.loc_Monitor_MeetingSettingsPage_DisabledVideo_Btn.click();
  }

  public async verifyTheMonitorMeetingVideoPreviewButtonEnabled() {
    await this.locatorShouldBePresent(this.loc_Monitor_MeetingSettingsPage_EnabledVideo_Btn);
  }
}
