webpackJsonp([52],{

/***/ 1385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZendeavorReviewerListPageModule", function() { return ZendeavorReviewerListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_tooltips__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__zendeavor_reviewer_list__ = __webpack_require__(1807);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ZendeavorReviewerListPageModule = /** @class */ (function () {
    function ZendeavorReviewerListPageModule() {
    }
    ZendeavorReviewerListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__zendeavor_reviewer_list__["a" /* ZendeavorReviewerListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__zendeavor_reviewer_list__["a" /* ZendeavorReviewerListPage */]),
                __WEBPACK_IMPORTED_MODULE_0_ionic_tooltips__["a" /* TooltipsModule */]
            ],
        })
    ], ZendeavorReviewerListPageModule);
    return ZendeavorReviewerListPageModule;
}());

//# sourceMappingURL=zendeavor-reviewer-list.module.js.map

/***/ }),

/***/ 1807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZendeavorReviewerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_zendeavor_team_mean_modal_zendeavor_team_mean_modal__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
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
 * Generated class for the ZendeavorReviewerListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZendeavorReviewerListPage = /** @class */ (function () {
    function ZendeavorReviewerListPage(navCtrl, navParams, utilitiy, httpProvider, modalCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utilitiy = utilitiy;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.reviewerUrl = "getAssociateList";
        this.segmentModel = 'inProgress';
        this.reviewerListData = [];
        this.userID = '';
        this.pendingList = [];
        this.approvedList = [];
        this.submittedList = [];
        this.tooltipActualMean = "hello tooltip";
        this.tooltipEvent = 'click';
        this.isAppraisalDateExpired = false;
        this.userID = this.navParams.get('userID') || null;
        this.userRole = this.navParams.get('userRole') || null;
        this.kraType = this.navParams.get('kraType') || null;
    }
    ZendeavorReviewerListPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad ZendeavorReviewerListPage');
    };
    ZendeavorReviewerListPage.prototype.ionViewWillEnter = function () {
        this.utilitiy.updateLoader(true);
        this.getReviewerlistData();
    };
    /**
   * Api call to retrieve 2UP's team list
   */
    ZendeavorReviewerListPage.prototype.getReviewerlistData = function () {
        var _this = this;
        var reviewerParams = {
            // zenDeavorURL: this.url
            url: this.reviewerUrl,
            zenDeavorURL: true,
            data: {
                "userId": this.userID,
                "role": '3',
                "processType": this.kraType,
                "isTeamList": true
            }
        };
        this.httpProvider.http.commonService(reviewerParams).subscribe(function (res) {
            _this.utilitiy.updateLoader(false);
            _this.reviewerListData = res['details'];
            //console.log("reviewer list", res['details'])
            _this.pendingList = _this.reviewerListData['pendingList'];
            _this.submittedList = _this.reviewerListData['submittedList'];
            _this.approvedList = _this.reviewerListData['approvedList'];
            //console.log(this.pendingList)
            _this.isAppraisalDateExpired = _this.reviewerListData.isExpired;
            // this.approvedList=[
            //  {
            //   "employeeId ": "46186",
            //   "employeeName" : "Ashish Malvi",
            //   "employeeProfilePic":"",
            //   "":
            //  }
            // ]
        }, function (err) {
            _this.utilitiy.updateLoader(false);
        });
    };
    ZendeavorReviewerListPage.prototype.openTeamMeanModal = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__components_zendeavor_team_mean_modal_zendeavor_team_mean_modal__["a" /* ZendeavorTeamMeanModalComponent */], {
            'data': {
                applicableMean: this.reviewerListData.applicableMean,
                permissibleLimit: this.reviewerListData.permissibleLimit,
                actualMean: this.reviewerListData.actualMean,
                managerName: this.reviewerListData.name,
                toolTipData: this.reviewerListData.toolTipForMean
            }
        }, { cssClass: 'team-mean-modalCSS' }).present();
    };
    // open preview modal
    ZendeavorReviewerListPage.prototype.openPreview = function (selectedUser) {
        //console.log("selectedUser", selectedUser)
        if (selectedUser.isRedirectToHomePage && !this.isAppraisalDateExpired) {
            this.navCtrl.push("ZenDeavorKraPage", {
                userID: selectedUser.employeeId,
                role: this.userRole,
                userName: selectedUser.employeeName,
                kraType: this.kraType,
                showUsername: true,
                isTeamList: true,
                isAppraisalDateExpired: this.isAppraisalDateExpired,
            });
        }
        else {
            this.navCtrl.push("ZendeavorPreviewPage", {
                userID: selectedUser.employeeId,
                userRole: this.userRole,
                userName: selectedUser.employeeName,
                kraType: this.kraType,
                showUsername: true,
                isTeamList: true,
                isAppraisalDateExpired: this.isAppraisalDateExpired
            });
        }
    };
    ZendeavorReviewerListPage.prototype.openKRAPage = function (submittedItem) {
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
    ZendeavorReviewerListPage.prototype.openPopover = function (event, data) {
        //console.log("data ", data)
        //console.log("kraType ", this.kraType)
        var _this = this;
        event.stopPropagation();
        var popover = this
            .popoverCtrl
            .create('PopoverPage', { type: 'direct-submit' });
        popover.present({ ev: event });
        popover.onDidDismiss(function (res) {
            if (res == 'directSubmit') {
                if (data.isEligibileForDirectApprove && !_this.utilitiy.isEmptyOrNullOrUndefined(data)) {
                    if (data.isPromotionEligibility) {
                        _this.navCtrl.push('ZenDeavorKraPage', {
                            role: _this.userRole,
                            kraType: _this.kraType,
                            userID: data.employeeId,
                            kraId: "-2",
                            // title: 'Summary',
                            showWhenData: true,
                            isDirectApprove: true,
                            showUsername: true
                            // userId: "51424",
                            // kraId: "-2",
                            // subKraId: "1432011",
                        });
                    }
                    else {
                        //console.log("userid", data.employeeId)
                        //console.log("userRole", this.userRole)
                        //console.log("kraType", this.kraType)
                        _this.navCtrl.push("ZendeavorPreviewPage", {
                            userID: data.employeeId,
                            userRole: _this.userRole,
                            userName: data.employeeName,
                            kraType: _this.kraType,
                            isDirectApprove: true,
                            showUsername: true,
                            isTeamList: true
                        });
                    }
                }
                else {
                    _this.utilitiy.presentAlert(data.directApproveAlert);
                }
            }
            // else if(res=='consult'){
            //   console.log("consult")
            // }
        });
    };
    ZendeavorReviewerListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-zendeavor-reviewer-list',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zendeavor-reviewer-list\zendeavor-reviewer-list.html"*/'<!--\n  Generated template for the ZendeavorReviewerListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Team List</ion-title>\n    <ion-buttons end (click)="openTeamMeanModal()">\n      <!-- <button ion-button class="headerBtn" (click)="sendReminder()">Send Reminder</button>\n          <button ion-button icon-only (click)="presentOptions($event)">\n            <ion-icon name="more"></ion-icon>\n          </button> -->\n      <div class="teamMean current-mean-color">\n        <div class="teamMean-img-div">\n            <img class="teamMean-img" [src]="reviewerListData?.currentMean?.icon" onerror="this.src=\'assets/menu_icons/1-UpManager.svg\'">\n        </div>\n        <div class="padding-rt-left5 currentMeanTitle">{{reviewerListData?.currentMean?.key}}</div>\n        <div> {{reviewerListData?.currentMean?.value}}</div>\n        <ion-icon class="padding-rt-left5" name="ios-arrow-down"></ion-icon>\n      </div>\n\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-segment [(ngModel)]="segmentModel">\n    <ion-segment-button value="inProgress" class="custom-segment"> <span>In Progress</span> <span>{{pendingList?.length ||0}}</span> </ion-segment-button>\n    <ion-segment-button value="submitted" class="custom-segment"> <span>Submitted</span> <span>{{submittedList?.length ||0}}</span> </ion-segment-button>\n    <ion-segment-button value="approved" class="custom-segment"><span>Completed</span> <span>{{approvedList?.length ||0}}</span> </ion-segment-button>\n    <ion-segment-button value="moderation" class="custom-segment" [hidden]="!getTeamListData?.isModeration"> <span>Moderation</span> <span> {{moderationList?.length}}</span>\n     </ion-segment-button>\n\n  </ion-segment>\n  <div [ngSwitch]="segmentModel">\n\n    <div *ngSwitchCase="\'inProgress\'">\n      <div class="associate-card" *ngFor="let pendingItem of pendingList">\n        <div class="associate-details">\n          <div class="associate-profile-pic"><img [src]="pendingItem?.employeeProfilePic" onerror="this.src=\'assets/imgs/dummy-profile.png\'"></div>\n          <div class="associate-info">\n            <div class="associate-name">{{pendingItem.employeeName}}</div>\n            <div class="associate-id margin-top5">{{pendingItem.employeeId}}</div>\n          </div>\n        </div>\n        <!-- <div>\n          <div class="teamMean-container" *ngFor="let teamMean of pendingItem?.teamMeanList">\n            <div class="">\n              <div class="teamMean">{{teamMean.key}}</div>\n              <div>{{teamMean.value}}</div>\n            </div>\n            <ion-icon name="ios-arrow-forward" class="iconSize"></ion-icon>\n          </div>\n        </div> -->\n        <div class="divSecond">\n          <div class="subDiv">\n            <span class="status font8em">Reminder</span>\n            <span class="statusColor font8em">{{pendingItem?.reminderCount}} Sent</span>\n          </div>\n          <!-- <div>\n            <span class="iconSize pd5" (click)="sendReminderPopover($event,pendingItem?.employeeId)">\n              <ion-icon name="more"></ion-icon>\n            </span>\n          </div> -->\n\n        </div>\n\n      </div>\n      <div class="nodata" *ngIf="pendingList?.length==0">No Data Available</div>\n\n    </div>\n\n    <div *ngSwitchCase="\'submitted\'">\n      <div class="associate-card" *ngFor="let submitItem of submittedList" (click)="openKRAPage(submitItem)">\n        <div class="associate-details">\n          <div class="associate-profile-pic"><img [src]="submitItem?.employeeProfilePic" onerror="this.src=\'assets/imgs/dummy-profile.png\'"></div>\n          <div class="associate-info">\n            <div class="associate-name">{{submitItem.employeeName}}</div>\n            <div class="associate-id margin-top5">{{submitItem.employeeId}}</div>\n          </div>\n        </div>\n        <!-- <div>\n          <div class="teamMean-container" *ngFor="let teamMean of submitItem?.teamMeanList">\n            <div class="">\n              <div class="teamMean">{{teamMean.key}}</div>\n              <div>{{teamMean.value}}</div>\n            </div>\n            <ion-icon name="ios-arrow-forward" class="iconSize"></ion-icon>\n          </div>\n        </div> -->\n        <div class="divSecond">\n          <div class="subDiv">\n            <span class="status font8em">{{submitItem?.appraiserScore?.key}}</span>\n            <span class="statusColor font8em">{{submitItem?.appraiserScore?.value}}</span>\n          </div>\n          <div (click)="openPopover($event,submitItem)" class="pd5" *ngIf="!isAppraisalDateExpired">\n            <span class="font1-6em padding5">\n              <ion-icon name="more"></ion-icon>\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class="nodata" *ngIf="submittedList?.length==0">No Data Available</div>\n\n    </div>\n    <div *ngSwitchCase="\'approved\'">\n      <div class="associateCardApproved" *ngFor="let approvedItem of approvedList" (click)="openPreview(approvedItem)">\n          <ion-item class="padding0 padding-left7">\n          <ion-avatar item-start>\n            <img class="imgCls" [src]="approvedItem?.employeeProfilePic" onerror="this.src=\'assets/imgs/dummy-profile.png\'">\n            <img class="selectedImg" *ngIf="approvedItem?.appraisalStatus ==\'COMPLETED\'" src="assets/imgs/ZenDeavour/ZenDeavour_approved.svg">\n            <img class="selectedImg" *ngIf="approvedItem?.appraisalStatus==\'CLOSED\' || approvedItem?.appraisalStatus==\'PENDING FOR CLOSE\'" src="assets/imgs/ZenDeavour/ZenDeavour_disapproved.svg">\n          </ion-avatar>\n          <h3 class="associate-name">{{approvedItem?.employeeName}}</h3>\n          <p>{{approvedItem?.employeeId}}</p>\n        </ion-item>\n        <!-- <div class="associate-details">\n          <div class="associate-profile-pic">\n            <img [src]="approvedItem?.employeeProfilePic" onerror="this.src=\'assets/imgs/dummy-profile.png\'">\n            <img class="selectedImg" *ngIf="approvedItem?.appraisalStatus ==\'COMPLETED\'" src="assets/imgs/ZenDeavour/ZenDeavour_approved.svg">\n            <img class="selectedImg" *ngIf="approvedItem?.appraisalStatus==\'CLOSED\' || approvedItem?.appraisalStatus==\'PENDING FOR CLOSE\'" src="assets/imgs/ZenDeavour/ZenDeavour_disapproved.svg">\n          </div>\n          <div class="associate-info">\n            <div class="associate-name">{{approvedItem.employeeName}}</div>\n            <div class="associate-id margin-top5">{{approvedItem.employeeId}}</div>\n          </div>\n        </div> -->\n        <!-- <div>\n          <div class="teamMean-container" *ngFor="let teamMean of approvedItem?.teamMeanList">\n            <div class="">\n              <div class="teamMean">{{teamMean.key}}</div>\n              <div>{{teamMean.value}}</div>\n            </div>\n            <ion-icon name="ios-arrow-forward" class="iconSize"></ion-icon>\n          </div>\n        </div> -->\n        <div class="divSecond">\n          <div class="subDiv">\n            <span class="status font8em">{{approvedItem?.appraiserScore?.key}}</span>\n            <span class="statusColor font8em">{{approvedItem?.appraiserScore?.value}}</span>\n\n          </div>\n          <!-- <div (click)="openPopover($event,submittedItem?.employeeId)" class="pd5">\n            <span class="iconSize">\n              <ion-icon name="more"></ion-icon>\n            </span>\n          </div> -->\n        </div>\n\n      </div>\n\n      <div class="nodata" *ngIf="approvedList?.length==0">No Data Available</div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zendeavor-reviewer-list\zendeavor-reviewer-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["C" /* PopoverController */]])
    ], ZendeavorReviewerListPage);
    return ZendeavorReviewerListPage;
}());

//# sourceMappingURL=zendeavor-reviewer-list.js.map

/***/ })

});
//# sourceMappingURL=52.js.map