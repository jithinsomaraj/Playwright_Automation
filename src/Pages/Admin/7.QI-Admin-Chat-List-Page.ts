import { BasePage } from '../../utils/BasePage';
import { Page } from '@playwright/test';
import ScenarioContext from '../../support/ScenarioContext';
import { readFromYamlFilePath } from '../../utils/YamlReader';



// import path from 'path';
// import { readFromYamlFilePath } from '../../utils/YamlReader';
// import * as fs from 'fs';
// import * as yaml from 'js-yaml';





export class AdminChatList extends BasePage {

    loc_Admin_ChatListlnk: string;
    loc_Admin_ChatList_title_txt: string;
    loc_Admin_ChatList_NG_chkbx: string;
    loc_Admin_ChatList_OK_chkbx: string;

    loc_Admin_ChatList_receive_radio: string;
    loc_Admin_ChatList_sent_radio: string;

    loc_Admin_ChatList_implementationsearchRangeClear: string;
    loc_Admin_ChatList_implementationsearchRange: string;
    loc_Admin_ChatList_implementationsearchdate: string;
    loc_Admin_ChatList_chattxt: string;
    loc_Admin_ChatList_CustID: string;
    loc_Admin_ChatList_Custname: string;
    loc_Admin_ChatList_MonitorID: string;
    loc_Admin_ChatList_Nickname: string;
    loc_Admin_ChatList_CampaignName: string;
    loc_Admin_ChatList_search_Btn: String;
    loc_Admin_ChatList_result_status: String;
    loc_Admin_ChatList_result_time: String;
    loc_Admin_ChatList_result_message: String;
    loc_Admin_ChatList_result_senderID: String;
    loc_Admin_ChatList_result_senderName: String;
    loc_Admin_ChatList_result_receiverID: String;
    loc_Admin_ChatList_result_receiverName: String;
    loc_Admin_ChatList_result_CampaignName: String;
    loc_Admin_ChatList_result_NGMessage: String;



    constructor(page3: Page) {
        super(page3);
        this.page = page3;


        this.loc_Admin_ChatListlnk = 'menuitem-1'
        this.loc_Admin_ChatList_title_txt = "//*[@id='main']//*[text()='チャットチェック']"
        this.loc_Admin_ChatList_NG_chkbx = 'chat-history-filter-transmission-result-2'
        this.loc_Admin_ChatList_OK_chkbx = "chat-history-filter-transmission-result-1"
        this.loc_Admin_ChatList_sent_radio = 'chat-history-filter-sendby-1'
        this.loc_Admin_ChatList_receive_radio = 'chat-history-filter-sendby-2'


        this.loc_Admin_ChatList_implementationsearchRangeClear = 'ClearIcon'
        this.loc_Admin_ChatList_implementationsearchRange = 'top-page-filter-implementation-period'
        this.loc_Admin_ChatList_implementationsearchdate = '//*[@data-timestamp="starttimestamp"]'

        this.loc_Admin_ChatList_chattxt = 'chat-history-filter-chat-content'
        this.loc_Admin_ChatList_CustID = 'chat-history-filter-customer-id'
        this.loc_Admin_ChatList_Custname = 'chat-history-filter-customer-name'
        this.loc_Admin_ChatList_MonitorID = 'chat-history-filter-monitor-id'
        this.loc_Admin_ChatList_Nickname = 'chat-history-filter-nickname'
        this.loc_Admin_ChatList_CampaignName = 'chat-history.filter.interview-title'
        this.loc_Admin_ChatList_search_Btn = 'filter-submit'


        this.loc_Admin_ChatList_result_status = "//*[@data-testid='transmissionResult0']//*[(text()='status')]"
        this.loc_Admin_ChatList_result_time = "//*[@data-testid='sendAt0']//*[(text()='time')]"
        this.loc_Admin_ChatList_result_message = "//*[@data-testid='chatContent0']//*[(text()='message')]"
        this.loc_Admin_ChatList_result_senderID = "//*[@data-testid='senderId0']//*[(text()='senderID')]"
        this.loc_Admin_ChatList_result_senderName = "//*[@data-testid='senderName0']//*[(text()='sendersName')]"
        this.loc_Admin_ChatList_result_receiverID = "//*[@data-testid='receiverId0']//*[(text()='receiverID')]"
        this.loc_Admin_ChatList_result_receiverName = "//*[@data-testid='receiverName0']//*[(text()='receiversName')]"
        this.loc_Admin_ChatList_result_CampaignName = "//*[@data-testid='interviewTitle0']//*[(text()='CampaignName')]"



        this.loc_Admin_ChatList_result_NGMessage = '//div[@class="MuiBox-root css-0" and span[@data-testid="isNgWord" and text()="NotGoodMessage"] and contains(text(), "additionaltext")]'


    }


    public async clickonChatListMenuLnk() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const locator = await page3.getByTestId(this.loc_Admin_ChatListlnk);
        await locator.click();

    }


    public async chatlistpageNavigationVerify() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const locator = await page3.locator(this.loc_Admin_ChatList_title_txt);
        console.log(locator);
        await this.locatorShouldBePresent(locator);

    }


    public async enterImplementationsearchDates() {
        const page3 = ScenarioContext.get('NewTab');

        const clear = page3.getByTestId(this.loc_Admin_ChatList_implementationsearchRangeClear);
        await clear.click();
        const opencalendar = page3.getByTestId(this.loc_Admin_ChatList_implementationsearchRange);
        await opencalendar.click();

        const startdate = readFromYamlFilePath('AdminCampaignData')['StartDate'];
        const enddate = readFromYamlFilePath('AdminCampaignData')['EndDate'];

        const epochstartdate = this.epochtodate(startdate);
        const epochenddate = this.epochtodate(enddate);

        await this.waitForSecond(2);
        const startdateselect = page3.locator((this.loc_Admin_ChatList_implementationsearchdate).replace('starttimestamp', (await epochstartdate).toString()));
        await startdateselect.click();

        const enddateselect = page3.locator((this.loc_Admin_ChatList_implementationsearchdate).replace('starttimestamp', (await epochenddate).toString()));
        await enddateselect.click();


    }

    public async selectOKcheckbox() {
        const page3 = ScenarioContext.get('NewTab');
        const locator = page3.getByLabel(this.loc_Admin_ChatList_OK_chkbx);
        await locator.click();

    }

    public async selectNGcheckbox() {
        const page3 = ScenarioContext.get('NewTab');
        const locator = page3.getByLabel(this.loc_Admin_ChatList_NG_chkbx);
        await locator.click();

    }


    public async selectSentRadio() {
        const page3 = ScenarioContext.get('NewTab');
        const locator = page3.getByLabel(this.loc_Admin_ChatList_sent_radio);
        await locator.click();

    }

    public async selectreceiveRadio() {
        const page3 = ScenarioContext.get('NewTab');
        const locator = page3.getByLabel(this.loc_Admin_ChatList_receive_radio);
        await locator.click();

    }

    public async enterMessagetext(MessagetextFromClient_OK: string) {
        const message = readFromYamlFilePath('AdminChatList')[MessagetextFromClient_OK];
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByTestId(this.loc_Admin_ChatList_chattxt);
        await locator.fill(message);

    }

    public async enterCustomerName(Customername: string) {
        const name = readFromYamlFilePath('AdminChatList')[Customername];
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByTestId(this.loc_Admin_ChatList_Custname);
        await locator.fill(name);

    }


    public async entermonitornickName(Monitornickname: string) {
        const name = readFromYamlFilePath('AdminChatList')[Monitornickname];
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByTestId(this.loc_Admin_ChatList_Nickname);
        await locator.fill(name);

    }

    public async enterCampaignName(CampaignName: string) {
        const name = readFromYamlFilePath('AdminChatList')[CampaignName];
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByTestId(this.loc_Admin_ChatList_CampaignName);
        await locator.fill(name);

    }

    public async search() {
        const page3 = ScenarioContext.get('NewTab');
        const locator = await page3.getByTestId(this.loc_Admin_ChatList_search_Btn);
        await locator.click();

    }

    public async verifychatstatus(status: string) {
        const page3 = ScenarioContext.get('NewTab');
        const statuslocator = await page3.locator(this.loc_Admin_ChatList_result_status.replace('status', status));
        console.log("locator: " + statuslocator);
        await this.locatorShouldBePresent(statuslocator);

    }


    public async verifymessagetext(Message: string) {
        const page3 = ScenarioContext.get('NewTab');
        const Messagetext = readFromYamlFilePath('AdminChatList')[Message];
        const messagelocator = await page3.locator(this.loc_Admin_ChatList_result_message.replace('message', Messagetext));
        console.log("locator: " + messagelocator);
        await this.locatorShouldBePresent(messagelocator);

    }




    public async verifyNGmessagetext(Message: string, additionaltext: string) {
        const page3 = ScenarioContext.get('NewTab');
        const Messagetext = readFromYamlFilePath('AdminChatList')[Message];
        const Additionaltext = readFromYamlFilePath('AdminChatList')[additionaltext];
        const messagelocator = await page3.locator(this.loc_Admin_ChatList_result_NGMessage.replace('NotGoodMessage', Messagetext).replace('additionaltext', Additionaltext));
        console.log("locator: " + messagelocator);
        await this.locatorShouldBePresent(messagelocator);

    }


    public async verifysendername(sendername: string) {
        const page3 = ScenarioContext.get('NewTab');
        const SenderName = readFromYamlFilePath('AdminChatList')[sendername];
        const customernamelocator = await page3.locator(this.loc_Admin_ChatList_result_senderName.replace('sendersName', SenderName));
        console.log("locator: " + customernamelocator);
        await this.locatorShouldBePresent(customernamelocator);
    }

    public async verifycampaignname(campaignname: string) {
        const page3 = ScenarioContext.get('NewTab');
        const Campaignname = readFromYamlFilePath('AdminChatList')[campaignname];
        const Campaignnamelocator = await page3.locator(this.loc_Admin_ChatList_result_CampaignName.replace('CampaignName', Campaignname));
        console.log("locator: " + Campaignnamelocator);
        await this.locatorShouldBePresent(Campaignnamelocator);

    }

    public async verifyreceivername(receivername: string) {
        const page3 = ScenarioContext.get('NewTab');
        const receiver = readFromYamlFilePath('AdminChatList')[receivername];
        const customernamelocator = await page3.locator(this.loc_Admin_ChatList_result_receiverName.replace('receiversName', receiver));
        console.log("locator: " + customernamelocator);
        await this.locatorShouldBePresent(customernamelocator);

    }


}



























