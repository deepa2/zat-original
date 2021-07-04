import { Component, NgZone, ViewChild, OnInit, Input, ElementRef } from "@angular/core"
import { NavParams, NavController, IonicPage, Content, ModalController, PopoverController, Slides, ToastController, TextInput, ViewController, Events } from "ionic-angular"
import { SpeechRecognitionUtility } from "../../providers/speechRecognition/speechRecognition";
import { CommonUtilities } from "../../providers/commonUtilities/commonUtilities";
import { Subscription } from "rxjs";
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
import * as environment from '../../environment/environment';
import * as moment from 'moment';
import { version } from '@app/env';
import { AppVersion } from "@ionic-native/app-version";
import { FaqModalComponent } from '../../components/faq-modal/faq-modal';
import { ChatBotServices } from "./chat-bot-new-services/chat-bot-new.services";
import { GetterSetter } from "../../providers/getterSetter/getterSetter";
import { ChatBotSuggestionModel } from "./chat-bot-modal/chat-bot-suggestion-model/chat-bot-suggestion-model";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MoveToPageService } from "./chat-bot-new-services/moveToPage.service";
import { SfDashbordPage } from "../../container/ZenSF/sfDaashbord";


/**
 * template_id    template_type
*       1           text
*       2           image
*       3           email
*       4           fileDownload
*       5           apiCall
*       6           redirection
*/

@IonicPage()
@Component({
  selector: 'page-chat-bot-new',
  templateUrl: 'chat-bot-new.html',
})
export class ChatBotNew implements OnInit {

  @ViewChild(Content) content: Content;
  @ViewChild(Slides) slides: Slides;
  @ViewChild('ionInput1') ionInput1: ElementRef;

  private _roleListener: Subscription = new Subscription();
  private $moveToPageSubscription: Subscription = new Subscription();
  private $updateProfile: Subscription = new Subscription();

  /* any type */
  // private binding: any;
  private mangerAcess: any
  private sendCTDate: any;
  private currentQueryId: any;
  private hrChatBotData: any
  private userDetails: any = {};
  private queryListenFromFeedback: any;
  private pdfArray: any
  private getModalData: any;
  private negativeFeedbackMessage: any = ""
  private userQueryForSalary: any;
  private tempSuggestions: any;
  private bannerData: any;
  private timesheetData: any;
  private projectMigratedData: any = null;
  private role: any = null;
  private calendarInfo: any = null;
  private tsSelectedDateObj: any;
  private selValue: any;
  private tsFordate: any;
  private empContactListResponse: any;

  /*integer type*/
  private selectedIndex = -1;
  private currentActionId: number;
  private prevQueryID: number;
  private getTimesheetDetailsCurrentIndex: number = null;
  private dapCount: number = 0
  // private greetingTime: number = null;

  /*booleans flags */
  private taskAdded: boolean = false;
  private firstTimeEnter: boolean = false;
  private showChatBotLoader: boolean = false;
  private showKeyboard: boolean = false
  private mute: boolean = false
  private showSend: boolean = false
  private isFromPreviousFetchData = false;
  private cancelFlag: boolean = true;
  private showQueryBox: boolean = false;
  private listening: boolean = false
  private tooglePipe = true;
  private truncating = true;
  private showSuggestion: boolean = true;
  private expandDiv: boolean = false;
  private showMoreArrow: boolean = false;
  private showMoreArrowForMyTimesheetList: boolean = false;

  /*Empty Array */
  private timeEntrySuggestion: any = [];
  private dateListFromTimeSheet: any = [];
  private chatList: any = []
  // private suggestionList: any = [];
  private timesheetRestApi: Array<any> = [];
  private pendingDates: Array<any> = [];
  private suggestionListForTS: Array<any> = [];

  /*String */
  private title: string = '';
  private questionAsked: string
  private inputChatText: string = ""
  private positiveFeedbackMessage = "Thank you for your feedback.";
  // private feedbackMessage: string = "Helpful ?";
  private tsDataType = 'date';
  private greetingImg = "";

  /*Objects */
  private indexForEmpContactList: any = {
    start: 0,
    end: 7
  }
  private tsTypes = {
    tsDate: 'date',
    taskAndTimesheetDetails: 'ttDetails',
    suggestion: 'suggestion',
    selData: {
    },
    taskId: null,
    suggestionType: null,
    updateStatus: null,
  }
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
  private selectedDateForCT = {
    dateSelected: {
      date: "",
      day: "",
      status: ""
    },
    CTforDate: ''
  };

  private suggestionList: any = {
    suggestionsList: [],
    newFeaturesList: []
  };

  private userInputGroup: FormGroup;
  constructor(
    private getterSetter: GetterSetter,
    private chatBotServices: ChatBotServices,
    private download: Download,
    private platform: Platform,
    private navParams: NavParams,
    private store: Store<fromStore.AppState>,
    private data: Data,
    private navCtrl: NavController,
    private utilities: CommonUtilities,
    private zone: NgZone,
    private speechRecognitionUtility: SpeechRecognitionUtility,
    private modalCtrl: ModalController,
    private screenshot: Screenshot,
    private popoverCtrl: PopoverController,
    private httpProvider: HttpProvider,
    private toastCtrl: ToastController,
    private appversion: AppVersion,
    private formBuilder: FormBuilder,
    private moveToPageService: MoveToPageService,
    private viewCtrl: ViewController,
    private keyboard: Keyboard,
    private events: Events) {

    this.getterSetter.clearUserChatListData();
    this.chatList = []
    this.title = this.navParams.get('pageTitle')
    this.questionAsked = this.navParams.get('questionAsked')

    this.hrChatBotData = this.navParams.get('hrChatBotData')
    this.getModalData = this.navParams.get('data');
    this.bannerData = this.navParams.get('isComingFromBanner');

    this.userInputGroup = this.formBuilder.group({
      userInput: [''],
    });

    this.$moveToPageSubscription = this.moveToPageService.moveToPage.subscribe((res: any) => {
      this._moveToPage('');
    })

    this.$updateProfile = this.moveToPageService.updateProfile.subscribe((res: any) => {
      this.updateProfile(res.dataObj, res.i)
    })

    if (!this.utilities.isEmptyOrNullOrUndefined(this.hrChatBotData) && !this.utilities.isEmptyOrNullOrUndefined(this.hrChatBotData.actionInfo)) {
      this._addToList(this.questionAsked, this.hrChatBotData.actionInfo.speech, "bot")
      if (!this.utilities.isEmptyOrNullOrUndefined(this.hrChatBotData.actionInfo.speech)) {
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
    this._getGreetingMsg();
    this.getLoginStateFromStore();
    this.isFromPreviousFetchData = this.navParams.get('isFromPreviousFetchData');
  }

  _getGreetingMsg() {
    var d = new Date();
    var time = d.getHours();
    if (time < 12) {
      this.greetingImg = "morning";
    } else if (time >= 12 && time < 17) {
      this.greetingImg = "afternoon";
    } else {
      this.greetingImg = "evening";
    }
  }

  ionViewWillEnter() {
    if (this.firstTimeEnter) {
      this.firstTimeEnter = false;
      this._getGreetingMsg();
      this.getLoginStateFromStore();
      this.isFromPreviousFetchData = this.navParams.get('isFromPreviousFetchData');
    }

    let newQuestionPosted = this.navParams.get('questionPosted')
    let feedbackResponse = this.navParams.get('feedbackResponse')
    if (!this.utilities.isEmptyOrNullOrUndefined(newQuestionPosted)) {
      if (newQuestionPosted) {
        this.chatList.concat({ "from": "bot", "response": feedbackResponse })
        this.chatList.push({ "from": "bot", "response": { responseList: { speech: 'Question submitted successfully' } }, "readMore": false })
        this.getterSetter.setUserChatListData(this.chatList)
        this.showChatBotLoader = true;

        this.chatBotServices._hrChatBotSetChatList().then((response: any) => {
          this.chatList = response.data;
          this.chatResponseSuccess(this.chatList);
          this.utilities.consoleLog(this.chatList)
        });
      } else {
        this.chatList.push({ "from": "bot", "response": { responseList: { speech: 'Cancelled', suggestions: this.chatList[this.chatList.length - 1].response.responseList.suggestions } }, "readMore": false });
        this.showSuggestion = true;
        this.getterSetter.setUserChatListData(this.chatList)
        this.showChatBotLoader = true;

        this.chatBotServices._hrChatBotSetChatList().then((response: any) => {
          this.chatList = response.data;
          this.chatResponseSuccess(this.chatList);
          this.utilities.consoleLog(this.chatList)
        });

      }
    }
  }

  ionViewDidLoad() {
    this.getCalendarInfo()
    this.getRole()
  }

  getLoginStateFromStore() {
    this.data.getData('loginDetails').then((res: any) => {
      if (res && res.details && res.details.userDetails) {
        this.userDetails = res.details.userDetails;
        if (this.getModalData || this.bannerData) {
          if (this.getModalData) {
            this.getSuggestionData(this.getModalData);
            this.getModalData = undefined;
          }
          if (this.bannerData) {
            this.getSuggestionData('Corona Virus Awareness');
            this.bannerData = undefined;
          }
        } else {
          this.addSuggestionToChatList();
        }
      }
    })
  }

  ionViewWillLeave() {
    this._tts(" ");
    this.getterSetter.clearUserChatListData();
    this.moveToPageService.moveToPage.subscribe();
  }

  ngDestroy() {
    this.firstTimeEnter = true;
    this.getterSetter.clearUserChatListData();
    this.chatList = []
  }

  _getHrChatBotData(chatBotData: any) {
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
      chatBotData.clickedChatItem = this.chatList[this.chatList.length - 1].response.responseList;
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

    if (!this.utilities.isEmptyOrNullOrUndefined(this.chatList))
      if (!this.utilities.isEmptyOrNullOrUndefined(this.chatList[this.chatList.length - 1].response) && this.chatList[this.chatList.length - 1].response.responseList.lifespan != 1) {
        params.sessionId = this.chatList[this.chatList.length - 1].response.responseList.sessionId;
      }

    this.isFromPreviousFetchData = false;
    let currentTime = new Date();
    this.chatList = this.chatList.concat({ "from": "me", "query": params.userQuery, currentTime: `${currentTime.getHours()}:${("0" + currentTime.getMinutes()).slice(-2)}` });
    this._getChatList(params)

  }


  _getChatList(params?: Object) {
    new Promise<void>(resolve => {
      let data = {
        url: "",
        data: params,
        chatBot: true
      }
      this.showChatBotLoader = true;
      this._scrollToBottom();
      this.httpProvider.http.commonService(data).subscribe((response: any) => {
        if (response.error == null) {
          this.showChatBotLoader = false;
          if (!this.utilities.isEmptyOrNullOrUndefined(response.details.responseList.suggestionsList)) {
            this.suggestionList.suggestionsList = response.details.responseList.suggestionsList.split(",");
            this.mangerAcess = response.details.responseList.dialogManager
            // setTimeout(() => {
            //   this.events.publish('setAccess', this.mangerAcess)
            // }, 1000);
            if (response.details.responseList.newFeaturesList.length > 0)
              this.suggestionList.newFeaturesList = response.details.responseList.newFeaturesList.split(",");
            else
              this.suggestionList.newFeaturesList = []
          }
          this.chatList.push({ "from": "bot", "response": { responseList: response.details.responseList, "readMore": false } });
          this.chatResponseSuccess(this.chatList);
          this._scrollToBottom();
          resolve();
        } else if (response.error) {
          this.inputChatText = ""
          this._ionChangeToggleSendMic(this.inputChatText);

          if ((response.error.actionName == 'saveTimesheet' || response.error.actionName == 'submitTimesheet') && response.error.errorMsg) {
            this.utilities.presentAlert(response.error.errorMsg).then(() => {
              this.getTimeEntryDetails(this.tsSelectedDateObj, this.getTimesheetDetailsCurrentIndex);
            });
          }
        }
      }, (err) => {
        this.showChatBotLoader = false
        this.utilities.updateLoader(false);
      }
      );
    });
  }


  chatResponseSuccess(chatListResponse: any, message?: any) {
    this.utilities.consoleLog("--------------chat response success----------------")
    this.utilities.consoleLog(this.chatList);
    if (!this.utilities.isEmptyOrNullOrUndefined(chatListResponse) && !this.utilities.isEmptyOrNullOrUndefined(chatListResponse[chatListResponse.length - 1])) {
      //remove lifespan for ZenTS related queries and pass on it to next api call chatListResponse 
      let tempData = chatListResponse;
      if (tempData[tempData.length - 1].from == 'bot' && tempData[tempData.length - 1].response.responseList.actionName && (tempData[tempData.length - 1].response.responseList.actionName.split('.')[0] == "zenTS" || tempData[tempData.length - 1].response.responseList.actionName == 'getFillTimesheetDetails')) {
        delete tempData[tempData.length - 1].response.responseList.lifespan;
      }
      //show success messages of timesheet save and submit action
      if (message && message.userMessage) {
        if (message.actionName == "saveTimesheet") {
          this.tsTypes.updateStatus = {
            date: this.tsSelectedDateObj.date,
            status: 'Saved'
          }
          this.onTaskDataSLideChange();
          this.presentToast(message.userMessage);
          this.getTimeEntryDetails(this.tsSelectedDateObj, this.getTimesheetDetailsCurrentIndex);
        }
      }

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
          if (
            tempChatListItemResponseListItem.actionName == 'zenHelp'
            || tempChatListItemResponseListItem.actionName == 'arHierarchy'
            || tempChatListItemResponseListItem.actionName == 'salary_discrepency'
            || tempChatListItemResponseListItem.actionName == 'investment'
            || tempChatListItemResponseListItem.actionName == 'salaryLetter'
            || tempChatListItemResponseListItem.actionName == 'visaPolicy'
            || tempChatListItemResponseListItem.actionName == 'pf_faq'
            || tempChatListItemResponseListItem.actionName == 'pf_transfer'
            || tempChatListItemResponseListItem.actionName == 'onsiteReturn'
            || tempChatListItemResponseListItem.actionName == 'onsiteTravel'
            || tempChatListItemResponseListItem.templateId == 4
            || tempChatListItemResponseListItem.actionName == 'updateMyProfile'
            || tempChatListItemResponseListItem.actionName == 'applyFlexiLeave'
            || tempChatListItemResponseListItem.actionName == 'getSuggestionListFromServer'
            || tempChatListItemResponseListItem.actionName == 'approveAllTimesheets'
            || tempChatListItemResponseListItem.actionName == 'learning.myLearningHours'
            || tempChatListItemResponseListItem.actionName == 'learning.teamMembersDAP'
            || tempChatListItemResponseListItem.actionName == 'learning.menteesDAP'
          ) {

            if (tempChatListItemResponseListItem.actionName == 'getSuggestionListFromServer') {
              this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.chatList[this.chatList.length - 1].response.responseList.suggestionsList.split(",");
              this.showSuggestion = true;
              if (this.chatList[this.chatList.length - 2].response.responseList.actionName == "ProjectList") {
                this.chatList[this.chatList.length - 1].response.responseList.suggestions.unshift('Create Task');
              }
            }
            if (tempChatListItemResponseListItem.templateId == 4) {
              this.pdfArray = this.chatList[this.chatList.length - 1].response.responseList.restApi.split(",");

            }

            if (tempChatListItemResponseListItem.actionName == 'learning.teamMembersDAP' || tempChatListItemResponseListItem.actionName == 'learning.menteesDAP') {
              this._countteamMembersDAP(tempChatListItemResponseListItem.restApi, tempChatListItemResponseListItem.parameters)
            }

          } else if (tempChatListItemResponseListItem.actionName == "pf_faq_yes") {
            this.queryListenFromFeedback = '';
            this.showQueryBox = true
            if (this.utilities.platformAvailable())
              this.negativeFeedbackMessage = this._startListening()
          } else if (tempChatListItemResponseListItem.actionName == 'getZensarSiteData') {
            this.getZensarSiteData(tempChatListItemResponseListItem.restApi);
          } else if (tempChatListItemResponseListItem.actionName == 'openNewQuestion' && !this.isFromPreviousFetchData) {
            this.navCtrl.push('PostQuestionPage')
          }
          else if (tempChatListItemResponseListItem.actionName == 'getUserProfileParamsDetails' || tempChatListItemResponseListItem.actionName == 'getARDetails') {
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
            this.getTimesheetDetails(tempChatListItemResponseListItem);
            if (tempChatListItemResponseListItem.actionName != 'zenTS.getCreateTaskDetails') {
              delete tempChatListItemResponseListItem.speech;
            }
          } else if (tempChatListItemResponseListItem.actionName == 'zenTalent.getUserProfileData' || tempChatListItemResponseListItem.actionName == 'zenTalent.getMyProfile' || tempChatListItemResponseListItem.actionName == 'getManagerDetails') {
            this.empContactListResponse = tempChatListItemResponseListItem;
            this.getEmployeeContactList(tempChatListItemResponseListItem);
          } else if (tempChatListItemResponseListItem.actionName == "timeEntryDetails") {
            if (this.chatList[this.chatList.length - 2].response.responseList.actionName == "zenTS.getCreateTaskDetails") {
              this.prevQueryID = this.chatList[this.chatList.length - 2].response.responseList.queryId
              this.chatList[this.chatList.length - 1].response.responseList.showTimeEntryDetails = false;
              this.chatList[this.chatList.length - 1].response.responseList.enableCT = true;

            } else {
              this.chatList[this.chatList.length - 1].response.responseList.showTimeEntryDetails = true;
            }

            this.doDisable(tempChatListItemResponseListItem.data.taskAndTimesheetDetails);
            if (tempChatListItemResponseListItem.data.taskAndTimesheetDetails.length == 0 && this.chatList[this.chatList.length - 2].response.responseList.actionName != 'zenTS.getCreateTaskDetails') {
              this.chatList[this.chatList.length - 1].response.responseList.speech = null;
              this.getProjectList(tempChatListItemResponseListItem.queryId);
            }

            this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.timeEntrySuggestion.SuggestionList
            if (!this.utilities.isEmptyOrNullOrUndefined(this.chatList[this.chatList.length - 1].response.responseList.suggestions)) {
              this.chatList[this.chatList.length - 1].response.responseList.suggestionPhrase = this.timeEntrySuggestion.SuggestionPhrase
            }
          } else if (tempChatListItemResponseListItem.actionName == "getFillTimesheetDetails") {
            this.dateListFromTimeSheet = tempChatListItemResponseListItem.dataList;
            if (tempChatListItemResponseListItem.dataList && tempChatListItemResponseListItem.dataList.length == 1) {
              let date = moment(tempChatListItemResponseListItem.dataList[0].date).format('DD MMM YYYY');
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
            this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.timeEntrySuggestion.SuggestionsList;
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
              this._getSuggestionListFromServer(`getSuggestionList`, { "actionId": 0 });

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
                    queryId: tempChatListItemResponseListItem.queryId,
                    lifespan: tempChatListItemResponseListItem.lifespan,
                    pendingList: tempChatListItemResponseListItem.data.teamsTimesheetList
                  }
                }
              })
            }
          } else if (tempChatListItemResponseListItem.actionName == "approveAllTimesheets") {
            this.chatList[this.chatList.length - 1].response.responseList.suggestionPhrase = tempChatListItemResponseListItem.speech;
          }
          // else if (tempChatListItemResponseListItem.actionName == 'learning.myLearningHours'){
          //   this.getMyLearnigs(tempChatListItemResponseListItem.restApi);
          // }


          // called for fist time only
          if (tempChatListItemResponseListItem.actionName != "getSuggestionListFromServer" && tempChatListItemResponseListItem.hasOwnProperty('suggestionList')) {
            if (tempChatListItemResponseListItem.suggestionsList.length == 0 && tempChatListItemResponseListItem.lifespan == 1) {
              this._getSuggestionListFromServer(`getSuggestionList`, { "actionId": 0 });
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
          ) {
            this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.chatList[this.chatList.length - 3].response.responseList.suggestionsList.split(",");
            this.chatList[this.chatList.length - 1].response.responseList.suggestionPhrase = this.chatList[this.chatList.length - 3].response.responseList.suggestionPhrase
            this.showSuggestion = true;
          }

        }

        if (tempChatListItemResponseListItem.actionId == 0) {
          this.showSuggestion = true;
          this.suggestionList.suggestionsList = tempChatListItemResponseListItem.suggestionsList.split(",");
          if (tempChatListItemResponseListItem.newFeaturesList.length > 0)
            this.suggestionList.newFeaturesList = tempChatListItemResponseListItem.newFeaturesList.split(",");
          else
            this.suggestionList.newFeaturesList = []
        }
        if (tempChatListItemResponseListItem.actionName == "zenTalent.createDAP"
          || tempChatListItemResponseListItem.actionName == "zenTalent.ijp"
          || tempChatListItemResponseListItem.actionName == "referral.referYourFriend.yes.bonusPolicy.yes"
          || tempChatListItemResponseListItem.actionName == "referrals.FAQs"
          || tempChatListItemResponseListItem.actionName == "referral.createFriendsProfile"
          || tempChatListItemResponseListItem.actionName == "learning.technicalCalendar"
          || tempChatListItemResponseListItem.actionName == "learning.behaviouralCalendar"
          || tempChatListItemResponseListItem.actionName == "getAssetDetails"

        ) {
          this.chatList[this.chatList.length - 1].response.responseList.moveToPage = true;
          //tempChatListItemResponseListItem.speech = "Click here for Dialog";
        } else if (tempChatListItemResponseListItem.actionName == "successfactor.dialog") {
          this.chatList[this.chatList.length - 1].response.responseList.moveToPage = true;
          tempChatListItemResponseListItem.speech = "Click here for Dialog";
        }

        if (tempChatListItemResponseListItem.actionName == "getFillTimesheetDetails") {
          if (this.chatList[this.chatList.length - 1].response.responseList.createTaskFlag && this.chatList[this.chatList.length - 1].response.responseList.suggestions[0] != 'Create Task')
            this.chatList[this.chatList.length - 1].response.responseList.suggestions.unshift(this.chatList[this.chatList.length - 1].response.responseList.CreateTaskText);
        }
        if (!this.utilities.isEmptyOrNullOrUndefined(tempChatListItemResponseListItem.speech) && !tempChatListItemResponseListItem.noSpeech) {
          if (!this.isFromPreviousFetchData) {
            this._tts(tempChatListItemResponseListItem.speech);
          }
          this.showKeyboard = false
        }
      }
      this.showChatBotLoader = false;
      this._scrollToBottom();
    } else {
      if (this.firstTimeEnter) {
        this.addSuggestionToChatList()
      } else {

      }
    }
  }

  getZensarSiteData(zensarSiteUrl: any) {
    let serviceParams = {
      url: zensarSiteUrl
    }

    this.getterSetter.setUserChatListData(this.chatList)
    this.showChatBotLoader = true;
    this._scrollToBottom();

    this.chatBotServices._zensarSiteData(serviceParams).then((response: any) => {
      this.chatList = response.data;
      this.chatResponseSuccess(this.chatList);
    });

  }

  getUserBankDetails(url: any, params: any) {
    let serviceParams = {
      url: url,
      data: {
        params: params,
      },
      userBankDetails: true
    }

    this.getterSetter.setUserChatListData(this.chatList)
    this.showChatBotLoader = true;
    this.chatBotServices._userBankDetails(serviceParams).then((response: any) => {
      this.chatList = response.data;
      // this.chatResponseSuccess(this.chatList)
      this._scrollToBottom();
    });

  }

  // not integrated
  getWeatherData(positionCoords: any) {
    // let latitude = positionCoords.latitude
    // let longitude = positionCoords.longitude
    // var appId = Constants.weatherApiKey;
    // var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + appId + "&units=metric";
    // this.store.dispatch(new fromStore.GetHrChatBotWeatherAction(weatherUrl, {}));
  }

  addSuggestionToChatList() {
    if (this.getModalData || this.bannerData) {
      this.chatList.push({ from: "bot", response: { responseList: { speech: null } } })
      this.chatList.push({ from: "bot", response: { responseList: { actionName: "zenHelp", speech: null, suggestionList: [{ suggestionPhrase: "Zensar Policies", isNewFeature: false }, { suggestionPhrase: "Holiday Calendar", isNewFeature: false }, { suggestionPhrase: "Know the ARs", isNewFeature: false }] } } })
    } else {
      this.chatList.push({ from: "bot", response: { responseList: { speech: "Hi " + this.userDetails.userName.substring(0, this.userDetails.userName.indexOf(" ")) + ',\n' + " How may I help you?" } } });
      setTimeout(() => {
        this.chatList.push({ from: "bot", response: { responseList: { actionName: "zenHelp", speech: "Type below or check the suggestions below " } } })
        if (this.chatList.length == 2 && !this.getModalData) {
          this._tts(this.chatList[0].response.responseList.speech)
        }
        this.showKeyboard = false
      }, 500);
      this._getSuggestionListFromServer(`getSuggestionList`, { "actionId": 0 });

    }

    this.getterSetter.setUserChatListData(this.chatList)
    this.showChatBotLoader = true;
    this._scrollToBottom();

    this.chatBotServices._hrChatBotSetChatList().then((response: any) => {
      this.chatList = response.data;
      this.showChatBotLoader = false
      // this.chatResponseSuccess(this.chatList);
    });

  }

  _sendText() {
    this.showKeyboard = false;
    this._getHrChatBotData({ value: this.inputChatText });
  }

  _sendNegativeFeedback(event) {
    this.chatList = event.chatList;
    this.showSuggestion = true;
    this._getSuggestionListFromServer(`getSuggestionList`, { "actionId": 0 });
  }

  _submitFeedback(event) {
    this.chatList = event.chatList;
  }

  _sendPayrollFeedback(chatListItem: any, negativeFeedbackMessage: any) {
    let params = {
      "userId": this.userDetails.userId,
      "queryId": chatListItem.response.responseList.queryId,
      "feedbackValue": -1,
      "feedbackComment": negativeFeedbackMessage
    }

    let serviceParams = {
      url: "",
      data: {
        params: params,
      },
      chatBotFeedback: true
    }

    this.getterSetter.setUserChatListData(this.chatList)
    this.showChatBotLoader = true;
    this._scrollToBottom();

    this.chatBotServices._submitFeedBack(serviceParams).then((response: any) => {
      this.chatList = response.data;
      this.chatResponseSuccess(this.chatList)
    });
    this.negativeFeedbackMessage = '';
  }

  _ionChangeToggleSendMic(value: string) {
    if (!this.utilities.isEmptyOrNullOrUndefined(this.inputChatText)) {
      this.showSend = false;
    } else {
      this.showSend = true;
    }
  }

  _startListening() {
    this.listening = true
    this.speechRecognitionUtility.startListening().subscribe((value: string) => {
      if (this.utilities.platformAvailable) {
        let tempChatListItemResponseListItem = this.chatList[this.chatList.length - 1].response.responseList;
        let actionName = tempChatListItemResponseListItem.actionName;
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
    setTimeout(() => { // this will make the execution after the above boolean has changed
      // this.ionInput1.nativeElement.focus()
      // this.ionInput1.nativeElement.select()
      // this.keyboard.show()
    }, 100);
    this._scrollToBottom()
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
    this.showQueryBox = false;
    this.showSuggestion = true;
    this._getSuggestionListFromServer(`getSuggestionList`, { "actionId": 0 });
  }

  _downloadPDF(url) {
    if (url) {
      if (this.platform.is('android')) {
        let alert = this.utilities.presentConfirmation('Do you want to download this file ?');
        alert.then(() => {
          this.download.downloadDocument(url, true)
        }).catch(err => err);
      } else {
        this.utilities.openWithSystemBrowser(url);
      }
    }
  }

  _showClosedData() {
    this.selectedDateForCT.CTforDate = "";
    this.selectedDateForCT.dateSelected.date = "";
    const modal = this.modalCtrl.create(ChatBotModel,
      {
        'title': 'ChatBot Info',
      }
    );
    modal.present();
    modal.onDidDismiss((query) => {
      if (query)
        this._getHrChatBotData({ value: query });
      else {
        this._getSuggestionListFromServer(`getSuggestionList`, { "actionId": 0 });
      }

    })
  }

  /**
   * open suggestion model on menu icon click
   */
  _openSuggestionModal() {

    this.selectedDateForCT.CTforDate = "";
    this.selectedDateForCT.dateSelected.date = "";
    const modal = this.modalCtrl.create(ChatBotSuggestionModel,
      {
        'title': 'ChatBot Info',
      },
      {
        cssClass: 'chat-suggestion-modal'
      }
    );
    modal.present();
    modal.onDidDismiss((query) => {
      if (query)
        this._getHrChatBotData({ value: query });
      else {
        this._getSuggestionListFromServer(`getSuggestionList`, { "actionId": 0 });
      }

    })
  }


  getTimesheetDetails(response: any) {
    let params: any;
    let actionName = response.actionName.split(".");
    let url: any;
    let extraParams = {
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

    let serviceParams = {
      url: url,
      data: {
        params: params,
        extraParams: extraParams
      },
      timesheet: true
    }

    this.getterSetter.setUserChatListData(this.chatList)
    this.utilities.updateLoader(true);
    this._scrollToBottom();

    this.chatBotServices._timeSheetService(serviceParams).then((response: any) => {
      this.chatList = response.data;
      this.utilities.updateLoader(response.pending);
      this.chatResponseSuccess(this.chatList);
    }).catch(err => {
      this.utilities.updateLoader(false)
    });

    // for now diapact is saperate but when api comes in service make it common
    //to clear the selecetd date
    this.selectedDateForCT.dateSelected.date = '';
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

      let url = this.timesheetRestApi[1]; //Get Timeentry Details Url
      let params = {
        "version": environment.version,
        "selectedDate": dateObj.date
      }
      let extraParams = {
        "actionName": 'timeEntryDetails',
        "queryId": queryId,
        "speech": `Below is the timesheet details :`,
        "indexToUpdate": index
      }

      let serviceParams = {
        url: url,
        data: {
          params: params,
          extraParams: extraParams
        },
        timesheet: true
      }

      this.getterSetter.setUserChatListData(this.chatList)
      this.showChatBotLoader = true;
      this._scrollToBottom();

      this.chatBotServices._timeSheetService(serviceParams).then((response: any) => {
        this.chatList = response.data;
        this.showChatBotLoader = response.pending;
        this.chatResponseSuccess(this.chatList);
      });
    }
  }


  getEmployeeContactList(response) {
    let url = response.restApi.split(",")[0];
    let params: any = {
      "start": this.indexForEmpContactList.start,
      "end": this.indexForEmpContactList.end,
    }
    let extraParams: any = {
      "lifespan": '1',
      "queryId": response.queryId
    }
    if (response.actionName == 'getManagerDetails') {
      params.search = response.parameters.userId;
      extraParams.actionName = response.actionName
    } else {
      params.search = response.actionName == 'zenTalent.getMyProfile' ? this.userDetails.userId : response.parameters.ZenVerse_First_Name + response.parameters.ZenVerse_User_Name
      extraParams.actionName = response.actionName.split('.')[1];
    }

    let serviceParams = {
      url: url,
      data: {
        params: params,
        extraParams: extraParams
      },
      empContactList: true
    }

    this.getterSetter.setUserChatListData(this.chatList)
    this.showChatBotLoader = true;
    this._scrollToBottom();

    this.chatBotServices._employeeContactListDetails(serviceParams).then((response: any) => {
      this.chatList = response.data;
      this.showChatBotLoader = response.pending;
      this.chatResponseSuccess(this.chatList);
    });
  }

  goToProfile(data: any) {
    new Promise((resolve, reject) => {
      this.navCtrl.push('NewProfilePage', {
        'userId': parseInt(data.employeeId),
        'profileType': 'zencontacts',
        resolve: resolve
      });

    }).then(() => {
      this.getterSetter.setUserChatListData(this.chatList)
      this.showChatBotLoader = true;
      this._scrollToBottom();

      this.chatBotServices._hrChatBotSetChatList().then((response: any) => {
        this.chatList = response.data;
        this.chatResponseSuccess(this.chatList);
      });
    })

  }

  onlastSlideUpdateEmpContactList(dataList) {
    this.showMoreArrow = dataList.length == 7 ? true : false;
  }

  onlastSlideUpdateMyTimesheetList(dataList) {
    this.showMoreArrowForMyTimesheetList = dataList.length > 5 ? true : false;
  }

  onScrollUpdateEmpContactList(event: Event, dataList) {
    if ((event.target as HTMLElement).scrollWidth - (event.target as HTMLElement).clientWidth == (event.target as HTMLElement).scrollLeft) {
      (event.target as HTMLElement).scrollIntoView({ behavior: 'smooth' });
      this.showMoreArrow = dataList.length == 7 ? true : false;
    }
  }

  onScrollUpdateMyTimesheetList(event: Event, dataList) {
    if ((event.target as HTMLElement).scrollWidth - (event.target as HTMLElement).clientWidth == (event.target as HTMLElement).scrollLeft) {
      (event.target as HTMLElement).scrollIntoView({ behavior: 'smooth' });
      this.showMoreArrowForMyTimesheetList = dataList.length > 5 ? true : false;
    }
  }


  openEmpContactListModal() {
    let reqParams = {
      "start": 0,
      "end": 50,
      "search": this.empContactListResponse.actionName == 'zenTalent.getMyProfile' ? this.userDetails.userId : this.empContactListResponse.parameters.ZenVerse_First_Name + this.empContactListResponse.parameters.ZenVerse_User_Name
    }

    new Promise((resolve, reject) => {
      this.navCtrl.push('UserProfileListPage', {
        reqParams,
        resolve: resolve
      });
    }).then(() => {
      if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "getUserProfileData") {
        this.chatList[this.chatList.length - 1].response.responseList.noSpeech = true;
      }
      this.getterSetter.setUserChatListData(this.chatList)
      this.showChatBotLoader = true;
      this._scrollToBottom();

      this.chatBotServices._hrChatBotSetChatList().then((response: any) => {
        this.chatList = response.data;
        this.chatResponseSuccess(this.chatList);
      });
    })

  }

  canFillZeroHoursFlag() {
    if (this.calendarInfo.AssociatesBU) {
      return this.calendarInfo.PayrollToBeFilledZeroHours.includes(this.calendarInfo.AssociatesBU);
    }
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

      let url = this.timesheetRestApi[2]; //Save Timesheet Url
      let params = taskData;
      let extraParams = {
        "actionName": "saveTimesheet"
      }

      let serviceParams = {
        url: url,
        data: {
          params: params,
          extraParams: extraParams
        },
        timesheet: true
      }

      this.getterSetter.setUserChatListData(this.chatList)
      this.utilities.updateLoader(true);
      this._scrollToBottom();

      this.chatBotServices._timeSheetService(serviceParams).then((response: any) => {
        this.chatList = response.data;
        this.utilities.updateLoader(response.pending);
        this.chatResponseSuccess(this.chatList, response.message);
      }).catch(err => {
        this.utilities.updateLoader(false);
      });;


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
              taskIds.push(task.taskId);
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
        "timesheetList": sortedTimesheetList,
        "extendTimesheetFillingDate": this.calendarInfo.CalendarDates.extendTimesheetFillingDate
      }

      if (!queryId) {
        queryId = this.prevQueryID
      }

      let extraParams = {
        "actionName": "submitTimesheet",
        "lifespan": '1',
        "queryId": queryId,
        "pendingDates": this.pendingDates,
        "dateObjForSubmission": this.tsSelectedDateObj,
      }
      this.selectedDateForCT.dateSelected.date = '';
      // this.store.dispatch(new fromStore.GetTimesheetDeatilsAction(url, params, extraParams));

      let serviceParams = {
        url: url,
        data: {
          params: params,
          extraParams: extraParams
        },
        timesheet: true
      }

      this.getterSetter.setUserChatListData(this.chatList)
      this.utilities.updateLoader(true);
      this._scrollToBottom();

      this.chatBotServices._timeSheetService(serviceParams).then((response: any) => {
        this.chatList = response.data;
        this.utilities.updateLoader(response.pending);
        this.chatResponseSuccess(this.chatList);
      }).catch(err => {
        this.utilities.updateLoader(false)
      });;

    }
    else if (rejectedTimesheetFlag) {
      this.utilities.presentAlert('Please add remarks for rejected timesheets');
    }

  }

  getProjectList(queryId) {
    let url = this.timesheetRestApi[4];
    this.utilities.consoleLog(this.tsSelectedDateObj)
    const params = {
      "currentDate": this.tsSelectedDateObj.date
    };
    let extraParams = {
      "actionName": "ProjectList",
      "lifespan": '1',
      "queryId": queryId
    }
    let serviceParams = {
      url: url,
      data: {
        params: params,
        extraParams: extraParams
      },
      timesheet: true
    }

    this.getterSetter.setUserChatListData(this.chatList)
    this.utilities.updateLoader(true);
    this._scrollToBottom();

    this.chatBotServices._timeSheetService(serviceParams).then((response: any) => {
      this.chatList = response.data;
      this.utilities.updateLoader(response.pending);
      this.chatResponseSuccess(this.chatList);
    }).catch(err => {
      this.utilities.updateLoader(false)
    });;

  }

  setIndexTOUpdateSelDate(data, chatlistIndex) {
    let chatListLength = this.chatList[this.chatList.length - 1].response.responseList.actionName == 'timeEntryDetails' ? (this.chatList.length - 1) : this.chatList.length;
    if (chatlistIndex == chatListLength) {
      this.indexToShowDot.chatListIndexForDateToUpdate = data.chatListIndexForDateToUpdate;
      this.indexToShowDot.dateIndexToUpdate = data.dateIndexToUpdate;
    }
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

        let serviceParams = {
          url: url,
          data: {
            params: params,
            extraParams: extraParams
          },
          empContactList: true
        }

        this.getterSetter.setUserChatListData(this.chatList)
        this.showChatBotLoader = true;
        this._scrollToBottom();

        this.chatBotServices._associateDetails(serviceParams).then((response: any) => {
          this.chatList = response.data;
          this.showChatBotLoader = response.pending;
          this.chatResponseSuccess(this.chatList);
        });

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

      let serviceParams = {
        url: url,
        data: {
          params: params,
          extraParams: extraParams
        },
        empContactList: true
      }

      this.getterSetter.setUserChatListData(this.chatList)
      this.showChatBotLoader = true;

      this.chatBotServices._associateDetails(serviceParams).then((response: any) => {
        this.chatList = response.data;
        this.chatResponseSuccess(this.chatList);
      });
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
        this.getterSetter.setUserChatListData(this.chatList)
        this.showChatBotLoader = true;

        this.chatBotServices._hrChatBotSetChatList().then((response: any) => {
          this.chatList = response.data;
          this.chatResponseSuccess(this.chatList);
        });
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
      this.getterSetter.setUserChatListData(this.chatList)
      this.showChatBotLoader = true;

      this.chatBotServices._hrChatBotSetChatList().then((response: any) => {
        this.chatList = response.data;
        this.chatResponseSuccess(this.chatList);
      });
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
      this.getterSetter.setUserChatListData(this.chatList)
      this.showChatBotLoader = true;

      this.chatBotServices._hrChatBotSetChatList({ "from": "me", "query": projectName, "actionName": "pendingTimesheetList" }).then((response: any) => {
        this.chatList = response.data;
        this.chatResponseSuccess(this.chatList);
      });
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

      let serviceParams = {
        url: url,
        data: {
          params: params,
          extraParams: extraParams
        },
        timesheet: true
      }

      this.getterSetter.setUserChatListData(this.chatList)
      this.showChatBotLoader = true;

      this.chatBotServices._timeSheetService(serviceParams).then((response: any) => {
        this.chatList = response.data;
        this.showChatBotLoader = response.pending;
        this.chatResponseSuccess(this.chatList)
      });

    }
  }

  _sendDataToChatBotResponseSuccess(event) {
    this._scrollToBottom();
    this.chatList = event.chatList;
    this.chatResponseSuccess(event);
  }


  openFAQModal(faqData) {
    let faqModal = this.modalCtrl.create(FaqModalComponent, { faqData }, {
      cssClass: 'faq-modal'
    });

    faqModal.present();
    faqModal.onDidDismiss((res) => {
    })
  }

  replacePhoneNumber(str, actionName) {
    if (actionName == 'getARDetails') {
      let p_num = str.match(/(?:(?:\+?([1-9]|[0-9][0-9]|[0-9][0-9][0-9])\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([0-9][1-9]|[0-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/g, "");
      let newStr = str.replace(p_num, "<a href='tel:" + p_num + "'>" + p_num + "</a>");
      return newStr;
    } else {
      return str;
    }
  }


  _getSuggestionListFromServer(url: string, params: object) {
    this.utilities.updateLoader(true);
    let data = {
      url: url,
      data: params,
      chatBotSugessionUrl: true
    }
    this.httpProvider.http.commonService(data).subscribe((response: any) => {
      this.utilities.consoleLog(response);
      this.utilities.updateLoader(false);
      this.suggestionList.suggestionsList = response.details.responseList.suggestionsList.split(",");
      if (response.details.responseList.newFeaturesList.length > 0)
        this.suggestionList.newFeaturesList = response.details.responseList.newFeaturesList.split(",");
      else
        this.suggestionList.newFeaturesList = []

      // this.utilities.showAlert(JSON.stringify(this.suggestionList.newFeaturesList), "");

    },
      error => {
        this.utilities.updateLoader(false);
        this.utilities.consoleLog(error)
      })
  }
  _moveToPage(pageName: string) {
    let moveToPageData: any = {
    }

    if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "successfactor.dialog") {
      moveToPageData.moveTo = SfDashbordPage;
      moveToPageData.actionName = 'successfactor.dialog';
      moveToPageData.paramsFromChatBot = {
        highlightField: true,
        actionName: 'successfactor.dialog',
        mangerAcess: this.mangerAcess,
        userId: this.userDetails.userId
      }

    } else if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "zenTalent.ijp") {
      moveToPageData.moveTo = 'InternalJobPostingPage';
      moveToPageData.actionName = 'zenTalent.ijp';
      moveToPageData.paramsFromChatBot = {
        highlightField: true,
        actionName: 'zenTalent.ijp'
      }
    } else if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "zenTalent.createDAP") {
      moveToPageData.moveTo = 'CreateDapPage';
      moveToPageData.actionName = 'zenTalent.createDAP';
      moveToPageData.paramsFromChatBot = {
        highlightField: true,
        actionName: 'zenTalent.createDAP'
      }
    } else if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "referral.referYourFriend.yes.bonusPolicy.yes" || pageName == 'zenrich') {
      moveToPageData.moveTo = 'ZenRichLandingPage';
      moveToPageData.actionName = 'referral.referYourFriend.yes.bonusPolicy.yes';
      moveToPageData.paramsFromChatBot = {
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
    } else if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "learning.technicalCalendar" || this.chatList[this.chatList.length - 1].response.responseList.actionName == "learning.behaviouralCalendar") {
      moveToPageData.moveTo = 'CalendarPage';
      moveToPageData.actionName = this.chatList[this.chatList.length - 1].response.responseList.actionName;
      moveToPageData.paramsFromChatBot = {
        actionName: this.chatList[this.chatList.length - 1].response.responseList.actionName,
        selectedCourse: 'recommended',
        showAllFilters: false
      }
    } else if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "getAssetDetails") {
      moveToPageData.moveTo = 'NewProfilePage';
      moveToPageData.actionName = this.chatList[this.chatList.length - 1].response.responseList.actionName;
      moveToPageData.paramsFromChatBot = {
        actionName: this.chatList[this.chatList.length - 1].response.responseList.actionName,
        'userId': this.userDetails.userId,
        'profileType': 'userProfile',
        'fromZeno': true,
        'slideTo': 2
      }
    }

    new Promise((resolve, reject) => {
      this.navCtrl.push(moveToPageData.moveTo, {
        paramsFromChatBot: moveToPageData.paramsFromChatBot,
        resolve: resolve
      });
    })
      .then(() => {
        if (this.chatList[this.chatList.length - 1].response.responseList.actionName == 'getAssetDetails')
          return;
        if (this.chatList[this.chatList.length - 1].response.responseList.actionName == moveToPageData.actionName) {
          this.chatList[this.chatList.length - 1].response.responseList.doRedirect = false;
        }
        this.getterSetter.setUserChatListData(this.chatList)
        this.showChatBotLoader = true;
        this._scrollToBottom();
        this.chatBotServices._hrChatBotSetChatList(this.chatList).then((response: any) => {
          this.chatList = response.data;
          this.chatResponseSuccess(this.chatList);
        });
      })

  }

  _countteamMembersDAP(restApi, body) {
    this.utilities.updateLoader(true);
    let data = {
      url: restApi,
      params: body
    }
    this.chatBotServices._restAPICall(data).then((response: any) => {
      if (response.data.details.responseList)
        this.dapCount = response.data.details.responseList.length
      else
        this.dapCount = 0
      this.utilities.updateLoader(false);

    },
      error => {
        this.utilities.updateLoader(false);
      })
  }

  _viewAll(actionName) {
    if (actionName == 'learning.menteesDAP')
      this.navCtrl.push("MenteeListPage");
    else
      this.navCtrl.push("TeamListPage", { 'role': 'manager' });

  }

  addedTask(data) {
    this.utilities.consoleLog(data);
    this.selectedDateForCT.dateSelected.date = '';
    if (data && data.addedTask) {
      let date = moment(data.CTforDate).format('DD MMM YYYY');
      this.chatList.push({ "from": "bot", "response": { responseList: { speech: `Task Created successfully, Please "Fill Timesheet" for ${date}` } }, "readMore": false });
      this.selectedDateForCT.CTforDate = data.CTforDate
      let dateObj = { date: '' };
      dateObj.date = this.selectedDateForCT.CTforDate
      this.getTimeEntryDetails(dateObj, this.chatList.length, null, `Please see below the timesheet details for ${date}`);


    } else {
      this.chatList.push({ "from": "bot", "response": { responseList: { speech: 'Task Creation canceled' } }, "readMore": false });

      this._getSuggestionListFromServer(`getSuggestionList`, { "actionId": 0 });
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

    this._getSuggestionListFromServer(`getSuggestionList`, { "actionId": 0 });

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

      let serviceParams = {
        url: url,
        data: {
          params: params
        },
        chatBotInfoList: true
      }

      this.getterSetter.setUserChatListData(this.chatList)
      this.showChatBotLoader = true;
      this._scrollToBottom();
      this.chatBotServices._mailServiceGlobalMobility(serviceParams).then((response: any) => {
        this.chatList = response.data;
        this.chatResponseSuccess(this.chatList);
      });


      setTimeout(() => {
        this._getSuggestionListFromServer(`getSuggestionList`, { "actionId": 0 });
      }, 2000);
    }).catch(err => err);
  }

  _updateUserQuery(userQuery: string) {
    // this.showKeyboard = true;
    // this.ionInput1.value = userQuery;
    setTimeout(() => {
      this.showKeyboard = true
      this.inputChatText = userQuery
      setTimeout(() => { // this will make the execution after the above boolean has changed
        // this.ionInput1.nativeElement.focus()
        // this.ionInput1.nativeElement.select()
        // this.keyboard.show()
      }, 0);
      this._scrollToBottom()
    }, 1000);

    // let self = this;
    // window.addEventListener('native.keyboardshow', keyboardShowHandler);
    // function keyboardShowHandler(e) {​​​​​
    // this.showKeyboard = true;
    //     }​​​​​
  }

  downloadImage(multimediaUrl) {
    this.download.downloadDocument(multimediaUrl)
  }

  _closeKeyBoard() {
    this.showKeyboard = false
  }

}
