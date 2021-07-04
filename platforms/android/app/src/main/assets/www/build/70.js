webpackJsonp([70],{

/***/ 1366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonZensarianListPageModule", function() { return NonZensarianListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__non_zensarian_list__ = __webpack_require__(1788);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NonZensarianListPageModule = /** @class */ (function () {
    function NonZensarianListPageModule() {
    }
    NonZensarianListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__non_zensarian_list__["a" /* NonZensarianListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__non_zensarian_list__["a" /* NonZensarianListPage */]),
            ],
        })
    ], NonZensarianListPageModule);
    return NonZensarianListPageModule;
}());

//# sourceMappingURL=non-zensarian-list.module.js.map

/***/ }),

/***/ 1788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NonZensarianListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(4);
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
 * Generated class for the NonZensarianListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NonZensarianListPage = /** @class */ (function () {
    function NonZensarianListPage(navCtrl, utility, httpProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        // Variable declrations
        this.homepageUrl = "getAdminNonZensarianDetailList";
        this.userList = [];
        this.userStatus = "All";
        this.resultPending = true;
        this.limits = {
            limit: 20,
            offset: 0
        };
    }
    NonZensarianListPage.prototype.ionViewWillEnter = function () {
        this.userList = [];
        this.limits = {
            limit: 20,
            offset: 0
        };
        this.getPageData();
    };
    NonZensarianListPage.prototype.redirectToDetailPage = function (id) {
        this.navCtrl.push("NonZensarianDeatailViewPage", { userId: id });
    };
    NonZensarianListPage.prototype.statusChange = function () {
        this.userList = [];
        this.headerData = [];
        this.limits.offset = 0;
        this.getPageData();
    };
    // Call serivce to get intial data
    NonZensarianListPage.prototype.getPageData = function () {
        var _this = this;
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService({
            url: this.homepageUrl,
            data: {
                approvalStatus: this.userStatus,
                limit: this.limits.limit,
                offset: this.limits.offset,
            },
            isZenAdmin: true,
        }).subscribe(function (response) {
            _this.utility.updateLoader(false);
            if (response) {
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1") {
                    _this.headerData = response["data"];
                    if (_this.userList.length <= 0)
                        _this.userList = response["data"].nonZensarianDOs;
                    else
                        _this.userList = _this.userList.concat(response["data"].nonZensarianDOs);
                    if (!_this.utility.isEmptyOrNullOrUndefined(response["data"].nonZensarianDOs) && response["data"].nonZensarianDOs.length <= 0) {
                        _this.resultPending = false;
                    }
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
            _this.utility.showAlert("Zenadmin", error.status);
        });
    };
    NonZensarianListPage.prototype.call = function (event, data) {
        event.stopPropagation();
        this.utility.callNumber(data);
    };
    NonZensarianListPage.prototype.addNewUser = function () {
        var _this = this;
        var modal = this.modalCtrl.create("AddNonZensarianPage", {});
        modal.onDidDismiss(function (res) {
            if (res == "add") {
                _this.userList = [];
                _this.userStatus = "All";
                _this.getPageData();
            }
        });
        modal.present();
    };
    NonZensarianListPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        if (this.resultPending) {
            setTimeout(function () {
                _this.limits.limit = 20;
                _this.limits.offset = _this.limits.offset + 20;
                _this.getPageData();
                infiniteScroll.complete();
            }, 1000);
        }
        else {
            infiniteScroll.enable(false);
        }
    };
    NonZensarianListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-non-zensarian-list",template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\non-zensarian\non-zensarian-list\non-zensarian-list.html"*/'<!--\n  Generated template for the NonZensarianListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>Non Zensarian List</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="non-zensarian-content" padding>\n    <div class="filter-container">\n        <div class="pass-status">\n            <img src="assets/zenAdmin/non-zensarian-assets/dashboard-interface.svg" class="filter-icon" />\n            <ion-item class="filter-options">\n                <ion-select [(ngModel)]="userStatus" class="status-select" (ionChange)="statusChange()">\n                    <ion-option value="All">All</ion-option>\n                    <ion-option value="Approved">Approved</ion-option>\n                    <ion-option value="Cancelled">Cancelled</ion-option>\n                </ion-select>\n                <ion-icon name="chevron-down-outline"></ion-icon>\n            </ion-item>\n        </div>\n    </div>\n    <div class="profile-info" *ngFor="let user of userList; let i of index"\n        (click)="redirectToDetailPage(user?.userId)">\n        <img class="user-icon" [src]="user?.userProfilePic" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n        <div class="user-details">\n            <div class="user-info-container">\n                <span class="username label-value">{{user?.userName}}</span>\n            </div>\n            <div class="label-key">Profile Created: {{user?.profileCreateDate}}</div>\n        </div>\n        <div class="contact-id-container">\n            <span class="id-card">\n                <img src="assets/zenAdmin/non-zensarian-assets/active_pass.svg" class="id-icon"\n                    *ngIf="user?.isApproved" />\n                <img src="assets/zenAdmin/cancelled-pass.svg" class="id-icon" *ngIf="user?.isCancelled" />\n            </span>\n            <span (click)="call($event, user?.contactNumber)">\n                <img class="call-users align-top" src="assets/zenAdmin/call-image.svg" />\n            </span>\n        </div>\n    </div>\n\n    <ion-infinite-scroll threshold="300px" (ionInfinite)="loadData($event)" *ngIf="resultPending">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data...">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <ion-fab right bottom (click)="addNewUser()">\n        <button ion-fab>\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\non-zensarian\non-zensarian-list\non-zensarian-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */]])
    ], NonZensarianListPage);
    return NonZensarianListPage;
}());

//# sourceMappingURL=non-zensarian-list.js.map

/***/ })

});
//# sourceMappingURL=70.js.map