
import { BasePage } from '../../utils/BasePage';

import { config } from '../../support/config';
import { Locator, Page } from '@playwright/test';
import ScenarioContext from '../../support/ScenarioContext';
import { readFromYamlFilePath } from '../../utils/YamlReader';

export class ClientCampaignList extends BasePage {
  loc_Client_Login_UserName_Txt: Locator;
  loc_Client_Login_Password_Txt: Locator;
  loc_Client_CampaignList_Count: Locator;
  loc_Client_CampaignList_recruitementEnd_Count: Locator;
  loc_Client_CampaignList_Click: string;
  loc_Client_CampaignList_recruitmentEnd_Click: string;
  readonly loc_Client_CampaignClose_Btn: Locator;
  loc_Client_ProjectDetailsPage_Click: Locator;

  readonly loc_Client_CampaignCloseConfirmation_Btn: Locator;
  loc_Client_HomePage_Heading_Label: Locator;
  loc_Client_Login_ValidationMessage_ErrMsg: Locator;

  loc_Client_Login_Submit_Btn: Locator;
  loc_Client_Login_AlreadyLogged_Msg: Locator;
  loc_Client_CampaignList_Menu_Lnk: Locator;
  loc_Client_CampaignList_NextTab_Btn: string;
  loc_Client_CampaignList_CampaignTitle_TblCol: string;
  loc_Client_CampaignCreation_Pagination_NextClick_Btn: Locator;


  constructor(page: Page) {
    super(page);

    this.loc_Client_CampaignList_CampaignTitle_TblCol =
      "//tbody/tr/td[2][(text()='CampaignTitle')]";
    this.loc_Client_Login_UserName_Txt = page.locator(' [data-testid="login-id"]');
    this.loc_Client_Login_Password_Txt = page.locator('[data-testid="password"]');
    this.loc_Client_HomePage_Heading_Label = page.locator("//*[(text()=' Home page')]");
    this.loc_Client_Login_ValidationMessage_ErrMsg = this.page.locator(
      '//div[(text()="エラーが発生しました。メールアドレスまたはパスワードが正しくありません。")]',
    );
    this.loc_Client_Login_Submit_Btn = page.locator('[data-testid="login-submit"]');
    this.loc_Client_Login_AlreadyLogged_Msg = this.page.locator('[id="confirmation-agreeButton"]');
    this.loc_Client_CampaignList_Menu_Lnk = this.page.locator('//li/div/div[(text()="案件管理")]');
    this.loc_Client_CampaignList_NextTab_Btn = '[aria-label="Go to page PageCount"]>span';
    this.loc_Client_CampaignList_Count = page.getByRole('button', { name: '募集中' });
    this.loc_Client_CampaignList_recruitementEnd_Count = page.getByRole('button', { name: '募集終了' });
    this.loc_Client_CampaignList_Click = '(//button[text()="募集中"])[1]';
    this.loc_Client_CampaignList_recruitmentEnd_Click = '(//button[text()="募集終了"])[1]';
    this.loc_Client_CampaignClose_Btn = page.getByTestId('closeProject');
    this.loc_Client_CampaignCloseConfirmation_Btn = this.page.getByRole('button', { name: '終了する' });
    this.loc_Client_ProjectDetailsPage_Click = this.page.getByRole('button', { name: '案件詳細を確認' });
    this.loc_Client_CampaignCreation_Pagination_NextClick_Btn = this.page.locator('//button[@aria-label="Go to next page"]');
  }

  public async launchclientApplication() {
    await this.page.goto(config.clientBaseUrl);
  }

  public async clientLogin_EnterUserName(username: string) {
    await this.loc_Client_Login_UserName_Txt.fill(username);
  }

  public async clientLogin_EnterPassword(password: string) {
    await this.loc_Client_Login_Password_Txt.fill(password);
  }

  public async clientLogin_ClickOnLoginButton() {
    await this.waitForSecond(2);
    await this.loc_Client_Login_Submit_Btn.click();
  }

  public async clientLogin_VerifyTopPageNavigation() {
    await this.locatorShouldBePresent(this.loc_Client_HomePage_Heading_Label);
  }
  public async clientLogin_VerifyInvaidLoginError() {
    await this.locatorShouldBePresent(this.loc_Client_Login_ValidationMessage_ErrMsg);
  }

  public async clientLogin_ClickOkOnAlreadyLoggedProptMessage() {
    await this.waitForSecond(2);
    try {
      await this.loc_Client_Login_AlreadyLogged_Msg.click();
    } catch (e) {
      console.log('No other syatem logged with the same userid');
    }
  }


  public async verifyClientCampaignList() {
    await this.waitForSecond(2)
    let pageCount = 2;
    const detailsArray = ScenarioContext.get('ClientCampaignlist');
    for (const campaign of detailsArray) {
      let titleCounts = 0;
      console.log('campaign :' + (await campaign));
      for (const item of campaign) {
        const title: string = item.title;
        console.log('title :' + title);
        titleCounts = titleCounts + 1;
        console.log('//tr[' + titleCounts + "]/td[2][(text()='" + title + "')]");
        await this.locatorShouldBePresent(
          this.page.locator('//tr[' + titleCounts + "]/td[2][(text()='" + title + "')]"),
        );
      }
      console.log('Title Counts:', titleCounts);
      if (titleCounts == 10) {
        const locator = this.page.locator(
          this.loc_Client_CampaignList_NextTab_Btn.replace('PageCount', pageCount.toString()),
        );
        await this.waitForSecond(2);
        await locator.click();
        pageCount++;
      }
      titleCounts = 0;
    }
  }

  public async getTheCampaignIdByAPI(campaignTitle: string) {
    const detailsArray = ScenarioContext.get('ClientCampaignlist');
    for (const campaign of detailsArray) {
      console.log('campaign :' + (await campaign));
      for (const item of campaign) {

        const title: string = item.title;
        if (campaignTitle == title) {
          console.log('Campaign Title :' + item.title + '  CampaignId : ' + item.id);
          ScenarioContext.put('CampaignId-' + campaignTitle, item.id);
        }
      }
    }
  }



  public async navigateToCampaignList() {
    await this.waitForSecond(3);
    await this.page.goto(config.clientCampaignListURL);
    await this.page.waitForLoadState('load', { timeout: 90000 })
  }
  public async navigateToProjectDetailsPage() {
    this.waitForSecond(2);
    this.loc_Client_ProjectDetailsPage_Click.click();

  }
  public async closeCampaignFromList() {
    this.waitForSecond(2);
    let Published_listcount = await this.loc_Client_CampaignList_Count.count();
    let RecruitementEnd_listcount = await this.loc_Client_CampaignList_recruitementEnd_Count.count();

    console.log("listcount: " + Published_listcount)
    this.waitForSecond(2);

    while (Published_listcount > 0) {
      const loc = this.page.locator(this.loc_Client_CampaignList_Click);
      await loc.click();
      await this.page.waitForLoadState('load', { timeout: 90000 });
      await this.waitForSecond(2);
      await this.page.waitForLoadState('load', { timeout: 90000 });
      await this.loc_Client_CampaignClose_Btn.click();
      await this.waitForSecond(5);
      await this.loc_Client_CampaignCloseConfirmation_Btn.click();
      this.waitForSecond(2);
      await this.page.goto(config.clientCampaignListURL);
      this.waitForSecond(2);
      Published_listcount = await this.loc_Client_CampaignList_Count.count();
      console.log("Updated published listcount: " + Published_listcount);
      if (Published_listcount === 0) {
        await this.page.waitForLoadState('load', { timeout: 90000 });
        break;
      }

    }
    while (RecruitementEnd_listcount > 0) {
      const loc = this.page.locator(this.loc_Client_CampaignList_recruitmentEnd_Click);
      await loc.click();
      await this.page.waitForLoadState('load', { timeout: 90000 });
      await this.waitForSecond(2);
      await this.page.reload();
      await this.loc_Client_CampaignClose_Btn.click();
      await this.waitForSecond(3);
      await this.loc_Client_CampaignCloseConfirmation_Btn.click();
      this.waitForSecond(2);
      await this.page.goto(config.clientCampaignListURL);
      this.waitForSecond(2);
      RecruitementEnd_listcount = await this.loc_Client_CampaignList_recruitementEnd_Count.count();
      console.log("Updated recruitement end listcount: " + RecruitementEnd_listcount);
      if (RecruitementEnd_listcount === 0) {
        break;
      }

    }





  }






  public async clientCampaignDetails_navigateToCampaignDetailsPage(campaignTitle: string) {
    const campaign_Title = readFromYamlFilePath('CampaignData')[campaignTitle];
    let locator = this.page.locator(this.loc_Client_CampaignList_CampaignTitle_TblCol.replace('CampaignTitle', campaign_Title));

    await this.waitForSecond(3);
    console.log(locator);

    while (true) {
      await this.waitForSecond(3);
      const campaignCount = await locator.count();
      console.log("campaignCount:", campaignCount);
      if (campaignCount === 0) {
        await this.waitForSecond(1);
        await this.loc_Client_CampaignCreation_Pagination_NextClick_Btn.click();
        await this.waitForSecond(3);


      }
      else if (campaignCount === 1) {
        await this.waitForSecond(3);
        await locator.click();
        await this.waitForSecond(3);
        return;
      }

    }


  }















}
