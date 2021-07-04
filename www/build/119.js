webpackJsonp([119],{

/***/ 1311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(1533);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 1533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_constants__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_store__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AboutPage = /** @class */ (function () {
    function AboutPage(navParams, store, appVersion, utility, events) {
        this.navParams = navParams;
        this.store = store;
        this.appVersion = appVersion;
        this.utility = utility;
        this.events = events;
        this._aboutListener = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["Subscription"]();
        this.url = "getHTMLParagraph";
        this.appName = "";
        this.versionNumber = "";
    }
    //on Page load, ionic executes this function and all the initialization methods executes here
    AboutPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.pageType = this.navParams.get('type');
        this.appName = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* Constants */].appName;
        this.appVersion.getVersionNumber().then(function (res) {
            _this.versionNumber = res;
        });
        this.getData();
        this.loading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_7__app_store__["_29" /* getAboutLoading */]);
        this.events.subscribe('hide-loader', function (data) {
            _this.utility.updateLoader(false);
            //console.log('Hide loader')
        });
    };
    AboutPage.prototype.ionViewWillLeave = function () {
        this._aboutListener.unsubscribe();
    };
    //get about data from server
    AboutPage.prototype.getData = function () {
        var _this = this;
        //if device platform available 
        if (this.utility.platformAvailable()) {
            this.utility.updateLoader(true);
            this.appVersion.getVersionNumber().then(function (response) {
                var params = { 'type': _this.pageType, 'versionNo': response };
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__app_store__["i" /* GetAboutAction */](_this.url, params));
                return new Promise(function (resolve) {
                    _this._aboutListener = _this.store
                        .select(__WEBPACK_IMPORTED_MODULE_7__app_store__["_30" /* getAboutState */])
                        .subscribe(function (response) {
                        if (response) {
                            if (response.pending == false) {
                                _this.about = response.data;
                                _this.utility.updateLoader(response.pending);
                                resolve();
                            }
                        }
                    }, function (err) {
                        _this.utility.updateLoader(false);
                    });
                });
            });
        } //else, for desktop browser
        else {
            this.utility.updateLoader(true);
            var params = { 'type': this.pageType, 'versionNo': __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* Constants */].new_version };
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__app_store__["i" /* GetAboutAction */](this.url, params));
            return new Promise(function (resolve) {
                _this._aboutListener = _this.store
                    .select(__WEBPACK_IMPORTED_MODULE_7__app_store__["_30" /* getAboutState */])
                    .subscribe(function (response) {
                    if (response) {
                        if (response.pending == false) {
                            _this.about = response.data;
                            _this.utility.updateLoader(response.pending);
                            resolve();
                        }
                    }
                }, function (err) {
                    _this.utility.updateLoader(false);
                });
            });
        }
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-about",template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title class="pageTitile">{{this.about?.pageTitle}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <!-- <div class="spinner-container">\n    <ion-spinner class="loader" *ngIf="loading$ | async"></ion-spinner>\n  </div> -->\n\n  <div *ngIf="!(loading$ | async)">\n\n    <div class="version">Version Number: {{versionNumber}} (Release : {{this.about?.releaseNo}})</div>\n    <div>\n      <p class="about" [innerHTML]="this.about?.pageText">\n      </p>\n\n    </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_5__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Events */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=119.js.map