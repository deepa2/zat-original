webpackJsonp([127],{

/***/ 1396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferingDetailsPageModule", function() { return OfferingDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offering_details__ = __webpack_require__(1818);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OfferingDetailsPageModule = /** @class */ (function () {
    function OfferingDetailsPageModule() {
    }
    OfferingDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__offering_details__["a" /* OfferingDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offering_details__["a" /* OfferingDetailsPage */]),
            ],
        })
    ], OfferingDetailsPageModule);
    return OfferingDetailsPageModule;
}());

//# sourceMappingURL=offering-details.module.js.map

/***/ }),

/***/ 1818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferingDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constants__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__container_chat_bot_new_chat_bot_new_services_moveToPage_service__ = __webpack_require__(73);
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
 * Generated class for the OfferingDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfferingDetailsPage = /** @class */ (function () {
    function OfferingDetailsPage(moveToPageService, events2, navCtrl, navParams, inappbrowser, utility, httpProvider, alertCtrl) {
        this.moveToPageService = moveToPageService;
        this.events2 = events2;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inappbrowser = inappbrowser;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.alertCtrl = alertCtrl;
        this.isDataNotAvailable = false;
        this.isServiceCallRequired = false;
        this.isComingFromHistoryCourses = false;
        this.offeringDetails = this.navParams.get("selectedCourse");
        // console.log(this.offeringDetails);
        this.selectedTab = 'Details';
        if (this.navParams.get('isHistoryData')) {
            this.isComingFromHistoryCourses = this.navParams.get('isHistoryData');
        }
        // console.log(this.offeringDetails)
        // if (this.offeringDetails.type == 'Behavioural' || this.offeringDetails.type == 'Technical') {
        //   this.selectedTab = 'Rating/Review'
        // } else {
        //   this.selectedTab = 'Details'
        // }
    }
    OfferingDetailsPage.prototype.ionViewWillEnter = function () {
        this.getOfferingDetails();
    };
    OfferingDetailsPage.prototype.getOfferingDetails = function () {
        var _this = this;
        var url = "getCoursesDetails";
        var data = {};
        if (!this.utility.isEmptyOrNullOrUndefined(this.offeringDetails)) {
            data.scheduleOfferingId = this.offeringDetails.scheduleOfferingId;
            data.itemId = this.offeringDetails.itemId;
        }
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService({ url: url, data: data, zenLearn: true })
            .subscribe(function (res) {
            if (!_this.utility.isEmptyOrNullOrUndefined(res) && !_this.utility.isEmptyOrNullOrUndefined(res.details.responseList)) {
                _this.wholeData = res.details;
                _this.offeringDetailsData = res.details.responseList.details;
                _this.offeringRatingData = res.details.responseList.ratings;
                _this.isDataNotAvailable = false;
                _this.utility.updateLoader(false);
            }
            else {
                _this.utility.updateLoader(false);
                _this.isDataNotAvailable = true;
                // this.errorMsg = Constants["erroMessageFor No Data"]
                _this.utility.showAlert('Offering Detail', __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Constants */]["erroMessageFor No Data"]);
            }
        }, function (err) {
            _this.utility.updateLoader(false);
            _this.utility.showAlert('Offering Detail', __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Constants */]["erroMessageFor No Data"]);
            // this.errorMsg = Constants["erroMessageFor No Data"]
        });
    };
    OfferingDetailsPage.prototype.getEnrolled = function (status, statusId) {
        var _this = this;
        var url = "enrollNow";
        var ststusMsg;
        var data = {
            "scheduleOfferingId": this.offeringDetails.scheduleOfferingId,
            "action": status,
        };
        // this.enrollmentStatusID = "ENROLL"
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService({ url: url, data: data, zenLearn: true })
            .subscribe(function (res) {
            if (!_this.utility.isEmptyOrNullOrUndefined(res) && !_this.utility.isEmptyOrNullOrUndefined(res.details)) {
                _this.utility.updateLoader(false);
                _this.utility.presentAlert(res.details.responseList, "Enrollment Status");
                _this.isServiceCallRequired = true;
                _this.getOfferingDetails();
            }
        }, function (err) {
            _this.utility.updateLoader(false);
            _this.errorMsg = __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Constants */]["erroMessageFor No Data"];
        });
    };
    OfferingDetailsPage.prototype._segmentChanged = function (ev) {
        this.selectedTab = ev._value;
        //console.log(this.selectedTab)
    };
    OfferingDetailsPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            // title: 'Are You Sure',
            message: 'This link will direct you to SuccessFactor Learning search. Please open this link in your browser and search for the above program. You can then ENROLL yourself for the respective program.',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.utility.openWithSystemBrowser('https://performancemanager8.successfactors.com/sf/learning?destUrl=https%3a%2f%2frpgenterprises%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dCATALOG%5fSIMPLE%5fSEARCH%26fromSF%3dY&company=C0014469929P');
                        //  this.getEnrolled(status,statusId);
                        // this.navCtrl.popTo("ZenLearnDashboardPage",{enrollmentStatusID:"ENROLL"})
                        //this.handleClick()
                        //this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
                    }
                }
            ]
        });
        confirm.present();
    };
    OfferingDetailsPage.prototype.handleClick = function () {
        {
            this.events2.publish('selecetedItem', 'Enrolled');
        }
    };
    OfferingDetailsPage.prototype.getRating = function (courseData) {
        this.navCtrl.push("ZenLearnRatingPage", { courseData: courseData });
    };
    OfferingDetailsPage.prototype.goToSuccess = function (webUrl) {
        var weboptions = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'yes',
            shouldPauseOnSuspend: 'yes',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'yes',
            presentationstyle: 'fullscreen',
            fullscreen: 'yes',
            toolbarposition: 'top',
            toolbarcolor: '#1cb7c9',
            closebuttoncolor: 'white',
        };
        var target = "_system";
        var url = webUrl;
        var browser = this.inappbrowser.create(url, target, weboptions);
    };
    OfferingDetailsPage.prototype.ionViewWillLeave = function () {
        if (this.isServiceCallRequired) {
            this.moveToPageService.withDrawCourse.next();
            this.navCtrl.getPrevious().data.isServiceCallRequired = this.isServiceCallRequired;
        }
    };
    OfferingDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-offering-details',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\offering-details\offering-details.html"*/'<!--\n  Generated template for the OfferingDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Course Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!-- <div *ngIf="offeringDetailsData"> -->\n  <div>\n    <div class="learming-info">\n      <div class="text-left">\n        <div class="card-header {{offeringDetails.method}}">\n          <div class="titleName">\n            <img *ngIf="offeringDetails?.method==\'\' || offeringDetails?.method==null"\n              src="assets/zenLearn-imgs/dap-icon3.svg" />\n            <img *ngIf="offeringDetails.method==\'V Learn\'" src="assets/imgs/virtual-icon.svg" />\n            <img *ngIf="offeringDetails.method==\'Classroom\'" src="assets/imgs/classroom-icon.svg" />\n            <img *ngIf="offeringDetails.method==\'Online\'" src="assets/imgs/online-icon.svg" />\n          </div>\n          <div class="subTitle">{{offeringDetails?.title}}</div>\n        </div>\n        <!-- <div class="titleName">{{offeringDetails?.method}}</div>\n        <div class="subTitle">{{offeringDetails?.title}}</div> -->\n        <div class="card-data">\n          <div class="flex fontp9em padding-top3per">\n            <span class="padding-right8"><img src="assets/imgs/zenLearnlocation.svg" /></span>\n            <!-- <span class="color-gray">{{offeringDetails?.facility}}</span> -->\n\n            <span class="color-gray ftWT"\n              *ngIf="offeringDetails?.itemType && offeringDetails?.itemType != \'CLASSROOM\'">{{offeringDetails?.facility}}\n              -\n              {{offeringDetails?.itemType | titlecase}}</span>\n            <span class="color-gray ftWT"\n              *ngIf="offeringDetails?.itemType && offeringDetails?.itemType == \'CLASSROOM\'">{{offeringDetails?.facility}}</span>\n            <span class="color-gray ftWT" *ngIf="!offeringDetails?.itemType">{{offeringDetails?.facility}}</span>\n          </div>\n          <div class="flex fontp9em padding-top3per">\n            <span class="padding-right8"><img src="assets/imgs/zenLearnCredit_Hours.svg" /></span>\n            <span class="color-gray">Credit Hrs : {{offeringDetails?.creditHours}}</span>\n          </div>\n\n          <div class="flex padding-top3per" *ngIf="offeringDetails?.endDate || offeringDetails?.endTime">\n            <span class="padding-right8"><img src="assets/imgs/zenLearnCalender.svg" /></span>\n            <span *ngIf=\'offeringDetails?.type == null\' class="column fontp9em heading-color">\n              <span class="padding-bottom4per">{{offeringDetails?.startDate}} To {{offeringDetails?.endDate}}</span>\n              <span class="color-gray">{{offeringDetails?.startTime}} To {{offeringDetails?.endTime}}</span></span>\n\n\n          </div>\n\n          <div class="flex padding-top3per"\n            *ngIf="(offeringDetails?.startDate || offeringDetails?.completionDate) && !offeringDetails?.endDate">\n            <span class="padding-right8"><img src="assets/imgs/zenLearnCalender.svg" /></span>\n            <span class="column fontp9em heading-color ">\n              <span class="padding-bottom4per">{{offeringDetails?.startDate}}</span>\n            </span>\n            <span *ngIf="(offeringDetails?.completionDate)" class="column fontp9em heading-color">\n              <span class="padding-bottom4per">{{offeringDetails?.completionDate}}</span>\n            </span>\n          </div>\n        </div>\n\n        <!-- <div class="flex fontp9em padding-top3per" *ngIf="offeringDetails?.scheduleOfferingDescription">\n            <span class="padding-right8"><img src="assets/imgs/zenLearnCredit_Hours.svg" /></span>\n            <span class="color-gray">{{offeringDetails?.scheduleOfferingDescription}}</span>\n          </div> -->\n\n      </div>\n    </div>\n    <!-- segment sections -->\n\n    <div class="detail-info">\n      <div class="width100per">\n        <div>\n          <ion-segment class="segment" [(ngModel)]="selectedTab" (ionChange)="_segmentChanged($event)" scrollable>\n            <ion-segment-button value="Details" checked>\n              <span class="text-transform-cap">Details</span>\n            </ion-segment-button>\n            <ion-segment-button value="Rating/Review" *ngIf="isComingFromHistoryCourses">\n              <span class="text-transform-cap">Rating/Review</span>\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n      </div>\n      <!-- Details Segment -->\n      <div [ngSwitch]="selectedTab">\n        <div *ngSwitchCase="\'Details\'" class="detail">\n          <div class="profile-card" *ngFor="let item of offeringDetailsData">\n            <div col-5 class="icon-section">\n              <div><img [src]=item?.icon1 onerror="this.src=\'./assets/imgs/Project.svg\'" /></div>\n              <div class="profile-title">{{item?.key}}</div>\n            </div>\n            <div col-7 class="heading-profile">\n              <span class="align-cont-cent color-gray" [innerHTML]>\n                <img class="profile-img" *ngIf="item?.icon2" [src]=item?.icon2\n                  onError="this.src=\'assets/imgs/user.png\'" />\n                <span *ngIf="item?.value!=\'0\'" [ngStyle]="{\'padding-left\':!item?.icon2? 0 : 12 }">{{item?.value}}<span\n                    *ngIf="!item?.value">--</span></span>\n                <span *ngIf="item?.value==\'0\'">No seat limit</span>\n                <span\n                  *ngIf="item?.key==\'Seats Remaining\' && wholeData.maximiumEnrollment!=null">{{wholeData?.maximiumEnrollment}}</span>\n\n                <!-- <span *ngIf="item?.icon2">\n            <img class="profile-img" *ngIf="item?.icon2" [src]=item?.icon2 />\n            <span>{{item?.value}}</span></span> -->\n              </span>\n            </div>\n          </div>\n          <div class="nodata" *ngIf="offeringDetailsData?.length==0">No data available</div>\n        </div>\n      </div>\n      <!-- Rating/Review  Segment-->\n      <div [ngSwitch]="selectedTab" *ngIf="isComingFromHistoryCourses">\n        <div class="main-container" *ngSwitchCase="\'Rating/Review\'">\n          <div class="rating-subContainer" *ngFor="let item of offeringRatingData">\n            <div class="icon-card">\n              <img class="profile-icon" [src]="item?.associatePhoto" onerror="this.src=\'./assets/imgs/logo.png\'" />\n            </div>\n            <div class="rating-contentCard">\n              <div class="rating-card">\n                <div class="performance-card">\n                  <span class="width100per padding-bottom12">{{item?.name}}</span>\n                </div>\n                <span>\n                  <span *ngFor="let subItem of [1,2,3,4,5]">\n\n                    <img *ngIf="subItem <= item?.ratingStars" src="assets/imgs/filledStar.svg" />\n                    <img *ngIf="subItem > item?.ratingStars" src="assets/imgs/emptyStar.svg" />\n                  </span>\n                </span>\n              </div>\n              <div class="details-card">{{item?.description}}</div>\n            </div>\n          </div>\n          <div *ngIf="!offeringRatingData" class="nodata">No Data Available</div>\n\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n  <ion-fab *ngIf="selectedTab == \'Rating/Review\' && isComingFromHistoryCourses" right bottom edge\n    (click)="getRating(offeringDetails)">\n    <button ion-fab mini>\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n  <div class="nodata" *ngIf="isDataNotAvailable">No data Available</div>\n</ion-content>\n<ion-footer class="justify-cont-center" *ngIf="!isComingFromHistoryCourses">\n  <div *ngIf="wholeData?.responseList">\n    <button *ngIf="!wholeData?.responseList.perCipio && !wholeData?.responseList.isEnrolled" ion-button round\n      color="secondary" (click)="getEnrolled(\'ENROLL\',\'ENROLL\')">Enroll Now</button>\n    <button *ngIf="!wholeData?.responseList.perCipio && wholeData?.responseList.isEnrolled" ion-button round\n      color="secondary" (click)="getEnrolled(\'withdraw\',\'CANCELLED\')">Withdraw</button>\n    <button *ngIf="wholeData?.responseList.perCipio" ion-button round color="secondary"\n      (click)="goToSuccess(wholeData?.responseList?.link)">Start Now</button>\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\offering-details\offering-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__container_chat_bot_new_chat_bot_new_services_moveToPage_service__["a" /* MoveToPageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], OfferingDetailsPage);
    return OfferingDetailsPage;
}());

//# sourceMappingURL=offering-details.js.map

/***/ })

});
//# sourceMappingURL=127.js.map