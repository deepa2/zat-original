webpackJsonp([120],{

/***/ 1312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_taz__ = __webpack_require__(1534);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about_taz__["a" /* AboutTazPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about_taz__["a" /* AboutTazPage */]),
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about-taz.module.js.map

/***/ }),

/***/ 1534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutTazPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_version__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_streaming_media__ = __webpack_require__(757);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AboutTazPage = /** @class */ (function () {
    function AboutTazPage(navParams, navCtrl, appVersion, utility, app, httpProvider, streamingMedia, inappbrowser, events) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.appVersion = appVersion;
        this.utility = utility;
        this.app = app;
        this.httpProvider = httpProvider;
        this.streamingMedia = streamingMedia;
        this.inappbrowser = inappbrowser;
        this.events = events;
        // private url: string = "getHTMLParagraph";
        this.appName = "";
        this.versionNumber = "";
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'yes',
            shouldPauseOnSuspend: 'yes',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'yes',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
    }
    //on Page load, ionic executes this function and all the initialization methods executes here
    AboutTazPage.prototype.ionViewDidLoad = function () {
        this.getData();
    };
    //get about data from server  
    AboutTazPage.prototype.getData = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var url = "aboutTAZ";
        var data = {};
        this.httpProvider.http
            .commonService({ url: url, data: data, miscellaneous: true })
            .subscribe(function (res) {
            //console.log(res)
            _this.mainData = res.details;
            _this.utility.updateLoader(false);
        });
    };
    AboutTazPage.prototype.goTopage = function (abtItem) {
        if (abtItem.type == 'text') {
            if (abtItem.title == 'About Talent@Zensar') {
                this.app.getRootNav().push('AboutPage', { 'type': 'zenhelp_about' });
            }
            else if (abtItem.title == 'History') {
                this.navCtrl.push("VersionHistoryPage");
            }
        }
        else if (abtItem.type == 'video') {
            this.openVideo(abtItem.multimediaUrl);
        }
        else if (abtItem.type == 'pdf') {
            this.openInappBrowerFile(abtItem.multimediaUrl);
        }
        else if (abtItem.type == 'website') {
            this.utility.openBrowserTab(abtItem.multimediaUrl);
        }
    };
    //Function for open about page
    AboutTazPage.prototype.goToVersionHistory = function () {
        this.navCtrl.push("VersionHistoryPage");
    };
    // function to open video
    AboutTazPage.prototype.openVideo = function (url) {
        console.log("video Called");
        var videoUrl = url;
        var options = {
            successCallback: function () { console.log('Video played'); },
            errorCallback: function (e) { console.log('Error streaming'); },
            orientation: 'portrait',
            shouldAutoClose: true,
            controls: true
        };
        this.streamingMedia.playVideo(videoUrl, options);
    };
    AboutTazPage.prototype.openInappBrowerFile = function (url) {
        var encodedUrl = encodeURI(url);
        var target = "_system";
        var browser = this.inappbrowser.create(encodedUrl, target, this.options);
    };
    AboutTazPage.prototype.isAppAvailable = function (webUrl) {
        var weboptions = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'yes',
            shouldPauseOnSuspend: 'yes',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'yes',
            presentationstyle: 'fullscreen',
            fullscreen: 'yes',
            toolbarposition: 'top',
            toolbarcolor: '#1cb7c9',
            closebuttoncolor: 'white',
        };
        var target = "_self";
        var url = webUrl;
        var browser = this.inappbrowser.create(url, target, weboptions);
    };
    AboutTazPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-about-taz",template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\about-taz\about-taz.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title class="pageTitile">About Talent@Zensar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n  <div class="zenverse-wrapper">\n    <div class="app-info zeneverse-item {{item.title}}" (click)="goTopage(item)" *ngFor="let item of mainData">\n      <img class="abt-zv-icon" [src]="item?.icon">\n      <img class="zeneverse-item-bg" [src]="item?.backgroundImage">\n      <ion-label>{{item?.title}}<span class="label-border"></span></ion-label>\n    </div>\n\n    <!-- <div class="sandeep-vid zeneverse-item" (click)="openVideo()">\n      <img class="abt-zv-icon" src="assets/imgs/ceo-vid.svg">\n      <img class="zeneverse-item-bg" src="assets/imgs/sandeep-vid.svg">\n      <ion-label>ZenVerse Introductory Video<span class="label-border"></span></ion-label>\n    </div>\n\n    <div class="timeline zeneverse-item" (click)="openTimelineVideo()">\n      <img class="abt-zv-icon" src="assets/imgs/timeline.svg">\n      <img class="zeneverse-item-bg" src="assets/imgs/timeline-bg.svg">\n      <ion-label>Timeline Video<span class="label-border"></span></ion-label>\n    </div>\n\n    <div class="history zeneverse-item" (click)="goToVersionHistory()">\n      <img class="abt-zv-icon" src="assets/imgs/version-history.svg">\n      <img class="zeneverse-item-bg" src="assets/imgs/history-bg.svg">\n      <ion-label>Version History<span class="label-border"></span></ion-label>\n    </div>\n\n    <div class="brochure zeneverse-item" (click)="openInappBrowerFile()">\n      <img class="abt-zv-icon" src="assets/imgs/brochure.svg">\n      <img class="zeneverse-item-bg" src="assets/imgs/brochure-bg.svg">\n      <ion-label>Brochure<span class="label-border"></span></ion-label>\n    </div>\n\n    <div class="abt-zensar zeneverse-item" (click)="isAppAvailable()">\n      <img class="abt-zv-icon" src="assets/imgs/abt-zensar.svg">\n      <img class="zeneverse-item-bg" src="assets/imgs/abt-zen-bg.svg">\n      <ion-label>About Zensar<span class="label-border"></span></ion-label> -->\n    <!-- </div> -->\n\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\about-taz\about-taz.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Events */]])
    ], AboutTazPage);
    return AboutTazPage;
}());

//# sourceMappingURL=about-taz.js.map

/***/ })

});
//# sourceMappingURL=120.js.map