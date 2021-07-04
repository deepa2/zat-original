webpackJsonp([50],{

/***/ 1433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZendeavorTeamListPageModule", function() { return ZendeavorTeamListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_tooltips__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__zendeavor_team_list__ = __webpack_require__(1855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ZendeavorTeamListPageModule = /** @class */ (function () {
    function ZendeavorTeamListPageModule() {
    }
    ZendeavorTeamListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__zendeavor_team_list__["a" /* ZendeavorTeamListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__zendeavor_team_list__["a" /* ZendeavorTeamListPage */]),
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_0_ionic_tooltips__["a" /* TooltipsModule */]
            ],
        })
    ], ZendeavorTeamListPageModule);
    return ZendeavorTeamListPageModule;
}());

//# sourceMappingURL=zendeavor-team-list.module.js.map

/***/ }),

/***/ 1855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZendeavorTeamListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_zendeavor_team_mean_modal_zendeavor_team_mean_modal__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_redirect_kra_redirect_kra__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_search_associates_consultation_modal_search_associates_consultation_modal__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_zendeavor_send_consultation_modal_zendeavor_send_consultation_modal__ = __webpack_require__(771);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ZendeavorTeamListPage = /** @class */ (function () {
    function ZendeavorTeamListPage(navCtrl, navParams, httpProvider, popoverCtrl, modalCtrl, utilitiy) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.utilitiy = utilitiy;
        this.url = "getAssociateList";
        this.statusModel = 'inProgress';
        this.submitAllurl = 'submitAll';
        this.teamlListData = [];
        this.approvedList = [];
        this.submittedList = [];
        this.pendingList = [];
        this.teamListResData = [];
        this.pendingListCount = 0;
        this.submittedListCount = 0;
        this.approvedListCount = 0;
        this.originalList = [];
        this.pendinglistToFilter = [];
        this.submittedlistToFilter = [];
        this.approvedlistToFilter = [];
        this.showHeaderButton = true;
        this.sendReminderUrl = "sendReminder";
        this.inSelectionMode = false;
        this.selectedItem = '';
        this.submitAllRes = [];
        this.reviewersList = [];
        this.submitAllStatus = false;
        this.submitAllmsg = '';
        this.tooltipEvent = 'click';
        this.isAppraisalDateExpired = false;
        this.selectedSegmentName = this.statusModel;
        this.submitTeamlist = this.navParams.get('submitStatus') || null;
        this.userID = this.navParams.get('userID') || null;
        this.userRole = this.navParams.get('userRole') || null;
        this.kraType = this.navParams.get('kraType') || null;
        this.selectedItem = this.navParams.get('selectedItem') || null;
        console.log("this.kraType ", this.kraType);
    }
    ZendeavorTeamListPage.prototype.ionViewDidLoad = function () {
    };
    ZendeavorTeamListPage.prototype.ionViewWillEnter = function () {
        this.utilitiy.updateLoader(true);
        this.getAssociateData();
    };
    /**
     * Api call for associate team list
     */
    ZendeavorTeamListPage.prototype.getAssociateData = function () {
        var _this = this;
        // this.utilities.hideLoading()
        var teamListUrl = {
            // zenDeavorURL: this.url
            url: this.url,
            zenDeavorURL: true,
            data: {
                "userId": this.userID,
                "role": this.userRole,
                "processType": this.kraType,
                "isTeamList": false
            }
        };
        this.httpProvider.http.commonService(teamListUrl).subscribe(function (res) {
            _this.utilitiy.updateLoader(false);
            _this.getTeamListData = res['details'];
            _this.teamListResData = res['details'];
            _this.pendingList = _this.getTeamListData['pendingList'];
            _this.submittedList = _this.getTeamListData['submittedList'];
            _this.moderationList = _this.getTeamListData['moderationList'];
            _this.reviewersList = _this.getTeamListData['reviewerList'];
            _this.userRole = res['details'].role;
            _this.submitAllStatus = _this.teamListResData['isSubmitAll'];
            _this.submitAllmsg = _this.teamListResData['message'];
            _this.isAppraisalDateExpired = _this.teamListResData.isExpired;
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
            _this.approvedList = _this.getTeamListData['approvedList'];
            // getting count of pendingList
            _this.pendingListCount = _this.pendingList.length;
            _this.submittedListCount = _this.submittedList.length;
            _this.approvedListCount = _this.approvedList.length;
        }, function (err) {
            _this.utilitiy.updateLoader(false);
        });
    };
    ZendeavorTeamListPage.prototype.segmentChanged = function (event, currentSegment) {
        this.selectedSegmentName = currentSegment;
        if (this.selectedSegmentName == 'inProgress') {
            this.showHeaderButton = true;
        }
        else {
            this.showHeaderButton = false;
            if (this.selectedSegmentName == 'moderation')
                this.content.resize();
            //console.log("content", this.content)
        }
    };
    ZendeavorTeamListPage.prototype.presentOptions = function (myEvent) {
        var _this = this;
        var popover = this
            .popoverCtrl
            .create('PopoverPage', { type: 'ZenDeavour', isSelected: this.inSelectionMode ? 'true' : 'false' });
        popover.present({ ev: myEvent });
        popover.onDidDismiss(function (res) {
            _this.selectAll(res);
        });
    };
    ZendeavorTeamListPage.prototype.selectAll = function (type) {
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
    ZendeavorTeamListPage.prototype.sendReminder = function () {
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
                    "processType": this.kraType,
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
    // open preview modal
    ZendeavorTeamListPage.prototype.openPreview = function (selectedUser) {
        //console.log("selectedUser", selectedUser)
        this.navCtrl.push("ZendeavorPreviewPage", {
            userID: selectedUser.employeeId,
            userRole: this.userRole,
            userName: selectedUser.employeeName,
            kraType: this.kraType,
            showUsername: true,
            isTeamList: true,
            isAppraisalDateExpired: this.isAppraisalDateExpired
        });
        // let feedbackModal = this.modalCtrl.create(ZendeavorKraReviewModalComponent, {})
        // feedbackModal.onDidDismiss((status) => {
        //   if (status) {
        //     let currentIndex = this.navCtrl.getActive().index
        //     this.navCtrl.remove(currentIndex, 2)
        //   }
        // })
        // feedbackModal.present().then(() => {
        // })
    };
    ZendeavorTeamListPage.prototype.selectCard = function (userData, index) {
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
    ZendeavorTeamListPage.prototype.openPopover = function (event, data) {
        var _this = this;
        event.stopPropagation();
        var popover;
        if (this.kraType == 'Mid-Term') {
            popover = this
                .popoverCtrl
                .create('PopoverPage', { type: 'MidtermRedirect' });
            popover.present({ ev: event });
        }
        else {
            popover = this
                .popoverCtrl
                .create('PopoverPage', { type: 'Redirect' });
            popover.present({ ev: event });
        }
        popover.onDidDismiss(function (res) {
            if (res == 'redirect') {
                _this.redirect(data);
            }
            else if (res == 'consult') {
                //console.log("consult")
                _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__components_zendeavor_send_consultation_modal_zendeavor_send_consultation_modal__["a" /* ZendeavorSendConsultationModalComponent */], {
                    userData: data,
                    processType: _this.kraType,
                    role: _this.userRole
                }, {
                    cssClass: 'sendConsultation-modalCss',
                    enableBackdropDismiss: true
                }).present();
            }
        });
    };
    ZendeavorTeamListPage.prototype.redirect = function (userID) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_redirect_kra_redirect_kra__["a" /* RedirectKraComponent */], {
            'data': {
                userData: userID,
                processType: this.kraType
            }
        }, { cssClass: 'kra-training-modal' });
        modal.onDidDismiss(function (data) {
            if (data === "SUBMITTED_DATA_SUCCESSFULLY") {
                // this.navCtrl.pop()
                _this.getAssociateData();
            }
        });
        modal.present();
    };
    ZendeavorTeamListPage.prototype.openKRAPage = function (submittedItem) {
        //console.log("submittedItem", submittedItem)
        if (this.isAppraisalDateExpired) {
            this.openPreview(submittedItem);
        }
        else {
            this.navCtrl.push('ZenDeavorKraPage', {
                role: this.userRole,
                kraType: this.kraType,
                userID: submittedItem.employeeId,
                comingFromManager: true
            });
        }
    };
    ZendeavorTeamListPage.prototype.sendReminderPopover = function (event, userid) {
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
    ZendeavorTeamListPage.prototype.sendReminderToOneUser = function (userID) {
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
    ZendeavorTeamListPage.prototype.openTeamMeanModal = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__components_zendeavor_team_mean_modal_zendeavor_team_mean_modal__["a" /* ZendeavorTeamMeanModalComponent */], {
            'data': {
                applicableMean: this.teamListResData.applicableMean,
                permissibleLimit: this.teamListResData.permissibleLimit,
                actualMean: this.teamListResData.actualMean,
                managerName: this.teamListResData.name,
                toolTipData: this.teamListResData.toolTipForMean
            }
        }, { cssClass: 'team-mean-modalCSS' }).present();
        // this.navCtrl.push('ZendeavorReviewerListPage')
    };
    ZendeavorTeamListPage.prototype.openSearch = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_search_associates_consultation_modal_search_associates_consultation_modal__["a" /* SearchAssociatesConsultationModalComponent */], {
        // 'data': {
        //   userData: userID
        // }
        }, {}).present();
    };
    ZendeavorTeamListPage.prototype.openReviewersTeamList = function (key, selectedMean, employeeId) {
        // if (selectedMean.value == 0) {
        //   alert("No Team Members present")
        //   return
        // }
        //console.log("key", key)
        //console.log("selectedMean", selectedMean)
        if (key == 'Team List') {
            this.navCtrl.push('ZendeavorReviewerListPage', {
                userID: employeeId,
                userRole: this.userRole,
                kraType: this.kraType,
            });
        }
        else {
            this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__components_zendeavor_team_mean_modal_zendeavor_team_mean_modal__["a" /* ZendeavorTeamMeanModalComponent */], {
                'data': {
                    applicableMean: selectedMean.applicableMean,
                    permissibleLimit: selectedMean.permissibleLimit,
                    actualMean: selectedMean.actualMean,
                    managerName: selectedMean.userName,
                    toolTipData: this.teamListResData.toolTipForMean
                }
            }, { cssClass: 'team-mean-modalCSS' }).present();
        }
    };
    ZendeavorTeamListPage.prototype.submitAllKra = function () {
        var _this = this;
        if (this.submitAllStatus) {
            this.utilitiy.updateLoader(true);
            var submitAllparams = {
                // zenDeavorURL: this.url
                url: this.submitAllurl,
                zenDeavorURL: true,
                data: {
                    "userId": this.userID,
                    "role": this.userRole,
                    "processType": this.kraType
                }
            };
            this.httpProvider.http.commonService(submitAllparams).subscribe(function (res) {
                _this.utilitiy.updateLoader(false);
                _this.submitAllRes = res['status'];
                //console.log("submitAllRes list", res['status'])
                var submitMsg = _this.submitAllRes['statusMessage'];
                // this.pendingList=this.reviewerListData['pendingList']
                // this.submittedList=this.reviewerListData['submittedList']
                // this.approvedList=this.reviewerListData['approvedList']
                // //console.log(this.pendingList)
                if (_this.submitAllRes['statusCode'] == 1) {
                    _this.utilitiy.presentAlert(submitMsg);
                    _this.navCtrl.pop();
                }
            }, function (err) {
                _this.utilitiy.updateLoader(false);
            });
        }
        else {
            //console.log("submit all", this.submitAllmsg)
            this.utilitiy.presentAlert(this.submitAllmsg);
        }
    };
    ZendeavorTeamListPage.prototype.redirectModerator = function (associateData) {
        if (associateData.associateStatus == "Submitted") {
            this.openKRAPage(associateData);
        }
        else if (associateData.associateStatus == "Approved") {
            this.openPreview(associateData);
        }
        // else {
        //   this.openPreview(associateData)
        // }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Content */])
    ], ZendeavorTeamListPage.prototype, "content", void 0);
    ZendeavorTeamListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-zendeavor-team-list',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zendeavor-team-list\zendeavor-team-list.html"*/'<!--\n  Generated template for the ZendeavorTeamListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="!isSearchbarOpened">Team List</ion-title>\n    <ion-buttons end *ngIf="this.showHeaderButton && selectedItem !=\'Reviewer\' && !teamListResData?.isExpired">\n      <button ion-button class="headerBtn" (click)="sendReminder()">Send Reminder</button>\n      <button ion-button icon-only (click)="presentOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end (click)="openTeamMeanModal()">\n      <div class="teamMean current-mean-color" *ngIf="(getTeamListData?.isModeration && statusModel==\'moderation\')||selectedItem ==\'Reviewer\'">\n        <div class="teamMean-icon-div">\n          <img class="user-profile" [src]="getTeamListData?.currentMean?.icon" onerror="this.src=\'assets/menu_icons/1-UpManager.svg\'">\n        </div>\n        <div class="padding-rt-left5 currentMeanTitle">{{getTeamListData?.currentMean?.key}}</div>\n        <div>{{getTeamListData?.currentMean?.value}}</div>\n        <ion-icon class="padding-rt-left5" name="ios-arrow-down"></ion-icon>\n      </div>\n\n    </ion-buttons>\n    <!-- <button (click)="openSearch()">search associate</button> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!-- ion segment -->\n  <ion-segment [(ngModel)]="statusModel" (ionChange)="segmentChanged($event,statusModel)" *ngIf="selectedItem !=\'Reviewer\'">\n    <ion-segment-button value="inProgress" class="custom-segment"><span>In Progress</span> <span>{{pendingListCount}}</span></ion-segment-button>\n    <ion-segment-button value="submitted" class="custom-segment"><span>Submitted</span> <span>{{submittedListCount}}</span> </ion-segment-button>\n    <ion-segment-button value="approved" class="custom-segment"> <span>Completed</span> <span>{{approvedListCount}}</span> </ion-segment-button>\n    <ion-segment-button value="moderation" class="custom-segment" [hidden]="!getTeamListData?.isModeration"><span>Moderation</span> <span> {{moderationList?.length}}</span>\n     </ion-segment-button>\n\n  </ion-segment>\n\n  <div [ngSwitch]="statusModel">\n\n    <!-- Pending List Code -->\n\n    <div *ngSwitchCase="\'inProgress\'" class="parentDiv" [hidden]="selectedItem ==\'Reviewer\'">\n      <ion-list *ngFor="let pendingItem of pendingList; let i=index;" (click)="selectCard(pendingItem,i)">\n        <ion-card class="infoClass">\n          <div class="divFirst">\n            <ion-item class="padding0 padding-left7">\n              <ion-avatar item-start>\n                <img class="imgCls" [src]="pendingItem?.employeeProfilePic">\n                <img *ngIf="inSelectionMode && pendingItem?.isSelected" class="selectedImg" src="assets/imgs/ZenDeavour/selected.svg">\n              </ion-avatar>\n              <h3 class="empName">{{pendingItem?.employeeName}}</h3>\n              <p>{{pendingItem?.employeeId}}</p>\n            </ion-item>\n          </div>\n\n          <div class="divSecond">\n            <div class="subDiv">\n              <span class="status font8em">Reminder</span>\n              <span class="statusColor font8em">{{pendingItem?.reminderCount}} Sent</span>\n            </div>\n            <div *ngIf="!teamListResData?.isExpired">\n              <span class="iconSize pd5" (click)="sendReminderPopover($event,pendingItem?.employeeId)">\n                <ion-icon name="more"></ion-icon>\n              </span>\n            </div>\n          </div>\n        </ion-card>\n\n\n\n      </ion-list>\n      <div class="nodata " *ngIf="pendingListCount==0">No Data Available</div>\n    </div>\n    <!-- list of data -->\n    <div *ngSwitchCase="\'submitted\'" class="parentDiv">\n\n      <ion-list *ngFor="let submittedItem of submittedList" (click)="openKRAPage(submittedItem)">\n        <ion-card class="infoClass">\n          <div class="divFirst">\n            <ion-item class="padding0 padding-left7">\n              <ion-avatar item-start>\n                <img class="imgCls" [src]="submittedItem?.employeeProfilePic">\n                <!-- <img *ngIf="inSelectionMode && submittedItem?.isSelected" class="selectedImg"\n                  src="assets/imgs/ZenDeavour/selected.svg"> -->\n              </ion-avatar>\n\n              <h3 class="empName">{{submittedItem?.employeeName}}</h3>\n              <p>{{submittedItem?.employeeId}}</p>\n            </ion-item>\n          </div>\n\n          <div class="divSecond">\n            <div class="subDiv">\n              <span class="status font8em">Date</span>\n              <span class="statusColor font8em">{{submittedItem?.submissionDate | date : \'d MMM yyyy\'}}</span>\n            </div>\n            <div (click)="openPopover($event,submittedItem?.employeeId)" class="padding7px" *ngIf="!teamListResData?.isExpired">\n              <span class="iconSize">\n                <ion-icon name="more"></ion-icon>\n              </span>\n            </div>\n          </div>\n        </ion-card>\n\n      </ion-list>\n\n      <div class="nodata" *ngIf="submittedListCount==0">No Data Available</div>\n    </div>\n\n\n    <!-- list of data -->\n    <div *ngSwitchCase="\'approved\'" class="parentDiv">\n\n      <ion-list *ngFor="let approvedItem of approvedList" (click)="openPreview(approvedItem)">\n        <ion-card class="infoClass">\n          <div class="divFirst">\n            <ion-item class="padding0 padding-left7">\n              <ion-avatar item-start>\n                <img class="imgCls" [src]="approvedItem?.employeeProfilePic">\n                <img class="selectedImg" *ngIf="approvedItem?.appraisalStatus ==\'COMPLETED\'" src="assets/imgs/ZenDeavour/ZenDeavour_approved.svg">\n                <img class="selectedImg" *ngIf="approvedItem?.appraisalStatus==\'CLOSED\' || approvedItem?.appraisalStatus==\'PENDING FOR CLOSE\'"\n                  src="assets/imgs/ZenDeavour/ZenDeavour_disapproved.svg">\n              </ion-avatar>\n              <h3 class="empName">{{approvedItem?.employeeName}}</h3>\n              <p>{{approvedItem?.employeeId}}</p>\n            </ion-item>\n          </div>\n\n          <div class="divSecond">\n            <div class="subDiv">\n              <span class="status font8em">Date</span>\n              <span class="statusColor font8em">{{approvedItem?.submissionDate | date : \'d MMM yyyy\'}}</span>\n\n            </div>\n\n            <!-- <div (click)="openPopover($event,approvedItem?.employeeId)">\n              <span class="iconSize" >\n                <ion-icon name="more"></ion-icon>\n              </span>\n            </div> -->\n          </div>\n        </ion-card>\n      </ion-list>\n\n      <div class="nodata" *ngIf="approvedListCount==0">No Data Available</div>\n\n    </div>\n\n    <!-- Moderation List -->\n    <div *ngSwitchCase="\'moderation\'" class="parentDiv">\n\n      <ion-list *ngFor="let moderationItem of moderationList" (click)="redirectModerator(moderationItem)">\n        <ion-card class="infoClass">\n          <div class="divFirst">\n            <ion-item class="padding0 padding-left7">\n              <ion-avatar item-start>\n                <img class="imgCls" [src]="moderationItem?.employeeProfilePic">\n                <img class="selectedImg" *ngIf="moderationItem?.appraisalStatus ==\'COMPLETED\'" src="assets/imgs/ZenDeavour/ZenDeavour_approved.svg">\n                <img class="selectedImg" *ngIf="moderationItem?.appraisalStatus==\'CLOSED\' || moderationItem?.appraisalStatus==\'PENDING FOR CLOSE\'"\n                  src="assets/imgs/ZenDeavour/ZenDeavour_disapproved.svg">\n              </ion-avatar>\n              <h3 class="empName">{{moderationItem?.employeeName}}</h3>\n              <p>{{moderationItem?.employeeId}}</p>\n            </ion-item>\n          </div>\n\n          <div class="divSecond">\n            <div class="subDiv">\n              <span class="status font8em">{{moderationItem?.appraiserScore?.key}}</span>\n              <span class="statusColor font8em">{{moderationItem?.appraiserScore?.value}}</span>\n\n            </div>\n            <!-- <div (click)="openPopover($event,submittedItem?.employeeId)" class="pd5">\n              <span class="iconSize">\n                <ion-icon name="more"></ion-icon>\n              </span>\n            </div> -->\n          </div>\n        </ion-card>\n      </ion-list>\n\n      <div class="justify-cont-center padding1em" *ngIf="moderationList?.length==0">No Data Available</div>\n\n    </div>\n\n\n\n\n  </div>\n  <!-- Reviewer List -->\n\n  <div *ngIf="selectedItem ==\'Reviewer\'">\n    <div class="associate-card" *ngFor="let reviewerItem of reviewersList">\n      <div class="associate-details-rw">\n        <div class="associate-profile-pic"><img [src]="reviewerItem?.employeeProfilePic" onerror="this.src=\'assets/imgs/dummy-profile.png\'"></div>\n        <div class="associate-info">\n          <div class="associate-name">{{reviewerItem?.employeeName}}</div>\n          <div class="associate-id margin-top5">{{reviewerItem?.employeeId}}</div>\n        </div>\n      </div>\n      <div>\n        <div class="teamMean-container margin-topBottom5" *ngFor="let teamMean of reviewerItem?.teamMeanList">\n          <div class="">\n            <div class="teamMean width-85px" (click)="openReviewersTeamList(teamMean.key,teamMean,reviewerItem?.employeeId)">{{teamMean?.key}}</div>\n\n            <div style="display:flex; flex-direction: row;">\n              <div class="statusColor" (click)="openReviewersTeamList(teamMean.key,teamMean,reviewerItem?.employeeId)">{{teamMean?.value}}</div>\n              <div *ngIf="teamMean?.key==\'Team Mean\'">\n                <ion-icon [tooltip]="reviewerItem?.appraiserMeanToolTip" positionV="bottom" hideOthers="true" [event]="tooltipEvent"\n                  clear color="dark" item-right>\n                  <img class="info-icon" src="assets/imgs/info.svg" />\n                </ion-icon>\n              </div>\n            </div>\n          </div>\n\n          <!-- </div> -->\n          <!-- Team mean tooltip -->\n\n          <div class="arrowicon-container" (click)="openReviewersTeamList(teamMean.key,teamMean,reviewerItem?.employeeId)">\n            <ion-icon name="ios-arrow-forward" class="team-iconSize"></ion-icon>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</ion-content>\n\n<ion-footer *ngIf="statusModel==\'moderation\'||selectedItem ==\'Reviewer\'" class="submitfooter" >\n  <div class="btnsubmit-footer">\n    <button class="nextBtn" *ngIf="teamListResData?.isShowSubmitAll && (moderationList?.length > 0 || reviewersList?.length > 0) && !teamListResData?.isExpired"\n      (click)="submitAllKra()" ion-button round >Submit All</button>\n    <button class="nextBtn" disabled="true" *ngIf="!teamListResData?.isShowSubmitAll && !teamListResData?.isExpired" (click)="submitAllKra()"\n      ion-button round>Submitted</button>\n\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zendeavor-team-list\zendeavor-team-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], ZendeavorTeamListPage);
    return ZendeavorTeamListPage;
}());

//# sourceMappingURL=zendeavor-team-list.js.map

/***/ })

});
//# sourceMappingURL=50.js.map