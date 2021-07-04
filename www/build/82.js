webpackJsonp([82],{

/***/ 1358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchUserPageModule", function() { return SwitchUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__switch_user__ = __webpack_require__(1780);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SwitchUserPageModule = /** @class */ (function () {
    function SwitchUserPageModule() {
    }
    SwitchUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__switch_user__["a" /* SwitchUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__switch_user__["a" /* SwitchUserPage */]),
            ],
        })
    ], SwitchUserPageModule);
    return SwitchUserPageModule;
}());

//# sourceMappingURL=switch-user.module.js.map

/***/ }),

/***/ 1780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_getterSetter_getterSetter__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
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
 * Generated class for the SwitchUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SwitchUserPage = /** @class */ (function () {
    function SwitchUserPage(navCtrl, navParams, httpProvider, data, getSet, utility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.data = data;
        this.getSet = getSet;
        this.utility = utility;
        this.detail = [];
    }
    SwitchUserPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.data.getData('loginDetails').then(function (response) {
            if (response) {
                _this.utility.updateLoader(true);
                _this.httpProvider.http.commonService({ url: 'getEdgeUsers', data: { 'userId': response.details.userDetails.userId }, dashboard: true }).subscribe(function (response) {
                    if (response) {
                        if (response.details.responseList.length > 0) {
                            _this.detail = response.details.responseList;
                            _this.utility.updateLoader(false);
                        }
                    }
                }, function (err) {
                    _this.utility.updateLoader(false);
                });
            }
        });
    };
    SwitchUserPage.prototype.goToPage = function (userData) {
        var fingerprintValue;
        if (this.getSet.getValue() == 'undefined') {
            fingerprintValue = false;
        }
        else {
            fingerprintValue = this.getSet.getValue();
        }
        this.data.saveData('loggedInIds', userData.userId);
        this.data.saveData('encryptedToken', userData.encryptedToken);
        this.navCtrl.setRoot('NewHomePage', { 'fromSwitchUser': fingerprintValue });
    };
    SwitchUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-switch-user',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\switch-user\switch-user.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Switch User</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n\n  <div>\n    <div style="text-align: center;\n    font-size: 2em;margin-top: 10%">\n     \n    </div>\n    <ion-list style="margin-top: 40%">\n      <div style="padding: 15px;\n      text-align: center;\n      font-size: 1.2em;">Switch User</div>\n      <ion-item style="padding: 0px" *ngFor="let user of detail index as i" (click)="goToPage(user)">\n\n        <ion-avatar item-start *ngIf="i==0">\n          <img style="height: 70px;border: 2px dotted #fc8c70; width:70px;\n          padding: 2px;" src="{{user.profilePic}}">\n        </ion-avatar>\n        <ion-avatar item-start *ngIf="i==1">\n          <img style="height: 70px;border: 2px dotted #fc8c70; width:70px;\n          padding: 2px;" src="{{user.profilePic}}">\n        </ion-avatar>\n        <h2>{{user.userName}}</h2>\n        <p>{{user.role}}</p>\n        <p style="right: 5px;\n      position: absolute;\n      top: 30px;"><img src="assets/imgs/Arrow-forward.svg"></p>\n      </ion-item>\n\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\switch-user\switch-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* Data */], __WEBPACK_IMPORTED_MODULE_4__providers_getterSetter_getterSetter__["a" /* GetterSetter */], __WEBPACK_IMPORTED_MODULE_5__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], SwitchUserPage);
    return SwitchUserPage;
}());

//# sourceMappingURL=switch-user.js.map

/***/ })

});
//# sourceMappingURL=82.js.map