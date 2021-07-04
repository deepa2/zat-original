webpackJsonp([104],{

/***/ 1332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GatePassPageModule", function() { return GatePassPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gatepass__ = __webpack_require__(1752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GatePassPageModule = /** @class */ (function () {
    function GatePassPageModule() {
    }
    GatePassPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gatepass__["a" /* GatePassPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gatepass__["a" /* GatePassPage */]),
            ],
        })
    ], GatePassPageModule);
    return GatePassPageModule;
}());

//# sourceMappingURL=gatepass.module.js.map

/***/ }),

/***/ 1752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GatePassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_browser_tab__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GatePassPage = /** @class */ (function () {
    function GatePassPage(utility, httpProvider, navParam, modalCtrl, browserTab, platform, navctrl) {
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.navParam = navParam;
        this.modalCtrl = modalCtrl;
        this.browserTab = browserTab;
        this.platform = platform;
        this.navctrl = navctrl;
        this.isShowCheck = false;
        this.userData = this.navParam.get('userDetails');
    }
    GatePassPage.prototype.ngOnInit = function () {
    };
    GatePassPage.prototype.goTogatepassCheck = function () {
        // let modal = this.modalCtrl.create(GatePassCheckComponent, { 'userid': this.userData.userId, 'userDetails': this.userData }, {
        //   cssClass: 'infoModal'
        // });
        // modal.onDidDismiss(() => {
        //   // this.navCtrl.push("GatePassPage", { 'userDetails': this.userData });
        // });
        // modal.present();
        this.navctrl.push("ReturnToOfficePage", { 'userid': this.userData.userId, 'userDetails': this.userData });
    };
    GatePassPage.prototype.formateDT = function (data) {
        if (data) {
            return this.utility.formatDate(data);
        }
    };
    GatePassPage.prototype.openPdfDocument = function (data) {
        var _this = this;
        if (this.platform.is('ios')) {
            this.browserTab.isAvailable().then(function (isAvailable) {
                if (isAvailable) {
                    _this.browserTab.openUrl(data);
                }
                else {
                    _this.utility.openWithSystemBrowser(data);
                }
            })
                .catch(function () {
                _this.utility.openWithSystemBrowser(data);
            });
        }
        else {
            this.utility.openAsset(data);
        }
    };
    GatePassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gatepass',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\gatepass\gatepass.html"*/'<!-- Generated template for the CovidInformationComponent component -->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span>Access ID</span>\n      <div class="watch-video" (click)="goTogatepassCheck()">View Guidelines</div>\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <!-- <gatepass-check *ngIf="isShowCheck == true" (hideCheckValue)=asignCheckValue($event)></gatepass-check> -->\n  <div class="gate-pass-wrapper" *ngIf="isShowCheck == false">\n    <img class="mask" src="assets/imgs/gatepass-mask.svg">\n    <div class="profile-wrapper">\n      <div class="prof-pic-con">\n        <img class="outer-image" src="assets/menu_icons/outerImage.svg">\n        <img class="profile-pic" src="{{userData?.profilePic}}">\n      </div>\n      <div class="user-name">{{userData?.userName}}</div>\n      <div class="designation">{{userData?.designation}}</div>\n    </div>\n    <div class="user-info">\n      <div class="info-item">\n        <img class="info-icon" src="assets/imgs/deskNo.svg">\n        <span>Location : {{userData?.location}}</span>\n      </div>\n\n      <div class="info-item">\n        <img class="info-icon" src="assets/imgs/gate-calendar.svg">\n        <span>Start Date : {{formateDT(userData?.startDate)| date}}</span>\n      </div>\n\n      <div class="info-item">\n        <img class="info-icon" src="assets/imgs/gate-calendar.svg">\n        <span>End Date : {{ formateDT(userData?.endDate) | date}}</span>\n      </div>\n\n      <div *ngIf="userData?.isPermitDoc" class="info-item" (click)="openPdfDocument(userData?.permitDocument)">\n        <img  class="info-icon pdfIcon" src="assets/imgs/gatePass-white-pdf.svg">\n        <span class="pdfTextLine">{{userData?.permitDocumentName}}</span>\n      </div>\n\n      <div  *ngIf="userData?.isExtendedLockdown" class="info-item" (click)="openPdfDocument(userData?.extendedLocdownPeroidCerticate)">\n        <img  class="info-icon pdfIcon" src="assets/imgs/gatePass-white-pdf.svg">\n        <span class="pdfTextLine">{{userData?.extendedLocdownPeroidCerticateName}}</span>\n      </div>\n      <div  *ngIf="userData?.isWorkPlacePlan1" class="info-item" (click)="openPdfDocument(userData?.workPlacePlan1Doc)">\n        <img  class="info-icon pdfIcon" src="assets/imgs/gatePass-white-pdf.svg">\n        <span class="pdfTextLine">{{userData?.workPlacePlan1DocName}}</span>\n      </div>\n      <div  *ngIf="userData?.isWorkPlacePlan2" class="info-item" (click)="openPdfDocument(userData?.workPlacePlan2Doc)">\n        <img  class="info-icon pdfIcon" src="assets/imgs/gatePass-white-pdf.svg">\n        <span class="pdfTextLine">{{userData?.workPlacePlan2DocName}}</span>\n      </div>\n      <div  *ngIf="userData?.isReadingDoc" class="info-item" (click)="openPdfDocument(userData?.readingDocUrl)">\n        <img  class="info-icon pdfIcon" src="assets/imgs/gatePass-white-pdf.svg">\n        <span class="pdfTextLine">{{userData?.readingDocName}}</span>\n      </div>\n    </div>\n    \n\n    <div class="qr-code">\n      <img src="{{userData?.qrcodeURL}}">\n      <span class="note">Note: Please display this access ID and your physical ID card to the\n        security/receptionist</span>\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\gatepass\gatepass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_browser_tab__["a" /* BrowserTab */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */]])
    ], GatePassPage);
    return GatePassPage;
}());

//# sourceMappingURL=gatepass.js.map

/***/ })

});
//# sourceMappingURL=104.js.map