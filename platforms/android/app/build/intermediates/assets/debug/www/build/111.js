webpackJsonp([111],{

/***/ 1320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(1740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 1740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, data, popoverCtrl, store, utilitiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.popoverCtrl = popoverCtrl;
        this.store = store;
        this.utilitiy = utilitiy;
        this.showDashboard = true;
        this._dashboardListener = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["Subscription"]();
        this._notificationListener = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["Subscription"]();
        this.utilitiy.updateLoader(true);
        this.dashboardDetail = {
            "type": "My Dashboard",
        };
    }
    DashboardPage.prototype.setBackButtonAction = function () {
        var _this = this;
        this.navBar.backButtonClick = function () {
            if (!_this.showDashboard) {
                _this.showDashboard = true;
            }
            else {
                _this.navCtrl.pop();
            }
        };
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        this.getLoginStateFromStore();
        this.getDashboardData();
        this.utilitiy.updateLoader(false);
        this.setBackButtonAction();
        this.getHomeData();
        this.pageTitle = this.navParams.get('pageTitle');
    };
    DashboardPage.prototype.ionViewWillEnter = function () {
        // this.loading$ = this.store.select<any>(fromStore.getDashboardLoading);
    };
    DashboardPage.prototype.getLoginStateFromStore = function () {
        var _this = this;
        this.data.getData('loginDetails').then(function (res) {
            if (res.userRolesDetails && res.userRolesDetails.userDetails) {
                _this.profileImg = res.userRolesDetails.userDetails.profileImage;
            }
        });
    };
    DashboardPage.prototype.getDashboardData = function () {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["p" /* GetDashboardDataAction */]('getDashboardData'));
        return new Promise(function (resolve) {
            _this._dashboardListener = _this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_47" /* getDashboardState */]).subscribe(function (response) {
                if (response.pending == false) {
                    _this.dashboardData = response.data;
                    resolve();
                }
            }, function (err) {
            });
        });
    };
    DashboardPage.prototype.getUserDashboardData = function (dashboardItem) {
        var _this = this;
        if (dashboardItem.isClickable) {
            this.showDashboard = false;
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["P" /* GetUserDashboardDataAction */]('getMyDashboardData'));
            this._dashboardListener = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_47" /* getDashboardState */]).subscribe(function (response) {
                if (response) {
                    _this.userDashboardData = response.userData;
                }
            });
        }
    };
    DashboardPage.prototype.goToProfile = function () {
        this.navCtrl.push(' NewProfilePage', {
            'profileType': this.dashboardDetail.type,
            'userId': this.dashboardDetail.employeeId
        });
    };
    DashboardPage.prototype.redirectTo = function () {
        this.navCtrl.push('DashboardDetailPage');
    };
    DashboardPage.prototype.goToPage = function (page) {
        if (page == 'SearchPage') {
            this.navCtrl.push(page, { 'searchType': 'query' });
        }
        else {
            this.navCtrl.push(page);
        }
    };
    DashboardPage.prototype.getNotificationCount = function () {
        var _this = this;
        this._notificationListener = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_61" /* getMiscData */]).subscribe(function (res) {
            _this.notificationCount = res.myUnreadNotificationCount;
        });
    };
    DashboardPage.prototype.presentOptions = function (myEvent) {
        var popover = this
            .popoverCtrl
            .create('PopoverPage', { 'type': 'others' });
        popover.present({ ev: myEvent });
    };
    DashboardPage.prototype.ionViewWillLeave = function () {
        this._dashboardListener.unsubscribe();
        this._notificationListener.unsubscribe();
    };
    DashboardPage.prototype.getHomeData = function () {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_61" /* getMiscData */]).subscribe(function (response) {
            if (response && response.userDetails) {
                _this.userDetails = response.userDetails;
                _this.dashboardDetail.employeeName = _this.userDetails.employeeName.substring(0, _this.userDetails.employeeName.indexOf(" "));
                _this.dashboardDetail.employeeProfilePic = _this.userDetails.employeeProfilePic;
                _this.dashboardDetail.employeeId = _this.userDetails.employeeId;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Navbar */])
    ], DashboardPage.prototype, "navBar", void 0);
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\dashboard\dashboard.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title class="pageTitile">{{pageTitle}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-spinner *ngIf="loading$ | async"></ion-spinner>\n\n  <div class="dashboard" *ngIf="!(loading$ | async)">\n\n    <div *ngIf="showDashboard" class="grid-full">\n\n      <div *ngIf="dashboardDetail" (click)="goToProfile(dashboardDetail.type)" class="backgroudcard">\n        <!-- start top card -->\n        <ion-card class="faq-card" no-padding>\n          <div class="background-img">\n            <div class="justify-spac-ar-align-cent margin20-0-28-8">\n              <div class="display-flex">\n                <div class="cardImage-outer"> <img class="cardImage" [src]="dashboardDetail.employeeProfilePic" /></div>\n                <div class="heading margin-top12">\n                  <div>Hello, <span class="font-weight500">{{dashboardDetail.employeeName}}</span></div>\n                  <div class="heading-text">{{dashboardDetail.type}}</div>\n                </div>\n              </div>\n              <div>\n                <img class="arrowImage" src="assets/imgs/Arrow-forward.svg" />\n                <!-- <ion-icon src="/assets/imgs/Arrow-forward.svg"></ion-icon> -->\n              </div>\n            </div>\n          </div>\n        </ion-card>\n        <!--ends top card -->\n      </div>\n\n      <div class="card-cont margin-top5">\n        <div *ngFor="let dashboardItem of dashboardData" [hidden]="dashboardItem.isMydashboard">\n          <ion-card color="light" class="ion-card ion-text-center margin5 ">\n            <div class="right semi-circle"></div>\n            <div class="left semi-circle"></div>\n            <ion-card-header class="padding10 padding-left20 padding-top15">\n              <div class="profile-cont-asso margin-left15"><img class="profile-asso" [src]="dashboardItem.dashboardIcon"\n                  onerror="this.src=\'assets/imgs/dummy-profile.png\'"></div>\n            </ion-card-header>\n            <ion-card-content class="padding-left20 padding-top10">\n              <div class="font16">{{dashboardItem.dashboardValue}}</div>\n              <div class="heading-text">{{dashboardItem.dashBoardKey}}</div>\n\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n\n    <!-- <div *ngIf="!showDashboard" class="grid-full">\n      <div class="card-cont">\n        <div *ngFor="let udashboardItem of userDashboardData">\n          <ion-card color="light" class="ion-card ion-text-center margin5 ">\n            <div class="right semi-circle"></div>\n            <div class="left semi-circle"></div>\n            <ion-card-header class="padding10">\n              <div class="profile-cont-asso margin-left15"><img class="profile-asso" [src]="udashboardItem.dashboardIcon"\n                  onerror="this.src=\'assets/imgs/dummy-profile.png\'"></div>\n            </ion-card-header>\n            <ion-card-content >\n              <div class="font12">{{udashboardItem.dashBoardKey}}</div>\n              <div class="heading-text">{{udashboardItem.dashboardValue}}</div>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </div>\n    </div> -->\n  </div>\n\n\n\n\n</ion-content>\n\n\n\n\n<!-- delete after use-->\n\n<!--<div *ngFor="let dashboardItem of dashboardData" (click)="goToProfile(dashboardItem)">\n        <!- start top card ->\n        <ion-card *ngIf="dashboardItem.isMydashboard" class="faq-card background-img" no-padding>\n            <div class="justify-spac-ar-align-cent  margin20-15-25">\n              <div class="display-flex">\n                <div class="cardImage-outer"> <img class="cardImage" [src]="dashboardItem.dashboardIcon" /></div>\n                <div class="heading margin-top5">\n                  <div>Hello <span class="font-weight500">{{userDetails}}</span></div>\n                  <div class="heading-text">{{dashboardItem.dashBoardKey}}</div>\n                </div>\n              </div>\n              <div class="arrowImage" col-2 text-right>\n                <ion-icon name="arrow-forward"></ion-icon>\n              </div>\n            </div>\n          </ion-card>\n          <!-ends top card ->\n        </div>-->\n\n\n\n<!-- <ion-spinner *ngIf="loading$ | async"></ion-spinner>\n\n<div class="dashboard" *ngIf="!(loading$ | async)">\n\n  <div *ngIf="showDashboard" class="grid-full">\n    <ion-row class="row-full">\n\n      <ion-col class="col-full" *ngFor="let dashboardItem of dashboardData"\n        (click)="getUserDashboardData(dashboardItem)">\n        <ion-card class="card">\n          <div padding class="dash-content">\n            <p class="card-value">{{dashboardItem.dashBoardKey}}</p>\n            <p class="card-key">{{dashboardItem.dashboardValue}}</p>\n          </div>\n          <div class="dash-img">\n            <img class="card-img" [src]="dashboardItem.dashboardIcon" />\n          </div>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </div>\n\n  <div *ngIf="!showDashboard" class="grid-full">\n    <ion-row class="row-full">\n      <ion-col class="col-full" *ngFor="let udashboardItem of userDashboardData">\n        <ion-card class="card">\n\n          <div padding class="dash-content">\n            <p class="card-value">{{udashboardItem.dashBoardKey}}</p>\n            <p class="card-key">{{udashboardItem.dashboardValue}}</p>\n          </div>\n          <div class="dash-img">\n            <img class="card-img" [src]="udashboardItem.dashboardIcon" />\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n</div> -->'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* Data */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_6__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ })

});
//# sourceMappingURL=111.js.map