webpackJsonp([28],{

/***/ 1310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskPageModule", function() { return AddTaskPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_task__ = __webpack_require__(1477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddTaskPageModule = /** @class */ (function () {
    function AddTaskPageModule() {
    }
    AddTaskPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_task__["a" /* AddTaskPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_task__["a" /* AddTaskPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__add_task__["a" /* AddTaskPage */]]
        })
    ], AddTaskPageModule);
    return AddTaskPageModule;
}());

//# sourceMappingURL=add-task.module.js.map

/***/ }),

/***/ 1477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_std_task_list_modal_std_task_list_modal__ = __webpack_require__(282);
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






var AddTaskPage = /** @class */ (function () {
    function AddTaskPage(navCtrl, navParams, fb, utility, httpProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.data = {
            type: "add-task",
            task: null,
            projectListForProjectTask: []
        };
        this.projectList = [];
        this.stdTaskList = [];
        this.projRelatedStdTasks = [];
        this.orgRelatedStdTasks = [];
        this.submitted = false;
        this.billabilityList = [];
        this.isFixedBidProject = null;
        this.milestoneList = [];
        this.hideProjectTask = false;
        this.taskAndtimesheetDetails = [];
        this.isPayrollToBeFilledZeroHours = false;
        this.data.task = 'project';
        var data = this.navParams.get('timeEntryData');
        if (data) {
            this.currentDate = data.selectedDate;
            this.hideProjectTask = data.hideProjectTask;
            this.data.task = this.hideProjectTask ? 'standard' : 'project';
            this.taskAndtimesheetDetails = data.taskAndTimesheetDetails;
            this.isPayrollToBeFilledZeroHours = data.isPayrollToBeFilledZeroHours;
            this.resolve = data.resolve;
        }
    }
    AddTaskPage.prototype.ionViewDidLoad = function () {
    };
    AddTaskPage.prototype.ngOnInit = function () {
        //console.log("this.hideProjectTask", this.hideProjectTask);
        this.getProjectList();
        if (this.hideProjectTask) {
            this.getStdTaskList();
        }
        this.standardForm = this.fb.group({
            stdProjectId: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            stdTaskId: [{ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            stdTaskName: [{ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            stdBillabilityName: [{ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            stdTime: [{ value: '', disabled: true }],
            stdRemarks: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            stdMilestone: ['']
        });
        this.standardForm.get('stdTime').setValue(this.isPayrollToBeFilledZeroHours ? '00:00' : '01:00');
    };
    AddTaskPage.prototype.addTask = function (data) {
        this.addProjectTaskService(data);
    };
    AddTaskPage.prototype.onStdProjSelect = function () {
        var _this = this;
        this.standardForm.get('stdTaskId').enable();
        this.standardForm.get('stdTaskName').enable();
        var projId = this.standardForm.get('stdProjectId').value;
        if (this.projectList) {
            this.projectList.map(function (item) {
                if (projId == item.projectId) {
                    _this.selProjectObj = item;
                    _this.billabilityList = _this.utility.checkBillability(item.projectBillability);
                    if (_this.billabilityList.length == 1) {
                        _this.standardForm.get('stdBillabilityName').setValue(_this.billabilityList[0].value);
                    }
                    else {
                        _this.standardForm.get('stdBillabilityName').setValue('');
                    }
                    _this.isFixedBidProject = item.isFixedBidProject;
                    if (_this.isFixedBidProject == 'YES' && item.milestoneDetailsDTOs.length > 0) {
                        _this.milestoneList = item.milestoneDetailsDTOs;
                        _this.standardForm.get('stdMilestone').setValue(_this.milestoneList.length == 1 ? _this.milestoneList[0] : '');
                        _this.milestoneObj = _this.milestoneList[0];
                        _this.standardForm.get('stdMilestone').setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required);
                    }
                    else {
                        _this.standardForm.get('stdMilestone').clearValidators();
                        _this.standardForm.get('stdMilestone').setValue('');
                    }
                }
            });
        }
    };
    AddTaskPage.prototype.onStdTaskSelect = function (e) {
        var _this = this;
        this.standardForm.get('stdBillabilityName').enable();
        this.stdTaskList.map(function (data) {
            if (e == data.taskId) {
                _this.stdTaskObj = data;
                if ((_this.stdTaskObj.taskId == 1039 || _this.stdTaskObj.taskId == 1040 ||
                    _this.stdTaskObj.taskId == 1041 || _this.stdTaskObj.taskId == 1042) && _this.stdTaskObj.zeroHrsCallWaitingFlag == 'YES') {
                    _this.standardForm.get('stdTime').setValue('00:00');
                    _this.standardForm.get('stdTime').disable();
                    _this.standardForm.get('stdRemarks').setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required);
                    _this.standardForm.get('stdRemarks').updateValueAndValidity();
                }
                else {
                    _this.standardForm.get('stdTime').enable();
                    _this.standardForm.get('stdRemarks').clearValidators();
                    _this.standardForm.get('stdRemarks').updateValueAndValidity();
                }
            }
        });
    };
    AddTaskPage.prototype.onBillabilityChange = function (e) { };
    AddTaskPage.prototype.onSubmit = function () {
        if (this.isPayrollToBeFilledZeroHours && this.standardForm.get('stdTime').value == '00:00' && this.standardForm.get('stdRemarks').value == '') {
            this.standardForm.get('stdRemarks').setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required);
            this.standardForm.get('stdRemarks').updateValueAndValidity();
        }
        else if (!this.isPayrollToBeFilledZeroHours && this.standardForm.get('stdTime').value == '00:00') {
            this.standardForm.get('stdTime').setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].min(1));
            this.standardForm.get('stdTime').updateValueAndValidity();
        }
        else {
            this.standardForm.get('stdRemarks').clearValidators();
            this.standardForm.get('stdRemarks').updateValueAndValidity();
        }
        this.submitted = true;
        if (this.standardForm.valid) {
            this.showSaveConfirmAlert();
        }
        else {
            return false;
        }
    };
    //Confirm save 
    AddTaskPage.prototype.showSaveConfirmAlert = function () {
        var _this = this;
        var alert = this.utility.presentConfirmation('Are you sure you want to save this timesheet ?');
        alert.then(function () {
            _this.addTimesheet();
        });
    };
    /**
     * Get Project List
     */
    AddTaskPage.prototype.getProjectList = function () {
        var _this = this;
        var url = 'projectList';
        var data = {
            "currentDate": this.currentDate
        };
        this.utility.updateLoader(true);
        this.httpProvider.http.zentsCommonService({ url: url, data: data, addTask: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res && res.data) {
                _this.projectList = res.data;
                if (_this.projectList && _this.projectList.length > 0) {
                    _this.data.projectListForProjectTask = _this.projectList.filter(function (item) { return item.isZencoreMigrated != 'YES'; });
                    if (_this.projectList.length == 1) {
                        _this.standardForm.get('stdProjectId').setValue(_this.projectList[0].projectId);
                        _this.onStdProjSelect();
                    }
                }
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
        //}
    };
    /**
     * Get Standard Task List
     */
    AddTaskPage.prototype.getStdTaskList = function () {
        var _this = this;
        var url = 'standardTask';
        var data = {
            "currentDate": this.currentDate
        };
        this.httpProvider.http.zentsCommonService({ url: url, data: data, addTask: true }).subscribe(function (res) {
            if (res && res.data) {
                _this.stdTaskList = res.data;
                _this.stdTaskList.map(function (task) {
                    if (task.serviceId == '201') {
                        _this.projRelatedStdTasks.push(task);
                    }
                    else if (task.serviceId == '202') {
                        _this.orgRelatedStdTasks.push(task);
                    }
                });
            }
        });
    };
    /**
     * Method to add ProjectTask
     * @param data
     */
    AddTaskPage.prototype.addProjectTaskService = function (data) {
        var _this = this;
        this.utility.updateLoader(true);
        var url = 'projectTask';
        this.httpProvider.http.zentsCommonService({ url: url, data: data, addTask: true }).subscribe(function (res) {
            if (res && res.userMessage) {
                _this.navCtrl.pop().then(function () { return _this.resolve(res.userMessage); });
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    AddTaskPage.prototype.onMilestoneChange = function (e) {
        var _this = this;
        if (this.milestoneList.length > 0) {
            this.milestoneList.map(function (data) {
                if (e.uuId == data.uuId) {
                    _this.milestoneObj = data;
                }
            });
        }
    };
    /**
     * Call to Save Timesheet
     * @param taskId
     */
    AddTaskPage.prototype.saveTimesheet = function (taskId) {
        var _this = this;
        this.utility.updateLoader(true);
        var url = "processtimeentrytimesheet";
        var data = {
            "taskUpdateDate": this.currentDate,
            "taskName": this.stdTaskObj.taskName,
            "projectName": this.selProjectObj.projectName,
            "projectId": "",
            "totalEfforts": this.utility.convertTime(this.standardForm.get('stdTime').value, 1),
            "billablityFlag": this.standardForm.get('stdBillabilityName').value,
            "approvalStatus": "-1",
            "comments": this.standardForm.get('stdRemarks').value,
            "errorCode": 0,
            "taskId": taskId,
            "staffTaskUpdateCommentsTrackerId": 0,
            "taskInformationId": 0,
            "tokenId": 0,
            "nonbillableEffort": "0.00",
            "billableEffort": "0.00",
            "taskActualEffort": 0,
            "capping": 0,
            "previousEfforts": 0,
            "currentEfforts": 0,
            "approverId": "20542",
            "actualStartDate": "2019-04-30",
            "actualEfforts": 0,
            "startTime": "09:00:00",
            "endTime": "18:00:00",
            "complianceAccessFlag": "",
            "tsRejected": false,
            "billabilityFlag": this.standardForm.get('stdBillabilityName').value,
            "dateLockLimit": 0,
            "listSize": 4,
            "totalEffortsUS": 0,
            "taskEffortsUS": 0,
            "totalEffortsForSave": 0,
            "taskEffortsForSave": 0,
            "isDeleteFlag": 0,
            "isUpdateForDelete": 0,
            "rejectedFlag": "0",
            "validForPriv": "",
            "cappingHrs": 0,
            "callWaitingFlag": "NO",
            "flagForDeleteMealTime": "YES",
            "poInvoiceKey": this.selProjectObj.poInvoiceKey,
            "uuId": this.selProjectObj.uuId == '0' ? this.milestoneObj.uuId : this.selProjectObj.uuId,
            "timesheetStatus": "Saved",
            "effort": 0,
            "versionUpdated": false,
            "zenCoreMigrated": false,
            "selectedDate": this.currentDate,
            "staffId": null,
            "orgStdTask": this.standardForm.get('stdTaskId').value,
            "prjIdStdTask": this.selProjectObj.projectId,
            "effortTypeStdTask": this.standardForm.get('stdBillabilityName').value,
            "remarksStdTask": this.standardForm.get('stdRemarks').value,
            "orgTotalEfforts": this.utility.convertTime(this.standardForm.get('stdTime').value, 1),
            "orgStdTaskName": this.stdTaskObj.taskName,
            "bapPaymentScheduleKey": this.selProjectObj.isFixedBidProject == "YES" ? this.milestoneObj.bapPaymentScheduleKey : "0",
            "milestoneName": this.selProjectObj.isFixedBidProject == "YES" ? this.milestoneObj.milestoneName : "0",
            "mealTimeFlag": this.stdTaskObj.taskName == 'MEAL TIME' ? true : false,
            "resetTaskIds": this.taskAndtimesheetDetails ? this.getResetTaskIds(this.taskAndtimesheetDetails) : null
        };
        this.httpProvider.http.zentsCommonService({ url: url, data: data, timeentry: true }).subscribe(function (res) {
            if (res && res.userMessage) {
                _this.navCtrl.pop().then(function () { return _this.resolve(res.userMessage); });
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    /**
     * Method to add Standard Task and then call saveTimesheet to save the task
     */
    AddTaskPage.prototype.addTimesheet = function () {
        var _this = this;
        var url = 'projectTask';
        var data = {
            "projectId": this.selProjectObj.projectId,
            "taskStartDate": this.currentDate,
            "taskEndDate": this.currentDate,
            "serviceId": this.stdTaskObj.serviceId,
            "taskId": this.standardForm.get('stdTaskId').value,
            "selectedDate": this.currentDate,
            "taskAlias1": this.stdTaskObj.taskName,
            "taskAlias2": this.stdTaskObj.taskName
        };
        this.httpProvider.http.zentsCommonService({ url: url, data: data, addTask: true }).subscribe(function (res) {
            var result = res.data;
            if (result && result.taskId) {
                _this.saveTimesheet(result.taskId);
            }
        });
    };
    /**
    * Return all task id's except fixed holiday
    * @param timesheetList : Timesheet details list
    */
    AddTaskPage.prototype.getResetTaskIds = function (timesheetList) {
        var taskIds = [];
        if (timesheetList.length > 0) {
            timesheetList.map(function (timesheet) {
                if (timesheet && timesheet.taskList && timesheet.taskList.length > 0) {
                    timesheet.taskList.map(function (task) {
                        if (task.approvalStatus == 2) {
                            if (task.taskName !== 'FIXED HOLIDAY') {
                                taskIds.push(task.taskId);
                            }
                        }
                    });
                }
            });
        }
        if (taskIds.length > 0) {
            return taskIds;
        }
    };
    //Open Standard Task List modal
    AddTaskPage.prototype.openStdTaskListModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var listModal;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.selProjectObj) {
                    listModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_std_task_list_modal_std_task_list_modal__["a" /* StdTaskListModalComponent */], {
                        projRelatedStdTasks: this.selProjectObj.isZencoreMigrated == 'YES' ? [] : this.projRelatedStdTasks,
                        orgRelatedStdTasks: this.orgRelatedStdTasks,
                    });
                    listModal.present();
                    listModal.onDidDismiss(function (res) {
                        if (res) {
                            _this.standardForm.get('stdTaskId').setValue(res.taskId);
                            _this.standardForm.get('stdTaskName').setValue(res.taskName);
                            _this.onStdTaskSelect(res.taskId);
                        }
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    AddTaskPage.prototype.getStdTasksData = function () {
        //console.log("Clicked Std Task");
        if (this.stdTaskList.length == 0) {
            this.getStdTaskList();
        }
    };
    AddTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-task',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\timesheet\add-task\add-task.html"*/'<ion-header class="ts-header">\n  <ion-navbar>\n    <ion-title>Add Task</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-segment [(ngModel)]="data.task">\n    <ion-segment-button value="project" [class.hide]="hideProjectTask">\n      Project Task\n    </ion-segment-button>\n    <ion-segment-button value="standard" (click)="getStdTasksData()">\n      Standard Task\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]="data?.task">\n    <div padding *ngSwitchCase="\'project\'">\n      <project-task [projectData]="data?.projectListForProjectTask" [selectedDate]="currentDate"\n        (selectedTaskData)="addTask($event)" [type]="data?.type">\n      </project-task>\n    </div>\n    <div class="std-task" padding *ngSwitchCase="\'standard\'">\n      <form [formGroup]="standardForm" (ngSubmit)="onSubmit(standardForm)">\n         <ion-list>\n          <ion-item no-lines class="borderColor">\n            <ion-select formControlName="stdProjectId" placeholder="Select Project" interface="action-sheet"\n              (ionChange)="onStdProjSelect($event)">\n              <ion-option *ngFor="let item of projectList" [value]="item.projectId">{{item.projectName}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n          <span class="error-msg" *ngIf="standardForm.controls.stdProjectId.errors  && submitted">\n            <p>* Please select Project Name.</p>\n          </span>\n            \n          <ion-grid no-padding class="stdTaskOption">\n            <ion-row>\n              <ion-col col-11>\n                <ion-item no-lines class="stdInput">\n                  <ion-input [readonly]="true" formControlName="stdTaskName" type="text"\n                    placeholder="Select Standard Task" [disabled]="standardForm.controls.stdTaskName.disabled"\n                    (click)="openStdTaskListModal()"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-1 class="down-arrow" (click)="openStdTaskListModal()"\n                [ngStyle]="{\'opacity\': selProjectObj ? 1 : 0.5}">\n                <ion-icon name="arrow-dropdown"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <span class="error-msg" *ngIf="standardForm.controls.stdTaskName.errors  && submitted">\n            <p>* Please select Task Name.</p>\n          </span>\n\n          <ion-item no-lines class="borderColor" margin-top>\n            <ion-select formControlName="stdBillabilityName" placeholder="Select Billability" interface="action-sheet"\n              (ionChange)="onBillabilityChange($event)">\n              <ion-option [value]="billability.value" *ngFor="let billability of billabilityList">\n                {{billability.name}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <span class="error-msg" *ngIf="standardForm.controls.stdBillabilityName.errors  && submitted">\n            <p>* Please select Billability Name.</p>\n          </span>\n\n          <ion-item no-lines class="borderColor" margin-top>\n            <ion-datetime #dateTime displayFormat="HH:mm" minuteValues="00,15,30,45" formControlName="stdTime">\n            </ion-datetime>\n          </ion-item>\n          <span class="error-msg"\n            *ngIf="standardForm.controls.stdTime.errors && standardForm.controls.stdTime.errors.min && submitted">\n            <p>* Please select valid hours.</p>\n          </span>\n\n          <ion-item *ngIf="isFixedBidProject == \'YES\'" no-lines class="borderColor" margin-top>\n            <ion-select placeholder="Select Milestone" formControlName="stdMilestone" interface="action-sheet"\n              (ionChange)="onMilestoneChange($event)">\n              <ion-option [value]="milestone" *ngFor="let milestone of milestoneList">\n                {{milestone.milestoneName}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <span class="error-msg" *ngIf="standardForm.controls.stdMilestone.errors  && submitted">\n            <p>* Please select Milestone Name.</p>\n          </span>\n\n          <ion-item margin-top no-lines class="borderColor stdRemarks">\n            <ion-textarea (keypress)="utility.omit_special_char($event)" formControlName="stdRemarks"\n              placeholder="Remarks" rows="6" cols="6"></ion-textarea>\n          </ion-item>\n          <span class="error-msg" *ngIf="standardForm.controls.stdRemarks.errors  && submitted">\n            <p>* Please add remarks.</p>\n          </span>\n             \n        </ion-list>\n\n        <div class="submitBtn" float-right>\n          <button ion-button round type="submit"> Add Task</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\timesheet\add-task\add-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */]])
    ], AddTaskPage);
    return AddTaskPage;
}());

//# sourceMappingURL=add-task.js.map

/***/ })

});
//# sourceMappingURL=28.js.map