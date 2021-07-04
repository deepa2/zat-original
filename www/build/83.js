webpackJsonp([83],{

/***/ 1355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search__ = __webpack_require__(1777);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]),
            ],
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 1777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_services_searchService_searchService__ = __webpack_require__(749);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, store, searchService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
        this.searchService = searchService;
        this.startList = 0;
        this.endList = 15;
        this.searchTerm = '';
        this.searching = false;
        this.pageName = 'search';
        this.recentSearchItems = [];
        this.showOptions = true;
        this._searchListener = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription__["Subscription"]();
        this._searchTextUpdateListener = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription__["Subscription"]();
        this._loaderListener = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription__["Subscription"]();
        this._roleListener = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription__["Subscription"]();
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required);
    }
    SearchPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.inputToFocus.setFocus();
        });
    };
    SearchPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.searchType = this.navParams.get('searchType');
        this.loading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_85" /* getSearchLoading */]);
        this._searchTextUpdateListener = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_87" /* getSearchText */]).subscribe(function (values) {
            _this.recentSearchItems = values;
        }, function (err) {
        });
        this.searchControl.valueChanges.debounceTime(1000).subscribe(function (search) {
            if (!_this.searchControl.hasError('required')) {
                _this.setFilteredItems('get');
            }
            else if (_this.searchControl.hasError('required')) {
                _this.setFilteredItems('reset');
            }
        });
    };
    SearchPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this._roleListener = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_84" /* getRole */]).subscribe(function (res) {
            _this.role = res;
            if (_this.role == 'admin' || _this.role == 'hr') {
                _this.showOptions = true;
            }
            else {
                _this.showOptions = false;
            }
        });
    };
    SearchPage.prototype.setFilteredItems = function (type) {
        var _this = this;
        var url, params;
        if (this.searchType == "query") {
            params = {
                "start": this.startList,
                "end": this.endList,
                "role": this.role,
                "searchText": this.searchTerm,
                "status": "All"
            };
            url = "getQuestionList";
        }
        else {
            params = {
                "start": this.startList,
                "end": this.endList,
                "searchText": this.searchTerm,
            };
            url = "getAllAnnouncements";
        }
        if (type == 'update') {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["_25" /* UpdateSearchAction */](url, params, this.searchType));
        }
        else if (type == "get") {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["_3" /* OverallSearchAction */](url, params, this.searchType));
        }
        else if (type == 'reset') {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["_15" /* ResetSearchAction */]());
        }
        return new Promise(function (resolve) {
            _this._searchListener = _this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_86" /* getSearchState */]).subscribe(function (response) {
                if (response.pending == false && response.loadMore == false && response.pullToRefresh == false) {
                    if (response.data) {
                        _this.items$ = response.data;
                        _this.totalResultCount = _this.items$.length;
                    }
                    resolve();
                }
                // if (response) {
                //   this.items$ = response;
                //   this.itemsLength = response.length;
                //   resolve();
                // }
            }, function (err) {
            });
        });
    };
    SearchPage.prototype.onSearchInput = function (ev) {
        if (ev._value) {
            this.searching = true;
        }
        else {
            this.searching = false;
        }
    };
    SearchPage.prototype.doInfinite = function (infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        if (this.totalResultCount) {
            this.startList = this.endList;
            this.endList = this.startList + 15;
            this.setFilteredItems('update').then(function () {
                infiniteScroll.complete();
            });
        }
        else {
            infiniteScroll.complete();
        }
    };
    SearchPage.prototype.ionViewWillLeave = function () {
        this._searchListener.unsubscribe();
        this._searchTextUpdateListener.unsubscribe();
        this._loaderListener.unsubscribe();
        this._roleListener.unsubscribe();
    };
    SearchPage.prototype.clearRecentSearch = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["_4" /* OverallSearchClear */]());
    };
    SearchPage.prototype.searchRecent = function (value) {
        this.searchTerm = value;
    };
    SearchPage.prototype.gotToListDetail = function (item) {
        if (this.searchType == "query") {
            this.navCtrl.push('DetailPage', {
                'id': item.questionId
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputToFocus'),
        __metadata("design:type", Object)
    ], SearchPage.prototype, "inputToFocus", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\search\search.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-input #inputToFocus [(ngModel)]="searchTerm" placeholder="Search" [formControl]="searchControl"\n      (ionChange)="onSearchInput($event)"></ion-input>\n\n    <!-- <ion-searchbar [formControl]="searchControl" [(ngModel)]="searchTerm" (ionInput)="onSearchInput($event)">\n    </ion-searchbar> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-spinner *ngIf="loading$ | async"></ion-spinner>\n\n  <div *ngIf="!(totalResultCount >= 0) && recentSearchItems.length > 0">\n    <ion-row class="recentSearch">\n      <ion-col class="text-left" col-10>\n        RECENT SEARCHES\n      </ion-col>\n      <ion-col (click)="clearRecentSearch()" class="text-right" col-2>\n        Clear\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-list *ngIf="!(totalResultCount >= 0) && recentSearchItems.length > 0">\n    <ion-item class="searchText" *ngFor="let text of recentSearchItems" (click)="searchRecent(text)">{{text}}</ion-item>\n  </ion-list>\n\n  <div class="status" padding text-center *ngIf="!(loading$ | async) && totalResultCount == 0 ">No results found</div>\n\n  <query-list *ngIf="!(loading$ | async)" [(showOptions)]="showOptions" [type]=\'pageName\'\n    (gotToDetail)="gotToListDetail($event)" [items]="items$">\n  </query-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_7__providers_services_searchService_searchService__["a" /* searchService */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=83.js.map