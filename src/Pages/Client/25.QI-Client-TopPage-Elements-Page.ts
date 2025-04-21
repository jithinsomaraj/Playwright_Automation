/* eslint-disable no-console */
import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';
export default class Client_TopPageElements extends BasePage {
  page: Page;
  sampleRadioButtonLocator?: Locator;

  loc_Client_TopPage_MenuIcon_Lnk: Locator;
  loc_Client_TopPage_MenuItem_Lnk: string;
  loc_Client_TopPage_DisappearedMenuItem_lst: Locator;

  loc_Client_TopPage_TicketIcon_Btn: Locator;
  loc_Client_TopPage_TicketPage_Lbl: Locator;
  loc_Client_TopPage_InterviewVideoListPage_Lbl: Locator;
  loc_Client_TopPage_InquiryPage_Lbl: Locator;
  loc_Client_TopPage_CampaignListPage_Lbl: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.loc_Client_TopPage_MenuIcon_Lnk = this.page.getByTestId('menu-bar');
    this.loc_Client_TopPage_MenuItem_Lnk = "(//ul/li/div//*[text()='MenuItem'])[1]";  //can't change
    
    this.loc_Client_TopPage_DisappearedMenuItem_lst = this.page.locator(
      "//*[contains(@class,'MuiDrawer-docked')]//*[contains(@style,'visibility: hidden;')]", //can't change
    );
    
    this.loc_Client_TopPage_TicketIcon_Btn = this.page.getByTestId('app-actions');
    this.loc_Client_TopPage_TicketPage_Lbl = this.page.getByText('カート入っているアイテム');
    this.loc_Client_TopPage_InterviewVideoListPage_Lbl = this.page.getByText('インタビュー動画一覧');
    this.loc_Client_TopPage_InquiryPage_Lbl = this.page.getByText('問い合わせ');
    this.loc_Client_TopPage_CampaignListPage_Lbl = this.page.getByText('案件管理');
  }

  public async clickOnTheMenuIcon() {
    await this.loc_Client_TopPage_MenuIcon_Lnk.click();
  }
  public async clickOnMenuItems(menuItem: string) {
    console.log(this.loc_Client_TopPage_MenuItem_Lnk.replace('MenuItem', menuItem));
    const locator = this.page.locator(
      this.loc_Client_TopPage_MenuItem_Lnk.replace('MenuItem', menuItem),
    );
    await locator.click();
  }

  public async verifyTheMenulistIsHidden() {
    await this.waitForSecond(2);
    console.log(this.loc_Client_TopPage_DisappearedMenuItem_lst.toString());
    await this.locatorShouldBePresent(this.loc_Client_TopPage_DisappearedMenuItem_lst);
  }

  public async clickOnTheTicketIcon() {
    await this.waitForSecond(2);
    await this.loc_Client_TopPage_TicketIcon_Btn.click();
  }

  public async verifyPageNavigationToTicketPage() {
    await this.loc_Client_TopPage_TicketPage_Lbl.isVisible();
  }

  public async verifyPageNavigationToInterviewVideoListPage() {
    await this.loc_Client_TopPage_InterviewVideoListPage_Lbl.isVisible();
  }
  public async verifyPageNavigationToInquiryPage() {
    await this.loc_Client_TopPage_InquiryPage_Lbl.isVisible();
  }
  public async verifyPageNavigationToCampaignListPage() {
    await this.loc_Client_TopPage_CampaignListPage_Lbl.isVisible();
  }
}
