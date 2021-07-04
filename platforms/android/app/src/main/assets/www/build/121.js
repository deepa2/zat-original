webpackJsonp([121],{

/***/ 1402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZenLearnRatingPageModule", function() { return ZenLearnRatingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zen_learn_rating__ = __webpack_require__(1824);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ZenLearnRatingPageModule = /** @class */ (function () {
    function ZenLearnRatingPageModule() {
    }
    ZenLearnRatingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zen_learn_rating__["a" /* ZenLearnRatingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zen_learn_rating__["a" /* ZenLearnRatingPage */]),
            ],
        })
    ], ZenLearnRatingPageModule);
    return ZenLearnRatingPageModule;
}());

//# sourceMappingURL=zen-learn-rating.module.js.map

/***/ }),

/***/ 1824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZenLearnRatingPage; });
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
 * Generated class for the ZenLearnRatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZenLearnRatingPage = /** @class */ (function () {
    function ZenLearnRatingPage(navCtrl, navParams, events, utility, httpProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.ratingData = [];
        this.startlimit = 0;
        this.endlimit = 1;
        this.fromDashboard = false;
        this.selectedStar = 4;
        this.courseData = this.navParams.get("courseData");
        if (this.courseData) {
            this.scheduleOfferingId = this.courseData.scheduleOfferingId;
        }
        this.fromDashboard = this.navParams.get("fromDashboard");
    }
    ZenLearnRatingPage.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getrating();
    };
    ZenLearnRatingPage.prototype.getrating = function () {
        // const url: string = "FeedbackPage";
        // let data: any = {}
        // if (this.fromDashboard) {
        //   data.scheduleOfferingId = 0
        // } else {
        //   data.scheduleOfferingId = this.scheduleOfferingId
        // }
        // this.utility.updateLoader(true);
        // this.httpProvider.http
        //   .commonService({ url, data, zenLearn: true })
        //   .subscribe(
        //     (res: any) => {
        //       if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details)) {
        //         this.ratingData = res.details.responseList.trainingsList
        //         //console.log(this.ratingData)
        //         this.ratingData.forEach(element => {
        //           element.show = true
        //         });
        //         this.utility.updateLoader(false);
        //       }
        //     },
        //     err => {
        //       this.utility.updateLoader(false);
        //       // this.errorMsg = Constants["erroMessageFor No Data"]
        //     }
        //   );
        //console.log(this.courseData)
        this.ratingData.push(this.courseData);
    };
    ZenLearnRatingPage.prototype._submitRating = function (selecetdItem) {
        var _this = this;
        this.startlimit++;
        this.endlimit++;
        var url = "addRating";
        var data = {
            "scheduleOfferingId": selecetdItem.scheduleOfferingId,
            "ratingId": this.selectedStar - 1,
            "itemId": this.ratingData[0].itemId
        };
        if (!this.utility.isEmptyOrNullOrUndefined(this.comment))
            data.comment = this.comment;
        else
            data.comment = "";
        this.utility.updateLoader(true);
        this.httpProvider.http
            .commonService({ url: url, data: data, zenLearn: true })
            .subscribe(function (res) {
            if (!_this.utility.isEmptyOrNullOrUndefined(res) && !_this.utility.isEmptyOrNullOrUndefined(res.details)) {
                _this.utility.updateLoader(false);
                _this.comment = "";
                _this.selectedStar = 4;
                _this.utility.presentAlert('Rating submitted successfully').then(function () {
                    _this.navCtrl.pop();
                });
            }
        }, function (err) {
            _this.utility.updateLoader(false);
            // this.errorMsg = Constants["erroMessageFor No Data"]
        });
    };
    ZenLearnRatingPage.prototype._rateStar = function (selectedStar) {
        this.selectedStar = selectedStar + 1;
    };
    ZenLearnRatingPage.prototype.popPage = function () {
        this.navCtrl.pop();
    };
    ZenLearnRatingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-zen-learn-rating',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\zen-learn-rating\zen-learn-rating.html"*/'<!--\n  Generated template for the ZenLearnRatingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Rating</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <div *ngFor="let item of ratingData | slice:startlimit:endlimit;">\n        <div class="traning-rating">\n            <span class="traning-type">{{item?.learningType}}</span>\n            <span class="traning-desc">{{item?.title}} </span>\n\n        </div>\n        <!-- rating section -->\n        <div class="padding12-8">\n            <div class="rating-title">Rating</div>\n            <div class="flex-space-btwn padding4per rating-card">\n                <span *ngFor="let subItem of [1,2,3,4,5]" (click)="_rateStar(subItem)">\n          <ion-icon *ngIf="subItem < selectedStar" name="star" class="filledstar-size"\n            [ngClass]="{\'yellow\':selectedStar}">\n          </ion-icon>\n          <img *ngIf="subItem >= selectedStar" class="emptystar-size" src="assets/imgs/emptyStar.svg" />\n        </span>\n            </div>\n            <div class="review-title">Review</div>\n            <textarea class="textarea" [(ngModel)]="comment" rows="10" cols="60"></textarea>\n        </div>\n        <div class="sumbit-section">\n            <div class="later-section" (click)="popPage()">Not now later</div>\n            <button ion-button round (click)="_submitRating(item)">Submit</button>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\zen-learn-rating\zen-learn-rating.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */]])
    ], ZenLearnRatingPage);
    return ZenLearnRatingPage;
}());

//# sourceMappingURL=zen-learn-rating.js.map

/***/ })

});
//# sourceMappingURL=121.js.map