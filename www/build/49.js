webpackJsonp([49],{

/***/ 1403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZendeavorViewConsultationPageModule", function() { return ZendeavorViewConsultationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zendeavor_view_consultation__ = __webpack_require__(1825);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ZendeavorViewConsultationPageModule = /** @class */ (function () {
    function ZendeavorViewConsultationPageModule() {
    }
    ZendeavorViewConsultationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zendeavor_view_consultation__["a" /* ZendeavorViewConsultationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zendeavor_view_consultation__["a" /* ZendeavorViewConsultationPage */]),
            ],
        })
    ], ZendeavorViewConsultationPageModule);
    return ZendeavorViewConsultationPageModule;
}());

//# sourceMappingURL=zendeavor-view-consultation.module.js.map

/***/ }),

/***/ 1825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZendeavorViewConsultationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(31);
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
 * Generated class for the ZendeavorViewConsultationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZendeavorViewConsultationPage = /** @class */ (function () {
    function ZendeavorViewConsultationPage(navCtrl, navParams, httpProvider, popoverCtrl, modalCtrl, utilitiy, data, element) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.utilitiy = utilitiy;
        this.data = data;
        this.element = element;
        this.viewonsultUrl = 'viewConsultation';
        this.conversationList = [];
        this.submitConsultUrl = 'submitConsultation';
        this.showLoader = true;
        this.userID = this.navParams.get('userID') || null;
        this.userRole = this.navParams.get('userRole') || null;
        this.kraType = this.navParams.get('kraType') || null;
        this.consultFrom = this.navParams.get('main_key') || null;
        this.mainKey = this.navParams.get('main_key') || null;
        this.data.getData('loginDetails').then(function (userInfo) {
            _this.userDetails = userInfo.details.userDetails;
            //console.log("userdetails", this.userDetails)
            //console.log("userdetails", userInfo)
            _this.loggedInUserID = _this.userDetails.userId;
            //console.log("loggedInUserID", this.loggedInUserID)
            if (!_this.utilitiy.isEmptyOrNullOrUndefined(_this.loggedInUserID))
                _this.getConsultationDetails();
        });
    }
    ZendeavorViewConsultationPage.prototype.ionViewDidLoad = function () {
        // this.getConsultationDetails()
        //console.log('ionViewDidLoad ZendeavorViewConsultationPage');
    };
    ZendeavorViewConsultationPage.prototype.getConsultationDetails = function () {
        var _this = this;
        if (this.showLoader)
            this.utilitiy.updateLoader(true);
        var teamListUrl = {
            url: this.viewonsultUrl,
            zenDeavorURL: true,
            data: {
                "userId": this.userID,
                "role": this.userRole,
                "processType": this.kraType,
            }
        };
        this.httpProvider.http.commonService(teamListUrl).subscribe(function (res) {
            if (_this.showLoader)
                _this.utilitiy.updateLoader(false);
            if (!_this.utilitiy.isEmptyOrNullOrUndefined(res['details'])) {
                _this.conversationList = res['details']['consultFromList'];
                //console.log("conversationList", this.conversationList)
            }
        }, function (err) {
            _this.utilitiy.updateLoader(false);
        });
    };
    ZendeavorViewConsultationPage.prototype.adjustHeight = function (event, reference) {
        for (var index = 0; index < this.conversationList.length; index++) {
            // const element = array[index];
            var textArea = this.element.nativeElement.getElementsByTagName('textarea')[index];
            // //console.log(this.element.nativeElement)
            // //console.log("reference", reference.value)
            textArea.style.overflow = 'hidden';
            textArea.style.height = 'auto';
            textArea.style.height = textArea.scrollHeight + 'px';
        }
    };
    ZendeavorViewConsultationPage.prototype.submitConsultation = function (message, chatDetail) {
        //console.log("feedback", this.feedbackTextRef.toArray())
        var _this = this;
        // // this.feedbackTextRef = message
        // for (let index = 0; index < this.conversationList.length; index++) {
        //   const textArea = this.feedbackTextRef[index].value;
        //   console.log(textArea)
        //   // textArea.feedbackTextRef=""
        // }
        if (this.utilitiy.isEmptyOrNullOrUndefined(message)) {
            this.utilitiy.presentAlert("Please enter the message");
            return;
        }
        this.utilitiy.updateLoader(true);
        var submitParams = {
            url: this.submitConsultUrl,
            zenDeavorURL: true,
            data: {
                "userId": this.userID,
                "main_key": chatDetail.main_key,
                "processType": this.kraType,
                "consultTo": chatDetail.consultTo,
                "role": this.userRole,
                "consultationReqMessage": message,
                "request_type": "requested"
            }
        };
        this.httpProvider.http.commonService(submitParams).subscribe(function (res) {
            _this.utilitiy.updateLoader(false);
            _this.submitResponse = res['status'];
            if (_this.submitResponse.statusCode == '1' && !_this.utilitiy.isEmptyOrNullOrUndefined(_this.submitResponse)) {
                // this.feedbackTextRef['value'] = ''
                var array = _this.feedbackTextRef.toArray();
                array.forEach(function (element) {
                    element.value = '';
                });
                _this.utilitiy.presentAlert(_this.submitResponse.statusMessage);
                _this.showLoader = false;
                _this.getConsultationDetails();
            }
            // this.submittedList = this.consultationList['submittedList']
        }, function (err) {
            _this.utilitiy.updateLoader(false);
        });
    };
    ZendeavorViewConsultationPage.prototype.dateConversion = function (input) {
        var date = __WEBPACK_IMPORTED_MODULE_5_moment__(input).format('D MMM YYYY h:mma');
        return date;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('feedbackTextRef'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], ZendeavorViewConsultationPage.prototype, "feedbackTextRef", void 0);
    ZendeavorViewConsultationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-zendeavor-view-consultation',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zendeavor-view-consultation\zendeavor-view-consultation.html"*/'<!--\n  Generated template for the ZendeavorViewConsultationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>View Consultation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div *ngFor="let chatItem of conversationList" class="feedbacklist-container">\n    <div *ngFor="let feedbackItem of chatItem.feedbackList; index as i" class="margin-bottom3per">\n\n\n      <div class="chat-container" *ngIf="loggedInUserID != feedbackItem.send_by">\n        <div class="chat-imgContainer">\n          <img class="chat-img" [src]="feedbackItem.profilePicUrl" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n\n        </div>\n        <div class="chat-message-container">\n          <div class="chat-username">{{feedbackItem?.userName}}</div>\n          <!-- <div class="msg-date"> {{feedbackItem?.receiver_date|date :\'MMM d, yyyy, h:mm a\'}} </div> -->          \n          <div class="msg-date"> {{dateConversion(feedbackItem?.receiver_date)}} </div>\n          <div class="chat-msg width100per">\n            <div>{{feedbackItem?.sender_comment}}</div>\n          </div>\n\n        </div>\n      </div>\n      <div class="chat-containerflex-end" *ngIf="loggedInUserID == feedbackItem.send_by">\n        <div class="chat-message-container-end">\n          <div class="chat-username">{{feedbackItem?.userName}}</div>\n          <div class="msg-date-end"> {{dateConversion(feedbackItem?.receiver_date)}}</div>\n          <div class="chat-msg-end width100per">\n            <div class="">{{feedbackItem?.sender_comment}}</div>\n          </div>\n        </div>\n        <div>\n          <img class="chat-img-end" [src]="feedbackItem.profilePicUrl" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n        </div>\n\n\n      </div>\n    </div>\n    <div class="margin10" class="textarea-container">\n      <span class="textareaSpan">\n        <ion-textarea (ionChange)="adjustHeight($event,feedbackTextRef)" class="feedbackTextarea" placeholder="Please enter the message"\n          rows="1" #feedbackTextRef="ngModel" #feedbackTextRef name="feedbackTextRef"></ion-textarea>\n      </span>\n      <span class="sendBtn-parent" (click)="submitConsultation(feedbackTextRef.value,chatItem)">\n        <ion-icon ios="ios-send" name="send"></ion-icon>\n      </span>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zendeavor-view-consultation\zendeavor-view-consultation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* Data */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ZendeavorViewConsultationPage);
    return ZendeavorViewConsultationPage;
}());

//# sourceMappingURL=zendeavor-view-consultation.js.map

/***/ })

});
//# sourceMappingURL=49.js.map