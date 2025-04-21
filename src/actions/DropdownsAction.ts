// import { Page, expect } from "@playwright/test";
// import { loadDropdownsConfigFromYaml } from "../utils/YamlReader";
// import { BaseAction } from "./BaseAction";
// import FieldsAction from "./FieldsAction";
// import ScenarioContext from "../entities/ScenarioContext";

// export default class DropdownsAction extends BaseAction {
//     private dropdownConfig;
//     private fieldsAction: FieldsAction;

//     constructor(page: Page, fieldsAction: FieldsAction) {
//         super(page);
//         this.fieldsAction = fieldsAction;
//         this.dropdownConfig = loadDropdownsConfigFromYaml();
//     }

//     public getConfig(dropdownName: string) {
//         return this.dropdownConfig[dropdownName];
//     }

//     public getContextId(dropdownName: string) {
//         return this.getConfig(dropdownName).id;
//     }

//     public getItemSelector(dropdownName: string, itemId: string) {
//         return this.getConfig(dropdownName).itemSelector.replace('{id}', itemId);
//     }

//     public async checkValueIs(dropdownName:string , value: string) {
//         await this.fieldsAction.checkValueIs(dropdownName,value);
//     }

//     public async checkErrorMessageIs(dropdownName: string, errorMessage: string) {
//         await expect(this.getConfig(dropdownName).errorMessageSelector).toContain(errorMessage);
//     }

//     public async select(dropdownName: string, idItem: string) {
//         const contextId = this.getContextId(dropdownName);
//         await this.openDropdown(dropdownName);
//         await this.page.locator(this.getItemSelector(dropdownName,idItem)).click();
//         ScenarioContext.put(contextId, idItem);
//     }

//     public async selectRandom(dropdownName: string) {
//         const config = this.getConfig(dropdownName);
//         const randomId = Math.floor(Math.random() * config.itemsCount).toString();
//         await this.select(dropdownName, randomId);
//     }

//     public async selectUkPhoneCountryCode(){
//         const dropdownName = "phone number country code";
//         const contextId = this.getContextId(dropdownName);
//         await this.openDropdown(dropdownName);
//         const fieldLocator = await this.fieldsAction.getInput("search box");
//         await fieldLocator.fill("United Kingdom");
//         await this.page.locator(this.getItemSelector(dropdownName, "0")).click();
//         ScenarioContext.put(contextId, 0);
//     }

//     public async openDropdown(dropdownName: string) {
//         const fieldConfig = this.fieldsAction.getConfig(dropdownName);
//         if (fieldConfig) {
//             const fieldLocator = await this.fieldsAction.getInput(dropdownName);
//             await fieldLocator.focus();
//         } else {
//             await this.page.waitForSelector(this.getConfig(dropdownName).dropdownSelector);
//             await this.page.locator(this.getConfig(dropdownName).dropdownSelector).click();
//         }
//     }

//     public async typeSelect(dropdownName: string, value: string) {
//         const contextId = this.getContextId(dropdownName);
//         const fieldLocator = await this.fieldsAction.getInput(dropdownName);
//         await fieldLocator.fill(value);
//         await this.page.locator(this.getItemSelector(dropdownName, "0")).click();
//         ScenarioContext.put(contextId, 0);
//     }

// }
