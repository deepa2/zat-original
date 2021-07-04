webpackJsonp([110],{

/***/ 1321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail__ = __webpack_require__(1543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DetailPageModule = /** @class */ (function () {
    function DetailPageModule() {
    }
    DetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__detail__["a" /* DetailPage */]),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__detail__["a" /* DetailPage */]]
        })
    ], DetailPageModule);
    return DetailPageModule;
}());

//# sourceMappingURL=detail.module.js.map

/***/ }),

/***/ 1543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailPage = /** @class */ (function () {
    function DetailPage(navParams, navCtrl, store, modalCtrl, popoverCtrl, dataService, viewCtrl) {
        var _this = this;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.store = store;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.dataService = dataService;
        this.viewCtrl = viewCtrl;
        this.items = {};
        this.answers$ = [];
        this.currentDate = new Date();
        this.timeline = false;
        this.showOptions = true;
        this.showQueryListOptions = true;
        this.showQueryOption = true;
        this.pageName = 'list';
        this.showFooter = false;
        this._itemListener = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["Subscription"]();
        this._itemDetailsListener = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["Subscription"]();
        this._roleListener = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["Subscription"]();
        this._notificationListener = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["Subscription"]();
        this.dataService.getData('loginDetails').then(function (loginData) {
            if (loginData.details) {
                _this.userType = loginData.details.userDetails.userType;
            }
        });
    }
    DetailPage.prototype.ngOnInit = function () {
        this.answers$ = [];
        this.questionId = this.navParams.get('id');
    };
    DetailPage.prototype.ionViewWillEnter = function () {
        this.getNotificationCount();
    };
    DetailPage.prototype.toggle = function () {
        this.timeline = !this.timeline;
    };
    DetailPage.prototype.getItem = function () {
        var _this = this;
        this._itemListener = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_81" /* getQuestionState */]).subscribe(function (response) {
            if (response) {
                if (response && response.pending == false) {
                    _this.items = response.data.filter(function (item) {
                        return item.questionId == _this.questionId;
                    })[0];
                }
            }
        }, function (err) {
        });
    };
    DetailPage.prototype.getItemDetail = function () {
        var _this = this;
        var currentURL = "getQuestionTrail";
        var params = {
            'questionId': this.questionId,
            'role': this.role
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["J" /* GetQueryDetailAction */](currentURL, params));
        this._itemDetailsListener = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_79" /* getQueryDetailData */]).subscribe(function (response) {
            if (response) {
                _this.answers$ = response.responseList;
                _this.items = response.questionDetails;
            }
        });
        this.loading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_80" /* getQueryDetailLoading */]);
        setTimeout(function () {
            console.log('Scroll Content');
            var footerHeight = document.getElementById('detail-footer').offsetHeight;
            console.log('footerHeight::', footerHeight);
            var contentPadding = document.querySelector('#scroll-custom-height .scroll-content');
            if (footerHeight) {
                contentPadding.setAttribute('style', "padding:" + footerHeight + "px 0px !important");
            }
        }, 500);
    };
    DetailPage.prototype.presentFeedback = function () {
        var _this = this;
        var feedbackModal = this.modalCtrl.create('FeedbackPage', { queryId: this.questionId });
        feedbackModal.onDidDismiss(function (status) {
            if (status) {
                console.log(status);
                var currentIndex = _this.navCtrl.getActive().index - 1;
                _this.navCtrl.remove(currentIndex, 2);
            }
        });
        feedbackModal.present().then(function () {
        });
    };
    DetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._roleListener = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_84" /* getRole */]).subscribe(function (role) {
            _this.role = role;
            _this.showFooter = true;
            if (role == 'admin' || role == 'hr') {
                _this.showOptions = false;
            }
            else {
                _this.showOptions = true;
            }
        });
        this.getItemDetail();
        this.getNotificationCount();
    };
    DetailPage.prototype.getNotificationCount = function () {
        var _this = this;
        this._notificationListener = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_64" /* getNotificationCount */]).subscribe(function (res) {
            _this.notificationCount = res;
        });
    };
    DetailPage.prototype.goToPage = function (page) {
        if (page == 'SearchPage') {
            this.navCtrl.push(page, { 'searchType': 'query' });
        }
        else if (page == 'NotificationPage') {
            this.navCtrl.push(page, { 'notificationType': 'QUESTION' });
        }
        else {
            this.navCtrl.push(page);
        }
    };
    DetailPage.prototype.presentOptions = function (myEvent) {
        var _this = this;
        var popover = this
            .popoverCtrl
            .create('PopoverPage', { 'type': 'others', userType: this.userType });
        popover.present({ ev: myEvent });
        popover.onDidDismiss(function (type) {
            if (type) {
                _this.dataService.saveData('role', type);
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["_19" /* SetRole */](type));
            }
        });
    };
    DetailPage.prototype.tag = function (type) {
        this.navCtrl.push('TagPage', {
            'queryId': this.questionId,
            'groupId': this.items.groupId
        });
    };
    DetailPage.prototype.ionViewWillLeave = function () {
        this._itemDetailsListener.unsubscribe();
        this._roleListener.unsubscribe();
        this._itemListener.unsubscribe();
        this._notificationListener.unsubscribe();
    };
    DetailPage.prototype.addAnswer = function (answerType) {
        this.navCtrl.push('AddPage', { 'type': 'addAnswer', 'questionId': this.questionId, 'answerType': answerType })
            .then(function () {
            // first we find the index of the current view controller:
            //const index = this.viewCtrl.index;
            // then we remove it from the navigation stack
            //this.navCtrl.remove(index);
        });
        ;
    };
    DetailPage.prototype.goToHome = function () {
        this.navCtrl.push('HomePage', {});
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detail',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\detail\detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="pageTitile">\n            Question Details\n        </ion-title>\n        <ion-buttons class="header-btns" end>\n            <button ion-button icon-only (click)="goToPage(\'SearchPage\')">\n        <img class="headerSearchIcon" src="assets/imgs/Search.svg" />\n      </button>\n            <button class="notification-counter" ion-button icon-only (click)="goToPage(\'NotificationPage\')">\n        <div *ngIf="notificationCount > 0 " class="notificationCount">\n          <span class="count">{{notificationCount}}</span>\n        </div>\n        <img class="headerIcons" src="assets/imgs/Notification.svg" />\n      </button>\n            <button ion-button icon-only (click)="presentOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content id="scroll-custom-height">\n    <ion-spinner *ngIf="loading$ | async"></ion-spinner>\n    <div *ngIf="!(loading$ | async)">\n        <div class="margin-top5">\n            <query-item detail="true" [(showOptions)]="showQueryOption" [item]="items"></query-item>\n            <query-list detail="true" [type]=\'pageName\' [(showOptions)]="showQueryListOptions" [items]="answers$">\n            </query-list>\n\n        </div>\n    </div>\n</ion-content>\n\n\n<ion-footer id="detail-footer">\n\n    <ion-row *ngIf="items?.isTransactionOnForAssociate">\n        <ion-col no-padding>\n            <button no-margin ion-button full large color="secondary" (click)="presentFeedback()">Close the Thread</button>\n        </ion-col>\n        <ion-col no-padding>\n            <button no-margin ion-button full large color="secondary" (click)="addAnswer(\'accept\')">Reply to Query</button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="items.isTransactionOnForAdmin">\n        <ion-col no-padding>\n            <button no-margin ion-button full large color="secondary" (click)="tag(\'HR\')">Tag to HR</button>\n        </ion-col>\n        <ion-col no-padding>\n            <button no-margin ion-button full large color="secondary" (click)="addAnswer(\'reject\')">Discard</button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="items.isTransactionOnForHR">\n        <ion-col no-padding>\n            <button no-margin ion-button full large color="secondary" (click)="tag(\'Admin\')">Tag to other HR</button>\n        </ion-col>\n        <ion-col no-padding>\n            <button no-margin ion-button full large color="secondary" (click)="addAnswer(\'accept\')">Reply to Query</button>\n        </ion-col>\n    </ion-row>\n\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\detail\detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* Data */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["H" /* ViewController */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ })

});
//# sourceMappingURL=110.js.map