webpackJsonp([102],{

/***/ 1328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDescripitionPageModule", function() { return JobDescripitionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_descripition__ = __webpack_require__(1748);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JobDescripitionPageModule = /** @class */ (function () {
    function JobDescripitionPageModule() {
    }
    JobDescripitionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__job_descripition__["a" /* JobDescripitionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__job_descripition__["a" /* JobDescripitionPage */]),
            ],
        })
    ], JobDescripitionPageModule);
    return JobDescripitionPageModule;
}());

//# sourceMappingURL=job-descripition.module.js.map

/***/ }),

/***/ 1748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDescripitionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobDescripitionPage = /** @class */ (function () {
    function JobDescripitionPage(navCtrl, navParams, utility, store, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utility = utility;
        this.store = store;
        this.popoverCtrl = popoverCtrl;
        this.jobDescripitionUrl = "";
        this.selectedJob = this.navParams.get('selectedJob');
        this.applybutton = this.navParams.get('showApplyButton');
        var parser = new DOMParser();
        var data = parser.parseFromString(this.selectedJob.jobDescription, 'text/html');
    }
    JobDescripitionPage.prototype.ionViewDidLoad = function () {
    };
    JobDescripitionPage.prototype.gotoJobDescriptionPage = function () {
        //this.utility.openWithBrowser(Constants.IJP_URL);
        this.navCtrl.push("ApplyjobPage", { 'jobDetails': this.selectedJob });
    };
    JobDescripitionPage.prototype.getData = function () {
        var _this = this;
        var params = {};
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__app_store__["B" /* GetJobDescriptionAction */](this.jobDescripitionUrl, params));
        return new Promise(function (resolve) {
            _this._jobDescripition = _this.store
                .select(__WEBPACK_IMPORTED_MODULE_3__app_store__["_60" /* getInternalJobPostingState */])
                .subscribe(function (response) {
                if (response.pending == false) {
                    _this.jobDesc = response.data;
                    resolve();
                }
            }, function (err) {
            });
        });
    };
    JobDescripitionPage.prototype.presentOptions = function (myEvent) {
        var popover = this
            .popoverCtrl
            .create('PopoverPage', { 'type': 'others' });
        popover.present({ ev: myEvent });
    };
    JobDescripitionPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    JobDescripitionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-job-descripition',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\job-descripition\job-descripition.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="pageTitile">\n      <div>Job Descripition</div>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-bounce>\n\n\n  <div class="profileBackgroundOverlay"></div>\n\n\n  <div class="text-white padding10-20">\n    <div class="text-white clear-both font16" *ngIf="selectedJob?.requisitionNo">Job Code#:\n      {{selectedJob?.requisitionNo}} </div>\n\n  </div>\n  <div class="extra"></div>\n  <div *ngIf="!selectedJob">No Data Found</div>\n\n  <div class="padding10-20" *ngIf="selectedJob">\n    <div class="grid-cont text-lightGrey font16">\n\n\n      <div *ngIf="!selectedJob?.experience">\n        <ion-icon class="icon-size"><img src="assets/imgs/experience.svg" /></ion-icon>\n      </div>\n      <div *ngIf="!selectedJob?.experience">N/A</div>\n\n      <div *ngIf="selectedJob?.experience">\n        <ion-icon class="icon-size"><img src="assets/imgs/experience.svg" /></ion-icon>\n      </div>\n      <div *ngIf="selectedJob?.experience">{{selectedJob?.experience}}</div>\n\n      <div>\n        <ion-icon class="icon-size"><img src="assets/imgs/location.svg" /></ion-icon>\n      </div>\n      <div>{{selectedJob?.city}}<span *ngIf="selectedJob?.city">,</span> {{selectedJob?.country}}</div>\n\n      <div *ngIf="selectedJob?.primarySkill">\n        <ion-icon class="icon-size"><img src="assets/imgs/writing.svg" /></ion-icon>\n      </div>\n      <div>{{selectedJob?.primarySkill}}</div>\n    </div>\n    <div *ngIf="selectedJob?.project">\n      <div class="font16 padding-top5">Project</div>\n      <div class="text-lightGrey padding-top5">{{selectedJob?.project}}\n      </div>\n    </div>\n\n    <div *ngIf="selectedJob?.practice">\n      <div class="font16 padding-top10">Job Title</div>\n      <div class="text-lightGrey padding-top5">{{selectedJob?.practice}}\n      </div>\n    </div>\n\n    <div *ngIf="selectedJob?.grade">\n      <div class="font16 padding-top10">Grade / Band</div>\n      <div class="text-lightGrey padding-top5">{{selectedJob?.grade}}\n\n      </div>\n    </div>\n\n    <div *ngIf="selectedJob?.jobDescription">\n      <div class="font16 padding-top15">Job Descripition</div>\n      <p class="text-lightGrey margin5-0" [innerHTML]="selectedJob?.jobDescription">\n      </p>\n\n    </div>\n  </div>\n\n</ion-content>\n<ion-footer *ngIf="applybutton">\n  <div class="justify-cont-center"> <button ion-button class="margin3per border-radius20 width60"\n      (click)="gotoJobDescriptionPage()">Apply</button>\n  </div>\n</ion-footer>\n<!--  \n<ion-header>\n  <div class="bg-Img">\n    <ion-navbar>\n      <ion-title>Job Descripition</ion-title>\n    </ion-navbar>\n    <div class="text-white padding10-20">\n      <div class="font16">Job Code# : </div>\n      <div class="font16 padding-top5">Function: program exexutive office government- executive slicexuer project</div>\n    </div>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class="padding10-20">\n    <div class="grid-cont text-lightGrey font16">\n      <div>\n        <ion-icon name="briefcase"></ion-icon>\n      </div>\n      <div>2-3 Years</div>\n      <div>\n        <ion-icon name="pin"></ion-icon>\n      </div>\n      <div>Pune</div>\n      <div>\n        <ion-icon name="create"></ion-icon>\n      </div>\n      <div>Windows server and Client Operating System</div>\n    </div>\n\n    <div>\n      <div class="font16 padding-top15">Job Descripition</div>\n      <p class="text-lightGrey margin5-0">\n        Note that, * here means that you cannot override it with any other more specific rule because .test * would be\n        the\n        most specific rule for every child element. In other words, keep in mind that whatever you put inside .test *\n        cannot be overridden by any more specific css rule because test * is the most specific rule.\n      </p>\n    </div>\n    <div>\n      <div class="font16 padding-top5">Industry Type</div>\n      <div class="text-lightGrey padding-top5">IT-Software / Software Service\n\n      </div>\n    </div>\n    <div>\n      <div class="font16 padding-top10">Functional Area</div>\n      <div class="text-lightGrey padding-top5">IT-Software - Appliaction Programming Maintance\n\n      </div>\n    </div>\n    <div>\n      <div class="font16 padding-top10">Role</div>\n      <div class="text-lightGrey padding-top5">Graphic / Web Designer\n\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <button ion-button class="margin3per border-radius5 width94per" (click)="gotoJobDescriptionPage()">Apply</button>\n</ion-footer>  -->'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\job-descripition\job-descripition.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */]])
    ], JobDescripitionPage);
    return JobDescripitionPage;
}());

//# sourceMappingURL=job-descripition.js.map

/***/ })

});
//# sourceMappingURL=102.js.map