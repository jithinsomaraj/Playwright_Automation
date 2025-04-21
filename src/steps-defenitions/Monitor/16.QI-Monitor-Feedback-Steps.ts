import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';



When('Click on the completion tab for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_monitor_feedback.clickOnCompletionTab(user);
})


When('Verify that the project status is displayed as {string} for {string}', async function (this: ICustomWorld, status: string, user: string) {
    await this.PageObject?.obj_monitor_feedback.verifyProjectStatus(status, user);
})


When('Verify the feedback question 1 for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_monitor_feedback.verifyFeedbackQuestion1(user);
})

When('Verify the feedback question 2 for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_monitor_feedback.verifyFeedbackQuestion2(user);
})

When('Click on Rating {string} for {string}', async function (this: ICustomWorld, rating: string, user: string) {
    await this.PageObject?.obj_monitor_feedback.clickRatingBtn(rating, user);
})

When('Enter question 2 answer as {string} for {string}', async function (this: ICustomWorld, answer: string, user: string) {
    await this.PageObject?.obj_monitor_feedback.answerQuestion2(answer, user);
})


When('Click submit button for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_monitor_feedback.clickFeedbackSubmitButton(user);
})

When('Verify the success message for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_monitor_feedback.verifyFeedbackSuccessMessage(user);
})

When('Click close button of success message pop up for {string}', async function (this: ICustomWorld, user: string) {
    await this.PageObject?.obj_monitor_feedback.clickSuccessMessageCloseButton(user);
})