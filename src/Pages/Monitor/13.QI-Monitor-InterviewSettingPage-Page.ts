import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';
import { PageObject } from '../../utils/PageObjects';


export default class Monitor_BeforeInterview extends BasePage {
  page: Page;
  PageObject!: PageObject;
  sampleRadioButtonLocator?: Locator;
  radiobuttonXpathLocator: string;
  readonly sampleListParameterloc: string;
  readonly rightarrowlocator: Locator;
  readonly leftarrowlocator: Locator;
  readonly selectYearloc: string;
  readonly selectDateValue: string;
  readonly loc_Monitor_MeetingSettingsPage_EnabledMic_Btn: string;
  readonly loc_Monitor_MeetingSettingsPage_DisabledMic_Btn: string;
  readonly loc_Monitor_MeetingSettingsPage_DisabledMonitorJoin_Btn: Locator;
  readonly loc_Monitor_MeetingSettingsPage_DisabledBackroomJoin_Btn: Locator;
  readonly loc_Monitor_MeetingSettingsPage_AudioAndVideoSettings_Btn: Locator;
  readonly loc_Monitor_MeetingSettingsPage_AudioAndVideoSettingsPopupClose_Btn: Locator;
  readonly loc_Monitor_MeetingSettingsPage_EnabledMonitorJoin_Btn: Locator;
  readonly loc_Monitor_MeetingSettingsPage_EnabledBackroomJoin_Btn: Locator;
  loc_Monitor_MeetingSettingsPage_MeetingJoiningConfirmationPopup_Btn: Locator;
  loc_Monitor_MeetingSettingsPage_MeetingJoiningRequestSentConfirmation_Lbl: Locator;
  loc_Monitor_MeetingSettingsPage_EnabledBlur_Btn: string;
  loc_Monitor_MeetingSettingsPage_DisabledBlur_Btn: string;
  loc_Monitor_MeetingSettingsPage_EnabledVideo_Btn: Locator;
  loc_Monitor_MeetingSettingsPage_DisabledVideo_Btn: string;
  constructor(page: Page) {
    super(page);
    this.page = page;

    this.radiobuttonXpathLocator = '//*[(text()="fieldname")]/following::span[text()="value"]';
    this.sampleListParameterloc = '//li[text()="sampleListParametervalue"]';
    this.selectYearloc = '//button[text()="year"]';
    this.selectDateValue = '//button[text()="datevalue"]';

    this.rightarrowlocator = this.page.locator('//button[@aria-label="Next month"]');
    this.leftarrowlocator = this.page.locator('//button[@aria-label="Previous month"]');
    this.loc_Monitor_MeetingSettingsPage_EnabledMic_Btn = "//span[contains(@class,'Mui-checked')]/input[@name='audio']"
    this.loc_Monitor_MeetingSettingsPage_DisabledMic_Btn = "//span[not(contains(@class,'Mui-checked'))]/input[@name='audio']"
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

    this.loc_Monitor_MeetingSettingsPage_EnabledBlur_Btn = "//input[@type='checkbox' and @name='blur' and @checked]"
    this.loc_Monitor_MeetingSettingsPage_DisabledBlur_Btn =
      "//input[@type='checkbox' and @name='blur' and @checked]";

    this.loc_Monitor_MeetingSettingsPage_EnabledVideo_Btn = this.page.locator(
      "//input[@type='checkbox' and @name='video' and @checked]",
    );
    this.loc_Monitor_MeetingSettingsPage_DisabledVideo_Btn =
      "//*[@name='video']"
  }
  public async clickTheButtonToDisableTheMicInMonitorSettingsPage(userName: string) {
    this.waitForSecond(2);
    const page = await this.getUserPage(userName);
    const locator = page.locator(this.loc_Monitor_MeetingSettingsPage_EnabledMic_Btn)
    await locator.click();
  }
  public async verifyTheMicButtonDisabled(userName: string) {
    const page = await this.getUserPage(userName);
    const locator = page.locator(this.loc_Monitor_MeetingSettingsPage_DisabledMic_Btn)
    await this.locatorShouldBePresent(locator);

  }
  public async clickTheButtonToEnableTheMicInMonitorSettingsPage(userName: string) {
    this.waitForSecond(2);
    const page = await this.getUserPage(userName);
    const locator = page.locator(this.loc_Monitor_MeetingSettingsPage_DisabledMic_Btn)
    await locator.click();

  }
  public async verifyTheMicButtonIsEnabled(userName: string) {


    const page = await this.getUserPage(userName);
    const locator = page.locator(this.loc_Monitor_MeetingSettingsPage_EnabledMic_Btn)
    await this.locatorShouldBePresent(locator);
  }
  public async verifyDisabledBackroomJoinButtoninSettingsPage() {
    const locator = this.page.locator(
      '//button[@data-testid="video-join-button-back-room"][@disabled]',
    );
    await this.locatorShouldBePresent(locator);
  }

  public async clickOnAudioAndVideoSettingsButton() {
    this.waitForSecond(2);
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

  public async enableMonitorMeetingSettingsBackgroundBlurButton(userName: string) {
    this.waitForSecond(2);
    const page = await this.getUserPage(userName);
    this.waitForSecond(2);
    const locator = page.locator(this.loc_Monitor_MeetingSettingsPage_DisabledBlur_Btn)
    await locator.click();

  }

  public async verifyTheMonitorMeetingSettingsBackgroundBlurButtonEnabled(userName: string) {
    const page = await this.getUserPage(userName);
    const locator = page.locator(this.loc_Monitor_MeetingSettingsPage_EnabledBlur_Btn)
    await this.locatorShouldBePresent(locator);
  }

  public async enableMonitorMeetingSettingsVideo(userName: string) {
    const page = await this.getUserPage(userName);
    const locator = page.locator(this.loc_Monitor_MeetingSettingsPage_DisabledVideo_Btn)
    await locator.click();
  }

  public async verifyTheMonitorMeetingVideoPreviewButtonEnabled() {
    await this.locatorShouldBePresent(this.loc_Monitor_MeetingSettingsPage_EnabledVideo_Btn);



  }
}
