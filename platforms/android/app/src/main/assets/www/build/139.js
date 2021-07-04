webpackJsonp([139],{

/***/ 1349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtoEngagementPageModule", function() { return RtoEngagementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rto_engagement__ = __webpack_require__(1771);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RtoEngagementPageModule = /** @class */ (function () {
    function RtoEngagementPageModule() {
    }
    RtoEngagementPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rto_engagement__["a" /* RtoEngagementPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rto_engagement__["a" /* RtoEngagementPage */]),
            ],
        })
    ], RtoEngagementPageModule);
    return RtoEngagementPageModule;
}());

//# sourceMappingURL=rto-engagement.module.js.map

/***/ }),

/***/ 1771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RtoEngagementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(4);
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
 * Generated class for the RtoEngagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RtoEngagementPage = /** @class */ (function () {
    function RtoEngagementPage(navCtrl, navParams, utility, httpProvider, popOver) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.popOver = popOver;
        this.rtoEngagementData = [];
        this.selectedMonth = "";
        this.monthsList = [];
    }
    RtoEngagementPage.prototype.ionViewDidLoad = function () {
        this.getRtoEngagementData();
    };
    RtoEngagementPage.prototype.getRtoEngagementData = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var param = {
            url: 'rtoEngagement',
            data: {
                "month": this.selectedMonth
            },
            miscellaneous: true
        };
        this.httpProvider.http.commonService(param).subscribe(function (response) {
            if (response && response.details) {
                if (_this.selectedMonth == '') {
                    //console.log(response.details);
                    _this.rtoEngagementData = response.details.countryWiseRTOEngegementData;
                    _this.monthsList = response.details.monthList;
                    _this.selectedMonth = _this.monthsList[_this.monthsList.length - 1];
                }
                else if (_this.selectedMonth != '') {
                    //console.log(response.details);
                    _this.rtoEngagementData = response.details.countryWiseRTOEngegementData;
                    _this.monthsList = response.details.monthList;
                }
            }
            else {
            }
            _this.utility.updateLoader(false);
        }, function (error) {
        });
    };
    RtoEngagementPage.prototype.presentOption = function (event) {
        var _this = this;
        var popOver = this.popOver.create('PopoverPage', { 'type': 'rtoData', 'selectedMonth': this.selectedMonth, 'monthsData': this.monthsList });
        popOver.present({ ev: event });
        popOver.onDidDismiss(function (value) {
            if (value) {
                _this.selectedMonth = value.month;
                _this.getRtoEngagementData();
            }
        });
    };
    RtoEngagementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-rto-engagement',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\RTO Dashboard\rto-engagement\rto-engagement.html"*/'<!--\n  Generated template for the RtoEngagementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>RTO Awareness</ion-title>\n    <ion-buttons end (click)="presentOption($event)">\n      <button ion-button style="text-transform: capitalize; font-size: 1.1em;">\n        <img style="margin: 5px;" src="assets/menu_icons/popUpCalender.svg">{{selectedMonth}}\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="contentBackgroud">\n\n  <ion-card *ngFor="let rtoData of rtoEngagementData" class="cardBorder">\n    <ion-card-header class="cardHeader">\n      <span>\n        <img class="cardImg" [src]="rtoData?.icon">\n        <!-- <img *ngIf="rtoData?.key == \'SA\'" class="cardImg" src="assets/new_vd_icon/SA-icon.svg"> -->\n      </span>\n      <span>\n        {{rtoData?.key}}\n      </span>\n    </ion-card-header>\n    <ion-card-content class="contentPadding">\n      <div class="container">\n        <div class="conatinerColoumn" *ngFor="let countryWiseDetails of rtoData.rtDataList">\n          <div *ngIf="countryWiseDetails?.icon != null">\n            <img class="childImg" [src]="countryWiseDetails?.icon">\n          </div>\n          <div class="childData">\n            <span>\n              {{countryWiseDetails?.key}}\n            </span>\n            <span style="font-weight: 600;\n            color: #5288E9;">\n              {{countryWiseDetails?.value | number}}\n            </span>\n          </div>\n\n        </div>\n      </div>\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\RTO Dashboard\rto-engagement\rto-engagement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */]])
    ], RtoEngagementPage);
    return RtoEngagementPage;
}());

//# sourceMappingURL=rto-engagement.js.map

/***/ })

});
//# sourceMappingURL=139.js.map