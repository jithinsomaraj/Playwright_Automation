import { BasePage } from '../../utils/BasePage';
import { Page } from '@playwright/test';

export default class MonitorFeedback extends BasePage {
    page: Page;
    readonly loc_Monitor_CompletionTab_Lnk_agora: string;

    readonly loc_Monitor_CompletionTab_Project_status_Lbl: string;

    readonly loc_Monitor_CompletionTab_Project_Feedback_Q1_Lbl: string;

    readonly loc_Monitor_CompletionTab_Project_Feedback_Q2_Lbl: string;

    readonly loc_Monitor_CompletionTab_Project_Feedback_rating_Btn: string;
    readonly loc_Monitor_CompletionTab_Project_Feedback_Answer_Txt_Box: string;
    readonly loc_Monitor_CompletionTab_Project_Feedback_Submit_Btn: string;

    readonly loc_Monitor_CompletionTab_Project_Feedback_Sucess_Msg: string;

    readonly loc_Monitor_CompletionTab_Project_Feedback_Sucess_Close_Btn: string;



    constructor(page: Page) {
        super(page);
        this.page = page;
        this.loc_Monitor_CompletionTab_Lnk_agora = "//*[@id='simple-tab-2']/div/div[text()='完了']";
        this.loc_Monitor_CompletionTab_Project_status_Lbl = "//*[@id='status.completed'][text()='Project_status']";
        this.loc_Monitor_CompletionTab_Project_Feedback_Q1_Lbl = "//*[text()='Q1. 今回のインタビューはいかがでしたか？']";

        this.loc_Monitor_CompletionTab_Project_Feedback_Q2_Lbl = "//*[text()='Q2. 理由などございましたらお書きください']";


        this.loc_Monitor_CompletionTab_Project_Feedback_rating_Btn = "//*[@id='rating_No']/div[1]/div/div[text()='rating_No']";
        this.loc_Monitor_CompletionTab_Project_Feedback_Answer_Txt_Box = "//*[@data-testid='evaluation-input']";
        this.loc_Monitor_CompletionTab_Project_Feedback_Submit_Btn = "//*[@data-testid='evaluation-submit']";
        this.loc_Monitor_CompletionTab_Project_Feedback_Sucess_Msg = "//*[@id='alert-dialog-title']/div[text()='回答ありがとうございます']";
        this.loc_Monitor_CompletionTab_Project_Feedback_Sucess_Close_Btn = "//*[@id='confirmation-agreeButton']";






    }

    public async clickOnCompletionTab(user: string) {

        const page = await this.getUserPage(user);
        await page.locator(this.loc_Monitor_CompletionTab_Lnk_agora).click();
    }

    public async verifyProjectStatus(status: string, user: string) {

        const page = await this.getUserPage(user);
        await this.locatorShouldBePresent(page.locator(this.loc_Monitor_CompletionTab_Project_status_Lbl.replace('Project_status', status)));
    }


    public async verifyFeedbackQuestion1(user: string) {

        console.log(this.loc_Monitor_CompletionTab_Project_Feedback_Q1_Lbl);
        const page = await this.getUserPage(user);
        await this.locatorShouldBePresent(page.locator(this.loc_Monitor_CompletionTab_Project_Feedback_Q1_Lbl));
    }

    public async verifyFeedbackQuestion2(user: string) {

        const page = await this.getUserPage(user);
        await this.locatorShouldBePresent(page.locator(this.loc_Monitor_CompletionTab_Project_Feedback_Q2_Lbl));
    }

    public async clickRatingBtn(rating: string, user: string) {

        const page = await this.getUserPage(user);

        if (rating == "1") {
            await page.locator(this.loc_Monitor_CompletionTab_Project_Feedback_rating_Btn.replaceAll('rating_No', '1')).click();
        }
        else if (rating == "2") {
            await page.locator(this.loc_Monitor_CompletionTab_Project_Feedback_rating_Btn.replaceAll('rating_No', '2')).click();
        }
        else if (rating == "3") {
            await page.locator(this.loc_Monitor_CompletionTab_Project_Feedback_rating_Btn.replaceAll('rating_No', '3')).click();
        }
        else if (rating == "4") {
            await page.locator(this.loc_Monitor_CompletionTab_Project_Feedback_rating_Btn.replaceAll('rating_No', '4')).click();
        }

        else if (rating == "5") {
            await page.locator(this.loc_Monitor_CompletionTab_Project_Feedback_rating_Btn.replaceAll('rating_No', '5')).click();
        }

        else {
            console.log("Invalid Rating: " + rating);
        }




    }

    public async answerQuestion2(answer: string, user: string) {

        const page = await this.getUserPage(user);
        await page.locator(this.loc_Monitor_CompletionTab_Project_Feedback_Answer_Txt_Box).fill(answer);
    }

    public async clickFeedbackSubmitButton(user: string) {

        const page = await this.getUserPage(user);
        await page.locator(this.loc_Monitor_CompletionTab_Project_Feedback_Submit_Btn).click();
    }


    public async verifyFeedbackSuccessMessage(user: string) {

        const page = await this.getUserPage(user);
        await this.locatorShouldBePresent(page.locator(this.loc_Monitor_CompletionTab_Project_Feedback_Sucess_Msg));
    }


    public async clickSuccessMessageCloseButton(user: string) {

        const page = await this.getUserPage(user);
        await (page.locator(this.loc_Monitor_CompletionTab_Project_Feedback_Sucess_Close_Btn)).click();
    }




}