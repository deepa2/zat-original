webpackJsonp([31],{

/***/ 1413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppliedHoursDetailPageModule", function() { return AppliedHoursDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__applied_hours_detail__ = __webpack_require__(1835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppliedHoursDetailPageModule = /** @class */ (function () {
    function AppliedHoursDetailPageModule() {
    }
    AppliedHoursDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__applied_hours_detail__["a" /* AppliedHoursDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__applied_hours_detail__["a" /* AppliedHoursDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], AppliedHoursDetailPageModule);
    return AppliedHoursDetailPageModule;
}());

//# sourceMappingURL=applied-hours-detail.module.js.map

/***/ }),

/***/ 1835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppliedHoursDetailPage; });
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
 * Generated class for the AppliedHoursDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppliedHoursDetailPage = /** @class */ (function () {
    function AppliedHoursDetailPage(navParams, httpProvider, utility) {
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.utility = utility;
        this.data = null;
        this.dataObj = {
            overTimedetails: null,
            type: 'applied-hours'
        };
        this.data = this.navParams.get('appliedHourItem');
    }
    AppliedHoursDetailPage.prototype.ionViewDidLoad = function () {
    };
    AppliedHoursDetailPage.prototype.ngOnInit = function () {
        if (this.data && this.data.additionalHrsId) {
            this.getAdditionalHrDetails(this.data.additionalHrsId);
        }
    };
    AppliedHoursDetailPage.prototype.getAdditionalHrDetails = function (id) {
        var _this = this;
        this.utility.updateLoader(true);
        var url = 'overtimmehistorydetail';
        var data = {
            'addhrId': id
        };
        this.httpProvider.http.zentsCommonService({ url: url, data: data, overtime: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res && res.data) {
                _this.dataObj.overTimedetails = res.data;
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    AppliedHoursDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-applied-hours-detail',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\overtime\applied-hours-detail\applied-hours-detail.html"*/'<ion-header class="ts-header">\n\n  <ion-navbar>\n    <ion-title>Applied Hours Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="main">\n    <app-list-item [item]="data" [type]="dataObj?.type"></app-list-item>\n    <ion-list margin-top>\n        <span class="track">Track Status</span>\n        <ion-card *ngFor="let detail of dataObj?.overTimedetails;let i=index" no-margin>\n            <div class="profile-pic" item-start>\n              <img src="{{detail.profilePicURL}}" />\n            </div>\n            <div class="info">\n              <ion-label no-margin text-wrap>\n                <span class="name">{{detail.staffName}}</span>\n                <div class="type">{{detail.approverType}}</div>\n                <div class="status">Status: {{detail.status}}</div>\n              </ion-label>\n            </div>\n            <div class="icon">\n              <div *ngIf="detail.approverStatus == 1" class="image">\n                <img src="assets/zents-imgs/approve_unfill_tick.svg" />\n              </div>\n              <div *ngIf="detail.approverStatus == 2" class="image">\n                <img src="assets/zents-imgs/pending_icon.svg" />\n              </div>\n              <div *ngIf="detail.approverStatus == 3" class="image">\n                <img src="assets/zents-imgs/reject_icon.svg" />\n              </div>\n            </div>\n        </ion-card>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\overtime\applied-hours-detail\applied-hours-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], AppliedHoursDetailPage);
    return AppliedHoursDetailPage;
}());

//# sourceMappingURL=applied-hours-detail.js.map

/***/ })

});
//# sourceMappingURL=31.js.map