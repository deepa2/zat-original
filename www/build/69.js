webpackJsonp([69],{

/***/ 1367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonZensarianPassDetailPageModule", function() { return NonZensarianPassDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__non_zensarian_pass_detail__ = __webpack_require__(1789);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NonZensarianPassDetailPageModule = /** @class */ (function () {
    function NonZensarianPassDetailPageModule() {
    }
    NonZensarianPassDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__non_zensarian_pass_detail__["a" /* NonZensarianPassDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__non_zensarian_pass_detail__["a" /* NonZensarianPassDetailPage */]),
            ],
        })
    ], NonZensarianPassDetailPageModule);
    return NonZensarianPassDetailPageModule;
}());

//# sourceMappingURL=non-zensarian-pass-detail.module.js.map

/***/ }),

/***/ 1789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NonZensarianPassDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_zenadmin_cancel_buspass_modal_cancel_buspass_modal__ = __webpack_require__(734);
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
 * Generated class for the NonZensarianPassDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NonZensarianPassDetailPage = /** @class */ (function () {
    function NonZensarianPassDetailPage(navCtrl, navParams, utility, httpProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.isPassCancelled = false;
        this.showNoDataMsg = false;
        this.isCancelAvailable = false;
        this.passId = this.navParams.get("busId");
        this.nzUserId = this.navParams.get("nzUserId");
    }
    NonZensarianPassDetailPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad PassDetailsPage");
        this.getPassDetails();
    };
    NonZensarianPassDetailPage.prototype.getPassDetails = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var home = {
            url: "getAdminNonZensarianBusPassDetailData",
            data: {
                busPassId: this.passId,
                nzUserId: this.nzUserId,
            },
            isZenAdmin: true,
        };
        this.httpProvider.http.commonService(home).subscribe(function (response) {
            if (response) {
                console.log("Bus pass details:::", response);
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"]) &&
                    response.status["statusCode"] == "1") {
                    _this.responseList = response["data"];
                    _this.busDetails = _this.responseList.busPassDetailDO;
                    _this.otherDetails = _this.responseList.busPassDetailSubDO;
                    _this.isCancelAvailable = _this.busDetails.isCancelAvailable;
                }
                else {
                    _this.noDataMsg = response.status["statusMessage"];
                    _this.showNoDataMsg = true;
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    NonZensarianPassDetailPage.prototype.cancelPassReq = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_zenadmin_cancel_buspass_modal_cancel_buspass_modal__["a" /* CancelBuspassModalComponent */], {
            passID: this.busDetails.busPassId,
            isNonZensarian: true,
            transportType: "Bus",
            requestType: "cancelPass",
        }, {
            cssClass: "cancel-pass-modal",
        });
        modal.present();
        modal.onDidDismiss(function (res) {
            console.log("response", res);
            _this.utility.updateLoader(true);
            if (res) {
                if (res.key == "passCancelled") {
                    _this.utility.updateLoader(false);
                    _this.isPassCancelled = true;
                    console.log("cancelled data", res.cancelledData);
                    // this.busDetails = ''
                    _this.cancelBusDetails = res.cancelledData;
                    _this.cancelMsg = res.cancelledData.busPassStatusMessageDetails;
                    console.log("cancelMsg", _this.cancelMsg);
                    console.log("cancelBusDetails", _this.cancelBusDetails.userName);
                    // this.isCancelAvailable = this.busDetails.isCancelAvailable;
                }
            }
            else {
                _this.utility.updateLoader(false);
            }
        });
    };
    NonZensarianPassDetailPage.prototype.call = function (number) {
        this.utility.callNumber(number);
    };
    NonZensarianPassDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-non-zensarian-pass-detail",template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\non-zensarian\non-zensarian-pass-detail\non-zensarian-pass-detail.html"*/'<!--\n  Generated template for the PassDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title *ngIf="!isPassCancelled">Bus Pass Details</ion-title>\n        <ion-title *ngIf="isPassCancelled">Confirmation</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content [ngClass]="{\'mb-65\': (isCancelAvailable && !isPassCancelled)}">\n    <div class="no-data-container" *ngIf="showNoDataMsg">\n        {{noDataMsg}}\n    </div>\n    <div *ngIf="isPassCancelled">\n        <!-- *ngIf="passSuccessData" -->\n        <div class="confirmation-card">\n            <!-- <ion-row>\n          <ion-col> -->\n            <img src="assets/zenAdmin/pass-success-bg.svg" class="confirmation-img" />\n            <!-- </ion-col>\n          <ion-col>\n            Successful -->\n            <!-- </ion-col>\n        </ion-row> -->\n            <div class="success-msg-div">\n                <div class="colorRed successTxt">{{cancelMsg?.displayTextTitle}}</div>\n                <div>{{cancelMsg?.displayText}}</div>\n            </div>\n        </div>\n    </div>\n\n    <div class="ticket-parent" *ngIf="!isPassCancelled && busDetails">\n        <div class="bus-pass-info-container" *ngIf="isPassCancelled">\n            <span class="mr-6"><img src="assets/zenAdmin/pass-id-icon.svg" class="width-25" /></span>\n            <span>Bus Pass</span>\n        </div>\n        <div>\n            <ion-card color="light" class="ion-card ion-text-center post-relative">\n                <div class="display-flex padding10 bus-details-parent">\n                    <div class="display-flex bus-id-container">\n                        <div class="width40px">\n                            <img class="calendar-icon" src="assets/zenAdmin/bus-pass-id.svg" />\n                        </div>\n                        <div>\n                            <div class="colorGrey busIDText">BusPass ID</div>\n                            <div class="bus-passId">{{busDetails?.busPassId}}</div>\n                        </div>\n                    </div>\n                    <div class="display-flex monthly-pass-container">\n                        <div class="width40px">\n                            <img class="calendar-icon" src="assets/zenAdmin/monthly-pass.svg" />\n                        </div>\n                        <div>\n                            <div class="dateValue colorGrey monthly-pass-title">\n                                {{busDetails?.passType}} Pass\n                            </div>\n                            <div class="month-pass-date">{{busDetails?.busPassValidity}}</div>\n                        </div>\n                    </div>\n                </div>\n                <!-- associate list -->\n                <div class="userProfile-container">\n                    <div class="img-container">\n                        <img class="user-icon" [src]="busDetails?.userProfilePic" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n                    </div>\n                    <div class="user-info-container">\n                        <span class="associate-name">{{busDetails?.userName}}</span>\n                        <span class="key-value colorGrey">{{busDetails?.userId}}</span>\n                    </div>\n                </div>\n                <!-- approved/cancelled image -->\n                <div class="position-absolute ticket-status-parent">\n                    <img src="assets/zenAdmin/Approved.png" class="ticket-status-img" *ngIf="busDetails?.isApproved" />\n                    <img src="assets/zenAdmin/Cancelled.png" class="ticket-status-img" *ngIf="busDetails?.isCancelled" />\n                </div>\n\n                <div class="container-items">\n                    <div class="route-pic">\n                        <img class="route-img" src="assets/zenAdmin/route-icon.svg" />\n                        <!-- <img class="userpic-bg" src="assets/zenLearn-imgs/User_profile_BG.svg"> -->\n                    </div>\n                    <div class="route-container">\n                        <span class="associate-name colorGrey">Route</span>\n                        <span class="key-value fontWeight">{{busDetails?.routeName}}</span>\n                    </div>\n                </div>\n                <div class="pickup-point-card">\n                    <div class="pickup-details">\n                        <div class="route-pic">\n                            <img class="route-img" src="assets/zenAdmin/location.svg" />\n                            <!-- <img class="userpic-bg" src="assets/zenLearn-imgs/User_profile_BG.svg"> -->\n                        </div>\n                        <div class="displayFlex-col pickupName-card">\n                            <span class="associate-name colorGrey">Pickup Point</span>\n                            <span class="campus-name fontWeight">{{busDetails?.pickupPointName}}</span>\n                        </div>\n                    </div>\n                    <div class="pickup-time-card">\n                        <div class="">\n                            <img class="clock-img" src="assets/zenAdmin/clock-icon.svg" />\n                            <!-- <img class="userpic-bg" src="assets/zenLearn-imgs/User_profile_BG.svg"> -->\n                        </div>\n                        <div class="displayFlex-col">\n                            <span class="associate-name fontWeight">{{busDetails?.passSubType==\'Drop\'? \'-\':busDetails?.arrivalTime}}</span>\n                            <!-- <span class="key-value">Softawrr engineer</span> -->\n                        </div>\n                    </div>\n                </div>\n                <div class="profile-wrapper"></div>\n                <div class="bus-info-container">\n                    <div class="user-pic">\n                        <img class="bus-img" src="assets/zenAdmin/bus-image.svg" />\n                    </div>\n                    <div class="route-container">\n                        <div class="associate-name colorGrey">Bus</div>\n                        <div class="key-value fontWeight">{{busDetails?.busNumber}}</div>\n                    </div>\n                </div>\n                <div class="driver-info-container">\n                    <!-- <div class="user-pic">\n            <img class="img-style" [src]="busDetails?.driverProfilePic">\n            <img class="userpic-bg" src="assets/zenLearn-imgs/User_profile_BG.svg">\n          </div> -->\n                    <div class="driver-img-container">\n                        <img class="user-icon" [src]="busDetails?.busInchargeProfilePic" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n                    </div>\n                    <div class="route-container">\n                        <span class="associate-name colorGrey">Bus Incharge</span>\n                        <span class="key-value fontWeight">\n                            {{busDetails?.busInchargeName}}</span>\n                    </div>\n                    <div (click)="call(busDetails?.busInchargeContactNo)">\n                        <img class="phone-image" src="assets/zenAdmin/call-image.svg" />\n                    </div>\n                </div>\n            </ion-card>\n        </div>\n    </div>\n    <div class="cost-details-container" *ngIf="!isPassCancelled && busDetails">\n        <div class="bus-info-container">\n            <div class="user-pic">\n                <img class="route-img" src="assets/zenAdmin/money-img.svg" />\n            </div>\n            <div class="amount-details">\n                <div class="associate-name fontWeight">Amount</div>\n                <div class="key-value colorGrey">{{otherDetails?.amount}} INR</div>\n            </div>\n        </div>\n    </div>\n    <div class="comment-details-container" *ngIf="!isPassCancelled && busDetails">\n        <div class="bus-info-container">\n            <div class="user-pic">\n                <img class="route-img" src="assets/zenAdmin/comments-icon.svg" />\n            </div>\n            <div class="amount-details">\n                <div class="associate-name fontWeight">Comments</div>\n                <div class="key-value colorGrey">\n                    {{otherDetails?.comments || \'NA\'}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="ticket-parent" *ngIf="isPassCancelled && cancelBusDetails">\n        <div *ngIf="isPassCancelled" class="bus-pass-container">\n            <span class="mr-6"><img src="assets/zenAdmin/pass-id-icon.svg" class="width-25" /></span>\n            <span>Bus Pass</span>\n        </div>\n        <div>\n            <ion-card color="light" class="ion-card ion-text-center margin5 post-relative">\n                <div class="display-flex padding10 bus-details-parent">\n                    <div class="display-flex bus-id-container">\n                        <div class="width40px">\n                            <img class="calendar-icon" src="assets/zenAdmin/bus-pass-id.svg" />\n                        </div>\n                        <div>\n                            <div class="colorGrey busIDText">BusPass ID</div>\n                            <div class="bus-passId">{{cancelBusDetails?.busPassId}}</div>\n                        </div>\n                    </div>\n                    <div class="display-flex monthly-pass-container">\n                        <div class="width40px">\n                            <img class="calendar-icon" src="assets/zenAdmin/monthly-pass.svg" />\n                        </div>\n                        <div>\n                            <div class="dateValue colorGrey monthly-pass-title">\n                                {{cancelBusDetails?.passType}} Pass\n                            </div>\n                            <div class="month-pass-date">\n                                {{cancelBusDetails?.busPassValidity}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- associate list -->\n                <div class="userProfile-container">\n                    <!-- <div class="user-pic">\n            <img class="img-style" [src]="cancelBusDetails?.userProfilePic">\n            <img class="userpic-bg" src="assets/zenLearn-imgs/User_profile_BG.svg">\n          </div> -->\n                    <div class="img-container">\n                        <img class="user-icon" [src]="cancelBusDetails?.userProfilePic" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n                    </div>\n                    <div class="user-info-container">\n                        <span class="associate-name">{{cancelBusDetails?.userName}}</span>\n                        <span class="key-value colorGrey">{{cancelBusDetails?.userId}}</span>\n                    </div>\n                </div>\n                <!-- approved/cancelled image -->\n                <div class="position-absolute ticket-status-parent">\n                    <!-- <img src="assets/zenAdmin/Approved.png" class="ticket-status-img" *ngIf="cancelBusDetails?.isApproved" /> -->\n                    <img src="assets/zenAdmin/Cancelled.png" class="ticket-status-img" *ngIf="cancelBusDetails?.isCancelled" />\n                </div>\n\n                <div class="container-items">\n                    <div class="route-pic">\n                        <img class="route-img" src="assets/zenAdmin/route-icon.svg" />\n                        <!-- <img class="userpic-bg" src="assets/zenLearn-imgs/User_profile_BG.svg"> -->\n                    </div>\n                    <div class="route-container">\n                        <span class="associate-name colorGrey">Route</span>\n                        <span class="key-value fontWeight">{{cancelBusDetails?.routeName}}</span>\n                    </div>\n                </div>\n                <div class="pickup-point-card">\n                    <div class="pickup-details">\n                        <div class="route-pic">\n                            <img class="route-img" src="assets/zenAdmin/location.svg" />\n                            <!-- <img class="userpic-bg" src="assets/zenLearn-imgs/User_profile_BG.svg"> -->\n                        </div>\n                        <div class="displayFlex-col pickupName-card">\n                            <span class="associate-name colorGrey">Pickup Point</span>\n                            <span class="campus-name fontWeight">{{cancelBusDetails?.pickupPointName}}</span>\n                        </div>\n                    </div>\n                    <div class="pickup-time-card">\n                        <div class="">\n                            <img class="clock-img" src="assets/zenAdmin/clock-icon.svg" />\n                            <!-- <img class="userpic-bg" src="assets/zenLearn-imgs/User_profile_BG.svg"> -->\n                        </div>\n                        <div class="displayFlex-col">\n                            <span class="associate-name fontWeight">{{cancelBusDetails?.passSubType==\'Drop\'? \'-\':cancelBusDetails?.arrivalTime}}</span>\n                            <!-- <span class="key-value">Softawrr engineer</span> -->\n                        </div>\n                    </div>\n                </div>\n                <div class="profile-wrapper"></div>\n                <div class="bus-info-container">\n                    <div class="user-pic">\n                        <img class="bus-img" src="assets/zenAdmin/bus-image.svg" />\n                    </div>\n                    <div class="route-container">\n                        <div class="associate-name colorGrey">Bus</div>\n                        <div class="key-value fontWeight">\n                            {{cancelBusDetails?.busNumber}}\n                        </div>\n                    </div>\n                </div>\n                <div class="driver-info-container">\n                    <!-- <div class="user-pic">\n            <img class="img-style" [src]="cancelBusDetails?.driverProfilePic">\n            <img class="userpic-bg" src="assets/zenLearn-imgs/User_profile_BG.svg">\n          </div> -->\n                    <div class="driver-img-container">\n                        <img class="user-icon" [src]="cancelBusDetails?.driverProfilePic" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n                    </div>\n                    <div class="route-container">\n                        <span class="associate-name colorGrey">Driver</span>\n                        <span class="key-value fontWeight">\n                            {{cancelBusDetails?.driverName}}</span>\n                    </div>\n                    <div (click)="call(cancelBusDetails?.driverNumber)">\n                        <img class="phone-image" src="assets/zenAdmin/call-image.svg" />\n                    </div>\n                </div>\n            </ion-card>\n        </div>\n    </div>\n</ion-content>\n<ion-footer>\n    <div class="footer-content" *ngIf="isCancelAvailable && !isPassCancelled">\n        <button ion-button round class="cancelBtn" (click)="cancelPassReq()">\n            Cancellation Request\n        </button>\n    </div>\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\non-zensarian\non-zensarian-pass-detail\non-zensarian-pass-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_1__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["w" /* ModalController */]])
    ], NonZensarianPassDetailPage);
    return NonZensarianPassDetailPage;
}());

//# sourceMappingURL=non-zensarian-pass-detail.js.map

/***/ })

});
//# sourceMappingURL=69.js.map