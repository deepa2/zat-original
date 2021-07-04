webpackJsonp([105],{

/***/ 1329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback__ = __webpack_require__(1749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FeedbackPageModule = /** @class */ (function () {
    function FeedbackPageModule() {
    }
    FeedbackPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feedback__["a" /* FeedbackPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feedback__["a" /* FeedbackPage */]),
            ]
        })
    ], FeedbackPageModule);
    return FeedbackPageModule;
}());

//# sourceMappingURL=feedback.module.js.map

/***/ }),

/***/ 1749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(viewCtrl, params, store, data, alertCtrl, navCtrl) {
        this.viewCtrl = viewCtrl;
        this.store = store;
        this.data = data;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.url = 'submitUserRate';
        this.isenabled = true;
        this.userRateArray = [];
        this._addFeedbackDataListener = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["Subscription"]();
        this.questionId = params.get('queryId');
        this.addComment = '';
        // if (this.addComment !== '') {
        //     this.isenabled = true;
        // } else {
        //     this.isenabled = false;
        // }
    }
    FeedbackPage.prototype.ngOnInit = function () {
        this.feedbackTitle = 'How was your experience with us?';
        this.feedbackQuery = 'What went well?';
        this.rating = 5;
    };
    FeedbackPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.getRatingData().then(function (success) {
            _this.onRatingChange(_this.rating);
        });
        this.loading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_35" /* getAddFeedbackLoading */]);
        this._addFeedbackDataListener = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_34" /* getAddFeedbackData */]).subscribe(function (response) {
            if (response) {
                if (response.status.statusCode == 1) {
                    _this.presentAlert();
                }
            }
        });
    };
    FeedbackPage.prototype.submitFeedback = function () {
        var userRate = [];
        this.userRateArray.map(function (item) {
            if (item.checked) {
                userRate.push({ 'key': item.key, 'value': item.value });
            }
        });
        var parameters = {
            'questionId': this.questionId,
            'userComment': this.addComment,
            "rate": this.rating,
            'userRate': userRate
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["b" /* AddFeedbackAction */](this.url, parameters));
    };
    FeedbackPage.prototype.dismiss = function (status) {
        this.viewCtrl.dismiss(status);
    };
    FeedbackPage.prototype.getRatingData = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.data.getData('miscData').then(function (res) {
                _this.ratingsData = res.ratings;
                resolve();
            });
        });
    };
    FeedbackPage.prototype.onRatingChange = function (value) {
        this.rating = value;
        if (this.rating < 4) {
            this.feedbackQuery = 'What went wrong?';
        }
        else if (this.rating > 3) {
            this.feedbackQuery = 'What went well?';
        }
        switch (value) {
            case 1:
                this.userRateArray = this.ratingsData.userRateOne;
                break;
            case 2:
                this.userRateArray = this.ratingsData.userRateTwo;
                break;
            case 3:
                this.userRateArray = this.ratingsData.userRateThree;
                break;
            case 4:
                this.userRateArray = this.ratingsData.userRateFour;
                break;
            case 5:
                this.userRateArray = this.ratingsData.userRateFive;
                break;
            default:
                this.userRateArray = [];
                break;
        }
        this.userRateArray.map(function (item) {
            item.checked = false;
        });
        this.isenabled = true;
    };
    FeedbackPage.prototype.presentAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            enableBackdropDismiss: false,
            // title: 'Confirmation',
            subTitle: 'Submitted Successfully',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["_12" /* ResetFeedbackAction */]());
                        _this.addComment = '';
                        _this.dismiss(true);
                    }
                }
            ]
        });
        alert.present();
    };
    FeedbackPage.prototype.CheckBoxChanged = function (i, e) {
        var checkedItems = this.userRateArray.filter(function (item) {
            return item.checked == true;
        });
        if (checkedItems.length > 0)
            this.isenabled = false;
        else
            this.isenabled = true;
    };
    FeedbackPage.prototype.ionViewWillLeave = function () {
        this._addFeedbackDataListener.unsubscribe();
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-feedback',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\feedback\feedback.html"*/'<ion-content padding>\n\n    <ion-row>\n        <ion-col text-right>\n            <button (click)="dismiss(false)" class="close" ion-button icon-only round>\n                <ion-icon name="ios-close-outline"></ion-icon>\n            </button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col text-center>\n            <div class="title">{{feedbackTitle}}</div>\n        </ion-col>\n    </ion-row>\n\n    <rating [rating]="rating" (ratingChange)="onRatingChange($event)"></rating>\n\n    <ion-row *ngIf="rating > 0">\n        <ion-col text-center>\n            <div class="title">{{feedbackQuery}}</div>\n        </ion-col>\n    </ion-row>\n\n    <form id="ngForm" #feedbackForm="ngForm">\n\n        <ion-list>\n            <ion-item class="userRating" *ngFor="let item of userRateArray;index as i">\n                <ion-checkbox (ionChange)="CheckBoxChanged(i,$event)" item-right name="feedbackRating" [(ngModel)]="item.checked"></ion-checkbox>\n                <ion-label>{{item.value}}</ion-label>\n            </ion-item>\n        </ion-list>\n\n        <ion-textarea class="comment" name="feedbackComment" [(ngModel)]="addComment" placeholder="Add your comment">\n        </ion-textarea>\n\n    </form>\n\n\n</ion-content>\n\n<ion-footer>\n    <ion-row *ngIf="!(loading$ | async)">\n        <ion-col no-padding>\n            <button [disabled]="isenabled" no-margin ion-button full large color="secondary" (click)="submitFeedback()">Submit</button>\n        </ion-col>\n    </ion-row>\n    <ion-row color="danger" padding *ngIf="(loading$ | async)">\n        <ion-spinner></ion-spinner>\n    </ion-row>\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\feedback\feedback.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["H" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* Data */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ })

});
//# sourceMappingURL=105.js.map