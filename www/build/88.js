webpackJsonp([88],{

/***/ 1343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectedDocumentsPageModule", function() { return RejectedDocumentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rejected_documents__ = __webpack_require__(1763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RejectedDocumentsPageModule = /** @class */ (function () {
    function RejectedDocumentsPageModule() {
    }
    RejectedDocumentsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rejected_documents__["a" /* RejectedDocumentsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rejected_documents__["a" /* RejectedDocumentsPage */]),
            ],
        })
    ], RejectedDocumentsPageModule);
    return RejectedDocumentsPageModule;
}());

//# sourceMappingURL=rejected-documents.module.js.map

/***/ }),

/***/ 1763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RejectedDocumentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RejectedDocumentsPage = /** @class */ (function () {
    function RejectedDocumentsPage(navCtrl, navParams, popoverCtrl, utility, store, dataService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.utility = utility;
        this.store = store;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.url = "getRejectedDocumentDashboard";
        this._DocumentListener = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["Subscription"]();
        this.isAvailableForFinalSubmit = false;
        this._addSuccessListener = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["Subscription"]();
    }
    RejectedDocumentsPage.prototype.ionViewDidLoad = function () {
        this.loading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_82" /* getRejectedDocsLoader */]);
    };
    RejectedDocumentsPage.prototype.presentOptions = function (myEvent) {
        var popover = this.popoverCtrl.create('PopoverPage', {
            'type': 'rejectedDocuments'
        });
        popover.present({ ev: myEvent });
    };
    RejectedDocumentsPage.prototype.ionViewWillEnter = function () {
        this.getRejectedDocuments();
    };
    RejectedDocumentsPage.prototype.getRejectedDocuments = function () {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["_8" /* RejectedDocsAction */](this.url));
        this._DocumentListener = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_83" /* getRejectedDocsState */]).subscribe(function (response) {
            if (response.data) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["_9" /* RejectedDocsResetAction */]());
                _this.rejectedDocsList = response.data.details.responseList.rejectDocumentsList;
                _this.isAvailableForFinalSubmit = response.data.details.responseList.isAvailableForFinalSubmit;
                //  this.isAvailableForSubmit= true;
            }
        });
    };
    /* ngOnDestroy() {
      this._DocumentListener.unsubscribe();
      this._addSuccessListener.unsubscribe();
    } */
    RejectedDocumentsPage.prototype.gotoEditPage = function (type, Id) {
        var data = {
            "type": type,
            "referenceId": Id,
            'section': 'onboarding',
            'isRejected': true
        };
        this.navCtrl.push("ObAddDetailsPage", { 'selectedField': data });
    };
    RejectedDocumentsPage.prototype.finalSubmit = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Do you want to save the data ?',
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
                        _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["Z" /* ObFinalSubmitAction */]('onboardingFinalSubmit'));
                        _this._addSuccessListener = _this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_75" /* getObWElcomeState */]).subscribe(function (data) {
                            if (data.finalData) {
                                _this.utility.presentAlert('Submitted successfully').then(function () {
                                    // this.navCtrl.pop();
                                    _this.navCtrl.setRoot("ObDashboardPage");
                                    //this.store.dispatch(new fromStore.ObFinalSubmitResetAction());
                                });
                            }
                        });
                    }
                }
            ],
        });
        alert.present();
    };
    RejectedDocumentsPage.prototype.getBorderColor = function (rejectionStatus) {
        if (rejectionStatus == 'Pending') {
            return 'green';
        }
        else if (rejectionStatus == 'Reject') {
            return 'red';
        }
    };
    RejectedDocumentsPage.prototype.ionViewWillLeave = function () {
        this._DocumentListener.unsubscribe();
        this._addSuccessListener.unsubscribe();
    };
    RejectedDocumentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-rejected-documents',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\rejected-documents\rejected-documents.html"*/'<ion-header>\n\n  <ion-toolbar class="toolBg">\n    <ion-title>Rejected Documents</ion-title>\n    <!-- <div class="right-item" padding (click)="presentOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </div> -->\n    <ion-buttons end>\n      <button *ngIf="finalSubmit" class="submit" form="ngForm" ion-button (click)="finalSubmit()"\n        [disabled]="!isAvailableForFinalSubmit">\n        Submit\n      </button>\n      <button ion-button icon-only (click)="presentOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div padding *ngIf="loading$ | async">\n    <ion-spinner></ion-spinner>\n  </div>\n\n  <ion-card class="queryCard" *ngFor="let docs of rejectedDocsList" (click)="gotoEditPage(docs.type,docs.referenceId)">\n    <!-- <ion-card class="queryCard" *ngFor="let docs of rejectedDocsList$"> -->\n    <div>\n\n      <div class="justify-content-space-btw">\n \n        <div><img class="rej-icon" *ngIf="docs.rejectionStatus == \'Reject\'"\n            src="assets/zents-imgs/ts-rejected-icon.svg" /></div>\n        <div><img class="pending-icon" *ngIf="docs.rejectionStatus == \'Pending\'"\n            src="assets/zents-imgs/ts-submitted-icon.svg" /></div>\n        <div class="width70 title-content">\n          <p class="category">\n            {{docs.title}}\n\n            <!-- PANCARD -->\n          </p>\n          <p class="reason">Rejection Reasons:</p>\n          <p class="fontSize9">{{docs.reasonForRejection}}</p>\n        </div>\n        <div class="width20">\n          <ion-icon class="font-size1p6" name="arrow-forward"></ion-icon>\n        </div>\n      </div>\n\n    </div>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\rejected-documents\rejected-documents.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* Data */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], RejectedDocumentsPage);
    return RejectedDocumentsPage;
}());

//# sourceMappingURL=rejected-documents.js.map

/***/ })

});
//# sourceMappingURL=88.js.map