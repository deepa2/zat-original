webpackJsonp([137],{

/***/ 1352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtoPopulationPageModule", function() { return RtoPopulationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rto_population__ = __webpack_require__(1774);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RtoPopulationPageModule = /** @class */ (function () {
    function RtoPopulationPageModule() {
    }
    RtoPopulationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rto_population__["a" /* RtoPopulationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rto_population__["a" /* RtoPopulationPage */]),
            ],
        })
    ], RtoPopulationPageModule);
    return RtoPopulationPageModule;
}());

//# sourceMappingURL=rto-population.module.js.map

/***/ }),

/***/ 1774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RtoPopulationPage; });
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
 * Generated class for the RtoPopulationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RtoPopulationPage = /** @class */ (function () {
    function RtoPopulationPage(navCtrl, navParams, httpProvider, utilities, popOver) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.utilities = utilities;
        this.popOver = popOver;
        this.selected = 0;
        this.selectedValue = 'BU';
        this.selectedMonth = '';
        this.displayMonth = '';
        this.rtoPopulationData = [];
        this.monthData = [];
    }
    RtoPopulationPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad RtoPopulationPage');
        this.getData();
    };
    RtoPopulationPage.prototype.getData = function () {
        var _this = this;
        this.utilities.updateLoader(true);
        var param = {
            url: 'rtoPopulationData',
            data: {
                type: this.selectedValue,
                month: this.selectedMonth
            },
            miscellaneous: true
        };
        this.httpProvider.http.commonService(param).subscribe(function (response) {
            //console.log(response)
            if (response && response.details) {
                if (_this.selectedMonth == '') {
                    _this.rtoPopulationData = response.details.rtopopulationDataBUWise;
                    _this.monthData = response.details.monthList;
                    var month = void 0;
                    for (var _i = 0, _a = _this.monthData; _i < _a.length; _i++) {
                        var month_1 = _a[_i];
                        if (month_1.isSelected) {
                            _this.displayMonth = month_1.month;
                        }
                    }
                    //console.log(this.displayMonth);
                }
                else if (_this.selectedMonth != '') {
                    _this.rtoPopulationData = response.details.rtopopulationDataBUWise;
                    // this.monthData = response.details.monthList;
                }
            }
            _this.utilities.updateLoader(false);
        }, function (error) {
            //console.log(error)
            _this.utilities.updateLoader(false);
        });
    };
    RtoPopulationPage.prototype.selectTab = function (data, value) {
        this.selected = data;
        this.selectedValue = value;
        this.getData();
    };
    RtoPopulationPage.prototype.openFilter = function (event) {
        var _this = this;
        var popOver = this.popOver.create('PopoverPage', { 'monthFilter': this.monthData, 'type': 'rtoPopulation' });
        popOver.present({ ev: event });
        popOver.onDidDismiss(function (data) {
            if (data) {
                _this.displayMonth = data.month;
                _this.selectedMonth = data.month;
                _this.monthData = _this.monthData.map(function (value) {
                    if (value.month == data.month) {
                        value.isSelected = true;
                    }
                    else {
                        value.isSelected = false;
                    }
                    return value;
                });
                //console.log(this.monthData);
                _this.getData();
            }
        });
    };
    RtoPopulationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-rto-population',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\RTO Dashboard\rto-population\rto-population.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Return To Office</ion-title>\n    <ion-buttons end class="parentBtn">\n      <div [class.selected]="selected == 0" (click)="selectTab(0,\'BU\')">\n        <button [ngStyle]="{\'color\': selected == 0?\'black\':\'white\'}" ion-button style="text-transform: capitalize;">\n          BU\n        </button>\n      </div>\n      <div [class.selected]="selected == 1" (click)="selectTab(1,\'week\')">\n        <button [ngStyle]="{\'color\': selected == 1?\'black\':\'white\'}" ion-button style="text-transform: capitalize;">\n          Week\n        </button>\n      </div>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-row align-items-center class="filterClass">\n      <ion-col>\n        <div class="queryLength">{{displayMonth}}</div>\n      </ion-col>\n      <ion-col center text-right>\n        <button class="filterIcon" ion-button icon-end clear small (click)="openFilter($event)">Filter\n          <ion-icon name="options"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class="backgroundColor">\n\n\n  <ion-card *ngFor="let rtoPopulationDetails of rtoPopulationData" class="cardRadius">\n    <ion-card-header class="cardHeader" style="font-weight: 600; position: relative;">\n      <div *ngIf="rtoPopulationDetails?.month" class="displayFlex">\n        <span class="bgFlex">\n          <img class="parentImg" [src]="rtoPopulationDetails?.bgImg">\n          <!-- <img class="parentImg" src="assets/menu_icons/newIcon.svg"> -->\n          <span class="bgFlex bgImgPos">\n            <img class="calenderImg" [src]="rtoPopulationDetails?.icon">\n            <span class="monthName">{{rtoPopulationDetails?.month}}</span>\n          </span>\n        </span>\n        <span class="mrLeft">{{rtoPopulationDetails?.key}}</span>\n      </div>\n      <div *ngIf="!rtoPopulationDetails?.month" class="displayFlex">\n\n        <img class="parentImg" [src]="rtoPopulationDetails?.icon">\n        <span>{{rtoPopulationDetails?.key}}</span>\n      </div>\n      <span class="rRight">\n        {{rtoPopulationDetails?.totalCount }}\n      </span>\n    </ion-card-header>\n\n    <ion-card-content class="contentPadding">\n      <div class="gridView">\n        <div class="gridColoumn" [ngStyle]="{\'background\':rtopopluationValue?.color}"\n          *ngFor="let rtopopluationValue of rtoPopulationDetails.value">\n          <img class="imgStyle" [src]="rtopopluationValue?.icon">\n          <span class="rtoValues">\n            <span>\n              {{rtopopluationValue?.key}}\n            </span>\n            <span class="font11">\n              {{rtopopluationValue?.value}}\n            </span>\n          </span>\n        </div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\RTO Dashboard\rto-population\rto-population.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */]])
    ], RtoPopulationPage);
    return RtoPopulationPage;
}());

//# sourceMappingURL=rto-population.js.map

/***/ })

});
//# sourceMappingURL=137.js.map