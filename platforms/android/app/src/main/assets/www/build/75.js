webpackJsonp([75],{

/***/ 1363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusPassPageModule", function() { return BusPassPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bus_pass__ = __webpack_require__(1785);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BusPassPageModule = /** @class */ (function () {
    function BusPassPageModule() {
    }
    BusPassPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bus_pass__["a" /* BusPassPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bus_pass__["a" /* BusPassPage */]),
            ],
        })
    ], BusPassPageModule);
    return BusPassPageModule;
}());

//# sourceMappingURL=bus-pass.module.js.map

/***/ }),

/***/ 1785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusPassPage; });
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
 * Generated class for the BusPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BusPassPage = /** @class */ (function () {
    function BusPassPage(data, navCtrl, utility, httpProvider) {
        this.data = data;
        this.navCtrl = navCtrl;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.bookingStatus = "All";
        this.isFilterApplied = false;
    }
    BusPassPage.prototype.ngOnInit = function () {
        this.selectOptions = {
            title: "Bus Pass Filter"
        };
    };
    BusPassPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // get loginDetails from storage
        this.data.getData("loginDetails").then(function (userInfo) {
            _this.userDetails = userInfo.details.userDetails;
            _this.userID = _this.userDetails.userId;
            if (!_this.utility.isEmptyOrNullOrUndefined(_this.userID)) {
                _this.getPassHistory();
            }
        });
    };
    /**
     *Moves to add new pass page
     * @param type type of pass to be created(bus,shuttle)
     */
    BusPassPage.prototype.addNewPass = function (type) {
        if (type == "bus") {
            this.navCtrl.push("AddNewPassPage", { passReqType: type });
        }
    };
    /**
     * Service call for pass history.
     * Retrieves all the bus pass related date.
     */
    BusPassPage.prototype.getPassHistory = function () {
        var _this = this;
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService({
            url: "getBusPassHistoryDetails", data: { associateId: this.userID, transportType: "bus", approvalStatus: this.bookingStatus }, isZenAdmin: true,
        }).subscribe(function (response) {
            if (response) {
                _this.showNoPasstxt = false;
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"])) {
                    _this.responseList = response["data"];
                    if (!_this.utility.isEmptyOrNullOrUndefined(response["data"].busPassDetailDOs)) {
                        _this.busDetails = _this.responseList.busPassDetailDOs;
                    }
                    else {
                        _this.showNoPasstxt = true;
                    }
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    /**
      *Moves to selected pass details page
      * @param buspassId selected buspass id
      */
    BusPassPage.prototype.moveToPassDetails = function (buspassId) {
        this.navCtrl.push("PassDetailsPage", { busId: buspassId, passReqType: "bus" });
    };
    /**
     * Handles filter change event
     */
    BusPassPage.prototype.onFilterChange = function () {
        this.getPassHistory();
        if (this.bookingStatus != 'All') {
            this.isFilterApplied = true;
        }
        else {
            this.isFilterApplied = false;
        }
    };
    BusPassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: "page-bus-pass",template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\bus-pass\bus-pass.html"*/'<!--\n  Generated template for the BusPassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>Bus Pass</ion-title>\n        <ion-buttons end>\n            <ion-select [(ngModel)]="bookingStatus" class="status-select" [selectOptions]="selectOptions" (ionChange)="onFilterChange()">\n                <ion-option value="All">All</ion-option>\n                <ion-option value="Approved">Approved</ion-option>\n                <ion-option value="Cancelled">Cancelled</ion-option>\n            </ion-select>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="ion-container">\n    <div *ngIf="!showNoPasstxt">\n        <div class="ticket-parent" *ngFor="let busDetailsItem of busDetails;let i = index;" [ngClass]="{\'first-container\': i==0}">\n            <div class="date-container">\n                <div>\n                    <img class="calendar-icon" src="assets/zenAdmin/calendar-img.svg" />\n                </div>\n                <div>\n                    <div class="dateValue">{{busDetailsItem.monthYear}}</div>\n                </div>\n            </div>\n            <div>\n                <div *ngFor="let busItem of busDetailsItem.busPassDetailDOs">\n                    <ion-card color="light" class="ion-card ion-text-center post-relative marginBottom-10" (click)="moveToPassDetails(busItem?.busPassId)">\n                        <div class="display-flex bus-info-container">\n                            <div class="display-flex bus-id-container">\n                                <div class="width40px"><img class="bus-icon" src="assets/zenAdmin/bus-pass-id.svg" /></div>\n                                <div class="bus-id-details">\n                                    <div class="colorGrey busIDText">BusPass ID</div>\n                                    <div class="bus-passId">{{busItem?.busPassId}}</div>\n                                </div>\n                            </div>\n                            <div class="display-flex monthly-pass-container">\n                                <div class="width40px"><img class="calendar-icon" src="assets/zenAdmin/monthly-pass.svg" /></div>\n                                <div class="bus-validity-container">\n                                    <div class="dateValue colorGrey monthly-pass-title">{{busItem?.passType}} Pass<span class="auto-renew-text" *ngIf="busItem?.passType==\'Monthly\'">(AutoRenew)</span></div>\n                                    <div class="month-pass-date">{{busItem?.busPassValidity}}</div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class="profile-wrapper"></div>\n                        <div class="container-items">\n                            <div class="route-pic">\n                                <img class="route-img" src="assets/zenAdmin/route-icon.svg" />\n                            </div>\n                            <div class="route-name">\n                                <div class="associate-name colorGrey">Route</div>\n                                <div class="key-value fontWeight">{{busItem.routeName}}</div>\n                            </div>\n                            <div class="filter-icon">\n                                <img *ngIf="busItem?.isCancelled" src="assets/zenAdmin/Cancelled.png" />\n                                <img *ngIf="!busItem?.isCancelled" src="assets/zenAdmin/Approved.png" />\n                            </div>\n                        </div>\n                        <div class="container-items pickup-point-card">\n                            <div class="route-pic">\n                                <img class="route-img" src="assets/zenAdmin/location.svg" />\n                            </div>\n                            <div class="pick-up-point">\n                                <div class="associate-name colorGrey">Pickup/Drop Point</div>\n                                <div class="key-value fontWeight">{{busItem?.pickupPointName}}</div>\n                            </div>\n                            <div class="pickup-time-card">\n                                <div class="user-pic">\n                                    <img class="clock-img" src="assets/zenAdmin/clock-icon.svg" />\n                                </div>\n                                <div class="displayFlex-col width-100">\n                                    <span class="associate-name">{{busItem?.passSubType==\'Drop\'? \'-\':busItem?.arrivalTime}}</span>\n                                </div>\n                            </div>\n                        </div>\n                    </ion-card>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf="showNoPasstxt">\n        <!-- No bus pass available. -->\n        <div class="add-float-with-bg-suggestion-text" *ngIf="!isFilterApplied">\n            Click on\n            <img class="add-float-with-bg-suggestion-icon" src="assets/zenAdmin/add-float-with-bg.svg" /> to add new\n            pass.\n        </div>\n        <div class="no-data" *ngIf="isFilterApplied && bookingStatus!=\'All\'">No {{bookingStatus}} Pass Available.</div>\n    </div>\n    <ion-fab [ngClass]="{\'customFab\': isAvailableForFinalSubmit}" right bottom (click)="addNewPass(\'bus\')">\n        <button ion-fab>\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\bus-pass\bus-pass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* Data */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_0__providers_http_http__["a" /* HttpProvider */]])
    ], BusPassPage);
    return BusPassPage;
}());

//# sourceMappingURL=bus-pass.js.map

/***/ })

});
//# sourceMappingURL=75.js.map