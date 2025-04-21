import { BasePage } from '../../utils/BasePage';
import { Page } from '@playwright/test';
import ScenarioContext from '../../support/ScenarioContext';
import { readFromYamlFilePath } from '../../utils/YamlReader';
// import * as fs from 'fs';
// import * as yaml from 'js-yaml';





export class Usermanagement extends BasePage {

    loc_Admin_NoticeListlnk: string;
    loc_Admin_Usermanagment_title_txt: string;
    loc_Admin_Usermanagement_loginID: string;
    loc_Admin_Usermanagement_name: string;
    loc_Admin_Usermanagement_email: string;
    loc_Admin_Usermanagement_searchsubmit: string;
    loc_Admin_Usermanagement_resultauthority: string;
    loc_Admin_Usermanagement_resultloginid: string;
    loc_Admin_Usermanagement_resultname: string;
    loc_Admin_Usermanagement_resultemail: string;
    loc_Admin_Usermanagement_resultaction: string;
    loc_Admin_Usermanagement_Servicemanager: string;
    loc_Admin_Usermanagement_Campaignemanager: string;
    loc_Admin_Usermanagement_Operator: string;
    loc_Admin_Usermanagement_Servicemanager_radioBtn: string;
    loc_Admin_Usermanagement_Campaignemanager_radioBtn: string;
    loc_Admin_Usermanagement_Operator_radioBtn: string;
    loc_Admin_Usermanagement_editsubmit: string;





    constructor(page3: Page) {
        super(page3);
        this.page = page3;


        this.loc_Admin_NoticeListlnk = 'menuitem-4'
        this.loc_Admin_Usermanagment_title_txt = "//*[@id='main-container']//*[text()='運営ユーザー']"
        this.loc_Admin_Usermanagement_loginID = '1234567';
        this.loc_Admin_Usermanagement_name = '田中太郎';
        this.loc_Admin_Usermanagement_email = 'quickinterviewdirect@example.com';
        this.loc_Admin_Usermanagement_Servicemanager = 'authorization-settings-1';
        this.loc_Admin_Usermanagement_Campaignemanager = 'authorization-settings-2';
        this.loc_Admin_Usermanagement_Operator = 'authorization-settings-3';
        this.loc_Admin_Usermanagement_searchsubmit = 'filter-submit';


        this.loc_Admin_Usermanagement_resultauthority = "//*[@data-testid='userType0']//*[(text()='TextTorReplace')]";
        this.loc_Admin_Usermanagement_resultloginid = "//*[@data-testid='operatorId0']//*[(text()='TextTorReplace')]";
        this.loc_Admin_Usermanagement_resultname = "//*[@data-testid='name0']//*[(text()='TextTorReplace')]";
        this.loc_Admin_Usermanagement_resultemail = "//*[@data-testid='email0']//*[(text()='TextTorReplace')]";
        this.loc_Admin_Usermanagement_resultaction = 'action0';


        this.loc_Admin_Usermanagement_Servicemanager_radioBtn = 'permission-1';
        this.loc_Admin_Usermanagement_Campaignemanager_radioBtn = 'permission-2';
        this.loc_Admin_Usermanagement_Operator_radioBtn = 'permission-3';








        // ='所属部署を入力してください';
        // ='役職を入力してください';
        // ='メールアドレスを入力してください';
        // ='氏名を入力してください';

        this.loc_Admin_Usermanagement_editsubmit = 'form-submit';





    }


    public async clickonUsermanagementMenuLnk() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const locator = await page3.getByTestId(this.loc_Admin_NoticeListlnk);


        await locator.click();

    }


    public async UsermanagementpageNavigationVerify() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const locator = await page3.locator(this.loc_Admin_Usermanagment_title_txt);
        console.log(locator);
        await this.locatorShouldBePresent(locator);

    }

    public async enterloginid(loginid: string) {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        console.log(loginid);

        if (loginid == "OperatorLoginID") {
            const loginiddata = await readFromYamlFilePath('AdminusermanagementData')[loginid];
            const locator = await page3.getByPlaceholder(this.loc_Admin_Usermanagement_loginID);
            await locator.fill(loginiddata);
        } else if (loginid == "CampaignmanagerLoginID") {
            const loginiddata = await readFromYamlFilePath('AdminusermanagementData')[loginid];
            const locator = await page3.getByPlaceholder(this.loc_Admin_Usermanagement_loginID);
            await locator.fill(loginiddata);
        } else if (loginid == "ServicemanagerLoginID") {
            const loginiddata = await readFromYamlFilePath('AdminusermanagementData')[loginid];
            const locator = await page3.getByPlaceholder(this.loc_Admin_Usermanagement_loginID);
            await locator.fill(loginiddata);

        }

    }

    public async entersearchname(searchname: string) {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        console.log(searchname);

        if (searchname == "OperatorName") {
            const loginiddata = await readFromYamlFilePath('AdminusermanagementData')[searchname];
            const locator = await page3.getByPlaceholder(this.loc_Admin_Usermanagement_name);
            await locator.fill(loginiddata);
        } else if (searchname == "CampaignmanagerName") {
            const loginiddata = await readFromYamlFilePath('AdminusermanagementData')[searchname];
            const locator = await page3.getByPlaceholder(this.loc_Admin_Usermanagement_name);
            await locator.fill(loginiddata);
        } else if (searchname == "ServicemanagerName") {
            const loginiddata = await readFromYamlFilePath('AdminusermanagementData')[searchname];
            const locator = await page3.getByPlaceholder(this.loc_Admin_Usermanagement_name);
            await locator.fill(loginiddata);

        }

    }


    public async entersearchemail(email: string) {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        console.log(email);

        if (email == "OperatorEmail") {
            const loginiddata = await readFromYamlFilePath('AdminusermanagementData')[email];
            const locator = await page3.getByPlaceholder(this.loc_Admin_Usermanagement_email);
            await locator.fill(loginiddata);
        } else if (email == "CampaignmanagerEmail") {
            const loginiddata = await readFromYamlFilePath('AdminusermanagementData')[email];
            const locator = await page3.getByPlaceholder(this.loc_Admin_Usermanagement_email);
            await locator.fill(loginiddata);
        } else if (email == "ServicemanageEmail") {
            const loginiddata = await readFromYamlFilePath('AdminusermanagementData')[email];
            const locator = await page3.getByPlaceholder(this.loc_Admin_Usermanagement_email);
            await locator.fill(loginiddata);

        }

    }






    public async clickonAuthority(authority: string) {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(2);
        if (authority == "ServicemanageAuthority") {
            const locator = await page3.getByTestId(this.loc_Admin_Usermanagement_Servicemanager);
            await locator.click();
        } else if (authority == "CampaignmanagerAuthority") {
            const locator = await page3.getByTestId(this.loc_Admin_Usermanagement_Campaignemanager);
            await locator.click();
        } else if (authority == "OperatorAuthority") {
            const locator = await page3.getByTestId(this.loc_Admin_Usermanagement_Operator);
            await locator.click();

        }
        await this.waitForSecond(2);
    }




    public async clickonsearchbuuton() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const locator = await page3.getByTestId(this.loc_Admin_Usermanagement_searchsubmit);
        await locator.click();
        await this.waitForSecond(2);

    }

    public async clickoneditbuuton() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const locator = await page3.getByTestId(this.loc_Admin_Usermanagement_resultaction);
        await locator.click();
        await this.waitForSecond(2);

    }







    public async verifysearchresults(loginid: string, name: string, email: string, authority: string) {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');


        const authoritydata = await readFromYamlFilePath('AdminusermanagementData')[authority];
        const usertypelocator = await page3.locator(this.loc_Admin_Usermanagement_resultauthority.replace('TextTorReplace', authoritydata));
        await this.locatorShouldBePresent(usertypelocator);
        console.log("locator: " + usertypelocator);
        await this.locatorShouldBePresent(usertypelocator);


        const loginiddata = await readFromYamlFilePath('AdminusermanagementData')[loginid];
        const loginidlocator = await page3.locator(this.loc_Admin_Usermanagement_resultloginid.replace('TextTorReplace', loginiddata));
        await this.locatorShouldBePresent(loginidlocator);
        console.log("locator: " + loginidlocator);
        await this.locatorShouldBePresent(loginidlocator);


        const nameiddata = await readFromYamlFilePath('AdminusermanagementData')[name];
        const namelocator = await page3.locator(this.loc_Admin_Usermanagement_resultname.replace('TextTorReplace', nameiddata));
        await this.locatorShouldBePresent(namelocator);
        console.log("locator: " + namelocator);
        await this.locatorShouldBePresent(namelocator);


        const emaildata = await readFromYamlFilePath('AdminusermanagementData')[email];
        const emaildatalocator = await page3.locator(this.loc_Admin_Usermanagement_resultemail.replace('TextTorReplace', emaildata));
        await this.locatorShouldBePresent(emaildatalocator);
        console.log("locator: " + emaildatalocator);
        await this.locatorShouldBePresent(emaildatalocator);

    }





    public async editauthority(authority: string) {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(2);

        console.log("entered function")
        if (authority == "ServicemanageAuthority") {
            const locator = await page3.getByTestId(this.loc_Admin_Usermanagement_Servicemanager_radioBtn);
            console.log(locator);
            await locator.click();
        } else if (authority == "CampaignmanagerAuthority") {
            const locator = await page3.getByTestId(this.loc_Admin_Usermanagement_Campaignemanager_radioBtn);
            console.log(locator);
            await locator.click();
        } else if (authority == "OperatorAuthority") {
            const locator = await page3.getByTestId(this.loc_Admin_Usermanagement_Operator_radioBtn);
            console.log(locator);
            await locator.click();

        }
        await this.waitForSecond(2);
    }

    public async clickoneditsubmittbutton() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const locator = await page3.getByTestId(this.loc_Admin_Usermanagement_editsubmit);
        await locator.click();
        await this.waitForSecond(2);
    }





}






































