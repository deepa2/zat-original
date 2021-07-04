webpackJsonp([130],{

/***/ 1394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorsPageModule", function() { return MentorsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mentors__ = __webpack_require__(1816);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MentorsPageModule = /** @class */ (function () {
    function MentorsPageModule() {
    }
    MentorsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mentors__["a" /* MentorsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mentors__["a" /* MentorsPage */]),
            ],
        })
    ], MentorsPageModule);
    return MentorsPageModule;
}());

//# sourceMappingURL=mentors.module.js.map

/***/ }),

/***/ 1816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
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
 * Generated class for the MentorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MentorsPage = /** @class */ (function () {
    function MentorsPage(navCtrl, navParams, http, utilities) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.utilities = utilities;
        this.allMentorsList = [];
        this.isMentor_Unavailable = false;
        this.infiniteScroll = '';
        this.searchItem = '';
        this.limit = 9;
        this.offset = 0;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required);
    }
    MentorsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.searchControl.valueChanges.debounceTime(2000).subscribe(function (response) {
            if (response && response.trim() != '') {
                _this.offset = 0;
                _this.limit = 9;
                _this.allMentorsList = [];
                _this.searchItem = response;
                _this.getMentorListData();
            }
            else {
                _this.offset = 0;
                _this.limit = 9;
                _this.allMentorsList = [];
                _this.searchItem = response;
                _this.getMentorListData();
            }
        });
        this.getMentorListData();
    };
    MentorsPage.prototype.getMentorListData = function () {
        var _this = this;
        if (this.allMentorsList.length == 0) {
            this.utilities.updateLoader(true);
        }
        var param = {
            url: 'mentorsList',
            data: {
                offset: this.offset,
                limit: this.limit,
                filter: this.searchItem
            },
            zenLearn: true
        };
        this.http.http.commonService(param).subscribe(function (response) {
            console.log(response);
            if (response && response.details && response.details.responseList.length > 0) {
                _this.isMentor_Unavailable = false;
                _this.allMentorsList = _this.allMentorsList.concat(response.details.responseList);
                _this.utilities.updateLoader(false);
            }
            if (_this.infiniteScroll) {
                _this.infiniteScroll.complete();
                _this.infiniteScroll = "";
            }
            else if (response && response.details && response.details.responseList.length == 0) {
                if (_this.infiniteScroll) {
                    _this.infiniteScroll.complete();
                    _this.infiniteScroll.enabled(false);
                    _this.infiniteScroll = "";
                }
                else {
                    _this.isMentor_Unavailable = true;
                    _this.utilities.updateLoader(false);
                }
            }
            // if(response && response.details && response.details.responseList.length == 0){
            //   this.utilities.updateLoader(false);
            //   this.isMentor_Unavailable = true;
            // }
        }, function (error) {
            _this.utilities.updateLoader(false);
        });
    };
    MentorsPage.prototype.chooseMentor = function (data) {
        var _this = this;
        if (data.isAvailable) {
            this.utilities.presentConfirmation("Do you want " + data.value + " as your mentor? ").then(function () {
                _this.selectedMentor = data;
                _this.navCtrl.pop();
            })
                .catch(function () {
                _this.selectedMentor = '';
            });
        }
        else {
            this.utilities.presentToast("Mentor not available as two Mentees already assigned.");
        }
    };
    MentorsPage.prototype.ionViewWillLeave = function () {
        if (this.selectedMentor) {
            this.navCtrl.getPrevious().data.selectedMentor = this.selectedMentor;
        }
    };
    MentorsPage.prototype.loadMore = function (infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        console.log(this.infiniteScroll);
        this.offset = this.limit + 1;
        this.limit = this.limit + 9;
        this.getMentorListData();
    };
    MentorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mentors',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\mentors\mentors.html"*/'<!--\n  Generated template for the MentorsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Select Mentor</ion-title>\n  </ion-navbar>\n  <ion-searchbar type="text" color="light" placeholder="Search Name/ID" clearInput [(ngModel)]="searchItem"\n    [formControl]="searchControl">\n  </ion-searchbar>\n\n</ion-header>\n\n\n<ion-content class="background">\n\n  <!-- <div class="container">\n    <div *ngFor="let mentorDetails of allMentorsList" class="container-items" [ngClass]="{\'disabled\':!mentorDetails.isAvailable}" (click)="chooseMentor(mentorDetails)">\n      <img class="img-style" [src]="mentorDetails?.profilePic">\n      <span class="associate-name">{{mentorDetails?.value}}</span>\n      <span>{{mentorDetails?.key}}</span>\n\n    </div>\n    \n  </div> -->\n  <div *ngFor="let mentorDetails of allMentorsList" class="container-items" [ngClass]="{\'disabled\':!mentorDetails.isAvailable}"\n    (click)="chooseMentor(mentorDetails)">\n    <div class="user-pic">\n      <img class="img-style" [src]="mentorDetails?.profilePic">\n      <img class="userpic-bg" src="assets/zenLearn-imgs/User_profile_BG.svg">\n    </div>\n    <div style="display: flex;\n    flex-direction: column;\n    padding-top: 8px;\n    width: 80%;">\n      <span class="associate-name">{{mentorDetails?.value}}</span>\n      <span class="skills-value">({{(mentorDetails?.key)}}) {{mentorDetails?.designation}}</span>\n      <div class="skills-container">\n\n        <div class="skills-title">Skills:</div>\n        <div class="skills-value">{{mentorDetails?.skills}}</div>\n      </div>\n      <span>\n        <span class="skills-title" >Exp : </span>\n        <span class="skills-value">{{mentorDetails?.experience}}</span>\n      </span>\n    </div>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <div class="no-mentor" *ngIf="isMentor_Unavailable"> No mentor available</div>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\mentors\mentors.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], MentorsPage);
    return MentorsPage;
}());

//# sourceMappingURL=mentors.js.map

/***/ })

});
//# sourceMappingURL=130.js.map