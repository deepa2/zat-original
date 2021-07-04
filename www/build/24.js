webpackJsonp([24],{

/***/ 1422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisionPageModule", function() { return VisionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vision__ = __webpack_require__(1844);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VisionPageModule = /** @class */ (function () {
    function VisionPageModule() {
    }
    VisionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vision__["a" /* VisionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vision__["a" /* VisionPage */]),
            ],
        })
    ], VisionPageModule);
    return VisionPageModule;
}());

//# sourceMappingURL=vision.module.js.map

/***/ }),

/***/ 1844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_env__ = __webpack_require__(72);
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
 * Generated class for the VisionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VisionPage = /** @class */ (function () {
    function VisionPage(navCtrl, navParams, httpProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.vision = 'zenwenChapter';
        this.zenwenContent = null;
        this.zenwenChapter = [];
        this.imgUrl = null;
        this.zenwenContent = "The WEN is an empowered Diversity and Inclusion Board run by a cross functional team of women leaders. This team is mentored by Zensar’s Strategy Council on strategic initiatives that involve change management, consensus building and perseverance. One of the key chapter of WEN is to identify and foster women leaders at Zensar by providing the right environment - gender neutral, and allowing women to aspire and to achieve leadership positions. Popular initiatives like the Zensar Daycare, and the Time Off Scheme (TOS) are brain children of the WEN, and given many associates an opportunity to balance dual worlds.";
        this.imgUrl = __WEBPACK_IMPORTED_MODULE_3__app_env__["Q" /* zenwenImgUrl */];
        this.subMenu = this.navParams.get('lstSubMenu');
    }
    VisionPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad VisionPage');
        if (this.subMenu) {
            this.getVisionData(this.subMenu[0].folderId);
            this.getVisionData(this.subMenu[1].folderId);
        }
    };
    VisionPage.prototype.getVisionData = function (folderId) {
        var _this = this;
        var groupId = this.navParams.get('groupId');
        var url = "mediaDataByAssets";
        var params = {
            "start": "-1",
            "end": "-1",
            "folderId": folderId.toString(),
            "groupId": groupId.toString()
        };
        this.httpProvider.http.zenwenCommonGETService({ url: url, params: params, media: true }).subscribe(function (res) {
            //console.log(res);
            if (res && res.folderName == 'ZENWEN CHAPTER') {
                _this.zenwenChapter = [];
                _this.zenwenChapter = Array.isArray(res.list) ? res.list : _this.zenwenChapter.concat([res.list]);
            }
            else if (res && res.folderName == 'ZENWEN VISION') {
                _this.zenwenVision = res.list;
            }
        });
    };
    VisionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-vision',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zenwen\vision\vision.html"*/'<!--\n  Generated template for the VisionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Vision</ion-title>\n  </ion-navbar>\n  <div>\n    <ion-segment [(ngModel)]="vision">\n      <ion-segment-button value="zenwenChapter">\n        ZenWen Chapter\n      </ion-segment-button>\n      <ion-segment-button value="zenwenVision">\n        ZenWen Vision\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n</ion-header>\n\n\n<ion-content class="vision_content">\n  <div [ngSwitch]="vision" class="zenwenChapter">\n    <div *ngSwitchCase="\'zenwenChapter\'">\n      <ion-card padding>\n        <p><strong>What is ZenWen?</strong></p>\n        <read-more [desc]="zenwenContent"></read-more>\n      </ion-card>\n\n      <ion-card padding *ngFor="let chapter of zenwenChapter">\n        <p>{{chapter?.title}}</p>\n        <img src="{{imgUrl + chapter?.thumbnailUrl}}">\n        <div class="emailAddr">write to us @\n          <a href="mailto:{{chapter?.description}}">{{chapter?.description}}</a>\n        </div>\n      </ion-card>\n\n    </div>\n\n    <div *ngSwitchCase="\'zenwenVision\'" class="zenwenVision">\n      <ion-card padding>\n        <img src="{{imgUrl + zenwenVision?.thumbnailUrl}}" />\n      </ion-card>\n      <ion-card>\n        <ion-list>\n          <ion-item>\n            <!-- <ion-avatar item-start>\n              <img src="assets/zenwen-imgs/buddy-cop.svg" />\n            </ion-avatar> -->\n            <p [innerHTML]="zenwenVision?.description"></p>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zenwen\vision\vision.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */]])
    ], VisionPage);
    return VisionPage;
}());

//# sourceMappingURL=vision.js.map

/***/ })

});
//# sourceMappingURL=24.js.map