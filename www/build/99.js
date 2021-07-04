webpackJsonp([99],{

/***/ 1342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mentee_list__ = __webpack_require__(1762);
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
                __WEBPACK_IMPORTED_MODULE_2__mentee_list__["a" /* MenteeListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mentee_list__["a" /* MenteeListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], FaqPageModule);
    return FaqPageModule;
}());

//# sourceMappingURL=mentee-list.module.js.map

/***/ }),

/***/ 1762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenteeListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_view_controller__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_mentee_alert_mentee_alert__ = __webpack_require__(783);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MenteeListPage = /** @class */ (function () {
    function MenteeListPage(viewCtrl, utilities, modalCtrl, navCtrl, navParams, popoverCtrl, httpProvider, store) {
        this.viewCtrl = viewCtrl;
        this.utilities = utilities;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.httpProvider = httpProvider;
        this.store = store;
        this.url = 'getDepartmentListFaqs';
        this._faqListener = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["Subscription"]();
        this._faqLoading = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["Subscription"]();
        this.userData = this.navParams.get('userData');
    }
    MenteeListPage.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    };
    MenteeListPage.prototype.ionViewDidLoad = function () {
    };
    MenteeListPage.prototype.ionViewWillEnter = function () {
        this.getMenteeData();
    };
    MenteeListPage.prototype.getMenteeData = function () {
        var _this = this;
        var url = "getMenteeList";
        var data = {};
        this.utilities.updateLoader(true);
        this.httpProvider.http
            .commonService({ url: url, data: data, zenLearn: true })
            .subscribe(function (res) {
            if (!_this.utilities.isEmptyOrNullOrUndefined(res) && !_this.utilities.isEmptyOrNullOrUndefined(res.details)) {
                _this.information = res.details.responseList;
                _this.utilities.updateLoader(false);
            }
        }, function (err) {
            _this.utilities.updateLoader(false);
        });
    };
    MenteeListPage.prototype.openMenteeAlert = function (item) {
        var _this = this;
        if (item.currentStatus == 'Pending Mentor Approval') {
            var modalCtrl = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__components_mentee_alert_mentee_alert__["a" /* MenteeAlertComponent */], { 'menteeItem': item }, {
                cssClass: 'mentee-alert',
                enableBackdropDismiss: true,
                showBackdrop: true,
            });
            modalCtrl.onDidDismiss(function (isAccepted) {
                if (isAccepted) {
                    _this.getMenteeData();
                }
            });
            modalCtrl.present();
        }
        else if (item.currentStatus == "In-progress" || item.currentStatus == 'Request Accepted By Mentor' || item.currentStatus == 'Completed' || item.currentStatus == 'Pending For Manager Review') {
            this.navCtrl.push("PeerLearnigPage", { 'menteeItem': item, 'role': "mentor", "userData": this.userData });
        }
    };
    MenteeListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mentee-list',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\mentee-list\mentee-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="pageTitile">Mentee</ion-title>\n   \n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="mentee-con">\n    <div class="mentee-item" *ngFor="let item of information" (click)="openMenteeAlert(item)">\n      <img class="mentee-pic" [src]="item.profilePic">\n      <div class="mentee-info">\n        <div class="mentee-name">{{item?.menteeName}}</div>\n        <div class="mentee-id">{{item?.menteeid}}<span class="status {{item?.currentStatus}}">{{item?.currentStatus}}</span></div>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\mentee-list\mentee-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_view_controller__["a" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_6__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]])
    ], MenteeListPage);
    return MenteeListPage;
}());

//# sourceMappingURL=mentee-list.js.map

/***/ })

});
//# sourceMappingURL=99.js.map