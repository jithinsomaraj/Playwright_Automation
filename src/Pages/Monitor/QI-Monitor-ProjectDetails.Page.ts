
import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';

export class MonitorProjectDetailsPage extends BasePage {
  page: Page;
  loc_MeetsCritieria_Btn: Locator;
  loc_MeetsCritieria_NextBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.loc_MeetsCritieria_Btn = this.page.locator('[id="apply.confirmation.agree"]');
    this.loc_MeetsCritieria_NextBtn = this.page.locator('//*[text()="次へ"]');
  }

  public async verifyProjectDetailsPageProjectParametersTitle(projectParams: string) {
    const locator = this.page.locator('//*[(text()="' + projectParams + '")]');
    console.log(
      'Project Param UI:' +
      (await locator.innerText()) +
      '  projectParams Expected :' +
      projectParams,
    );
    await this.locatorShouldBePresent(locator);
  }

  public async verifyProjectDetailsPageProjectParametersValues(
    projectParamsTitle: string,
    projectParamsValue: string,
  ) {
    let locator;
    if (projectParamsTitle == 'NG業種') {
      locator = this.page.locator(
        '//*[(text()="' +
        projectParamsTitle +
        '")]/following::div[1][contains(text(),"' +
        projectParamsValue +
        '")]',
      );
    } else {
      locator = this.page.locator(
        '//*[(text()="' +
        projectParamsTitle +
        '")]/following::div[1][(text()="' +
        projectParamsValue +
        '")]',
      );
    }


    await this.locatorShouldBePresent(locator);
  }

  public async clickOnProceedToApplyButton() {

    const locator = this.page.getByText("応募画面に進");
    console.log('Project Param UI:' + locator);
    await this.waitForSecond(2);
    await locator.click();
  }


  public async aceeptRecruitmentConditionPopUp() {

    await this.loc_MeetsCritieria_Btn.click();

    await this.loc_MeetsCritieria_NextBtn.click();
  }











  public async verifyPageNavigationToSceduleDetailsPage() {
    const locator = this.page.getByText('インタビュー日程のご確認');
    await this.locatorShouldBePresent(locator);
  }

  public async clickOnProjectDetailspageBackButton() {
    await this.waitForSecond(1);
    const locator = this.page.getByTestId('back-button');

    await this.waitForSecond(2);
    await locator.click();
  }
}
