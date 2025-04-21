
import ScenarioContext from '../../support/ScenarioContext';
import { ICustomWorld } from '../../support/custom-world';

import { When } from '@cucumber/cucumber';
import { readFromYamlFilePath } from '../../utils/YamlReader';



When('Enter the user name {string} for {string}', async function (this: ICustomWorld, username: string, user: string) {


  console.log('User :' + user);
  this.page = await ScenarioContext.get('NewTab');


  await this.PageObject?.obj_clientagorameeting.enterTheClientUserName(username);
});

When('Enter the backroom user name for {string}', async function (this: ICustomWorld, user: string) {

  await this.PageObject?.obj_clientagorameeting.enterTheClientUserName2(user);
});



When(
  'Click on the join as interviewer button for {string}',
  async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_clientagorameeting.clickOnJoinAsInterviewerButton(user);
  },
);

When(
  'Verify the campaign titile for {string}',
  async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_clientagorameeting.verifyTheCampaignTitleAgora(user);
  },
);


When(
  'verify the schedule time for {string}',
  async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_clientagorameeting.verifyScheduleTimeAgora(user);
  },
);



When(
  'verify the schedule date for {string}',
  async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_clientagorameeting.verifyScheduleDateAgora(user);
  },
);



When(
  'Verify the interview joining time message for {string}',
  async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_clientagorameeting.verifyJoiningMsg(user);
  },
);



When(
  'Verify the validation message for {string}',
  async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_clientagorameeting.verifyValidation(user);
  },
);



When('Accept the confirmation popup to join the interview', async function (this: ICustomWorld) {
  await this.PageObject?.obj_clientagorameeting.acceptTheConfirmationToJoinTheInterview();
});

When('Verify that username field accept all characters', async function (this: ICustomWorld) {
  await this.PageObject?.obj_clientagorameeting.VerifyUsernamefieldInput();
});



When('Accept the confirmation popup to join the interview for {string}', async function (this: ICustomWorld, userName: string) {
  await this.PageObject?.obj_clientagorameeting.acceptTheConfirmationToJoinTheInterviewAgora(userName);
});


When('Verify that the monitor joining request is not present for {string}', async function (this: ICustomWorld, userName: string) {
  await this.PageObject?.obj_clientagorameeting.verifyMonitorJoinRequestNotPresent(userName);
});


When('Verify that screensharing button is not present for {string}', async function (this: ICustomWorld, userName: string) {
  await this.PageObject?.obj_clientagorameeting.verifyScreenShareBtnNotPresent(userName);
});



When('Accept meeting leaving confirmation popup', async function (this: ICustomWorld) {
  await this.PageObject?.obj_clientagorameeting.acceptTheMeetingLeavingConfirmationPopup();
});

When(
  'Click on the join as backroom button for {string}',
  async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_clientagorameeting.clickOnJoinAsBackroomButton(user);
  },
);

When(
  'Verify the campaign title for {string}',
  async function (this: ICustomWorld, user: string) {
    console.log(user);
    const campaignTitle = readFromYamlFilePath('CampaignData')['campaignTitle']
    await this.PageObject?.obj_clientagorameeting.verifyTheCampaignTitle(campaignTitle);
  },
);

When(
  'Verify the client user name {string} for {string}',
  async function (this: ICustomWorld, interviewername: string, user: string) {
    await this.PageObject?.obj_clientagorameeting.verifyTheAgoraMeetingClientUserName(
      interviewername,
      user,
    );
  },
);

When(
  'Verify the recording icon is present for {string}',
  async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_clientagorameeting.verifyRecordingIconIsPresent(user);
  },
);

When('Disable the mic for {string}', async function (this: ICustomWorld, user: string) {
  await this.PageObject?.obj_clientagorameeting.clickOnAgoraMeetingEnabledMic(user);
});

When(
  'Verify the mic has been disabled for {string}',
  async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_clientagorameeting.verifyTheMicGotDisabled(user);
  },
);

When('Enable the mic for user for {string}', async function (this: ICustomWorld, user: string) {
  await this.PageObject?.obj_clientagorameeting.clickOnAgoraMeetingDisabledMic(user);
});

When(
  'Verify the mic has been enabled for {string}',
  async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_clientagorameeting.verifyTheMicGotEnabled(user);
  },
);

When('Enable the video for {string}', async function (this: ICustomWorld, user: string) {
  await this.PageObject?.obj_clientagorameeting.clickOnAgoraMeetingDisabledVideoButton(user);
});

When('Diable the video for {string}', async function (this: ICustomWorld, user: string) {
  await this.PageObject?.obj_clientagorameeting.clickOnAgoraMeetingEnabledVideoButton(user);
});

When(
  'Click on the monitor info button for {string}',
  async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_clientagorameeting.clickOnAgoraMeetingNotFocusedMonitorInfoButton(
      user,
    );
  },
);

When(
  'Verify the monitor nickname for {string}',
  async function (this: ICustomWorld, user: string) {
    const monitorNickName = readFromYamlFilePath('CampaignData')['monitornickname']

    await this.PageObject?.obj_clientagorameeting.verifyAgoraMeetingMonitorNickName(
      monitorNickName,
      user,
    );
  },
);

When(
  'Verify the monitor gender for {string}',

  async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_clientagorameeting.verifyAgoraMeetingMonitorGender(user);
  },
);

When(
  'Verify the monitor prefecture for {string}',
  async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_clientagorameeting.verifyAgoraMeetingMonitorPrefecture(

      user,
    );
  },
);

When(
  'Click on the participant list icon for {string}',
  async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_clientagorameeting.clickOnAgoraMeetingNotFocusedParticipantsListButton(
      user,
    );
  },
);



When(
  'Click on the chat list button for {string}',
  async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_clientagorameeting.clickOnAgoraMeetingFocusedChatListButton(user);
  },
);

When(
  'Click on the focused monitor info button for {string}',
  async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_clientagorameeting.clickOnAgoraMeetingFocusedMonitorInfoButton(user);
  },
);



When(
  'Click on the focused chat list button for {string}',
  async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_clientagorameeting.clickOnAgoraMeetingNotFocusedChatListButton(user);
  },
);

When(
  'Click on the meeting leave button for {string}',
  async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_clientagorameeting.clickOnAgoraMeetingLeaveButton(user);
  },
);

When(
  'Accept the monitor joining request for {string}',
  async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_clientagorameeting.acceptAgoraMeetingMonitorJoiningRequest(user);
  },
);

When(
  'Verify the participant name for {string}',
  async function (this: ICustomWorld, user: string) {
    const participantsName = readFromYamlFilePath('CampaignData')['monitornickname']
    await this.PageObject?.obj_clientagorameeting.verifyTheAgoraMeetingParticipantsName(
      participantsName,
      user,
    );
  },
);

When(
  'Verify the interview schedule for {string}',
  async function (this: ICustomWorld, user: string) {
    const interviewSchedule = readFromYamlFilePath('CampaignData')['interviewSchedule']
    console.log('dddddd------------------------' + interviewSchedule)
    await this.PageObject?.obj_clientagorameeting.verifyTheAgoraMeetingInterviewSchedule(
      interviewSchedule,
      user,
    );
  },
);

When(
  'Verify the interview duration for {string}',
  async function (this: ICustomWorld, user: string) {
    const interviewDuration = readFromYamlFilePath('CampaignData')['interviewDuration']
    await this.PageObject?.obj_clientagorameeting.verifyTheAgoraMeetingInterviewDuration(
      interviewDuration,
      user,
    );
  },
);

When(
  'Logout for {string}',
  async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_clientagorameeting.logOut(user);
  },
);










When(
  'Verify the chat tab {string} for {string}',
  async function (this: ICustomWorld, chatTab: string, user: string) {
    await this.PageObject?.obj_clientagorameeting.verifyTheAgoraMeetingChatTab(chatTab, user);
  },
);

When(
  'Click on Interview feedback cancel button',
  async function (this: ICustomWorld,) {
    await this.PageObject?.obj_clientagorameeting.clickOnFeedbackCancelButton();
  },
);

When(
  'Click on Retry button',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_clientagorameeting.clickRetryButton();
  },
);


When(
  'Verify that user is navigated to settings page',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_clientagorameeting.verifySettingsPage();
  },
);


When(
  'Click on Close screen button',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_clientagorameeting.clickCloseScreenButton();
  },
);

When('Verify the feedback question 1', async function (this: ICustomWorld) {
  await this.PageObject?.obj_clientagorameeting.verifyFeedbackQuestion1();
})

When('Verify the feedback question 2', async function (this: ICustomWorld) {
  await this.PageObject?.obj_clientagorameeting.verifyFeedbackQuestion2();
})

When('Click on Rating {string}', async function (this: ICustomWorld, rating: string) {
  await this.PageObject?.obj_clientagorameeting.clickRatingBtn(rating);
})

When('Enter question 2 answer as {string}', async function (this: ICustomWorld, answer: string) {
  await this.PageObject?.obj_clientagorameeting.answerQuestion2(answer);
})




When('Verify the maximum character validation', async function (this: ICustomWorld) {
  await this.PageObject?.obj_clientagorameeting.verifyMaximumCharacterValidation();
})




When('Click submit button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_clientagorameeting.clickFeedbackSubmitButton();
})

When('Verify the error message', async function (this: ICustomWorld) {
  await this.PageObject?.obj_clientagorameeting.verifyErrorMessage();
})
