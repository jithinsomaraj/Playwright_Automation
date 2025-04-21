
import { BasePage } from '../../utils/BasePage';

import { config } from '../../support/config';
import { Locator, Page } from '@playwright/test';
import { readFromYamlFilePath } from '../../utils/YamlReader';
import { PageObject } from '../../utils/PageObjects';




export class ClientLoginPage extends BasePage {
  PageObject!: PageObject;
  loc_Client_Login_UserName_Txt: Locator;
  loc_Client_Login_Password_Txt: Locator;
  loc_Client_HomePage_Heading_Label: Locator;
  loc_Client_Login_ValidationMessage_ErrMsg: Locator;
  loc_Client_Login_Submit_Btn: Locator;
  loc_Client_Login_AlreadyLogged_Msg: Locator;
  loc_client_Notification_POpUP_Btn: Locator;
  loc_Client_Login_UserName_Txt2: string;
  loc_Client_Login_Password_Txt2: string;
  loc_Client_Login_Submit_Btn2: string;
  loc_Monitor_TopPage_LogoutLink_Lnk: Locator;
  loc_Monitor_TopPage_LogoutConfirmation_Btn: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.loc_Client_Login_UserName_Txt = page.getByTestId('login-id');
    this.loc_Client_Login_Password_Txt = page.getByTestId('password');
    this.loc_Client_HomePage_Heading_Label = page.getByText('ホーム');

    this.loc_Client_Login_ValidationMessage_ErrMsg = page.getByText('エラーが発生しました。ログインIDまたはパスワードが正しくありません。')

    this.loc_Client_Login_Submit_Btn = page.getByTestId('login-submit');
    this.loc_Client_Login_AlreadyLogged_Msg = page.getByTestId('modal-onAgree');
    this.loc_client_Notification_POpUP_Btn = page.getByTestId('modal-onAgree');
    this.loc_Client_Login_UserName_Txt2 = ' [data-testid="login-id"]';
    this.loc_Client_Login_Password_Txt2 = '[data-testid="password"]';
    this.loc_Client_Login_Submit_Btn2 = '[data-testid="login-submit"]';

    this.loc_Monitor_TopPage_LogoutConfirmation_Btn = this.page.getByTestId('modal-onAgree');
    this.loc_Monitor_TopPage_LogoutLink_Lnk = page.getByRole('button', { name: "ログアウト" });
  }

  public async launchclientApplication() {

    const viewportSize = this.page.viewportSize();

    // Print the viewport size
    console.log('Current viewport size                              :', viewportSize);




    const maxRetries = 3;
    const timeout = 90000; // 90 seconds

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        // Navigate to the page
        await this.page.goto(config.clientBaseUrl, {
          waitUntil: 'networkidle',
          timeout: timeout
        });

        await this.page.bringToFront();

        // Instead of fixed wait, use waitForLoadState
        await this.page.waitForLoadState('domcontentloaded');

        // Fix the type issue by explicitly typing the Promise.race result
        const count = await Promise.race<number>([
          this.loc_Monitor_TopPage_LogoutLink_Lnk.count(),
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
          throw new Error(`Failed to launch client application after ${maxRetries} attempts: ${error instanceof Error ? error.message : String(error)}`);
        }

        // Wait before retrying with exponential backoff
        await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, attempt)));
      }
    }
  }

  // Separate method for logout process
  private async handleLogout() {
    try {
      await this.clickOnMonitorLogoutLink();
      await this.clickOnLogoutConfirmationButton();

      // Wait for both load state and navigation
      await Promise.all([
        this.page.waitForLoadState('load', { timeout: 90000 }),
        this.page.waitForNavigation({ timeout: 90000, waitUntil: 'networkidle' })
      ]);
    } catch (error) {
      throw new Error(`Logout process failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }










  public async launchclientApplication2(page: Page, url: string) {
    this.page = page;
    await this.page.waitForLoadState('load', { timeout: 90000 });
    await this.page.goto(url);
    console.log(await this.page.title());
    await this.page.goto(url);
    await this.page.bringToFront();
    await this.waitForSecond(2);


    await this.page.reload();
    await this.page.waitForLoadState('load', { timeout: 90000 });

  }

  public async clientLogin_EnterUserName(username: string) {
    await this.loc_Client_Login_UserName_Txt.fill(username);
  }


  public async clientLogin_EnterUserName_Context(username: string, client: string) {
    const page = await this.getUserPage(client);
    this.waitForSecond(2);
    console.log(username);

    const locator = await page.locator(this.loc_Client_Login_UserName_Txt);
    console.log(locator);
    await locator.fill(username);

  }





  public async clientLogin_EnterPassword(password: string) {
    await this.loc_Client_Login_Password_Txt.fill(password);
  }

  public async clientLogin_ClickOnLoginButton() {
    await this.loc_Client_Login_Submit_Btn.click();
    this.waitForSecond(3);
    await this.clickIFlocatorIsPresent(this.loc_client_Notification_POpUP_Btn);
  }

  public async clientLogin_VerifyTopPageNavigation() {
    await this.waitForSecond(2);
    await this.locatorShouldBePresent(this.loc_Client_HomePage_Heading_Label);
  }
  public async clientLogin_VerifyInvaidLoginError() {
    await this.locatorShouldBePresent(this.loc_Client_Login_ValidationMessage_ErrMsg);
  }

  public async clientLogin_ClickOkOnAlreadyLoggedProptMessage() {
    await this.waitForSecond(3);
    await this.clickIFlocatorIsPresent(this.loc_client_Notification_POpUP_Btn);
  }

  public async clientLogin_EnterUserName2(username: string) {
    const page = await this.getUserPage(username);
    const userId = readFromYamlFilePath('GuestUserDetails')['Guest_userID']
    await page.locator(this.loc_Client_Login_UserName_Txt2).fill(userId);

  }

  public async clientLogin_EnterPassword2(username: string) {
    this.waitForSecond(2);
    const page = await this.getUserPage(username);
    const pass = readFromYamlFilePath('GuestUserDetails')['Guest_password']
    console.log("pass--------------" + pass);
    await page.locator(this.loc_Client_Login_Password_Txt2).fill(pass);
    this.waitForSecond(2);

  }

  public async clientLogin_ClickOnLoginButton2(username: string) {
    const page = await this.getUserPage(username);
    page.locator(this.loc_Client_Login_Submit_Btn2).click();
  }


  public async clientLogin() {
    await this.page.reload();
    await this.loc_Client_Login_UserName_Txt.fill(config.AgoraclientUserId);
    await this.loc_Client_Login_Password_Txt.fill(config.AgoraclientPassword);
    await this.loc_Client_Login_Submit_Btn.click();
    this.waitForSecond(3);
    await this.clickIFlocatorIsPresent(this.loc_client_Notification_POpUP_Btn);
  }


  public async clickOnMonitorLogoutLink() {
    await this.waitForSecond(3);
    await this.page.waitForLoadState('load', { timeout: 90000 })

    await this.clickIFlocatorIsPresent(this.loc_Monitor_TopPage_LogoutLink_Lnk)

  }

  public async clickOnLogoutConfirmationButton() {
    await this.waitForSecond(2);
    await this.page.waitForLoadState('load', { timeout: 90000 })
    await this.clickIFlocatorIsPresent(this.loc_Monitor_TopPage_LogoutConfirmation_Btn)

  }

}


