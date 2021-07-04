webpackJsonp([124],{

/***/ 1414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamListDetailPageModule", function() { return TeamListDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_list_detail__ = __webpack_require__(1836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_circle_progress__ = __webpack_require__(732);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TeamListDetailPageModule = /** @class */ (function () {
    function TeamListDetailPageModule() {
    }
    TeamListDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__team_list_detail__["a" /* TeamListDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__team_list_detail__["a" /* TeamListDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng_circle_progress__["a" /* NgCircleProgressModule */],
            ],
        })
    ], TeamListDetailPageModule);
    return TeamListDetailPageModule;
}());

//# sourceMappingURL=team-list-detail.module.js.map

/***/ }),

/***/ 1836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamListDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dap_popover_dap_popover__ = __webpack_require__(753);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TeamListDetailPage = /** @class */ (function () {
    function TeamListDetailPage(viewCtrl, utilities, modalCtrl, navCtrl, navParams, popoverCtrl, httpProvider) {
        this.viewCtrl = viewCtrl;
        this.utilities = utilities;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.httpProvider = httpProvider;
        this.teamData = {};
        this.dapData = [];
        this.selectedTab = 0;
        this.flowStatus = "In-progress,Completed,Approved,Manager Rejected,Pending Manager Approval,Pending For Manager Review,Mentor Rejected,Not Approved";
        this.learningType = "Technical,Behavioural";
        this.userId = navParams.get("userId");
        this.role = navParams.get("role");
    }
    TeamListDetailPage.prototype.ngOnInit = function () {
        //  Retriving Team List data
        // this.getTeamListData();
        // this.getDapListData(this.learningType, this.flowStatus)
    };
    TeamListDetailPage.prototype.ionViewWillEnter = function () {
        this.filteredData = "";
        this.getTeamListData();
        this.getDapListData(this.learningType, this.flowStatus);
    };
    TeamListDetailPage.prototype.getTeamListData = function () {
        var _this = this;
        this.utilities.updateLoader(true);
        var data = {
            url: 'specificAssociateDetails',
            data: {
                'associateId': this.userId
            },
            zenLearn: true
        };
        this.httpProvider.http.commonService(data).subscribe(function (response) {
            ////console.log(response);
            if (response.details) {
                _this.utilities.updateLoader(false);
                _this.teamData = response.details.responseList;
            }
        }, function (error) {
            _this.utilities.updateLoader(false);
            ////console.log(error)
        });
    };
    // Get My Dap Data
    TeamListDetailPage.prototype.getDapListData = function (learningType, flowStatus) {
        var _this = this;
        this.utilities.updateLoader(true);
        var data = {
            url: 'getMyDapsList',
            data: {
                "userId": this.userId,
                "flowStatus": flowStatus,
                "learningType": learningType
            },
            zenLearn: true
        };
        this.httpProvider.http.commonService(data).subscribe(function (response) {
            //console.log(response);
            if (response.details) {
                _this.utilities.updateLoader(false);
                _this.dapData = response.details.responseList;
            }
        }, function (error) {
            _this.utilities.updateLoader(false);
            //console.log(error)
        });
    };
    // Filter Popup
    TeamListDetailPage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var filteredData = this.filteredData;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__dap_popover_dap_popover__["a" /* DapPopoverPage */], { data: { filteredData: filteredData, showAllFilters: this.showAllFilters } }, { cssClass: 'zenLearn-popover' });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (data) {
            if (!_this.utilities.isEmptyOrNullOrUndefined(data)) {
                _this.filteredData = data;
                var learningType_1 = [];
                var flowStatus_1 = [];
                data.filterArray.learningType.forEach(function (element) {
                    if (element.checked == true)
                        learningType_1.push(element.value);
                });
                data.filterArray.flowStatus.forEach(function (element) {
                    if (element.checked == true)
                        flowStatus_1.push(element.value);
                });
                learningType_1 = learningType_1.toString();
                flowStatus_1 = flowStatus_1.toString();
                _this.getDapListData(learningType_1, flowStatus_1);
            }
        });
    };
    // Method for selecting Tab
    // selectTab(activeTab){
    //   this.selectedTab = activeTab
    //   if(this.dapData!=null && this.teamData != {}){
    //     if(activeTab==0 && this.teamData.userId==undefined){
    //       this.getTeamListData()
    //     }else if(activeTab==1 && this.dapData.length==0){
    //       this.getDapListData(this.learningType, this.flowStatus)
    //     }
    //   }
    // }
    // Method for redirecting to dap page
    TeamListDetailPage.prototype.goToDapPage = function (dapItem) {
        var selectedDap = {
            role: this.role,
            data: dapItem
        };
        this.navCtrl.push("DapDetailPage", { 'viewDapDetails': selectedDap, isAssociateDataAvailable: this.teamData.userId });
    };
    TeamListDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'team-list-detail',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\team-list-detail\team-list-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="pageTitile">Team List</ion-title>\n\n  </ion-navbar>\n</ion-header>\n<ion-content class="backgrnd-white">\n  <div class="assosiate-list-detail">\n    <div class="team-list-card" no-padding>\n      <div class="associate-info">\n        <div class="profile-info">\n          <img class="user-icon" [src]="teamData.profilePicURL" onerror="this.src=\'assets/imgs/blank.png\'" />\n          <div class="user-details">\n            <div class="username">{{teamData.userName}}</div>\n            <div class="sub-title" *ngFor="let userInfoitem of teamData.userDetails">\n\n              <label class="user-id">{{userInfoitem.value}}</label>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class="tabs-content">\n      <div class="learning-tab">\n\n        <div class="container-card">\n          <div class="learning-card" *ngFor="let learningItem of teamData.learningSummary; let i=index ">\n            <div class="learning-icon">\n              <span>\n                <img class="icon-header" src="{{learningItem.icon}}" onerror="this.src=\'./assets/imgs/logo.png\'" />\n              </span>\n            </div>\n            <div class="learning-info-con">\n              <div class=" width100per">\n                <span class="justify-content-space-btw width100per">\n                  <span class="center font-1p2 learn-sum-title">{{learningItem.title}}</span>\n                  <span class="center">\n                    <span class="lerning-pecent-value font-bold">{{learningItem.percentage}}%</span>\n                    <span class="lerning-hr">{{learningItem.totalCreditHrs}} Hrs</span>\n                    <ion-icon class="padding-left12" end name="ios-arrow-forward"></ion-icon>\n                  </span>\n                </span>\n              </div>\n              <div class="progress-outer">\n                <div class="progress-inner" [ngStyle]="{\'background-color\':\'#01C275\',\'width\':learningItem.percentage +\'%\'}">\n                </div>\n              </div>\n              <!-- <circle-progress [percent]="learningItem.percentage" [radius]="20" [outerStrokeWidth]="5"\n              [innerStrokeWidth]="5" [space]="-14" [outerStrokeColor]="red"\n              [innerStrokeColor]="yellow" [showSubtitle]="false" [animation]="true"\n              [animationDuration]="300" [responsive]="true">\n            </circle-progress> -->\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <!-- Tabs -->\n      <div class="tabs-con">\n\n        <div class="tab">DAP</div>\n        <ion-buttons class="filter-icon">\n          <button ion-button icon-only (click)="presentPopover($event)">\n            <img src="assets/imgs/dapFilterIconblack.svg" />\n          </button>\n        </ion-buttons>\n      </div>\n      <div class="Dap-tab">\n        <div class="learming-info">\n          <div class="learning-item" *ngFor="let dapItem of dapData; let i=index " (click)=\'goToDapPage(dapItem)\'>\n            <div class="containerItem-image"> \n            </div>\n            <div class="conatinerItem-list">\n              <ng-container *ngFor="let listData of dapItem?.list">\n                <ion-row *ngIf="listData?.value!=\'\'">\n                  <ion-col col-6>\n                    {{listData?.key}}\n                  </ion-col>\n                  <ion-col col-6 class="colorGrey">\n                    {{listData?.value}}\n                  </ion-col>\n                </ion-row>\n              </ng-container>\n             \n            </div>\n          </div>\n          <div class="no-data" *ngIf="dapData==null">No Dap available</div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\team-list-detail\team-list-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__["a" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */]])
    ], TeamListDetailPage);
    return TeamListDetailPage;
}());

//# sourceMappingURL=team-list-detail.js.map

/***/ })

});
//# sourceMappingURL=124.js.map