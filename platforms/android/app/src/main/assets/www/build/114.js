webpackJsonp([114],{

/***/ 1316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyjobapplicationPageModule", function() { return ApplyjobapplicationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__applyjobapplication__ = __webpack_require__(1538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__ = __webpack_require__(732);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ApplyjobapplicationPageModule = /** @class */ (function () {
    function ApplyjobapplicationPageModule() {
    }
    ApplyjobapplicationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__applyjobapplication__["a" /* ApplyjobapplicationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__applyjobapplication__["a" /* ApplyjobapplicationPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__["a" /* NgCircleProgressModule */]
            ],
        })
    ], ApplyjobapplicationPageModule);
    return ApplyjobapplicationPageModule;
}());

//# sourceMappingURL=applyjobapplication.module.js.map

/***/ }),

/***/ 1538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyjobapplicationPage; });
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
 * Generated class for the ApplyjobapplicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApplyjobapplicationPage = /** @class */ (function () {
    function ApplyjobapplicationPage(navCtrl, navParams, httpProvider, utility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.utility = utility;
        this.url = "jobApplication";
        this.applyJobUrl = 'applyRequisition';
        this.jobDetails = [];
        this.associateDetails = [];
        this.linkedInUrl = '';
        this.associateSummary = '';
        this.selectedJobCode = this.navParams.get('data');
    }
    ApplyjobapplicationPage.prototype.ionViewDidLoad = function () {
        this.getJobApplicationDetails();
    };
    ApplyjobapplicationPage.prototype.getJobApplicationDetails = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var params = {
            url: this.url,
            data: {
                "jobCode": this.selectedJobCode.selectedJobCode
            },
            ijp: true
        };
        this.httpProvider.http.commonService(params).subscribe(function (res) {
            if (res && res.details) {
                // this.jobDetails = res.details.jobDetails;
                // this.associateDetails = res.details.associateDetails;
                _this.wholeData = res.details;
            }
            _this.utility.updateLoader(false);
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    ApplyjobapplicationPage.prototype.submitForm = function () {
        var _this = this;
        this.wholeData.associateDetails.filter(function (item) {
            if (item.bindWith == "linkedInUrl") {
                if (item.titleValue != '' && item.titleValue != null) {
                    _this.linkedInUrl = item.titleValue;
                }
            }
            if (item.bindWith == "additionalDetails") {
                if (item.titleValue != '' && item.titleValue != null) {
                    _this.associateSummary = item.titleValue;
                }
            }
        });
        this.utility.updateLoader(true);
        var formData = {
            url: this.applyJobUrl,
            data: {
                "jobCode": this.selectedJobCode.selectedJobCode,
                "linkedInUrl": this.linkedInUrl,
                "associateSummary": this.associateSummary
            },
            ijp: true
        };
        this.httpProvider.http.commonService(formData).subscribe(function (response) {
            _this.utility.updateLoader(false);
            if (response) {
                if (response.status.statusCode == 1) {
                    _this.utility.presentAlert("Congratulations!<br> You have successfully applied for this job.You will receive email notifications for the next steps.").then(function () {
                        // this.store.dispatch(new fromStore.GetInternalJobPostingAction(this.internalJobPostingurl, params));
                        _this.navCtrl.push('InternalJobPostingPage');
                        _this.navCtrl.remove(_this.navCtrl.getActive().index - 2, 3);
                    });
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    ApplyjobapplicationPage.prototype.showLinkdinProfile = function () {
        var _this = this;
        this.wholeData.associateDetails.filter(function (item) {
            if (item.bindWith == "linkedInUrl") {
                if (item.titleValue != '' && item.titleValue != null) {
                    _this.utility.openWithSystemBrowser(item.titleValue);
                }
            }
        });
    };
    ApplyjobapplicationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-applyjobapplication',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\applyjobapplication\applyjobapplication.html"*/'<!--\n  Generated template for the ApplyjobapplicationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title class="pageTitile">Application Details</ion-title>\n    <ion-buttons end>\n      <button style="text-transform: capitalize;" ion-button (click)="submitForm()">\n        Apply\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf="wholeData" class="navBg jobCodeBar">\n    <div class="display-flex align-item-center">\n      <div class="padding3 width22per">\n        <div><img class="icon-size" [src]="wholeData?.icon" /></div>\n      </div>\n      <div class="rightSection width54per">\n        <div class="alertCustomCss">{{wholeData?.jobTitle}}</div>\n\n        <div>Job Code :{{wholeData?.jobCode}}</div>\n      </div>\n      <div class="headerCirSize">\n        <circle-progress [percent]="selectedJobCode.currentMatch" [radius]="100" [outerStrokeWidth]="15"\n          [innerStrokeWidth]="15" [space]="-14" [outerStrokeColor]="selectedJobCode.filledColor"\n          [innerStrokeColor]="selectedJobCode.nonFilledColor" [showSubtitle]="false" [animation]="true"\n          [animationDuration]="300" [responsive]="true">\n        </circle-progress>\n      </div>\n    </div>\n  </div>\n\n  <div class="jobDetails">\n    <ion-list *ngFor="let details of wholeData?.jobDetails" class="detailList">\n      <ion-row>\n        <ion-col col-4>\n          <!-- <img [src]="details.key"> -->\n          {{details.key}}\n        </ion-col>\n        <ion-col col-8 [innerHTML] = "details.value" >\n          <!-- {{details.value}} -->\n        </ion-col>\n        <!-- <ion-col col-8 *ngIf="details.key == \'Project\'" [innerHTML]= "details.value">\n          \n        </ion-col> -->\n      </ion-row>\n    </ion-list>\n  </div>\n  <div class="associateDetails" *ngIf="wholeData?.associateDetails">\n    <div class="associateDetailsList">\n      <span class="headingPadding">Associate Details (optional)</span><span><img (click)="showLinkdinProfile()"\n          class="linkdinIcon" src="assets/new_vd_icon/edge-linkdin.png"></span>\n    </div>\n    <ion-list *ngFor="let details of wholeData?.associateDetails" class="listMrg">\n      <ion-input class="textSized" *ngIf="details.fieldType == \'text\'" placeholder="LinkedIn Url" type="text"\n        [(ngModel)]="details.titleValue">\n      </ion-input>\n      <ion-textarea class="singleTextArea" style="font-size: 1em;" *ngIf="details.fieldType == \'textArea\'"\n        elasticTextArea placeholder="Tell us why you are suitable for this open position "\n        [(ngModel)]="details.titleValue">\n      </ion-textarea>\n\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n<ion-footer class="footerBg">\n  <!-- <button ion-button round (click)="submitForm()">Apply</button> -->\n\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\applyjobapplication\applyjobapplication.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], ApplyjobapplicationPage);
    return ApplyjobapplicationPage;
}());

//# sourceMappingURL=applyjobapplication.js.map

/***/ })

});
//# sourceMappingURL=114.js.map