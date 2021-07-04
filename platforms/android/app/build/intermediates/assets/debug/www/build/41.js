webpackJsonp([41],{

/***/ 1405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZenrichRefDetailPageModule", function() { return ZenrichRefDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zenrich_ref_detail__ = __webpack_require__(1827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_emojione__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ZenrichRefDetailPageModule = /** @class */ (function () {
    function ZenrichRefDetailPageModule() {
    }
    ZenrichRefDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zenrich_ref_detail__["a" /* ZenrichRefDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular_emojione__["a" /* EmojiModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zenrich_ref_detail__["a" /* ZenrichRefDetailPage */]),
            ],
        })
    ], ZenrichRefDetailPageModule);
    return ZenrichRefDetailPageModule;
}());

//# sourceMappingURL=zenrich-ref-detail.module.js.map

/***/ }),

/***/ 1827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZenrichRefDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
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
var ZenrichRefDetailPage = /** @class */ (function () {
    function ZenrichRefDetailPage(navCtrl, navParams, httpProvider, modalCtrl, popoverctr, utility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.popoverctr = popoverctr;
        this.utility = utility;
        this.jobId = this.navParams.get('srfNo');
        this.refId = this.navParams.get('referralMappingId');
        this.getZenrichData();
    }
    ZenrichRefDetailPage.prototype.getZenrichData = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var url = "referralApplication";
        var data = { "referralMappingId": this.refId, "srfNo": this.jobId };
        this.utility.updateLoader(true);
        this.httpProvider.http
            .commonService({ url: url, data: data, zenRich: true })
            .subscribe(function (res) {
            //console.log(res)
            _this.mainData = res.details;
            //console.log(this.mainData);
            _this.utility.updateLoader(false);
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    ZenrichRefDetailPage.prototype.presentpopover = function (myEvent) {
        var popover = this
            .popoverctr
            .create('PopoverPage', { 'type': 'others' });
        popover.present({ ev: myEvent });
    };
    ZenrichRefDetailPage.prototype.formatDate = function (obj) {
        return this.utility.formatDate(obj);
    };
    ZenrichRefDetailPage.prototype.goToSavedProfile = function (data) {
        this.navCtrl.push('ZenRichSavedProfilesPage', { 'profileDetails': data.candidateInfo });
    };
    ZenrichRefDetailPage.prototype.goToHelp = function () {
        this.navCtrl.push('AddPage', { 'type': 'addQuestion', 'questionId': null, 'answerType': null });
    };
    ZenrichRefDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-zenrich-ref-detail',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zenrich-ref-detail\zenrich-ref-detail.html"*/'<!--\n  Generated template for the WowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Referral Application</ion-title>\n    <ion-buttons class="go-help" end (click)="goToHelp()">\n      <button ion-button icon-only>\n        <ion-icon name="ios-help-circle-outline"></ion-icon>\n      </button>\n      <span>Help</span>\n    </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="wow_content">\n  <div class="job-wrapper" *ngIf="mainData">\n    <div class="job-icon" [ngClass]="{\'hot-job\': mainData.hotJobFlag != \'\'}">\n      <img class="titleImg" src="assets/imgs/job-item-icon.svg">\n      <span>{{mainData?.srfNo}}</span>\n      <div class="hot-con" *ngIf="mainData.hotJobFlag != \'\'"><img class="hot-icon" src="assets/imgs/hot-icon.svg"> {{mainData.hotJobFlag}}</div>\n      \n    </div>\n    <div class="job-info">\n      <div class="job-title">{{mainData?.jobTitle}}</div>\n      <div class="cand-name info joblocation"><img class="candidateProfileImg img-mar5"\n          src="assets/imgs/Person.png"><span>{{mainData?.candidateName}}</span></div>\n      <div class="post-date info joblocation"><img class="img-mar5"\n          src="assets/icon/dashboard-icons/ZenRich_calendar.svg"><span>Referred Date :\n          {{formatDate(mainData?.referredDate) | date}}</span>\n      </div>\n      <div class="post-date info joblocation"><img class="img-mar5"\n        src="assets/imgs/ID-blue.svg"><span>Candidate ID :\n        {{mainData?.candidateId}}</span>\n      </div>\n      <div class="skills detail-info joblocation">\n        <img class="info-icon img-mar5" src="assets/imgs/money.svg" />\n        <span class="info-title">Referral Bonus : Upto </span>\n        <img class="rupee-icon inr" src="assets/imgs/rupee.svg" /><span [ngClass]="{\'bonus\': ((mainData.hotJobReferralAmount != \'\' && mainData.hotJobFlag != \'\') &&  mainData.referralBonus != (mainData.hotJobReferralAmount | number))}" class="">{{mainData?.referralBonus}}</span>\n        <span *ngIf="mainData.hotJobFlag != \'\' && mainData.referralBonus != (mainData.hotJobReferralAmount | number)  && mainData.hotJobReferralAmount != \'\'" class="hot-amount inr"><img class="rupee-icon" src="assets/imgs/rupee-green.svg" />{{mainData?.hotJobReferralAmount}}</span>\n      </div>\n      \n    </div>\n  </div>\n  <div class="status" *ngIf="mainData">\n    <span class="title"><img class="img-mar5" src="assets/icon/dashboard-icons/ZenRich_process.svg">\n      <span>Status</span></span>\n    <div class="status-bar">\n      <div class="status-item"\n        [ngClass]="{active: item.completionStatus==\'Completed\',pending: item.completionStatus==\'Pending\'}"\n        *ngFor="let item of mainData?.statusFlow">\n        <div class="status-icon">\n          <img *ngIf="item.completionStatus==\'Completed\'" class="info-icon" src="assets/imgs/checked.png" />\n          <img *ngIf="item.completionStatus==\'Incomplete\'" class="info-icon"\n            src="assets/imgs/checked-gray.png" />\n            <img *ngIf="item.completionStatus==\'Pending\'" class="info-icon"\n            src="assets/icon/dashboard-icons/ZEnRich_pendings.svg" />\n            <img *ngIf="item.completionStatus==\'Rejected\'" class="info-icon"\n            src="assets/icon/dashboard-icons/ZenRich_rejected.svg" />\n        </div>\n        <div>\n          <label>{{item.statusKey}}</label>\n          <div>{{item.subStatus}}</div>\n        </div>\n      </div>\n    </div>\n    <div class="title fontStyle">\n      <img class=" info-icon img-mar5" src="assets/icon/dashboard-icons/ZenRich_file.svg"> <span\n        class="calcWidth">{{mainData?.note}}</span>\n    </div>\n  </div>\n  <div class="candidate-info" *ngIf="mainData">\n    <div class="job-icon" (click)="goToSavedProfile(mainData)">\n      <img class="info-icon" src="assets/imgs/new_information.svg" />\n      <span class="title">Candidate Information</span>\n    </div>\n    <div class="candidate-name job-location">\n      <img class="candidateProfileImg img-mar5" src="assets/imgs/Person.png">\n      <span>{{mainData?.candidateName}}</span>\n    </div>\n  </div>\n  <div class="job-details" *ngIf="mainData">\n    <div class="job-icon">\n      <img class="info-icon" src="assets/icon/dashboard-icons/ZenRich_file.svg" />\n      <span class="title">Job Details</span>\n    </div>\n    <div class="job-location">\n      <div class="job-title">{{mainData?.jobTitle}}</div>\n      <div class="joblocation">\n        <img class="info-icon" src="assets/icon/dashboard-icons/ZenRich_location.svg" />\n        <div class="info info-item">Location : {{mainData?.opening?.location}}</div>\n      </div>\n    </div>\n    <div class="joblocation job-location">\n      <img class="info-icon" src="assets/icon/dashboard-icons/ZenRich_skills.svg" />\n      <div class="info info-item">Skills : {{mainData?.opening?.skills}}</div>\n    </div>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zenrich-ref-detail\zenrich-ref-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], ZenrichRefDetailPage);
    return ZenrichRefDetailPage;
}());

//# sourceMappingURL=zenrich-ref-detail.js.map

/***/ })

});
//# sourceMappingURL=41.js.map