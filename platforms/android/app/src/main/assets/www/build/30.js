webpackJsonp([30],{

/***/ 1415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppliedHoursListPageModule", function() { return AppliedHoursListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__applied_hours_list__ = __webpack_require__(1837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppliedHoursListPageModule = /** @class */ (function () {
    function AppliedHoursListPageModule() {
    }
    AppliedHoursListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__applied_hours_list__["a" /* AppliedHoursListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__applied_hours_list__["a" /* AppliedHoursListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__applied_hours_list__["a" /* AppliedHoursListPage */]]
        })
    ], AppliedHoursListPageModule);
    return AppliedHoursListPageModule;
}());

//# sourceMappingURL=applied-hours-list.module.js.map

/***/ }),

/***/ 1837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppliedHoursListPage; });
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
 * Generated class for the AppliedHoursListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppliedHoursListPage = /** @class */ (function () {
    function AppliedHoursListPage(navCtrl, httpProvider, utility) {
        this.navCtrl = navCtrl;
        this.httpProvider = httpProvider;
        this.utility = utility;
        this.start = 0;
        this.perpage = 15;
        this.dataObj = {
            appliedHourData: [],
            type: 'applied-hours',
            showData: false
        };
    }
    AppliedHoursListPage.prototype.ionViewDidLoad = function () {
    };
    AppliedHoursListPage.prototype.ngOnInit = function () {
        this.getAppliedHourList();
    };
    AppliedHoursListPage.prototype.getAppliedHourList = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var url = 'overtimehistory';
        var data = {
            'start': this.start,
            'end': this.perpage
        };
        this.httpProvider.http.zentsCommonService({ url: url, data: data, overtime: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res && res.data) {
                _this.dataObj.showData = true;
                _this.dataObj.appliedHourData = res.data;
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    AppliedHoursListPage.prototype.goToNextPage = function (item) {
        this.navCtrl.push('AppliedHoursDetailPage', { 'appliedHourItem': item });
    };
    AppliedHoursListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-applied-hours-list',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\overtime\applied-hours-list\applied-hours-list.html"*/'<ion-header class="ts-header">\n\n  <ion-navbar>\n    <ion-title>Applied Hours List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="main">\n  <span *ngIf="dataObj?.showData && dataObj?.appliedHourData.length > 0">\n    <span *ngFor="let item of dataObj?.appliedHourData" (click)="goToNextPage(item)">\n      <app-list-item [item]="item" [type]="dataObj?.type"></app-list-item>\n    </span>\n  </span>\n\n  <div text-center padding *ngIf="dataObj?.showData && dataObj?.appliedHourData.length == 0">\n    <p>No records to show.</p>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\overtime\applied-hours-list\applied-hours-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], AppliedHoursListPage);
    return AppliedHoursListPage;
}());

//# sourceMappingURL=applied-hours-list.js.map

/***/ })

});
//# sourceMappingURL=30.js.map