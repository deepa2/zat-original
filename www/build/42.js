webpackJsonp([42],{

/***/ 1401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZenrichProfilePageModule", function() { return ZenrichProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zenrich_profile__ = __webpack_require__(1823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_emojione__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ZenrichProfilePageModule = /** @class */ (function () {
    function ZenrichProfilePageModule() {
    }
    ZenrichProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zenrich_profile__["a" /* ZenrichProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular_emojione__["a" /* EmojiModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zenrich_profile__["a" /* ZenrichProfilePage */]),
            ]
        })
    ], ZenrichProfilePageModule);
    return ZenrichProfilePageModule;
}());

//# sourceMappingURL=zenrich-profile.module.js.map

/***/ }),

/***/ 1823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZenrichProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
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
 * Generated class for the WowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZenrichProfilePage = /** @class */ (function () {
    function ZenrichProfilePage(navCtrl, navParams, httpProvider, modalCtrl, popoverctr, utility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.popoverctr = popoverctr;
        this.utility = utility;
        this.mainData = [];
        this.loadedData = [];
        this.infiniteScroll = '';
        this.start = 0;
        this.end = 10;
        this.srfNo = this.navParams.get('srfNo');
        // this.getZenrichData();
    }
    ZenrichProfilePage.prototype.ionViewDidEnter = function () {
        this.mainData = [];
        this.utility.updateLoader(true);
        this.start = 0;
        this.end = 10;
        this.getZenrichData();
    };
    ZenrichProfilePage.prototype.getZenrichData = function () {
        var _this = this;
        if (this.loadedData.length == 0) {
            this.utility.updateLoader(true);
        }
        var url = "requestData";
        var data = {
            "searchKey": "",
            "start": this.start,
            "end": this.end,
            "type": "SAVED_PROFILES",
            'srfNo': this.srfNo
        };
        this.httpProvider.http
            .commonService({ url: url, data: data, zenRich: true })
            .subscribe(function (res) {
            //console.log(res)
            if (res.details.requestData != null) {
                _this.loadedData = res.details.requestData;
                _this.mainData = _this.mainData.concat(_this.loadedData);
            }
            if (_this.infiniteScroll) {
                _this.infiniteScroll.complete();
                _this.infiniteScroll = '';
            }
            _this.utility.updateLoader(false);
        }, function (error) {
            //console.log(error);
            _this.utility.updateLoader(false);
        });
    };
    ZenrichProfilePage.prototype.loadProfiles = function (infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        this.start = this.end;
        this.end = this.end + 10;
        this.getZenrichData();
    };
    ZenrichProfilePage.prototype.createNewProfile = function () {
        this.navCtrl.push("ReferralDetailsPage", { 'candidateProfileId': 0, 'srfNo': this.srfNo, "createNew": false });
    };
    ZenrichProfilePage.prototype.goToRefDetails = function (refId, data) {
        if (!data.isUserApplied) {
            this.navCtrl.push("ReferralDetailsPage", { 'candidateProfileId': refId, 'srfNo': this.srfNo, "createNew": false, 'isCominFromProfile': true });
        }
    };
    ZenrichProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-zenrich-profile',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zenrich-profile\zenrich-profile.html"*/'<!--\n  Generated template for the WowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="wow_content">\n  \n  <!-- <div class="create-new" (click)="createNewProfile()"> </div> -->\n  <div class="opening-card new" (click)="createNewProfile()">\n\n    <div class="job-wrapper">\n      <div class="job-icon">\n        <img class="newprof" src="assets/imgs/newProfile.svg">\n      </div>\n      <div class="job-info">\n        <div class="skills">New</div>\n      </div>\n\n    </div>\n\n  </div>\n  <div class="saved-wrapper">\n    <div class="ref-title">\n      <img class="newprof" src="assets/imgs/saved-before.svg">\n      <span>Saved Profile</span>\n    </div>\n  <div class="opening-card"  [ngClass]="{\'graybg\':item.isUserApplied}" *ngFor="let item of mainData">\n\n    <div class="job-wrapper" (click)="goToRefDetails(item.candidateProfileId, item)">\n      <div class="job-icon">\n        <img src="assets/imgs/Person.png" />\n      </div>\n      <div class="job-info">\n        <!-- <div class="job-title">{{item.jobTitle}}</div> -->\n        <div class="skills">{{item.candidateName}} \n          <span *ngIf="item.isUserApplied" class="already-applied">Already Applied</span>\n        </div>\n        <!-- <div class="job-location info">Jobs Matche : {{item.jobMatch}}</div> -->\n      </div>\n\n    </div>\n\n  </div>\n</div>\n  <ion-infinite-scroll (ionInfinite)="loadProfiles($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zenrich-profile\zenrich-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], ZenrichProfilePage);
    return ZenrichProfilePage;
}());

//# sourceMappingURL=zenrich-profile.js.map

/***/ })

});
//# sourceMappingURL=42.js.map