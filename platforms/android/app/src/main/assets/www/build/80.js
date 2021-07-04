webpackJsonp([80],{

/***/ 1359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionHistoryPageModule", function() { return VersionHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__version_history__ = __webpack_require__(1781);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VersionHistoryPageModule = /** @class */ (function () {
    function VersionHistoryPageModule() {
    }
    VersionHistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__version_history__["a" /* VersionHistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__version_history__["a" /* VersionHistoryPage */]),
            ],
        })
    ], VersionHistoryPageModule);
    return VersionHistoryPageModule;
}());

//# sourceMappingURL=version-history.module.js.map

/***/ }),

/***/ 1781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersionHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
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
 * Generated class for the VersionHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VersionHistoryPage = /** @class */ (function () {
    function VersionHistoryPage(utils, httpProvider) {
        this.utils = utils;
        this.httpProvider = httpProvider;
    }
    VersionHistoryPage.prototype.ionViewWillEnter = function () {
        console.log("ionViewWillEnter");
        this.getMenuData();
    };
    VersionHistoryPage.prototype.getMenuData = function () {
        var _this = this;
        try {
            //   if (this.connectivityService.isOnline()) {
            try {
                // service call
                this.utils.updateLoader(true);
                var url = "tazVersionHistory";
                var data = {};
                this.httpProvider.http.commonService({ url: url, data: data, miscellaneous: true })
                    .subscribe(function (res) {
                    if (!_this.utils.isEmptyOrNullOrUndefined(res)) {
                        _this.versionData = res['details'];
                        _this.appInfo = _this.versionData.appdetails;
                        // this.buildDetails = this.appInfo.buildDetails;
                        _this.releaseData = _this.versionData.versionDetails;
                        // this.dataService.setVersionDetails =this.menuData;
                    }
                    _this.utils.updateLoader(false);
                });
            }
            catch (error) {
                error.message = "catch error - :" + error.message;
                error.catchError = true;
                this.utils.showAlert(error.message, '');
            }
        }
        catch (error) {
            error.message = "catch error -:" + error.message;
            error.catchError = true;
        }
    };
    VersionHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-version-history',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\version-history\version-history.html"*/'<!-- <ion-header>\n    <ion-navbar>\n      <ion-title class="pageTitile">Version History</ion-title>\n    </ion-navbar>\n  </ion-header> -->\n\n<ion-header>\n    <ion-navbar>\n        <ion-title class="pageTitile">Version History</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="gray-bg">\n    <div class="associateHead" *ngIf="versionData">\n        <div class="app-info">\n            <div class="profile">\n                <img src="assets/imgs/talent-logo-blue.svg" alt="taz icon" />\n            </div>\n            <div class="associateDetails">\n\n                <div class="user-name">{{appInfo?.title}}</div>\n\n                <div class="user-info">\n                    <div class="info-lable">Business Owner</div>\n                    <div class="user-info-value"><span>{{appInfo?.businessOwners}}</span></div>\n                </div>\n                <div class="user-info">\n                    <div class="info-lable">IT Owner</div>\n                    <div class="user-info-value">{{appInfo?.itOwners}}</div>\n                </div>\n            </div>\n            \n\n        </div>\n        <div class="version-info-con">\n            <div class="version-info">\n                <img src="assets/imgs/Version.svg" />\n                <div>\n                    <div class="version-title">Version</div>\n                    <div class="version-value">{{appInfo?.currentVersion}}</div>\n                </div>\n            </div>\n            <div class="version-info">\n                <img src="assets/imgs/AppStore.svg" />\n                <div>\n                    <div class="version-title">IOS</div>\n                    <div class="version-value">{{appInfo?.appStoreDownloads}}</div>\n                </div>\n            </div>\n            <div class="version-info">\n                <img src="assets/imgs/PlayStore.svg" />\n                <div>\n                    <div class="version-title">Android</div>\n                    <div class="version-value">{{appInfo?.playStoreDownloads}}</div>\n                </div>\n            </div>\n            <div class="version-info">\n                <img src="assets/imgs/Downloads.svg" />\n                <div>\n                    <div class="version-title">Downloads</div>\n                    <div class="version-value">{{appInfo?.totalDownloads}}</div>\n                </div>\n            </div>\n\n        </div>\n        <div *ngIf="versionData" class="versionData">\n\n            <div>\n                <ion-list class="list">\n                    <div class="content-margin" *ngFor="let item of releaseData">\n                        <div class="item-release">\n                            <div class="justify-cont-space-btw width100 release-info">\n                                <div class="color-Appdefault bold">{{item?.key}}</div>\n                                <div class="date-color fontp8em">{{item?.date }}</div>\n\n                            </div>\n                            <div class="whats-new" [innerHTML]="item?.value"></div>\n                        </div>\n                        <!-- <hr> -->\n\n                    </div>\n                </ion-list>\n            </div>\n        </div>\n        </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\version-history\version-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_1__providers_http_http__["a" /* HttpProvider */]])
    ], VersionHistoryPage);
    return VersionHistoryPage;
}());

//# sourceMappingURL=version-history.js.map

/***/ })

});
//# sourceMappingURL=80.js.map