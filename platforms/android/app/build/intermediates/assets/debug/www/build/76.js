webpackJsonp([76],{

/***/ 1362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusdetailsPageModule", function() { return BusdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__busdetails__ = __webpack_require__(1784);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BusdetailsPageModule = /** @class */ (function () {
    function BusdetailsPageModule() {
    }
    BusdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__busdetails__["a" /* BusdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__busdetails__["a" /* BusdetailsPage */]),
            ],
        })
    ], BusdetailsPageModule);
    return BusdetailsPageModule;
}());

//# sourceMappingURL=busdetails.module.js.map

/***/ }),

/***/ 1784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_zenadmin_admin_add_pickup_points_admin_add_pickup_points__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
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
 * Generated class for the BusdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BusdetailsPage = /** @class */ (function () {
    function BusdetailsPage(navCtrl, navParams, httpProvider, utility, modalCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.utility = utility;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.segmentModel = "bus-details";
        if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get("busID")))
            this.busId = this.navParams.get("busID");
    }
    BusdetailsPage.prototype.ionViewDidEnter = function () {
        this.getBusDetails();
        // if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get('isModified'))) {
        //   if (this.navParams.get('isModified')) {
        //     this.getBusDetails();
        //   }
        // }
    };
    BusdetailsPage.prototype.ngOnInit = function () {
    };
    // Bus Details Service
    BusdetailsPage.prototype.getBusDetails = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var getAdminBusDetailData = {
            url: "getAdminBusDetailData",
            data: {
                busId: this.busId,
            },
            isZenAdmin: true,
        };
        this.subscription = this.httpProvider.http.commonService(getAdminBusDetailData).subscribe(function (response) {
            if (response) {
                _this.showNoPasstxt = false;
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"])) {
                    _this.responseList = response["data"];
                    _this.busDetails = _this.responseList.busDetailDO;
                    _this.busDetailsIncharge = _this.responseList.busInchargeDetailDO;
                    _this.driverDetails = _this.responseList.driverDetailDO;
                    _this.pickupPointsList = _this.responseList.pickupPointsDOs;
                }
                if (response.status["statusCode"] == "16") {
                    // no pass available
                    _this.showNoPasstxt = true;
                    // this.routeList = []
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    BusdetailsPage.prototype.navToBusRoute = function () {
        this.navCtrl.push("SearchRoutePage");
    };
    BusdetailsPage.prototype.navToAddBusPage = function (busData) {
        this.navCtrl.push("AddBusPage", { isNewBus: false, busData: busData, busInchargeDetails: this.busDetailsIncharge, driverDetails: this.driverDetails });
    };
    BusdetailsPage.prototype.openpickupPtsModal = function (isnewPickup, pickupPointsList) {
        // let modal = this.modalCtrl.create(AdminAddPickupPointsComponent, {
        //   pickupPointList: !isnewPickup ? pickupPointsList : null,
        //   isUpdatePickupPts: true,
        //   busDetails: this.busDetails,
        //   isNewPickup: isnewPickup
        // }, {
        //   cssClass: "",
        // });
        // modal.onDidDismiss((data) => {
        //   if (data == "add") {
        //     this.getBusDetails();
        //   }
        // });
        // modal.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__components_zenadmin_admin_add_pickup_points_admin_add_pickup_points__["a" /* AdminAddPickupPointsComponent */], {
            pickupPointList: !isnewPickup ? pickupPointsList : null,
            isUpdatePickupPts: true,
            busDetails: this.busDetails,
            isNewPickup: isnewPickup
        });
    };
    // Call to user number
    BusdetailsPage.prototype.call = function (contactNumber) {
        this.utility.callNumber(contactNumber);
    };
    BusdetailsPage.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    BusdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-busdetails",template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\bus-details\busdetails.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <div class="left-header">Bus Details</div>\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="navToBusRoute()">\n                <img src="assets/zenAdmin/search-icon.svg"  />\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="content-container">\n    <div class="container-padding" *ngIf="busDetails?.busNumber">\n        <div class="bus-details">\n            <div class="bus-icon">\n                <img src="assets/zenAdmin/bus-icon.svg" />\n            </div>\n            <div class="bus-info">\n                <div class="common-alignmnt">\n                    <span class="bus-heading">Bus</span>\n                </div>\n                <div class="common-alignmnt">\n                    <span class="bus-number">{{busDetails?.busNumber}}</span>\n                </div>\n            </div>\n            <div class="available-seats">\n                <div class="align-center">\n                    <img class="seatIcon" src="assets/zenAdmin/available_seats.svg" />\n                    <span class="seats">{{busDetails?.reservedSeats ? busDetails?.reservedSeats : \'0\'}}/{{busDetails?.totalSeats}}</span>\n                </div>\n            </div>\n            <div class="edit-detail">\n                <img class="edit-icon" src="assets/zenAdmin/edit-icon.svg" (click)="navToAddBusPage(busDetails)" />\n            </div>\n        </div>\n        <div class="bus-details">\n            <div class="bus-icon">\n            </div>\n            <div class="common-alignmnt mt-10">\n                <img class="small-icon" src="assets/zenAdmin/routeIcon.svg" />\n                <span class="route-title">Route:</span>\n                <span class="route-name">{{busDetails?.routeName}}</span>\n            </div>\n        </div>\n        <div class="bus-details">\n            <div class="bus-icon">\n            </div>\n            <div class="common-alignmnt mt-7">\n                <img class="small-icon" src="assets/zenAdmin/seaticon.svg" />\n                <span class="route-title">Seats:</span>\n                <span class="route-name">{{busDetails?.totalSeats}}</span>\n            </div>\n        </div>\n\n    </div>\n    <!-- segment\'s -->\n    <div class="segment-section">\n        <ion-segment [(ngModel)]="segmentModel" class="segment-container">\n            <ion-segment-button value="bus-details" class="custom-segment">Bus Details</ion-segment-button>\n            <ion-segment-button value="pickupPoint" class="custom-segment">Pickup Point</ion-segment-button>\n        </ion-segment>\n    </div>\n    <!-- segmented cards -->\n\n    <div [ngSwitch]="segmentModel" *ngIf="busDetails?.busNumber">\n        <div *ngSwitchCase="\'bus-details\'">\n            <div>\n                <ion-card class="card-parent">\n                    <div class="card-header padding10">\n                        <div>\n                            <img class="incharge-img" src="assets/zenAdmin/sp-incharge-icon.svg" onerror="this.src=\'./assets/imgs/annual-status.svg\'" />\n                        </div>\n                        <div class="fontWeight">Bus Incharge</div>\n                    </div>\n                    <div class="card-data">\n                        <div class="userProfile-container">\n                            <div class="img-container">\n                                <img class="user-icon" [src]="busDetailsIncharge?.busInchargeProfilePic" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n                            </div>\n                            <div class="user-info-container">\n                                <span class="associate-name">Name</span>\n                                <span class="key-value">{{busDetailsIncharge?.busInchargeName}}</span>\n                            </div>\n                        </div>\n                        <div class="driver-info-container">\n                            <div class="contactimg-container">\n                                <img class="contactNo-image" src="assets/zenAdmin/sp-call-icon.svg" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n                            </div>\n                            <div class="driver-info-card">\n                                <span class="associate-name">Contact Number</span>\n                                <span class="key-value">{{busDetailsIncharge?.busInchargeContactNumber}}</span>\n                            </div>\n                            <div (click)="call(busDetailsIncharge?.busInchargeNumber)">\n                                <img class="phone-image" src="assets/zenAdmin/call-image.svg" />\n                            </div>\n                        </div>\n                    </div>\n                </ion-card>\n            </div>\n            <div>\n                <ion-card class="card-parent">\n                    <div class="card-header padding10">\n                        <div>\n                            <img class="incharge-img" src="assets/zenAdmin/driver-icon.svg" onerror="this.src=\'./assets/imgs/annual-status.svg\'" />\n                        </div>\n                        <div class="fontWeight">Driver Details</div>\n                    </div>\n                    <div class="card-data">\n                        <div class="userProfile-container">\n                            <div class="img-container">\n                                <img class="user-icon" [src]="driverDetails?.driverProfilePic" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n                            </div>\n                            <div class="user-info-container">\n                                <span class="associate-name">Name</span>\n                                <span class="key-value">{{driverDetails?.driverName}}</span>\n                            </div>\n                        </div>\n                        <div class="driver-info-container">\n                            <div class="contactimg-container">\n                                <img class="contactNo-image" src="assets/zenAdmin/sp-call-icon.svg" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n                            </div>\n                            <div class="driver-info-card">\n                                <span class="associate-name">Contact Number</span>\n                                <span class="key-value">{{driverDetails?.driverNumber}}</span>\n                            </div>\n                            <div (click)="call(driverDetails?.driverNumber)">\n                                <img class="phone-image" src="assets/zenAdmin/call-image.svg" />\n                            </div>\n                        </div>\n                    </div>\n                </ion-card>\n            </div>\n        </div>\n        <div *ngSwitchCase="\'pickupPoint\'">\n\n\n            <!-- show pickup points -->\n            <div class="pickuppt-card-parent" *ngIf="pickupPointsList.length > \'0\'">\n\n                <ion-card class="pickup-points-card">\n\n                    <div class="arrow-icon-container" (click)="openpickupPtsModal(false,pickupPointsList)">\n                        <img class="edit-icon" src="assets/zenAdmin/edit-icon.svg" />\n                    </div>\n\n                    <div *ngFor="let item of pickupPointsList;let index=i;let odd=odd; let even=even;">\n                        <div class="timeline">\n                            <div class="container right" *ngIf="even">\n                                <div class="content">\n                                    <div class="placeName">{{item.stopName}}</div>\n                                    <div class="time-parent">\n                                        <span class="time-icon-container">\n                      <img class="clock-img" src="assets/zenAdmin/wall-clock.svg"\n                        onerror="this.src=\'./assets/imgs/annual-status.svg\'" />\n                    </span>\n                                        <span class="colorGrey">{{item.arrivalTime}}</span>\n                                    </div>\n                                    <div class="cost-parent">\n                                        <span class="cost-icon-container">\n                      <img class="clock-img" src="assets/zenAdmin/rupee.svg"\n                        onerror="this.src=\'./assets/imgs/annual-status.svg\'" />\n                    </span>\n                                        <span class="colorGrey">{{item.cost}}</span>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class="container left text-left" *ngIf="odd">\n                                <div class="content align-item-end">\n                                    <div class="placeName">{{item.stopName}}</div>\n                                    <div class="time-parent">\n                                        <span class="time-icon-container">\n                                            <img class="clock-img" src="assets/zenAdmin/wall-clock.svg"\n                                                onerror="this.src=\'./assets/imgs/annual-status.svg\'" />\n                                        </span>\n                                        <span class="colorGrey">{{item.arrivalTime}}</span>\n                                    </div>\n                                    <div class="cost-parent">\n                                        <span class="cost-icon-container">\n                                            <img class="clock-img" src="assets/zenAdmin/rupee.svg"\n                                                onerror="this.src=\'./assets/imgs/annual-status.svg\'" />\n                                        </span>\n                                        <span class="colorGrey">{{item.cost}}</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </ion-card>\n            </div>\n            <div class="pickup-point-img-container" (click)="openpickupPtsModal(true)" *ngIf="pickupPointsList.length == \'0\'">\n                <div class="border">\n                    <div class="pickup-point-img-cintainer">\n                        <img class="pickup-point-img" src="assets/zenAdmin/add-bus-point-img.svg" />\n                    </div>\n\n                    <div class="title">\n                        <span>Add PickUp Point</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\bus-details\busdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["C" /* PopoverController */]])
    ], BusdetailsPage);
    return BusdetailsPage;
}());

//# sourceMappingURL=busdetails.js.map

/***/ })

});
//# sourceMappingURL=76.js.map