
import { BasePage } from '../../utils/BasePage';
import { Page } from '@playwright/test';
import assert from 'assert';

export class MonitorSceduleDetailsPage extends BasePage {
  page: Page;
  loc_Monitor_RecruitingTab_CampaignTitle_Lbl: string;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.loc_Monitor_RecruitingTab_CampaignTitle_Lbl =
      "//*[@id='campaign-title'][text()='CampaignTitle']";
  }

  public async verifyProjectDetailsPageProjectParametersTitle(projectParams: string) {
    const locator = this.page.locator('//*[(text()="' + projectParams + '")]');
    await this.locatorShouldBePresent(locator);
  }

  public async verifyProjectDetailsPageProjectParametersValues(
    projectParamsTitle: string,
    projectParamsValue: string,
  ) {
    const locator = this.page.locator('//*[(text()="' + projectParamsTitle + '")]/following::p[1]');

    await assert.equal(await (await locator.innerText()).trim(), projectParamsValue);
    await this.locatorShouldBePresent(locator);
  }

  public async clickOnProceedToApplyButton() {
    const locator = this.page.locator('//button[contains(text(),"応募画面に進")]');
    await this.waitForSecond(2);
    await locator.click();
  }

  public async verifyPageNavigationToSceduleDetailsPage() {
    const locator = this.page.locator('//div/p[(text()="インタビュー日程のご確認")]');
    await this.locatorShouldBePresent(locator);
  }

  public async clickOnProjectDetailspageBackButton() {
    await this.waitForSecond(1);
    const locator = this.page.locator('//div/p[(text()="案件詳細")]');
    await this.waitForSecond(2);
    await locator.click();
  }

  public async verifyProjectRejectionPopupHeading() {
    const locator = this.page.locator('//h2/p[(text()="ご回答いただきありがとうございます")]');
    await this.locatorShouldBePresent(locator);
  }

  public async verifyProjectRejectionPopupText() {
    const locator = this.page.locator(
      '//p[@id="alert-dialog-description"]/p[(text()="ご用意できるインタビュー日程がないため、今回はお見送りとさせていただきます。またのご応募をお待ちしております。")]',
    );
    await this.locatorShouldBePresent(locator);
  }

  public async clickOnAlertSubmitButton() {
    const locator = this.page.getByRole('button', { name: '他の募集中案件を探す' });
    await this.waitForSecond(2);
    await locator.click();
  }

  public async verifyPageNavigationToSurveyPage() {

    const locator = this.page.locator('//div[text()="応募する"]')
    await this.locatorShouldBePresent(locator);
  }

  // -------------------------------------------------------------

  public async clickOnScheduleAcceptOptionButton() {

    const locator = this.page.getByText('インタビュー日程を確認しました');
    await this.waitForSecond(2);
    await locator.click();
  }

  public async clickOnScheduleRejectionOptionButton() {

    const locator = this.page.getByText('上記の日程はすべてNG');
    await this.waitForSecond(2);
    await locator.click();
  }

  public async clickOnTheAnswerButton() {
    const locator = this.page.getByTestId('campaign-proceed')
    await this.waitForSecond(2);
    await locator.click();
  }

  public async clickOnBackToScheduleDetailsLink() {
    const locator = this.page.locator('//div/div[(text()="インタビュー日程のご確認")]');
    await this.waitForSecond(2);
    await locator.click();
  }

  public async verifyTheCampaignNotListedInTheRecruitingTab(campaignTitle: string) {
    const locator = this.page.locator(
      this.loc_Monitor_RecruitingTab_CampaignTitle_Lbl.replace('CampaignTitle', campaignTitle),
    );
    await this.locatorShouldNotBePresent(locator);
  }
}
