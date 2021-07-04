webpackJsonp([29],{

/***/ 1416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyAdditionalHoursPageModule", function() { return ApplyAdditionalHoursPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apply_additional_hours__ = __webpack_require__(1838);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApplyAdditionalHoursPageModule = /** @class */ (function () {
    function ApplyAdditionalHoursPageModule() {
    }
    ApplyAdditionalHoursPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__apply_additional_hours__["a" /* ApplyAdditionalHoursPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__apply_additional_hours__["a" /* ApplyAdditionalHoursPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__apply_additional_hours__["a" /* ApplyAdditionalHoursPage */]]
        })
    ], ApplyAdditionalHoursPageModule);
    return ApplyAdditionalHoursPageModule;
}());

//# sourceMappingURL=apply-additional-hours.module.js.map

/***/ }),

/***/ 1838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyAdditionalHoursPage; });
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






/**
 * Generated class for the ApplyAdditionalHoursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApplyAdditionalHoursPage = /** @class */ (function () {
    function ApplyAdditionalHoursPage(navCtrl, navParams, fb, utility, httpProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.projectList = [];
        this.taskList = [];
        this.compareFlag = false;
        this.showTimeError = false;
        this.projRelatedStdTasks = [];
        this.orgRelatedStdTasks = [];
        this.flags = {
            isSubmitted: false,
            showForm: false
        };
        this.data = {
            pageTitle: null
        };
    }
    ApplyAdditionalHoursPage.prototype.ionViewDidLoad = function () {
    };
    ApplyAdditionalHoursPage.prototype.ngOnInit = function () {
        this.projectForm = this.fb.group({
            ProjName: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            startDate: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            endDate: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            time: ["00:00", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            ServiceName: [{ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            TaskName: [{ value: '' }],
            tname: [{ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            Remarks: '',
            taskID: [""]
        });
        this.getOTProjectList();
        this.dates = this.navParams.get('calendarDates');
        this.resolve = this.dates.resolve;
        this.data.pageTitle = this.dates.pageTitle;
    };
    /**
     * Get Project List
     */
    ApplyAdditionalHoursPage.prototype.getOTProjectList = function () {
        var _this = this;
        var url = 'overtimeproject';
        this.utility.updateLoader(true);
        this.httpProvider.http.zentsCommonGETService({ url: url, overtime: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res && res.data) {
                _this.flags.showForm = true;
                var data = res.data;
                if (data.projects) {
                    _this.projectList = data.projects;
                    _this.projectList.map(function (projectData) {
                        _this.taskList = _this.taskList.concat(projectData.overtimetasks);
                    });
                }
                _this.taskList = _this.taskList.concat(data.standardtaks);
                _this.taskList.map(function (task) {
                    if (task.serviceId == '201') {
                        _this.projRelatedStdTasks.push(task);
                    }
                    else if (task.serviceId == '202') {
                        _this.orgRelatedStdTasks.push(task);
                    }
                });
                _this.updateFormData();
            }
        });
    };
    /**
     * default select project if the associate is allocated to single project
     */
    ApplyAdditionalHoursPage.prototype.updateFormData = function () {
        if (this.projectList && this.projectList.length == 1) {
            this.projectForm.patchValue({
                "ProjName": this.projectList[0]
            });
            this.projectForm.get('tname').enable();
        }
    };
    ApplyAdditionalHoursPage.prototype.onProjectSelect = function (event) {
        this.projectForm.get('tname').enable();
    };
    ApplyAdditionalHoursPage.prototype.onEndDateSelect = function (e) {
        this.compareFlag = new Date(this.projectForm.get('endDate').value) < new Date(this.projectForm.get('startDate').value);
    };
    ApplyAdditionalHoursPage.prototype.onStartDateSelect = function (e) {
        this.compareFlag = new Date(this.projectForm.get('startDate').value) > new Date(this.projectForm.get('endDate').value);
    };
    ApplyAdditionalHoursPage.prototype.onTimeChange = function (e) {
        this.showTimeError = this.projectForm.get('time').value == '00:00' ? true : false;
    };
    //Confirm save 
    ApplyAdditionalHoursPage.prototype.addTaskConfirmAlert = function () {
        var _this = this;
        this.flags.isSubmitted = true;
        this.showTimeError = this.projectForm.get('time').value == '00:00' ? true : false;
        if (this.projectForm.valid && !this.compareFlag && !this.showTimeError) {
            var alert_1 = this.utility.presentConfirmation('Are you sure you want to apply additional hours for the task ?');
            alert_1.then(function () {
                _this.addTask();
            });
        }
    };
    /**
     * Method to apply OT
     */
    ApplyAdditionalHoursPage.prototype.addTask = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var formValue = this.projectForm.value;
        var data = {
            "projectId": formValue.ProjName.projectId,
            "estStartDate": formValue.startDate,
            "estEndDate": formValue.endDate,
            "workhr": parseFloat(this.transformTime(formValue.time)),
            "comments": formValue.Remarks,
            "serviceId": formValue.TaskName.serviceId,
            "taskId": formValue.TaskName.taskId,
            "taskName": formValue.TaskName.taskName,
            "projectName": formValue.ProjName.projectName
        };
        if (this.projectForm.valid) {
            var url = "overtime";
            this.httpProvider.http.zentsCommonService({ url: url, data: data, overtime: true }).subscribe(function (res) {
                if (res && res.userMessage) {
                    _this.navCtrl.pop().then(function () { return _this.resolve(res.userMessage); });
                }
            }, function (err) {
                _this.utility.updateLoader(false);
            });
        }
        else {
            return false;
        }
    };
    ApplyAdditionalHoursPage.prototype.transformTime = function (value) {
        return value.replace(":", '.');
    };
    //open task list modal
    ApplyAdditionalHoursPage.prototype.openTaskListModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var listModal;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.projectForm.get('ProjName').value) {
                    listModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_std_task_list_modal_std_task_list_modal__["a" /* StdTaskListModalComponent */], {
                        projRelatedStdTasks: this.projRelatedStdTasks,
                        orgRelatedStdTasks: this.orgRelatedStdTasks
                    });
                    listModal.present();
                    listModal.onDidDismiss(function (res) {
                        if (res) {
                            _this.projectForm.get('TaskName').setValue(res);
                            _this.projectForm.get('tname').setValue(res.taskName);
                        }
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    ApplyAdditionalHoursPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-apply-additional-hours',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\overtime\apply-additional-hours\apply-additional-hours.html"*/'<!--\n  Generated template for the ApplyAdditionalHoursPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="ts-header">\n\n  <ion-navbar>\n    <ion-title>{{data?.pageTitle}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form *ngIf="flags?.showForm" [formGroup]="projectForm" (ngSubmit)="addTaskConfirmAlert()">\n    <ion-list>\n      <ion-item no-lines class="borderColor">\n        <ion-select formControlName="ProjName" placeholder="Select Project" interface="action-sheet"\n          [disabled]="projectList.length == 1" (ionChange)="onProjectSelect($event)" *ngIf="projectList.length > 0">\n          <ion-option *ngFor="let project of projectList" [value]="project">{{project.projectName}}\n          </ion-option>\n        </ion-select>\n        <ion-select interface="action-sheet" disabled *ngIf="projectList.length == 0">\n          <ion-option selected>No project to select</ion-option>\n        </ion-select>\n      </ion-item>\n      <span class="error-msg" *ngIf="projectForm.controls.ProjName.errors  && flags?.isSubmitted">\n        <p>* Please select Project Name.</p>\n      </span>\n\n      <ion-grid no-padding margin-top>\n        <ion-row>\n          <ion-col no-padding class="dateBorderColor marginRight">\n            <ion-datetime formControlName="startDate" displayFormat="DD-MMM-YYYY" pickerFormat="DD MMM YYYY"\n              placeholder="Start Date" [min]="dates?.applyCalendarMinDate" [max]="dates?.applyCalendarMaxDate"\n              (ionChange)="onStartDateSelect($event)">\n            </ion-datetime>\n          </ion-col>\n          <ion-col no-padding class="dateBorderColor">\n            <ion-datetime formControlName="endDate" displayFormat="DD-MMM-YYYY" pickerFormat="DD MMM YYYY"\n              placeholder="End Date" [min]="dates?.applyCalendarMinDate" [max]="dates?.applyCalendarMaxDate"\n              (ionChange)="onEndDateSelect($event)">\n            </ion-datetime>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <span float-left class="error-msg width-50"\n        *ngIf="flags?.isSubmitted && !projectForm.controls.ProjName.errors && projectForm.controls.startDate.errors">\n        <p>* Please select Start Date.</p>\n      </span>\n      <span float-right class="error-msg width-50"\n        *ngIf="flags?.isSubmitted && !projectForm.controls.ProjName.errors && projectForm.controls.endDate.errors">\n        <p>* Please select end Date.</p>\n      </span>\n      <span class="error-msg" *ngIf="compareFlag">\n        <p>* End date should be greater than start date.</p>\n      </span>\n\n      <ion-item no-lines class="borderColor" margin-top>\n        <ion-datetime #dateTime displayFormat="HH:mm" minuteValues="00,15,30,45" formControlName="time"\n          (ionChange)="onTimeChange($event)">\n        </ion-datetime>\n      </ion-item>\n      <span class="error-msg" *ngIf="showTimeError">\n        <p>* Please select valid hours.</p>\n      </span>\n\n      <ion-grid no-padding class="taskOption" margin-top>\n        <ion-row>\n          <ion-col col-11>\n            <ion-item no-lines class="taskInput">\n              <ion-input [readonly]="true" formControlName="tname" type="text" placeholder="Select Task"\n                [disabled]="projectForm.controls.tname.disabled" (click)="openTaskListModal()"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-1 class="down-arrow" (click)="openTaskListModal()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <span class="error-msg" *ngIf="flags?.isSubmitted && projectForm.controls.tname.errors">\n        <p>* Please select task name.</p>\n      </span>\n\n      <ion-item no-lines class="borderColor remarks" margin-top>\n        <ion-textarea (keypress)="utility.omit_special_char($event)" formControlName="Remarks" placeholder="Remarks"\n          rows="6" cols="6"></ion-textarea>\n      </ion-item>\n    </ion-list>\n    <div class="submitBtn" float-right>\n      <button ion-button round type="submit"> Add Task</button>\n    </div>\n\n  </form>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\overtime\apply-additional-hours\apply-additional-hours.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */]])
    ], ApplyAdditionalHoursPage);
    return ApplyAdditionalHoursPage;
}());

//# sourceMappingURL=apply-additional-hours.js.map

/***/ })

});
//# sourceMappingURL=29.js.map