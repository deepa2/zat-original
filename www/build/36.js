webpackJsonp([36],{

/***/ 1412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTimesheetsPageModule", function() { return MyTimesheetsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_timesheets__ = __webpack_require__(1834);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyTimesheetsPageModule = /** @class */ (function () {
    function MyTimesheetsPageModule() {
    }
    MyTimesheetsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_timesheets__["a" /* MyTimesheetsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_timesheets__["a" /* MyTimesheetsPage */]),
            ],
        })
    ], MyTimesheetsPageModule);
    return MyTimesheetsPageModule;
}());

//# sourceMappingURL=my-timesheets.module.js.map

/***/ }),

/***/ 1834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTimesheetsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(31);
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
 * Generated class for the MyTimesheetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyTimesheetsPage = /** @class */ (function () {
    function MyTimesheetsPage(navCtrl, navParams, httpProvider, utility, dataStorage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.utility = utility;
        this.dataStorage = dataStorage;
        this.myTimesheetData = [];
        this.flag = {
            isPageLoaded: false
        };
        this.type = null;
        this.startDate = navParams.get("startDate");
        this.endDate = navParams.get("endDate");
        // this.projectName = navParams.get("projectName");
        this.projectId = navParams.get("projectId");
        this.projectIds = navParams.get("projectIds");
        this.status = navParams.get("status");
        this.type = this.navParams.get('type');
        this.resolve = this.navParams.get('resolve');
        var dataList = this.navParams.get('dataList');
        if (this.type == 'chat-bot' && dataList) {
            this.myTimesheetData = dataList;
        }
        else {
            this.getMyTimesheets();
        }
    }
    MyTimesheetsPage.prototype.ionViewDidLoad = function () {
    };
    MyTimesheetsPage.prototype.getMyTimesheets = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var statusArr = [];
        if (this.status == "all") {
            statusArr = ["-1", "1", "2", "3"];
        }
        else {
            statusArr = [this.status];
        }
        var params = {
            "startDate": this.startDate,
            "endDate": this.endDate,
            "projectId": this.projectId,
            "approvalStatusId": statusArr
        };
        this.httpProvider.http.zentsCommonService({ url: "v1/mytimesheets", data: params, dashboard: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res) {
                _this.flag.isPageLoaded = true;
                _this.myTimesheetData = res.data.timesheetList;
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    MyTimesheetsPage.prototype.emailTimeshets = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var statusArr = [];
        if (this.status == "all") {
            statusArr = ["-1", "1", "2", "3"];
        }
        else {
            statusArr = [this.status];
        }
        var params = {
            "startDate": this.startDate,
            "endDate": this.endDate,
            "selectedProjectIDs": this.projectIds,
            "selectedapprovalStatus": statusArr
        };
        this.httpProvider.http.zentsCommonService({ url: "consignDocuments", data: params, timeentry: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res) {
                _this.utility.showToast("Timesheet report has been sent to your zensar email.");
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    // getApproverStatusType(status: any) {
    //   return {
    //     'approval-statustype-saved': status == 0 ? true : false,
    //     'approval-statustype-approved': status == 1 ? true : false,
    //     'approval-statustype-submited': status == 2 ? true : false,
    //     'approval-statustype-rejected': status == 3 ? true : false
    //   }
    // }
    MyTimesheetsPage.prototype.getTimesheetTypeIcon = function (status) {
        // -1 - saved
        // 1 - approved
        // 2 - submited
        // 3 - rejected
        // switch (status) {
        //   case '0': return 'assets/zents-imgs/blue.svg';
        //   case '1': return 'assets/zents-imgs/green.svg';
        //   case '2': return 'assets/zents-imgs/orange.svg';
        //   case '3': return 'assets/zents-imgs/red.svg';
        //   default: return 'assets/zents-imgs/blue.svg';
        // }
        switch (status) {
            case '-1': return 'assets/zents-imgs/ts-saved-icon.svg';
            case '1': return 'assets/zents-imgs/ts-approved-icon.svg';
            case '2': return 'assets/zents-imgs/ts-submitted-icon.svg';
            case '3': return 'assets/zents-imgs/ts-rejected-icon.svg';
            default: return 'assets/zents-imgs/ts-saved-icon.svg';
        }
    };
    MyTimesheetsPage.prototype.getApproverStatusBoxType = function (status) {
        // -1 - saved
        // 1 - approved
        // 2 - submited
        // 3 - rejected
        return {
            'statustype-box-saved': status == -1 ? true : false,
            'statustype-box-approved': status == 1 ? true : false,
            'statustype-box-submited': status == 2 ? true : false,
            'statustype-box-rejected': status == 3 ? true : false,
        };
    };
    MyTimesheetsPage.prototype.getDataSource = function () {
        return this.myTimesheetData;
    };
    MyTimesheetsPage.prototype.isAnyRecord = function () {
        if (this.myTimesheetData) {
            if (this.myTimesheetData.length > 0) {
                return true;
            }
        }
        return false;
    };
    //dummy logout for ZenTs
    MyTimesheetsPage.prototype.logout = function () {
        this.dataStorage.clearData();
        this.navCtrl.setRoot('BackdoorEntryPage');
    };
    //Confirm save 
    MyTimesheetsPage.prototype.showConfirmAlert = function () {
        var _this = this;
        var alert = this.utility.presentConfirmation('Are you sure you want to email timesheets ?', '');
        alert.then(function (res) {
            _this.emailTimeshets();
        });
    };
    MyTimesheetsPage.prototype.ionViewWillLeave = function () {
        if (this.resolve) {
            this.resolve();
        }
    };
    MyTimesheetsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-timesheets',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\dashboard\my-timesheets\my-timesheets.html"*/'<!--\n  Generated template for the MyTimesheetsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="ts-header">\n\n  <ion-navbar>\n    <ion-title>My Timesheets</ion-title>\n    <ion-buttons end *ngIf="type == \'myTimesheet\'">\n      <button *ngIf="myTimesheetData.length != 0" ion-button icon-only clear style="color: white" (click)="showConfirmAlert()">\n        <ion-icon name="mail"></ion-icon>\n      </button>\n\n      <!-- <button *ngIf="myTimesheetData.length != 0" (click)="showConfirmAlert()" shape="round" class="btn-email-timesheet"\n        slot="end"><ion-icon name="mail"></ion-icon>\n      </button> -->\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf="type == \'myTimesheet\'">\n    <ion-list>\n      <div *ngFor="let item of myTimesheetData" class="virtualItemsParent">\n        <div class="parent-div card-shadow applied-hours">\n          <div class="first-block">\n            <div class="image" [ngClass]="getApproverStatusBoxType(item.approvalStatus)">\n              <img [src]="getTimesheetTypeIcon(item.approvalStatus)" />\n            </div>\n            <div class="text-block">\n              <span class="taskname">{{item?.taskName}}</span>\n              <div class="text">\n                <span class="title">Project:</span>\n                <span class="name">{{item?.projectName}}</span>\n              </div>\n              <div class="text">\n                <span class="title">Date:</span>\n                <span class="name">{{item?.taskUpdateDateDB}}</span>\n              </div>\n              <div class="text" *ngIf="item.milestoneName != undefined && item.milestoneName != null && item.milestoneName != 0 && item.milestoneName != \'\'">\n                <span class="title">Milestone:</span>\n                <span class="name">{{item?.milestoneName}}</span>\n              </div>\n            </div>\n          </div>\n          <ion-grid>\n            <ion-row>\n              <ion-col class="border width50">\n                <span>Efforts:</span>\n                <span class="value">{{item.viewEfforts}}</span>\n              </ion-col>\n              <ion-col class="width50">\n                <span>Billability:</span>\n                <span class="value">{{item.billablityFlag == \'YES\' ?\n                  \'Billable\' : \'Non-Billable\' }}</span>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n      </div>\n    </ion-list>\n\n    <div *ngIf="!isAnyRecord() && flag?.isPageLoaded" class="noRecords">\n      <p>No records to show.</p>\n    </div>\n  </div>\n\n  <div *ngIf="type === \'chat-bot\'">\n    <ion-list class="zeno-myTimesheet">\n      <div *ngFor="let item of myTimesheetData" class="virtualItemsParent">\n        <div class="parent-div card-shadow applied-hours">\n          <div class="first-block">\n            <div class="image" [ngClass]="getApproverStatusBoxType(item.approvalStatusId)">\n              <img [src]="getTimesheetTypeIcon(item.approvalStatusId)" />\n            </div>\n            <div class="text-block">\n              <span class="taskname">{{item?.taskName}}</span>\n              <div class="text">\n                <span class="title">Project:</span>\n                <span class="name">{{item?.projectName}}</span>\n              </div>\n              <div class="text">\n                <span class="title">Date:</span>\n                <span class="name">{{item?.taskUpdateDate}}</span>\n              </div>\n              <div class="text" *ngIf="item.milestoneName != undefined && item.milestoneName != null && item.milestoneName != 0 && item.milestoneName != \'\'">\n                <span class="title">Milestone:</span>\n                <span class="name">{{item?.milestoneName}}</span>\n              </div>\n            </div>\n          </div>\n          <ion-grid>\n            <ion-row>\n              <ion-col class="border width50">\n                <span>Efforts:</span>\n                <span class="value">{{item?.totalEfforts.split(\'.\')[0]}} Hrs {{item?.totalEfforts.split(\'.\')[1]}} mins</span>\n              </ion-col>\n              <ion-col class="width50">\n                <span>Billability:</span>\n                <span class="value">{{item?.billablityFlag}}</span>\n              </ion-col>\n            </ion-row>\n            <ion-row class="comments-row" *ngIf="item?.comments">\n              <ion-col text-left class="comments">\n                <span>Comments:</span>\n                <span class="value">{{item?.comments}}</span>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n      </div>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\dashboard\my-timesheets\my-timesheets.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* Data */]])
    ], MyTimesheetsPage);
    return MyTimesheetsPage;
}());

//# sourceMappingURL=my-timesheets.js.map

/***/ })

});
//# sourceMappingURL=36.js.map