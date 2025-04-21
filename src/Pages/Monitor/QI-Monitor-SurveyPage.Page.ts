/* eslint-disable no-console */
import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';

export class MonitorSurveyPage extends BasePage {
  loc_Monitor_Survey_QuestionnaireMandatory_Msg: Locator;
  loc_Monitor_Survey_ConditionMandatory_Msg: Locator;
  loc_Monitor_Survey_Answer_CheckOrOption: string;
  loc_Monitor_Survey_Applybutton_Disabled_Btn: Locator;
  elemStatus: any;
  loc_Monitor_Survey_Applybutton_Enabled_Btn: Locator;
  loc_Monitor_TopPage_AppliedTab_Lnk: Locator;
  loc_Monitor_Survey_FA_Answer_TxtArea: Locator;
  loc_Monitor_Survey_RecruitmentCondition1_Check: Locator;
  loc_Monitor_Survey_RecruitmentCondition2_Option: Locator;
  loc_Monitor_Survey_RecruitmentCondition3_Option: Locator;
  loc_Monitor_CampaignApplyConfirmationPopupSubmit_Btn: Locator;

  constructor(page: Page) {
    super(page);
    this.loc_Monitor_Survey_QuestionnaireMandatory_Msg = this.page.locator(
      "[id='apply.question-error']",
    );

    this.loc_Monitor_Survey_ConditionMandatory_Msg = this.page.locator(
      "(//div[text()='必須項目が入力されていません'])[2]",
    );
    this.loc_Monitor_Survey_Answer_CheckOrOption = `//input[@type="Type"]/parent::*/parent::*/parent::*//*[text()='Answer']/preceding-sibling::*`;
    this.loc_Monitor_Survey_Applybutton_Disabled_Btn = this.page.locator(
      "//button[@disabled and text()='応募する']",
    );
    this.loc_Monitor_Survey_Applybutton_Enabled_Btn = this.page.locator(
      "//button[text()='応募する' and not(@disabled)]",
    );
    this.loc_Monitor_TopPage_AppliedTab_Lnk = page.getByRole('tab', { name: '応募済' });
    this.loc_Monitor_Survey_FA_Answer_TxtArea = this.page.locator("//*[@id='freeText']");

    this.loc_Monitor_Survey_RecruitmentCondition1_Check = page.getByTestId('isRecruitmentAllowed');
    this.loc_Monitor_Survey_RecruitmentCondition2_Option = this.page.getByTestId('isRecordingAllowed');
    this.loc_Monitor_Survey_RecruitmentCondition3_Option = page.getByTestId('isConfidentialityAllowed');
    this.loc_Monitor_CampaignApplyConfirmationPopupSubmit_Btn = page.getByTestId('modal-onAgree');
  }

  public async verifyQuestionnaireMandatoryFieldValidationMessageIsPresent() {
    this.locatorShouldBePresent(this.loc_Monitor_Survey_QuestionnaireMandatory_Msg);
  }
  public async verifyConditionMandatoryFieldValidationMessageIsPresent() {
    this.locatorShouldBePresent(this.loc_Monitor_Survey_ConditionMandatory_Msg);
  }
  public async chooseTheAnswer(answer: string, type: string) {
    if (type == 'SA') {
      const element = this.page.locator(
        this.loc_Monitor_Survey_Answer_CheckOrOption
          .replace('Answer', answer)
          .replace('Type', 'radio'),
      );
      await this.waitForSecond(2);
      await element.click();
    } else if (type == 'MA') {
      const element = this.page.locator(
        this.loc_Monitor_Survey_Answer_CheckOrOption
          .replace('Answer', answer)
          .replace('Type', 'checkbox'),
      );
      console.log(element);
      await this.waitForSecond(2);
      await element.click();
    } else if (type == 'FA') {
      await this.loc_Monitor_Survey_FA_Answer_TxtArea.fill(answer);
    } else if (type == 'Other') {
      const element = this.page.locator(
        this.loc_Monitor_Survey_Answer_CheckOrOption.replace('Answer', answer),
      );
      await this.waitForSecond(2);
      await element.click();
    }
  }

  public async verifyTheApplyButtonIsEnabledOrDisabled(elemStatus: string) {
    if (elemStatus == 'enabled') {
      await this.locatorShouldBePresent(this.loc_Monitor_Survey_Applybutton_Enabled_Btn);
    } else if (elemStatus == 'disabled') {
      await this.locatorShouldBePresent(this.loc_Monitor_Survey_Applybutton_Disabled_Btn);
    }
  }

  public async recruitmentCondition1() {
    await this.waitForSecond(2);
    await this.loc_Monitor_Survey_RecruitmentCondition1_Check.click();
  }

  public async recruitmentCondition2() {
    await this.waitForSecond(2);
    await this.loc_Monitor_Survey_RecruitmentCondition2_Option.click();
  }

  public async recruitmentCondition3() {
    await this.waitForSecond(2);
    await this.loc_Monitor_Survey_RecruitmentCondition3_Option.click();
  }
  public async clickOnApplyButton() {
    await this.waitForSecond(2);
    await this.loc_Monitor_Survey_Applybutton_Enabled_Btn.click();
  }

  public async clickOnAppliedTab() {
    await this.waitForSecond(2);
    await this.loc_Monitor_TopPage_AppliedTab_Lnk.click();
  }

  public async verifyCampaignInAppliedTab(campaingName: string) {
    const locator = this.page.locator('//div/div[(text()="' + campaingName + '")]');
    await this.locatorShouldBePresent(locator);
  }

  public async clickOnCampaignApplyConfirmationButton() {
    await this.waitForSecond(2);
    await this.loc_Monitor_CampaignApplyConfirmationPopupSubmit_Btn.click();
  }
}
