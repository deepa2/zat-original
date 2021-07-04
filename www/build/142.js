webpackJsonp([142],{

/***/ 1332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitChecklistPageModule", function() { return ExitChecklistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exit_checklist__ = __webpack_require__(1752);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExitChecklistPageModule = /** @class */ (function () {
    function ExitChecklistPageModule() {
    }
    ExitChecklistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exit_checklist__["a" /* ExitChecklistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exit_checklist__["a" /* ExitChecklistPage */]),
            ],
        })
    ], ExitChecklistPageModule);
    return ExitChecklistPageModule;
}());

//# sourceMappingURL=exit-checklist.module.js.map

/***/ }),

/***/ 1752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExitChecklistPage; });
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
 * Generated class for the ExitChecklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExitChecklistPage = /** @class */ (function () {
    function ExitChecklistPage(navCtrl, navParams, http, utility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.utility = utility;
    }
    ExitChecklistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var params = {
            url: 'exitCheckList',
            data: {},
            zenExit: true
        };
        this.http.http.commonService(params).subscribe(function (response) {
            _this.utility.updateLoader(false);
            if (response && response.details) {
                _this.exitCheckList = response.details.exitCheckList;
            }
            console.log(response);
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    ExitChecklistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-exit-checklist',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\Exit-Module\exit-checklist\exit-checklist.html"*/'<!--\n  Generated template for the ExitChecklistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>CheckList</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!-- <div class="main"  *ngFor="let listItem of exitCheckList; index as i">\n    <div class="list-container" >\n      <div class="list-details list-Style">\n        <img src="assets/ZenExit-Imgs/note-white.svg">\n        <span>{{listItem?.listid}}</span>\n      </div>\n      <div  class="content-details">\n        {{listItem?.listDesc}}\n      </div>\n      </div>\n    <div class="content-border"></div>\n   </div> -->\n\n  <!-- <div class="main-container" style="text-align: justify;">\n    <div class="mr-tp">\n      <div class="parent-container">\n        <span class="parent-img manager">\n          <img src="assets/ZenExit-Imgs/note-white.svg">\n        </span>\n        <span class="parent-text">\n          Manager Clearance\n        </span>\n      </div>\n      <div class="child-container">\n\n        <img src="assets/ZenExit-Imgs/checklist.png">\n        <span>Your 1st up Manager needs to provide clearance on the Manager Clearance Page</span>\n      </div>\n    </div>\n\n    <div class="mr-tp">\n      <div class="parent-container">\n        <span class="parent-img admin">\n          <img src="assets/ZenExit-Imgs/note-white.svg">\n        </span>\n        <span class="parent-text">\n          Admin Team\n        </span>\n      </div>\n      <div class="child-container">\n\n        <img src="assets/ZenExit-Imgs/checklist.png">\n        <span>For Admin clearance, kindly submit your Car/Bus pass/Vehicle Pass Sticker /Drawer Keys/DLF Card/SIM\n          Card/ID\n          & Access Card a day before your LWD. (mention the location in the contact details), they will issue a\n          temporary\n          ID card.</span>\n      </div>\n    </div>\n    <div class="mr-tp">\n      <div class="parent-container">\n        <span class="parent-img tims">\n          <img src="assets/ZenExit-Imgs/note-white.svg">\n        </span>\n        <span class="parent-text">\n          TIMS-Logistic Clearance\n        </span>\n      </div>\n      <div class="child-container">\n        <img src="assets/ZenExit-Imgs/checklist.png">\n        <span>Please raise an e-form a day before your LWD, if the desktop is allocated under your name.</span>\n      </div>\n      <div class="child-container">\n        <img src="assets/ZenExit-Imgs/checklist.png">\n        <span>Kindly submit your Laptop/assigned asset by the company, to the logistic team.</span>\n      </div>\n      <div class="child-container">\n        <img src="assets/ZenExit-Imgs/checklist.png">\n        <span>If an associate fails to return the Laptop, Rs. 1 Lakh will be recovered. Also, recovery will be done if\n          assets are submitted to any of your Colleagues/Manager.</span>\n      </div>\n      <div class="child-container">\n        <img src="assets/ZenExit-Imgs/checklist.png">\n        <span>In case, if any assigned asset (mentioned in the Logistic Page) is not returned, then the amount will be\n          deducted from your F N F.</span>\n      </div>\n    </div>\n    <div class="mr-tp">\n      <div class="parent-container">\n        <span class="parent-img gm">\n          <img src="assets/ZenExit-Imgs/note-white.svg">\n        </span>\n        <span class="parent-text">\n          Global Mobility Clearance\n        </span>\n      </div>\n      <div class="child-container">\n        <img src="assets/ZenExit-Imgs/checklist.png">\n\n        <span>During your exit process, ensure that all the valid company sponsored visas/ permits are canceled, except\n          where the same is statutorily permitted to hold. Please connect with respective Global Mobility POC for the\n          necessary.</span>\n      </div>\n    </div>\n    <div class="mr-tp">\n      <div class="parent-container">\n        <span class="parent-img payroll">\n          <img src="assets/ZenExit-Imgs/note-white.svg">\n        </span>\n        <span class="parent-text">\n          Payroll Clearance\n        </span>\n      </div>\n      <div class="child-container">\n        <img src="assets/ZenExit-Imgs/checklist.png">\n\n        <span>Once all the above clearances are done kindly reach out to the payroll department for clearance.</span>\n      </div>\n\n      <div class="child-container">\n        <img src="assets/ZenExit-Imgs/checklist.png">\n\n        <span>Under Payroll clearance- Travel Advance Clearance and Payroll clearance are required.</span>\n      </div>\n\n      <div class="child-container">\n        <img src="assets/ZenExit-Imgs/checklist.png">\n\n        <span>You must submit all tax-exempt proof receipts (Rent Receipts, LIC, PPF, Tuition fees) to the\n          Payroll</span>\n      </div>\n    </div>\n    <div class="mr-tp">\n      <div class="parent-container">\n        <span class="parent-img leaves">\n          <img src="assets/ZenExit-Imgs/note-white.svg">\n        </span>\n        <span class="parent-text">\n          Leaves Encashment and Deductions\n        </span>\n      </div>\n\n\n      <div class="sub-heading">Flexi Leave (FL)</div>\n      <div class="child-container mar-lt">\n        <img src="assets/ZenExit-Imgs/checklist.png">\n\n        <span>If an associate exits mid-year after exhausting all the Flexi leaves; the Flexi leaves utilized over and\n          above the pro-rata for the year will be deducted in Full and Final (F & F) settlement. Any Balance of Flexi\n          Leave will not be enchased.</span>\n      </div>\n      <p class="sub-heading">Please Note: Flexi Leave Deduction is done on Gross Salary.</p>\n\n\n\n      <div class="sub-heading">Privilege Leave (PL)</div>\n      <div class="child-container mar-lt">\n        <img src="assets/ZenExit-Imgs/checklist.png">\n        <span> Encashment of PLs will be done on separation and will be paid along with Full and final settlement as per\n          the leave Policy. All encashment of PL will be on basic pay.\n          You can check India Leave policy for a better understanding of the process.</span>\n      </div>\n      <div class="sub-heading">(Zenlounge+/Zenpolicies/India/HR/Leave Policy.)</div>\n\n    </div>\n    <div class="mr-tp">\n      <div class="parent-container">\n        <span class="parent-img ts">\n          <img src="assets/ZenExit-Imgs/note-white.svg">\n        </span>\n        <span class="parent-text">\n          Timesheet Policy\n        </span>\n      </div>\n      <div class="child-container">\n        <img src="assets/ZenExit-Imgs/checklist.png">\n        <span>As per the policy, please fill your timesheet on daily basis. You can only fill timesheets for the past 5\n          days, beyond that the system will not allow you to do so.</span>\n      </div>\n      <div class="mr-tp">\n        <span class="sub-heading">During your Exit week</span>\n        <div class="child-container">\n          <img src="assets/ZenExit-Imgs/checklist.png">\n          <span>Kindly ensure to fill your timesheet or update any leave on daily basis, no request to update\n            leave/timesheet from the backend will be considered.</span>\n        </div>\n        <div class="sub-heading">Timesheet for the Last working day will be updated from the backend.</div>\n      </div>\n    </div>\n\n    <div class="mr-tp">\n      <div class="parent-container">\n        <span class="parent-img stats">\n          <img src="assets/ZenExit-Imgs/note-white.svg">\n        </span>\n        <span class="parent-text">\n          Statutory Payout\n        </span>\n      </div>\n      <div class="sub-heading">Gratuity</div>\n      <div class="child-container">\n        <img src="assets/ZenExit-Imgs/checklist.png">\n        <span>If you are eligible, the amount will get paid directly into your bank account</span>\n      </div>\n\n      <div class="sub-heading">Provident Fund transfer/ Withdrawal proces</div>\n      <div class="child-container">\n        <img src="assets/ZenExit-Imgs/checklist.png">\n        <span>In case you are continuing your employment with any other company you cannot withdraw the PF. You will\n          have\n          to transfer the PF.</span>\n      </div>\n    </div>\n\n    <div class="last-container">\n      <div class="process-txt"> Process for Provident Fund (PF) transfer</div>\n      <div class="mr-para">please refer user guide on Zenlounge+/Zen policies/India/HR/Associate Exit Clearance Process-\n        User Manual.</div>\n    </div>\n  </div> -->\n\n  <div [innerHTML]="exitCheckList"></div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\Exit-Module\exit-checklist\exit-checklist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], ExitChecklistPage);
    return ExitChecklistPage;
}());

//# sourceMappingURL=exit-checklist.js.map

/***/ })

});
//# sourceMappingURL=142.js.map