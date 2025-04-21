
import { ICustomWorld } from '../../support/custom-world';
import { Then, When } from '@cucumber/cucumber';

When(
  'Click on memo icon for the monitor having nick name {string}',
  async function (this: ICustomWorld, monitorNickName: string) {
    await this.PageObject?.obj_ClientCampaignDetailsPage_Memo.clickOnMemoIcon(monitorNickName);
  },
);

When('Enter the memo {string}', async function (this: ICustomWorld, memo: string) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Memo.enterTheMemo(memo);
});

When('Click on the memo submit button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Memo.submitTheMemo();
});
Then(
  'Verify the momo {string} against the monitor {string} after submission',
  async function (this: ICustomWorld, memo: string, nickName: string) {
    await this.PageObject?.obj_ClientCampaignDetailsPage_Memo.verifyMemoGridAfterSubmission(
      memo,
      nickName,
    );
  },
);

When('Click on the memo cancel button', async function (this: ICustomWorld) {
  await this.PageObject?.obj_ClientCampaignDetailsPage_Memo.canceltheMemo();
});

Then(
  'Verify the memo {string} against the monitor {string} after submission',
  async function (this: ICustomWorld, memo: string, nickName: string) {
    await this.PageObject?.obj_ClientCampaignDetailsPage_Memo.verifyMemoGridAfterSubmission(
      memo,
      nickName,
    );
  },
);

Then(
  'Verify the memo {string} against the monitor {string} after cancellation',
  async function (this: ICustomWorld, memo: string, nickName: string) {
    await this.PageObject?.obj_ClientCampaignDetailsPage_Memo.verifyMemoGridAfterCancellation(
      memo,
      nickName,
    );
  },
);

Then(
  'Verify the momo in the popup {string} after cancellation',
  async function (this: ICustomWorld, memo: string) {
    await this.PageObject?.obj_ClientCampaignDetailsPage_Memo.verifyMemoInPopupAfterCancellation(
      memo,
    );
  },
);
