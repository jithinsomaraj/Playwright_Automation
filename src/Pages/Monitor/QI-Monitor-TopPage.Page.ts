
import { BasePage } from '../../utils/BasePage';
import ScenarioContext from '../../support/ScenarioContext';
import { Locator, Page } from '@playwright/test';
import assert from 'assert';
import { readFromYamlFilePath } from '../../utils/YamlReader';

export class MonitorTopPage extends BasePage {
  page: Page;

  readonly loc_Monitor_TopPage_ToDoList_Lbl: Locator;
  readonly loc_Monitor_TopPage_LatestNews_Lbl: Locator;
  readonly loc_Monitor_TopPage_ListOfProjectsHeading_Lbl: Locator;
  readonly loc_Monitor_TopPage_ProjectStatusTab_Lbl1: Locator;
  readonly loc_Monitor_TopPage_ProjectStatusTab_Lbl2: Locator;
  readonly loc_Monitor_TopPage_ProjectStatusTab_Lbl3: Locator;
  readonly loc_Monitor_TopPage_ProjectStatusTab_Lbl4: Locator;
  readonly loc_Monitor_TopPage_SortingOption_LstBx: Locator;
  readonly loc_Monitor_TopPage_SortingOptionListItems_Lbl: Locator;
  readonly loc_Monitor_TopPage_Menu_Icon: Locator;
  readonly loc_Monitor_TopPage_MenuList_Lbl: Locator;
  readonly loc_Monitor_TopPage_InterviewTitle_Lbl: string;
  readonly loc_Client_CampaignDetails_MonitorStatus_Lbl: string;
  readonly loc_Monitor_TopPage_InterviewList_NextPageButton_Btn: string;
  readonly loc_Monitor_TopPage_InterviewTitleCount_Lbl: Locator;
  readonly loc_Monitor_TopPage_CampaignListPageCount: Locator;
  public campaignList: string[] = [];
  loc_Monitor_TopPage_SortedPajectName_Lbl: string;
  loc_Monitor_Campaignlist_Pagination_NextClick_Btn: Locator;


  constructor(page: Page) {
    super(page);
    this.page = page;

    this.loc_Monitor_TopPage_CampaignListPageCount = this.page.locator(
      '[data-testid*="page-item"]:not([aria-label="Go to previous page"]):not([aria-label="Go to next page"]'); //cant change
    this.loc_Monitor_TopPage_InterviewTitleCount_Lbl = this.page.locator('#campaign-title'); //cant change
    this.loc_Monitor_TopPage_SortedPajectName_Lbl = "(//*[@id='campaign-title'])[index][(text()='ProjectName')]";//cant change
    this.loc_Monitor_TopPage_InterviewTitle_Lbl = "(//*[@id='campaign-title'])[index]";//cant change
    this.loc_Monitor_TopPage_InterviewList_NextPageButton_Btn =
      '[data-testid="page-item_ReplaceNumber"]:not([aria-label="Go to previous page"]):not([aria-label="Go to next page"])'; //cant change
    this.loc_Monitor_TopPage_ToDoList_Lbl = this.page.getByText('やることリスト');
    this.loc_Monitor_TopPage_LatestNews_Lbl = this.page.getByText('新着のお知らせ');
    this.loc_Monitor_TopPage_ListOfProjectsHeading_Lbl = this.page.getByText(' 案件一覧');
    this.loc_Monitor_TopPage_ProjectStatusTab_Lbl1 = this.page.getByText('募集中');
    this.loc_Monitor_TopPage_ProjectStatusTab_Lbl2 = this.page.getByText('応募済');
    this.loc_Monitor_TopPage_ProjectStatusTab_Lbl3 = this.page.getByText('参加');
    this.loc_Monitor_TopPage_ProjectStatusTab_Lbl4 = this.page.getByText('完了');

    this.loc_Monitor_TopPage_SortingOption_LstBx = this.page.getByRole('combobox');
    this.loc_Monitor_TopPage_SortingOptionListItems_Lbl = this.page.locator('//ul/li[(text()="samplelocvalue")]');//cant change
    this.loc_Monitor_TopPage_Menu_Icon = this.page.locator('[data-testid="menu"]');
    this.loc_Monitor_TopPage_MenuList_Lbl = this.page.locator('//div/p[(text()="samplelocvalue")]');
    this.loc_Client_CampaignDetails_MonitorStatus_Lbl =
      "(//div[(text()='NickName')]/following::*[text()='Status'])[1]"

    this.loc_Monitor_Campaignlist_Pagination_NextClick_Btn = this.page.locator('//button[@aria-label="Go to next page"]');
  }

  public async VerifyMonitorTopPageProjectSortingOrder(sortingOrder: string) {
    this.monitorCampaignsSortedArray = [];

    let campaignListArray: any[] = [];

    if (sortingOrder == 'RewardPoint') {
      campaignListArray = ScenarioContext.get('monitorPoints');
    } else if (sortingOrder == 'NearestDeadline') {
      campaignListArray = ScenarioContext.get('endsAt');
    } else if (sortingOrder == 'NewArraival') {
      campaignListArray = ScenarioContext.get('updatedAt');
    } else if (sortingOrder == 'InterviewDuration') {
      campaignListArray = ScenarioContext.get('interviewDuration');
    }


    let loop = 0;
    for (const campaign of campaignListArray) {
      if (loop < 1) {


        let count = 1;
        for (const camptitle of campaign) {
          console.log(
            'Aneesh Locator :' +
            "(//*[@id='campaign-title'])[" +
            count +
            "][(text()='" +
            camptitle.title +
            "')]",
          );

          const elementLocator = this.page.locator(
            "(//*[@id='campaign-title'])[" + count + "][(text()='" + camptitle.title + "')]",
          );

          await this.locatorShouldBePresent(elementLocator);
          count++;
        }
        loop++;
      } else {
        break;
      }
    }


  }

  public async selectSortingOption(sortingOption: string) {
    const locator = this.page.locator('//ul/li[(text()="' + sortingOption + '")]');
    await this.waitForSecond(2);
    await locator.click();
  }
  public async verifyToDoListSectionIsPresent() {
    await this.loc_Monitor_TopPage_ToDoList_Lbl.isVisible();
  }

  public async verifyLatestNewsSectionIsPresent() {

    await this.loc_Monitor_TopPage_LatestNews_Lbl.isVisible();
  }

  public async verifyListOfProjectsHeadingIsPresent() {
    await this.loc_Monitor_TopPage_ListOfProjectsHeading_Lbl.isVisible();
  }

  public async verifyProjectStatusTabsArePresent1() {

    await this.loc_Monitor_TopPage_ProjectStatusTab_Lbl1.isVisible();
  }

  public async verifyProjectStatusTabsArePresent2() {

    await this.loc_Monitor_TopPage_ProjectStatusTab_Lbl2.isVisible();
  }

  public async verifyProjectStatusTabsArePresent3() {

    await this.loc_Monitor_TopPage_ProjectStatusTab_Lbl3.isVisible();
  }

  public async verifyProjectStatusTabsArePresent4() {

    await this.loc_Monitor_TopPage_ProjectStatusTab_Lbl4.isVisible();
  }

  public async verifyProjectSortingListBoxIsPresent() {

    await this.loc_Monitor_TopPage_SortingOption_LstBx.isVisible();
  }

  public async clickOnProjectSortingListBox() {
    await this.waitForSecond(2);
    await this.loc_Monitor_TopPage_SortingOption_LstBx.click();
  }

  public async verifyProjectSortingListBoxItems(sortingListItems: string) {
    const locator = this.page.locator('//ul/li[(text()="' + sortingListItems + '")]');
    console.log('Sorting List Items :' + locator);
    await this.locatorShouldBePresent(locator);
  }

  public async verifyLeftPaneMenuIsPresent() {
    let locator = this.page.locator('//div/div[(text()=" 案件一覧")]');
    await locator.dblclick();
    locator = this.page.locator('[data-testid="menu"]');
    await this.locatorShouldBePresent(locator);
  }

  public async clickOnLeftPaneMenuIcon() {
    await this.waitForSecond(2);
    await this.loc_Monitor_TopPage_Menu_Icon.click();
  }

  public async verifyLeftPaneMenuList(menuListItems: string) {
    const locator = this.page.locator(`//div[(text()='${menuListItems}')]`);
    console.log('Menulist :' + locator);
    await this.locatorShouldBePresent(locator);
  }

  public async verifyTheStatusOfTheCampaign(campaignStatus: string) {
    console.log('\n Campaign ststus : ' + "//button[text()='" + campaignStatus + "']");

    const locator = this.page.locator("//button[text()='" + campaignStatus + "']");

    await this.locatorShouldBePresent(locator);
  }

  public async verifyProjectParameters_title1(projectTitle: string) {
    const project_Title = readFromYamlFilePath('CampaignData')[projectTitle]
    const locator = this.page.getByText(project_Title)
    console.log(locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyProjectParameters_title(campaignname: string) {
    const projectTitle = readFromYamlFilePath('CampaignData')[campaignname];
    const locator = this.page.locator('//div[(text()="' + projectTitle + '")]');
    console.log(locator);
    await this.locatorShouldBePresent(locator);
  }

  public async verifyProjectParameters_reward_value_title(campaignname: string) {
    const projectTitle = readFromYamlFilePath('CampaignData')[campaignname];
    const reward_value_title = readFromYamlFilePath('CampaignData')['reward_value_title'];
    const locator = this.page.locator('//div[text()="' + projectTitle + '"]/following::*/div/div[text()="' + reward_value_title + '"]');
    console.log(locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyProjectParameters_recruitment_condition_title(campaignname: string) {
    const projectTitle = readFromYamlFilePath('CampaignData')[campaignname];
    const recruitment_condition_title = readFromYamlFilePath('CampaignData')['recruitment_condition_title'];
    const locator = this.page.locator('//div[text()="' + projectTitle + '"]/following::*/div/div[text()="' + recruitment_condition_title + '"]');
    console.log(locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyProjectParameters_NGIndustry_title(campaignname: string) {
    const projectTitle = readFromYamlFilePath('CampaignData')[campaignname];
    const NGIndustry_title = readFromYamlFilePath('CampaignData')['NGIndustry_title'];
    const locator = this.page.locator('//div[text()="' + projectTitle + '"]/following::*/div/div[text()="' + NGIndustry_title + '"]');
    console.log(locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyProjectParameters_NGIndustry(campaignname: string) {
    const projectTitle = readFromYamlFilePath('CampaignData')[campaignname];
    const NGIndustries = readFromYamlFilePath('CampaignData')['NGIndustry'];
    const locator = this.page.locator('//div[text()="' + projectTitle + '"]/following::*/div/span[text()="' + NGIndustries + '"]');
    console.log(locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyProjectParameters_recruitment_condition(campaignname: string) {
    const projectTitle = readFromYamlFilePath('CampaignData')[campaignname];
    const recruitmentCondition = readFromYamlFilePath('CampaignData')['recruitmentCondition'];
    const locator = this.page.locator('//div[text()="' + projectTitle + '"]/following::*/div/div[text()="' + recruitmentCondition + '"]');
    console.log(locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyProjectParameters_interview_duration_title(campaignname: string) {
    const projectTitle = readFromYamlFilePath('CampaignData')[campaignname];
    const interview_duration_title = readFromYamlFilePath('CampaignData')['interview_duration_title'];
    const locator = this.page.locator('//div[text()="' + projectTitle + '"]/following::*/div/div[text()="' + interview_duration_title + '"]');
    console.log(locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyProjectParameters_monitor_count_title(campaignname: string) {
    const projectTitle = readFromYamlFilePath('CampaignData')[campaignname];
    const monitor_count_title = readFromYamlFilePath('CampaignData')['monitor_count_title'];
    const locator = this.page.locator('//div[text()="' + projectTitle + '"]/following::*/div/div[text()="' + monitor_count_title + '"]');
    console.log(locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyProjectParameters_rewardValue(campaignname: string) {
    const projectTitle = readFromYamlFilePath('CampaignData')[campaignname];
    const reward = readFromYamlFilePath('CampaignData')['reward'];
    const locator = this.page.locator('//div[text()="' + projectTitle + '"]/following-sibling::*/div/div[text()="' + reward + '"]');
    console.log("locator: " + locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyMonitorProfileDetails(status: string, monitorName: string) {
    const Gender = readFromYamlFilePath('monitordetails')[status];
    const locator = this.page.locator(this.loc_Client_CampaignDetails_MonitorStatus_Lbl.replace('NickName', monitorName).replace('Status', Gender));
    console.log("locator: " + locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyMonitorProfileDetails_Age() {
    const Gender = readFromYamlFilePath('CampaignData')['Age'];
    const locator = this.page.locator('(//div[text()="性別"]/following::*/div[text()="' + Gender + '"])[1]');
    console.log("locator: " + locator);
    await this.locatorShouldBePresent(locator);
  }

  public async verifyProjectParameters_interview_duration(campaignname: string) {
    const projectTitle = readFromYamlFilePath('CampaignData')[campaignname];
    const interview_duration = readFromYamlFilePath('CampaignData')['interviewDuration'];
    const locator = this.page.locator('//div[text()="' + projectTitle + '"]/following-sibling::*/div/div[text()="' + interview_duration + '"]');
    console.log(locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyProjectParameters_monitor_count(campaignname: string) {
    const projectTitle = readFromYamlFilePath('CampaignData')[campaignname];
    const monitor_count = readFromYamlFilePath('CampaignData')['monitorCount'];
    const locator = this.page.locator('//div[text()="' + projectTitle + '"]/following-sibling::*/div/div[text()="' + monitor_count + '"]');
    console.log(locator);
    await this.locatorShouldBePresent(locator);
  }



  public async clickOnTheProjectTitle(projectTitle: string) {
    const project_Title = readFromYamlFilePath('CampaignData')[projectTitle]
    const locator = this.page.locator('//div[text()="' + project_Title + '"]');
    console.log(locator);
    await this.page.reload();

    while (true) {
      this.waitForSecond(3);
      const campaignCount = await locator.count();
      console.log("campaignCount:", campaignCount);


      if (campaignCount === 0) {

        await this.loc_Monitor_Campaignlist_Pagination_NextClick_Btn.click();
        console.log("Going to next page");
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






  public async verifyPageNavigationToProjectDetailsPage(listOfProjectLink: string) {
    const locator = this.page.getByText(listOfProjectLink);
    console.log('Project Param UI:' + locator);
    await this.locatorShouldBePresent(locator);
  }
  public async verifyProjectParameters(
    projectTitle: string,
    projectParams: string,
    elementCount: string,
  ) {
    const locator = this.page.locator(
      '(//div/div[(text()="' + projectTitle + '")]/following::div/div/div)[' + elementCount + ']',
    );
    console.log(
      'Project Param UI:' +
      (await locator.innerText()) +
      '  projectParams Expected :' +
      projectParams,
    );

    await assert.equal(await locator.innerText(), projectParams);

  }

  public async getProjectListDetails() {
    let count = 2;
    let loop = true;
    let nextButton = this.page.locator('');

    while (loop == true) {
      console.log(
        'Locator Text :' +
        this.loc_Monitor_TopPage_InterviewList_NextPageButton_Btn.replace(
          '_ReplaceNumber',
          '' + count + '',
        ),
      );
      try {
        nextButton = this.page.locator(
          this.loc_Monitor_TopPage_InterviewList_NextPageButton_Btn.replace(
            '_ReplaceNumber',
            '' + count + '',
          ),
        );
        loop = await this.locatorShouldBePresent(nextButton);
        count++;
      } catch (e) {
        loop = false;
      }

      if (loop == true) {
        await nextButton.click();
      }
    }

    console.log('\n\n Campaign List :' + this.campaignList);
  }



  public async allSortedList(sortOrder: string, URL: string, method: string, header: Headers) {
    let pageCount = 1;
    let response;
    let responseBody;
    const detailsArray: any[] = [];

    const url1 = URL.replace('page=pageCount', `page=${pageCount}`);
    console.log(' List  : page=' + `${pageCount}` + '  :' + url1);

    response = await this.monitorCampaignListAPIResult(url1, method, header);
    responseBody = await response?.json();
    responseBody = await responseBody.data.details;
    if (responseBody.length < 3) {
      console.log(' response status  :' + response.status);
      console.log(' response status  :' + response.statusText);
    } else {
      detailsArray.push(Array.isArray(responseBody) ? responseBody : [responseBody]);
    }

    if (sortOrder == 'monitorPoints') {
      ScenarioContext.put('monitorPoints', detailsArray);
    } else if (sortOrder == 'endsAt') {
      ScenarioContext.put('endsAt', detailsArray);
    } else if (sortOrder == 'updatedAt') {
      ScenarioContext.put('updatedAt', detailsArray);
    } else if (sortOrder == 'interviewDuration') {
      ScenarioContext.put('interviewDuration', detailsArray);
    }
  }


  public async clickOnTheProjectTitleAgora(userName: string) {
    const page = await this.getUserPage(userName);
    const project_Title = readFromYamlFilePath('CampaignData')['campaignTitle'];

    const locator = await page.locator('//div[(text()="' + project_Title + '")]');
    console.log(locator)

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
