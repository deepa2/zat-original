webpackJsonp([86],{

/***/ 1352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtoQuestionnariesPageModule", function() { return RtoQuestionnariesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rto_questionnaries__ = __webpack_require__(1774);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RtoQuestionnariesPageModule = /** @class */ (function () {
    function RtoQuestionnariesPageModule() {
    }
    RtoQuestionnariesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rto_questionnaries__["a" /* RtoQuestionnariesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rto_questionnaries__["a" /* RtoQuestionnariesPage */]),
            ],
        })
    ], RtoQuestionnariesPageModule);
    return RtoQuestionnariesPageModule;
}());

//# sourceMappingURL=rto-questionnaries.module.js.map

/***/ }),

/***/ 1774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RtoQuestionnariesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(4);
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
 * Generated class for the RtoQuestionnariesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RtoQuestionnariesPage = /** @class */ (function () {
    function RtoQuestionnariesPage(navCtrl, navParams, httpProvider, utilities, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.utilities = utilities;
        this.alertCtrl = alertCtrl;
        this.answerList = [];
        this.isDisabled = true;
        this.isEligibleForOffice = true;
    }
    RtoQuestionnariesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.utilities.updateLoader(true);
        var data = {
            url: 'covidSurveyQuestions',
            data: {},
            miscellaneous: true
        };
        this.httpProvider.http.commonService(data).subscribe(function (response) {
            _this.utilities.consoleLog(response);
            if (response && response.details) {
                _this.utilities.updateLoader(false);
                _this.questionsList = response.details.questionDOList;
            }
        }, function (error) {
            _this.utilities.updateLoader(false);
        });
    };
    RtoQuestionnariesPage.prototype.selectAnswer = function (wholedata, answers) {
        if (this.answerList.length == 0) {
            wholedata.selectedAnswer = answers;
            this.answerList.push(wholedata);
        }
        else {
            if (this.answerList.indexOf(wholedata) == -1) {
                wholedata.selectedAnswer = answers;
                this.answerList.push(wholedata);
            }
            else if (this.answerList.indexOf(wholedata) != -1) {
                this.answerList.filter(function (data) {
                    if (data.questionId == wholedata.questionId) {
                        data.selectedAnswer = answers;
                    }
                });
            }
        }
        if (this.questionsList.length == this.answerList.length) {
            // this.answerList.filter(data => {
            //   if (data.selectedAnswer.answer == 'Yes') {
            //     this.isEligibleForOffice = false;
            //   }
            // })
            this.isDisabled = false;
        }
        console.log(this.answerList);
    };
    RtoQuestionnariesPage.prototype.submitQuestionnnaires = function () {
        var _this = this;
        var submit;
        if (this.questionsList.length == this.answerList.length) {
            this.answerList.filter(function (data) {
                if (data.selectedAnswer.answer == 'Yes') {
                    _this.isEligibleForOffice = false;
                }
            });
            this.isDisabled = false;
        }
        submit = this.answerList.map(function (data) {
            var submitAnswers = {};
            submitAnswers.questionId = data.questionId;
            submitAnswers.answerId = data.selectedAnswer.answerId;
            return submitAnswers;
        });
        console.log(submit);
        this.utilities.updateLoader(true);
        var data = {
            url: 'submitCovidQA',
            data: submit,
            miscellaneous: true
        };
        this.httpProvider.http.commonService(data).subscribe(function (response) {
            console.log(response);
            _this.utilities.updateLoader(false);
            if (_this.isEligibleForOffice) {
                // this.utilities.alert("You are Eligible to come to office","Hello").then(()=>{
                //   this.navCtrl.pop();
                //})
                _this.presentAlert("You meet the criteria to go to office.<br><br>Thank-you for submitting the Return to Office (RTO) Declaration & policy agreement. <br>Please adhere to the RTO policy and obligations in the Declaration, to ensure a safe working environment for yourself and your colleagues.").then(function () {
                    _this.navCtrl.popToRoot();
                });
            }
            else {
                _this.presentAlert("You do not meet the criteria to go to office.<br><br>Thank-you for submitting the Return to Office (RTO) Declaration & policy agreement. <br>Please adhere to the RTO policy and obligations in the Declaration, to ensure a safe working environment for yourself and your colleagues.").then(function () {
                    _this.navCtrl.popToRoot();
                });
            }
        }, function (error) {
            _this.utilities.updateLoader(false);
        });
    };
    RtoQuestionnariesPage.prototype.presentAlert = function (message, title) {
        var _this = this;
        if (title === void 0) { title = ''; }
        return new Promise(function (resolve) {
            var alert = _this.alertCtrl.create({
                enableBackdropDismiss: false,
                //title: `<div class="RTO-US-questions-title"><img src="assets/imgs/RTO-send.svg"> <span> Thank You </span></div> `,
                title: "<div class=\"RTO-US-questions-title\"> <span> Thank You </span></div> ",
                message: message,
                cssClass: "customizedAlertRTO",
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                            resolve();
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    RtoQuestionnariesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-rto-questionnaries',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\rto-questionnaries\rto-questionnaries.html"*/'<!--\n  Generated template for the RtoQuestionnariesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Return to office - Screening</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bgColor">\n  <div>\n    Please provide us with your response to find out your eligibity to return to office.\n  </div>\n\n  <div class="container" *ngFor="let questionDetails of questionsList">\n\n    <div class="imageStyle">\n      <img [src]="questionDetails?.icon">\n    </div>\n    <div class="questionText">\n      {{questionDetails?.questionText}}\n      <div class="questionLists" *ngIf="questionDetails?.questionBullets">\n        <ul class="ulList">\n          <li *ngFor="let list of questionDetails?.questionBullets">\n            {{list}}\n          </li>\n        </ul>\n      </div>\n      <ion-list radio-group class="questionnaires">\n        <ion-item *ngFor="let answersList of questionDetails?.answerList">\n          <ion-radio (ionSelect)="selectAnswer(questionDetails,answersList)">\n          </ion-radio>\n          <ion-label class="txtMrgin">{{answersList?.answer}}</ion-label>\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n  </div>\n</ion-content>\n\n<ion-footer class="footerStyle">\n  <button style="margin-bottom: 25px;" ion-button class="submitBttn" [disabled]="isDisabled" (click)="submitQuestionnnaires()">Submit</button>\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\rto-questionnaries\rto-questionnaries.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], RtoQuestionnariesPage);
    return RtoQuestionnariesPage;
}());

//# sourceMappingURL=rto-questionnaries.js.map

/***/ })

});
//# sourceMappingURL=86.js.map