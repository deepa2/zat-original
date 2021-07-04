webpackJsonp([71],{

/***/ 1367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonZensarianDeatailViewPageModule", function() { return NonZensarianDeatailViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__non_zensarian_deatail_view__ = __webpack_require__(1789);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NonZensarianDeatailViewPageModule = /** @class */ (function () {
    function NonZensarianDeatailViewPageModule() {
    }
    NonZensarianDeatailViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__non_zensarian_deatail_view__["a" /* NonZensarianDeatailViewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__non_zensarian_deatail_view__["a" /* NonZensarianDeatailViewPage */]),
            ],
        })
    ], NonZensarianDeatailViewPageModule);
    return NonZensarianDeatailViewPageModule;
}());

//# sourceMappingURL=non-zensarian-deatail-view.module.js.map

/***/ }),

/***/ 1789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NonZensarianDeatailViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(4);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the NonZensarianDeatailViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NonZensarianDeatailViewPage = /** @class */ (function () {
    function NonZensarianDeatailViewPage(navCtrl, navParams, utility, httpProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.taskView = "details";
        this.userId = this.navParams.get("userId");
    }
    NonZensarianDeatailViewPage.prototype.ionViewDidEnter = function () {
        this.getPageData();
    };
    // Call serivce to get intial data
    NonZensarianDeatailViewPage.prototype.getPageData = function () {
        var _this = this;
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService({ url: "getAdminNonZensarianDetailData", data: { nzUserId: this.userId }, isZenAdmin: true }).subscribe(function (response) {
            _this.utility.updateLoader(false);
            if (response) {
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1") {
                    _this.busDetails = response["data"].busPassDOs;
                    _this.userData = response["data"].nonZensarianDO;
                    _this.userDetailsData = response["data"].nonZensarianDODetails;
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
            _this.utility.showAlert("Zenadmin", error.status);
        });
    };
    NonZensarianDeatailViewPage.prototype.goToBusDetail = function (busData) {
        this.navCtrl.push("NonZensarianPassDetailPage", {
            busId: busData.busPassId,
            nzUserId: this.userData.userId,
        });
    };
    // Update User
    NonZensarianDeatailViewPage.prototype.updateUser = function () {
        var _this = this;
        var modal = this.modalCtrl.create("AddNonZensarianPage", {
            userData: __assign({}, this.userData, this.userDetailsData),
            isEdit: true,
        });
        modal.onDidDismiss(function (res) {
            if (res == "add") {
                _this.getPageData();
            }
        });
        modal.present();
    };
    // Redirecting to new Bus Pass
    NonZensarianDeatailViewPage.prototype.addNewBusPass = function () {
        this.navCtrl.push("AddNewPassPage", {
            isNonZensarian: true,
            passReqType: "bus",
            nonZensarianID: this.userData.userId
        });
    };
    NonZensarianDeatailViewPage.prototype.call = function (number) {
        this.utility.callNumber(number);
    };
    NonZensarianDeatailViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-non-zensarian-deatail-view",template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\non-zensarian\non-zensarian-deatail-view\non-zensarian-deatail-view.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Non Zensarian Detail View</ion-title>\n    </ion-navbar>\n    <div class="user-details-container">\n        <div class="profile-container">\n            <div class="img-container">\n                <img class="user-icon" [src]="userData?.userProfilePic"\n                    onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n            </div>\n            <div class="user-details">\n                <div>\n                    <span class="username">{{userData?.userName}}</span>\n                </div>\n                <div class="emp-id">{{userData?.userId}}</div>\n                <div class="profile-calender colorGrey mt-5">\n                    <img src="assets/zenAdmin/non-zensarian-assets/calender.svg" class="detail-icon"\n                        alt="Profile created date" /> Profile Created: {{userData?.profileCreateDate}}\n                </div>\n            </div>\n        </div>\n        <div class="mt-10">\n            <ion-segment [(ngModel)]="taskView" class="custom-segment">\n                <ion-segment-button value="details">Details</ion-segment-button>\n                <ion-segment-button value="pass">Bus Pass</ion-segment-button>\n            </ion-segment>\n        </div>\n        <img class="edit-icon" src="assets/zenAdmin/edit-icon.svg" (click)="updateUser()" />\n    </div>\n</ion-header>\n\n<ion-content class="non-zensarian-container">\n    <div [ngSwitch]="taskView">\n        <div class="details-view mt-40" *ngSwitchCase="\'details\'">\n            <ion-grid>\n                <ion-row class="flex-row mt-0">\n                    <ion-col col-5 class="text-color">\n                        <img src="assets/zenAdmin/non-zensarian-assets/call.svg" class="detail-icon"\n                            alt="Contact Number" /> Contact Number\n                    </ion-col>\n                    <ion-col class="contact-info text-color" col-7>\n                        {{userDetailsData?.contactNumber}}\n                        <img (click)="call(userDetailsData?.contactNumber)" class="call-users"\n                            src="assets/zenAdmin/call-image.svg" />\n                    </ion-col>\n                </ion-row>\n\n                <ion-row class="flex-row">\n                    <ion-col col-5 class="text-color">\n                        <img src="assets/zenAdmin/non-zensarian-assets/email.svg" class="detail-icon"\n                            alt="Email Address" /> Email Address\n                    </ion-col>\n                    <ion-col col-7 class="text-color">{{userDetailsData?.emailId}}</ion-col>\n                </ion-row>\n\n                <ion-row class="flex-row">\n                    <ion-col col-5 class="text-color">\n                        <img src="assets/zenAdmin/non-zensarian-assets/designation.svg" class="detail-icon"\n                            alt="Designation" /> Designation\n                    </ion-col>\n                    <ion-col col-7 class="text-color">{{userDetailsData?.designation}}</ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n\n        <div class="pass-view mt-20" *ngSwitchCase="\'pass\'">\n            <div class="ticket-parent" *ngFor="let busDetailsItem of busDetails">\n                <div class="date-container">\n                    <div>\n                        <img class="calendar-icon" src="assets/zenAdmin/calendar-img.svg" />\n                    </div>\n                    <div>\n                        <div class="dateValue">{{busDetailsItem.monthYear}}</div>\n                    </div>\n                </div>\n\n                <div>\n                    <div *ngFor="let busItem of busDetailsItem.busPassDetailDOs">\n                        <ion-card color="light" class="ion-card ion-text-center margin5 post-relative marginBottom-10"\n                            (click)="goToBusDetail(busItem)">\n                            <div class="display-flex padding10 blue-border pass-detail-container">\n                                <div class="display-flex bus-id-container">\n                                    <div class="width40px">\n                                        <img class="bus-icon" src="assets/zenAdmin/bus-pass-id.svg" />\n                                    </div>\n                                    <div class="bus-id-details">\n                                        <div class="colorGrey busIDText">BusPass ID</div>\n                                        <div class="bus-passId">{{busItem?.busPassId}}</div>\n                                    </div>\n                                </div>\n\n                                <div class="display-flex monthly-pass-container">\n                                    <div class="width40px">\n                                        <img class="calendar-icon" src="assets/zenAdmin/monthly-pass.svg" />\n                                    </div>\n                                    <div class="bus-validity-container">\n                                        <div class="dateValue colorGrey monthly-pass-title">{{busItem?.passType}} Pass\n                                        </div>\n                                        <div class="month-pass-date">{{busItem?.busPassValidity}}</div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class="profile-wrapper"></div>\n                            <div class="container-items blue-border">\n                                <div class="route-pic">\n                                    <img class="route-img" src="assets/zenAdmin/route-icon.svg" />\n                                </div>\n                                <div class="route-container">\n                                    <div class="associate-name colorGrey">Route</div>\n                                    <div class="key-value fontWeight">{{busItem.routeName}}</div>\n                                </div>\n                                <div class="filter-icon">\n                                    <img *ngIf="busItem?.isCancelled" src="assets/zenAdmin/Cancelled.png" />\n                                    <img *ngIf="!busItem?.isCancelled" src="assets/zenAdmin/Approved.png" />\n                                </div>\n                            </div>\n                            <div class="pickup-point-card blue-border">\n                                <div class="pickup-details">\n                                    <div class="route-pic">\n                                        <img class="route-img" src="assets/zenAdmin/location.svg" />\n                                    </div>\n                                    <div class="displayFlex-col pickup-name-container">\n                                        <span class="associate-name colorGrey">Pickup Point</span>\n                                        <span class="campus-name fontWeight">{{busItem?.pickupPointName}}</span>\n                                    </div>\n                                </div>\n                                <div class="pickup-time-card">\n                                    <div class="user-pic">\n                                        <img class="clock-img" src="assets/zenAdmin/clock-icon.svg" />\n                                    </div>\n                                    <div class="displayFlex-col">\n                                        <span class="associate-name"> {{busItem?.passSubType==\'Drop\'? \'-\':busItem?.arrivalTime}}</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </ion-card>\n                    </div>\n                </div>\n            </div>\n            <div class="no-data" *ngIf="!busDetails || busDetails.length == \'0\'">No Data Available</div>\n        </div>\n    </div>\n\n    <ion-fab right bottom (click)="addNewBusPass()">\n        <button ion-fab>\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\non-zensarian\non-zensarian-deatail-view\non-zensarian-deatail-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */]])
    ], NonZensarianDeatailViewPage);
    return NonZensarianDeatailViewPage;
}());

//# sourceMappingURL=non-zensarian-deatail-view.js.map

/***/ })

});
//# sourceMappingURL=71.js.map