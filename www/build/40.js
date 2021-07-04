webpackJsonp([40],{

/***/ 1409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackdoorEntryPageModule", function() { return BackdoorEntryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backdoor_entry__ = __webpack_require__(1831);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BackdoorEntryPageModule = /** @class */ (function () {
    function BackdoorEntryPageModule() {
    }
    BackdoorEntryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__backdoor_entry__["a" /* BackdoorEntryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__backdoor_entry__["a" /* BackdoorEntryPage */]),
            ]
        })
    ], BackdoorEntryPageModule);
    return BackdoorEntryPageModule;
}());

//# sourceMappingURL=backdoor-entry.module.js.map

/***/ }),

/***/ 1831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackdoorEntryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_http__ = __webpack_require__(4);
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
 * Generated class for the BackdoorEntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BackdoorEntryPage = /** @class */ (function () {
    function BackdoorEntryPage(navCtrl, formBuilder, dataStorage, utility, httpProvider, navctrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.dataStorage = dataStorage;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.navctrl = navctrl;
        this.backdoorLoginUrl = "backdoorlogin";
        //backdoor login
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            // category: ['', Validators.required]
            category: ['TimeEntryPage']
        });
    }
    BackdoorEntryPage.prototype.ionViewDidLoad = function () {
        //
    };
    BackdoorEntryPage.prototype.login = function () {
        var _this = this;
        this.selModule = this.form.get('category').value;
        this.utility.updateLoader(true);
        /**
         * ZenTS Backdoor Service call & response
         */
        // this.httpProvider.http.authenticateZenTS(this.backdoorLoginUrl, this.form.value).subscribe((result: any) => {
        //   this.utility.updateLoader(false);
        //   if (result && result.data && result.data.encryptedToken) {
        //     this.form.reset();
        //     this.dataStorage.saveData('access-allowed', "Y");
        //     this.dataStorage.saveData('loginDetails', result.data);
        //     this.dataStorage.saveData('selectedModule', this.selModule);
        //     this.navCtrl.setRoot(this.selModule.toString());
        //   }
        // }, (err) => {
        //   this.utility.updateLoader(false);
        // })
        /**
        * ZenTalent Backdoor Service call & response
        */
        this.httpProvider.http.authenticate(this.form.value, 'tsBackdoorLogin').subscribe(function (result) {
            _this.utility.updateLoader(false);
            if (result && result.details && result.details.encryptedToken) {
                _this.form.reset();
                _this.dataStorage.saveData('loginStatus', true);
                _this.dataStorage.saveData('access-allowed', "Y");
                _this.dataStorage.saveData('loginDetails', result);
                _this.dataStorage.saveData('encryptedToken', result.details.encryptedToken);
                // this.navCtrl.setRoot('HomePage');
                _this.navCtrl.setRoot('NewHomePage');
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    BackdoorEntryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-backdoor-entry',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\backdoor-entry\backdoor-entry.html"*/'<!--\n  Generated template for the BackdoorEntryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="ts-header">\n\n  <ion-navbar>\n    <ion-title>backdoorEntry</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="form" (ngSubmit)="login()" padding>\n    <ion-list>\n      <ion-item>\n        <ion-label padding text-center>Sign In</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="Staff ID" formControlName="username"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <!-- <ion-list radio-group formControlName="category">\n      <ion-item>\n        <ion-label>Timesheet</ion-label>\n        <ion-radio value="TimeEntryPage" checked></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Additional Hours</ion-label>\n        <ion-radio value="AdditionalHoursPage"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Approval Dashboard</ion-label>\n        <ion-radio value="ApprovalDashboardPage"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>My Attendance/Timesheet</ion-label>\n        <ion-radio value="MyAttendanceTimesheetPage"></ion-radio>\n      </ion-item>\n    </ion-list> -->\n\n    \n    <div padding class="smallBtn">\n      <button ion-button round type="submit" [class.active]="form.valid" [disabled]="!form.valid">\n        Sign In\n      </button>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\backdoor-entry\backdoor-entry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* Data */], __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */]])
    ], BackdoorEntryPage);
    return BackdoorEntryPage;
}());

//# sourceMappingURL=backdoor-entry.js.map

/***/ })

});
//# sourceMappingURL=40.js.map