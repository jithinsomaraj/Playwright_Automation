import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';

export default class Client_BroadcastMessaging extends BasePage {
  page: Page;
  sampleRadioButtonLocator?: Locator;

  readonly loc_Client_CampaignDetailsPage_BroadcastChatMessage_TxtArea: Locator;
  readonly loc_Client_CampaignDetailsPage_BroadcastChatMessageSend_Btn: Locator;
  loca_Client_CampaignDetailsPage_BroadcastMessageButton_Btn: Locator;
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.loc_Client_CampaignDetailsPage_BroadcastChatMessage_TxtArea =
      this.page.locator('//textarea[1]');
    this.loc_Client_CampaignDetailsPage_BroadcastChatMessageSend_Btn = page.getByTestId('broadcast-all');
    this.loca_Client_CampaignDetailsPage_BroadcastMessageButton_Btn = page.getByRole('button',{name:'メッセージを送る'});
  }

  public async clickOnTheBroadcastMessagingButton() {
    await this.waitForSecond(2);
    await this.loca_Client_CampaignDetailsPage_BroadcastMessageButton_Btn.click();
  }
  public async typeTheMessageInClientBroadcastChatTextArea(message: string) {
    await this.loc_Client_CampaignDetailsPage_BroadcastChatMessage_TxtArea.fill(message);
  }

  public async clickOnTheClientBroadcastChatSendButton() {
    await this.waitForSecond(2);
    await this.loc_Client_CampaignDetailsPage_BroadcastChatMessageSend_Btn.click();
  }
}
