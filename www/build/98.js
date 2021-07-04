webpackJsonp([98],{

/***/ 1450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewHomePageModule", function() { return NewHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_home__ = __webpack_require__(1873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { VaccinationGraphComponent } from '../../components/vaccination-graph/vaccination-graph';
var NewHomePageModule = /** @class */ (function () {
    function NewHomePageModule() {
    }
    NewHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_home__["a" /* NewHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_home__["a" /* NewHomePage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["c" /* StoreModule */].forFeature('app', __WEBPACK_IMPORTED_MODULE_6__store__["_98" /* reducers */], { metaReducers: __WEBPACK_IMPORTED_MODULE_6__store__["_96" /* metaReducers */] }),
                __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["EffectsModule"].forFeature(__WEBPACK_IMPORTED_MODULE_6__store__["_28" /* effects */])
            ],
        })
    ], NewHomePageModule);
    return NewHomePageModule;
}());

//# sourceMappingURL=new-home.module.js.map

/***/ }),

/***/ 1873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_corona_safety_measures_alert_corona_safety_measures_alert__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_app_update_alert_app_update_alert__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_version__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_market__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_chat_model_chat_model__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_screenshot_ngx__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_fingerprint_aio__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_android_fingerprint_auth__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__constants_constants__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_getterSetter_getterSetter__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_covid_information_covid_information__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_download_download__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_browser_tab__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_in_app_browser__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_app_availability__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ZenFianance_finance_dashboard_finance_dashboard__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_south_africa_immigration_compliance_south_africa_immigration_compliance__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_leave_declaration_leave_declaration__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_reimbursment_declaration_reimbursment_declaration__ = __webpack_require__(792);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





























var NewHomePage = /** @class */ (function () {
    //  private _bannerDetailsListener:Subscription=new Subscription();
    function NewHomePage(navCtrl, store, popoverCtrl, data, utility, appVersion, alertCtrl, platform, market, network, httpProvider, mdlCtrl, screenShot, navParam, fingerPrint, androidFingerPrint, events, getSet, download, loadCtrl, app, browserTab, iab, appAvailability, zone, cdr) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.store = store;
        this.popoverCtrl = popoverCtrl;
        this.data = data;
        this.utility = utility;
        this.appVersion = appVersion;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.market = market;
        this.network = network;
        this.httpProvider = httpProvider;
        this.mdlCtrl = mdlCtrl;
        this.screenShot = screenShot;
        this.navParam = navParam;
        this.fingerPrint = fingerPrint;
        this.androidFingerPrint = androidFingerPrint;
        this.events = events;
        this.getSet = getSet;
        this.download = download;
        this.loadCtrl = loadCtrl;
        this.app = app;
        this.browserTab = browserTab;
        this.iab = iab;
        this.appAvailability = appAvailability;
        this.zone = zone;
        this.cdr = cdr;
        this.userDetails = {};
        this.isPopupVisble = false;
        this.miscData = {};
        this.leaveData = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subscription__["Subscription"]();
        this.homeBanner = [];
        this.isDataAvalible = false;
        this.isFingerPrintChecked = false;
        this.isFirstTime = true;
        this.timeEntryData = [];
        this._loadingListner = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subscription__["Subscription"]();
        this.isSurveyCompleted = false;
        this.rtoUserDataUrl = "rtoUserData";
        this.isRTOsurveySubmitted = false;
        this.isUpdateAvailable = false;
        this.isUpdateSkipped = false;
        this.showCovidPopup = false;
        this.coronaGuidelinesAlertClosed = false;
        this.isEligibleForCoronaSurvey = false;
        this.isSAAgreement = false;
        this.isSAAgreementSubmitted = false;
        this.isZenDeavorOpened = false;
        //url1: string = "getHTMLParagraph";
        this.param = {
            'type': 'onboarding_welcome'
        };
        // USLeaveDeclaration
        this.showUSLeavePopupClosed = false;
        // Reimbursment Declaration
        this.showUSReimbursmentPopupClosed = false;
        this.applicationList = [];
        this._miscListener = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subscription__["Subscription"]();
        var fromSWitchUser = this.navParam.get('fromSwitchUser');
        if (fromSWitchUser) {
            this.isFingerPrintChecked = fromSWitchUser;
        }
        this.platform.resume.subscribe(function (e) {
            if (_this.forceUpdate && !_this.isPopupVisble && _this.isUpdateAvailable) {
                // this.presentAlert();
                _this.openAppUpdateAlert();
            }
            _this.getNotificationData();
        });
        this.events.subscribe('hide-loader', function (data) {
            _this.utility.updateLoader(false);
            //console.log('Hide loader')
        });
    }
    NewHomePage.prototype.ngOnInit = function () {
        //clear previously stored home data
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store__["_14" /* ResetHomeData */]());
    };
    NewHomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // here we check for the fingerprint auth on ios and android devices
        if (this.utility.platformAvailable()) {
            // check only once when user open the app
            if (!this.isFingerPrintChecked) {
                //check for ios if its available then check
                if (this.platform.is('ios')) {
                    try {
                        this.fingerPrint.isAvailable().then(function (result) {
                            //this.utility.presentAlert("success",JSON.stringify(result));
                            // if avalible then call the function
                            if (result) {
                                _this.showiOSfingerPrint();
                            }
                        })
                            // if not available then catch block will execute
                            .catch(function (error) {
                            // this.utility.presentAlert("error catch",JSON.stringify(error));
                            //console.log('error', error)
                            if (_this.getSet.getNotificationData()) {
                                _this.getNotificationData();
                                _this.isFingerPrintChecked = true;
                                _this.getSet.setValue(_this.isFingerPrintChecked);
                                _this.setRole();
                            }
                            else {
                                _this.getMiscellaneousData();
                                _this.isFingerPrintChecked = true;
                                _this.getSet.setValue(_this.isFingerPrintChecked);
                                _this.setRole();
                            }
                            _this.loading$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_5__store__["_62" /* getMiscLoading */]);
                        });
                    }
                    catch (e) {
                        //this.utility.presentAlert("catch ", JSON.stringify(e));
                        this.utility.presentAlert("Error in fingerprint or faceDetection");
                    }
                }
                else {
                    //check for android  if its available then check
                    this.androidFingerPrint.isAvailable().then(function (response) {
                        // if avalible then call the function
                        if (response.isAvailable) {
                            _this.showfingerPrint();
                        }
                        // if avalible then call the function
                        else if (!response.isAvailable) {
                            if (_this.getSet.getNotificationData()) {
                                _this.getNotificationData();
                                _this.setRole();
                                _this.isFingerPrintChecked = true;
                                _this.getSet.setValue(_this.isFingerPrintChecked);
                            }
                            else {
                                _this.isFingerPrintChecked = true;
                                _this.getSet.setValue(_this.isFingerPrintChecked);
                                _this.getMiscellaneousData();
                                _this.setRole();
                            }
                            _this.loading$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_5__store__["_62" /* getMiscLoading */]);
                        }
                    }) // if not available then catch block will execute
                        .catch(function (error) {
                        //console.log("error", error)
                        if (_this.getSet.getNotificationData()) {
                            _this.getNotificationData();
                            _this.isFingerPrintChecked = true;
                            _this.getSet.setValue(_this.isFingerPrintChecked);
                        }
                        else {
                            _this.getMiscellaneousData();
                            _this.setRole();
                            _this.isFingerPrintChecked = true;
                            _this.getSet.setValue(_this.isFingerPrintChecked);
                        }
                        _this.loading$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_5__store__["_62" /* getMiscLoading */]);
                    });
                }
                // if fingerprint is already checked then else block will exceute
            }
            else {
                this.getMiscellaneousData();
                this.setRole();
                this.loading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__store__["_62" /* getMiscLoading */]);
                this.slides.startAutoplay();
            }
        } //if platform or cordova is not available below function will call
        else {
            this.getMiscellaneousData();
            this.setRole();
            this.loading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__store__["_62" /* getMiscLoading */]);
            this.slides.startAutoplay();
            ///this.slides.slideTo(0)
        }
    };
    // this function will redirect to specific page based on user's selection
    NewHomePage.prototype.goTojobsposting = function () {
        this.navCtrl.push("JobPostingPage", {});
    };
    NewHomePage.prototype.goToMyPage = function (data) {
        if (data.isAvailable) {
            if (data.pageName == '') {
                if (data.isMyLeave) {
                    this.getLeaveDetails();
                }
            }
            else if (data.pageName == 'ProfilePage') {
                this.gotToProfile();
            }
            else if (data.pageName == 'ICSS') {
                this.icss();
            }
            else if (data.pageName == 'SkillPage') {
                this.skillsProfile();
            }
            else if (data.pageName == 'zenwen') {
                this.goToZenwenDashboard();
                //this.utility.presentAlert("Coming soon !!")
            }
            else if (data.pageName == 'ZenLearn') {
                this.LearnDashboard();
                //this.utility.presentAlert("Coming soon !!")
            }
            else if (data.pageName == 'ZenRich') {
                this.navCtrl.push("ZenRichLandingPage");
            }
            else if (data.pageName == 'Manager Dashboard') {
                this.goTojobsposting();
                //this.utility.presentAlert("Coming soon !!")
            }
            else if (data.pageName == 'Zenlounge') {
                this.navCtrl.push("ZenloungePage", {
                    'pageTitle': data.title,
                });
            }
            else if (data.homePageConfigrationName == 'Corona') {
                this.navCtrl.push("CoronaPage", { 'userDetails': this.userDetails });
            }
            else if (data.homePageConfigrationName == 'GatePass') {
                this.getData();
            }
            else if (data.homePageConfigrationName == 'ZenDeavor') {
                this.navCtrl.push("ZenDeavorDashboardPage");
            }
            else if (data.homePageConfigrationName == 'Approval Dashboard') {
                this.navCtrl.push("ApprovalDashboardPage");
            }
            else if (data.homePageConfigrationName == 'ZenTS') {
                // //console.log(this.timeEntryData)
                this.navCtrl.push("TimeEntryPage", {
                    'pageTitle': data.title,
                    'subData': this.timeEntryData
                });
            }
            else if (data.pageName == 'ChatBot') {
                this.navCtrl.push("ChatBotNew");
            }
            else if (data.pageName == 'ChatBotNew') {
                // let modalCtrl = this.mdlCtrl.create(ChatBotPopupComponent, { "userDetails": this.miscData.userDetails }, {
                //   cssClass: 'chatbot-popupCSS',
                //   enableBackdropDismiss: true,
                //   showBackdrop: true
                // })
                // modalCtrl.onDidDismiss((data) => {
                //   if (!this.utility.isEmptyOrNullOrUndefined(data) && !this.utility.isEmptyOrNullOrUndefined(data.moveToChatDetails)) {
                //     this.navCtrl.push("ChatBot", {
                //       data: data.data
                //     })
                //   }
                // })
                // modalCtrl.present();
                this.navCtrl.push('ChatBotNew');
            }
            else if (data.pageName == 'RTODashboard') {
                this.RtoPage();
            }
            else if (data.pageName == 'ZenVerse') {
                this.openApp();
            }
            else if (data.pageName == 'ZenFinance') {
                this.getSet.setUserKey(this.miscData.userKey);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_24__ZenFianance_finance_dashboard_finance_dashboard__["a" /* FinanceDashboardPage */]);
            }
            else if (data.pageName == 'Exit') {
                //this.navCtrl.push('ExitDashboardPage');
                this.goToExitDetails();
            }
            else if (data.pageName == 'ZenAdmin') {
                this.navCtrl.push('ZenadminHomePage');
            }
            // for zenDeavor redirection 
            else {
                this.setPage(data);
                this.navCtrl.push(data.pageName, {
                    'pageTitle': data.title,
                    'unratedQuestion': this.unratedQuestion,
                    'unratedMessage': this.unratedQuestionMessage,
                });
            }
        }
    };
    NewHomePage.prototype.getData = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var params = {};
        var data = {
            url: this.rtoUserDataUrl, data: params, miscellaneous: true
        };
        return new Promise(function (resolve) {
            _this.httpProvider.http.commonService(data).subscribe(function (res) {
                if (res) {
                    _this.userData = res.details;
                    ////console.log(this.userData);
                    _this.utility.updateLoader(false);
                    if (_this.userData.isSignAgreement == true && !_this.userData.isUKLocation && !_this.userData.isUSLocation) {
                        _this.navCtrl.push("GatePassPage", { 'userDetails': _this.userData });
                    }
                    else if (_this.userData.isSignAgreement == true && _this.userData.isUKLocation) {
                        _this.goTogatepassCheck();
                    }
                    else if (_this.userData.isSignAgreement == true && _this.userData.isUSLocation) {
                        _this.goTogatepassCheck();
                    }
                    else {
                        _this.goTogatepassCheck();
                    }
                    // resolve();
                }
            }, function (error) {
                _this.utility.updateLoader(false);
            });
        });
    };
    NewHomePage.prototype.goTogatepassCheck = function () {
        this.navCtrl.push("ReturnToOfficePage", { 'userid': this.userData.userId, 'userDetails': this.userData });
    };
    //convert name to upper case
    NewHomePage.prototype.uppercase = function (name) {
        return this.utility.uppercase(name);
    };
    // this function sets your default role for throughout the application.
    NewHomePage.prototype.setRole = function () {
        var _this = this;
        this.zone.run(function () {
            _this.data.getData('role').then(function (data) {
                if (data) {
                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store__["_19" /* SetRole */](data));
                }
                else {
                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store__["_19" /* SetRole */]('associates'));
                }
            });
        });
        this.cdr.detectChanges();
    };
    // here we call a service and get all the data and showing that data as a home screen
    NewHomePage.prototype.getMiscellaneousData = function () {
        var _this = this;
        ////console.log('getMiscellaneousData')
        if (this.utility.platformAvailable()) {
            this.utility.updateLoader(true);
            this.appVersion.getVersionNumber().then(function (response) {
                var param = {
                    "versionNo": response
                };
                return new Promise(function (resolve) {
                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store__["D" /* GetMiscDataAction */]('getAllTimeUseData', param));
                    try {
                        _this._miscListener = _this.store.select(__WEBPACK_IMPORTED_MODULE_5__store__["_56" /* getHomeState */]).subscribe(function (response) {
                            // if (response) {
                            if (response.data) {
                                _this.applicationList = [];
                                _this.miscData = response.data;
                                _this.userDetails = response.data.userDetails;
                                _this.vaccineDashBoardData = response.data.vaccineDashBoardData;
                                _this.events.publish('userDetails', _this.userDetails);
                                if (response.data.homeBannerList) {
                                    var homebanners_1 = response.data.homeBannerList;
                                    homebanners_1.filter(function (value) {
                                        if (value.homePageName == 'InternalJobPostingPage') {
                                            value.bannerImage = 'assets/menu_icons/ijp.png';
                                        }
                                        else if (value.homePageName == 'Corona') {
                                            value.bannerImage = 'assets/menu_icons/COVID.jpg';
                                        }
                                        else if (value.homePageName == 'ZenDeavorDashboardPage') {
                                            value.bannerImage = 'assets/menu_icons/ZendeavorBanner.jpg';
                                        }
                                        else if (value.homePageName == 'ProfilePage') {
                                            value.bannerImage = 'assets/menu_icons/profile.png';
                                        }
                                        else if (value.homePageName == 'ZencontactsPage') {
                                            value.bannerImage = 'assets/imgs/TAZ-ERT.jpg';
                                        }
                                        else if (value.homePageName == 'ZenRich') {
                                            value.bannerImage = 'assets/imgs/referBanner.JPG';
                                        }
                                        else if (value.homePageName == 'SkillPage') {
                                            value.bannerImage = 'assets/imgs/skillBanner.png';
                                        }
                                        else if (value.homePageName == 'Zencrypt') {
                                            value.bannerImage = 'assets/menu_icons/ZenCryptBanner-new.png';
                                        }
                                        else if (value.homePageName == 'PlasmaDonation') {
                                            value.bannerImage = 'assets/menu_icons/PlasmaDonation.png';
                                        }
                                    });
                                    _this.zone.run(function (res) {
                                        _this.homeBanner = homebanners_1;
                                    });
                                    _this.cdr.detectChanges();
                                }
                                _this.unratedQuestion = response.data.isUnratedQuestionAvailable;
                                _this.unratedQuestionMessage = response.data.unratedQuestionMsg;
                                _this.zone.run(function () {
                                    _this.data.saveData('miscData', response.data);
                                });
                                _this.cdr.detectChanges();
                                _this.utility.updateLoader(false);
                                if (response.data.versionDetails.isForceUpdate) {
                                    _this.forceUpdate = response.data.versionDetails.isForceUpdate;
                                }
                                // new key for skip update
                                if (response.data.versionDetails.isUpdateAvailable) {
                                    _this.isUpdateAvailable = response.data.versionDetails.isUpdateAvailable;
                                }
                                if (response.data.versionDetails.latestwhatsNew) {
                                    _this.whatsNewData = response.data.versionDetails.latestwhatsNew;
                                }
                                if (response.data.versionDetails.latestVersionNo) {
                                    _this.latestUpdateVersion = response.data.versionDetails.latestVersionNo;
                                }
                                if (response.data.isShowCovidPopUp) {
                                    _this.showCovidPopup = response.data.isShowCovidPopUp;
                                }
                                if (response.data.covidPopupHtml) {
                                    _this.coronaGuidelineData = response.data.covidPopupHtml;
                                }
                                if (response.data.isSAAgreement) {
                                    _this.isSAAgreement = response.data.isSAAgreement;
                                }
                                _this.applicationList = response.data.applicationList;
                                if (response.data.zenTSList) {
                                    _this.timeEntryData = response.data.zenTSList;
                                }
                                if (response.data.isEligibleForCoronaSurvey) {
                                    _this.isEligibleForCoronaSurvey = response.data.isEligibleForCoronaSurvey;
                                }
                                if (!_this.isDataAvalible) {
                                    _this.isDataAvalible = true;
                                }
                                // Leave Declration
                                if (response.data.isUsLeavePopup) {
                                    _this.showUSLeavePopup = response.data.isUsLeavePopup;
                                }
                                // Reimbursment Declration
                                if (response.data.isUSReimbursementPopup) {
                                    _this.showUSReimbursmentPopup = response.data.isUSReimbursementPopup;
                                }
                                if (_this.forceUpdate && _this.isUpdateAvailable) {
                                    // this.isFirstTime = false;
                                    // this.presentAlert();
                                    _this.openAppUpdateAlert();
                                    return;
                                }
                                if (_this.isFirstTime) {
                                    // if (this.forceUpdate && this.isUpdateAvailable) {
                                    //   this.isFirstTime = false;
                                    //   // this.presentAlert();
                                    //   this.openAppUpdateAlert()
                                    //   return;
                                    // }
                                    if (!_this.forceUpdate && _this.isUpdateAvailable && !_this.isUpdateSkipped) {
                                        _this.isFirstTime = false;
                                        // this.presentAlert();
                                        _this.openAppUpdateAlert();
                                        return;
                                    }
                                    if (_this.showCovidPopup && !_this.coronaGuidelinesAlertClosed) {
                                        _this.openCoronaGuidelinesAlert();
                                        return;
                                    }
                                    // US leave Popup
                                    if (_this.showUSLeavePopup && !_this.showUSLeavePopupClosed) {
                                        _this.openLeaveDeclrationModal();
                                        return;
                                    }
                                    // US Reimbursment
                                    if (_this.showUSReimbursmentPopup && !_this.showUSReimbursmentPopupClosed) {
                                        _this.openReimbursmentDeclrationModal();
                                        return;
                                    }
                                }
                                // show covid popup
                                if (!_this.isSurveyCompleted) {
                                    if (!_this.forceUpdate && response.data.isEligibleForCoronaSurvey) {
                                        _this.presentInformation();
                                        return;
                                    }
                                }
                                if (!_this.isZenDeavorOpened) {
                                    if (_this.miscData.isPopupVisible) {
                                        _this.isZenDeavorOpened = true;
                                        _this.presentZenDeavorPopup(_this.userDetails);
                                        return;
                                    }
                                }
                                if (_this.isSAAgreement && !_this.isSAAgreementSubmitted) {
                                    _this.openSAComplianceAlert();
                                    return;
                                }
                                //show RTO popup
                                if (!_this.isRTOsurveySubmitted) {
                                    _this.checkRTOData();
                                    return;
                                }
                                // resolve()
                            }
                        }, function (err) {
                            _this.utility.updateLoader(false);
                            ////console.log('Subscriber error block : ' + err)
                        });
                    }
                    catch (error) {
                        ////console.log('try catch error')
                        _this.utility.updateLoader(false);
                    }
                });
            });
        }
        else {
            var param_1 = {
                "versionNo": __WEBPACK_IMPORTED_MODULE_17__constants_constants__["a" /* Constants */].new_version
            };
            return new Promise(function (resolve) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store__["D" /* GetMiscDataAction */]('getAllTimeUseData', param_1));
                _this._miscListener = _this.store.select(__WEBPACK_IMPORTED_MODULE_5__store__["_56" /* getHomeState */]).subscribe(function (response) {
                    // if (response) {
                    if (response.data) {
                        _this.applicationList = [];
                        _this.miscData = response.data;
                        _this.userDetails = response.data.userDetails;
                        _this.vaccineDashBoardData = response.data.vaccineDashBoardData;
                        _this.events.publish('userDetails', _this.userDetails);
                        // if (response.data.homeBannerList) {
                        //   this.homeBanner = response.data.homeBannerList;
                        // }
                        // this.homeBanner = ['assets/menu_icons/ZendeavorBanner.jpg', 'assets/menu_icons/COVID.jpg', 'assets/menu_icons/profile.png', 'assets/menu_icons/ijp.png']
                        // this.mostUsedOffering = response.data.mostUsedOfferingList
                        if (response.data.homeBannerList) {
                            var homebanners_2 = response.data.homeBannerList;
                            homebanners_2.filter(function (value) {
                                if (value.homePageName == 'InternalJobPostingPage') {
                                    value.bannerImage = 'assets/menu_icons/ijp.png';
                                }
                                else if (value.homePageName == 'Corona') {
                                    value.bannerImage = 'assets/menu_icons/COVID.jpg';
                                }
                                else if (value.homePageName == 'ZenDeavorDashboardPage') {
                                    value.bannerImage = 'assets/menu_icons/ZendeavorBanner.jpg';
                                }
                                else if (value.homePageName == 'ProfilePage') {
                                    value.bannerImage = 'assets/menu_icons/profile.png';
                                }
                                else if (value.homePageName == 'ZencontactsPage') {
                                    value.bannerImage = 'assets/imgs/TAZ-ERT.jpg';
                                }
                                else if (value.homePageName == 'ZenRich') {
                                    value.bannerImage = 'assets/imgs/referBanner.JPG';
                                }
                                else if (value.homePageName == 'SkillPage') {
                                    value.bannerImage = 'assets/imgs/skillBanner.png';
                                }
                                else if (value.homePageName == 'Zencrypt') {
                                    value.bannerImage = 'assets/menu_icons/ZenCryptBanner-new.png';
                                }
                                else if (value.homePageName == 'PlasmaDonation') {
                                    value.bannerImage = 'assets/menu_icons/PlasmaDonation.png';
                                }
                            });
                            _this.zone.run(function (res) {
                                _this.homeBanner = homebanners_2;
                            });
                            _this.cdr.detectChanges();
                            ////console.log(this.homeBanner);
                        }
                        _this.unratedQuestion = response.data.isUnratedQuestionAvailable;
                        _this.unratedQuestionMessage = response.data.unratedQuestionMsg;
                        _this.zone.run(function () {
                            _this.data.saveData('miscData', response.data);
                        });
                        _this.cdr.detectChanges();
                        _this.forceUpdate = response.data.versionDetails.isForceUpdate;
                        _this.applicationList = response.data.applicationList;
                        // new key for skip update
                        _this.isUpdateAvailable = response.data.versionDetails.isUpdateAvailable;
                        if (response.data.versionDetails.latestwhatsNew) {
                            _this.whatsNewData = response.data.versionDetails.latestwhatsNew;
                        }
                        if (response.data.versionDetails.latestVersionNo) {
                            _this.latestUpdateVersion = response.data.versionDetails.latestVersionNo;
                        }
                        if (response.data.isShowCovidPopUp) {
                            _this.showCovidPopup = response.data.isShowCovidPopUp;
                        }
                        // Show US leave Popup
                        if (response.data.isUsLeavePopup) {
                            _this.showUSLeavePopup = response.data.isUsLeavePopup;
                        }
                        if (response.data.isUSReimbursementPopup) {
                            _this.showUSReimbursmentPopup = response.data.isUSReimbursementPopup;
                        }
                        if (response.data.covidPopupHtml) {
                            _this.coronaGuidelineData = response.data.covidPopupHtml;
                        }
                        if (response.data.isEligibleForCoronaSurvey) {
                            _this.isEligibleForCoronaSurvey = response.data.isEligibleForCoronaSurvey;
                        }
                        if (response.data.isSAAgreement) {
                            _this.isSAAgreement = response.data.isSAAgreement;
                        }
                        // let applist = response.data.applicationList
                        _this.utility.updateLoader(false);
                        if (response.data.zenTSList) {
                            _this.timeEntryData = response.data.zenTSList;
                        }
                        // if (!this.isDataAvalible) {
                        //   this.isDataAvalible = true;
                        // }
                        if (_this.forceUpdate && _this.isUpdateAvailable) {
                            // this.presentAlert();
                            _this.openAppUpdateAlert();
                            return;
                        }
                        if (_this.isUpdateAvailable && !_this.isUpdateSkipped && !_this.forceUpdate) {
                            // this.presentAlert();
                            _this.openAppUpdateAlert();
                            return;
                        }
                        if (_this.showCovidPopup && !_this.coronaGuidelinesAlertClosed) {
                            // this.presentAlert();
                            _this.openCoronaGuidelinesAlert();
                            return;
                        }
                        // Show US leave popup
                        if (_this.showUSLeavePopup && !_this.showUSLeavePopupClosed) {
                            // this.presentAlert();
                            _this.openLeaveDeclrationModal();
                            return;
                        }
                        // Show US leave popup
                        if (_this.showUSReimbursmentPopup && !_this.showUSReimbursmentPopupClosed) {
                            // this.presentAlert();
                            _this.openReimbursmentDeclrationModal();
                            return;
                        }
                        if (!_this.isSurveyCompleted) {
                            if (!_this.forceUpdate && response.data.isEligibleForCoronaSurvey) {
                                _this.presentInformation();
                                return;
                            }
                        }
                        if (!_this.isZenDeavorOpened) {
                            if (_this.miscData.isPopupVisible) {
                                _this.isZenDeavorOpened = true;
                                _this.presentZenDeavorPopup(_this.userDetails);
                                return;
                            }
                        }
                        if (_this.isSAAgreement && !_this.isSAAgreementSubmitted) {
                            _this.openSAComplianceAlert();
                            return;
                        }
                        if (!_this.isRTOsurveySubmitted) {
                            _this.checkRTOData();
                            return;
                        }
                        // resolve()
                    }
                    // }
                }, function (err) {
                    _this.utility.updateLoader(false);
                });
            });
        }
    };
    // on leaving the page, all the observable will be unsubscribed here
    NewHomePage.prototype.ionViewWillLeave = function () {
        // this.utility.updateLoader(false);
        this._miscListener.unsubscribe();
        this.leaveData.unsubscribe();
        // this._bannerDetailsListener.unsubscribe();
    };
    //show the app update popup, if app update is available
    NewHomePage.prototype.presentAlert = function () {
        var _this = this;
        this.isPopupVisble = true;
        var alert = this.alertCtrl.create({
            enableBackdropDismiss: false,
            title: 'Version Update',
            subTitle: 'App update available',
            buttons: [{
                    text: 'Update now',
                    handler: function () {
                        _this.isPopupVisble = false;
                        if (_this.platform.is('ios')) {
                            _this.utility.openWithSystemBrowser("itms-services://?action=download-manifest&url=https://zenconverse.zensar.com/zenhelpupload/Appstore/Talent@Zensar/ipa/Talent@Zensar.plist");
                        }
                        else {
                            _this.download.downloadDocument("https://zenconverse.zensar.com/zenhelpupload/Appstore//Talent@Zensar/apk/TAZ.apk", true);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    NewHomePage.prototype.ionViewWillUnload = function () {
        if (this._resumeSubscription)
            this._resumeSubscription.unsubscribe();
        this.leaveData.unsubscribe();
    };
    NewHomePage.prototype.setPage = function (data) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store__["_16" /* SetCurrentModule */](data.homePageConfigrationName));
    };
    //
    NewHomePage.prototype.getLeaveDetails = function () {
        var _this = this;
        var param = {
            "source": "leave"
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store__["T" /* MyLeaveAction */]('myLeaveSSO', param));
        // this.loading$ = this.store.select<any>(fromStore.getMyLeaveLoading);
        return new Promise(function (resolve) {
            _this.utility.imageLoader(true);
            _this.leaveData = _this.store.select(__WEBPACK_IMPORTED_MODULE_5__store__["_63" /* getMyLeaveData */]).subscribe(function (response) {
                if (response) {
                    if (response.details) {
                        _this.utility.imageLoader(false);
                        if (response.details.ResponseList.isEligible) {
                            var url = response.details.ResponseList.leaveUrl;
                            _this.utility.openWithSystemBrowser(url);
                        }
                        else {
                            _this.utility.presentAlert(response.details.ResponseList.eligibleMessage);
                        }
                        _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store__["U" /* MyLeaveReset */]());
                        _this.leaveData.unsubscribe();
                    }
                    else {
                        _this.utility.imageLoader(false);
                    }
                }
                else {
                    _this.utility.imageLoader(false);
                }
                // resolve();
            }, function (err) {
                _this.utility.imageLoader(false);
            });
        });
    };
    //TS navigations
    NewHomePage.prototype.goToAprovalDashboard = function () {
        this.navCtrl.push('ApprovalDashboardPage', {});
    };
    NewHomePage.prototype.goToMyAttendance = function () {
        this.navCtrl.push('MyAttendanceTimesheetPage', {});
    };
    // Directly go to skills tab of userprofile page 
    NewHomePage.prototype.skillsProfile = function () {
        this.navCtrl.push('NewProfilePage', {
            'userId': this.userDetails.employeeId,
            'profileType': 'userProfile',
            'formSkills': true
        });
    };
    // Go to profile page with userid & profile type
    NewHomePage.prototype.gotToProfile = function () {
        this.navCtrl.push('NewProfilePage', {
            'userId': this.userDetails.employeeId,
            'profileType': 'userProfile'
        });
    };
    //open chat modal 
    NewHomePage.prototype.goToChatBot = function () {
        this.openChatModal();
    };
    // chat modal with some suggesstions
    NewHomePage.prototype.openChatModal = function () {
        var _this = this;
        var modalCtrl = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_13__components_chat_model_chat_model__["a" /* ChatModelComponent */], { "userDetails": this.miscData.userDetails }, {
            cssClass: 'chatModalCSS',
            enableBackdropDismiss: true,
            showBackdrop: true
        });
        modalCtrl.onDidDismiss(function (data) {
            if (!_this.utility.isEmptyOrNullOrUndefined(data) && !_this.utility.isEmptyOrNullOrUndefined(data.moveToChatDetails)) {
                _this.navCtrl.push("ChatBotNew", {
                    data: data.data
                });
            }
        });
        modalCtrl.present();
    };
    //This function shows fingerprint auth dialog 
    NewHomePage.prototype.showfingerPrint = function () {
        var _this = this;
        this.androidFingerPrint.encrypt({ clientId: __WEBPACK_IMPORTED_MODULE_17__constants_constants__["a" /* Constants */].appName }).then(function (response) {
            // //console.log(response)
            if (response.withBackup) {
                if (_this.getSet.getNotificationData()) {
                    _this.getNotificationData();
                    _this.setRole();
                    _this.isFingerPrintChecked = true;
                    _this.getSet.setValue(_this.isFingerPrintChecked);
                }
                else {
                    _this.getMiscellaneousData();
                    _this.setRole();
                    _this.isFingerPrintChecked = true;
                    _this.getSet.setValue(_this.isFingerPrintChecked);
                }
                _this.loading$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_5__store__["_62" /* getMiscLoading */]);
            }
            else if (response.withFingerprint) {
                if (_this.getSet.getNotificationData()) {
                    _this.getNotificationData();
                    _this.setRole();
                    _this.isFingerPrintChecked = true;
                    _this.getSet.setValue(_this.isFingerPrintChecked);
                }
                else {
                    _this.getMiscellaneousData();
                    _this.setRole();
                    _this.isFingerPrintChecked = true;
                    _this.getSet.setValue(_this.isFingerPrintChecked);
                }
                _this.loading$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_5__store__["_62" /* getMiscLoading */]);
            }
        })
            .catch(function (error) {
            // //console.log(error)
            _this.showfingerPrint();
        });
    };
    NewHomePage.prototype.showiOSfingerPrint = function () {
        var _this = this;
        this.fingerPrint.show({
            clientId: __WEBPACK_IMPORTED_MODULE_17__constants_constants__["a" /* Constants */].appName,
            localizedFallbackTitle: 'Use Pin',
            localizedReason: 'Please authenticate' //Only for iOS
        })
            .then(function (result) {
            //this.utility.presentAlert(JSON.stringify(result))
            ////console.log("success", result)
            if (result == 'Success') {
                if (_this.getSet.getNotificationData()) {
                    _this.getNotificationData();
                    _this.setRole();
                    _this.isFingerPrintChecked = true;
                    _this.getSet.setValue(_this.isFingerPrintChecked);
                }
                else {
                    _this.getMiscellaneousData();
                    _this.setRole();
                    _this.isFingerPrintChecked = true;
                    _this.getSet.setValue(_this.isFingerPrintChecked);
                }
                _this.loading$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_5__store__["_62" /* getMiscLoading */]);
            }
        })
            .catch(function (error) {
            // this.utility.presentAlert(JSON.stringify(error))
            //console.log('error', error)
            if (error.code == -108) {
                _this.showiOSfingerPrint();
            }
        });
    };
    // zenlearn
    NewHomePage.prototype.LearnDashboard = function () {
        this.getSet.setUserData(this.userDetails);
        this.navCtrl.push('ZenLearnDashboardPage', { 'userId': this.userDetails.employeeId, "userData": this.userDetails });
    };
    NewHomePage.prototype.goToBanners = function (data) {
        if (data.homePageName == 'Corona') {
            this.navCtrl.push('ChatBotNew', {
                isComingFromBanner: true
            });
        }
        else if (data.homePageName == "InternalJobPostingPage") {
            this.navCtrl.push('InternalJobPostingPage', {
                'pageTitle': 'Job Openings',
            });
        }
        else if (data.homePageName == "ZenDeavorDashboardPage") {
            this.navCtrl.push('ZenDeavorDashboardPage');
        }
        else if (data.homePageName == 'ProfilePage') {
            this.gotToProfile();
        }
        else if (data.homePageName == 'ZencontactsPage') {
            this.navCtrl.push('NewProfilePage', {
                'userId': parseInt(data.userId),
                'profileType': 'zencontacts'
            });
        }
        else if (data.homePageName == "ZenRich") {
            this.navCtrl.push('ZenRichLandingPage', {
                'pageTitle': 'Job Openings'
            });
        }
        else if (data.homePageName == "SkillPage") {
            this.navCtrl.push('NewProfilePage', {
                'userId': this.userDetails.employeeId,
                'profileType': 'userProfile',
                'formSkills': true
            });
        }
        else if (data.homePageName == "Zencrypt") {
            if (data.isWebsite) {
                this.utility.openWithSystemBrowser(data.websiteUrl);
            }
        }
        else if (data.homePageName == "PlasmaDonation") {
            if (data.isWebsite) {
                this.utility.openWithSystemBrowser(data.websiteUrl);
            }
        }
        // open covid 19 component
        else if (data.bannerName == "VaccinationUpdate") {
            this.navCtrl.push("goToCovidServyPage()");
        }
    };
    NewHomePage.prototype.presentInformation = function () {
        var _this = this;
        //this.navCtrl.push('CovidInformationPage');
        var modal = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_19__components_covid_information_covid_information__["a" /* CovidInformationComponent */], { "userDetails": this.miscData.userDetails }, {
            cssClass: 'infoModal'
        });
        modal.present();
        modal.onDidDismiss(function () {
            _this.isSurveyCompleted = true;
            // added additional condition for SA alert
            if (!_this.isZenDeavorOpened) {
                if (_this.miscData.isPopupVisible) {
                    _this.isZenDeavorOpened = true;
                    _this.presentZenDeavorPopup(_this.userDetails);
                    return;
                }
            }
            if (_this.isSAAgreement && !_this.isSAAgreementSubmitted) {
                _this.openSAComplianceAlert();
                return;
            }
            else {
                // US leave Popup
                if (_this.showUSLeavePopup && !_this.showUSLeavePopupClosed) {
                    _this.openLeaveDeclrationModal();
                    return;
                }
                // US Reimbursment
                if (_this.showUSReimbursmentPopup && !_this.showUSReimbursmentPopupClosed) {
                    _this.openReimbursmentDeclrationModal();
                    return;
                }
                _this.checkRTOData();
            }
        });
    };
    NewHomePage.prototype.icss = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var param = {
            url: 'myLeaveSSO',
            data: {
                source: 'icss'
            },
            miscellaneous: true
        };
        this.httpProvider.http.commonService(param).subscribe(function (response) {
            //console.log(response)
            _this.utility.updateLoader(false);
            if (response && response.details) {
                if (response.details.ResponseList.isEligible) {
                    var url = response.details.ResponseList.leaveUrl;
                    _this.utility.openWithSystemBrowser(url);
                }
                else {
                    _this.utility.presentAlert(response.details.ResponseList.eligibleMessage);
                }
            }
        }, function (error) {
            // console.log(error);
            _this.utility.updateLoader(false);
        });
    };
    //ZenWEN 
    NewHomePage.prototype.goToZenwenDashboard = function () {
        var _this = this;
        this.zone.run(function () {
            _this.data.getData('zenwenLoginDetails').then(function (res) {
                // console.log(res);
                if (res) {
                    _this.navCtrl.push('ZenwenDashboardPage');
                }
                else {
                    _this.utility.presentAlert('Unauthorised Access').then(function () {
                        _this.data.getData('loginDetails').then(function (result) {
                            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store__["S" /* Logout */](result));
                        });
                        _this.data.clearData();
                        _this.app.getRootNav().setRoot('LoginPage');
                    });
                }
            });
        });
        this.cdr.detectChanges();
    };
    NewHomePage.prototype.getNotificationData = function () {
        var _this = this;
        var response = this.getSet.getNotificationData();
        //console.log(response);
        //console.log("response of new home");
        if (response) {
            this.getSet.setNotificationData(null);
            // if data available then set the role and redirect to spefic page
            if (response.role) {
                this.zone.run(function () {
                    _this.data.saveData('role', response.role);
                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store__["_19" /* SetRole */](response.role));
                });
                this.cdr.detectChanges();
            }
            if (response.type == "userProfile") {
                if (response.forSkill || response.forSkill == null) {
                    if (response.forSkill == "true") {
                        response.forSkill = true;
                    }
                    else if (response.forSkill == "false") {
                        response.forSkill = false;
                    }
                    this.navCtrl.push('NewProfilePage', {
                        'userId': response.userId,
                        'profileType': 'userProfile',
                        'formSkills': response.forSkill
                    });
                }
                else {
                    this.gotToProfile();
                }
            }
            else if (response.type == "question") {
                //this.utility.goToPageDetail('DetailPage', response.id, response);
                if (response.role == 'associates') {
                    this.navCtrl.push('DetailPage', {
                        'id': response.id
                    });
                }
                else {
                    this.navCtrl.push('QuestionsPage');
                }
            }
            else if (response.type == "Announcement") {
                this.utility.goToPageDetail('AnnouncementPage', response.id, response);
            }
            else if (response.type == 'Timesheet') {
                this.navCtrl.push("TimeEntryPage", {
                    'isComingfromNotification': {
                        'pageTitle': 'Timesheet Entry',
                        'notificationData': response,
                        'subData': null
                    }
                });
            }
            else if (response.type == 'Approval') {
                this.navCtrl.push("ApprovalDashboardPage");
            }
            else if (response.type == 'TeamCompliance') {
                this.getMiscellaneousData();
            }
            else if (response.type == 'Zenlearn') {
                this.navCtrl.push("DapDetailPage", { 'dapItem': response.id, 'role': response.dapRole, 'userId': response.userId, 'status': response.status, 'isComingFromNotification': true });
            }
            else if (response.type == 'ZenlearnTeamList') {
                this.navCtrl.push("TeamListPage", { 'role': response.dapRole });
            }
            else if (response.type == 'ZenlearnOffering') {
                this.navCtrl.push("ZenLearnDashboardPage", { "userData": this.userDetails });
            }
            else if (response.type == 'ZenRich') {
                if (response.pageName == "ZenrichPage") {
                    this.navCtrl.push(response.pageName, {
                        'getData': {
                            'icon': "https://zentalentapp.zensar.com/fileviewer-zenhelp/zentalent/Icon/UserProfileIcons/Location.svg",
                            'key': response.pageTitle,
                            'parameter': response.status,
                            'type': null,
                            'value': response.pageTitle
                        }
                    });
                }
                else if (response.pageName == "ZenrichRefDetailPage") {
                    this.navCtrl.push(response.pageName, {
                        'referralMappingId': response.id, 'srfNo': ""
                    });
                }
                else if (response.pageName == "ZenRichLandingPage") {
                    if (response.status == "Draft") {
                        this.navCtrl.push(response.pageName, { "fromNotification": true });
                    }
                    else {
                        this.navCtrl.push(response.pageName);
                    }
                }
            }
        }
    };
    NewHomePage.prototype.checkRTOData = function () {
        var _this = this;
        if (this.miscData.isRTO) {
            this.utility.updateLoader(true);
            var params = {};
            var data_1 = {
                url: this.rtoUserDataUrl, data: params, miscellaneous: true
            };
            return new Promise(function (resolve) {
                _this.httpProvider.http.commonService(data_1).subscribe(function (res) {
                    if (res) {
                        _this.isRTOsurveySubmitted = true;
                        _this.userData = res.details;
                        //console.log(this.userData);
                        _this.utility.updateLoader(false);
                        if (_this.userData.isSignAgreement == true && !_this.userData.isUKLocation && !_this.userData.isUSLocation) {
                            _this.navCtrl.push("GatePassPage", { 'userDetails': _this.userData });
                        }
                        else if (_this.userData.isSignAgreement == true && _this.userData.isUKLocation) {
                            _this.goTogatepassCheck();
                        }
                        else if (_this.userData.isSignAgreement == true && _this.userData.isUSLocation) {
                            _this.goTogatepassCheck();
                        }
                        else {
                            _this.navCtrl.push("ReturnToOfficePage", { 'userid': _this.userData.userId, 'userDetails': _this.userData });
                        }
                        // resolve();
                    }
                }, function (error) {
                    _this.utility.updateLoader(false);
                });
            });
        }
    };
    NewHomePage.prototype.RtoPage = function () {
        this.navCtrl.push('RtoHomePage');
    };
    // Open External app
    NewHomePage.prototype.openApp = function () {
        var _this = this;
        var app;
        if (this.platform.is('ios')) {
            app = 'zenverse://';
            ;
            //app= 'fb://'
        }
        else {
            app = 'com.zensar.zenaskapp';
        }
        this.appAvailability.check(app).then(function () {
            if (_this.platform.is('ios')) {
                _this.iab.create(app, '_system');
            }
            else {
                _this.iab.create('android-app://' + app, '_system');
            }
        }).catch(function (error) {
            if (_this.platform.is('ios')) {
                _this.market.open('id1083912884');
            }
            else {
                _this.market.open('com.zensar.zenaskapp');
            }
        });
    };
    // show the app update alert, if app update is available
    NewHomePage.prototype.openAppUpdateAlert = function () {
        var _this = this;
        this.isPopupVisble = true;
        var modalCtrl = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_1__components_app_update_alert_app_update_alert__["a" /* AppUpdateAlertComponent */], { 'showSkipbtn': !this.forceUpdate, 'whatsNewData': this.whatsNewData, 'updateVersion': this.latestUpdateVersion }, {
            cssClass: 'updateAppCSS',
            enableBackdropDismiss: false,
            showBackdrop: true,
        });
        modalCtrl.onDidDismiss(function (data) {
            //console.log("on dismiss response", data)
            if (!_this.utility.isEmptyOrNullOrUndefined(data)) {
                // this.navCtrl.push("ChatBot", {
                //   data: data.data
                // })
                if (data == 'update') {
                    _this.isPopupVisble = false;
                    _this.forceUpdate = false;
                    _this.submitDeviceTypeDetails();
                    if (_this.platform.is('ios')) {
                        _this.utility.openWithSystemBrowser("itms-services://?action=download-manifest&url=https://zenconverse.zensar.com/zenhelpupload/Appstore/Talent@Zensar/ipa/Talent@Zensar.plist");
                    }
                    else {
                        _this.download.downloadDocument("https://zenconverse.zensar.com/zenhelpupload/Appstore//Talent@Zensar/apk/TAZ.apk", true);
                    }
                }
                else if (data == 'skip') {
                    _this.isUpdateSkipped = true;
                    _this.forceUpdate = false;
                    _this.isPopupVisble = false;
                    if (_this.isUpdateSkipped && _this.showCovidPopup) {
                        _this.openCoronaGuidelinesAlert();
                    }
                    if (!_this.isSurveyCompleted) {
                        if (!_this.forceUpdate && _this.isEligibleForCoronaSurvey) {
                            _this.presentInformation();
                            return;
                        }
                    }
                    if (_this.isSAAgreement && !_this.isSAAgreementSubmitted) {
                        _this.openSAComplianceAlert();
                        return;
                    }
                    // US leave Popup
                    if (_this.showUSLeavePopup && !_this.showUSLeavePopupClosed) {
                        _this.openLeaveDeclrationModal();
                        return;
                    }
                    // US Reimbursment
                    if (_this.showUSReimbursmentPopup && !_this.showUSReimbursmentPopupClosed) {
                        _this.openReimbursmentDeclrationModal();
                        return;
                    }
                    //show RTO popup
                    if (!_this.isRTOsurveySubmitted) {
                        _this.checkRTOData();
                        return;
                    }
                }
            }
        });
        modalCtrl.present();
    };
    NewHomePage.prototype.submitDeviceTypeDetails = function () {
        if (this.utility.platformAvailable()) {
            var deviceType = void 0;
            if (this.platform.is('ios')) {
                deviceType = 'ios';
            }
            else if (this.platform.is('android')) {
                deviceType = 'android';
            }
            var param = {
                url: 'submitDeviceTypeDetails',
                data: {
                    "deviceType": deviceType,
                    "versionNumber": this.latestUpdateVersion
                },
                miscellaneous: true
            };
            console.log("params", param);
            this.httpProvider.http.commonService(param).subscribe(function (response) {
                // console.log(response)
            }, function (error) {
                //console.log(error);
                // this.utility.updateLoader(false)
            });
        }
    };
    NewHomePage.prototype.goToExitDetails = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var param = {
            url: 'userDetails',
            data: {},
            zenExit: true
        };
        this.httpProvider.http.commonService(param).subscribe(function (response) {
            //console.log(response);
            _this.utility.updateLoader(false);
            if (response && response.details) {
                if (!response.details.isExitUserEntry) {
                    _this.navCtrl.push("ExitDashboardPage", {
                        data: response.details
                    });
                }
                else {
                    _this.navCtrl.push("ExitDashboardPage");
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    NewHomePage.prototype.openCoronaGuidelinesAlert = function () {
        var _this = this;
        var modalCtrl = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_0__components_corona_safety_measures_alert_corona_safety_measures_alert__["a" /* CoronaSafetyMeasuresAlertComponent */], { 'guidelinesData': this.coronaGuidelineData }, {
            cssClass: 'corona-safetyAlertCss',
            enableBackdropDismiss: true,
            showBackdrop: true,
        });
        modalCtrl.onDidDismiss(function (data) {
            //console.log("on dismiss response", data)
            if (!_this.utility.isEmptyOrNullOrUndefined(data)) {
                if (data == 'dismiss') {
                    _this.coronaGuidelinesAlertClosed = true;
                    // show covid popup
                    if (!_this.isSurveyCompleted) {
                        if (!_this.forceUpdate && _this.isEligibleForCoronaSurvey) {
                            _this.presentInformation();
                            return;
                        }
                    }
                    if (!_this.isZenDeavorOpened) {
                        if (_this.miscData.isPopupVisible) {
                            _this.isZenDeavorOpened = true;
                            _this.presentZenDeavorPopup(_this.userDetails);
                            return;
                        }
                    }
                    if (_this.isSAAgreement && !_this.isSAAgreementSubmitted) {
                        _this.openSAComplianceAlert();
                        return;
                    }
                    // // US leave Popup
                    if (_this.showUSLeavePopup && !_this.showUSLeavePopupClosed) {
                        _this.openLeaveDeclrationModal();
                        return;
                    }
                    // US Reimbursment
                    if (_this.showUSReimbursmentPopup && !_this.showUSReimbursmentPopupClosed) {
                        _this.openReimbursmentDeclrationModal();
                        return;
                    }
                    //show RTO popup
                    if (!_this.isRTOsurveySubmitted) {
                        _this.checkRTOData();
                        return;
                    }
                }
            }
        });
        modalCtrl.present();
    };
    NewHomePage.prototype.openSAComplianceAlert = function () {
        var _this = this;
        var modalCtrl = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_25__components_south_africa_immigration_compliance_south_africa_immigration_compliance__["a" /* SouthAfricaImmigrationComplianceComponent */], { 'userDetails': this.userDetails }, {
            cssClass: 'SA-complianceModalCss',
            enableBackdropDismiss: true,
            showBackdrop: true,
        });
        modalCtrl.onDidDismiss(function (data) {
            //console.log("on dismiss response", data)
            if (!_this.utility.isEmptyOrNullOrUndefined(data)) {
                if (data == 'dismiss') {
                    _this.isSAAgreementSubmitted = true;
                    if (!_this.isSurveyCompleted) {
                        if (!_this.forceUpdate && _this.isEligibleForCoronaSurvey) {
                            _this.presentInformation();
                            return;
                        }
                    }
                    //show RTO popup
                    if (!_this.isRTOsurveySubmitted) {
                        _this.checkRTOData();
                        return;
                    }
                    if (_this.showCovidPopup && !_this.coronaGuidelinesAlertClosed) {
                        _this.openCoronaGuidelinesAlert();
                        return;
                    }
                }
            }
        });
        modalCtrl.present();
    };
    NewHomePage.prototype.gotoAdmin = function () {
        this.navCtrl.push('ZenadminHomePage');
    };
    NewHomePage.prototype.presentZenDeavorPopup = function (userDetails) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: userDetails.popupHeader,
            enableBackdropDismiss: false,
            message: "" + userDetails.popupBody,
            cssClass: "zenDeavorPopup",
            buttons: [
                {
                    text: userDetails.button2Caption,
                    role: 'cancel',
                    handler: function () {
                        if (_this.isSAAgreement && !_this.isSAAgreementSubmitted) {
                            _this.openSAComplianceAlert();
                            return;
                        }
                        // US leave Popup
                        if (_this.showUSLeavePopup && !_this.showUSLeavePopupClosed) {
                            _this.openLeaveDeclrationModal();
                            return;
                        }
                        // US Reimbursment
                        if (_this.showUSReimbursmentPopup && !_this.showUSReimbursmentPopupClosed) {
                            _this.openReimbursmentDeclrationModal();
                            return;
                        }
                        //show RTO popup
                        if (!_this.isRTOsurveySubmitted) {
                            _this.checkRTOData();
                            return;
                        }
                    }
                },
                {
                    text: userDetails.button1Caption,
                    handler: function () {
                        _this.navCtrl.push("ZenDeavorKraPage", {
                            userID: userDetails.employeeId,
                            role: userDetails.role,
                            kraType: userDetails.processType,
                            isComingFromHome: true
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    // Open Leave Declration Popup
    NewHomePage.prototype.openLeaveDeclrationModal = function () {
        var _this = this;
        var modalCtrl = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_26__components_leave_declaration_leave_declaration__["a" /* LeaveDeclarationComponent */], {}, {
            cssClass: 'leave-declration',
            enableBackdropDismiss: false,
            showBackdrop: true,
        });
        modalCtrl.onDidDismiss(function (data) {
            _this.showUSLeavePopupClosed = true;
            if (_this.showUSReimbursmentPopup && !_this.showUSReimbursmentPopupClosed) {
                setTimeout(function () {
                    _this.openReimbursmentDeclrationModal();
                }, 200);
            }
        });
        modalCtrl.present();
    };
    // Open Reimbursment Declration Popup
    NewHomePage.prototype.openReimbursmentDeclrationModal = function () {
        var _this = this;
        var modalCtrl = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_27__components_reimbursment_declaration_reimbursment_declaration__["a" /* ReimbursmentDeclarationComponent */], {}, {
            cssClass: 'reimburstment-declration',
            enableBackdropDismiss: false,
            showBackdrop: true,
        });
        modalCtrl.onDidDismiss(function (data) {
            _this.showUSReimbursmentPopupClosed = true;
            console.log('Modal Dismiss of reimbursment');
        });
        this.zone.run(function () {
            modalCtrl.present();
        });
        this.cdr.detectChanges();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["D" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["D" /* Slides */])
    ], NewHomePage.prototype, "slides", void 0);
    NewHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-new-home',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\new-home\new-home.html"*/'<ion-header>\n    <ion-navbar class="navbar">\n\n\n        <button ion-button icon-only menuToggle>\n      <!-- <ion-icon name="menu"></ion-icon> -->\n      <img class="menu-icon" src="assets/icon/dashboard-icons/menu-icon.svg" class="icon-texure">\n    </button>\n        <ion-title>Home</ion-title>\n    </ion-navbar>\n    <ion-toolbar>\n        <div class="home-banner" *ngIf="homeBanner && homeBanner?.length">\n            <!-- loop="true" is removed add if needed -->\n            <ion-slides slidesPerView="1.2" centeredSlides="true" pager autoplay=\'false\' speed="800">\n                <ion-slide class="bannerSlide" *ngFor="let banner of homeBanner; index as i">\n                    <!-- (click)="getBannerDetails(banner.bannerId,banner.bannerName)" -->\n                    <div *ngIf="banner.bannerName != \'VaccinationUpdate\'" >\n                        <img (click)="goToBanners(banner)" [src]="banner.bannerImage" class="bannerImg" onError="this.src=\'assets/imgs/dummy-banner.jpeg\'">\n                    </div>\n                    <div *ngIf="banner.bannerName == \'VaccinationUpdate\'" >\n                        <vaccination-graph [graphData]="vaccineDashBoardData"[userDetails]="userDetails"></vaccination-graph>\n                    </div>\n                </ion-slide>\n            </ion-slides>\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content style="min-height:\'58vh\'">\n\n    <ion-slides class="menu-slide-head slideBackground" [pager]="applicationList?.length > 1 ">\n        <ion-slide *ngFor="let data of applicationList;let i=index">\n            <div *ngIf="data.length > 0" class="height-58vh">\n                <div *ngIf="data.length > 0" class="grid-col-3">\n\n                    <!-- comment ChatBotNew while building start -->\n                    <!-- <div (click)="goToMyPage({pageName:\'ChatBotNew\',isAvailable:true})" class="grid-item flex-dir-col-center"\n            [ngClass]="ChatBot">\n            <div>\n              <img src="assets/icon/dashboard-icons/zeno.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image">\n            </div>\n\n            <div class="icon-name" [innerHTML]="\'Zeno New\'">\n            </div>\n          </div> -->\n                    <!-- comment ChatBotNew while building end -->\n\n                    <div (click)="goToMyPage(item)" *ngFor="let item of data" [class.disable]="!item.isAvailable" class="grid-item flex-dir-col-center" [ngClass]="item.pageName">\n                        <div>\n                            <span>\n                <img class="newIconSize" *ngIf="item.isNew" src="assets/imgs/Tag.svg" />\n              </span>\n                            <img *ngIf="item.pageName == \'QuestionsPage\'" src="assets/icon/dashboard-icons/AskQuestions.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'SkillPage\'" src="assets/icon/dashboard-icons/SkillManagement.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'ZenDeavorDashboardPage\'" src="assets/icon/dashboard-icons/ZenDeavor.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'InternalJobPostingPage\'" src="assets/icon/dashboard-icons/JobOpportunities.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'\'" src="assets/icon/dashboard-icons/MyLeaves.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'ZencontactsPage\'" src="assets/icon/dashboard-icons/Zencontacts.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'FaqPage\'" src="assets/icon/dashboard-icons/FAQs.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'AnnouncementPage\'" src="assets/icon/dashboard-icons/Announcements.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'TimeEntryPage\'" src="assets/icon/dashboard-icons/TimeEntry.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'ApprovalDashboardPage\'" src="assets/icon/dashboard-icons/Approvals.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'AdditionalHoursPage\'" src="assets/icon/dashboard-icons/AdditionalHours.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'MyAttendanceTimesheetPage\'" src="assets/icon/dashboard-icons/MyTimesheets.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'Zenlounge\'" src="assets/icon/dashboard-icons/zenlounge.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'ZenLearn\'" src="assets/icon/dashboard-icons/zenlearn.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'Corona\'" src="assets/icon/dashboard-icons/coronaIcon.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'ICSS\'" src="assets/icon/dashboard-icons/icss.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'zenwen\'" src="assets/icon/dashboard-icons/ZenWen.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'Manager Dashboard\'" src="assets/icon/dashboard-icons/manager.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'GatePass\'" src="assets/icon/dashboard-icons/gatepass.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'ChatBot\'" src="assets/icon/dashboard-icons/NewZeno.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'ChatBotNew\'" src="assets/icon/dashboard-icons/NewZeno.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'RTODashboard\'" src="assets/icon/dashboard-icons/RTO-dashboard.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'ZenVerse\'" src="assets/icon/dashboard-icons/Zenverse.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'ZenRich\'" src="assets/icon/dashboard-icons/zenrich-icon.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'Exit\'" src="assets/icon/dashboard-icons/Zen-Exit.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'ZenAdmin\'" src="assets/icon/dashboard-icons/zenadmin.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img *ngIf="item.pageName == \'ZenFinance\'" src="assets/icon/dashboard-icons/ZenFinance.svg" onerror="this.src=\'assets/imgs/blank.png\'" class="image" />\n                            <img src="assets/imgs/Icontexture.png" onerror="this.src=\'assets/imgs/blank.png\'" class="icon-texture" />\n\n                        </div>\n                        <div class="icon-name" [innerHTML]="item.title">\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ion-slide>\n    </ion-slides>\n\n\n\n\n</ion-content>\n\n<ion-footer>\n    <div (click)="goToChatBot()">\n        <img class="zeno-img" src="assets/imgs/chatbot2.svg" />\n    </div>\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\new-home\new-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["C" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* Data */], __WEBPACK_IMPORTED_MODULE_8__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["B" /* Platform */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_market__["a" /* Market */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_12__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_screenshot_ngx__["a" /* Screenshot */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_android_fingerprint_auth__["a" /* AndroidFingerprintAuth */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Events */], __WEBPACK_IMPORTED_MODULE_18__providers_getterSetter_getterSetter__["a" /* GetterSetter */],
            __WEBPACK_IMPORTED_MODULE_20__providers_download_download__["a" /* Download */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_21__ionic_native_browser_tab__["a" /* BrowserTab */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_23__ionic_native_app_availability__["a" /* AppAvailability */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectorRef"]])
    ], NewHomePage);
    return NewHomePage;
}());

//# sourceMappingURL=new-home.js.map

/***/ })

});
//# sourceMappingURL=98.js.map