webpackJsonp([26],{

/***/ 1417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationCenterPageModule", function() { return InformationCenterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__information_center__ = __webpack_require__(1839);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InformationCenterPageModule = /** @class */ (function () {
    function InformationCenterPageModule() {
    }
    InformationCenterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__information_center__["a" /* InformationCenterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__information_center__["a" /* InformationCenterPage */]),
            ],
        })
    ], InformationCenterPageModule);
    return InformationCenterPageModule;
}());

//# sourceMappingURL=information-center.module.js.map

/***/ }),

/***/ 1839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationCenterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_env__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InformationCenterPage = /** @class */ (function () {
    function InformationCenterPage(navCtrl, navParams, httpProvider, inappbrowser, utility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.inappbrowser = inappbrowser;
        this.utility = utility;
        this.infoTab = "documents";
        this.lstSubMenu = [];
        this.docList = [];
        this.videoList = [];
        this.imgUrl = null;
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
        this.lstSubMenu = navParams.get('lstSubMenu');
        this.imgUrl = __WEBPACK_IMPORTED_MODULE_3__app_env__["Q" /* zenwenImgUrl */];
    }
    InformationCenterPage.prototype.ionViewDidLoad = function () {
        if (this.lstSubMenu) {
            this.getInfoCenterDetails(this.lstSubMenu[0].folderId);
            this.getInfoCenterDetails(this.lstSubMenu[1].folderId);
            this.getInfoCenterDetails(this.lstSubMenu[2].folderId);
        }
    };
    InformationCenterPage.prototype.getInfoCenterDetails = function (folderId) {
        var _this = this;
        this.utility.updateLoader(true);
        var url = "mediaDataByAssets";
        var params = {
            "start": "-1",
            "end": "-1",
            "folderId": folderId.toString(),
            "groupId": this.navParams.get('groupId').toString()
        };
        this.httpProvider.http.zenwenCommonGETService({ url: url, params: params, media: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res && res.list) {
                if (res.folderName == 'DOC') {
                    _this.docList = res.list;
                }
                if (res.folderName == 'PDF') {
                    _this.docList = _this.docList.concat(res.list);
                }
                if (res.folderName == 'VIDEO') {
                    _this.videoList = res.list;
                }
            }
        });
    };
    InformationCenterPage.prototype.convertFileExtn = function (size) {
        if (isNaN(size))
            size = 0;
        if (size < 1024)
            return size + ' Bytes';
        size /= 1024;
        if (size < 1024)
            return size.toFixed(2) + ' Kb';
        size /= 1024;
        if (size < 1024)
            return size.toFixed(2) + ' Mb';
        size /= 1024;
        if (size < 1024)
            return size.toFixed(2) + ' Gb';
        size /= 1024;
        return size.toFixed(2) + ' Tb';
    };
    InformationCenterPage.prototype.openFile = function (url) {
        var encodedUrl = encodeURI(url);
        var target = "_system";
        var browser = this.inappbrowser.create(this.imgUrl + encodedUrl, target, this.options);
    };
    InformationCenterPage.prototype.encodeURI = function (url) {
        return window.encodeURI(url);
    };
    // Video Play event 
    InformationCenterPage.prototype.VideoEventInit = function () {
        var _video = document.getElementsByTagName("video");
        var _loop_1 = function (i) {
            _video[i].addEventListener("play", function (e) {
                for (var j = 0; j < _video.length; j++) {
                    if (j !== i) {
                        _video[j].pause();
                    }
                }
            }, false);
        };
        for (var i = 0; i < _video.length; i++) {
            _loop_1(i);
        }
    };
    InformationCenterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-information-center',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zenwen\information-center\information-center.html"*/'<!--\n  Generated template for the InformationCenterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Information Center</ion-title>\n  </ion-navbar>\n  <div>\n    <ion-segment [(ngModel)]="infoTab">\n      <ion-segment-button value="documents">\n        Documents\n      </ion-segment-button>\n      <ion-segment-button value="videos">\n        Videos\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n</ion-header>\n\n\n<ion-content class="info_content">\n  <div [ngSwitch]="infoTab">\n    <div *ngSwitchCase="\'documents\'" class="documents">\n      <!-- <ion-card>\n        <div>\n          <img src="assets/zenwen-imgs/doc-img.svg" />\n        </div>\n        <div>\n          <h2>Why Women feel more stress at work</h2>\n          <p>20.57 kb</p>\n        </div>\n      </ion-card> -->\n      <ion-card *ngFor="let doc of docList" (click)="openFile(doc.fileUrl)">\n        <ion-item no-padding>\n          <div class="doc-con">\n            <!-- <ion-avatar item-start> -->\n            <div class="doc-icon"\n              [ngStyle]="{\'background-image\':doc.extension == \'docx\' ? \'url(./assets/zenwen-imgs/doc-img.svg)\' : \'url(./assets/zenwen-imgs/pdf-img.svg)\'}">\n            </div>\n            <!-- </ion-avatar> -->\n            <div class="doc-info">\n              <h2>{{doc.description}}</h2>\n              <p>{{convertFileExtn(doc.fileSize)}}</p>\n            </div>\n          </div>\n        </ion-item>\n      </ion-card>\n    </div>\n    <div *ngSwitchCase="\'videos\'" class="videos">\n      <ion-card *ngFor="let video of videoList">\n        <!-- <img class="bannerImg" src="{{imgUrl + video?.thumbnailUrl}}"  onerror="this.src=\'assets/imgs/dummy-banner.jpeg\'"/>\n        <img class="play-icon" src="assets/zenwen-imgs/play-icon.svg" /> -->\n        <video muted playsinline preload="false" controls controlsList="nodownload" style="width:100%;height:24vh;"\n          poster="{{encodeURI(imgUrl + video.thumbnailUrl)}}" (playing)="VideoEventInit($event)">\n          <source src="{{encodeURI(video.videoUrl)}}" type=\'video/mp4;codecs="avc1.42E01E, mp4a.40.2"\' />\n        </video>\n        <div class="video-title">\n            {{video?.title}}\n        </div>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zenwen\information-center\information-center.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_5__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], InformationCenterPage);
    return InformationCenterPage;
}());

//# sourceMappingURL=information-center.js.map

/***/ })

});
//# sourceMappingURL=26.js.map