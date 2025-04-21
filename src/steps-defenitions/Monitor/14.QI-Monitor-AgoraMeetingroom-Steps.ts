import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';

When(
    'Verify meeting room campaign name for {string}',
    async function (this: ICustomWorld, user: string) {
        await this.PageObject?.obj_monitoragorameeting.verifyMonitorAgoraMeetingRoomCampaingName(user);
    },
);

When(
    'Verify agora meeting room interview duration {string} for {string}',
    async function (this: ICustomWorld, interviewDuration: string, user: string) {
        await this.PageObject?.obj_monitoragorameeting.verifyMonitorAgoraMeetingRoomInterviewDuration(
            interviewDuration,
            user,
        );
    },
);

When(
    'Click on interview leave button for {string}',
    async function (this: ICustomWorld, user: string) {
        await this.PageObject?.obj_monitoragorameeting.clickOnInterviewLeaveButton(user);
    },
);

When(
    'Click on Interview leaving confirmation cancel button for {string}',
    async function (this: ICustomWorld, user: string) {
        await this.PageObject?.obj_monitoragorameeting.clickOnInterviewLeavingConfirmationCancelButton(user);
    },
);

When(
    'Click on Interview leaving confirmation accept button for {string}',
    async function (this: ICustomWorld, user: string) {
        await this.PageObject?.obj_monitoragorameeting.clickOnInterviewLeavingConfirmationAcceptButton(
            user,
        );
    },
);


When(
    'Click on Interview feedback cancel button for {string}',
    async function (this: ICustomWorld, user: string) {
        await this.PageObject?.obj_monitoragorameeting.clickOnFeedbackCancelButton(
            user,
        );
    },
);


When('Verify feedback question 1 for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_monitoragorameeting.verifyFeedbackQuestion1(user);
})

When('Verify feedback question 2 for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_monitoragorameeting.verifyFeedbackQuestion2(user);
})

When('Click Rating {string} for {string}', async function (this: ICustomWorld, rating: string, user: string) {
    await this.PageObject?.obj_monitoragorameeting.clickRatingBtn(rating, user);
})

When('Enter the question 2 answer as {string} for {string}', async function (this: ICustomWorld, answer: string, user: string) {
    await this.PageObject?.obj_monitoragorameeting.answerQuestion2(answer, user);
})

When('Click feedback submit button for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_monitoragorameeting.clickFeedbackSubmitButton(user);
})




When(
    'Click on Retry button for {string}',
    async function (this: ICustomWorld, user: string) {
        await this.PageObject?.obj_monitoragorameeting.clickRetryButton(
            user,
        );
    },
);



When(
    'Verify that {string} is navigated to settings page',
    async function (this: ICustomWorld, user: string) {
        await this.PageObject?.obj_monitoragorameeting.verifySettingsPage(
            user,
        );
    },
);


When(
    'Click on Close screen button for {string}',
    async function (this: ICustomWorld, user: string) {
        await this.PageObject?.obj_monitoragorameeting.clickCloseScreenButton(
            user,
        );
    },
);

When(
    'Verify that {string} is navigated to participant tab',
    async function (this: ICustomWorld, user: string) {
        await this.PageObject?.obj_monitoragorameeting.verifyMonitorNavigation(
            user,
        );
    },
);


When('Enable the video button for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_monitoragorameeting.clickOnMonitorAgoraMeetingRoomEnabledVideoButton(
        user,
    );
});


When('Disable the video button for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_monitoragorameeting.clickOnMonitorAgoraMeetingRoomDisabledVideoButton(
        user,
    );
});

When('Enable the mic for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_monitoragorameeting.clickOnMonitorAgoraMeetingRoomEnabledMicButton(
        user,
    );
});

When('Disable the mic button for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_monitoragorameeting.clickOnMonitorAgoraMeetingRoomDisabledMicButton(
        user,
    );
});

When(
    'Click on meeting room more icon for {string}',
    async function (this: ICustomWorld, user: string) {
        await this.PageObject?.obj_monitoragorameeting.clickOnMonitorAgoraMeetingRoomMoreIcon(
            user,
        );
    },
);

When(
    'Click on meeting room participants list icon for {string}',
    async function (this: ICustomWorld, user: string) {
        await this.PageObject?.obj_monitoragorameeting.clickOnMonitorAgoraMeetingRoomParticipantsList(user);
    },
);

When(
    'Verify meeting room participants type {string} for {string}',
    async function (this: ICustomWorld, userType: string, username: string) {
        await this.PageObject?.obj_monitoragorameeting.verifyMonitorAgoraMeetingRoomParticipantsType(
            userType, username
        );
    },
);

When(
    'Verify meeting room monitor name {string} for {string}',
    async function (this: ICustomWorld, userType: string, user: string) {
        await this.PageObject?.obj_monitoragorameeting.verifyMonitorAgoraMeetingRoomParticipantsName(
            userType,
            user,
        );
    },
);



When(
    'Click on meeting room participants list close button for {string}',
    async function (this: ICustomWorld, user: string) {
        await this.PageObject?.obj_monitoragorameeting.clickOnMonitorAgoraMeetingRoomParticipantsListCloseButton(user);
    },
);


When(
    'Click on monitor agora chat button for {string}',
    async function (this: ICustomWorld, user: string) {
        await this.PageObject?.obj_monitoragorameeting.clickOnMonitorChatButton(
            user,
        );
    },
);






When(
    'Click on monitor agora chat close button for {string}',
    async function (this: ICustomWorld, user: string) {
        await this.PageObject?.obj_monitoragorameeting.clickOnMonitorAgoraMeetingRoomChatListCloseButton(
            user,
        );
    },
);

