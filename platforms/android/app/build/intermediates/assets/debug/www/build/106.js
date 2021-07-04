webpackJsonp([106],{

/***/ 1330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq__ = __webpack_require__(1750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FaqPageModule = /** @class */ (function () {
    function FaqPageModule() {
    }
    FaqPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__faq__["a" /* FaqPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__faq__["a" /* FaqPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], FaqPageModule);
    return FaqPageModule;
}());

//# sourceMappingURL=faq.module.js.map

/***/ }),

/***/ 1750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_faq_detail_faq_detail__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_view_controller__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_http__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FaqPage = /** @class */ (function () {
    function FaqPage(viewCtrl, utilities, modalCtrl, navParams, popoverCtrl, httpProvider) {
        this.viewCtrl = viewCtrl;
        this.utilities = utilities;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.httpProvider = httpProvider;
        this.url = 'getDepartmentListFaqs';
        this._faqListener = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["Subscription"]();
        this._faqLoading = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["Subscription"]();
    }
    FaqPage.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getFaqData();
    };
    FaqPage.prototype.ionViewDidLoad = function () {
        // this.loading$ = this.store.select<any>(fromStore.getFAQLoading);
        // this._faqLoading = this.store.select<any>(fromStore.getFAQLoading).subscribe(loading => {
        //   this.utilities.updateLoader(loading);
        // });
        this.pageTitle = this.navParams.get('pageTitle');
        this.paramsFromChatBot = this.navParams.get('paramsFromChatBot');
        if (this.paramsFromChatBot) {
            this.pageTitle = this.paramsFromChatBot.pageTitle;
        }
    };
    FaqPage.prototype.getFaqData = function () {
        // this.store.dispatch(new fromStore.GetFaqAction(this.url));
        var _this = this;
        // return new Promise(resolve => {
        //   this._faqListener = this.store.select<any>(fromStore.getFAQState).subscribe((response: faqModel.faqState) => {
        //     if (response.pending == false) {
        //       this.information = response.data;
        //       resolve();
        //     }
        //   }, err => {
        //   })
        // })
        this.utilities.updateLoader(true);
        var data = {
            url: 'getDepartmentListFaqs',
            data: {},
            miscellaneous: true
        };
        this.httpProvider.http.commonService(data).subscribe(function (response) {
            //console.log(response);
            if (response.details) {
                _this.utilities.updateLoader(false);
                _this.information = response.details;
                if (!_this.utilities.isEmptyOrNullOrUndefined(_this.paramsFromChatBot)) {
                    if (_this.paramsFromChatBot.openModal) {
                        _this.information.forEach(function (item) {
                            if (item.departmentId == _this.paramsFromChatBot.departmentId)
                                _this.openModal(item);
                        });
                    }
                }
            }
        }, function (error) {
            _this.utilities.updateLoader(false);
            //console.log(error)
        });
    };
    FaqPage.prototype.presentOptions = function (myEvent) {
        var popover = this
            .popoverCtrl
            .create('PopoverPage', { 'type': 'others' });
        popover.present({ ev: myEvent });
    };
    FaqPage.prototype.ionViewWillLeave = function () {
        this._faqListener.unsubscribe();
        this._faqLoading.unsubscribe();
    };
    // goToFaqDetails(item: faqModel.Detail) {
    //   this.navCtrl.push('FaqDetailsPage', {
    //     'deptId': item.departmentId,
    //     'pageTitle': item.departmentName
    //   });
    // }
    FaqPage.prototype.openModal = function (item) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_faq_detail_faq_detail__["a" /* FaqDetail */], {
            item: item
        }, {
            // cssClass: 'faq-modal'
            cssClass: 'modalCss',
        });
        modal.present();
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faq',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\faq\faq.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="pageTitile">{{pageTitle}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<!-- <ion-content padding-vertical> -->\n<ion-content class="backgrnd-white">\n  <!-- <ion-spinner *ngIf="loading$ | async"></ion-spinner> -->\n  <ion-list *ngIf="!(loading$ | async)">\n    <!-- <ion-card class="faq-card" *ngFor="let item of information;" no-padding (click)="goToFaqDetails(item)"> -->\n    <ion-item class="faq-card" *ngFor="let item of information;" no-padding (click)="openModal(item)">\n      \n\n\n      <!-- <ion-row>\n        <ion-col no-padding>\n          <img class="cardImage" [src]="item.icon" />\n          <div class="cardHeading">{{item.departmentName}}</div>\n        </ion-col>\n        <ion-col class="arrowImage" col-2 text-right>\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row> -->\n\n      <div class="display-flex padding12 {{item.departmentName}}">\n        <ion-col no-padding>\n          <div class="align-cont-cent">\n            <div class="width25"> <img class="cardImage" [src]="item.icon" /></div>\n            <div class="heading">{{item.departmentName}}</div>\n          </div>\n        </ion-col>\n        <ion-col col-2 text-right>\n          <!-- <ion-icon name="arrow-forward"></ion-icon> -->\n          <div><img class="arrowImage" src="assets/imgs/white-aarow.svg"/>\n          </div>\n        </ion-col>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\faq\faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_view_controller__["a" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_6__providers_http_http__["a" /* HttpProvider */]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ })

});
//# sourceMappingURL=106.js.map