import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';
import ScenarioContext from '../../support/ScenarioContext';

export default class Client_BeforeInterview extends BasePage {
  page: Page;
  sampleRadioButtonLocator?: Locator;

  readonly loc_Client_MeetingRoomSettingsPage_VideoPreviewOn_Btn: string;
  loc_Client_MeetingRoomSettingsPage_DisabledVideoPreview_Btn: Locator;
  readonly loc_Client_MeetingRoomSettingsPage_VideoPreviewOn_Video: Locator;
  readonly loc_Client_MeetingRoomSettingsPage_VideoPreviewOff_Video: string;
  readonly loc_Client_MeetingRoomSettingsPage_MicOn_Btn: string;
  readonly loc_Client_MeetingRoomSettingsPage_DisabledMic_Btn: string;
  readonly loc_Client_MeetingRoomSettingsPage_EnabledBackgroundBlur_Btn: string;
  loc_Client_MeetingRoomSettingsPage_DisabledBackgroundBlur_Btn: string;
  readonly loc_Client_MeetingRoomSettingsPage_NickName_Txt: Locator;
  constructor(page: Page) {
    super(page);
    this.page = page;

    this.loc_Client_MeetingRoomSettingsPage_VideoPreviewOn_Btn = "//div[@id='camera']//span[contains(@class,'Mui-checked')]";
    this.loc_Client_MeetingRoomSettingsPage_DisabledVideoPreview_Btn = this.page.locator(
      "(//div[@id='camera']//span/span[not(contains(@class,'Mui-checked'))])[3]",
    );
    this.loc_Client_MeetingRoomSettingsPage_VideoPreviewOn_Video = this.page.locator(
      "//video[contains(@style,'object-fit: cover;')]",
    );
    this.loc_Client_MeetingRoomSettingsPage_VideoPreviewOff_Video = "//video[contains(@style,'object-fit: contain;')]";
    this.loc_Client_MeetingRoomSettingsPage_MicOn_Btn =
      "//div[@id='mic']//span[contains(@class,'Mui-checked')]"
    this.loc_Client_MeetingRoomSettingsPage_DisabledMic_Btn = "//div[@id='mic']/span[not(contains(@class,'Mui-checked'))]",

      this.loc_Client_MeetingRoomSettingsPage_EnabledBackgroundBlur_Btn = "//div[@id='backgroundBlur']/span/span[(contains(@class,'Mui-checked'))]/input";

    this.loc_Client_MeetingRoomSettingsPage_DisabledBackgroundBlur_Btn =
      "//div[@id='backgroundBlur']"
    this.loc_Client_MeetingRoomSettingsPage_NickName_Txt = this.page.locator(
      '//input[@placeholder="田中太郎"]',
    );
  }

  public async pageNavigationToTheMeetingSettingsPage() {
    await this.page.goto('https://front-customer-sa.ip-poc.com/video-chat/app/meeting');
  }

  public async clickOnButtonToOffVideoPreview() {
    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_MeetingRoomSettingsPage_VideoPreviewOn_Btn);
    await locator.click();

  }

  public async clickOnButtonToOnTheVideoPreview() {
    this.waitForSecond(2);
    await this.loc_Client_MeetingRoomSettingsPage_DisabledVideoPreview_Btn.click();
  }
  public async verifyVideoPreviewIsDisabledInMeetingSettingsPage() {


    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_MeetingRoomSettingsPage_VideoPreviewOff_Video);
    await this.locatorShouldBePresent(
      locator
    );
  }

  public async verifyVideoPreviewInMeetingSettingsPage() {
    await this.locatorShouldBePresent(this.loc_Client_MeetingRoomSettingsPage_VideoPreviewOn_Video);
  }

  public async clickOnButtonToOffMic() {

    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_MeetingRoomSettingsPage_MicOn_Btn);
    await locator.click();

  }

  public async verifyMicIsOffInMeetingSettingsPage() {
    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_MeetingRoomSettingsPage_DisabledMic_Btn);
    await this.locatorShouldBePresent(
      locator
    );

  }

  public async disableTheBackgroundBlur() {
    await this.waitForSecond(4);
    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_MeetingRoomSettingsPage_DisabledBackgroundBlur_Btn);
    await locator.click();
    await this.waitForSecond(2);
  }

  public async verifyBlurButtonEnabledInMeetingSettingsPage() {
    this.waitForSecond(2);
    const page3 = ScenarioContext.get('NewTab');
    const locator = page3.locator(this.loc_Client_MeetingRoomSettingsPage_EnabledBackgroundBlur_Btn);
    await this.locatorShouldBePresent(
      locator);
  }

  public async enterTheNickName(participantName: string) {
    await this.loc_Client_MeetingRoomSettingsPage_NickName_Txt.fill(participantName);
  }
}
