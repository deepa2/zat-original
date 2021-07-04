webpackJsonp([103],{

/***/ 1330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DapDetailPageModule", function() { return DapDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_applicants__ = __webpack_require__(1750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__ = __webpack_require__(732);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DapDetailPageModule = /** @class */ (function () {
    function DapDetailPageModule() {
    }
    DapDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__job_applicants__["a" /* JobApplicantsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__job_applicants__["a" /* JobApplicantsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__["a" /* NgCircleProgressModule */],
            ],
        })
    ], DapDetailPageModule);
    return DapDetailPageModule;
}());

//# sourceMappingURL=job-applicants.module.js.map

/***/ }),

/***/ 1750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobApplicantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobApplicantsPage = /** @class */ (function () {
    function JobApplicantsPage(navCtrl, navParams, inappbrowser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inappbrowser = inappbrowser;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'yes',
            shouldPauseOnSuspend: 'yes',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'yes',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.applicantsallData = navParams.get("appliedData");
        this.appliedCount = this.applicantsallData.applicants;
        this.applicantsData = this.applicantsallData.applicantDetails;
    }
    JobApplicantsPage.prototype.goToprofilePage = function (userId) {
        this.navCtrl.push('NewProfilePage', {
            'userId': userId,
            'profileType': 'zencontacts'
        });
    };
    JobApplicantsPage.prototype.previewCV = function () {
        //console.log("pdf opener")
        var url = "https://zenloungeplus.zensar.com/documents/110907/386167485/Generic+CV.pdf/d371df88-5d2d-4b27-0dd3-cf96e6c94475?t=1587889076872";
        var encodedUrl = encodeURI(url);
        var target = "_system";
        var browser = this.inappbrowser.create(encodedUrl, target, this.options);
    };
    JobApplicantsPage.prototype.getfilledColor = function (value) {
        var filcolor;
        if (value <= 40) {
            filcolor = "#e41515";
        }
        else if (value > 40 && value <= 75) {
            filcolor = "#ff9800";
        }
        else if (value > 75) {
            filcolor = "#149219";
        }
        return filcolor;
    };
    JobApplicantsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'job-applicants',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\job-applicants\job-applicants.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="pageTitile">Applicants</ion-title>\n\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="jobs-wrapper">\n    <div class="jobs-list">\n      <div class="applied-count">Applied {{appliedCount}}</div>\n      <div class="job-item" *ngFor="let item of applicantsData" >\n        <div class="jobs-info-wrapper" (click)="goToprofilePage(item.userId)">\n          <div class="job-icon">\n            <img src="{{item.userPic}}">\n          </div>\n          <div class="job-info">\n            <div class="job-title">{{item.userName}}</div>\n            <div class="job-info-item">\n              <div class="">\n                <img  class="info-img" src="assets/imgs/Idicon.svg">\n              </div>\n              <div class="job-info-value">{{item.userId}}</div>\n            </div>\n            <div class="job-info-item">\n              <div class="">\n                <img class="info-img" src="assets/imgs/Project.svg">\n              </div>\n              <div class="job-info-value">{{item.allocation}}</div>\n            </div>\n           \n          </div>\n          <div class="job-info-item progress">\n            <circle-progress [percent]="item.machingPercent" [radius]="100" [outerStrokeWidth]="15"\n                  [innerStrokeWidth]="15" [space]="-14" [outerStrokeColor]="getfilledColor(item.machingPercent)"\n                  [innerStrokeColor]="\'#DDDDDD\'" [titleFontSize]="50" [unitsFontSize]="50" [showSubtitle]="false"\n                  [animation]="true" [animationDuration]="300" [responsive]="true">\n                </circle-progress>\n            <!-- <div class="job-info-value">{{item.machingPercent}} %</div> -->\n          </div>\n        </div>\n        <div class="applicants">\n          <div class="onboarding">\n            <img class="info-img" src="assets/imgs/alarm-clock.svg">\n            <span class="job-info-title">OnBoarding Time</span>\n            <span>{{item.onBoardingTime}} </span>\n          </div>\n          <div class="cv" (click)="previewCV()">\n            <img class="info-img" src="assets/imgs/curriculum.svg">\n            <span class="job-info-title">CV</span>\n            <span>View</span>\n            <img src="assets/imgs/Arrow-forward-blue.svg">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\job-applicants\job-applicants.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], JobApplicantsPage);
    return JobApplicantsPage;
}());

//# sourceMappingURL=job-applicants.js.map

/***/ })

});
//# sourceMappingURL=103.js.map