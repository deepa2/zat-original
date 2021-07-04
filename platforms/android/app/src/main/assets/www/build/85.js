webpackJsonp([85],{

/***/ 1353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveProfileDetailsPageModule", function() { return SaveProfileDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__save_profile_details__ = __webpack_require__(1775);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SaveProfileDetailsPageModule = /** @class */ (function () {
    function SaveProfileDetailsPageModule() {
    }
    SaveProfileDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__save_profile_details__["a" /* SaveProfileDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__save_profile_details__["a" /* SaveProfileDetailsPage */]),
            ],
        })
    ], SaveProfileDetailsPageModule);
    return SaveProfileDetailsPageModule;
}());

//# sourceMappingURL=save-profile-details.module.js.map

/***/ }),

/***/ 1775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveProfileDetailsPage; });
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
 * Generated class for the SaveProfileDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SaveProfileDetailsPage = /** @class */ (function () {
    function SaveProfileDetailsPage(navCtrl, navParams, httpProvider, utility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.utility = utility;
        this.profileData = [];
        this.selectedTab = 0;
        this.profileDetails = this.navParams.get('profileDetails');
    }
    SaveProfileDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var param = {
            url: 'getcandidateProfileDetails',
            data: {
                "candidateProfileId": this.profileDetails.candidateProfileId
            },
            zenRich: true
        };
        this.httpProvider.http.commonService(param).subscribe(function (response) {
            console.log(response);
            if (response && response.details && response.details.length > 0) {
                _this.profileData = response.details;
                _this.profileKey = _this.profileData[0].key;
                _this.utility.updateLoader(false);
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    SaveProfileDetailsPage.prototype.changeTab = function (index, key) {
        this.selectedTab = index;
        this.profileKey = key;
    };
    SaveProfileDetailsPage.prototype.goToCandidateProfile = function () {
        this.navCtrl.push('ReferralDetailsPage', {
            'candidateProfileId': this.profileDetails.candidateProfileId,
            "createNew": true
        });
    };
    SaveProfileDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-save-profile-details',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\save-profile-details\save-profile-details.html"*/'<!--\n  Generated template for the SaveProfileDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>SaveProfileDetails</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div style="padding: 5px;\n  font-size: .9em;">\n    <div>\n      <span>\n        <img src="assets/imgs/annual-status.svg">\n      </span>\n      <span>\n        {{profileDetails.candidateName}}\n      </span>\n    </div>\n    <div style="display: inline-block; \n    padding: 5px;" [class.selected]="selectedTab == i" (click)="changeTab(i,profileKey.key)"\n      *ngFor="let profileKey of profileData; index as i">{{profileKey.key}}</div>\n  </div>\n\n  <div>\n    <div *ngFor="let profileDetail of profileData; index as i">\n\n      <ion-list *ngIf="selectedTab == i && profileKey == \'Basic Information\'">\n      <ion-item *ngFor="let profileDetails of profileDetail?.value; index as j">\n          <ion-avatar item-start>\n            <img [src]="profileDetails?.icon">\n          </ion-avatar>\n          <p>{{profileDetails?.key}}</p>\n          <span>{{profileDetails?.key}}</span>\n        </ion-item>\n      </ion-list>\n      \n      <div *ngIf="selectedTab == i && profileKey == \'Matching Jobs\'">\n        <div class="opening-card" *ngFor="let item of profileDetail?.value; index as i">\n          <div class="job-wrapper">\n            <div class="job-icon">\n              <img style="height: 25px;\n              width: 25px;\n              margin: 5px;" src="assets/imgs/annual-status.svg" />\n              <span>{{item?.srfNo}}</span>\n            </div>\n            <div class="job-info" (click)="goToJobDetails(item.srfNo)">\n              <div class="job-title">{{item?.jobTitle}}</div>\n              <div class="skills info"><span><img [src]="item?.skillsIcon"></span>\n                <span>{{item?.skills}}</span></div>\n              <div class="job-location info"><span><img [src]="item?.locationIcon"></span>\n                <span>{{item?.location}}</span></div>\n            </div>\n            <div class="save-job">\n              <ion-icon (click)="$event.stopPropagation()" (click)="bookMarked(item,i)" *ngIf="!item?.isBookmarked"\n                name="ios-bookmark-outline"></ion-icon>\n              <ion-icon (click)="$event.stopPropagation()" (click)="bookMarked(item,i)" *ngIf="item?.isBookmarked"\n                name="bookmark"></ion-icon>\n              <ion-icon name="more" (click)="presentpopover($event)"></ion-icon>\n            </div>\n          </div>\n          <div class="job-footer">\n            <div class="experience">Exp: {{item?.experience}}</div>\n            <div class="referral-Bonus">\n              <span><img [src]="item?.profileMatchIcon"></span>\n              <span class="matchingProfile">{{item?.profileMatchCount}}</span></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-fab bottom right >\n    <button (click)="goToCandidateProfile()" ion-fab *ngIf="profileKey == \'Basic Information\'"> \n      <ion-icon name="md-create"></ion-icon>\n    </button>\n    <button ion-fab *ngIf="profileKey == \'Matching Jobs\'"> \n      <ion-icon name="ios-options-outline"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\save-profile-details\save-profile-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], SaveProfileDetailsPage);
    return SaveProfileDetailsPage;
}());

//# sourceMappingURL=save-profile-details.js.map

/***/ })

});
//# sourceMappingURL=85.js.map