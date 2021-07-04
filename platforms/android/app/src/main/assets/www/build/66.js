webpackJsonp([66],{

/***/ 1372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPersonnelBuseslistPageModule", function() { return SecurityPersonnelBuseslistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security_personnel_buseslist__ = __webpack_require__(1794);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SecurityPersonnelBuseslistPageModule = /** @class */ (function () {
    function SecurityPersonnelBuseslistPageModule() {
    }
    SecurityPersonnelBuseslistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__security_personnel_buseslist__["a" /* SecurityPersonnelBuseslistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__security_personnel_buseslist__["a" /* SecurityPersonnelBuseslistPage */]),
            ],
        })
    ], SecurityPersonnelBuseslistPageModule);
    return SecurityPersonnelBuseslistPageModule;
}());

//# sourceMappingURL=security-personnel-buseslist.module.js.map

/***/ }),

/***/ 1794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityPersonnelBuseslistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
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
 * Generated class for the SecurityPersonnelBuseslistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SecurityPersonnelBuseslistPage = /** @class */ (function () {
    function SecurityPersonnelBuseslistPage(navCtrl, navParams, utility, httpProvider, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.popoverCtrl = popoverCtrl;
        this.busList = [];
        this.responseList = [];
    }
    SecurityPersonnelBuseslistPage.prototype.ionViewDidLoad = function () {
    };
    SecurityPersonnelBuseslistPage.prototype.ionViewWillEnter = function () {
        this.getSPBusDetails();
    };
    SecurityPersonnelBuseslistPage.prototype.gotoBusDetails = function (busId) {
        this.navCtrl.push('SecurityPersonnelBusdetailsPage', {
            busId: busId,
        });
    };
    SecurityPersonnelBuseslistPage.prototype.getSPBusDetails = function () {
        var _this = this;
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService({
            url: "getAdminBusInOutDetailList",
            data: {},
            isZenAdmin: true,
        }).subscribe(function (response) {
            _this.utility.updateLoader(false);
            if (response) {
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1") {
                    _this.responseList = response["data"];
                    _this.busList = _this.responseList.busDetailDOs;
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    SecurityPersonnelBuseslistPage.prototype.onTimeChange = function (time, busId, typeOfTime, otherTime) {
        var newTime = otherTime.toLowerCase();
        var formattedTime = __WEBPACK_IMPORTED_MODULE_4_moment__(time);
        var updatedTime = formattedTime.format("hh:mm A");
        if (newTime.indexOf('am' || 'pm') == -1) {
            otherTime = __WEBPACK_IMPORTED_MODULE_4_moment__(otherTime, 'HHmmss').format("hh:mm A");
        }
        this.updateInOutTime(updatedTime, busId, typeOfTime, otherTime);
    };
    SecurityPersonnelBuseslistPage.prototype.updateInOutTime = function (updatedTime, busId, typeOfTime, otherTime) {
        var _this = this;
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService({
            url: "addUpdateBusInOutTime",
            data: {
                "busId": busId,
                "inTime": typeOfTime == 'inTime' ? updatedTime : otherTime,
                "outTime": typeOfTime == 'outTime' ? updatedTime : otherTime,
            },
            isZenAdmin: true,
        }).subscribe(function (response) {
            _this.utility.updateLoader(false);
            if (response) {
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1") {
                    _this.responseData = response["data"];
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    SecurityPersonnelBuseslistPage.prototype.presentOptions = function (myEvent) {
        var popover = this.popoverCtrl.create('PopoverPage', {
            'type': 'obLanding'
        });
        popover.present({ ev: myEvent });
    };
    SecurityPersonnelBuseslistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-security-personnel-buseslist',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\security-personal\security-personnel-buseslist\security-personnel-buseslist.html"*/'<!--\n  Generated template for the SecurityPersonnelBuseslistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Buses</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="presentOptions($event)">\n                <ion-icon name="more"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bus-search-conatiner">\n\n    <div>\n        <ion-card *ngFor="let item of busList" (click)="gotoBusDetails(item?.busId)">\n            <ion-card-content>\n\n                <div class="bus-list-raw1">\n                    <div class="bus-icon">\n                        <img src="assets/zenAdmin/bus-icon.svg" />\n                    </div>\n                    <div class="bus-number-width">\n                        <div class="bus-title-div">\n                            <span class="bus-name label-key">Bus</span>\n                        </div>\n                        <div class="common-alignmnt">\n                            <span class="bus-number label-value">{{item?.busNumber}}</span>\n                        </div>\n                    </div>\n                    <div class="available-seats">\n                        <img class="seatIcon" src="assets/zenAdmin/available_seats.svg">\n                        <span class="seats label-value">{{item?.reservedSeats ? item?.reservedSeats :\n                            \'0\'}}/{{item?.totalSeats}}</span>\n                    </div>\n                </div>\n\n                <div class="bus-list-raw2">\n                    <div class="bus-icon"></div>\n\n                    <div class="bus-title-div">\n                        <img class="small-icon" src="assets/zenAdmin/routeIcon.svg">\n                        <span class="route-title label-key">Route: </span>\n                        <span class="route-name label-value">{{item?.routeName}}</span>\n                    </div>\n                </div>\n\n                <div class="bus-list-raw3">\n                    <div class="bus-icon"></div>\n\n                    <div class="arrival-seats-parent">\n                        <div class="seats-container">\n                            <img class="small-icon" src="assets/zenAdmin/seaticon.svg">\n                            <span class="route-title label-key">Seats: </span>\n                            <span class="route-name label-value">{{item?.totalSeats}}</span>\n                        </div>\n                        <div class="arrival-container">\n                            <img class="arrival-icon" src="assets/zenAdmin/arrival-icon.svg">\n                            <span class="arrival-title label-key">Arrival</span>\n                        </div>\n                    </div>\n                </div>\n\n            </ion-card-content>\n\n            <div class="time-details-container" (click)="$event.stopPropagation()">\n                <div class="in-time-div">\n                    <span class="intimeTxt label-key">In Time: </span>\n                    <ion-datetime displayFormat="hh:mm A" placeholder="Time" (ionChange)="onTimeChange($event,item?.busId,\'inTime\',item?.outTime)"\n                        [(ngModel)]="item.inTime" class="label-value">\n                    </ion-datetime>\n                </div>\n                <div class="out-time-div">\n                    <span class="outTimeTxt label-key">Out Time: </span>\n                    <ion-datetime displayFormat="hh:mm A" placeholder="Time" (ionChange)="onTimeChange($event,item?.busId,\'outTime\',item?.inTime)"\n                        [(ngModel)]="item.outTime" class="label-value">\n                    </ion-datetime>\n                </div>\n            </div>\n        </ion-card>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\security-personal\security-personnel-buseslist\security-personnel-buseslist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_0__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["C" /* PopoverController */]])
    ], SecurityPersonnelBuseslistPage);
    return SecurityPersonnelBuseslistPage;
}());

//# sourceMappingURL=security-personnel-buseslist.js.map

/***/ })

});
//# sourceMappingURL=66.js.map