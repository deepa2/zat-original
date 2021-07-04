webpackJsonp([54],{

/***/ 1384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZendeavorConsultationRequestDetailPageModule", function() { return ZendeavorConsultationRequestDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zendeavor_consultation_request_detail__ = __webpack_require__(1806);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ZendeavorConsultationRequestDetailPageModule = /** @class */ (function () {
    function ZendeavorConsultationRequestDetailPageModule() {
    }
    ZendeavorConsultationRequestDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zendeavor_consultation_request_detail__["a" /* ZendeavorConsultationRequestDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zendeavor_consultation_request_detail__["a" /* ZendeavorConsultationRequestDetailPage */]),
            ],
        })
    ], ZendeavorConsultationRequestDetailPageModule);
    return ZendeavorConsultationRequestDetailPageModule;
}());

//# sourceMappingURL=zendeavor-consultation-request-detail.module.js.map

/***/ }),

/***/ 1806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZendeavorConsultationRequestDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_data__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
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
 * Generated class for the ZendeavorConsultationRequestDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZendeavorConsultationRequestDetailPage = /** @class */ (function () {
    function ZendeavorConsultationRequestDetailPage(navCtrl, navParams, httpProvider, popoverCtrl, modalCtrl, utilitiy, data) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.utilitiy = utilitiy;
        this.data = data;
        this.url = 'consultationDetails';
        this.consultationDetails = [];
        this.submitConsultUrl = 'submitConsultation';
        this.feedbackMsg = '';
        this.showSuccessMsg = false;
        this.userID = this.navParams.get('userID') || null;
        this.userRole = this.navParams.get('userRole') || null;
        this.kraType = this.navParams.get('kraType') || null;
        this.mainKey = this.navParams.get('main_key') || null;
        this.isReadOnly = this.navParams.get('isReadonly') || false;
        this.data.getData('loginDetails').then(function (userInfo) {
            _this.userDetails = userInfo.details.userDetails;
            ////console.log("userdetails", this.userDetails)
            //console.log("userdetails", userInfo)
            _this.loggedInUserID = _this.userDetails.userId;
            //console.log("loggedInUserID", this.loggedInUserID)
            if (!_this.utilitiy.isEmptyOrNullOrUndefined(_this.loggedInUserID))
                _this.getConsultationDetails();
        });
    }
    ZendeavorConsultationRequestDetailPage.prototype.ionViewDidLoad = function () {
        // this.getConsultationDetails()
    };
    ZendeavorConsultationRequestDetailPage.prototype.getConsultationDetails = function () {
        var _this = this;
        this.utilitiy.updateLoader(true);
        var consultparams = {
            // zenDeavorURL: this.url
            url: this.url,
            zenDeavorURL: true,
            data: {
                "userId": this.userID,
                "main_key": this.mainKey,
                "processType": this.kraType,
            }
        };
        this.httpProvider.http.commonService(consultparams).subscribe(function (res) {
            _this.utilitiy.updateLoader(false);
            if (!_this.utilitiy.isEmptyOrNullOrUndefined(res['details'])) {
                _this.consultationDetails = res['details'];
                // this.submittedList = this.consultationList['submittedList']
                _this.consultTo = _this.consultationDetails['consultTo'];
            }
        }, function (err) {
            _this.utilitiy.updateLoader(false);
        });
    };
    ZendeavorConsultationRequestDetailPage.prototype.submitConsultation = function () {
        var _this = this;
        if (this.utilitiy.isEmptyOrNullOrUndefined(this.feedbackMsg)) {
            this.utilitiy.presentAlert("Please enter the message");
            return;
        }
        this.utilitiy.updateLoader(true);
        var submitParams = {
            // zenDeavorURL: this.url
            url: this.submitConsultUrl,
            zenDeavorURL: true,
            data: {
                "userId": this.userID,
                "main_key": this.mainKey,
                "processType": this.kraType,
                "consultTo": this.consultTo,
                "role": this.userRole,
                "consultationReqMessage": this.feedbackMsg,
                "request_type": "responded"
            }
        };
        this.httpProvider.http.commonService(submitParams).subscribe(function (res) {
            _this.utilitiy.updateLoader(false);
            _this.submitResponse = res['status'];
            if (_this.submitResponse.statusCode == '1' && !_this.utilitiy.isEmptyOrNullOrUndefined(_this.submitResponse)) {
                _this.utilitiy.presentAlert(_this.submitResponse.statusMessage).then(function (res) {
                    _this.navCtrl.pop();
                });
                // this.showSuccessMsg = true
            }
            // this.submittedList = this.consultationList['submittedList']
        }, function (err) {
            _this.utilitiy.updateLoader(false);
        });
    };
    ZendeavorConsultationRequestDetailPage.prototype.gotoDashboard = function () {
        this.navCtrl.pop();
        this.navCtrl.push('ZenDeavorDashboardPage');
    };
    ZendeavorConsultationRequestDetailPage.prototype.dateConversion = function (input) {
        var date = __WEBPACK_IMPORTED_MODULE_5_moment__(input).format('D MMM YYYY h:mma');
        return date;
    };
    ZendeavorConsultationRequestDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-zendeavor-consultation-request-detail',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zendeavor-consultation-request-detail\zendeavor-consultation-request-detail.html"*/'<!--\n  Generated template for the ZendeavorConsultationRequestDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="!isReadOnly">Consultation Requested</ion-title>\n    <ion-title *ngIf="isReadOnly">Consultation Submitted</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf="!showSuccessMsg">\n\n\n    <div class="userDetails-container">\n      <ion-card padding>\n        <!-- <div class="divFirst">\n        <ion-item class="padding0 padding-left7">\n          <ion-avatar item-start>\n            <img class="imgCls" [src]="fieldItem?.employeeProfilePic">\n          </ion-avatar>\n\n          <h3 class="empName">Deepa Nair</h3>\n          <p>51437</p>\n        </ion-item>\n      </div> -->\n        <ion-row class="rowCls" *ngFor="let fieldItem of consultationDetails?.fieldDetails">\n          <ion-col col-6 class="colCls">\n            <span class="mrginRt">\n              <img class="width80" class="imgSize" [src]=fieldItem.icon />\n            </span>\n            <span class="font-weight500">{{fieldItem.title}}</span>\n          </ion-col>\n          <ion-col col-6>\n            <span class="color-gray">{{fieldItem.titleValue}}</span>\n            <span class="color-gray">{{fieldItem.titleValue2}}</span>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n\n    </div>\n    <!-- <div>\n    <ion-card>\n      <div class="msg-title">Message</div>\n      <div class="padding10">dkjhfjhsfj</div>\n    </ion-card>\n  </div> -->\n\n    <div *ngFor="let chatItem of consultationDetails?.conversationList" class="conversationList-container">\n      <div class="chat-container" *ngIf="loggedInUserID != chatItem.send_by">\n        <div class="chat-imgContainer">\n          <img class="chat-img" [src]="chatItem.profilePicUrl" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n\n        </div>\n        <div class="chat-message-container">\n          <div class="chat-username">{{chatItem?.userName}}</div>\n          <!-- <div class="msg-date"> {{chatItem?.receiver_date|date :\'MMM d, yyyy, h:mm a\'}} </div> -->\n          <div class="msg-date"> {{ dateConversion(chatItem?.receiver_date)}} </div>\n\n          <div class="chat-msg width100per">\n            <div>{{chatItem?.sender_comment}}</div>\n          </div>\n\n        </div>\n      </div>\n      <!-- <div class="chat-containerflex-end">\n\n      <div class="chat-message-container-end">\n        <div class="chat-username textalignRight">{{chatItem?.userName}}</div>\n        <div class="msg-date-end"> {{chatItem?.receiver_date|date}} </div>\n        <div class="chat-msg-end">\n          <div>{{chatItem?.sender_comment}}</div>\n        </div>\n\n      </div>\n      <div class="chat-imgContainer-end">\n        <img class="chat-img" [src]="chatItem.profilePicUrl" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n\n      </div>\n    </div> -->\n      <div class="chat-containerflex-end" *ngIf="loggedInUserID == chatItem.send_by">\n        <div class="chat-message-container-end">\n          <div class="chat-username">{{chatItem?.userName}}</div>\n          <div class="msg-date-end"> {{dateConversion(chatItem?.receiver_date)}}</div>\n          <div class="chat-msg-end width100per">\n            <div class="">{{chatItem?.sender_comment}}</div>\n          </div>\n        </div>\n        <div>\n          <img class="chat-img-end" [src]="chatItem.profilePicUrl" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n        </div>\n\n\n      </div>\n    </div>\n\n    <div class="margin10">\n\n      <div class="feedbackTitle">Feedback:</div>\n      <div class="">\n        <!-- <textarea class="" rows="6" cols="48" placeholder="" [(ngModel)]=\'feedback\' class="commtArea"></textarea> -->\n        <ion-textarea class="feedbackTextarea" placeholder="" rows="8" [(ngModel)]="feedbackMsg"></ion-textarea>\n      </div>\n\n\n    </div>\n  </div>\n  <!-- <div class="successMsg-container padding10" *ngIf="showSuccessMsg">\n    <div class="congratulation-bg-img">\n      <div class="success-msgdiv">\n        <div class="margin10"><img class="tick-img" src="assets/imgs/ZenDeavour/tickSign-blue.svg" /></div>\n        <div class="fontSize1p8">Successful</div>\n      </div>\n      <div class="consultMsg">Consultation submitted successfully</div>\n\n    </div>\n  </div> -->\n</ion-content>\n<ion-footer class="submitfooter" *ngIf="!showSuccessMsg">\n\n  <button class="submitBtn" (click)="submitConsultation()" ion-button round>Submit</button>\n\n\n\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zendeavor-consultation-request-detail\zendeavor-consultation-request-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_0__providers_data_data__["a" /* Data */]])
    ], ZendeavorConsultationRequestDetailPage);
    return ZendeavorConsultationRequestDetailPage;
}());

//# sourceMappingURL=zendeavor-consultation-request-detail.js.map

/***/ })

});
//# sourceMappingURL=54.js.map