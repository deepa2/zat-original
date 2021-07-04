webpackJsonp([55],{

/***/ 1384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZendeavorAssociateListForConsultationPageModule", function() { return ZendeavorAssociateListForConsultationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zendeavor_associate_list_for_consultation__ = __webpack_require__(1806);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ZendeavorAssociateListForConsultationPageModule = /** @class */ (function () {
    function ZendeavorAssociateListForConsultationPageModule() {
    }
    ZendeavorAssociateListForConsultationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zendeavor_associate_list_for_consultation__["a" /* ZendeavorAssociateListForConsultationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zendeavor_associate_list_for_consultation__["a" /* ZendeavorAssociateListForConsultationPage */]),
            ],
        })
    ], ZendeavorAssociateListForConsultationPageModule);
    return ZendeavorAssociateListForConsultationPageModule;
}());

//# sourceMappingURL=zendeavor-associate-list-for-consultation.module.js.map

/***/ }),

/***/ 1806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZendeavorAssociateListForConsultationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ZendeavorAssociateListForConsultationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZendeavorAssociateListForConsultationPage = /** @class */ (function () {
    function ZendeavorAssociateListForConsultationPage(navCtrl, navParams, httpProvider, popoverCtrl, modalCtrl, utilitiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.utilitiy = utilitiy;
        this.statusModel = 'requested';
        this.url = "consultationList";
        this.requestedList = [];
        this.submittedList = [];
        this.consultationRespList = [];
        this.consultationList = [];
        this.requestedListCount = 0;
        this.submittedListCount = 0;
        this.showNoDataMsg = false;
        this.isReadonly = false;
        this.userID = this.navParams.get('userID') || null;
        this.userRole = this.navParams.get('userRole') || null;
        this.kraType = this.navParams.get('kraType') || null;
    }
    ZendeavorAssociateListForConsultationPage.prototype.ionViewDidLoad = function () {
    };
    ZendeavorAssociateListForConsultationPage.prototype.ionViewWillEnter = function () {
        // this.utilitiy.updateLoader(true)
        this.getConsultationList();
    };
    /**
   * Api call to  retrieve consultation list data
   */
    ZendeavorAssociateListForConsultationPage.prototype.getConsultationList = function () {
        var _this = this;
        this.utilitiy.updateLoader(true);
        var teamListUrl = {
            // zenDeavorURL: this.url
            url: this.url,
            zenDeavorURL: true,
            data: {
                "userId": this.userID,
                "role": this.userRole,
                "processType": this.kraType,
            }
        };
        this.httpProvider.http.commonService(teamListUrl).subscribe(function (res) {
            _this.utilitiy.updateLoader(false);
            if (!_this.utilitiy.isEmptyOrNullOrUndefined(res['details'])) {
                _this.consultationRespList = res['details'];
                _this.submittedList = _this.consultationRespList['submittedList'];
                _this.requestedList = _this.consultationRespList['requestedList'];
                _this.requestedListCount = 0;
                _this.submittedListCount = 0;
                if (_this.statusModel == 'requested')
                    _this.consultationList = _this.requestedList;
                else
                    _this.consultationList = _this.submittedList;
                if (!_this.utilitiy.isEmptyOrNullOrUndefined(_this.requestedList))
                    _this.requestedListCount = _this.requestedList.length;
                if (!_this.utilitiy.isEmptyOrNullOrUndefined(_this.submittedList))
                    _this.submittedListCount = _this.submittedList.length;
            }
        }, function (err) {
            _this.utilitiy.updateLoader(false);
        });
    };
    ZendeavorAssociateListForConsultationPage.prototype.openConsultationDetail = function (userDetails) {
        if (this.statusModel == 'submitted')
            this.isReadonly = true;
        this.navCtrl.push('ZendeavorConsultationRequestDetailPage', {
            userID: userDetails.employeeId,
            userRole: this.userRole,
            kraType: this.kraType,
            main_key: userDetails.main_key,
            isReadonly: this.isReadonly
        });
    };
    ZendeavorAssociateListForConsultationPage.prototype.onSegmentChanged = function (event, segmentName) {
        if (segmentName == 'requested')
            this.consultationList = this.requestedList;
        else
            this.consultationList = this.submittedList;
    };
    ZendeavorAssociateListForConsultationPage.prototype.dateConversion = function (input) {
        var date = __WEBPACK_IMPORTED_MODULE_4_moment__(input).format('D MMM YYYY');
        return date;
    };
    ZendeavorAssociateListForConsultationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-zendeavor-associate-list-for-consultation',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zendeavor-associate-list-for-consultation\zendeavor-associate-list-for-consultation.html"*/'<!--\n  Generated template for the ZendeavorAssociateListForConsultationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Associate List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-segment [(ngModel)]="statusModel" *ngIf="selectedItem !=\'Reviewer\'" (ionChange)="onSegmentChanged($event,statusModel)">\n    <ion-segment-button value="requested" class="custom-segment">Requested: {{requestedListCount || 0}}</ion-segment-button>\n    <ion-segment-button value="submitted" class="custom-segment">Submitted: {{submittedListCount || 0}}</ion-segment-button>\n\n  </ion-segment>\n\n  <div [ngSwitch]="statusModel">\n    <div *ngSwitchCase="statusModel" class="parentDiv">\n\n      <ion-list *ngFor="let consultItem of consultationList" (click)="openConsultationDetail(consultItem)">\n        <ion-card class="infoClass">\n          <div class="divFirst">\n            <ion-item class="padding0 padding-left7">\n              <ion-avatar item-start>\n                <img class="imgCls" [src]="consultItem?.employeeProfilePic">\n                <!-- <img *ngIf="inSelectionMode && submittedItem?.isSelected" class="selectedImg"\n                      src="assets/imgs/ZenDeavour/selected.svg"> -->\n              </ion-avatar>\n\n              <h3 class="empName">{{consultItem?.employeeName}}</h3>\n              <p>{{consultItem?.employeeId}}</p>\n            </ion-item>\n          </div>\n\n          <div class="divSecond">\n            <div class="subDiv">\n              <span class="status font8em">Date</span>\n              <span class="statusColor font8em">{{dateConversion(consultItem?.submissionDate)}}</span>\n            </div>\n          </div>\n        </ion-card>\n\n      </ion-list>\n      <div class="nodata" *ngIf="consultationList?.length == 0 ||consultationList?.length == undefined">No Data Available</div>\n\n    </div>\n\n\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zendeavor-associate-list-for-consultation\zendeavor-associate-list-for-consultation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], ZendeavorAssociateListForConsultationPage);
    return ZendeavorAssociateListForConsultationPage;
}());

//# sourceMappingURL=zendeavor-associate-list-for-consultation.js.map

/***/ })

});
//# sourceMappingURL=55.js.map