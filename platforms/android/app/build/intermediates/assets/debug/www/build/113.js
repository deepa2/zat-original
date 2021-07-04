webpackJsonp([113],{

/***/ 1317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerDetailsPageModule", function() { return BannerDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__banner_details__ = __webpack_require__(1539);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BannerDetailsPageModule = /** @class */ (function () {
    function BannerDetailsPageModule() {
    }
    BannerDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__banner_details__["a" /* BannerDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__banner_details__["a" /* BannerDetailsPage */]),
            ],
        })
    ], BannerDetailsPageModule);
    return BannerDetailsPageModule;
}());

//# sourceMappingURL=banner-details.module.js.map

/***/ }),

/***/ 1539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(31);
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
 * Generated class for the BannerDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BannerDetailsPage = /** @class */ (function () {
    function BannerDetailsPage(navCtrl, navParams, store, popoverCtrl, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
        this.popoverCtrl = popoverCtrl;
        this.dataService = dataService;
        this.bannerUrl = "getBannerDetail";
        this.bannerId = this.navParams.get("bannerId");
        this.bannerName = this.navParams.get('bannerName');
        this.dataService.getData('loginDetails').then(function (loginData) {
            if (loginData.details) {
                _this.userType = loginData.details.userDetails.userType;
            }
        });
    }
    BannerDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_42" /* getBannerDetailsLoader */]);
        var body = {
            bannerId: this.bannerId
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["_41" /* getBannerDetailsAction */](this.bannerUrl, body));
        this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_43" /* getBannerState */]).subscribe(function (bannerDetails) {
            if (bannerDetails && bannerDetails.data && bannerDetails.data.response) {
                _this.bannerDetails = bannerDetails.data.response;
            }
        });
    };
    BannerDetailsPage.prototype.presentPopover = function (myEvent) {
        var popover = this
            .popoverCtrl
            .create('PopoverPage', { 'type': 'home' });
        popover.present({ ev: myEvent });
    };
    BannerDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-banner-details',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\banner-details\banner-details.html"*/'<!--\n  Generated template for the BannerDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title class="pageTitle">{{bannerName}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div padding *ngIf="loading$ | async">\n    <ion-spinner></ion-spinner>\n  </div>\n\n  <div *ngIf="!(loading$ | async)">\n    <div class="bannerImg">\n      <img class="bannerIcon" src="{{bannerDetails?.bannerPicURL}}" style="width: 100%;">\n    </div>\n    <div padding [innerHtml]="bannerDetails?.bannerPageTextHTML"></div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\banner-details\banner-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* Data */]])
    ], BannerDetailsPage);
    return BannerDetailsPage;
}());

//# sourceMappingURL=banner-details.js.map

/***/ })

});
//# sourceMappingURL=113.js.map