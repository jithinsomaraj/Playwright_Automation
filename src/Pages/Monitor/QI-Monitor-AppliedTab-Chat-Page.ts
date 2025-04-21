/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import ScenarioContext from '../../support/ScenarioContext';
import { BasePage } from '../../utils/BasePage';
import { Locator, Page, expect } from '@playwright/test';

export default class Monitor_IndividualChatFunction extends BasePage {
  page: Page;
  sampleRadioButtonLocator?: Locator;
  radiobuttonXpathLocator: string;
  readonly sampleListParameterloc: string;

  readonly rightarrowlocator: Locator;
  readonly leftarrowlocator: Locator;
  readonly selectYearloc: string;
  readonly selectDateValue: string;
  readonly loc_Monitor_AppledTab_ChatOption_Lnk: Locator;
  readonly loc_Monitor_AppliedTab_ChatMessage_TxtArea: Locator;
  readonly loc_Monitor_AppliedTab_ChatMessageSend_Btn: Locator;
  readonly loc_Monitor_AppliedTab_ReceivedMessage_Lbl: string;
  readonly loc_Monitor_AppliedTab_MessageReceivedTime_Lbl: string;
  loc_Client_IndividualChat_ReceivedImg_Img: string;
  loc_Client_IndividualChat_ReceivedFile_File: string;
  loc_Client_CampaignDetailsPage_IndividualChatImgCount_Lbl: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.radiobuttonXpathLocator = '//*[(text()="fieldname")]/following::span[text()="value"]';
    this.sampleListParameterloc = '//li[text()="sampleListParametervalue"]';

    this.selectYearloc = '//button[text()="year"]';
    this.selectDateValue = '//button[text()="datevalue"]';

    this.rightarrowlocator = this.page.locator('//button[@aria-label="Next month"]');
    this.leftarrowlocator = this.page.locator('//button[@aria-label="Previous month"]');
    this.loc_Monitor_AppledTab_ChatOption_Lnk = page.getByRole('tab', { name: 'メッセージ' });
    this.loc_Monitor_AppliedTab_ChatMessage_TxtArea = page.getByTestId('chat-input');
    this.loc_Monitor_AppliedTab_ChatMessageSend_Btn = page.getByRole('button', { name: '送る' });
    this.loc_Monitor_AppliedTab_ReceivedMessage_Lbl =
      '(//*[@id="simple-tabpanel-1"]//div[text()="Message"])[1]';
    this.loc_Monitor_AppliedTab_MessageReceivedTime_Lbl =
      '//*[@id="simple-tabpanel-1"]//div[text()="Message"]/parent::div/following-sibling::div/div/div[text()="Time"]';
    this.loc_Client_IndividualChat_ReceivedImg_Img = '[id="MonitorImage2.jpg"]';
    this.loc_Client_IndividualChat_ReceivedFile_File = '(//*[text()="FileName"])[1]';

    this.loc_Client_CampaignDetailsPage_IndividualChatImgCount_Lbl =
      this.page.locator('[id="image.png"]>img');
  }
  public async selectMonitorAppliedChatTab() {
    await this.waitForSecond(2);
    await this.loc_Monitor_AppledTab_ChatOption_Lnk.click();
  }

  public async typeTheMessageInMonitorChatTextArea(message: string) {
    await this.loc_Monitor_AppliedTab_ChatMessage_TxtArea.fill(message);

    const currentTime = await this.getCurrentTime();
    console.log('Current Time :' + currentTime);

    ScenarioContext.put(message, currentTime);
  }

  public async clickOnTheMonitorChatSendButton() {
    await this.waitForSecond(3);
    await this.loc_Monitor_AppliedTab_ChatMessageSend_Btn.click();

    await this.waitForSecond(5);
  }

  public async verifyTextMessageReceivedInMonitorSide(message: string) {
    const locator = this.page.locator(
      this.loc_Monitor_AppliedTab_ReceivedMessage_Lbl.replace('Message', message),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async verifyTextMessageNotReceivedInMonitorSide(message: string) {
    const locator = this.page.locator(
      this.loc_Monitor_AppliedTab_ReceivedMessage_Lbl.replace('Message', message),
    );
    await this.locatorShouldNotBePresent(locator);
  }

  public async verifyTextMessageTimeInMonitorSide(message: string) {
    const time = ScenarioContext.get(message);
    const locator = this.page.locator(
      this.loc_Monitor_AppliedTab_MessageReceivedTime_Lbl
        .replace('Message', message)
        .replace('Time', time),
    );
    console.log('Monitor Time :' + (await locator.innerText()));
    await this.locatorShouldBePresent(locator);
  }

  public async monitorChatImageFileUpload(fileName: string) {

    const fileName1 = fileName;
    const time = this.getCurrentTime();
    fileName = 'Fixtures/Images/' + fileName;
    const locator = this.page.getByTestId('file-input');
    await this.fileUpload(locator, fileName);
    ScenarioContext.put(fileName1, time);
  }
  public async monitorChatFileUpload(fileName: string) {

    const fileName1 = fileName;
    const time = this.getCurrentTime();
    fileName = 'Fixtures/Docs/' + fileName;
    const locator = this.page.getByTestId('file-input');
    await this.fileUpload(locator, fileName);
    ScenarioContext.put(fileName1, time);


  }

  public async takeTheImageCountFromClient() {
    this.waitForSecond(5);
    const elementsCount = await this.page.$$eval(
      'img[id="image.png"]',
      (elements: string | any[]) => elements.length,
    );

    console.log('Image Count 1:' + elementsCount);

    const imgCount = await this.loc_Client_CampaignDetailsPage_IndividualChatImgCount_Lbl.count();
    ScenarioContext.put('ImageCount', imgCount);
    console.log('Image Count 2:' + elementsCount);
  }

  public async verifyImageReceivedInClientside(fileName: string) {
    const elements = await this.page.$$(this.loc_Client_IndividualChat_ReceivedImg_Img);


    const actualImageCount = elements.length;
    const expectedImgCount: number = ScenarioContext.get('ImageCount') + 1;

    console.log('Expected :' + expectedImgCount + '  Actual :' + actualImageCount);
    const count = (await ScenarioContext.get('ImageCount')) + 1;
    console.log('file Count :' + fileName + '  ' + count);
    expect(expectedImgCount).toBe(actualImageCount);
  }

  public async verifyTheFileReceivedInClientSide(fileName: string) {
    const time = await ScenarioContext.get(fileName);
    const locator = this.page.locator(
      this.loc_Client_IndividualChat_ReceivedFile_File
        .replace('Time', time)
        .replace('FileName', fileName),
    );

    console.log('fileName :' + fileName);
    console.log(
      'Locator :' +
      this.loc_Client_IndividualChat_ReceivedFile_File
        .replace('Time', time)
        .replace('FileName', fileName),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async getTheImageCountFromTheChat() {
    const elements = await this.page.$$(this.loc_Client_IndividualChat_ReceivedImg_Img);


    const imageCount = elements.length;

    ScenarioContext.put('ImageCount', imageCount);


    console.log('Count of image :' + imageCount);
  }
}
