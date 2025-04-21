import { BasePage } from '../../utils/BasePage';
import { Page } from '@playwright/test';
import { readFromYamlFilePath } from '../../utils/YamlReader';

export default class MonitorAgoraMeeting extends BasePage {
    page: Page;
    sampleRadioButtonLocator?: string;
    readonly loc_Monitor_AgoraMeetingRoom_CampaignTitle_Lbl: string;
    readonly loc_Monitor_AgoraMeetingRoom_InterviewDuration_Lbl: string;
    readonly loc_Monitor_AgoraMeetingRoom_InterviewLeaveButton_Btn: string;
    readonly loc_Monitor_AgoraMeetingRoom_InterviewLeavingConfirmationCancel_Btn: string;
    readonly loc_Monitor_AgoraMeetingRoom_InterviewLeavingConfirmationAccept_Btn: string;
    readonly loc_Monitor_AgoraMeetingRoom_EnabledVideo_Btn: string;

    readonly loc_Monitor_AgoraMeetingRoom_DisabledVideo_Btn: string;
    readonly loc_Monitor_AgoraMeetingRoom_EnabledMic_Btn: string;
    readonly loc_Monitor_AgoraMeetingRoom_DisabledMic_Btn: string;
    readonly loc_Monitor_AgoraMeetingRoom_MoreIcon_Btn: string;
    readonly loc_Monitor_AgoraMeetingRoom_PaticipantsList_Btn: string;
    readonly loc_Monitor_AgoraMeetingRoom_PaticipantsType_Lbl: string;
    readonly loc_Monitor_AgoraMeetingRoom_PaticipantsName_Lbl: string;
    readonly loc_Monitor_AgoraMeetingRoom_PaticipantsListClose_Btn: string;
    readonly loc_Monitor_AgoraMeetingRoom_ChatListClose_Btn: string;
    readonly loc_Monitor_AgoraMeetingRoom_MonitorProfile_Btn: string;
    readonly loc_Monitor_AgoraMeetingRoom_MonitorNickName_Lbl: string;
    readonly loc_Monitor_AgoraMeetingRoom_MonitorGender_Lbl: string;
    readonly loc_Monitor_AgoraMeetingRoom_MonitorPrefecture_Lbl: string;
    readonly loc_Monitor_AgoraMeetingRoom_InterviewLeavingFeedbackCancel_Btn: string;
    loc_Monitor_AgoraMeetingRoom_InterviewLeaving_Feedback_rating_Btn: string;
    loc_Monitor_AgoraMeetingRoom_InterviewLeaving_Feedback_Q1_Lbl: string;

    loc_Monitor_AgoraMeetingRoom_InterviewLeaving_Feedback_Q2_Lbl: string;

    readonly loc_Monitor_AgoraMeetingRoom_InterviewLeavingRetry_Btn: string;
    readonly loc_Monitor_CampaignDetailsPage_InterviewRoom_Btn_Agora: string;
    readonly loc_Monitor_AgoraMeetingRoom_InterviewLeavingCloseScreen_Btn: string;
    readonly loc_Monitor_CampaignDetailsPage_Paticipant_tab_Lbl: string;
    loc_Monitor_AgoraMeetingRoom_Chat_Btn: string;
    loc_Monitor_AgoraMeetingRoom_InterviewLeaving_Feedback_Answer_Txt_Box: string;
    loc_Monitor_AgoraMeetingRoom_InterviewLeaving_Feedback_Submit_Btn: string;


    constructor(page: Page) {
        super(page);
        this.page = page;

        this.loc_Monitor_AgoraMeetingRoom_CampaignTitle_Lbl = "//*[text()='CampaignTitle']";
        this.loc_Monitor_AgoraMeetingRoom_InterviewDuration_Lbl =
            "//*[text()='実施時間']/parent::*/parent::*//div[text()='InterviewDuration分']";
        this.loc_Monitor_AgoraMeetingRoom_InterviewLeaveButton_Btn = '//*[@id="control-leave-call"]'
        this.loc_Monitor_AgoraMeetingRoom_InterviewLeavingConfirmationCancel_Btn = '[id="confirmation-disAgreeButton"]';

        this.loc_Monitor_AgoraMeetingRoom_InterviewLeavingConfirmationAccept_Btn = '[id="confirmation-agreeButton"]';

        this.loc_Monitor_AgoraMeetingRoom_EnabledVideo_Btn = '//*[@id="control-video"]';
        this.loc_Monitor_AgoraMeetingRoom_DisabledVideo_Btn = '(//*[@id="control-video"]//*[@fill="white"])[2]'
        this.loc_Monitor_AgoraMeetingRoom_EnabledMic_Btn = '//*[@id="control-microphone"]';
        this.loc_Monitor_AgoraMeetingRoom_DisabledMic_Btn = '//*[@id="control-microphone"]';
        this.loc_Monitor_AgoraMeetingRoom_MoreIcon_Btn = '[id="control-more"]'
        this.loc_Monitor_AgoraMeetingRoom_PaticipantsList_Btn = '[id="control-participant"]';
        this.loc_Monitor_AgoraMeetingRoom_PaticipantsType_Lbl =
            "//*[text()='NickName']/following-sibling::div[text()='UserType']";
        this.loc_Monitor_AgoraMeetingRoom_PaticipantsName_Lbl =
            "//*[text()='モニター']/preceding-sibling::div[text()='NickName']";
        this.loc_Monitor_AgoraMeetingRoom_PaticipantsListClose_Btn = "//*[text()='参加者一覧']/parent::div/button";
        this.loc_Monitor_AgoraMeetingRoom_ChatListClose_Btn = "//*[text()='チャット']/parent::div/button//*[@class='MintIcon']"
        this.loc_Monitor_AgoraMeetingRoom_MonitorProfile_Btn = '//*[@id="control-answers"]'
        this.loc_Monitor_AgoraMeetingRoom_MonitorNickName_Lbl =
            "//*[text()='プロフィール']/parent::*//div[text()='NickName']";
        this.loc_Monitor_AgoraMeetingRoom_MonitorGender_Lbl =
            "//*[text()='プロフィール']/parent::*//div[text()='Gender']";
        this.loc_Monitor_AgoraMeetingRoom_MonitorPrefecture_Lbl =
            "//*[text()='プロフィール']/parent::*//div[text()='Prefecture']";
        this.loc_Monitor_AgoraMeetingRoom_InterviewLeavingFeedbackCancel_Btn = "//*[@id='confirmation-disAgreeButton']";
        this.loc_Monitor_AgoraMeetingRoom_InterviewLeaving_Feedback_rating_Btn = '//*[@id="alert-dialog-description"]//div[text()="rating_No"]';
        this.loc_Monitor_AgoraMeetingRoom_InterviewLeaving_Feedback_Answer_Txt_Box = '//*[@placeholder="メッセージを入力してください"]';
        this.loc_Monitor_AgoraMeetingRoom_InterviewLeaving_Feedback_Submit_Btn = "//*[text()='評価アンケートに答える']";


        this.loc_Monitor_AgoraMeetingRoom_InterviewLeaving_Feedback_Q1_Lbl = "//*[text()='Q1. 今回のインタビューはいかがでしたか？']";
        this.loc_Monitor_AgoraMeetingRoom_InterviewLeaving_Feedback_Q2_Lbl = "//*[text()='Q2. 理由などございましたらお書きください。']";

        this.loc_Monitor_AgoraMeetingRoom_InterviewLeavingRetry_Btn = "//*[text()='再入室']";
        this.loc_Monitor_CampaignDetailsPage_InterviewRoom_Btn_Agora = "//*[text()='インタビュールームに入室']"
        this.loc_Monitor_AgoraMeetingRoom_InterviewLeavingCloseScreen_Btn = "//*[text()='この画面を閉じる']"
        this.loc_Monitor_CampaignDetailsPage_Paticipant_tab_Lbl = "//*[@id='simple-tab-6']";
        this.loc_Monitor_AgoraMeetingRoom_Chat_Btn = "[id='control-chat']"
    }
    public async verifyMonitorAgoraMeetingRoomCampaingName(user: string) {
        const page = await this.getUserPage(user);
        const campaignTitle = readFromYamlFilePath('CampaignData')['campaignTitle']
        await this.locatorShouldBePresent((page.locator(this.loc_Monitor_AgoraMeetingRoom_CampaignTitle_Lbl.replace('CampaignTitle', campaignTitle))));

    }

    public async verifyMonitorAgoraMeetingRoomInterviewDuration(
        interviewDuration: string,
        user: string,
    ) {
        const page = await this.getUserPage(user);

        const locator = page.locator(
            this.loc_Monitor_AgoraMeetingRoom_InterviewDuration_Lbl.replace(
                'InterviewDuration',
                interviewDuration,
            ),
        );
        await this.locatorShouldBePresent(locator);
    }

    public async clickOnInterviewLeaveButton(user: string) {
        await this.page.reload();
        await this.waitForSecond(3);
        const page = await this.getUserPage(user);
        await page.bringToFront();
        await page.reload();
        await page.locator(this.loc_Monitor_AgoraMeetingRoom_InterviewLeaveButton_Btn).click();
        await this.waitForSecond(2);
    }

    public async clickOnInterviewLeavingConfirmationCancelButton(user: string) {
        const page = await this.getUserPage(user);
        await page.locator(this.loc_Monitor_AgoraMeetingRoom_InterviewLeavingConfirmationCancel_Btn).click();
    }

    public async clickOnInterviewLeavingConfirmationAcceptButton(user: string) {
        const page = await this.getUserPage(user);
        await page.locator(this.loc_Monitor_AgoraMeetingRoom_InterviewLeavingConfirmationAccept_Btn).click();
    }

    public async clickOnFeedbackCancelButton(user: string) {
        this.waitForSecond(2);
        const page = await this.getUserPage(user);
        await page.locator(this.loc_Monitor_AgoraMeetingRoom_InterviewLeavingFeedbackCancel_Btn).click();
    }

    public async verifyFeedbackQuestion1(user: string) {

        const page = await this.getUserPage(user);
        const Locator = await page.locator(this.loc_Monitor_AgoraMeetingRoom_InterviewLeaving_Feedback_Q1_Lbl);


        await this.locatorShouldBePresent(Locator);
    }


    public async verifyFeedbackQuestion2(user: string) {

        const page = await this.getUserPage(user);
        const Locator = await page.locator(this.loc_Monitor_AgoraMeetingRoom_InterviewLeaving_Feedback_Q2_Lbl);


        await this.locatorShouldBePresent(Locator);
    }


    public async clickRatingBtn(rating: string, user: string) {

        const page = await this.getUserPage(user);

        if (rating == "1") {
            await page.locator(this.loc_Monitor_AgoraMeetingRoom_InterviewLeaving_Feedback_rating_Btn.replaceAll('rating_No', '1')).click();
        }
        else if (rating == "2") {
            await page.locator(this.loc_Monitor_AgoraMeetingRoom_InterviewLeaving_Feedback_rating_Btn.replaceAll('rating_No', '2')).click();
        }
        else if (rating == "3") {
            await page.locator(this.loc_Monitor_AgoraMeetingRoom_InterviewLeaving_Feedback_rating_Btn.replaceAll('rating_No', '3')).click();
        }
        else if (rating == "4") {
            await page.locator(this.loc_Monitor_AgoraMeetingRoom_InterviewLeaving_Feedback_rating_Btn.replaceAll('rating_No', '4')).click();
        }

        else if (rating == "5") {
            await page.locator(this.loc_Monitor_AgoraMeetingRoom_InterviewLeaving_Feedback_rating_Btn.replaceAll('rating_No', '5')).click();
        }

        else {
            console.log("Invalid Rating: " + rating);
        }




    }




    public async answerQuestion2(answer: string, user: string) {

        const page = await this.getUserPage(user);
        await page.locator(this.loc_Monitor_AgoraMeetingRoom_InterviewLeaving_Feedback_Answer_Txt_Box).fill(answer);
    }


    public async clickFeedbackSubmitButton(user: string) {

        const page = await this.getUserPage(user);
        await page.locator(this.loc_Monitor_AgoraMeetingRoom_InterviewLeaving_Feedback_Submit_Btn).click();
    }










    public async clickRetryButton(user: string) {
        const page = await this.getUserPage(user);
        await page.locator(this.loc_Monitor_AgoraMeetingRoom_InterviewLeavingRetry_Btn).click();
    }


    public async verifySettingsPage(user: string) {
        const page = await this.getUserPage(user);
        await this.locatorShouldBePresent(page.locator(this.loc_Monitor_CampaignDetailsPage_InterviewRoom_Btn_Agora));
    }



    public async clickCloseScreenButton(user: string) {
        const page = await this.getUserPage(user);
        await page.locator(this.loc_Monitor_AgoraMeetingRoom_InterviewLeavingCloseScreen_Btn).click();
    }

    public async verifyMonitorNavigation(user: string) {
        const page = await this.getUserPage(user);
        await this.locatorShouldBePresent(page.locator(this.loc_Monitor_CampaignDetailsPage_Paticipant_tab_Lbl));
    }






    public async clickOnMonitorAgoraMeetingRoomEnabledVideoButton(user: string) {
        const page = await this.getUserPage(user);
        await page.locator(this.loc_Monitor_AgoraMeetingRoom_EnabledVideo_Btn).click();
    }

    public async clickOnMonitorAgoraMeetingRoomDisabledVideoButton(user: string) {

        const page = await this.getUserPage(user);
        await page.locator(this.loc_Monitor_AgoraMeetingRoom_DisabledVideo_Btn).click();
    }

    public async clickOnMonitorAgoraMeetingRoomEnabledMicButton(user: string) {

        const page = await this.getUserPage(user);
        await page.locator(this.loc_Monitor_AgoraMeetingRoom_EnabledMic_Btn).click();
    }

    public async clickOnMonitorAgoraMeetingRoomDisabledMicButton(user: string) {
        const page = await this.getUserPage(user);

        await page.locator(this.loc_Monitor_AgoraMeetingRoom_DisabledMic_Btn).click();
    }

    public async clickOnMonitorAgoraMeetingRoomMoreIcon(user: string) {
        await this.waitForSecond(5);
        const page = await this.getUserPage(user);
        await page.bringToFront();
        console.log("icon url  :" + await page.url());
        await page.locator(this.loc_Monitor_AgoraMeetingRoom_MoreIcon_Btn).click();
    }

    public async clickOnMonitorAgoraMeetingRoomParticipantsList(user: string) {
        const page = await this.getUserPage(user);
        await page.locator(this.loc_Monitor_AgoraMeetingRoom_PaticipantsList_Btn).click();
        await this.waitForSecond(2);
    }

    public async verifyMonitorAgoraMeetingRoomParticipantsType(
        username: string,
        userType: string,
    ) {


        const page = await this.getUserPage(username);
        const locator = page.locator(
            this.loc_Monitor_AgoraMeetingRoom_PaticipantsType_Lbl
                .replace('UserType', userType)
                .replace('NickName', username),
        );
        await this.locatorShouldBePresent(locator);
    }

    public async verifyMonitorAgoraMeetingRoomParticipantsName(
        nickName: string,
        userType: string,

    ) {

        const name = readFromYamlFilePath('CampaignData')[nickName]
        const page = await this.getUserPage(userType);
        const locator = page.locator(
            this.loc_Monitor_AgoraMeetingRoom_PaticipantsName_Lbl
                .replace('UserType', userType)
                .replace('NickName', name),
        );

        await this.locatorShouldBePresent(locator);
    }

    public async clickOnMonitorAgoraMeetingRoomParticipantsListCloseButton(user: string) {
        const page = await this.getUserPage(user);
        await page.locator(this.loc_Monitor_AgoraMeetingRoom_PaticipantsListClose_Btn).click();
        await this.waitForSecond(4);
    }

    public async clickOnMonitorChatButton(user: string) {
        const page = await this.getUserPage(user);
        await page.locator(this.loc_Monitor_AgoraMeetingRoom_Chat_Btn).click();
    }
    public async clickOnMonitorAgoraMeetingRoomChatListCloseButton(user: string) {
        const page = await this.getUserPage(user);
        await page.locator(this.loc_Monitor_AgoraMeetingRoom_ChatListClose_Btn).click();
    }












}
