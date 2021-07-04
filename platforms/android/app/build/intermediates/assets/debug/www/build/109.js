webpackJsonp([109],{

/***/ 1322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentDetailsPageModule", function() { return DocumentDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__document_details__ = __webpack_require__(1742);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DocumentDetailsPageModule = /** @class */ (function () {
    function DocumentDetailsPageModule() {
    }
    DocumentDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__document_details__["a" /* DocumentDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__document_details__["a" /* DocumentDetailsPage */]),
            ],
        })
    ], DocumentDetailsPageModule);
    return DocumentDetailsPageModule;
}());

//# sourceMappingURL=document-details.module.js.map

/***/ }),

/***/ 1742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_download_download__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DocumentDetailsPage = /** @class */ (function () {
    function DocumentDetailsPage(navCtrl, navParams, store, utils, download, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
        this.utils = utils;
        this.download = download;
        this.popoverCtrl = popoverCtrl;
        this.url = "documentDashboard";
        this.type = [];
        this._documentDataListner = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["Subscription"]();
        this.personalDocs = [];
        this.educationaldocs = [];
        this.professionalDocs = [];
        this.items = [];
        this.selectedIndex = this.navParams.get("docIndex");
    }
    DocumentDetailsPage.prototype.ionViewDidLoad = function () {
        this.getDocumentData();
    };
    DocumentDetailsPage.prototype.getDocumentData = function () {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__app_store__["_48" /* getDocumentDetailsAction */](this.url));
        return new Promise(function (resolve) {
            _this._documentDataListner = _this.store.select(__WEBPACK_IMPORTED_MODULE_4__app_store__["_49" /* getDocumentDetailsData */]).subscribe(function (response) {
                if (response) {
                    _this.type = response;
                    /*
                              for (let i = 0; i < this.type.length; i++) {
                                if (this.type[i].type == "Personal") {
                                  this.personalDocs = this.type[i].documentsList;
                                }
                                if (this.type[i].type == "Educational") {
                                  this.educationaldocs = this.type[i].documentsList;
                                }
                                if (this.type[i].type == "Professional") {
                                  this.professionalDocs = this.type[i].documentsList;
                                }
                              } */
                }
            });
        });
    };
    DocumentDetailsPage.prototype.selectTab = function (selectedTab) {
        this.selectedIndex = selectedTab;
    };
    DocumentDetailsPage.prototype.viewDocument = function (item) {
        this.utils.openAsset(item);
    };
    DocumentDetailsPage.prototype.downloadDocument = function (url) {
        this.download.downloadDocument(url);
    };
    DocumentDetailsPage.prototype.presentOptions = function (myEvent) {
        var popover = this.popoverCtrl.create('PopoverPage', {
            'type': 'obDocumentDetails'
        });
        popover.present({ ev: myEvent });
    };
    DocumentDetailsPage.prototype.ionViewWillLeave = function () {
        this._documentDataListner.unsubscribe();
    };
    DocumentDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-document-details',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\document-details\document-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Documents</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="parent">\n    <div class="child" *ngFor="let tabs of type; index as i" (click)="selectTab(i)"\n      [class.selected]="selectedIndex == i">\n      <strong>{{tabs.type}}</strong>\n      <!--   <div class="span-Text" [ngStyle]="{\'color\':getColor(tabs.status)}">{{tabs.status}}</div> -->\n    </div>\n  </div>\n\n  <div *ngFor="let tabs of type; index as j">\n    <div *ngIf="selectedIndex == j">\n      <!-- <ion-card *ngFor="let data of tabs.documentsList">\n        <ion-card-header style="background-color: #feb07d;">\n          {{data.title}}\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list style="margin: 0px;">\n            <ion-item *ngFor="let item of data.documentDetailsList">\n              {{ item.docValue }}\n\n              <button *ngIf="item.docURL" ion-button clear item-end (click)="viewDocument(item.docURL)"><img\n                  src="assets/imgs/new_showPassword.svg" class="downloadIcon" style="height: 20px;width:20px;"></button>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card> -->\n\n      <div *ngFor="let data of tabs.documentsList" class="padding16 ">\n        <div class="titleBg padding16">\n          {{data.title}}\n        </div>\n        <div>\n          <ion-list style="margin: 0px;">\n            <ion-item *ngFor="let item of data.documentDetailsList">\n              {{ item.docValue }}\n\n              <button *ngIf="item.docURL" ion-button clear item-end (click)="viewDocument(item.docURL)"><img\n                  src="assets/imgs/new_showPassword.svg" class="downloadIcon" style="height: 20px;width:20px;"></button>\n            </ion-item>\n          </ion-list>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- \n    <div *ngIf="selectedIndex == 0">\n      <ion-card>\n        <ion-card-content>\n          <ion-list *ngFor="let data of personalDocs">\n            <ion-item *ngFor="let item of data.documentDetailsList">\n              {{ item.docValue }}\n              <button (click)="viewDocument(item.docURL)">Hello</button>\n\n              <button>Hii</button>\n              <div style="border-bottom: 2px solid"></div>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <div *ngIf="selectedIndex == 1">\n      <ion-card *ngFor="let data of educationaldocs">\n        <ion-card-header>\n          {{data.title}}\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list>\n            <ion-item *ngFor="let item of data.documentDetailsList">\n              {{ item.docValue }}\n              <div style="border-bottom: 2px solid"></div>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <div *ngIf="selectedIndex == 2">\n      <ion-card *ngFor="let data of professionalDocs">\n        <ion-card-header>\n          {{data.title}}\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list>\n            <ion-item *ngFor="let item of data.documentDetailsList">\n              {{ item.docValue }}\n              <div style="border-bottom: 2px solid"></div>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div> -->\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\document-details\document-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_5__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_6__providers_download_download__["a" /* Download */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */]])
    ], DocumentDetailsPage);
    return DocumentDetailsPage;
}());

//# sourceMappingURL=document-details.js.map

/***/ })

});
//# sourceMappingURL=109.js.map