webpackJsonp([117],{

/***/ 1312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementRatingsPageModule", function() { return AnnouncementRatingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__announcement_ratings__ = __webpack_require__(1534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AnnouncementRatingsPageModule = /** @class */ (function () {
    function AnnouncementRatingsPageModule() {
    }
    AnnouncementRatingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__announcement_ratings__["a" /* AnnouncementRatingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__announcement_ratings__["a" /* AnnouncementRatingsPage */]),
            ],
        })
    ], AnnouncementRatingsPageModule);
    return AnnouncementRatingsPageModule;
}());

//# sourceMappingURL=announcement-ratings.module.js.map

/***/ }),

/***/ 1534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementRatingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AnnouncementRatingsPage = /** @class */ (function () {
    function AnnouncementRatingsPage(navCtrl, navParams, store) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
        this.url = 'getRatings';
        this.ratingUrl = 'addRating';
        this.start = 0;
        this.end = 10;
        this.infiniteScroll = '';
        this.refresher = '';
        this.comment = '';
        this.brag = false;
        this.payload = {
            "announcementId": this.announcementId,
            "start": this.start,
            "end": this.end,
            "mode": this.mode
        };
        this._listListener = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["Subscription"]();
        this._ratingListener = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["Subscription"]();
    }
    AnnouncementRatingsPage.prototype.ngOnInit = function () {
        this.announcementId = this.navParams.get('announcementId');
        this.mode = this.navParams.get('mode');
        this.payload = {
            "announcementId": this.announcementId,
            "start": this.start,
            "end": this.end,
            "mode": this.mode
        };
        this.loading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_44" /* getCommentsLoading */]);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["o" /* GetCommentsReset */]());
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["n" /* GetComments */](this.url, this.payload));
        this.getComments();
        this.getRatingState();
    };
    AnnouncementRatingsPage.prototype.getComments = function () {
        var _this = this;
        this._listListener = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_45" /* getCommentsState */]).subscribe(function (res) {
            if (res.data) {
                _this.comments$ = res.data;
                _this.itemsLength = res.data.length;
            }
            if (!res.pending && _this.infiniteScroll) {
                _this.infiniteScroll.complete();
            }
            if (!res.pending && _this.refresher) {
                _this.refresher.complete();
            }
        });
    };
    AnnouncementRatingsPage.prototype.getRatingState = function () {
        var _this = this;
        this._ratingListener = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_32" /* getAccouncementState */]).subscribe(function (res) {
            if (res) {
                if (res.ratingData && !res.pending) {
                    //rating added
                    _this.comment = '';
                    _this.start = 0;
                    _this.end = 10;
                    _this.payload = {
                        "announcementId": _this.announcementId,
                        "start": _this.start,
                        "end": _this.end,
                        "mode": _this.mode
                    };
                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["o" /* GetCommentsReset */]());
                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["n" /* GetComments */](_this.url, _this.payload));
                }
            }
        });
    };
    AnnouncementRatingsPage.prototype.formatDate = function (obj) {
        return obj.toString().replace(/\s/g, "T");
    };
    AnnouncementRatingsPage.prototype.doInfinite = function (infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        this.start = this.end;
        this.end = this.start + 10;
        this.payload = {
            "announcementId": this.announcementId,
            "start": this.start,
            "end": this.end,
            "mode": this.mode
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["n" /* GetComments */](this.url, this.payload));
    };
    AnnouncementRatingsPage.prototype.doRefresh = function (refresher) {
        this.refresher = refresher;
        this.start = 0;
        this.end = 10;
        this.payload = {
            "announcementId": this.announcementId,
            "start": this.start,
            "end": this.end,
            "mode": this.mode
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["o" /* GetCommentsReset */]());
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["n" /* GetComments */](this.url, this.payload));
    };
    AnnouncementRatingsPage.prototype.postComment = function () {
        if (this.comment != "") {
            var type = 'comment';
            this.formData = new FormData();
            this.formData.append('mode', type);
            this.formData.append('commentText', this.comment);
            this.formData.append('announcementId', this.announcementId);
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["a" /* AddAnnouncementRating */](this.ratingUrl, this.formData, type));
        }
    };
    AnnouncementRatingsPage.prototype.ngOnDestroy = function () {
        this._listListener.unsubscribe();
        this._ratingListener.unsubscribe();
    };
    AnnouncementRatingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'announcement-ratings',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\announcement-ratings\announcement-ratings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title class="pageTitile">{{mode}}</ion-title>\n    <ion-buttons end>\n      <!-- <ion-col > -->\n        <!-- <button  class="send" (click)="postComment()" ion-button round [disabled]="comment==\'\'"> -->\n          <!-- <ion-icon name="arrow-round-forward" ></ion-icon> -->\n        <!-- <ion-icon name="md-send"></ion-icon>\n        </button> -->\n      <!-- </ion-col> -->\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-spinner *ngIf="loading$ | async"></ion-spinner>\n\n  <!-- <div text-center *ngIf="!(loading$ | async) && itemsLength == 0 ">No results found</div> -->\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n\n    <ion-card no-padding class="comment-card" *ngFor="let item of comments$">\n\n      <ion-item *ngIf="item.user">\n\n        <profile-item [user]="item.user"></profile-item>\n\n      </ion-item>\n\n      <ion-card-content *ngIf="item.commentText">\n\n        <p class="title">{{item.commentText}}</p>\n\n      </ion-card-content>\n      <!-- <div padding-top class="queryInfo">   \n        <ion-row>\n          <ion-col col-5 *ngIf="item.rowAddStp" padding-left>\n            <div class="date">{{formatDate(item.rowAddStp) | date}}</div>\n          </ion-col>\n          <ion-col col-4 *ngIf="item.rowAddStp">\n            <div class="date">{{formatDate(item.rowAddStp) | date:\'shortTime\' }}</div>    \n          </ion-col>\n\n\n        </ion-row>\n      </div> -->\n\n\n      <div class="flex">\n        <div class="flex" *ngIf="item.rowAddStp"  center text-left>\n            <span> <img class="imageSize" src="assets/imgs/Calender.svg" /></span>\n            <div class="date">{{formatDate(item.rowAddStp) | date}}</div>\n        </div>\n            <div class="date"  *ngIf="item.rowAddStp">\n              {{formatDate(item.rowAddStp) | date:\'shortTime\' }}\n            </div>\n    </div>\n  \n\n    </ion-card>\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n\n<ion-footer class="cmt-footer" *ngIf=\'mode == "comment"\'>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <ion-textarea [(ngModel)]="comment" placeholder="Write a comment">\n        </ion-textarea>\n      </ion-col>\n      <ion-col col-2  (click)="postComment()">\n        <button ion-button  [disabled]="comment==\'\'">\n         <!-- <ion-icon name="arrow-round-forward" ></ion-icon>  -->\n        <ion-icon class="send"  name="md-send"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\announcement-ratings\announcement-ratings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]])
    ], AnnouncementRatingsPage);
    return AnnouncementRatingsPage;
}());

//# sourceMappingURL=announcement-ratings.js.map

/***/ })

});
//# sourceMappingURL=117.js.map