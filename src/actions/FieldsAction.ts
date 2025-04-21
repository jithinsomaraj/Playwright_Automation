import { BaseAction } from './BaseAction';
import { loadFieldsConfigFromYaml } from '../utils/YamlReader';
import ScenarioContext from '../support/ScenarioContext';
// import { getConfiguration } from '../utils/EnvironmentConfigurationHandler';
// import { faker } from '@faker-js/faker';
import { Page, expect } from '@playwright/test';

export default class FieldsAction extends BaseAction {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private fieldConfig: any;

  constructor(page: Page) {
    super(page);
    this.fieldConfig = loadFieldsConfigFromYaml();
  }

  public getConfig(fieldName: string) {
    return this.fieldConfig[fieldName];
  }

  public getContextId(fieldName: string) {
    return this.getConfig(fieldName).id;
  }

  public async getInput(fieldName: string) {
    return await this.page.locator(this.getConfig(fieldName).inputSelector);
  }

  public async clear(fieldName: string) {
    const contextId = this.getContextId(fieldName);
    const input = await this.getInput(fieldName);
    await input.fill('');
    await input.evaluate((e) => e.blur());
    ScenarioContext.put(contextId, '');
  }

  public async checkValueIs(fieldName: string, value: string) {
    const inputField = await this.getInput(fieldName);
    expect(await inputField.inputValue()).toBe(value);
  }

  public async checkValueIsAsEntered(fieldName: string) {
    if (fieldName === 'phone number') {
      let previousInput = ScenarioContext.get(this.getContextId(fieldName));
      previousInput = previousInput.slice(0, 4) + ' ' + previousInput.slice(4);
      await this.checkValueContains(fieldName, previousInput);
    } else {
      await this.checkValueIs(fieldName, ScenarioContext.get(this.getContextId(fieldName)));
    }
  }

  public async checkValueContains(fieldName: string, value: string) {
    const inputField = await this.getInput(fieldName);
    expect(await inputField.inputValue()).toContain(value);
  }

  public async checkErrorMessageIs(fieldName: string, errorMessage: string) {
    const actualErrorMessage = await this.page
      .locator(this.getConfig(fieldName).errorMessageSelector)
      .innerText();
    expect(actualErrorMessage).toContain(errorMessage);
  }

  public async checkForNoErrorMessage(fieldName: string) {
    expect(
      await this.page.locator(this.getConfig(fieldName).errorMessageSelector).isVisible(),
    ).toBeFalsy();
  }

  public async checkMaximumLength(fieldName: string) {
    const contextId = this.getContextId(fieldName);
    const maxLength = this.getConfig(fieldName).maxLength;
    await this.checkValueIs(fieldName, ScenarioContext.get(contextId).substr(0, maxLength));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async enter(fieldName: string, value: any) {
    const contextId = this.getContextId(fieldName);
    const fieldInput = await this.getInput(fieldName);
    await fieldInput.fill('');
    await fieldInput.type(value);
    await fieldInput.evaluate((e) => e.blur());
    ScenarioContext.put(contextId, value);
  }

  public async enterLongerThanMax(fieldName: string) {
    const maxLength = this.getConfig(fieldName).maxLength;
    const longString = [...new Array(maxLength + 10)].join('1');
    await this.enter(fieldName, longString);
  }

  //   public async enterRandom(fieldName: string) {
  //     let value = '';
  //     switch (fieldName) {
  //       case 'address line 1':
  //         value = faker.address.streetAddress();
  //         break;
  //       case 'address line 2':
  //         value = faker.address.secondaryAddress();
  //         break;
  //       case 'city':
  //         value = faker.address.city();
  //         break;
  //       case 'company name':
  //         value = faker.company.name();
  //         break;
  //       case 'current email':
  //         value = (await getConfiguration()).env.userEmail;
  //         break;
  //       case 'current password':
  //         value = (await getConfiguration()).env.userPassword;
  //         break;
  //       case 'last name':
  //         value = faker.name.lastName();
  //         break;
  //       case 'new email':
  //         value = faker.internet.email();
  //         break;
  //       case 'new password':
  //         value = (await getConfiguration()).env.userPassword;
  //         break;
  //       case 'new rakuten id':
  //         value = faker.internet.userName();
  //         break;
  //       case 'card holder name':
  //         value = `${faker.name.firstName()} ${faker.name.lastName()}`;
  //         break;
  //       case 'first name':
  //         value = faker.name.firstName();
  //         break;
  //       case 'phone number':
  //         // hard-code:  EUPUX-1510
  //         const prefix = '751';
  //         const generatedNumber = String(this.randomGeneratedNumber(7));
  //         value = prefix + generatedNumber;
  //         break;
  //       case 'postal code':
  //         value = faker.address.zipCode();
  //         break;
  //       case 'state':
  //         value = faker.address.state();
  //         break;
  //       default:
  //         value = faker.random.word();
  //     }

  //     await this.enter(fieldName, value);
  //   }

  public randomGeneratedNumber(length: number) {
    return Math.floor(
      Math.pow(10, length - 1) +
        Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1),
    );
  }
}
