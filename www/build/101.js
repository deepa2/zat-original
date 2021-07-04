webpackJsonp([101],{

/***/ 1335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobSkillDataPageModule", function() { return JobSkillDataPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_skill_data__ = __webpack_require__(1755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__ = __webpack_require__(732);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JobSkillDataPageModule = /** @class */ (function () {
    function JobSkillDataPageModule() {
    }
    JobSkillDataPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__job_skill_data__["a" /* JobSkillDataPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__job_skill_data__["a" /* JobSkillDataPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__["a" /* NgCircleProgressModule */]
            ],
        })
    ], JobSkillDataPageModule);
    return JobSkillDataPageModule;
}());

//# sourceMappingURL=job-skill-data.module.js.map

/***/ }),

/***/ 1755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobSkillDataPage; });
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




var JobSkillDataPage = /** @class */ (function () {
    function JobSkillDataPage(navCtrl, navParams, httpProvider, commonUtil) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.commonUtil = commonUtil;
        this.jobSkillUrl = "jobSkillData";
        this.moreDetails = [];
        this.skillList = [];
        this.isDataAvailable = false;
        this.data = this.navParams.get('selectedJob');
        //console.log(this.data);
    }
    JobSkillDataPage.prototype.ionViewDidLoad = function () {
    };
    JobSkillDataPage.prototype.ionViewWillEnter = function () {
    };
    JobSkillDataPage.prototype.ngOnInit = function () {
        this.getJobSkills();
    };
    /**
     * Service call for getting jobs skill data/job insights
     */
    JobSkillDataPage.prototype.getJobSkills = function () {
        var _this = this;
        this.commonUtil.updateLoader(true);
        var jobSkills = {
            url: this.jobSkillUrl,
            data: {
                "jobCode": this.data.jobCode,
                "end": "30",
                "searchText": ""
            },
            ijp: true
        };
        this.httpProvider.http.commonService(jobSkills).subscribe(function (response) {
            if (response) {
                _this.moreDetails = response['details'].moreDetails;
                _this.bestMatch = response['details'].bestMatch;
                _this.currentMatch = response['details'].currentMatch;
                _this.jobCode = response['details'].jobCode;
                _this.icon = response['details'].icon;
                _this.filledColor = response['details'].filledColor;
                _this.nonFilledColor = response['details'].nonfilledColor;
                _this.jobDescription = response['details'].jobDescription;
                for (var i = 0; i < _this.moreDetails.length; i++) {
                    _this.skillList = response['details'].moreDetails[i].skill;
                }
                _this.isDataAvailable = true;
                _this.commonUtil.updateLoader(false);
            }
        });
    };
    JobSkillDataPage.prototype.goToApplyJob = function () {
        var data = {
            'selectedJobCode': this.data.jobCode,
            'currentMatch': this.currentMatch,
            'filledColor': this.filledColor,
            'nonFilledColor': this.nonFilledColor
        };
        this.navCtrl.push("ApplyjobapplicationPage", {
            'data': data
        });
    };
    JobSkillDataPage.prototype.formatDate = function (obj) {
        return this.commonUtil.formatDate(obj);
    };
    JobSkillDataPage.prototype.enrollNow = function () {
        this.commonUtil.presentAlert("You have been successfully enrolled in this course. This has also been added in your learning calendar.");
    };
    JobSkillDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-job-skill-data',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\job-skill-data\job-skill-data.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="pageTitile">Job Insights</ion-title>\n    <ion-buttons end *ngIf="data.type!=\'upcoming\' && data.type!=\'applied\'">\n      <button style="text-transform: capitalize;" ion-button (click)="goToApplyJob()">\n        Apply\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="navBg jobCodeBar" *ngIf="isDataAvailable">\n    <div class="display-flex align-item-center">\n      <div class="padding3 width22per">\n        <div><img class="icon-size" [src]="icon" /></div>\n      </div>\n      <div class="rightSection width54per">\n        <div class="alertCustomCss">{{jobDescription}}</div>\n\n        <div *ngIf="data.type!=\'upcoming\'">Job Code : {{jobCode}}</div>\n      </div>\n      <div class="headerCirSize">\n        <circle-progress [percent]="currentMatch" [radius]="100" [outerStrokeWidth]="15" [innerStrokeWidth]="15"\n          [space]="-14" [outerStrokeColor]="filledColor" [innerStrokeColor]="nonFilledColor" [showSubtitle]="false"\n          [animation]="true" [animationDuration]="300" [responsive]="true">\n        </circle-progress>\n      </div>\n    </div>\n  </div>\n\n  <ion-card *ngFor="let skills of moreDetails ; index as i">\n\n    <div *ngIf="skills.matchingPercentage != null" class="display-flex align-item-center width100per">\n      <div class="padding3 width22per">\n        <div class="skillImg"><img class="skillIcon" [src]="skills.icon" /></div>\n      </div>\n      <div class="rightSection width54per">\n        <div *ngFor="let item of skills.skill">\n          <div class="lightgrey">{{item.key}}:</div>\n          <div *ngIf="item.value != \'\'" class="darkgrey">{{item.value}}</div>\n          <div *ngIf="item.value == \'\'" class="darkgrey">N/A</div>\n        </div>\n      </div>\n      <div class="circleSize">\n        <circle-progress [percent]="skills.matchingPercentage" [radius]="100" [outerStrokeWidth]="15"\n          [innerStrokeWidth]="15" [space]="-14" [outerStrokeColor]="skills.filledColor"\n          [innerStrokeColor]="skills.nonfilledColor" [titleFontSize]="26" [unitsFontSize]="24" [showSubtitle]="false"\n          [animation]="true" [animationDuration]="300" [responsive]="true">\n        </circle-progress>\n      </div>\n    </div>\n    <ion-card-content *ngIf="skills?.jobCourseList?.length > 0" class="courseListBG">\n      <div class="courseListSt">\n        <span class="courseListSkill">{{skills?.jobSkill}}</span>\n        <!-- <span><span style="color:grey">Expected match increase :</span>\n          <span style="color: green">{{skills?.expectedMatchIncrease}}%</span></span> -->\n      </div>\n      <ion-slides slidesPerView="1.3" spaceBetween="10">\n        <ion-slide *ngFor="let courseList of skills.jobCourseList;index as i">\n\n          <div class="courseListDspFlx">\n            <div>\n              <img class="courseImg" [src]="courseList.courseImage"> </div>\n            <div class="courseDetails">\n              <p class="courseTitle">{{courseList.courseText}}</p>\n              <p class="courselistDetails">{{formatDate(courseList.courseDate) | date}}</p>\n              <p class="fcourselistDetails">{{courseList.duration}} Hrs </p>\n\n              <span (click)="enrollNow()" class="enrollNow">\n                Enroll Now</span>\n            </div>\n          </div>\n        </ion-slide>\n\n\n\n      </ion-slides>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\job-skill-data\job-skill-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], JobSkillDataPage);
    return JobSkillDataPage;
}());

//# sourceMappingURL=job-skill-data.js.map

/***/ })

});
//# sourceMappingURL=101.js.map