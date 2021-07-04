import { Component, NgZone, ViewChild, OnInit } from "@angular/core"
import { NavParams, NavController, IonicPage, Content, Loading, ModalController, PopoverController, Slides, ToastController } from "ionic-angular"
import { SpeechRecognitionUtility } from "../../providers/speechRecognition/speechRecognition";
import { CommonUtilities } from "../../providers/commonUtilities/commonUtilities";
import { Subscription, Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromStore from "@app/store";
import { Data } from "../../providers/data/data";
import { Constants } from "@app/constants";
import { Platform } from "ionic-angular/platform/platform";
import { Download } from '../../providers/download/download';
import { ChatBotModel } from "../../components/chat-bot-model/chat-bot-model";
import { Keyboard } from '@ionic-native/keyboard'
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { HttpProvider } from '../../providers/http/http';
import { CalenderModel } from '../../components/calender-model/calender-model';
import * as environment from '../../environment/environment.dev';
import * as moment from 'moment';
import { version } from '@app/env';
import { AppVersion } from "@ionic-native/app-version";
import { PendingTimesheetListModalComponent } from '../../components/pending-timesheet-list-modal/pending-timesheet-list-modal';
import { FaqModalComponent } from '../../components/faq-modal/faq-modal';


@IonicPage()
@Component({
  selector: 'page-chat-bot',
  templateUrl: 'chat-bot.html',
})
export class ChatBot implements OnInit {

  @ViewChild(Content) content: Content;
  @ViewChild(Slides) slides: Slides;

  // private _chatBotLoadingListener: Subscription = new Subscription();
  private _hrChatBotListener: Subscription = new Subscription();
  private _weatherDataListener: Subscription = new Subscription();
  private _roleListener: Subscription = new Subscription();

  private title: string = ''
  private loader: Loading;
  private loading$: Observable<any>;
  private message$: Observable<any>;
  private hrChatBotData: any
  private userDetails: any = {};
  private questionAsked: string
  private showKeyboard: boolean = false
  private mute: boolean = false
  private inputChatText: string = ""
  private showSend: boolean = false
  private isFromPreviousFetchData = false;
  private queryListenFromFeedback: any;
  private cancelFlag: boolean = true;
  private showQueryBox: boolean = false;
  private pdfArray: any
  positiveFeedbackMessage = "Thank you for your feedback.";
  feedbackMessage: string = "Was this message helpful ?";
  private getModalData: any;

  public negativeFeedbackMessage: any = ""
  public chatList: any = []
  public listening: boolean = false
  public userQueryForSalary: any;
  tooglePipe = true;
  selectedIndex = -1;
  truncating = true;
  showSuggestion: boolean = true;
  private keyboard: Keyboard;
  tempSuggestions: any;
  private bannerData: any;
  private expandDiv: boolean = false;

  private timesheetData: any;
  private indexForEmpContactList: any = {
    start: 0,
    end: 7
  }
  private empContactListResponse: any;
  private timesheetRestApi: Array<any> = [];
  private showMoreArrow: boolean = false;
  private showMoreArrowForMyTimesheetList: boolean = false;
  private tsDataType = 'date';
  private tsTypes = {
    tsDate: 'date',
    taskAndTimesheetDetails: 'ttDetails',
    suggestion: 'suggestion',
    selData: {
    },
    taskId: null,
    suggestionType: null,
    updateStatus: null,
    // statusToUpdateIcon: null
  }
  private tsSelectedDateObj: any;
  private getTimesheetDetailsCurrentIndex: number = null;
  private suggestionListForTS: Array<any> = [];
  private selValue: any;
  private tsFordate: any;

  private indexToToggleForm = {
    chatListIndexToUpdate: null,
    parentIndexToUpdate: null,
    childIndexToUpdate: null
  }
  private indexToShowDot = {
    chatListIndexForDateToUpdate: null,
    dateIndexToUpdate: null
  }
  private tsFlags = {
    disableSubmit: false,
    showZencoreMigratedMessage: false
  }
  private pendingDates: Array<any> = [];
  private projectMigratedData: any = null;
  private role: any = null;
  private calendarInfo: any = null;
  private timeEntrySuggestion: any = [];
  // private timeEntry: any;
  private currentActionId: number;
  private binding: any;
  private dateListFromTimeSheet: any = [];
  private selectedDateForCT = {
    dateSelected: {
      date: "",
      day: "",
      status: ""
    },
    CTforDate: ''
  };
  private sendCTDate: any;
  private prevQueryID: number;
  // private dataCT: any;
  private taskAdded: boolean = false;
  private currentQueryId: any;
  private firstTimeEnter: boolean = false;

  constructor(public download: Download, private platform: Platform, public navParams: NavParams, private store: Store<fromStore.AppState>, private data: Data, private navCtrl: NavController, private utilities: CommonUtilities,
    private zone: NgZone, private speechRecognitionUtility: SpeechRecognitionUtility, public modalCtrl: ModalController, private screenshot: Screenshot, private popoverCtrl: PopoverController,
    private httpProvider: HttpProvider, private toastCtrl: ToastController, private appversion: AppVersion) {
    this.store.dispatch(new fromStore.GetHrChatBotClearData());
    this.title = this.navParams.get('pageTitle')
    this.questionAsked = this.navParams.get('questionAsked')

    this.hrChatBotData = this.navParams.get('hrChatBotData')
    this.getModalData = this.navParams.get('data');
    this.bannerData = this.navParams.get('isComingFromBanner');
    // //////console.log(this.getModalData);


    if (!this.utilities.isEmptyOrNullOrUndefined(this.hrChatBotData) && !this.utilities.isEmptyOrNullOrUndefined(this.hrChatBotData.actionInfo)) {
      this._addToList(this.questionAsked, this.hrChatBotData.actionInfo.speech, "bot")
      if (!this.utilities.isEmptyOrNullOrUndefined(this.hrChatBotData.actionInfo.speech)) {
        // this._tts(this.hrChatBotData.actionInfo.speech);
      }
    }

    this.platform.ready().then(() => {
      this.platform.pause.subscribe(() => {
        this._tts(" ");
        // this.platform.resume.unsubscribe();
      });

      this.platform.resume.subscribe(() => {
        // this.platform.resume.unsubscribe();
      });
    });
  }

  ngOnInit() {
    this.firstTimeEnter = true
    // this.getLoginStateFromStore();
  }



  _getChatList() {
    new Promise<void>(resolve => {
      this._hrChatBotListener = this.store.select<any>(fromStore.getHrChatBotState)
        .subscribe(
          response => {
            // //////console.log('get chat list response============== ', response);
            if (response.error == null) {
              this.chatResponseSuccess(response);
              this._scrollToBottom()
              resolve();
            } else if (response.error) {
              this.inputChatText = ""
              this._ionChangeToggleSendMic(this.inputChatText);

              if ((response.error.actionName == 'saveTimesheet' || response.error.actionName == 'submitTimesheet') && response.error.errorMsg) {
                // //////console.log(response.error.errorMsg);
                this.utilities.presentAlert(response.error.errorMsg).then(() => {
                  // //////console.log(this.tsSelectedDateObj, this.getTimesheetDetailsCurrentIndex);
                  this.getTimeEntryDetails(this.tsSelectedDateObj, this.getTimesheetDetailsCurrentIndex);
                });
              }
            }
          },
          err => {
            // ////console.log(err);
          }
        );
    });
  }

  ionViewWillEnter() {
    this.getLoginStateFromStore();
    this.isFromPreviousFetchData = this.navParams.get('isFromPreviousFetchData');

    let newQuestionPosted = this.navParams.get('questionPosted');
    if ((newQuestionPosted != null) || (newQuestionPosted != undefined)) {
      if (newQuestionPosted) {
        this.chatList.push({ "from": "bot", "response": { responseList: { speech: 'Question submitted successfully' } }, "readMore": false })
        this.store.dispatch(new fromStore.SetHrChatBotListAction(this.chatList));
      } else {
        this.chatList.push({ "from": "bot", "response": { responseList: { speech: 'Cancelled', suggestions: this.chatList[this.chatList.length - 1].response.responseList.suggestions } }, "readMore": false });
        this.showSuggestion = true;
        this.store.dispatch(new fromStore.SetHrChatBotListAction(this.chatList));
      }
    }

    // this._chatBotLoadingListener = this.store.select<any>(fromStore.getHrChatBotLoading).subscribe(loading => {

    // });
  }



  ionViewDidLoad() {
    this.getCalendarInfo();
    this.getRole();
    this.loading$ = this.store.select<any>(fromStore.getHrChatBotLoading);
    // this.store.select<any>(fromStore.getHrChatBotMessage).subscribe((msg) => {
    //   if (msg){
    //     this.presentToast(msg);
    //     this.getTimeEntryDetails(this.tsSelectedDateObj, this.getTimesheetDetailsCurrentIndex);
    //   }
    //   this.onTaskDataSLideChange();

    // });
  }

  getLoginStateFromStore() {
    this.data.getData('loginDetails').then((res: any) => {
      if (res && res.details && res.details.userDetails) {
        this.userDetails = res.details.userDetails;
        this._getChatList();
        if (this.getModalData) {
          this._getHrChatBotData({ value: this.getModalData });
          this.getModalData = undefined;
        }
        if (this.bannerData) {
          this._getHrChatBotData({ value: 'Corona Virus Awareness' })
          this.bannerData = undefined;
        }

        // check if your coming from modal popup
        // if(this.getModalData){
        //   this._getHrChatBotData({value:this.getModalData})
        // }else{
        //   this._getChatList()
        // }

      }
    })
  }

  ionViewWillLeave() {
    this.firstTimeEnter = false;
    // this._chatBotLoadingListener.unsubscribe();
    this._hrChatBotListener.unsubscribe();
    this._tts(" ");
    this.store.dispatch(new fromStore.GetHrChatBotClearData())
  }

  _getHrChatBotData(chatBotData: any) {
    //Reset values for new queries
    this.showMoreArrow = false;
    this.showMoreArrowForMyTimesheetList = false;
    this.empContactListResponse = {};
    this.suggestionListForTS = [];
    this.tsSelectedDateObj = null;
    this.indexToShowDot.chatListIndexForDateToUpdate = null;
    this.indexToShowDot.dateIndexToUpdate = null;
    this.showSuggestion = false;
    this._tts("")
    this.showQueryBox = false
    if (this.utilities.isEmptyOrNullOrUndefined(chatBotData.value)) {
      return;
    }
    if (chatBotData.value.toLowerCase() == 'more') {
      this._showClosedData();
    } else {

      // if (this.chatList.length > 2 && this.chatList[this.chatList.length - 2].response) {
      //   if (this.chatList[this.chatList.length - 2].response.responseList.actionName == 'zenTS.getCreateTaskDetails') {
      //     this.chatList[this.chatList.length - 2].response.responseList.enableCT = false;
      //   }
      //   // if (tempChatListItemResponseListItem.actionName == 'zenTS.getCreateTaskDetails') {
      //   //   this.chatList[this.chatList.length - 1].response.responseList.enableCT = true;
      //   // }

      // }

      if (this.utilities.isEmptyOrNullOrUndefined(!chatBotData.clickedChatItem) && chatBotData.value == 'Yes') {
        if (chatBotData.clickedChatItem.actionName == 'salary_discrepency' || chatBotData.clickedChatItem.actionName == 'investment' || chatBotData.clickedChatItem.actionName == 'salaryLetter' || chatBotData.clickedChatItem.actionName == 'visaPolicy') {
          this.queryListenFromFeedback = '';
          this.showQueryBox = true

          if (this.utilities.platformAvailable())
            this.negativeFeedbackMessage = this._startListening()
        } else {
          this.getSuggestionData(chatBotData.value)
        }
      } else {
        this._tts(" ");
        this.getSuggestionData(chatBotData.value)
      }
    }
  }

  getSuggestionData(value) {
    let params = {
      "userQuery": value,
      "sessionId": "",
      "moduleId": Constants.moduleId
    }
    this.isFromPreviousFetchData = false;
    this.chatList = this.chatList.concat({ "from": "me", "query": params.userQuery });
    this.store.dispatch(new fromStore.GetHrChatBotAction("", params));
    // setTimeout(() => {
    //   this.chatList.concat({ "from": "me", "query": params.userQuery });
    // }, 1000);

  }

  chatResponseSuccess(response: any) {
    if (response.pending == false) {
      if (!this.utilities.isEmptyOrNullOrUndefined(response) && !this.utilities.isEmptyOrNullOrUndefined(response.data)) {

        //remove lifespan for ZenTS related queries and pass on it to next api call response 
        let tempData = response.data;
        if (tempData[tempData.length - 1].from == 'bot' && tempData[tempData.length - 1].response.responseList.actionName && (tempData[tempData.length - 1].response.responseList.actionName.split('.')[0] == "zenTS" || tempData[tempData.length - 1].response.responseList.actionName == 'getFillTimesheetDetails')) {
          delete tempData[tempData.length - 1].response.responseList.lifespan;
        }

        //show success messages of timesheet save and submit action
        if (response.message && response.message.userMessage) {
          if (response.message.actionName == "saveTimesheet") {
            this.tsTypes.updateStatus = {
              date: this.tsSelectedDateObj.date,
              status: 'Saved'
            }
            this.onTaskDataSLideChange();
            this.presentToast(response.message.userMessage);
            this.getTimeEntryDetails(this.tsSelectedDateObj, this.getTimesheetDetailsCurrentIndex);
          }
        }


        this.chatList = response.data;

        // if (this.chatList.length > 2) {
        //   this.isFromPreviousFetchData = true;
        // }

        this.inputChatText = ""
        this._ionChangeToggleSendMic(this.inputChatText)
        // fetching last item of the list
        if (this.chatList[this.chatList.length - 1].from == 'bot') {
          let tempChatListItemResponseListItem = this.chatList[this.chatList.length - 1].response.responseList;
          if (!this.utilities.isEmptyOrNullOrUndefined(tempChatListItemResponseListItem.actionId))
            this.currentActionId = tempChatListItemResponseListItem.actionId;
          if (!this.utilities.isEmptyOrNullOrUndefined(tempChatListItemResponseListItem.queryId)) {
            this.currentQueryId = tempChatListItemResponseListItem.queryId
          }
          if (!this.utilities.isEmptyOrNullOrUndefined(tempChatListItemResponseListItem.actionName)) {
            if (tempChatListItemResponseListItem.actionName == 'zenHelp'
              || tempChatListItemResponseListItem.actionName == 'salary_discrepency'
              || tempChatListItemResponseListItem.actionName == 'investment'
              || tempChatListItemResponseListItem.actionName == 'pf_faq'
              || tempChatListItemResponseListItem.actionName == 'pf_transfer'
              || tempChatListItemResponseListItem.actionName == 'salaryLetter'
              || tempChatListItemResponseListItem.actionName == 'visaPolicy'
              || tempChatListItemResponseListItem.actionName == 'updateMyProfile'
              || tempChatListItemResponseListItem.actionName == 'onsiteReturn'
              || tempChatListItemResponseListItem.actionName == 'onsiteTravel'
              || tempChatListItemResponseListItem.actionName == 'getARDetails'
              || tempChatListItemResponseListItem.actionName == 'applyFlexiLeave'
              || tempChatListItemResponseListItem.actionName == 'arHierarchy'
              || tempChatListItemResponseListItem.actionName == 'getSuggestionListFromServer'
              || tempChatListItemResponseListItem.templateId == 4) {



              if (tempChatListItemResponseListItem.actionName == 'getSuggestionListFromServer') {
                this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.chatList[this.chatList.length - 1].response.responseList.suggestionsList
                this.showSuggestion = true;
                if (this.chatList[this.chatList.length - 2].response.responseList.actionName == "ProjectList") {
                  this.chatList[this.chatList.length - 1].response.responseList.suggestions.unshift('Create Task');
                }
              }

              if (tempChatListItemResponseListItem.actionName == 'pf_faq' || tempChatListItemResponseListItem.actionName == 'pf_transfer' || tempChatListItemResponseListItem.actionName == 'onsiteReturn' || tempChatListItemResponseListItem.actionName == 'onsiteTravel' || tempChatListItemResponseListItem.templateId == 4) {
                this.pdfArray = this.chatList[this.chatList.length - 1].response.responseList.restApi.split(",");

              }
            } else if (tempChatListItemResponseListItem.actionName == "pf_faq_yes") {
              this.queryListenFromFeedback = '';
              this.showQueryBox = true
              if (this.utilities.platformAvailable())
                this.negativeFeedbackMessage = this._startListening()
            } else if (tempChatListItemResponseListItem.actionName == "salary_discrepency_mail_response") {
            } else if (tempChatListItemResponseListItem.actionName == 'getHolidayCalendar') {
            } else if (tempChatListItemResponseListItem.actionName == 'getWellnessCalendar') {
            } else if (tempChatListItemResponseListItem.actionName == 'arHierarchy') {
            } else if (tempChatListItemResponseListItem.actionName == 'arLocation') {
            } else if (tempChatListItemResponseListItem.actionName == 'getZensarSiteData') {
              this.getZensarSiteData(tempChatListItemResponseListItem.restApi);
            } else if (tempChatListItemResponseListItem.actionName == 'openNewQuestion' && !this.isFromPreviousFetchData) {
              this.navCtrl.push('PostQuestionPage')
            }

            // } else if (tempChatListItemResponseListItem.actionName == 'getUserBankDetails') {
            //   if (this.tempSuggestions) {
            //     this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.tempSuggestions.split(",")
            //   }
            // }
            else if (tempChatListItemResponseListItem.actionName == 'getUserProfileParamsDetails') {
              this.getUserBankDetails(tempChatListItemResponseListItem.restApi, tempChatListItemResponseListItem.parameters);
            } else if (tempChatListItemResponseListItem.actionName == 'getWeather' && !this.isFromPreviousFetchData) {
              this.utilities.getLocation()
                .then((positionCoords: any) => {

                  this.getWeatherData(positionCoords);
                })
                .catch((error) => {
                  this.utilities.presentAlert('Unable to get the location');

                });
            } else if (tempChatListItemResponseListItem.actionName.split('.')[0] == 'zenTS') {
              this.timesheetRestApi = tempChatListItemResponseListItem.restApi.split(",");
              // if (this.chatList[this.chatList.length - 2].response.responseList.actionName == 'zenTS.getCreateTaskDetails') {
              //   this.chatList[this.chatList.length - 1].response.responseList.enableCT = false;
              // }
              this.getTimesheetDetails(tempChatListItemResponseListItem);
              if (tempChatListItemResponseListItem.actionName != 'zenTS.getCreateTaskDetails') {
                delete tempChatListItemResponseListItem.speech;
              }
              // }
            } else if (tempChatListItemResponseListItem.actionName == 'zenTalent.getUserProfileData' || tempChatListItemResponseListItem.actionName == 'zenTalent.getMyProfile') {
              this.empContactListResponse = tempChatListItemResponseListItem;
              this.getEmployeeContactList(tempChatListItemResponseListItem);
            } else if (tempChatListItemResponseListItem.actionName == "timeEntryDetails") {
              if (this.chatList[this.chatList.length - 2].response.responseList.actionName == "zenTS.getCreateTaskDetails") {
                this.prevQueryID = this.chatList[this.chatList.length - 2].response.responseList.queryId
                this.chatList[this.chatList.length - 1].response.responseList.showTimeEntryDetails = false;
                this.chatList[this.chatList.length - 1].response.responseList.enableCT = true;

              } else {
                this.chatList[this.chatList.length - 1].response.responseList.showTimeEntryDetails = true;
                // this.dataCT = this.chatList[this.chatList.length - 1].response.responseList;
              }

              this.doDisable(tempChatListItemResponseListItem.data.taskAndTimesheetDetails);
              if (tempChatListItemResponseListItem.data.taskAndTimesheetDetails.length == 0 && this.chatList[this.chatList.length - 2].response.responseList.actionName != 'zenTS.getCreateTaskDetails') {
                this.chatList[this.chatList.length - 1].response.responseList.speech = null;
                this.getProjectList(tempChatListItemResponseListItem.queryId);
              }

              this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.timeEntrySuggestion.SuggestionList;
              //  uncomment for task creation 
              if (!this.utilities.isEmptyOrNullOrUndefined(this.chatList[this.chatList.length - 1].response.responseList.suggestions)) {
                // this.chatList[this.chatList.length - 1].response.responseList.suggestions.shift();
                // this.chatList[this.chatList.length - 1].response.responseList.suggestions.unshift('Create Task');
                this.chatList[this.chatList.length - 1].response.responseList.suggestionPhrase = this.timeEntrySuggestion.SuggestionPhrase
              }
            } else if (tempChatListItemResponseListItem.actionName == "getFillTimesheetDetails") {
              this.dateListFromTimeSheet = tempChatListItemResponseListItem.dataList;
              if (tempChatListItemResponseListItem.dataList && tempChatListItemResponseListItem.dataList.length == 1) {
                let date = moment(tempChatListItemResponseListItem.dataList[0].date).format('DD MMM YYYY');
                //  i have un-commented
                this.getTimeEntryDetails(tempChatListItemResponseListItem.dataList[0], this.chatList.length, tempChatListItemResponseListItem.queryId, `Please see below the timesheet details for ${date}`);
              } else if (this.selectedDateForCT.CTforDate) {
                let date = moment(this.selectedDateForCT.CTforDate).format('DD MMM YYYY');
                let dateObj = { date: '' };
                dateObj.date = this.selectedDateForCT.CTforDate
                this.getTimeEntryDetails(dateObj, this.chatList.length, tempChatListItemResponseListItem.queryId, `Please see below the timesheet details for ${date}`);
              }
              this.pendingDates = tempChatListItemResponseListItem.dataList.filter((dateObj) => dateObj.status == 'Pending' || dateObj.status == 'Saved')
            } else if (tempChatListItemResponseListItem.actionName == "submitTimesheet") {
              this.getTimeEntryDetailsToRefreshLocalData(this.tsSelectedDateObj.date);
              this.pendingDates = tempChatListItemResponseListItem.dataList.filter((dateObj) => dateObj.status == 'Pending' || dateObj.status == 'Saved')
              this.tsTypes.updateStatus = {
                date: this.tsSelectedDateObj.date,
                status: 'Submitted'
              }
              this.indexToShowDot.chatListIndexForDateToUpdate = null;
              this.indexToShowDot.dateIndexToUpdate = null;
              this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.timeEntrySuggestion.SuggestionList;
              this.chatList[this.chatList.length - 1].response.responseList.suggestionPhrase = this.timeEntrySuggestion.SuggestionPhrase

            } else if (tempChatListItemResponseListItem.actionName == "ProjectList" && tempChatListItemResponseListItem.data.length > 0) {
              this.projectMigratedData = null;
              let speech = null;

              let list = tempChatListItemResponseListItem.data;
              list.map(item => {
                if (item.isZencoreMigrated == 'YES' &&
                  (this.tsSelectedDateObj.date >= item.zencoreMigratedDate)) {
                  this.projectMigratedData = item;
                }
              });

              if (this.projectMigratedData) {
                speech = `Your task for ${this.projectMigratedData.projectName} are now being managed from ZenCore platform
                effective ${this.projectMigratedData.zencoreMigratedDate}. Please get in touch with your manager to get task assigned in ZenCore.`
                this._getSuggestionListFromServer(`${environment.url}chatbot-zenhelp/getSuggestionData`, {
                  "actionId": 0
                });

              } else {
                speech = `There are no filled timesheets/tasks for the selected date. Click on "Create Task" suggestion below to create task.`;
                this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.chatList[this.chatList.length - 2].response.responseList.suggestions
              }
              this.chatList[this.chatList.length - 1].response.responseList.speech = speech;
            } else if (tempChatListItemResponseListItem.actionName == 'zenTalent.myProfileDetails.update.maritalStatus' || tempChatListItemResponseListItem.actionName == 'zenTalent.myProfileDetails.update.experience') {
              this.chatList[this.chatList.length - 1].response.responseList.updateProfileLink = {
                showLink: true,
                type: 'personal',
                responseData: tempChatListItemResponseListItem
              };
            } else if (tempChatListItemResponseListItem.actionName == "zenTalent.myProfileDetails.update.skills") {
              this.chatList[this.chatList.length - 1].response.responseList.updateProfileLink = {
                showLink: true,
                type: 'skills'
              };
            } else if ((tempChatListItemResponseListItem.actionName == 'maritalStatus' || tempChatListItemResponseListItem.actionName == 'experience') && tempChatListItemResponseListItem.doRedirect) {
              if (tempChatListItemResponseListItem.data && tempChatListItemResponseListItem.data.userProfiledetails && tempChatListItemResponseListItem.data.userProfiledetails.length > 0 && tempChatListItemResponseListItem.data.userProfiledetails[0].key == "Personal") {
                this.gotToEditProfile(tempChatListItemResponseListItem.data.userProfiledetails[0], tempChatListItemResponseListItem.actionName);
              }
            } else if (tempChatListItemResponseListItem.actionName == "getApproveTimesheetDetails") {
              if (tempChatListItemResponseListItem.dataList.length == 0 && tempChatListItemResponseListItem.data && tempChatListItemResponseListItem.data.teamsTimesheetList && tempChatListItemResponseListItem.data.teamsTimesheetList.length > 0) {
                this.chatList.push({
                  from: "bot",
                  response:
                  {
                    responseList:
                    {
                      actionName: "pendingTimesheetList",
                      // speech: "Showing results for your pending timesheet only",
                      queryId: tempChatListItemResponseListItem.queryId,
                      lifespan: tempChatListItemResponseListItem.lifespan,
                      pendingList: tempChatListItemResponseListItem.data.teamsTimesheetList
                    }
                  }
                })
                // this.store.dispatch(new fromStore.SetHrChatBotListAction(this.chatList));
              }
            }


            // called for fist time only
            if (tempChatListItemResponseListItem.actionName != "getSuggestionListFromServer" && tempChatListItemResponseListItem.hasOwnProperty('suggestionsList')) {
              if (tempChatListItemResponseListItem.suggestionsList.length == 0 && tempChatListItemResponseListItem.lifespan == 1) {
                // https://zentalentappdev.zensar.com/chatbot-zenhelp/getSuggestionData
                this._getSuggestionListFromServer(`${environment.url}chatbot-zenhelp/getSuggestionData`, {
                  "actionId": 0
                });
              }
            }

            // suggestion list for all based on actionName
            if (!this.utilities.isEmptyOrNullOrUndefined(tempChatListItemResponseListItem.suggestionsList) && tempChatListItemResponseListItem.suggestionsList.length > 0 && tempChatListItemResponseListItem.actionName != 'getSuggestionListFromServer') {

              this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.chatList[this.chatList.length - 1].response.responseList.suggestionsList.split(",")
              this.chatList[this.chatList.length - 1].response.responseList.suggestionPhrase = this.chatList[this.chatList.length - 1].response.responseList.suggestionPhrase

              this.showSuggestion = true;

            } else if ((tempData[tempData.length - 1].from == 'bot') && (tempChatListItemResponseListItem.actionName == "getUserBankDetails" ||
              tempChatListItemResponseListItem.actionName == "getMyAttendanceDetails" ||
              tempChatListItemResponseListItem.actionName == "getMyComplianceDetails" ||
              tempChatListItemResponseListItem.actionName == "getMyAllocationDetails" ||
              tempChatListItemResponseListItem.actionName == "getFillTimesheetDetails" ||
              tempChatListItemResponseListItem.actionName == "getMyTimesheetDetails" ||
              tempChatListItemResponseListItem.actionName == "getMyProfile" ||
              tempChatListItemResponseListItem.actionName == "getUserProfileData" ||
              (tempChatListItemResponseListItem.actionName == "getApproveTimesheetDetails" && this.utilities.isEmptyOrNullOrUndefined(tempChatListItemResponseListItem.data.teamsTimesheetList)))) {

              this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.chatList[this.chatList.length - 2].response.responseList.suggestionsList.split(",");
              this.chatList[this.chatList.length - 1].response.responseList.suggestionPhrase = this.chatList[this.chatList.length - 2].response.responseList.suggestionPhrase
              this.timeEntrySuggestion.SuggestionPhrase = this.chatList[this.chatList.length - 2].response.responseList.suggestionPhrase
              this.timeEntrySuggestion.SuggestionList = this.chatList[this.chatList.length - 2].response.responseList.suggestionsList.split(",");
              this.showSuggestion = true;
            }
            else if (
              tempChatListItemResponseListItem.actionName == "getApproveTimesheetDetails" && !this.utilities.isEmptyOrNullOrUndefined(tempChatListItemResponseListItem.data.teamsTimesheetList)
              // tempChatListItemResponseListItem.actionName == "submitTimesheet"
            ) {
              this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.chatList[this.chatList.length - 3].response.responseList.suggestionsList.split(",")
              this.chatList[this.chatList.length - 1].response.responseList.suggestionPhrase = this.chatList[this.chatList.length - 3].response.responseList.suggestionPhrase
              this.showSuggestion = true;
            }

          }
          if (tempChatListItemResponseListItem.actionName == "zenTalent.createDAP" || tempChatListItemResponseListItem.actionName == "zenTalent.ijp" || tempChatListItemResponseListItem.actionName == "referral.referYourFriend.yes.bonusPolicy.yes" || tempChatListItemResponseListItem.actionName == "referrals.FAQs" || tempChatListItemResponseListItem.actionName == "referral.createFriendsProfile") {
            this.chatList[this.chatList.length - 1].response.responseList.moveToPage = true;
          }
          // uncomment all for task creation
          if (tempChatListItemResponseListItem.actionName == "getFillTimesheetDetails") {
            if (this.chatList[this.chatList.length - 1].response.responseList.createTaskFlag && this.chatList[this.chatList.length - 1].response.responseList.suggestions[0] != 'Create Task')
              this.chatList[this.chatList.length - 1].response.responseList.suggestions.unshift(this.chatList[this.chatList.length - 1].response.responseList.CreateTaskText);
            //   // console.log(this.chatList[this.chatList.length - 1].response.responseList)
          }
          // if (tempChatListItemResponseListItem.actionName == "ProjectList") {
          //   this.chatList[this.chatList.length - 1].response.responseList.suggestions.unshift('Create Task');
          // }

          if (!this.utilities.isEmptyOrNullOrUndefined(tempChatListItemResponseListItem.speech) && !tempChatListItemResponseListItem.noSpeech) {
            if (this.chatList.length == 2 && !this.getModalData) {
              this._tts(this.chatList[0].response.responseList.speech)
            } else if (!this.isFromPreviousFetchData) {
              this._tts(tempChatListItemResponseListItem.speech)
            }
            this.showKeyboard = false
          }
        }
        this._scrollToBottom()
      } else {
        if (this.firstTimeEnter) {
          this.addSuggestionToChatList()
        } else {
          this.store.dispatch(new fromStore.SetHrChatBotListAction(this.chatList));
        }
      }
    }
  }

  getChatBotSuggestionList(suggestionUrl) {
    this.store.dispatch(new fromStore.GetHrChatBotGetSuggestionsAction(suggestionUrl, {}));

    return new Promise<void>(resolve => {
      this._hrChatBotListener = this.store.select<any>(fromStore.getHrChatBotState).subscribe(response => {
        if (response.pending == false) {
          if (!this.utilities.isEmptyOrNullOrUndefined(response) && !this.utilities.isEmptyOrNullOrUndefined(response.data)) {
            this.chatList = response.data
            this.inputChatText = ""
          }
          resolve();
        }
      }, err => {

      });
    });
  }

  getZensarSiteData(zensarSiteUrl: any) {
    this.store.dispatch(new fromStore.GetHrChatBotZensarSiteDataAction(zensarSiteUrl, {}));

  }

  getUserBankDetails(url: any, params: any) {
    // this.store.dispatch(new fromStore.GetHrChPatBotUserBankDeatilsAction(url, { "profileParam": "bankDetails" }));
    this.store.dispatch(new fromStore.GetHrChatBotUserBankDeatilsAction(url, params));
  }

  getWeatherData(positionCoords: any) {
    let latitude = positionCoords.latitude
    let longitude = positionCoords.longitude
    var appId = Constants.weatherApiKey;
    var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + appId + "&units=metric";
    this.store.dispatch(new fromStore.GetHrChatBotWeatherAction(weatherUrl, {}));
  }

  addSuggestionToChatList() {
    if (this.getModalData || this.bannerData) {
      this.chatList.push({ from: "bot", response: { responseList: { speech: null } } })
      this.chatList.push({ from: "bot", response: { responseList: { actionName: "zenHelp", speech: null, suggestionsList: "Zensar Policies,Holiday Calendar,Know the ARs" } } })
    } else {
      this.chatList.push({ from: "bot", response: { responseList: { speech: "Hi " + this.userDetails.userName.substring(0, this.userDetails.userName.indexOf(" ")) + ',\n' + " How may I help you?" } } });
      this.chatList.push({ from: "bot", response: { responseList: { actionName: "zenHelp", speech: "Type below or check the suggestions below " } } })
      this._getSuggestionListFromServer(`${environment.url}chatbot-zenhelp/getSuggestionData`, {
        "actionId": 0
      });
    }

    this.store.dispatch(new fromStore.SetHrChatBotListAction(this.chatList));
  }

  _sendText() {
    // if (this.chatList.length > 2 && this.chatList[this.chatList.length - 2].response) {
    //   if (this.chatList[this.chatList.length - 2].response.responseList.actionName == 'zenTS.getCreateTaskDetails') {
    //     this.chatList[this.chatList.length - 1].response.responseList.enableCT = false;
    //   }
    // if (tempChatListItemResponseListItem.actionName == 'zenTS.getCreateTaskDetails') {
    //   this.chatList[this.chatList.length - 1].response.responseList.enableCT = true;
    // }

    // }
    this._getHrChatBotData({ value: this.inputChatText });
  }

  _submitFeedback(flag: string, chatListItem: any, myevent: any) {
    this._tts(" ");
    let queryId
    if (!chatListItem.response.responseList.queryId) {
      queryId = this.currentQueryId
    } else {
      queryId = chatListItem.response.responseList.queryId
    }
    if (flag == 'Positive') {
      let params = {
        "userId": this.userDetails.userId,
        "queryId": queryId,
        "feedbackValue": 1,
        "feedbackComment": "",
        "actionId": this.currentActionId
      }

      this.store.dispatch(new fromStore.GetHrChatBotSubmitFeedbackAction("", params));
    } else if (flag == 'Negative') {
      //
      // 

      let popover = this.popoverCtrl.create('PopoverPage', { 'type': 'chatBot' })
      popover.present({ ev: myevent });
      popover.onDidDismiss((data) => {
        if (data == 'askquestion') {
          chatListItem.negativeFeedback = false;
          // let queryId = chatListItem.response.responseList.queryId;
          this.screenshot.save('png', 80, queryId.toString()).then((response) => {
            if (response) {
              // ////console.log(response)
              this.navCtrl.push('PostQuestionPage', {
                "screenShotPath": {
                  queryId: queryId,
                  userId: this.userDetails.userId,
                  screenshot: response
                }
              })
            }
          }, error => {
            // ////console.log(error)
          })
        } else if (data == 'feedback') {
          chatListItem.negativeFeedback = !chatListItem.negativeFeedback;
        }
      })
    }

    this._scrollToBottom()
  }


  sendNegativeFeedback(chatListItem: any, negativeFeedbackMessage: any) {


    if (negativeFeedbackMessage) {
      if (chatListItem.response.responseList.actionName == 'investment' || chatListItem.response.responseList.actionName == 'salary_discrepency' || chatListItem.response.responseList.actionName == 'pf_faq_yes' || chatListItem.response.responseList.actionName == 'pf_faq' || chatListItem.response.responseList.actionName == 'visaPolicy' || chatListItem.response.responseList.actionName == 'salaryLetter') {
        let params = {
          "actionName": chatListItem.response.responseList.actionName,
          "body": negativeFeedbackMessage,
          "actionId": this.currentActionId
        }
        var url = chatListItem.response.responseList.restApi;
        this.store.dispatch(new fromStore.GetPayrollQueryChatBotZensarDataAction(url, params));
        this.negativeFeedbackMessage = '';
      } else {
        let queryId
        if (!chatListItem.response.responseList.queryId) {
          queryId = this.currentQueryId
        } else {
          queryId = chatListItem.response.responseList.queryId
        }
        let params = {
          "userId": this.userDetails.userId,
          "queryId": queryId,
          "feedbackValue": -1,
          "feedbackComment": negativeFeedbackMessage,
          "actionId": this.currentActionId
        }
        this.store.dispatch(new fromStore.GetHrChatBotSubmitFeedbackAction("", params));
        this.negativeFeedbackMessage = '';
      }
    }
  }

  _sendPayrollFeedback(chatListItem: any, negativeFeedbackMessage: any) {
    let params = {
      "userId": this.userDetails.userId,
      "queryId": chatListItem.response.responseList.queryId,
      "feedbackValue": -1,
      "feedbackComment": negativeFeedbackMessage
    }

    this.store.dispatch(new fromStore.GetHrChatBotSubmitFeedbackAction("", params));
    this.negativeFeedbackMessage = '';
  }

  _ionChangeToggleSendMic(value: string) {
    this.inputChatText = value;
    if (!this.utilities.isEmptyOrNullOrUndefined(this.inputChatText)) {
      this.showSend = true;
    } else {
      this.showSend = false;
    }
  }

  _startListening() {
    this.listening = true
    this.speechRecognitionUtility.startListening().subscribe((value: string) => {
      if (this.utilities.platformAvailable) {
        let tempChatListItemResponseListItem = this.chatList[this.chatList.length - 1].response.responseList;
        // let actionId = tempChatListItemResponseListItem.actionId-----> previous code
        let actionName = tempChatListItemResponseListItem.actionName  //---------->New changes to action name
        if ((actionName == 'investment' || actionName == 'salary_discrepency' || actionName == 'pf_faq_yes' || actionName == 'pf_faq') && this.showQueryBox) {
          this.queryListenFromFeedback = value;
        } else {
          this._getHrChatBotData({ value: value });
        }
      }
      this.zone.run(() => {
        this.listening = false
      })
    }, (error) => {
      this.zone.run(() => {
        this.listening = false
      })

    })
  }

  _closeKeyboard() {
    this.showKeyboard = false
    this._startListening();
  }

  _openKeyboard() {
    this.suggestionListForTS = [];
    this.showKeyboard = true
  }

  _muteSpeech() {
    this._tts(" ");
    this.mute = !this.mute;
  }

  _tts(text) {
    if (!this.mute) {
      this.speechRecognitionUtility.textToSpeech(text);
    }
  }

  _addToList(questionAsked: string, speech: string, from: string) {
    this.chatList.push({ asked: true, text: questionAsked, from: from })
    this.chatList.push({ asked: false, text: speech, from: from })
  }

  _openChatInfo() {
    // this.modalCtrl.create(ChatInfoModel, {}, { cssClass: 'inset-modal-chat-info' }).present();
  }

  _toggleReadMore(item: any, index) {
    item.readMore = !item.readMore;
    this.tooglePipe = !this.tooglePipe;
    this.selectedIndex = index;
  }

  _scrollToBottom() {
    setTimeout(() => {
      if (!this.utilities.isEmptyOrNullOrUndefined(this.content))
        this.content.scrollToBottom();
    }, 100);
  }
  _cancel() {
    this.showQueryBox = false
  }

  _downloadPDF(url) {
    if (this.platform.is('android')) {
      if (url) {
        let alert = this.utilities.presentConfirmation('Do you want to download this file ?');
        alert.then(() => {
          this.download.downloadDocument(url, true)
        }).catch(err => err);
      }
    } else {
      this.utilities.openWithSystemBrowser(url);
    }

  }

  _showClosedData() {
    // removing for now as last time issue to fix hahaha
    this.selectedDateForCT.CTforDate = "";
    this.selectedDateForCT.dateSelected.date = "";
    const modal = this.modalCtrl.create(ChatBotModel,
      {
        'title': 'ChatBot Info',
      }
      /* {
        cssClass: 'inset-modal-close-positions'
      } */);
    modal.present();
    modal.onDidDismiss((query) => {
      if (query)
        this._getHrChatBotData({ value: query });
      else {
        this._getSuggestionListFromServer(`${environment.url}chatbot-zenhelp/getSuggestionData`, {
          "actionId": 0
        });
      }

    })
  }


  // urlify(text, tooglePipe, limit, Selectedindex, currentIndex) {
  //   if (text != undefined) {
  //     //;
  //    // var newText = text.replace(/\n/g, "<br/>");
  //     //
  //     var urlRegex = /(https?:\/\/[^\s]+)/g;
  //     return text.replace(urlRegex, function (url) {
  //       // ;
  //       return '<a href="' + url + '">' + url + '</a>';
  //     })
  //     //return this.getData(abc,tooglePipe,limit,Selectedindex,currentIndex);
  //   }

  //   // or alternatively
  //   // return text.replace(urlRegex, '<a href="$1">$1</a>')
  // }

  getTimesheetDetails(response: any) {
    console.log(this.dateListFromTimeSheet);
    console.log(this.selectedDateForCT)
    let params: any;
    let actionName = response.actionName.split(".");
    let url: any;
    let extraParams = {
      // "actionId": response.actionId,
      "actionName": actionName[1],
      "lifespan": '1',
      "queryId": response.queryId
    }

    if (response.actionName == "zenTS.getCreateTaskDetails") {
      url = this.timesheetRestApi[1];
      if (this.selectedDateForCT.dateSelected.date == '') {
        if (this.chatList[this.chatList.length - 3].response.responseList.dataList && this.chatList[this.chatList.length - 3].response.responseList.dataList[0]) {
          if (this.chatList[this.chatList.length - 3].response.responseList.dataList[0].date) {
            let date = JSON.stringify(this.chatList[this.chatList.length - 3].response.responseList.dataList[0].date);
            this.selectedDateForCT.dateSelected.date = JSON.parse(date);
          }

        } else {
          let date = new Date();
          this.selectedDateForCT.dateSelected.date = date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + (date.getDate())).slice(-2);
        }
      }
      this.sendCTDate = this.selectedDateForCT.dateSelected.date
      params = {
        "version": environment.version,
        "selectedDate": this.selectedDateForCT.dateSelected.date
      }
      extraParams.actionName = 'timeEntryDetails';

    } else {
      url = this.timesheetRestApi[0];
      params = {
        "actionName": actionName[1],
        "parameters": response.parameters,
      }
    }

    this.store.dispatch(new fromStore.GetTimesheetDeatilsAction(url, params, extraParams));
    // for now diapact is saperate but when api comes in service make it common
    //to clear the selecetd date
    this.selectedDateForCT.dateSelected.date = '';
    // this.dateListFromTimeSheet.length = 0;
  }

  expand() {
    this.expandDiv = !this.expandDiv;
  }

  /**
   *  get not filled Dates and open Calendar Model
   */
  getMonthwiseCompliancePercentage(month: string, monthseq) {

    this.utilities.updateLoader(true);

    let url = 'getMonthwiseCompliancePercentage';
    let data = { "month": month }

    this.httpProvider.http.zentsCommonService({ url, data, dashboard: true }).subscribe((res: any) => {
      this.utilities.updateLoader(false);
      if (res && res.data) {
        let percentage = res.data.percentage;
        let details = res.data.dateDetails;
        let data = {
          pendingDates: details.notFilledDates,
          rejectedDates: details.rejectedDates,
          percentage: percentage
        }
        this.openModal(monthseq, data);
      }
    }, (err) => {
      this.utilities.updateLoader(false);
    })
  }

  openModal(monthseq, dataObj) {
    let modal = this.modalCtrl.create(CalenderModel, {
      dataParams: {
        rejectedDates: dataObj.rejectedDates,
        pendingDates: dataObj.pendingDates,
        percentage: dataObj.percentage,
        key: monthseq,
        type: 'chat-bot',
      }
    }, {
      cssClass: 'calendermodel',
    });

    modal.present();
    modal.onDidDismiss((res) => {
    })
  }

  getTimeEntryDetails(dateObj, index, queryId = null, speech = '') {
    this.suggestionListForTS = [];  //hide on date change;
    let selectedDate = JSON.stringify(dateObj)
    this.selectedDateForCT.dateSelected = JSON.parse(selectedDate);
    let chatListLength = this.chatList[this.chatList.length - 1].response.responseList.actionName == 'timeEntryDetails' ? (this.chatList.length - 1) : this.chatList.length;
    if (index == chatListLength) {
      this.tsSelectedDateObj = dateObj;
      this.getTimesheetDetailsCurrentIndex = index;
      this.tsTypes.selData = null;
      this.tsFordate = moment(this.selectedDateForCT.dateSelected.date).format('D MMM YYYY');

      const url = this.timesheetRestApi[1]; //Get Timeentry Details Url
      const params = {
        "version": environment.version,
        "selectedDate": dateObj.date
      }
      const extraParams = {
        "actionName": 'timeEntryDetails',
        "queryId": queryId,
        // speech ? speech : 
        "speech": `Below is the timesheet details :`,
        "indexToUpdate": index
      }
      this.store.dispatch(new fromStore.GetTimesheetDeatilsAction(url, params, extraParams));
    }
  }


  getEmployeeContactList(response) {
    let url = response.restApi.split(",")[0];
    let params = {
      "start": this.indexForEmpContactList.start,
      "end": this.indexForEmpContactList.end,
      "search": response.actionName == 'zenTalent.getMyProfile' ? this.userDetails.userId : response.parameters.ZenVerse_First_Name + response.parameters.ZenVerse_User_Name
    }
    let extraParams = {
      "actionName": response.actionName.split('.')[1],
      "lifespan": '1',
      "queryId": response.queryId
    }

    this.store.dispatch(new fromStore.GetEmployeeContactListAction(url, params, extraParams));
  }

  goToProfile(data: any) {
    new Promise((resolve, reject) => {
      this.navCtrl.push('NewProfilePage', {
        'userId': parseInt(data.employeeId),
        'profileType': 'zencontacts',
        resolve: resolve
      });

    }).then(() => {
      this.store.dispatch(new fromStore.SetHrChatBotListAction(this.chatList));
    })

  }

  onlastSlideUpdateEmpContactList(dataList) {
    this.showMoreArrow = dataList.length == 7 ? true : false;
  }

  onlastSlideUpdateMyTimesheetList(dataList) {
    this.showMoreArrowForMyTimesheetList = dataList.length > 5 ? true : false;
  }

  // onScrollUpdateEmpContactList(event: Event, dataList) {
  //   if ((event.target as HTMLElement).scrollWidth - (event.target as HTMLElement).clientWidth == (event.target as HTMLElement).scrollLeft) {
  //     (event.target as HTMLElement).scrollIntoView({ behavior: 'smooth' });
  //     this.showMoreArrow = dataList.length == 7 ? true : false;
  //   }
  // }

  // onScrollUpdateMyTimesheetList(event: Event, dataList) {
  //   if ((event.target as HTMLElement).scrollWidth - (event.target as HTMLElement).clientWidth == (event.target as HTMLElement).scrollLeft) {
  //     (event.target as HTMLElement).scrollIntoView({ behavior: 'smooth' });
  //     this.showMoreArrowForMyTimesheetList = dataList.length > 5 ? true : false;
  //   }
  // }


  openEmpContactListModal() {
    let reqParams = {
      "start": 0,
      "end": 50,
      "search": this.empContactListResponse.actionName == 'zenTalent.getMyProfile' ? this.userDetails.userId : this.empContactListResponse.parameters.ZenVerse_First_Name + this.empContactListResponse.parameters.ZenVerse_User_Name
    }

    // let modal = this.modalCtrl.create(EmpContactListModelComponent, {
    //   reqParams
    // }, {
    //     cssClass: 'empContactListModel',
    //   });

    // modal.present();
    // modal.onDidDismiss((res) => {
    //   if(res){
    //     this.goToProfile(res);
    //   }
    // })

    new Promise((resolve, reject) => {
      this.navCtrl.push('UserProfileListPage', {
        reqParams,
        resolve: resolve
      });
    }).then(() => {
      if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "getUserProfileData") {
        this.chatList[this.chatList.length - 1].response.responseList.noSpeech = true;
      }
      this.store.dispatch(new fromStore.SetHrChatBotListAction(this.chatList));
    })

  }

  canFillZeroHoursFlag() {
    if (this.calendarInfo.AssociatesBU) {
      return this.calendarInfo.PayrollToBeFilledZeroHours.includes(this.calendarInfo.AssociatesBU);
    }
    // return false;
  }

  /**
  * Method to Perform Save Action
  * @param obj : It contains the edited data
  * @param taskData : Task object
  * @param taskAndTimesheetDetails : Task and timesheet details list 
  */
  editAndSaveTimesheet(obj: any, taskData: any, taskAndTimesheetDetails: Array<any>, parentIndex) {

    if (parentIndex == (this.chatList.length - 1)) {
      this.getTimesheetDetailsCurrentIndex = parentIndex;

      //reset timesheet if submitted timesheet edited to save
      let taskIds = this.getResetTaskIds(taskAndTimesheetDetails);

      //update required fields after edit
      taskData.selectedDate = this.tsSelectedDateObj.date;
      taskData.totalEfforts = this.utilities.convertTime(obj.efforts, 1);
      taskData.nonbillableEffort = this.utilities.convertTime(obj.efforts, 1);;
      taskData.billableEffort = '0.00';
      if (obj.comments) {
        taskData.comments = obj.comments;
      }
      if (obj.billability) {
        taskData.billablityFlag = obj.billability;
        taskData.billabilityFlag = obj.billability;
      } else if (obj.defaultBillability) {             //default value set if user doesn't select billability
        taskData.billablityFlag = obj.defaultBillability;
        taskData.billabilityFlag = obj.defaultBillability;
      }
      if (obj.milestoneName) {
        taskData.milestoneName = obj.milestoneName;
      }
      if (obj.bapPaymentScheduleKey) {
        taskData.bapPaymentScheduleKey = obj.bapPaymentScheduleKey;
      }
      if (taskIds && taskIds.length > 0) {
        taskData.resetTaskIds = taskIds;
      }

      const url = this.timesheetRestApi[2]; //Save Timesheet Url
      const params = taskData;
      let extraParams = {
        "actionName": "saveTimesheet"
        // "lifespan": '1',
        // "queryId": response.queryId
      }
      this.store.dispatch(new fromStore.GetTimesheetDeatilsAction(url, params, extraParams));

    }
  }



  /**
   * Return all task id's except fixed holiday
   * @param timesheetList : Timesheet details list
   */
  getResetTaskIds(timesheetList: Array<any>) {
    let taskIds = [];
    if (timesheetList.length > 0) {
      timesheetList.map((timesheet: any) => {
        if (timesheet && timesheet.taskList.length > 0) {
          timesheet.taskList.map((task: any) => {
            if (task.approvalStatus == 2) {
              // if (task.taskName !== 'FIXED HOLIDAY') {
              taskIds.push(task.taskId);
              // }
            }
          })
        }
      })
    }
    if (taskIds.length > 0) {
      return taskIds;
    }
  }

  refreshTimesheet(index) {
    this.getTimeEntryDetails(this.tsSelectedDateObj, index);
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      cssClass: 'zenoToastMsg',
      showCloseButton: true,
      closeButtonText: "Ok"
    });

    toast.onDidDismiss(() => { });

    toast.present();
  }

  setSuggestionList(data, chatListIndex) {
    this.suggestionListForTS = [];
    if (data.dataList && chatListIndex == (this.chatList.length - 1)) {
      this.suggestionListForTS = data.dataList;
      this.selValue = data.selValue;
      this.tsTypes.suggestionType = data.type;
      this.tsTypes.taskId = data.taskId;
    }
  }

  setSuggestion(data) {
    let dataObj = {
      data,
      taskId: this.tsTypes.taskId,
      s_type: this.tsTypes.suggestionType
    }
    this.tsTypes.selData = dataObj;
    this.suggestionListForTS = [];
  }

  setIndexTOUpdate(index) {
    if (index.chatListIndexToUpdate == (this.chatList.length - 1)) {
      if (JSON.stringify(this.indexToToggleForm) === JSON.stringify(index)) {
        this.onTaskDataSLideChange();
      } else {
        this.indexToToggleForm.chatListIndexToUpdate = index.chatListIndexToUpdate;
        this.indexToToggleForm.parentIndexToUpdate = index.parentIndexToUpdate;
        this.indexToToggleForm.childIndexToUpdate = index.childIndexToUpdate;
        this._scrollToBottom();
      }
    }
  }

  onTaskDataSLideChange() {
    this.indexToToggleForm.chatListIndexToUpdate = null;
    this.indexToToggleForm.parentIndexToUpdate = null;
    this.indexToToggleForm.childIndexToUpdate = null;
    this.suggestionListForTS = [];  //empty suggestion list if not selected any suggestion and closed the form
  }

  doDisable(taskAndTimesheetDetails) {
    let totalEfforts = {
      hour: 0,
      minute: 0
    }

    //disable submit if there are no saved timesheet
    let list: Array<any> = [];
    if (taskAndTimesheetDetails && taskAndTimesheetDetails.length > 0) {
      taskAndTimesheetDetails.map((timesheet: any) => {
        if (timesheet.taskList.length > 0) {
          timesheet.taskList.map((task: any) => {
            if (task.approvalStatus == '-1' || task.approvalStatus == '3') {
              list.push(task);
            }
            //calculate total efforts after every action and display on UI
            let efforts = this.getHourAndMinutes(this.utilities.convertTime(task.totalEfforts, 2));
            totalEfforts.hour += efforts.hour;
            totalEfforts.minute += efforts.minute;

          })
        }
      })
    }

    //set total efforts value in chat-list
    this.chatList[this.chatList.length - 1].response.responseList.totalCalculatedEfforts = totalEfforts;

    this.tsFlags.disableSubmit = list.length > 0 ? false : true;
  }

  getHourAndMinutes(efforts) {
    let effortsArray = efforts.split(':');
    let hour = parseInt(effortsArray[0]);
    let minute = parseInt(effortsArray[1]);
    let data = {
      hour,
      minute
    }
    return data;
  }

  //Confirm submit 
  showSubmitConfirmAlert(taskAndTimesheetDetails: Array<any>, queryId, chatListIndex) {
    if (chatListIndex == (this.chatList.length - 1)) {
      let alert = this.utilities.presentConfirmation('Are you sure you want to submit this timesheet ?');
      alert.then(() => {
        this.suggestionListForTS = [];  //empty suggestion list if not selected any suggestion and clicked on submit button
        this.submitTimesheet(taskAndTimesheetDetails, queryId);
      });
    }
  }

  /**
   * 
   * Method to Perform Submit Action
   */
  submitTimesheet(taskAndTimesheetDetails: Array<any>, queryId) {
    let rejectedTimesheetFlag: boolean = false;
    let rejectedTaskName: string = null;

    let sortedTimesheetList: Array<any> = [];
    if (taskAndTimesheetDetails && taskAndTimesheetDetails.length > 0) {
      taskAndTimesheetDetails.map(item => {
        if (item.taskList.length > 0) {
          item.taskList.map(task => {
            if (task.approvalStatus !== '0') {
              //comments mandatory while submitting rejected timesheet
              if (task.approvalStatus == '3' && task.tsRejected && !task.comments && !rejectedTimesheetFlag) {
                rejectedTimesheetFlag = true;
                rejectedTaskName = task.taskName;
              }
              sortedTimesheetList.push(task);
            }
          })
        }
      })
    }

    if (sortedTimesheetList.length > 0 && !rejectedTimesheetFlag) {

      const url = this.timesheetRestApi[3];   //submit timesheet url
      const params: any = {
        "versions": version,
        "selectedDate": this.tsSelectedDateObj.date,
        "timesheetList": sortedTimesheetList
      }

      if (!queryId) {
        queryId = this.prevQueryID
      }

      let extraParams = {
        "actionName": "submitTimesheet",
        "lifespan": '1',
        "queryId": queryId,
        "pendingDates": this.pendingDates,
        "dateObjForSubmission": this.tsSelectedDateObj
      }
      this.selectedDateForCT.dateSelected.date = '';
      this.store.dispatch(new fromStore.GetTimesheetDeatilsAction(url, params, extraParams));
    }
    else if (rejectedTimesheetFlag) {
      this.utilities.presentAlert('Please add remarks for rejected timesheets');
    }

  }

  getProjectList(queryId) {
    let url = this.timesheetRestApi[4];
    console.log(this.tsSelectedDateObj)
    const params = {
      "currentDate": this.tsSelectedDateObj.date
    };
    let extraParams = {
      "actionName": "ProjectList",
      "lifespan": '1',
      "queryId": queryId
    }
    this.store.dispatch(new fromStore.GetTimesheetDeatilsAction(url, params, extraParams));
  }

  setIndexTOUpdateSelDate(data, chatlistIndex) {
    let chatListLength = this.chatList[this.chatList.length - 1].response.responseList.actionName == 'timeEntryDetails' ? (this.chatList.length - 1) : this.chatList.length;
    if (chatlistIndex == chatListLength) {
      this.indexToShowDot.chatListIndexForDateToUpdate = data.chatListIndexForDateToUpdate;
      this.indexToShowDot.dateIndexToUpdate = data.dateIndexToUpdate;
    }
  }

  getApproverStatusBoxType(status: any) {
    // -1 - saved
    // 1 - approved
    // 2 - submited
    // 3 - rejected
    return {
      'statustype-box-saved': status == -1 ? true : false,
      'statustype-box-approved': status == 1 ? true : false,
      'statustype-box-submited': status == 2 ? true : false,
      'statustype-box-rejected': status == 3 ? true : false,
    }
  }

  getTimesheetTypeIcon(status: any) {
    // -1 - saved
    // 1 - approved
    // 2 - submited
    // 3 - rejected
    switch (status) {
      case '-1': return 'assets/zents-imgs/ts-saved-icon.svg';
      case '1': return 'assets/zents-imgs/ts-approved-icon.svg';
      case '2': return 'assets/zents-imgs/ts-submitted-icon.svg';
      case '3': return 'assets/zents-imgs/ts-rejected-icon.svg';
      default: return 'assets/zents-imgs/ts-saved-icon.svg';
    }

  }

  goToMyTimesheetsPage(dataList) {
    new Promise((resolve, reject) => {
      this.navCtrl.push('MyTimesheetsPage', {
        type: 'chat-bot',
        dataList,
        resolve: resolve
      })
    }).then(() => {
      if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "getMyTimesheetDetails") {
        this.chatList[this.chatList.length - 1].response.responseList.noSpeech = true;
      }
      this.store.dispatch(new fromStore.SetHrChatBotListAction(this.chatList));
    })
  }

  updateProfileDetails(responseList) {
    let actionType = responseList.actionName.split('.');
    let url = responseList.restApi;
    if (this.utilities.platformAvailable()) {
      this.appversion.getVersionNumber().then(version => {
        let params = {
          'userId': this.userDetails.userId,
          'type': 'userProfile', //contacts, interaction  
          'role': this.role,
          'versionNo': version
        }
        let extraParams = {
          "actionName": actionType[3],
          "lifespan": responseList.lifespan,
          "queryId": responseList.queryId
        }
        this.store.dispatch(new fromStore.GetAssociateDetailsAction(url, params, extraParams));
      })
    } else {
      let params = {
        'userId': this.userDetails.userId,
        'type': 'userProfile', //contacts, interaction  
        'role': this.role,
        'versionNo': Constants.new_version
      }
      let extraParams = {
        "actionName": actionType[3],
        "lifespan": responseList.lifespan,
        "queryId": responseList.queryId
      }
      this.store.dispatch(new fromStore.GetAssociateDetailsAction(url, params, extraParams));
    }

  }

  getRole() {
    this._roleListener = this.store.select<any>(fromStore.getRole).subscribe((role) => {
      this.role = role;
    });
  }

  getTimeEntryDetailsToRefreshLocalData(selDate) {
    const url = 'timeEntryDetails';
    const data = {
      "version": version,
      "selectedDate": selDate
    }
    this.httpProvider.http.zentsCommonService({ url, data, timeentry: true }).subscribe((res: any) => {

      if (res && res.data) {
        let data = res.data;
        if (this.chatList[this.chatList.length - 2].response.responseList.actionName == "timeEntryDetails") {
          this.chatList[this.chatList.length - 2].response.responseList.data = data;
          this.chatList[this.chatList.length - 2].response.responseList.dataList = data.taskAndTimesheetDetails;
        }
      }
    }, (err) => { })
  }

  getCalendarInfo() {
    const url = 'calenderInfo';
    const data = {
      "version": version
    }
    this.httpProvider.http.zentsCommonService({ url, data, timeentry: true }).subscribe((res: any) => {
      if (res && res.data)
        this.calendarInfo = res.data;
    }, (err) => { })
  }

  gotToEditProfile(value: any, actionName) {
    new Promise((resolve, reject) => {
      let experienceData: any;
      value.value.filter(item => {
        if (item.type == 'experience') {
          experienceData = item;
        }

      })
      let selectedfield = {
        'section': 'personal',
        'formMessage': value.hasRequestedShowMsg,
        'isAvailableForFinalSubmit': value.hasRequested,
        'isComingFromProfile': true,
        'experienceData': experienceData
      }
      this.navCtrl.push('ObAddDetailsPage', {
        'selectedField': selectedfield,
        'highlightField': actionName,
        resolve: resolve
      });
    })
      .then(() => {
        if ((this.chatList[this.chatList.length - 1].response.responseList.actionName == 'maritalStatus' || this.chatList[this.chatList.length - 1].response.responseList.actionName == 'experience') && this.chatList[this.chatList.length - 1].response.responseList.doRedirect) {
          this.chatList[this.chatList.length - 1].response.responseList.doRedirect = false;
        }
        this.store.dispatch(new fromStore.SetHrChatBotListAction(this.chatList));
      })

  }

  // Directly go to skills tab of userprofile page 
  updateSkillsFromProfile() {
    new Promise((resolve, reject) => {
      this.navCtrl.push('NewProfilePage', {
        'userId': this.userDetails.userId,
        'profileType': 'userProfile',
        'fromZeno': true,
        resolve: resolve
      });

    }).then(() => {
      if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "zenTalent.myProfileDetails.update.skills") {
        this.chatList[this.chatList.length - 1].response.responseList.noSpeech = true;
      }
      this.store.dispatch(new fromStore.SetHrChatBotListAction(this.chatList));
    })
  }

  updateProfile(obj, index) {
    if (obj.type == 'personal') {
      if (index == this.chatList.length - 1 || index == this.chatList.length - 2)
        this.updateProfileDetails(obj.responseData);
    } else if (obj.type == 'skills') {
      if (index == this.chatList.length - 1)
        this.updateSkillsFromProfile();
    }
  }

  getPendingTimesheetList(response, data, queryId, parentIndex) {

    if (parentIndex == this.chatList.length - 1 || parentIndex == this.chatList.length - 3) {

      let projectName = response == 'all' ? 'All Projects' : response.projectName;
      this.store.dispatch(new fromStore.SetHrChatBotListAction({ "from": "me", "query": projectName, "actionName": "pendingTimesheetList" }));

      let url = this.timesheetRestApi[1];

      let params = {
        "projectId": response == 'all' ? response : response.projectId,
        "startDate": data.startDate,
        "endDate": data.endDate,
        "category": "ALL"   //no billability selection, default ALL
      }

      let extraParams = {
        "actionName": 'pendingTimesheetList',
        "lifespan": '1',
        "queryId": queryId,
        "speech": "Showing results for your pending timesheet only"
      }

      this.store.dispatch(new fromStore.GetTimesheetDeatilsAction(url, params, extraParams));
    }
  }

  openPendingTimesheetListModal(list, parentIndex) {
    if (parentIndex == this.chatList.length - 1) {
      let pendingListModal = this.modalCtrl.create(PendingTimesheetListModalComponent, {
        dataList: list,
        selectedList: this.chatList[this.chatList.length - 1].response.responseList.selectedPendingTimesheetList ? this.chatList[this.chatList.length - 1].response.responseList.selectedPendingTimesheetList : []
      }, {
        cssClass: 'pendingTimesheetListModal',
      });

      pendingListModal.present();
      pendingListModal.onDidDismiss((res) => {
        // ////console.log('res: ', res);
        if (res && res.length > 0) {
          this.chatList[this.chatList.length - 1].response.responseList.selectedPendingTimesheetList = res;
        }
      })
    }
  }

  approveAllPendingTimesheets(responseList, parentIndex) {
    if (parentIndex == this.chatList.length - 1) {
      let showApproveText = responseList.selectedPendingTimesheetList && responseList.selectedPendingTimesheetList.length > 0 && responseList.selectedPendingTimesheetList.length !== responseList.pendingList.length ? "Approve Selected" : "Approve All";
      this.store.dispatch(new fromStore.SetHrChatBotListAction({ "from": "me", "query": showApproveText }));

      let url = this.timesheetRestApi[2];
      const params = {
        "approvalStatus": "1", // 1- Approved , 2 - pending , 3 - Rejected 
        "comments": "",
        "timesheetList": responseList.selectedPendingTimesheetList ? responseList.selectedPendingTimesheetList : responseList.pendingList
      }

      let extraParams = {
        "actionName": 'approveAllTimesheets',
        "lifespan": responseList.lifespan,
        "queryId": responseList.queryId,
        "speech": "Timesheet approved successfully"
      }

      this.store.dispatch(new fromStore.GetTimesheetDeatilsAction(url, params, extraParams));
    }
  }

  openFAQModal(faqData) {
    let faqModal = this.modalCtrl.create(FaqModalComponent, { faqData }, {
      cssClass: 'faq-modal'
    });

    faqModal.present();
    faqModal.onDidDismiss((res) => {
      // ////console.log('res: ', res);
    })
  }

  replacePhoneNumber(str, actionName) {
    // /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
    // /\D/g
    if (actionName == 'getARDetails') {
      let p_num = str.match(/(?:(?:\+?([1-9]|[0-9][0-9]|[0-9][0-9][0-9])\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([0-9][1-9]|[0-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/g, "");
      let newStr = str.replace(p_num, "<a href='tel:" + p_num + "'>" + p_num + "</a>");
      return newStr;
    } else {
      return str;
    }
  }

  _getSuggestionListFromServer(url: string, params: object) {
    this.store.dispatch(new fromStore.GetSuggestionListFromServerAction(url, params));
  }


  // _getTimeEntryCreateTaskDetails(response: any) {
  //   console.log(response)
  //   // dateObj, index, queryId = null, speech = ''
  //   this.suggestionListForTS = [];  //hide on date change
  //   // let chatListLength = this.chatList[this.chatList.length - 1].response.responseList.actionName == 'timeEntryDetails' ? (this.chatList.length - 1) : this.chatList.length;
  //   // if (index == chatListLength) {
  //   //   this.tsSelectedDateObj = dateObj;
  //   //   this.getTimesheetDetailsCurrentIndex = index;
  //   //   this.tsTypes.selData = null;
  //   //   let date = moment(dateObj.date).format('D MMM YYYY');


  //   const url = 'https://zentalentappdev.zensar.com/timeentry/v1/timeEntryDetails'; //Get Timeentry Details Url
  //   const params = {
  //     "version": environment.version,
  //     "selectedDate": this.dateListFromTimeSheet[0].date
  //   }
  //   const extraParams = {
  //     "actionName": 'zenTS.getCreateTaskDetails',
  //     "queryId": response.queryId,
  //     "speech": response.speech ? response.speech : "Below is the task creation details :",
  //     // "indexToUpdate": index
  //   }
  //   this.store.dispatch(new fromStore.GetTimesheetDeatilsAction(url, params, extraParams));
  //   // }
  // }

  // // _getProjectList(queryId) {
  // //   let url = this.timesheetRestApi[4];
  // //   console.log(this.tsSelectedDateObj)
  // //   const params = {
  // //     "currentDate": this.tsSelectedDateObj.date
  // //   };
  // //   let extraParams = {
  // //     "actionName": "ProjectList",
  // //     "lifespan": '1',
  // //     "queryId": queryId
  // //   }
  // //   this.store.dispatch(new fromStore.GetTimesheetDeatilsAction(url, params, extraParams));
  // // }

  _moveToPage(pageName: string) {
    let moveToPageData: any = {
    }
    // let moveTo: string;
    // let actionName: string;
    // let params
    if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "zenTalent.ijp") {
      moveToPageData.moveTo = 'InternalJobPostingPage';
      moveToPageData.actionName = 'zenTalent.ijp';
      moveToPageData.paramsFromChatBot = {
        highlightField: true,
        actionName: 'zenTalent.ijp'
      }
    } else if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "zenTalent.createDAP") {
      moveToPageData.moveTo = 'ZenLearnDashboardPage';
      moveToPageData.actionName = 'zenTalent.createDAP';
      moveToPageData.paramsFromChatBot = {
        highlightField: true,
        actionName: 'zenTalent.createDAP'
      }
    } else if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "referral.referYourFriend.yes.bonusPolicy.yes" || pageName == 'zenrich') {
      moveToPageData.moveTo = 'ZenRichLandingPage';
      moveToPageData.actionName = 'referral.referYourFriend.yes.bonusPolicy.yes';
      moveToPageData.paramsFromChatBot = {
        // highlightField: true,
        actionName: 'referral.referYourFriend.yes.bonusPolicy.yes',
        icon: "",
        key: "All Openings",
        parameter: "JOB_OPENINGS",
        type: null,
        value: "All Openings"
      }
    } else if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "referrals.FAQs") {
      moveToPageData.moveTo = 'FaqPage';
      moveToPageData.actionName = 'referrals.FAQs';
      moveToPageData.paramsFromChatBot = {
        pageTitle: 'FAQs',
        departmentId: 4,
        actionName: 'referrals.FAQs',
        openModal: true
      }
    } else if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "referral.createFriendsProfile") {
      moveToPageData.moveTo = 'ReferralDetailsPage';
      moveToPageData.actionName = 'referral.createFriendsProfile';
      moveToPageData.paramsFromChatBot = {
        actionName: 'referral.createFriendsProfile',
        createNew: true,
        candidateProfileId: 0
      }
    }

    new Promise((resolve, reject) => {
      this.navCtrl.push(moveToPageData.moveTo, {
        paramsFromChatBot: moveToPageData.paramsFromChatBot,
        resolve: resolve
      });
    })
      .then(() => {
        if (this.chatList[this.chatList.length - 1].response.responseList.actionName == moveToPageData.actionName) {
          this.chatList[this.chatList.length - 1].response.responseList.doRedirect = false;
        }
        this.store.dispatch(new fromStore.SetHrChatBotListAction(this.chatList));
      })

  }

  addedTask(data) {
    console.log(data);
    this.selectedDateForCT.dateSelected.date = '';
    if (data && data.addedTask) {
      // this.taskAdded = data.addedTask;
      let date = moment(data.CTforDate).format('DD MMM YYYY');
      this.chatList.push({ "from": "bot", "response": { responseList: { speech: `Task Created successfully, Please "Fill Timesheet" for ${date}` } }, "readMore": false });
      this.selectedDateForCT.CTforDate = data.CTforDate
      // this._getHrChatBotData({ value: 'Fill My Timesheet' });
      let dateObj = { date: '' };
      dateObj.date = this.selectedDateForCT.CTforDate
      this.getTimeEntryDetails(dateObj, this.chatList.length, null, `Please see below the timesheet details for ${date}`);


    } else {
      this.chatList.push({ "from": "bot", "response": { responseList: { speech: 'Task Creation canceled' } }, "readMore": false });

      this._getSuggestionListFromServer(`${environment.url}chatbot-zenhelp/getSuggestionData`, {
        "actionId": 0
      });
    }
  }

  allocationMessageChatBot(data) {
    this.chatList.push({
      "from": "bot", "response": {
        responseList: {
          speech: data.allocationMessage
        }
      }, "readMore": false
    });


    this._getSuggestionListFromServer(`${environment.url}chatbot-zenhelp/getSuggestionData`, {
      "actionId": 0
    });
  }

  // globalmobility pdf mail service
  _mailPDFDocuments(docSelected: string) {
    let alert = this.utilities.presentConfirmation('Do you want to send mail yourself ?');
    alert.then(() => {
      let url = 'sendMailWithAttachment';
      let params = {
        "actionName": "globalMobility",
        "documentUrl": docSelected
      }
      // setTimeout(() => {
      // }, 10000);
      this.store.dispatch(new fromStore.GetMailServiceGlobalmobilityAction(url, params));
      setTimeout(() => {
        this._getSuggestionListFromServer(`${environment.url}chatbot-zenhelp/getSuggestionData`, {
          "actionId": 0
        });
      }, 2000);
    }).catch(err => err);
  }

}