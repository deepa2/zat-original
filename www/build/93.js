webpackJsonp([93],{

/***/ 1426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageModule", function() { return PopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover__ = __webpack_require__(1848);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopoverPageModule = /** @class */ (function () {
    function PopoverPageModule() {
    }
    PopoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__popover__["a" /* PopoverPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__popover__["a" /* PopoverPage */]),
            ]
        })
    ], PopoverPageModule);
    return PopoverPageModule;
}());

//# sourceMappingURL=popover.module.js.map

/***/ }),

/***/ 1848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_constants__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__container_zen_admin_add_new_driver_model_add_new_driver_model__ = __webpack_require__(752);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PopoverPage = /** @class */ (function () {
    function PopoverPage(viewCtrl, utilitiy, dataService, navCtrl, navParams, alertCtrl, appCtrl, modalCtrl, store) {
        this.viewCtrl = viewCtrl;
        this.utilitiy = utilitiy;
        this.dataService = dataService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.appCtrl = appCtrl;
        this.modalCtrl = modalCtrl;
        this.store = store;
        this.contactUrl = __WEBPACK_IMPORTED_MODULE_7__app_constants__["a" /* Constants */].contactUs;
        this.appName = __WEBPACK_IMPORTED_MODULE_7__app_constants__["a" /* Constants */].appName;
        this.filterArray = [];
        this._roleListener = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription__["Subscription"]();
        this.filteredCourseList = [];
        this.dapfilterArray = [];
        this.monthsArrays = [];
        this.monthFilter = [];
        this.role = {
            isAdmin: false,
            isHr: false,
            isAssociate: false,
        };
        this.monthsData = [];
        this.type = this.navParams.get("type");
        this.isSelected = this.navParams.get("isSelected");
        this.filterType = this.navParams.get("value");
        this.userType = this.navParams.get("userType");
        this.dapData = this.navParams.get("data");
        this.monthsArrays = this.navParams.get("monthsData");
        this.selectedMonth = this.navParams.get("selectedMonth");
        this.monthFilter = this.navParams.get("monthFilter");
        this.showEdit = this.navParams.get("showEdit");
        this.showDelete = this.navParams.get("showDelete");
        //this.filteredCourseList = data.filteredData;
        if (this.dapData) {
            this.dapType = this.dapData.type;
        }
    }
    PopoverPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getUserId();
        this.getMiscData();
        if (this.dapType && this.dapData.filteredData.filteredValues) {
            this.dapfilterArray = this.dapData.filteredData.filteredValues;
        }
        else {
            this.dapfilterArray = [
                {
                    value: "V Learn",
                    checked: false,
                },
                {
                    value: "Classroom",
                    checked: false,
                },
                {
                    value: "Online",
                    checked: false,
                },
            ];
        }
        if (this.monthsArrays && this.monthsArrays.length > 0) {
            var checked_1;
            this.monthsData = this.monthsArrays.map(function (value) {
                var new_array = {};
                if (value == _this.selectedMonth) {
                    checked_1 = true;
                    new_array.month = value;
                    new_array.checked = checked_1;
                }
                else {
                    checked_1 = false;
                    new_array.month = value;
                    new_array.checked = checked_1;
                }
                return new_array;
            });
            //console.log(this.monthsData);
        }
        if (this.type == 'passCharges' && !this.utilitiy.isEmptyOrNullOrUndefined(this.navParams.get("data"))) {
            console.log('data', this.navParams.get("data"));
            this.costDetails = this.navParams.get("data");
        }
    };
    PopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.selectFilter = function () {
        this.viewCtrl.dismiss(this.filterType);
    };
    PopoverPage.prototype.selectAttach = function (option) {
        this.viewCtrl.dismiss(option);
    };
    PopoverPage.prototype.logout = function () {
        var _this = this;
        this.close();
        var alert = this.alertCtrl.create({
            // title: 'Confirmation',
            message: "Do you want to logout?",
            buttons: [
                {
                    text: "No",
                    role: "no",
                    handler: function () { },
                },
                {
                    text: "Yes",
                    handler: function () {
                        _this.dataService.getData("loginDetails").then(function (result) {
                            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__app_store__["S" /* Logout */](result));
                        });
                        _this.dataService.clearData();
                        _this.goToPage("LoginPage", null);
                    },
                },
            ],
            cssClass: "alertCustomCss",
        });
        alert.present();
    };
    PopoverPage.prototype.goToBackdoorEntry = function () {
        var _this = this;
        this.dataService.getData("loginDetails").then(function (result) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__app_store__["S" /* Logout */](result));
        });
        this.dataService.clearData();
        this.goToPage("BackdoorEntryPage", null);
    };
    PopoverPage.prototype.contact = function () {
        this.utilitiy.openEmailClient(this.contactUrl);
    };
    PopoverPage.prototype.goToPage = function (pageName, type) {
        this.viewCtrl.dismiss();
        if (pageName == " NewProfilePage") {
            this.appCtrl
                .getRootNav()
                .push(pageName, { userId: this.userId, profileType: "userProfile" });
        }
        else if (pageName == "AddPage") {
            this.appCtrl.getRootNav().push(pageName, {
                type: "addAnnouncement",
                questionId: null,
                answerType: null,
            });
        }
        else if (pageName == "WhatsNewPage") {
            this.appCtrl
                .getRootNav()
                .push("AboutPage", { type: "zenhelp_whats_new" });
        }
        else if (pageName == "AboutPage" && type == "onBoarding") {
            this.appCtrl
                .getRootNav()
                .push("AboutTazPage", { type: "zentalent_onboarding_about" });
        }
        else if (pageName == "AboutPage" && type != "onBoarding") {
            this.appCtrl.getRootNav().push("AboutTazPage", { type: "zenhelp_about" });
        }
        else if (pageName == "HomePage" ||
            pageName == "LoginPage" ||
            pageName == "BackdoorEntryPage" ||
            pageName == "NewHomePage") {
            // const root = this.appCtrl.getRootNav();
            // root.popToRoot();
            this.appCtrl.getRootNav().setRoot(pageName);
        }
        else {
            this.appCtrl.getRootNav().push(pageName);
        }
    };
    PopoverPage.prototype.getUserId = function () {
        var _this = this;
        this.dataService.getData("loginDetails").then(function (res) {
            if (res) {
                if (res.userRolesDetails) {
                    if (res.userRolesDetails && res.userRolesDetails.userDetails) {
                        _this.userId = res.userRolesDetails.userDetails.userId;
                    }
                }
            }
        });
    };
    PopoverPage.prototype.changeRole = function (role) {
        this.viewCtrl.dismiss(role);
    };
    PopoverPage.prototype.getMiscData = function () {
        var _this = this;
        this.dataService.getData("miscData").then(function (res) {
            if (res) {
                _this.role = res.role;
                _this._roleListener = _this.store
                    .select(__WEBPACK_IMPORTED_MODULE_5__app_store__["_84" /* getRole */])
                    .subscribe(function (selectedRole) {
                    _this.selectedRole = selectedRole;
                    if (selectedRole == "associate") {
                        _this.filterArray = res.associatesQuestionStatusList;
                    }
                    else if (selectedRole == "admin") {
                        _this.filterArray = res.adminQuestionStatusList;
                    }
                    else if (selectedRole == "hr") {
                        _this.filterArray = res.hrQuestionStatusList;
                    }
                    else {
                        _this.filterArray = res.questionStatusList;
                    }
                });
            }
        });
    };
    PopoverPage.prototype.selectAll = function () {
        this.viewCtrl.dismiss("select");
    };
    PopoverPage.prototype.sendReminder = function () {
        this.viewCtrl.dismiss("sendReminder");
    };
    PopoverPage.prototype.ionViewWillLeave = function () {
        this._roleListener.unsubscribe();
    };
    PopoverPage.prototype.redirect = function () {
        this.viewCtrl.dismiss("redirect");
    };
    PopoverPage.prototype.chatBotFeedBack = function (data) {
        this.viewCtrl.dismiss(data);
    };
    PopoverPage.prototype.consult = function () {
        this.viewCtrl.dismiss("consult");
    };
    PopoverPage.prototype.directSubmitKra = function () {
        this.viewCtrl.dismiss("directSubmit");
    };
    PopoverPage.prototype.updateValue = function (data) {
        //console.log(this.selectedVlearn)
        //console.log(this.selectedclassroom)
        //console.log(this.selectedonline)
    };
    PopoverPage.prototype.applyfilter = function () {
        //console.log()
        this.viewCtrl.dismiss({ filteredValues: this.dapfilterArray });
    };
    PopoverPage.prototype.getSelectedMonth = function (data) {
        this.viewCtrl.dismiss(data);
    };
    PopoverPage.prototype.selectMonth = function (month) {
        //console.log(month);
        this.viewCtrl.dismiss(month);
    };
    PopoverPage.prototype.editSubKra = function (actionType) {
        this.viewCtrl.dismiss(actionType);
    };
    PopoverPage.prototype.copyCode = function (copyName) {
        this.viewCtrl.dismiss(copyName);
    };
    PopoverPage.prototype.export = function () {
        this.viewCtrl.dismiss();
    };
    // Admin bus functionality
    PopoverPage.prototype.busEdit = function () {
        this.editNewDriverModel();
    };
    PopoverPage.prototype.busDelete = function () {
        this.viewCtrl.dismiss("delete");
    };
    PopoverPage.prototype.editNewDriverModel = function () {
        var _this = this;
        var reportModel = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__container_zen_admin_add_new_driver_model_add_new_driver_model__["a" /* AddDriverModelPage */], { isEdit: true, driverDetails: this.navParams.get("driverDetails") }, { cssClass: "add-driver-model" });
        reportModel.onDidDismiss(function (data) {
            _this.viewCtrl.dismiss("edit");
        });
        reportModel.present();
    };
    PopoverPage.prototype.pickupPt = function (type) {
        this.viewCtrl.dismiss(type);
    };
    // Dismiss Popover 
    PopoverPage.prototype.gotoFaq = function () {
        this.viewCtrl.dismiss('faq');
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-popover",template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\popover\popover.html"*/'<ion-list *ngIf="type==\'options\'" no-margin>\n\n    <!-- <button ion-item *ngIf="userType!=\'PRE-ONBOARDING\'" (click)="goToPage(\'NewHomePage\')">Home</button> -->\n\n    <button ion-item (click)="goToPage(\'AboutPage\')">About App</button>\n\n    <button ion-item (click)="goToPage(\'WhatsNewPage\')">What\'s New</button>\n\n\n\n    <div radio-group>\n\n        <ion-item *ngIf="role.isAdmin">\n\n            <ion-label>Admin</ion-label>\n\n            <ion-radio (ionSelect)="changeRole(\'admin\')" [checked]="selectedRole==\'admin\'"></ion-radio>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="role.isHr">\n\n            <ion-label>HR</ion-label>\n\n            <ion-radio (ionSelect)="changeRole(\'hr\')" [checked]="selectedRole==\'hr\'"></ion-radio>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="role.isAssociate">\n\n            <ion-label>User</ion-label>\n\n            <ion-radio (ionSelect)="changeRole(\'associates\')" [checked]="selectedRole==\'associates\'"></ion-radio>\n\n        </ion-item>\n\n    </div>\n\n\n\n    <button ion-item (click)="logout()">Logout</button>\n\n</ion-list>\n\n\n\n<ion-list *ngIf="type==\'addAnnouncement\'" no-margin>\n\n    <!-- <button ion-item (click)="goToPage(\'NewHomePage\')">Home</button> -->\n\n    <button ion-item (click)="goToPage(\'AboutPage\')">About App</button>\n\n    <button ion-item (click)="goToPage(\'WhatsNewPage\')">What\'s New</button>\n\n    <button *ngIf="role.isAdmin" ion-item (click)="goToPage(\'AddPage\')">\n\n        Add Announcement\n\n    </button>\n\n    <button ion-item (click)="contact()">Contact Us</button>\n\n    <button ion-item (click)="logout()">Logout</button>\n\n</ion-list>\n\n\n\n<ion-list *ngIf="type==\'home\' || type==\'others\' || type==\'profile\'" no-margin>\n\n    <!-- <button *ngIf="(type==\'others\' || type==\'profile\') && userType!=\'PRE-ONBOARDING\'" ion-item\n\n    (click)="goToPage(\'NewHomePage\')">Home</button> -->\n\n    <button ion-item (click)="goToPage(\'AboutPage\')">About App</button>\n\n    <button ion-item (click)="goToPage(\'WhatsNewPage\')">What\'s New</button>\n\n    <button ion-item (click)="contact()">Contact Us</button>\n\n    <button ion-item (click)="logout()">Logout</button>\n\n</ion-list>\n\n<ion-list *ngIf="type==\'new-home\'" no-margin>\n\n    <button ion-item (click)="goToPage(\'AboutPage\')">About App</button>\n\n    <button ion-item (click)="goToPage(\'WhatsNewPage\')">What\'s New</button>\n\n    <button ion-item (click)="contact()">Contact Us</button>\n\n    <button ion-item (click)="logout()">Logout</button>\n\n    <button ion-item (click)="goToBackdoorEntry()">Backdoor Entry</button>\n\n</ion-list>\n\n\n\n<div *ngIf="type==\'filter\'" radio-group [(ngModel)]="filterType">\n\n    <ion-item *ngFor="let item of filterArray">\n\n        <ion-label>{{item.value}}</ion-label>\n\n        <ion-radio (ionSelect)="selectFilter()" [value]="item.value" [checked]="item.value"></ion-radio>\n\n    </ion-item>\n\n</div>\n\n\n\n<ion-list *ngIf="type==\'attach\'" no-margin>\n\n    <ion-item class="attachOption" (click)="selectAttach(\'gallery\')">\n\n        <span>Open Gallery</span>\n\n        <button item-end class="attachIcon" ion-button round icon-only>\n\n            <ion-icon name="camera"></ion-icon>\n\n        </button>\n\n    </ion-item>\n\n\n\n    <button class="attachOption" ion-item (click)="selectAttach(\'camera\')">\n\n        <span>Take Photo</span>\n\n        <button item-end class="attachIcon" ion-button round icon-only>\n\n            <ion-icon name="image"></ion-icon>\n\n        </button>\n\n    </button>\n\n</ion-list>\n\n\n\n<ion-list *ngIf="type==\'obLanding\' || type==\'obChangePassword\' || type== \'obAdd\'" no-margin>\n\n    <button *ngIf="type !=\'obChangePassword\'" ion-item (click)="goToPage(\'AboutPage\',\'onBoarding\')">\n\n        About App\n\n    </button>\n\n    <button *ngIf="type !=\'obChangePassword\'" ion-item (click)="contact()">\n\n        Contact Us\n\n    </button>\n\n    <button ion-item (click)="logout()">Logout</button>\n\n</ion-list>\n\n\n\n<ion-list *ngIf="type==\'obDashboard\'" no-margin>\n\n    <button ion-item (click)="goToPage(\'AboutPage\',\'onBoarding\')">\n\n        About App\n\n    </button>\n\n    <button ion-item (click)="goToPage(\'QuestionsPage\')">My Questions</button>\n\n    <button ion-item (click)="contact()">Contact Us</button>\n\n    <button ion-item (click)="logout()">Logout</button>\n\n</ion-list>\n\n\n\n<ion-list *ngIf="type == \'obDocumentDetails\' || type ==\'obAddDetails\'" no-margin>\n\n    <button *ngIf="type !=\'obChangePassword\'" ion-item (click)="goToPage(\'AboutPage\',\'onBoarding\')">\n\n        About App\n\n    </button>\n\n    <button *ngIf="type !=\'obChangePassword\'" ion-item (click)="contact()">\n\n        Contact Us\n\n    </button>\n\n    <button ion-item (click)="logout()">Logout</button>\n\n</ion-list>\n\n\n\n<ion-list *ngIf="type == \'rejectedDocuments\'" no-margin>\n\n    <button ion-item (click)="logout()">Logout</button>\n\n</ion-list>\n\n\n\n<ion-list *ngIf="type == \'ZenDeavour\'" no-margin>\n\n    <button ion-item (click)="selectAll()" *ngIf="isSelected!=\'true\'">\n\n        Select All\n\n    </button>\n\n    <button ion-item (click)="selectAll()" *ngIf="isSelected==\'true\'">\n\n        Deselect All\n\n    </button>\n\n</ion-list>\n\n\n\n<ion-list *ngIf="type == \'Redirect\'" no-margin>\n\n    <!-- <button ion-item (click)="redirect()">Redirect</button> -->\n\n    <button ion-item (click)="consult()">Consult</button>\n\n</ion-list>\n\n\n\n<ion-list *ngIf="type == \'sendReminder\'" no-margin>\n\n    <button ion-item (click)="sendReminder()">Send Reminder</button>\n\n</ion-list>\n\n\n\n<ion-list *ngIf="type == \'chatBot\'" no-margin>\n\n    <button ion-item (click)="chatBotFeedBack(\'askquestion\')">\n\n        Add as a question\n\n    </button>\n\n    <button ion-item (click)="chatBotFeedBack(\'feedback\')">Feedback</button>\n\n</ion-list>\n\n<!-- <ion-list *ngIf="type==\'obChangePassword\'" no-margin>\n\n  <button ion-item (click)="logout()">Logout</button>\n\n</ion-list> -->\n\n\n\n<!-- ZenDeavor options for reviewer  -->\n\n<ion-list *ngIf="type == \'direct-submit\'" no-margin>\n\n    <button ion-item (click)="directSubmitKra()">Direct Approve</button>\n\n    <!-- <button ion-item (click)="consult()">Consult</button> -->\n\n</ion-list>\n\n\n\n<ion-list *ngIf="dapType==\'dapCourseList\'" no-margin>\n\n    <!-- <button ion-item (click)="goToPage(\'NewHomePage\')">Home</button> -->\n\n    <ion-label style="text-align: center; font-size: 1.2em; font-weight: 600">Filter</ion-label>\n\n    <!-- <ion-item>\n\n    <ion-label>V Learn</ion-label>\n\n    <ion-checkbox style="margin: 9px 10px 9px 4px;" [(ngModel)]="selectedVlearn" (ionChange)="updateValue(\'V Learn\')"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Classroom</ion-label>\n\n    <ion-checkbox style="margin: 9px 10px 9px 4px;" [(ngModel)]="selectedclassroom" (ionChange)="updateValue(\'Classroom\')"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Online</ion-label>\n\n    <ion-checkbox style="margin: 9px 10px 9px 4px;" [(ngModel)]="selectedonline" (ionChange)="updateValue(\'Online\')"></ion-checkbox>\n\n  </ion-item> -->\n\n    <ion-item *ngFor="let dapfilter of dapfilterArray">\n\n        <ion-label>{{dapfilter?.value}}</ion-label>\n\n        <ion-checkbox style="margin: 9px 10px 9px 4px" [(ngModel)]="dapfilter.checked"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-buttons style="text-align: center; margin-top: 15px">\n\n        <button ion-button (click)="applyfilter()">Apply</button>\n\n    </ion-buttons>\n\n</ion-list>\n\n\n\n<ion-list *ngIf="type == \'rtoData\'">\n\n    <div radio-group>\n\n        <ion-item *ngFor="let monthsDataList of monthsData">\n\n            <ion-label> {{monthsDataList.month}} </ion-label>\n\n            <ion-radio (ionSelect)="getSelectedMonth(monthsDataList)" [checked]="monthsDataList.checked"></ion-radio>\n\n        </ion-item>\n\n    </div>\n\n</ion-list>\n\n\n\n<div *ngIf="type==\'rtoPopulation\'" radio-group>\n\n    <ion-item *ngFor="let item of monthFilter">\n\n        <ion-label>{{item.month}}</ion-label>\n\n        <ion-radio (ionSelect)="selectMonth(item)" [checked]="item.isSelected"></ion-radio>\n\n    </ion-item>\n\n</div>\n\n\n\n<ion-list *ngIf="type == \'ZenRich\'" no-margin>\n\n    <button ion-item (click)="copyCode(\'CopyCode\')">Copy Job Code</button>\n\n    <button ion-item (click)="copyCode(\'CopyDetails\')">Copy Job Details</button>\n\n    <!-- <button ion-item (click)="consult()">Consult</button> -->\n\n</ion-list>\n\n\n\n<!-- options for Goal Setting KRA1 -->\n\n<ion-list *ngIf="type == \'editSubKra\'" no-margin>\n\n    <button ion-item (click)="editSubKra(\'edit\')" *ngIf="showEdit">Edit</button>\n\n    <button ion-item (click)="editSubKra(\'delete\')" *ngIf="showDelete">\n\n        Delete\n\n    </button>\n\n</ion-list>\n\n<!-- Redirect options for Midterm-ZenDeavor -->\n\n<ion-list *ngIf="type == \'MidtermRedirect\'" no-margin>\n\n    <button ion-item (click)="redirect()">Redirect</button>\n\n</ion-list>\n\n\n\n<ion-list *ngIf="type == \'dapDetails\'" no-margin>\n\n    <button ion-item (click)="export()">Export</button>\n\n</ion-list>\n\n\n\n<!-- Admin Bus options -->\n\n\n\n<ion-list *ngIf="type == \'adminBus\'" no-margin>\n\n    <button ion-item (click)="busEdit()" *ngIf="showEdit">Edit</button>\n\n    <button ion-item (click)="busDelete()" *ngIf="showDelete">Delete</button>\n\n</ion-list>\n\n<ion-list *ngIf="type == \'adminpickuppt\'" no-margin>\n\n    <button ion-item (click)="pickupPt(\'edit\')" *ngIf="showEdit">Edit</button>\n\n    <button ion-item (click)="pickupPt(\'delete\')" *ngIf="showDelete">Delete</button>\n\n</ion-list>\n\n<!-- ZenAdmin Home Page FAQ Option  -->\n\n<ion-list *ngIf="type == \'zenAdminFaq\'" no-margin>\n\n    <button ion-item (click)="gotoFaq(\'faq\')">FAQ</button>\n\n</ion-list>\n\n<!-- ZenAdmin charges in search route details  -->\n\n<ion-list *ngIf="type == \'passCharges\'" no-margin>\n\n    <button ion-item >Monthly {{costDetails?.monthly}}</button>\n\n    <button ion-item >Daily {{costDetails?.daily}}</button>\n\n    <button ion-item >Weekly {{costDetails?.weekly}}</button>\n\n</ion-list>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\popover\popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["H" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* Data */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ })

});
//# sourceMappingURL=93.js.map