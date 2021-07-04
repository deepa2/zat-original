webpackJsonp([37],{

/***/ 1411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAttendanceTimesheetPageModule", function() { return MyAttendanceTimesheetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_attendance_timesheet__ = __webpack_require__(1833);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyAttendanceTimesheetPageModule = /** @class */ (function () {
    function MyAttendanceTimesheetPageModule() {
    }
    MyAttendanceTimesheetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_attendance_timesheet__["a" /* MyAttendanceTimesheetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_attendance_timesheet__["a" /* MyAttendanceTimesheetPage */]),
            ],
        })
    ], MyAttendanceTimesheetPageModule);
    return MyAttendanceTimesheetPageModule;
}());

//# sourceMappingURL=my-attendance-timesheet.module.js.map

/***/ }),

/***/ 1833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAttendanceTimesheetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
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
 * Generated class for the MyAttendanceTimesheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyAttendanceTimesheetPage = /** @class */ (function () {
    function MyAttendanceTimesheetPage(navCtrl, fb, httpProvider, utility) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.httpProvider = httpProvider;
        this.utility = utility;
        // pageTitle: String = "Attendance / Timesheets"
        // onlyHours: number;
        this.isSubmitted = false;
        this.data = {
            isDataAvailable: false,
            attendanceList: []
        };
        this.tsDates = {
            tsMinDate: null,
            tsMaxDate: null
        };
        this.compareFlag = false;
        this.oneMonthMessageFlag = false;
        this.invalidDateMessageFlag = false;
        this.projectAllocationList = [];
    }
    MyAttendanceTimesheetPage.prototype.ionViewDidLoad = function () {
        // this.getApprovalDashboardData();
        this.getMyTimesheetDashboardData();
    };
    MyAttendanceTimesheetPage.prototype.checkDateToHighlight = function (date) {
        var splitdate = date.split(" ");
        if (splitdate[0] <= 8) {
            return true;
        }
        else {
            return false;
        }
    };
    MyAttendanceTimesheetPage.prototype.ngOnInit = function () {
        this.timeSheetForm = this.fb.group({
            startDate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            endDate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            projName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            status: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    };
    // getApprovalDashboardData() {
    //   this.utility.updateLoader(true);
    //   this.httpProvider.http.zentsCommonService({ url: "getEmployeeDashBoardNew", data: {}, dashboard: true }).subscribe((res: any) => {
    //     this.utility.updateLoader(false);
    //     if (res) {
    //       this.projectAllocationList = res.projectAllocationList;
    //       this.tsStartDate = (res.monthlyLockDate);
    //       this.tsEndDate = (res.serverDate);
    //       // let myTimesheetCalendarMinDate = moment(res.serverDate).subtract(1, 'years').format('YYYY-MM-DD');
    //       this.tsDates.tsMinDate = res.myTimesheetCalendarMinDate;
    //       this.tsDates.tsMaxDate = res.timesheetMaxDate;
    //       this.data.isDataAvailable = true;
    //       if (res.attendanceList) {
    //         this.data.attendanceList = res.attendanceList;
    //       }
    //       if (res.projectAllocationList.length == 1) {
    //         this.selectedProject = res.projectAllocationList[0];
    //       }
    //     }
    //   }, (err) => {
    //     this.utility.updateLoader(false);
    //   })
    // }
    MyAttendanceTimesheetPage.prototype.getMyTimesheetDashboardData = function () {
        var _this = this;
        this.utility.updateLoader(true);
        this.httpProvider.http.zentsCommonService({ url: "getMyTimesheetDashboard", data: {}, dashboard: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res) {
                _this.projectAllocationList = res.projectAllocationList;
                _this.tsStartDate = (res.monthlyLockDate);
                _this.tsEndDate = (res.serverDate);
                // let myTimesheetCalendarMinDate = moment(res.serverDate).subtract(1, 'years').format('YYYY-MM-DD');
                _this.tsDates.tsMinDate = res.myTimesheetCalendarMinDate;
                _this.tsDates.tsMaxDate = res.timesheetMaxDate;
                _this.data.isDataAvailable = true;
                if (res.attendanceList) {
                    _this.data.attendanceList = res.attendanceList;
                }
                if (res.projectAllocationList.length == 1) {
                    _this.selectedProject = res.projectAllocationList[0];
                }
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    MyAttendanceTimesheetPage.prototype.openMyTimesheetPage = function () {
        this.isSubmitted = true;
        if (this.timeSheetForm.valid && !this.compareFlag && !this.oneMonthMessageFlag) {
            var selectedProjIds_1 = [];
            var selProjectByUser = this.selectedProject == 'all' ? "all" : this.selectedProject.projectId;
            if (this.selectedProject == 'all') {
                this.projectAllocationList.map(function (data) {
                    selectedProjIds_1.push(data.projectId);
                });
            }
            else {
                selectedProjIds_1.push(this.selectedProject.projectId);
            }
            this.navCtrl.push('MyTimesheetsPage', {
                "startDate": (this.tsStartDate),
                "endDate": (this.tsEndDate),
                "projectName": this.selectedProject.projectName,
                "projectId": selProjectByUser,
                "projectIds": selectedProjIds_1,
                "status": this.selectedStatus,
                "type": "myTimesheet"
            });
        }
        else {
            return false;
        }
    };
    MyAttendanceTimesheetPage.prototype.onEndDateSelect = function (e) {
        this.compareFlag = __WEBPACK_IMPORTED_MODULE_5_moment___default()(this.timeSheetForm.get('endDate').value) < __WEBPACK_IMPORTED_MODULE_5_moment___default()(this.timeSheetForm.get('startDate').value);
        this.oneMonthMessageFlag = this.checkThirtyDaysDifference();
        if (!this.oneMonthMessageFlag) {
            this.getProjectListOnDateChange();
        }
        // if(moment(this.timeSheetForm.get('endDate').value) < moment(this.tsDates.tsMinDate) || moment(this.timeSheetForm.get('endDate').value) >  moment(this.tsDates.tsMaxDate) ){
        //   this.invalidDateMessageFlag = true;
        // } 
    };
    MyAttendanceTimesheetPage.prototype.onStartDateSelect = function (e) {
        this.compareFlag = __WEBPACK_IMPORTED_MODULE_5_moment___default()(this.timeSheetForm.get('startDate').value) > __WEBPACK_IMPORTED_MODULE_5_moment___default()(this.timeSheetForm.get('endDate').value);
        this.oneMonthMessageFlag = this.checkThirtyDaysDifference();
        if (!this.oneMonthMessageFlag) {
            this.getProjectListOnDateChange();
        }
        this.invalidDateMessageFlag = __WEBPACK_IMPORTED_MODULE_5_moment___default()(this.timeSheetForm.get('startDate').value) < __WEBPACK_IMPORTED_MODULE_5_moment___default()(this.tsDates.tsMinDate) || __WEBPACK_IMPORTED_MODULE_5_moment___default()(this.timeSheetForm.get('startDate').value) > __WEBPACK_IMPORTED_MODULE_5_moment___default()(this.tsDates.tsMaxDate);
    };
    MyAttendanceTimesheetPage.prototype.checkThirtyDaysDifference = function () {
        var endDate = __WEBPACK_IMPORTED_MODULE_5_moment___default()(this.timeSheetForm.get('endDate').value);
        var startDate = __WEBPACK_IMPORTED_MODULE_5_moment___default()(this.timeSheetForm.get('startDate').value);
        var diff = endDate.diff(startDate, 'days');
        // console.log('diff: ', diff);
        return diff >= 0 && diff <= 30 ? false : true;
    };
    Object.defineProperty(MyAttendanceTimesheetPage.prototype, "t", {
        get: function () {
            return this.timeSheetForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    MyAttendanceTimesheetPage.prototype.getProjectListOnDateChange = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var data = {
            "startDate": this.timeSheetForm.get('startDate').value,
            "endDate": this.timeSheetForm.get('endDate').value
        };
        this.httpProvider.http.zentsCommonService({ url: "getProjectListData", data: data, dashboard: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res && res.length > 0) {
                if (!(JSON.stringify(_this.projectAllocationList) === JSON.stringify(res))) {
                    _this.projectAllocationList = res;
                    if (_this.projectAllocationList.length == 1) {
                        _this.selectedProject = _this.projectAllocationList[0];
                    }
                }
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    MyAttendanceTimesheetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-attendance-timesheet',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\dashboard\my-attendance-timesheet\my-attendance-timesheet.html"*/'<!--\n  Generated template for the MyAttendanceTimesheetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="ts-header">\n\n  <ion-navbar>\n    <ion-title>My Timesheets</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf="data?.isDataAvailable" class="my-attendance-timesheet-page">\n    <!--  -->\n    <div *ngIf="data?.attendanceList.length > 0" class="attendance block-border">\n      <div padding class="attendance-title">\n        Attendance\n      </div>\n      <ion-grid padding>\n        <ion-row *ngFor="let attendaceInfo of data?.attendanceList; index as i" [ngClass]="{\'attendance-row\' : i != data?.attendanceList.length -1, \'last-attendance-row\' :  i == data?.attendanceList.length -1  }">\n          <ion-col class="attendance_icon_row" no-padding col-1>\n            <img src="assets/imgs/attendance_icon.svg">\n          </ion-col>\n          <ion-col col-3>\n            <span class="darkColor">{{attendaceInfo.dayName}}</span>\n          </ion-col>\n          <ion-col col-4>\n            {{attendaceInfo.loginDate}}\n          </ion-col>\n          <ion-col text-center col-4 class="redDates" *ngIf="checkDateToHighlight(attendaceInfo.viewEfforts)">\n            {{attendaceInfo.viewEfforts ? attendaceInfo.viewEfforts : "--" }}\n          </ion-col>\n          <ion-col text-center col-4 *ngIf="!checkDateToHighlight(attendaceInfo.viewEfforts)">\n            {{attendaceInfo.viewEfforts ? attendaceInfo.viewEfforts : "--" }}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div class="my-timesheets-parent">\n      <div class="my-timesheets">\n        <div padding class="title">\n          My Timesheets\n        </div>\n        <div>\n          <div class="formheader">\n            <form [formGroup]="timeSheetForm" (ngSubmit)="openMyTimesheetPage()">\n              <ion-list>\n                <ion-grid no-padding margin-top>\n                  <ion-row>\n                    <ion-col no-padding class="dateBorderColor marginRight">\n                      <ion-datetime formControlName="startDate" displayFormat="DD-MMM-YYYY" pickerFormat="DD MMM YYYY"\n                        placeholder="Start Date" [(ngModel)]="tsStartDate" [min]="tsDates?.tsMinDate" [max]="tsDates?.tsMaxDate" (ionChange)="onStartDateSelect($event)" >\n                      </ion-datetime>\n                    </ion-col>\n                    <ion-col no-padding class="dateBorderColor">\n                      <ion-datetime formControlName="endDate" displayFormat="DD-MMM-YYYY" pickerFormat="DD MMM YYYY"\n                        placeholder="End Date" [(ngModel)]="tsEndDate" [min]="tsDates?.tsMinDate" [max]="tsDates?.tsMaxDate" (ionChange)="onEndDateSelect($event)" ></ion-datetime>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n                <div *ngIf="isSubmitted && t.startDate.errors && !t.ProjName.errors" class="invalid-feedback" [ngStyle]="{\'display\':isSubmitted && t.startDate.errors ? \'block\':\'none\'}">\n                  <div *ngIf="t.startDate.errors.required">\n                    <sub>*</sub> Please select start date\n                  </div>\n                </div>\n                <div *ngIf="isSubmitted && t.endDate.errors && !t.ProjName.errors" class="invalid-feedback" [ngStyle]="{\'display\':isSubmitted && t.endDate.errors ? \'block\':\'none\'}">\n                  <div *ngIf="t.endDate.errors.required">\n                    <sub>*</sub> Please select end date\n                  </div>\n                </div>\n                <div class="error-msg" *ngIf="!invalidDateMessageFlag && compareFlag">\n                  <sub>*</sub> End date should be greater than start date\n                </div>\n                <div class="error-msg" *ngIf="!invalidDateMessageFlag && !compareFlag && oneMonthMessageFlag">\n                  <sub>*</sub> You can only select one month time duration\n                </div>\n                <div class="error-msg" *ngIf="invalidDateMessageFlag">\n                  <sub>*</sub> Start Date should be in between {{tsDates?.tsMinDate | date:\'dd-MMM-yyyy\'}} and \n                  {{tsDates?.tsMaxDate | date:\'dd-MMM-yyyy\'}}\n                </div>\n\n                <ion-item class="borderColor" margin-top>\n                  <ion-select [(ngModel)]="selectedProject" formControlName="projName" placeholder="Select Project"\n                    interface="action-sheet">\n                    <ion-option *ngIf="projectAllocationList.length > 1" value="all">All Projects</ion-option>\n                    <ion-option *ngFor="let project of projectAllocationList" [value]="project">{{project.projectName}}\n                    </ion-option>\n                  </ion-select>\n                </ion-item>\n                <span class="error-msg" *ngIf="isSubmitted && t.projName.errors">\n                  <p>* Please select Project Name.</p>\n                </span>\n\n                <ion-item class="borderColor" margin-top>\n                  <ion-select formControlName="status" placeholder="Select Status" [(ngModel)]="selectedStatus"\n                    interface="action-sheet">\n                    <ion-option value="all">All Status</ion-option>\n                    <ion-option value="-1">Saved</ion-option>\n                    <ion-option value="1">Approved</ion-option>\n                    <ion-option value="2">Submitted</ion-option>\n                    <ion-option value="3">Rejected</ion-option>\n                  </ion-select>\n                </ion-item>\n                <span class="error-msg" *ngIf="isSubmitted && t.status.errors">\n                  <span *ngIf="t.status.errors.required">\n                    <p>* Please select status.</p>\n                  </span>\n                </span>\n\n              </ion-list>\n\n              <div class="submitBtn" float-center>\n                <button ion-button round outline type="submit">View Timesheets</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\dashboard\my-attendance-timesheet\my-attendance-timesheet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], MyAttendanceTimesheetPage);
    return MyAttendanceTimesheetPage;
}());

//# sourceMappingURL=my-attendance-timesheet.js.map

/***/ })

});
//# sourceMappingURL=37.js.map