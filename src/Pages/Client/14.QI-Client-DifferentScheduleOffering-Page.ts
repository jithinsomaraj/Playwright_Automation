/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';
import { readFromYamlFilePath } from '../../utils/YamlReader';
import * as fs from 'fs';
import * as yaml from 'js-yaml';

export default class Client_IndividualScheduleOffer extends BasePage {
  page: Page;
  sampleRadioButtonLocator?: Locator;
  radiobuttonXpathLocator: string;
  readonly sampleListParameterloc: string;

  readonly rightarrowlocator: Locator;
  readonly leftarrowlocator: Locator;
  readonly selectYearloc: string;
  readonly selectDateValue: string;
  readonly loc_IndividualScheduleOffer_OfferTab_Tab: Locator;
  readonly loc_IndividualScheduleOffer_OfferSubmitButton_Btn: Locator;
  readonly loc_IndividualScheduleOffer_OfferConfirmationSubmitButton_Btn: Locator;
  readonly loc_IndividualScheduleOffer_TicketConsumptionConfirmationSubmitButton_Btn: Locator;

  readonly loc_IndividualScheduleOffer_DifferentOfferOptionButton_OptBtn: Locator;
  readonly loc_IndividualScheduleOffer_DifferentOfferCalIcon_Icon: string;
  readonly loc_IndividualScheduleOffer_DifferentOfferCalIcon_Icononly: string;
  readonly loc_IndividualScheduleOffer_DifferentOffer_Date_Cal: string;
  loc_IndividualScheduleOffer_DifferentOffer_Date_nextBtn: string;
  readonly loc_IndividualScheduleOffer_DifferentOffer_Time_ComBox: string;
  readonly loc_IndividualScheduleOffer_DifferentOffer_SelectTime_ComLst: string;
  readonly loc_IndividualScheduleOffer_DifferentOffer_NewRowAdd_Btn: Locator;
  loc_IndividualScheduleOffer_DifferentOffer_Monitor_Btn: string;
  loc_IndividualScheduleOffer_SelectOfferingDate_ChkBox: string;
  loc_IndividualScheduleOffer_OfferTab_url: string;
  loc_IndividualScheduleOffer_OfferTab_id: string;
  loc_IndividualScheduleOffer_OfferTab_pass: string;
  constructor(page: Page) {
    super(page);
    this.page = page;

    this.radiobuttonXpathLocator = '//*[(text()="fieldname")]/following::span[text()="value"]';
    this.sampleListParameterloc = '//li[text()="sampleListParametervalue"]';

    this.selectYearloc = '//button[text()="year"]';
    this.selectDateValue = '//button[text()="datevalue"]';

    this.rightarrowlocator = this.page.locator('//button[@aria-label="Next month"]');
    this.leftarrowlocator = this.page.locator('//button[@aria-label="Previous month"]');
    this.loc_IndividualScheduleOffer_OfferTab_Tab = page.getByRole('tab', { name: '日程' });
    this.loc_IndividualScheduleOffer_SelectOfferingDate_ChkBox =
      "//div[contains(text(),'OfferingDate')][contains(text(),'OfferTime')]/parent::*/parent::*/div/span/input";
    this.loc_IndividualScheduleOffer_OfferSubmitButton_Btn = this.page.getByRole('button', { name: '候補日程を送る' });
    this.loc_IndividualScheduleOffer_OfferConfirmationSubmitButton_Btn = this.page.getByTestId('modal-onAgree');
    this.loc_IndividualScheduleOffer_TicketConsumptionConfirmationSubmitButton_Btn = this.page.getByRole('button', { name: '承諾する' });
    this.loc_IndividualScheduleOffer_DifferentOfferOptionButton_OptBtn = this.page.getByRole('radio', { name: '候補日程以外の日程を選択する' });
    this.loc_IndividualScheduleOffer_DifferentOfferCalIcon_Icon =
      '(//*[@data-testid="CalendarIcon"])[Count]';
    this.loc_IndividualScheduleOffer_DifferentOfferCalIcon_Icononly = '//*[@data-testid="CalendarIcon"]';


    this.loc_IndividualScheduleOffer_DifferentOffer_Date_Cal = '//*[@data-timestamp="dateEpoch"]';
    this.loc_IndividualScheduleOffer_DifferentOffer_Date_nextBtn = 'ArrowRightIcon';
    this.loc_IndividualScheduleOffer_DifferentOffer_Time_ComBox =
      '(//*[@aria-haspopup="listbox"])[Count]';
    this.loc_IndividualScheduleOffer_DifferentOffer_SelectTime_ComLst =
      "//li[(text()='InterviewPeriod')]";
    this.loc_IndividualScheduleOffer_DifferentOffer_NewRowAdd_Btn = this.page.locator(
      "//button[(text()='日程を追加する')]/span",
    );

    this.loc_IndividualScheduleOffer_DifferentOffer_Monitor_Btn = "(//div[(text()='NickName')])[1]";
    this.loc_IndividualScheduleOffer_OfferTab_url = '//div[text()="インタビューURL"]/following::*[1]';
    this.loc_IndividualScheduleOffer_OfferTab_id = '//div[text()="ID"]/following::*[1]';
    this.loc_IndividualScheduleOffer_OfferTab_pass = '//div[text()="パスコード"]/following::*[1]'
  }

  public async clickOnAMonitor(monitor: string) {
    const locator = this.page.locator(
      this.loc_IndividualScheduleOffer_DifferentOffer_Monitor_Btn.replace('NickName', monitor),
    );
    await this.waitForSecond(2);
    await locator.click();
  }
  public async selectScheduleOfferTab() {
    await this.loc_IndividualScheduleOffer_OfferTab_Tab.click();

  }

  public async selectOneOfferDate(additionOfDay: number, time: string) {
    const Time = readFromYamlFilePath('CampaignData')[time];
    const offeringDate = String(await this.getDates('yyyy/mm/dd', additionOfDay));


    console.log('Date :' + offeringDate);
    const locator = this.page.locator(
      this.loc_IndividualScheduleOffer_SelectOfferingDate_ChkBox
        .replace('OfferingDate', (offeringDate))
        .replace('OfferTime', Time),
    );

    console.log(locator);

    try {
      await this.waitForSecond(2);
      await locator.click();
    } catch {
      console.log('First time offering');
    }
  }

  public async clickOnOfferSubmitButton() {
    await this.waitForSecond(2);
    await this.loc_IndividualScheduleOffer_OfferSubmitButton_Btn.click();
  }

  public async clickOnOfferConfirmationSubmitButton() {
    await this.waitForSecond(2);
    try {
      await this.loc_IndividualScheduleOffer_OfferConfirmationSubmitButton_Btn.click();

      await this.waitToDisappearElement(
        this.loc_IndividualScheduleOffer_OfferConfirmationSubmitButton_Btn,
      );
    } catch {
      console.log('First time offering');
    }
  }
  public async clickOnTicketConsumptionConfirmationSubmitButton() {
    await this.waitForSecond(2);
    await this.clickIFlocatorIsPresent(this.loc_IndividualScheduleOffer_TicketConsumptionConfirmationSubmitButton_Btn);
    await this.waitForSecond(2);
    await this.clickIFlocatorIsPresent(this.loc_IndividualScheduleOffer_OfferConfirmationSubmitButton_Btn);

  }

  public async selectDifferentScheduleOfferingOptionButton() {
    await this.waitForSecond(2);
    await this.loc_IndividualScheduleOffer_DifferentOfferOptionButton_OptBtn.click();
  }

  public async clickOnCalendarIcon(count: string) {
    const locator = this.page.locator(
      this.loc_IndividualScheduleOffer_DifferentOfferCalIcon_Icon.replace('Count', count),
    );
    await this.waitForSecond(2);
    await locator.click();
  }


  public async clickOnCalendarIcononly() {
    const locator = this.page.locator(this.loc_IndividualScheduleOffer_DifferentOfferCalIcon_Icononly);
    await this.waitForSecond(2);
    await locator.click();
  }

  public async selectNewOfferingDate() {


    const Startdatefrocalendar = await this.getDates('yyyy-mm-dd', 3);
    const epochStartdate = await this.epochtodate(Startdatefrocalendar);


    const locator = this.page.locator(this.loc_IndividualScheduleOffer_DifferentOffer_Date_Cal.replace('dateEpoch', epochStartdate));
    await this.waitForSecond(2);
    const count = await locator.count();
    if (count == 0) {

      await this.page.getByTestId(this.loc_IndividualScheduleOffer_DifferentOffer_Date_nextBtn).click();
      await this.waitForSecond(2);
      await locator.click();

    } else {
      await locator.click();
    }


  }

  public async clickOnNewOfferTimeComboBox(count: string) {
    const locator = this.page.locator(
      this.loc_IndividualScheduleOffer_DifferentOffer_Time_ComBox.replace('Count', count),
    );
    await this.waitForSecond(2);
    await locator.click();
  }

  public async selectNewOfferingTime(interviewTime: string) {
    console.log('interviewTime :' + interviewTime);
    const locator = this.page.locator(
      this.loc_IndividualScheduleOffer_DifferentOffer_SelectTime_ComLst.replace(
        'InterviewPeriod',
        interviewTime,
      ),
    );
    await this.waitForSecond(2);
    await locator.click();
  }

  public async addNewRowForOfferDate() {
    await this.loc_IndividualScheduleOffer_DifferentOffer_NewRowAdd_Btn.click();
  }

  public async updateYAMLData(fieldToUpdate: string, newValue: string) {
    try {
      // Read YAML file
      const yamlFile = fs.readFileSync('Fixtures/data.yaml', 'utf8');

      // Parse YAML content
      const data: any = yaml.load(yamlFile);

      // Update the desired field

      if (fieldToUpdate === 'Guest_url') {
        data.GuestUserDetails[0].Guest_url = newValue;
      }
      else if (fieldToUpdate === 'Guest_userID') {
        data.GuestUserDetails[1].Guest_userID = newValue;
      }

      else if (fieldToUpdate === 'Guest_password') {
        data.GuestUserDetails[2].Guest_password = newValue;
      }
      else {
        console.error('Invalid fieldToUpdate parameter');
        return;
      }

      // Convert data back to YAML format
      const updatedYAML = yaml.dump(data);

      // Write updated YAML back to file
      fs.writeFileSync('Fixtures/data.yaml', updatedYAML, 'utf8');

      console.log('YAML file updated successfully.');
    } catch (error) {
      console.error('Error updating YAML file:', error);
    }
  }

  public async saveGuestUserInfo() {

    const locator1 = this.page.locator(this.loc_IndividualScheduleOffer_OfferTab_url);
    const locator2 = this.page.locator(this.loc_IndividualScheduleOffer_OfferTab_id);
    const locator3 = this.page.locator(this.loc_IndividualScheduleOffer_OfferTab_pass);

    const url = await locator1.innerText();
    const id = await locator2.innerText()
    const pass = await locator3.innerText()
    const monitorName = readFromYamlFilePath('GuestUserDetails')['Guest_url']
    console.log("data----------------" + monitorName);

    await this.updateYAMLData('Guest_url', url.trim());
    await this.updateYAMLData('Guest_userID', id.trim());
    await this.updateYAMLData('Guest_password', pass.trim());


  }

  public async sendScheduleOffer(time: string) {

    await this.selectScheduleOfferTab();
    await this.selectDifferentScheduleOfferingOptionButton();
    await this.clickOnCalendarIcon("1");
    await this.selectNewOfferingDate();
    await this.clickOnNewOfferTimeComboBox("1");
    await this.selectNewOfferingTime(time);
    await this.clickOnOfferSubmitButton();
    await this.clickOnOfferConfirmationSubmitButton();
  }

}
