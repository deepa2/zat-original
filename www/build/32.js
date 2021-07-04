webpackJsonp([32],{

/***/ 1438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalHoursPageModule", function() { return AdditionalHoursPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__additional_hours__ = __webpack_require__(1860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdditionalHoursPageModule = /** @class */ (function () {
    function AdditionalHoursPageModule() {
    }
    AdditionalHoursPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__additional_hours__["a" /* AdditionalHoursPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__additional_hours__["a" /* AdditionalHoursPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], AdditionalHoursPageModule);
    return AdditionalHoursPageModule;
}());

//# sourceMappingURL=additional-hours.module.js.map

/***/ }),

/***/ 1860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditionalHoursPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_env__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ot_edit_modal_ot_edit_modal__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_calender_model_calender_model__ = __webpack_require__(736);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the AdditionalHoursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdditionalHoursPage = /** @class */ (function () {
    function AdditionalHoursPage(navCtrl, navParams, utility, httpProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.additionalHourTimesheetData = null;
        this.disableSubmit = false;
        this.showOverlay = false;
        this.dateRange = {
            minDate: null,
            maxDate: null
        };
        this.months = {
            currentMonth: null,
            lastMonth: null
        };
        this.rejectedDatesArr = [];
    }
    AdditionalHoursPage.prototype.ionViewDidLoad = function () {
        this.pageTitle = this.navParams.get('pageTitle');
        this.getCalendarInfo();
    };
    /**
    * Get Calendar Specific Data
    */
    AdditionalHoursPage.prototype.getCalendarInfo = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var url = 'calenderInfo';
        var data = {
            "version": __WEBPACK_IMPORTED_MODULE_4__app_env__["E" /* version */]
        };
        this.httpProvider.http.zentsCommonService({ url: url, data: data, timeentry: true }).subscribe(function (res) {
            if (res && res.data) {
                _this.calendarData = res.data;
                _this.rejectedDatesArr = _this.calendarData.AdditionalHrsRejectedTimesheetsDates;
                _this.dates = _this.calendarData.CalendarDates;
                _this.dateRange.minDate = _this.dates.additionalHrsSaveSubmitStartDate;
                _this.dateRange.maxDate = _this.dates.endDate;
                _this.selectedDate = _this.dates.endDate;
                _this.months.currentMonth = _this.dates.currentMonth;
                _this.months.lastMonth = _this.dates.lastMonth;
                _this.getAdditionalHourTimesheetDetails(_this.selectedDate);
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    AdditionalHoursPage.prototype.applyAdditionalHours = function () {
        var _this = this;
        this.fabClicked();
        this.fab.close();
        if (this.dates) {
            new Promise(function (resolve, reject) {
                var dates = {
                    'pageTitle': _this.pageTitle,
                    'applyCalendarMinDate': _this.dates.additionalHrsStartDate,
                    'applyCalendarMaxDate': _this.dates.additionalHrsEndDate,
                    resolve: resolve
                };
                _this.navCtrl.push('ApplyAdditionalHoursPage', { 'calendarDates': dates });
            }).then(function (userMessage) {
                _this.getAdditionalHourTimesheetDetails(_this.selectedDate, userMessage);
            });
        }
    };
    AdditionalHoursPage.prototype.fabClicked = function () {
        this.showOverlay = !this.showOverlay;
    };
    AdditionalHoursPage.prototype.onDateChange = function (e) {
        this.selectedDate = this.utility.changeToDateString(e);
        this.getAdditionalHourTimesheetDetails(this.selectedDate, '', true);
    };
    /**
     *
     * Get Additional Hour Time-entry details for the selected date
     * @param selDate : get data for this date
     * @param message : dispaly message in toast if there is any action performed(save,submit,delete)
     * @param refreshLoader : true only when no action(save,submit,delete) is performed
     */
    AdditionalHoursPage.prototype.getAdditionalHourTimesheetDetails = function (selDate, message, refreshLoader) {
        var _this = this;
        if (message === void 0) { message = ''; }
        if (refreshLoader === void 0) { refreshLoader = false; }
        if (refreshLoader) {
            this.utility.updateLoader(true);
        }
        var url = 'overtimeentry';
        var data = {
            "selectedDate": selDate
        };
        this.httpProvider.http.zentsCommonService({ url: url, data: data, overtime: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res && res.data) {
                var data_1 = res.data;
                _this.additionalHourTimesheetData = data_1;
                var list_1 = [];
                if (data_1.taskAndTimesheetDetails.length > 0) {
                    data_1.taskAndTimesheetDetails.map(function (timesheet) {
                        if (timesheet.taskList.length > 0) {
                            list_1 = timesheet.taskList.filter(function (item) { return item.approvalStatus == '-1' || item.approvalStatus == '3'; });
                        }
                    });
                }
                _this.disableSubmit = list_1.length > 0 ? false : true;
                _this.utility.showToast(message);
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    /**
     * Method to Perform Save Action
     * @param taskData
     * @param dataObj
     */
    AdditionalHoursPage.prototype.saveAddHrsTimesheet = function (taskData, dataObj) {
        var _this = this;
        this.utility.updateLoader(true);
        var url = "processovertimetimesheet";
        var data = {
            "taskUpdateDate": taskData.taskUpdateDate,
            "totalEfforts": this.utility.convertTime(dataObj.efforts, 1),
            "billablityFlag": dataObj.billability ? dataObj.billability : taskData.billablityFlag,
            "comments": dataObj.remarks ? dataObj.remarks : taskData.comments,
            "taskId": taskData.taskId,
            "taskInformationId": 0,
            "billabilityFlag": dataObj.billability ? dataObj.billability : taskData.billabilityFlag,
            "additionalHrsFlag": "YES",
            "poInvoiceKey": taskData.poInvoiceKey,
            "uuId": taskData.uuId,
            "taskActualEffort": taskData.taskActualEffort
        };
        this.httpProvider.http.zentsCommonService({ url: url, data: data, overtime: true }).subscribe(function (res) {
            if (res && res.userMessage) {
                _this.getAdditionalHourTimesheetDetails(_this.selectedDate, res.userMessage);
            }
        }, function (err) {
            _this.utility.updateLoader(false);
            _this.getAdditionalHourTimesheetDetails(_this.selectedDate); //if save error occurs restore old state of timesheet
        });
        //}
    };
    //open edit tasks modal
    AdditionalHoursPage.prototype.presentEditModal = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            var editModal;
            var _this = this;
            return __generator(this, function (_a) {
                editModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_ot_edit_modal_ot_edit_modal__["a" /* OtEditModalComponent */], {
                    taskObj: task
                });
                editModal.present();
                editModal.onDidDismiss(function (res) {
                    if (res) {
                        _this.saveAddHrsTimesheet(task, res);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Method to Delete Timesheet
     * @param taskObj
     */
    AdditionalHoursPage.prototype.deleteTimesheet = function (taskObj) {
        var _this = this;
        var url = "detachovertimetimesheet";
        var data = {
            "taskUpdateDate": taskObj.taskUpdateDate,
            "taskId": taskObj.taskId
        };
        this.utility.updateLoader(true);
        this.httpProvider.http.zentsCommonService({ url: url, data: data, overtime: true }).subscribe(function (res) {
            if (res && res.userMessage) {
                _this.getAdditionalHourTimesheetDetails(_this.selectedDate, res.userMessage);
            }
            else {
                _this.getAdditionalHourTimesheetDetails(_this.selectedDate, res.userMessage);
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    //Confirm submit 
    AdditionalHoursPage.prototype.showSubmitConfirmAlert = function (timesheetList) {
        var _this = this;
        var alert = this.utility.presentConfirmation('Are you sure you want to submit this timesheet ?');
        alert.then(function () {
            _this.submitTimesheet(timesheetList);
        }, function (err) { });
    };
    /**
     * Method to Submit Timesheet
     * @param timesheet
     */
    AdditionalHoursPage.prototype.submitTimesheet = function (timesheet) {
        var _this = this;
        var rejectedTimesheetFlag = false;
        var rejectedTaskName = null;
        var timesheetList = [];
        if (timesheet && timesheet.length > 0) {
            timesheet.map(function (item) {
                if (item.taskList.length > 0) {
                    item.taskList.map(function (task) {
                        if (task.approvalStatus !== '0') {
                            //comments mandatory while submitting rejected timesheet
                            if (task.approvalStatus == '3' && !task.comments && !rejectedTimesheetFlag) {
                                rejectedTimesheetFlag = true;
                                rejectedTaskName = task.taskName;
                            }
                            timesheetList.push({
                                "taskUpdateDate": task.taskUpdateDate,
                                "totalEfforts": task.totalEfforts,
                                "approvalStatus": task.approvalStatus,
                                "taskId": task.taskId,
                                "billabilityFlag": task.billabilityFlag
                            });
                        }
                    });
                }
            });
        }
        if (timesheetList.length > 0 && !rejectedTimesheetFlag) {
            var url = "processovertimefinaltimesheet";
            var data = {
                "timesheets": timesheetList
            };
            this.utility.updateLoader(true);
            this.httpProvider.http.zentsCommonService({ url: url, data: data, overtime: true }).subscribe(function (res) {
                if (res && res.userMessage) {
                    _this.getAdditionalHourTimesheetDetails(_this.selectedDate, res.userMessage);
                }
            }, function (err) {
                _this.utility.updateLoader(false);
            });
        }
        else if (rejectedTimesheetFlag) {
            this.utility.presentAlert('Please add remarks for ' + rejectedTaskName + ' task before submission');
        }
    };
    AdditionalHoursPage.prototype.goToAppliedHoursList = function () {
        this.fabClicked();
        this.fab.close();
        this.navCtrl.push('AppliedHoursListPage');
    };
    AdditionalHoursPage.prototype.refreshTimesheet = function () {
        this.getAdditionalHourTimesheetDetails(this.selectedDate, '', true);
    };
    AdditionalHoursPage.prototype.getDatesOfSelectedMonth = function (monthName, monthSeq) {
        var dates = this.rejectedDatesArr.filter(function (date) { return __WEBPACK_IMPORTED_MODULE_6_moment___default()(date).format('MMMM').toLowerCase() == monthName.toLowerCase(); });
        var data = {
            rejectedDates: dates
        };
        this.openCalenderModel(monthSeq, data);
    };
    /**
     * Open Calendar Modal to highlight rejected timesheets
     * @param monthseq: Specifies the month sequence .i.e lastmonth or currentmonth
     * @param dataObj
     */
    AdditionalHoursPage.prototype.openCalenderModel = function (monthseq, dataObj) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__components_calender_model_calender_model__["a" /* CalenderModel */], {
            dataParams: {
                rejectedDates: dataObj.rejectedDates,
                key: monthseq,
                type: 'add-hrs'
            }
        }, {
            cssClass: 'calendermodel',
        });
        modal.present();
        modal.onDidDismiss(function (res) {
            if (res) {
                _this.selectedDate = res;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fab'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* FabContainer */])
    ], AdditionalHoursPage.prototype, "fab", void 0);
    AdditionalHoursPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-additional-hours',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\overtime\additional-hours\additional-hours.html"*/'<!--\n  Generated template for the AdditionalHoursPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="ts-header">\n\n  <ion-navbar>\n    <ion-title>{{pageTitle}}</ion-title>\n    <!-- <button ion-button icon-only clear\n      (click)="getDatesOfSelectedMonth(months?.lastMonth,\'lastMonth\')">\n      <img src="assets/zents-imgs/calendar_white_icon.svg" />\n      <span>{{months?.lastMonth?.substring(0, 3)}}</span>\n    </button>\n    <div class="divider"></div>\n    <button class="current-month" ion-button icon-only clear style="color: white"\n      (click)="getDatesOfSelectedMonth(months?.currentMonth,\'currentMonth\')">\n      <img src="assets/zents-imgs/calendar_white_icon.svg" />\n      {{months?.currentMonth?.substring(0, 3)}}\n    </button> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="addHrs">\n    <div class="calendar">\n      <ion-grid>\n        <ion-row class="calendar-bar">\n          <ion-col col-1>\n            <img src="assets/zents-imgs/calendar_icon.svg" />\n          </ion-col>\n          <ion-col col-7>\n            <ion-datetime #datetime no-padding displayFormat="DD-MMM-YYYY" pickerFormat="DD MMM YYYY"\n              placeholder="Start Date" [(ngModel)]="selectedDate" [min]="dateRange?.minDate" [max]="dateRange?.maxDate"\n              (ionChange)="onDateChange($event)">\n            </ion-datetime>\n            <ion-icon class="down-arrow" name="arrow-dropdown" (click)="datetime.open()"></ion-icon>\n          </ion-col>\n          <ion-col col-4 text-right>\n            <button class="addHrsSubmitBtn" ion-button round small [disabled]="disableSubmit"\n              (click)="showSubmitConfirmAlert(additionalHourTimesheetData.taskAndTimesheetDetails)">Submit</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div class="addHrs-timesheet">\n      <div class="addHrs-details" text-left\n        *ngFor="let timesheet of additionalHourTimesheetData?.taskAndTimesheetDetails;let i=index;">\n        <div class="project-name">\n          <span>{{utility.toTitleCase(timesheet.title)}}</span>\n        </div>\n        <span *ngFor="let task of timesheet.taskList">\n          <additional-hour-list-item [addHrsTaskData]="task" [projIndex]="i" (edit)="saveAddHrsTimesheet(task,$event)"\n            (open)="presentEditModal(task)" (delete)="deleteTimesheet(task)" (refresh)="refreshTimesheet()">\n          </additional-hour-list-item>\n        </span>\n      </div>\n      <div padding text-center class="noTimesheetMsg"\n        *ngIf="additionalHourTimesheetData == \'null\' || (additionalHourTimesheetData && additionalHourTimesheetData?.taskAndTimesheetDetails?.length == 0)">\n        There are no filled timesheets/tasks for the selected date.\n        <div class="inner-div">\n          click on <div class="options">\n            <ion-icon name="funnel"></ion-icon>\n          </div> to view more options.\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n<span class="ts-fab">\n  <ion-fab #fab right bottom class="addHrs-fab">\n    <button ion-fab (click)="fabClicked()">\n      <ion-icon name="funnel"></ion-icon>\n    </button>\n    <ion-fab-list side="top">\n      <button ion-fab (click)="applyAdditionalHours()">\n        <ion-label>Apply {{pageTitle}}</ion-label>\n        <ion-icon name="add"></ion-icon>\n      </button>\n      <button ion-fab (click)="goToAppliedHoursList()">\n        <ion-label>Applied Hours List</ion-label>\n        <ion-icon name="list-box"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n</span>\n<div *ngIf="showOverlay" class="page-overlay"></div>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\overtime\additional-hours\additional-hours.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */]])
    ], AdditionalHoursPage);
    return AdditionalHoursPage;
}());

//# sourceMappingURL=additional-hours.js.map

/***/ })

});
//# sourceMappingURL=32.js.map