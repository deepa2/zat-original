webpackJsonp([62],{

/***/ 1378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZenadminRouteDetailsPageModule", function() { return ZenadminRouteDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zenadmin_route_details__ = __webpack_require__(1800);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ZenadminRouteDetailsPageModule = /** @class */ (function () {
    function ZenadminRouteDetailsPageModule() {
    }
    ZenadminRouteDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zenadmin_route_details__["a" /* ZenadminRouteDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zenadmin_route_details__["a" /* ZenadminRouteDetailsPage */]),
            ],
        })
    ], ZenadminRouteDetailsPageModule);
    return ZenadminRouteDetailsPageModule;
}());

//# sourceMappingURL=zenadmin-route-details.module.js.map

/***/ }),

/***/ 1800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZenadminRouteDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the ZenadminRouteDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZenadminRouteDetailsPage = /** @class */ (function () {
    function ZenadminRouteDetailsPage(navCtrl, navParams, modalCtrl, utility, httpProvider, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.popoverCtrl = popoverCtrl;
        this.responseList = [];
        this.pickupPointsList = [];
        this.busRouteId = this.navParams.get('busRouteId');
        this.busDetails = this.navParams.get('busDetailsData');
        this.isShuttle = this.busDetails ? this.busDetails.isShuttleRoute : false;
    }
    ZenadminRouteDetailsPage.prototype.ionViewDidLoad = function () {
        if (!this.utility.isEmptyOrNullOrUndefined(this.busRouteId)) {
            this.getRouteDetails();
        }
    };
    /**
    * Service call for route details-Returns list of pickup points for particular route
    */
    ZenadminRouteDetailsPage.prototype.getRouteDetails = function () {
        var _this = this;
        this.utility.updateLoader(true);
        this.subscription = this.httpProvider.http.commonService({ url: "getBusRouteDetails", isZenAdmin: true, data: { "busRouteId": this.busRouteId } })
            .subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (!_this.utility.isEmptyOrNullOrUndefined(res) && !_this.utility.isEmptyOrNullOrUndefined(res['data'])) {
                _this.responseList = res['data'];
                _this.pickupPointsList = _this.responseList.pickupPointsDOs;
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    ZenadminRouteDetailsPage.prototype.ngOnDestroy = function () {
        if (this.subscription)
            this.subscription.unsubscribe();
    };
    // Open Popover 
    ZenadminRouteDetailsPage.prototype.openPopOverMenu = function (event, item) {
        var _this = this;
        var popover = this.popoverCtrl.create("PopoverPage", {
            type: "passCharges",
            data: {
                monthly: item.monthlyCost,
                daily: item.dailyCost,
                weekly: item.weeklyCost
            }
        });
        popover.present({
            ev: event,
        });
        popover.onDidDismiss(function (res) {
            if (res == 'faq') {
                _this.navCtrl.push("FaqPage", {
                    "pageTitle": "FAQs"
                });
            }
        });
    };
    ZenadminRouteDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-zenadmin-route-details',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\zenadmin-route-details\zenadmin-route-details.html"*/'<!--\n  Generated template for the ZenadminRouteDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>Route</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content *ngIf="responseList" class="content-container">\n    <div class="vehicle-details-card" *ngIf="responseList">\n        <div class="vehicle-numb-card">\n            <div><img class="vehicleImg" src="assets/zenAdmin/vehicle-img.svg" onerror="this.src=\'assets/imgs/annual-status.svg\'" /></div>\n            <div class="custom-card">\n                <div class="margin-bottom5 color-grey vehicle-name" *ngIf="!isShuttle">Bus</div>\n                <div class="margin-bottom5 color-grey vehicle-name" *ngIf="isShuttle">Shuttle</div>\n                <div class="vehicle-number">{{responseList?.busNumber ? responseList?.busNumber : \'-\'}}</div>\n            </div>\n        </div>\n        <div class="route-details-card">\n            <div><img class="routeImg" src="assets/zenAdmin/route-blue-img.svg" onerror="this.src=\'assets/imgs/annual-status.svg\'" /></div>\n            <div class="width-51px">\n                <div class="margin-bottom5 color-grey route-title">Route</div>\n                <div class="route-name">{{responseList?.routeName}}</div>\n            </div>\n        </div>\n    </div>\n    <div class="card-parent" *ngIf="pickupPointsList">\n        <ion-card class="pickup-points-card">\n            <div class="points-title-container">\n                <div><img class="assetImg" src="assets/zenAdmin/pickup-points-route.svg" onerror="this.src=\'assets/imgs/annual-status.svg\'" /></div>\n                <div class="point-title" *ngIf="!isShuttle">Pickup Points</div>\n                <div class="point-title" *ngIf="isShuttle">Drop Points</div>\n            </div>\n            <div *ngFor="let item of pickupPointsList;let index=i;let odd=odd; let even=even;">\n                <div class="timeline">\n                    <div class="container right" *ngIf="even">\n                        <div class="pickup-content">\n                            <div class="placeName">{{item?.stopName}}</div>\n                            <div class="time-parent" *ngIf="item?.arrivalTime && item?.departureTime && (item?.arrivalTime != \'-\' || item?.departureTime != \'-\')">\n                                <span class="time-icon-container">\n                                    <img class="clock-img" src="assets/zenAdmin/wall-clock.svg" onerror="this.src=\'assets/imgs/annual-status.svg\'" />\n                                </span>\n                                <span class="colorGrey" *ngIf="!isShuttle">{{item?.arrivalTime}}</span>\n                                <span class="colorGrey" *ngIf="isShuttle">{{item?.departureTime}}</span>\n                            </div>\n                            <div (click)="openPopOverMenu($event,item)" class="show-charges" *ngIf="!isShuttle">Show Charges</div>\n                        </div>\n                        \n                    </div>\n                    <div class="container left text-left" *ngIf="odd">\n                        <div class="pickup-content align-item-end">\n                            <div class="placeName">{{item?.stopName}}</div>\n                            <div class="time-parent" *ngIf="item?.arrivalTime && item?.departureTime && (item?.arrivalTime != \'-\' || item?.departureTime != \'-\')">\n                                <span class="time-icon-container">\n                                    <img class="clock-img" src="assets/zenAdmin/wall-clock.svg" onerror="this.src=\'assets/imgs/annual-status.svg\'" />\n                                </span>\n                                <span class="colorGrey" *ngIf="!isShuttle">{{item?.arrivalTime}}</span>\n                                <span class="colorGrey" *ngIf="isShuttle">{{item?.departureTime}}</span>\n                            </div>\n                            <div (click)="openPopOverMenu($event,item)" class="show-charges" *ngIf="!isShuttle">Show Charges</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ion-card>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\zenadmin-route-details\zenadmin-route-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_0__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["C" /* PopoverController */]])
    ], ZenadminRouteDetailsPage);
    return ZenadminRouteDetailsPage;
}());

//# sourceMappingURL=zenadmin-route-details.js.map

/***/ })

});
//# sourceMappingURL=62.js.map