webpackJsonp([38],{

/***/ 1446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalTimesheetApprovedPageModule", function() { return ApprovalTimesheetApprovedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__approval_timesheet_approved__ = __webpack_require__(1869);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ApprovalTimesheetApprovedPageModule = /** @class */ (function () {
    function ApprovalTimesheetApprovedPageModule() {
    }
    ApprovalTimesheetApprovedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__approval_timesheet_approved__["a" /* ApprovalTimesheetApprovedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__approval_timesheet_approved__["a" /* ApprovalTimesheetApprovedPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ApprovalTimesheetApprovedPageModule);
    return ApprovalTimesheetApprovedPageModule;
}());

//# sourceMappingURL=approval-timesheet-approved.module.js.map

/***/ }),

/***/ 1869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApprovalTimesheetApprovedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_approval_timesheet_approve_modal_approval_timesheet_approve_modal__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_approval_timesheet_filter_modal_approval_timesheet_filter_modal__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_approval_timesheet_pending_modal_approval_timesheet_pending_modal__ = __webpack_require__(763);
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
 * Generated class for the ApprovalTimesheetApprovedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApprovalTimesheetApprovedPage = /** @class */ (function () {
    function ApprovalTimesheetApprovedPage(navParams, httpProvider, utility, modalController, events) {
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.utility = utility;
        this.modalController = modalController;
        this.events = events;
        this.dashboardDataUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.approvedTimesheets = [];
        this.filteredApprovedTimesheets = [];
        this.pendingTimesheets = [];
        this.filteredPendingTimesheets = [];
        this.rejectedTimesheets = [];
        this.filteredRejectedTimesheets = [];
        this.searchText = "";
        this.type = "";
        this.TYPE_APPROVED = "approval-approved";
        this.TYPE_PENDING = "approval-pending";
        this.TYPE_REJECTED = "approval-rejected";
        this.TYPE_NONE = 0;
        this.TYPE_APPROVE = 1;
        this.TYPE_REJECT = 2;
        this.TYPE_APPROVE_ALL = 3;
        this.projectAllocationList = [];
        this.TOAST_MSG = "";
        this.flags = {
            showSearchBox: false,
            isApiCalled: false
        };
        this.selectAllTimesheets = true;
        this.doUpdate = true;
        this.filteredData = {
            "selectedProject": navParams.get("selectedProject") ? navParams.get("selectedProject") : "ALL",
            "startDate": navParams.get("startDate"),
            "endDate": navParams.get("endDate"),
            "category": navParams.get("selectedCategory") ? navParams.get("selectedCategory") : "ALL"
        };
        this.projectAllocationList = navParams.get("projectAllocationList");
        this.startDate = navParams.get("startDate");
        this.endDate = navParams.get("endDate");
        this.type = navParams.get("type");
        this.tsMinDate = navParams.get("tsMinDate");
        this.tsMaxDate = navParams.get("tsMaxDate");
        // this.updateSelectAll();
    }
    ApprovalTimesheetApprovedPage.prototype.ionViewDidLoad = function () {
        if (this.type == this.TYPE_APPROVED) {
            this.getApprovalTsData(this.filteredData);
        }
        else if (this.type == this.TYPE_PENDING) {
            this.getPendingTsData(this.filteredData);
        }
        else if (this.type == this.TYPE_REJECTED) {
            this.getRejectedTsData(this.filteredData);
        }
    };
    ApprovalTimesheetApprovedPage.prototype.getApprovalTsData = function (params) {
        var _this = this;
        var category = "ALL";
        if (params.category) {
            if (params.category == "OVERTIME") {
                category = "ALL";
            }
            else {
                category = params.category;
            }
        }
        var filteredData = {
            "projectId": params.selectedProject ? params.selectedProject : "ALL",
            "startDate": params.startDate,
            "endDate": params.endDate,
            "category": category
        };
        this.utility.updateLoader(true);
        this.httpProvider.http.zentsCommonService({ url: "getEmployeeApprovedList", data: filteredData, dashboard: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res) {
                _this.flags.isApiCalled = true;
                if (res.allApprovedTimesheetList) {
                    _this.approvedTimesheets = res.allApprovedTimesheetList;
                }
                else {
                    _this.approvedTimesheets = [];
                }
                _this.getFilteredApprovedTimesheets();
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    ApprovalTimesheetApprovedPage.prototype.getFilteredApprovedTimesheets = function () {
        this.filteredApprovedTimesheets = [];
        if (this.searchText == "") {
            this.filteredApprovedTimesheets = this.approvedTimesheets;
        }
        else {
            this.filteredApprovedTimesheets = this.filterApprovedItems(this.searchText);
        }
        if (this.filteredData.category == "OVERTIME") {
            this.filteredApprovedTimesheets = this.filterOvertimeApprovedItems();
        }
    };
    ApprovalTimesheetApprovedPage.prototype.filterOvertimeApprovedItems = function () {
        return this.filteredApprovedTimesheets.filter(function (item) {
            return (item.additionalHrsFlag == "YES");
        });
    };
    ApprovalTimesheetApprovedPage.prototype.filterApprovedItems = function (searchTerm) {
        return this.approvedTimesheets.filter(function (item) {
            return item.staffName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    ApprovalTimesheetApprovedPage.prototype.openApprovalModalPage = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var editModal;
            return __generator(this, function (_a) {
                editModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_4__components_approval_timesheet_approve_modal_approval_timesheet_approve_modal__["a" /* ApprovalTimesheetApproveModalComponent */], {
                    selectedItem: item
                }, {
                    showBackdrop: true,
                    enableBackdropDismiss: true,
                    cssClass: "custom-modal"
                });
                editModal.present();
                editModal.onDidDismiss(function (res) {
                    if (res) {
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ApprovalTimesheetApprovedPage.prototype.showSearchBar = function () {
        this.flags.showSearchBox = true;
    };
    ApprovalTimesheetApprovedPage.prototype.onSearchTextChange = function () {
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
    ApprovalTimesheetApprovedPage.prototype.onSearchCancel = function () {
        this.flags.showSearchBox = false;
    };
    ApprovalTimesheetApprovedPage.prototype.onSearchClear = function () {
    };
    ApprovalTimesheetApprovedPage.prototype.openFilterModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_5__components_approval_timesheet_filter_modal_approval_timesheet_filter_modal__["a" /* ApprovalTimesheetFilterModalComponent */], {
                    "projectAllocationList": this.projectAllocationList,
                    "startDate": this.startDate,
                    "endDate": this.endDate,
                    "timesheet_type": this.type,
                    "tsMinDate": this.tsMinDate,
                    "tsMaxDate": this.tsMaxDate,
                    "selectedProject": this.filteredData.selectedProject,
                    "selectedCategory": this.filteredData.category,
                    "dash_type": "approval-dashboard"
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
                                _this.flags.isApiCalled = false;
                                _this.type = _this.TYPE_APPROVED;
                                _this.startDate = res.filterData.startDate;
                                _this.endDate = res.filterData.endDate;
                                _this.filteredData.startDate = res.filterData.startDate;
                                _this.filteredData.endDate = res.filterData.endDate;
                                _this.filteredData.category = res.filterData.category;
                                _this.getApprovalTsData(res.filterData);
                            }
                            else if (res.filterData.type == _this.TYPE_PENDING) {
                                _this.flags.isApiCalled = false;
                                _this.type = _this.TYPE_PENDING;
                                _this.startDate = res.filterData.startDate;
                                _this.endDate = res.filterData.endDate;
                                _this.filteredData.startDate = res.filterData.startDate;
                                _this.filteredData.endDate = res.filterData.endDate;
                                _this.filteredData.category = res.filterData.category;
                                _this.getPendingTsData(res.filterData);
                            }
                            else if (res.filterData.type == _this.TYPE_REJECTED) {
                                _this.flags.isApiCalled = false;
                                _this.type = _this.TYPE_REJECTED;
                                _this.startDate = res.filterData.startDate;
                                _this.endDate = res.filterData.endDate;
                                _this.filteredData.startDate = res.filterData.startDate;
                                _this.filteredData.endDate = res.filterData.endDate;
                                _this.filteredData.category = res.filterData.category;
                                _this.getRejectedTsData(res.filterData);
                            }
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ApprovalTimesheetApprovedPage.prototype.getPendingTsData = function (params) {
        var _this = this;
        var category = "ALL";
        if (params.category) {
            if (params.category == "OVERTIME") {
                category = "ALL";
            }
            else {
                category = params.category;
            }
        }
        var filteredData = {
            "projectId": params.selectedProject ? params.selectedProject : "ALL",
            "startDate": params.startDate,
            "endDate": params.endDate,
            "category": category
        };
        this.utility.updateLoader(true);
        this.httpProvider.http.zentsCommonService({ url: "getEmployeePendingList", data: filteredData, dashboard: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res) {
                _this.flags.isApiCalled = true;
                if (res.allPendingTimesheetList) {
                    _this.pendingTimesheets = res.allPendingTimesheetList;
                    // this.pendingTimesheets.map(item => item.checked = true);
                }
                else {
                    _this.pendingTimesheets = [];
                }
                _this.getFilteredPendingTimesheets();
                if (_this.FLAG_TOAST_TYPE > _this.TYPE_NONE) {
                    _this.showToastMsg();
                }
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    ApprovalTimesheetApprovedPage.prototype.getFilteredPendingTimesheets = function () {
        this.filteredPendingTimesheets = [];
        if (this.searchText == "") {
            this.filteredPendingTimesheets = this.pendingTimesheets;
        }
        else {
            this.filteredPendingTimesheets = this.filterPendingItems(this.searchText);
        }
        if (this.filteredData.category == "OVERTIME") {
            this.filteredPendingTimesheets = this.filterOvertimePendingItems();
        }
        this.updateSelectAll();
        return this.filteredPendingTimesheets;
    };
    ApprovalTimesheetApprovedPage.prototype.filterOvertimePendingItems = function () {
        return this.filteredPendingTimesheets.filter(function (item) {
            return item.additionalHrsFlag == "YES" ? true : false;
        });
    };
    ApprovalTimesheetApprovedPage.prototype.filterPendingItems = function (searchTerm) {
        return this.pendingTimesheets.filter(function (item) {
            return item.staffName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    ApprovalTimesheetApprovedPage.prototype.openPendingDetailModalPage = function (item, fromReject) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_6__components_approval_timesheet_pending_modal_approval_timesheet_pending_modal__["a" /* ApprovalTimesheetPendingModalComponent */], {
                    selectedItem: item,
                    fromReject: fromReject
                }, {
                    showBackdrop: true,
                    enableBackdropDismiss: true,
                    cssClass: "custom-modal"
                });
                modal.present();
                modal.onDidDismiss(function (res) {
                    if (res) {
                        // Reject case
                        if (res.result == 'success') {
                            _this.FLAG_TOAST_TYPE = _this.TYPE_REJECT;
                            _this.TOAST_MSG = res.msg;
                            _this.getPendingTsData(_this.filteredData);
                            _this.raiseEvent(-1);
                        }
                        // Approved case
                        else if (res.result == 'approved-success') {
                            _this.FLAG_TOAST_TYPE = _this.TYPE_APPROVE;
                            _this.TOAST_MSG = res.msg;
                            _this.getPendingTsData(_this.filteredData);
                            _this.raiseEvent(1);
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ApprovalTimesheetApprovedPage.prototype.isAnyRecord = function () {
        if (this.type == this.TYPE_APPROVED) {
            if (this.filteredApprovedTimesheets.length > 0) {
                return true;
            }
        }
        else if (this.type == this.TYPE_PENDING) {
            if (this.filteredPendingTimesheets.length > 0) {
                return true;
            }
        }
        else if (this.type == this.TYPE_REJECTED) {
            if (this.filteredRejectedTimesheets.length > 0) {
                return true;
            }
        }
        return false;
    };
    ApprovalTimesheetApprovedPage.prototype.getDataSource = function () {
        if (this.type == this.TYPE_APPROVED) {
            return this.filteredApprovedTimesheets;
        }
        else if (this.type == this.TYPE_PENDING) {
            return this.filteredPendingTimesheets;
        }
        else if (this.type == this.TYPE_REJECTED) {
            return this.filteredRejectedTimesheets;
        }
        else {
            return [];
        }
    };
    ApprovalTimesheetApprovedPage.prototype.presentAlertConfirmDialog = function (data) {
        var _this = this;
        var text = data.length == this.pendingTimesheets.length ? 'all the' : 'selected';
        var alert = this.utility.presentConfirmation("Are you sure you would like to approve " + text + " timesheets ?", '');
        alert.then(function () {
            _this.onApproveAllClicked(data);
        });
    };
    ApprovalTimesheetApprovedPage.prototype.onApproveAllClicked = function (selectedPendingTimesheets) {
        var _this = this;
        var params = {
            "approvalStatus": "1",
            "comments": "",
            "timesheetList": selectedPendingTimesheets
        };
        // this.approvedTSCount = this.filteredPendingTimesheets.length;
        this.utility.updateLoader(true);
        this.httpProvider.http.zentsCommonService({ url: "v1/sanctiontimesheets", data: params, dashboard: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res) {
                _this.FLAG_TOAST_TYPE = _this.TYPE_APPROVE_ALL;
                _this.TOAST_MSG = "Timesheets approved successfully.";
                // this.raiseEvent(this.filteredPendingTimesheets.length);
                _this.raiseEvent(selectedPendingTimesheets.length);
                _this.getPendingTsData(_this.filteredData);
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    ApprovalTimesheetApprovedPage.prototype.raiseEvent = function (count) {
        this.events.publish('dashboard:updated', { "approval_approved": count });
    };
    ApprovalTimesheetApprovedPage.prototype.showToastMsg = function () {
        if (this.TOAST_MSG) {
            this.utility.showToast(this.TOAST_MSG);
            this.TOAST_MSG = "";
            this.FLAG_TOAST_TYPE = this.TYPE_NONE;
        }
    };
    ApprovalTimesheetApprovedPage.prototype.onApprovalRejectClicked = function (item) {
        this.openPendingDetailModalPage(item, true);
    };
    ApprovalTimesheetApprovedPage.prototype.onApprovalApproveClicked = function (item) {
        var _this = this;
        this.utility.updateLoader(true);
        item.comments = "";
        var params = {
            "approvalStatus": "1",
            "comments": "",
            "timesheetList": [
                item
            ]
        };
        this.httpProvider.http.zentsCommonService({ url: "/v1/sanctiontimesheets", data: params, dashboard: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res) {
                // Approved Event
                _this.FLAG_TOAST_TYPE = _this.TYPE_APPROVE;
                _this.TOAST_MSG = "Timesheet approved successfully.";
                _this.getPendingTsData(_this.filteredData);
                _this.raiseEvent(1);
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    ApprovalTimesheetApprovedPage.prototype.getRejectedTsData = function (params) {
        var _this = this;
        var category = "ALL";
        if (params.category) {
            if (params.category == "OVERTIME") {
                category = "ALL";
            }
            else {
                category = params.category;
            }
        }
        var filteredData = {
            "projectId": params.selectedProject ? params.selectedProject : "ALL",
            "startDate": params.startDate,
            "endDate": params.endDate,
            "category": category
        };
        this.utility.updateLoader(true);
        this.httpProvider.http.zentsCommonService({ url: "getEmployeeRejectedList", data: filteredData, dashboard: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res) {
                _this.flags.isApiCalled = true;
                if (res.allRejectedTimesheetList) {
                    _this.rejectedTimesheets = res.allRejectedTimesheetList;
                }
                else {
                    _this.rejectedTimesheets = [];
                }
                _this.getFilteredRejectedTimesheets();
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    ApprovalTimesheetApprovedPage.prototype.getFilteredRejectedTimesheets = function () {
        this.filteredRejectedTimesheets = [];
        if (this.searchText == "") {
            this.filteredRejectedTimesheets = this.rejectedTimesheets;
        }
        else {
            this.filteredRejectedTimesheets = this.filterRejectedItems(this.searchText);
        }
        if (this.filteredData.category == "OVERTIME") {
            this.filteredRejectedTimesheets = this.filterOvertimeRejectedItems();
        }
    };
    ApprovalTimesheetApprovedPage.prototype.filterOvertimeRejectedItems = function () {
        return this.filteredRejectedTimesheets.filter(function (item) {
            return (item.additionalHrsFlag == "YES");
        });
    };
    ApprovalTimesheetApprovedPage.prototype.filterRejectedItems = function (searchTerm) {
        return this.rejectedTimesheets.filter(function (item) {
            return item.staffName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    ApprovalTimesheetApprovedPage.prototype.updateSelectAll = function (value) {
        var _this = this;
        if (value === void 0) { value = true; }
        if (value)
            this.doUpdate = value;
        if (this.filteredPendingTimesheets.length > 0 && this.doUpdate) {
            this.filteredPendingTimesheets.map(function (item) {
                item.checked = _this.selectAllTimesheets;
            });
        }
    };
    ApprovalTimesheetApprovedPage.prototype.toggleCheck = function (obj) {
        obj.checked = !obj.checked;
        var selectedItemsArray = this.filteredPendingTimesheets.filter(function (item) { return item.checked == true; });
        if (selectedItemsArray.length == 0) {
            this.selectAllTimesheets = false;
            this.doUpdate = true;
        }
        else if (selectedItemsArray.length == this.filteredPendingTimesheets.length) {
            this.selectAllTimesheets = true;
            this.doUpdate = true;
        }
        else if (selectedItemsArray.length < this.filteredPendingTimesheets.length) {
            this.selectAllTimesheets = false;
            this.doUpdate = false;
        }
        // this.selectAllTimesheets = selectedItemsArray.length == this.pendingList.length ? true : false;
        // console.log('selsctedItemsArray: ', selectedItemsArray);
    };
    ApprovalTimesheetApprovedPage.prototype.approveSelectedTimesheets = function () {
        var selectedTimesheets = this.filteredPendingTimesheets.filter(function (item) { return item.checked == true; });
        if (selectedTimesheets.length > 0) {
            this.presentAlertConfirmDialog(selectedTimesheets);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ApprovalTimesheetApprovedPage.prototype, "dashboardDataUpdated", void 0);
    ApprovalTimesheetApprovedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-approval-timesheet-approved',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\dashboard\approval-timesheet-approved\approval-timesheet-approved.html"*/'<!--\n  Generated template for the ApprovalTimesheetApprovedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="ts-header">\n  <ion-navbar hideBackButton="flags?.showSearchBox">\n    <ion-title *ngIf="!flags?.showSearchBox" class="approval-ts-title">\n      Timesheets\n    </ion-title>\n\n    <ion-buttons *ngIf="!flags?.showSearchBox" end>\n      <button margin-right ion-button icon-only (click)="showSearchBar()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <!-- <button class="allCheckbox">\n        <ion-checkbox [(ngModel)]="selectAllTimesheets" (ionChange)="updateSelectAll(selectAllTimesheets)"></ion-checkbox>\n        <ion-label>ALL</ion-label>\n      </button> -->\n      <button ion-button icon-only (click)="openFilterModal()">\n        <img class="filterIcon" src="assets/imgs/filterIcon.svg" />\n      </button>\n    </ion-buttons>\n\n    <ion-searchbar *ngIf="flags?.showSearchBox" animated="true" [showCancelButton]="true" (ionClear)="onSearchClear()"\n      (ionCancel)="onSearchCancel()" (ionChange)="onSearchTextChange()" [(ngModel)]="searchText"></ion-searchbar>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div [ngStyle]="{\'margin-bottom\':(type == TYPE_PENDING) && isAnyRecord() ? \'56px\' : \'0px\'}">\n    <div class="headSection">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n              <span *ngIf="type == TYPE_PENDING">Pending Timesheets</span>\n              <span *ngIf="type == TYPE_APPROVED">Approved Timesheets</span>\n              <span *ngIf="type == TYPE_REJECTED">Rejected Timesheets</span>\n          </ion-col>\n          <ion-col *ngIf="(type == TYPE_PENDING) && isAnyRecord()">\n            <div class="selectAllSection">\n              <ion-checkbox [(ngModel)]="selectAllTimesheets" (ionChange)="updateSelectAll(selectAllTimesheets)"></ion-checkbox>\n              <span>Select All</span>\n            </div>\n          </ion-col>\n          <!-- <ion-col col-6>\n            <div class="approveAllSection" *ngIf="(type == TYPE_PENDING) && isAnyRecord()">\n              <button ion-button round (click)="presentAlertConfirmDialog()" class="ion-float-right approvAllbtn">Approve\n                All</button>\n            </div>\n          </ion-col> -->\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div *ngIf="isAnyRecord()">\n      <div *ngFor="let item of getDataSource()">\n        <approval-timesheet-item *ngIf="this.filteredData.category != \'OVERTIME\'" [type]="type"\n          (onApprovalRejectClicked)="onApprovalRejectClicked(item)" (onApprovalApproveClicked)="onApprovalApproveClicked(item)"\n          (open)="openApprovalModalPage(item)" (openApprovalPendingTS)="openPendingDetailModalPage(item, false)" [item]="item"\n          (toggleCheck)="toggleCheck($event)"></approval-timesheet-item>\n        <approval-timesheet-item *ngIf="this.filteredData.category == \'OVERTIME\' && item.additionalHrsFlag == \'YES\'"\n          [type]="type" (onApprovalRejectClicked)="onApprovalRejectClicked(item)" (onApprovalApproveClicked)="onApprovalApproveClicked(item)"\n          (open)="openApprovalModalPage(item)" (openApprovalPendingTS)="openPendingDetailModalPage(item, false)" [item]="item"></approval-timesheet-item>\n      </div>\n    </div>\n  </div>\n  <div *ngIf="!isAnyRecord() && flags?.isApiCalled" class="noRecords">\n    <p>No records to show.</p>\n  </div>\n\n  <!-- <ion-fab right bottom>\n    <button ion-fab (click)="openFilterModal()">\n      <img class="filterIcon" src="assets/imgs/filterIcon.svg" />\n    </button>\n  </ion-fab> -->\n\n</ion-content>\n<ion-footer text-center *ngIf="(type == TYPE_PENDING) && isAnyRecord()" [ngStyle]="{\'background-color\':(type == TYPE_PENDING) && isAnyRecord() ? \'white\' : \'transparent\'}">\n    <button class="okayBtn" ion-button round small (click)="approveSelectedTimesheets()" [disabled]="doUpdate && !selectAllTimesheets">Approve</button>\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\dashboard\approval-timesheet-approved\approval-timesheet-approved.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Events */]])
    ], ApprovalTimesheetApprovedPage);
    return ApprovalTimesheetApprovedPage;
}());

//# sourceMappingURL=approval-timesheet-approved.js.map

/***/ })

});
//# sourceMappingURL=38.js.map