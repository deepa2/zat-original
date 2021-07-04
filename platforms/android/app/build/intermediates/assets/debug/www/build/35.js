webpackJsonp([35],{

/***/ 1438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreApprovalTimesheetPendingPageModule", function() { return PreApprovalTimesheetPendingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pre_approval_timesheet_pending__ = __webpack_require__(1860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PreApprovalTimesheetPendingPageModule = /** @class */ (function () {
    function PreApprovalTimesheetPendingPageModule() {
    }
    PreApprovalTimesheetPendingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pre_approval_timesheet_pending__["a" /* PreApprovalTimesheetPendingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pre_approval_timesheet_pending__["a" /* PreApprovalTimesheetPendingPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], PreApprovalTimesheetPendingPageModule);
    return PreApprovalTimesheetPendingPageModule;
}());

//# sourceMappingURL=pre-approval-timesheet-pending.module.js.map

/***/ }),

/***/ 1860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreApprovalTimesheetPendingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_pre_approval_timesheet_pending_modal_pre_approval_timesheet_pending_modal__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_params__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_approval_timesheet_filter_modal_approval_timesheet_filter_modal__ = __webpack_require__(743);
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
 * Generated class for the PreApprovalTimesheetPendingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreApprovalTimesheetPendingPage = /** @class */ (function () {
    function PreApprovalTimesheetPendingPage(navParams, httpProvider, utility, modalController, events) {
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.utility = utility;
        this.modalController = modalController;
        this.events = events;
        this.pendingtasks = [];
        this.filteredPendingTask = [];
        this.approvedtasks = [];
        this.filteredApprovedTask = [];
        this.rejectedtasks = [];
        this.filteredRejectedTask = [];
        this.selectedProject = "all";
        this.masterIds = [];
        this.flag = {
            isDataAvailable: false,
            showSearchBox: false
        };
        this.TOAST_TYPE = {
            "TYPE_NONE": 0,
            "TYPE_APPROVE": 1,
            "TYPE_REJECT": 2,
            "TYPE_APPROVE_ALL": 3,
        };
        this.TOAST_MSG = "";
        //select options
        this.customAlertOptions = {
            header: 'Select Category',
            cssClass: 'error-modal'
        };
        this.type = "";
        this.TYPE_APPROVED = "approval-approved";
        this.TYPE_PENDING = "approval-pending";
        this.TYPE_REJECTED = "approval-rejected";
        this.projectAllocationList = [];
        this.searchText = "";
        this.filteredData = {
            "selectedProject": navParams.get("selectedProject") ? navParams.get("selectedProject") : "ALL",
            "startDate": navParams.get("startDate"),
            "endDate": navParams.get("endDate")
        };
        this.projectAllocationList = navParams.get("projectAllocationList");
        this.startDate = navParams.get("startDate");
        this.endDate = navParams.get("endDate");
        this.type = navParams.get("type");
        this.tsMinDate = navParams.get("tsMinDate");
        this.tsMaxDate = navParams.get("tsMaxDate");
    }
    PreApprovalTimesheetPendingPage.prototype.ionViewDidLoad = function () {
        if (this.type == this.TYPE_APPROVED) {
            this.getPreApprovalApprovedData(this.filteredData);
        }
        else if (this.type == this.TYPE_PENDING) {
            this.getPreApprovalPendingData(this.filteredData);
        }
        else if (this.type == this.TYPE_REJECTED) {
            this.getPreApprovalRejectedData(this.filteredData);
        }
    };
    PreApprovalTimesheetPendingPage.prototype.getPreApprovalPendingData = function (params) {
        var _this = this;
        var filteredData = {
            "projectId": params.selectedProject ? params.selectedProject : "all",
            "startDate": params.startDate,
            "endDate": params.endDate,
        };
        this.utility.updateLoader(true);
        this.httpProvider.http.zentsCommonService({ url: "/preapprovaltask", data: filteredData, overtime: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res.data) {
                _this.pendingtasks = [];
                if (res.data.hasOwnProperty('pendingtasks')) {
                    _this.pendingtasks = res.data.pendingtasks;
                }
                _this.getFilteredPendingTimesheets();
                _this.flag.isDataAvailable = true;
                if (_this.FLAG_TOAST_TYPE > _this.TOAST_TYPE.TYPE_NONE) {
                    _this.showToastMsg();
                }
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    PreApprovalTimesheetPendingPage.prototype.onRejectClicked = function (item) {
        this.openPendingDetailModalPage(item, true);
    };
    PreApprovalTimesheetPendingPage.prototype.compareFn = function (e1, e2) {
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    };
    // getFilteredProjectByCriteria() {
    //   this.filteredPendingTask = [];
    //   if (this.selectedProject == "all") {
    //     if (this.pendingtasks) {
    //       this.filteredPendingTask = this.pendingtasks;
    //     } else {
    //       this.filteredPendingTask = [];
    //     }
    //   } else {
    //     if (this.pendingtasks && this.pendingtasks.length > 0) {
    //       this.pendingtasks.map((element: any) => {
    //         if (element.projectId == this.selectedProject) {
    //           this.filteredPendingTask.push(element);
    //         }
    //       });
    //     }
    //   }
    //   return this.filteredPendingTask;
    // }
    // onProjectChange() {
    //   this.getFilteredProjectByCriteria();
    // }
    PreApprovalTimesheetPendingPage.prototype.openPendingDetailModalPage = function (item, fromReject) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_4__components_pre_approval_timesheet_pending_modal_pre_approval_timesheet_pending_modal__["a" /* PreApprovalTimesheetPendingModalComponent */], {
                    selectedItem: item,
                    fromReject: fromReject,
                    type: this.type
                });
                modal.present();
                modal.onDidDismiss(function (res) {
                    if (res) {
                        // Reject case
                        if (res.result == 'success') {
                            _this.FLAG_TOAST_TYPE = _this.TOAST_TYPE.TYPE_REJECT;
                            _this.TOAST_MSG = res.msg;
                            _this.getPreApprovalPendingData(_this.filteredData);
                            _this.raiseEvent(-1);
                        } // Approved case
                        else if (res.result == 'approved-success') {
                            _this.FLAG_TOAST_TYPE = _this.TOAST_TYPE.TYPE_APPROVE;
                            _this.TOAST_MSG = res.msg;
                            _this.getPreApprovalPendingData(_this.filteredData);
                            _this.raiseEvent(1);
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    PreApprovalTimesheetPendingPage.prototype.presentAlertConfirmDialog = function () {
        var _this = this;
        var alertDialog = this.utility.presentConfirmation('Are you sure you would like to approve all the timesheets ?', '');
        alertDialog.then(function (res) {
            _this.onApproveAllClicked();
        });
    };
    PreApprovalTimesheetPendingPage.prototype.onApproveAllClicked = function () {
        var _this = this;
        this.masterIds = [];
        if (this.pendingtasks && this.pendingtasks.length > 0) {
            this.pendingtasks.forEach(function (element) {
                _this.masterIds.push(element.apprmasterId);
            });
        }
        var params = {
            "masterIds": this.masterIds,
        };
        if (this.masterIds.length > 0) {
            this.utility.updateLoader(true);
            this.httpProvider.http.zentsCommonService({ url: "/approveallovertimetask", data: params, overtime: true }).subscribe(function (res) {
                _this.utility.updateLoader(false);
                if (res) {
                    _this.FLAG_TOAST_TYPE = _this.TOAST_TYPE.TYPE_APPROVE_ALL;
                    _this.TOAST_MSG = "Timesheets approved successfully.";
                    _this.getPreApprovalPendingData(_this.filteredData);
                    _this.raiseEvent(_this.masterIds.length);
                }
            }, function (err) {
                _this.utility.updateLoader(false);
            });
        }
    };
    Object.defineProperty(PreApprovalTimesheetPendingPage.prototype, "key", {
        get: function () {
            if (this.projects) {
                return Object.keys(this.projects);
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    PreApprovalTimesheetPendingPage.prototype.raiseEvent = function (count) {
        this.events.publish('dashboard:updated', { "preapproval_approved": count });
    };
    PreApprovalTimesheetPendingPage.prototype.showToastMsg = function () {
        if (this.TOAST_MSG) {
            this.utility.showToast(this.TOAST_MSG);
            this.TOAST_MSG = "";
            this.FLAG_TOAST_TYPE = this.TOAST_TYPE.TYPE_NONE;
        }
    };
    PreApprovalTimesheetPendingPage.prototype.onApproveClicked = function (selectedItem) {
        var _this = this;
        this.utility.updateLoader(true);
        selectedItem.comments = "";
        var params = {
            "apprmasterId": selectedItem.apprmasterId,
            "comments": ""
        };
        this.httpProvider.http.zentsCommonService({ url: "approveovertimetask", data: params, overtime: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res) {
                _this.FLAG_TOAST_TYPE = _this.TOAST_TYPE.TYPE_APPROVE;
                _this.TOAST_MSG = "Timesheet approved successfully.";
                _this.getPreApprovalPendingData(_this.filteredData);
                _this.raiseEvent(1);
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    PreApprovalTimesheetPendingPage.prototype.getPreApprovalApprovedData = function (params) {
        var _this = this;
        var filteredData = {
            "projectId": params.selectedProject ? params.selectedProject : "all",
            "startDate": params.startDate,
            "endDate": params.endDate
        };
        this.utility.updateLoader(true);
        this.httpProvider.http.zentsCommonService({ url: "/preapprovalapprovedtask", data: filteredData, overtime: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res.data) {
                _this.approvedtasks = [];
                if (res.data.hasOwnProperty('approvedtasks')) {
                    _this.approvedtasks = res.data.approvedtasks;
                }
                _this.getFilteredApprovedTimesheets();
                _this.flag.isDataAvailable = true;
                if (_this.FLAG_TOAST_TYPE > _this.TOAST_TYPE.TYPE_NONE) {
                    _this.showToastMsg();
                }
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    PreApprovalTimesheetPendingPage.prototype.getPreApprovalRejectedData = function (params) {
        var _this = this;
        var filteredData = {
            "projectId": params.selectedProject ? params.selectedProject : "all",
            "startDate": params.startDate,
            "endDate": params.endDate
        };
        this.utility.updateLoader(true);
        this.httpProvider.http.zentsCommonService({ url: "/preapprovalrejectedtask", data: filteredData, overtime: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res.data) {
                _this.rejectedtasks = [];
                if (res.data.hasOwnProperty('rejectedtasks')) {
                    _this.rejectedtasks = res.data.rejectedtasks;
                }
                _this.getFilteredRejectedTimesheets();
                _this.flag.isDataAvailable = true;
                if (_this.FLAG_TOAST_TYPE > _this.TOAST_TYPE.TYPE_NONE) {
                    _this.showToastMsg();
                }
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    PreApprovalTimesheetPendingPage.prototype.getFilteredApprovedTimesheets = function () {
        this.filteredApprovedTask = [];
        if (this.searchText == "") {
            this.filteredApprovedTask = this.approvedtasks;
        }
        else {
            this.filteredApprovedTask = this.filterApprovedItems(this.searchText);
        }
    };
    PreApprovalTimesheetPendingPage.prototype.filterApprovedItems = function (searchTerm) {
        return this.approvedtasks.filter(function (item) {
            return item.staffName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    PreApprovalTimesheetPendingPage.prototype.getFilteredPendingTimesheets = function () {
        this.filteredPendingTask = [];
        if (this.searchText == "") {
            this.filteredPendingTask = this.pendingtasks;
        }
        else {
            this.filteredPendingTask = this.filterPendingItems(this.searchText);
        }
    };
    PreApprovalTimesheetPendingPage.prototype.filterPendingItems = function (searchTerm) {
        return this.pendingtasks.filter(function (item) {
            return item.staffName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    PreApprovalTimesheetPendingPage.prototype.getFilteredRejectedTimesheets = function () {
        this.filteredRejectedTask = [];
        if (this.searchText == "") {
            this.filteredRejectedTask = this.rejectedtasks;
        }
        else {
            this.filteredRejectedTask = this.filterRejectedItems(this.searchText);
        }
    };
    PreApprovalTimesheetPendingPage.prototype.filterRejectedItems = function (searchTerm) {
        return this.rejectedtasks.filter(function (item) {
            return item.staffName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    PreApprovalTimesheetPendingPage.prototype.getDataSource = function () {
        if (this.type == this.TYPE_APPROVED) {
            return this.filteredApprovedTask;
        }
        else if (this.type == this.TYPE_PENDING) {
            return this.filteredPendingTask;
        }
        else if (this.type == this.TYPE_REJECTED) {
            return this.filteredRejectedTask;
        }
        else {
            return [];
        }
    };
    PreApprovalTimesheetPendingPage.prototype.isAnyRecord = function () {
        if (this.type == this.TYPE_APPROVED) {
            if (this.filteredApprovedTask.length > 0) {
                return true;
            }
        }
        else if (this.type == this.TYPE_PENDING) {
            if (this.filteredPendingTask.length > 0) {
                return true;
            }
        }
        else if (this.type == this.TYPE_REJECTED) {
            if (this.filteredRejectedTask.length > 0) {
                return true;
            }
        }
        return false;
    };
    PreApprovalTimesheetPendingPage.prototype.openFilterModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_6__components_approval_timesheet_filter_modal_approval_timesheet_filter_modal__["a" /* ApprovalTimesheetFilterModalComponent */], {
                    "projectAllocationList": this.projectAllocationList,
                    "startDate": this.startDate,
                    "endDate": this.endDate,
                    "timesheet_type": this.type,
                    "tsMinDate": this.tsMinDate,
                    "tsMaxDate": this.tsMaxDate,
                    "selectedProject": this.filteredData.selectedProject,
                    "selectedCategory": this.filteredData.category,
                    "dash_type": "pre-approval-dashboard"
                }, {
                    showBackdrop: true,
                    enableBackdropDismiss: true,
                    cssClass: "custom-modal"
                });
                modal.present();
                modal.onDidDismiss(function (res) {
                    if (res) {
                        if (res.filterData) {
                            if (res.filterData.type == _this.TYPE_APPROVED) {
                                _this.flag.isDataAvailable = false;
                                _this.type = _this.TYPE_APPROVED;
                                _this.startDate = res.filterData.startDate;
                                _this.endDate = res.filterData.endDate;
                                _this.filteredData.startDate = res.filterData.startDate;
                                _this.filteredData.endDate = res.filterData.endDate;
                                // this.filteredData.category = res.filterData.category;
                                _this.getPreApprovalApprovedData(res.filterData);
                            }
                            else if (res.filterData.type == _this.TYPE_PENDING) {
                                _this.flag.isDataAvailable = false;
                                _this.type = _this.TYPE_PENDING;
                                _this.startDate = res.filterData.startDate;
                                _this.endDate = res.filterData.endDate;
                                _this.filteredData.startDate = res.filterData.startDate;
                                _this.filteredData.endDate = res.filterData.endDate;
                                // this.filteredData.category = res.filterData.category;
                                _this.getPreApprovalPendingData(res.filterData);
                            }
                            else if (res.filterData.type == _this.TYPE_REJECTED) {
                                _this.flag.isDataAvailable = false;
                                _this.type = _this.TYPE_REJECTED;
                                _this.startDate = res.filterData.startDate;
                                _this.endDate = res.filterData.endDate;
                                _this.filteredData.startDate = res.filterData.startDate;
                                _this.filteredData.endDate = res.filterData.endDate;
                                // this.filteredData.category = res.filterData.category;
                                _this.getPreApprovalRejectedData(res.filterData);
                            }
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    PreApprovalTimesheetPendingPage.prototype.showSearchBar = function () {
        this.flag.showSearchBox = true;
    };
    PreApprovalTimesheetPendingPage.prototype.onSearchTextChange = function () {
        if (this.type == this.TYPE_APPROVED) {
            this.getFilteredApprovedTimesheets();
        }
        else if (this.type == this.TYPE_PENDING) {
            this.getFilteredPendingTimesheets();
        }
        else if (this.type == this.TYPE_REJECTED) {
            this.getFilteredRejectedTimesheets();
        }
    };
    PreApprovalTimesheetPendingPage.prototype.onSearchCancel = function () {
        this.flag.showSearchBox = false;
    };
    PreApprovalTimesheetPendingPage.prototype.onSearchClear = function () {
    };
    PreApprovalTimesheetPendingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pre-approval-timesheet-pending',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\dashboard\pre-approval-timesheet-pending\pre-approval-timesheet-pending.html"*/'<!--\n  Generated template for the PreApprovalTimesheetPendingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="ts-header">\n\n  <ion-navbar hideBackButton="flag?.showSearchBox">\n    <ion-title *ngIf="!flag?.showSearchBox" class="approval-ts-title">\n      <span *ngIf="type == TYPE_PENDING">Pending Timesheets</span>\n      <span *ngIf="type == TYPE_APPROVED">Approved Timesheets</span>\n      <span *ngIf="type == TYPE_REJECTED">Rejected Timesheets</span>\n      <!-- Additional Hour Pre-Approval -->\n    </ion-title>\n\n    <ion-buttons *ngIf="!flag?.showSearchBox" end>\n      <button ion-button icon-only (click)="showSearchBar()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="openFilterModal()">\n        <img class="filterIcon" src="assets/imgs/filterIcon.svg" />\n      </button>\n    </ion-buttons>\n\n    <ion-searchbar *ngIf="flag?.showSearchBox" animated="true" [showCancelButton]="true" (ionClear)="onSearchClear()"\n      (ionCancel)="onSearchCancel()" (ionChange)="onSearchTextChange()" [(ngModel)]="searchText"></ion-searchbar>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="isAnyRecord()" class="additionalHourPage">\n    <div *ngIf="filteredPendingTask.length > 0 && flag?.isDataAvailable" class="headSection">\n      <ion-grid>\n        <ion-row *ngIf="filteredPendingTask">\n          <ion-col col-9>\n            <!-- <div class="selectProjectDropviewSection">\n              <ion-item>\n                <ion-label>Select Project</ion-label>\n                <ion-select [(ngModel)]="selectedProject" [selectOptions]="customAlertOptions" interface="action-sheet"\n                  (ionCancel)="onProjectSelCancel()" placeholder="Select One">\n                  <ion-option *ngFor="let project of key" [value]="project">{{projects[project]}}</ion-option>\n                </ion-select>\n              </ion-item>\n            </div> -->\n          </ion-col>\n\n          <ion-col col-3>\n            <div class="approveAllSection">\n              <button ion-button round (click)="presentAlertConfirmDialog()" class="ion-float-right approvAllbtn">Approve\n                All</button>\n            </div>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </div>\n    <div *ngFor="let item of getDataSource()">\n      <pre-approval-timesheet-item [type]="type" (onRejectClicked)="onRejectClicked(item)" (onApproveClicked)="onApproveClicked(item)"\n        (openPreApprovalPendingTS)="openPendingDetailModalPage(item, false)" [item]="item"></pre-approval-timesheet-item>\n    </div>\n  </div>\n  <div *ngIf="!isAnyRecord() && flag?.isDataAvailable" class="noRecords">\n    <p>No records to show.</p>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\dashboard\pre-approval-timesheet-pending\pre-approval-timesheet-pending.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Events */]])
    ], PreApprovalTimesheetPendingPage);
    return PreApprovalTimesheetPendingPage;
}());

//# sourceMappingURL=pre-approval-timesheet-pending.js.map

/***/ })

});
//# sourceMappingURL=35.js.map