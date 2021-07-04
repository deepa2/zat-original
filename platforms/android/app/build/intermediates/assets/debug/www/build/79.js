webpackJsonp([79],{

/***/ 1428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBusPageModule", function() { return AddBusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_bus__ = __webpack_require__(1850);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddBusPageModule = /** @class */ (function () {
    function AddBusPageModule() {
    }
    AddBusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_bus__["a" /* AddBusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_bus__["a" /* AddBusPage */]),
            ],
        })
    ], AddBusPageModule);
    return AddBusPageModule;
}());

//# sourceMappingURL=add-bus.module.js.map

/***/ }),

/***/ 1850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_zenadmin_add_new_route_modal_add_new_route_modal__ = __webpack_require__(793);
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
 * Generated class for the AddBusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddBusPage = /** @class */ (function () {
    // private pattern="(([A-Za-z]){2,3}(|-)(?:[0-9]){1,2}(|-)(?:[A-Za-z]){2}(|-)([0-9]){1,4})|(([A-Za-z]){2,3}(|-)([0-9]){1,4})"
    function AddBusPage(navCtrl, navParams, formBuilder, utility, httpProvider, viewCtrl, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.submitted = false;
        this.isNewBus = false;
        this.addBusForm = this.formBuilder.group({
            routeName: [{ value: '', disabled: false }, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            totalSeats: [{ value: '', disabled: false }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].min(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].max(50)]],
            busNumber: [{ value: '', disabled: false }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]],
        });
        this.isNewBus = this.navParams.get('isNewBus');
        if (!this.isNewBus) {
            this.busDetails = this.navParams.get('busData');
            if (!(this.utility.isEmptyOrNullOrUndefined(this.navParams.get('busInchargeDetails'))))
                this.busInchargeDetails = this.navParams.get('busInchargeDetails');
            if (!(this.utility.isEmptyOrNullOrUndefined(this.navParams.get('driverDetails'))))
                this.driverDetails = this.navParams.get('driverDetails');
            if (!this.utility.isEmptyOrNullOrUndefined(this.busDetails)) {
                this.addBusForm.setValue({
                    routeName: this.busDetails.routeName,
                    totalSeats: this.busDetails.totalSeats,
                    busNumber: this.busDetails.busNumber
                });
                // this.busRouteIndex = this.busDetails.busRouteId;
            }
        }
        this.getAddBusDetailData();
    }
    AddBusPage.prototype.ionViewWillEnter = function () {
        if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get("selectedDriver")))
            this.driverDetails = this.navParams.get("selectedDriver");
        if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get("selectedBusIncharge")))
            this.busInchargeDetails = this.navParams.get("selectedBusIncharge");
    };
    AddBusPage.prototype.gotoAddNewDriver = function (actionType) {
        this.navCtrl.push('AddNewDriverPage', {
            title: actionType,
            routeId: this.utility.isEmptyOrNullOrUndefined(this.busRouteIndex) ? '' : this.busRouteIndex
        });
    };
    AddBusPage.prototype.getAddBusDetailData = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var getAdminAddBusDetailData = {
            url: 'getAdminAddBusDetailData',
            data: {},
            isZenAdmin: true
        };
        this.httpProvider.http.commonService(getAdminAddBusDetailData).subscribe(function (response) {
            if (response) {
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response['data'])) {
                    _this.routeList = response['data'].busRouteList;
                    if (!_this.isNewBus) {
                        _this.getRouteId(_this.busDetails.routeName);
                    }
                }
            }
            if (response.status["statusCode"] == '16') {
                // this.showNoPassPage = true;
                _this.utility.presentAlert(response.status["statusMessage"]);
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    AddBusPage.prototype.verifySubmitDetails = function () {
        var _this = this;
        if (this.addBusForm.invalid) {
            this.submitted = true;
            // this.utility.presentAlert("Kindly select all the fields")
            return;
        }
        else {
            this.utility.presentConfirmation(this.isNewBus ? "Do you want to add new bus?" : "Do you want to update bus details?").then(function (res) {
                _this.addUpdateBus();
            }, function (err) { });
        }
    };
    AddBusPage.prototype.addUpdateBus = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var getAdminAddUpdateBusRouteMapping;
        if (!this.isNewBus) {
            getAdminAddUpdateBusRouteMapping = {
                url: 'getAdminAddUpdateBusDetailsData',
                data: {
                    "busId": this.busDetails.busId,
                    "busRouteId": this.busRouteIndex,
                    "driverId": this.driverDetails.driverId,
                    "busInchargeId": this.busInchargeDetails.busInchargeId,
                    "busInchargeContactNumber": this.busInchargeDetails.busInchargeContactNumber,
                    "updationType": 'update',
                    "busNumber": this.addBusForm.get("busNumber").value,
                    "totalSeats": this.addBusForm.get("totalSeats").value,
                },
                isZenAdmin: true
            };
        }
        else {
            getAdminAddUpdateBusRouteMapping = {
                url: 'getAdminAddUpdateBusDetailsData',
                data: {
                    "busInchargeId": this.busInchargeDetails ? this.busInchargeDetails.busInchargeId : '',
                    "updationType": 'add',
                    "busNumber": this.addBusForm.get("busNumber").value,
                    "totalSeats": this.addBusForm.get("totalSeats").value,
                    "busRouteId": this.busRouteIndex,
                    "driverId": this.driverDetails ? this.driverDetails.driverId : '',
                },
                isZenAdmin: true
            };
        }
        this.httpProvider.http.commonService(getAdminAddUpdateBusRouteMapping).subscribe(function (response) {
            if (response) {
                _this.submitted = false;
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response['data']) && [1, 23, 24].includes(response.status["statusCode"])) {
                    _this.utility.presentAlert(response.status["statusMessage"]).then(function (res) {
                        _this.navCtrl.pop();
                    });
                }
                //  else {
                //   this.utility.presentAlert(response.status["statusMessage"])
                // }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    AddBusPage.prototype.onRouteChange = function (routeName) {
        this.getRouteId(routeName);
    };
    AddBusPage.prototype.getRouteId = function (routeName) {
        var _this = this;
        this.routeList.map(function (val) {
            if (val.routeName == routeName) {
                _this.busRouteIndex = val.busRouteId;
            }
        });
    };
    AddBusPage.prototype.gotoAddNewRouteModal = function (fieldTitle) {
        var _this = this;
        console.log("fieldTitle", fieldTitle);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_zenadmin_add_new_route_modal_add_new_route_modal__["a" /* AddNewRouteModalComponent */], {
            'data': {
                routeList: this.routeList,
            }
        }, { cssClass: '' });
        modal.onDidDismiss(function (data) {
            // if (data === "SUBMITTED_DATA_SUCCESSFULLY") {
            //   this.navCtrl.pop()
            //   this.navCtrl.getPrevious().data.submitStatus = "true"
            //   // this.getAssociateData();
            // }
            console.log("data", data);
            if (data != null || data != undefined) {
                var routeData = data['routeDetail'];
                console.log("routeData", data['routeDetail']);
                if (data['routeDetail']) {
                    _this.addBusForm.get('routeName').setValue(routeData.routeName);
                    _this.busRouteIndex = routeData.busRouteId;
                }
                else {
                    _this.addBusForm.get('routeName').setValue(data);
                    _this.getRouteIdForNewRoute(data);
                }
                // this.routeName.get('performanceMeasure').markAsDirty()
                // this.cdr.detectChanges()
            }
        });
        modal.present();
    };
    AddBusPage.prototype.getRouteIdForNewRoute = function (routeName) {
        var _this = this;
        this.httpProvider.http.commonService({ url: "getAdminAddUpdateRoute", isZenAdmin: true, data: { "routeName": routeName, "updationType": "add" } })
            .subscribe(function (response) {
            if (!_this.utility.isEmptyOrNullOrUndefined(response) && !_this.utility.isEmptyOrNullOrUndefined(response['data']) && response.status["statusCode"] == '1') {
                // this.busRouteIndex = routeData.busRouteId
                console.log("response", response);
                var responseData = response['data'].busRouteDetailDO;
                _this.busRouteIndex = responseData.busRouteId;
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    AddBusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-add-bus',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\add-bus\add-bus.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title *ngIf="isNewBus">Add Bus</ion-title>\n        <ion-title *ngIf="!isNewBus">Edit Bus</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="form-container">\n        <form [formGroup]="addBusForm">\n            <div class="margin-btm-10">\n                <ion-label class="padding10 margin10-rt-lf fontBold">Select Route</ion-label>\n                <!-- <ion-select placeholder="Select Route" (ionChange)="onRouteChange($event)" interface="action-sheet"\n                    class="borderBottom margin10-rt-lf custom-select" style="max-width: 100%" formControlName="routeName">\n                    <ion-option [value]="item.routeName" *ngFor="let item of routeList;let i=index;" >{{item.routeName}}</ion-option>\n                </ion-select> -->\n                <ion-input formControlName="routeName" class="borderBottom margin10-rt-lf " style="max-width: 100%"\n                    (ionFocus)="gotoAddNewRouteModal()" placeholder="Select Route"></ion-input>\n                <span class="error-msg" *ngIf="addBusForm.controls.routeName.errors && submitted">\n                    <p>* Kindly select route name.</p>\n                </span>\n            </div>\n            <div class="margin-btm-10">\n                <ion-label class="padding10 margin10-rt-lf fontBold">Total Seats </ion-label>\n\n                <ion-input class="borderBottom " placeholder="Add Total Seats" formControlName="totalSeats" type="number">\n                </ion-input>\n                <span class="error-msg" *ngIf="submitted">\n                    <p *ngIf="addBusForm.controls.totalSeats.errors?.required">* Kindly add total seats.</p>\n                    <p *ngIf="addBusForm.controls.totalSeats.errors?.min">* Total seat count should be greater than 0.</p>\n                    <p *ngIf="addBusForm.controls.totalSeats.errors?.max">* Total seat count should be in the range 1\n                        and 50.</p>\n                </span>\n            </div>\n            <div class="margin-btm-10">\n                <ion-label class="padding10 margin10-rt-lf fontBold">Bus Number </ion-label>\n\n                <ion-input class="borderBottom " placeholder="Add Bus Number" formControlName="busNumber">\n                </ion-input>\n                <span class="error-msg" *ngIf="addBusForm.controls.busNumber.errors && submitted">\n                    <p *ngIf="addBusForm.controls.busNumber.errors?.required">* Kindly add bus number.</p>\n                    <!-- <p *ngIf="addBusForm.controls.busNumber.errors?.pattern">* Please enter bus number in this format MH12DE1433/ .</p> -->\n                </span>\n            </div>\n        </form>\n        <div class="driver-incharge-container">\n            <div class="busIncharge-container">\n                <div class="busIncharge-txt">Bus Incharge</div>\n                <div class="associateInfo-container" *ngIf="!isNewBus">\n                    <div class="userImg-container">\n                        <img class="user-profile" [src]="busInchargeDetails?.busInchargeProfilePic" onerror="this.src=\'assets/imgs/dummy-profile.png\'">\n                    </div>\n                    <div class="associateDetails-container">\n                        <div>{{busInchargeDetails?.busInchargeName}}</div>\n                        <div>{{busInchargeDetails?.busInchargeContactNumber}}</div>\n                    </div>\n                    <div class="changeTxt" (click)="gotoAddNewDriver(\'Bus Incharge\')">Change</div>\n                </div>\n                <div class="associateInfo-container" *ngIf="isNewBus">\n                    <div class="userImg-container">\n                        <img class="user-profile" [src]="busInchargeDetails?.busInchargeProfilePic" onerror="this.src=\'assets/imgs/dummy-profile.png\'">\n                    </div>\n                    <div class="associateDetails-container">\n                        <div>{{busInchargeDetails?.busInchargeName}}</div>\n                        <div>{{busInchargeDetails?.busInchargeContactNumber}}</div>\n                    </div>\n                    <div class="changeTxt" (click)="gotoAddNewDriver(\'Bus Incharge\')">Add</div>\n                </div>\n            </div>\n            <div class="driver-container">\n                <div class="driver-txt">Driver</div>\n\n                <div class="associateInfo-container" *ngIf="!isNewBus">\n                    <div class="userImg-container">\n                        <img class="user-profile" [src]="driverDetails?.driverProfilePic" onerror="this.src=\'assets/imgs/dummy-profile.png\'">\n                    </div>\n                    <div class="associateDetails-container">\n                        <div>{{driverDetails?.driverName}}</div>\n                        <div>{{driverDetails?.driverNumber}}</div>\n                    </div>\n                    <div class="changeTxt" (click)="gotoAddNewDriver(\'Driver\')">Change</div>\n                </div>\n\n                <div class="associateInfo-container" *ngIf="isNewBus">\n                    <div class="userImg-container">\n                        <img class="user-profile" [src]="driverDetails?.driverProfilePic" onerror="this.src=\'assets/imgs/dummy-profile.png\'">\n                    </div>\n                    <div class="associateDetails-container">\n                        <div>{{driverDetails?.driverName}}</div>\n                        <div>{{driverDetails?.driverNumber}}</div>\n                    </div>\n                    <div class="changeTxt" (click)="gotoAddNewDriver(\'Driver\')">Add</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</ion-content>\n\n<ion-footer class="button-container">\n    <button class="add-button" ion-button round (click)="verifySubmitDetails()" *ngIf="isNewBus">Add Bus</button>\n    <button class="add-button" ion-button round (click)="verifySubmitDetails()" *ngIf="!isNewBus">Update Bus</button>\n\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\add-bus\add-bus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["H" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["w" /* ModalController */]])
    ], AddBusPage);
    return AddBusPage;
}());

//# sourceMappingURL=add-bus.js.map

/***/ })

});
//# sourceMappingURL=79.js.map