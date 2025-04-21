import ScenarioContext from '../support/ScenarioContext';
import { config } from '../support/config';
// import * as XLSX from 'xlsx'
import { Locator, Page } from '@playwright/test';

// import { setDefaultTimeout } from '@cucumber/cucumber';
import { toInteger } from 'lodash';
import fs from 'fs';
import assert from 'assert';
import { exec } from 'child_process';
import { readFromYamlFilePath } from './YamlReader';
// import path from 'path';

export class BasePage {
  // protected page1: Page;
  protected page: Page;
  // protected page2: Page;

  public accessToken: any;
  public monitorCampaignsSortedArray: any[] = [];

  loc_Monitor_Campaignlist_Pagination_NextClick_Btn: Locator;
  loc_Client_CampaignCreation_Pagination_NextClick_Btn: Locator;
  loc_Client_CampaignCreation_Pagination_Next_Btn: String;

  // S3 credentials

  s3accessKeyId = ''; // Access Key;
  s3secretAccessKey = ''; // 'your_secret_access_key';
  s3region = ''; // 'your_bucket_region';
  s3BucketName = '';

  // Define the parameters for the S3 getObject operation

  test!: boolean;
  fileNames: string[];

  context: any;
  context1: any;
  context2: any;
  static fileNames1: any;
  // sampleLocator: Locator;
  featurefilespath: any;
  finalarray: any;
  selectYearloc: any;
  rightarrowlocator: any;
  leftarrowlocator: any;
  selectDateValue: any;
  // readonly sampleloc: any;
  publicSamplexpathArray: any;
  publicFilePathArray: any;

  private newWindow: any;


  constructor(page: Page) {
    if (ScenarioContext.get('NewTab')) {
      this.page = ScenarioContext.get('NewTab');
    } else {
      this.page = page;
    }
    this.loc_Monitor_Campaignlist_Pagination_NextClick_Btn = this.page.locator('//button[@aria-label="Go to next page"]');
    this.loc_Client_CampaignCreation_Pagination_NextClick_Btn = this.page.locator('//button[@aria-label="Go to next page"]');
    this.loc_Client_CampaignCreation_Pagination_Next_Btn = '//button[@aria-label="Go to next page"]';


    this.fileNames = [];


  }
  //Method for switchToNewTab

  public async switchToNewTab() {
    if (this.context1) {
      [this.newWindow] = await Promise.all([this.context1.waitForEvent('page')]);
      await this.newWindow.waitForLoadState('load', { timeout: 90000 });
      const newurl = await this.newWindow.url();
      console.log('newurl :' + newurl);
      await this.newWindow.close();
    } else if (this.context) {
      [this.newWindow] = await Promise.all([this.context.waitForEvent('page')]);
      await this.newWindow.waitForLoadState('load', { timeout: 90000 });
      const newurl = await this.newWindow.url();
      console.log('newurl :' + newurl);
      await this.newWindow.close();
    }
  }




  public async compareTwoString(Actual: string, Expected: string, errormessage: string) {
    assert.strictEqual(Actual, Expected, errormessage);
  }

  public async campaignCreationTicketCount() {
    const monitorsCount = readFromYamlFilePath('CampaignData')['monitorCount'];
    const monitorCount = parseInt(monitorsCount);
    const interviewDuration = readFromYamlFilePath('CampaignData')['interviewDuration'];
    let ticketCount = 0;
    let requiredTicketCount;
    switch (interviewDuration) {
      case '30':
        ticketCount = 1;
        break;
      case '60':
        ticketCount = 2;
        break;
      case '90':
        ticketCount = 3;
        break;
      case '120':
        ticketCount = 4;
        break;
    }

    requiredTicketCount = ticketCount * monitorCount;
    console.log('requiredTicketCount :' + requiredTicketCount);
    ScenarioContext.put('RequiredTicketCount', requiredTicketCount);
  }

  public async launchNewBrowserForAUser(user: string) {
    const index = user.substring(user.length - 1, user.length);
    const index1 = toInteger(index) - 1;

    let pageKey = '';

    if (user.includes('interviewer')) {
      pageKey = 'page' + config.userList[index1] + '-INT';
    } else if (user.includes('monitor')) {
      pageKey = 'page' + config.userList[index1] + '-MON';
    } else if (user.includes('backroom')) {
      pageKey = 'page' + config.userList[index1] + '-BR';
    }

    const browser = ScenarioContext.get('browser');
    const context = await browser.newContext({ recordVideo: { dir: 'reports/screenvideo' } });
    await context.grantPermissions(['camera', 'microphone', 'notifications']);
    const page = await context.newPage();
    ScenarioContext.put(pageKey, page);
    console.log("page-----" + pageKey);
    console.log(user);
    await page.bringToFront();
  }

  public async getUserPage(user: string) {
    const index = user.substring(user.length - 1, user.length);
    const index1 = toInteger(index) - 1;

    let pageKey = '';

    if (user.includes('interviewer')) {
      pageKey = 'page' + config.userList[index1] + '-INT';
    } else if (user.includes('monitor')) {
      pageKey = 'page' + config.userList[index1] + '-MON';
    } else if (user.includes('backroom')) {
      pageKey = 'page' + config.userList[index1] + '-BR';
    }
    return ScenarioContext.get(pageKey);
  }

  public async getUserName(user: string) {
    const index = user.substring(user.length - 1, user.length);
    const index1 = toInteger(index) - 1;

    let userName = '';

    if (user.includes('interviewer')) {
      userName = config.userList[index1] + '-INT';
    } else if (user.includes('monitor')) {
      userName = config.userList[index1] + '-MON';
    } else if (user.includes('backroom')) {
      userName = config.userList[index1] + '-BR';
    }
    return userName;
  }

  public async getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // Get hours and pad with leading zero if necessary
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Get minutes and pad with leading zero if necessar
    return `${hours}:${minutes}`;
  }




  public async locatorShouldBePresent(locator: Locator) {
    try {
      const isPresent = await this.isLocatorPresentAfterWait(locator);
      assert.strictEqual(isPresent, true, 'The Element Not Found' + locator);
      return true;
    } catch (error) {
      const currentUrl = this.page.url();
      console.log("Error happened in this page: " + currentUrl)
      console.error('Test failed. Current URL:', currentUrl);
      throw error; // Re-throw the error to ensure test failure
    }
  }



  public async clickIFlocatorIsPresent(locator: Locator) {
    const count = await locator.count();
    if (count > 0) {
      await locator.click();
    } else {
      console.log("Element is not present");
    }
    return true;
  }
  public async locatorShouldNotBePresent(locator: Locator) {
    this.page.setDefaultTimeout(50000);
    assert.strictEqual(
      await this.isLocatorPresentAfterWait(locator),
      false,
      'The Element Should Not Be Present',
    );
    return true;
  }

  public async isElementDisappeared(page: Page, locator: Locator) {
    await assert.strictEqual(
      await this.waitForElementToBeDisappear(page, locator),
      true,
      'The Element Should Not Be Present',
    );
    return true;
  }

  public async monitorCampaignListAPIResult(URL: string, method: string, requestHeaders: Headers) {
    const options = {
      method: method, // Adjust the method based on your API requirements
      headers: requestHeaders,
    };
    await this.waitForSecond(1);
    const response = await fetch(URL, options);
    return response;
  }

  public async getAPIResponse(
    URL: string,
    method: string,
    requestHeaders: Headers,
    requestBody: any,
  ) {
    let options;
    if (requestBody == '') {
      options = {
        method: method, // Adjust the method based on your API requirements
        headers: requestHeaders,
      };
    } else {
      options = {
        method: method, // Adjust the method based on your API requirements
        headers: requestHeaders,
        body: JSON.stringify(requestBody),
      };
    }

    await this.waitForSecond(1);
    const response = await fetch(URL, options);

    return response;
  }

  public async enterText(locator: Locator, text: string) {
    await locator.fill(text);
  }
  public async getIFrameWithUrl(url: string) {
    return await this.page.frame({ url: url });
  }

  public async waitForElementToBeDisappear(page: Page, locator: any) {
    await page.waitForSelector(locator, { state: 'hidden' });
  }

  public async waitForElementToBePresent(page: Page, locator: any) {
    await page.waitForSelector(locator, { state: 'visible' });
  }

  public async launchApp(page: Page, URL: string) {
    await page.goto(URL);
    console.log(await this.page.title());
  }

  private async isLocatorPresentAfterWait(locator: Locator) {
    try {
      // this.page.setDefaultTimeout(5000);
      await locator.waitFor();
      return true;
    } catch (error) {
      return false;
    }
  }

  public async waitToDisappearElement(locator: Locator) {
    try {
      // this.page.setDefaultTimeout(5000);
      await locator.waitFor({ state: 'hidden', timeout: 10000 });
      return true;
    } catch (error) {
      return false;
    }
  }

  public async verifySortedOrderOfTheList(dateList: Array<string>) {
    const sortedList = dateList.sort();
    console.log('sortedList :' + sortedList);
    return sortedList;
  }

  public async fileUpload(locator: Locator, filePath: string) {
    const fileChooserPromise = this.page.waitForEvent('filechooser');
    await locator.click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(filePath);
  }

  public async uploadFile() {
    await this.waitForSecond(2);
    console.log(' Coming to this method');
    await this.page.locator('input[name="upfile"]').click();
  }

  public async getMonitorUserId(monitor: string) {
    let userId = '';
    switch (monitor) {
      case 'monitor1':
        userId = config.monitor_34_MailId;
        break;
      case 'monitor2':
        userId = config.monitor_35_MailId;
        break;
      case 'monitor3':
        userId = config.monitor_36_MailId;
        break;
      case 'monitor4':
        userId = config.monitor_37_MailId;
        break;
      case 'monitor5':
        userId = config.monitor_38_MailId;
        break;
      case 'monitor_39':
        userId = config.monitor_39_MailId;
        break;
      case 'monitor6':
        userId = config.monitor_40_MailId;
        break;
      case 'monitor_41':
        userId = config.monitor_41_MailId;
        break;
      case 'monitor7':
        userId = config.monitor_41_MailId;
        break;

      case 'monitor8':
        userId = config.monitor_42_MailId;
        break;
      case 'monitor9':
        userId = config.monitor_43_MailId;
        break;
      case 'monitor10':
        userId = config.monitor_44_MailId;
        break;
      case 'monitor11':
        userId = config.monitor_45_MailId;
        break;
      case 'invalidusername':
        userId = config.monitor_invalidusername_MailId;
        break;
    }
    return userId;
  }

  public async getMonitorPassword(monitor: string) {
    let userId = '';
    switch (monitor) {
      case 'monitor1':
        userId = config.monitor_34_Password;
        break;
      case 'monitor2':
        userId = config.monitor_35_Password;
        break;
      case 'monitor3':
        userId = config.monitor_36_Password;
        break;
      case 'monitor4':
        userId = config.monitor_37_Password;
        break;
      case 'monitor5':
        userId = config.monitor_38_Password;
        break;
      case 'monitor5':
        userId = config.monitor_39_Password;
        break;
      case 'monitor6':
        userId = config.monitor_40_Password;
        break;
      case 'monitor7':
        userId = config.monitor_41_Password;
        break;
      case 'monitor8':
        userId = config.monitor_42_Password;
        break;
      case 'monitor9':
        userId = config.monitor_43_Password;
        break;
      case 'monitor10':
        userId = config.monitor_44_Password;
        break;
      case 'monitor11':
        userId = config.monitor_45_Password;
        break;
      case 'wrongpassword':
        userId = config.monitor_wrongpassword_Password;
        break;
    }
    return userId;
  }

  public async getMonitorNickName(monitor: string) {
    let nickName = '';
    switch (monitor) {
      case 'monitor_34':
        nickName = config.monitor_34_NickName;
        break;
      case 'monitor_35':
        nickName = config.monitor_35_NickName;
        break;
      case 'monitor_36':
        nickName = config.monitor_36_NickName;
        break;
      case 'monitor_38':
        nickName = config.monitor_38_NickName;
        break;
      case 'monitor_39':
        nickName = config.monitor_39_NickName;
        break;
      case 'monitor_40':
        nickName = config.monitor_40_NickName;
        break;
      case 'monitor_41':
        nickName = config.monitor_41_NickName;
        break;
      case 'monitor_42':
        nickName = config.monitor_42_NickName;
        break;
      case 'monitor_43':
        nickName = config.monitor_43_NickName;
        break;
      case 'monitor_44':
        nickName = config.monitor_44_NickName;
        break;
      case 'monitor_45':
        nickName = config.monitor_45_NickName;
        break;
    }
    return nickName;
  }

  public async waitForSecond(waittime: number) {
    const startTime: number = new Date().getTime();
    let printTime = startTime + 1000;
    while (new Date().getTime() <= startTime + waittime * 1000) {
      if (new Date().getTime() >= printTime) {
        // console.log("printTime : " + printTime);
        printTime = new Date().getTime() + 1000;
      }
    }
  }

  data = 'This is some text that will be written to the file.';

  public async writefile(Filepath: string, fileContent: string) {
    console.log('Current working directory: ', process.cwd());

    fs.writeFile(Filepath, fileContent, (err: NodeJS.ErrnoException | null) => {
      if (err) {
        console.error(err);
      } else {
        console.log('File written successfully!');
        console.log('fileContent' + fileContent);
      }
    });
  }

  public async getDates(condition: string, addNumber: number) {
    const currentDate = new Date();

    const futureDate: Date = new Date(currentDate);
    futureDate.setDate(futureDate.getDate() + addNumber);

    console.log('futureDate :' + futureDate);

    const year = String(futureDate.getFullYear());
    const month = String(futureDate.getMonth() + 1).padStart(2, '0');
    const day = String(futureDate.getDate()).padStart(2, '0');
    // const day = String(currentDate.getDate() + addNumber).padStart(2, '0');

    const result1 = String(futureDate.getDate()).toString();
    console.log(futureDate + '  ' + day + ' ' + result1);

    console.log(day + '-' + month + '-' + year);

    let result = '';
    switch (condition) {
      case 'DD':
        result = String(day.toString());
        break;
      case 'MM':
        result = String(month.toString());
        break;
      case 'YYYY':
        result = String(year.toString());
        break;
      case 'D':
        result = String(futureDate.getDate()).toString();
        break;
      case 'M':
        result = String(month.toString());
        break;
      case 'yyyy/mm/dd':
        // Format the date as "yyyy/mm/dd"
        result = String(`${year}/${month}/${day}`);
        break;
      case 'dd/mm/yyyy':
        result = String(`${day}/${month}/${year}`);
        break;
      case 'yyyy-mm-dd':
        // Format the date as "yyyy-mm-dd"
        result = String(`${year}-${month}-${day}`);
        break;
      case 'dd-mm-yyyy':
        result = String(`${day}-${month}-${year}`);
        break;

    }
    return result;
  }


  public async batFileExecution(filePath: string) {
    await exec(`${filePath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
  }


  public async epochtodate(dateString: string) {

    const parts = dateString.split('-').map(Number); // Split the date string into parts and convert to numbers(yyyy-mm-dd)
    const year = parts[0];
    const month = parts[1] - 1; // Months are 0-indexed in JavaScript
    const day = parts[2];

    const date = new Date(year, month, day);
    const epoch = Math.floor(date.getTime()).toString();
    return epoch

  }

  public async clickOnTheProjectTitle(projectTitle: string, page: any) {
    const locator = page.locator('//div[(text()="' + projectTitle + '")]');
    await locator.click();
    this.waitForSecond(1);


  }




  public async clickOnTheProjectTitleAgora(projectTitle: string, userName: string) {
    const page = await this.getUserPage(userName);
    const project_Title = readFromYamlFilePath('CampaignData')[projectTitle]

    const locator = await page.locator('//div[(text()="' + project_Title + '")]')
    const nextBtn = await page.locator(this.loc_Client_CampaignCreation_Pagination_Next_Btn);
    const nextBtnCount = nextBtn.count();


    while (true) {
      await this.page.reload();
      await this.waitForSecond(3);
      const campaignCount = await locator.count();
      console.log("campaignCount:", campaignCount);
      await this.waitForSecond(1);
      if (campaignCount === 0) {
        console.log("campaignCountZero:loop1");
        await this.waitForSecond(1);
        console.log("nextBtnCount:", nextBtnCount);
        await this.waitForSecond(1);
        if (nextBtnCount === 0) {
          console.log("nextBtnCountZero:loop2");
          break;
        } else {
          console.log("nextbtnpresent:loop3");
          await nextBtn.click();
          await this.waitForSecond(3);
        }
      }
      else if (campaignCount === 1) {
        console.log("campaignCountOne:loop4");
        await this.waitForSecond(3);
        await locator.click();
        await this.waitForSecond(3);
        return;
      }

    }

  }






}
