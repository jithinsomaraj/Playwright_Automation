import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';
import ScenarioContext from '../../support/ScenarioContext';
import { readFromYamlFilePath } from '../../utils/YamlReader';
import * as fs from 'fs';
import * as path from 'path';
// import * as yaml from 'js-yaml';





export class Sales extends BasePage {

    loc_Admin_Saleslnk: string;
    loc_Admin_Sales_title_txt: string;
    loc_Admin_Sales_depositTab: string;
    loc_Admin_Sales_salesTab: string;
    loc_Admin_Sales_ticketTab: string;
    loc_Admin_SalessearchRangeClear: string;
    loc_Admin_Sales_purchasedate: string;
    loc_Admin_Sales_paymentdate: string;
    loc_Admin_Sales_purchaseStartdate: string;
    loc_calendarprevious: string;
    loc_Admin_Sales_paymenttypedropdown: string;
    loc_Admin_Sales_Card: string;
    loc_Admin_Deposit_Cardresult: string;
    loc_Admin_purchase_Search: string;
    loc_Admin_Sales_Cardresult: string;
    loc_Admin_purchase__CSV_Download_Btn: string;
    loc_Admin_purchase_datacount: string;

    loc_Admin_sales_datacount: string;







    constructor(page3: Page) {
        super(page3);
        this.page = page3;


        this.loc_Admin_Saleslnk = 'menuitem-3'
        this.loc_Admin_Sales_title_txt = "//*[@id='main-container']//*[text()='入金・売上']"
        this.loc_Admin_Sales_depositTab = 'MuiTab0'
        this.loc_Admin_Sales_salesTab = 'MuiTab1'
        this.loc_Admin_Sales_ticketTab = 'MuiTab2'
        this.loc_Admin_SalessearchRangeClear = 'ClearIcon'
        this.loc_Admin_Sales_purchasedate = 'sales-page-purchase-date'
        this.loc_Admin_Sales_paymentdate = 'sales-page-payment-day'
        this.loc_Admin_Sales_purchaseStartdate = '//*[@data-timestamp="starttimestamp"]'
        this.loc_calendarprevious = 'Previous month';
        this.loc_Admin_Sales_paymenttypedropdown = 'placeholder';
        this.loc_Admin_Sales_Card = 'クレジットカード';
        this.loc_Admin_Deposit_Cardresult = '//*[@data-testid="paymentMethod0"][text()="クレジットカード"]'
        this.loc_Admin_purchase_Search = '//*[text()="検索"]';
        this.loc_Admin_purchase__CSV_Download_Btn = '//*[text()="CSV出力"]';
        this.loc_Admin_purchase_datacount = '//*[text()="入金データ一覧"]//following-sibling::div/child::div[1]'
        this.loc_Admin_sales_datacount = '//*[text()="売上データ一覧"]//following-sibling::div/child::div[1]'



        this.loc_Admin_Sales_Cardresult = '//*[@data-testid="salesDate0"]'




        // = 'salesDate0';









    }


    public async clickonSalesLnk() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const locator = await page3.getByTestId(this.loc_Admin_Saleslnk);
        await locator.click();

    }


    public async SalespageNavigationVerify() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const locator = await page3.locator(this.loc_Admin_Sales_title_txt);
        console.log(locator);
        await this.locatorShouldBePresent(locator);

    }





    public async clickonTab(loginid: string) {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        console.log(loginid);

        if (loginid == "deposit") {
            const locator = await page3.getByTestId(this.loc_Admin_Sales_depositTab);
            await locator.click();
        } else if (loginid == "sales") {

            const locator = await page3.getByTestId(this.loc_Admin_Sales_salesTab);
            await locator.click();
        } else if (loginid == "ticket") {

            const locator = await page3.getByTestId(this.loc_Admin_Sales_ticketTab);
            await locator.click();

        }

    }


    public async purchasedatefield() {
        const page3 = ScenarioContext.get('NewTab');


        const opencalendar = page3.getByTestId(this.loc_Admin_Sales_purchasedate);
        await opencalendar.click();

        const startdate = readFromYamlFilePath('AdminSales')['Purchasestartdate'];
        const enddate = readFromYamlFilePath('AdminSales')['PurchaseEnddate'];


        const epochstartdate = this.epochtodate(startdate);
        const epochenddate = this.epochtodate(enddate);

        console.log(epochstartdate);
        console.log(epochenddate);


        await this.waitForSecond(2);


        const startdateselect = page3.locator((this.loc_Admin_Sales_purchaseStartdate).replace('starttimestamp', (await epochstartdate).toString()));
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


        const enddateselect = page3.locator((this.loc_Admin_Sales_purchaseStartdate).replace('starttimestamp', (await epochenddate).toString()));
        await enddateselect.click();


    }



    public async paymentdatefield() {
        const page3 = ScenarioContext.get('NewTab');


        const opencalendar = page3.getByTestId(this.loc_Admin_Sales_paymentdate);
        await opencalendar.click();

        const startdate = readFromYamlFilePath('AdminSales')['Paymentstartdate'];
        const enddate = readFromYamlFilePath('AdminSales')['PaymentEnddate'];


        const epochstartdate = this.epochtodate(startdate);
        const epochenddate = this.epochtodate(enddate);

        console.log(epochstartdate);
        console.log(epochenddate);


        await this.waitForSecond(2);


        const startdateselect = page3.locator((this.loc_Admin_Sales_purchaseStartdate).replace('starttimestamp', (await epochstartdate).toString()));
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


        const enddateselect = page3.locator((this.loc_Admin_Sales_purchaseStartdate).replace('starttimestamp', (await epochenddate).toString()));
        await enddateselect.click();


    }


    public async salesdate() {
        const page3 = ScenarioContext.get('NewTab');


        const opencalendar = page3.getByTestId(this.loc_Admin_Sales_purchasedate);
        await opencalendar.click();

        const startdate = readFromYamlFilePath('AdminSales')['Salesstartdate'];
        const enddate = readFromYamlFilePath('AdminSales')['SalesEnddate'];


        const epochstartdate = this.epochtodate(startdate);
        const epochenddate = this.epochtodate(enddate);

        console.log(epochstartdate);
        console.log(epochenddate);


        await this.waitForSecond(2);


        const startdateselect = page3.locator((this.loc_Admin_Sales_purchaseStartdate).replace('starttimestamp', (await epochstartdate).toString()));
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


        const enddateselect = page3.locator((this.loc_Admin_Sales_purchaseStartdate).replace('starttimestamp', (await epochenddate).toString()));
        await enddateselect.click();


    }
















    public async selectpaymenttype(paymentmethod: string) {
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const dropdownlocator = await page3.getByTestId(this.loc_Admin_Sales_paymenttypedropdown);
        await dropdownlocator.click();
        console.log(paymentmethod);

        if (paymentmethod == "Card") {
            const locator = await page3.getByTestId(this.loc_Admin_Sales_Card);
            await locator.click();
            await this.waitForSecond(1);
        }
    }




    public async Search() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const locator = await page3.locator(this.loc_Admin_purchase_Search);
        console.log(locator);
        await locator.click();

    }




    public async depositresultdisplay() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const locator = await page3.locator(this.loc_Admin_Deposit_Cardresult);
        await this.locatorShouldBePresent(locator);

    }

    public async salesresultdisplay() {
        await this.waitForSecond(1);
        const page3 = ScenarioContext.get('NewTab');
        await this.waitForSecond(1);
        const locator = await page3.locator(this.loc_Admin_Sales_Cardresult);
        await this.locatorShouldBePresent(locator);

    }




    public async adminPurchase_ClickCSVDownloadButton() {
        const page3 = ScenarioContext.get('NewTab');
        console.log("wefwefweeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
        const locator = await page3.locator(this.loc_Admin_purchase__CSV_Download_Btn);
        await locator.click();
        const downloadPromise = await page3.waitForEvent('download', { timeout: 60000 });
        console.log("Download button click")

        await locator.click();
        console.log("Download button click2")
        const download = await downloadPromise;
        // Wait for the download process to complete and save the downloaded file somewhere.
        await download.saveAs('Downloads/' + download.suggestedFilename());

    }



    public async adminPurchase_verifyCSVData(csvtype: string) {


        // Assume you have already defined `ScenarioContext.get()` and `this.loc_Admin_purchase_datacount` correctly
        const page3 = ScenarioContext.get('NewTab');






        // Read the CSV file synchronously (adjust the file path and encoding as needed)
        let csvFilePath: string;
        let datacount: Locator;

        // Determine the CSV file path based on csvtype
        if (csvtype === "deposit") {
            csvFilePath = 'Downloads/deposit-data_1720442920771.csv';
            datacount = await page3.locator(this.loc_Admin_purchase_datacount);


        } else if (csvtype === "sales") {
            csvFilePath = 'Downloads/sales-data_1720586299566.csv';
            datacount = await page3.locator(this.loc_Admin_sales_datacount);

        } else {
            throw new Error(`Unsupported csvtype: ${csvtype}`);
        }

        // Read the CSV file synchronously
        const csvData = fs.readFileSync(csvFilePath, 'utf8');
        const resultcount = await datacount.innerText();


        // Split the string into lines
        const lines = csvData.split('\n');


        // Count the number of lines
        const numberOfLines: number = lines.length;
        console.log(numberOfLines);
        const numberOfLinesafterheaderremove = numberOfLines - 1;
        const numberOfLinesafterheaderremove1 = numberOfLinesafterheaderremove.toString();

        // Compare resultcount and numberOfLines
        if (numberOfLinesafterheaderremove1 !== resultcount) {
            throw new Error(`Number of lines in CSV (${numberOfLines}) does not match result count (${resultcount}).`);
        } else {
            console.log('Number of lines in CSV matches result count.');
        }


    }



    // public async adminTicket_verifyCSVData() {


    //     // Assume you have already defined `ScenarioContext.get()` and `this.loc_Admin_purchase_datacount` correctly


    //     // Read the CSV file synchronously (adjust the file path and encoding as needed)
    //     let csvFilePath: string;


    //     // Determine the CSV file path based on csvtype

    //     csvFilePath = 'Downloads/ticket-data_1720442920771.csv';


    //     // Read the CSV file synchronously
    //     const csvData = fs.readFileSync(csvFilePath, 'utf8');



    //     // Split the string into lines
    //     const lines = csvData.split('\n');


    //     // Count the number of lines
    //     const numberOfLines: number = lines.length;
    //     console.log(numberOfLines);
    //     const numberOfLinesafterheaderremove = numberOfLines - 1;

    //     // Compare resultcount and numberOfLines
    //     if (numberOfLinesafterheaderremove == 0) {
    //         throw new Error(`Number of lines in CSV  is zero`);
    //     } else {
    //         console.log('Number of lines in CSV matches result count.');
    //     }


    // }




    public async adminTicket_verifyCSVData() {

        // Assume you have already defined `ScenarioContext.get()` and `this.loc_Admin_purchase_datacount` correctly




        // Determine the folder path where CSV files are located
        const folderPath = 'Downloads'; // Replace with your actual folder path

        // Find the latest CSV file in the folder
        const latestFile = await this.findLatestFile(folderPath);

        // Read the CSV file synchronously
        const csvData = fs.readFileSync(latestFile, 'utf8');

        // Split the string into lines
        const lines = csvData.split('\n');

        // Count the number of lines
        const numberOfLines = lines.length;
        console.log(`Number of lines in CSV file '${latestFile}': ${numberOfLines}`);

        // Adjust for header if needed
        const numberOfLinesAfterHeader = numberOfLines > 0 ? numberOfLines - 1 : 0;

        // Compare resultcount and numberOfLinesAfterHeader
        if (numberOfLinesAfterHeader === 0) {
            throw new Error(`Number of lines in CSV is zero for file '${latestFile}'.`);
        } else {
            console.log('Number of lines in CSV matches result count.');
        }




    }



    private async findLatestFile(folderPath: string): Promise<string> {


        // Read the directory contents
        const files = await fs.promises.readdir(folderPath);

        // Filter out non-CSV files and get their stats
        const fileStats = await Promise.all(
            files.map(async (file) => {
                const filePath = path.join(folderPath, file);
                const stats = await fs.promises.stat(filePath);
                return { file, stats };
            })
        );

        // Sort files by modification time (most recent first)
        fileStats.sort((a, b) => b.stats.mtime.getTime() - a.stats.mtime.getTime());

        // Get the path of the most recent file
        const latestFile = path.join(folderPath, fileStats[0].file);
        return latestFile;

    }














}









































