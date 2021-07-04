webpackJsonp([47],{

/***/ 1389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamListForGoalSettingPageModule", function() { return TeamListForGoalSettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_list_for_goal_setting__ = __webpack_require__(1811);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TeamListForGoalSettingPageModule = /** @class */ (function () {
    function TeamListForGoalSettingPageModule() {
    }
    TeamListForGoalSettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__team_list_for_goal_setting__["a" /* TeamListForGoalSettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__team_list_for_goal_setting__["a" /* TeamListForGoalSettingPage */]),
            ],
        })
    ], TeamListForGoalSettingPageModule);
    return TeamListForGoalSettingPageModule;
}());

//# sourceMappingURL=team-list-for-goal-setting.module.js.map

/***/ }),

/***/ 1811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamListForGoalSettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the TeamListForGoalSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeamListForGoalSettingPage = /** @class */ (function () {
    function TeamListForGoalSettingPage(navCtrl, navParams, httpProvider, popoverCtrl, modalCtrl, utilitiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.utilitiy = utilitiy;
        this.url = "associateListForGoalSetting";
        this.statusModel = 'inProgress';
        this.submitAllurl = 'submitAll';
        this.teamlListData = [];
        this.approvedList = [];
        this.submittedList = [];
        this.pendingList = [];
        this.teamListResData = [];
        this.showHeaderButton = true;
        this.sendReminderUrl = "sendReminderForKRA";
        this.inSelectionMode = false;
        this.pendingListCount = 0;
        this.submittedListCount = 0;
        this.approvedListCount = 0;
        this.userID = this.navParams.get('userID') || null;
        this.userRole = this.navParams.get('userRole') || null;
        this.kraType = this.navParams.get('kraType') || null;
        // this.selectedItem = this.navParams.get('selectedItem') || null
        // this.showGoalSettingList = this.navParams.get('selectedOffering') || false
        console.log("this.kraType ", this.kraType);
        // this.getAssociateData()
    }
    TeamListForGoalSettingPage.prototype.ionViewDidLoad = function () {
        // this.utilitiy.updateLoader(true)
        // this.getAssociateData()
    };
    TeamListForGoalSettingPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter ');
        this.getAssociateData();
    };
    /**
     * Api call for associate team list
     */
    TeamListForGoalSettingPage.prototype.getAssociateData = function () {
        var _this = this;
        this.utilitiy.updateLoader(true);
        var teamListUrl = {
            // zenDeavorURL: this.url
            url: this.url,
            zenDeavorURL: true,
            data: {
                "userId": this.userID,
                "role": this.userRole,
            }
        };
        this.httpProvider.http.commonService(teamListUrl).subscribe(function (res) {
            _this.utilitiy.updateLoader(false);
            _this.teamListResData = res['details'];
            _this.pendingList = _this.teamListResData['pendingList'];
            _this.submittedList = _this.teamListResData['submittedList'];
            // this.userRole = res['details'].role
            // this.submitAllStatus = this.teamListResData['isSubmitAll']
            // this.submitAllmsg = this.teamListResData['message']
            // this.isAppraisalDateExpired = this.teamListResData.isExpired
            if (!_this.utilitiy.isEmptyOrNullOrUndefined(_this.pendingList)) {
                _this.pendingList.filter(function (item) {
                    if (item.isSelected == undefined) {
                        item.isSelected = true;
                    }
                });
                // this.pendinglistToFilter = this.pendingList
                // this.submittedlistToFilter = this.submittedList
                // this.approvedlistToFilter = this.approvedList
            }
            _this.approvedList = _this.teamListResData['approvedList'];
            // getting count of pendingList
            _this.pendingListCount = _this.pendingList.length;
            _this.submittedListCount = _this.submittedList.length;
            _this.approvedListCount = _this.approvedList.length;
        }, function (err) {
            _this.utilitiy.updateLoader(false);
        });
    };
    TeamListForGoalSettingPage.prototype.segmentChanged = function (event, currentSegment) {
        this.selectedSegmentName = currentSegment;
        if (this.selectedSegmentName == 'inProgress') {
            this.showHeaderButton = true;
        }
        else {
            this.showHeaderButton = false;
            // if (this.selectedSegmentName == 'moderation')
            // this.content.resize();
            console.log("content", this.content);
        }
    };
    TeamListForGoalSettingPage.prototype.presentOptions = function (myEvent) {
        var _this = this;
        var popover = this
            .popoverCtrl
            .create('PopoverPage', { type: 'ZenDeavour', isSelected: this.inSelectionMode ? 'true' : 'false' });
        popover.present({ ev: myEvent });
        popover.onDidDismiss(function (res) {
            _this.selectAll(res);
        });
    };
    TeamListForGoalSettingPage.prototype.selectAll = function (type) {
        if (type == "select") {
            if (this.inSelectionMode)
                this.inSelectionMode = false;
            else
                this.inSelectionMode = true;
            // this.sendReminder()
        }
    };
    /**
    * Method for sending reminder to users
    */
    TeamListForGoalSettingPage.prototype.sendReminder = function () {
        var _this = this;
        var selectedIds;
        selectedIds = this.pendingList.filter(function (item) {
            if (item.isSelected == true) {
                return item;
            }
        });
        var userIDArray = [];
        selectedIds.forEach(function (element) {
            userIDArray.push({ "user_id": element.employeeId });
        });
        if (this.inSelectionMode && selectedIds != "") {
            this.utilitiy.updateLoader(true);
            // this.utilities.hideLoading()
            var reminderDetails = {
                // zenDeavorURL: this.url
                url: this.sendReminderUrl,
                zenDeavorURL: true,
                data: {
                    // "processType": this.kraType,
                    'userDetailList': userIDArray
                }
            };
            this.httpProvider.http.commonService(reminderDetails).subscribe(function (res) {
                _this.utilitiy.updateLoader(false);
                var msg = res['status'].statusMessage;
                _this.utilitiy.presentAlert(msg);
                _this.inSelectionMode = false;
                _this.getAssociateData();
            }, function (err) {
                _this.utilitiy.updateLoader(false);
                // this.utilities.hideLoading()
            });
        }
        else {
            this.utilitiy.presentAlert("Please select associates");
        }
    };
    TeamListForGoalSettingPage.prototype.selectCard = function (userData, index) {
        if (this.inSelectionMode) {
            this.pendingList.filter(function (item) {
                if (item.employeeId == userData.employeeId) {
                    item.isSelected = !item.isSelected;
                }
            });
        }
        // else {
        //   this.navCtrl.push("ZenDeavorKraPage")
        // }
    };
    TeamListForGoalSettingPage.prototype.sendReminderPopover = function (event, userid) {
        var _this = this;
        var popover1 = this
            .popoverCtrl
            .create('PopoverPage', { type: 'sendReminder' });
        popover1.present({ ev: event });
        popover1.onDidDismiss(function (res) {
            if (res == 'sendReminder') {
                _this.sendReminderToOneUser(userid);
            }
        });
    };
    TeamListForGoalSettingPage.prototype.sendReminderToOneUser = function (userID) {
        var _this = this;
        this.utilitiy.updateLoader(true);
        // this.utilities.hideLoading()
        var reminderDetails = {
            // zenDeavorURL: this.url
            url: this.sendReminderUrl,
            "processType": this.kraType,
            zenDeavorURL: true,
            data: {
                "processType": this.kraType,
                userDetailList: [
                    {
                        "user_id": userID
                    },
                ]
            }
        };
        this.httpProvider.http.commonService(reminderDetails).subscribe(function (res) {
            _this.utilitiy.updateLoader(false);
            if (res) {
                var msg = res['status'].statusMessage;
                _this.utilitiy.presentAlert(msg);
                _this.inSelectionMode = false;
                _this.getAssociateData();
            }
        }, function (err) {
            _this.utilitiy.updateLoader(false);
            // this.utilities.hideLoading()
        });
    };
    TeamListForGoalSettingPage.prototype.openReviewPage = function (userData) {
        this.navCtrl.push('ReviewGoalsPage', {
            userID: userData.employeeId,
            userRole: this.userRole,
            kraYear: userData.year,
            isDirectApprove: userData.isDirectApprove
        });
        console.log('details sent to review page', userData);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* Content */])
    ], TeamListForGoalSettingPage.prototype, "content", void 0);
    TeamListForGoalSettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-team-list-for-goal-setting',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zendeavor\team-list-for-goal-setting\team-list-for-goal-setting.html"*/'<!--\n  Generated template for the TeamListForGoalSettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title *ngIf="!isSearchbarOpened">Team List</ion-title>\n      <ion-buttons end *ngIf="this.showHeaderButton && selectedItem !=\'Reviewer\' && !teamListResData?.isExpired">\n        <button ion-button class="headerBtn" (click)="sendReminder()">Send Reminder</button>\n        <button ion-button icon-only (click)="presentOptions($event)">\n          <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-buttons>\n     \n      <!-- <button (click)="openSearch()">search associate</button> -->\n    </ion-navbar>\n  \n  </ion-header>\n  \n\n\n<ion-content >\n    <ion-segment [(ngModel)]="statusModel" (ionChange)="segmentChanged($event,statusModel)" *ngIf="selectedItem !=\'Reviewer\'">\n        <ion-segment-button value="inProgress" class="custom-segment">In Progress: {{pendingListCount}}</ion-segment-button>\n        <ion-segment-button value="submitted" class="custom-segment">Submitted: {{submittedListCount}}</ion-segment-button>\n        <ion-segment-button value="approved" class="custom-segment">Completed: {{approvedListCount}}</ion-segment-button>\n    \n    \n      </ion-segment>\n      <div [ngSwitch]="statusModel">\n\n          <!-- Pending List Code -->\n      \n          <div *ngSwitchCase="\'inProgress\'" class="parentDiv" [hidden]="selectedItem ==\'Reviewer\'">\n            <ion-list *ngFor="let pendingItem of pendingList; let i=index;" (click)="selectCard(pendingItem,i)">\n              <ion-card class="infoClass">\n                <div class="divFirst">\n                  <ion-item class="padding0 padding-left7">\n                    <ion-avatar item-start>\n                      <img class="imgCls" [src]="pendingItem?.employeeProfilePic">\n                      <img *ngIf="inSelectionMode && pendingItem?.isSelected" class="selectedImg" src="assets/imgs/ZenDeavour/selected.svg">\n                    </ion-avatar>\n                    <h3 class="empName">{{pendingItem?.employeeName}}</h3>\n                    <p>{{pendingItem?.employeeId}}</p>\n                  </ion-item>\n                </div>\n      \n                <div class="divSecond">\n                  <div class="subDiv">\n                    <span class="status font8em">Reminder</span>\n                    <span class="statusColor font8em">{{pendingItem?.reminderCount}} Sent</span>\n                  </div>\n                  <div *ngIf="!teamListResData?.isExpired">\n                    <span class="iconSize pd5" (click)="sendReminderPopover($event,pendingItem?.employeeId)">\n                      <ion-icon name="more"></ion-icon>\n                    </span>\n                  </div>\n                </div>\n              </ion-card>\n      \n      \n      \n            </ion-list>\n            <div class="nodata " *ngIf="pendingListCount==0">No Data Available</div>\n          </div>\n          <!-- list of data -->\n          <div *ngSwitchCase="\'submitted\'" class="parentDiv">\n      \n            <ion-list *ngFor="let submittedItem of submittedList" (click)="openReviewPage(submittedItem)">\n              <ion-card class="infoClass">\n                <div class="divFirst">\n                  <ion-item class="padding0 padding-left7">\n                    <ion-avatar item-start>\n                      <img class="imgCls" [src]="submittedItem?.employeeProfilePic">\n                      <!-- <img *ngIf="inSelectionMode && submittedItem?.isSelected" class="selectedImg"\n                        src="assets/imgs/ZenDeavour/selected.svg"> -->\n                    </ion-avatar>\n      \n                    <h3 class="empName">{{submittedItem?.employeeName}}</h3>\n                    <p>{{submittedItem?.employeeId}}</p>\n                  </ion-item>\n                </div>\n      \n                <div class="divSecond">\n                  <div class="subDiv">\n                    <span class="status font8em">Date</span>\n                    <span class="statusColor font8em">{{submittedItem?.submissionDate | date : \'d MMM yyyy\'}}</span>\n                  </div>\n                  <!-- <div (click)="openPopover($event,submittedItem?.employeeId)" class="padding7px" *ngIf="!teamListResData?.isExpired">\n                    <span class="iconSize">\n                      <ion-icon name="more"></ion-icon>\n                    </span>\n                  </div> -->\n                </div>\n              </ion-card>\n      \n            </ion-list>\n      \n            <div class="nodata" *ngIf="submittedListCount==0">No Data Available</div>\n          </div>\n      \n      \n          <!-- list of data -->\n          <div *ngSwitchCase="\'approved\'" class="parentDiv">\n      \n            <ion-list *ngFor="let approvedItem of approvedList" (click)="openReviewPage(approvedItem)">\n              <ion-card class="infoClass">\n                <div class="divFirst">\n                  <ion-item class="padding0 padding-left7">\n                    <ion-avatar item-start>\n                      <img class="imgCls" [src]="approvedItem?.employeeProfilePic">\n                      <!-- <img class="selectedImg" *ngIf="approvedItem?.appraisalStatus ==\'COMPLETED\'" src="assets/imgs/ZenDeavour/ZenDeavour_approved.svg"> -->\n                      <!-- <img class="selectedImg" *ngIf="approvedItem?.appraisalStatus==\'CLOSED\' || approvedItem?.appraisalStatus==\'PENDING FOR CLOSE\'"\n                        src="assets/imgs/ZenDeavour/ZenDeavour_disapproved.svg"> -->\n                    </ion-avatar>\n                    <h3 class="empName">{{approvedItem?.employeeName}}</h3>\n                    <p>{{approvedItem?.employeeId}}</p>\n                  </ion-item>\n                </div>\n      \n                <div class="divSecond">\n                  <div class="subDiv">\n                    <span class="status font8em">Date</span>\n                    <span class="statusColor font8em">{{approvedItem?.submissionDate | date : \'d MMM yyyy\'}}</span>\n      \n                  </div>\n      \n                  <!-- <div (click)="openPopover($event,approvedItem?.employeeId)">\n                    <span class="iconSize" >\n                      <ion-icon name="more"></ion-icon>\n                    </span>\n                  </div> -->\n                </div>\n              </ion-card>\n            </ion-list>\n      \n            <div class="nodata" *ngIf="approvedListCount==0">No Data Available</div>\n      \n          </div>\n      \n        \n      \n      \n      \n      \n        </div>\n</ion-content>\n'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zendeavor\team-list-for-goal-setting\team-list-for-goal-setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], TeamListForGoalSettingPage);
    return TeamListForGoalSettingPage;
}());

// check for hard coded dates
//# sourceMappingURL=team-list-for-goal-setting.js.map

/***/ })

});
//# sourceMappingURL=47.js.map