webpackJsonp([61],{

/***/ 1379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZenDeavorDashboardPageModule", function() { return ZenDeavorDashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zen_deavor_dashboard__ = __webpack_require__(1801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ZenDeavorDashboardPageModule = /** @class */ (function () {
    function ZenDeavorDashboardPageModule() {
    }
    ZenDeavorDashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zen_deavor_dashboard__["a" /* ZenDeavorDashboardPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zen_deavor_dashboard__["a" /* ZenDeavorDashboardPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ZenDeavorDashboardPageModule);
    return ZenDeavorDashboardPageModule;
}());

//# sourceMappingURL=zen-deavor-dashboard.module.js.map

/***/ }),

/***/ 1801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZenDeavorDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ZenDeavorDashboardPage = /** @class */ (function () {
    function ZenDeavorDashboardPage(navCtrl, httpProvider, utility, dataService, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.httpProvider = httpProvider;
        this.utility = utility;
        this.dataService = dataService;
        this.modalCtrl = modalCtrl;
        this.url = "dashboard";
        //  offeringList: any = [];
        this.responseList = [];
        this.userID = '';
        this.dataService.getData("loginDetails").then(function (result) {
            _this.userID = result.details.userDetails.userId;
            //console.log("user id", this.userID)
        });
    }
    ZenDeavorDashboardPage.prototype.ionViewDidLoad = function () {
    };
    ZenDeavorDashboardPage.prototype.ngOnInit = function () {
    };
    ZenDeavorDashboardPage.prototype.ionViewWillEnter = function () {
        // this.checkKRAEligibility()
        this.getDashboardData();
    };
    /**
      * checkKRAEligibility() : method to check whether the user is eligible for appraisal process or not.
      */
    ZenDeavorDashboardPage.prototype.checkKRAEligibility = function () {
        var _this = this;
        var eligibiltyURL = "checkApprisalEligibility";
        this.utility.updateLoader(true);
        this.dataService.getData("loginDetails").then(function (result) {
            _this.userID = result.details.userDetails.userId;
            _this.httpProvider.http.commonService({ url: eligibiltyURL, zenDeavorURL: true, data: { "userId": _this.userID } }).subscribe(function (res) {
                _this.utility.updateLoader(false);
                if (res) {
                    var eligiblityStatus = res['details'].isEligible;
                    if (eligiblityStatus != "Yes") {
                        _this.utility.presentAlert(res['status'].statusMessage);
                    }
                    _this.getDashboardData();
                }
            }, function (err) {
                // this.utilities.hideLoading();
            });
        });
    };
    /**
     * First service integration of zenDeavor module:  Dashboard service
     * which offers us 4 steps of KRA procedure.
     */
    ZenDeavorDashboardPage.prototype.getDashboardData = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var DeavorUrl = {
            url: this.url,
            zenDeavorURL: true,
            data: {}
        };
        this.httpProvider.http.commonService(DeavorUrl).subscribe(function (response) {
            if (response) {
                _this.responseList = response['details'].dashboardList;
                _this.finalStatus = response['details'].finalStatus;
                _this.utility.updateLoader(false);
            }
            else {
                _this.utility.updateLoader(false);
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    /**
     * On clicking KRA this redirects to home page for KRA filling procedure
     * where the actual KRAs can be found
     */
    ZenDeavorDashboardPage.prototype.goToKRA = function (selectedItem, role, data, selectedOffering) {
        console.log("selectedOffering", selectedItem);
        console.log("data", data);
        // if (data.isEligible) {
        if (selectedItem == '2' && data.isEligible) {
            if (this.userID) {
                if (!data.isReadOnly) {
                    this.navCtrl.push("ZenDeavorKraPage", {
                        // 'pageTitle':,
                        userID: this.userID,
                        role: role,
                        finalStatus: this.finalStatus,
                        kraType: data.value
                    });
                }
                else {
                    this.navCtrl.push("ZendeavorPreviewPage", {
                        userID: this.userID,
                        userRole: role,
                        kraType: data.value,
                        isAppraisalDateExpired: data.isEligible,
                        isExpired: data.isExpired
                    });
                }
            }
        }
        else if (selectedItem == '3') {
            //console.log
            if (data.dashboardSpecificationId == "17") {
                this.navCtrl.push('TeamListForGoalSettingPage', {
                    userID: this.userID,
                    userRole: role,
                    isGoalsetting: true
                    // kraType: data.value
                });
            }
            else {
                this.navCtrl.push("ZendeavorTeamListPage", {
                    userID: this.userID,
                    userRole: role,
                    kraType: data.value
                });
            }
        }
        else if (selectedItem == '4') {
            this.navCtrl.push('ZendeavorTeamListPage', {
                userID: this.userID,
                userRole: role,
                kraType: data.value,
                selectedItem: 'Reviewer'
            });
        }
        else if (selectedItem == '5') {
            this.navCtrl.push('ZendeavorAssociateListForConsultationPage', {
                userID: this.userID,
                userRole: role,
                kraType: data.value,
            });
            // this.navCtrl.push('ZendeavorSendConsultationPage')
            // this.modalCtrl.create(SearchAssociatesConsultationModalComponent, {
            //   // 'data': {
            //   //   userData: userID
            //   // }
            // }, {}).present();
            // this.modalCtrl.create(ZendeavorSendConsultationModalComponent, {
            // }, {}).present();
        }
        else if (selectedItem == '1' && data.dashboardSpecificationId == "1" && data.isEligible) {
            if (!data.isReadOnly) {
                this.navCtrl.push('ZendeavorGoalSettingPage', {
                    userID: this.userID,
                    userRole: role,
                    kraYear: data.year
                    // selectedItem: 'Reviewer'
                });
            }
            else if (data.isReadOnly && data.status == '7') {
                this.navCtrl.push('ZendeavorGoalSettingPage', {
                    userID: this.userID,
                    userRole: role,
                    kraYear: data.year
                    // selectedItem: 'Reviewer'
                });
            }
            else {
                this.navCtrl.push("ReviewGoalsPage", {
                    userID: this.userID,
                    userRole: role,
                    kraYear: data.year
                });
            }
            // this.navCtrl.push('ReviewGoalsPage', {
            //   userID: this.userID,
            //   userRole: role,
            //   kraType: data.value,
            //   // selectedItem: 'Reviewer'
            // })
        }
        else if (selectedItem == '1' && data.dashboardSpecificationId == "2") {
            if (data.isShowKraPreviewPage) {
                this.navCtrl.push("ReviewGoalsPage", {
                    userID: this.userID,
                    userRole: role,
                    kraYear: data.year,
                    hideConsentOnKraStatus: true
                });
            }
            else {
                if (!data.isEligible) {
                    this.utility.presentAlert(data.message);
                }
                else {
                    this.utility.presentAlert(data.previewPageAlert);
                }
            }
        }
        else {
            this.utility.presentAlert(data.message);
        }
    };
    // goToTeamList() {
    //   this.navCtrl.push("ZendeavorTeamListPage")ZendeavorReviewerListPage
    // }
    ZenDeavorDashboardPage.prototype.allOffering = function (selectedCourse) {
        var showAllFilters = true;
        if (this.utility.isEmptyOrNullOrUndefined(selectedCourse)) {
            selectedCourse = this.selectedCourse;
            showAllFilters = false;
        }
    };
    ZenDeavorDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-zen-deavor-dashboard',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-deavor-dashboard\zen-deavor-dashboard.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- for demo purpose use this code -->\n  <!-- <div *ngIf="userID==\'47375\'">\n <ion-card style="margin-top: 5px;" [ngClass]="{\'bgKraImgCard\':dashboardItem.value == \'KRA\',\'bgAppraisalImgCard\': dashboardItem.value == \'Appraisal\',\n \'bgAppraiserImgCard\': dashboardItem.value == \'Appraiser\'}" [hidden]="(dashboardItem.value == \'Appraisal\')" *ngFor="let dashboardItem of responseList; index as i">\n <kralist [item]="dashboardItem" (goToKra)="goToKRA(dashboardItem.value,dashboardItem.role,$event,dashboardItem.offerList[i])"></kralist>\n </ion-card>\n </div> -->\n\n  <!-- for production use this code -->\n  <div>\n    <ion-card [ngClass]="{\'bgKraImgCard\':dashboardItem.dashboardId == \'1\',\'bgAppraisalImgCard\': dashboardItem.dashboardId == \'2\',\n  \'bgAppraiserImgCard\': dashboardItem.dashboardId == \'3\', \'bgReviewerImgCard\' : dashboardItem.dashboardId == \'4\',\n  \'bgConsultationImgCard\' : dashboardItem.dashboardId == \'5\'}" *ngFor="let dashboardItem of responseList; index as i">\n      <kralist [item]="dashboardItem"\n        (goToKra)="goToKRA(dashboardItem.dashboardId,dashboardItem.role,$event,dashboardItem.offerList[i])"></kralist>\n    </ion-card>\n\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-deavor-dashboard\zen-deavor-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* Data */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */]])
    ], ZenDeavorDashboardPage);
    return ZenDeavorDashboardPage;
}());

// gotoReviewerPage() {
//   this.navCtrl.push('ZendeavorReviewerListPage')
// }
//# sourceMappingURL=zen-deavor-dashboard.js.map

/***/ })

});
//# sourceMappingURL=61.js.map