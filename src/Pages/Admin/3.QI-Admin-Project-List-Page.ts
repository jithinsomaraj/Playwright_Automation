import { BasePage } from '../../utils/BasePage';
import { Page } from '@playwright/test';
import ScenarioContext from '../../support/ScenarioContext';
import { readFromYamlFilePath } from '../../utils/YamlReader';


export class AdminProjectList extends BasePage {

  loc_Admin_ProjectList_menu: string;
  loc_Admin_ProjectList_heading: string;


  loc_Admin_ProjectList_implementationsearchRange: string;
  loc_Admin_ProjectList_CampaignnameSearch: string;
  loc_Admin_ProjectList_Campaign_slotduratiodropdown: string;
  loc_Admin_ProjectList_Campaign_slotdurationvalue: string;
  loc_Admin_ProjectList_Campaign_search: string;
  loc_Admin_ProjectList_Campaign_searchresultname: string;
  loc_Admin_ProjectList_implementationsearchRangeClear: string
  loc_Admin_ProjectList_implementationsearchStartdate: string
  loc_calendarprevious: string
  loc_calendarnext: string

  constructor(page3: Page) {
    super(page3);
    this.page = page3;

    this.loc_Admin_ProjectList_menu = 'menuitem-0'
    this.loc_Admin_ProjectList_heading = 'top-page.header'
    this.loc_Admin_ProjectList_implementationsearchRange = 'top-page-filter-implementation-period'
    this.loc_Admin_ProjectList_implementationsearchRangeClear = 'ClearIcon'
    this.loc_Admin_ProjectList_implementationsearchStartdate = '//*[@data-timestamp="starttimestamp"]'
    this.loc_Admin_ProjectList_CampaignnameSearch = 'top-page-filter-interview-title'
    this.loc_Admin_ProjectList_Campaign_slotduratiodropdown = '(//*[@aria-haspopup="listbox"])[2]';
    this.loc_Admin_ProjectList_Campaign_slotdurationvalue = 'values';
    this.loc_Admin_ProjectList_Campaign_search = 'filter-submit';
    this.loc_Admin_ProjectList_Campaign_searchresultname = '//*[@data-testid="title0"]/child::div[1]/child::div[text()="campaignName"]'
    this.loc_calendarprevious = 'Previous month';
    this.loc_calendarnext = 'ArrowRightIcon';
  }


  public async clickProjectListSideMenu() {
    await this.waitForSecond(2);
    const page3 = ScenarioContext.get('NewTab');
    await this.waitForSecond(2);
    const sidemenu = page3.getByTestId(this.loc_Admin_ProjectList_menu);

    await sidemenu.click();

  }

  public async VerifypageTitle() {
    const page3 = ScenarioContext.get('NewTab');
    const title = page3.getByTestId(this.loc_Admin_ProjectList_heading);
    console.log(title);
    await this.locatorShouldBePresent(title);
  }


  public async enterCampaignName(campaigname: string) {
    const page3 = ScenarioContext.get('NewTab');
    const campaignanme = readFromYamlFilePath('AdminCampaignData')[campaigname];
    await this.waitForSecond(2);
    const Campaignname = page3.getByTestId(this.loc_Admin_ProjectList_CampaignnameSearch);
    await Campaignname.fill(campaignanme);

  }





  public async enterImplementationsearchDates() {
    const page3 = ScenarioContext.get('NewTab');

    const clear = page3.getByTestId(this.loc_Admin_ProjectList_implementationsearchRangeClear);
    await clear.click();
    const opencalendar = page3.getByTestId(this.loc_Admin_ProjectList_implementationsearchRange);
    await opencalendar.click();

    const startdate = readFromYamlFilePath('AdminCampaignData')['StartDate'];
    const enddate = readFromYamlFilePath('AdminCampaignData')['EndDate'];




    const epochstartdate = this.epochtodate(startdate);
    const epochenddate = this.epochtodate(enddate);

    console.log(epochstartdate);
    console.log(epochenddate);


    await this.waitForSecond(2);


    const startdateselect = page3.locator((this.loc_Admin_ProjectList_implementationsearchStartdate).replace('starttimestamp', (await epochstartdate).toString()));
    console.log(startdateselect);
    const count = await startdateselect.count();

    console.log(count);

    if (count == 0) {
      const prevmonth = await page3.getByTestId(this.loc_calendarprevious);
      await prevmonth.click();
      await startdateselect.click();

    } else {
      await startdateselect.click();
    }


    const enddateselect = page3.locator((this.loc_Admin_ProjectList_implementationsearchStartdate).replace('starttimestamp', (await epochenddate).toString()));
    await enddateselect.click();


  }




  public async enterslotduration() {
    const page3 = ScenarioContext.get('NewTab');
    const dropdown = page3.locator(this.loc_Admin_ProjectList_Campaign_slotduratiodropdown);
    await this.waitForSecond(2);
    await dropdown.click();

  }


  public async chooseslotvalue() {
    const page3 = ScenarioContext.get('NewTab');
    const duration = readFromYamlFilePath('AdminCampaignData')['interviewDurationwithsymbol'];
    console.log(duration);
    const locator = page3.getByTestId(this.loc_Admin_ProjectList_Campaign_slotdurationvalue.replace('values', duration));


    console.log(locator);
    await locator.click();

  }



  public async clicksearch() {

    const page3 = ScenarioContext.get('NewTab');
    const search = page3.getByTestId(this.loc_Admin_ProjectList_Campaign_search);
    console.log(search);
    await this.waitForSecond(3);
    await search.click();
    await this.waitForSecond(3);
  }


  public async verifycampaignname() {
    const page3 = ScenarioContext.get('NewTab');
    const campaign = readFromYamlFilePath('AdminCampaignData')['campaignTitle'];
    const locator = await page3.locator(this.loc_Admin_ProjectList_Campaign_searchresultname.replace('campaignName', campaign));
    console.log(locator);
    await this.locatorShouldBePresent(locator);

  }











}



