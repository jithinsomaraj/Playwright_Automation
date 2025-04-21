/* eslint-disable no-console */
import CryptoJS from 'crypto-js';
import { BaseAction } from './BaseAction';
// import { loadFieldsConfigFromYaml } from '../utils/YamlReader';
// import { getConfiguration } from 'src/support/config';
import { Page } from '@playwright/test';
export default class PagesAction extends BaseAction {
  constructor(page: Page) {
    super(page);
  }

  public async decriptPassword(password: string, key: string) {
    return CryptoJS.AES.decrypt(password, key).toString(CryptoJS.enc.Utf8);
  }
  public async encryptPassword(password: string, key: string) {
    const pass = await CryptoJS.AES.encrypt(password, key);
    return pass;
    console.log('encrypted Pass :' + pass);
  }
}
