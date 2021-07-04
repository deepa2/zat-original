webpackJsonp([141],{

/***/ 1327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitStatusPageModule", function() { return ExitStatusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exit_status__ = __webpack_require__(1747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_attachment_attachment__ = __webpack_require__(731);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ExitStatusPageModule = /** @class */ (function () {
    function ExitStatusPageModule() {
    }
    ExitStatusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exit_status__["a" /* ExitStatusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exit_status__["a" /* ExitStatusPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_attachment_attachment__["a" /* Attachment */]]
        })
    ], ExitStatusPageModule);
    return ExitStatusPageModule;
}());

//# sourceMappingURL=exit-status.module.js.map

/***/ }),

/***/ 1747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExitStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_exit_recovery_details_exit_recovery_details__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_exit_email_exit_email__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_rating_rating__ = __webpack_require__(286);
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
 * Generated class for the ExitStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExitStatusPage = /** @class */ (function () {
    function ExitStatusPage(navCtrl, navParams, http, utility, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.utility = utility;
        this.modalCtrl = modalCtrl;
        this.type = 'exit-Status';
    }
    ExitStatusPage.prototype.ionViewDidLoad = function () {
        this.getExitStatusData();
    };
    ExitStatusPage.prototype.needHelp = function () {
        this.navCtrl.push('AddPage', { 'type': 'addQuestion', 'questionId': null, 'answerType': null });
    };
    ExitStatusPage.prototype.openFAQ = function () {
        var data = {
            icon: this.exitStatusData.faqIcon,
            text: this.exitStatusData.faqText
        };
        this.navCtrl.push('ExitFaqPage', { 'faqDetails': data });
    };
    ExitStatusPage.prototype.openRecoveryAmountDetails = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_exit_recovery_details_exit_recovery_details__["a" /* ExitRecoveryDetailsComponent */], { data: this.exitStatusData }, {
            // cssClass: 'faq-modal'
            cssClass: 'emailCSS',
        });
        modal.present();
    };
    ExitStatusPage.prototype.getExitStatusData = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var param = {
            url: 'exitDepartmentTracker',
            data: {},
            zenExit: true
        };
        this.http.http.commonService(param).subscribe(function (response) {
            _this.utility.updateLoader(false);
            console.log(response);
            if (response && response.details) {
                _this.exitStatusData = response.details;
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    ExitStatusPage.prototype.exitMail = function (managersData) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_exit_email_exit_email__["a" /* ExitEmailComponent */], { data: managersData }, {
            // cssClass: 'faq-modal'
            cssClass: 'emailCSS',
        });
        modal.present();
    };
    ExitStatusPage.prototype.updateRating = function (data) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_rating_rating__["a" /* Rating */], { ratingData: data }, { cssClass: 'ratingCSS' });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
                // this.exitStatusData.departmentList.filter((value) => {
                //   if (value.departmentId == data.departmentId) {
                //     value.rating = data.rating - 1;
                //   }
                // })
                var param = {
                    url: 'ratingAgainstDepartment',
                    data: {
                        "rating": data.rating - 1,
                        "departmentId": data.departmentId,
                        "comments": data.comments
                    },
                    zenExit: true
                };
                _this.http.http.commonService(param).subscribe(function (response) {
                    if (response && response.status.statusCode == 1) {
                        _this.getExitStatusData();
                    }
                }, function (error) {
                    _this.utility.updateLoader(false);
                });
            }
        });
    };
    ExitStatusPage.prototype.goToCheckList = function () {
        this.navCtrl.push('ExitChecklistPage');
    };
    ExitStatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-exit-status',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\Exit-Module\exit-status\exit-status.html"*/'<!--\n  Generated template for the ExitStatusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Exit Status</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <div class="exit-status" *ngIf="exitStatusData">\n    <div class="exit-status-container">\n      <p class="exit-status-flex"><img class="exit-status-imgMargin" src="assets/ZenExit-Imgs/calender.svg"><span class="ft-300 heading-width">\n          Seperation initiated On :\n        </span> <span>{{exitStatusData?.resignedDate}} </span> </p>\n      <p class="exit-status-flex"><img class="exit-status-imgMargin" src="assets/ZenExit-Imgs/calender.svg"><span class="ft-300 heading-width"> Last\n          Working\n          Date : </span><span>{{exitStatusData?.lastWorkingDay}}</span> </p>\n      <p class="exit-status-flex"><img class="exit-status-imgMargin" src="assets/ZenExit-Imgs/calender.svg"><span class="ft-300 heading-width">\n          Process\n          Initiation Date: </span> <span>{{exitStatusData?.processInitiationDate}}</span> </p>\n          \n          <!-- As ashish suggested to comment all recovery amount -->\n      <!-- <p class="exit-status-flex" (click)="openRecoveryAmountDetails()" *ngIf="exitStatusData?.recoveryAmount != 0" ><img class="exit-status-imgMargin"\n          src="assets/ZenExit-Imgs/funds-blue.svg"><span class="ft-300 heading-width">\n          Recovery Amount : </span> <span class="underlinedText">{{exitStatusData?.recoveryAmount}}</span> </p> -->\n    </div>\n    <div class="note">\n      <span class="text-font">Note: </span>\n      <span>{{exitStatusData?.exitTrackNote}}</span>\n    </div>\n  </div>\n\n  <div class="exit-status-Sub" *ngIf="exitStatusData">\n    <div class="exit-status-subContainer exit-sub-right" (click)="needHelp()">\n      <span style="display: flex;align-items: center;">\n        <img class="exit-status-imgMargin" src="assets/ZenExit-Imgs/needhelp.svg">\n        <span> Need Help</span>\n      </span>\n      <img src="assets/ZenExit-Imgs/rightArrow.svg">\n    </div>\n\n    <div class="exit-status-subContainer exit-sub-left" (click)="openFAQ()">\n      <span class="faq">\n        <img class="exit-status-imgMargin" src="assets/ZenExit-Imgs/faq.svg">\n        <span> FAQs</span>\n      </span>\n      <img src="assets/ZenExit-Imgs/rightArrow.svg">\n\n    </div>\n  </div>\n\n\n  <div class="exit-status-checklist" *ngIf="exitStatusData">\n    <div class="exit-status-checklist-container">\n      <span class="exit-status-subContainer-right">\n        <img class="exit-status-imgMargin" src="assets/ZenExit-Imgs/documents.svg"><span class="text-font"> Status</span>\n      </span>\n      <span (click)="goToCheckList()" class="text-font checklist">Checklist</span>\n    </div>\n\n    <div class="exit-status-departments">\n      <div *ngFor="let departmentDetails of this.exitStatusData?.departmentList;index as i">\n        <accordian [exitStatusData]="departmentDetails" [length]="this.exitStatusData?.departmentList.length"\n          [index]="i" [type]="type" (sendMail)="exitMail($event)" (updateRating)="updateRating($event)"></accordian>\n      </div>\n    </div>\n  </div>\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\Exit-Module\exit-status\exit-status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */]])
    ], ExitStatusPage);
    return ExitStatusPage;
}());

//# sourceMappingURL=exit-status.js.map

/***/ })

});
//# sourceMappingURL=141.js.map