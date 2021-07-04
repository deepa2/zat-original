webpackJsonp([100],{

/***/ 1425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(1847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_dialogs__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["c" /* StoreModule */].forFeature('app', __WEBPACK_IMPORTED_MODULE_8__store__["_98" /* reducers */], { metaReducers: __WEBPACK_IMPORTED_MODULE_8__store__["_96" /* metaReducers */] }),
                __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["EffectsModule"].forFeature(__WEBPACK_IMPORTED_MODULE_8__store__["_28" /* effects */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* Data */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_dialogs__["a" /* Dialogs */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 1847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_pushNotification_fcm__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_constants__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_getterSetter_getterSetter__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_http_http__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var LoginPage = /** @class */ (function () {
    // private showNewUser = false
    function LoginPage(navCtrl, store, data, formBuilder, loading, loadingController, fcm, utility, events, app, getSet, httpProvider) {
        this.navCtrl = navCtrl;
        this.store = store;
        this.data = data;
        this.formBuilder = formBuilder;
        this.loading = loading;
        this.loadingController = loadingController;
        this.fcm = fcm;
        this.utility = utility;
        this.events = events;
        this.app = app;
        this.getSet = getSet;
        this.httpProvider = httpProvider;
        this._loginListener = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription__["Subscription"]();
        this.type = 'password';
        this.showPass = false;
        this.showfooter = true;
        var self = this;
        window.addEventListener('native.keyboardshow', keyboardShowHandler);
        function keyboardShowHandler(e) {
            self.showfooter = false;
        }
        window.addEventListener('native.keyboardhide', keyboardHideHandler);
        function keyboardHideHandler(e) {
            self.showfooter = true;
        }
        this.versionNo = this.getSet.getVersionNo();
        this.user = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]
        });
    }
    // this function checks user credentials, user type and redirects to a particular page.
    LoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.userData = this.user.value;
                        return [4 /*yield*/, this.loadingController.create({
                                content: 'Loading'
                            })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        // this._loginListener = this.store.select<any>(fromStore.getLoginState)
                        //     .subscribe((res) => {
                        //         if (res.data) {
                        //             let result = res.data;
                        //             if (result.details.encryptedToken) {
                        //                 this.store.dispatch(new fromStore.OverallSearchClear());
                        //                 this.user.reset();
                        //                 this.data.saveData('loginStatus', true);
                        //                 this.events.publish('loginS')
                        //                 this.data.saveData('loginDetails', result);
                        //                 this.data.saveData('access-allowed', "N");
                        //                 this.data.saveData('encryptedToken', result.details.encryptedToken)
                        //                 this.data.saveData('switchUser', result.details.role.isSwitchUser)
                        //                 this.events.publish('loginUserType', result.details.userDetails.userType)
                        //                 if (result.details.role.isSwitchUser) {
                        //                     // this.zenwenLogin();
                        //                     // this.navCtrl.setRoot('SwitchUserPage');
                        //                     this.app.getRootNav().setRoot('SwitchUserPage')
                        //                     //this.navCtrl.setRoot('NewHomePage');
                        //                 } else {
                        //                     if (result.details.userDetails.userType == Constants["PRE-ONBOARDING"]) {
                        //                         if (!(result.details.userDetails.isPasswordChanged)) {
                        //                             this.navCtrl.setRoot('OnBordingChangePasswordPage');
                        //                         }
                        //                         if (result.details.userDetails.isPasswordChanged && result.details.userDetails.isFirstTimeLogin) {
                        //                             this.navCtrl.setRoot('ObLandingPage');
                        //                         }
                        //                         if (result.details.userDetails.isPasswordChanged && !(result.details.userDetails.isFirstTimeLogin)) {
                        //                             //this.navCtrl.setRoot('ObDashboardPage');
                        //                             this.navCtrl.setRoot('ObLandingPage');
                        //                         }
                        //                     } else if (result.details.userDetails.userType == Constants["POST-ONBOARDING"]) {
                        //                         //this.navCtrl.setRoot('HomePage');
                        //                         // this.zenwenLogin();
                        //                         this.navCtrl.setRoot('NewHomePage');
                        //                     }
                        //                 }
                        //                 this.fcm.registerToken();
                        //                 loading.dismiss();
                        //             } else {
                        //                 loading.dismiss();
                        //                 this._loginListener.unsubscribe();
                        //             }
                        //         } else {
                        //             loading.dismiss();
                        //             this._loginListener.unsubscribe();
                        //         }
                        //     }, (err) => {
                        //         //;
                        //         this._loginListener.unsubscribe();
                        //         loading.dismiss();
                        //     });
                        this.httpProvider.http.authenticate(this.user.value, "login").subscribe(function (response) {
                            loading.dismiss();
                            _this.user.reset();
                            console.log(response);
                            if (response.details) {
                                var result = response;
                                if (result.details.encryptedToken) {
                                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store__["_4" /* OverallSearchClear */]());
                                    _this.user.reset();
                                    _this.data.saveData('loginStatus', true);
                                    _this.events.publish('loginS');
                                    _this.data.saveData('loginDetails', result);
                                    _this.data.saveData('access-allowed', "N");
                                    _this.data.saveData('encryptedToken', result.details.encryptedToken);
                                    _this.data.saveData('switchUser', result.details.role.isSwitchUser);
                                    _this.events.publish('loginUserType', result.details.userDetails.userType);
                                    if (result.details.role.isSwitchUser) {
                                        // this.zenwenLogin();
                                        // this.navCtrl.setRoot('SwitchUserPage');
                                        _this.app.getRootNav().setRoot('SwitchUserPage');
                                        //this.navCtrl.setRoot('NewHomePage');
                                    }
                                    else {
                                        if (result.details.userDetails.userType == __WEBPACK_IMPORTED_MODULE_8__app_constants__["a" /* Constants */]["PRE-ONBOARDING"]) {
                                            if (!(result.details.userDetails.isPasswordChanged)) {
                                                _this.navCtrl.setRoot('OnBordingChangePasswordPage');
                                            }
                                            if (result.details.userDetails.isPasswordChanged && result.details.userDetails.isFirstTimeLogin) {
                                                _this.navCtrl.setRoot('ObLandingPage');
                                            }
                                            if (result.details.userDetails.isPasswordChanged && !(result.details.userDetails.isFirstTimeLogin)) {
                                                //this.navCtrl.setRoot('ObDashboardPage');
                                                _this.navCtrl.setRoot('ObLandingPage');
                                            }
                                        }
                                        else if (result.details.userDetails.userType == __WEBPACK_IMPORTED_MODULE_8__app_constants__["a" /* Constants */]["POST-ONBOARDING"]) {
                                            //this.navCtrl.setRoot('HomePage');
                                            // this.zenwenLogin();
                                            _this.navCtrl.setRoot('NewHomePage');
                                        }
                                        else if (result.details.userDetails.userType == __WEBPACK_IMPORTED_MODULE_8__app_constants__["a" /* Constants */]["SECURITY"]) {
                                            _this.navCtrl.setRoot('SecurityPersonnelBuseslistPage');
                                        }
                                    }
                                    _this.fcm.registerToken();
                                    loading.dismiss();
                                }
                            }
                        }, function (error) {
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    //show and hide user password
    LoginPage.prototype.togglePassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    // on leaving the page, will unsubscribe all the subscriptions
    LoginPage.prototype.ionViewWillLeave = function () {
        this._loginListener.unsubscribe();
    };
    //checks the input fields for user credentials
    LoginPage.prototype.checkLoginCredentials = function () {
        var username = this.user.value.username;
        var passwd = this.user.value.password;
        if (this.utility.isEmptyOrNullOrUndefined(username) && this.utility.isEmptyOrNullOrUndefined(passwd)) {
            this.utility.showToast('User Name and Password can not be empty');
            return;
        }
        else if (this.utility.isEmptyOrNullOrUndefined(username)) {
            this.utility.showToast('User Name can not be empty');
            return;
        }
        else if (this.utility.isEmptyOrNullOrUndefined(passwd)) {
            this.utility.showToast('Password can not be empty');
            return;
        }
        else {
            this.login();
        }
    };
    LoginPage.prototype.eventHandler = function (event) {
        ////console.log(event.keyCode);
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\login\login.html"*/'<ion-content>\n  <div class="outer-bg">\n    <div class="inner-curve">\n      <form [formGroup]="user" (ngSubmit)="checkLoginCredentials()">\n        <div class="center-align">\n          <div class="login-icon login-logo-center">\n            <img src="assets/imgs/talent-logo.svg" />\n            <img src="assets/imgs/login-bg-img.svg" />\n          </div>\n          <div class="login-form">\n\n\n            <div class="floating-label">\n              <input placeholder="Username" type="text" (keypress)="eventHandler($event)" formControlName="username">\n              <label for="email">Username</label>\n            </div>\n            <div class="floating-label">\n              <div>\n                <input placeholder="Password" type="{{type}}" (keypress)="eventHandler($event)" name="password"\n                  formControlName="password">\n                <label for="password">Password</label>\n              </div>\n\n              <div>\n                <button class="passwordIcon" *ngIf="!showPass" ion-button clear color="dark" type="button" item-right\n                  (click)="togglePassword()">\n                  <img class="eye-icon" src="assets/imgs/new_hide.svg" />\n                </button>\n\n                <button class="passwordIcon" *ngIf="showPass" ion-button clear color="dark" type="button" item-right\n                  (click)="togglePassword()">\n                  <img class="eye-icon" src="assets/imgs/new_hide_unhide.svg" />\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- <div padding class="login-div-con"\n          [ngClass]="user?.value?.username?.length > 0 && user?.value?.password?.length > 0 ? \'login-div\' : \'hidden\'">\n          <button class="submit-arrow">\n            <img src="assets/imgs/forward-arrow.svg" />\n          </button>\n        </div> -->\n        <div padding class="login-div-con login-div">\n          <button class="submit-arrow">\n            <img src="assets/imgs/forward-arrow.svg" />\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <div *ngIf="showfooter" class="footer">\n    <span>Version</span> :\n    <span>{{versionNo}}</span>\n  </div>\n</ion-content>\n<!-- <ion-footer *ngIf="showfooter" class="footer">\n  <span>Version</span> :\n  <span>{{versionNo}}</span>\n</ion-footer> -->'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* Data */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_pushNotification_fcm__["a" /* FCMUtility */],
            __WEBPACK_IMPORTED_MODULE_9__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_10__providers_getterSetter_getterSetter__["a" /* GetterSetter */],
            __WEBPACK_IMPORTED_MODULE_11__providers_http_http__["a" /* HttpProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=100.js.map