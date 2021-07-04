webpackJsonp([65],{

/***/ 1373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShuttleServicePageModule", function() { return ShuttleServicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shuttle_service__ = __webpack_require__(1795);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShuttleServicePageModule = /** @class */ (function () {
    function ShuttleServicePageModule() {
    }
    ShuttleServicePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shuttle_service__["a" /* ShuttleServicePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shuttle_service__["a" /* ShuttleServicePage */]),
            ],
        })
    ], ShuttleServicePageModule);
    return ShuttleServicePageModule;
}());

//# sourceMappingURL=shuttle-service.module.js.map

/***/ }),

/***/ 1795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShuttleServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the ShuttleServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShuttleServicePage = /** @class */ (function () {
    function ShuttleServicePage(data, navCtrl, utility, httpProvider) {
        this.data = data;
        this.navCtrl = navCtrl;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.bookingStatus = "All";
    }
    ShuttleServicePage.prototype.ngOnInit = function () {
        this.selectOptions = {
            title: "Bus Pass Filter",
        };
    };
    ShuttleServicePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.data.getData("loginDetails").then(function (userInfo) {
            _this.userDetails = userInfo.details.userDetails;
            _this.userID = _this.userDetails.userId;
            if (!_this.utility.isEmptyOrNullOrUndefined(_this.userID)) {
                _this.getPassHistory();
            }
        });
    };
    ShuttleServicePage.prototype.addNewPass = function (type) {
        if (type == "shuttle") {
            this.navCtrl.push("AddNewPassPage", { passReqType: type });
        }
    };
    ShuttleServicePage.prototype.getPassHistory = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var home = {
            url: "getBusPassHistoryDetails",
            data: {
                associateId: this.userID,
                transportType: "shuttle",
                approvalStatus: this.bookingStatus,
            },
            isZenAdmin: true,
        };
        this.httpProvider.http.commonService(home).subscribe(function (response) {
            if (response) {
                _this.showNoPasstxt = false;
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"]) && !_this.utility.isEmptyOrNullOrUndefined(response["status"]["statusCode"])
                    && response["status"]["statusCode"] == 1) {
                    _this.responseList = response["data"];
                    _this.busDetails = _this.responseList.busPassDetailDOs;
                    if (!_this.busDetails || _this.busDetails.length <= 0) {
                        _this.showNoPasstxt = true;
                    }
                }
                else {
                    _this.showNoPasstxt = true;
                    _this.utility.showAlert(response["status"]["statusMessage"], '');
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    ShuttleServicePage.prototype.moveToPassDetails = function (buspassId) {
        this.navCtrl.push("PassDetailsPage", {
            busId: buspassId,
            passReqType: "shuttle",
        });
    };
    ShuttleServicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: "page-shuttle-service",template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\shuttle-service\shuttle-service.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Shuttle</ion-title>\n        <ion-buttons end>\n            <ion-select [(ngModel)]="bookingStatus" class="status-select" [selectOptions]="selectOptions" (ionChange)="getPassHistory()">\n                <ion-option value="All">All</ion-option>\n                <ion-option value="Approved">Approved</ion-option>\n                <ion-option value="Cancelled">Cancelled</ion-option>\n            </ion-select>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="content-container">\n    <div *ngIf="!showNoPasstxt">\n        <div class="ticket-parent" *ngFor="let busDetailsItem of busDetails;let i=index;" [ngClass]="{\'first-container\': i==0}">\n            <div class="date-container">\n                <div>\n                    <img class="calendar-icon" src="assets/zenAdmin/calendar-img.svg" />\n                </div>\n                <div>\n                    <div class="dateValue">{{busDetailsItem.monthYear}}</div>\n                </div>\n            </div>\n            <div>\n                <div *ngFor="let busItem of busDetailsItem.busPassDetailDOs">\n                    <ion-card color="light" class="ion-card ion-text-center margin5 post-relative marginBottom-10" (click)="moveToPassDetails(busItem?.busPassId)">\n                        <div class="display-flex padding10">\n                            <div class="display-flex bus-id-container">\n                                <div class="width40px">\n                                    <!-- <img class="bus-icon" src="assets/zenAdmin/bus-pass-id.svg" /> -->\n                                    <img class="bus-icon" src="assets/zenAdmin/shuttle-img.svg" />\n                                </div>\n                                <div class="bus-id-details">\n                                    <div class="colorGrey busIDText">Shuttle</div>\n                                    <div class="bus-passId">{{busItem?.busPassId}}</div>\n                                </div>\n                            </div>\n\n                            <div class="display-flex monthly-pass-container">\n                                <div class="width40px">\n                                    <!-- <img class="calendar-icon" src="assets/zenAdmin/monthly-pass.svg" /> -->\n                                    <img class="calendar-icon" src="assets/zenAdmin/shuttle-date-img.svg" />\n                                </div>\n                                <div class="bus-validity-container">\n                                    <div class="dateValue colorGrey monthly-pass-title">Date</div>\n                                    <div class="month-pass-date">\n                                        {{busItem?.busPassValidity}}\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="profile-wrapper"></div>\n                        <div class="container-items">\n                            <div class="route-pic">\n                                <img class="route-img" src="assets/zenAdmin/route-icon.svg" />\n                            </div>\n                            <div style="display: flex;flex-direction: column;padding-top: 8px;width: 80%;">\n                                <div class="associate-name colorGrey">Route</div>\n                                <div class="key-value fontWeight">{{busItem.routeName}}</div>\n                            </div>\n                            <div class="filter-icon">\n                                <img *ngIf="busItem?.isCancelled" src="assets/zenAdmin/Cancelled.png" />\n                                <img *ngIf="!busItem?.isCancelled" src="assets/zenAdmin/Approved.png" />\n                            </div>\n                        </div>\n                        <div class="pickup-point-card">\n                            <div class="pickup-details">\n                                <div class="route-pic">\n                                    <img class="route-img" src="assets/zenAdmin/location.svg" />\n                                </div>\n                                <div class="displayFlex-col pickup-name-container">\n                                    <span class="associate-name colorGrey">Drop Point</span>\n                                    <span class="campus-name fontWeight">{{busItem.pickupPointName}}</span>\n                                </div>\n                            </div>\n                        </div>\n                    </ion-card>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf="showNoPasstxt">\n        <div class="add-float-with-bg-suggestion-text">\n            Click on\n            <img class="add-float-with-bg-suggestion-icon" src="assets/zenAdmin/add-float-with-bg.svg" /> to add new pass.\n        </div>\n    </div>\n    <ion-fab [ngClass]="{\'customFab\': isAvailableForFinalSubmit}" right bottom (click)="addNewPass(\'shuttle\')">\n        <button ion-fab>\n      <ion-icon name="add"></ion-icon>\n    </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\shuttle-service\shuttle-service.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* Data */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_0__providers_http_http__["a" /* HttpProvider */]])
    ], ShuttleServicePage);
    return ShuttleServicePage;
}());

//# sourceMappingURL=shuttle-service.js.map

/***/ })

});
//# sourceMappingURL=65.js.map