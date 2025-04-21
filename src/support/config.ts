import { devices, LaunchOptions } from '@playwright/test';

import dotenv from 'dotenv';


if (process.env.NODE_ENV) {
  dotenv.config({
    path: `src/config/.env.${process.env.NODE_ENV}`,
    override: true
  })

} else {
  dotenv.config({
    path: `src/config/.env`,
    override: true
  });
}





const browserOptions: LaunchOptions = {
  slowMo: 0,
  args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
  },
  headless: false,
};
export const config = {

  browsers: ['chromium'],
  browserOptions,


  monitorBaseUrl: process.env.MONITOR_BASE_URL!,
  clientBaseUrl: process.env.CLIENT_BASE_URL!,
  clientCampaignListURL: process.env.CLIENTCAMPAIGNLISTURL!,
  meetingBaseUrl: process.env.MEETING_BASE_URL!,
  adminBaseUrl: process.env.ADMINBASEURL!,
  clientHomePageURL: process.env.CLIENT_TOP_PAGE_URL!,
  ticketPurchasePageURL: process.env.TICKET_PURCHASE_URL!,
  monitorTopPageURL: process.env.MONITOR_TOP_PAGE_URL!,
  monitorNotificationPageURL: process.env.MONITOR_TOP_PAGE_URL!,



  videoOnOff: 'off',
  meetingName: 'QATestnew146',
  user1Name: 'Aneesh',
  user2Name: 'Anita',

  Dynamicsessions: false,

  messageCount: 3,

  interviewerCount: 5, //error = 10( limit=9)
  monitorCount: 2, // error = 2 ( limit = 1)
  backroomCount: 0, // error = 21 ( limit = 20)

  addBackroom: false, // true for message history verification

  clientUserId: process.env.AGORACLIENTUSERID!,
  clientPassword: process.env.AGORACLIENTPASSWORD!,

  adminUserID: process.env.ADMINUSERID!,
  adminPassword: process.env.ADMINPASSWORD!,

  AgoraclientUserId: process.env.AGORACLIENTUSERID!,
  AgoraclientPassword: process.env.AGORACLIENTPASSWORD!,
  AgoraMonitorUserId: 'test_36_@airs.macromill.com',
  AgoraMonitorPassword: 'password',

  monitor_Password: 'password',

  monitor_34_MailId: process.env.MONITOR_34_MAILID!,
  monitor_34_Password: process.env.MONITOR_34_PASSWORD!,
  monitor_34_NickName: 'Monitor-34',
  monitor_35_MailId: process.env.MONITOR_35_MAILID!,
  monitor_35_Password: process.env.MONITOR_35_PASSWORD!,
  monitor_35_NickName: 'Test Monitor',
  monitor_36_MailId: process.env.MONITOR_36_MAILID!,
  monitor_36_Password: process.env.MONITOR_36_PASSWORD!,
  monitor_36_NickName: 'test_36',
  monitor_37_MailId: process.env.MONITOR_37_MAILID!,
  monitor_37_Password: process.env.MONITOR_37_PASSWORD!,
  monitor_40_MailId: process.env.MONITOR_40_MAILID!,
  monitor_40_Password: process.env.MONITOR_40_PASSWORD!,
  monitor_40_NickName: 'test_40',
  monitor_38_MailId: process.env.MONITOR_38_MAILID!,
  monitor_38_Password: process.env.MONITOR_38_PASSWORD!,
  monitor_38_NickName: 'test_38',
  monitor_39_MailId: process.env.MONITOR_39_MAILID!,
  monitor_39_Password: process.env.MONITOR_39_PASSWORD!,
  monitor_39_NickName: 'ss',
  monitor_41_MailId: process.env.MONITOR_41_MAILID!,
  monitor_41_Password: process.env.MONITOR_41_PASSWORD!,
  monitor_41_NickName: 'test_41',
  monitor_42_MailId: process.env.MONITOR_42_MAILID!,
  monitor_42_Password: process.env.MONITOR_42_PASSWORD!,
  monitor_42_NickName: 'test_42',
  monitor_43_MailId: process.env.MONITOR_43_MAILID!,
  monitor_43_Password: process.env.MONITOR_43_PASSWORD!,
  monitor_43_NickName: 'test_43',
  monitor_44_MailId: process.env.MONITOR_44_MAILID!,
  monitor_44_Password: process.env.MONITOR_44_PASSWORD!,
  monitor_44_NickName: 'Test-44',
  monitor_45_MailId: process.env.MONITOR_45_MAILID!,
  monitor_45_Password: process.env.MONITOR_45_PASSWORD!,
  monitor_45_NickName: 'test_45',


  monitor_invalidusername_MailId: 'InvalidMailD',
  monitor_wrongpassword_Password: 'InvalidPassword',

  mobileView: false,
  interviewersName: [''],
  monitors: [''],
  backroomMembers: [''],
  userList: [
    'Aneesh',
    'Remya',
    'Divya',
    'Vishnu',
    'Yadu',
    'Saritha',
    'Megha',
    'Abhijith',
    'Akshay',
    'Neil',
    'Revanth',
    'Sreerag',
    'Stibin',
    'Vishnu',
    'Jithin',
    'Monica',
    'Vaishnav',
    'Harin',
    'Krishnapriya',
    'Abin',
    'Neethu',
  ],

  // Maximum limit of members
  interviewerLimit: 9, //error = 10( limit=9)
  monitorLimit: 1, // error = 2 ( limit = 1)
  backroomLimit: 20, // error = 21 ( limit = 20)
  serverOs: 'Windows',
  compilerOptions: {
    outDir: 'dist',
  },

  IMG_THRESHOLD: { threshold: 0.4 },
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,

    trace: 'on',
    contextOptions: {
      recordVideo: {
        dir: '../screenshots',
      },
      permissions: {
        // Add permissions here
        camera: true,
        microphone: true,
        notifications: true,
      },
    },
    headless: false,
    fullScreen: true,
    video: 'on',
    permissions: {
      // Add permissions here
      camera: true,
      microphone: true,
      notifications: true,
    },
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        video: 'on',
      },
      permissions: {
        // Add permissions here
        camera: true,
        microphone: true,
        notifications: true,
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
};
