
import { BasePage } from '../../utils/BasePage';

import { config } from '../../support/config';
import { Locator, Page } from '@playwright/test';
import { ClientLoginPage } from '../Client/1.QI-Client-Login-Page';
import { readFromYamlFilePath } from '../../utils/YamlReader';


export class MonitorLoginPage extends BasePage {
  loc_Monitor_Login_UserName_Txt: Locator;
  loc_Monitor_Login_ValidationMessage_ErrMsg: Locator;
  loc_Monitor_Login_Submit_Btn: Locator;
  loc_Monitor_Login_Password_Txt: Locator;
  loc_Monitor_TopPage_RecrutingTab_Label: Locator;
  loc_Monitor_NickName_Txt: Locator;
  loc_Monitor_NickName_Submit_Btn: Locator;
  loc_Monitor_Notification_POpUP_Btn: string;
  loc_Monitor_Login_UserName_Txt1: string;
  loc_Monitor_Login_Password_Txt1: string;
  loc_Monitor_Login_Submit_Btn1: string;
  Client_LoginPage: ClientLoginPage;
  loc_Monitor_TopPage_LogoutLink_Lnk: Locator;
  loc_Monitor_TopPage_LogoutConfirmation_Btn: Locator;
  loc_Monitor_TopPage_RecrutingTab_Labelforagora: string;



  constructor(page: Page) {
    super(page);
    this.Client_LoginPage = new ClientLoginPage(page);
    this.loc_Monitor_Login_UserName_Txt = page.getByTestId('monitor-login-id')
    this.loc_Monitor_Login_Password_Txt = page.getByTestId('monitor-login-password')
    this.loc_Monitor_Login_Submit_Btn = page.getByTestId('submit-button')
    this.loc_Monitor_Login_ValidationMessage_ErrMsg = page.getByText('ログインIDまたはパスワードに誤りがあるか、登録されていません。')
    this.loc_Monitor_TopPage_RecrutingTab_Label = page.getByText('募集中')
    this.loc_Monitor_TopPage_RecrutingTab_Labelforagora = '募集中'


    this.loc_Monitor_NickName_Txt = page.locator('[name="nickName"]');

    this.loc_Monitor_NickName_Submit_Btn = page.locator('[data-testid="submit-button"]');
    this.loc_Monitor_Notification_POpUP_Btn = '//*[@id="confirmation-agreeButton"]';

    this.loc_Monitor_Login_UserName_Txt1 = '[name="loginId"]';
    this.loc_Monitor_Login_Password_Txt1 = '[name="password"]';
    this.loc_Monitor_Login_Submit_Btn1 = '[data-testid="submit-button"]';
    this.loc_Monitor_TopPage_LogoutLink_Lnk = page.getByRole('button', { name: "ログアウト" });
    this.loc_Monitor_TopPage_LogoutConfirmation_Btn = this.page.getByTestId('modal-onAgree');

  }

  public async monitorLogin_LaunchMonitorApplication(windowsize: string) {
    if (windowsize == 'MobileView') {
      await this.page.setViewportSize({ width: 375, height: 812 }); // iPhone X viewport size
    }


    const maxRetries = 3;
    const timeout = 90000; // 90 seconds

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        // Navigate to the page
        await this.page.goto(config.monitorBaseUrl, {
          waitUntil: 'networkidle',
          timeout: timeout
        });

        await this.page.bringToFront();

        // Instead of fixed wait, use waitForLoadState
        await this.page.waitForLoadState('domcontentloaded');

        // Fix the type issue by explicitly typing the Promise.race result
        const count = await Promise.race<number>([
          this.Client_LoginPage.loc_Monitor_TopPage_LogoutLink_Lnk.count(),
          new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error('Timeout waiting for logout link')), 5000)
          )
        ]);

        if (count > 0) {
          // Handle logout process
          await this.handleLogout();
        }

        return; // Success - exit the retry loop

      } catch (error) {
        console.error(`Attempt ${attempt} failed:`, error instanceof Error ? error.message : String(error));

        if (attempt === maxRetries) {
          throw new Error(`Failed to launch monitor application after ${maxRetries} attempts: ${error instanceof Error ? error.message : String(error)}`);
        }

        // Wait before retrying with exponential backoff
        await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, attempt)));
      }
    }
  }

  // Separate method for logout process
  private async handleLogout() {
    try {
      await this.Client_LoginPage.clickOnMonitorLogoutLink();
      await this.Client_LoginPage.clickOnLogoutConfirmationButton();

      // Wait for both load state and navigation
      await Promise.all([
        this.page.waitForLoadState('load', { timeout: 90000 }),
        this.page.waitForNavigation({ timeout: 90000, waitUntil: 'networkidle' })
      ]);
    } catch (error) {
      throw new Error(`Logout process failed: ${error instanceof Error ? error.message : String(error)}`);
    }

  }



  public async monitorLogin_EnterUserName(username: string) {

    const username1 = await this.getMonitorUserId(username);
    await this.loc_Monitor_Login_UserName_Txt.fill(username1);
  }

  public async monitorLogin_EnterPassword(password: string) {
    const password1 = await this.getMonitorPassword(password);
    await this.loc_Monitor_Login_Password_Txt.fill(password1);
  }

  public async monitorLogin_ClickOnLoginButton() {

    const project_Title = readFromYamlFilePath('CampaignData')['campaignTitle1']
    console.log("campaign title ----for JObB: " + project_Title)
    await this.waitForSecond(2);
    await this.loc_Monitor_Login_Submit_Btn.click();
    await this.waitForSecond(2);
    await this.page.waitForLoadState('load', { timeout: 90000 });

  }


  public async monitorLogin_LoginAsMonitor() {
    await this.loc_Monitor_Login_UserName_Txt.fill(config.monitor_34_MailId);
    await this.loc_Monitor_Login_Password_Txt.fill(config.monitor_34_Password);
    await this.loc_Monitor_Login_Submit_Btn.click();
  }





  public async monitorLogin_VerifyTopPageNavigation() {
    await this.locatorShouldBePresent(this.loc_Monitor_TopPage_RecrutingTab_Label);
  }

  public async monitorLogin_VerifyTopPageNavigationforagora(username: string) {
    const page1 = await this.getUserPage(username);
    const locator = page1.getByText(this.loc_Monitor_TopPage_RecrutingTab_Labelforagora);
    console.log(locator);
    await this.locatorShouldBePresent(locator);
  }





  public async monitorLogin_VerifyInvaidLoginError() {
    await this.locatorShouldBePresent(this.loc_Monitor_Login_ValidationMessage_ErrMsg);
  }

  public async enterNickName(nickName: string) {
    await this.loc_Monitor_NickName_Txt.fill(nickName);
  }

  public async clickOnNickNameSubmitButton() {
    await this.waitForSecond(2);
    await this.loc_Monitor_NickName_Submit_Btn.click();
  }

  public async monitorLogin(monitor: string) {
    const page = await this.getUserPage(monitor);
    const userId = await this.getMonitorUserId(monitor);

    await this.waitForSecond(2)
    await page.locator(this.loc_Monitor_Login_UserName_Txt1).fill(userId);
    await page.locator(this.loc_Monitor_Login_Password_Txt1).fill(config.AgoraMonitorPassword);
    await page.locator(this.loc_Monitor_Login_Submit_Btn1).click();
    await this.waitForSecond(3)
    await this.clickIFlocatorIsPresent(page.locator(this.loc_Monitor_Notification_POpUP_Btn));


  }




  public async clickOnMonitorLogoutLink() {
    await this.waitForSecond(3);
    await this.clickIFlocatorIsPresent(this.loc_Monitor_TopPage_LogoutLink_Lnk)
  }

  public async clickOnLogoutConfirmationButton() {
    await this.waitForSecond(2);
    await this.clickIFlocatorIsPresent(this.loc_Monitor_TopPage_LogoutConfirmation_Btn);
    await this.loc_Monitor_Login_UserName_Txt.waitFor();


  }





}
