import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When('Click on the campaign creation button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.clickOnTheCampaignCreationButton();
});
When('Click on the campaign draft button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.clickOnTheCampaignDraftButton();
});


When('Click on the agreement accept button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.clickOnTheAgreementAcceptButton();
});

When('Click on campaign publish button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.clickOnCampaignPublishButton();
});

When('Click on campaign confirmation screen button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.navigateToCampaignConfirmationScreen();
});

When('Verify campaign title mandatory validation message', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.campaignTitleMandatoryValidationMessage();
});

When('Recruitment condition mandatory validation message', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.recruitmentConditionMandatoryValidationMessage();
});

When('Enter campaign title {string}', async function (this: ICustomWorld, campaignTitle: string) {
  await this.PageObject?.obj_Client_CampaignCreation.enterCampaignTitle(campaignTitle);
});
When('Enter campaign title with char length more than limit', async function (this: ICustomWorld) {
  const campaignTitle =
    'sddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddds';
  await this.PageObject?.obj_Client_CampaignCreation.enterCampaignTitle(campaignTitle);
});
When('Verify the campaign title char limited validation', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.campaignTitleCharLengthValidation();
});

When(
  'Enter recruitment condition {string}',
  async function (this: ICustomWorld, recruitmentCondition: string) {
    await this.PageObject?.obj_Client_CampaignCreation.enterRecruitmentCondition(
      recruitmentCondition,
    );
  },
);

When(
  'Enter NG condition {string}',
  async function (this: ICustomWorld, NGCondition: string) {
    await this.PageObject?.obj_Client_CampaignCreation.enterNGCondition(
      NGCondition,
    );
  },
);


When(
  'Enter recruitment condition with char length more than limit',
  async function (this: ICustomWorld) {
    const recruitmentCondition =
      'sddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddds';
    await this.PageObject?.obj_Client_CampaignCreation.enterRecruitmentCondition(
      recruitmentCondition,
    );
  },
);

When(
  'Verify the recruitment condition char limited validation',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_Client_CampaignCreation.campaignRecruitmentConditionCharLengthValidation();
  },
);
When('Click on the NGindustry button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.clickOnTheNGIndustryButton();
});

When(
  'Select multiple ngindustries as group {string}',
  async function (this: ICustomWorld, industryGroupName: string) {
    await this.PageObject?.obj_Client_CampaignCreation.selectMultipleNGIndustriesAsGroup(
      industryGroupName,
    );
  },
);

When(
  'Select NGindustries as individual {string}',
  async function (this: ICustomWorld, industryName: string) {
    await this.PageObject?.obj_Client_CampaignCreation.selectNGIndustriesAsIndividual(industryName);
  },
);

When('Remove all selected NG industries', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.removeAllSelectedNGIndustries();
});

When('Verify all the selected NG industries got removed', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.verifyAllSelectedNGIndustriesGotRemoved();
});

When('Click on the NGindustry popup cancel button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.clickOnTheNGIndustryPopupCancelButton();
});

When('Click on the NGindustry popup submit button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.clickOnTheNGIndustryPopupSubmitButton();
});

When(
  'Enter required monitor count {string}',
  async function (this: ICustomWorld, monitorCount: string) {
    await this.PageObject?.obj_Client_CampaignCreation.enterRequiredMonitorCount(monitorCount);
  },
);

When(
  'Verify required monitor count maximum limit validation message',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_Client_CampaignCreation.requiredMonitorCountMaximumLimitValidationMessage();
  },
);

When('Click on interview duration listbox', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.clickOnInterviewDurationListBox();
});

When(
  'Select the interview duration from list {string}',
  async function (this: ICustomWorld, interviewDuration: string) {
    await this.PageObject?.obj_Client_CampaignCreation.selectTheInterviewDurationFromList(
      interviewDuration,
    );
  },
);

When('Verify the ticket required is correct', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.verifyTheTicketRequiredIsCorrect();
});

When('Click on the campaign creation schedule calendar', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.clickOnTheCampaignCreationScheduleCalender();
});

When('Select the interview schedule from date', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.selectTheInterviewScheduleFrom();
});
When('Select the interview schedule To date', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.selectTheInterviewScheduleTo();
});

When('Verify maximum number of applicant', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.verifyMaximumCountOfApplicant();
});

When('Click on slot selection area', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.clickOnSlotSelectionArea();
});

When(
  'Select slot from slot selection area {string},{string},{string}',
  async function (this: ICustomWorld, startDate: string, numberOfDays: string, startTime: string) {
    await this.PageObject?.obj_Client_CampaignCreation.selectSlotFromSlotSelectionArea(
      startDate,
      numberOfDays,
      startTime,
    );
  },
);

When('Accept the campaign creation confirmation popup', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.clickOnTheCampaignCreationConfirmationPopup();
});
When('Verify the campaign creation summary page has loaded', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.verifyThePageNavigationToTheCampaignCreationSummaryPage();
});
When('Disable survey details section', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.disableSurverSectionByClickingToggleButton();
});

When('Accept survey disabled confirmation popup', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.clickOnSurveyDisabledConfirmationPopup();
});
//---------------------------



When('Click on gender as {string} radio button', async function (this: ICustomWorld, gendername: string) {
  await this.PageObject?.obj_Client_CampaignCreation.clickGenderRadioButton(gendername);
});

When('Click on no answer radio button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.clickNoAnswerRadioButton();
});

When('Select lower age as {string}', async function (this: ICustomWorld, age: string) {
  await this.PageObject?.obj_Client_CampaignCreation.selectLowerAge(age);
});

When('Select upper age as {string}', async function (this: ICustomWorld, age: string) {
  await this.PageObject?.obj_Client_CampaignCreation.selectUpperAge(age);
});

When('Select place of residence as {string}', async function (this: ICustomWorld, area: string) {
  await this.PageObject?.obj_Client_CampaignCreation.selectResidence(area);
});

When('Select profession as {string}', async function (this: ICustomWorld, profession: string) {
  await this.PageObject?.obj_Client_CampaignCreation.selectProfession(profession);
});

When('Click on married status as {string} radio button', async function (this: ICustomWorld, marriedstatus: string) {
  await this.PageObject?.obj_Client_CampaignCreation.clickMarriedStatusRadioButton(marriedstatus);
});



When('Click on children status as {string} radio button', async function (this: ICustomWorld, childrenStatus: string) {
  await this.PageObject?.obj_Client_CampaignCreation.clickChildrenStatusRadioButton(childrenStatus);
});



When(
  'Select lower house hold income as {string}',
  async function (this: ICustomWorld, income: string) {
    await this.PageObject?.obj_Client_CampaignCreation.selectLowerHouseHoldIncome(income);
  },
);

When(
  'Select upper house hold income as {string}',
  async function (this: ICustomWorld, income: string) {
    await this.PageObject?.obj_Client_CampaignCreation.selectUpperHouseHoldIncome(income);
  },
);

When(
  'Select lower personal income as {string}',
  async function (this: ICustomWorld, income: string) {
    await this.PageObject?.obj_Client_CampaignCreation.selectLowerPersonalIncome(income);
  },
);

When(
  'Select upper personal income as {string}',
  async function (this: ICustomWorld, income: string) {
    await this.PageObject?.obj_Client_CampaignCreation.selectUpperPersonalIncome(income);
  },
);

//  --------------------- Drafted Campaign Creation --------------------------------

When('Verify the draft campaign limit validation message', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.maximumDraftcampaignValidationMessage();
});


When('Select question type as multichoice', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.selectQuestionTypeAsMultiChoice();
});

When('Enter the options', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.enterOptions();
});

When('Click on the additional question add button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.clickAdditionalQuestionAddButton();
});

When('Select question type as single choice', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.selectQuestionTypeAsSingleChoice();
});

When('Select question type as descriptive type', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.selectQuestionTypeAsDescriptive();
});

When('Create a campaign {string}', async function (this: ICustomWorld, campaignTitle: string) {
  await this.PageObject?.obj_Client_CampaignCreation.createCampaign(campaignTitle);
});


When('Create a campaign {string} for agora meeting', async function (this: ICustomWorld, campaignTitle: string) {
  await this.PageObject?.obj_Client_CampaignCreation.createCampaignForAgoraMeeting(campaignTitle);
});






When('Create a campaign with survey and no basic attributes {string}', async function (this: ICustomWorld, campaignTitle: string) {
  await this.PageObject?.obj_Client_CampaignCreation.createCampaignWithSurveyAndNoBasicAttributes(campaignTitle);
});


When('Create a campaign with basic attributes and survey for {string}', async function (this: ICustomWorld, campaignTitle: string) {
  await this.PageObject?.obj_Client_CampaignCreation.createCampaignWithSurvey(campaignTitle);
});


When('Create a campaign with basic attributes and without survey for {string}', async function (this: ICustomWorld, campaignTitle: string) {
  await this.PageObject?.obj_Client_CampaignCreation.createCampaignWithOutSurvey(campaignTitle);
});

When('Apply the campaign {string} for {string}', async function (this: ICustomWorld, title: string, user: string) {
  await this.PageObject?.obj_Client_CampaignCreation.applyCampaign(title, user);

});

When('Send a schedule to monitor', async function (this: ICustomWorld) {
  await this.PageObject?.obj_Client_CampaignCreation.sendSchedule();

});

When('Accept the schedule from {string}', async function (this: ICustomWorld, user: string) {
  await this.PageObject?.obj_Client_CampaignCreation.acceptSchedule(user);

});
