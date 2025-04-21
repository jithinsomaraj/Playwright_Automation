import { BasePage } from '../../utils/BasePage';
import { Page } from '@playwright/test';
import ScenarioContext from '../../support/ScenarioContext';
import { readFromYamlFilePath } from '../../utils/YamlReader';


export default class AgoraChat extends BasePage {
    page: Page;
    loc_Monitor_Chat_Tab_Lnk: string;
    loc_Monitor_Chat_Tab_intvwr__Lnk: string;
    loc_Monitor_ChatTextBox_Txt: string;
    loc_Client_Agora_Chat_Send_Btn: string;
    readonly loc_Monitor_AppliedTab_ReceivedMessage_Lbl: string;
    loc_Monitor_Agora_ChatMessage_TxtArea: string;
    loc_Monitor_Agora_ChatMessageSend_Btn: string
    loc_Client_AppliedTab_ReceivedMessage_Lbl: string;
    readonly loc_Client_AgoraMeetingRoom_NotFocusedChat_Btn: string;
    loc_Backroom_Chat_Tab_Lnk: string;



    constructor(page: Page) {
        super(page);
        this.page = page;
        this.loc_Monitor_Chat_Tab_Lnk = "//*[@id='simple-tab-1']//*[text()='モニター']";
        this.loc_Backroom_Chat_Tab_Lnk = "//*[@id='simple-tab-0']//*[text()='バックルーム']";
        this.loc_Monitor_Chat_Tab_intvwr__Lnk = '//*[@id="simple-tab-0"]/div//*[text()="インタビュアー"]';
        this.loc_Monitor_ChatTextBox_Txt = "[placeholder='メッセージを送信']";
        this.loc_Client_Agora_Chat_Send_Btn = '//*[@id="button"]/button/div[text()="送信"]';
        this.loc_Monitor_AppliedTab_ReceivedMessage_Lbl = '(//div[text()="Message"])[1]';
        this.loc_Monitor_Agora_ChatMessage_TxtArea = "//*[@inputvalue]//textarea[1]";
        this.loc_Monitor_Agora_ChatMessageSend_Btn = "//*[@id='send-message-btn']";
        this.loc_Client_AppliedTab_ReceivedMessage_Lbl = "(//*[@id='message']/div[text()='Message_txt'])[1]";
        this.loc_Client_AgoraMeetingRoom_NotFocusedChat_Btn =
            "(//*[@id='chat']//*[@fill='white'])[1]/parent::*";








    }

    public async selectMonitorChatTab(user: string) {
        console.log(user);
        const page3 = ScenarioContext.get('NewTab');
        const locator = page3.locator(this.loc_Monitor_Chat_Tab_Lnk);
        await locator.click();
    }


    public async typeTheMessageInTextbox(user: string) {
        const txtMesssage = readFromYamlFilePath('CampaignData')['interviewerMessage']
        console.log(user);
        const page3 = ScenarioContext.get('NewTab');
        const locator = page3.locator(this.loc_Monitor_ChatTextBox_Txt);
        await locator.fill(txtMesssage);

    }



    public async typeTheMessageInTextbox2(user: string) {
        console.log(user);
        const page3 = await this.getUserPage(user);
        const txtMesssage = readFromYamlFilePath('CampaignData')['backroomMessage']
        const locator = page3.locator(this.loc_Monitor_ChatTextBox_Txt);
        await locator.fill(txtMesssage);

    }


    public async clickSendButton(user: string) {
        console.log(user);
        const page3 = ScenarioContext.get('NewTab');
        const locator = page3.locator(this.loc_Client_Agora_Chat_Send_Btn)
        locator.click();
    }



    public async clickBackroomChatSendButton(user: string) {
        console.log(user);
        const page3 = await this.getUserPage(user);
        const locator = page3.locator(this.loc_Client_Agora_Chat_Send_Btn)
        locator.click();
    }


    public async verifyTextMessageReceivedInMonitorSide(user: string) {
        const page = await this.getUserPage(user);
        const message = readFromYamlFilePath('CampaignData')['interviewerMessage']
        const locator = page.locator(this.loc_Monitor_AppliedTab_ReceivedMessage_Lbl.replace("Message", message));
        console.log(locator);
        await this.locatorShouldBePresent(locator);
    }

    public async typeTheMessageInMonitorChatTextArea(user: string) {
        const page = await this.getUserPage(user);
        const message = readFromYamlFilePath('CampaignData')['monitorMessage']
        page.locator(this.loc_Monitor_Agora_ChatMessage_TxtArea).fill(message);

        const currentTime = await this.getCurrentTime();
        console.log("Current Time :" + currentTime);

        ScenarioContext.put(message, currentTime)
    }
    public async clickOnTheMonitorChatSendButton(user: string) {
        const page = await this.getUserPage(user);
        page.locator(this.loc_Monitor_Agora_ChatMessageSend_Btn).click();

        this.waitForSecond(2);


    }



    public async verifyTextMessageReceivedInInterviewerSide(user: string) {
        console.log(user);
        const page3 = ScenarioContext.get('NewTab');
        const message = readFromYamlFilePath('CampaignData')['monitorMessage']
        console.log(message);
        page3.bringToFront();
        this.waitForSecond(2);
        const locator = await page3.locator(this.loc_Client_AppliedTab_ReceivedMessage_Lbl.replace("Message_txt", message));
        console.log(locator);
        await this.locatorShouldBePresent(locator);
    }

    public async verifyTextMessageReceivedInInterviewerSide2(user: string) {
        console.log(user);
        const page3 = ScenarioContext.get('NewTab');
        const message = readFromYamlFilePath('CampaignData')['backroomMessage']
        console.log(message);
        page3.bringToFront();
        this.waitForSecond(2);
        const locator = await page3.locator(this.loc_Client_AppliedTab_ReceivedMessage_Lbl.replace("Message_txt", message));
        console.log(locator);
        await this.locatorShouldBePresent(locator);
    }

    public async clickOnAgoraMeetingFocusedChatListButton(user: string) {
        console.log(user);

        const page3 = await this.getUserPage(user);
        await page3.bringToFront();
        const locator = page3.locator(this.loc_Client_AgoraMeetingRoom_NotFocusedChat_Btn);
        await locator.click();
    }






    public async selectInterviewerChatTab(user: string) {
        console.log(user);
        const page3 = await this.getUserPage(user);
        const locator = page3.locator(this.loc_Monitor_Chat_Tab_intvwr__Lnk);
        await locator.click();
    }

    public async selectBackroomChatTab(user: string) {
        console.log(user);
        const page3 = ScenarioContext.get('NewTab');
        const locator = page3.locator(this.loc_Backroom_Chat_Tab_Lnk);
        await locator.click();
    }


















}