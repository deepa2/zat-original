webpackJsonp([84],{

/***/ 1354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedProfilePageModule", function() { return SavedProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__saved_profile__ = __webpack_require__(1776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SavedProfilePageModule = /** @class */ (function () {
    function SavedProfilePageModule() {
    }
    SavedProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__saved_profile__["a" /* SavedProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__saved_profile__["a" /* SavedProfilePage */]),
            ]
        })
    ], SavedProfilePageModule);
    return SavedProfilePageModule;
}());

//# sourceMappingURL=saved-profile.module.js.map

/***/ }),

/***/ 1776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_attachment_attachment__ = __webpack_require__(731);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SavedProfilePage = /** @class */ (function () {
    function SavedProfilePage(navCtrl, navParams, httpProvider, modalCtrl, popoverctr, store, attachment, file, utility) {
        // this.referralInfo = this.navParams.get('ReferralInfo');
        // this.candidateProfileId = this.navParams.get('candidateProfileId');
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.popoverctr = popoverctr;
        this.store = store;
        this.attachment = attachment;
        this.file = file;
        this.utility = utility;
        this.mainData = {};
    }
    SavedProfilePage.prototype.getZenrichData = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var url = "requestData";
        var data = {
            "searchKey": "",
            "start": 0,
            "type": "SAVED_PROFILES",
            "end": 10
        };
        this.utility.updateLoader(true);
        this.httpProvider.http
            .commonService({ url: url, data: data, zenRich: true })
            .subscribe(function (res) {
            console.log(res);
            _this.mainData = res.details;
            _this.utility.updateLoader(false);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('createReferral'),
        __metadata("design:type", Object)
    ], SavedProfilePage.prototype, "form", void 0);
    SavedProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-saved-profile',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\saved-profile\saved-profile.html"*/'<!--\n  Generated template for the WowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Saved Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="form-wrapper">\nSaved profile\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\saved-profile\saved-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_6__providers_attachment_attachment__["a" /* Attachment */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], SavedProfilePage);
    return SavedProfilePage;
}());

//# sourceMappingURL=saved-profile.js.map

/***/ })

});
//# sourceMappingURL=84.js.map