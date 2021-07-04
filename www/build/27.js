webpackJsonp([27],{

/***/ 1446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeEntryPageModule", function() { return TimeEntryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time_entry__ = __webpack_require__(1869);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TimeEntryPageModule = /** @class */ (function () {
    function TimeEntryPageModule() {
    }
    TimeEntryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__time_entry__["a" /* TimeEntryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__time_entry__["a" /* TimeEntryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ]
        })
    ], TimeEntryPageModule);
    return TimeEntryPageModule;
}());

//# sourceMappingURL=time-entry.module.js.map

/***/ }),

/***/ 1869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeEntryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_calender_model_calender_model__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_env__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_ts_edit_modal_ts_edit_modal__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_time_entry_popup_time_entry_popup__ = __webpack_require__(766);
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
 * Generated class for the TimeEntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TimeEntryPage = /** @class */ (function () {
    function TimeEntryPage(navCtrl, modalCtrl, utility, httpProvider, datePipe, navParams, toastCtrl, zone) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.datePipe = datePipe;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.pageTitle = null;
        this.data = {
            loginDetails: null,
            projectMigratedData: null,
            type: 'time-entry'
        };
        this.calendarDates = [];
        this.enabledDates = [];
        this.selectedDate = null;
        this.subPages = [];
        this.months = {
            currentMonth: null,
            lastMonth: null
        };
        this.tsFlags = {
            disableSubmit: false,
            showZencoreMigratedMessage: false
        };
        this._calendarInfoSubsciption = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subscription__["Subscription"]();
        this._getTimeEntryInfoSubsciption = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subscription__["Subscription"]();
        /**
         * Retrieve all dates between start and end date
         */
        this.getDateArray = function (start, end) {
            var dates = [];
            var startDate = __WEBPACK_IMPORTED_MODULE_7_moment___default()(start);
            var endDate = __WEBPACK_IMPORTED_MODULE_7_moment___default()(end);
            while (startDate <= endDate) {
                dates.push({
                    date: __WEBPACK_IMPORTED_MODULE_7_moment___default()(startDate).format("YYYY-MM-DD"),
                    day: __WEBPACK_IMPORTED_MODULE_7_moment___default()(startDate, "YYYY-MM-DD").format('ddd'),
                    isWeekEnd: (startDate.day() == 6 || startDate.day() == 0) ? true : false
                });
                startDate = __WEBPACK_IMPORTED_MODULE_7_moment___default()(startDate).add(1, 'days');
            }
            return dates.reverse();
        };
        //check for notification data;
        if (this.navParams.get('isComingfromNotification')) {
            this.notificationData = this.navParams.get('isComingfromNotification');
            //console.log(this.notificationData);
            this.pageTitle = this.notificationData.pageTitle;
            // this.utility.presentAlert(JSON.stringify(this.pageTitle),"pagetitle")
        }
        else {
            this.pageTitle = this.navParams.get('pageTitle');
            // this.subPages = this.navParams.get('subData');
            // this.utility.presentAlert(JSON.stringify(this.pageTitle),"pagetitle")
        }
    }
    TimeEntryPage.prototype.ionViewDidLoad = function () {
        // this.getCalendarInfo();
        this.getAccessData();
        //check whether coming through notification
        // if (this.notificationData) {
        //   this.getAccessData();
        // } else {
        //   this.getCalendarInfo();
        // }
    };
    TimeEntryPage.prototype.ionViewWillEnter = function () {
    };
    TimeEntryPage.prototype.addTask = function () {
        var _this = this;
        if (this.selectedDate) {
            new Promise(function (resolve, reject) {
                var reqData = {
                    "selectedDate": _this.selectedDate,
                    "hideProjectTask": _this.timesheetData.onlyZenCOREProjectAllocation,
                    "taskAndTimesheetDetails": _this.timesheetData.taskAndTimesheetDetails,
                    "isPayrollToBeFilledZeroHours": _this.canFillZeroHoursFlag(),
                    resolve: resolve
                };
                _this.navCtrl.push('AddTaskPage', { 'timeEntryData': reqData });
            }).then(function (userMessage) {
                _this.getTimeEntryDetails(_this.selectedDate, userMessage);
            });
        }
    };
    TimeEntryPage.prototype.getAccessData = function () {
        var _this = this;
        var data = {};
        var url = 'accessDetails';
        this.utility.updateLoader(true);
        this.httpProvider.http.zentsCommonGETService({ url: url, data: data, overtime: true }).subscribe(function (res) {
            //console.log(res);
            //this.utility.presentAlert(JSON.stringify(res.data),"access data")
            if (res && res.data) {
                if (res.data.AdditionalHoursApplicable && res.data.IsExcempt) {
                    _this.subPages.push({ 'pageName': "AdditionalHoursPage", 'title': 'Additional Hours' });
                }
                if (res.data.AdditionalHoursApplicable && !res.data.IsExcempt) {
                    _this.subPages.push({ 'pageName': "AdditionalHoursPage", 'title': 'Overtime' });
                }
                if (res.data.IsApprover) {
                    _this.subPages.push({ 'pageName': "ApprovalDashboardPage", 'title': 'Timesheet Approval' });
                }
                if (res.data.reportAccess) {
                    _this.subPages.push({ 'pageName': "ReportPage", 'title': 'Reports' });
                }
                _this.subPages.push({ 'pageName': "MyAttendanceTimesheetPage", 'title': 'My Timesheet' });
            }
            // this.utility.updateLoader(false)
            _this.getCalendarInfo();
        }, function (error) {
            _this.utility.updateLoader(false);
        });
        // console.log(this.subPages);
    };
    TimeEntryPage.prototype.getMonthwiseCompliancePercentage = function (month, monthseq) {
        var _this = this;
        this.utility.updateLoader(true);
        var url = 'getMonthwiseCompliancePercentage';
        var data = { "month": month };
        this.httpProvider.http.zentsCommonService({ url: url, data: data, dashboard: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res && res.data) {
                var percentage = res.data.percentage;
                var details = res.data.dateDetails;
                var data_1 = {
                    pendingDates: details.notFilledDates,
                    rejectedDates: details.rejectedDates,
                    percentage: percentage
                };
                _this.openModal(monthseq, data_1);
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    /**
     * Open Calendar Modal to show compliance and not submitted dates
     * @param monthseq : Specifies the month sequence .i.e lastmonth or currentmonth
     * @param dataObj : Data to be passed to calendar-modal .i.e rejected dates,pending dates,compliance percentage
     */
    TimeEntryPage.prototype.openModal = function (monthseq, dataObj) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_calender_model_calender_model__["a" /* CalenderModel */], {
            dataParams: {
                rejectedDates: dataObj.rejectedDates,
                pendingDates: dataObj.pendingDates,
                percentage: dataObj.percentage,
                key: monthseq,
                type: 'time-entry',
                calendarDates: this.enabledDates,
                selectedDate: this.selectedDate
            }
        }, {
            cssClass: 'calendermodel',
        });
        modal.present();
        modal.onDidDismiss(function (res) {
            if (res) {
                var d = _this.enabledDates.filter(function (obj) { return obj.date == res; });
                if (d && d.length > 0) {
                    _this.calendarDates = _this.enabledDates;
                    _this.getTimeEntryDetails(res, '', true);
                }
                else {
                    _this.calendarDates = _this.getDates(res);
                    _this.getTimeEntryDetails(res, '', true);
                }
            }
        });
    };
    /**************** Modal for Time Entry Sub-Menu****************/
    TimeEntryPage.prototype.openTimeEntryModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__components_time_entry_popup_time_entry_popup__["a" /* TimeEntryPopupComponent */], { 'submainData': this.subPages }, {
            cssClass: 'time-entry-modal',
            enableBackdropDismiss: true,
            showBackdrop: true
        });
        modal.onDidDismiss(function (data) {
            if (data) {
                if (data.homePageConfigrationName == 'Approval Dashboard') {
                    _this.navCtrl.push("ApprovalDashboardPage");
                }
                else if (data.homePageConfigrationName == 'My Timesheet') {
                    _this.navCtrl.push('MyAttendanceTimesheetPage');
                }
                // for zenDeavor redirection 
                else {
                    _this.navCtrl.push(data.pageName, {
                        'pageTitle': data.title
                    });
                }
            }
        });
        modal.present();
    };
    /**
     * Get Calendar Specific Data
     */
    TimeEntryPage.prototype.getCalendarInfo = function () {
        var _this = this;
        if (!this.notificationData) {
            this.utility.updateLoader(true);
        }
        var url = 'calenderInfo';
        var data = {
            "version": __WEBPACK_IMPORTED_MODULE_6__app_env__["E" /* version */]
        };
        this._calendarInfoSubsciption = this.httpProvider.http.zentsCommonService({ url: url, data: data, timeentry: true }).subscribe(function (res) {
            // to resolve calander display issue on some devices zone is added
            _this.zone.run(function () {
                _this.calendarInfo = res.data;
                //this.utility.presentAlert(JSON.stringify(this.calendarInfo),"calender data")
                var dates = _this.calendarInfo.CalendarDates;
                //set calendar start date and end date
                _this.calenderStartDate = dates.timesheetStartDate;
                _this.calenderEndDate = dates.endDate;
                _this.months.currentMonth = dates.currentMonth;
                _this.months.lastMonth = dates.lastMonth;
                //get range of dates in an array to maintain slider
                _this.calendarDates = _this.getDateArray(_this.calenderStartDate, _this.calenderEndDate);
                //Used in month wise compliance calender
                _this.enabledDates = _this.getDateArray(_this.calenderStartDate, _this.calenderEndDate);
                if (_this.notificationData) {
                    _this.getTimeEntryDetails(_this.notificationData.notificationData.startDate);
                }
                else {
                    _this.getTimeEntryDetails(_this.calenderEndDate);
                }
                if (_this.calendarInfo.ProjectAllocationFlag) {
                    _this.presentToast(_this.calendarInfo.ProjectAllocationFlag);
                }
            });
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    /**
     * Get Time-entry details for the selected date
     * @param selDate : get time-entry details for this date
     * @param message : dispaly message in toast if there is any action performed(save,submit,delete)
     * @param refreshLoader : true only when no action(save,submit,delete) is performed
     */
    TimeEntryPage.prototype.getTimeEntryDetails = function (selDate, message, refreshLoader) {
        var _this = this;
        if (message === void 0) { message = ""; }
        if (refreshLoader === void 0) { refreshLoader = false; }
        this.selectedDate = selDate;
        if (refreshLoader) {
            this.utility.updateLoader(true);
        }
        var url = 'timeEntryDetails';
        var data = {
            "version": __WEBPACK_IMPORTED_MODULE_6__app_env__["E" /* version */],
            "selectedDate": selDate
        };
        this._getTimeEntryInfoSubsciption = this.httpProvider.http.zentsCommonService({ url: url, data: data, timeentry: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            //this.utility.presentAlert(JSON.stringify(res.data),"time entry details")
            if (res && res.data) {
                var data_2 = res.data;
                var list_1 = [];
                _this.timesheetData = data_2;
                _this.data.loginDetails = _this.timesheetData.staffLoginLogoutDetails;
                _this.calendarDates.map(function (obj, index) {
                    if (obj.date == selDate) {
                        _this.slides.slideTo(index, 500);
                    }
                });
                //disable submit if there are no saved timesheet
                if (data_2.taskAndTimesheetDetails.length > 0) {
                    data_2.taskAndTimesheetDetails.map(function (timesheet) {
                        if (timesheet.taskList.length > 0) {
                            timesheet.taskList.map(function (task) {
                                if (task.approvalStatus == '-1' || task.approvalStatus == '3') {
                                    list_1.push(task);
                                }
                            });
                        }
                    });
                }
                _this.tsFlags.disableSubmit = list_1.length > 0 ? false : true;
                //show message for migrated projects
                if (data_2.taskAndTimesheetDetails.length == 0) {
                    _this.getProjectList();
                }
            }
            _this.utility.showToast(message);
        }, function (err) {
            _this.timesheetData = null;
            _this.utility.updateLoader(false);
        });
    };
    TimeEntryPage.prototype.onDateSelect = function (obj) {
        if (!obj.isRejectedTimesheet) {
            this.selectedDate = obj.date;
            this.getTimeEntryDetails(this.selectedDate, '', true);
        }
    };
    //open edit tasks modal
    TimeEntryPage.prototype.presentEditModal = function (task, timesheet, taskAndTimesheetDetails) {
        return __awaiter(this, void 0, void 0, function () {
            var editModal;
            var _this = this;
            return __generator(this, function (_a) {
                editModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__components_ts_edit_modal_ts_edit_modal__["a" /* TsEditModalComponent */], {
                    taskObj: task,
                    isFixedBidProject: timesheet.isFixedBidProject,
                    milestoneDetails: timesheet.milestoneDetails,
                    billability: timesheet.billability,
                    selectedDate: this.selectedDate,
                    isTimesheetEditable: this.timesheetData.isTimesheetEditable,
                    isPayrollToBeFilledZeroHours: this.canFillZeroHoursFlag()
                });
                editModal.present();
                editModal.onDidDismiss(function (res) {
                    if (res) {
                        _this.editAndSaveTimesheet(res, task, taskAndTimesheetDetails);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Method to Perform Save Action
     * @param obj : It contains the edited data
     * @param taskData : Task object
     * @param taskAndTimesheetDetails : Task and timesheet details list
     */
    TimeEntryPage.prototype.editAndSaveTimesheet = function (obj, taskData, taskAndTimesheetDetails) {
        var _this = this;
        this.utility.updateLoader(true);
        //reset timesheet if submitted timesheet edited to save
        var taskIds = this.getResetTaskIds(taskAndTimesheetDetails);
        //update required fields after edit
        taskData.selectedDate = this.selectedDate;
        taskData.totalEfforts = this.utility.convertTime(obj.efforts, 1);
        taskData.nonbillableEffort = this.utility.convertTime(obj.efforts, 1);
        ;
        taskData.billableEffort = '0.00';
        if (obj.comments) {
            taskData.comments = obj.comments;
        }
        if (obj.billability) {
            taskData.billablityFlag = obj.billability;
            taskData.billabilityFlag = obj.billability;
        }
        else if (obj.defaultBillability) { //default value set if user doesn't select billability
            taskData.billablityFlag = obj.defaultBillability;
            taskData.billabilityFlag = obj.defaultBillability;
        }
        if (obj.milestoneName) {
            taskData.milestoneName = obj.milestoneName;
        }
        if (obj.bapPaymentScheduleKey) {
            taskData.bapPaymentScheduleKey = obj.bapPaymentScheduleKey;
        }
        if (taskIds && taskIds.length > 0) {
            taskData.resetTaskIds = taskIds;
        }
        var url = "processtimeentrytimesheet";
        var data = taskData;
        this.httpProvider.http.zentsCommonService({ url: url, data: data, timeentry: true }).subscribe(function (res) {
            if (res && res.userMessage) {
                _this.getTimeEntryDetails(_this.selectedDate, res.userMessage);
            }
        }, function (err) {
            _this.utility.updateLoader(false);
            _this.getTimeEntryDetails(_this.selectedDate); //if save error occurs restore old state of timesheet
        });
    };
    /**
     * Method to Perform Delete Action
     * @param taskObj
     * @param ts_tasklist
     */
    TimeEntryPage.prototype.deleteTimesheet = function (taskObj, ts_taskAndTimesheetlist) {
        var _this = this;
        var taskIdList = [];
        if (ts_taskAndTimesheetlist.length > 0) {
            ts_taskAndTimesheetlist.map(function (timesheetList) {
                if (timesheetList && timesheetList.taskList.length > 0) {
                    timesheetList.taskList.map(function (task) {
                        if (task.approvalStatus != 0) {
                            taskIdList.push(task.taskId);
                        }
                    });
                }
            });
        }
        var url = "detachtimesheet";
        var data = {
            "taskUpdateDate": taskObj.taskUpdateDate,
            "taskId": taskObj.taskId,
            "taskIdList": taskIdList
        };
        this.utility.updateLoader(true);
        this.httpProvider.http.zentsCommonService({ url: url, data: data, timeentry: true }).subscribe(function (res) {
            if (res && res.userMessage) {
                _this.getTimeEntryDetails(_this.selectedDate, res.userMessage);
            }
            else {
                _this.getTimeEntryDetails(_this.selectedDate, res.userMessage);
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    TimeEntryPage.prototype.refreshTimesheet = function () {
        this.getTimeEntryDetails(this.selectedDate, '', true);
    };
    /**
     * Return all task id's except fixed holiday
     * @param timesheetList : Timesheet details list
     */
    TimeEntryPage.prototype.getResetTaskIds = function (timesheetList) {
        var taskIds = [];
        if (timesheetList.length > 0) {
            timesheetList.map(function (timesheet) {
                if (timesheet && timesheet.taskList.length > 0) {
                    timesheet.taskList.map(function (task) {
                        if (task.approvalStatus == 2) {
                            // if (task.taskName !== 'FIXED HOLIDAY') {
                            taskIds.push(task.taskId);
                            // }
                        }
                    });
                }
            });
        }
        if (taskIds.length > 0) {
            return taskIds;
        }
    };
    /**
     * Retrieve all dates through the rejected date
     * @param d : rejected date
     */
    TimeEntryPage.prototype.getDates = function (d) {
        var dateArr = [];
        var endDate = __WEBPACK_IMPORTED_MODULE_7_moment___default()(d);
        var j = 5;
        var i = 0;
        while (i <= j) {
            dateArr.push({
                date: __WEBPACK_IMPORTED_MODULE_7_moment___default()(endDate).format("YYYY-MM-DD"),
                day: __WEBPACK_IMPORTED_MODULE_7_moment___default()(endDate, "YYYY-MM-DD").format('ddd'),
                isWeekEnd: (endDate.day() == 6 || endDate.day() == 0) ? true : false,
                isRejectedTimesheet: i == 0 ? false : true
            });
            if (endDate.day() == 6 || endDate.day() == 0) {
                j++;
            }
            // endDate.setDate(endDate.getDate() - 1);
            endDate = __WEBPACK_IMPORTED_MODULE_7_moment___default()(endDate).subtract(1, "days");
            i++;
        }
        return dateArr;
    };
    //Confirm submit 
    TimeEntryPage.prototype.showSubmitConfirmAlert = function (timesheetList) {
        var _this = this;
        var alert = this.utility.presentConfirmation('Are you sure you want to submit this timesheet ?');
        alert.then(function () {
            _this.submitTimesheet(timesheetList);
        });
    };
    /**
     *
     * Method to Perform Submit Action
     */
    TimeEntryPage.prototype.submitTimesheet = function (list) {
        var _this = this;
        var rejectedTimesheetFlag = false;
        var rejectedTaskName = null;
        var timesheetList = [];
        if (list && list.length > 0) {
            list.map(function (item) {
                if (item.taskList.length > 0) {
                    item.taskList.map(function (task) {
                        if (task.approvalStatus !== '0') {
                            //comments mandatory while submitting rejected timesheet
                            if (task.approvalStatus == '3' && task.tsRejected && !task.comments && !rejectedTimesheetFlag) {
                                rejectedTimesheetFlag = true;
                                rejectedTaskName = task.taskName;
                            }
                            timesheetList.push(task);
                        }
                    });
                }
            });
        }
        if (timesheetList.length > 0 && !rejectedTimesheetFlag) {
            var url = "concludetimeentryprocessing";
            var data = {
                "versions": __WEBPACK_IMPORTED_MODULE_6__app_env__["E" /* version */],
                "selectedDate": this.selectedDate,
                "timesheetList": timesheetList,
                "extendTimesheetFillingDate": this.calendarInfo.CalendarDates.extendTimesheetFillingDate
            };
            this.utility.updateLoader(true);
            this.httpProvider.http.zentsCommonService({ url: url, data: data, timeentry: true }).subscribe(function (res) {
                _this.getTimeEntryDetails(_this.selectedDate, res.userMessage);
            }, function (err) {
                _this.utility.updateLoader(false);
            });
        }
        else if (rejectedTimesheetFlag) {
            // this.utility.presentAlert('Please add remarks for ' + rejectedTaskName + ' task');
            this.utility.presentAlert('Please add remarks for rejected timesheets');
        }
    };
    /**
     * Get data to check if the project is migrated to ZenCore
     */
    TimeEntryPage.prototype.getProjectList = function () {
        var _this = this;
        var url = 'projectList';
        var data = {
            "currentDate": this.selectedDate
        };
        this.httpProvider.http.zentsCommonService({ url: url, data: data, addTask: true }).subscribe(function (res) {
            if (res && res.data) {
                var list = res.data;
                if (list.length > 0) {
                    list.map(function (item) {
                        if (item.isZencoreMigrated == 'YES' &&
                            (_this.selectedDate > item.zencoreMigratedDate || _this.selectedDate == item.zencoreMigratedDate)) {
                            _this.tsFlags.showZencoreMigratedMessage = true;
                            _this.data.projectMigratedData = item;
                        }
                    });
                }
            }
        }, function (err) { });
    };
    TimeEntryPage.prototype.ionViewWillLeave = function () {
        this._calendarInfoSubsciption.unsubscribe();
        this._getTimeEntryInfoSubsciption.unsubscribe();
    };
    /**
     * Check if the associate can fill zero hours
     */
    TimeEntryPage.prototype.canFillZeroHoursFlag = function () {
        if (this.calendarInfo.AssociatesBU) {
            return this.calendarInfo.PayrollToBeFilledZeroHours.includes(this.calendarInfo.AssociatesBU);
        }
    };
    TimeEntryPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'bottom',
            cssClass: 'timesheetToastMsg'
        });
        toast.onDidDismiss(function () { });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["D" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["D" /* Slides */])
    ], TimeEntryPage.prototype, "slides", void 0);
    TimeEntryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-time-entry',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\timesheet\time-entry\time-entry.html"*/'<ion-header class="ts-header">\n  <ion-navbar>\n    <ion-title>{{pageTitle}}</ion-title>\n    <button ion-button icon-only clear (click)="getMonthwiseCompliancePercentage(months?.lastMonth,\'lastMonth\')">\n      <img src="assets/zents-imgs/calendar_white_icon.svg" />\n      <span>\n        {{utility.toTitleCase(months?.lastMonth?.substring(0, 3))}}\n      </span>\n    </button>\n    <div class="divider"></div>\n    <button class="current-month" ion-button icon-only clear\n      (click)="getMonthwiseCompliancePercentage(months?.currentMonth,\'currentMonth\')">\n      <img src="assets/zents-imgs/calendar_white_icon.svg" />\n      <span>{{utility.toTitleCase(months?.currentMonth?.substring(0, 3))}}</span>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="timeEntry">\n    <div class="timeEntry-dates" *ngIf="calendarDates">\n      <ion-slides slidesPerView="6.2" dir="rtl">\n        <ion-slide *ngFor="let d of calendarDates;" (click)="onDateSelect(d)">\n          <ion-card [ngClass]="{\'blur\': d.isRejectedTimesheet == true, \'sel-date-bg\': selectedDate == d.date}">\n            <span>{{datePipe.transform(d.date,\'d\')}}</span>\n            <p>{{d.day}}</p>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div class="hour-details" *ngIf="timesheetData">\n      <div>\n        <strong *ngIf="data?.loginDetails">In : </strong>\n        <span class="time">{{data?.loginDetails?.logInTimeHrsMin}} </span>\n        <strong class="padding-left-8" *ngIf="data?.loginDetails">Out : </strong>\n        <span class="time">{{data?.loginDetails?.logOutHrsMin}} </span>\n        <span class="time" *ngIf="data?.loginDetails">({{data?.loginDetails?.efforts}})</span>\n      </div>\n      <div class="submitBtn">\n        <button ion-button round small [disabled]="tsFlags?.disableSubmit"\n          (click)="showSubmitConfirmAlert(timesheetData.taskAndTimesheetDetails)">Submit</button>\n      </div>\n    </div>\n    <div class="timesheet-body">\n      <div class="timesheet-details" text-left\n        *ngFor="let timesheet of timesheetData?.taskAndTimesheetDetails;let i=index;">\n        <div class="project-name">\n          <span>{{utility.toTitleCase(timesheet.title)}}</span>\n        </div>\n        <span *ngFor="let task of timesheet.taskList"> \n          <app-list-item [type]="data?.type" [taskData]="task" [timesheetData]="timesheet" [projIndex]=\'i\'\n            [isTimesheetEditable]="timesheetData?.isTimesheetEditable"\n            [isPayrollToBeFilledZeroHours]="canFillZeroHoursFlag()"\n            (edit)="editAndSaveTimesheet($event,task,timesheetData?.taskAndTimesheetDetails)"\n            (open)="presentEditModal(task,timesheet,timesheetData?.taskAndTimesheetDetails)" (delete)="deleteTimesheet(task, timesheetData?.taskAndTimesheetDetails)" (refresh)="refreshTimesheet()">\n          </app-list-item>\n        </span>\n      </div>\n      <div padding text-center class="noTimesheetMsg"\n        *ngIf="timesheetData == \'null\' || (timesheetData && timesheetData.taskAndTimesheetDetails.length == 0 && !tsFlags?.showZencoreMigratedMessage)">\n        There are no filled timesheets/tasks for the selected date.\n        <div class="inner-div">\n          click on <div class="add"> + </div> to add task.\n        </div>\n      </div>\n      <div padding class="migratedMsg"\n        *ngIf="timesheetData && timesheetData?.taskAndTimesheetDetails.length == 0 && tsFlags?.showZencoreMigratedMessage">\n        Your task for {{data.projectMigratedData.projectName}} are now being managed from ZenCore platform\n        effective {{data.projectMigratedData.zencoreMigratedDate}}.\n        Please get in touch with your manager to get task assigned in ZenCore.\n      </div>\n    </div>\n  </div>\n\n  <span class="ts-fab">\n    <ion-fab right bottom>\n      <button ion-fab (click)="openTimeEntryModal()">\n        <ion-icon name="apps"></ion-icon>\n      </button>\n      <button ion-fab (click)="addTask()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab>\n   \n  </span>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\timesheet\time-entry\time-entry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_5__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_8__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["F" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"]])
    ], TimeEntryPage);
    return TimeEntryPage;
}());

//# sourceMappingURL=time-entry.js.map

/***/ })

});
//# sourceMappingURL=27.js.map