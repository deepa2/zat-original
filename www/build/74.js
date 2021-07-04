webpackJsonp([74],{

/***/ 1362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusRoutePageModule", function() { return BusRoutePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bus_route__ = __webpack_require__(1784);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BusRoutePageModule = /** @class */ (function () {
    function BusRoutePageModule() {
    }
    BusRoutePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bus_route__["a" /* BusRoutePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bus_route__["a" /* BusRoutePage */]),
            ],
        })
    ], BusRoutePageModule);
    return BusRoutePageModule;
}());

//# sourceMappingURL=bus-route.module.js.map

/***/ }),

/***/ 1784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusRoutePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the BusRoutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BusRoutePage = /** @class */ (function () {
    function BusRoutePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.segmentModel = 'Root';
    }
    BusRoutePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BusRoutePage');
    };
    BusRoutePage.prototype.ngOnInit = function () {
        this.details = [
            {
                img1: "assets/zenAdmin/bus-route-icon.svg",
                route: "Route:",
                city: "Bhopal",
                img2: "assets/zenAdmin/arrow-icon.svg",
            },
            {
                img1: "assets/zenAdmin/bus-route-icon.svg",
                route: "Route:",
                city: "Bhopal",
                img2: "assets/zenAdmin/arrow-icon.svg",
            },
            {
                img1: "assets/zenAdmin/bus-route-icon.svg",
                route: "Route:",
                city: "Bhopal",
                img2: "assets/zenAdmin/arrow-icon.svg",
            },
            {
                img1: "assets/zenAdmin/bus-route-icon.svg",
                route: "Route:",
                city: "Bhopal",
                img2: "assets/zenAdmin/arrow-icon.svg",
            },
            {
                img1: "assets/zenAdmin/bus-route-icon.svg",
                route: "Route:",
                city: "Bhopal",
                img2: "assets/zenAdmin/arrow-icon.svg",
            },
            {
                img1: "assets/zenAdmin/bus-route-icon.svg",
                route: "Route:",
                city: "Bhopal",
                img2: "assets/zenAdmin/arrow-icon.svg",
            },
            {
                img1: "assets/zenAdmin/bus-route-icon.svg",
                route: "Route:",
                city: "Bhopal",
                img2: "assets/zenAdmin/arrow-icon.svg",
            },
            {
                img1: "assets/zenAdmin/bus-route-icon.svg",
                route: "Route:",
                city: "Bhopal",
                img2: "assets/zenAdmin/arrow-icon.svg",
            },
            {
                img1: "assets/zenAdmin/bus-route-icon.svg",
                route: "Route:",
                city: "Bhopal",
                img2: "assets/zenAdmin/arrow-icon.svg",
            },
            {
                img1: "assets/zenAdmin/bus-route-icon.svg",
                route: "Route:",
                city: "Bhopal",
                img2: "assets/zenAdmin/arrow-icon.svg",
            },
            {
                img1: "assets/zenAdmin/bus-route-icon.svg",
                route: "Route:",
                city: "Bhopal",
                img2: "assets/zenAdmin/arrow-icon.svg",
            },
        ];
    };
    BusRoutePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-bus-route',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\bus-route\bus-route.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <div class="left-header">Bhopal</div>\n      <div class="right-header">\n        <img src="assets/zenAdmin/search-icon.svg">\n      </div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<!-- Body -->\n\n<ion-content class="main-container">\n  <div>\n    <ion-segment class="segment-section" [(ngModel)]="segmentModel">\n      <ion-segment-button value="Root" class="custom-segment">Bus Details</ion-segment-button>\n      <ion-segment-button value="pickupPoint" class="custom-segment">Pickup Point</ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="segmentModel">\n    <!-- Root-Segment -->\n    <div *ngSwitchCase="\'Root\'">\n      <ion-card *ngFor="let item of details">\n        <div class="route-icon">\n          <img class="route-img" [src]="item.img1">\n        </div>\n        <div class="route-info">\n          <div class="route-title">\n            <span class="Route">{{item.route}}</span> <br>\n            <span class="city-name">{{item.city}}</span>\n          </div>\n        </div>\n        <div class="small-arrow">\n          <img class="arrow-icon" [src]="item.img2">\n        </div>\n      </ion-card>\n    </div>\n\n    <!-- pickup-point segment -->\n    <div  *ngSwitchCase="\'pickupPoint\'">\n      <ion-card *ngFor="let item of details">\n        <div class="route-icon">\n          <img class="route-img" [src]="item.img1">\n        </div>\n        <div class="route-info">\n          <div class="route-title">\n            <span class="Route">{{item.route}}</span> <br>\n            <span class="city-name">{{item.city}}</span>\n          </div>\n        </div>\n        <div class="small-arrow">\n          <img class="arrow-icon" [src]="item.img2">\n        </div>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\bus-route\bus-route.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */]])
    ], BusRoutePage);
    return BusRoutePage;
}());

//# sourceMappingURL=bus-route.js.map

/***/ })

});
//# sourceMappingURL=74.js.map