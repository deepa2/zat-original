webpackJsonp([95],{

/***/ 1345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObDetailsPageModule", function() { return ObDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ob_details__ = __webpack_require__(1765);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ObDetailsPageModule = /** @class */ (function () {
    function ObDetailsPageModule() {
    }
    ObDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ob_details__["a" /* ObDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ob_details__["a" /* ObDetailsPage */]),
            ],
        })
    ], ObDetailsPageModule);
    return ObDetailsPageModule;
}());

//# sourceMappingURL=ob-details.module.js.map

/***/ }),

/***/ 1765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_store__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ObDetailsPage = /** @class */ (function () {
    function ObDetailsPage(navCtrl, navParams, store, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
        this.popoverCtrl = popoverCtrl;
        this.detailTypes = [];
        this._obDetailListner = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["Subscription"]();
        this.selectedFormFields = [];
        this.personalType = {};
        this.educationalType = {};
        this.professionalType = {};
        this.tabArray = [];
        this.url = "getOnboardingStatusDetails";
        this.param = {
            "type": "all"
        };
        this.getData = this.navParams.get('selectedValue');
    }
    ObDetailsPage.prototype.ionViewWillEnter = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__app_store__["_97" /* obDashboardAction */](this.url, this.param));
    };
    ObDetailsPage.prototype.ionViewDidLoad = function () {
        this.obDetail();
        this.selectedTab = this.getData.index;
    };
    ObDetailsPage.prototype.selectTab = function (num) {
        this.selectedTab = num;
        this.getTitle();
    };
    ObDetailsPage.prototype.getTitle = function () {
        var _this = this;
        if (this.detailTypes.length > 0) {
            var selectedItem = this.detailTypes.filter(function (item, i) {
                if (_this.selectedTab == i) {
                    return item;
                }
            });
            if (selectedItem.length > 0) {
                return selectedItem[0]['title'];
            }
        }
    };
    ObDetailsPage.prototype.obDetail = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._obDetailListner = _this.store.select(__WEBPACK_IMPORTED_MODULE_4__app_store__["_73" /* getObDashboardState */]).subscribe(function (response) {
                if (response) {
                    if (response.data) {
                        _this.detailTypes = response.data.onboardingDetails;
                        _this.getTitle();
                    }
                    resolve();
                }
            }, function (err) {
            });
        });
    };
    ObDetailsPage.prototype.goToAddDetails = function (data) {
        if (data) {
            var selectedfield = {
                "title": data.hasOwnProperty('title') ? data.title : '',
                'type': data.type,
                'referenceId': data.referenceId,
                'selectedTab': this.selectedTab,
                'section': 'onboarding',
                'formMessage': data.reasonForRejection,
                'isAvailableForSubmit': data.isAvailableForSubmit
            };
            this.navCtrl.push('ObAddDetailsPage', { 'selectedField': selectedfield });
        }
        else {
            var selectedObj = this.detailTypes[this.selectedTab];
            var selectedfield = {
                "title": 'Add ' + selectedObj.title,
                "type": selectedObj.type,
                "referenceId": 0,
                "mode": "add",
                "addReferenceId": selectedObj.dataList == null ? 0 : selectedObj.dataList[selectedObj.dataList.length - 1].referenceId,
                'selectedTab': this.selectedTab,
                'section': 'onboarding',
                'isAvailableForSubmit': selectedObj.dataList == null ? true : selectedObj.dataList[selectedObj.dataList.length - 1].isAvailableForSubmit
            };
            this.navCtrl.push('ObAddDetailsPage', { 'selectedField': selectedfield });
        }
    };
    ObDetailsPage.prototype.getColor = function (status) {
        if (status.toLowerCase() == 'completed') {
            return 'green';
        }
        else {
            // return '#e9bbbb';
            return '#8264ff';
        }
    };
    ObDetailsPage.prototype.presentOptions = function (myEvent) {
        var popover = this.popoverCtrl.create('PopoverPage', {
            'type': 'obAddDetails'
        });
        popover.present({ ev: myEvent });
    };
    ObDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ob-details',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ob-details\ob-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title class="pageTitile">Add {{getTitle()}} Details</ion-title>   \n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentOptions($event)">    \n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n\n</ion-header>\n \n\n<ion-content>\n\n  <!-- <div class="parent">\n    <div class="child" *ngFor="let tabs of detailTypes;index as i" (click)="selectTab(i)"\n      [class.selected]="selectedTab == i">\n      <strong>{{tabs.title}}</strong>\n      <div class="span-Text" [ngStyle]="{\'color\':getColor(tabs.status)}">{{tabs.status}}</div>\n    </div>\n  </div> -->\n\n  <div *ngFor="let item of detailTypes;index as j">\n\n    <div *ngIf="selectedTab == j">\n      <div *ngFor="let dataListItem of item.dataList">\n        <ion-card (click)="goToAddDetails(dataListItem)">\n          <span class="span-icon">\n            <img src="{{dataListItem.icon}}">\n          </span>\n          <span class="span-text">{{dataListItem.title}}</span>\n          <span class="span-status" [ngStyle]="{\'color\':getColor(dataListItem.status)}">{{dataListItem.status}}</span>\n          <ion-col col-1 text-right class="right-arrow">\n            <ion-icon name="arrow-forward"></ion-icon>\n          </ion-col>\n        </ion-card>\n      </div>\n    </div>\n  </div>\n\n  <ion-fab *ngIf="this.selectedTab!=0" right bottom (click)="goToAddDetails()">\n    <button ion-fab>\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ob-details\ob-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */]])
    ], ObDetailsPage);
    return ObDetailsPage;
}());

//# sourceMappingURL=ob-details.js.map

/***/ })

});
//# sourceMappingURL=95.js.map