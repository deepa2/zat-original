webpackJsonp([81],{

/***/ 1363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileListPageModule", function() { return UserProfileListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_profile_list__ = __webpack_require__(1785);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserProfileListPageModule = /** @class */ (function () {
    function UserProfileListPageModule() {
    }
    UserProfileListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_profile_list__["a" /* UserProfileListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_profile_list__["a" /* UserProfileListPage */]),
            ],
        })
    ], UserProfileListPageModule);
    return UserProfileListPageModule;
}());

//# sourceMappingURL=user-profile-list.module.js.map

/***/ }),

/***/ 1785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_store__ = __webpack_require__(83);
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
 * Generated class for the UserProfileListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserProfileListPage = /** @class */ (function () {
    function UserProfileListPage(navParams, store, navCtrl, viewCtrl) {
        this.navParams = navParams;
        this.store = store;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__app_store__["R" /* GetZenContactsResetAction */]());
        this.params = this.navParams.get('reqParams');
        this.resolve = this.navParams.get('resolve');
        this.getData();
    }
    UserProfileListPage.prototype.getData = function () {
        var _this = this;
        var url = "getEmployeeContactList";
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__app_store__["Q" /* GetZenContactsAction */](url, this.params));
        this.store
            .select(__WEBPACK_IMPORTED_MODULE_3__app_store__["_95" /* getZenContactsState */])
            .subscribe(function (response) {
            if (!response.pending && response.data) {
                _this.searchedData = response.data;
            }
        }, function (err) {
        });
    };
    UserProfileListPage.prototype.goToProfile = function (data) {
        this.navCtrl.push('NewProfilePage', {
            'userId': parseInt(data.employeeId),
            'profileType': 'zencontacts'
        });
    };
    UserProfileListPage.prototype.ionViewWillLeave = function () {
        if (this.resolve) {
            this.resolve();
        }
    };
    UserProfileListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-profile-list',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\user-profile-list\user-profile-list.html"*/'<!--\n  Generated template for the UserProfileListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      Search List\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="contact">\n    <ion-card *ngFor="let item of searchedData" (click)="goToProfile(item)">\n      <div class="profile_img">\n        <img src="{{item?.profilePicUrl}}" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n      </div>\n      <div class="profile-info">\n        <h2>{{item.employeeName}}</h2>\n        <p>{{item.employeeId}}</p>\n      </div>\n    </ion-card>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\user-profile-list\user-profile-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["H" /* ViewController */]])
    ], UserProfileListPage);
    return UserProfileListPage;
}());

//# sourceMappingURL=user-profile-list.js.map

/***/ })

});
//# sourceMappingURL=81.js.map