webpackJsonp([107],{

/***/ 1329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqDetailsPageModule", function() { return FaqDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_details__ = __webpack_require__(1749);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FaqDetailsPageModule = /** @class */ (function () {
    function FaqDetailsPageModule() {
    }
    FaqDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__faq_details__["a" /* FaqDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__faq_details__["a" /* FaqDetailsPage */]),
            ],
        })
    ], FaqDetailsPageModule);
    return FaqDetailsPageModule;
}());

//# sourceMappingURL=faq-details.module.js.map

/***/ }),

/***/ 1749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FaqDetailsPage = /** @class */ (function () {
    function FaqDetailsPage(navCtrl, navParams, popoverCtrl, httpProvider, store, utilities, loader) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.httpProvider = httpProvider;
        this.store = store;
        this.utilities = utilities;
        this.loader = loader;
        this.url = 'getFaqsData';
        this._faqListener = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["Subscription"]();
    }
    FaqDetailsPage.prototype.ionViewDidLoad = function () {
        this.loading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_52" /* getFAQLoading */]);
        this.deptId = this.navParams.get('deptId');
        this.getFaqData();
        this.pageTitle = this.navParams.get('pageTitle');
    };
    FaqDetailsPage.prototype.getFaqData = function () {
        var _this = this;
        var loader = this.loader.create({
            content: 'Please wait'
        });
        loader.present();
        var data = {
            url: 'getFaqsData',
            data: { "departmentId": this.deptId },
            miscellaneous: true
        };
        this.httpProvider.http.commonService(data).subscribe(function (response) {
            //this.utilities.updateLoader(false);
            if (response.details) {
                _this.information = response.detailData;
                loader.dismiss();
            }
        }, function (error) {
            _this.utilities.updateLoader(false);
            loader.dismiss();
            //console.log(error);
        });
        // this.store.dispatch(new fromStore.GetFaqDetailsAction(this.url, data));
        // return new Promise(resolve => {
        //   this._faqListener = this.store.select<any>(fromStore.getFAQState).subscribe((response: faqModel.faqState) => {
        //     if (response.pending == false) {
        //       this.information = response.detailData;
        //       resolve();
        //     }
        //   }, err => {
        //   })
        // })
    };
    FaqDetailsPage.prototype.presentOptions = function (myEvent) {
        var popover = this
            .popoverCtrl
            .create('PopoverPage', { 'type': 'others' });
        popover.present({ ev: myEvent });
    };
    FaqDetailsPage.prototype.ionViewWillLeave = function () {
        this._faqListener.unsubscribe();
    };
    FaqDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faq-details',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\faq-details\faq-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title class="pageTitile">{{pageTitle}} FAQs</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding-vertical>\n\n  <ion-spinner *ngIf="loading$ | async"></ion-spinner>\n\n  <ion-list *ngIf="!(loading$ | async)">\n    <ion-card class="faqDetailCard" *ngFor="let cardDetail of information">\n      <ion-row>\n        <ion-col class="quesLabel">Question</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col><span class="quesAns">{{cardDetail.count}}{{cardDetail.question}}</span></ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="ansLabel">Answer</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col><span class="quesAns">{{cardDetail.answer}}</span></ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\faq-details\faq-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_6__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* LoadingController */]])
    ], FaqDetailsPage);
    return FaqDetailsPage;
}());

//# sourceMappingURL=faq-details.js.map

/***/ })

});
//# sourceMappingURL=107.js.map