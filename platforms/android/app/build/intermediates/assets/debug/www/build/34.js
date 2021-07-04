webpackJsonp([34],{

/***/ 1411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportTypePageModule", function() { return ReportTypePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_type__ = __webpack_require__(1833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReportTypePageModule = /** @class */ (function () {
    function ReportTypePageModule() {
    }
    ReportTypePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__report_type__["a" /* ReportTypePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__report_type__["a" /* ReportTypePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ReportTypePageModule);
    return ReportTypePageModule;
}());

//# sourceMappingURL=report-type.module.js.map

/***/ }),

/***/ 1833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportTypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
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
 * Generated class for the ReportTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportTypePage = /** @class */ (function () {
    function ReportTypePage(navCtrl, navParams, fb, modalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.modalController = modalController;
        this.reportNA = false;
        this.dates = {};
        this.datesFromServer = {};
        this.params = this.navParams.get('reportType');
        this.datesFromServer = this.navParams.get('datesFromServer');
        // console.log(this.params)
        // let curDateMonth = new Date();
        // this.dates = {
        //   startDate: `${curDateMonth.getFullYear()}-${("0" + curDateMonth.getMonth()).slice(-2)}-${("0" + curDateMonth.getDate()).slice(-2)}`,
        //   endDate: `${curDateMonth.getFullYear()}-${("0" + (curDateMonth.getMonth() + 1)).slice(-2)}-${("0" + curDateMonth.getDate()).slice(-2)}`,
        // }
        // let convertedStartDate = curDateMonth.setDate(curDateMonth.getMonth() - 1);
        // this.dates.currentMonth = new Date(convertedStartDate).toISOString();
        var curDateMonth = new Date();
        this.dates = {
            startDate: this.datesFromServer.weekSatrtDate,
            endDate: this.datesFromServer.weekEndDate,
        };
        // let convertedStartDate = curDateMonth.setDate(curDateMonth.getMonth() - 1);
        // this.dates.currentMonth = new Date(convertedStartDate).toISOString();
    }
    ReportTypePage.prototype._getStartDate = function (event) {
        // let getStartDate = new Date(event.year, event.month, event.day + 2);
        // let convertedStartDate = getStartDate.setDate(getStartDate.getDate());
        // this.dates.endDate = new Date(convertedStartDate).toISOString();
        var date1 = new Date(event.year + "-" + event.month + "-" + event.day);
        var date2 = new Date(this.dates.endDate);
        var diffTime = Math.abs(date2 - date1);
        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        // console.log(diffTime + " milliseconds");
        var getStartDate = new Date(event.year, event.month - 1, event.day);
        // let convertedStartDate = getStartDate.setDate(getStartDate.getDate());
        // console.log(convertedStartDate)
        var endDate = new Date(getStartDate);
        // var today = new Date(this.datesFromServer.weekEndDate);
        // today.setHours(0, 0, 0, 0);
        // if (!(endDate > today)) {
        //   this.dates.endDate = endDate.toISOString()
        // } else {
        //   this.dates.endDate = this.datesFromServer.weekEndDate
        // }
        if (diffDays > 30) {
            this.reportNA = true;
        }
        else {
            this.reportNA = false;
        }
    };
    ReportTypePage.prototype._getEndDate = function (event) {
        var date1 = new Date(this.dates.startDate);
        var date2 = new Date(event.year + "-" + event.month + "-" + event.day);
        var diffTime = Math.abs(date2 - date1);
        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays > 30) {
            this.reportNA = true;
        }
        else {
            this.reportNA = false;
        }
    };
    ReportTypePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-report-type',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\dashboard\report-type\report-type.html"*/'<!--\n  Generated template for the ReportTypePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{params?.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card class="cust-card">\n    <ion-card-header class="header-card">\n      <p>Reports - {{params?.title}}</p>\n    </ion-card-header>\n    <ion-card-content>\n      <!-- <ion-grid no-padding>\n        <ion-row class="justify-content-space-btw">\n          <ion-col col-5 no-padding class="dateBorderColor marginRight">\n            <ion-datetime class="timeDate" [(ngModel)]="dates.startDate" displayFormat="DD MMM YYYY"\n              pickerFormat="DD MMM YYYY" placeholder="Start Date" [max]="dates.startDate"\n              (ionChange)="_getStartDate($event)">\n            </ion-datetime>\n          </ion-col>\n          <ion-col col-5 no-padding class="dateBorderColor">\n            <ion-datetime class="timeDate" readonly="true" [(ngModel)]="dates.endDate" [min]="dates.endDate"\n              [max]="dates.endDate" displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" placeholder="End Date">\n            </ion-datetime>\n          </ion-col>\n        </ion-row>\n      </ion-grid> -->\n\n      <ion-grid no-padding>\n        <ion-row class="justify-content-space-btw">\n          <ion-col col-5 no-padding class="dateBorderColor marginRight">\n            <ion-datetime class="timeDate" [(ngModel)]="dates.startDate" displayFormat="DD MMM YYYY"\n              pickerFormat="DD MMM YYYY" placeholder="Start Date" [min]="datesFromServer.threeMonthSatrtDate"\n              [max]="datesFromServer.weekEndDate" (ionChange)="_getStartDate($event)">\n            </ion-datetime>\n          </ion-col>\n          <ion-col col-5 no-padding class="dateBorderColor">\n            <ion-datetime class="timeDate" readonly="true" [(ngModel)]="dates.endDate"\n              [min]="dates.startDate" [max]="datesFromServer.weekEndDate"\n              displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" placeholder="End Date"\n              (ionChange)="_getEndDate($event)">\n            </ion-datetime>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n      <div *ngIf="params?.accessId == 1 || params?.accessId == 2 || params?.accessId == 4 || params?.accessId == 5">\n        <report-common [startDate]="dates.startDate" [reportNA]="reportNA" [endDate]="dates.endDate"\n          [reportType]="params"></report-common>\n      </div>\n\n      <div *ngIf="params?.accessId == 6">\n        <report-timecard [startDate]="dates.startDate" [reportNA]="reportNA" [endDate]="dates.endDate" [reportType]="params">\n        </report-timecard>\n      </div>\n\n      <div *ngIf="params?.accessId == 3">\n        <report-timesheet [startDate]="dates.startDate" [reportNA]="reportNA" [reportNA]="reportNA" [endDate]="dates.endDate" [reportType]="params">\n        </report-timesheet>\n      </div>\n\n      <div *ngIf="params?.accessId == 7">\n        <report-overtime [startDate]="dates.startDate" [reportNA]="reportNA" [endDate]="dates.endDate" [reportType]="params">\n        </report-overtime>\n      </div>\n      <div *ngIf="params?.accessId == 8">\n        <report-not-filledTS [startDate]="dates.startDate" [reportNA]="reportNA" [endDate]="dates.endDate" [reportType]="params">\n        </report-not-filledTS>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n  <div class="report-NA" *ngIf="reportNA">* Note report available only for a month</div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\dashboard\report-type\report-type.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */]])
    ], ReportTypePage);
    return ReportTypePage;
}());

//# sourceMappingURL=report-type.js.map

/***/ })

});
//# sourceMappingURL=34.js.map