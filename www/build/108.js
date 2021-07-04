webpackJsonp([108],{

/***/ 1322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editProfile__ = __webpack_require__(1544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_attachment_attachment__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_formService_form_control_service__ = __webpack_require__(733);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__editProfile__["a" /* EditProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editProfile__["a" /* EditProfilePage */])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_attachment_attachment__["a" /* Attachment */],
                __WEBPACK_IMPORTED_MODULE_5__providers_formService_form_control_service__["a" /* FormControlService */]
            ]
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());

//# sourceMappingURL=editProfile.module.js.map

/***/ }),

/***/ 1544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, viewCtrl, navParams, store, formBuilder, loadingController, utility, alertCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.store = store;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.utility = utility;
        this.alertCtrl = alertCtrl;
        this.myGroup = this.formBuilder.group({});
        this.profileDetails = {};
        this.persnalInfoDetails = [];
        this.expDetails = [];
        this.list = [];
        this.uploadMariageCertificate = false;
        this.uploadBirthCertificate = false;
        this.editType = null;
        this.items = [];
        this.hide = [];
        this._addLoadingListener = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["Subscription"]();
        this._addSuccessListener = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["Subscription"]();
        this._profileDetailsListener = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["Subscription"]();
        this._uploadLoadingListener = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["Subscription"]();
        this._getobUploadData = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["Subscription"]();
        this.showForm = false;
        this._submitExperienceLoading = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["Subscription"]();
        this._submitExperienceData = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["Subscription"]();
        this.showSubmit = true;
    }
    EditProfilePage.prototype.getAssociatePersonalData = function () {
        var _this = this;
        var url;
        if (this.editType == 'experience') {
            url = 'getAssociateExperienceData';
        }
        else {
            url = 'getAssociatePersonalData';
        }
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["h" /* EditProfileDataAction */](url, {}));
        this._profileDetailsListener = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_77" /* getProfileEditData */]).subscribe(function (res) {
            if (res) {
                if (res.details) {
                    _this.expDetails = res.details;
                }
                _this.showSubmit = res.showSubmit;
            }
        }, function (err) {
        });
    };
    EditProfilePage.prototype.goToAddDetails = function (item) {
        var selectedfield = {
            "experienceId": item.experienceId,
            "referenceId": item.experienceId,
            "previousEmployerId": item.previousEmployerId,
            'section': 'experience',
            'formMessage': this.hasRequestedShowMsg,
            'isAvailableForFinalSubmit': this.hasRequested
        };
        this.navCtrl.push('ObAddDetailsPage', { 'selectedField': selectedfield });
    };
    EditProfilePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.editType = this.navParams.get('type');
        this.hasRequested = this.navParams.get('hasRequested');
        this.hasRequestedShowMsg = this.navParams.get('hasRequestedShowMsg');
        this.getAssociatePersonalData();
        this.loading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_78" /* getProfileLoading */]);
        this._submitExperienceLoading = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_51" /* getEditProfileLoading */]).subscribe(function (loading) {
            _this.updateLoader(loading);
        });
        console.log(this.navCtrl.getActive().index);
    };
    EditProfilePage.prototype.ionViewWillLeave = function () {
        this._addLoadingListener.unsubscribe();
        this._addSuccessListener.unsubscribe();
        this._profileDetailsListener.unsubscribe();
        this._uploadLoadingListener.unsubscribe();
        this._getobUploadData.unsubscribe();
        this._submitExperienceLoading.unsubscribe();
        this._submitExperienceData.unsubscribe();
    };
    EditProfilePage.prototype.addForm = function () {
        var selectedfield = {
            "experienceId": 0,
            "previousEmployerId": 0,
            'section': 'experience',
            "mode": "add",
            "addReferenceId": this.expDetails.length == 0 ? 0 : this.expDetails[this.expDetails.length - 1].experienceId,
            'formMessage': '',
            'isAvailableForFinalSubmit': this.hasRequested
        };
        this.navCtrl.push('ObAddDetailsPage', { 'selectedField': selectedfield });
    };
    EditProfilePage.prototype.submitExperience = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'After submitting the experience(s),you will not be able to add/edit the experience for next 48 hours.<br> Are you sure you want to submit the experience?',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'No',
                    role: 'no',
                    handler: function () {
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["_21" /* SubmitExperienceAction */]('submitExperienceData'));
                    }
                }
            ],
        });
        alert.present();
        this._submitExperienceData = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_50" /* getEditProfileData */]).subscribe(function (data) {
            //  this.updateLoader(true)
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["_22" /* SubmitResetData */]());
            if (data) {
                // this.updateLoader(false)
                _this.utility.presentAlert("Experience submitted successfully").then(function () {
                    //this.store.dispatch(new fromStore.SubmitResetData());
                    // this.navCtrl.pop();
                    var currentIndex = _this.navCtrl.getActive().index - 1;
                    _this.navCtrl.remove(currentIndex, 2);
                });
            }
        });
    };
    EditProfilePage.prototype.updateLoader = function (loading) {
        if (loading) {
            this.loader = this.loadingController.create();
            this.loader.present();
        }
        else {
            if (this.loader) {
                this.loader.dismiss();
                this.loader = null;
            }
        }
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-editProfile',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\editProfile\editProfile.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Edit Profile</ion-title>\n        <ion-buttons end>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding-vertical>\n\n    <ion-spinner *ngIf="loading$ | async"></ion-spinner>\n\n    <div *ngIf="!(loading$ | async) && hasRequestedShowMsg"   margin class="hasRequestedShowMsg">\n            <img  class="alert-image" src="assets/imgs/alert.svg">\n        {{hasRequestedShowMsg}}</div>\n\n    <div text-center *ngIf="!(loading$ | async) && expDetails.length == 0 ">No results found</div>\n\n    <div *ngFor="let item of expDetails">\n        <ion-card (click)="goToAddDetails(item)">\n            <span class="span-text">{{item.employer}}</span>\n            <ion-col col-1 text-right class="right-arrow">\n                <ion-icon name="arrow-forward"></ion-icon>\n            </ion-col>\n        </ion-card>\n    </div>\n\n\n\n</ion-content>\n<ion-footer>\n    <ion-fab [ngClass]="{\'customFab\': (expDetails.length > 0 && !showSubmit)}" *ngIf="editType == \'experience\' && !hasRequested" right\n        bottom (click)="addForm()">\n        <button ion-fab>\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n    <ion-row *ngIf="!showSubmit">\n        <ion-col no-padding>\n            <button no-margin ion-button full large color="secondary" (click)="submitExperience()">Submit</button>\n        </ion-col>\n    </ion-row>\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\editProfile\editProfile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["H" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=editProfile.js.map

/***/ })

});
//# sourceMappingURL=108.js.map