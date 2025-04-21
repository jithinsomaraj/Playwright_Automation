import { BasePage } from '../../utils/BasePage';

//import { config } from '../../support/config';
import { Page } from '@playwright/test';
import fs from 'fs';
//import { parse } from 'csv-parse';
import ScenarioContext from '../../support/ScenarioContext';
import { readFromYamlFilePath } from '../../utils/YamlReader';
import iconv from 'iconv-lite';


export class AdminPointExport extends BasePage {

    loc_Admin_PointOutPut_Heading_Label: string
    loc_Admin_PointOutPut__Btn: string
    loc_Admin_PointOutPut__ProjectTitlr_Txt: string
    loc_Admin_PointOutPut__Filter_Submit_Btn: string

    loc_Admin_PointOutPut__CSV_Download_Btn: string
    loc_Admin_PointOutPut_AirId_Fixed_Value: string


    loc_Admin_PointOutPut_Mid_element1: string
    loc_Admin_PointOutPut_Mid_element2: string
    loc_Admin_PointOutPut_Mid_element3: string

    loc_Admin_PointOutPut_Point_element1: string
    loc_Admin_PointOutPut_Point_element2: string
    loc_Admin_PointOutPut_Point_element3: string

    loc_Admin_PointOutPut_AirId2_Fixed_Value: string


    loc_Admin_PointOutPut_PiD_1_element1: string
    loc_Admin_PointOutPut_PiD_1_element2: string
    loc_Admin_PointOutPut_PiD_1_element3: string

    loc_Admin_PointOutPut_PiD_2_element1: string
    loc_Admin_PointOutPut_PiD_2_element2: string
    loc_Admin_PointOutPut_PiD_2_element3: string
    loc_Admin_PointOutPutDaterange: string
    loc_Admin_PointOutPutDaterangeClearIcon: string

    loc_Admin_PointOutPut_pointclassification1: string
    loc_Admin_PointOutPut_pointclassification2: string
    loc_Admin_PointOutPut_pointclassification3: string




    constructor(page: Page) {
        super(page);
        this.loc_Admin_PointOutPut_Heading_Label = 'point-output.header';
        this.loc_Admin_PointOutPut__Btn = 'menuitem-2';
        this.loc_Admin_PointOutPutDaterange = 'point-output-filter-implementation-period'
        this.loc_Admin_PointOutPutDaterangeClearIcon = 'ClearIcon'
        this.loc_Admin_PointOutPut__ProjectTitlr_Txt = 'point-output-filter-interview-title'
        this.loc_Admin_PointOutPut__Filter_Submit_Btn = 'filter-submit'
        this.loc_Admin_PointOutPut__CSV_Download_Btn = 'action-submit';
        this.loc_Admin_PointOutPut_AirId_Fixed_Value = '2000';


        this.loc_Admin_PointOutPut_Mid_element1 = 'monitorId0'
        this.loc_Admin_PointOutPut_Mid_element2 = 'monitorId1'
        this.loc_Admin_PointOutPut_Mid_element3 = 'monitorId2'

        this.loc_Admin_PointOutPut_AirId2_Fixed_Value = '10';



        this.loc_Admin_PointOutPut_Point_element1 = 'point0';
        this.loc_Admin_PointOutPut_Point_element2 = 'point1';
        this.loc_Admin_PointOutPut_Point_element3 = 'point2';



        this.loc_Admin_PointOutPut_PiD_1_element1 = 'customCampaignId0';
        this.loc_Admin_PointOutPut_PiD_1_element2 = 'customCampaignId1';
        this.loc_Admin_PointOutPut_PiD_1_element3 = 'customCampaignId2';

        this.loc_Admin_PointOutPut_PiD_2_element1 = 'title0';
        this.loc_Admin_PointOutPut_PiD_2_element2 = 'title1';
        this.loc_Admin_PointOutPut_PiD_2_element3 = 'title2';

        this.loc_Admin_PointOutPut_pointclassification1 = 'pointClassification0';
        this.loc_Admin_PointOutPut_pointclassification2 = 'pointClassification1';
        this.loc_Admin_PointOutPut_pointclassification3 = 'pointClassification2';








    }

    public async adminPointOutput_cleardaterange() {

        const page3 = ScenarioContext.get('NewTab');
        const defaultdate = readFromYamlFilePath('AdminPointList')['Date'];
        const daterange = await page3.getByTestId(this.loc_Admin_PointOutPutDaterange);
        await daterange.fill(defaultdate)
    }



    public async adminPointOutput_cleardaterange2() {

        const page3 = ScenarioContext.get('NewTab');
        const daterange = await page3.getByTestId(this.loc_Admin_PointOutPutDaterangeClearIcon);
        await daterange.click();


    }


    public async getTextFromElement(Locator: string) {
        const page3 = ScenarioContext.get('NewTab');
        const ID = await page3.waitForSelector(Locator);
        const text = await ID.innerText();
        return text;
    }


    public async adminPointOutput_VerifyPointOutputPage() {
        const page3 = ScenarioContext.get('NewTab');
        const title = await page3.getByTestId(this.loc_Admin_PointOutPut_Heading_Label);
        await this.locatorShouldBePresent(title);
    }



    public async adminPointOutput_ClickPointOutputTab() {
        const page3 = ScenarioContext.get('NewTab');
        const title = await page3.getByTestId(this.loc_Admin_PointOutPut__Btn);
        await title.click();

    }


    public async adminPointOutput_inputProjectTitle(Title: string) {
        const page3 = ScenarioContext.get('NewTab');
        const campaignTitle = readFromYamlFilePath('AdminPointList')[Title];
        const title = await page3.getByTestId(this.loc_Admin_PointOutPut__ProjectTitlr_Txt);
        await title.fill(campaignTitle);
    }


    public async adminPointOutput_ClickFilterSubmitButton() {
        const page3 = ScenarioContext.get('NewTab');
        const btn = await page3.getByTestId(this.loc_Admin_PointOutPut__Filter_Submit_Btn);
        await btn.click();

    }


    public async adminPointOutput_ClickCSVDownloadButton() {
        const page3 = ScenarioContext.get('NewTab');
        const downloadPromise = await page3.waitForEvent('download');
        await page3.getByTestId(this.loc_Admin_PointOutPut__CSV_Download_Btn).click();
        const download = await downloadPromise;
        // Wait for the download process to complete and save the downloaded file somewhere.
        await download.saveAs('Downloads/' + download.suggestedFilename());
    }




    public async adminPointOutput_verifyCSVData() {

        const page3 = ScenarioContext.get('NewTab');


        const MID_1_locator = await page3.getByTestId(this.loc_Admin_PointOutPut_Mid_element1);
        const MID_1 = await MID_1_locator.innerText();
        const MID_2_locator = await page3.getByTestId(this.loc_Admin_PointOutPut_Mid_element2);
        const MID_2 = await MID_2_locator.innerText();
        const MID_3_locator = await page3.getByTestId(this.loc_Admin_PointOutPut_Mid_element3);
        const MID_3 = await MID_3_locator.innerText();



        const Point_1_locator = await page3.getByTestId(this.loc_Admin_PointOutPut_Point_element1);
        const Point_1 = await Point_1_locator.innerText();
        const Point_2_locator = await page3.getByTestId(this.loc_Admin_PointOutPut_Point_element2);
        const Point_2 = await Point_2_locator.innerText();
        const Point_3_locator = await page3.getByTestId(this.loc_Admin_PointOutPut_Point_element3);
        const Point_3 = await Point_3_locator.innerText();

        const PID1_1_locator = await page3.getByTestId(this.loc_Admin_PointOutPut_PiD_1_element1);
        const PID1_1 = await PID1_1_locator.innerText();
        const PID1_2_locator = await page3.getByTestId(this.loc_Admin_PointOutPut_PiD_1_element2);
        const PID1_2 = await PID1_2_locator.innerText();
        const PID1_3_locator = await page3.getByTestId(this.loc_Admin_PointOutPut_PiD_1_element3);
        const PID1_3 = await PID1_3_locator.innerText();



        const PID2_1_locator = await page3.getByTestId(this.loc_Admin_PointOutPut_PiD_2_element1);
        const PID2_1 = await PID2_1_locator.innerText();
        const PID2_2_locator = await page3.getByTestId(this.loc_Admin_PointOutPut_PiD_2_element2);
        const PID2_2 = await PID2_2_locator.innerText();
        const PID2_3_locator = await page3.getByTestId(this.loc_Admin_PointOutPut_PiD_2_element3);
        const PID2_3 = await PID2_3_locator.innerText();

        const Point_class1_locator = await page3.getByTestId(this.loc_Admin_PointOutPut_pointclassification1);
        const Point_class1 = await Point_class1_locator.innerText();
        const Point_class2_locator = await page3.getByTestId(this.loc_Admin_PointOutPut_pointclassification2);
        const Point_class2 = await Point_class2_locator.innerText();
        const Point_class3_locator = await page3.getByTestId(this.loc_Admin_PointOutPut_pointclassification3);
        const Point_class3 = await Point_class3_locator.innerText();


        const csvData = fs.readFileSync('Downloads/point-output-data.csv');
        const utf8Data = iconv.decode(csvData, 'Shift_JIS');



        const lines = utf8Data.split('\n');



        let airId1: string | undefined,
            mid1: string | undefined,
            point1: string | undefined,
            air2_1: string | undefined,
            pid1: string | undefined

        let airId2: string | undefined,
            mid2: string | undefined,
            point2: string | undefined,
            air2_2: string | undefined,
            pid2: string | undefined

        let airId3: string | undefined,
            mid3: string | undefined,
            point3: string | undefined,
            air2_3: string | undefined,
            pid3: string | undefined


        // Loop through each line
        lines.forEach((line: string, index: number) => {
            // Split each line into individual values
            const values = line.split(',');


            // Assign values to variables based on the index
            if (index === 0) {
                [airId1, mid1, point1, air2_1, pid1] = values;
            } else if (index === 1) {
                [airId2, mid2, point2, air2_2, pid2] = values;
            } else if (index === 2) {
                [airId3, mid3, point3, air2_3, pid3] = values;
            }
        });



        const AirId1: string = airId1!.toString();
        const AirId2: string = airId2!.toString();
        const AirId3: string = airId3!.toString();

        const MId1: string = mid1!.toString();
        const MId2: string = mid2!.toString();
        const MId3: string = mid3!.toString();

        const Point1: string = point1!.toString();
        const Point2: string = point2!.toString();
        const Point3: string = point3!.toString();

        const AIR2_1: string = air2_1!.toString();
        const AIR2_2: string = air2_2!.toString();
        const AIR2_3: string = air2_3!.toString();

        const PID1: string = pid1!.toString();
        const PID2: string = pid2!.toString();
        const PID3: string = pid3!.toString();



        await this.compareTwoString(this.loc_Admin_PointOutPut_AirId_Fixed_Value, AirId1, 'Air Id not matching in Line 1')
        await this.compareTwoString(this.loc_Admin_PointOutPut_AirId_Fixed_Value, AirId2, 'Air Id not matching in Line 2')
        await this.compareTwoString(this.loc_Admin_PointOutPut_AirId_Fixed_Value, AirId3, 'Air Id not matching in Line 3')


        await this.compareTwoString(MID_1, MId1, 'MId not matching in Line 1')
        await this.compareTwoString(MID_2, MId2, 'MId not matching in Line 2')
        await this.compareTwoString(MID_3, MId3, 'MId not matching in Line 3')


        await this.compareTwoString(Point1, this.loc_Admin_PointOutPut_AirId2_Fixed_Value, 'AIR ID 2 not matching in Line 1')
        await this.compareTwoString(Point2, this.loc_Admin_PointOutPut_AirId2_Fixed_Value, 'AIR ID 2 not matching in Line 2')
        await this.compareTwoString(Point3, this.loc_Admin_PointOutPut_AirId2_Fixed_Value, 'AIR ID 2 not matching in Line 3')


        await this.compareTwoString(AIR2_1, Point_1, 'Point not matching in Line 1')
        await this.compareTwoString(AIR2_2, Point_2, 'Point not matching in Line 2')
        await this.compareTwoString(AIR2_3, Point_3, 'Point not matching in Line 3')


        await this.compareTwoString(PID1.trim(), (PID1_1.trim() + ' ' + PID2_1.trim() + ' ' + Point_class1.trim()), 'PID not matching in Line 1')
        await this.compareTwoString(PID2.trim(), (PID1_2.trim() + ' ' + PID2_2.trim() + ' ' + Point_class2.trim()), 'PID not matching in Line 2')
        await this.compareTwoString(PID3.trim(), (PID1_3.trim() + ' ' + PID2_3.trim() + ' ' + Point_class3.trim()), 'PID not matching in Line 3')






    }








}



