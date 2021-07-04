webpackJsonp([56],{

/***/ 1383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZencontactsPageModule", function() { return ZencontactsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zencontacts__ = __webpack_require__(1805);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ZencontactsPageModule = /** @class */ (function () {
    function ZencontactsPageModule() {
    }
    ZencontactsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zencontacts__["a" /* ZencontactsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zencontacts__["a" /* ZencontactsPage */]),
            ],
        })
    ], ZencontactsPageModule);
    return ZencontactsPageModule;
}());

//# sourceMappingURL=zencontacts.module.js.map

/***/ }),

/***/ 1805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZencontactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ZencontactsPage = /** @class */ (function () {
    function ZencontactsPage(navCtrl, navParams, popoverCtrl, store) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.store = store;
        this._zenContacts = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["Subscription"]();
        this.searchInput = '';
        this.url = "getEmployeeContactList";
        this.appName = "";
        this.versionNumber = "";
        this.releaseNumber = "";
        this.startList = 0;
        this.endList = 15;
        this.resultPending = false;
        this.noResult = "No results found";
        this.refresher = '';
        this.pageTitle = '';
        this.params = {
            "startList": this.startList,
            "endList": this.endList
        };
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required);
        this.pageTitle = this.navParams.get('pageTitle');
    }
    ZencontactsPage.prototype.ngOnInit = function () {
    };
    ZencontactsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__app_store__["R" /* GetZenContactsResetAction */]());
        this.loading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__app_store__["_94" /* getZenContactsLoading */]);
        this.getData();
        this.searchControl.valueChanges.debounceTime(1000).subscribe(function (search) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__app_store__["R" /* GetZenContactsResetAction */]());
            _this.startList = 0;
            _this.endList = 15;
            _this.getData();
        });
    };
    ZencontactsPage.prototype.ionViewWillLeave = function () {
        this._zenContacts.unsubscribe();
    };
    ZencontactsPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() !== '') {
            // this.getData();
            return this.searchedData;
        }
    };
    ZencontactsPage.prototype.presentOptions = function (myEvent) {
        var popover = this
            .popoverCtrl
            .create('PopoverPage', { 'type': 'others' });
        popover.present({ ev: myEvent });
    };
    ZencontactsPage.prototype.getData = function () {
        var _this = this;
        var params = {
            "start": this.startList,
            "end": this.endList,
            "search": this.searchInput
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__app_store__["Q" /* GetZenContactsAction */](this.url, params));
        this.resultPending = true;
        return new Promise(function (resolve) {
            _this._zenContacts = _this.store
                .select(__WEBPACK_IMPORTED_MODULE_4__app_store__["_95" /* getZenContactsState */])
                .subscribe(function (response) {
                if (!response.pending && response.data) {
                    _this.resultPending = false;
                    _this.searchedData = response.data;
                    _this.totalResultCount = _this.searchedData.length;
                    if (!response.pending && _this.infiniteScroll) {
                        _this.infiniteScroll.complete();
                    }
                    if (!response.pending && _this.refresher) {
                        _this.refresher.complete();
                    }
                    resolve();
                }
            }, function (err) {
            });
        });
    };
    ZencontactsPage.prototype.doInfinite = function (infiniteScroll) {
        if (!this.resultPending) {
            this.startList = this.endList;
            this.endList = this.startList + 15;
            this.getData().then(function () {
                infiniteScroll.complete();
            });
        }
    };
    /* doRefresh(refresher) {
  
      this.refresher = refresher;
  
      this.startList = 0;
      this.endList = 15;
  
      this.params = {
        "start": this.startList,
        "end": this.endList
      };
  
      //  this.searchControl.valueChanges.debounceTime(1000).subscribe(search => {
      this.store.dispatch(new fromStore.GetZenContactsResetAction());
      // this.startList = 0;
      // this.endList = 10;
      // this.getData()
      // this.selectedIndex();
      // });
  
      // this.store.dispatch(new fromStore.GetInternalJobPostingAction(this.internalJobPostingurl, this.params));
    
    } */
    /**
     * Method which redirect to New profile page.
     * sending userId and profileType to the next view.
     * @param event
     * @param employeeId
     */
    ZencontactsPage.prototype.goToProfile = function (event, employeeId) {
        // event.stopPropagation();
        this.navCtrl.push('NewProfilePage', {
            'userId': parseInt(employeeId),
            'profileType': 'zencontacts'
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ZencontactsPage.prototype, "user", void 0);
    ZencontactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-zencontacts',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zencontacts\zencontacts.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title class="pageTitile">{{pageTitle}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-searchbar [(ngModel)]="searchInput" animated placeholder="Search Associate Name/ID"\n      [formControl]="searchControl" (ionInput)="getItems($event)"></ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="spinner-container">\n    <ion-spinner class="loader" *ngIf="loading$ | async"></ion-spinner>\n  </div>\n\n  <div padding text-center *ngIf="!(loading$ | async) && searchedData && searchedData.length == 0">{{noResult}}</div>\n\n  <div class="card-cont" >\n    <ion-card color="light" class="ion-card ion-text-center margin5 " *ngFor="let item of searchedData"\n      (click)="goToProfile($event,item.employeeId)">\n      <div class="right semi-circle"></div>\n\n      <div class="left semi-circle"></div>\n      <ion-card-header class="justify-cont-center padding10">\n        <div class="profile-cont-asso"><img class="profile-asso" [src]="item.profilePicUrl"\n            onerror="this.src=\'assets/imgs/dummy-profile.png\'"></div>\n      </ion-card-header>\n\n      <ion-card-content text-center>\n        <div class="font14">{{item.employeeName}}</div>\n        <div class="id-color font12">{{item.employeeId}}</div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher> -->\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zencontacts\zencontacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]])
    ], ZencontactsPage);
    return ZencontactsPage;
}());

//# sourceMappingURL=zencontacts.js.map

/***/ })

});
//# sourceMappingURL=56.js.map