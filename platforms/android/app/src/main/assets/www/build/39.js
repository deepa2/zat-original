webpackJsonp([39],{

/***/ 1437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalDashboardPageModule", function() { return ApprovalDashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__approval_dashboard__ = __webpack_require__(1859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_fusioncharts__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fusioncharts__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fusioncharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fusioncharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fusioncharts_fusioncharts_charts__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fusioncharts_fusioncharts_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_fusioncharts_fusioncharts_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Import angular-fusioncharts

// Import FusionCharts library

// Load FusionCharts Individual Charts

// Use fcRoot function to inject FusionCharts library, and the modules you want to use
__WEBPACK_IMPORTED_MODULE_3_angular_fusioncharts__["a" /* FusionChartsModule */].fcRoot(__WEBPACK_IMPORTED_MODULE_4_fusioncharts__, __WEBPACK_IMPORTED_MODULE_5_fusioncharts_fusioncharts_charts__);

var ApprovalDashboardPageModule = /** @class */ (function () {
    function ApprovalDashboardPageModule() {
    }
    ApprovalDashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__approval_dashboard__["a" /* ApprovalDashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__approval_dashboard__["a" /* ApprovalDashboardPage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular_fusioncharts__["a" /* FusionChartsModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ApprovalDashboardPageModule);
    return ApprovalDashboardPageModule;
}());

//# sourceMappingURL=approval-dashboard.module.js.map

/***/ }),

/***/ 1859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApprovalDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(34);
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
 * Generated class for the ApprovalDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApprovalDashboardPage = /** @class */ (function () {
    function ApprovalDashboardPage(navCtrl, httpProvider, utility, zone, events, decimalPipe) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.httpProvider = httpProvider;
        this.utility = utility;
        this.zone = zone;
        this.events = events;
        this.decimalPipe = decimalPipe;
        // pageTitle: String = "Approval Dashboard";
        // width = 600;
        // height = 400;
        // type = "pie2d";
        // dataFormat: any = "json";
        // dataSource: any = {};
        // data: any = {}
        this.data = {
            selectedTab: "approval-timesheet",
            isApiCalled: false
        };
        this.timesheet_type = "pending";
        this.pre_timesheet_type = "pending";
        this.approvalApprovedCount = 0;
        this.approvalPendingCount = 0;
        this.approvalRejectCount = 0;
        this.preApprovalApprovedCount = 0;
        this.preApprovalPendingCount = 0;
        this.preApprovalRejectCount = 0;
        this.isApprover = "no";
        this.projectAllocationList = []; //approval project list
        this.selectedProject = "all";
        this.selectedBillablity = "ALL";
        this.compareFlag = false;
        this.preApprovalProjectAllocationList = []; //approval project list
        this.preSelectedProject = "all";
        this.preSelectedBillablity = "YES";
        this.preCompareFlag = false;
        this.approvalDataSource = {
            chart: {
                showlegend: "0",
                showpercentvalues: "0",
                legendposition: "bottom",
                showLabel: 0,
                theme: "fusion",
                pieRadius: 75,
                doughnutRadius: 60,
                showLabels: 0,
                showValues: 0,
                defaultcenterlabel: "",
                showBorder: 0,
                bgColor: "#FFFFFF",
                showPlotBorder: false,
                showShadow: false,
                bgAlpha: 100,
                enableSlicing: 0,
                use3DLighting: 0,
                centerLabelFontSize: "14"
            },
            data: []
        };
        this.preApprovalDataSource = {
            chart: {
                showlegend: "0",
                showpercentvalues: "0",
                legendposition: "bottom",
                showLabel: 0,
                theme: "fusion",
                pieRadius: 75,
                doughnutRadius: 60,
                showLabels: 0,
                showValues: 0,
                defaultcenterlabel: "",
                showBorder: 0,
                bgColor: "#FFFFFF",
                showPlotBorder: false,
                showShadow: false,
                bgAlpha: 100,
                enableSlicing: 0,
                use3DLighting: 0,
                centerLabelFontSize: "14"
            },
            data: []
        };
        events.subscribe('dashboard:updated', function (data) {
            // < 0 indicate timesheet has been rejected, update only pending count.
            if (data.approval_approved < 0) {
                _this.approvalRejectCount = _this.approvalRejectCount + 1;
                _this.approvalDashboardData.rejectedTimesheetsCount = _this.approvalRejectCount;
                _this.approvalPendingCount = _this.approvalPendingCount - 1;
                _this.approvalDashboardData.pendingTimesheetsCount = _this.approvalPendingCount;
            }
            else if (data.approval_approved > 0) {
                _this.approvalApprovedCount = _this.approvalApprovedCount + data.approval_approved;
                _this.approvalPendingCount = _this.approvalPendingCount - data.approval_approved;
            }
            else if (data.preapproval_approved < 0) {
                _this.preApprovalPendingCount = _this.preApprovalPendingCount - 1;
                _this.preApprovalRejectCount = _this.preApprovalRejectCount + 1;
            }
            else if (data.preapproval_approved > 0) {
                _this.preApprovalApprovedCount = _this.preApprovalApprovedCount + data.preapproval_approved;
                _this.preApprovalPendingCount = _this.preApprovalPendingCount - data.preapproval_approved;
            }
            if (_this.preApprovalPendingCount <= 0) {
                _this.data.selectedTab = "approval-timesheet";
            }
            _this.getApprovalTSDataSource();
            _this.getPreApprovalTSDataSource();
        });
    }
    ApprovalDashboardPage.prototype.ionViewDidLoad = function () {
        this.getApprovalDashboardData();
    };
    ApprovalDashboardPage.prototype.segmentChanged = function (param) {
    };
    ApprovalDashboardPage.prototype.filter = function () {
    };
    ApprovalDashboardPage.prototype.getApprovalDashboardData = function () {
        var _this = this;
        this.utility.updateLoader(true);
        this.httpProvider.http.zentsCommonService({ url: "getEmployeeDashBoardNew", data: {}, dashboard: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res) {
                _this.approvalDashboardData = res;
                _this.projectAllocationList = res.projectList;
                _this.approvalApprovedCount = res.approvedTimesheetsCount;
                _this.approvalPendingCount = res.pendingTimesheetsCount;
                _this.approvalRejectCount = res.rejectedTimesheetsCount;
                _this.isApprover = res.isApprover;
                _this.tsStartDate = res.monthlyLockDate;
                _this.tsEndDate = res.serverDate;
                _this.tsMinDate = res.timesheetMinDate;
                _this.tsMaxDate = res.timesheetMaxDate;
                _this.getApprovalTSDataSource();
                if (_this.isApprover == 'yes') {
                    _this.getPreApprovalDashboardData();
                }
                else {
                    _this.data.isApiCalled = true;
                }
                if (_this.projectAllocationList.length == 1) {
                    _this.selectedProject = _this.projectAllocationList[0].projectId;
                }
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    ApprovalDashboardPage.prototype.getPreApprovalDashboardData = function () {
        var _this = this;
        this.utility.updateLoader(true);
        this.httpProvider.http.zentsCommonGETService({ url: "preapprovaldashboard", data: {}, overtime: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res) {
                _this.preApprovalDashboardData = res.data;
                _this.preApprovalApprovedCount = _this.preApprovalDashboardData.approvedCount ? _this.preApprovalDashboardData.approvedCount : 0;
                _this.preApprovalPendingCount = _this.preApprovalDashboardData.pendingCount ? _this.preApprovalDashboardData.pendingCount : 0,
                    _this.preApprovalRejectCount = _this.preApprovalDashboardData.rejectedCount ? _this.preApprovalDashboardData.rejectedCount : 0,
                    _this.preTsStartDate = _this.preApprovalDashboardData.startDate;
                _this.preTsEndDate = _this.preApprovalDashboardData.endDate;
                _this.preTsMinDate = _this.preApprovalDashboardData.startDate;
                _this.preTsMaxDate = _this.preApprovalDashboardData.endDate;
                _this.preApprovalProjectAllocationList = _this.preApprovalDashboardData.projects;
                //this has to be uncomment when services are up
                if (_this.preApprovalProjectAllocationList.length == 1) {
                    _this.preSelectedProject = _this.preApprovalProjectAllocationList[0].projectId;
                }
                _this.getPreApprovalTSDataSource();
                _this.data.isApiCalled = true;
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    ApprovalDashboardPage.prototype.getApprovalTSDataSource = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.approvalDataSource.data = [
                {
                    label: "Approved",
                    value: _this.approvalApprovedCount,
                    valuePosition: "Inside",
                    showLabel: false,
                    color: "#42C147",
                },
                {
                    label: "Pending",
                    value: _this.approvalPendingCount,
                    valuePosition: "Inside",
                    showLabel: false,
                    color: "#FFB829",
                },
                {
                    label: "Rejected",
                    value: _this.approvalRejectCount,
                    valuePosition: "Inside",
                    showLabel: false,
                    color: "#F95454",
                }
            ];
            var calPercent = _this.transformDecimal((_this.approvalApprovedCount / (_this.approvalApprovedCount + _this.approvalPendingCount + _this.approvalRejectCount)) * 100);
            _this.approvalDataSource.chart.defaultcenterlabel = calPercent + "%";
        });
    };
    ApprovalDashboardPage.prototype.getPreApprovalTSDataSource = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.preApprovalDataSource.data = [
                {
                    label: "Approved",
                    value: _this.preApprovalApprovedCount,
                    valuePosition: "Inside",
                    showLabel: false,
                    color: "#42C147"
                },
                {
                    label: "Pending",
                    value: _this.preApprovalPendingCount,
                    valuePosition: "Inside",
                    showLabel: false,
                    color: "#FFB829"
                },
                {
                    label: "Rejected",
                    value: _this.preApprovalRejectCount,
                    valuePosition: "Inside",
                    showLabel: false,
                    color: "#F95454",
                }
            ];
            var calPercent = _this.transformDecimal((_this.preApprovalApprovedCount / (_this.preApprovalApprovedCount + _this.preApprovalPendingCount + _this.preApprovalRejectCount)) * 100);
            _this.preApprovalDataSource.chart.defaultcenterlabel = calPercent + "%";
        });
    };
    ApprovalDashboardPage.prototype.ApprovalfilterList = function () {
        if (this.compareFlag) {
            return;
        }
        if (this.timesheet_type == 'approved') {
            this.navCtrl.push('ApprovalTimesheetApprovedPage', {
                "selectedProject": this.selectedProject,
                "startDate": this.tsStartDate,
                "endDate": this.tsEndDate,
                "tsMinDate": this.tsMinDate,
                "tsMaxDate": this.tsMaxDate,
                "selectedCategory": this.selectedBillablity,
                "projectAllocationList": this.projectAllocationList,
                "type": "approval-approved"
            });
        }
        else if (this.timesheet_type == 'pending') {
            this.navCtrl.push('ApprovalTimesheetApprovedPage', {
                "selectedProject": this.selectedProject,
                "startDate": this.tsStartDate,
                "endDate": this.tsEndDate,
                "tsMinDate": this.tsMinDate,
                "tsMaxDate": this.tsMaxDate,
                "selectedCategory": this.selectedBillablity,
                "projectAllocationList": this.projectAllocationList,
                "type": "approval-pending"
            });
        }
        else if (this.timesheet_type == 'rejected') {
            this.navCtrl.push('ApprovalTimesheetApprovedPage', {
                "selectedProject": this.selectedProject,
                "startDate": this.tsStartDate,
                "endDate": this.tsEndDate,
                "tsMinDate": this.tsMinDate,
                "tsMaxDate": this.tsMaxDate,
                "selectedCategory": this.selectedBillablity,
                "projectAllocationList": this.projectAllocationList,
                "type": "approval-rejected"
            });
        }
    };
    ApprovalDashboardPage.prototype.preApprovalFilterList = function () {
        if (this.preCompareFlag) {
            return;
        }
        if (this.pre_timesheet_type == 'approved') {
            this.navCtrl.push('PreApprovalTimesheetPendingPage', {
                "selectedProject": this.preSelectedProject,
                "startDate": this.preTsStartDate,
                "endDate": this.preTsEndDate,
                "tsMinDate": this.preTsMinDate,
                "tsMaxDate": this.preTsMaxDate,
                "selectedCategory": this.preSelectedBillablity,
                "projectAllocationList": this.preApprovalProjectAllocationList,
                "type": "approval-approved"
            });
        }
        else if (this.pre_timesheet_type == 'pending') {
            this.navCtrl.push('PreApprovalTimesheetPendingPage', {
                "selectedProject": this.preSelectedProject,
                "startDate": this.preTsStartDate,
                "endDate": this.preTsEndDate,
                "tsMinDate": this.preTsMinDate,
                "tsMaxDate": this.preTsMaxDate,
                "selectedCategory": this.preSelectedBillablity,
                "projectAllocationList": this.preApprovalProjectAllocationList,
                "type": "approval-pending"
            });
        }
        else if (this.pre_timesheet_type == 'rejected') {
            this.navCtrl.push('PreApprovalTimesheetPendingPage', {
                "selectedProject": this.preSelectedProject,
                "startDate": this.preTsStartDate,
                "endDate": this.preTsEndDate,
                "tsMinDate": this.preTsMinDate,
                "tsMaxDate": this.preTsMaxDate,
                "selectedCategory": this.preSelectedBillablity,
                "projectAllocationList": this.preApprovalProjectAllocationList,
                "type": "approval-rejected"
            });
        }
    };
    ApprovalDashboardPage.prototype.transformDecimal = function (num) {
        return this.decimalPipe.transform(num, '1.0-2');
    };
    ApprovalDashboardPage.prototype.onEndDateSelect = function (e) {
        this.compareFlag = new Date(this.tsEndDate) < new Date(this.tsStartDate);
    };
    ApprovalDashboardPage.prototype.onStartDateSelect = function (e) {
        this.compareFlag = new Date(this.tsStartDate) > new Date(this.tsEndDate);
    };
    ApprovalDashboardPage.prototype.onPreEndDateSelect = function (e) {
        this.preCompareFlag = new Date(this.preTsEndDate) < new Date(this.preTsStartDate);
    };
    ApprovalDashboardPage.prototype.onPreStartDateSelect = function (e) {
        this.preCompareFlag = new Date(this.preTsStartDate) > new Date(this.preTsEndDate);
    };
    ApprovalDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-approval-dashboard',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\dashboard\approval-dashboard\approval-dashboard.html"*/'<!--\n  Generated template for the ApprovalDashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="ts-header">\n\n  <ion-navbar>\n    <ion-title>Timesheet Approval</ion-title>\n\n    <!-- <ion-buttons end>\n      <button ion-button icon-only clear style="color: white" (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-segment *ngIf="data?.isApiCalled && this.isApprover == \'yes\' && preApprovalPendingCount > 0" [(ngModel)]="data.selectedTab"\n    (ionChange)="segmentChanged(data?.selectedTab)">\n    <ion-segment-button value="approval-timesheet">Approval Timesheet</ion-segment-button>\n    <ion-segment-button value="pre-approval-timesheet">Pre-approval Timesheet</ion-segment-button>\n  </ion-segment>\n\n  <div *ngIf="data?.isApiCalled" [ngSwitch]="data?.selectedTab" class="parent">\n\n    <!-- Approval timesshet section -->\n    <div *ngSwitchCase="\'approval-timesheet\'">\n\n      <div class="chart-section-parent">\n        <div class="chart-section">\n          <div class="fusion-charts">\n            <fusioncharts width="100%" height="250" type="doughnut2d" [dataFormat]="json" [dataSource]="approvalDataSource">\n            </fusioncharts>\n          </div>\n\n          <div class="approvalStatus">\n            <div class="rounded-box-parent">\n              <div class="rounded-box">\n                <div class="parent">\n                  <div class="image">\n                    <img src="assets/zents-imgs/dash_approved_icon.svg">\n                  </div>\n                  <div class="text">\n                    <span class = "count-text" no-margin>{{approvalApprovedCount}}</span>\n                    <p class= "approve-text" no-margin>Approved</p>\n                  </div>\n                </div>\n              </div>\n              <div class="box-separator-line"></div>\n              <div class="rounded-box pending-box">\n                <div class="pending_status">\n                  <div class="image">\n                    <img src="assets/zents-imgs/dash_pending_icon.svg">\n                  </div>\n                  <div class="text ion-text-center">\n                    <span class = "count-text" no-margin>{{approvalPendingCount}}</span>\n                    <p class= "approve-text" no-margin>Pending</p>\n                  </div>\n                </div>\n              </div>\n              <div class="box-separator-line"></div>\n              <div class="rounded-box pending-box">\n                <div class="pending_status">\n                  <div class="image">\n                    <img src="assets/zents-imgs/dash_reject_icon.svg">\n                  </div>\n                  <div class="text ion-text-center">\n                    <span class = "count-text" no-margin>{{approvalRejectCount}}</span>\n                    <p class= "approve-text" no-margin>Rejected</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n      <div class="filter-section-parent">\n        <div class="filter-section">\n          <ion-grid class="radio-group">\n            <ion-row radio-group [(ngModel)]="timesheet_type">\n              <ion-col col-4>\n                <ion-item lines="none">\n                  <ion-label>Pending</ion-label>\n                  <ion-radio item-left [checked]="true" value="pending"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4>\n                <ion-item lines="none">\n                  <ion-label>Approved</ion-label>\n                  <ion-radio item-left value="approved"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4>\n                <ion-item lines="none">\n                  <ion-label>Rejected</ion-label>\n                  <ion-radio item-left value="rejected"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n          <div class="approval-filter-main">\n            <ion-list>\n              <ion-item class="borderColor" placeholder="Select Project">\n                <ion-select [(ngModel)]="selectedProject" interface="action-sheet">\n                  <ion-option *ngIf="projectAllocationList.length > 1" value="all">All Projects</ion-option>\n                  <ion-option *ngFor="let project of projectAllocationList" [value]="project.projectId" >{{project.projectName}}</ion-option>\n                </ion-select>\n              </ion-item>\n\n              <ion-grid no-padding margin-top>\n                <ion-row>\n                  <ion-col no-padding class="dateBorderColor marginRight">\n                    <ion-datetime displayFormat="DD-MMM-YYYY" pickerFormat="DD MMM YYYY" placeholder="Start Date"\n                      [(ngModel)]="tsStartDate" [min]="tsMinDate" [max]="tsMaxDate" (ionChange)="onStartDateSelect($event)">\n                    </ion-datetime>\n                  </ion-col>\n                  <ion-col no-padding class="dateBorderColor">\n                    <ion-datetime displayFormat="DD-MMM-YYYY" pickerFormat="DD MMM YYYY" [(ngModel)]="tsEndDate"\n                      placeholder="End Date" [min]="tsMinDate" [max]="tsMaxDate"  (ionChange)="onEndDateSelect($event)"></ion-datetime>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <div class="error-msg" *ngIf="compareFlag">\n                <sub>*</sub> End date should be greater than start date\n              </div>\n              <ion-item class="borderColor" margin-top>\n                <ion-select [(ngModel)]="selectedBillablity" placeholder="Select Category" interface="action-sheet">\n                  <ion-option value="ALL">All</ion-option>\n                  <ion-option value="YES">Billable</ion-option>\n                  <ion-option value="NO">Non Billable</ion-option>\n                  <ion-option value="OVERTIME">Overtime</ion-option>\n                </ion-select>\n              </ion-item>\n\n              <div class="submitBtn" float-center margin-top>\n                <button class="buttonColor" ion-button round outline (click)="ApprovalfilterList()">View Timesheets</button>\n              </div>\n            </ion-list>\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n\n    <!-- Pre-Approval timesshet section -->\n    <div *ngSwitchCase="\'pre-approval-timesheet\'">\n      <div class="chart-section-parent">\n        <div class="chart-section">\n          <div class="fusion-charts">\n            <fusioncharts width="100%" height="250" type="doughnut2d" [dataFormat]="json" [dataSource]="preApprovalDataSource">\n            </fusioncharts>\n          </div>\n\n          <div class="approvalStatus">\n            <div class="rounded-box-parent">\n              <div class="rounded-box">\n                <div class="parent">\n                  <div class="image">\n                    <img src="assets/zents-imgs/dash_approved_icon.svg">\n                  </div>\n                  <div class="text">\n                    <span class = "count-text" no-margin>{{preApprovalApprovedCount}}</span>\n                    <p class= "approve-text" no-margin>Approved</p>\n                  </div>\n                </div>\n              </div>\n              <div class="box-separator-line"></div>\n              <div class="rounded-box pending-box">\n                <div class="pending_status">\n                  <div class="image">\n                    <img src="assets/zents-imgs/dash_pending_icon.svg">\n                  </div>\n                  <div class="text ion-text-center">\n                    <span class = "count-text" no-margin>{{preApprovalPendingCount}}</span>\n                    <p class= "approve-text" no-margin>Pending</p>\n                  </div>\n                </div>\n              </div>\n              <div class="box-separator-line"></div>\n              <div class="rounded-box pending-box">\n                <div class="pending_status">\n                  <div class="image">\n                    <img src="assets/zents-imgs/dash_reject_icon.svg">\n                  </div>\n                  <div class="text ion-text-center">\n                    <span class = "count-text" no-margin>{{preApprovalRejectCount}}</span>\n                    <p class= "approve-text" no-margin>Rejected</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="filter-section-parent">\n        <div class="filter-section">\n          <ion-grid class="radio-group">\n            <ion-row radio-group [(ngModel)]="pre_timesheet_type">\n              <ion-col col-4>\n                <ion-item lines="none">\n                  <ion-label>Pending</ion-label>\n                  <ion-radio item-left [checked]="true" value="pending"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4>\n                <ion-item lines="none">\n                  <ion-label>Approved</ion-label>\n                  <ion-radio item-left value="approved"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4>\n                <ion-item lines="none">\n                  <ion-label>Rejected</ion-label>\n                  <ion-radio item-left value="rejected"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n          <div class="approval-filter-main">\n            <ion-list>\n              <ion-item class="borderColor" placeholder="Select Project">\n                <ion-select [(ngModel)]="preSelectedProject" interface="action-sheet">\n                  <!-- <ion-option *ngIf="preApprovalProjectAllocationList.length > 1 || true" value="all">All Projects</ion-option> -->\n                  <ion-option *ngFor="let project of preApprovalProjectAllocationList" [value]="project.projectId" >{{project.projectName}}</ion-option>\n                </ion-select>\n              </ion-item>\n\n              <ion-grid no-padding margin-top>\n                <ion-row>\n                  <ion-col no-padding class="dateBorderColor marginRight">\n                    <ion-datetime displayFormat="DD-MMM-YYYY" pickerFormat="DD MMM YYYY" placeholder="Start Date"\n                      [(ngModel)]="preTsStartDate" [min]="preTsMinDate" [max]="preTsMaxDate" (ionChange)="onPreStartDateSelect($event)">\n                    </ion-datetime>\n                  </ion-col>\n                  <ion-col no-padding class="dateBorderColor">\n                    <ion-datetime displayFormat="DD-MMM-YYYY" pickerFormat="DD MMM YYYY" [(ngModel)]="preTsEndDate"\n                      placeholder="End Date" [min]="preTsMinDate" [max]="preTsMaxDate"  (ionChange)="onPreEndDateSelect($event)"></ion-datetime>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <div class="error-msg" *ngIf="preCompareFlag">\n                <sub>*</sub> End date should be greater than start date\n              </div>\n              <ion-item class="borderColor" margin-top>\n                <ion-select [disabled] = "true" [(ngModel)]="preSelectedBillablity" placeholder="Select Category" interface="action-sheet">\n                  <ion-option  value="YES">Billable</ion-option>\n                </ion-select>\n              </ion-item>\n\n              <div class="submitBtn" float-center margin-top>\n                <button class="buttonColor" ion-button round outline (click)="preApprovalFilterList()">View Timesheets</button>\n              </div>\n            </ion-list>\n          </div>\n        </div>\n      </div>\n\n      <!-- <div class="pre-filter-section ">\n\n        <div class="approval-filter-main">\n          <div class="submitBtn">\n            <button ion-button round (click)="preApprovalFilterList()" class="buttonColor">View Pending Timesheets</button>\n          </div>\n        </div>\n      </div> -->\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\dashboard\approval-dashboard\approval-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Events */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* DecimalPipe */]])
    ], ApprovalDashboardPage);
    return ApprovalDashboardPage;
}());

//# sourceMappingURL=approval-dashboard.js.map

/***/ })

});
//# sourceMappingURL=39.js.map