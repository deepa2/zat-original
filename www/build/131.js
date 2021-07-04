webpackJsonp([131],{

/***/ 1391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DapDetailPageModule", function() { return DapDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dap_detail__ = __webpack_require__(1813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_circle_progress__ = __webpack_require__(732);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DapDetailPageModule = /** @class */ (function () {
    function DapDetailPageModule() {
    }
    DapDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dap_detail__["a" /* DapDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dap_detail__["a" /* DapDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng_circle_progress__["a" /* NgCircleProgressModule */],
            ],
        })
    ], DapDetailPageModule);
    return DapDetailPageModule;
}());

//# sourceMappingURL=dap-detail.module.js.map

/***/ }),

/***/ 1813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DapDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_zenlearn_on_the_job_zenlearn_on_the_job__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_getterSetter_getterSetter__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DapDetailPage = /** @class */ (function () {
    function DapDetailPage(viewCtrl, utilities, modalCtrl, navCtrl, navParams, popoverCtrl, httpProvider, getSet) {
        this.viewCtrl = viewCtrl;
        this.utilities = utilities;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.httpProvider = httpProvider;
        this.getSet = getSet;
        this.managersComments = '';
        //************************* new code ***************************/
        var detailedData = this.navParams.get('viewDapDetails');
        this.role = detailedData.role;
        this.dapDetailedData = detailedData.data;
        this.userDetails = this.getSet.getUserData();
        if (this.navParams.get('isAssociateDataAvailable')) {
            this.employeeId = this.navParams.get('isAssociateDataAvailable');
        }
        else {
            this.employeeId = this.userDetails.employeeId;
        }
    }
    // ****************new code***************************
    DapDetailPage.prototype.ionViewWillEnter = function () {
        this.getDapDetailedData();
    };
    DapDetailPage.prototype.getDapDetailedData = function () {
        var _this = this;
        var param;
        this.utilities.updateLoader(true);
        if (!this.dapList) {
            param = {
                url: 'viewDAP',
                data: {
                    dapId: this.dapDetailedData.dapId,
                    role: this.role,
                    status: this.dapDetailedData.status
                },
                zenLearn: true
            };
        }
        else {
            param = {
                url: 'viewDAP',
                data: {
                    dapId: this.dapDetailedData.dapId,
                    role: this.role,
                    status: this.dapList.status
                },
                zenLearn: true
            };
        }
        this.httpProvider.http.commonService(param).subscribe(function (response) {
            //console.log(response);
            _this.utilities.updateLoader(false);
            if (response && response.details) {
                _this.dapList = response.details.responseList.dap;
                _this.dapSection = response.details.responseList.dapSections;
            }
            else {
            }
        }, function (error) {
            _this.utilities.updateLoader(false);
        });
    };
    DapDetailPage.prototype.getDapDetail = function (dapData) {
        var _this = this;
        console.log(dapData);
        if (dapData.sectionTitle == 'On the Job') {
            var selectedDapData = {
                'selectedDapId': this.dapDetailedData.dapId,
                'dapDetails': dapData,
                'role': this.role,
                'dapStatus': dapData.isSubmitAvailable
            };
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_zenlearn_on_the_job_zenlearn_on_the_job__["a" /* ZenlearnOnTheJobComponent */], { 'zenLearnData': selectedDapData }, { cssClass: 'onTheJOb' });
            modal.present();
            modal.onDidDismiss(function (data) {
                if (data) {
                    _this.navCtrl.pop();
                }
                else {
                    _this.getDapDetailedData();
                }
            });
        }
        else if (dapData.sectionTitle == 'Peer Learning') {
            var isComingFromDAP = {
                isComingFromDAP: true,
                dapId: this.dapDetailedData.dapId,
                dapStatus: dapData.isSubmitAvailable
            };
            this.navCtrl.push('PeerLearnigPage', { 'isComingFromDAP': isComingFromDAP, 'role': this.role });
        }
        else if (dapData.sectionTitle == 'Classroom/Online') {
            //this.navCtrl.push("CourseListPage", { selectedCourse: 'recommended', showAllFilters: false })
        }
    };
    DapDetailPage.prototype.getStatusValue = function (item, arrValue) {
        //console.log(arrValue)
        var statusObj = arrValue.lov.filter(function (data) {
            if (data.key == item) {
                return data;
            }
        });
        // console.log(statusObj)
        return statusObj[0].value;
    };
    DapDetailPage.prototype.approveReject = function (type) {
        var _this = this;
        var message;
        if (type == 'Approved') {
            message = 'Do you want to approve DAP?';
        }
        else {
            message = 'Do you want to reject DAP?';
        }
        this.utilities.presentConfirmation(message).then(function () {
            _this.utilities.updateLoader(true);
            var data = {
                url: 'approveOrRejectDap',
                data: {
                    dapId: _this.dapDetailedData.dapId,
                    managerComments: _this.managersComments,
                    approvedOrRejected: type
                },
                zenLearn: true
            };
            _this.httpProvider.http.commonService(data).subscribe(function (response) {
                console.log(response);
                _this.utilities.updateLoader(false);
                if (response && response.status) {
                    if (response.status.statusCode == 1) {
                        _this.utilities.presentAlert("DAP " + type.toLowerCase() + " successfully !!!!").then(function () {
                            _this.navCtrl.pop();
                        });
                    }
                }
            }, function (error) {
                _this.utilities.updateLoader(false);
            });
        })
            .catch(function () { });
    };
    DapDetailPage.prototype.presentOptions = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create('PopoverPage', { 'type': 'dapDetails' });
        popover.present({ ev: myEvent });
        popover.onDidDismiss(function () {
            _this.exportDap();
        });
    };
    DapDetailPage.prototype.exportDap = function () {
        var _this = this;
        this.utilities.updateLoader(true);
        var data = {
            url: 'sendDAPDetails',
            data: {
                "userId": this.userDetails.employeeId,
                "dapId": this.dapDetailedData.dapId,
                "learningType": ""
            },
            zenLearn: true
        };
        this.httpProvider.http.commonService(data).subscribe(function (response) {
            console.log(response);
            _this.utilities.updateLoader(false);
            _this.utilities.showToast("Please check your Email for DAP report.");
        }, function (error) {
            _this.utilities.updateLoader(false);
        });
    };
    DapDetailPage.prototype.openCourses = function (data) {
        console.log(data);
        if (data == 'addProgram') {
            var dapDetails = {
                dapId: this.dapDetailedData.dapId,
                dapSectionId: 3,
                userId: this.employeeId
            };
            this.navCtrl.push('SelectedCoursesPage', { 'dapId': dapDetails });
        }
    };
    DapDetailPage.prototype.dateConversion = function (input) {
        var date = __WEBPACK_IMPORTED_MODULE_7_moment__(input).format('D-MMM-YYYY');
        return date;
    };
    DapDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dap-detail',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\dap-detail\dap-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="pageTitile">DAP</ion-title>\n    <!-- <ion-buttons end *ngIf="role == \'Associate\'">\n      <button ion-button icon-only (click)="presentOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n<!-- new features  -->\n\n<ion-content>\n\n  <div class="dapContainer">\n    <div class="dap-image">\n      <img src="assets/zenLearn-imgs/dap-icon1.svg" />\n    </div>\n    <div class="dap-main-info">\n      <ion-row *ngFor="let listDetails of dapList?.list">\n        <ion-col class="dap-title" col-5>{{listDetails?.key}}</ion-col>\n        <ion-col class="dap-value" col-7>{{listDetails?.value}}</ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div *ngFor="let dapSectionList of  dapSection" class="dapList" (click)="getDapDetail(dapSectionList)">\n    <div *ngIf="dapSectionList?.showDapSection">\n      <div class="dap-header">\n        <img *ngIf="dapSectionList.sectionTitle==\'On the Job\'" src="assets/zenLearn-imgs/on-the-job.svg" />\n        <img *ngIf="dapSectionList.sectionTitle==\'Peer Learning\'" src="assets/zenLearn-imgs/peer-learning.svg" />\n        <img *ngIf="dapSectionList.sectionTitle==\'Classroom/Online\'" src="assets/zenLearn-imgs/classroom.svg" />\n        {{dapSectionList?.sectionTitle}}\n        <!-- <img *ngIf="dapSectionList?.sectionTitle !=\'Classroom/Online\'" class="right-arrow" src="assets/zenLearn-imgs/right-arrow.svg" /> -->\n      </div>\n      <ion-row class="dap-info" *ngFor="let detail of  dapSectionList?.list">\n        <ng-container *ngIf="detail?.key !=\'Mentor Name\' && detail?.value!=\'\'">\n          <ion-col col-5 (click)="openCourses(detail?.key)">{{detail?.title}}</ion-col>\n          <ion-col class="dap-value" col-7 *ngIf="detail?.title != \'Status\' && detail?.title !=\'Milestone Date\' && detail?.key ==\'peerName\'">{{dapSectionList?.list[1].value}} ({{detail?.value}})</ion-col>\n          <ion-col class="dap-value" col-7 *ngIf="detail?.title != \'Status\' && detail?.title !=\'Milestone Date\' && detail?.key !=\'peerName\' && detail?.title !=\'Shortlisted Programs\'">{{detail?.value}}</ion-col>\n          <ion-col (click)="openCourses()" class="dap-value"  col-7 style="display: flex;\n          align-items: center;\n          justify-content: space-between;" *ngIf="detail?.title != \'Status\' && detail?.title !=\'Milestone Date\' && detail?.key !=\'peerName\' && detail?.title ==\'Shortlisted Programs\'"><span>{{detail?.value}}</span>\n            <!-- <img *ngIf="detail?.title != \'Status\' && detail?.title !=\'Milestone Date\' && detail?.key !=\'peerName\' && detail?.title ==\'Shortlisted Programs\'" class="right-arrow" src="assets/zenLearn-imgs/right-arrow.svg" /> -->\n          </ion-col>\n          <ion-col class="dap-value" col-7 *ngIf="detail?.title != \'Status\' && detail?.title==\'Milestone Date\'">{{dateConversion(detail?.value)}}</ion-col>\n          <ion-col class="dap-value" col-7 *ngIf="detail?.title == \'Status\'">{{getStatusValue(detail?.value,detail)}}\n          </ion-col>\n        </ng-container>\n        \n      </ion-row>\n\n    </div>\n   \n  </div>\n\n  <div *ngIf="dapDetailedData.status == \'Pending Manager Approval\'" class="dapList">\n    <ion-textarea placeholder="Manager\'s comments" [(ngModel)]="managersComments">\n\n    </ion-textarea>\n  </div>\n  \n  <div class="submitBtn" *ngIf="dapDetailedData.status == \'Pending Manager Approval\'">\n    <button ion-button class="btnStyle" [disabled]="!managersComments" (click)="approveReject(\'Approved\')">Approve</button>\n    <button ion-button class="btnStyle" [disabled]="!managersComments" (click)="approveReject(\'Rejected\')">Reject</button>\n\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\dap-detail\dap-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__["a" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_getterSetter_getterSetter__["a" /* GetterSetter */]])
    ], DapDetailPage);
    return DapDetailPage;
}());

//# sourceMappingURL=dap-detail.js.map

/***/ })

});
//# sourceMappingURL=131.js.map