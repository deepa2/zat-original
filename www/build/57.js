webpackJsonp([57],{

/***/ 1383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZenRichSearchPageModule", function() { return ZenRichSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zen_rich_search__ = __webpack_require__(1805);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ZenRichSearchPageModule = /** @class */ (function () {
    function ZenRichSearchPageModule() {
    }
    ZenRichSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zen_rich_search__["a" /* ZenRichSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zen_rich_search__["a" /* ZenRichSearchPage */]),
            ],
        })
    ], ZenRichSearchPageModule);
    return ZenRichSearchPageModule;
}());

//# sourceMappingURL=zen-rich-search.module.js.map

/***/ }),

/***/ 1805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZenRichSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_clipboard__ = __webpack_require__(735);
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
 * Generated class for the ZenRichSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZenRichSearchPage = /** @class */ (function () {
    function ZenRichSearchPage(navCtrl, navParams, clipBoard, httpProvider, utility, popoverctr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clipBoard = clipBoard;
        this.httpProvider = httpProvider;
        this.utility = utility;
        this.popoverctr = popoverctr;
        this.showMessage = '';
        this.infinteScroll = '';
        this.openingsData = [];
        this.pastSearches = [];
        this.start = 0;
        this.end = 10;
        this.placeHolder = '';
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required);
        this.paramsData = this.navParams.get('type');
        if (this.paramsData == 'MY_REFERRALS') {
            this.placeHolder = 'Search Candidate Name';
        }
        else {
            this.placeHolder = 'JobCode/Location/Grade/Job Title/skills';
        }
        //console.log(this.paramsData);
    }
    ZenRichSearchPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //console.log('ionViewDidLoad ZenRichSearchPage');
        this.getShowPastSearches();
        this.searchControl.valueChanges.debounceTime(1000).subscribe(function (search) {
            if (search && search.trim() != '') {
                _this.start = 0;
                _this.end = 10;
                //console.log(search);
                _this.pastSearches = [];
                _this.openingsData = [];
                _this.getSearchJobData();
            }
            else {
                _this.showMessage = '';
            }
        });
    };
    ZenRichSearchPage.prototype.getShowPastSearches = function () {
        var _this = this;
        var data = {
            url: 'getSearchHistory',
            data: {
                'start': 0,
                'end': 50
            },
            zenRich: true
        };
        this.httpProvider.http.commonService(data).subscribe(function (response) {
            //console.log(response)
            if (response && response.details) {
                _this.pastSearches = response.details;
            }
        });
    };
    ZenRichSearchPage.prototype.getSearchJobData = function () {
        var _this = this;
        if (this.openingsData.length == 0) {
            this.utility.updateLoader(true);
        }
        var url = 'requestData';
        var param = {
            "searchKey": this.searchItem,
            "start": this.start,
            "type": this.paramsData.parameter,
            "end": this.end
        };
        this.httpProvider.http
            .commonService({ url: url, data: param, zenRich: true })
            .subscribe(function (res) {
            if (res && res.details) {
                if (res.details.requestData && res.details.requestData.length > 0) {
                    //console.log(res.details.requestData)
                    _this.openingsData = _this.openingsData.concat(res.details.requestData);
                    _this.showMessage = '';
                }
                if (_this.infinteScroll) {
                    _this.infinteScroll.complete();
                    _this.infinteScroll = '';
                    return;
                }
                if (!res.details.requestData) {
                    _this.openingsData = [];
                    _this.showMessage = "No data available.";
                }
            }
            _this.utility.updateLoader(false);
        });
    };
    ZenRichSearchPage.prototype.goToJobDetails = function (srfNo) {
        this.navCtrl.push("ZenrichJobDetailPage", { 'srfNo': srfNo });
    };
    ZenRichSearchPage.prototype.bookMarked = function (selectedItem, index) {
        var _this = this;
        var bookedmarkValue;
        this.openingsData.filter(function (value) {
            if (value.srfNo == selectedItem.srfNo) {
                bookedmarkValue = !value.isBookmarked;
                value.isBookmarked = !value.isBookmarked;
            }
        });
        var param = {
            url: 'bookmarkSpecificJob',
            data: {
                srfNo: selectedItem.srfNo,
                save: bookedmarkValue
            },
            zenRich: true
        };
        this.httpProvider.http.commonService(param).subscribe(function (response) {
            //console.log(response)
            _this.utility.showToast(response.details.toastMessage);
        });
    };
    ZenRichSearchPage.prototype.searchJobs = function (jobData) {
        this.searchItem = jobData.searchText;
        this.pastSearches = [];
        //this.getSearchJobData();
    };
    ZenRichSearchPage.prototype.loadData = function (infinteScroll) {
        this.infinteScroll = infinteScroll;
        this.start = this.end;
        this.end += 10;
        this.getSearchJobData();
    };
    ZenRichSearchPage.prototype.goToCandidateProfile = function () {
        this.navCtrl.push('ReferralDetailsPage', {
            'candidateProfileId': 0
        });
    };
    ZenRichSearchPage.prototype.presentpopover = function (myEvent, jobCode, jobtitle) {
        var _this = this;
        var popover = this
            .popoverctr
            .create('PopoverPage', { 'type': 'ZenRich' });
        popover.present({ ev: myEvent });
        popover.onDidDismiss(function (value) {
            if (value != null) {
                if (value == 'CopyCode') {
                    _this.clipBoard.copy(jobCode);
                }
                else {
                    _this.clipBoard.copy(jobtitle);
                }
            }
        });
    };
    ZenRichSearchPage.prototype.formatDate = function (obj) {
        return this.utility.formatDate(obj);
    };
    ZenRichSearchPage.prototype.goToRefDetails = function (refId, srfNo) {
        this.navCtrl.push("ZenrichRefDetailPage", { 'referralMappingId': refId, 'srfNo': srfNo });
    };
    ZenRichSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-zen-rich-search',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-rich-search\zen-rich-search.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Search</ion-title>\n  </ion-navbar>\n  <ion-searchbar type="text" color="light" [placeholder]="placeHolder" clearInput [(ngModel)]="searchItem"\n    [formControl]="searchControl">\n  </ion-searchbar>\n</ion-header>\n\n<ion-content class="bgColor">\n  <div *ngIf="pastSearches.length > 0">\n    <ion-list class="bgList">\n      <div class="ft600">\n        <img src="assets/icon/dashboard-icons/ZenRich_pastsearchDetails.svg">\n        <span style="margin-left: 5px;">Past Searches</span>\n      </div>\n      <ion-item *ngFor="let searchDetails of pastSearches" (click)="searchJobs(searchDetails)">\n        <ion-avatar item-start>\n          <img src="assets/icon/dashboard-icons/ZenRich_pastSearch_new.svg">\n        </ion-avatar>\n        <span class="pastSearchFlex">\n          <span>{{searchDetails?.searchText}}</span>\n          <span class="pastSearchText">{{searchDetails?.searchTime}}</span>\n        </span>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf="this.paramsData.parameter != \'MY_REFERRALS\'">\n\n    <div class="opening-card" *ngFor="let item of openingsData; index as i">\n      <div class="job-wrapper">\n        <div [ngClass]="{\'hot-job\': item.hotJobFlag != \'\'}" class="job-icon jobIcon{{i}}">\n          <!-- <img class="" src="assets/imgs/annual-status.svg" /> -->\n          <img class="" src="assets/imgs/job-item-icon.svg" />\n          <span>{{item?.srfNo}}</span>\n          <div class="hot-con" *ngIf="item.hotJobFlag != \'\'"><img class="hot-icon" src="assets/imgs/hot-icon.svg"> {{item.hotJobFlag}}</div>\n      \n        </div>\n        <div class="job-info" (click)="goToJobDetails(item.srfNo)">\n          <div class="job-title">\n            <span class="job-title-wrap"> <span>{{item?.jobTitle}}</span> </span>\n            <div class="niche-wrap" *ngIf="item.nicheSkillFlag">\n              <img  src="assets/imgs/nicheStar.svg"> \n              <span class="niche-skills">Niche skill</span>\n            </div>\n         \n          </div>\n          <div class="skills info">\n            <span class="img-mar5"><img src="assets/icon/dashboard-icons/ZenRich_skills.svg"></span>\n            <span class="job-skills">{{item?.skills}}</span>\n          </div>\n          <!-- bonus info -->\n          <div class="job-info-footer">\n            <div class="experience">\n              <img class="money-icon" src="assets/imgs/money.svg" />\n              <span>Bonus: Upto <img class="rupee-icon" src="assets/imgs/rupee.svg" /><span [ngClass]="{\'bonus\': ((item.hotJobReferralAmount != \'\' && item.hotJobFlag != \'\') &&  item.referralBonus != (item.hotJobReferralAmount | number))}" class="inr">{{item?.referralBonus}}</span></span>\n              <span *ngIf="item.hotJobFlag != \'\' &&  item.referralBonus != (item.hotJobReferralAmount | number) && item.hotJobReferralAmount != \'\'" class="hot-amount"><img class="rupee-icon" src="assets/imgs/rupee-green.svg" />{{item?.hotJobReferralAmount}}</span>\n            </div>\n            <div class="referral-Bonus">\n              <span><img class="money-icon" src="assets/imgs/Person.png"></span>\n              <span>{{item?.profileMatchCount}}</span></div>\n          </div>\n         \n        </div>\n        <div class="save-job">\n          <img class="bookMarkIcon" (click)="$event.stopPropagation()" (click)="bookMarked(item,i)"\n            *ngIf="!item?.isBookmarked" src="assets/icon/dashboard-icons/bookMarked.svg">\n          <img class="bookMarkIcon" (click)="$event.stopPropagation()" (click)="bookMarked(item,i)"\n            *ngIf="item?.isBookmarked" src="assets/icon/dashboard-icons/bookMarkFilled.svg">\n          <ion-icon name="more" (click)="presentpopover($event,item?.srfNo, item?.jobTitle)"></ion-icon>\n        </div>\n      </div>\n      <div class="job-footer job-info-footer">\n        <div class="experience">\n          <img class="experience-icon" src="assets/icon/dashboard-icons/ZenRich_experiance.svg" />\n          <span class="job-skills">Exp: {{item?.experience}}</span>\n        </div>\n        <div class="job-location"><span><img class="experience-icon"\n              src="assets/icon/dashboard-icons/ZenRich_location.svg"></span>\n          <span class="job-skills">{{item?.location}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf="this.paramsData.parameter == \'MY_REFERRALS\'">\n    <div class="opening-card" *ngFor="let item of openingsData; index as i">\n      <div class="job-wrapper">\n        <div class="job-icon">\n          <img class="listImg" src="assets/imgs/job-item-icon.svg" />\n          <span>{{item?.srfNo}}</span>\n        </div>\n        <div class="job-info" (click)="goToRefDetails(item.referralMappingId,item.srfNo)">\n          <div class="job-title">{{item?.candidateName}}</div>\n          <div class="skills info"><span><img class="imgStyle roundedImg img-mar5" src="assets/imgs/Person.png"></span>\n            <span>{{item?.jobTitle}}</span></div>\n          <div class="job-location info"><span class="img-mar5 imgStyle"><img\n                src="assets/icon/dashboard-icons/ZenRich_calendar.svg"></span>\n            <span>Referred Date : {{formatDate(item?.referredDate) | date}}</span></div>\n        </div>\n        <div class="save-job">\n          <ion-icon name="more" (click)="presentpopover($event)"></ion-icon>\n        </div>\n      </div>\n      <div class="job-footer font9">\n        <div class="experience width50">\n          <span><img class="img-mar5" src="assets/icon/dashboard-icons/ZenRich_process.svg"></span>\n          <span>Status : {{item?.candidateStatus}}</span></div>\n        <div class="referral-Bonus width50">\n          \n          <img class="money-icon" src="assets/imgs/money.svg" />\n          <span>Bonus: <span class="inr">Upto INR {{item?.referralBonus}}</span></span>\n        </div>\n          \n      </div>\n    </div>\n  </div>\n  <div *ngIf="showMessage" class="searchMessage">{{showMessage}}</div>\n\n\n  <ion-infinite-scroll *ngIf="pastSearches.length == 0" (ionInfinite)="loadData($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-rich-search\zen-rich-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_clipboard__["a" /* Clipboard */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */]])
    ], ZenRichSearchPage);
    return ZenRichSearchPage;
}());

//# sourceMappingURL=zen-rich-search.js.map

/***/ })

});
//# sourceMappingURL=57.js.map