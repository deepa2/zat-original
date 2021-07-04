webpackJsonp([63],{

/***/ 1376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZenadminHomePageModule", function() { return ZenadminHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zenadmin_home__ = __webpack_require__(1798);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ZenadminHomePageModule = /** @class */ (function () {
    function ZenadminHomePageModule() {
    }
    ZenadminHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zenadmin_home__["a" /* ZenadminHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zenadmin_home__["a" /* ZenadminHomePage */]),
            ],
        })
    ], ZenadminHomePageModule);
    return ZenadminHomePageModule;
}());

//# sourceMappingURL=zenadmin-home.module.js.map

/***/ }),

/***/ 1798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZenadminHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_zenadmin_zenadmin_calender_zenadmin_calender__ = __webpack_require__(788);
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
 * Generated class for the ZenadminHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZenadminHomePage = /** @class */ (function () {
    function ZenadminHomePage(navCtrl, navParams, modalCtrl, utility, httpProvider, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.popoverCtrl = popoverCtrl;
        this.showNoPassPage = false;
        this.slideData = [];
    }
    ZenadminHomePage.prototype.ionViewDidLoad = function () {
    };
    ZenadminHomePage.prototype.ionViewWillEnter = function () {
        this.getHomePageData();
    };
    /**
     * Opens calendar modal component
     */
    ZenadminHomePage.prototype.openCalendarModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_zenadmin_zenadmin_calender_zenadmin_calender__["a" /* ZenadminCalenderComponent */], {
            dataParams: {
                year: this.passDetails.currDate,
            },
        }, {
            cssClass: "zenadmin-calender-css",
        });
        modal.present();
    };
    /**
     * Moves to the different pages based on the pageTitle passed.
     * @param pageTitle title to the next Page.
     *
     */
    ZenadminHomePage.prototype.goToDetailPage = function (pageTitle) {
        if (pageTitle == "Search Route") {
            this.navCtrl.push("SearchRoutePage", { role: "Associate" });
        }
        else if (pageTitle == "Bus Pass") {
            this.navCtrl.push("BusPassPage", { role: "Associate" });
        }
        else if (pageTitle == "Bus Incharge") {
            this.navCtrl.push("TravelersListPage", { role: "Associate" });
        }
        else if (pageTitle == "Shuttle Service") {
            this.navCtrl.push("ShuttleServicePage", { role: "Associate" });
        }
        else if (pageTitle == "Admin") {
            this.navCtrl.push("AdminDashboardPage", { role: "Associate" });
        }
        else if (pageTitle == "Security Personnel") {
            this.navCtrl.push("SecurityPersonnelBuseslistPage", {
                role: "Associate",
            });
        }
    };
    /**
      * Service call for Home page Details
      */
    ZenadminHomePage.prototype.getHomePageData = function () {
        var _this = this;
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService({ url: 'getZenAdminHomepage', data: {}, isZenAdmin: true }).subscribe(function (response) {
            if (response) {
                _this.content.resize();
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1") {
                    _this.passDetails = response["data"];
                    _this.slideData = _this.passDetails.slideData;
                    _this.content.resize();
                    if (!_this.utility.isEmptyOrNullOrUndefined(response["data"].busPassDetailDO)) {
                        _this.busDetails = response["data"].busPassDetailDO;
                        _this.showNoPassPage = false;
                    }
                    else {
                        _this.showNoPassPage = true;
                    }
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    /**
      * Moves to AddNewPassPage if user wants to create new pass
      */
    ZenadminHomePage.prototype.moveToAddnewpass = function () {
        this.navCtrl.push("AddNewPassPage", { passReqType: "bus" });
    };
    // Call to user number
    ZenadminHomePage.prototype.call = function (number) {
        this.utility.callNumber(number);
    };
    // Open Popover For FAQ
    ZenadminHomePage.prototype.openPopOverMenu = function (event) {
        var _this = this;
        var popover = this.popoverCtrl.create("PopoverPage", {
            type: "zenAdminFaq"
        });
        popover.present({
            ev: event,
        });
        popover.onDidDismiss(function (res) {
            if (res == 'faq') {
                _this.navCtrl.push("FaqPage", {
                    "pageTitle": "FAQs"
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* Content */])
    ], ZenadminHomePage.prototype, "content", void 0);
    ZenadminHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-zenadmin-home",template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\zenadmin-home\zenadmin-home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>ZenAdmin</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="openPopOverMenu($event)">\n                <ion-icon name="more"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="grey-backgrnd">\n    <div class="ticket-parent" *ngIf="!showNoPassPage && passDetails">\n        <div class="date-container" (click)="openCalendarModal()">\n            <div>\n                <img class="calendar-icon" src="assets/zenAdmin/calendar-img.svg" />\n            </div>\n            <div>\n                <div class="day-value">{{passDetails?.currDay}}</div>\n                <div class="display-flex">\n                    <div class="currDate">{{passDetails?.currDate}}</div>\n                    <span class="display-flex">\n                        <img class="blk-down-arrow" src="assets/zenAdmin/down-arrow.svg" />\n                    </span>\n                </div>\n            </div>\n        </div>\n        <div>\n            <ion-card color="light" class="ion-card ion-text-center margin5 post-relative">\n                <div class="display-flex bus-details-parent">\n                    <div class="display-flex bus-id-container">\n                        <div class="width40px">\n                            <img class="calendar-icon" src="assets/zenAdmin/bus-pass-id.svg" />\n                            <img class="calendar-icon" src="assets/zenAdmin/shuttle-img.svg"\n                                *ngIf="busDetails?.passType == \'Shuttle\'" />\n                        </div>\n                        <div>\n                            <div class="colorGrey busIDText">Bus Pass ID</div>\n                            <div class="colorGrey busIDText" *ngIf="busDetails?.passType == \'Shuttle\'">Bus Pass ID\n                            </div>\n                            <div class="bus-passId">{{busDetails?.busPassId}}</div>\n                        </div>\n                    </div>\n\n                    <div class="display-flex monthly-pass-container">\n                        <div class="width40px">\n                            <img class="calendar-icon" src="assets/zenAdmin/monthly-pass.svg" />\n                            <img class="calendar-icon" src="assets/zenAdmin/shuttle-date-img.svg"\n                                *ngIf="busDetails?.passType == \'Shuttle\'" />\n                        </div>\n                        <div>\n                            <div class="dateValue colorGrey monthly-pass-title">\n                                {{busDetails?.passType}} Pass<span class="auto-renew-text"\n                                    *ngIf="busDetails?.passType==\'Monthly\'">(AutoRenew)</span>\n                            </div>\n                            <div class="dateValue colorGrey monthly-pass-title"\n                                *ngIf="busDetails?.passType == \'Shuttle\'">\n                                Date\n                            </div>\n                            <div class="month-pass-date">{{busDetails?.busPassValidity}}</div>\n                        </div>\n                    </div>\n                </div>\n                <!-- associate list -->\n                <div class="userProfile-container">\n                    <div class="img-container">\n                        <img class="user-icon" [src]="busDetails?.userProfilePic"\n                            onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n                    </div>\n                    <div class="user-info-container">\n                        <span class="associate-name">{{busDetails?.userName}}</span>\n                        <span class="key-value colorGrey fontWeight">{{busDetails?.userId}}</span>\n                    </div>\n                </div>\n                <!-- approved/cancelled image -->\n                <div class="position-absolute ticket-status-parent">\n                    <img src="assets/zenAdmin/Approved.png" class="ticket-status-img" *ngIf="busDetails?.isApproved" />\n                    <img src="assets/zenAdmin/Cancelled.png" class="ticket-status-img"\n                        *ngIf="busDetails?.isCancelled" />\n                </div>\n\n                <div class="container-items">\n                    <div class="route-pic">\n                        <img class="route-img" src="assets/zenAdmin/route-icon.svg" />\n                    </div>\n                    <div class="name-details">\n                        <span class="associate-name colorGrey">Route</span>\n                        <span class="key-value fontWeight">{{busDetails?.routeName}}</span>\n                    </div>\n                </div>\n                <div class="pickup-point-card">\n                    <div class="pickup-details">\n                        <div class="route-pic">\n                            <img class="route-img" src="assets/zenAdmin/location.svg" />\n                        </div>\n                        <div class="displayFlex-col pickup-name-container">\n                            <span class="associate-name colorGrey">Pickup/Drop Point</span>\n                            <span class="campus-name fontWeight">{{busDetails?.pickupPointName}}</span>\n                        </div>\n                    </div>\n                    <div class="pickup-time-card">\n                        <div class="">\n                            <img class="clock-img" src="assets/zenAdmin/clock-icon.svg" />\n                        </div>\n                        <div class="displayFlex-col">\n                            <span class="associate-name fontWeight">{{busDetails?.passSubType==\'Drop\'?\n                                \'-\':busDetails?.arrivalTime}}</span>\n                        </div>\n                    </div>\n                </div>\n                <div class="profile-wrapper"></div>\n                <div class="bus-info-container">\n                    <div class="user-pic"> <img class="bus-img" src="assets/zenAdmin/bus-image.svg" /></div>\n                    <div class="bus-name-details">\n                        <div class="associate-name colorGrey">Bus</div>\n                        <div class="key-value fontWeight">{{busDetails?.busNumber}}</div>\n                    </div>\n                </div>\n                <div class="driver-info-container">\n                    <div class="driver-img-container"><img class="user-icon" [src]="busDetails?.busInchargeProfilePic"\n                            onerror="this.src=\'assets/imgs/dummy-profile.png\'" /></div>\n                    <div class="driver-info-card">\n                        <span class="associate-name colorGrey">Bus Incharge</span>\n                        <span class="key-value fontWeight">{{busDetails?.busInchargeName}}</span>\n                    </div>\n                    <div (click)="call(busDetails?.busInchargeContactNo)">\n                        <img class="phone-image" src="assets/zenAdmin/call-image.svg" />\n                    </div>\n                </div>\n            </ion-card>\n        </div>\n    </div>\n    <!-- NO pass available -->\n    <div *ngIf="showNoPassPage" class="bg-grey no-pass-parent">\n        <div class="nopass-date-container bg-grey color-black" (click)="openCalendarModal()">\n            <div>\n                <img class="calendar-icon" src="assets/zenAdmin/calendar-img.svg"\n                    onerror="this.src=\'./assets/imgs/logo.png\'" />\n            </div>\n            <div class="nopass-date-details">\n                <div class="day-value">{{passDetails?.currDay}}</div>\n                <div class="display-flex">\n                    <div class="currDate">{{passDetails?.currDate}}</div>\n                    <span class="display-flex">\n                        <img class="blk-down-arrow" src="assets/zenAdmin/down-arrow-black.svg" />\n                    </span>\n                </div>\n            </div>\n        </div>\n        <div class="no-pass-available-card">\n            <div class="no-pass-text padding10">No Bus Pass Available</div>\n            <div class="no-pass-bg">\n                <img src="assets/zenAdmin/no-pass-bg.svg" onerror="this.src=\'./assets/imgs/logo.png\'"\n                    class="no-pass-img" />\n            </div>\n            <div class="new-pass-btn margin10" (click)="moveToAddnewpass()">\n                <button ion-button round class="newPass-btn">New Pass</button>\n            </div>\n        </div>\n    </div>\n    <div class="other-options" *ngIf="passDetails">\n        <ion-slides class="height-auto" [slidesPerView]="2.2">\n            <!-- learning-card -->\n            <ion-slide *ngFor="let item of slideData">\n                <div class="midcart-item {{item?.title}}" (click)="goToDetailPage(item?.title, \'\',item)">\n                    <span class="padding2per"><img class="cartImg" src="assets/zenAdmin/{{item?.title}}.svg"\n                            onerror="this.src=\'./assets/imgs/logo.png\'" /></span>\n                    <div class="midcart-heading colorWhite">{{item?.title}}</div>\n                </div>\n            </ion-slide>\n        </ion-slides>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\zenadmin-home\zenadmin-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["w" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_1__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["C" /* PopoverController */]])
    ], ZenadminHomePage);
    return ZenadminHomePage;
}());

//# sourceMappingURL=zenadmin-home.js.map

/***/ })

});
//# sourceMappingURL=63.js.map