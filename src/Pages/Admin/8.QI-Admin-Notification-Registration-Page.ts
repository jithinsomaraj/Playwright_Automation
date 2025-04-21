import { BasePage } from '../../utils/BasePage';
import { Page } from '@playwright/test';
import ScenarioContext from '../../support/ScenarioContext';
import { readFromYamlFilePath } from '../../utils/YamlReader';
import * as fs from 'fs';
import * as yaml from 'js-yaml';





export class AdminNotificationList extends BasePage {

    loc_Admin_NoticeListlnk: string;
    loc_Admin_NoticeList_title_txt: string;
    loc_Admin_NoticeList_addnoticeBtn: string;
    loc_Admin_NoticeList_monitorcheckbox: string;
    loc_Admin_NoticeList_Clientcheckbox: string;
    loc_Admin_NoticeList_NoticeTitle: string;
    loc_Admin_NoticeList_NoticeContent: string;
    loc_Admin_NoticeList_Notice_publish: string;
    loc_Admin_NoticeList_Notice_draft: string;
    loc_Admin_NoticeList_Notice_draftdelete: string;
    // loc_Admin_NoticeList_Notice_Listdraftdelete: string;
    loc_Admin_NoticeList_listtitle: string;
    loc_Admin_NoticeList_nextnutton: string;
    loc_Admin_NoticeList_listSubject: string;
    loc_Admin_NoticeList_liststatus: string;
    loc_Admin_NoticeList_Noticeconfirm: string;
    loc_Admin_NoticeList_listdelete: string;



    constructor(page3: Page) {
        super(page3);
        this.page = page3;


        this.loc_Admin_NoticeListlnk = 'menuitem-6'
        this.loc_Admin_NoticeList_title_txt = "//*[@id='main-container']//*[text()='お知らせ']"
        this.loc_Admin_NoticeList_addnoticeBtn = '//*[text()="新規作成"]';
        this.loc_Admin_NoticeList_monitorcheckbox = '//*[@name="monitor"]';
        this.loc_Admin_NoticeList_Clientcheckbox = '//*[@name="customer"]';
        this.loc_Admin_NoticeList_NoticeTitle = 'タイトルを入力してください';
        this.loc_Admin_NoticeList_NoticeContent = 'content';
        this.loc_Admin_NoticeList_Notice_publish = 'release-button';
        this.loc_Admin_NoticeList_Notice_draft = 'draft-button';

        this.loc_Admin_NoticeList_Notice_draftdelete = 'edit-draft-delete-button';
        this.loc_Admin_NoticeList_Noticeconfirm = 'modal-onAgree';

        this.loc_Admin_NoticeList_listtitle = '//*[@data-testid="titlenumber"]/child::div/child::div[(text()="Title")]';
        this.loc_Admin_NoticeList_listSubject = '//*[@data-testid="bodynumber"]/child::div/child::div[(text()="subject")]';
        this.loc_Admin_NoticeList_liststatus = '//*[@data-testid="statusnumber"]/child::button[(text()="statustext")]';
        this.loc_Admin_NoticeList_listdelete = 'actionnumber';

        this.loc_Admin_NoticeList_nextnutton = 'Go to next page';




    }


    public async clickonNoticeListMenuLnk() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const locator = await page3.getByTestId(this.loc_Admin_NoticeListlnk);
        await locator.click();

    }


    public async noticelistpageNavigationVerify() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const locator = await page3.locator(this.loc_Admin_NoticeList_title_txt);
        console.log(locator);
        await this.locatorShouldBePresent(locator);

    }
    public async clickonAddnotice() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const locator = await page3.locator(this.loc_Admin_NoticeList_addnoticeBtn);
        await locator.click();

    }




    public async clickonMonitorchckbox() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const locator = await page3.locator(this.loc_Admin_NoticeList_monitorcheckbox);
        await locator.click();

    }

    public async clickonClientchckbox() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const locator = await page3.locator(this.loc_Admin_NoticeList_Clientcheckbox);
        await locator.click();

    }


    public async enterSubject(subjecttext: string) {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const currentTimeEpoch = await Math.floor(new Date().getTime() / 1000);
        const newsubject = await ("Notice Title sent at_" + currentTimeEpoch);
        console.log(newsubject)
        await this.updatenoticedatetoYAML(subjecttext, newsubject);
        const subject = await readFromYamlFilePath('AdminNoticeData')[subjecttext];
        await this.waitForSecond(1);
        const locator = await page3.getByPlaceholder(this.loc_Admin_NoticeList_NoticeTitle);
        await locator.fill(subject);

    }


    public async enterContent(contenttext: string) {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const currentTimeEpoch = await Math.floor(new Date().getTime() / 1000);
        const newcontent = await ("Notice Content sent at_" + currentTimeEpoch);
        console.log(newcontent)
        await this.updatenoticedatetoYAML(contenttext, newcontent);
        const subject = await readFromYamlFilePath('AdminNoticeData')[contenttext];
        await this.waitForSecond(1);
        const locator = await page3.getByTestId(this.loc_Admin_NoticeList_NoticeContent);
        await locator.fill(subject);

    }

    public async clickonpublishbtn() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const locator = await page3.getByTestId(this.loc_Admin_NoticeList_Notice_publish);
        await locator.click();

    }

    public async clickonpublishconfirmbtn() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const locator = await page3.getByTestId(this.loc_Admin_NoticeList_Noticeconfirm);
        await locator.click();
        await this.waitForSecond(2);

    }


    public async clickondraftbtn() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const locator = await page3.getByTestId(this.loc_Admin_NoticeList_Notice_draft);
        await locator.click();
        await this.waitForSecond(3);
    }


    public async clickondeletebtn() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const locator = await page3.getByTestId(this.loc_Admin_NoticeList_Notice_draftdelete);
        await locator.click();
        await this.waitForSecond(3);

    }



    public async findnotice(status: string, titletag: string, subjecttag: string) {

        const page3 = ScenarioContext.get('NewTab');
        this.waitForSecond(3);
        const titlevalue = readFromYamlFilePath('AdminNoticeData')[titletag];

        var count = 0;
        while (count === 0) {

            for (let i = 0; i <= 9; i++) {
                const title = "title" + i;
                const locator = await page3.locator((this.loc_Admin_NoticeList_listtitle)
                    .replace('Title', titlevalue).replace('titlenumber', title.toString()));
                console.log(locator);
                this.waitForSecond(1);

                count = await locator.count();
                this.waitForSecond(1);
                if (count === 1) {
                    console.log("Notice found");
                    this.waitForSecond(2);
                    await this.verifynoticedetails(i, status, subjecttag)
                    return; // Exit the function once notice is found
                }
            }

            const nextpage = await page3.getByLabel(this.loc_Admin_NoticeList_nextnutton);

            if (await nextpage.isDisabled()) {
                console.log("Notice not found");
                // Handle the scenario where the notice is not found
                return; // Exit the function if next page is disabled
            } else {
                await nextpage.click();

                this.waitForSecond(2);
            }
        }
    }




    public async findandclick(titletag: string) {

        const page3 = ScenarioContext.get('NewTab');
        this.waitForSecond(3);
        const titlevalue = readFromYamlFilePath('AdminNoticeData')[titletag];

        var count = 0;
        while (count === 0) {

            for (let i = 0; i <= 9; i++) {
                const title = "title" + i;
                const locator = await page3.locator((this.loc_Admin_NoticeList_listtitle)
                    .replace('Title', titlevalue).replace('titlenumber', title.toString()));
                console.log(locator);
                this.waitForSecond(1);

                count = await locator.count();
                this.waitForSecond(1);
                if (count === 1) {
                    console.log("Notice found");
                    this.waitForSecond(2);
                    await locator.click();
                    return; // Exit the function once notice is found
                }
            }

            const nextpage = await page3.getByLabel(this.loc_Admin_NoticeList_nextnutton);

            if (await nextpage.isDisabled()) {
                console.log("Notice not found");

                return; // Exit the function if next page is disabled
            } else {
                await nextpage.click();

                this.waitForSecond(2);
            }
        }
    }


    public async finddeletednotice(titletag: string) {

        const page3 = ScenarioContext.get('NewTab');
        this.waitForSecond(3);
        const titlevalue = readFromYamlFilePath('AdminNoticeData')[titletag];

        var count = 0;
        while (count === 0) {

            for (let i = 0; i <= 9; i++) {
                const title = "title" + i;
                const locator = await page3.locator((this.loc_Admin_NoticeList_listtitle)
                    .replace('Title', titlevalue).replace('titlenumber', title.toString()));
                console.log(locator);
                this.waitForSecond(1);

                count = await locator.count();
                this.waitForSecond(1);
                if (count === 1) {
                    throw new Error("Notice found");

                }
            }

            const nextpage = await page3.getByLabel(this.loc_Admin_NoticeList_nextnutton);

            if (await nextpage.isDisabled()) {
                console.log("Notice not found");

                return; // Exit the function if next page is disabled
            } else {
                await nextpage.click();

                this.waitForSecond(2);
            }
        }
    }


    public async findandclickdelete(titletag: string) {

        const page3 = ScenarioContext.get('NewTab');
        this.waitForSecond(3);
        const titlevalue = readFromYamlFilePath('AdminNoticeData')[titletag];

        var count = 0;
        while (count === 0) {

            for (let i = 0; i <= 9; i++) {
                const title = "title" + i;
                const locator = await page3.locator((this.loc_Admin_NoticeList_listtitle)
                    .replace('Title', titlevalue).replace('titlenumber', title.toString()));
                console.log(locator);
                this.waitForSecond(1);

                count = await locator.count();
                console.log(count)
                this.waitForSecond(1);
                if (count === 1) {
                    const locator = await page3.getByTestId((this.loc_Admin_NoticeList_listdelete).replace('number', i.toString()));
                    await locator.click();
                    return;
                }
            }

            const nextpage = await page3.getByLabel(this.loc_Admin_NoticeList_nextnutton);

            if (await nextpage.isDisabled()) {
                console.log("Notice not found");

                return; // Exit the function if next page is disabled
            } else {
                await nextpage.click();

                this.waitForSecond(2);
            }
        }
    }






    public async updatenoticedatetoYAML(fieldToUpdate: string, newValue: string) {
        try {
            // Read YAML file
            const yamlFile = fs.readFileSync('Fixtures/data.yaml', 'utf8');

            // Parse YAML content
            const data: any = yaml.load(yamlFile);

            // Update the desired field
            if (fieldToUpdate === 'Monitor_Noticetitle') {
                data.AdminNoticeData[0].Monitor_Noticetitle = newValue;
            } else if (fieldToUpdate === 'Monitor_Noticesubject') {
                data.AdminNoticeData[1].Monitor_Noticesubject = newValue;
            } else if (fieldToUpdate === 'Client_Noticetitle') {
                data.AdminNoticeData[2].Client_Noticetitle = newValue;
            } else if (fieldToUpdate === 'Client_Noticesubject') {
                data.AdminNoticeData[3].Client_Noticesubject = newValue;
            } else if (fieldToUpdate === 'Draft_Noticetitle') {
                data.AdminNoticeData[4].Draft_Noticetitle = newValue;
            } else if (fieldToUpdate === 'Draft_Noticesubject') {
                data.AdminNoticeData[5].Draft_Noticesubject = newValue;
            } else {
                console.error('Invalid fieldToUpdate parameter');
                return;
            }

            // Convert data back to YAML format
            const updatedYAML = yaml.dump(data);

            // Write updated YAML back to file
            fs.writeFileSync('Fixtures/data.yaml', updatedYAML, 'utf8');

            console.log('YAML file updated successfully.');
        } catch (error) {
            console.error('Error updating YAML file:', error);
        }
    }



    public async verifynoticedetails(numbervalue: number, statusvalue: string, subjecttag: string) {
        const page3 = ScenarioContext.get('NewTab');

        const subjectvalue = await readFromYamlFilePath('AdminNoticeData')[subjecttag];
        this.waitForSecond(2);
        const subjectlocator = await page3.locator((this.loc_Admin_NoticeList_listSubject).replace('number', numbervalue.toString()).replace('subject', subjectvalue));
        console.log("locator: " + subjectlocator);
        await this.locatorShouldBePresent(subjectlocator);

        const statuslocator = await page3.locator((this.loc_Admin_NoticeList_liststatus).replace('number', numbervalue.toString()).replace('statustext', statusvalue));
        console.log("locator: " + statuslocator);
        await this.locatorShouldBePresent(statuslocator);



    }





}



























