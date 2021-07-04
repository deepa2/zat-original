webpackJsonp([53],{

/***/ 1431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZendeavorPreviewPageModule", function() { return ZendeavorPreviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zendeavor_preview__ = __webpack_require__(1853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ZendeavorPreviewPageModule = /** @class */ (function () {
    function ZendeavorPreviewPageModule() {
    }
    ZendeavorPreviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zendeavor_preview__["a" /* ZendeavorPreviewPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zendeavor_preview__["a" /* ZendeavorPreviewPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ZendeavorPreviewPageModule);
    return ZendeavorPreviewPageModule;
}());

//# sourceMappingURL=zendeavor-preview.module.js.map

/***/ }),

/***/ 1853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZendeavorPreviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_kra_consent_kra_consent__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_promotion_details_promotion_details__ = __webpack_require__(748);
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
 * Generated class for the ZendeavorPreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZendeavorPreviewPage = /** @class */ (function () {
    function ZendeavorPreviewPage(httpProvider, popoverCtrl, navCtrl, utilitiy, navParams, modalCtrl, alertCtrl) {
        this.httpProvider = httpProvider;
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.utilitiy = utilitiy;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.previewUrl = "getApprisalDeatils";
        this.kraListDetails = [];
        this.finalStatus = '';
        this.isapprove = "true";
        this.isAvailableForFinalSubmit = true;
        this.submitUrl = "submitAppraisal";
        this.cmmtData = "";
        this.agreeConsentUrl = "appraisalConsent";
        this.isDirectApproveStatus = 'false';
        this.appraiserDiscussionmodel = true;
        this.reviewerdiscusionReqmodel = false;
        this.reviewerDiscussionModel = false;
        this.isAppraisalDateExpired = false;
        this.utilitiy.updateLoader(true);
        this.userID = this.navParams.get('userID');
        //console.log("id", this.userID);
        this.userRole = this.navParams.get('userRole');
        this.processType = this.navParams.get('kraType');
        this.userName = this.navParams.get('userName');
        this.isDirectApproveStatus = this.navParams.get('isDirectApprove') || false;
        this.showUsername = this.navParams.get('showUsername') || false;
        this.isTeamlist = this.navParams.get('isTeamList') || false;
        this.isAppraisalDateExpired = this.navParams.get('isAppraisalDateExpired') || false;
        this.isExpired = this.navParams.get('isExpired');
        //console.log("processType", this.processType);
        //console.log("showUsername", this.showUsername)
        this.getPreviewDetails();
    }
    ZendeavorPreviewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.navBar.backButtonClick = function (e) {
            _this.navCtrl.getPrevious().data.submitStatus = 'false';
            _this.navCtrl.getPrevious().data.title = 'Preview';
            _this.navCtrl.getPrevious().data.kraId = '-1';
            _this.navCtrl.pop();
        };
    };
    // ionViewWillEnter() {
    //     if (!this.utilitiy.isEmptyOrNullOrUndefined(this.navParams.get('submitStatus')) && this.navParams.get('submitStatus') == 'true' && this.userRole == '3') {
    //         // this.navCtrl.remove(3,1);
    //         this.navCtrl.popTo('ZendeavorReviewerListPage');
    //     }
    // }
    ZendeavorPreviewPage.prototype.ionViewWillExit = function () {
    };
    /**
     * Api call for REVIEW DETAILS i.e appraisal details
     */
    ZendeavorPreviewPage.prototype.getPreviewDetails = function () {
        var _this = this;
        var previewData = {
            url: this.previewUrl,
            zenDeavorURL: true,
            data: {
                "userId": this.userID,
                "role": this.userRole,
                "processType": this.processType,
                "isDirectApprove": this.isDirectApproveStatus
            }
        };
        this.httpProvider.http.commonService(previewData).subscribe(function (res) {
            _this.utilitiy.updateLoader(false);
            _this.previewResponse = res.details;
            _this.kraListDetails = res.details.kraList;
            _this.finalStatus = res.details.finalStatus;
            _this.managerComments = res.details.managerComment;
            _this.scoreList = _this.previewResponse.scoreList;
            _this.consentStatus = _this.previewResponse.isConsetPending;
            _this.cmmtData = _this.managerComments;
        }, function (err) {
            _this.utilitiy.updateLoader(false);
        });
    };
    ZendeavorPreviewPage.prototype.selectConsent = function (type, status) {
        if (this.finalStatus == 'PENDING FOR TWO UP CONSENT') {
            this.appraiserDiscussionmodel = false;
            this.reviewerdiscusionReqmodel = false;
        }
        this.isapprove = status;
        if (type == 'agree') {
            this.presentConfirm(type);
        }
        else {
            this.openConsentModal(type);
        }
    };
    ZendeavorPreviewPage.prototype.openConsentModal = function (type) {
        var _this = this;
        var kraConsentModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_kra_consent_kra_consent__["a" /* KraConsentComponent */], {
            'data': {
                typeOfConsent: type,
                userID: this.userID,
                processType: this.processType,
                appraiserDiscussion: this.appraiserDiscussionmodel == true ? 1 : 0,
                reviewerDiscussion: this.reviewerDiscussionModel == true ? 1 : 0,
                reviewerRequiredDiscussion: this.reviewerdiscusionReqmodel == true ? 1 : 0
            }
        }, { cssClass: 'kra-training-modal' });
        kraConsentModal.onDidDismiss(function (response) {
            if (!_this.utilitiy.isEmptyOrNullOrUndefined(response) && response == 'DATA_SUBMITTED') {
                _this.navCtrl.pop();
            }
        });
        kraConsentModal.present();
    };
    ZendeavorPreviewPage.prototype.editKra = function (clickedKra) {
        if (this.isTeamlist) {
            this.editKraforReviewer(clickedKra);
        }
        else {
            this.navCtrl.getPrevious().data.submitStatus = 'false';
            this.navCtrl.getPrevious().data.kraId = clickedKra.kraId;
            if (clickedKra.kraId == '-2') {
                this.navCtrl.getPrevious().data.title = clickedKra.kraTitle;
            }
            else {
                this.navCtrl.getPrevious().data.title = 'KRA';
            }
            this.navCtrl.pop();
        }
    };
    /**
    * Api call for submit Appraisal
    */
    ZendeavorPreviewPage.prototype.submitAppraisal = function () {
        var _this = this;
        this.utilitiy.updateLoader(true);
        var submitData = {
            // zenDeavorURL: this.url
            url: this.submitUrl,
            zenDeavorURL: true,
            data: {
                "userId": this.userID,
                "role": this.userRole,
                "performanceDetail": this.cmmtData,
                "processType": this.processType,
                "isDirectApprove": this.isDirectApproveStatus
            }
        };
        this.httpProvider.http.commonService(submitData).subscribe(function (res) {
            _this.utilitiy.updateLoader(false);
            if (!_this.utilitiy.isEmptyOrNullOrUndefined(res) && !_this.utilitiy.isEmptyOrNullOrUndefined(res.status)
                && !_this.utilitiy.isEmptyOrNullOrUndefined(res.status.statusCode) && res.status.statusCode == 1) {
                _this.navCtrl.getPrevious().data.submitStatus = "true";
                _this.navCtrl.pop();
                // this.utilitiy.presentAlert("Thank you for submitting your appraisal.").then(()=>{
                //     this.navCtrl.pop();
                // })
            }
        }, function (err) {
            _this.utilitiy.updateLoader(false);
        });
    };
    ZendeavorPreviewPage.prototype.presentConfirm = function (type) {
        var _this = this;
        var buttonsArray = [{
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
            }];
        if (this.userRole == '2' || this.userRole == '3') {
            if (this.cmmtData == '' || this.cmmtData == null || this.cmmtData == undefined) {
                this.utilitiy.presentAlert('Please fill the comments');
                return;
            }
        }
        if (this.userRole == '2') {
            var appraiserScore = parseInt(this.previewResponse.appraiserScore);
            if (appraiserScore < 60) {
                var alert_1 = this.alertCtrl.create({
                    subTitle: 'Are you sure you want to submit?',
                    message: 'PIP will be initiated through the system if the final score of the associate is below 60.',
                    buttons: buttonsArray
                });
                alert_1.present();
            }
            else {
                var alert_2 = this.alertCtrl.create({
                    message: 'Are you sure you want to submit?',
                    buttons: buttonsArray
                });
                alert_2.present();
            }
        }
        else {
            var alert_3 = this.alertCtrl.create({
                message: 'Are you sure you want to submit?',
                buttons: buttonsArray
            });
            alert_3.present();
        }
    };
    /**
     * submit Consent------Agree
     * called when agree is clicked
     */
    ZendeavorPreviewPage.prototype.agreeConsent = function () {
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
                "processType": this.processType,
                // "reviewerDiscussion": "",
                "appraiserDiscussion": this.appraiserDiscussionmodel == true ? 1 : 0,
                "reviewerDiscussion": this.reviewerDiscussionModel == true ? 1 : 0,
                "reviewerRequiredDiscussion": this.reviewerdiscusionReqmodel == true ? 1 : 0
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
    ZendeavorPreviewPage.prototype.showSubmitEditForEmp = function () {
        return !this.consentStatus && this.userRole == '1' && (this.finalStatus == 'PENDING TO SUBMIT'
            || this.finalStatus == 'REDIRECT BY APPRAISER') && !this.isAppraisalDateExpired;
    };
    ZendeavorPreviewPage.prototype.showSubmitEditForMgr = function () {
        return !this.consentStatus && this.userRole == '2' && (this.finalStatus == 'PENDING AT APPRAISER' || this.finalStatus == 'Pending With 1up For Moderation') && !this.isAppraisalDateExpired;
    };
    ZendeavorPreviewPage.prototype.showSubmitEditForReviewer = function () {
        return !this.consentStatus && this.userRole == '3' && (this.finalStatus == 'PENDING AT REVIEWER' || this.finalStatus == 'Pending With 2up For Moderation') && !this.isAppraisalDateExpired;
    };
    ZendeavorPreviewPage.prototype.editKraforReviewer = function (item) {
        //console.log("editKraforReviewer item", item)
        var KRAtitle;
        if (item.kraId == '-2')
            KRAtitle = item.kraTitle;
        else
            KRAtitle = 'KRA';
        this.navCtrl.pop();
        // if (this.isDirectApproveStatus) {
        this.navCtrl.push('ZenDeavorKraPage', {
            role: this.userRole,
            kraType: this.processType,
            userID: this.userID,
            kraId: item.kraId,
            title: KRAtitle,
            submitStatus: 'false'
            // showWhenData:true,
            // isDirectApprove:true
            // userId: "51424",
            // kraId: "-2",
            // subKraId: "1432011",
        });
        // }
        // else {
        //     this.navCtrl.push('ZenDeavorKraPage', {
        //         role: this.userRole,
        //         kraType: this.processType,
        //         userID: this.userID,
        //         kraId: item.kraId,
        //         title: KRAtitle,
        //         submitStatus: 'false'
        //     })
        // }
    };
    // updateCheckbox(selectedvalue) {
    //     console.log("selectedvalue", selectedvalue)
    //     this.appraiserDiscussionmodel = selectedvalue == true ? true : false
    // }
    ZendeavorPreviewPage.prototype.hideFooter = function () {
        // return this.finalStatus == 'CLOSED' || this.finalStatus == 'COMPLETED' || this.userRole == '1' && (this.finalStatus == 'Pending With 2up For Moderation' 
        // ||this.finalStatus =='Pending With 1up For Moderation' || this.finalStatus== 'PENDING AT APPRAISER')
        if (this.finalStatus == 'CLOSED' || this.finalStatus == 'COMPLETED')
            return true;
        else if (this.userRole == '1') {
            if (this.isExpired || this.finalStatus == 'Pending With 2up For Moderation' || this.finalStatus == 'Pending With 1up For Moderation' || this.finalStatus == 'PENDING AT APPRAISER' || this.finalStatus == 'PENDING AT REVIEWER' || this.finalStatus == 'PENDING FOR CLOSE')
                return true;
        }
        else
            return false;
    };
    ZendeavorPreviewPage.prototype.openDetails = function (data) {
        console.log(data);
        var modalCtrl = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_promotion_details_promotion_details__["a" /* PromotionDetailsComponent */], { 'promotionDetails': data, 'isComingfromPreview': true }, {
            cssClass: 'infoModal',
            enableBackdropDismiss: true,
            showBackdrop: true,
        });
        modalCtrl.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Navbar */])
    ], ZendeavorPreviewPage.prototype, "navBar", void 0);
    ZendeavorPreviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-zendeavor-preview',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zendeavor-preview\zendeavor-preview.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="!showUsername">Review : {{processType}} Appraisal</ion-title>\n    <ion-title *ngIf="showUsername">Review : {{userName}}</ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <!-- *ngIf="managerComment" -->\n  <div class="bttmMargin">\n    <!-- <div class="cmnt-area padding6 margin8" *ngIf="userRole == 2||userRole == 3">\n      <textarea rows="5" cols="40" placeholder="Overall performance comments" style="border: 0;" [(ngModel)]=\'cmmtData\'></textarea>\n    </div> -->\n    <div *ngIf="userRole == 2||userRole == 3">\n      <!-- <ion-card class="preview-card" > -->\n      <div class="card margin8">\n        <div class="kra-header">\n          <span class="kra-title" *ngIf="userRole == 2">Appraiser Comments</span>\n          <span class="kra-title" *ngIf="userRole == 3">Reviewer Comments</span>\n        </div>\n        <div style="padding: 3px;">\n          <textarea rows="5" cols="50" placeholder="Overall performance comments" style="border: 0; width: -webkit-fill-available;"\n            [(ngModel)]=\'cmmtData\'></textarea>\n        </div>\n\n      </div>\n      <!-- </ion-card> -->\n    </div>\n\n\n    <ion-card class="preview-card" *ngIf="processType==\'Annual\'">\n      <!-- <ion-card-header class="preview-header">Performance Review Score</ion-card-header> -->\n      <div class="preview-cont">\n        <div class="padding-bottom10per width100">\n          <div class="displayFlex  fontSize1p2">\n            <div col-5>Status</div>\n            <div col-7 class="fontSize9">{{previewResponse?.displayStatus}}</div>\n          </div>\n        </div>\n      </div>\n    </ion-card>\n    <!-- tracker content -->\n    <ion-card style="padding: 0 0 23px 0;" *ngIf="previewResponse?.kraActivity">\n      <div class="justify-spac-bt-align-cent padding10-20 font-weight500 fontSize1p1">\n        <span class="align-cont-cent">\n          <img class="status-icon mrginRt" src="assets/imgs/annual-status.svg" />\n          <span>Status</span>\n        </span>\n      </div>\n      <div class="padng0to5">\n        <ion-row class="align-item-center margin0-5 position-relative"\n          *ngFor="let activity of previewResponse?.kraActivity"\n          [ngClass]="{\'completed-status\': (activity.colorCode == \'green\'),\'pending-status\': (activity.colorCode == \'red\') ,\'incomplete-status\': (activity.colorCode == \'grey\')}">\n          <span class="tracker center">\n            <div class="tracker-inner-circle"></div>\n          </span>\n          <ion-col col-10>\n            <div class="marginBtm">{{activity.status}}</div>\n            <div class="color-blue fontSize9">{{activity.statusValue}}</div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-card>\n\n    <div class="card margin8" *ngIf="scoreList">\n      <div class="kra-header">\n        <span class="kra-title">Performance Review Score</span>\n\n      </div>\n      <ion-grid>\n        <ion-row justify-content-start *ngFor="let scoreItem of scoreList">\n          <ion-col col-5>{{scoreItem.key}}</ion-col>\n          <ion-col col-7>{{scoreItem.value}}</ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </div>\n\n    <!-- KRA details card -->\n    <div class="card margin8 kraDetailsCard" *ngFor="let item of kraListDetails">\n      <div class="kra-header">\n        <span class="kra-title">{{item.kraTitle}}</span>\n        <span>\n          <img class="pen-icon" *ngIf="showSubmitEditForEmp()" src="assets/imgs/ZenDeavour/edit-icon.svg"\n            (click)="editKra(item)" />\n          <img class="pen-icon" *ngIf="showSubmitEditForMgr()" src="assets/imgs/ZenDeavour/edit-icon.svg"\n            (click)="editKra(item)" />\n          <img class="pen-icon" *ngIf="showSubmitEditForReviewer()" src="assets/imgs/ZenDeavour/edit-icon.svg"\n            (click)="editKra(item)" />\n        </span>\n      </div>\n      <!-- <ion-grid *ngIf="processType==\'Annual\'">\n        <ion-row justify-content-start *ngFor="let subItem of item.kradetailList">\n          <ion-col *ngIf="subItem.value != \'\' " col-5>{{subItem.key}}</ion-col>\n          <ion-col *ngIf="subItem.value != \'\' " col-7>{{subItem.value}}</ion-col>\n        </ion-row>\n      </ion-grid> -->\n      <!-- djdfjdf fdhjfd -->\n\n      <!-- KRA details card -->\n      <ion-grid *ngIf="processType==\'Mid-Term\' || processType==\'Annual\'">\n        <div *ngIf="item.kraId !=\'1\'">\n          <div *ngFor="let subItem of item?.kradetailList;let indexOfelement=index;last as islast">\n            <ion-row justify-content-start *ngIf="subItem.key && subItem.key!=\'Competency\'">\n              <ion-col *ngIf="subItem.value != \'\' " class="keyValueCol fontWtBold">{{subItem.key}}</ion-col>\n              <!-- <ion-col *ngIf="subItem.value != \'\' " >{{subItem.value}}</ion-col> -->\n            </ion-row>\n            <ion-row justify-content-start\n              *ngIf="subItem.value && subItem.value!= \'Competency\' &&  subItem.key!= \'Reviewer Promotion Details\'&& subItem.key!= \'Appraiser Promotion Details\'">\n\n              <ion-col *ngIf="subItem.value != \'\' " class="titleValueCol "\n                [ngClass]="{\'border-bottomGray\': subItem.key !=\'Title\' && !islast}">{{subItem.value}}</ion-col>\n            </ion-row>\n            <ion-row *ngIf="subItem.key== \'Reviewer Promotion Details\' || subItem.key== \'Appraiser Promotion Details\'">\n              <div class="viewMore" (click)="openDetails(subItem.promotionFields)"> View promotion details</div>\n            </ion-row>\n            <!-- <ion-row  *ngIf="subItem.key== \'Appraiser Promotion Details\'">\n              <div style="padding: 5px 10px;\n              color: blue;\n              text-decoration: underline;" (click)="openDetails(subItem.promotionFields)"> View promotion details</div>\n            </ion-row> -->\n            <ion-row *ngFor="let itemDetails of subItem.competencyList">\n              <div class="subItems">{{itemDetails.key}}</div>\n              <div class="subItemDetails" *ngFor="let items of itemDetails.keyValueList">\n                <span class="sub-head">{{items.key}}\n                </span>\n                <span >{{items.value}}\n                </span>\n              </div>\n\n            </ion-row>\n\n            <ion-row *ngIf="subItem?.keyValueList">\n              <ion-col class="dottedBorder padding10" col-4 *ngFor="let dateItem of subItem?.keyValueList">\n                <div class="padding-bottom5 fontWtBold">{{dateItem.key}}</div>\n                <div>{{dateItem.value}}</div>\n              </ion-col>\n\n            </ion-row>\n            <ion-row class="border-bottomGray" *ngIf="subItem?.midTermValueList">\n              <ion-col class=" padding10" *ngFor="let midtermItem of subItem?.midTermValueList">\n                <div class="padding-bottom5 fontWtBold">{{midtermItem.key}}</div>\n                <div>{{midtermItem.value}}</div>\n              </ion-col>\n            </ion-row>\n            <ion-row class="border-bottomGray" *ngIf="subItem?.annualValueList">\n              <ion-col class="padding10" *ngFor="let endtermItem of subItem?.annualValueList">\n                <div class="padding-bottom5 fontWtBold">{{endtermItem.key}}</div>\n                <div>{{endtermItem.value}}</div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n        <!-- css for KRA1 preview -->\n        <div *ngIf="item.kraId ==\'1\' && item?.kradetailList">\n\n\n          <div *ngFor="let kraListItem of item?.kradetailList ;let indexOfelement=index;last as islast">\n            <div>\n              <!-- css for new preview screen -->\n              <ion-row justify-content-start *ngIf="kraListItem.key">\n                <ion-col *ngIf="kraListItem.value != \'\' " class="keyValueCol fontWtBold">{{kraListItem.key}}</ion-col>\n                <!-- <ion-col *ngIf="subItem.value != \'\' " >{{subItem.value}}</ion-col> -->\n              </ion-row>\n              <ion-row justify-content-start *ngIf="kraListItem.value">\n                <!-- <ion-col *ngIf="subItem.value != \'\' " >{{subItem.key}}</ion-col> -->\n                <ion-col *ngIf="kraListItem.value != \'\' " class="titleValueCol"\n                  [ngClass]="{\'border-bottomGray\': kraListItem.key !=\'Title\' && !islast}">{{kraListItem.value}}\n                </ion-col>\n              </ion-row>\n              <ion-row *ngIf="kraListItem?.keyValueList">\n                <ion-col class="dottedBorder padding10" col-4 *ngFor="let dateItem of kraListItem?.keyValueList">\n                  <div class="padding-bottom5 fontWtBold">{{dateItem.key}}</div>\n                  <div>{{dateItem.value}}</div>\n                </ion-col>\n\n              </ion-row>\n              <ion-row class="border-bottomGray" *ngIf="kraListItem?.midTermValueList">\n                <ion-col class=" padding10" *ngFor="let midtermItem of kraListItem?.midTermValueList">\n                  <div class="padding-bottom5 fontWtBold">{{midtermItem.key}}</div>\n                  <div>{{midtermItem.value}}</div>\n                </ion-col>\n              </ion-row>\n              <ion-row class="border-bottomGray" *ngIf="kraListItem?.annualValueList">\n                <ion-col class="padding10" *ngFor="let endtermItem of kraListItem?.annualValueList">\n                  <div class="padding-bottom5 fontWtBold">{{endtermItem.key}}</div>\n                  <div>{{endtermItem.value}}</div>\n                </ion-col>\n              </ion-row>\n            </div>\n            <div *ngIf="kraListItem?.subKraDetailList">\n              <div *ngFor="let subkraItem1 of kraListItem?.subKraDetailList;let indexOfelement=index;"\n                class="marginBottom-25px">\n                <div class="subKRAtitle">Sub KRA {{indexOfelement + 1}}</div>\n                <div *ngIf="subkraItem1?.subKraList" class="margin10 dottedBorder">\n\n                  <div *ngFor="let subItem of subkraItem1?.subKraList;last as islast">\n\n\n\n                    <ion-row justify-content-start *ngIf="subItem.key">\n                      <ion-col *ngIf=\'subItem.value != "" &&  subItem.value != null\' class="keyValueCol fontWtBold">\n                        {{subItem.key}}</ion-col>\n                      <!-- <ion-col *ngIf="subItem.value != \'\' " >{{subItem.value}}</ion-col> -->\n                    </ion-row>\n                    <ion-row justify-content-start *ngIf="subItem.value">\n                      <!-- <ion-col *ngIf="subItem.value != \'\' " >{{subItem.key}}</ion-col> -->\n                      <ion-col *ngIf="subItem.value != \'\' &&  subItem.value != null" class="titleValueCol"\n                        [ngClass]="{\'border-bottomGray\': subItem.key !=\'Title\' && !islast}">{{subItem.value}}</ion-col>\n                    </ion-row>\n                    <ion-row *ngIf="subItem?.keyValueList">\n                      <ion-col class="dottedBorder-leftNone padding10" col-6\n                        *ngFor="let dateItem of subItem?.keyValueList">\n                        <div class="padding-bottom5 fontWtBold">{{dateItem.key}}</div>\n                        <div>{{dateItem.value}}</div>\n                      </ion-col>\n\n                    </ion-row>\n                    <ion-row class="border-bottomGray" *ngIf="subItem?.midTermValueList">\n                      <ion-col class=" padding10" *ngFor="let midtermItem of subItem?.midTermValueList">\n                        <div class="padding-bottom5 fontWtBold">{{midtermItem.key}}</div>\n                        <div>{{midtermItem.value}}</div>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row class="border-bottomGray" *ngIf="subItem?.annualValueList">\n                      <ion-col class="padding10" *ngFor="let endtermItem of subItem?.annualValueList">\n                        <div class="padding-bottom5 fontWtBold">{{endtermItem.key}}</div>\n                        <div>{{endtermItem.value}}</div>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <!-- css for KRA1 preview ends-->\n      </ion-grid>\n\n\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer *ngIf="!hideFooter()"\n  [ngClass]="(consentStatus && userRole==\'1\' && (finalStatus==\'PENDING FOR CONSENT\' || finalStatus==\'PENDING FOR TWO UP CONSENT\'))?\'agreeDisgreeFooter\':\'footerBg\'">\n  <!-- *ngIf="!consentStatus && (finalStatus==\'CLOSED\' || finalStatus==\'COMPLETED\'|| finalStatus==\'PENDING FOR CLOSE\')" -->\n  <div *ngIf="consentStatus && userRole==\'1\' && finalStatus!=\'CLOSED\'" style="margin-top: 10px;">\n    <ion-list class="associate-submitCheckbox-container"\n      *ngIf="consentStatus && userRole==\'1\' && finalStatus==\'PENDING FOR CONSENT\'">\n\n      <ion-item class="appraiser-checkbox-container">\n        <ion-label text-wrap>I had a discussion with my appraiser for the rating/comments\n          <img class="asterisk" src="assets/imgs/asterisk.svg" />\n        </ion-label>\n        <ion-checkbox [(ngModel)]="appraiserDiscussionmodel" checked="true" disabled></ion-checkbox>\n      </ion-item>\n      <ion-item class="appraiser-checkbox-container" *ngIf="processType==\'Annual\'">\n        <ion-label>Request discussion with my reviewer\n        </ion-label>\n        <ion-checkbox [(ngModel)]="reviewerdiscusionReqmodel"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n    <ion-list class="associate-submitCheckbox-container"\n      *ngIf="consentStatus && userRole==\'1\'  && finalStatus==\'PENDING FOR TWO UP CONSENT\'">\n      <ion-item class="appraiser-checkbox-container">\n        <ion-label>I had a discussion with my reviewer\n        </ion-label>\n        <ion-checkbox [(ngModel)]="reviewerDiscussionModel"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n    <div class="align-end">\n      <button class="approvebtn" (click)="selectConsent(\'agree\',true)" [ngClass]="{\'btn-background\': isapprove}"\n        ion-button round>Agree</button>\n      <button class="approvebtn" (click)="selectConsent(\'disagree\',false)" ion-button round\n        [ngClass]="{\'btn-background\': !isapprove}">Disagree</button>\n    </div>\n\n  </div>\n\n  <!-- <ion-toolbar> -->\n  <button class="nextBtn" (click)="presentConfirm(submit)" ion-button round\n    *ngIf="userRole==\'2\'  && (finalStatus==\'Pending With 1up For Moderation\'  || finalStatus==\'PENDING AT APPRAISER\') && !isAppraisalDateExpired">Submit</button>\n\n  <button class="nextBtn" (click)="presentConfirm(submit)" ion-button round\n    *ngIf="showSubmitEditForEmp()">Submit</button>\n\n  <!-- <div class="align-end" *ngIf="consentStatus && userRole==\'1\' && finalStatus!=\'CLOSED\'">\n    <button class="approvebtn" (click)="selectConsent(\'agree\',true)" [ngClass]="{\'btn-background\': isapprove}"\n      ion-button round>Agree</button>\n    <button class="approvebtn" (click)="selectConsent(\'disagree\',false)" ion-button round [ngClass]="{\'btn-background\': !isapprove}">Disagree</button>\n  </div> -->\n  <button class="nextBtn" (click)="presentConfirm(submit)" ion-button round\n    *ngIf="userRole==\'3\'  && (finalStatus ==\'Pending With 2up For Moderation\'  || finalStatus == \'PENDING AT REVIEWER\') && !isAppraisalDateExpired">Submit</button>\n  <!-- Pending With 2up For Moderation -->\n  <!-- </ion-toolbar> -->\n\n  <!-- <button class="nextBtn" (click)="presentConfirm(submit)" ion-button round *ngIf="!consentStatus  && userRole==\'3\'  && finalStatus!=\'CLOSED\'  && finalStatus!=\'COMPLETED\'">Submit</button> -->\n  <!-- <button class="nextBtn" (click)="presentConfirm(submit)" ion-button round *ngIf="!consentStatus  && userRole==\'2\'  && finalStatus!=\'CLOSED\'  && finalStatus!=\'COMPLETED\'">Submit</button> -->\n\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zendeavor-preview\zendeavor-preview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ZendeavorPreviewPage);
    return ZendeavorPreviewPage;
}());

//# sourceMappingURL=zendeavor-preview.js.map

/***/ })

});
//# sourceMappingURL=53.js.map