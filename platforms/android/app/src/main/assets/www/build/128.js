webpackJsonp([128],{

/***/ 1395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDaplistPageModule", function() { return MyDaplistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_daplist__ = __webpack_require__(1817);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyDaplistPageModule = /** @class */ (function () {
    function MyDaplistPageModule() {
    }
    MyDaplistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_daplist__["a" /* MyDaplistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_daplist__["a" /* MyDaplistPage */]),
            ],
        })
    ], MyDaplistPageModule);
    return MyDaplistPageModule;
}());

//# sourceMappingURL=my-daplist.module.js.map

/***/ }),

/***/ 1817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDaplistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(4);
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
 * Generated class for the MyDaplistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyDaplistPage = /** @class */ (function () {
    function MyDaplistPage(navCtrl, navParams, utilities, httpProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utilities = utilities;
        this.httpProvider = httpProvider;
        this.dapType = '';
        this.noDataAvailable = false;
        this.role = this.navParams.get('role');
        if (this.navParams.get('dapType')) {
            this.dapType = this.navParams.get('dapType');
        }
    }
    MyDaplistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyDaplistPage');
    };
    MyDaplistPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.utilities.updateLoader(true);
        var param = {
            url: 'getMyDapsList',
            data: {
                userId: '0',
                flowStatus: "",
                learningType: this.dapType
            },
            zenLearn: true
        };
        this.httpProvider.http.commonService(param).subscribe(function (response) {
            console.log(response);
            _this.utilities.updateLoader(false);
            if (response && response.details.responseList) {
                _this.noDataAvailable = false;
                if (!response.details.isMyDapAvailable) {
                    _this.utilities.presentAlert(response.details.message);
                    // this.navCtrl.pop();
                    //this.navCtrl.push("CreateDapPage");
                }
                else {
                    _this.dapData = response.details;
                }
            }
            else {
                _this.noDataAvailable = true;
            }
        }, function (error) {
            _this.utilities.updateLoader(false);
        });
    };
    MyDaplistPage.prototype.viewDap = function (data) {
        console.log(data);
        var selectedDap = {
            role: this.role,
            data: data
        };
        if (data.status == 'Pending Manager Approval' || data.status == 'Manager Rejected' || data.status == 'Not Approved') {
            //this.utilities.presentAlert("Your dap is in Pending Manager Approval");
            this.navCtrl.push("CreateDapPage", { 'dapId': data.dapId, dapStatus: data.status });
        }
        else {
            this.navCtrl.push('DapDetailPage', { 'viewDapDetails': selectedDap });
        }
        // this.navCtrl.push('DapDetailPage', { 'viewDapDetails': data })
    };
    MyDaplistPage.prototype.openCreateDap = function () {
        this.navCtrl.push("CreateDapPage");
    };
    MyDaplistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-daplist',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\my-daplist\my-daplist.html"*/'<!--\n  Generated template for the MyDaplistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>My DAPs</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="dap-list-item-con" *ngFor="let dapDetailedData of dapData?.responseList" (click)="viewDap(dapDetailedData)">\n    <div class="dap-list-item">\n\n    \n    <div class="containerItem-image">\n     \n      <!-- <img [src]="dapDetailedData?.icon"> -->\n    </div>\n    <div class="conatinerItem-list">\n      <ng-container *ngFor="let listData of dapDetailedData?.list">\n        <ion-row *ngIf="listData.key!= \'Manager Comments\'">\n          <ion-col col-6>\n            {{listData?.key}}\n          </ion-col>\n          <ion-col class="value" col-6>\n            {{listData?.value}}\n          </ion-col>\n        </ion-row>\n      </ng-container>\n      \n    </div>\n  </div>\n  <ng-container *ngFor="let listData of dapDetailedData?.list">\n    <div class="not-aaproved" *ngIf="listData.key== \'Manager Comments\' && listData?.value!=null && dapDetailedData.status==\'Not Approved\'">\n      <span class="r-title">Reason for Rejection  : </span>\n      <span class="reason">{{listData?.value}}</span>\n    </div>\n  </ng-container>\n  \n  </div>\n  <div *ngIf="noDataAvailable" class="noDataAvailable">\n      No DAPs created\n  </div>\n  <ion-fab  bottom right (click)="openCreateDap()">\n      <img src="assets/zenLearn-imgs/add-dap.svg" />\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\my-daplist\my-daplist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */]])
    ], MyDaplistPage);
    return MyDaplistPage;
}());

//# sourceMappingURL=my-daplist.js.map

/***/ })

});
//# sourceMappingURL=128.js.map