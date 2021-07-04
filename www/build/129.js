webpackJsonp([129],{

/***/ 1392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDapPageModule", function() { return MyDapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_dap__ = __webpack_require__(1814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_circle_progress__ = __webpack_require__(732);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MyDapPageModule = /** @class */ (function () {
    function MyDapPageModule() {
    }
    MyDapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_dap__["a" /* MyDapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_dap__["a" /* MyDapPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng_circle_progress__["a" /* NgCircleProgressModule */],
            ],
        })
    ], MyDapPageModule);
    return MyDapPageModule;
}());

//# sourceMappingURL=my-dap.module.js.map

/***/ }),

/***/ 1814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dap_popover_dap_popover__ = __webpack_require__(753);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyDapPage = /** @class */ (function () {
    function MyDapPage(viewCtrl, utilities, modalCtrl, navCtrl, navParams, popoverCtrl, httpProvider) {
        this.viewCtrl = viewCtrl;
        this.utilities = utilities;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.httpProvider = httpProvider;
        this.flowStatus = "Pending,Rejected,Approved";
        this.learningType = "Technical,Behavioural";
        this.dapData = [];
        this.role = navParams.get("role");
    }
    MyDapPage.prototype.ngOnInit = function () {
        //  Retriving Team List data
        //this.getDapListData(this.learningType, this.flowStatus);
    };
    MyDapPage.prototype.ionViewWillEnter = function () {
        this.getDapListData(this.learningType, this.flowStatus);
    };
    // Get My Dap Data
    MyDapPage.prototype.getDapListData = function (learningType, flowStatus) {
        var _this = this;
        this.utilities.updateLoader(true);
        var data = {
            url: 'getMyDapsList',
            data: {
                "userId": 0,
                "flowStatus": flowStatus,
                "learningType": learningType
            },
            zenLearn: true
        };
        this.httpProvider.http.commonService(data).subscribe(function (response) {
            //console.log(response);
            if (response.details) {
                _this.utilities.updateLoader(false);
                if (!response.details.isMyDapAvailable) {
                    _this.utilities.presentAlert(response.details.message).then(function () {
                        /// this.navCtrl.pop();
                    });
                }
                else {
                    _this.dapData = response.details.responseList;
                }
            }
        }, function (error) {
            _this.utilities.updateLoader(false);
            //console.log(error)
        });
    };
    // Filter Popup
    MyDapPage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var filteredData = this.filteredData;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__dap_popover_dap_popover__["a" /* DapPopoverPage */], { data: { filteredData: filteredData, showAllFilters: this.showAllFilters } }, { cssClass: 'zenLearn-popover' });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (data) {
            if (!_this.utilities.isEmptyOrNullOrUndefined(data)) {
                _this.filteredData = data;
                var learningType_1 = [];
                var flowStatus_1 = [];
                data.filterArray.learningType.forEach(function (element) {
                    if (element.checked == true)
                        learningType_1.push(element.value);
                });
                data.filterArray.flowStatus.forEach(function (element) {
                    if (element.checked == true)
                        flowStatus_1.push(element.value);
                });
                learningType_1 = learningType_1.toString();
                flowStatus_1 = flowStatus_1.toString();
                _this.getDapListData(learningType_1, flowStatus_1);
            }
        });
    };
    // Method for redirecting to dap page
    MyDapPage.prototype.goToDapPage = function (dapItem) {
        //console.log(dapItem);
        if (dapItem.status != 'Pending') {
            this.navCtrl.push("DapDetailPage", { 'dapItemInfo': dapItem, 'role': this.role, 'prevPage': 'MyDapPage' });
        }
        else {
            this.navCtrl.push("CreateDapPage", { 'dapId': dapItem.dapId });
        }
    };
    MyDapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-dap',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\my-dap\my-dap.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="pageTitile">My DAP</ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <img src="assets/imgs/dapFilterIcon.svg" />\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="backgrnd-white">\n  <div class="assosiate-list-detail">\n    <div class="Dap-tab">\n      <div class="learming-info">\n        <div class="learning-item" *ngFor="let dapItem of dapData; let i=index " (click)=\'goToDapPage(dapItem)\'>\n          <div class="dap-con">\n            <!-- <img class="tech-icon" src="{{dapItem.icon}}" /> -->\n            <div class="dap-info-con">\n              <div class="dap-info" *ngFor="let listItem of dapItem.list">\n                <img class="dap-icon" src="{{listItem.icon}}">\n                <label class="dap-title">{{listItem.key}}</label>\n                <label class="dap-value">{{listItem.value}}</label>\n              </div>\n            </div>\n            <!-- <div class="required-percent">{{learningItem.sectionPercentage}}</div> -->\n\n          </div>\n\n        </div>\n        <div class="no-data" *ngIf="dapData==null">No Dap available</div>\n\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\my-dap\my-dap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__["a" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */]])
    ], MyDapPage);
    return MyDapPage;
}());

//# sourceMappingURL=my-dap.js.map

/***/ })

});
//# sourceMappingURL=129.js.map