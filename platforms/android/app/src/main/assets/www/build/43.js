webpackJsonp([43],{

/***/ 1404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZenrichJobDetailPageModule", function() { return ZenrichJobDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zenrich_job_detail__ = __webpack_require__(1826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_emojione__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ZenrichJobDetailPageModule = /** @class */ (function () {
    function ZenrichJobDetailPageModule() {
    }
    ZenrichJobDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zenrich_job_detail__["a" /* ZenrichJobDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular_emojione__["a" /* EmojiModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zenrich_job_detail__["a" /* ZenrichJobDetailPage */]),
            ],
        })
    ], ZenrichJobDetailPageModule);
    return ZenrichJobDetailPageModule;
}());

//# sourceMappingURL=zenrich-job-detail.module.js.map

/***/ }),

/***/ 1826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZenrichJobDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__ = __webpack_require__(735);
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
 * Generated class for the WowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZenrichJobDetailPage = /** @class */ (function () {
    function ZenrichJobDetailPage(navCtrl, navParams, httpProvider, modalCtrl, popoverctr, clipBoard, utility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.popoverctr = popoverctr;
        this.clipBoard = clipBoard;
        this.utility = utility;
        this.srfNo = this.navParams.get('srfNo');
        this.isComingFromSavedProfile = this.navParams.get('isComingFromSavedProfile');
        this.candidateProfileId = this.navParams.get('candidateProfileId');
        this.getZenrichData();
    }
    ZenrichJobDetailPage.prototype.getZenrichData = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var url = "jobOpeningDetails";
        var data = { "srfNo": this.srfNo };
        this.utility.updateLoader(true);
        this.httpProvider.http
            .commonService({ url: url, data: data, zenRich: true })
            .subscribe(function (res) {
            //console.log(res)
            _this.mainData = res.details;
            //console.log(this.mainData);
            _this.utility.updateLoader(false);
        });
    };
    ZenrichJobDetailPage.prototype.goToReferral = function () {
        this.navCtrl.push("ZenrichProfilePage", { "srfNo": this.srfNo });
    };
    ZenrichJobDetailPage.prototype.formatDate = function (obj) {
        return this.utility.formatDate(obj);
    };
    ZenrichJobDetailPage.prototype.bookMarked = function (selectedItem, srfNo) {
        var _this = this;
        var bookedmarkValue = !selectedItem;
        this.mainData.isBookmarked = bookedmarkValue;
        var param = {
            url: 'bookmarkSpecificJob',
            data: {
                srfNo: srfNo,
                save: bookedmarkValue
            },
            zenRich: true
        };
        this.httpProvider.http.commonService(param).subscribe(function (response) {
            //console.log(response)
            _this.utility.showToast(response.details.toastMessage);
        });
    };
    ZenrichJobDetailPage.prototype.presentpopover = function (myEvent, jobCode, jobtitle) {
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
                    var title = _this.utility.formateData(_this.mainData.jobTitle);
                    var skillsStr = _this.utility.formateData(_this.mainData.skills);
                    var str = "Title: " + title + "\nGrade: " + _this.mainData.grade + "\nExperience:" + _this.mainData.experience + "\nSkills: " + skillsStr + "\nLocation: " + _this.mainData.location;
                    _this.clipBoard.copy(str).then(function () {
                        _this.utility.showToast("Copied to clipboard");
                    });
                }
            }
        });
    };
    ZenrichJobDetailPage.prototype.getMainSkills = function (value) {
        return this.utility.formateData(value);
    };
    ZenrichJobDetailPage.prototype.goTOCandidateForm = function () {
        this.navCtrl.push("ReferralDetailsPage", { 'candidateProfileId': this.candidateProfileId, 'srfNo': this.srfNo, "createNew": false });
    };
    ZenrichJobDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-zenrich-job-detail',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zenrich-job-detail\zenrich-job-detail.html"*/'<!--\n  Generated template for the WowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Job Detail</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="wow_content">\n  <div class="mainContainer" *ngIf="mainData">\n    <div class="job-wrapper">\n      <div class="job-icon" [ngClass]="{\'hot-job\': mainData.hotJobFlag != \'\'}">\n        <img class="titleImg" src="assets/imgs/job-item-icon.svg">\n        <!-- <img class="info-icon" [src]="mainData?.srfNoIcon" /> -->\n        <span>{{mainData?.srfNo}}</span>\n        <div class="hot-con" *ngIf="mainData.hotJobFlag != \'\'"><img class="hot-icon" src="assets/imgs/hot-icon.svg"> {{mainData.hotJobFlag}}</div>\n      </div>\n      <div class="job-info">\n        <div class="job-title">\n          <span class="job-title-wrap"> <span>{{mainData?.jobTitle}}</span> </span>\n          <div class="niche-wrap" *ngIf="mainData?.nicheSkillFlag">\n            <img  src="assets/imgs/nicheStar.svg"> \n            <span class="niche-skills">Niche skill</span>\n          </div>\n        </div>\n        <div class="post-date info">\n          <img src="assets/icon/dashboard-icons/ZenRich_calendar.svg">\n          <span> Posted Date : {{formatDate(mainData?.postedDate) | date}}</span></div>\n        <div class="post-date info">\n          <img src="assets/icon/dashboard-icons/ZenRich_grade.svg">\n          <span> Grade : {{mainData?.grade}}</span></div>\n\n      </div>\n      <div class="save-job">\n        <img class="bookMarkIcon" (click)="$event.stopPropagation()"\n          (click)="bookMarked(mainData?.isBookmarked, mainData?.srfNo)" *ngIf="!mainData?.isBookmarked"\n          src="assets/icon/dashboard-icons/bookMarked.svg">\n        <img class="bookMarkIcon" (click)="$event.stopPropagation()"\n          (click)="bookMarked(mainData?.isBookmarked,mainData?.srfNo)" *ngIf="mainData?.isBookmarked"\n          src="assets/icon/dashboard-icons/bookMarkFilled.svg">\n        <ion-icon name="more" (click)="presentpopover($event,mainData?.srfNo, mainData?.jobTitle)"></ion-icon>\n      </div>\n\n    </div>\n    <div class="job-exp">\n      <div class="experience">\n        <span><img class="experience-icon" src="assets/imgs/experience.svg" /></span>\n        <span>Exp. : {{mainData?.experience}}</span></div>\n        <div class="experience">\n          <span><img class="experience-icon roundedImg" src="assets/imgs/Person.png" /></span>\n          <span>{{mainData?.profileMatchCount}}</span></div>\n      <!-- <div class="referral-Bonus">Referral Bonus : {{mainData?.referralBonus}}</div> -->\n    </div>\n    <div class="job-location detail-info">\n      <img class="info-icon" src="assets/icon/dashboard-icons/ZenRich_location.svg" />\n      <span class="info-title">Location : </span>\n      {{mainData?.location}}\n    </div>\n    <div class="skills detail-info">\n      <img class="info-icon" src="assets/icon/dashboard-icons/ZenRich_skills.svg" />\n      <span class="info-title">Skills : </span>\n      {{getMainSkills(mainData?.skills)}}\n    </div>\n    <div class="skills detail-info">\n      <img class="info-icon" src="assets/imgs/money.svg" />\n      <span class="info-title">Referral Bonus :  </span><span class="mr-5"> upto </span>  \n      <img class="rupee-icon" src="assets/imgs/rupee.svg" /><span [ngClass]="{\'bonus\': ((mainData.hotJobReferralAmount != \'\' && mainData.hotJobFlag != \'\') &&  mainData.referralBonus != (mainData.hotJobReferralAmount | number))}" class="">{{mainData?.referralBonus}}</span>\n      <span *ngIf="mainData.hotJobFlag != \'\' && mainData.referralBonus != (mainData.hotJobReferralAmount | number)  && mainData.hotJobReferralAmount != \'\'" class="hot-amount inr"> <img class="rupee-icon" src="assets/imgs/rupee-green.svg" />  {{mainData?.hotJobReferralAmount}}</span>\n    </div>\n    \n    \n    <div class="detail-info">\n      <img class="info-icon" src="assets/icon/dashboard-icons/ZenRich_file.svg" /><span class="job-desc">Job Description </span>\n    </div>\n    <div class="job-details-font disc-margin" [innerHTML]="mainData?.jobDescription"></div>\n  </div>\n  <!-- <div class="refer-friend-btn">\n      <button (click)="goToReferral()">Refer a Friend</button>\n    </div> -->\n\n</ion-content>\n<ion-footer>\n  <div class="refer-friend-btn">\n    <button *ngIf="isComingFromSavedProfile" (click)="goTOCandidateForm()">Refer</button>\n    <button *ngIf="!isComingFromSavedProfile" (click)="goToReferral()">Refer a Friend</button>\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zenrich-job-detail\zenrich-job-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__["a" /* Clipboard */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], ZenrichJobDetailPage);
    return ZenrichJobDetailPage;
}());

//# sourceMappingURL=zenrich-job-detail.js.map

/***/ })

});
//# sourceMappingURL=43.js.map