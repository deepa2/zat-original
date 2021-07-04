webpackJsonp([59],{

/***/ 1388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZenRichLandingPageModule", function() { return ZenRichLandingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zen_rich_landing__ = __webpack_require__(1810);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ZenRichLandingPageModule = /** @class */ (function () {
    function ZenRichLandingPageModule() {
    }
    ZenRichLandingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zen_rich_landing__["a" /* ZenRichLandingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zen_rich_landing__["a" /* ZenRichLandingPage */]),
            ],
        })
    ], ZenRichLandingPageModule);
    return ZenRichLandingPageModule;
}());

//# sourceMappingURL=zen-rich-landing.module.js.map

/***/ }),

/***/ 1810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZenRichLandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_carnival_alert_carnival_alert__ = __webpack_require__(780);
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
 * Generated class for the ZenRichLandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZenRichLandingPage = /** @class */ (function () {
    function ZenRichLandingPage(navCtrl, navParams, mdlCtrl, http, utility, popoverctr, clipBoard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mdlCtrl = mdlCtrl;
        this.http = http;
        this.utility = utility;
        this.popoverctr = popoverctr;
        this.clipBoard = clipBoard;
        this.record = [];
        this.slides = [];
        this.allTabs = [];
        this.selectedTabValue = '';
        this.isDataAvailble = false;
        this.isShowCarnival = true;
        this.fromNotification = this.navParams.get('fromNotification');
    }
    ZenRichLandingPage.prototype.ionViewDidLoad = function () {
    };
    ZenRichLandingPage.prototype.ionViewWillEnter = function () {
        this.getZenRichData();
    };
    ZenRichLandingPage.prototype.goToZenRichList = function (data) {
        if (data) {
            this.navCtrl.push('ZenrichPage', {
                'getData': data
            });
        }
        else {
            this.navCtrl.push('ZenrichPage', {
                'getData': {
                    'icon': "https://zentalentapp.zensar.com/fileviewer-zenhelp/zentalent/Icon/UserProfileIcons/Location.svg",
                    'key': "All Openings",
                    'parameter': "JOB_OPENINGS",
                    'type': null,
                    'value': "All Openings"
                }
            });
        }
    };
    ZenRichLandingPage.prototype.changeSlide = function (index, value) {
        this.selectedSection = index;
        this.slides = this.slideData[index];
        this.selectedTabValue = value;
    };
    ZenRichLandingPage.prototype.goToJobDetails = function (srfNo) {
        this.navCtrl.push("ZenrichJobDetailPage", { 'srfNo': srfNo });
    };
    ZenRichLandingPage.prototype.getZenRichData = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var param = {
            url: 'zenrichLandingPageDetails',
            data: {},
            zenRich: true
        };
        this.http.http.commonService(param).subscribe(function (response) {
            //console.log(response)
            if (response && response.details) {
                if (response.details.isCarnival && _this.isShowCarnival) {
                    _this.isShowCarnival = false;
                    _this.openCarnival(response.details.carnivalImage);
                }
                if (_this.fromNotification == true) {
                    _this.selectedSection = 1;
                    _this.selectedTabValue = 'Drafts';
                }
                else {
                    _this.selectedSection = 0;
                    _this.selectedTabValue = 'Recent Openings';
                }
                _this.isDataAvailble = true;
                _this.record = response.details.records;
                _this.slideData = response.details.middleSection;
                _this.slides = _this.slideData[_this.selectedSection];
                _this.allTabs = response.details.types;
            }
            _this.utility.updateLoader(false);
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    ZenRichLandingPage.prototype.goToReferralDetails = function (item) {
        this.navCtrl.push("ReferralDetailsPage", { 'candidateProfileId': item.candidateProfileId, 'srfNo': item.srfNo, "createNew": false });
    };
    ZenRichLandingPage.prototype.bookMarked = function (selectedItem, index) {
        var _this = this;
        var bookedmarkValue;
        this.slides.value.filter(function (value) {
            if (value.srfNo == selectedItem.srfNo) {
                bookedmarkValue = !value.isBookmarked;
                value.isBookmarked = !value.isBookmarked;
            }
        });
        //console.log(this.slides.value);
        var param = {
            url: 'bookmarkSpecificJob',
            data: {
                srfNo: selectedItem.srfNo,
                save: bookedmarkValue
            },
            zenRich: true
        };
        this.http.http.commonService(param).subscribe(function (response) {
            //console.log(response)
            _this.utility.showToast(response.details.toastMessage);
        });
    };
    ZenRichLandingPage.prototype.presentpopover = function (myEvent, jobCode, jobtitle, item) {
        var _this = this;
        var popover = this
            .popoverctr
            .create('PopoverPage', { 'type': 'ZenRich' });
        popover.present({ ev: myEvent });
        popover.onDidDismiss(function (value) {
            if (value != null) {
                if (value == 'CopyCode') {
                    _this.clipBoard.copy(jobCode).then(function () {
                        _this.utility.showToast("Copied to clipboard");
                    });
                }
                else {
                    var title = _this.utility.formateData(item.jobTitle);
                    var skillsStr = _this.utility.formateData(item.skills);
                    var str = "Title: " + title + "\nGrade: " + item.grade + "\nExperience:" + item.experience + "\nSkills: " + skillsStr + "\nLocation: " + item.location;
                    console.log(str);
                    _this.clipBoard.copy(str).then(function () {
                        _this.utility.showToast("Copied to clipboard");
                    });
                }
            }
        });
    };
    ZenRichLandingPage.prototype.goToHelp = function () {
        this.navCtrl.push('AddPage', { 'type': 'addQuestion', 'questionId': null, 'answerType': null });
    };
    ZenRichLandingPage.prototype.removeDraft = function (item) {
        var _this = this;
        console.log(item);
        this.utility.presentConfirmation("Do you want to delete the draft ?").then(function () {
            var url = 'deleteDraft';
            _this.http.http.commonService({ url: url, data: { referralMappingId: item.referralMappingId }, zenRich: true }).subscribe(function (response) {
                console.log(response);
                _this.utility.showToast('Darft deleted');
            });
            _this.slides.value = _this.slides.value.filter(function (value) { return value.referralMappingId != item.referralMappingId; });
        }).catch(function () { });
    };
    ZenRichLandingPage.prototype.getMainSkills = function (value) {
        return this.utility.formateData(value);
    };
    ZenRichLandingPage.prototype.openCarnival = function (carnivalimgUrl) {
        var modalCtrl = this.mdlCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_carnival_alert_carnival_alert__["a" /* CarnivalAlertComponent */], { "imgUrl": carnivalimgUrl }, {
            cssClass: 'corona-safetyAlertCss',
            enableBackdropDismiss: true,
            showBackdrop: true,
        });
        modalCtrl.onDidDismiss(function (data) {
        });
        modalCtrl.present();
    };
    ZenRichLandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-zen-rich-landing',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-rich-landing\zen-rich-landing.html"*/'<!--\n  Generated template for the ZenRichLandingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ZenRich</ion-title>\n    <ion-buttons class="go-help" end (click)="goToHelp()">\n      <button ion-button icon-only>\n        <ion-icon name="ios-help-circle-outline"></ion-icon>\n      </button>\n      <span>Help</span>\n    </ion-buttons>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf="isDataAvailble">\n\n\n    <div class="card-wrapper">\n      <div class="landing-card card{{i}}" *ngFor="let referalDetails of record let i = index ">\n        <div class="card-top">\n          <img class="card-bg" src="assets/imgs/landing-mask.svg" />\n          <img *ngIf="i == 0" src="assets/imgs/landing-job-icon.svg" />\n          <img *ngIf="i == 1" src="assets/imgs/referral-submitted.svg" />\n          <img *ngIf="i == 2" src="assets/imgs/people-selected.svg" />\n          <img *ngIf="i == 3" src="assets/imgs/average-referral.svg" />\n          <span>{{referalDetails?.value}}</span>\n        </div>\n        <p>{{referalDetails?.key}}</p>\n      </div>\n    </div>\n    <div>\n      <div class="tabs">\n        <div class="tab-item" [class.selected]="selectedSection  == 0" (click)="changeSlide(0,\'Recent Openings\')">\n\n          <img style="height: 20px;" src="assets/imgs/recent-openings.svg">\n          <span class="tab-text">Recent Openings</span>\n\n        </div>\n        <div class="tab-item" [class.selected]="selectedSection  == 1" (click)="changeSlide(1,\'Drafts\')">\n          <span>\n            <img style=" height: 20px;" src="assets/imgs/draft-icon.svg">\n          </span>\n          <span class="tab-text">Drafts</span>\n        </div>\n      </div>\n\n      <div class="tab-con" *ngIf="selectedTabValue == \'Drafts\'">\n        <div class="opening-card draft-card" style="display: inline-block;" *ngFor="let item of slides.value"\n          (click)="goToReferralDetails(item)">\n          <div class="job-wrapper">\n            <div [ngClass]="{\'hot-job\': item.hotJobFlag != \'\'}" class="job-icon">\n              <img class="imgStyle" src="assets/imgs/job-item-icon.svg" />\n              <span>{{item?.srfNo}}</span>\n              <div class="hot-con" *ngIf="item.hotJobFlag != \'\'"><img class="hot-icon" src="assets/imgs/hot-icon.svg">\n                {{item.hotJobFlag}}</div>\n\n            </div>\n            <div class="job-info">\n              <div class="draftTitle">{{item?.jobTitle}}</div>\n              <div class="job-location info">\n                <span><img class="job-location roundedImg" src="assets/imgs/Person.png" /></span>\n                <span class="candidate-name">{{item?.candidateName}}</span></div>\n\n              <div class="skills info">\n                <img src="assets/imgs/time.svg" />\n                <span>{{item?.pendingDays}}</span></div>\n\n              <div class="job-info-footer" *ngIf="item.hotJobFlag != \'\'">\n                <div class="experience">\n                  <img class="money-icon" src="assets/imgs/money.svg" />\n                  <span class="inr">Bonus: Upto </span>\n                  <span \n                    class="hot-amount"><img class="rupee-icon"\n                      src="assets/imgs/rupee-green.svg" />{{item?.hotJobReferralAmount}}</span>\n                </div>\n              </div>\n            </div>\n            <div class="closedIcon" (click)="$event.stopPropagation()" (click)="removeDraft(item) ">\n              <ion-icon name="ios-close-outline"></ion-icon>\n            </div>\n          </div>\n          <div class="progressBar">\n            <div class="progressInside" [style.width.%]="item?.percentage"></div>\n          </div>\n          <div class="job-footer job-footer-Darft" style="border-top: 0px; ">\n            <span class="pending-Days">\n              <img src="assets/icon/dashboard-icons/ZenRich_skills.svg">\n              <span class="mg-left">{{item?.stepCount}}</span>\n            </span>\n            <span>\n              <img src="assets/icon/dashboard-icons/ZenRich_forward.svg">\n            </span>\n          </div>\n        </div>\n        <div *ngIf="(slides?.value == null ||slides?.value.length == 0)"> No Data available</div>\n      </div>\n      <div class="tab-con" *ngIf="selectedTabValue == \'Recent Openings\'">\n        <div class="opening-card" style="display: inline-block;" *ngFor="let item of slides.value; index as i"\n          (click)="goToJobDetails(item?.srfNo)">\n          <div class="job-wrapper">\n            <div [ngClass]="{\'hot-job\': item.hotJobFlag != \'\'}" class="job-icon">\n              <img class="imgStyle" src="assets/imgs/job-item-icon.svg" />\n              <span>{{item?.srfNo}}</span>\n              <div class="hot-con" *ngIf="item.hotJobFlag != \'\'"><img class="hot-icon" src="assets/imgs/hot-icon.svg">\n                {{item.hotJobFlag}}</div>\n\n            </div>\n            <div class="job-info">\n              <div class="job-title">\n                <span class="job-title-wrap"> <span>{{item?.jobTitle}}</span> </span>\n                <div class="niche-wrap" *ngIf="item.nicheSkillFlag">\n                  <img src="assets/imgs/nicheStar.svg"> <span class="niche-skills">Niche skill</span>\n                </div>\n\n              </div>\n              <div class="skills info">\n                <img class="job-skills" src="assets/icon/dashboard-icons/ZenRich_process.svg" />\n                <span>{{getMainSkills(item?.skills)}}</span></div>\n              <!-- bonus info -->\n              <div class="job-info-footer">\n                <div class="experience">\n                  <img class="money-icon" src="assets/imgs/money.svg" />\n                  <span>Bonus: Upto <img class="rupee-icon" src="assets/imgs/rupee.svg" /><span\n                      [ngClass]="{\'bonus\': ((item.hotJobReferralAmount != \'\' && item.hotJobFlag != \'\') &&  item.referralBonus != (item.hotJobReferralAmount | number))}"\n                      class="inr">{{item?.referralBonus}}</span></span>\n                  <span\n                    *ngIf="item.hotJobFlag != \'\' && item.referralBonus != (item.hotJobReferralAmount | number) && item.hotJobReferralAmount != \'\'"\n                    class="hot-amount"><img class="rupee-icon"\n                      src="assets/imgs/rupee-green.svg" />{{item?.hotJobReferralAmount}}</span>\n                </div>\n                <div class="referral-Bonus">\n                  <span><img class="money-icon" src="assets/imgs/Person.png"></span>\n                  <span>{{item?.profileMatchCount}}</span></div>\n              </div>\n            </div>\n            <div class="save-job">\n              <img class="bookMarkIcon" (click)="$event.stopPropagation()" (click)="bookMarked(item,i)"\n                *ngIf="!item?.isBookmarked" src="assets/icon/dashboard-icons/bookMarked.svg">\n              <img class="bookMarkIcon" (click)="$event.stopPropagation()" (click)="bookMarked(item,i)"\n                *ngIf="item?.isBookmarked" src="assets/icon/dashboard-icons/bookMarkFilled.svg">\n              <ion-icon name="more" (click)="$event.stopPropagation()"\n                (click)="presentpopover($event,item?.srfNo, item?.jobTitle,item)"></ion-icon>\n            </div>\n          </div>\n\n          <div class="job-footer job-info-footer">\n            <div class="experience">\n              <img class="experience-icon" src="assets/icon/dashboard-icons/ZenRich_experiance.svg" />\n              <span class="job-skills">Exp: {{item?.experience}}</span>\n            </div>\n            <div class="job-location"><span><img class="experience-icon"\n                  src="assets/icon/dashboard-icons/ZenRich_location.svg"></span>\n              <span class="job-skills">{{item?.location}}</span>\n            </div>\n\n          </div>\n\n        </div>\n        <div *ngIf="slides?.value">\n          <div class="opening-card viewAll-container" *ngIf="slides?.value.length > 3" (click)="goToZenRichList()">\n            <div class="viewAll">\n              <!-- <img class="experience-icon" src="assets/imgs/zenrichViewAll.svg" /> -->\n              <img src="assets/icon/dashboard-icons/ZenRich_viewall.svg">\n              <span class="viewAll-text"> View All</span>\n            </div>\n          </div>\n        </div>\n        <div *ngIf="slides?.value == null"> No Data available</div>\n      </div>\n\n    </div>\n\n    <div class="tiles-container">\n      <div class="tiles" *ngFor="let tabData of allTabs let i = index" (click)="goToZenRichList(tabData)">\n        <div class="tiles-flex">\n          <span class="tiles-img">\n\n            <img *ngIf="i==0" class="imgStyle" src="assets/imgs/myReferrals.svg">\n            <img *ngIf="i==1" class="imgStyle" src="assets/imgs/all-openings.svg">\n            <img *ngIf="i==2" class="imgStyle" src="assets/imgs/saved-jobs.svg">\n            <img *ngIf="i==3" class="imgStyle" src="assets/imgs/saved-profiles.svg">\n          </span>\n          <span style="margin-top: 10px;color: #1586C7">\n            {{tabData?.value}}\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-rich-landing\zen-rich-landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__["a" /* Clipboard */]])
    ], ZenRichLandingPage);
    return ZenRichLandingPage;
}());

//# sourceMappingURL=zen-rich-landing.js.map

/***/ })

});
//# sourceMappingURL=59.js.map