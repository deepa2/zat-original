webpackJsonp([116],{

/***/ 1315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementPageModule", function() { return AnnouncementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__announcement__ = __webpack_require__(1537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AnnouncementPageModule = /** @class */ (function () {
    function AnnouncementPageModule() {
    }
    AnnouncementPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__announcement__["a" /* AnnouncementPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__announcement__["a" /* AnnouncementPage */])
            ],
        })
    ], AnnouncementPageModule);
    return AnnouncementPageModule;
}());

//# sourceMappingURL=announcement.module.js.map

/***/ }),

/***/ 1537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AnnouncementPage = /** @class */ (function () {
    function AnnouncementPage(navCtrl, navParams, store, utility, popoverCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
        this.utility = utility;
        this.popoverCtrl = popoverCtrl;
        this.dataService = dataService;
        this.url = 'getAllAnnouncements';
        this.start = 0;
        this.end = 10;
        this.infiniteScroll = '';
        this.refresher = '';
        this.showOptions = false;
        this.payload = {
            "start": this.start,
            "end": this.end
        };
        this._roleListener = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["Subscription"]();
        this._listListener = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["Subscription"]();
        this._notificationListener = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["Subscription"]();
        // get page title from home page
        this.pageTitle = this.navParams.get('pageTitle');
        if (this.pageTitle == undefined || this.pageTitle == null) {
            this.pageTitle = 'Announcements';
        }
    }
    AnnouncementPage.prototype.ngOnInit = function () {
    };
    // get all the announcements list
    AnnouncementPage.prototype.getAccouncements = function () {
        var _this = this;
        this._listListener = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_32" /* getAccouncementState */]).subscribe(function (res) {
            if (res) {
                if (res.data) {
                    _this.announcements$ = res.data;
                    _this.pageType = res.data.type;
                    _this.itemsLength = res.data.length;
                }
            }
            if (!res.pending && _this.infiniteScroll) {
                _this.infiniteScroll.complete();
            }
            if (!res.pending && _this.refresher) {
                _this.refresher.complete();
            }
        });
    };
    //infinite scroll to get next 10 announcements
    AnnouncementPage.prototype.doInfinite = function (infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        this.start = this.end;
        this.end = this.start + 10;
        this.payload = {
            "start": this.start,
            "end": this.end
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["j" /* GetAnnouncements */](this.url, this.payload));
    };
    // pull to refresh for new announcements
    AnnouncementPage.prototype.doRefresh = function (refresher) {
        this.refresher = refresher;
        this.start = 0;
        this.end = 10;
        this.payload = {
            "start": this.start,
            "end": this.end
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["k" /* GetAnnouncementsReset */]());
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["j" /* GetAnnouncements */](this.url, this.payload));
    };
    //change date format to mmddyy
    AnnouncementPage.prototype.formatDate = function (obj) {
        return this.utility.formatDate(obj);
    };
    // to add any announcement 
    AnnouncementPage.prototype.add = function () {
        this.navCtrl.push('AddPage', { 'type': 'addAnnouncement', 'questionId': null, 'answerType': null });
    };
    AnnouncementPage.prototype.goToPage = function (page) {
        if (page == 'SearchPage') {
            this.navCtrl.push(page, { 'searchType': 'announcement' });
        }
        else if (page == 'NotificationPage') {
            this.navCtrl.push(page, { 'notificationType': 'BROADCAST' });
        }
        else {
            this.navCtrl.push(page);
        }
    };
    //check for admin role
    AnnouncementPage.prototype.getRole = function () {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_61" /* getMiscData */]).subscribe(function (res) {
            if (res) {
                _this.addAnnouncementRole = res.role.isAdmin;
            }
        });
    };
    // show popover menu
    AnnouncementPage.prototype.presentOptions = function (myEvent) {
        var popover = this
            .popoverCtrl
            .create('PopoverPage', { 'type': 'addAnnouncement' });
        popover.present({ ev: myEvent });
    };
    //on page load, this function reloads the notification count & check for new announcements 
    AnnouncementPage.prototype.ionViewWillEnter = function () {
        this.getNotificationCount();
        this.formData = new FormData();
        this.loading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_31" /* getAccouncementLoading */]);
        this.payload = {
            "start": this.start,
            "end": this.end
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["k" /* GetAnnouncementsReset */]());
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["j" /* GetAnnouncements */](this.url, this.payload));
        this.getAccouncements();
        this.getRole();
        // this.setBackButtonAction();
    };
    //get notification  count from store
    AnnouncementPage.prototype.getNotificationCount = function () {
        var _this = this;
        this._notificationListener = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_64" /* getNotificationCount */]).subscribe(function (res) {
            _this.notificationCount = res;
        });
    };
    // on leaving the page, all the observables has to be unsubscribed
    AnnouncementPage.prototype.ngOnDestroy = function () {
        this._listListener.unsubscribe();
        this._roleListener.unsubscribe();
        this._notificationListener.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Navbar */])
    ], AnnouncementPage.prototype, "navBar", void 0);
    AnnouncementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-announcement',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\announcement\announcement.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title class="pageTitile">{{pageTitle}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToPage(\'SearchPage\')">\n        <img class="headerSearchIcon" src="assets/imgs/Search.svg" />\n      </button>\n      <button class="notification-counter" ion-button icon-only (click)="goToPage(\'NotificationPage\')">\n        <div *ngIf="notificationCount > 0 " class="notificationCount">\n          <span class="count">{{notificationCount}}</span>\n        </div>\n        <img class="headerIcons" src="assets/imgs/Notification.svg" />\n      </button>\n      <button ion-button icon-only (click)="presentOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-spinner *ngIf="loading$ | async"></ion-spinner>\n\n  <div text-center *ngIf="!(loading$ | async) && itemsLength == 0 ">No results found</div>\n\n  <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher> -->\n\n  <ion-list>\n\n    <span *ngFor="let item of announcements$ ">\n\n      <announcement-item [announcement]=\'item\'></announcement-item>\n\n    </span>\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <!-- \n  <ion-fab *ngIf="addAnnouncementRole" right bottom (click)="add()">\n    <button ion-fab>\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab> -->\n\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\announcement\announcement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* Data */]])
    ], AnnouncementPage);
    return AnnouncementPage;
}());

//# sourceMappingURL=announcement.js.map

/***/ })

});
//# sourceMappingURL=116.js.map