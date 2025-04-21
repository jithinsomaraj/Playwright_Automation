
import { ICustomWorld } from '../../support/custom-world';
import { When } from '@cucumber/cucumber';
When(
  'Verify the {string} for {string}',
  async function (this: ICustomWorld, status: string, monitorName: string) {
    await this.PageObject?.obj_MonitorTopPage.verifyMonitorProfileDetails(status, monitorName);
  },
);
When(
  'Verify the Age from monitor profile details',
  async function (this: ICustomWorld) {
    await this.PageObject?.obj_MonitorTopPage.verifyMonitorProfileDetails_Age();
  },
);


When(
  'Verify the {string} of the monitor {string} is {string}',
  async function (
    this: ICustomWorld,
    monitorAttribute: string,
    nickName: string,
    monitorAttributeValue: string,
  ) {
    let Count = 0;

    switch (monitorAttribute) {
      case 'Status':
        await this.PageObject?.obj_client_monitordetails.verifyMonitorStatus(
          nickName,
          monitorAttributeValue,
        );
        break;
      case 'Gender':
        Count = 2;
        break;
      case 'Age':
        Count = 3;
        break;
      case 'Place of residence':
        Count = 4;
        break;
      case 'Marital status':
        Count = 5;
        break;
      case 'Children status':
        Count = 6;
        break;
      case 'Profession':
        Count = 7;
        break;
      case 'Personal annual income':
        Count = 8;
        break;
      case 'Household income':
        Count = 9;
        break;
      default:
        console.log('Invalid switch condition');
        break;
    }

    if (monitorAttribute != 'Status') {
      await this.PageObject?.obj_client_monitordetails.verifyMonitorAttributes(
        nickName,
        monitorAttributeValue,
        Count,
      );
    }
  },
);
