webpackJsonp([48],{

/***/ 1432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewGoalsPageModule", function() { return ReviewGoalsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__review_goals__ = __webpack_require__(1854);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReviewGoalsPageModule = /** @class */ (function () {
    function ReviewGoalsPageModule() {
    }
    ReviewGoalsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__review_goals__["a" /* ReviewGoalsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__review_goals__["a" /* ReviewGoalsPage */]),
            ],
        })
    ], ReviewGoalsPageModule);
    return ReviewGoalsPageModule;
}());

//# sourceMappingURL=review-goals.module.js.map

/***/ }),

/***/ 1854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewGoalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_kra_consent_kra_consent__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_redirect_kra_redirect_kra__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_constants__ = __webpack_require__(37);
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
 * Generated class for the ReviewGoalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReviewGoalsPage = /** @class */ (function () {
    function ReviewGoalsPage(httpProvider, popoverCtrl, navCtrl, utilitiy, navParams, modalCtrl, alertCtrl) {
        this.httpProvider = httpProvider;
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.utilitiy = utilitiy;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.previewUrl = "kraPreviewDeatils";
        this.approveKraUrl = 'submitKra';
        this.agreeConsentUrl = "kraConsent";
        this.submitGoalsUrl = 'submitKra';
        this.enableEditKraUrl = 'enableEditKra';
        this.kraListDetails = [];
        this.finalStatus = '';
        this.isapprove = "true";
        this.appraiserDiscussionmodel = true;
        this.reviewerdiscusionReqmodel = false;
        this.reviewerDiscussionModel = false;
        this.isAppraisalDateExpired = false;
        this.kraYear = this.navParams.get('kraYear');
        this.userID = this.navParams.get('userID');
        console.log("id", this.userID);
        this.userRole = this.navParams.get('userRole');
        this.isDirectApprove = this.navParams.get('isDirectApprove');
        console.log("kra", this.kraYear);
        console.log("isDirectApprove", this.isDirectApprove);
        console.log("userRole", this.userRole);
        this.hideConsentOnKraStatus = this.navParams.get('hideConsentOnKraStatus');
        console.log("hideConsentOnKraStatus", this.hideConsentOnKraStatus);
    }
    // ngDoCheck() {
    //   this.getReviewDetails();
    // }
    ReviewGoalsPage.prototype.ionViewCanEnter = function () {
        console.log('ionViewCanEnter ReviewGoalsPage');
    };
    ReviewGoalsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReviewGoalsPage');
        // this.getReviewDetails();
    };
    ReviewGoalsPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter ');
        this.getReviewDetails();
    };
    ReviewGoalsPage.prototype.ngOnInit = function () {
        console.log('ngOnInit ');
    };
    /**
   * Api call for REVIEW DETAILS i.e appraisal details
   */
    ReviewGoalsPage.prototype.getReviewDetails = function () {
        var _this = this;
        this.utilitiy.updateLoader(true);
        var previewData = {
            url: this.previewUrl,
            zenDeavorURL: true,
            data: {
                "userId": this.userID,
                "role": this.userRole,
                "isDirectApprove": this.isDirectApprove,
                "year": this.kraYear
            }
        };
        this.httpProvider.http.commonService(previewData).subscribe(function (res) {
            _this.utilitiy.updateLoader(false);
            _this.reviewResponse = res.details;
            _this.kraListDetails = res.details.kraList;
            _this.finalStatus = res.details.finalStatus;
            console.log("kra list", _this.kraListDetails.kradetailList);
            // this.managerComments = res.details.managerComment
            // this.scoreList = this.previewResponse.scoreList
            // let kradetailslist=this.kraListDetails[1].kradetailList[2].subKraDetailList
            // console.log("kra list",kradetailslist)
            _this.consentStatus = _this.reviewResponse.isConsetPending;
            // this.cmmtData = this.managerComments
            if (_this.finalStatus == 'REDIRECT BY APPRAISER' || _this.finalStatus == 'PENDING FOR CONSENT') {
                _this.content.resize();
            }
            console.log("kraListDetails", _this.kraListDetails);
        }, function (err) {
            _this.utilitiy.updateLoader(false);
        });
    };
    ReviewGoalsPage.prototype.showSubmitEditForEmp = function () {
        return !this.consentStatus && this.userRole == '1' && (this.finalStatus == 'PENDING TO SUBMIT' || this.finalStatus == 'REDIRECT BY APPRAISER');
    };
    ReviewGoalsPage.prototype.presentConfirm = function (type) {
        var _this = this;
        console.log("sdshdh", type);
        // if (type == 'approve') {
        //   this.approveKRA()
        // } else {
        //   this.redirectKRA(this.userID)
        // }
        var alert = this.alertCtrl.create({
            // title: 'Confirm purchase',
            message: 'Are you sure you want to submit?',
            buttons: [{
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                    }
                }, {
                    text: 'Yes',
                    handler: function () {
                        if (type == 'agree') {
                            _this.agreeConsent();
                        }
                        else {
                            _this.submitAppraisal();
                        }
                    }
                }]
        });
        alert.present();
    };
    ReviewGoalsPage.prototype.redirectKRA = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_redirect_kra_redirect_kra__["a" /* RedirectKraComponent */], {
            'data': {
                userData: this.userID,
                redirectGoals: true,
                year: this.kraYear
            }
        }, { cssClass: 'kra-training-modal' });
        modal.onDidDismiss(function (data) {
            if (data === "SUBMITTED_DATA_SUCCESSFULLY") {
                _this.navCtrl.pop();
                _this.navCtrl.getPrevious().data.submitStatus = "true";
                // this.getAssociateData();
            }
        });
        modal.present();
    };
    ReviewGoalsPage.prototype.approveKRA = function () {
        var _this = this;
        this.utilitiy.updateLoader(true);
        var approveData = {
            url: this.approveKraUrl,
            zenDeavorURL: true,
            data: {
                "userId": this.userID,
                "role": this.userRole,
                "year": this.kraYear,
                "isDirectApprove": this.isDirectApprove
            }
        };
        this.httpProvider.http.commonService(approveData).subscribe(function (res) {
            _this.utilitiy.updateLoader(false);
            if (!_this.utilitiy.isEmptyOrNullOrUndefined(res) && !_this.utilitiy.isEmptyOrNullOrUndefined(res.status)
                && !_this.utilitiy.isEmptyOrNullOrUndefined(res.status.statusCode) && res.status.statusCode == 1) {
                _this.navCtrl.getPrevious().data.submitStatus = "true";
                _this.navCtrl.pop();
            }
        }, function (err) {
            _this.utilitiy.updateLoader(false);
            _this.utilitiy.showAlert('Review Goals', __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* Constants */]["Server_Error_Message"]);
        });
    };
    ReviewGoalsPage.prototype.editKra = function (clickedKra) {
        var _this = this;
        console.log(clickedKra);
        // if (this.isTeamlist) {
        //     this.editKraforReviewer(clickedKra)
        // }
        // else {
        // this.navCtrl.getPrevious().data.submitStatus = 'false'
        // this.navCtrl.getPrevious().data.kraId = clickedKra.kraId
        // if (clickedKra.kraId == '-2') {
        //     this.navCtrl.getPrevious().data.title = clickedKra.kraTitle
        // }
        // else {
        //     this.navCtrl.getPrevious().data.title = 'KRA'
        // }
        // this.navCtrl.pop()
        // }
        if (this.userRole == '2') {
            if (this.isDirectApprove) {
                this.presentConfirmForDirectApprove().then(function (res) {
                    if (!_this.utilitiy.isEmptyOrNullOrUndefined(res) && res) {
                        console.log("res", res);
                        _this.enableEditKra(clickedKra);
                    }
                });
            }
            else {
                this.navCtrl.pop();
                this.navCtrl.push('ZendeavorGoalSettingPage', {
                    userRole: this.userRole,
                    userID: this.userID,
                    kraId: clickedKra.kraId,
                    submitStatus: 'false',
                    kraYear: this.kraYear,
                    isDirectApprove: this.isDirectApprove
                });
            }
        }
        if (this.userRole == '1') {
            this.navCtrl.getPrevious().data.submitStatus = 'false';
            this.navCtrl.getPrevious().data.kraId = clickedKra.kraId;
            // if (clickedKra.kraId == '-2') {
            //     this.navCtrl.getPrevious().data.title = clickedKra.kraTitle
            // }
            // else {
            //     this.navCtrl.getPrevious().data.title = 'KRA'
            // }
            this.navCtrl.pop();
        }
    };
    ReviewGoalsPage.prototype.closeReviewPage = function () {
        this.navCtrl.getPrevious().data.submitStatus = 'false';
        this.navCtrl.getPrevious().data.kraId = '-1';
        this.navCtrl.pop();
    };
    ReviewGoalsPage.prototype.showSubmitEditForMgr = function () {
        return this.userRole == '2' && this.finalStatus == 'PENDING AT APPRAISER';
    };
    ReviewGoalsPage.prototype.selectConsent = function (type, status) {
        // if (this.finalStatus == 'PENDING FOR TWO UP CONSENT') {
        //   this.appraiserDiscussionmodel = false
        //   this.reviewerdiscusionReqmodel = false
        // }
        if (!this.reviewerdiscusionReqmodel) {
            this.utilitiy.presentAlert('Please select the checkbox');
            return;
        }
        this.isapprove = status;
        if (type == 'agree') {
            this.presentConfirm(type);
        }
        else {
            this.openConsentModal(type);
        }
    };
    ReviewGoalsPage.prototype.openConsentModal = function (type) {
        var _this = this;
        var kraConsentModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__components_kra_consent_kra_consent__["a" /* KraConsentComponent */], {
            'data': {
                typeOfConsent: type,
                userID: this.userID,
                isGoalsConsent: true,
                userRole: this.userRole,
                krayear: this.kraYear,
                appraiserDiscussion: 1,
            }
        }, { cssClass: 'kra-training-modal' });
        kraConsentModal.onDidDismiss(function (response) {
            if (!_this.utilitiy.isEmptyOrNullOrUndefined(response) && response == 'DATA_SUBMITTED') {
                _this.navCtrl.pop();
            }
        });
        kraConsentModal.present();
    };
    /**
     * submit Consent------Agree
     * called when agree is clicked
     */
    ReviewGoalsPage.prototype.agreeConsent = function () {
        var _this = this;
        this.utilitiy.updateLoader(true);
        var data = {
            // zenDeavorURL: this.url
            url: this.agreeConsentUrl,
            zenDeavorURL: true,
            data: {
                "consentRemark": "",
                "consentId": 1,
                // "appraiserDiscussion": 1,
                "userId": this.userID,
                "year": this.kraYear,
                "role": this.userRole,
                // "reviewerDiscussion": "",
                "appraiserDiscussion": 1
            }
        };
        this.httpProvider.http.commonService(data).subscribe(function (res) {
            _this.utilitiy.updateLoader(false);
            _this.utilitiy.presentAlert(res['status'].statusMessage).then(function (response) {
                if (!_this.utilitiy.isEmptyOrNullOrUndefined(res) && !_this.utilitiy.isEmptyOrNullOrUndefined(res.status)
                    && !_this.utilitiy.isEmptyOrNullOrUndefined(res.status.statusCode) && res.status.statusCode == 1) {
                    if (_this.userRole == '1') {
                        _this.navCtrl.pop();
                    }
                }
            });
        }, function (err) {
            _this.utilitiy.updateLoader(false);
        });
    };
    /**
    *Final submit kra
    */
    ReviewGoalsPage.prototype.submitAppraisal = function () {
        var _this = this;
        if (!this.reviewResponse.isWeightageCorrect) {
            this.utilitiy.presentAlert(this.reviewResponse.weightageAlert);
            return;
        }
        this.utilitiy.updateLoader(true);
        var kraDetails = {
            url: this.submitGoalsUrl,
            data: {
                "userId": !this.utilitiy.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
                // "kraId": ,
                // "subKraId": "1432011",
                "role": this.userRole,
                "year": this.kraYear,
                // "processType": "Annual",
                "isDirectApprove": this.isDirectApprove
            },
            zenDeavorURL: true
        };
        // this.isServiceCallOn = true
        this.httpProvider.http.commonService(kraDetails).subscribe(function (response) {
            // this.isServiceCallOn = false
            if (response) {
                _this.utilitiy.updateLoader(false);
                if (response['status'] && response['status'].statusCode == '1') {
                    var statusMessage = response['status'].statusMessage;
                    _this.utilitiy.presentAlert(statusMessage).then(function (res) {
                        _this.navCtrl.getPrevious().data.submitStatus = "true";
                        _this.navCtrl.pop();
                    });
                }
            }
        }, function (err) {
            _this.utilitiy.updateLoader(false);
            _this.utilitiy.showAlert('Goal Setting', __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* Constants */]["Server_Error_Message"]);
        });
    };
    ReviewGoalsPage.prototype.presentConfirmForDirectApprove = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                enableBackdropDismiss: false,
                title: 'Are you sure',
                // message: 'You will not be able to do direct approve . Are you sure you want to edit Kra.',
                // subTitle: 'You will not be able to do Direct approve . Are you sure you want to edit KRA.',
                message: 'Approve option will be disabled, in case you choose to edit KRAs. Do you want to continue?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: function () {
                            resolve(true);
                            // return 
                        }
                    },
                    {
                        text: 'No',
                        handler: function () {
                            // reject(false);
                            // return 
                            // reject();
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    ReviewGoalsPage.prototype.enableEditKra = function (clickedKra) {
        var _this = this;
        this.utilitiy.updateLoader(true);
        var kraDetails = {
            url: this.enableEditKraUrl,
            data: {
                "userId": !this.utilitiy.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
                // "kraId": ,
                // "subKraId": "1432011",
                // "role": this.userRole,
                "year": this.kraYear,
            },
            zenDeavorURL: true
        };
        // this.isServiceCallOn = true
        this.httpProvider.http.commonService(kraDetails).subscribe(function (response) {
            // this.isServiceCallOn = false
            if (response) {
                _this.utilitiy.updateLoader(false);
                if (response['details']) {
                    var responseData = response['details'];
                    _this.isDirectApprove = responseData.isDirectApprove;
                    _this.navCtrl.pop().then(function () {
                        _this.navCtrl.push('ZendeavorGoalSettingPage', {
                            userRole: _this.userRole,
                            userID: _this.userID,
                            kraId: clickedKra.kraId,
                            submitStatus: 'false',
                            kraYear: _this.kraYear,
                            isDirectApprove: _this.isDirectApprove
                        });
                    });
                }
            }
        }, function (err) {
            _this.utilitiy.updateLoader(false);
            _this.utilitiy.showAlert('Goal Setting', __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* Constants */]["Server_Error_Message"]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], ReviewGoalsPage.prototype, "content", void 0);
    ReviewGoalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-review-goals',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zendeavor\review-goals\review-goals.html"*/'<!--\n  Generated template for the ReviewGoalsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>KRA Summary</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="bttmMargin">\n\n    <!-- <ion-card class="preview-card">\n      <ion-card-header class="preview-header">Overall Score</ion-card-header>\n      <div class="preview-cont">\n        <div class="padding-bottom10per width100">\n          <div class="displayFlex  fontSize1p2">\n            <div col-5>Status</div>\n            <div col-7 class="fontSize9">{{finalStatus}}</div>\n          </div>\n        </div>\n      </div>\n    </ion-card> -->\n\n    <!-- tracker content -->\n    <ion-card style="padding: 0 0 23px 0;" *ngIf="reviewResponse?.kraActivity">\n      <div class="justify-spac-bt-align-cent padding10-20 font-weight500 fontSize1p1">\n        <span class="align-cont-cent">\n          <img class="status-icon mrginRt" src="assets/imgs/annual-status.svg" />\n          <span>Status</span>\n        </span>\n        <!-- <span class="alertCustomCss" (click)="goToQuestion()">Need Help</span> -->\n      </div>\n      <div class="padng0to5">\n        <ion-row class="align-item-center margin0-5 position-relative" *ngFor="let activity of reviewResponse?.kraActivity"\n          [ngClass]="{\'completed-status\': (activity.colorCode == \'green\'),\'pending-status\': (activity.colorCode == \'red\') ,\'incomplete-status\': (activity.colorCode == \'grey\')}">\n          <span class="tracker center">\n            <!-- [ngStyle]="{\'border-color\': activity.colorCode}" -->\n            <div class="tracker-inner-circle"></div>\n            <!-- [ngStyle]="{\'background\': activity.colorCode}" -->\n          </span>\n          <ion-col col-10>\n\n            <div class="marginBtm">{{activity.status}}</div>\n            <div class="color-blue fontSize9">{{activity.statusValue}}</div>\n            <!-- <span class="display-flex" (click)="openRedirectCommentsModal(KRADetails?.redirectedComments)">\n                <div class="color-blue fontSize9 redirectedCommntcss " *ngIf="activity.status==\'Redirected\'">{{activity.statusValue}}</div>\n  \n                <ion-icon *ngIf="activity.status==\'Redirected\'" name="ios-arrow-forward" class="arrowIconSize"></ion-icon>\n              </span> -->\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-card>\n\n    <!-- overall score -->\n    <!-- <div *ngIf="scoreList">\n        <ion-card class="preview-card">\n          <ion-card-header class="kra-header">Overall Score</ion-card-header>\n          <div class=" display-flex  fontSize1p2" *ngFor="let scoreItem of scoreList">\n            <div class="kra-title" col-5>{{scoreItem.key}}</div>\n            <div col-7 class="font-weight500">{{scoreItem.value}}</div>\n          </div>\n        </ion-card>\n      </div> -->\n\n    <!-- <div class="card margin8" *ngIf="scoreList">\n        <div class="kra-header">\n          <span class="kra-title">Overall Score</span>\n  \n        </div>\n        <ion-grid>\n          <ion-row justify-content-start *ngFor="let scoreItem of scoreList">\n            <ion-col col-5>{{scoreItem.key}}</ion-col>\n            <ion-col col-7>{{scoreItem.value}}</ion-col>\n          </ion-row>\n        </ion-grid>\n  \n      </div> -->\n\n    <!-- KRA details card -->\n    <div class="card margin8 kraDetailsCard" *ngFor="let item of kraListDetails">\n      <div class="kra-header">\n        <span class="kra-title">{{item.kraTitle}}</span>\n        <span>\n          <img class="pen-icon" *ngIf="showSubmitEditForEmp()" src="assets/imgs/ZenDeavour/edit-icon.svg" (click)="editKra(item)" />\n          <img class="pen-icon" *ngIf="showSubmitEditForMgr()" src="assets/imgs/ZenDeavour/edit-icon.svg" (click)="editKra(item)" />\n          <!-- <img class="pen-icon" *ngIf="showSubmitEditForReviewer()" src="assets/imgs/ZenDeavour/edit-icon.svg" (click)="editKra(item)" /> -->\n        </span>\n      </div>\n      <div *ngIf="item.kraId !=\'1\'">\n        <div *ngFor="let subItem of item?.kradetailList">\n          <ion-row justify-content-start *ngIf="subItem.key ==\'Title\' ||subItem.key ==\'Unit Of Measurement\'||item.kraTitle==\'KRA Details\' ">\n            <ion-col *ngIf="subItem.value != \'\' " class="keyValueCol fontWtBold">{{subItem.key}}</ion-col>\n            <!-- <ion-col *ngIf="subItem.value != \'\' " >{{subItem.value}}</ion-col> -->\n          </ion-row>\n          <ion-row justify-content-start *ngIf="subItem.key ==\'Title\' ||subItem.key ==\'Unit Of Measurement\'|| item.kraTitle==\'KRA Details\'">\n            <!-- <ion-col *ngIf="subItem.value != \'\' " >{{subItem.key}}</ion-col> -->\n            <ion-col *ngIf="subItem.value != \'\' " class="titleValueCol">{{subItem.value}}</ion-col>\n          </ion-row>\n          <ion-row *ngIf="subItem?.keyValueList">\n            <ion-col class="dottedBorder padding10" col-4 *ngFor="let dateItem of subItem?.keyValueList">\n              <div class="padding-bottom5 fontWtBold">{{dateItem.key}}</div>\n              <div>{{dateItem.value}}</div>\n            </ion-col>\n\n          </ion-row>\n          <ion-row class="border-bottomGray" *ngIf="subItem?.midTermValueList">\n            <ion-col class=" padding10" *ngFor="let midtermItem of subItem?.midTermValueList">\n              <div class="padding-bottom5 fontWtBold">{{midtermItem.key}}</div>\n              <div>{{midtermItem.value}}</div>\n            </ion-col>\n          </ion-row>\n          <ion-row class="border-bottomGray" *ngIf="subItem?.annualValueList">\n            <ion-col class="padding10" *ngFor="let endtermItem of subItem?.annualValueList">\n              <div class="padding-bottom5 fontWtBold">{{endtermItem.key}}</div>\n              <div>{{endtermItem.value}}</div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n      <!-- css for KRA1 preview -->\n      <div *ngIf="item.kraId ==\'1\' && item?.kradetailList">\n\n\n        <div *ngFor="let kraListItem of item?.kradetailList">\n          <div>\n\n            <!-- <ion-row justify-content-start *ngIf="kraListItem.key">\n              <ion-col class="keyValueCol fontWtBold">{{kraListItem.key}}</ion-col>\n            </ion-row>\n            <ion-row justify-content-start *ngIf="kraListItem.value">\n              <ion-col class="titleValueCol">{{kraListItem.value}}</ion-col>\n            </ion-row> -->\n            <!-- css for new preview screen -->\n            <ion-row justify-content-start *ngIf="kraListItem.key ==\'Title\' ||kraListItem.key ==\'Unit Of Measurement\'||item.kraTitle==\'KRA Details\' ">\n              <ion-col *ngIf="kraListItem.value != \'\' " class="keyValueCol fontWtBold">{{kraListItem.key}}</ion-col>\n              <!-- <ion-col *ngIf="subItem.value != \'\' " >{{subItem.value}}</ion-col> -->\n            </ion-row>\n            <ion-row justify-content-start *ngIf="kraListItem.key ==\'Title\' ||kraListItem.key ==\'Unit Of Measurement\'|| item.kraTitle==\'KRA Details\'">\n              <!-- <ion-col *ngIf="subItem.value != \'\' " >{{subItem.key}}</ion-col> -->\n              <ion-col *ngIf="kraListItem.value != \'\' " class="titleValueCol">{{kraListItem.value}}</ion-col>\n            </ion-row>\n            <ion-row *ngIf="kraListItem?.keyValueList">\n              <ion-col class="dottedBorder padding10" col-4 *ngFor="let dateItem of kraListItem?.keyValueList">\n                <div class="padding-bottom5 fontWtBold">{{dateItem.key}}</div>\n                <div>{{dateItem.value}}</div>\n              </ion-col>\n\n            </ion-row>\n            <ion-row class="border-bottomGray" *ngIf="kraListItem?.midTermValueList">\n              <ion-col class=" padding10" *ngFor="let midtermItem of kraListItem?.midTermValueList">\n                <div class="padding-bottom5 fontWtBold">{{midtermItem.key}}</div>\n                <div>{{midtermItem.value}}</div>\n              </ion-col>\n            </ion-row>\n            <ion-row class="border-bottomGray" *ngIf="kraListItem?.annualValueList">\n              <ion-col class="padding10" *ngFor="let endtermItem of kraListItem?.annualValueList">\n                <div class="padding-bottom5 fontWtBold">{{endtermItem.key}}</div>\n                <div>{{endtermItem.value}}</div>\n              </ion-col>\n            </ion-row>\n          </div>\n          <div *ngIf="kraListItem?.subKraDetailList">\n            <div *ngFor="let subkraItem1 of kraListItem?.subKraDetailList;let indexOfelement=index;" class="marginBottom-25px">\n              <div class="subKRAtitle">Sub KRA {{indexOfelement + 1}}</div>\n              <div *ngIf="subkraItem1?.subKraList" class="margin10 dottedBorder">\n\n                <div *ngFor="let subItem of subkraItem1?.subKraList">\n\n\n\n                  <ion-row justify-content-start *ngIf="subItem.key ==\'Title\' ||subItem.key ==\'Unit Of Measurement\'||item.kraTitle==\'KRA Details\' ">\n                    <ion-col *ngIf="subItem.value != \'\' || subItem.value != null " class="keyValueCol fontWtBold">{{subItem.key}}</ion-col>\n                    <!-- <ion-col *ngIf="subItem.value != \'\' " >{{subItem.value}}</ion-col> -->\n                  </ion-row>\n                  <ion-row justify-content-start *ngIf="subItem.key ==\'Title\' ||subItem.key ==\'Unit Of Measurement\'|| item.kraTitle==\'KRA Details\'">\n                    <!-- <ion-col *ngIf="subItem.value != \'\' " >{{subItem.key}}</ion-col> -->\n                    <ion-col *ngIf="subItem.value != \'\' || subItem.value != null" class="titleValueCol">{{subItem.value}}</ion-col>\n                  </ion-row>\n                  <ion-row *ngIf="subItem?.keyValueList">\n                    <ion-col class="dottedBorder-leftNone padding10" col-6 *ngFor="let dateItem of subItem?.keyValueList">\n                      <div class="padding-bottom5 fontWtBold">{{dateItem.key}}</div>\n                      <div>{{dateItem.value}}</div>\n                    </ion-col>\n\n                  </ion-row>\n                  <ion-row class="border-bottomGray" *ngIf="subItem?.midTermValueList">\n                    <ion-col class=" padding10" *ngFor="let midtermItem of subItem?.midTermValueList">\n                      <div class="padding-bottom5 fontWtBold">{{midtermItem.key}}</div>\n                      <div>{{midtermItem.value}}</div>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row class="border-bottomGray" *ngIf="subItem?.annualValueList">\n                    <ion-col class="padding10" *ngFor="let endtermItem of subItem?.annualValueList">\n                      <div class="padding-bottom5 fontWtBold">{{endtermItem.key}}</div>\n                      <div>{{endtermItem.value}}</div>\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <!-- css for KRA1 preview ends-->\n\n      <!-- <ion-row class="border-bottomGray">\n        <ion-col class=" padding10">\n          <div class="padding-bottom5">MilestoneDate</div>\n          <div>31-Mar-2020</div>\n        </ion-col>\n        <ion-col class=" padding10">\n          <div class="padding-bottom5">MilestoneDate</div>\n          <div>31-Mar-2020</div>\n        </ion-col>\n        <ion-col class=" padding10">\n          <div class="padding-bottom5">MilestoneDate</div>\n          <div>31-Mar-2020</div>\n        </ion-col>\n      </ion-row> -->\n    </div>\n  </div>\n\n\n\n\n</ion-content>\n\n<ion-footer [ngClass]="(userRole==\'1\' && (finalStatus==\'PENDING FOR CONSENT\') && !hideConsentOnKraStatus)?\'agreeDisgreeFooter\':\'footerBg\'">\n  <!-- [ngClass]="(userRole==\'1\' && (finalStatus==\'PENDING FOR CONSENT\' || finalStatus==\'REDIRECT BY APPRAISER\'))?\'agreeDisgreeFooter\':\'footerBg\'" -->\n\n  <button class="nextBtn" (click)="closeReviewPage(submit)" ion-button round *ngIf="userRole==\'1\' && finalStatus==\'PENDING TO SUBMIT\'">Done</button>\n  <div *ngIf="userRole==\'2\' && finalStatus==\'PENDING AT APPRAISER\'">\n    <button class="nextBtn" (click)="presentConfirm()" ion-button round *ngIf="isDirectApprove">Approve</button>\n    <button class="nextBtn" (click)="presentConfirm()" ion-button round *ngIf="!isDirectApprove">Submit</button>\n\n    <button class="nextBtn" (click)="redirectKRA()" ion-button round>Redirect</button>\n\n  </div>\n  <div *ngIf="userRole==\'1\' && (finalStatus==\'PENDING FOR CONSENT\') && !hideConsentOnKraStatus" style="margin-top: 10px;">\n    <ion-list class="associate-submitCheckbox-container">\n\n      <!-- <ion-item class="appraiser-checkbox-container">\n        <ion-label>I had a discussion with my appraiser\n          <img class="asterisk" src="assets/imgs/asterisk.svg" />\n        </ion-label>\n        <ion-checkbox [(ngModel)]="appraiserDiscussionmodel" checked="true" disabled></ion-checkbox>\n      </ion-item> -->\n      <ion-item class="appraiser-checkbox-container">\n        <ion-label> I had a discussion with my appraiser\n        </ion-label>\n        <ion-checkbox [(ngModel)]="reviewerdiscusionReqmodel"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n    <div class="align-end">\n      <button class="approvebtn" (click)="selectConsent(\'agree\',true)" [ngClass]="{\'btn-background\': isapprove}"\n        ion-button round>Agree</button>\n      <button class="approvebtn" (click)="selectConsent(\'disagree\',false)" ion-button round [ngClass]="{\'btn-background\': !isapprove}">Disagree</button>\n    </div>\n  </div>\n\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zendeavor\review-goals\review-goals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ReviewGoalsPage);
    return ReviewGoalsPage;
}());

//# sourceMappingURL=review-goals.js.map

/***/ })

});
//# sourceMappingURL=48.js.map