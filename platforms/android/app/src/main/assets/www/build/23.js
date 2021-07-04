webpackJsonp([23],{

/***/ 1420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WowPageModule", function() { return WowPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wow__ = __webpack_require__(1842);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_emojione__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WowPageModule = /** @class */ (function () {
    function WowPageModule() {
    }
    WowPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wow__["a" /* WowPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular_emojione__["a" /* EmojiModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wow__["a" /* WowPage */]),
            ],
        })
    ], WowPageModule);
    return WowPageModule;
}());

//# sourceMappingURL=wow.module.js.map

/***/ }),

/***/ 1842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_env__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_zenwen_speak_details_zenwen_speak_details__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_add_comment_modal_add_comment_modal__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
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
 * Generated class for the WowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WowPage = /** @class */ (function () {
    function WowPage(navCtrl, navParams, httpProvider, modalCtrl, utility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.utility = utility;
        this.worldOfWomen = "wallOfFame";
        this.speaksData = [];
        this.wallOfFameData = [];
        this.wallOfFameParams = null;
        this.zenwenSpeakParams = null;
        this.startList = 0;
        this.endList = 10;
        this.infiniteScroll = '';
        this.infiniteListData = [];
        this.imgUrl = __WEBPACK_IMPORTED_MODULE_3__app_env__["Q" /* zenwenImgUrl */];
        this.wallOfFameParams = this.navParams.get('wallOfFameParams');
        this.zenwenSpeakParams = this.navParams.get('zenwenSpeakParams');
        this.tabname = this.navParams.get('tabname');
        this.speakData = this.navParams.get('speakdata');
        if (this.tabname == 'wallOfFame') {
            this.worldOfWomen = "wallOfFame";
        }
        else if (this.tabname == 'zenwenSpeak') {
            this.worldOfWomen = "zenwenSpeak";
            this.openSpeakDetailModal(this.speakData.worldOfWomen);
        }
    }
    WowPage.prototype.ionViewDidLoad = function () {
        this.getZenWENSpeakData();
        this.getWallOfFameData(this.startList, this.endList);
    };
    WowPage.prototype.getZenWENSpeakData = function () {
        var _this = this;
        this.utility.updateLoader(true);
        if (this.zenwenSpeakParams) {
            var url = "mediaDataWorldOfWomen";
            var params = {
                "groupId": this.zenwenSpeakParams.groupId.toString(),
                "folderId": this.zenwenSpeakParams.folderId.toString(),
                "type": "1",
                "start": "-1",
                "end": "-1" //fetch full list
            };
            this.httpProvider.http.zenwenCommonGETService({ url: url, params: params, media: true }).subscribe(function (res) {
                _this.utility.updateLoader(false);
                if (res && res.list) {
                    _this.speaksData = Array.isArray(res.list) ? res.list : _this.speaksData.concat([res.list]);
                }
            });
        }
    };
    //Open speak detail modal
    WowPage.prototype.openSpeakDetailModal = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            var speakModal;
            return __generator(this, function (_a) {
                speakModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_zenwen_speak_details_zenwen_speak_details__["a" /* ZenwenSpeakDetailsComponent */], {
                    speakObj: obj,
                    type: 'speak'
                }, {
                    cssClass: 'zenwenEventModal',
                });
                speakModal.present();
                speakModal.onDidDismiss(function () { });
                return [2 /*return*/];
            });
        });
    };
    WowPage.prototype.getWallOfFameData = function (startValue, endValue) {
        var _this = this;
        if (this.wallOfFameParams) {
            if (this.infiniteListData.length == 0) {
                this.utility.updateLoader(true);
            }
            var url = "mediaDataWorldOfWomen";
            var params = {
                "groupId": this.wallOfFameParams.groupId.toString(),
                "folderId": this.wallOfFameParams.folderId.toString(),
                "type": "2",
                "start": startValue.toString(),
                "end": endValue.toString() //fetch full list
            };
            this.httpProvider.http.zenwenCommonGETService({ url: url, params: params, media: true }).subscribe(function (res) {
                if (res && res.list) {
                    _this.infiniteListData = Array.isArray(res.list) ? res.list : _this.wallOfFameData.concat([res.list]);
                    _this.wallOfFameData = _this.wallOfFameData.concat(_this.infiniteListData);
                    _this.utility.updateLoader(false);
                }
                if (_this.infiniteScroll) {
                    _this.infiniteScroll.complete();
                    _this.infiniteScroll = "";
                }
                else {
                    _this.utility.updateLoader(false);
                }
            });
        }
    };
    //***********function for infinite scroll****************************** 
    WowPage.prototype.loadData = function (infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        this.startList = this.endList;
        this.endList += 10;
        this.getWallOfFameData(this.startList, this.endList);
    };
    WowPage.prototype.performActionOnPost = function (wofObj, type) {
        var _this = this;
        var params = {
            classPK: wofObj.fileEntryId.toString(),
            className: '2',
            action: type == 'like' ? '1' : '2',
        };
        // let formData = new FormData();
        // formData.append("classPK", wofObj.fileEntryId.toString());
        // formData.append("className", "2");
        // formData.append("action", type == 'like' ? '1' : '2')
        // let data = formData;
        var url = "likeResource";
        this.httpProvider.http.zenwenCommonPostService({ url: url, params: params, zenCollaboration: true }).subscribe(function (res) {
            if (res && res.model && res.model.success) {
                _this.wallOfFameData.map(function (obj) {
                    if (wofObj.fileEntryId == obj.fileEntryId) {
                        type == 'like' ? obj.likeCount = res.model.count : obj.disLikeCount = res.model.count;
                        if (wofObj.hasliked == 0) {
                            type == 'like' ? obj.hasliked = 1 : obj.hasliked = -1;
                        }
                        else if (wofObj.hasliked == -1) {
                            type == 'like' ? obj.hasliked = 1 : obj.hasliked = 0;
                            obj.disLikeCount > 0 ? obj.disLikeCount-- : obj.disLikeCount;
                        }
                        else if (wofObj.hasliked == 1) {
                            type == 'like' ? obj.hasliked = 0 : obj.hasliked = -1;
                            obj.likeCount > 0 ? obj.likeCount-- : obj.likeCount;
                        }
                    }
                });
            }
        });
    };
    WowPage.prototype.dateConversion = function (input) {
        var date = __WEBPACK_IMPORTED_MODULE_5_moment__(input).format('D MMM YYYY h:mma');
        return date;
    };
    //Open event detail modal
    WowPage.prototype.openAddCommentModal = function (type, wofObj) {
        return __awaiter(this, void 0, void 0, function () {
            var eventModal;
            var _this = this;
            return __generator(this, function (_a) {
                eventModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_add_comment_modal_add_comment_modal__["a" /* AddCommentModalComponent */], { type: type, wofObj: wofObj }, {
                    cssClass: 'zenwenEventModal zenwenEventcomment'
                });
                eventModal.present();
                eventModal.onDidDismiss(function (res) {
                    if (res) {
                        if (type == 'post') {
                            _this.wallOfFameData.unshift(res);
                        }
                        else if (type == 'comment') {
                            _this.wallOfFameData.map(function (obj) {
                                if (obj.fileEntryId == wofObj.fileEntryId) {
                                    obj.commentCount = wofObj.commentCount + 1;
                                    if (obj.commnetList && !Array.isArray(obj.commnetList) && typeof (obj.commnetList) == 'object') {
                                        var tempArray = [obj.commnetList];
                                        tempArray.unshift(res);
                                        obj.commnetList = tempArray;
                                    }
                                    else if (obj.commnetList && Array.isArray(obj.commnetList)) {
                                        obj.commnetList.unshift(res);
                                    }
                                    else if (!obj.commnetList) {
                                        obj.commnetList = res;
                                    }
                                }
                            });
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    WowPage.prototype.isArray = function (value) {
        return Array.isArray(value);
    };
    WowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wow',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zenwen\wow\wow.html"*/'<!--\n  Generated template for the WowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>World of Women</ion-title>\n    <ion-buttons end *ngIf="worldOfWomen == \'wallOfFame\'">\n      <button ion-button clear (click)="openAddCommentModal(\'post\')">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <div>\n    <ion-segment [(ngModel)]="worldOfWomen">\n      <ion-segment-button value="wallOfFame">\n        Wall of Fame\n      </ion-segment-button>\n      <ion-segment-button value="zenwenSpeak">\n        ZenWen Speak\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n</ion-header>\n\n\n<ion-content class="wow_content">\n  <div [ngSwitch]="worldOfWomen">\n    <div *ngSwitchCase="\'wallOfFame\'">\n      <ion-card *ngFor="let wof of wallOfFameData">\n\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="{{imgUrl + wof?.toUserPortraitUrl}}" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n          </ion-avatar>\n          <h2>To : {{wof?.toUserName}}</h2>\n          <p>From : {{wof?.fromUserName}}</p>\n          <ion-card-content>\n            <p [innerHTML]="wof?.description | emoji"></p>\n          </ion-card-content>\n        </ion-item>\n\n        \n\n        <div class="option">\n          <div class="block" (click)="openAddCommentModal(\'comment\',wof)">\n            <ion-icon name="text"></ion-icon>\n            <div>{{wof?.commentCount}} Comments</div>\n          </div>\n          <div class="block" (click)="performActionOnPost(wof,\'like\')">\n            <ion-icon name="thumbs-up" [ngClass]="{\'like\':wof.hasliked == 1}"></ion-icon>\n            <div>{{wof?.likeCount}} Like</div>\n          </div>\n          <div class="block" (click)="performActionOnPost(wof,\'dislike\')">\n            <ion-icon name="thumbs-down" [ngClass]="{\'like\':wof.hasliked == -1}"></ion-icon>\n            <div>{{wof?.disLikeCount}} Dislike</div>\n          </div>\n        </div>\n\n        <div class="comment-con" *ngIf="wof?.commnetList && isArray(wof.commnetList)">\n          <ion-item class="comment-section">\n            <ion-avatar item-start>\n              <img src="{{imgUrl + wof?.commnetList[0]?.profilePic}}" onerror="this.src=\'assets/imgs/dummy-profile.png\'">\n            </ion-avatar>\n            \n          </ion-item>\n\n          <ion-card-content class="comment-section-card-content">\n            <h2>{{wof?.commnetList[0]?.fullName}}</h2>\n            <p [innerHTML]="wof?.commnetList[0]?.commentText | emoji"></p>\n            <ion-note >\n              {{dateConversion(wof?.commnetList[0]?.postDate)}}\n            </ion-note>\n          </ion-card-content>\n        </div>\n\n        <div class="comment-con" *ngIf="wof?.commnetList && !isArray(wof.commnetList)">\n          <ion-item class="comment-section">\n            <ion-avatar item-start>\n              <img src="{{imgUrl + wof?.commnetList?.profilePic}}" onerror="this.src=\'assets/imgs/dummy-profile.png\'">\n            </ion-avatar>\n          </ion-item>\n          \n          <ion-card-content class="comment-section-card-content">\n            <h2>{{wof?.commnetList?.fullName}}</h2>\n            <p [innerHTML]="wof?.commnetList?.commentText | emoji"></p>\n            <ion-note>\n              {{dateConversion(wof?.commnetList?.postDate)}}\n            </ion-note>\n          </ion-card-content>\n        </div>\n\n\n        <!-- <ion-row>\n          <ion-col>\n            <button ion-button icon-start clear small>\n              <div>\n                <ion-icon name="text"></ion-icon>\n              </div>\n              <div>4 Comments</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button icon-start clear small>\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>12 Likes</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button icon-start clear small>\n              <ion-icon name="thumbs-down"></ion-icon>\n              <div>12 Likes</div>\n            </button>\n          </ion-col>\n          <ion-col align-self-center text-center>\n            <ion-note>\n              11h ago\n            </ion-note>\n          </ion-col>\n        </ion-row> -->\n\n      </ion-card>\n      <ion-infinite-scroll (ionInfinite)="loadData($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n    <div *ngSwitchCase="\'zenwenSpeak\'" class="speaks">\n      <ion-card *ngFor="let data of speaksData" (click)="openSpeakDetailModal(data)">\n        <div class="profile_img">\n          <img src="{{imgUrl + data?.toUserPortraitUrl}}" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n        </div>\n        <div class="profile-info">\n          <h2>{{data?.toUserName}}</h2>\n          <p>{{data?.experience}}</p>\n        </div>\n        \n      </ion-card>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zenwen\wow\wow.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], WowPage);
    return WowPage;
}());

//# sourceMappingURL=wow.js.map

/***/ })

});
//# sourceMappingURL=23.js.map