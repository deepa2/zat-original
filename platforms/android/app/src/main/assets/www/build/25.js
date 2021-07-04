webpackJsonp([25],{

/***/ 1418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafetyZensarPageModule", function() { return SafetyZensarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__safety_zensar__ = __webpack_require__(1840);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SafetyZensarPageModule = /** @class */ (function () {
    function SafetyZensarPageModule() {
    }
    SafetyZensarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__safety_zensar__["a" /* SafetyZensarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__safety_zensar__["a" /* SafetyZensarPage */]),
            ],
        })
    ], SafetyZensarPageModule);
    return SafetyZensarPageModule;
}());

//# sourceMappingURL=safety-zensar.module.js.map

/***/ }),

/***/ 1840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafetyZensarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_zenwen_speak_details_zenwen_speak_details__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the SafetyZensarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SafetyZensarPage = /** @class */ (function () {
    function SafetyZensarPage(navCtrl, navParams, httpProvider, modalCtrl, utility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.utility = utility;
        this.safetyDataList = [];
        this.imageUrlList = [
            {
                'fileEntryId': 137738,
                'imageUrl': 'security',
                'bgImageUrl': 'security-bg'
            },
            {
                'fileEntryId': 137746,
                'imageUrl': 'safe-commuting',
                'bgImageUrl': 'safe-commuting-bg'
            },
            {
                'fileEntryId': 137754,
                'imageUrl': 'afterOfficeHoursStay',
                'bgImageUrl': 'afterOfficeHoursStay-bg'
            },
            {
                'fileEntryId': 137762,
                'imageUrl': 'safety-tips',
                'bgImageUrl': 'safety-tips-bg'
            },
            {
                'fileEntryId': 137788,
                'imageUrl': 'apps-download',
                'bgImageUrl': 'apps-download-bg'
            },
            {
                'fileEntryId': 150207,
                'imageUrl': 'buddy-cop',
                'bgImageUrl': 'buddy-cop-bg'
            }
        ];
    }
    SafetyZensarPage.prototype.ionViewDidLoad = function () {
        this.getSafetyDetails();
    };
    SafetyZensarPage.prototype.getSafetyDetails = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var url = "mediaDataByAssets";
        var params = {
            "end": "-1",
            "start": "-1",
            "groupId": this.navParams.get('groupId').toString(),
            "folderId": this.navParams.get('folderId').toString()
        };
        this.httpProvider.http.zenwenCommonGETService({ url: url, params: params, media: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res && res.list) {
                _this.safetyDataList = res.list;
                if (_this.safetyDataList.length > 0 && _this.imageUrlList) {
                    _this.safetyDataList.map(function (data) {
                        _this.imageUrlList.map(function (urlData) {
                            if (data.fileEntryId == urlData.fileEntryId) {
                                data.imageUrl = urlData.imageUrl;
                                data.bgImageUrl = urlData.bgImageUrl;
                            }
                        });
                    });
                    // //console.log(this.safetyDataList);
                }
            }
        });
    };
    //Open speak detail modal
    SafetyZensarPage.prototype.openSpeakDetailModal = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            var speakModal;
            return __generator(this, function (_a) {
                speakModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_zenwen_speak_details_zenwen_speak_details__["a" /* ZenwenSpeakDetailsComponent */], {
                    safetyObj: obj,
                    type: 'safety'
                }, {
                    cssClass: 'zenwenEventModal',
                });
                speakModal.present();
                speakModal.onDidDismiss(function () { });
                return [2 /*return*/];
            });
        });
    };
    SafetyZensarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-safety-zensar',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zenwen\safety-zensar\safety-zensar.html"*/'<!--\n  Generated template for the SafetyZensarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Safety @ Zensar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card *ngFor="let data of safetyDataList" (click)="openSpeakDetailModal(data)">\n    <ion-row class="card-bg" [ngStyle]="{\'background-image\':\'url(./assets/zenwen-imgs/\' + data?.bgImageUrl + \'.svg)\'}">\n      <ion-col class="safety-icon" col-3>\n        <img src="assets/zenwen-imgs/{{data?.imageUrl}}.svg" />\n      </ion-col>\n      <ion-col col-7>\n        {{data.title}}\n      </ion-col>\n      <ion-col col-2>\n        <ion-icon name="arrow-forward"></ion-icon>\n      </ion-col>\n      <img class="icon-texture" src="assets/zenwen-imgs/safetyZensarBg.svg">\n    </ion-row>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zenwen\safety-zensar\safety-zensar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], SafetyZensarPage);
    return SafetyZensarPage;
}());

//# sourceMappingURL=safety-zensar.js.map

/***/ })

});
//# sourceMappingURL=25.js.map