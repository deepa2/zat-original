webpackJsonp([72],{

/***/ 1437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNzBusPassPageModule", function() { return AddNzBusPassPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_nz_bus_pass__ = __webpack_require__(1859);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddNzBusPassPageModule = /** @class */ (function () {
    function AddNzBusPassPageModule() {
    }
    AddNzBusPassPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_nz_bus_pass__["a" /* AddNzBusPassPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_nz_bus_pass__["a" /* AddNzBusPassPage */]),
            ],
        })
    ], AddNzBusPassPageModule);
    return AddNzBusPassPageModule;
}());

//# sourceMappingURL=add-nz-bus-pass.module.js.map

/***/ }),

/***/ 1859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNzBusPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_zenadmin_bus_rules_modal_bus_rules_modal__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
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
 * Generated class for the AddNzBusPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddNzBusPassPage = /** @class */ (function () {
    function AddNzBusPassPage(navCtrl, alertCtrl, navParams, formBuilder, utility, httpProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.selectedAssociateList = [];
        // private valueList: any = ['Qualitative', 'Quantitative']
        this.commentData = "";
        this.isPassSubmitted = false;
        this.checkBoxValue = false;
        this.dailyPassOptions = [];
        this.selectedPickupIndex = 0;
        this.submitted = false;
        this.passSuccessData = {};
        if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get("passReqType"))) {
            this.passReqType = this.navParams.get("passReqType");
            console.log("passs type", this.passReqType);
        }
    }
    AddNzBusPassPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad AddNewPassPage");
    };
    AddNzBusPassPage.prototype.ngOnInit = function () {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_6_moment__().format("YYYY-MM-DD");
        this.passForm = this.formBuilder.group({
            startdate: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            passtype: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            routename: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            pickuppoint: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            arrivalTime: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            comments: [""],
        });
        this.getBusPassTypeList();
        this.getRouteList();
    };
    AddNzBusPassPage.prototype.getBusPassTypeList = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var home = {
            url: "getBusPassTypeList",
            data: {},
            isZenAdmin: true,
        };
        this.httpProvider.http.commonService(home).subscribe(function (response) {
            if (response) {
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"])) {
                    _this.busTypeList = response["data"];
                    _this.busDetails = response["data"].busPassDetailDO;
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    AddNzBusPassPage.prototype.onPassTypeChange = function () {
        console.log("User Form Values::", this.passForm);
        this.passType = this.passForm.value.passtype;
        if (this.passType == "Daily" || this.passType == "Weekly") {
            var newDate = __WEBPACK_IMPORTED_MODULE_6_moment__().add(1, "years");
            this.futureYear = __WEBPACK_IMPORTED_MODULE_6_moment__(newDate).format("YYYY-MM-DD");
            console.log("End Date:::", this.futureYear);
            this.endDate = this.futureYear;
        }
        if (this.passType == "Monthly") {
            var newDate = __WEBPACK_IMPORTED_MODULE_6_moment__().add(2, "months");
            console.log("newDate", newDate);
            var futureMonths = __WEBPACK_IMPORTED_MODULE_6_moment__(newDate).format("YYYY-MM-DD");
            this.endDate = futureMonths;
        }
        // if (this.passForm.get("routeName").enabled) {
        //   this.passForm.get("routeName").reset();
        //   this.passForm.get("arrivalTime").reset();
        // }
        // if (this.passForm.get("pickupPoint").enabled) {
        //   this.passForm.get("pickupPoint").reset();
        //   this.passForm.get("arrivalTime").reset();
        // }
        // if (this.shuttleForm.get("routeName").enabled) {
        //   this.shuttleForm.get("routeName").reset();
        // }
        // if (this.shuttleForm.get("pickupPoint").enabled) {
        //   this.shuttleForm.get("pickupPoint").reset();
        // }
    };
    AddNzBusPassPage.prototype.onDateChange = function (date) {
        console.log("date", date);
        if (!this.utility.isEmptyOrNullOrUndefined(date) &&
            this.passReqType == "bus") {
            this.passForm.controls.routeName.enable();
        }
        if (this.passReqType == "bus") {
            if (!this.utility.isEmptyOrNullOrUndefined(this.passForm.get("pickupPoint").value)) {
                this.passForm.get("pickupPoint").reset();
                this.passForm.get("arrivalTime").reset();
            }
            if (!this.utility.isEmptyOrNullOrUndefined(this.passForm.get("routeName").value)) {
                this.passForm.get("routeName").reset();
            }
        }
        if (!this.utility.isEmptyOrNullOrUndefined(date) &&
            this.passReqType == "shuttle") {
            this.shuttleForm.controls.routeName.enable();
        }
        if (this.passReqType == "shuttle") {
            if (!this.utility.isEmptyOrNullOrUndefined(this.passForm.get("pickupPoint").value)) {
                this.shuttleForm.get("pickupPoint").reset();
            }
            if (!this.utility.isEmptyOrNullOrUndefined(this.passForm.get("routeName").value)) {
                this.shuttleForm.get("routeName").reset();
            }
        }
    };
    AddNzBusPassPage.prototype.getRouteList = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var home = {
            url: "getBusRouteList",
            data: {
                transportType: this.passReqType
            },
            isZenAdmin: true,
        };
        this.httpProvider.http.commonService(home).subscribe(function (response) {
            if (response) {
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"])) {
                    _this.routeList = response["data"];
                    console.log("passDetails", _this.routeList);
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    AddNzBusPassPage.prototype.getBusPassSummaryByRoute = function () {
        var _this = this;
        this.pickupPointList = "";
        var home;
        this.utility.updateLoader(true);
        home = {
            url: "getBusPassSummaryByRoute",
            data: {
                routeName: this.passForm.get("routename").value,
                passType: this.passForm.get("passtype").value,
                startDate: this.passForm.get("startdate").value,
            },
            isZenAdmin: true,
        };
        this.httpProvider.http.commonService(home).subscribe(function (response) {
            if (response) {
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"])) {
                    _this.pickupPointList = response["data"];
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    AddNzBusPassPage.prototype.getBusPassSubTypeList = function () {
        var _this = this;
        this.pickupPointList = "";
        var home;
        this.utility.updateLoader(true);
        if (this.passReqType == "bus") {
            home = {
                url: "getBusPassSubTypeList",
                data: {
                    passType: "Daily",
                },
                isZenAdmin: true,
            };
        }
        this.httpProvider.http.commonService(home).subscribe(function (response) {
            if (response) {
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"])) {
                    _this.pickupPointList = response["data"];
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    AddNzBusPassPage.prototype.submitPass = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var home = {
            url: "applyBusPass",
            data: {
                startDate: this.passForm.get("startdate").value,
                passType: this.passForm.get("passtype").value,
                routeName: this.passForm.get("routename").value,
                pickupPointName: this.passForm.get("pickuppoint").value,
                arrivalTime: this.passForm.get("arrivalTime").value,
                comments: this.passForm.get("comments").value,
            },
            isZenAdmin: true,
        };
        this.httpProvider.http.commonService(home).subscribe(function (response) {
            if (response) {
                _this.submitted = false;
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"]) &&
                    response.status["statusCode"] == "1") {
                    _this.passSuccessData = response["data"];
                    _this.successMsg = _this.passSuccessData.busPassStatusMessageDetails;
                    console.log("successMsg", _this.successMsg);
                    _this.utility.presentAlert(response.status["statusMessage"]).then(function (res) {
                        _this.isPassSubmitted = true;
                    });
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    AddNzBusPassPage.prototype.onPickUpPtChange = function (pickupPt) {
        this.selectedPickupPtDetails = "";
        if (!this.utility.isEmptyOrNullOrUndefined(pickupPt)) {
            this.selectedPickupPtDetails = this.pickupPointList.find(function (item) {
                if (item.pickupPointName == pickupPt) {
                    return item;
                }
            });
        }
    };
    AddNzBusPassPage.prototype.call = function (number) {
        this.utility.callNumber(number);
    };
    AddNzBusPassPage.prototype.openRulesModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__components_zenadmin_bus_rules_modal_bus_rules_modal__["a" /* BusRulesModalComponent */], {
            dataParams: {},
        }, {
            cssClass: "",
        });
        modal.present();
    };
    AddNzBusPassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: "page-add-nz-bus-pass",template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\non-zensarian\add-nz-bus-pass\add-nz-bus-pass.html"*/'<!--\n  Generated template for the AddNewPassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title *ngIf="!isPassSubmitted && passReqType==\'bus\'"\n      >New Bus Pass</ion-title\n    >\n    <ion-title *ngIf="isPassSubmitted">Confirmation</ion-title>\n    <ion-title *ngIf="passReqType==\'shuttle\'">Book Shuttle</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content\n  class="content-container"\n  [ngClass]="{\'update-bg-color\': isPassSubmitted}"\n>\n  <form [formGroup]="passForm" class="pass-form">\n    <ion-list>\n      <!-- Start Date -->\n      <ion-item no-lines>\n        <ion-label color="dark" class="form-label" stacked\n          >Start Date</ion-label\n        >\n        <ion-datetime\n          formControlName="startdate"\n          placeholder="Select start date"\n          min="{{currentDate}}"\n        ></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="dark" class="form-label" stacked>Pass Type</ion-label>\n        <ion-select\n          formControlName="passtype"\n          placeholder="Select pass type"\n          (ionChange)="onPassTypeChange()"\n        >\n          <ion-option value="{{item}}" *ngFor="let item of busTypeList;"\n            >{{item}}</ion-option\n          >\n        </ion-select>\n      </ion-item>\n\n      <!-- Route Name -->\n      <ion-item>\n        <ion-label color="dark" class="form-label" stacked\n          >Route Name</ion-label\n        >\n        <ion-select\n          formControlName="routename"\n          placeholder="Select route name"\n          (ionChange)="getBusPassSummaryByRoute()"\n        >\n          <ion-option [value]="item" *ngFor="let item of routeList"\n            >{{item}}</ion-option\n          >\n        </ion-select>\n      </ion-item>\n\n      <!-- Pickup Points -->\n      <ion-item>\n        <ion-label color="dark" class="form-label" stacked\n          >Pickup Points</ion-label\n        >\n        <ion-select\n          formControlName="pickuppoint"\n          placeholder="Select pickup point"\n        >\n          <ion-option\n            [value]="item.pickupPointName"\n            *ngFor="let item of pickupPointList; let i = index"\n            (ionSelect)="selectedPickupIndex = i"\n            >{{item}}</ion-option\n          >\n        </ion-select>\n      </ion-item>\n\n      <!-- Comments -->\n      <ion-item>\n        <ion-label color="dark" class="form-label" stacked>Comments</ion-label>\n        <ion-textarea\n          formControlName="comments"\n          cols="20"\n          class="comment-area"\n        ></ion-textarea>\n      </ion-item>\n    </ion-list>\n  </form>\n  <div class="summry-container">\n    <div class="summary-header">\n      <span>\n        <img class="summry-img" src="assets/zenAdmin/summary-img.svg" />\n      </span>\n      <span class="summaryTitle">Summary</span>\n    </div>\n    <div class="grid-container">\n      <ion-row>\n        <ion-col col-4>\n          <img class="summaryImg" src="assets/zenAdmin/seats.svg" />\n        </ion-col>\n        <ion-col col-4>\n          <img class="summaryImg" src="assets/zenAdmin/money-img.svg"\n        /></ion-col>\n        <ion-col col-4>\n          <img class="summaryImg" src="assets/zenAdmin/calenderIcon.svg"\n        /></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4>Seats </ion-col>\n        <ion-col col-4>Amount</ion-col>\n        <ion-col col-4>{{passtype}} Pass</ion-col>\n      </ion-row>\n      <ion-row>\n        <!-- <ion-col col-4 class="available" [ngClass]="{\'available\': isSeatAvailable,\'notAvailable\': !isSeatAvailable}">{{checkSeatAvailability(this.selectedPickupPtDetails?.availableSeat)}}</ion-col> -->\n        <ion-col col-4 *ngIf="!isSeatAvailable" class="notAvailable"\n          >Not Available</ion-col\n        >\n        <ion-col\n          col-4\n          class="available"\n          *ngIf="isSeatAvailable"\n          class="available"\n          >Available</ion-col\n        >\n        <ion-col col-4>{{this.selectedPickupPtDetails?.amount}} INR</ion-col>\n        <ion-col col-4\n          >{{this.selectedPickupPtDetails?.busPassValidity}}</ion-col\n        >\n      </ion-row>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\non-zensarian\add-nz-bus-pass\add-nz-bus-pass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_1__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["w" /* ModalController */]])
    ], AddNzBusPassPage);
    return AddNzBusPassPage;
}());

//# sourceMappingURL=add-nz-bus-pass.js.map

/***/ })

});
//# sourceMappingURL=72.js.map