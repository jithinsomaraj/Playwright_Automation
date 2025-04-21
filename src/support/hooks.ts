import { ICustomWorld } from './custom-world';
import ScenarioContext from './ScenarioContext';
import { config } from './config';
import FieldConfig from '../utils/FieldConfig';
import { PageObject } from '../utils/PageObjects';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import {
  Before,
  BeforeAll,
  AfterAll,
  setDefaultTimeout,
  After,
  ITestCaseHookParameter,
  Status,
} from '@cucumber/cucumber';
import { WebKitBrowser, firefox, webkit, chromium, BrowserContext, Page } from '@playwright/test';
import { createLogger } from 'winston';
import { options } from '../utils/logger';
import { readFromYamlFilePath } from '../utils/YamlReader';

let browser: WebKitBrowser;
let page: Page;
let context1: BrowserContext;

let fieldConfig: FieldConfig;
setDefaultTimeout(process.env.PWDEBUG ? -1 : 1200 * 1000);
BeforeAll(async function (this: ICustomWorld) {
  config.interviewersName = config.userList.map((value) => value + 'INT');
  config.monitors = config.userList.map((value) => value + 'MON');
  config.backroomMembers = config.userList.map((value) => value + 'BR');

  for (const browsers of config.browsers) {
    const runHeadless = process.env.CI ? true : false;
    switch (browsers) {
      case 'firefox':
        browser = await firefox.launch({ headless: true, args: ['--start-maximized'] });
        break;
      case 'webkit':
        browser = await webkit.launch({ headless: runHeadless, args: ['--start-maximized'] });
        break;
      default:
        browser = await chromium.launch({
          headless: true,
          channel: 'chromium',
          args: ['--headless=new', '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream', '--window-size=1280,720']
          // args: ['--start-maximized'],
          // args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'],
        });
    }

    ScenarioContext.put('browser', browser);
  }

  // context1 = await browser.newContext({ recordVideo: { dir: 'reports/screenvideo' }, deviceScaleFactor: 1, viewport: { width: 1280, height: 720 } })//{ viewport: { width: 1920, height: 1080 } });
  context1 = await browser.newContext({ deviceScaleFactor: 1, viewport: { width: 1280, height: 720 } })//{ viewport: { width: 1920, height: 1080 } });
  page = await context1.newPage();

  await context1.grantPermissions(['camera', 'microphone', 'notifications']);
  await page.setViewportSize({ width: 1280, height: 720 });

  if (config.Dynamicsessions == true) {
    const count = config.interviewerCount + config.monitorCount + config.backroomCount;
    // Create an array to store the contexts
    const contexts: BrowserContext[] = [];

    // Loop through each site and create a context for each
    for (let i = 0; i < count; i++) {
      const context = await browser.newContext();
      contexts.push(context);
    }
  }
  fieldConfig = new FieldConfig();

});

//------------------------------Seperate browser  contexts------------------------------

Before({ tags: '@adminsuite1' }, async function (this: ICustomWorld) {
  config.interviewersName = config.userList.map((value) => value + 'INT');
  config.monitors = config.userList.map((value) => value + 'MON');
  config.backroomMembers = config.userList.map((value) => value + 'BR');

  for (const browsers of config.browsers) {
    // Launch a new browser for each browser type
    switch (browsers) {
      case 'firefox':
        browser = await firefox.launch({ headless: false, args: ['--start-maximized'] });
        break;
      case 'webkit':
        browser = await webkit.launch({ headless: false, args: ['--start-maximized'] });
        break;
      default:
        browser = await chromium.launch({
          // headless: true,
          // args: ['--start-maximized'],
          // args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'],
        });
    }

    ScenarioContext.put('browser', browser);
  }


  context1 = await browser.newContext(); //{ viewport: { width: 1920, height: 911 } }
  page = await context1.newPage();


  await context1.grantPermissions(['camera', 'microphone', 'notifications']);


  if (config.Dynamicsessions == true) {
    const count = config.interviewerCount + config.monitorCount + config.backroomCount;
    // Create an array to store the contexts
    const contexts: BrowserContext[] = [];

    // Loop through each site and create a context for each
    for (let i = 0; i < count; i++) {
      const context = await browser.newContext();
      contexts.push(context);
    }
  }


});













//------------------------------Seperate browser  contexts------------------------------




Before({ tags: '@1233' }, async function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const status = readFromYamlFilePath('HookData')['Job1Status'];
  if (status === 'PASSED') {
    console.log("Job1 Status is :" + status);
  } else if (status === 'FAILED') {
    console.log("Job1 Status is :" + status);
    return 'skipped' as any;
  }
});

Before({ tags: '@debug' }, async function (this: ICustomWorld) {
  this.debug = true;
});


//------------ new code ----------------


Before({ tags: "not @auth" }, async function ({ pickle }) {
  const scenarioName = pickle.name;
  await context1.tracing.start({
    name: scenarioName,
    title: pickle.name,
    sources: true,
    screenshots: true, snapshots: true
  });

  createLogger(options(scenarioName));
});




Before(async function (this: ICustomWorld) {
  this.fieldConfig = fieldConfig;
  // Aneesh
  // await context1.tracing.start({ screenshots: true, snapshots: true });
  this.page = page;
  ScenarioContext.put('context1', context1);
  // ScenarioContext.put('context2', context2);
  // ScenarioContext.put('context3', context3);
  ScenarioContext.put('page1', page);
  this.PageObject = new PageObject(this.page);

});

After({ tags: '@1233' }, async function (this: ICustomWorld, { result }) {
  console.log('Result for Job 1 SAVE :----' + result?.status.toString());
  const Result = result?.status.toString();
  const yamlFile = fs.readFileSync('Fixtures/data.yaml', 'utf8');
  const data: any = yaml.load(yamlFile);
  data.HookData[0].Job1Status = Result;
  const updatedYAML = yaml.dump(data);

  // Write updated YAML back to file
  fs.writeFileSync('Fixtures/data.yaml', updatedYAML, 'utf8');

  console.log('YAML file updated successfully.');
});



After(async function (this: ICustomWorld, { pickle, result }: ITestCaseHookParameter) {
  console.log('Result:----' + result?.status.toString());
  let videoPath: string = '';
  if (result) {
    if (result.status !== Status.PASSED) {
      const image1 = await this.page?.screenshot();
      image1 && (await this.attach(image1, 'image/png'));
    }
  }
  // }

  // }
  // await this.context1?.tracing.stop({
  //   path: '../screenshots/image1.png',
  //   // path: `${tracesDir}/${this.testName}-${this.startTime?.toISOString().split('.')[0]}trace.zip`,
  // });
  // // this.PageObject?.obj_MonitorLoginPage.waitForSecond(0.25);
  // const image1 = await this.page?.screenshot();
  // image1 && (await this.attach(image1, 'image/png'));




  //--------------  new code ----------------

  // let videoPath: string = ''; // Initialize videoPath with an empty string
  let img: Buffer | undefined; // Declare img variable
  const fs = require("fs-extra");
  // Your existing code...
  const path = `./test-results/trace/trace.zip`;
  if (result?.status == Status.PASSED) {
    img = await page.screenshot(
      { path: `./test-results/screenshots/${pickle.name}.png`, type: "png" });
    // Check if page.video() is not null before accessing its path
    const video = page.video();
    if (video) {
      videoPath = await video.path();
    }
  }


  await context1.tracing.stop({ path: path });

  // Check if img is defined before using it
  if (result?.status !== Status.PASSED && videoPath && img) {
    try {
      console.log("video records.....-----------------------------------------------.>")
      const videoBuffer = fs.readFileSync(videoPath);
      await this.attach(videoBuffer, 'video/webm');
      await this.attach(img, 'image/png');
    } catch (error) {
      console.error('Error reading video file:', error);
    }
  }


});

After({ tags: '@adminsuite1' }, async function () {
  // await context1.close();
  // await browser.close();
});




AfterAll(async function () {
  await context1.close();
  await browser.close();
});



