import { Then, When } from "@cucumber/cucumber";
import { ICustomWorld } from "../../support/custom-world";




Then('Click on the campaignId', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickOnCampaignID();
});


Then('Verify the page Title of campaign details page', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.VerifyCampaignDetailsTitle();
});


Then('Verify the campaign Title is present {string}', async function (this: ICustomWorld, campaignTitle: string) {
    await this.PageObject?.obj_admincampaign_details.adminCampaignDetails_VerifyCampaignTitle(campaignTitle);
});





Then('Verify the campaign Condition section is present', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.adminCampaignDetails_VerifyCamapaignConditionSection();
});



Then('Verify the campaign Details page link is present', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.adminCampaignDetails_VerifyCampaignDetailsPageLink();
});

Then('Verify the applicant List tab is present', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.adminCampaignDetails_VerifyMonitorList();
});

Then('Verify the confirmed List tab is present', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.adminCampaignDetails_VerifyConfirmedMonitorListTab();
});



Then('Expand the Campaign condition section', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.expandCampaignCondition();
});
Then(
    'Verify the Reruitment condition {string}', async function (this: ICustomWorld, recruitmentCondition: string) {
        await this.PageObject?.obj_admincampaign_details.verifyCampaignCondition(recruitmentCondition);
    },
);
Then('Verify the NGConditions {string}', async function (this: ICustomWorld, NGCondition: string) {
    await this.PageObject?.obj_admincampaign_details.verifyNGCondition(NGCondition);
});



Then(
    'Verify the NGIndustries {string}', async function (this: ICustomWorld, NGIndustries: string) {
        await this.PageObject?.obj_admincampaign_details.verifyNGIndustries(NGIndustries);


    },
);


Then('Click on the Campaign details popup link', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.loadTheCampaignDetailsPopup();
});

Then('Verify the Campaign details popup has loaded', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.verifyTheCampaignDetailsPopupLoaded();
});

Then('Verify the Project title from recruitment details for {string}', async function (this: ICustomWorld, campaignName: string) {
    await this.PageObject?.obj_admincampaign_details.verifyTheCampaignDetails_ProjectTitle(campaignName);
});

Then('Verify the RecruitmentCondition from recruitment details', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.verifyTheCampaignDetails_recruitmentCondition();
});

Then('Verify the NG conditions from Recruitment details', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.verifyTheCampaignDetails_NgConditions();
});


Then('Verify the Monitor count from Recruitment details', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.verifyTheCampaignDetails_monitorCount();
});
Then('Verify the Interview duration from recruitment details', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.verifyTheCampaignDetails_interviewDuration();
});
Then('Verify the Gender from recruitment details', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.verifyTheCampaignDetails_Gender();
});
Then('Verify the Lower Age from recruitment details', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.verifyTheCampaignDetails_LowerAge();
});

Then('Verify the Upper Age from recruitment details', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.verifyTheCampaignDetails_UpperAge();
});

Then('Verify the Place of residence from Recruitment details', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.verifyTheCampaignDetails_PlaceOfResidence();
});
Then('Verify the Marital status from Recruitment details', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.verifyTheCampaignDetails_MaritalStatus();
});
Then('Verify the Children status from Recruitment details', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.verifyTheCampaignDetails_ChildrenStatus();
});
Then('Verify the Profession from Recruitment details', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.verifyTheCampaignDetails_Profession();
});
Then('Verify the lower Personal annual income from Recruitment details', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.verifyTheCampaignDetails_LowerPersonalAnnualIncome();
});
Then('Verify the upper Personal annual income from Recruitment details', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.verifyTheCampaignDetails_UpperPersonalAnnualIncome();
});

Then('Verify the lower Household income from Recruitment details', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.verifyTheCampaignDetails_LowerHouseholdIncome();
});
Then('Verify the upper Household income from Recruitment details', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.verifyTheCampaignDetails_UpperHouseholdIncome();
});

Then('Campaign details Popup close button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.closeTheCampaignDetailsPopup();
});

Then('Click on campaign edit button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.editCampaign();
});

Then('Enter the campiagn name as {string}', async function (this: ICustomWorld, campaignName: string) {
    await this.PageObject?.obj_admincampaign_details.entercampaigneditname(campaignName);
});

Then('Edit the recruitment conditions as {string}', async function (this: ICustomWorld, updatedrecruitmentCondition: string) {
    await this.PageObject?.obj_admincampaign_details.enterrecruitmentconditionedit(updatedrecruitmentCondition);
});

Then('Edit the NG conditions as {string}', async function (this: ICustomWorld, updatedNGConditions: string) {
    await this.PageObject?.obj_admincampaign_details.enterNGIndustriesedit(updatedNGConditions);
});

Then('Click on confirm update button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.confirmupdate();
});


Then('CLick on the update button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.editCampaignsubmit();
});





Then('Click on the close monitor requirment button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickmonitorrecruitclose();
});


Then('Click on the confirm button in popup dispalyed and button changes to open monitor recruitment', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickmonitorrecruitcloseconfirm();
});



Then('Click on the open monitor requirment button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickmonitorrecruitopen();
});


Then('Click on the confirm button in popup dispalyed and button changes to close monitor recruitment', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickmonitorrecruitOpenConfirm();
});

Then('Click on the close campaign button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickcampaignclose();
});


Then('Click on the confirm button in popup dispalyed and button changes to open campaign', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickcampaigncloseconfirm();
});


Then('Click on the open campaign button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickcampaignopen();
});


Then('Click on the confirm button in popup dispalyed and button changes to close campaign', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickcampaignOpenConfirm();
});


Then('Click on the delivery video link of campaign', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickdeliverylink();
});


Then(
    'Verify the Campaign title {string}',
    async function (this: ICustomWorld, campaignTitle: string) {
        await this.PageObject?.obj_admincampaign_details.verifyTheCampaignTitle(campaignTitle);
    },
);

Then(
    'Verify the Campaign date {string} of the monitor {string}',
    async function (this: ICustomWorld, campaignDate: string, monitorName: string) {
        await this.PageObject?.obj_admincampaign_details.verifyTheCampaignDate(campaignDate, monitorName);
    },
);

Then(
    'Verify the Monitor name {string} with campaign date {string}',
    async function (this: ICustomWorld, monitorName: string, campaignDate: string) {
        await this.PageObject?.obj_admincampaign_details.verifyTheMonitorName(campaignDate, monitorName);
    },
);

Then(
    'Verify the Monitor profile details {string} and {string}',
    async function (this: ICustomWorld, monitorAttribute: string, value: string) {
        await this.PageObject?.obj_admincampaign_details.verifyTheMonitorProfileDetails(monitorAttribute, value);
    });

Then(
    'Select the monitor {string} from the monitor list',
    async function (this: ICustomWorld, nickName: string) {
        await this.PageObject?.obj_admincampaign_details.selectMonitorFromTheList(nickName);
    },
);

Then('Verify the monitor delete button is present', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.verifymonitordeletebutton();
});




Then('Click on the monitor delete button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickmonitordeletebutton();
});


Then('Click on the confirm button in the popup', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickconfirmbutton();
});

Then('Verify that the monitor {string} delete button is disabled for the monitor', async function (this: ICustomWorld, nickName: string) {
    await this.PageObject?.obj_admincampaign_details.selectMonitorFromTheList(nickName);
    await this.PageObject?.obj_admincampaign_details.verifymonitordeletedisable();
});




Then('Verify the monitor sendOff button is present', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.verifymonitorSENDOFFbutton();
});

Then('Click on the monitor sendoff button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickmonitorSendOFFbutton();
});


Then('Verify the monitors {string} status is {string}', async function (this: ICustomWorld, monitor: string, status: string) {
    await this.PageObject?.obj_admincampaign_details.verifyTheMonitorStatus(monitor, status);
});



Then('Verify the monitor recruit button is present', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.verifymonitorrecruitbutton();
});

Then('Click on the monitor recruit button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickrecruitbutton();
});




Then('I close the browser and context', async () => {
    let browser: any;
    if (browser) {
        await browser.close();
    }
});



// ===================================================================================================================================
// Draft Release

Then(
    'Enter Recruitment condition {string}',
    async function (this: ICustomWorld, recruitmentCondition: string) {
        await this.PageObject?.obj_admincampaign_details.enterRecruitmentCondition(
            recruitmentCondition,
        );
    },
);

When('Disable survey Details section', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.disableSurverSectionByClickingToggleButton();
});

When('Accept survey disabled Confirmation popup', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickOnSurveyDisabledConfirmationPopup();
});




Then(
    'Enter the NG Conditions {string}',
    async function (this: ICustomWorld, NGCondition: string) {
        await this.PageObject?.obj_admincampaign_details.enterNGCondition(
            NGCondition,
        );
    },
);

Then('Click on the NGindustry Button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickOnTheNGIndustryButton();
});

Then(
    'Select Multiple NGindustries as group {string}',
    async function (this: ICustomWorld, industryGroupName: string) {
        await this.PageObject?.obj_admincampaign_details.selectMultipleNGIndustriesAsGroup(
            industryGroupName,
        );
    },
);

When('Click on the NGindustry popup submit Button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickOnTheNGIndustryPopupSubmitButton();
});

When(
    'Enter Required monitor count {string}',
    async function (this: ICustomWorld, monitorCount: string) {
        await this.PageObject?.obj_admincampaign_details.enterRequiredMonitorCount(monitorCount);
    },
);



When('Click on Interview duration listbox', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickOnInterviewDurationListBox();
});

When(
    'Select the Interview duration from list {string}',
    async function (this: ICustomWorld, interviewDuration: string) {
        await this.PageObject?.obj_admincampaign_details.selectTheInterviewDurationFromList(
            interviewDuration,
        );
    },
);


When('Click on the Campaign creation schedule calendar', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickOnTheCampaignCreationScheduleCalender();
});

When('Select the Interview schedule from date', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.selectTheInterviewScheduleFrom();
});
When('Select the Interview schedule To date', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.selectTheInterviewScheduleTo();
});

When('Verify Maximum number of applicant', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.verifyMaximumCountOfApplicant();
});

When('Click on Slot selection area', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickOnSlotSelectionArea();
});


When(
    'Select slot from Slot selection area {string},{string},{string}',
    async function (this: ICustomWorld, startDate: string, numberOfDays: string, startTime: string) {
        await this.PageObject?.obj_admincampaign_details.selectSlotFromSlotSelectionArea(
            startDate,
            numberOfDays,
            startTime,
        );
    },
);

When('Select question Type as multichoice', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.selectQuestionTypeAsMultiChoice();
});

When('Enter the Options', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.enterOptions();
});

When('Click on the Additional question add button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickAdditionalQuestionAddButton();
});

When('Select question type as Single choice', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.selectQuestionTypeAsSingleChoice();
});

When('Select question type as Descriptive type', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.selectQuestionTypeAsDescriptive();
});

When('Click on Gender as {string} radio button', async function (this: ICustomWorld, gendername: string) {
    await this.PageObject?.obj_admincampaign_details.clickGenderRadioButton(gendername);
});

When('Click on no answer radio button', async function (this: ICustomWorld) {
    await this.PageObject?.obj_admincampaign_details.clickNoAnswerRadioButton();
});

When('Select Lower age as {string}', async function (this: ICustomWorld, age: string) {
    await this.PageObject?.obj_admincampaign_details.selectLowerAge(age);
});

When('Select Upper age as {string}', async function (this: ICustomWorld, age: string) {
    await this.PageObject?.obj_admincampaign_details.selectUpperAge(age);
});

When('Select Place of residence as {string}', async function (this: ICustomWorld, area: string) {
    await this.PageObject?.obj_admincampaign_details.selectResidence(area);
});

When('Select Profession as {string}', async function (this: ICustomWorld, profession: string) {
    await this.PageObject?.obj_admincampaign_details.selectProfession(profession);
});

When('Click on Married status as {string} radio button', async function (this: ICustomWorld, marriedstatus: string) {
    await this.PageObject?.obj_admincampaign_details.clickMarriedStatusRadioButton(marriedstatus);
});



When('Click on Children status as {string} radio button', async function (this: ICustomWorld, childrenStatus: string) {
    await this.PageObject?.obj_admincampaign_details.clickChildrenStatusRadioButton(childrenStatus);
});



When(
    'Select Lower house hold income as {string}',
    async function (this: ICustomWorld, income: string) {
        await this.PageObject?.obj_admincampaign_details.selectLowerHouseHoldIncome(income);
    },
);

When(
    'Select Upper house hold income as {string}',
    async function (this: ICustomWorld, income: string) {
        await this.PageObject?.obj_admincampaign_details.selectUpperHouseHoldIncome(income);
    },
);

When(
    'Select Lower personal income as {string}',
    async function (this: ICustomWorld, income: string) {
        await this.PageObject?.obj_admincampaign_details.selectLowerPersonalIncome(income);
    },
);

When(
    'Select Upper personal income as {string}',
    async function (this: ICustomWorld, income: string) {
        await this.PageObject?.obj_admincampaign_details.selectUpperPersonalIncome(income);
    },
);


When(
    'Click on draft submit button',
    async function (this: ICustomWorld) {
        await this.PageObject?.obj_admincampaign_details.draftsubmit();
    },
);

When(
    'Click on draft submit confirm button',
    async function (this: ICustomWorld) {
        await this.PageObject?.obj_admincampaign_details.draftsubmitconfirm();
    },
);
When(
    'Click on date clear icon',
    async function (this: ICustomWorld) {
        await this.PageObject?.obj_admincampaign_details.admincleardaterange();
    },
);

When(
    'Verify that campaign Details page is dispalyed',
    async function (this: ICustomWorld) {
        await this.PageObject?.obj_admincampaign_details.Verifypagetitle();
    },
);




