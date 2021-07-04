import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { FCM } from '@ionic-native/fcm';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { HTTP } from '@ionic-native/http';
import { Dialogs } from '@ionic-native/dialogs';
import { AppVersion } from '@ionic-native/app-version';
import { FileTransfer } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';
import { Toast } from '@ionic-native/toast';
import { EmojiModule } from 'angular-emojione';
import { IonicSelectableModule } from 'ionic-selectable';
import { CommonUtilities } from '../providers/commonUtilities/commonUtilities';
import { GetterSetter } from '../providers/getterSetter/getterSetter';
import { FCMUtility } from '../providers/pushNotification/fcm';
import { Data } from '../providers/data/data';
import { HttpProvider } from '../providers/http/http';
import { HttpAngularProvider } from '../providers/http-angular/http-angular';
import { HttpNativeProvider } from '../providers/http-native/http-native';
import { Download } from '../providers/download/download';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MyApp } from './app.component';
import { File } from '@ionic-native/file';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';
import { IOSFilePicker } from '@ionic-native/file-picker';
import { FileChooser } from '@ionic-native/file-chooser';
import { ComponentsModule } from '../components/components.module';
import { searchService } from '../providers/services/searchService/searchService';
import { Injector } from '@angular/core';
export let InjectorInstance: Injector;
import { ReactiveFormsModule } from '@angular/forms';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { SpeechRecognitionUtility } from '../providers/speechRecognition/speechRecognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Keyboard } from '@ionic-native/keyboard';
import { Market } from '@ionic-native/market';
import { TooltipsModule } from 'ionic-tooltips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { DocumentPicker } from '@ionic-native/document-picker';
import { FilePath } from '@ionic-native/file-path';
import { Chooser } from '@ionic-native/chooser';
import { FaqDetail } from '../components/faq-detail/faq-detail';
import { CalenderModel } from "../components/calender-model/calender-model";
import { ChatBotModel } from "../components/chat-bot-model/chat-bot-model";
import { ZelearnPopoverPage } from "../container/ZenLearn/zelearn-popover/zelearn-popover";
// import { StarRatingModule } from 'ionic3-star-rating';
import { SubmitReferralComponent } from '../components/submit-referral/submit-referral';
import { ZenrichStarPointsComponent } from '../components/zenrich-star-points/zenrich-star-points';
import { DapPopoverPage } from '../container/ZenLearn/dap-popover/dap-popover';
//image slider files
import { IonicImageViewerModule } from 'ionic-img-viewer';
import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import 'array-flat-polyfill';
//import { Network } from '@ionic-native/network';
import { Network } from '@ionic-native/network'
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { ConnectivityService } from "../providers/connection-status/connectionStatus";
import { DatePipe, DecimalPipe, CurrencyPipe } from '@angular/common';
import { RegistrationPage } from '../container/registration/registration';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
// import { ConnectivityAlertComponent } from "../container/connectivity-alert/connectivity-alert";

import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { NgCircleProgressModule } from 'ng-circle-progress';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';

// Load FusionCharts Individual Charts
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { from } from 'rxjs/observable/from';
import { BrowserTab } from '@ionic-native/browser-tab';
import { AppAvailability } from '@ionic-native/app-availability';
import { DirectivesModule } from '../directives/directives.module';
import { Clipboard } from '@ionic-native/clipboard';
import { Crop } from '@ionic-native/crop';
import { StreamingMedia } from '@ionic-native/streaming-media';
// Use fcRoot function to inject FusionCharts library, and the modules you want to use
FusionChartsModule.fcRoot(FusionCharts, Charts)

// import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { Geolocation } from '@ionic-native/geolocation';

// finance pages
import { FinanceDashboardPage } from "../container/ZenFianance/finance-dashboard/finance-dashboard";
import { PaySlipPage } from "../container/ZenFianance/finance-dashboard/payslip/payslip";
import { PfPage } from "../container/ZenFianance/finance-dashboard/pfBalance/pfBalance";
import { CapPage } from "../container/ZenFianance/finance-dashboard/cap/cap";
import { PaySlipModelPage } from "../container/ZenFianance/finance-dashboard/payslipModel/payslipModel";
import { ZenfinancePopoverPage } from "../container/ZenFianance/finance-dashboard/zenfinance-popover/zenfinance-popover";
import { ReadMorePopup } from '../container/chat-bot-new/chat-bot-components/read-more-popup/read-more-popup';
import { LinkyModule } from 'ngx-linky';
import { ChatBotSuggestionModel } from '../container/chat-bot-new/chat-bot-modal/chat-bot-suggestion-model/chat-bot-suggestion-model';
import { MoveToPageService } from '../container/chat-bot-new/chat-bot-new-services/moveToPage.service';

// sfModule
import { SfDashbordPage } from "../container/ZenSF/sfDaashbord";
import { AddDigModelPage } from "../container/ZenSF/addDigModel/addDigModel";
import { SfDetailsPage } from "../container/ZenSF/sfDetails/sfDetails";
import { SumbitPage } from "../container/ZenSF/sucessSumbit/sucessSumbit";
import { GoalListModelPage } from "../container/ZenSF/goalListModel/goalListModel";
import { ManagerActivityListPage } from "../container/ZenSF/manager_Activity_List/manager_Activity_List";
import { AddCommentPage } from "../container/ZenSF/addComment/addComment";

// admin notification module
import { NotificationPage } from "../container/zen-admin/notification/notification";
import { CustomNotificationPage } from "../container/zen-admin/custom-notification/custom-notification";
import { NotificationModelPage } from '../container/zen-admin/notification/notification-model/notification-model';
import { ReportPage } from "../container/zen-admin/reports/reports";
import { ReportModelPage } from "../container/zen-admin/report-model/report-model";
import { AddDriverModelPage } from "../container/zen-admin/add-new-driver-model/add-new-driver-model";
import { ReportDrillModelPage } from '../container/zen-admin/report-drill-model/report-drill-model';


@NgModule({
  declarations: [
    MyApp,
    FaqDetail,
    // ConnectivityAlertComponent,
    CalenderModel,
    ChatBotModel,
    ChatBotSuggestionModel,
    RegistrationPage,
    ZelearnPopoverPage,
    DapPopoverPage,
    SubmitReferralComponent,
    ZenrichStarPointsComponent,
    FinanceDashboardPage,
    PaySlipPage,
    PfPage,
    CapPage,
    PaySlipModelPage,
    ZenfinancePopoverPage,
    ReadMorePopup,
    SfDashbordPage,
    AddDigModelPage,
    SfDetailsPage,
    SumbitPage,
    GoalListModelPage,
    ManagerActivityListPage,
    AddCommentPage,
    NotificationPage,
    CustomNotificationPage,
    NotificationModelPage,
    ReportPage,
    ReportModelPage,
    AddDriverModelPage,
    ReportDrillModelPage
  ],
  imports: [
    BrowserModule,
    // StarRatingModule,
    // AutocompleteLibModule,
    IonicModule.forRoot(MyApp, {
      mode: 'md',
      scrollPadding: false,
      scrollAssist: false,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    ComponentsModule,
    ReactiveFormsModule,
    IonicImageViewerModule,
    ionicGalleryModal.GalleryModalModule,
    TooltipsModule.forRoot(),
    BrowserAnimationsModule,
    FusionChartsModule,
    DirectivesModule,
    LinkyModule,

    NgCircleProgressModule.forRoot(),

  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, FaqDetail, CalenderModel, ChatBotModel, RegistrationPage, FinanceDashboardPage, ZenfinancePopoverPage, PaySlipModelPage, PaySlipPage, CapPage, PfPage, ZelearnPopoverPage, DapPopoverPage, SubmitReferralComponent, ZenrichStarPointsComponent,
    ReadMorePopup, ChatBotSuggestionModel, SfDashbordPage, AddDigModelPage, SfDetailsPage, SumbitPage, GoalListModelPage, ManagerActivityListPage,
    AddCommentPage, NotificationPage, CustomNotificationPage, NotificationModelPage, ReportPage, ReportModelPage,AddDriverModelPage,ReportDrillModelPage
  ],
  providers: [
    StreamingMedia,
    Crop,
    Chooser,
    FilePath,
    // DocumentPicker,
    // StreamingMedia,
    Keyboard,
    AppVersion,
    Dialogs,
    StatusBar,
    ImagePicker,
    Camera,
    IOSFilePicker,
    FileChooser,
    SplashScreen,
    InAppBrowser,
    File,
    Data,
    FCM,
    LocalNotifications,
    FCMUtility,
    HTTP,
    HttpProvider,
    Screenshot,
    HttpAngularProvider,
    HttpNativeProvider,
    CommonUtilities,
    GetterSetter,
    searchService,
    Download,
    FileTransfer,
    FileOpener,
    Toast,
    EmojiModule,
    IonicSelectableModule,
    SpeechRecognition,
    SpeechRecognitionUtility,
    TextToSpeech,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: HAMMER_GESTURE_CONFIG, useClass: ionicGalleryModal.GalleryModalHammerConfig },
    Market,
    Network,
    Market,
    ConnectivityService,
    AndroidPermissions,
    DatePipe,
    AndroidFingerprintAuth,
    FingerprintAIO,
    DecimalPipe,
    BrowserTab,
    AppAvailability,
    MoveToPageService,
    Clipboard,
    Crop,
    CurrencyPipe,


    // CallNumber,
    // SMS,
    // Geolocation
  ]

})
export class AppModule
{
  constructor(private injector: Injector)
  {
    InjectorInstance = this.injector;
  }

}
