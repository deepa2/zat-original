webpackJsonp([78],{

/***/ 1444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewPassPageModule", function() { return AddNewPassPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_new_pass__ = __webpack_require__(1867);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddNewPassPageModule = /** @class */ (function () {
    function AddNewPassPageModule() {
    }
    AddNewPassPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_new_pass__["a" /* AddNewPassPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_new_pass__["a" /* AddNewPassPage */]),
            ],
        })
    ], AddNewPassPageModule);
    return AddNewPassPageModule;
}());

//# sourceMappingURL=add-new-pass.module.js.map

/***/ }),

/***/ 1867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewPassPage; });
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
 * Generated class for the AddNewPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddNewPassPage = /** @class */ (function () {
    function AddNewPassPage(navCtrl, navParams, formBuilder, utility, httpProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.pickupPointNames = [];
        this.selectedAssociateList = [];
        this.commentData = "";
        this.isPassSubmitted = false;
        this.checkBoxValue = false;
        this.dailyPassOptions = [];
        this.submitted = false;
        this.passSuccessData = {};
        this.isNonZensarian = false;
        this.isDailyPassAllowed = false;
        if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get("passReqType"))) {
            this.passReqType = this.navParams.get("passReqType");
        }
        if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get("isNonZensarian"))) {
            this.isNonZensarian = this.navParams.get("isNonZensarian") || false;
        }
        if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get("nonZensarianID"))) {
            this.nonZensarianID = this.navParams.get("nonZensarianID");
        }
    }
    AddNewPassPage.prototype.ionViewDidLoad = function () { };
    AddNewPassPage.prototype.ngOnInit = function () {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_6_moment__().format("YYYY-MM-DD");
        //generating controls for pass form 
        this.passForm = this.formBuilder.group({
            startDate: [{ value: "", disabled: true }, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            passType: [{ value: "", disabled: false }, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            routeName: [{ value: "", disabled: true }, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            pickupPoint: [{ value: "", disabled: true }, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            arrivalTime: [{ value: "", disabled: true }],
            comments: [{ value: "", disabled: false }],
            dailypassType: [""],
        }, { validator: this.formValidator });
        //generating controls for shuttle form 
        this.shuttleForm = this.formBuilder.group({
            startDate: [{ value: "", disabled: true }, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            passType: [{ value: "", disabled: false }, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            routeName: [{ value: "", disabled: true }, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            pickupPoint: [{ value: "", disabled: true }, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            dailypassType: [""],
        }, { validator: this.shuttleformValidator });
        this.getBusPassTypeList();
        this.getRouteList();
    };
    /**
     * Service call for bustype(Daily,Weekly,Monthly)
     */
    AddNewPassPage.prototype.getBusPassTypeList = function () {
        var _this = this;
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService({
            url: "getBusPassTypeList", data: { transportType: this.passReqType }, isZenAdmin: true
        }).subscribe(function (response) {
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
    /**
     * Service call for daily bus passtype(Pickup,Drop,Pickup&Drop)
     */
    AddNewPassPage.prototype.getDailyBusPassList = function () {
        var _this = this;
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService({ url: "getBusPassSubTypeList", data: { transportType: this.passReqType, passType: this.passType }, isZenAdmin: true })
            .subscribe(function (response) {
            if (response) {
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"])) {
                    _this.dailyPassOptions = response["data"];
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    /**
    * Handles pass type change event
    @param passType selected passtype
    */
    AddNewPassPage.prototype.onPassTypeChange = function (passType) {
        // if passtype is daily get daily pass type list
        if (passType == "Daily") {
            this.getDailyBusPassList();
        }
        // calculating future dates for which pass can be aaplied for
        if (passType == "Monthly" || passType == "Daily" || passType == "Weekly") {
            // calculating dates for only current year
            var now = __WEBPACK_IMPORTED_MODULE_6_moment__(new Date(), "DD-MM-YYYY");
            var month = now.format('M');
            var year = now.format('YYYY');
            if (parseInt(month) != 12) {
                this.endDate = __WEBPACK_IMPORTED_MODULE_6_moment__().endOf("year").format("YYYY-MM-DD");
            }
            else {
                // if current month is December then show January month date
                var newDate = parseInt(year) + 1 + "-01-31";
                this.endDate = __WEBPACK_IMPORTED_MODULE_6_moment__(newDate.toString()).format("YYYY-MM-DD");
            }
        }
        // if pass type is changed then reset route name,arrival time 
        if (this.passForm.get("routeName").enabled) {
            this.passForm.get("routeName").reset();
            this.passForm.get("arrivalTime").reset();
        }
        if (this.passForm.get("pickupPoint").enabled) {
            this.passForm.get("pickupPoint").reset();
            this.passForm.get("arrivalTime").reset();
        }
        if (this.shuttleForm.get("routeName").enabled) {
            this.shuttleForm.get("routeName").reset();
        }
        if (this.shuttleForm.get("pickupPoint").enabled) {
            this.shuttleForm.get("pickupPoint").reset();
        }
        if (!this.utility.isEmptyOrNullOrUndefined(passType)) {
            this.passForm.controls.startDate.enable();
            this.shuttleForm.controls.startDate.enable();
        }
    };
    /**
    * Handles date change event
    @param date selected date
    */
    AddNewPassPage.prototype.onDateChange = function (date) {
        // enable route name after date is selected
        if (!this.utility.isEmptyOrNullOrUndefined(date) && this.passReqType == "bus") {
            this.passForm.controls.routeName.enable();
        }
        if (this.passReqType == "bus") {
            // reset values on date change-for bus pass
            if (!this.utility.isEmptyOrNullOrUndefined(this.passForm.get("pickupPoint").value)) {
                this.passForm.get("pickupPoint").reset();
                this.passForm.get("arrivalTime").reset();
            }
            if (!this.utility.isEmptyOrNullOrUndefined(this.passForm.get("routeName").value)) {
                this.passForm.get("routeName").reset();
            }
        }
        // reset values on date change-for shuttle pass
        if (!this.utility.isEmptyOrNullOrUndefined(date) && this.passReqType == "shuttle") {
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
    /**
   * Service call for route list-List of all the available routes
   */
    AddNewPassPage.prototype.getRouteList = function () {
        var _this = this;
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService({ url: "getBusRouteList", data: { transportType: this.passReqType }, isZenAdmin: true })
            .subscribe(function (response) {
            if (response) {
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"])) {
                    _this.routeList = response["data"];
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    /**
    * Handles route change event
    @param routeName selected route name
    */
    AddNewPassPage.prototype.onRouteChange = function (routeName) {
        // reset values if route name is changed
        if (this.passForm.get("pickupPoint").enabled) {
            this.passForm.get("pickupPoint").reset();
            this.passForm.get("arrivalTime").reset();
        }
        if (!this.utility.isEmptyOrNullOrUndefined(routeName) && this.passReqType == "bus") {
            // service call to get route summary details
            this.getBusPassSummaryByRoute();
            // enabling pickup point control only after getting pickup point lists through getBusPassSummaryByRoute method
            this.passForm.controls.pickupPoint.enable();
        }
        else if (!this.utility.isEmptyOrNullOrUndefined(routeName) && this.passReqType == "shuttle") {
            this.getBusPassSummaryByRoute();
            this.shuttleForm.controls.pickupPoint.enable();
        }
    };
    /**
    * Handles pickup point change event
    @param pickupPt selected pickup point
    */
    AddNewPassPage.prototype.onPickUpPtChange = function (pickupPt) {
        this.selectedPickupPtDetails = "";
        if (!this.utility.isEmptyOrNullOrUndefined(pickupPt)) {
            // returns selected pickup point detail and stores in selectedPickupPtDetails variable
            this.selectedPickupPtDetails = this.pickupPointList.find(function (item) {
                if (item.pickupPointName == pickupPt) {
                    return item;
                }
            });
            // set the arrival time for the selected pickup point
            if (this.passReqType == "bus")
                this.passForm.get("arrivalTime").setValue(this.selectedPickupPtDetails.arrivalTime);
            this.checkSeatAvailability(this.selectedPickupPtDetails.availableSeat);
        }
    };
    /**
     * Service call to retreive route details like cost,seats availablity and pickup points.
     * Called only after user has selected start date,route name and pass type
     */
    AddNewPassPage.prototype.getBusPassSummaryByRoute = function () {
        var _this = this;
        this.pickupPointList = "";
        this.pickupPointNames = [];
        var home;
        this.utility.updateLoader(true);
        if (this.passReqType == "bus") {
            home = {
                url: "getBusPassSummaryByRoute",
                data: {
                    routeName: this.passForm.get("routeName").value,
                    passType: this.passForm.get("passType").value,
                    startDate: this.passForm.get("startDate").value,
                    transportType: this.passReqType,
                    passSubType: this.passType.toLowerCase() == 'daily' ? this.passForm.get("dailypassType").value : ''
                },
                isZenAdmin: true,
            };
        }
        if (this.passReqType == "shuttle") {
            home = {
                url: "getBusPassSummaryByRoute",
                data: {
                    routeName: this.shuttleForm.get("routeName").value,
                    passType: this.shuttleForm.get("passType").value,
                    startDate: this.shuttleForm.get("startDate").value,
                    transportType: this.passReqType,
                    passSubType: this.passType.toLowerCase() == 'daily' ? this.shuttleForm.get("dailypassType").value : '',
                },
                isZenAdmin: true,
            };
        }
        this.httpProvider.http.commonService(home).subscribe(function (response) {
            if (response) {
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"]) &&
                    response.status["statusCode"] == "1") {
                    _this.pickupPointList = response["data"];
                    _this.pickupPointList.forEach(function (item) {
                        _this.pickupPointNames.push(item.pickupPointName);
                    });
                    console.log("pickupPointNames", _this.pickupPointNames);
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    /**
      * Service call for applying pass for Bus
      */
    AddNewPassPage.prototype.submitPass = function () {
        var _this = this;
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService({
            url: "applyBusPass",
            data: {
                startDate: this.passForm.get("startDate").value,
                passType: this.passForm.get("passType").value,
                routeName: this.passForm.get("routeName").value,
                pickupPointName: this.passForm.get("pickupPoint").value,
                arrivalTime: this.passForm.get("arrivalTime").value,
                comments: this.passForm.get("comments").value,
                isNonZensarian: this.isNonZensarian,
                transportType: this.passReqType,
                dailyPassType: this.passForm.get("dailypassType").value,
                userId: this.isNonZensarian ? this.nonZensarianID : null
            },
            isZenAdmin: true,
        }).subscribe(function (response) {
            if (response) {
                _this.submitted = false;
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1") {
                    _this.passSuccessData = response["data"];
                    _this.successMsg = _this.passSuccessData.busPassStatusMessageDetails;
                    _this.utility.presentAlert(response.status["statusMessage"]).then(function (res) {
                        _this.isPassSubmitted = true;
                    });
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    /**
     * Custom form validator for Bus pass.
     * Checks if selected date is a weekend for daily pass.
     * Also checks if daily pass type control is empty.
     * Checks if daily pass is applied after 6.30pm.
     * @param group all the bus pass form controls
     */
    AddNewPassPage.prototype.formValidator = function (group) {
        if (group) {
            var startDate = group.get("startDate").value;
            var dailyPassTypeVal = group.get("dailypassType").value;
            if (startDate) {
                if (startDate == "") {
                    return { startDateIsempty: true };
                }
                else {
                    var formatDate = __WEBPACK_IMPORTED_MODULE_6_moment__(startDate).format("YYYY-MM-DD");
                    var tempdate = __WEBPACK_IMPORTED_MODULE_6_moment__(formatDate); // Thursday Feb 2015
                    var dow = tempdate.day();
                    if (dow == 0 || dow == 6)
                        return { IsWeekend: true };
                }
            }
            if (group.get("passType").value != "") {
                if (group.get("passType").value == "Daily" && (dailyPassTypeVal == "" || dailyPassTypeVal == null)) {
                    return { dailypassIsEmpty: true };
                }
            }
            if (group.get("passType").value != "") {
                if (group.get("passType").value == "Daily" && (group.get("startDate").value != '' || group.get("startDate").value != null)) {
                    var time = __WEBPACK_IMPORTED_MODULE_6_moment__().format('HH:mm');
                    var timeArray = time.split(':');
                    var startTime = group.get("startDate").value;
                    var today = __WEBPACK_IMPORTED_MODULE_6_moment__();
                    if ((startTime != '' || startTime != null) && __WEBPACK_IMPORTED_MODULE_6_moment__(startTime).isSame(today, 'day')) {
                        if (parseInt(timeArray[0]) >= 18) {
                            if (parseInt(timeArray[1]) >= 30) {
                                return { passNotAllowed: true };
                            }
                        }
                    }
                }
            }
        }
        return null;
    };
    /**
     * Method checks whether form is valid or not;
     * If form is invalid show appropriate error messages else calls submitPass/bookShuttle method
     */
    AddNewPassPage.prototype.verifySubmitDetails = function () {
        var _this = this;
        if (this.passForm.invalid && this.passReqType == "bus") {
            this.submitted = true;
            return;
        }
        else if (this.shuttleForm.invalid && this.passReqType == "shuttle") {
            this.submitted = true;
            return;
        }
        if (!this.isSeatAvailable) {
            this.utility.presentAlert("Seats not available");
            return;
        }
        else {
            this.utility.presentConfirmation("Do you want to add new pass?").then(function (res) {
                if (_this.passReqType == "bus")
                    _this.submitPass();
                else if (_this.passReqType == "shuttle")
                    _this.bookShuttle();
            }, function (err) {
            });
        }
    };
    /**
     * Method returns string value(available or not available) based on seat count.
     * returns "available" if seat count is greater than 0.
     * @param seatCount number of seats available for particular pickup point
     */
    AddNewPassPage.prototype.checkSeatAvailability = function (seatCount) {
        if (seatCount > 0) {
            this.isSeatAvailable = true;
            return "Available";
        }
        else if (seatCount == 0) {
            this.isSeatAvailable = false;
            return "Not Available";
        }
    };
    /**
     * Method to make call
     * @param number number for call
     */
    AddNewPassPage.prototype.call = function (number) {
        this.utility.callNumber(number);
    };
    /**
     * Custom form validator for Shuttle pass.
     * Checks if selected date is a weekend for daily pass.
     * Also checks if daily pass type control is empty.
     * @param group all the shuttle form controls
     */
    AddNewPassPage.prototype.shuttleformValidator = function (group) {
        if (group) {
            var startDate = group.get("startDate").value;
            var dailyPassTypeVal = group.get("dailypassType").value;
            if (startDate) {
                if (startDate == "") {
                    return { startDateIsempty: true };
                }
                else {
                    var formatDate = __WEBPACK_IMPORTED_MODULE_6_moment__(startDate).format("YYYY-MM-DD");
                    var tempdate = __WEBPACK_IMPORTED_MODULE_6_moment__(formatDate); // Thursday Feb 2015
                    var dow = tempdate.day();
                    if (dow == 0 || dow == 6)
                        return { IsWeekend: true };
                }
            }
            if (group.get("passType").value != "") {
                if (group.get("passType").value == "Daily" && (dailyPassTypeVal == "" || dailyPassTypeVal == null)) {
                    return { dailypassIsEmpty: true };
                }
            }
        }
        return null;
    };
    /**
     * Service call for applying pass for Shuttle
     */
    AddNewPassPage.prototype.bookShuttle = function () {
        var _this = this;
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService({
            url: "applyBusPass",
            data: {
                startDate: this.shuttleForm.get("startDate").value,
                passType: this.shuttleForm.get("passType").value,
                routeName: this.shuttleForm.get("routeName").value,
                pickupPointName: this.shuttleForm.get("pickupPoint").value,
                isNonZensarian: this.isNonZensarian,
                transportType: this.passReqType,
                dailyPassType: this.shuttleForm.get("dailypassType").value,
            },
            isZenAdmin: true,
        }).subscribe(function (response) {
            if (response) {
                _this.submitted = false;
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1") {
                    _this.passSuccessData = response["data"];
                    _this.successMsg = _this.passSuccessData.busPassStatusMessageDetails;
                    _this.utility.presentAlert(response.status["statusMessage"]).then(function (res) {
                        _this.isPassSubmitted = true;
                    });
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    /**
    * Opens modal for buss pass rules
    *
    */
    AddNewPassPage.prototype.openRulesModal = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__components_zenadmin_bus_rules_modal_bus_rules_modal__["a" /* BusRulesModalComponent */], { dataParams: {}, }, { cssClass: "", }).present();
    };
    /**
   * Handles daily pass type change event
   @param passType  selected daily passtype
   */
    AddNewPassPage.prototype.onDailyTypeChange = function (passType) {
        // Reset values if daily pass type is changed
        if (this.passForm.get("routeName").enabled && this.passForm.get("startDate").enabled) {
            this.passForm.get("pickupPoint").reset();
            this.passForm.get("arrivalTime").reset();
            this.passForm.get("routeName").reset();
            this.passForm.get("startDate").reset();
        }
    };
    AddNewPassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: "page-add-new-pass",template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\add-new-pass\add-new-pass.html"*/'<!--\n  Generated template for the AddNewPassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title *ngIf="!isPassSubmitted && passReqType==\'bus\'">New Bus Pass</ion-title>\n        <ion-title *ngIf="isPassSubmitted">Confirmation</ion-title>\n        <ion-title *ngIf="!isPassSubmitted && passReqType==\'shuttle\'">Book Shuttle</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content [ngClass]="{\'update-bg-color\': isPassSubmitted}">\n    <div class="form-container" *ngIf="!isPassSubmitted && passReqType==\'bus\'">\n        <form [formGroup]="passForm">\n            <div class="margin-btm-10">\n                <ion-label class="padding10 margin10-rt-lf fontBold">Pass Type</ion-label>\n                <ion-select placeholder="Select Pass type" (ionChange)="onPassTypeChange($event)" interface="action-sheet"\n                    class="borderBottom margin10-rt-lf custom-select" formControlName="passType" [(ngModel)]="passType">\n                    <ion-option [value]="item" *ngFor="let item of busTypeList">{{item}}</ion-option>\n                </ion-select>\n            </div>\n            <!-- daily pass types -->\n            <div class="margin-btm-10" *ngIf="passType==\'Daily\'">\n                <ion-label class="padding10 margin10-rt-lf fontBold">Daily Pass Type\n                </ion-label>\n                <ion-select placeholder="Select Pass type" interface="action-sheet" class="borderBottom margin10-rt-lf custom-select"\n                    formControlName="dailypassType" (ionChange)="onDailyTypeChange($event)">\n                    <ion-option [value]="item" *ngFor="let item of dailyPassOptions">{{item}}</ion-option>\n                </ion-select>\n                <span class="error-msg" *ngIf="passForm.errors?.dailypassIsEmpty  && submitted">\n                    <p>* Kindly Select Daily Pass Type.</p>\n                </span>\n            </div>\n            <div class="margin-btm-10">\n                <ion-label class="padding10 margin10-rt-lf dateLabel fontBold">Start Date</ion-label>\n                <ion-datetime displayFormat="DD-MM-YYYY" pickerFormat="DD-MMMM-YYYY" formControlName="startDate"\n                    placeholder="Select Date" (ionChange)="onDateChange($event)" class="custom-date margin10-rt-lf borderBottom"\n                    [class.invalid]="passForm.errors?.IsWeekend" [min]="currentDate" [max]="endDate"></ion-datetime>\n                <span class="error-msg" *ngIf="passForm.errors?.IsWeekend">\n                    <p>* Selected day is a weekend.</p>\n                </span>\n                <span class="error-msg" *ngIf="passForm.controls.startDate.errors  && submitted">\n                    <p>* Kindly select start date.</p>\n                </span>\n                <span class="error-msg" *ngIf="passForm.errors?.passNotAllowed">\n                    <p>* Pass not allowed after 6.30pm.</p>\n                </span>\n            </div>\n            <div class="margin-btm-10">\n                <ion-label class="padding10 margin10-rt-lf fontBold">Select Route</ion-label>\n                <ion-select placeholder="Select Route" (ionChange)="onRouteChange($event)" interface="action-sheet"\n                    class="borderBottom margin10-rt-lf custom-select" formControlName="routeName">\n                    <ion-option [value]="item" *ngFor="let item of routeList" [hidden]="!item">{{item}}</ion-option>\n                </ion-select>\n                <span class="error-msg" *ngIf="passForm.controls.routeName.errors && submitted">\n                    <p>* Kindly select route name.</p>\n                </span>\n            </div>\n            <div class="margin-btm-10">\n                <ion-label class="padding10 margin10-rt-lf fontBold">Select Pickup/Drop Point</ion-label>\n                <ion-select placeholder="Select Pickup/Drop Point" (ionChange)="onPickUpPtChange($event)" interface="action-sheet"\n                    class="borderBottom margin10-rt-lf custom-select" formControlName="pickupPoint">\n                    <ion-option [value]="item" *ngFor="let item of pickupPointNames" [hidden]="!item">{{item}}</ion-option>\n                </ion-select>\n                <span class="error-msg" *ngIf="passForm.controls.pickupPoint.errors  && submitted">\n                    <p>* Kindly select pickup/drop Point.</p>\n                </span>\n            </div>\n            <div class="margin-btm-10" *ngIf="passForm.controls.dailypassType?.value !=\'Drop\'">\n                <ion-label class="padding10 margin10-rt-lf fontBold">Arrival Time</ion-label>\n                <ion-input formControlName="arrivalTime" class="borderBottom margin10-rt-lf"></ion-input>\n            </div>\n            <div class="comment-container margin-btm-10">\n                <div class="comments-title fontBold">Comments</div>\n                <div class="textarea-div">\n                    <ion-item>\n                        <ion-textarea rows="6" cols="20" placeholder="Enter here..." formControlName="comments"></ion-textarea>\n                    </ion-item>\n                </div>\n            </div>\n            <div class="summry-container">\n                <div class="summary-header">\n                    <span>\n                        <img class="summry-img" src="assets/zenAdmin/summary-img.svg" />\n                    </span>\n                    <span class="summaryTitle">Summary</span>\n                </div>\n                <div class="grid-container">\n                    <ion-row>\n                        <ion-col col-3> <img class="summaryImg" src="assets/zenAdmin/seats.svg" /></ion-col>\n                        <ion-col col-3><img class="summaryImg" src="assets/zenAdmin/money-img.svg" /></ion-col>\n                        <ion-col col-6><img class="summaryImg" src="assets/zenAdmin/calenderIcon.svg" /></ion-col>\n                    </ion-row>\n                    <ion-row class="sub-title-container">\n                        <ion-col col-3>Seats </ion-col>\n                        <ion-col col-3>Amount</ion-col>\n                        <ion-col col-6>{{passType}} Pass <span class="auto-renew-text" *ngIf="passType==\'Monthly\'">(AutoRenew)</span>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class="values-container">\n                        <ion-col col-3 class="available" *ngIf="!isSeatAvailable" class="notAvailable">Not Available</ion-col>\n                        <ion-col col-3 class="available" *ngIf="isSeatAvailable" class="available">Available</ion-col>\n                        <ion-col col-3>{{this.selectedPickupPtDetails?.amount}} INR</ion-col>\n                        <ion-col col-6>{{this.selectedPickupPtDetails?.busPassValidity}}</ion-col>\n                    </ion-row>\n                </div>\n            </div>\n        </form>\n        <div class="checkBox-container padding10">\n            <div class="display-flex">\n                <ion-checkbox [(ngModel)]="checkBoxValue"></ion-checkbox>\n                <span class="marleft-10">I agree to pass rules. </span>\n            </div>\n\n            <span class="bus-rulesTxt" (click)="openRulesModal()">Pass Rules</span>\n        </div>\n    </div>\n    <!-- Add new pass for shuttle -->\n    <div class="form-container" *ngIf="!isPassSubmitted && passReqType==\'shuttle\'">\n        <form [formGroup]="shuttleForm">\n            <div class="margin-btm-10">\n                <ion-label class="padding10 margin10-rt-lf fontBold">Pass Type</ion-label>\n                <ion-select placeholder="Select Pass type" (ionChange)="onPassTypeChange($event)" class="borderBottom margin10-rt-lf custom-select"\n                    formControlName="passType" [(ngModel)]="passType" interface="action-sheet">\n                    <ion-option [value]="item" *ngFor="let item of busTypeList">{{item}}</ion-option>\n                </ion-select>\n            </div>\n            <div class="margin-btm-10" *ngIf="passType==\'Daily\'">\n                <ion-label class="padding10 margin10-rt-lf fontBold">Daily Pass Type\n                </ion-label>\n                <ion-select placeholder="Select Pass type" interface="action-sheet" class="borderBottom margin10-rt-lf custom-select"\n                    formControlName="dailypassType">\n                    <ion-option [value]="item" *ngFor="let item of dailyPassOptions">{{item}}</ion-option>\n                </ion-select>\n                <span class="error-msg" *ngIf="shuttleForm.errors?.dailypassIsEmpty  && submitted">\n                    <p>* Kindly Select Daily Pass Type.</p>\n                </span>\n            </div>\n\n            <div class="margin-btm-10">\n                <ion-label class="padding10 margin10-rt-lf dateLabel fontBold">Start Date</ion-label>\n\n                <ion-datetime displayFormat="DD-MM-YYYY" pickerFormat="DD MMMM YYYY" formControlName="startDate"\n                    placeholder="Select Date" (ionChange)="onDateChange($event)" [min]="currentDate" [max]="endDate"\n                    class="custom-date margin10-rt-lf borderBottom" [class.invalid]="shuttleForm.errors?.IsWeekend">\n                </ion-datetime>\n                <span class="error-msg" *ngIf="shuttleForm.errors?.IsWeekend">\n                    <p>* Selected day is a weekend.</p>\n                </span>\n                <span class="error-msg" *ngIf="shuttleForm.controls.startDate.errors  && submitted">\n                    <p>* Kindly select start date.</p>\n                </span>\n            </div>\n            <div class="margin-btm-10">\n                <ion-label class="padding10 margin10-rt-lf fontBold">Select Route</ion-label>\n                <ion-select placeholder="Select Route" (ionChange)="onRouteChange($event)" interface="action-sheet"\n                    class="borderBottom margin10-rt-lf custom-select" formControlName="routeName">\n                    <ion-option [value]="item" *ngFor="let item of routeList">{{item}}</ion-option>\n                </ion-select>\n                <span class="error-msg" *ngIf="shuttleForm.controls.routeName.errors && submitted">\n                    <p>* Kindly select route name.</p>\n                </span>\n            </div>\n            <div class="margin-btm-10">\n                <ion-label class="padding10 margin10-rt-lf fontBold">Select Drop Point</ion-label>\n                <ion-select placeholder="Select Drop Point" (ionChange)="onPickUpPtChange($event)" interface="action-sheet"\n                    class="borderBottom margin10-rt-lf custom-select" formControlName="pickupPoint">\n                    <ion-option [value]="item" *ngFor="let item of pickupPointNames">{{item}}</ion-option>\n                </ion-select>\n                <span class="error-msg" *ngIf="shuttleForm.controls.pickupPoint.errors  && submitted">\n                    <p>* Kindly select drop point.</p>\n                </span>\n            </div>\n            <div class="summry-container">\n                <div class="summary-header">\n                    <span>\n                        <img class="summry-img" src="assets/zenAdmin/summary-img.svg" />\n                    </span>\n                    <span class="summaryTitle">Summary</span>\n                </div>\n                <div class="grid-container">\n                    <ion-row>\n                        <ion-col col-4>\n                            <img class="summaryImg" src="assets/zenAdmin/seats.svg" />\n                        </ion-col>\n                        <ion-col col-4>\n                            <img class="summaryImg" src="assets/zenAdmin/money-img.svg" /></ion-col>\n                        <ion-col col-4>\n                            <img class="summaryImg" src="assets/zenAdmin/calenderIcon.svg" /></ion-col>\n                    </ion-row>\n                    <ion-row class="sub-title-container">\n                        <ion-col col-4>Seats </ion-col>\n                        <ion-col col-4>Amount</ion-col>\n                        <ion-col col-4>{{passType}} Pass</ion-col>\n                    </ion-row>\n                    <ion-row class="values-container">\n                        <ion-col col-4 class="available" *ngIf="!isSeatAvailable" class="notAvailable">Not Available</ion-col>\n                        <ion-col col-4 class="available" *ngIf="isSeatAvailable" class="available">Available</ion-col>\n                        <ion-col col-4>{{this.selectedPickupPtDetails?.amount}} INR</ion-col>\n                        <ion-col col-4>{{this.selectedPickupPtDetails?.busPassValidity}}</ion-col>\n                    </ion-row>\n                </div>\n            </div>\n        </form>\n        <div class="checkBox-container padding10">\n            <div class="display-flex">\n                <ion-checkbox [(ngModel)]="checkBoxValue"></ion-checkbox>\n                <span class="marleft-10">I agree to pass rules.</span>\n            </div>\n            <span class="bus-rulesTxt" (click)="openRulesModal()">Pass Rules</span>\n        </div>\n    </div>\n    <!-- Confirmation Screen after pass is submitted -->\n    <div *ngIf="isPassSubmitted && passSuccessData">\n        <div class="confirmation-card" *ngIf="passSuccessData">\n            <img src="assets/zenAdmin/pass-success-bg.svg" class="confirmation-img" />\n            <div class="success-msg-div">\n                <div class="colorGreen successTxt">{{successMsg.displayTextTitle}}</div>\n                <div>{{successMsg.displayText}}</div>\n            </div>\n        </div>\n\n        <div class="ticket-parent">\n            <div class="ticket-sub-container" *ngIf="isPassSubmitted">\n                <span class="pass-id-container"><img src="assets/zenAdmin/pass-id-icon.svg" class="pass-id-icon" /></span>\n                <span *ngIf="passReqType==\'bus\'">Bus Pass</span>\n                <span *ngIf="passReqType==\'shuttle\'">Shuttle Pass</span>\n            </div>\n            <div *ngIf="!showNoPassPage">\n                <ion-card color="light" class="ion-card ion-text-center margin5 post-relative">\n                    <div class="display-flex padding10 bus-details-parent">\n                        <div class="display-flex bus-id-container">\n                            <div class="width40px">\n                                <img class="calendar-icon" src="assets/zenAdmin/bus-pass-id.svg" *ngIf="passReqType == \'bus\'" />\n                                <img class="calendar-icon" src="assets/zenAdmin/shuttle-img.svg" *ngIf="passReqType == \'shuttle\'" />\n                            </div>\n                            <div>\n                                <div class="colorGrey busIDText" *ngIf="passReqType == \'bus\'">BusPass ID</div>\n                                <div class="colorGrey busIDText" *ngIf="passReqType == \'shuttle\'">Shuttle</div>\n                                <div class="bus-passId">{{passSuccessData?.busPassId}}</div>\n                            </div>\n                        </div>\n\n                        <div class="display-flex monthly-pass-container">\n                            <div class="width40px">\n                                <img class="calendar-icon" src="assets/zenAdmin/monthly-pass.svg" *ngIf="passReqType == \'bus\'" />\n                                <img class="calendar-icon" src="assets/zenAdmin/shuttle-date-img.svg" *ngIf="passReqType == \'shuttle\'" />\n\n                            </div>\n                            <div>\n                                <div class="dateValue colorGrey monthly-pass-title" *ngIf="passReqType == \'bus\'">\n                                    {{passSuccessData?.passType}} Pass<span class="auto-renew-text" *ngIf="passSuccessData?.passType==\'Monthly\'">(AutoRenew)</span></div>\n                                <div class="dateValue colorGrey monthly-pass-title" *ngIf="passReqType == \'shuttle\'">Date</div>\n                                <div class="month-pass-date">{{passSuccessData?.busPassValidity}}</div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- associate list -->\n                    <div class="userProfile-container">\n                        <div class="img-container">\n                            <img class="user-icon" [src]="passSuccessData?.userProfilePic" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n                        </div>\n                        <div class="user-info-container">\n                            <span class="associate-name">{{passSuccessData?.userName}}</span>\n                            <span class="key-value colorGrey">{{passSuccessData?.userId}}</span>\n                        </div>\n                    </div>\n                    <!-- approved/cancelled image -->\n                    <div class="position-absolute ticket-status-parent">\n                        <img src="assets/zenAdmin/Approved.png" class="ticket-status-img" />\n                    </div>\n\n                    <div class="container-items">\n                        <div class="route-pic">\n                            <img class="route-img" src="assets/zenAdmin/route-icon.svg" />\n                        </div>\n                        <div class="item-container">\n                            <span class="associate-name colorGrey">Route</span>\n                            <span class="key-value fontWeight">{{passSuccessData?.routeName}}</span>\n                        </div>\n                    </div>\n                    <div class="pickup-point-card">\n                        <div class="pickup-details">\n                            <div class="route-pic">\n                                <img class="route-img" src="assets/zenAdmin/location.svg" />\n                            </div>\n                            <div class="displayFlex-col">\n                                <span class="associate-name">Pickup Point</span>\n                                <span class="campus-name fontWeight">{{passSuccessData?.pickupPointName}}</span>\n                            </div>\n                        </div>\n                        <div class="pickup-time-card" *ngIf="passSuccessData?.arrivalTime">\n                            <div class="">\n                                <img class="clock-img" src="assets/zenAdmin/clock-icon.svg" />\n                            </div>\n                            <div class="displayFlex-col">\n                                <span class="key-value fontWeight width-100">{{passSuccessData?.passSubType==\'Drop\'? \'-\':passSuccessData?.arrivalTime}}</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="profile-wrapper"></div>\n                    <div class="bus-info-container">\n                        <div class="user-pic">\n                            <img class="bus-img" src="assets/zenAdmin/bus-image.svg" />\n                        </div>\n                        <div class="item-container">\n                            <div class="associate-name">Bus</div>\n                            <div class="key-value fontWeight">{{passSuccessData?.busNumber}}</div>\n                        </div>\n                    </div>\n                    <div class="driver-info-container">\n                        <div class="driver-img-container">\n                            <img class="user-icon" [src]="passSuccessData?.busInchargeProfilePic" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n                        </div>\n                        <div class="driver-sub-container">\n                            <span class="associate-name">Bus Incharge</span>\n                            <span class="key-value fontWeight">{{passSuccessData?.busInchargeName}}</span>\n                        </div>\n                        <div (click)="call(passSuccessData?.busInchargeContactNo)">\n                            <img class="phone-image" src="assets/zenAdmin/call-image.svg" />\n                        </div>\n                    </div>\n                </ion-card>\n            </div>\n        </div>\n    </div>\n</ion-content>\n<ion-footer *ngIf="!isPassSubmitted">\n    <div class="text-center">\n        <button class="submitBtn" ion-button round (click)="verifySubmitDetails()" [disabled]="!checkBoxValue && !isDailyPassAllowed"\n            *ngIf="passReqType==\'bus\'">Submit</button>\n        <button class="submitBtn" *ngIf="passReqType==\'shuttle\'" ion-button round (click)="verifySubmitDetails()"\n            [disabled]="!checkBoxValue">Book Shuttle</button>\n    </div>\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\add-new-pass\add-new-pass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_1__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["w" /* ModalController */]])
    ], AddNewPassPage);
    return AddNewPassPage;
}());

//# sourceMappingURL=add-new-pass.js.map

/***/ })

});
//# sourceMappingURL=78.js.map