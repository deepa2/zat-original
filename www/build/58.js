webpackJsonp([58],{

/***/ 1379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZenRichSavedProfilesPageModule", function() { return ZenRichSavedProfilesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zen_rich_saved_profiles__ = __webpack_require__(1801);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ZenRichSavedProfilesPageModule = /** @class */ (function () {
    function ZenRichSavedProfilesPageModule() {
    }
    ZenRichSavedProfilesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zen_rich_saved_profiles__["a" /* ZenRichSavedProfilesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zen_rich_saved_profiles__["a" /* ZenRichSavedProfilesPage */]),
            ],
        })
    ], ZenRichSavedProfilesPageModule);
    return ZenRichSavedProfilesPageModule;
}());

//# sourceMappingURL=zen-rich-saved-profiles.module.js.map

/***/ }),

/***/ 1801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZenRichSavedProfilesPage; });
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
 * Generated class for the ZenRichSavedProfilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZenRichSavedProfilesPage = /** @class */ (function () {
    function ZenRichSavedProfilesPage(navCtrl, navParams, httpProvider, utility, ngZone, clipBoard, popoverctr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.utility = utility;
        this.ngZone = ngZone;
        this.clipBoard = clipBoard;
        this.popoverctr = popoverctr;
        this.profileData = [];
        this.selectedTab = 0;
        this.start = 0;
        this.end = 10;
        this.type = 'ALL';
        this.profileDetails = this.navParams.get('profileDetails');
    }
    ZenRichSavedProfilesPage.prototype.ionViewDidLoad = function () {
    };
    ZenRichSavedProfilesPage.prototype.initializeData = function () {
        this.profileDetails;
        this.profileData = [];
        if (this.selectedTab == 0) {
            this.profileKey = '';
        }
        else {
            this.profileKey = this.profileKey;
        }
        this.start = 0;
        this.end = 10;
        this.type = 'ALL';
        this.selectedTab = this.selectedTab;
    };
    ZenRichSavedProfilesPage.prototype.ionViewWillEnter = function () {
        // this.selectedTab = 0;
        this.initializeData();
        this.getData();
    };
    ZenRichSavedProfilesPage.prototype.getData = function () {
        var _this = this;
        if (this.profileData.length == 0) {
            this.utility.updateLoader(true);
        }
        var param = {
            url: 'getcandidateProfileDetails',
            data: {
                "candidateProfileId": this.profileDetails.candidateProfileId,
                start: this.start,
                end: this.end,
                type: this.type
            },
            zenRich: true
        };
        this.httpProvider.http.commonService(param).subscribe(function (response) {
            //console.log(response);
            if (response && response.details && response.details.length > 0 && !_this.infinitescroll) {
                _this.profileData = response.details;
                if (_this.profileKey) {
                    _this.profileKey = _this.profileData[2].key;
                }
                else {
                    _this.profileKey = _this.profileData[0].key;
                }
                _this.utility.updateLoader(false);
            }
            if (response.details.length > 0 && _this.infinitescroll) {
                _this.infinitescroll.complete();
                _this.profileData[_this.selectedTab].value = _this.profileData[_this.selectedTab].value.concat(response.details[0].value);
            }
            if (response.details.length == 0 && _this.infinitescroll) {
                _this.infinitescroll.complete();
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    ZenRichSavedProfilesPage.prototype.changeTab = function (index, key) {
        this.selectedTab = index;
        this.profileKey = key;
    };
    ZenRichSavedProfilesPage.prototype.goToCandidateProfile = function () {
        this.navCtrl.push('ReferralDetailsPage', {
            'candidateProfileId': this.profileDetails.candidateProfileId,
            "createNew": true,
            'isComingFromProfileDetails': true
        });
    };
    ZenRichSavedProfilesPage.prototype.bookMarked = function (selectedItem, index) {
        var _this = this;
        var bookedmarkValue;
        this.profileData.map(function (value) {
            if (value.key == 'Matching Jobs') {
                value.value.map(function (data) {
                    if (data.srfNo == selectedItem.srfNo) {
                        bookedmarkValue = !data.isBookmarked;
                        data.isBookmarked = !data.isBookmarked;
                    }
                    return data;
                });
            }
            return value;
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
    ZenRichSavedProfilesPage.prototype.goToJobDetails = function (srfNo) {
        this.navCtrl.push("ZenrichJobDetailPage", { 'srfNo': srfNo, 'isComingFromSavedProfile': true, 'candidateProfileId': this.profileDetails.candidateProfileId });
    };
    ZenRichSavedProfilesPage.prototype.loadData = function (event) {
        this.infinitescroll = event;
        this.start = this.end;
        this.end += 10;
        this.type = 'MATCHING_JOB';
        this.getData();
    };
    ZenRichSavedProfilesPage.prototype.presentpopover = function (myEvent, jobCode, jobtitle, item) {
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
                    _this.clipBoard.copy(str).then(function () {
                        _this.utility.showToast("Copied to clipboard");
                    });
                }
            }
        });
    };
    ZenRichSavedProfilesPage.prototype.formatDate = function (obj) {
        return this.utility.formatDate(obj);
    };
    ZenRichSavedProfilesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-zen-rich-saved-profiles',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-rich-saved-profiles\zen-rich-saved-profiles.html"*/'<!--\n  Generated template for the ZenRichSavedProfilesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Saved Profiles</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-color">\n\n  <div class="profileConatiner">\n    <div class="profilesection">\n      <span>\n        <img class="profileImg" src="assets/imgs/Person.png">\n      </span>\n      <span class="candidateName">\n        {{profileDetails.candidateName}}\n      </span>\n    </div>\n  </div>\n  <div class="tab">\n    <div class="tabContainer" [hidden]="profileKey.key == \'Additional Information\'" [class.selected]="selectedTab == i"\n      (click)="changeTab(i,profileKey.key)" *ngFor="let profileKey of profileData; index as i">{{profileKey.key}}</div>\n  </div>\n\n\n\n  <div *ngIf="profileData">\n    <div  *ngFor="let profileDetail of profileData; index as i">\n      <ion-list class="tab-con" *ngIf="selectedTab == i && profileKey == \'Basic Information\'">\n        <ion-item *ngFor="let profileDetails of profileDetail?.value; index as j">\n          <ion-avatar item-start>\n            <img [src]="profileDetails?.icon">\n          </ion-avatar>\n          <p>{{profileDetails?.key}}</p>\n          <span *ngIf="profileDetails?.key != \'Date Of Birth\'">{{profileDetails?.value}}</span>\n          <span *ngIf="profileDetails?.key == \'Date Of Birth\'">{{formatDate(profileDetails?.value) | date}}</span>\n        </ion-item>\n      </ion-list>\n\n      <div *ngIf="selectedTab == i && profileKey == \'Matching Jobs\'">\n        <!-- <div class="opening-card" *ngFor="let item of profileDetail?.value; index as i">\n          <div class="job-wrapper">\n            <div class="job-icon">\n              <img class="listImg" src="assets/imgs/annual-status.svg" />\n              <span>{{item?.srfNo}}</span>\n            </div>\n            <div class="job-info" (click)="goToJobDetails(item.srfNo)">\n              <div class="job-title">{{item?.jobTitle}}</div>\n              <div class="skills info"><span><img [src]="item?.skillsIcon"></span>\n                <span>{{item?.skills}}</span></div>\n              <div class="job-location info"><span><img class="imgStyle" [src]="item?.locationIcon"></span>\n                <span>{{item?.location}}</span></div>\n            </div>\n            <div class="save-job">\n              <ion-icon (click)="$event.stopPropagation()" (click)="bookMarked(item,i)" *ngIf="!item?.isBookmarked"\n                name="ios-bookmark-outline"></ion-icon>\n              <ion-icon (click)="$event.stopPropagation()" (click)="bookMarked(item,i)" *ngIf="item?.isBookmarked"\n                name="bookmark"></ion-icon>\n              <ion-icon name="more" (click)="presentpopover($event)"></ion-icon>\n            </div>\n          </div>\n          <div class="job-footer">\n            <div class="experience">Exp. : {{item?.experience}}</div>\n            <div class="referral-Bonus">\n              <span><img [src]="item?.profileMatchIcon"></span>\n              <span class="matchingProfile">{{item?.profileMatchCount}}</span></div>\n          </div>\n        </div> -->\n        <div class="opening-card" *ngFor="let item of profileDetail?.value; index as i">\n          <div class="job-wrapper">\n            <div class="job-icon">\n              <img class="titleImg" src="assets/imgs/job-item-icon.svg" />\n              <span>{{item?.srfNo}}</span>\n            </div>\n            <div class="job-info" (click)="goToJobDetails(item.srfNo)">\n              <div class="job-title">{{item?.jobTitle}}</div>\n              <div class="skills info"><span class="img-mar5"><img\n                    src="assets/icon/dashboard-icons/ZenRich_skills.svg"></span>\n                <span class="calWidth">{{item?.skills}}</span></div>\n              <div class="job-location info"><span class="img-mar5"><img\n                    src="assets/icon/dashboard-icons/ZenRich_location.svg"></span>\n                <span>{{item?.location}}</span></div>\n            </div>\n            <div class="save-job">\n              <img class="bookMarkIcon" (click)="$event.stopPropagation()" (click)="bookMarked(item,i)"\n                *ngIf="!item?.isBookmarked" src="assets/icon/dashboard-icons/bookMarked.svg">\n              <img class="bookMarkIcon" (click)="$event.stopPropagation()" (click)="bookMarked(item,i)"\n                *ngIf="item?.isBookmarked" src="assets/icon/dashboard-icons/bookMarkFilled.svg">\n              <ion-icon name="more" (click)="presentpopover($event,item?.srfNo,item?.jobTitle,item)"></ion-icon>\n            </div>\n          </div>\n          <div class="job-footer">\n            <div class="experience">\n              <span><img src="assets/icon/dashboard-icons/ZenRich_experiance.svg"></span>\n              <span>\n                Exp: {{item?.experience}}\n              </span></div>\n              <div class="experience">\n                <img class="money-icon" src="assets/imgs/money.svg" />\n                <span>Referral: <span class="inr">Upto INR {{item?.referralBonus}}</span></span>\n              </div>\n\n          </div>\n        </div>\n        <div class="noData" *ngIf="profileDetail?.value == null">No data available </div>\n      </div>\n    </div>\n  </div>\n  <ion-infinite-scroll *ngIf="profileKey == \'Matching Jobs\'" (ionInfinite)="loadData($event)">\n    <ion-infinite-scroll-content>\n\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-fab bottom right *ngIf="profileKey == \'Basic Information\'">\n    <button (click)="goToCandidateProfile()" ion-fab>\n      <ion-icon name="md-create"></ion-icon>\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-rich-saved-profiles\zen-rich-saved-profiles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__["a" /* Clipboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */]])
    ], ZenRichSavedProfilesPage);
    return ZenRichSavedProfilesPage;
}());

//# sourceMappingURL=zen-rich-saved-profiles.js.map

/***/ })

});
//# sourceMappingURL=58.js.map