webpackJsonp([94],{

/***/ 1339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBordingChangePasswordPageModule", function() { return OnBordingChangePasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__on_bording_change_password__ = __webpack_require__(1759);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OnBordingChangePasswordPageModule = /** @class */ (function () {
    function OnBordingChangePasswordPageModule() {
    }
    OnBordingChangePasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__on_bording_change_password__["a" /* OnBordingChangePasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__on_bording_change_password__["a" /* OnBordingChangePasswordPage */]),
            ],
        })
    ], OnBordingChangePasswordPageModule);
    return OnBordingChangePasswordPageModule;
}());

//# sourceMappingURL=on-bording-change-password.module.js.map

/***/ }),

/***/ 1759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnBordingChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OnBordingChangePasswordPage = /** @class */ (function () {
    function OnBordingChangePasswordPage(navCtrl, navParams, loading, loadingController, popoverCtrl, http, alertCtrl, store) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.loadingController = loadingController;
        this.popoverCtrl = popoverCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.store = store;
        this.viewPassword = false;
        this.type = 'password';
        this.passData = {};
        this._changePasswordLoading = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["Subscription"]();
        this._changePasswordData = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["Subscription"]();
    }
    OnBordingChangePasswordPage.prototype.ionViewWillEnter = function () {
        // this._changePasswordLoading = this.store.select<any>(fromStore.getOnboardingChangePasswordLoading).subscribe(loading => {
        //   this.updateLoader(loading);
        // })
    };
    OnBordingChangePasswordPage.prototype.updatePass = function () {
        this.viewPassword = !this.viewPassword;
        if (this.viewPassword) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    OnBordingChangePasswordPage.prototype.changePassword = function () {
        var _this = this;
        if ((this.newPassword != undefined && this.verifyPassword != undefined && this.oldPassword != undefined) && (this.newPassword != "" && this.verifyPassword != "" && this.oldPassword != "")) {
            if (this.newPassword === this.verifyPassword) {
                this.passData = {
                    oldPssword: this.oldPassword,
                    newPassword: this.newPassword
                };
                this.updateLoader(true);
                // this.store.dispatch(new fromStore.OBChangePassword(this.passData))
                // return new Promise(resolve => {
                //   this._changePasswordData = this.store.select<any>(fromStore.getOBchangePasswordData).subscribe((response) => {
                //     this.store.dispatch(new fromStore.OBChangePasswordReset())
                //     if (response) {
                //       if (response.status.statusCode < 0) {
                //         this.errorAlert(response.status.statusMessage);
                //       } else if (response.status.statusCode == 1) {
                //         this.presentAlert();
                //       }
                //       resolve();
                //     }
                //   }, err => {
                //   })
                // })
                this.http.http.OBChangePassword(this.passData).subscribe(function (response) {
                    if (response) {
                        _this.updateLoader(false);
                        if (response.status.statusCode < 0) {
                            _this.errorAlert(response.status.statusMessage);
                        }
                        else if (response.status.statusCode == 1) {
                            _this.presentAlert();
                        }
                    }
                }, function (error) {
                    _this.updateLoader(false);
                });
            }
            else {
                this.errorAlert("New password and verify password should be same.");
            }
        }
        else if ((this.newPassword == undefined || this.verifyPassword == undefined || this.oldPassword == undefined) || (this.newPassword == "" || this.verifyPassword == "" || this.oldPassword == "")) {
            this.errorAlert("Please fill all the fields.");
        }
    };
    OnBordingChangePasswordPage.prototype.updateLoader = function (loading) {
        if (loading) {
            this.loader = this.loadingController.create();
            this.loader.present();
        }
        else {
            if (this.loader) {
                this.loader.dismiss();
                this.loader = null;
            }
        }
    };
    OnBordingChangePasswordPage.prototype.presentAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            // title: 'Confirmation',
            enableBackdropDismiss: false,
            subTitle: 'Password Changed successfully.',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.navCtrl.setRoot('LoginPage');
                    }
                }
            ]
        });
        alert.present();
    };
    OnBordingChangePasswordPage.prototype.errorAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    OnBordingChangePasswordPage.prototype.presentOptions = function (myEvent) {
        var popover = this.popoverCtrl.create('PopoverPage', { 'type': 'obChangePassword' });
        popover.present({ ev: myEvent });
    };
    OnBordingChangePasswordPage.prototype.ionViewWillLeave = function () {
        this._changePasswordData.unsubscribe();
        this._changePasswordLoading.unsubscribe();
    };
    OnBordingChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-on-bording-change-password',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\on-bording-change-password\on-bording-change-password.html"*/'<!--\n  Generated template for the OnBordingChangePasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Change Password</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Current Password</ion-label>\n      <ion-input type={{type}} [(ngModel)]="oldPassword"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>New Password</ion-label>\n      <ion-input type={{type}} [(ngModel)]="newPassword"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Confirm Password</ion-label>\n      <ion-input type={{type}} [(ngModel)]="verifyPassword"> </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Show Password</ion-label>\n      <ion-checkbox [(ngModel)]="showPass" (ionChange)="updatePass()"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button class="change-password-btn" ion-button color="secondary" full block (click)="changePassword()">\n      <ion-label color="white">Change Password</ion-label>\n    </button>\n  </div>\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\on-bording-change-password\on-bording-change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]])
    ], OnBordingChangePasswordPage);
    return OnBordingChangePasswordPage;
}());

//# sourceMappingURL=on-bording-change-password.js.map

/***/ })

});
//# sourceMappingURL=94.js.map