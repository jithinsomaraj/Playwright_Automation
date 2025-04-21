
import { MonitorLoginPage } from '../Pages/Monitor/QI-Monitor-Login.Page';
import { MonitorTopPage } from '../Pages/Monitor/QI-Monitor-TopPage.Page';
import { MonitorProjectDetailsPage } from '../Pages/Monitor/QI-Monitor-ProjectDetails.Page';
import { Page } from '@playwright/test';
import { MonitorSceduleDetailsPage } from '../Pages/Monitor/QI-Monitor-SceduleDetails.Page';
import { MonitorSurveyPage } from '../Pages/Monitor/QI-Monitor-SurveyPage.Page';
import { ClientLoginPage } from '../Pages/Client/1.QI-Client-Login-Page';
import { ClientCampaignList } from '../Pages/Client/2.QI-Client-CampaignList-Page';
import { ClientCamaignDetailsPage_Elements } from '../Pages/Client/3.QI-Client-CampaignDetailsPage-Elements-Page';
import { ClientCamaignDetailsPage_Memo } from '../Pages/Client/4.QI-Client-CampaignDetailsPage-Memo-Page';
import { ClientCampaignDetailsPage_Popup } from '../Pages/Client/5.QI-Client-CampaignDetailsPage-CampaignDetailsPopup-Page';
import { ClientCampaignDetails_MonitorListFilter } from '../Pages/Client/6.QI-Client-CampaignDetailsPage-Filter-Page';
import MonitorSendoffByClient from '../Pages/Client/7.QI-Client-CampaignDetailsPage-Sendoff-Page';

import Client_BulkScheduleOffering from '../Pages/Client/8.QI-Client-CampaignDetailsPage-BulkScheduleOffering-Page';

import Client_MonitorDetails from '../Pages/Client/9.QI-Client-CampiagnDetailsPage-MonitorDetails-Page';

import Client_ManualRecruitmentClose from '../Pages/Client/10.QI-Client-ManualRecruitmentClose-Page';

import Client_AutoRecruitmentClose from '../Pages/Client/11.QI-Client-AutomaticRecruitmentClose-Page';

import Client_AutoCampaignClose from '../Pages/Client/13.QI-Client-AutoCampaignClose-Page';

import Client_ManualCampaignClosing from '../Pages/Client/12.QI-Client-ManualCampaignClosing-Page';

import Client_IndividualScheduleOffer from '../Pages/Client/14.QI-Client-DifferentScheduleOffering-Page';
import ButtonStatusVsInterviewStatus from '../Pages/Client/15.QI-Clinet-ButtonStatusVsMonitorStatus-Page';
import Monitor_SendoffFromParticipation from '../Pages/Monitor/QI-Monitor-ParticipationTab-SendOff-Page';
import Cliet_AfterAcceptSheduleOffer from '../Pages/Client/16.QI-Client-ScheduleOffering_AfterAccepted-Page';
import Client_ScheduleOfferCancellation from '../Pages/Client/17.QI-Client-ScheduleOffering_ScheduleOfferCancel-Page';
import Monitor_RejectScheduleOffer from '../Pages/Monitor/QI-Monitor-ScheduleOffering_Reject-Page';
import Monitor_AcceptingScheduleOffer from '../Pages/Monitor/QI-Monitor-ScheduleOffering_Accepted-Page';
import Client_BroadcastMessaging from '../Pages/Client/20.QI-Client-CampaignDetailsPage-BroadcastMessage-Page';
import Client_IndividualChatFunction from '../Pages/Client/19.QI-Client-CampaignDetailsPage-IndividualChat-Page';
import Monitor_IndividualChatFunction from '../Pages/Monitor/QI-Monitor-AppliedTab-Chat-Page';
import Client_CampaignCreation from '../Pages/Client/21.QI-Client-CampaignCreation-Page';

import Client_TopPageNotification from '../Pages/Client/22.QI-Client-TopPage_Notification-Page';

import Monitor_TopPageNotification from '../Pages/Monitor/QI-Monitor-TopPage_Notification-Page';

import Client_InterviewConfirmTab from '../Pages/Client/23.QI-Client-ConfirmedInterview-Page';

import Client_BeforeInterview from '../Pages/Client/24.QI-Client-InterviewSettingPage-Page';

import Client_TopPageElements from '../Pages/Client/25.QI-Client-TopPage-Elements-Page';
//import Monitor_BeforeInterview from '../Pages/Monitor/25.QI-Monitor-InterviewSettingPage-Page';
import CampaignDeletion from '../Pages/Client/26.QI-Client-CampaignList_Deletedraft-Page';

import ClientAgoraMeeting from '../Pages/Client/27.QI-Client-AgoraMeetingRoom-Page';
import { BasePage } from './BasePage';
import MonitorAgoraMeeting from '../Pages/Monitor/23.QI-Monitor-AgoraMeetingroom-Page';

import ClientInquiry from '../Pages/Client/28.QI-Client-Inquiry-Page';
import VideoSharing from '../Pages/Client/29.QI-Client-VideoSharing-Page';
//import MonitorAgoraMeeting from '../Pages/Monitor/23.QI-Monitor-AgoraMeetingroom-Page';
import ClientScreenSharing from '../Pages/Client/28_1.QI-Client-AgoraMeetingRoom-ScreenSharing-Page';
import MonitorAgoraScreenSharing from '../Pages/Monitor/15.QI-Monitor-AgoraMeetingRoom-ScreenSharing-Page'
import MonitorFeedback from '../Pages/Monitor/16.QI-Monitor-Feedback-Page';
import AgoraChat from '../Pages/Client/29_1.QI-Client-AgoraMeetingRoom-Chat-Page';
import { AdminSsoLogin } from '../Pages/Admin/1.QI-Admin-sso-Login-Page';
import MonitorInquiry from '../Pages/Monitor/17.QI-Monitor-Inquiry-Page';
import MonitorLoginflowChanges from '../Pages/Monitor/18.QI-Monitor-LoginFlow-Changes-Page';
import ClientLoginflow from '../Pages/Client/30.QI-Client-LoginFlow-Changes-Page';
import { AdminPointExport } from '../Pages/Admin/2.QI-Admin-PointExport-Page';
//import ClientInquiry from '../Pages/Client/31.QI-Client-Inquiry-Page';
import ClientTermsOfUse from '../Pages/Client/32.QI-Client-Terms-of-Use-Page';
import MonitorTermsOfUse from '../Pages/Monitor/32.QI-Monitor-Terms-of-Use-Page';
import Monitor_BeforeInterview from '../Pages/Monitor/13.QI-Monitor-InterviewSettingPage-Page';
import ClientTicketPurchase from '../Pages/Client/33.QI-Client-Ticket-Purchase-Page';
import { AdminProjectList } from '../Pages/Admin/3.QI-Admin-Project-List-Page';
import { AdminPBlackList } from '../Pages/Admin/4.QI-Admin-Black-List-Page';
import { TicketGranting } from '../Pages/Admin/5.QI-Admin-Ticket-Granting-Page';
import { AdminCampaignDetails } from '../Pages/Admin/6.QI-Admin-Campaign-Details-Page';
import { AdminChatList } from '../Pages/Admin/7.QI-Admin-Chat-List-Page';
import { AdminNotificationList } from '../Pages/Admin/8.QI-Admin-Notification-Registration-Page';
import { Usermanagement } from '../Pages/Admin/9.QI-Admin-User-Management-Page';
import { Sales } from '../Pages/Admin/10.QI-Admin-Sales-Page';




AdminNotificationList
export class PageObject {
  obj_BasePage: BasePage;

  obj_MonitorLoginPage: MonitorLoginPage;
  obj_MonitorTopPage: MonitorTopPage;
  obj_MonitorProjectDetailsPage: MonitorProjectDetailsPage;
  obj_MonitorscheduleDetailsPage: MonitorSceduleDetailsPage;
  obj_MonitorSurveyPage: MonitorSurveyPage;
  obj_ClientLoginPage: ClientLoginPage;
  obj_ClientCampaignList: ClientCampaignList;
  obj_ClientCampaignDetailsPage_Elements: ClientCamaignDetailsPage_Elements;
  obj_ClientCampaignDetailsPage_Memo: ClientCamaignDetailsPage_Memo;
  obj_ClientCampaignDetailsPage_Popup: ClientCampaignDetailsPage_Popup;
  obj_ClientCampaignDetails_MonitorListFilter: ClientCampaignDetails_MonitorListFilter;
  obj_MonitorSendoffByClient: MonitorSendoffByClient;

  obj_client_bulkscheduleoffering: Client_BulkScheduleOffering;
  obj_client_monitordetails: Client_MonitorDetails;
  obj_client_manualrecruitmentclose: Client_ManualRecruitmentClose;
  obj_client_autorecruitmentclose: Client_AutoRecruitmentClose;
  obj_client_autocampaignclose: Client_AutoCampaignClose;
  obj_client_manualcampaignclosing: Client_ManualCampaignClosing;
  obj_client_individualscheduleoffer: Client_IndividualScheduleOffer;
  obj_buttonstatusvsinterviewstatus: ButtonStatusVsInterviewStatus;
  obj_Monitor_AcceptingScheduleOffer: Monitor_AcceptingScheduleOffer;
  obj_Monitor_RejectScheduleOffer: Monitor_RejectScheduleOffer;
  obj_Client_ScheduleOffercanCellation: Client_ScheduleOfferCancellation;
  obj_Cliet_AfterAcceptSheduleoffer: Cliet_AfterAcceptSheduleOffer;
  obj_Monitor_SendoffFromParticipation: Monitor_SendoffFromParticipation;

  obj_Client_BroadcastMessaging: Client_BroadcastMessaging;
  obj_Client_IndividualChatFunction: Client_IndividualChatFunction;
  obj_Monitor_IndividualChatFunction: Monitor_IndividualChatFunction;
  obj_Client_CampaignCreation: Client_CampaignCreation;
  obj_Client_TopPageNotification: Client_TopPageNotification;
  obj_Monitor_TopPageNotification: Monitor_TopPageNotification;
  obj_Client_InterviewConfirmTab: Client_InterviewConfirmTab;
  obj_Client_BeforeInterview: Client_BeforeInterview;
  obj_Monitor_BeforeInterview: Monitor_BeforeInterview;

  obj_Client_TopPageElements: Client_TopPageElements;

  obj_campaigndeletion: CampaignDeletion;
  obj_clientagorameeting: ClientAgoraMeeting;
  obj_monitoragorameeting: MonitorAgoraMeeting;
  obj_client_beforeinterview: Client_BeforeInterview;
  obj_monitor_beforeinterview: Monitor_BeforeInterview;

  obj_client_ClientInquiry: ClientInquiry;

  obj_Client_VideoSharing: VideoSharing;

  obj_client_screensharing: ClientScreenSharing;
  obj_monitor_screensharing: MonitorAgoraScreenSharing;
  obj_Agora_chat: AgoraChat;
  obj_monitor_loginFlow: MonitorLoginflowChanges;
  obj_monitor_feedback: MonitorFeedback;
  obj_admin_sso_login: AdminSsoLogin;
  obj_monitor_inquiry: MonitorInquiry;
  obj_client_loginFlow: ClientLoginflow;
  obj_admin_point_export: AdminPointExport;
  obj_client_terms_of_use: ClientTermsOfUse;
  obj_monitor_terms_of_use: MonitorTermsOfUse;
  obj_client_ticket_purchase: ClientTicketPurchase;
  obj_admin_projectlist: AdminProjectList;
  obj_admin_blacklist: AdminPBlackList;
  obj_admin_ticketGranting: TicketGranting;
  obj_admincampaign_details: AdminCampaignDetails;
  obj_adminchatlist: AdminChatList;
  obj_adminnoticelist: AdminNotificationList;
  obj_adminusermanagement: Usermanagement;

  obj_adminsales: Sales;



  constructor(page: Page) {
    this.obj_BasePage = new BasePage(page);
    this.obj_ClientCampaignDetailsPage_Memo = new ClientCamaignDetailsPage_Memo(page);
    this.obj_ClientCampaignDetailsPage_Elements = new ClientCamaignDetailsPage_Elements(page);
    this.obj_MonitorLoginPage = new MonitorLoginPage(page);
    this.obj_MonitorTopPage = new MonitorTopPage(page);
    this.obj_MonitorProjectDetailsPage = new MonitorProjectDetailsPage(page);
    this.obj_MonitorscheduleDetailsPage = new MonitorSceduleDetailsPage(page);
    this.obj_MonitorSurveyPage = new MonitorSurveyPage(page);
    this.obj_ClientLoginPage = new ClientLoginPage(page);
    this.obj_ClientCampaignList = new ClientCampaignList(page);
    this.obj_ClientCampaignDetailsPage_Popup = new ClientCampaignDetailsPage_Popup(page);
    this.obj_ClientCampaignDetails_MonitorListFilter = new ClientCampaignDetails_MonitorListFilter(
      page,
    );
    this.obj_MonitorSendoffByClient = new MonitorSendoffByClient(page);

    this.obj_client_bulkscheduleoffering = new Client_BulkScheduleOffering(page);
    this.obj_client_monitordetails = new Client_MonitorDetails(page);
    this.obj_client_manualrecruitmentclose = new Client_ManualRecruitmentClose(page);
    this.obj_client_autorecruitmentclose = new Client_AutoRecruitmentClose(page);
    this.obj_client_autocampaignclose = new Client_AutoCampaignClose(page);
    this.obj_client_manualcampaignclosing = new Client_ManualCampaignClosing(page);
    this.obj_client_individualscheduleoffer = new Client_IndividualScheduleOffer(page);
    this.obj_buttonstatusvsinterviewstatus = new ButtonStatusVsInterviewStatus(page);

    this.obj_Monitor_SendoffFromParticipation = new Monitor_SendoffFromParticipation(page);

    this.obj_Cliet_AfterAcceptSheduleoffer = new Cliet_AfterAcceptSheduleOffer(page);

    this.obj_Client_ScheduleOffercanCellation = new Client_ScheduleOfferCancellation(page);

    this.obj_Monitor_RejectScheduleOffer = new Monitor_RejectScheduleOffer(page);

    this.obj_Monitor_AcceptingScheduleOffer = new Monitor_AcceptingScheduleOffer(page);
    this.obj_Client_BroadcastMessaging = new Client_BroadcastMessaging(page);
    this.obj_Client_IndividualChatFunction = new Client_IndividualChatFunction(page);
    this.obj_Monitor_IndividualChatFunction = new Monitor_IndividualChatFunction(page);
    this.obj_Client_CampaignCreation = new Client_CampaignCreation(page);

    this.obj_Client_TopPageNotification = new Client_TopPageNotification(page);

    this.obj_Monitor_TopPageNotification = new Monitor_TopPageNotification(page);

    this.obj_Client_InterviewConfirmTab = new Client_InterviewConfirmTab(page);

    this.obj_Client_BeforeInterview = new Client_BeforeInterview(page);

    this.obj_Monitor_BeforeInterview = new Monitor_BeforeInterview(page);

    this.obj_Client_TopPageElements = new Client_TopPageElements(page);

    this.obj_campaigndeletion = new CampaignDeletion(page);

    this.obj_clientagorameeting = new ClientAgoraMeeting(page);

    this.obj_monitoragorameeting = new MonitorAgoraMeeting(page);

    this.obj_client_beforeinterview = new Client_BeforeInterview(page);

    this.obj_monitor_beforeinterview = new Monitor_BeforeInterview(page);

    this.obj_client_ClientInquiry = new ClientInquiry(page);

    this.obj_Client_VideoSharing = new VideoSharing(page);

    this.obj_client_screensharing = new ClientScreenSharing(page);
    this.obj_monitor_screensharing = new MonitorAgoraScreenSharing(page);
    this.obj_monitor_feedback = new MonitorFeedback(page);
    this.obj_Agora_chat = new AgoraChat(page);
    this.obj_admin_sso_login = new AdminSsoLogin(page);
    this.obj_monitor_inquiry = new MonitorInquiry(page);
    this.obj_monitor_loginFlow = new MonitorLoginflowChanges(page);
    this.obj_client_loginFlow = new ClientLoginflow(page);
    this.obj_admin_point_export = new AdminPointExport(page);
    this.obj_client_ClientInquiry = new ClientInquiry(page);
    this.obj_client_terms_of_use = new ClientTermsOfUse(page);
    this.obj_monitor_terms_of_use = new MonitorTermsOfUse(page);
    this.obj_client_ticket_purchase = new ClientTicketPurchase(page);
    this.obj_admin_projectlist = new AdminProjectList(page);
    this.obj_admin_blacklist = new AdminPBlackList(page);
    this.obj_admin_ticketGranting = new TicketGranting(page);
    this.obj_admincampaign_details = new AdminCampaignDetails(page);
    this.obj_adminchatlist = new AdminChatList(page);
    this.obj_adminnoticelist = new AdminNotificationList(page);
    this.obj_adminusermanagement = new Usermanagement(page);
    this.obj_adminsales = new Sales(page);



  }



}
