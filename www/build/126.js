webpackJsonp([126],{

/***/ 1395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDapPageModule", function() { return MyDapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__peer_learning__ = __webpack_require__(1817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_circle_progress__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_selectable__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MyDapPageModule = /** @class */ (function () {
    function MyDapPageModule() {
    }
    MyDapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__peer_learning__["a" /* PeerLearnigPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__peer_learning__["a" /* PeerLearnigPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng_circle_progress__["a" /* NgCircleProgressModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_selectable__["a" /* IonicSelectableModule */]
            ],
        })
    ], MyDapPageModule);
    return MyDapPageModule;
}());

//# sourceMappingURL=peer-learning.module.js.map

/***/ }),

/***/ 1817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeerLearnigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_getterSetter_getterSetter__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_zenlearn_new_request_zenlearn_new_request__ = __webpack_require__(785);
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








var PeerLearnigPage = /** @class */ (function () {
    function PeerLearnigPage(viewCtrl, utilities, modalCtrl, getSet, navCtrl, navParams, popoverCtrl, httpProvider) {
        this.viewCtrl = viewCtrl;
        this.utilities = utilities;
        this.modalCtrl = modalCtrl;
        this.getSet = getSet;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.httpProvider = httpProvider;
        this.newmessageList = [];
        this.role = this.navParams.get("role");
        this.menteeItem = this.navParams.get('menteeItem');
        this.previousItem = this.navParams.get('isComingFromDAP');
        //this.userData = this.navParams.get('userData');
        this.userData = this.getSet.getUserData();
        console.log(this.getSet.getUserData());
        console.log(this.userData);
        this.getPeerData();
    }
    PeerLearnigPage.prototype.ngOnInit = function () {
    };
    // Get Peer Data
    PeerLearnigPage.prototype.getPeerData = function () {
        var _this = this;
        var data;
        this.utilities.updateLoader(true);
        if (this.previousItem && this.previousItem.isComingFromDAP) {
            data = {
                url: 'getPeerLearningLastPage',
                data: {
                    message: "",
                    status: "",
                    menteeid: '0',
                    role: this.role,
                    category: 'PeerLearning',
                    dapSectionMasterId: "2",
                    dapId: this.previousItem.dapId
                },
                zenLearn: true
            };
        }
        else {
            data = {
                url: 'getPeerLearningLastPage',
                data: {
                    message: "",
                    status: "",
                    menteeid: this.menteeItem.menteeid,
                    role: this.role,
                    category: 'PeerLearning',
                    dapSectionMasterId: "2",
                    dapId: this.menteeItem.dapId
                },
                zenLearn: true
            };
        }
        this.httpProvider.http.commonService(data).subscribe(function (response) {
            //console.log(response);
            if (response.details) {
                _this.peerData = response.details.responseList;
            }
            _this.utilities.updateLoader(false);
        }, function (error) {
            _this.utilities.updateLoader(false);
            //console.log(error)
        });
    };
    // **********Method for mark as completed**************/
    PeerLearnigPage.prototype.markAsCompletedM = function () {
        var _this = this;
        var url = "getMarkComplete";
        var data;
        data = {
            role: this.role,
            category: 'PeerLearning',
            dapId: this.menteeItem.dapId,
            userComment: ""
            // dapSectionId: this.peerData.dapSectionEntryId,
        };
        this.utilities.updateLoader(true);
        this.httpProvider.http
            .commonService({ url: url, data: data, zenLearn: true })
            .subscribe(function (res) {
            _this.utilities.updateLoader(false);
            // this.isAccepted = true;
            _this.utilities.showToast("Marked as completed successfully");
            _this.navCtrl.pop();
        }, function (err) {
            _this.utilities.updateLoader(false);
        });
    };
    // formatDate(obj) {
    //   let x =moment(obj).format('DD-MMM-YYYY, h:mm a');
    //   return x;
    // }
    // **********Method for mark as completed**************/
    PeerLearnigPage.prototype.markAsCompleted = function () {
        var _this = this;
        var url = "getMarkComplete";
        var data;
        data = {
            role: this.role,
            category: 'PeerLearning',
            dapSectionId: this.peerData.dapSectionEntryId,
        };
        this.utilities.updateLoader(true);
        this.httpProvider.http
            .commonService({ url: url, data: data, zenLearn: true })
            .subscribe(function (res) {
            _this.utilities.updateLoader(false);
            // this.isAccepted = true;
            _this.utilities.showToast("Marked as completed successfully");
            _this.navCtrl.pop();
        }, function (err) {
            _this.utilities.updateLoader(false);
        });
    };
    // **********Method for send msg**************/
    PeerLearnigPage.prototype.sendMsg = function () {
        var _this = this;
        console.log(this.inputMsg);
        var url = "sendMessage";
        this.currentTime = Date.now();
        var data;
        data = {
            role: this.role,
            message: this.inputMsg,
            mntorMappingId: this.peerData.mentorMappingId,
        };
        if (this.inputMsg != '') {
            this.utilities.updateLoader(true);
            this.httpProvider.http
                .commonService({ url: url, data: data, zenLearn: true })
                .subscribe(function (res) {
                _this.utilities.updateLoader(false);
                // this.isAccepted = true;
                _this.utilities.showToast("Message sent successfully");
                var msg = {
                    message: _this.inputMsg,
                    name: _this.userData.employeeName,
                    profilePic: _this.userData.employeeProfilePic,
                    time: _this.currentTime
                };
                _this.newmessageList.push(msg);
                _this.inputMsg = "";
            }, function (err) {
                _this.utilities.updateLoader(false);
            });
        }
        else {
            this.utilities.showToast("Please enter some message");
        }
    };
    PeerLearnigPage.prototype.approveReject = function (type) {
        var _this = this;
        this.utilities.updateLoader(true);
        var data = {
            url: 'getMarkComplete',
            data: {
                role: this.role,
                category: 'PeerLearning',
                dapId: this.previousItem.dapId,
                userComment: "",
                isReject: type
            },
            zenLearn: true
        };
        this.httpProvider.http.commonService(data).subscribe(function (response) {
            console.log(response);
            _this.utilities.updateLoader(false);
            if (type) {
                _this.utilities.presentAlert("DAP rejected successfully").then(function () {
                    _this.navCtrl.pop();
                });
            }
            else {
                _this.utilities.presentAlert("DAP approved successfully").then(function () {
                    _this.navCtrl.pop();
                });
            }
        }, function (error) {
            _this.utilities.updateLoader(false);
        });
    };
    PeerLearnigPage.prototype.newRequest = function () {
        var _this = this;
        var data = {
            dapId: this.previousItem.dapId,
            dapEntryId: this.peerData.dapSectionEntryId
        };
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_zenlearn_new_request_zenlearn_new_request__["a" /* ZenlearnNewRequestComponent */], { dapDetails: data }, { cssClass: 'onTheJOb' });
        modal.present();
        modal.onDidDismiss(function () {
            //this.getPeerData();
            _this.navCtrl.pop();
            // this.navCtrl.push("MyDaplistPage").then(()=>{
            //   let activeIndex = this.navCtrl.getActive().index - 1;
            //   this.navCtrl.remove(activeIndex , 4)
            // })
        });
    };
    PeerLearnigPage.prototype.dateConversion = function (input) {
        var date = __WEBPACK_IMPORTED_MODULE_7_moment__(input).format('D-MMM-YYYY');
        return date;
    };
    PeerLearnigPage.prototype.formateDate = function (data) {
        // let date = data.split(' ');
        // console.log(date[0]);
        return __WEBPACK_IMPORTED_MODULE_7_moment__(data).format('D-MMM-YYYY h:mm a');
    };
    PeerLearnigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'peer-learning',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\peer-learning\peer-learning.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="pageTitile">Peer Learning</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="backgrnd-white">\n  <div class="assosiate-list-detail">\n    <div class="Dap-tab">\n      <div class="learming-info">\n        <div class="dap-item">\n          <div class="dap-con">\n            <img class="user-icon" src="{{peerData?.profilePic}}">\n            <div class="user-info-con">\n              <div class="user-info">\n                <label class="user-name">{{peerData?.menteeName}}</label>\n              </div>\n              <div class="user-info">\n                <label class="info-title">Mentor Name</label>\n                <label class="info-value">{{peerData?.mentorName}}</label>\n              </div>\n              <div class="user-info">\n                <label class="info-title">Milestone Date</label>\n                <label class="info-value">{{dateConversion(peerData?.milestoneDate)}}</label>\n              </div>\n              <div class="user-info">\n                <label class="info-title">Status</label>\n                <label class="info-value">{{peerData?.statusDescription}}</label>\n              </div>\n              <button *ngIf="peerData?.markComplete" class="mark-completed" (click)="markAsCompletedM()">Mark\n                Complete</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="msg-item" *ngFor="let item of peerData?.messageList">\n        <div class="msg-con">\n          <img class="dap-icon" src="{{item.profilePic}}">\n          <div class="sender-info">\n            <ion-label>{{item?.name}}</ion-label>\n            <ion-label class="msg-time">{{formateDate(item?.time)}}</ion-label>\n          </div>\n          \n          <!-- <ion-label *ngIf="i==0 && item.name==peerData.menteeName" class="mentee-status sent">Request Sent</ion-label>\n          <ion-label *ngIf="i==1 && !peerData.newRequest && item.name ==peerData.mentorName" class="mentee-status accepted">Request Accepted</ion-label>\n          <ion-label *ngIf="i==1 && peerData.newRequest && item.name ==peerData.mentorName"class="mentee-status calcelled">Request Cancelled</ion-label> -->\n        </div>\n        <div class="msg-text">{{item?.message}}</div>\n      </div>\n      <div *ngIf="newmessageList.length!=0">\n        <div class="msg-item" *ngFor="let item of newmessageList">\n          <div class="msg-con">\n            <img class="dap-icon" src="{{item.profilePic}}">\n            <div class="sender-info">\n              <ion-label>{{item?.name}}</ion-label>\n              <ion-label class="msg-time">{{formateDate(item?.time)}}</ion-label>\n            </div></div>\n          <div class="msg-text">{{item?.message}}</div>\n        </div>\n      </div>\n      \n      \n      <div class="msg-item" *ngIf="peerData?.newRequest">\n        <div class="msg-text">\n          <div>\n            Your request has cancelled.\n          </div>\n          <button ion-button class="btnStyle" (click)="newRequest()"> New Request</button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <ion-footer style="background-color: white;">\n    <div class="button-conainer" *ngIf="peerData?.send">\n      <div class="button-con">\n        <img class="dap-icon" src="{{userData?.employeeProfilePic}}">\n        <ion-input type="text" [(ngModel)]="inputMsg"></ion-input>\n        <button (click)="sendMsg()">Send</button>\n      </div>\n    </div>\n    <div *ngIf="role == \'manager\' && this.previousItem?.dapStatus" class="approveReject">\n      <button ion-button class="btnStyle" (click)="approveReject(false)"> Approve</button>\n      <button ion-button class="btnStyle" (click)="approveReject(true)"> Reject</button>\n    </div>\n\n  </ion-footer>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\peer-learning\peer-learning.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__["a" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_getterSetter_getterSetter__["a" /* GetterSetter */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */]])
    ], PeerLearnigPage);
    return PeerLearnigPage;
}());

//# sourceMappingURL=peer-learning.js.map

/***/ })

});
//# sourceMappingURL=126.js.map