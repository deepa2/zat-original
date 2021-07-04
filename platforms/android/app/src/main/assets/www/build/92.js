webpackJsonp([92],{

/***/ 1343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostQuestionPageModule", function() { return PostQuestionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_question__ = __webpack_require__(1763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PostQuestionPageModule = /** @class */ (function () {
    function PostQuestionPageModule() {
    }
    PostQuestionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__post_question__["a" /* PostQuestionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__post_question__["a" /* PostQuestionPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */]
            ],
        })
    ], PostQuestionPageModule);
    return PostQuestionPageModule;
}());

//# sourceMappingURL=post-question.module.js.map

/***/ }),

/***/ 1763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostQuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_platform_platform__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_speechRecognition_speechRecognition__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_constants__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_gallery_modal__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_http_angular_http_angular__ = __webpack_require__(45);
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
 * Generated class for the PostQuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostQuestionPage = /** @class */ (function () {
    function PostQuestionPage(platform, navParams, store, data, navCtrl, utilities, zone, speechRecognitionUtility, file, modalCtrl, httpAngularProvider) {
        var _this = this;
        this.platform = platform;
        this.navParams = navParams;
        this.store = store;
        this.data = data;
        this.navCtrl = navCtrl;
        this.utilities = utilities;
        this.zone = zone;
        this.speechRecognitionUtility = speechRecognitionUtility;
        this.file = file;
        this.modalCtrl = modalCtrl;
        this.httpAngularProvider = httpAngularProvider;
        this.askedQuestion = "";
        this.mute = false;
        this.listening = false;
        this.currentURL = null;
        this.maxLength = __WEBPACK_IMPORTED_MODULE_9__constants_constants__["a" /* Constants */].maxLength;
        this.warning = '';
        this.lessThanZero = false;
        this.confirmation = "Do you want to post or cancel?";
        this.photo = [];
        this.getData = this.navParams.get('screenShotPath');
        this.remainingCharacters = this.maxLength;
        this.warning = "Question should be less than " + this.maxLength + " characters";
        this.platform.registerBackButtonAction(function () { return _this.backButtonClick; }, 2);
        this.formData = new FormData();
    }
    PostQuestionPage.prototype.backButtonClick = function () {
        this.navCtrl.getPrevious().data.questionPosted = false;
        this.navCtrl.pop();
    };
    PostQuestionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.navBar.backButtonClick = this.backButtonClick;
        if (this.utilities.platformAvailable())
            this._startListening();
        if (this.getData) {
            //console.log(this.getData.screenshot.filePath)
            var filepath = "file://" + this.getData.screenshot.filePath;
            this.imgList = filepath;
            this.photo.push({ url: this.imgList });
            this.file.resolveLocalFilesystemUrl(filepath).then(function (entry) {
                entry.file(function (file) {
                    var fileReader = new FileReader();
                    fileReader.readAsArrayBuffer(file);
                    fileReader.onload = function (ev) {
                        var imgBlob = new Blob([fileReader.result], { type: file.type });
                        _this.formData.append('file', imgBlob, file.name);
                        // this.store.dispatch(new fromStore.AddMultimediaAction("addQuestion", this.formData, "addQuestion"));
                    };
                });
            });
        }
    };
    PostQuestionPage.prototype._startListening = function () {
        var _this = this;
        this.listening = true;
        this.speechRecognitionUtility.startListening().subscribe(function (value) {
            if (value.toLowerCase() == 'post') {
                _this.send();
            }
            else if (value.toLowerCase() == 'cancel') {
                _this.cancel();
            }
            else {
                // this.askedQuestion = value
                _this._inputUpdate(value);
                _this._tts('Do you want to post or cancel');
            }
            _this.zone.run(function () {
                _this.listening = false;
            });
        }, function (error) {
            _this.zone.run(function () {
                _this.listening = false;
            });
        });
    };
    PostQuestionPage.prototype._tts = function (text) {
        if (!this.mute) {
            this.speechRecognitionUtility.textToSpeech(text);
        }
    };
    PostQuestionPage.prototype.send = function () {
        var _this = this;
        var message = null;
        message = 'Do you want to submit ?';
        this.btnTitle = "Submit";
        this.currentURL = 'addQuestionUsingZeno';
        this.formData.append('question', this.askedQuestion);
        this.utilities.updateLoader(true);
        this.httpAngularProvider.multimediaService({ url: this.currentURL, data: this.formData }).subscribe(function (response) {
            _this.utilities.updateLoader(false);
            if (response && response.status && response.status.statusCode && response.status.statusCode == 1) {
                _this.submitHrChatBotFeedback(response);
            }
        });
        // this.store.dispatch(new fromStore.AddMultimediaAction(this.currentURL, this.formData, 'addQuestion'));
    };
    PostQuestionPage.prototype.submitHrChatBotFeedback = function (response) {
        var _this = this;
        if (this.getData) {
            var params = {
                "userId": this.getData.userId,
                "queryId": this.getData.queryId,
                "feedbackValue": 2,
                "feedbackComment": this.askedQuestion
            };
            // this.store.dispatch(new fromStore.GetHrChatBotSubmitFeedbackAction("", params));
            this.httpAngularProvider.commonService({ url: "", data: params, chatBotFeedback: true }).subscribe(function (response) {
                _this.utilities.updateLoader(false);
                if (response && response.status && response.status.statusCode && response.status.statusCode == 1) {
                    // state.data[state.data.length - 1].response.responseList.feedbackSent = true;
                    var feedbackResponse = "";
                    if (response.details.responseList.feedbackValue == -1) {
                        feedbackResponse = "Thanks for your feedback";
                        response.responseList = {
                            actionName: 'negativeFeedbackres',
                            feedbackResponse: feedbackResponse,
                            suggestionsList: response.details.responseList.suggestionsList,
                            suggestionPhrase: response.details.responseList.suggestionPhrase,
                            feedbackLoader: true
                            // lifespan: 1,
                            // actionIncomplete: false
                        };
                    }
                    else if (response.details.responseList.feedbackValue == 1) {
                        feedbackResponse = "Thanks for your feedback";
                        response.responseList = {
                            actionName: 'receivedFeedbackRes',
                            feedbackResponse: feedbackResponse,
                            suggestionsList: response.details.responseList.suggestionsList,
                            suggestionPhrase: response.details.responseList.suggestionPhrase,
                            feedbackLoader: true
                            // lifespan: 1,
                            // actionIncomplete: false
                        };
                    }
                    else if (response.details.responseList.feedbackValue == 2) {
                        response.responseList = {
                            actionName: 'postQuestionFeedBack',
                            feedbackResponse: null,
                            suggestionsList: response.details.responseList.suggestionsList,
                            suggestionPhrase: response.details.responseList.suggestionPhrase,
                            feedbackLoader: true
                            // lifespan: 1,
                            // actionIncomplete: false
                        };
                    }
                    _this.navCtrl.getPrevious().data.questionPosted = true;
                    _this.navCtrl.getPrevious().data.feedbackResponse = response;
                    _this.navCtrl.pop();
                }
            });
        }
    };
    PostQuestionPage.prototype.cancel = function () {
        this.askedQuestion = '';
        this.navCtrl.getPrevious().data.questionPosted = false;
        this.navCtrl.pop();
    };
    PostQuestionPage.prototype._inputUpdate = function (value) {
        this.askedQuestion = value;
        this.remainingCharacters = __WEBPACK_IMPORTED_MODULE_9__constants_constants__["a" /* Constants */].maxLength - String(this.askedQuestion).length;
        if (this.remainingCharacters > -1) {
            this.lessThanZero = false;
        }
        else {
            this.lessThanZero = true;
        }
    };
    PostQuestionPage.prototype.ionViewWillLeave = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__app_store__["d" /* AddResetAction */]());
    };
    PostQuestionPage.prototype.getFileName = function (item) {
        return item.substring(item.lastIndexOf('/') + 1);
    };
    PostQuestionPage.prototype.openModal = function (data) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10_ionic_gallery_modal__["a" /* GalleryModal */], {
            photos: this.photo
        }, {
            cssClass: 'gallery-modal',
        });
        modal.present();
    };
    PostQuestionPage.prototype.removeImg = function () {
        this.formData.delete('file');
        this.imgList = undefined;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Navbar */])
    ], PostQuestionPage.prototype, "navBar", void 0);
    PostQuestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-post-question',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\post-question\post-question.html"*/'<!--\n  Generated template for the PostQuestionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Question</ion-title>\n    <!-- <ion-buttons end hideBackButton>\n      <button ion-button icon-only (click)="backButtonClick()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <ion-textarea id="add" rows="4" class="width100 growTextBox questionArea" placeholder="Enter your question here"\n      maxlength="maxLength" (input)=\'_inputUpdate($event.target?.value)\' [(ngModel)]="askedQuestion"\n      (keyup.enter)="send()">\n    </ion-textarea>\n\n    <div>\n      <div style="padding-top:2px;float: right;" class="{\'redColor\':lessThanZero}"> {{remainingCharacters}} </div>\n      <div *ngIf="lessThanZero" class="bg-danger msgBox">{{warning}}</div>\n    </div>\n\n    <div class="confirmation padding5" *ngIf="askedQuestion.length > 0 && !lessThanZero">\n      <div>{{confirmation}}</div>\n      <button [disabled]="!askedQuestion" (click)="send()"\n        class="box-shadow btn askedQuestion ? \'postSuccess\': \'post\'">Post</button>\n      <button (click)="cancel()" type="button" class="btn cancel">Cancel</button>\n    </div>\n\n\n    \n    <div *ngIf="imgList" margin-vertical  class="listImages display">\n      <div  class="frame-square width-30">\n        <div class="crop">\n          <img [src]="imgList" (click)="openModal()" onerror="this.src=\'\'">\n        </div>\n      </div>\n      <div  class="width-60">\n        <div class="mg-30">{{getFileName(imgList)}}</div>\n      </div>\n      <div  class="width-10">\n        <span (click)="removeImg()">\n          <ion-icon name="close"></ion-icon>\n        </span>\n      </div>\n\n    </div>\n\n\n  </div>\n</ion-content>\n\n<ion-footer padding>\n  <div class="spinner-container">\n    <ion-spinner name="dots" class="loader" *ngIf="loading$ | async"></ion-spinner>\n  </div>\n\n  <div *ngIf="!(loading$ | async)">\n    <div class="holder">\n      <!-- keyboard -->\n      <!-- <img class="width9 height9" *ngIf="!showText" (click)="_openKeyboard()" src="./assets/imgs/chat/keyboard.svg" /> -->\n\n      <!-- Microphone/Listening -->\n      <img class="width9 height9" *ngIf="!listening" (click)="_startListening()"\n        src="./assets/imgs/chat/microphone-icon.svg" />\n      <img class="width9 height9" *ngIf="listening" src="./assets/imgs/chat/message-loader.gif" />\n\n      <!-- Speaker/Mute -->\n      <!-- <img class="width9 height9" *ngIf="mute" (click)="_muteSpeech()" src="./assets/imgs/chat/mute.svg" />\n      <img class="width9 height9" *ngIf="!mute" (click)="_muteSpeech()" src="./assets/imgs/chat/unmute.svg" /> -->\n    </div>\n\n    <!-- <div [hidden]="!showKeyboard" class="keyboard-holder center">\n      <div class="width9 height9">\n        <img *ngIf="!showSend" (click)="_closeKeyboard()" src="./assets/imgs/chat/microphone.svg" />\n        <img *ngIf="showSend" (click)="_sendText()" src="./assets/imgs/chat/send.svg" />\n      </div>\n    </div> -->\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\post-question\post-question.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* Data */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_5__providers_speechRecognition_speechRecognition__["a" /* SpeechRecognitionUtility */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_11__providers_http_angular_http_angular__["a" /* HttpAngularProvider */]])
    ], PostQuestionPage);
    return PostQuestionPage;
}());

//# sourceMappingURL=post-question.js.map

/***/ })

});
//# sourceMappingURL=92.js.map