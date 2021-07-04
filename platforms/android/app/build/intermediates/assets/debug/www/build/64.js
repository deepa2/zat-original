webpackJsonp([64],{

/***/ 1375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelersListPageModule", function() { return TravelersListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__travelers_list__ = __webpack_require__(1797);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TravelersListPageModule = /** @class */ (function () {
    function TravelersListPageModule() {
    }
    TravelersListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__travelers_list__["a" /* TravelersListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__travelers_list__["a" /* TravelersListPage */]),
            ],
        })
    ], TravelersListPageModule);
    return TravelersListPageModule;
}());

//# sourceMappingURL=travelers-list.module.js.map

/***/ }),

/***/ 1797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelersListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_zenadmin_cancel_buspass_modal_cancel_buspass_modal__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the TravelersListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TravelersListPage = /** @class */ (function () {
    function TravelersListPage(navCtrl, navParams, modalCtrl, utility, httpProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.bookingStatus = "All";
        this.showNoPassPage = false;
        this.busDetails = [
        // {
        //   "currDate": "14 Feb, 2021", "currDay": "Sunday",
        //   "busPassDetailDOs": [{
        //     "monthYear": "Mar, 21", "busPassDetailDOs":
        //       [{
        //         "routeName": "Vijaya Nagar <-> Kharadi", "pickupPointName": "MANIK BAUG", "arrivalTime": "07:32:00", "busPassId": "66", "passType": "Daily", "busPassValidity": "12 Mar - 12 Mar, 2021", "isApproved": true, "isPending": false,
        //         "isRejected": false, "isCancelled": false
        //       }
        //       ]
        //   }
        //   ]
        // }
        ];
    }
    TravelersListPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad TravelersListPage", this.busDetails);
        this.getBusInchargeHistoryDetails();
    };
    TravelersListPage.prototype.onSelectChange = function (data) {
        this.getBusInchargeHistoryDetails();
    };
    TravelersListPage.prototype.getBusInchargeHistoryDetails = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var home = {
            url: "getBusInchargeHistoryDetails",
            data: {
                approvalStatus: this.bookingStatus,
            },
            isZenAdmin: true,
        };
        this.httpProvider.http.commonService(home).subscribe(function (response) {
            if (response) {
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"]) &&
                    response.status["statusCode"] == "1") {
                    _this.busDetails = response["data"];
                    console.log("busDetails", _this.busDetails);
                    _this.inchargeDetails = response["data"].busInchargeTravellerDOs;
                    console.log("inchargeDetails", _this.inchargeDetails);
                    _this.showNoPassPage = false;
                }
                else {
                    // no data available
                    _this.showNoPassPage = true;
                    // this.passDetails = response['data'];
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    TravelersListPage.prototype.call = function (number) {
        this.utility.callNumber(number);
    };
    TravelersListPage.prototype.gotoDetailsPage = function (data) {
        this.navCtrl.push("TravelerListDetailsPage", {
            busInchagreHistoryId: data.busInchagreHistoryId,
        });
    };
    TravelersListPage.prototype.raiseComplaintReq = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__components_zenadmin_cancel_buspass_modal_cancel_buspass_modal__["a" /* CancelBuspassModalComponent */], {
            passID: this.busDetails.busPassId,
            passType: this.busDetails.passType,
            passValidity: this.busDetails.busPassValidity,
            requestType: "raiseComplaint",
        }, {
            cssClass: "cancel-pass-modal",
        });
        modal.present();
        modal.onDidDismiss(function (res) {
            // console.log("response", res);
            // this.utility.updateLoader(true)
            // if (res) {
            //   if (res.key == 'passCancelled') {
            //     this.utility.updateLoader(false)
            //     // this.isPassCancelled = true;
            //     console.log("cancelled data", res.cancelledData);
            //     // this.busDetails = ''
            //     // this.cancelBusDetails = res.cancelledData
            //     this.cancelMsg = res.cancelledData.busPassStatusMessageDetails
            //     console.log("cancelMsg", this.cancelMsg);
            //     console.log("cancelBusDetails", this.cancelBusDetails.userName);
            //   }
            // }
            // else {
            //   this.utility.updateLoader(false)
            // }
        });
    };
    TravelersListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-travelers-list",template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\travelers-list\travelers-list.html"*/'<!--\n  Generated template for the TravelersListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>Travellers List</ion-title>\n        <ion-buttons end>\n            <ion-select [(ngModel)]="bookingStatus" class="status-select" interface="popover" (ionChange)="onSelectChange($event)">\n                <ion-option value="All">All</ion-option>\n                <ion-option value="Approved">Approved</ion-option>\n                <ion-option value="Cancelled">Cancelled</ion-option>\n            </ion-select>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="mainContent">\n\n    <div *ngIf="showNoPassPage" class="no-data">No Data Found</div>\n\n    <div *ngIf="!showNoPassPage && inchargeDetails">\n        <div class="ticket-parent" *ngFor="let busItem of inchargeDetails">\n            <!-- (click)="openCalendarModal()" busInchargeDetailDOs-->\n            <div class="date-container">\n                <div>\n                    <img class="calendar-icon" src="assets/zenAdmin/calendar-img.svg" />\n                </div>\n                <div>\n                    <!-- <div class="day-value">{{inchargeDetails?.currDay}}</div> -->\n                    <div class="display-flex">\n                        <div class="currDate">{{busItem?.date}}</div>\n                        <!-- <span class="display-flex">\n            <img class="blk-down-arrow" src="assets/zenAdmin/down-arrow.svg" />\n          </span> -->\n                    </div>\n                </div>\n            </div>\n            <div>\n                <ion-card color="light" class="ion-card ion-text-center margin5 post-relative" *ngFor="let item of busItem.busInchargeDetailDOs" (click)="gotoDetailsPage(item)">\n                    <div class="bus-details-card">\n                        <div class="busNumber-details">\n                            <span>\n                <img class="bus-img" src="assets/zenAdmin/bus-image.svg" />\n              </span>\n                            <div class="busNumber-info-card">\n                                <span class="colorGrey"> Bus </span>\n                                <span class="bus-number"> {{item.busNumber}} </span>\n                            </div>\n                        </div>\n                        <div class="busUser-count-details">\n                            <div>\n                                <img class="grp-image" src="assets/zenAdmin/group-image.svg" />\n                            </div>\n                            <div class="usersCount">\n                                {{item.reservedSeats}}/{{item.totalSeats}}\n                            </div>\n                        </div>\n                    </div>\n                    <div class="profile-wrapper"></div>\n                    <div class="container-items">\n                        <div class="route-pic">\n                            <img class="route-img" src="assets/zenAdmin/route-icon.svg" />\n                            <!-- <img class="userpic-bg" src="assets/zenLearn-imgs/User_profile_BG.svg"> -->\n                        </div>\n                        <div style="\n              display: flex;\n              flex-direction: column;\n              padding-top: 8px;\n              width: 80%;\n            ">\n                            <span class="associate-name colorGrey">Route</span>\n                            <span class="key-value fontWeight">{{item?.busRouteName}}</span>\n                        </div>\n                    </div>\n                    <div class="driver-info-container">\n                        <!-- <div class="user-pic">\n            <img class="img-style" [src]="item?.driverProfilePic" onerror="this.src=\'./assets/imgs/logo.png\'">\n            <img class="userpic-bg" src="assets/zenLearn-imgs/User_profile_BG.svg">\n          </div> -->\n                        <div class="profile-img-container">\n                            <!-- <img class="ringImg-profile" src="assets/zenLearn-imgs/profile-ring-img.svg" onerror="this.src=\'assets/imgs/blank.png\'" /> -->\n                            <img class="userImage" [src]="tem?.driverProfilePic" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n                        </div>\n                        <div style="\n              display: flex;\n              flex-direction: column;\n              padding-top: 8px;\n              width: 80%;\n            ">\n                            <span class="associate-name colorGrey">Driver</span>\n                            <span class="key-value fontWeight"> {{item?.driverName}}</span>\n                        </div>\n                        <div (click)="call(item?.driverNumber)">\n                            <img class="phone-image" src="assets/zenAdmin/call-image.svg" />\n                        </div>\n                    </div>\n                </ion-card>\n            </div>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\travelers-list\travelers-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["w" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_1__providers_http_http__["a" /* HttpProvider */]])
    ], TravelersListPage);
    return TravelersListPage;
}());

//# sourceMappingURL=travelers-list.js.map

/***/ })

});
//# sourceMappingURL=64.js.map