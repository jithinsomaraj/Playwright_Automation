import { BasePage } from '../../utils/BasePage';

//import { config } from '../../support/config';
import { Page } from '@playwright/test';
// import fs from 'fs';
//import { parse } from 'csv-parse';
import ScenarioContext from '../../support/ScenarioContext';
import path from 'path';
import { readFromYamlFilePath } from '../../utils/YamlReader';


export class AdminPBlackList extends BasePage {

    loc_Admin_BlackList_menu: string;
    loc_Admin_BlackList_heading: string
    loc_Admin_BlackList_fileupload: string
    loc_Admin_BlackList_confirm: string
    loc_Admin_BlackList_confirmupload: string
    loc_Admin_BlackList_Uploadedfile: string

    constructor(page3: Page) {
        super(page3);
        this.page = page3;



        this.loc_Admin_BlackList_menu = 'menuitem-5'
        this.loc_Admin_BlackList_heading = 'black-list.header'
        this.loc_Admin_BlackList_fileupload = 'action-submit'
        this.loc_Admin_BlackList_confirm = 'modal-onAgree'
        this.loc_Admin_BlackList_confirmupload = 'modal-onAgree'
        this.loc_Admin_BlackList_Uploadedfile = '//*[@data-testid="back-button"]/child::div[2]/child::div[1][text()="filename"]'




    }


    public async clickBlackListSideMenu() {
        await this.waitForSecond(2);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(2);
        const sidemenu = page3.getByTestId(this.loc_Admin_BlackList_menu);
        await sidemenu.click();

    }

    public async VerifypageTitle() {
        const page3 = ScenarioContext.get('NewTab');
        const title = page3.getByTestId(this.loc_Admin_BlackList_heading);
        console.log(title);
        await this.locatorShouldBePresent(title);
    }

    public async selectfile() {
        const page3 = ScenarioContext.get('NewTab');
        const filename = readFromYamlFilePath('AdminBlacklist')['TextFile'];
        const fileupload = page3.getByTestId(this.loc_Admin_BlackList_fileupload);
        await fileupload.setInputFiles(path.join('Fixtures', filename));


    }
    public async confirmfile() {
        const page3 = ScenarioContext.get('NewTab');
        const confirmbutton = page3.getByTestId(this.loc_Admin_BlackList_confirm);
        await confirmbutton.click();
    }


    public async confirmfileuploaded() {
        const page3 = ScenarioContext.get('NewTab');
        const confirmbutton = page3.getByTestId(this.loc_Admin_BlackList_confirmupload);
        await confirmbutton.click();


    }

    public async Verifyfile() {
        const expectedfilename = readFromYamlFilePath('AdminBlacklist')['TextFile'];
        const page3 = ScenarioContext.get('NewTab');
        const uploadedfile = page3.locator(this.loc_Admin_BlackList_Uploadedfile.replace('filename', expectedfilename));
        await this.locatorShouldBePresent(uploadedfile);
    }







}



