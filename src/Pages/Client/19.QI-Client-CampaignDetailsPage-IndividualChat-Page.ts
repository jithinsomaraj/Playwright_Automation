/* eslint-disable no-console */
import ScenarioContext from '../../support/ScenarioContext';
import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';

export default class Client_IndividualChatFunction extends BasePage {
  page: Page;
  sampleRadioButtonLocator?: Locator;
  radiobuttonXpathLocator: string;
  readonly sampleListParameterloc: string;

  readonly rightarrowlocator: Locator;
  readonly leftarrowlocator: Locator;
  readonly selectYearloc: string;
  readonly selectDateValue: string;
  readonly loc_Client_CampaignDetailsPage_IndividualChatTab_Lnk: Locator;
  readonly loc_Client_CampaignDetailsPage_IndividualChatMessage_TxtArea: Locator;
  readonly loc_Client_CampaignDetailsPage_IndividualChatMessageSend_Btn: Locator;
  readonly loc_Client_CampaignDetailsPage_IndividualChatReceivedMessage_Lbl: string;
  readonly loc_Client_CampaignDetailsPage_IndividualChatMessageReceivedTime_Lbl: string;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.radiobuttonXpathLocator = '//*[(text()="fieldname")]/following::span[text()="value"]';
    this.sampleListParameterloc = '//li[text()="sampleListParametervalue"]';

    this.selectYearloc = '//button[text()="year"]';
    this.selectDateValue = '//button[text()="datevalue"]';

    this.rightarrowlocator = this.page.locator('//button[@aria-label="Next month"]');
    this.leftarrowlocator = this.page.locator('//button[@aria-label="Previous month"]');
    this.loc_Client_CampaignDetailsPage_IndividualChatTab_Lnk = this.page.getByRole('tab', { name: 'メッセージ' });
    this.loc_Client_CampaignDetailsPage_IndividualChatMessage_TxtArea = this.page.locator(
      '//*[@id="simple-tabpanel-2"]//textarea[@placeholder="メッセージを送信"]',
    );
    this.loc_Client_CampaignDetailsPage_IndividualChatMessageSend_Btn = this.page.locator(
      '//*[@id="simple-tabpanel-2"]//button[text()="送信"]',
    );
    this.loc_Client_CampaignDetailsPage_IndividualChatReceivedMessage_Lbl =
      "//div[text()='Time']/following::div[text()='Message']";
    this.loc_Client_CampaignDetailsPage_IndividualChatMessageReceivedTime_Lbl =
      '//*[@id="tab3"]//div[text()="Message"]/../following-sibling::div/div[text()="Time"]';
  }
  public async selectClientIndividualChatTab() {
    await this.waitForSecond(2);
    await this.loc_Client_CampaignDetailsPage_IndividualChatTab_Lnk.click();
  }

  public async typeTheMessageInClientIndividualChatTextArea(message: string) {
    await this.loc_Client_CampaignDetailsPage_IndividualChatMessage_TxtArea.fill(message);
  }

  public async clickOnTheClientIndividualChatSendButton() {
    await this.waitForSecond(2);
    await this.loc_Client_CampaignDetailsPage_IndividualChatMessageSend_Btn.click();
  }

  public async verifyTextMessageReceivedInClientSide(message: string) {
    const time = ScenarioContext.get(message);
    const locator = this.page.locator(
      this.loc_Client_CampaignDetailsPage_IndividualChatReceivedMessage_Lbl
        .replace('Message', message)
        .replace('Time', time),
    );
    await this.locatorShouldBePresent(locator);
  }

  public async verifyTextMessageNotReceivedInClientSide(message: string) {
    const time = ScenarioContext.get(message);
    const locator = this.page.locator(
      this.loc_Client_CampaignDetailsPage_IndividualChatReceivedMessage_Lbl
        .replace('Message', message)
        .replace('Time', time),
    );
    await this.locatorShouldNotBePresent(locator);
  }

  public async verifyTextMessageReceivedTimeInClientSide(message: string) {
    const time = ScenarioContext.get(message);
    const locator = this.page.locator(
      this.loc_Client_CampaignDetailsPage_IndividualChatMessageReceivedTime_Lbl
        .replace('Message', message)
        .replace('Time', time),
    );
    console.log('Monitor Time :' + (await locator.innerText()));
    await this.locatorShouldBePresent(locator);
  }
}
