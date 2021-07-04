webpackJsonp([122],{

/***/ 1435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZenLearnDashboardPageModule", function() { return ZenLearnDashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zen_learn_dashboard__ = __webpack_require__(1857);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ZenLearnDashboardPageModule = /** @class */ (function () {
    function ZenLearnDashboardPageModule() {
    }
    ZenLearnDashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zen_learn_dashboard__["a" /* ZenLearnDashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zen_learn_dashboard__["a" /* ZenLearnDashboardPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__zen_learn_dashboard__["a" /* ZenLearnDashboardPage */]]
        })
    ], ZenLearnDashboardPageModule);
    return ZenLearnDashboardPageModule;
}());

//# sourceMappingURL=zen-learn-dashboard.module.js.map

/***/ }),

/***/ 1857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZenLearnDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constants__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_topics_alert_topics_alert__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dap_alert_dap_alert__ = __webpack_require__(782);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ZenLearnDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZenLearnDashboardPage = /** @class */ (function () {
    function ZenLearnDashboardPage(navCtrl, navParams, utility, httpProvider, mdlCtrl, events2, zone, cd, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.mdlCtrl = mdlCtrl;
        this.events2 = events2;
        this.zone = zone;
        this.cd = cd;
        this.alertCtrl = alertCtrl;
        this.coursesName = ["Recommendations", "enrolled"];
        this.slidePerView = "1.2";
        this.toogleCourseHeading = true;
        this.highlightField = false;
        this.isLike = false;
        this.isDisLike = false;
        this.selYear = '';
        if (this.navParams.get('paramsFromChatBot')) {
            this.highlightField = this.navParams.get('paramsFromChatBot').highlightField;
        }
        this.userData = this.navParams.get('userData');
        this.selectedCourse = this.coursesName[0];
        this.events2.subscribe('selecetedItem', function (data) {
            //console.log(data); // 
            _this.selectedCourse = data;
        });
        //this.getDashboardData();
    }
    ZenLearnDashboardPage.prototype.ngOnInit = function () {
    };
    ZenLearnDashboardPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.selectedCourse = this.coursesName[0];
        this.toogleCourseHeading = true;
        this.events2.subscribe('selecetedItem', function (data) {
            //console.log(data); // 
            _this.selectedCourse = data;
        });
        this.getDashboardData();
    };
    ZenLearnDashboardPage.prototype.ionViewDidLoad = function () {
        //console.log("ionViewDidLoad ZenLearnDashboardPage");
        this.resolve = this.navParams.get('resolve');
    };
    ZenLearnDashboardPage.prototype.goToSlide = function () {
        this.slider.slideTo(0);
    };
    ZenLearnDashboardPage.prototype._selecteCoures = function (selectedCourse) {
        var selectedValue;
        if (selectedCourse == 'Recommendations') {
            selectedValue = 'dapCourses';
        }
        else {
            selectedValue = selectedCourse;
        }
        this.toogleCourseHeading = !this.toogleCourseHeading;
        this.selectedCourse = selectedCourse;
        var segmentData = this.zenLearnData[selectedValue];
        this.segmentlearnData = '';
        this.segmentlearnData = segmentData;
        this.slider.slideTo(0);
        //  this.slides.slideTo(0);
        //this.slider.startAutoplay();
        // this.zone.run(() => {
        //   let segmentData = this.zenLearnData[selectedValue];
        //    this.segmentlearnData = segmentData;
        //    this.cd.detectChanges();
        // });
        // this.getDashboardData()
    };
    // ngOnChanges(){
    // }
    ZenLearnDashboardPage.prototype.getDashboardData = function () {
        var _this = this;
        var url = "getLandingPageDetails";
        var data = {};
        this.utility.updateLoader(true);
        this.httpProvider.http
            .commonService({ url: url, data: data, zenLearn: true })
            .subscribe(function (res) {
            if (!_this.utility.isEmptyOrNullOrUndefined(res) && !_this.utility.isEmptyOrNullOrUndefined(res.details)) {
                setTimeout(function () {
                    _this.highlightField = false;
                }, 8000);
                _this.zenLearnData = res.details.responseList;
                _this.yearList = _this.zenLearnData.yearList;
                try {
                    _this.selYear = _this.yearList[0];
                }
                catch (e) {
                    // Show alert message if needed
                }
                _this.segmentlearnData = _this.zenLearnData.dapCourses;
                setTimeout(function () {
                    _this.highlightField = false;
                }, 5000);
                _this.learningHistory = _this.zenLearnData.learningHistory;
                _this.dapCardData = _this.zenLearnData.dap;
                _this.midCartData = _this.zenLearnData.midCart.cartItems;
                _this.leaderCardData = _this.zenLearnData.leaderBoard;
                _this.enrolledCardData = _this.zenLearnData.enrolledCourses.detailList;
                _this.utility.updateLoader(false);
                if (_this.zenLearnData.showPreferencePopup) {
                    _this.openTopicsPref(true);
                }
                if (_this.zenLearnData.showFeedbackPage == true) {
                    var fromDashboard = true;
                    _this.navCtrl.push("ZenLearnRatingPage", { fromDashboard: fromDashboard });
                }
            }
            else {
                _this.utility.updateLoader(false);
                _this.utility.showAlert('ZenLearn-DashBoard', __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Constants */]["erroMessageFor No Data"]);
            }
        }, function (err) {
            _this.utility.updateLoader(false);
            _this.utility.showAlert('ZenLearn-DashBoard', __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Constants */]["erroMessageFor No Data"]);
        });
    };
    //************* Method for redirecting DAP pages***************/
    ZenLearnDashboardPage.prototype.goToDetailPage = function (pageTitle, role, item, slideData) {
        if (pageTitle == "My DAP") {
            // this.navCtrl.push("MyDapPage", { 'role': 'associate' })
            this.navCtrl.push('MyDaplistPage', { 'role': 'Associate' });
        }
        else if (pageTitle == "DAP") {
            this.openDapAlert(item);
        }
        else if (pageTitle == "Preferences") {
            this.openTopicsPref(false);
        }
        else if (pageTitle == "Mentorship") {
            this.navCtrl.push("MenteeListPage", { "userData": this.userData });
        }
        else if (pageTitle == "Learning Calendar") {
            this.showCalender("recommended");
        }
        else if (pageTitle == "More Recommendations") {
            this.goToALlCourses();
        }
        else if (pageTitle == "Need Action") {
            this.navCtrl.push("TeamListPage");
        }
        else if (pageTitle == "Create New") {
            this.navCtrl.push("CreateDapPage");
        }
        else if (pageTitle == "Team List") {
            this.navCtrl.push("TeamListPage", { 'role': role });
        }
        else if (item.title == 'Technical') {
            this.utility.openWithSystemBrowser(item.urlValue);
        }
        else if (item.title == 'Behavioural') {
            this.utility.openWithSystemBrowser(item.urlValue);
        }
        else if (slideData.title == "Fresher") {
            this.utility.openWithSystemBrowser(item.urlValue);
        }
    };
    ZenLearnDashboardPage.prototype.likeDislike = function (clickType, index, value, courseId) {
        var _this = this;
        var actionFlag;
        if (clickType == 'like') {
            if (value == 1) {
                this.segmentlearnData[index].isLike = 0;
                actionFlag = 0;
            }
            else if (value == 0) {
                this.segmentlearnData[index].isLike = 1;
                actionFlag = 1;
            }
            if (value == -1) {
                this.segmentlearnData[index].isLike = 1;
                actionFlag = 1;
            }
        }
        else if (clickType == 'dislike') {
            if (value == -1) {
                this.segmentlearnData[index].isLike = 0;
                actionFlag = 0;
            }
            else if (value == 0) {
                this.segmentlearnData[index].isLike = -1;
                actionFlag = -1;
            }
            if (value == 1) {
                this.segmentlearnData[index].isLike = -1;
                actionFlag = -1;
            }
        }
        var url = "likeOrDislike";
        var data = {
            courseId: courseId,
            action: actionFlag
        };
        this.utility.updateLoader(true);
        this.httpProvider.http
            .commonService({ url: url, data: data, zenLearn: true })
            .subscribe(function (res) {
            _this.utility.updateLoader(false);
        }, function (err) {
            _this.utility.updateLoader(false);
            _this.utility.showAlert('ZenLearn-DashBoard', __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Constants */]["erroMessageFor No Data"]);
        });
    };
    ZenLearnDashboardPage.prototype.allOffering = function (selectedCourse) {
        var showAllFilters = true;
        if (this.utility.isEmptyOrNullOrUndefined(selectedCourse)) {
            selectedCourse = this.selectedCourse;
            showAllFilters = false;
        }
        this.navCtrl.push("CourseListPage", { selectedCourse: selectedCourse, showAllFilters: showAllFilters, filterYear: this.selYear });
    };
    ZenLearnDashboardPage.prototype.goToEnrolled = function () {
        var showAllFilters = false;
        this.navCtrl.push("CourseListPage", { selectedCourse: this.selectedCourse, showAllFilters: showAllFilters });
    };
    ZenLearnDashboardPage.prototype.showCalender = function (selectedCourse) {
        var showAllFilters = true;
        if (this.utility.isEmptyOrNullOrUndefined(selectedCourse)) {
            selectedCourse = this.selectedCourse;
            showAllFilters = false;
        }
        this.navCtrl.push("CalendarPage", { selectedCourse: selectedCourse, showAllFilters: showAllFilters });
    };
    ZenLearnDashboardPage.prototype.offeringDetail = function (selectedCourse) {
        this.navCtrl.push("OfferingDetailsPage", { selectedCourse: selectedCourse });
    };
    ZenLearnDashboardPage.prototype.goToALlCourses = function () {
        this.navCtrl.push("AllCourseListPage");
    };
    ZenLearnDashboardPage.prototype.dap = function () {
        this.navCtrl.push('MyDaplistPage');
    };
    ZenLearnDashboardPage.prototype.ionViewWillLeave = function () {
        if (this.resolve) {
            this.resolve();
        }
    };
    ZenLearnDashboardPage.prototype.openTopicsPref = function (showPreferencePopup) {
        var _this = this;
        var modalCtrl = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_topics_alert_topics_alert__["a" /* TopicsAlertComponent */], { 'showPref': showPreferencePopup }, {
            cssClass: 'topics-alert',
            enableBackdropDismiss: true,
            showBackdrop: true,
        });
        modalCtrl.onDidDismiss(function (data) {
            if (data) {
                _this.goToALlCourses();
            }
        });
        modalCtrl.present();
    };
    ZenLearnDashboardPage.prototype.openDapAlert = function (data) {
        var _this = this;
        var modalCtrl = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_dap_alert_dap_alert__["a" /* DapAlertComponent */], { 'data': data }, {
            cssClass: 'dap-alert',
            enableBackdropDismiss: true,
            showBackdrop: false,
        });
        modalCtrl.onDidDismiss(function (data) {
            if (data == "Dap") {
                _this.navCtrl.push("MyDaplistPage", { 'role': 'Associate' });
            }
            else if (data == "Team") {
                _this.navCtrl.push("TeamListPage", { 'role': 'manager' });
            }
            else if (data == "Mentorship") {
                _this.navCtrl.push("MenteeListPage");
            }
        });
        modalCtrl.present();
    };
    ZenLearnDashboardPage.prototype.goToMyDapList = function (dapType) {
        this.navCtrl.push('MyDaplistPage', { 'role': 'Associate', 'dapType': dapType });
    };
    ZenLearnDashboardPage.prototype.goToEnrolledCourses = function (type, value) {
        if (value > 0) {
            var showAllFilters = false;
            this.navCtrl.push("CourseListPage", { selectedCourse: 'enrolled', showAllFilters: showAllFilters, learningType: type });
        }
    };
    // Display Financial years
    ZenLearnDashboardPage.prototype.openFinancialYears = function () {
        this.openFinancialAlert();
    };
    ZenLearnDashboardPage.prototype.openFinancialAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Financial Year');
        this.yearList.map(function (val) {
            alert.addInput({
                type: 'radio',
                label: val,
                value: val,
                checked: _this.selYear == val
            });
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.selYear = data;
                _this.getLearningYearHistory();
            }
        });
        alert.present();
    };
    // Get Learning History
    ZenLearnDashboardPage.prototype.getLearningYearHistory = function () {
        var _this = this;
        var url = "learningYearHistory";
        var data = {
            type: "Technical",
            start: 0,
            end: 10,
            itemType: "",
            learningMode: "Classroom,Online,V Learn",
            filterYear: this.selYear.toString()
        };
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService({ url: url, data: data, zenLearn: true })
            .subscribe(function (res) {
            if (!_this.utility.isEmptyOrNullOrUndefined(res) && !_this.utility.isEmptyOrNullOrUndefined(res['details'])) {
                _this.utility.updateLoader(false);
                _this.learningHistory = res['details'].responseList;
            }
            else {
                _this.utility.updateLoader(false);
                _this.utility.showAlert('ZenLearn-DashBoard', __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Constants */]["erroMessageFor No Data"]);
            }
        }, function (err) {
            _this.utility.updateLoader(false);
            _this.utility.showAlert('ZenLearn-DashBoard', __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Constants */]["erroMessageFor No Data"]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* Slides */])
    ], ZenLearnDashboardPage.prototype, "slider", void 0);
    ZenLearnDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-zen-learn-dashboard",template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\zen-learn-dashboard\zen-learn-dashboard.html"*/'<!--\n  Generated template for the ZenLearnDashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>ZenLearn Dashboard</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div *ngIf="zenLearnData">\n        <div class="dashboard-title">\n            <div class="dash-img-parent">\n                <img class="dash-img" src="assets/zenLearn-imgs/dashboard-interface.svg" onerror="this.src=\'./assets/imgs/logo.png\'" />\n\n            </div>\n            <div class="dash-title">Dashboard</div>\n        </div>\n\n        <!-- Dashboard slider-->\n\n        <ion-slides class="height-auto" [slidesPerView]="slidePerView">\n            <!-- learning-card -->\n            <ion-slide>\n                <ion-card class="progresscard-border height200">\n                    <div>\n                        <div class="profile-picture bgLearningHrsBgCard">\n                            <span class="padding2per">\n                <img class="profileImg" src="assets/zenLearn-imgs/DAP-icon.svg"\n                  onerror="this.src=\'./assets/imgs/logo.png\'" />\n              </span>\n\n                            <div style="\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n">\n                                <span class="profile-heading colorWhite">{{learningHistory?.title ? learningHistory?.title : "Learning Summary"}}</span>\n                                <div class="finance-year-container" (click)="openFinancialYears()">\n                                    <p class="financial-year-selector">{{selYear ? "FY " + selYear : \'Select year\'}}</p>\n                                    <img src="assets/zenAdmin/down-arrow.svg" class="drop-down-img">\n                                </div>\n                            </div>\n                        </div>\n                        <div class="container-card">\n                            <div class="learning-card" *ngFor="let item of learningHistory?.learningList" (click)="allOffering(item.type)">\n                                <div class="learning-icon"> <span><img class="icon-header" [src]=item?.icon\n                      onerror="this.src=\'./assets/imgs/logo.png\'" /></span></div>\n                                <div class="flex-column-center width88per padding0-5">\n                                    <div class=" width100per">\n                                        <span class="justify-content-space-btw width100per">\n                      <span class="center font-1p2 learn-sum-title">{{item.title}}</span>\n                                        <span class="center">\n                        <span class="lerning-pecent-value font-bold">{{item.percentage}}%</span>\n                                        <span class="lerning-hr">{{item.totalCreditHrs}} Hrs</span>\n                                        <ion-icon class="padding-left12" end name="ios-arrow-forward"></ion-icon>\n                                        </span>\n                                        </span>\n                                    </div>\n                                    <div class="progress-outer">\n                                        <div class="progress-inner" [ngStyle]="{\'background-color\':\'#01C275\',\'width\':item.percentage +\'%\'}">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf="!learningHistory" class="nodata">No Data Available</div>\n\n                        </div>\n                    </div>\n                </ion-card>\n            </ion-slide>\n\n            <!-- Dap Card -->\n            <ion-slide>\n                <ion-card class="progresscard-border height200">\n                    <div class="profile-picture bgDAPImgCard">\n                        <span class="padding2per">\n              <img class="profileImg" src="assets/zenLearn-imgs/DAP-icon.svg"\n                onerror="this.src=\'./assets/imgs/logo.png\'" />\n            </span>\n                        <span class="profile-heading colorWhite">{{dapCardData?.title}}</span>\n                    </div>\n                    <div class="dap-lowerCard-container">\n                        <div class="dap-item font12">\n                            <div class="dap-data dap-headerbg colorWhite">Trainings</div>\n                            <div class="trainings-title behavioral-title" (click)="goToMyDapList(\'Technical\')">\n                                <div class="dap-name">Technical</div>\n                            </div>\n                            <div class="trainings-title technical-title" (click)="goToMyDapList(\'Behavioural\')">\n                                <div class="dap-name"> Behavioural</div>\n                            </div>\n                            <div class="trainings-title total-title" (click)="goToMyDapList(\'\')">\n                                <div class="dap-name">Total</div>\n                            </div>\n                        </div>\n                        <div class="dap-item" *ngFor="let item of dapCardData.dapDetails">\n                            <div class="dap-data dap-headerbg colorWhite">{{item.key}}</div>\n                            <div class="dap-data dap_row{{i}}" *ngFor="let dapItem of item.value; index as i">\n                                <!-- <div class="dap-name">{{dapItem.key}}</div> -->\n                                <div class="dap-value">{{dapItem.value}}</div>\n                            </div>\n                        </div>\n\n                    </div>\n                </ion-card>\n            </ion-slide>\n            <!-- Leader Board Card -->\n            <!-- <ion-slide>\n        <ion-card class="progresscard-border height200">\n          <div class="profile-picture bgLeaderBoardImgCard">\n            <span class="padding2per">\n              <img class="profileImg" src="assets/zenLearn-imgs/leaderBoard-icon.svg"\n                onerror="this.src=\'./assets/imgs/logo.png\'" />\n            </span>\n            <span class="profile-heading colorWhite">Leader Board</span>\n          </div>\n          <div class="dap-container">\n            <div class="dap-item">\n              <div class="score-parent">\n                <div><img class="yourScore-img" src="assets/zenLearn-imgs/yourScoreIcon.svg"\n                    onerror="this.src=\'./assets/imgs/logo.png\'" />\n                </div>\n                <div class="yourScore-title">Your Score</div>\n              </div>\n\n              <div class="leaderBoard-lowerCard-parent">\n                <div class="leaderboard-data-card {{dapItem.key}}" *ngFor="let dapItem of leaderCardData">\n                  <span class="leaderBoard-score-value ">{{dapItem.value | number}}</span>\n                  <span class="leaderBoard-score-key"\n                    [ngClass]="{\'lightBlue-color\': dapItem.key == \'Technical\', \'lightGreen-color\': dapItem.key == \'Behavioural\',\'lightPurple-color\': dapItem.key == \'Total\'}">{{dapItem.key}}</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-card>\n      </ion-slide> -->\n            <!-- Enrolled Courses Card -->\n            <ion-slide>\n                <ion-card class="progresscard-border height200">\n                    <div class="profile-picture bgEnrolledImgCard">\n                        <span class="padding2per">\n              <img class="profileImg" src="assets/zenLearn-imgs/enrolledCourses-icon.svg"\n                onerror="this.src=\'./assets/imgs/logo.png\'" />\n            </span>\n                        <span class="profile-heading colorWhite">Enrolled Courses</span>\n                    </div>\n\n                    <div class="enrolledData">\n\n                        <img class="enrolledCount-img" src="assets/zenLearn-imgs/enrolledCourses-count-icon.svg" onerror="this.src=\'./assets/imgs/logo.png\'" />\n                        <div class="enrolledCount-title">Total: {{enrolledCardData[2]?.value}}</div>\n                    </div>\n                    <div class="enrolledData-container">\n\n                        <div class="technical-course-container" (click)="goToEnrolledCourses(enrolledCardData[0]?.key,enrolledCardData[0]?.value)">\n                            <div class="technicalImg-parent">\n                                <img class="tecnicalImg" src="assets/zenLearn-imgs/technical.svg" onerror="this.src=\'./assets/imgs/logo.png\'" />\n\n                            </div>\n                            <div class="course-hrs-container">\n                                <span>{{enrolledCardData[0]?.key}}</span>\n                                <span>{{enrolledCardData[0]?.value}}</span>\n                            </div>\n                        </div>\n                        <div class="behavioural-course-container" (click)="goToEnrolledCourses(enrolledCardData[1]?.key,enrolledCardData[1]?.value)">\n                            <div class="technicalImg-parent">\n                                <img class="behaviouralImg" src="assets/zenLearn-imgs/behavioural.svg" onerror="this.src=\'./assets/imgs/logo.png\'" />\n\n                            </div>\n                            <div class="course-hrs-container lightGreen-color">\n                                <span>{{enrolledCardData[1]?.key}}</span>\n                                <span>{{enrolledCardData[1]?.value}}</span>\n                            </div>\n                        </div>\n\n                    </div>\n                </ion-card>\n            </ion-slide>\n        </ion-slides>\n\n        <div class="mid-slider">\n            <ion-slides class="height-auto" [slidesPerView]="2.2">\n                <!-- learning-card -->\n                <ion-slide *ngFor="let item of midCartData">\n                    <div class="midcart-item {{item?.title}}" (click)="goToDetailPage(item?.title, \'\',item)">\n                        <span class="padding2per">\n              <!-- <img class="profile-round" [src]=item?.icon onerror="this.src=\'./assets/imgs/logo.png\'" /> -->\n              <img class="cartImg" src="assets/zenLearn-imgs/myDap.svg" onerror="this.src=\'./assets/imgs/logo.png\'"\n                *ngIf="item?.title==\'DAP\' || item?.title==\'My DAP\'" />\n              <img class="cartImg" src="assets/zenLearn-imgs/calender.svg" onerror="this.src=\'./assets/imgs/logo.png\'"\n                *ngIf="item?.title==\'Learning Calendar\'" />\n              <img class="cartImg" src="assets/zenLearn-imgs/preference.svg" onerror="this.src=\'./assets/imgs/logo.png\'"\n                *ngIf="item?.title==\'Preferences\'" />\n              <img class="cartImg" src="assets/zenLearn-imgs/mentorship.svg" onerror="this.src=\'./assets/imgs/logo.png\'"\n                *ngIf="item?.title==\'Mentorship\'" />\n              <img class="cartImg" src="assets/zenLearn-imgs/All_Courses_Icon.svg"\n                onerror="this.src=\'./assets/imgs/logo.png\'" *ngIf="item?.title==\'More Recommendations\'" />\n            </span>\n                        <div class="midcart-heading colorWhite">{{item?.title}}</div>\n                    </div>\n                </ion-slide>\n            </ion-slides>\n        </div>\n        <!-- segments -->\n        <div class="padding9px">\n            <div class="flex-spac-betwn-center">\n                <div class="segment-button justify-cont-flex-end margin-right20 flex">\n                    <div *ngFor="let item of coursesName">\n                        <button (click)="_selecteCoures(item)" [ngClass]="{\'activeColor\': selectedCourse == item}">\n             <span *ngIf="item != \'Recommendations\'">{{item | titlecase}}</span> \n             <span *ngIf="item == \'Recommendations\'">Programs</span> \n            </button>\n                    </div>\n                </div>\n\n\n\n                <div *ngIf="segmentlearnData?.length > 0" class="bottom-border margin-right2" (click)="goToEnrolled()">\n                    View More\n                </div>\n            </div>\n            <div class="tabHeading" *ngIf="selectedCourse==\'Recommendations\'">Courses shortlisted by you in DAP</div>\n            <div class="tabHeading" *ngIf="selectedCourse==\'enrolled\'">Courses enrolled by you</div>\n\n            <ion-slides #mySlider slidesPerView="1.2">\n\n                <ion-slide *ngFor="let item of segmentlearnData; let i = index">\n\n                    <ion-card class="ion-card" (click)="offeringDetail(item)">\n                        <div class="card-container">\n                            <div class="card-header {{item.method}}">\n                                <div class="titleName">\n                                    <img *ngIf="item.method==\'\' || item.method==null" src="assets/zenLearn-imgs/dap-icon3.svg" />\n                                    <img *ngIf="item.method==\'V Learn\' || item.method==\'V Learn \'" src="assets/imgs/virtual-icon.svg" />\n                                    <img *ngIf="item.method==\'Classroom\'" src="assets/imgs/classroom-icon.svg" />\n                                    <img *ngIf="item.method==\'Online\'" src="assets/imgs/online-icon.svg" />\n                                </div>\n                                <div class="subTitle">{{item?.title}}</div>\n                            </div>\n\n                            <div class="card-data">\n                                <div class="flex fontp9em padding-top3per" *ngIf="item?.facility">\n                                    <span class="padding-right8"><img src="assets/imgs/zenLearnlocation.svg" /></span>\n\n                                    <span class="color-gray ftWT" *ngIf="item?.itemType && item?.facility != \'CLASSROOM\'">{{item?.facility}} - {{item?.itemType | titlecase}}</span>\n                                    <span class="color-gray ftWT" *ngIf="item?.itemType && item?.facility == \'CLASSROOM\'">{{item?.facility}}</span>\n                                    <span class="color-gray ftWT" *ngIf="!item?.itemType">{{item?.facility}}</span>\n                                    <!-- {{item.facility}} -->\n                                </div>\n                                <div class="flex fontp9em padding-top3per" *ngIf="item?.creditHours">\n                                    <span class="padding-right8"><img src="assets/imgs/zenLearnCredit_Hours.svg" /></span>\n                                    <span class="color-gray">Credit Hrs : {{item?.creditHours}}</span>\n                                    <!-- {{item.facility}} -->\n                                </div>\n\n                                <div class="flex padding-top3per" *ngIf="item?.endDate != \'\' || item?.endTime != \'\'">\n                                    <span class="padding-right8"><img src="assets/imgs/zenLearnCalender.svg" /></span>\n                                    <span class="column fontp9em heading-color ">\n                    <span class="padding-bottom4per">{{item?.startDate}} To {{item?.endDate}}</span>\n                                    <span class="color-gray">{{item?.startTime}} To\n                      {{item?.endTime}}</span></span>\n                                </div>\n                                <div class="flex padding-top3per" *ngIf="item?.endDate == \'\' || item?.endTime == \'\'">\n                                    <span class="padding-right8"><img src="assets/imgs/zenLearnCalender.svg" /></span>\n                                    <span class="column fontp9em heading-color ">\n                    <span class="padding-bottom4per">{{item?.startDate}}</span>\n                                    </span>\n                                </div>\n                                <div class="like-dislike-wrapper">\n                                    <div class="like" (click)="likeDislike(\'like\',i,item?.isLike,item?.itemId);$event.stopPropagation()">\n                                        <img class="" *ngIf="item?.isLike==0 || item?.isLike==-1" src="assets/zenLearn-imgs/like.svg" onerror="this.src=\'./assets/imgs/logo.png\'" />\n                                        <img class="" *ngIf="item?.isLike==1" src="assets/zenLearn-imgs/likeBlue.svg" onerror="this.src=\'./assets/imgs/logo.png\'" />\n\n                                    </div>\n                                    <div class="dislike" (click)="likeDislike(\'dislike\',i,item?.isLike,item?.itemId);$event.stopPropagation()">\n                                        <img class="" *ngIf="item?.isLike==0 || item?.isLike==1" src="assets/zenLearn-imgs/disLike.svg" onerror="this.src=\'./assets/imgs/logo.png\'" />\n                                        <img class="" *ngIf="item?.isLike ==-1" src="assets/zenLearn-imgs/disLikeBlue.svg" onerror="this.src=\'./assets/imgs/logo.png\'" />\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </ion-card>\n                </ion-slide>\n            </ion-slides>\n\n\n            <div class="nodata " *ngIf="!segmentlearnData || segmentlearnData.length ==0">\n                <ion-card class="ion-card" *ngIf="selectedCourse == \'Recommendations\'" (click)="goToMyDapList()">\n                    <div class="card-container">\n                        <div class="card-header">\n                            <div class="titleName">\n                                <img src="assets/zenLearn-imgs/dap-icon3.svg" />\n                            </div>\n                            <div class="subTitle">DAP</div>\n                        </div>\n                        <div class="card-data">\n                            <p class="dapText"> You are yet to create DAP for this financial year, <span>click</span> here to create new DAP</p>\n                        </div>\n                    </div>\n                </ion-card>\n                <ion-card class="ion-card" *ngIf="selectedCourse == \'enrolled\'" (click)="showCalender(\'recommended\')">\n                    <div class="card-container">\n                        <div class="card-header">\n                            <div class="titleName">\n                                <img src="assets/zenLearn-imgs/dap-icon3.svg" />\n                            </div>\n                            <div class="subTitle">Enrolled</div>\n                        </div>\n                        <div class="card-data">\n                            <p class="dapText"> You have not enrolled for future courses, <span>click</span> here to enroll.</p>\n                        </div>\n                    </div>\n                </ion-card>\n            </div>\n        </div>\n    </div>\n    <div class="nodata" *ngIf="!zenLearnData">{{errorMsg}}</div>\n\n    <!-- <div (click)="dap()" style="\n  background: #26caf5;\n  width: 100px;\n  padding: 10px;\n  text-align: center;\n  margin: 10px;\n"> MYDap</div> -->\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\zen-learn-dashboard\zen-learn-dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ZenLearnDashboardPage);
    return ZenLearnDashboardPage;
}());

//# sourceMappingURL=zen-learn-dashboard.js.map

/***/ })

});
//# sourceMappingURL=122.js.map