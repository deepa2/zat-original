webpackJsonp([91],{

/***/ 1340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsPageModule", function() { return QuestionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questions__ = __webpack_require__(1760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var QuestionsPageModule = /** @class */ (function () {
    function QuestionsPageModule() {
    }
    QuestionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__questions__["a" /* QuestionsPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__questions__["a" /* QuestionsPage */]),
                __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["c" /* StoreModule */].forFeature('app', __WEBPACK_IMPORTED_MODULE_8__store__["_98" /* reducers */], { metaReducers: __WEBPACK_IMPORTED_MODULE_8__store__["_96" /* metaReducers */] }),
                __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["EffectsModule"].forFeature(__WEBPACK_IMPORTED_MODULE_8__store__["_28" /* effects */]),
            ],
        })
    ], QuestionsPageModule);
    return QuestionsPageModule;
}());

//# sourceMappingURL=questions.module.js.map

/***/ }),

/***/ 1760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(83);
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







var QuestionsPage = /** @class */ (function () {
    function QuestionsPage(navCtrl, navParams, store, loadingController, popoverCtrl, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
        this.loadingController = loadingController;
        this.popoverCtrl = popoverCtrl;
        this.dataService = dataService;
        this.startList = 0;
        this.endList = 15;
        this.itemsLength = 0;
        this.currentURL = "getQuestionList";
        this.pageName = 'list';
        this.showOptions = true;
        this.params = {};
        this._listListener = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["Subscription"]();
        this._roleListener = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["Subscription"]();
        this._notificationListener = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["Subscription"]();
        this.unratedQuestion = this.navParams.get('unratedQuestion');
        this.pageTitle = this.navParams.get('pageTitle');
        if (this.pageTitle == "Ask Question") {
            this.pageTitle = "Questions";
        }
        else if (this.pageTitle == undefined || this.pageTitle == null) {
            this.pageTitle = "Questions";
        }
        else if (this.pageTitle == "Ask a Question") {
            this.pageTitle = "Questions";
        }
        this.unratedMessage = this.navParams.get('unratedMessage');
        this.dataService.getData('loginDetails').then(function (loginData) {
            if (loginData.details) {
                _this.userType = loginData.details.userDetails.userType;
            }
        });
    }
    QuestionsPage.prototype.loadQueries = function (type) {
        var _this = this;
        if (this.unratedQuestion && this.role == "associates") {
            this.params = {
                "role": this.role,
                "start": this.startList,
                "end": this.endList,
                "status": "UnRated"
            };
        }
        else {
            this.params = {
                "role": this.role,
                "start": this.startList,
                "end": this.endList,
                "status": this.type
            };
        }
        if (type == 'update') {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["_24" /* UpdateQuestionAction */](this.currentURL, this.params));
        }
        else if (type == "get") {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["K" /* GetQuestionAction */](this.currentURL, this.params));
        }
        else if (type == 'refresh') {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["_11" /* ReloadQuestionAction */](this.currentURL, this.params));
        }
        return new Promise(function (resolve) {
            _this._listListener = _this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_81" /* getQuestionState */]).subscribe(function (response) {
                if (response.pending == false && response.loadMore == false && response.pullToRefresh == false) {
                    if (response.data) {
                        _this.items$ = response.data;
                        _this.totalResultCount = response.totalResultCount;
                        _this.itemsLength = response.data.length;
                    }
                    resolve();
                }
            }, function (err) {
            });
        });
    };
    QuestionsPage.prototype.doInfinite = function (infiniteScroll) {
        this.startList = this.itemsLength;
        this.endList = this.endList + 15;
        this.loadQueries('update').then(function () {
            infiniteScroll.complete();
        });
    };
    QuestionsPage.prototype.presentFilter = function (myEvent) {
        var _this = this;
        var popover = this
            .popoverCtrl
            .create('PopoverPage', { 'type': 'filter', 'value': this.type });
        popover.present({ ev: myEvent });
        popover.onDidDismiss(function (type) {
            if (type) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["_17" /* SetFilter */](type));
                _this.type = type;
                _this.startList = 0;
                _this.endList = 15;
                _this.loadQueries('get').then(function () {
                    _this.content.scrollToTop();
                });
            }
        });
    };
    QuestionsPage.prototype.presentOptions = function (myEvent) {
        var _this = this;
        var popover = this
            .popoverCtrl
            .create('PopoverPage', { 'type': 'options', userType: this.userType });
        popover.present({ ev: myEvent });
        popover.onDidDismiss(function (type) {
            if (type) {
                _this.dataService.saveData('role', type);
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["_13" /* ResetFilter */]());
                _this.selectedFilter = null;
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["_19" /* SetRole */](type));
            }
        });
    };
    // doRefresh(refresher) {
    //   this.startList = 0;
    //   this.loadQueries('refresh').then(() => {
    //     refresher.complete();
    //   });
    // }
    QuestionsPage.prototype.goToPage = function (page) {
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
    QuestionsPage.prototype.gotToListDetail = function (item) {
        this.navCtrl.push('DetailPage', {
            'id': item.questionId
        });
    };
    QuestionsPage.prototype.add = function () {
        this.navCtrl.push('AddPage', { 'type': 'addQuestion', 'questionId': null, 'answerType': null });
    };
    QuestionsPage.prototype.ionViewDidLoad = function () {
        //this.store.dispatch(new fromStore.ResetQuestions());
        var _this = this;
        this.dataService.getData('role').then(function (data) {
            if (data) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["_19" /* SetRole */](data));
            }
            else {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["_19" /* SetRole */]('associates'));
            }
        });
        this.loading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_38" /* getAllQuestionsLoading */]);
    };
    QuestionsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_53" /* getFilter */]).subscribe(function (filter) {
            if (filter) {
                _this.selectedFilter = filter;
            }
        });
        this.dataService.getData('miscData').then(function (res) {
            _this._roleListener = _this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_84" /* getRole */]).subscribe(function (selectedRole) {
                if (selectedRole == 'associate') {
                    if (_this.selectedFilter) {
                        _this.type = _this.selectedFilter;
                    }
                    else {
                        _this.type = res.associatesQuestionStatusList[0].value;
                    }
                }
                else if (selectedRole == 'admin') {
                    if (_this.selectedFilter) {
                        _this.type = _this.selectedFilter;
                    }
                    else {
                        _this.type = res.adminQuestionStatusList[0].value;
                    }
                }
                else if (selectedRole == 'hr') {
                    if (_this.selectedFilter) {
                        _this.type = _this.selectedFilter;
                    }
                    else {
                        _this.type = res.hrQuestionStatusList[0].value;
                    }
                }
                else {
                    if (_this.selectedFilter) {
                        _this.type = _this.selectedFilter;
                    }
                    else {
                        _this.type = res.questionStatusList[0].value;
                    }
                }
                if (selectedRole) {
                    if (selectedRole == 'admin' || selectedRole == 'hr') {
                        _this.showOptions = true;
                        _this.title = '';
                    }
                    else {
                        _this.showOptions = false;
                        _this.title = '';
                    }
                    _this.role = selectedRole;
                    _this.startList = 0;
                    _this.loadQueries('get').then(function () {
                        //this.content.scrollToTop(); 
                    });
                }
                //assign current selected filter type
            });
        });
        this.getNotificationCount();
    };
    QuestionsPage.prototype.getNotificationCount = function () {
        var _this = this;
        this._notificationListener = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_64" /* getNotificationCount */]).subscribe(function (res) {
            _this.notificationCount = res;
        });
    };
    QuestionsPage.prototype.ionViewWillLeave = function () {
        this._listListener.unsubscribe();
        this._roleListener.unsubscribe();
        this._notificationListener.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], QuestionsPage.prototype, "content", void 0);
    QuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\questions\questions.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title class="pageTitile">\n      {{title}} {{type}} {{pageTitle}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToPage(\'SearchPage\')">\n        <img class="headerSearchIcon" src="assets/imgs/Search.svg" />\n      </button>\n      <button class="notification-counter" ion-button icon-only (click)="goToPage(\'NotificationPage\')">\n        <div *ngIf="notificationCount > 0" class="notificationCount">\n          <span class="count">{{notificationCount}}</span>\n          <!-- <span class="count">34</span>\n         -->\n        </div>\n\n        <!-- notification count new -->\n\n        <!-- <div *ngIf="notificationCount > 9 " class="notificationCountRevised">\n          <span>{{notificationCount}}</span>\n        </div>  -->\n\n        <img class="headerIcons" src="assets/imgs/Notification.svg" />\n      </button>\n      <button ion-button icon-only (click)="presentOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-row align-items-center>\n      <ion-col>\n        <div class="queryLength">{{totalResultCount}} Questions</div>\n      </ion-col>\n      <ion-col *ngIf="!unratedQuestion" center text-right>\n        <button class="filterIcon" ion-button icon-end clear small (click)="presentFilter($event)">Filter\n          <ion-icon name="options"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n\n  <ion-spinner *ngIf="loading$ | async"></ion-spinner>\n  <div>\n  <div *ngIf="!(loading$ | async) && unratedQuestion && role == \'associates\'" class="showUnratedMesage">\n      <img class="alert-img" src="assets/imgs/alert.svg" />\n    {{unratedMessage}}</div></div>\n\n  <div text-center class="no-question-msg" *ngIf="!(loading$ | async) && itemsLength == 0 ">No results found</div>\n\n  <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher> -->\n\n  <query-list *ngIf="!(loading$ | async)" [type]=\'pageName\' (gotToDetail)="gotToListDetail($event)"\n    [(showOptions)]="showOptions" [items]="items$">\n  </query-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-fab *ngIf="!showOptions  && !unratedQuestion" right bottom (click)="add()">\n    <button ion-fab>\n      <ion-icon *ngIf="userType!=\'PRE-ONBOARDING\'" name="add"></ion-icon>\n      <ion-icon *ngIf="userType==\'PRE-ONBOARDING\'" name="help"></ion-icon>\n    </button>\n  </ion-fab>\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\questions\questions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* Data */]])
    ], QuestionsPage);
    return QuestionsPage;
}());

//# sourceMappingURL=questions.js.map

/***/ })

});
//# sourceMappingURL=91.js.map