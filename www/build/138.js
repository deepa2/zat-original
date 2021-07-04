webpackJsonp([138],{

/***/ 1351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtoHomePageModule", function() { return RtoHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rto_home__ = __webpack_require__(1773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_tooltips__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RtoHomePageModule = /** @class */ (function () {
    function RtoHomePageModule() {
    }
    RtoHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rto_home__["a" /* RtoHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rto_home__["a" /* RtoHomePage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__["a" /* NgCircleProgressModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_tooltips__["a" /* TooltipsModule */]
            ],
        })
    ], RtoHomePageModule);
    return RtoHomePageModule;
}());

//# sourceMappingURL=rto-home.module.js.map

/***/ }),

/***/ 1773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RtoHomePage; });
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
 * Generated class for the RtoHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RtoHomePage = /** @class */ (function () {
    function RtoHomePage(navCtrl, navParams, utility, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utility = utility;
        this.http = http;
        this.tooltipEvent = 'click';
        this.activeToolTip = false;
        this.duration = 5500;
    }
    RtoHomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var param = {
            url: 'rtoDashboard',
            data: {},
            miscellaneous: true
        };
        this.http.http.commonService(param).subscribe(function (response) {
            ////console.log(response)
            _this.combinedData = response.details[0];
            _this.rtoPopulation = response.details[1];
            _this.rtoEngagement = response.details[2];
            _this.utility.updateLoader(false);
        }, function (error) {
            _this.utility.updateLoader(false);
            //console.log(error)
        });
    };
    RtoHomePage.prototype.getCountryDetails = function (selectedCountry) {
        //console.log(selectedCountry);
        this.navCtrl.push('RtoCountryWisePage', {
            'selectedCountry': selectedCountry
        });
    };
    RtoHomePage.prototype.goToPage = function (type, event) {
        if (event != undefined) {
            event.stopPropagation();
            return;
        }
        if (type == 'RTO') {
            this.navCtrl.push('RtoPopulationPage');
        }
        if (type == 'RTO Engagement') {
            this.navCtrl.push('RtoEngagementPage');
        }
    };
    RtoHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-rto-home',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\RTO Dashboard\rto-home\rto-home.html"*/'<!--\n  Generated template for the RtoHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Dashboard - Overall</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="contentBackgroud">\n    <div>\n        <div>\n            <ion-card class="cardSize" *ngIf="combinedData">\n                <ion-card-header class="rtoCardHeader">\n                    <span class="cardHeader">\n            <img class="rtoHeadImage" [src]="combinedData?.icon">\n          </span>\n                    <span class="fontStyle">\n            {{combinedData?.key}}\n          </span>\n                    <ion-icon *ngIf="combinedData?.covidToolTip" [tooltip]="combinedData?.covidToolTip" positionV="bottom" [duration]="duration" hideOthers="true" [event]="tooltipEvent" color="dark" item-right arrow=true>\n                        <img class="toolTipImg" src="assets/imgs/info.svg" />\n                    </ion-icon>\n                </ion-card-header>\n                <ion-card-content class="cardPadding">\n                    <div class="combinedGridContent">\n                        <div class="margin1 border10" [ngClass]="{\'bdIndia\':country.key == \'INDIA\',\'bdUS\':country.key == \'US\',\'bdUK\':country.key == \'UK\',\'bdSA\':country.key == \'SA\'}" *ngFor="let country of combinedData?.countryWiseDetails" (click)="getCountryDetails(country)">\n                            <div class="countryFlex">\n                                <span class="rtoGridData">\n                  <img class="countryIcon" [src]="country?.icon">\n                  <span>{{country?.key}}</span>\n                                </span>\n                                <span style="padding: 5px;">\n                  <img class="arrImg" src="assets/menu_icons/arrow-right.svg">\n                </span>\n                            </div>\n                            <div *ngFor="let countryDetails of country.value;index as i">\n                                <span class="countryDetails">\n                  <span class="mrLeft"> {{countryDetails?.key}}</span>\n                                <span class="mrRight">{{countryDetails?.value | number}}</span>\n                                </span>\n                                <div *ngIf="country.value.length > i+1" class="borderBtm"> </div>\n                            </div>\n                        </div>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </div>\n        <div>\n            <ion-card *ngIf="rtoPopulation" class="border10" (click)="goToPage(\'RTO\')">\n                <ion-card-header class="countryFlex populationHeader">\n                    <div class="rtoCardHeader">\n                        <img class="rtoImage" [src]="rtoPopulation?.icon">\n                        <span class="fontStyle">{{rtoPopulation?.key}}</span>\n                        <ion-icon *ngIf="rtoPopulation?.rtoPopulationToolTip" [tooltip]="rtoPopulation?.rtoPopulationToolTip" positionV="bottom" [duration]="duration" hideOthers="true" [event]="tooltipEvent" color="dark" item-right arrow=true (click)="goToPage(\'\',$event)">\n                            <img class="toolTipImg" src="assets/imgs/info.svg" />\n                        </ion-icon>\n                    </div>\n                    <div class="mr5 font9">\n                        <span class="circleImg" [ngStyle]="{\'background-color\':rtoPopulation?.rtopopulationData.overAllRTOPopulationData.plannedColor }"></span><span class="pd3">Planned</span>\n                        <span class="circleImg" [ngStyle]="{\'background-color\':rtoPopulation?.rtopopulationData.overAllRTOPopulationData.actualColor }"></span>\n                        <span class="pd3">Actual</span>\n                    </div>\n                </ion-card-header>\n                <ion-card-content class="flexDisplay">\n                    <div class="rtoGraph">\n                        <circle-progress [percent]="rtoPopulation?.rtopopulationData.overAllRTOPopulationData.actualPercentage" [radius]="100" [outerStrokeWidth]="10" [innerStrokeWidth]="15" [space]="-15" [outerStrokeColor]="rtoPopulation?.rtopopulationData.overAllRTOPopulationData.actualColor"\n                            [innerStrokeColor]="rtoPopulation?.rtopopulationData.overAllRTOPopulationData.plannedColor" [titleFontSize]="24" [unitsFontSize]="24" [showSubtitle]="false" [animation]="true" [animationDuration]="300" [showTitle]=false [showSubtitle]=false\n                            [showUnits]=false startFromZero=false [responsive]="true" outerStrokeLinecap="square"></circle-progress>\n                        <div class="rtoGraphData">\n                            <span><img class="rtoGraphIcon"\n                  [src]="rtoPopulation?.rtopopulationData.overAllRTOPopulationData.icon"></span>\n                            <span class="rtoPoplutionData">\n                <span>{{rtoPopulation?.rtopopulationData.overAllRTOPopulationData.key}}</span>\n                            <span class="fontWeight600">{{rtoPopulation?.rtopopulationData.overAllRTOPopulationData.value}}</span>\n                            </span>\n                        </div>\n                    </div>\n                    <div class="width40">\n                        <div class="rtoBUWiseData" [ngClass]="{\'corporate\':populationData?.key == \'CORPORATE\',\'ads\':populationData?.key == \'ADS\',\'cis\':populationData?.key == \'CIS\'}" *ngFor="let populationData of rtoPopulation.rtopopulationData.rtopopulationDataBUWise">\n                            <span lass="width40"><img class="rtoPopulationIcon" [src]="populationData.icon"> </span>\n                            <span class="rtoBUWiseDetails textColor">\n                <span class="fontWeight600">{{populationData.value}}</span>\n                            <span>{{populationData.key}}</span>\n                            </span>\n                        </div>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </div>\n        <div>\n            <ion-card *ngIf="rtoEngagement" class="border10" (click)="goToPage(\'RTO Engagement\')">\n                <ion-card-header class="rtoCardHeader">\n\n                    <span class="cardHeader">\n            <img class="rtoHeadImage" [src]="rtoEngagement?.icon">\n          </span>\n                    <span class="fontStyle">\n            {{rtoEngagement?.key}}\n          </span>\n                    <ion-icon *ngIf="rtoEngagement?.rtoEngagementToolTip" [tooltip]="rtoEngagement?.rtoEngagementToolTip" positionV="bottom" [duration]="duration" hideOthers="true" [event]="tooltipEvent" color="dark" item-right arrow=true (click)="goToPage(\'\',$event)">\n                        <img class="toolTipImg" src="assets/imgs/info.svg" />\n                    </ion-icon>\n                </ion-card-header>\n                <ion-card-content class="cardPadding">\n                    <div class="rtoEngagement" *ngFor="let rtoEngagementData of rtoEngagement?.rtoengagementData.rtoengagementData">\n                        <div class="rtoEngagementList" *ngFor="let rtoEngagementDetails of rtoEngagementData.rtDataList">\n                            <div *ngIf="rtoEngagementDetails?.icon != null">\n                                <img class="rtoEngagementImg" [src]="rtoEngagementDetails?.icon">\n                            </div>\n                            <div class="rtoEnagegmentFlex">\n                                <span class="fontWeight500 font9">{{rtoEngagementDetails?.key}}</span>\n                                <span class="fontWeight600 font9 txtColor">{{rtoEngagementDetails?.value | number}}</span>\n                            </div>\n                        </div>\n                    </div>\n\n\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\RTO Dashboard\rto-home\rto-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */]])
    ], RtoHomePage);
    return RtoHomePage;
}());

//# sourceMappingURL=rto-home.js.map

/***/ })

});
//# sourceMappingURL=138.js.map