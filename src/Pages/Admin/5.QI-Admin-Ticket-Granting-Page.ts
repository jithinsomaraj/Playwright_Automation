import { BasePage } from '../../utils/BasePage';
import { Page, expect } from '@playwright/test';
import ScenarioContext from '../../support/ScenarioContext';
import { readFromYamlFilePath } from '../../utils/YamlReader';


// import path from 'path';
// import { readFromYamlFilePath } from '../../utils/YamlReader';
import * as fs from 'fs';
import * as yaml from 'js-yaml';





export class TicketGranting extends BasePage {

    loc_Admin_Customerid: string;
    loc_Admin_Ticketgrantheader: string;
    loc_Admin_TicketGrant_CustomerID: string;
    loc_Admin_TicketGrantButton: string;
    loc_Admin_TicketEntry: string;
    loc_Admin_TicketexpiryDatecalendar: string;
    loc_Admin_TicketMessage: string;
    loc_Admin_AddticketSubmit: string;
    loc_Admin_ticketAgree: string;
    loc_Admin_Addticket_Expiry: string;
    loc_Admin_Ticketgrant_statusedit: string;
    loc_Admin_Ticketgrant_statusDropdown: string;
    loc_Admin_Ticketgrant_statusSubmit: string;
    loc_Admin_Ticketgrant_activestatus: string;
    loc_Admin_Ticketgrant_inactivestatus: string;
    loc_Admin_invalidTicketEntry: string;
    loc_Admin_TicketRemoveButton: string;
    loc_Admin_removeticketSubmit: string;
    loc_Admin_TicketGrant_customertickets: string;
    loc_Admin_TicketGrant_projectList_Campaignname: string;
    loc_Admin_TicketGrant_projectList_nextpage: string;
    loc_Admin_Ticketgrant_customerstatusactive: string;

    loc_Admin_Ticketgrant_customerstatusinactive: string;


    loc_Admin_TicketGrant_projectList_status: string;
    loc_Admin_TicketGrant_projectList_implementationDate: string;
    loc_Admin_TicketGrant_projectList_CompanyName: string;
    loc_Admin_TicketGrant_projectList_TotalPeople: string;
    loc_Admin_TicketGrant_projectList_Requested: string;
    loc_Admin_TicketGrant_projectList_deliveryvideo: string;
    loc_Admin_TicketGrant_projectList_Completed: string;
    loc_Admin_Ticketgrant_currentTicket: string;
    loc_Admin_TicketgrantpageClassificationtype: string;
    loc_Admin_Ticketgrantpage_fullname: string;
    loc_Admin_Ticketgrantpage_kananame: string;
    loc_Admin_Ticketgrantpage_email: string;
    loc_Admin_Ticketgrantpage_companyname: string;
    loc_Admin_TicketGrant_ConsumptionHistory: string;
    loc_Admin_TicketGrant_ConsumptionHistory_message: string;
    loc_Admin_TicketGrant_ConsumptionHistory_points: string;


    loc_Admin_TicketGrant_InquiryDate: string;
    loc_Admin_TicketGrant_InquiryType: string;
    loc_Admin_TicketGrant_InquiryTitle: string;

    loc_Admin_TicketGrant_Inquiry: string;






    constructor(page3: Page) {
        super(page3);
        this.page = page3;

        // this.loc_Admin_TicketGrantButton = this.page.getByLabel

        this.loc_Admin_Customerid = 'customerId0'
        this.loc_Admin_Ticketgrantheader = 'ticket-granting.header'


        this.loc_Admin_TicketgrantpageClassificationtype = 'classificationType'
        this.loc_Admin_Ticketgrantpage_fullname = 'fullName'
        this.loc_Admin_Ticketgrantpage_kananame = 'furigana'
        this.loc_Admin_Ticketgrantpage_email = 'email'
        this.loc_Admin_Ticketgrantpage_companyname = 'companyName'



        this.loc_Admin_Ticketgrant_statusedit = 'customer-status-edit'
        this.loc_Admin_Ticketgrant_statusDropdown = 'combobox'
        this.loc_Admin_Ticketgrant_activestatus = '有効'
        this.loc_Admin_Ticketgrant_inactivestatus = '無効'
        this.loc_Admin_Ticketgrant_statusSubmit = '保存'
        this.loc_Admin_Ticketgrant_currentTicket = '//*[@id="main-container"]/div[2]/div/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]'

        this.loc_Admin_Ticketgrant_customerstatusactive = '//*[text()="顧客状態"]/following-sibling::button [text()="有効"]'
        this.loc_Admin_Ticketgrant_customerstatusinactive = '//*[text()="顧客状態"]/following-sibling::button [text()="無効"]'
        this.loc_Admin_TicketGrant_CustomerID = '//*[text()="システム情報"]/following-sibling::div[1]//following-sibling::div[1][text()="CustomerID"]'


        this.loc_Admin_TicketGrantButton = 'submit-granting'
        this.loc_Admin_TicketRemoveButton = 'submit-invalidation'
        this.loc_Admin_TicketEntry = 'validTickets'
        this.loc_Admin_TicketexpiryDatecalendar = 'openPickerButton'
        this.loc_Admin_TicketMessage = 'message'
        this.loc_Admin_AddticketSubmit = 'チケットを付与する'
        this.loc_Admin_removeticketSubmit = 'チケットを無効化する'
        this.loc_Admin_ticketAgree = 'modal-onAgree'
        this.loc_Admin_Addticket_Expiry = '//*[@data-timestamp="expirytimestamp"]'
        this.loc_Admin_invalidTicketEntry = 'invalidTickets'
        this.loc_Admin_TicketGrant_customertickets = '//*[text()="有効チケット枚数"]/following-sibling::div[1]/child::div[1][text()="ticket"]'


        this.loc_Admin_TicketGrant_projectList_Campaignname = '//*[@data-testid="titlenumber"]/child::div[1]/child::div[text()="campaignname"]'
        this.loc_Admin_TicketGrant_projectList_status = '//*[@data-testid="statusnumber"]/child::button[text()="statustext"]'
        this.loc_Admin_TicketGrant_projectList_implementationDate = '//*[@data-testid="releaseDatenumber"]/child::div[1][text()="implementationdate"]'
        this.loc_Admin_TicketGrant_projectList_CompanyName = '//*[@data-testid="companyNamenumber"]/child::div[1]/child::div[text()="companyname"]'
        this.loc_Admin_TicketGrant_projectList_TotalPeople = '//*[@data-testid="monitorCountnumber"]/child::div[1][text()="totalpeople"]'
        this.loc_Admin_TicketGrant_projectList_Requested = '//*[@data-testid="performedCountnumber"]/child::div[1][text()="requested"]'
        this.loc_Admin_TicketGrant_projectList_Completed = '//*[@data-testid="confirmedCountnumber"]/child::div[1][text()="completed"]'
        this.loc_Admin_TicketGrant_projectList_nextpage = 'Go to next page'
        this.loc_Admin_TicketGrant_projectList_deliveryvideo = 'back-button'

        // =======================================================================================================


        this.loc_Admin_TicketGrant_ConsumptionHistory = 'MuiTab1'
        // this.loc_Admin_TicketGrant_ConsumptionList_status = '//*[@data-testid="statusnumber"]/child::button[text()="statustext"]'

        this.loc_Admin_TicketGrant_ConsumptionHistory_message = '//*[@data-testid="messagenumber"]/child::div[1]/child::div[text()="Messagetext"]'
        this.loc_Admin_TicketGrant_ConsumptionHistory_points = '//*[@data-testid="consumedTicketsnumber"]/child::div[1][text()="ticketsvalue"]'


        // =======================================================================================================

        // Inquiry Tab
        this.loc_Admin_TicketGrant_Inquiry = 'MuiTab2'

        this.loc_Admin_TicketGrant_InquiryDate = '//*[@data-testid="inquiryDatenumber"]/child::div[1][text()="datetext"]'
        this.loc_Admin_TicketGrant_InquiryType = '//*[@data-testid="inquiryTypenumber"][text()="Typetext"]'
        this.loc_Admin_TicketGrant_InquiryTitle = '//*[@data-testid="inquiryTitle"]/child::div[1]/child::div[text()="Titletext"]'




    }


    public async clickOnCustomerID() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const customerID = await page3.getByTestId(this.loc_Admin_Customerid);
        await customerID.click();

    }

    public async VerifypageTitle() {
        const page3 = ScenarioContext.get('NewTab');
        const title = await page3.getByTestId(this.loc_Admin_Ticketgrantheader);
        await this.locatorShouldBePresent(title);
    }

    public async VerifyCustomerID() {
        const page3 = ScenarioContext.get('NewTab');
        const CustID = readFromYamlFilePath('AdminTicketGrant')['CustomerID'];
        const title = await page3.locator(this.loc_Admin_TicketGrant_CustomerID.replace('CustomerID', CustID));
        await this.locatorShouldBePresent(title);
    }

    public async VerifyCustomerdetails() {
        const page3 = ScenarioContext.get('NewTab');
        const Classification = readFromYamlFilePath('AdminTicketGrant')['Classification'];
        const Name = readFromYamlFilePath('AdminTicketGrant')['Name'];
        const kanaName = readFromYamlFilePath('AdminTicketGrant')['kanaName'];
        const Email = readFromYamlFilePath('AdminTicketGrant')['Email'];
        const ClientCompanyname = readFromYamlFilePath('AdminTicketGrant')['ClientCompanyname'];

        const Classificationvalue = await page3.getByTestId(this.loc_Admin_TicketgrantpageClassificationtype).textContent();
        expect(Classificationvalue).toBe(Classification);
        const Namevalue = await page3.getByTestId(this.loc_Admin_Ticketgrantpage_fullname).textContent();
        expect(Namevalue).toBe(Name);
        const kanaNamevalue = await page3.getByTestId(this.loc_Admin_Ticketgrantpage_kananame).textContent();
        expect(kanaNamevalue).toBe(kanaName);
        const Emailvalue = await page3.getByTestId(this.loc_Admin_Ticketgrantpage_email).textContent();
        expect(Emailvalue).toBe(Email);
        const ClientCompanynamevalue = await page3.getByTestId(this.loc_Admin_Ticketgrantpage_companyname).textContent();
        expect(ClientCompanynamevalue).toBe(ClientCompanyname);
    }




    public async clickOnstatusEditbutton() {
        const page3 = ScenarioContext.get('NewTab');
        const statusEdit = await page3.getByTestId(this.loc_Admin_Ticketgrant_statusedit);
        await statusEdit.click();
    }

    public async clickOnstatusdropdown() {
        const page3 = ScenarioContext.get('NewTab');
        const statusEdit = await page3.getByRole(this.loc_Admin_Ticketgrant_statusDropdown);
        await statusEdit.click();
    }

    public async Selectactivestatus() {
        const page3 = ScenarioContext.get('NewTab');
        const statuselement = await page3.getByTestId(this.loc_Admin_Ticketgrant_activestatus);
        await statuselement.click();
    }

    public async Selectinactivestatus() {
        const page3 = ScenarioContext.get('NewTab');
        const statuselement = await page3.getByTestId(this.loc_Admin_Ticketgrant_inactivestatus);
        await statuselement.click();
    }


    public async Statussubmit() {
        const page3 = ScenarioContext.get('NewTab');
        const statussubmit = await page3.getByText(this.loc_Admin_Ticketgrant_statusSubmit);
        await statussubmit.click();
        this.waitForSecond(2);
    }


    public async VerifyinvalidStatus() {
        const page3 = ScenarioContext.get('NewTab');
        const status = await page3.locator(this.loc_Admin_Ticketgrant_customerstatusinactive);
        await this.locatorShouldBePresent(status);
    }



    public async VerifyvalidStatus() {
        const page3 = ScenarioContext.get('NewTab');
        const status = await page3.locator(this.loc_Admin_Ticketgrant_customerstatusactive);
        await this.locatorShouldBePresent(status);
    }


    public async Updatecurrentpoints() {
        const page3 = ScenarioContext.get('NewTab');
        const status = await page3.locator(this.loc_Admin_Ticketgrant_customerstatusactive);
        await this.locatorShouldBePresent(status);
    }




    public async clickOnTicketGrantButton() {
        const page3 = ScenarioContext.get('NewTab');
        const TicketGrantBTN = await page3.getByTestId(this.loc_Admin_TicketGrantButton);
        await TicketGrantBTN.click();
    }


    public async enterTickets() {
        const page3 = ScenarioContext.get('NewTab');
        const tickets = readFromYamlFilePath('AdminTicketGrant')['Addtickets'];
        const ticketsnew = tickets.toString();
        const Ticket = await page3.getByTestId(this.loc_Admin_TicketEntry);
        await Ticket.fill(ticketsnew);
    }


    public async enterTicketExpiry() {
        const page3 = ScenarioContext.get('NewTab');
        const ExpiryDate = readFromYamlFilePath('AdminTicketGrant')['Expiry'];
        const Ticketexpiry = await page3.getByTestId(this.loc_Admin_TicketexpiryDatecalendar);
        await Ticketexpiry.click();
        const expirydate = this.epochtodate(ExpiryDate);
        const dateselect = await page3.locator((this.loc_Admin_Addticket_Expiry).replace('expirytimestamp', (await expirydate).toString()));
        await dateselect.click();
    }



    public async enterAddTicketaddmessage() {
        const page3 = ScenarioContext.get('NewTab');
        const currentTimeEpoch = await Math.floor(new Date().getTime() / 1000);
        const MessageTextfromyaml = readFromYamlFilePath('AdminTicketGrant')['Addmessage'];
        const MessageText = MessageTextfromyaml + currentTimeEpoch
        await this.updateYAMLFieldDatastring('Addmessage', MessageText);
        const Message = await page3.getByTestId(this.loc_Admin_TicketMessage);
        await Message.fill(MessageText);
    }



    public async enterRemoveTicketaddmessage() {
        const page3 = ScenarioContext.get('NewTab');

        const currentTimeEpoch = await Math.floor(new Date().getTime() / 1000);

        const MessageTextfromyaml = readFromYamlFilePath('AdminTicketGrant')['RemoveMessage'];
        const MessageText = MessageTextfromyaml + currentTimeEpoch
        await this.updateYAMLFieldDatastring('RemoveMessage', MessageText);
        const Message = await page3.getByTestId(this.loc_Admin_TicketMessage);
        await Message.fill(MessageText);
    }



    public async AddTicketSubmit() {
        const page3 = ScenarioContext.get('NewTab');
        await this.GetCurrentTickets();
        const Submit = await page3.getByText(this.loc_Admin_AddticketSubmit);
        await Submit.click();

    }

    public async RemoveTicketSubmit() {
        const page3 = ScenarioContext.get('NewTab');
        await this.GetCurrentTickets();
        const Submit = await page3.getByText(this.loc_Admin_removeticketSubmit);
        await Submit.click();

    }





    public async clickOnAgree() {
        const page3 = ScenarioContext.get('NewTab');
        const TicketGrantBTN = await page3.getByTestId(this.loc_Admin_ticketAgree);
        await TicketGrantBTN.click();
        this.waitForSecond(2);
    }


    public async clickTicketRemove() {
        const page3 = ScenarioContext.get('NewTab');
        const DeleteButton = await page3.getByTestId(this.loc_Admin_TicketRemoveButton);
        this.waitForSecond(2);
        await DeleteButton.click();
        this.waitForSecond(2);

    }



    public async enterinvalidTickets() {
        const page3 = ScenarioContext.get('NewTab');
        const tickets = readFromYamlFilePath('AdminTicketGrant')['removetickets'];
        const ticketsnew = tickets.toString();
        const Ticket = await page3.getByTestId(this.loc_Admin_invalidTicketEntry);
        await Ticket.fill(ticketsnew);
    }


    public async GetCurrentTickets() {
        const page3 = ScenarioContext.get('NewTab');
        const nooftickets = await page3.locator(this.loc_Admin_Ticketgrant_currentTicket);
        const value = await nooftickets.textContent();
        console.log(nooftickets)
        await this.updateYAMLFieldDataNumber('CurrentTickets', value);

    }



    public async VerifyAddedTickets() {
        const page3 = ScenarioContext.get('NewTab');
        const AddTickets = readFromYamlFilePath('AdminTicketGrant')['Addtickets'];
        const Currenttickets = readFromYamlFilePath('AdminTicketGrant')['CurrentTickets'];
        const totalTickets = parseInt(AddTickets) + parseInt(Currenttickets)
        const nooftickets = await page3.locator(this.loc_Admin_TicketGrant_customertickets.replace('ticket', totalTickets.toString()));
        await this.updateYAMLFieldDataNumber('ticketAftergrant', totalTickets);
        await this.locatorShouldBePresent(nooftickets);
    }

    public async VerifyRemovedTickets() {
        await this.GetCurrentTickets();
        const page3 = ScenarioContext.get('NewTab');
        const removeTickets = readFromYamlFilePath('AdminTicketGrant')['removetickets'];
        const ticketAftergrant = readFromYamlFilePath('AdminTicketGrant')['ticketAftergrant'];
        const totalTickets = parseInt(ticketAftergrant) - parseInt(removeTickets);
        const nooftickets = await page3.locator(this.loc_Admin_TicketGrant_customertickets.replace('ticket', totalTickets.toString()));
        await this.locatorShouldBePresent(nooftickets);
    }




    public async findCampaign() {
        const page3 = ScenarioContext.get('NewTab');
        const campaignname = readFromYamlFilePath('AdminTicketGrant')['CampiagnName'];

        var count = 0;
        while (count === 0) {

            // const row = page3.getByTestId(this.loc_Admin_TicketGrant_projectList_deliveryvideo).count();

            for (let i = 0; i <= 9; i++) {
                const title = "title" + i;
                const locator = await page3.locator((this.loc_Admin_TicketGrant_projectList_Campaignname)
                    .replace('campaignname', campaignname).replace('titlenumber', title.toString()));
                console.log(locator);
                this.waitForSecond(1);

                count = await locator.count();
                this.waitForSecond(1);
                if (count === 1) {
                    console.log("Campaign found");
                    await this.verfiycampaigndeatils(i)
                    return; // Exit the function once campaign is found
                }
            }

            const nextpage = await page3.getByLabel(this.loc_Admin_TicketGrant_projectList_nextpage);

            if (await nextpage.isDisabled()) {
                console.log("Campaign not found");
                // Handle the scenario where the campaign is not found
                return; // Exit the function if next page is disabled
            } else {
                await nextpage.click();

                this.waitForSecond(2);
            }
        }
    }




    public async verfiycampaigndeatils(row: Number) {
        const page3 = ScenarioContext.get('NewTab');


        console.log("enterred function");

        const campaignStatus = readFromYamlFilePath('AdminTicketGrant')['CampaignStatus'];
        const releasedate = readFromYamlFilePath('AdminTicketGrant')['Releasedate'];
        const companyName = readFromYamlFilePath('AdminTicketGrant')['CompanyName'];
        const totalPeople = readFromYamlFilePath('AdminTicketGrant')['TotalPeople'];
        const requestedPeople = readFromYamlFilePath('AdminTicketGrant')['RequestedPeople'];
        const confirmedPeople = readFromYamlFilePath('AdminTicketGrant')['ConfirmedPeople'];

        const campaignStatus_Element = await page3.locator((this.loc_Admin_TicketGrant_projectList_status).replace('statustext', campaignStatus).replace('number', row.toString()));
        const releasedate_Element = await page3.locator((this.loc_Admin_TicketGrant_projectList_implementationDate).replace('implementationdate', releasedate).replace('number', row.toString()));
        const companyName_Element = await page3.locator((this.loc_Admin_TicketGrant_projectList_CompanyName).replace('companyname', companyName).replace('number', row.toString()));
        const totalPeople_Element = await page3.locator((this.loc_Admin_TicketGrant_projectList_TotalPeople).replace('totalpeople', totalPeople).replace('number', row.toString()));
        const requestedPeople_Element = await page3.locator((this.loc_Admin_TicketGrant_projectList_Requested).replace('requested', requestedPeople).replace('number', row.toString()));
        const confirmedPeople_Element = await page3.locator((this.loc_Admin_TicketGrant_projectList_Completed).replace('completed', confirmedPeople).replace('number', row.toString()));



        await this.locatorShouldBePresent(campaignStatus_Element);
        await this.locatorShouldBePresent(releasedate_Element);
        await this.locatorShouldBePresent(companyName_Element);
        await this.locatorShouldBePresent(totalPeople_Element);
        await this.locatorShouldBePresent(requestedPeople_Element);
        await this.locatorShouldBePresent(confirmedPeople_Element);



    }



    public async updateYAMLFieldDataNumber(fieldToUpdate: string, newValue: number) {
        try {
            // Read YAML file
            const yamlFile = fs.readFileSync('Fixtures/data.yaml', 'utf8');

            // Parse YAML content
            const data: any = yaml.load(yamlFile);

            // Update the desired field
            if (fieldToUpdate === 'CurrentTickets') {
                data.AdminTicketGrant[1].CurrentTickets = newValue;
            } else if (fieldToUpdate === 'ticketAftergrant') {
                data.AdminTicketGrant[4].ticketAftergrant = newValue;
            } else {
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



    public async updateYAMLFieldDatastring(fieldToUpdate: string, newValue: string) {
        try {
            // Read YAML file
            const yamlFile = fs.readFileSync('Fixtures/data.yaml', 'utf8');

            // Parse YAML content
            const data: any = yaml.load(yamlFile);

            // Update the desired field
            if (fieldToUpdate === 'RemoveMessage') {
                data.AdminTicketGrant[7].RemoveMessage = newValue;
            } else if (fieldToUpdate === 'Addmessage') {
                data.AdminTicketGrant[4].Addmessage = newValue;
            } else {
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



    public async findticketconsumptionentry() {
        const page3 = ScenarioContext.get('NewTab');
        const Message = readFromYamlFilePath('AdminTicketGrant')['RemoveMessage'];

        while (true) {
            // const rows = await page3.locator('your-row-selector').count();

            for (let i = 0; i < 10; i++) {
                const message = "message" + i;
                const locator = await page3.locator((this.loc_Admin_TicketGrant_ConsumptionHistory_message)
                    .replace('Messagetext', Message).replace('messagenumber', message.toString()));
                console.log(locator);
                if (await locator.count() === 1) {
                    console.log("Entry found");
                    await this.verfiyentrydetails(i);
                    return; // Exit the function once entry is found
                }
            }

            const nextpage = await page3.getByLabel(this.loc_Admin_TicketGrant_projectList_nextpage);

            if (await nextpage.isDisabled()) {
                console.log("Entry not found");
                // Handle the scenario where the campaign is not found
                return; // Exit the function if next page is disabled
            } else {
                await nextpage.click();
                await page3.waitForLoadState('load', { timeout: 90000 });
            }
        }
    }





    public async verfiyentrydetails(row: Number) {
        const page3 = ScenarioContext.get('NewTab');


        console.log("enterred function");

        const ticketsusedsvalue = readFromYamlFilePath('AdminTicketGrant')['removetickets'];
        const ticketsusedsvalue_Element = page3.locator((this.loc_Admin_TicketGrant_ConsumptionHistory_points).replace('ticketsvalue', ticketsusedsvalue)
            .replace('number', row.toString()));
        await this.locatorShouldBePresent(ticketsusedsvalue_Element);
        this.waitForSecond(2);
        await this.updateYAMLFieldDatastring('Addmessage', '10 tickets added on'); // reset the data yaml
        await this.updateYAMLFieldDatastring('RemoveMessage', '10 Ticket removed on'); // reset the data yaml

    }




    public async clickConsumptionhistory() {
        const page3 = ScenarioContext.get('NewTab');
        const Tab = await page3.getByTestId(this.loc_Admin_TicketGrant_ConsumptionHistory);
        await Tab.click();
    }

    public async clickInquiry() {
        const page3 = ScenarioContext.get('NewTab');
        const Tab = await page3.getByTestId(this.loc_Admin_TicketGrant_Inquiry);
        await Tab.click();
        this.waitForSecond(2);
    }




    public async findinquiryentry(Type: String) {
        const page3 = ScenarioContext.get('NewTab');
        let titlePrefix, Message;

        if (Type === "問い合わせ") {
            titlePrefix = "inquiryTitle";
            Message = readFromYamlFilePath('AdminTicketGrant')['InquiryTitle'];
            console.log("Inquiry if entered")
        } else {
            titlePrefix = "inquiryTitle";
            Message = readFromYamlFilePath('AdminTicketGrant')['InformationTitle'];
            console.log("Inforamtin if entered")
        }


        while (true) {
            for (let i = 0; i < 10; i++) {
                const title = titlePrefix + i;
                const locator = await page3.locator((this.loc_Admin_TicketGrant_InquiryTitle)
                    .replace('Titletext', Message).replace('inquiryTitle', title.toString()));

                console.log(locator)

                if (await locator.count() === 1) {
                    console.log("Entry found");
                    await this.verifyinquiryentrydetails(i, Type);
                    return; // Exit the function once entry is found
                }



            }

            const nextpage = await page3.getByLabel(this.loc_Admin_TicketGrant_projectList_nextpage);

            if (await nextpage.isDisabled()) {
                console.error("Error: Entry not found");
                throw new Error("Entry not found");


            } else {
                await nextpage.click();
                await page3.waitForLoadState('load', { timeout: 90000 });
            }
        }

    }





    public async verifyinquiryentrydetails(row: Number, type: String) {
        const page3 = ScenarioContext.get('NewTab');
        console.log("Entered function");

        const { Inquirystatus, InquiryDate } = readFromYamlFilePath('AdminTicketGrant');

        const inquirystatussvalue_Element = await page3.locator((this.loc_Admin_TicketGrant_projectList_status)
            .replace('statustext', Inquirystatus).replace('number', row.toString()));

        const inquirydatevalue_Element = await page3.locator((this.loc_Admin_TicketGrant_InquiryDate)
            .replace('datetext', InquiryDate).replace('number', row.toString()));

        const inquirytypevalue_Element = await page3.locator((this.loc_Admin_TicketGrant_InquiryType)
            .replace('Typetext', type.toString()).replace('number', row.toString()));


        console.log(inquirystatussvalue_Element);
        console.log(inquirydatevalue_Element);
        console.log(inquirytypevalue_Element);

        await this.locatorShouldBePresent(inquirystatussvalue_Element);
        await this.locatorShouldBePresent(inquirydatevalue_Element);
        await this.locatorShouldBePresent(inquirytypevalue_Element);




    }





}



























