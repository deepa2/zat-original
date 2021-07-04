webpackJsonp([44],{

/***/ 1403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZenloungePageModule", function() { return ZenloungePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zenlounge__ = __webpack_require__(1825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ZenloungePageModule = /** @class */ (function () {
    function ZenloungePageModule() {
    }
    ZenloungePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zenlounge__["a" /* ZenloungePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zenlounge__["a" /* ZenloungePage */]),
            ],
            providers: []
        })
    ], ZenloungePageModule);
    return ZenloungePageModule;
}());

//# sourceMappingURL=zenlounge.module.js.map

/***/ }),

/***/ 1825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZenloungePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_angular_http_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_image_preview_image_preview__ = __webpack_require__(765);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ZenloungePage = /** @class */ (function () {
    function ZenloungePage(utility, inappbrowser, httpProvider, modalCtrl, httpAngularProvider, navParam, popoverCtrl) {
        var _this = this;
        this.utility = utility;
        this.inappbrowser = inappbrowser;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.httpAngularProvider = httpAngularProvider;
        this.navParam = navParam;
        this.popoverCtrl = popoverCtrl;
        this.startList = 0;
        this.endList = 10;
        this.infiniteScroll = '';
        this.zenloungeData = [];
        this.infiniteListData = [];
        this.zenloungeBaseUrl = "https://zenloungeplus.zensar.com";
        this.pageTitle = '';
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
        // Function Call getting zenlounge data 
        this.getZenloungeData(this.startList, this.endList);
        this.pageTitle = this.navParam.get('pageTitle');
        setTimeout(function () {
            _this.VideoEventInit();
        }, 2000);
    }
    ZenloungePage.prototype.ionViewDidLoad = function () {
        //console.log('View loaded')
    };
    // **************Encode Url**************
    ZenloungePage.prototype.encodeURI = function (url) {
        return window.encodeURI(url);
    };
    //********************** Function for retriving Zenloungeplus post data **********************
    ZenloungePage.prototype.getZenloungeData = function (startList, endList) {
        var _this = this;
        if (this.infiniteListData.length == 0) {
            this.utility.updateLoader(true);
        }
        var params = {
            "start": startList,
            "end": endList,
        };
        var body = {
            url: 'getCommunicationPost', data: params, isZenlounge: true
        };
        this.httpAngularProvider.commonService(body).subscribe(function (res) {
            //console.log(res)
            if (res) {
                _this.infiniteListData = res.details;
                _this.zenloungeData = _this.zenloungeData.concat(_this.infiniteListData);
                // this.zenloungeData = res.details;
                //console.log(this.zenloungeData)
                _this.utility.updateLoader(false);
            }
            if (_this.infiniteScroll) {
                _this.infiniteScroll.complete();
                _this.infiniteScroll = "";
            }
            else {
                _this.utility.updateLoader(false);
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    // ************ Method for Image length calculation ************* 
    ZenloungePage.prototype.calculateLength = function (data) {
        var dataLength = data.filter(function (value) {
            return (value.mimeType == 'image/jpeg' || value.mimeType == 'image/png');
        });
        ////console.log(dataLength)
        return dataLength.length;
    };
    // ************Open Image Modaal**********************
    ZenloungePage.prototype.presentImageModal = function (imgData, index) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_image_preview_image_preview__["a" /* ImagePreviewComponent */], { 'imagesData': imgData, 'currentIndex': index });
        modal.present();
    };
    //***********function for infinite scroll****************************** 
    ZenloungePage.prototype.loadData = function (infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        this.startList = this.endList;
        this.endList += 10;
        this.getZenloungeData(this.startList, this.endList);
    };
    // **********************open pdf in inappbrowser*****************************************
    ZenloungePage.prototype.openPdfFile = function (url) {
        var encodedUrl = encodeURI(url);
        var target = "_system";
        var browser = this.inappbrowser.create(this.zenloungeBaseUrl + encodedUrl, target, this.options);
    };
    ZenloungePage.prototype.presentPopover = function (myEvent) {
        var popover = this
            .popoverCtrl
            .create('PopoverPage', { 'type': 'others' });
        popover.present({ ev: myEvent });
    };
    // Video Play event 
    ZenloungePage.prototype.VideoEventInit = function () {
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
    ZenloungePage.prototype.getPostAttachMnetLength = function (data) {
        var actualImgata = data.filter(function (item) {
            return (item.mimeType == 'image/jpeg' || item.mimeType == 'image/png');
        });
        return actualImgata.length - 5;
    };
    ZenloungePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-zenlounge',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zenlounge\zenlounge.html"*/'<ion-header no-border no-shadow no-bounce>\n  <ion-navbar>\n    <ion-title class="pageTitile">{{pageTitle}}</ion-title>\n    <ion-buttons end>\n      \n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  \n\n  <ion-card class="zencard" *ngFor="let item of zenloungeData">\n    <ion-card-header>\n     \n      <img class="group-icon" [src]="zenloungeBaseUrl + item.groupPictureUrl">\n      <div class="group-info">\n        <ion-label class="group-name">{{item.groupName}}</ion-label>\n        <ion-label class="post-date">{{item.postCreateDate}}</ion-label>\n      </div>\n      \n    </ion-card-header>\n  \n    <ion-card-content>\n      <div class="description">\n        <span class="taged-user" *ngFor="let tagItem of item.taggedGroupOrUserList ">@{{tagItem.taggedUserName}}</span>\n        <read-more class="description" [desc]="item.postDescription"></read-more>\n      </div>\n      \n      <div class="attachments" *ngIf="item.postAttachments">\n        <div class="imgCount{{calculateLength(item.postAttachments)}}" [ngClass]="{\'load-more\': calculateLength(item.postAttachments)>=5}">\n          <ng-container  *ngFor="let imageItem of item.postAttachments; let i=index">\n            \n            <div class="image-item item{{i}}" *ngIf="i < 5 && (imageItem.mimeType ==\'image/jpeg\' || imageItem.mimeType ==\'image/png\')">\n              <img (click)="presentImageModal(item.postAttachments, i)"  src="{{encodeURI(zenloungeBaseUrl + imageItem.postfileUrl)}}">\n              <div *ngIf="i == 4 && item.postAttachments.length >5" class="more-overlay" (click)="presentImageModal(item.postAttachments, i)" > + {{getPostAttachMnetLength(item.postAttachments)}} </div>\n            </div>\n           \n          </ng-container>\n        </div> \n          <div class="videoPdf-con">\n            <ng-container  *ngFor="let videoPdfItem of item.postAttachments; let i=index ">\n              <div class="video-item" *ngIf="videoPdfItem.mimeType==\'video/mp4\' || videoPdfItem.mimeType==\'application/pdf\'">\n               <video *ngIf="videoPdfItem.mimeType==\'video/mp4\'" muted playsinline  preload="false" controls controlsList="nodownload" style="width:100%;height:30vh;" poster="{{encodeURI(zenloungeBaseUrl + videoPdfItem.thumbnail)}}" (playing)="VideoEventInit($event)">\n                \n                  <source src="{{encodeURI(zenloungeBaseUrl + videoPdfItem.postfileUrl)}}" \n                          type=\'video/mp4;codecs="avc1.42E01E, mp4a.40.2"\'/>\n                </video>\n               \n                <img (click)="openPdfFile(videoPdfItem.postfileUrl)" *ngIf="videoPdfItem.mimeType==\'application/pdf\'" src="{{encodeURI(zenloungeBaseUrl + videoPdfItem.thumbnail)}}">\n               \n               \n               \n              </div>\n              \n            </ng-container>\n          </div>\n          <div class="docs-container">\n            <ng-container  *ngFor="let imageItem of item.postAttachments; let i=index ">\n              <div class="doc-item" *ngIf="imageItem.mimeType==\'application/file\'">\n                <label (click)="openPdfFile(imageItem.postfileUrl)" class="document-label" >\n                  <ion-icon name="ios-document-outline" ></ion-icon>\n                  <span class="file-name">Document File{{i}}</span>\n                </label>  \n              </div>\n             \n            </ng-container>\n          </div>\n         \n          \n        </div>\n    </ion-card-content>\n  </ion-card> \n  <ion-infinite-scroll (ionInfinite)="loadData($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zenlounge\zenlounge.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_angular_http_angular__["a" /* HttpAngularProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */]])
    ], ZenloungePage);
    return ZenloungePage;
}());

//# sourceMappingURL=zenlounge.js.map

/***/ })

});
//# sourceMappingURL=44.js.map