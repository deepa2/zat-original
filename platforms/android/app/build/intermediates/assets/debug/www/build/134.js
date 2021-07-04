webpackJsonp([134],{

/***/ 1434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListPageModule", function() { return CourseListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_list__ = __webpack_require__(1856);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CourseListPageModule = /** @class */ (function () {
    function CourseListPageModule() {
    }
    CourseListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__course_list__["a" /* CourseListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__course_list__["a" /* CourseListPage */]),
            ],
        })
    ], CourseListPageModule);
    return CourseListPageModule;
}());

//# sourceMappingURL=course-list.module.js.map

/***/ }),

/***/ 1856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ZenLearn_zelearn_popover_zelearn_popover__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_constants__ = __webpack_require__(37);
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
 * Generated class for the CourseListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CourseListPage = /** @class */ (function () {
    function CourseListPage(navCtrl, utility, httpProvider, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.offeringList = [];
        this.learningMode = "Classroom,Online,V Learn";
        this.resultPending = false;
        this.startList = 0;
        this.endlist = 10;
        this.isHistoryData = false;
        this.item_types = [];
        this.itemType = "";
        this.isLearningHistory = false;
        this.isFilterApplied = false;
        this.offeringType = this.navParams.get("selectedCourse");
        this.filterYear = this.navParams.get("filterYear");
        console.log(this.offeringType);
        if (this.offeringType == 'Recommendations') {
            this.recomdationType = 'BasedOnDap';
            this.offeringType = "Recommended";
            this.pagetitle = "Course List";
        }
        else {
            this.recomdationType = "";
            this.pagetitle = "Course List";
        }
        if (this.offeringType == 'enrolled') {
            this.pagetitle = "Enrolled List";
        }
        this.learningType = this.navParams.get("learningType");
        if (!this.learningType) {
            this.learningType = "Technical,Behavioural";
        }
        // Page title change
        if (this.filterYear) {
            this.pagetitle = this.pagetitle + (" - FY" + this.filterYear);
        }
        this.showAllFilters = this.navParams.get("showAllFilters");
        this.getOfferingList(this.learningType, this.learningMode);
    }
    CourseListPage.prototype.getOfferingList = function (learningType, learningMode) {
        var _this = this;
        var url;
        var data;
        if (!this.showAllFilters) {
            var learningTypeList = void 0, learningModeList = void 0;
            url = "viewAllScheduledOfferings";
            data = {
                recommendationType: this.recomdationType,
                offeringType: this.offeringType,
                itemType: this.itemType,
                start: this.startList,
                end: this.endlist,
                item_types: this.item_types,
                learningType: learningType,
                learningMode: learningMode
            };
            if (this.isFilterApplied) {
                data.learning_Types = learningType.split(',');
                data.learning_modes = learningMode.split(',');
            }
        }
        else {
            this.isLearningHistory = true;
            if (this.filterYear) {
                url = "learningHistory";
                data = {
                    type: this.offeringType,
                    start: this.startList,
                    end: this.endlist,
                    itemType: this.itemType,
                    filterYear: this.filterYear
                };
            }
            else {
                url = "learningHistory";
                data = {
                    type: this.offeringType,
                    start: this.startList,
                    end: this.endlist,
                    itemType: this.itemType
                };
            }
            if (this.isFilterApplied) {
                if (!this.utility.isEmptyOrNullOrUndefined(learningType)) {
                    data.type = learningType;
                }
            }
            if (learningMode) {
                data.learningMode = learningMode;
            }
            else {
                data.learningMode = "Classroom,Online,V Learn";
            }
            this.isHistoryData = true;
        }
        if (this.offeringList.length == 0) {
            this.utility.updateLoader(true);
        }
        this.httpProvider.http.commonService({ url: url, data: data, zenLearn: true })
            .subscribe(function (res) {
            if (!_this.utility.isEmptyOrNullOrUndefined(res) && !_this.utility.isEmptyOrNullOrUndefined(res.details)) {
                _this.offeringData = res.details.responseList;
                if (_this.offeringData !== null && _this.offeringData.length > 0) {
                    _this.resultPending = false;
                    _this.offeringList = _this.offeringList.concat(_this.offeringData);
                }
                else {
                    if (!_this.infinteScroll) {
                        _this.resultPending = true;
                    }
                    else if (_this.offeringList.length == 0 && _this.infinteScroll) {
                        _this.resultPending = true;
                    }
                    // this.utility.showAlert('Course-List', Constants["erroMessageFor No Data"])
                }
                _this.utility.updateLoader(false);
            }
            else {
                _this.utility.updateLoader(false);
                _this.resultPending = true;
                _this.utility.showAlert('Course-List', __WEBPACK_IMPORTED_MODULE_5__app_constants__["a" /* Constants */]["erroMessageFor No Data"]);
            }
        }, function (err) {
            _this.utility.updateLoader(false);
            _this.utility.showAlert('Course-List', __WEBPACK_IMPORTED_MODULE_5__app_constants__["a" /* Constants */]["erroMessageFor No Data"]);
            // this.errorMsg = Constants["erroMessageFor No Data"]
        });
    };
    CourseListPage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var filteredData = this.filteredData;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__ZenLearn_zelearn_popover_zelearn_popover__["a" /* ZelearnPopoverPage */], { data: { filteredData: filteredData, offeringType: this.offeringType, showAllFilters: this.showAllFilters } }, { cssClass: 'zenLearn-popover' });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (data) {
            if (!_this.utility.isEmptyOrNullOrUndefined(data)) {
                console.log(data);
                _this.filteredData = data;
                _this.startList = 0;
                var learningType_1 = [];
                var learningMode_1 = [];
                var subtypes = [];
                _this.itemType = '';
                _this.item_types = [];
                data.filterArray.learningType.forEach(function (element) {
                    if (element.checked == true)
                        learningType_1.push(element.value);
                });
                data.filterArray.learningMode.forEach(function (element) {
                    if (element.checked == true)
                        learningMode_1.push(element.value);
                });
                data.filterArray.offeringType.forEach(function (element) {
                    if (element.checked == true)
                        _this.offeringType = element.value;
                });
                if (data.filterArray.SubTypes.length > 0) {
                    subtypes = data.filterArray.SubTypes.filter(function (data) {
                        if (data.checked) {
                            _this.item_types.push(data.value);
                        }
                    });
                    _this.itemType = _this.item_types.toString();
                }
                else {
                    _this.item_types = [];
                    _this.itemType = "";
                }
                _this.learningType = learningType_1.toString();
                _this.learningMode = learningMode_1.toString();
                _this.offeringList = [];
                _this.isFilterApplied = true;
                _this.getOfferingList(_this.learningType, _this.learningMode);
            }
        });
    };
    CourseListPage.prototype.offeringDetails = function (selectedCourse) {
        //console.log(selectedCourse)
        this.navCtrl.push("OfferingDetailsPage", { selectedCourse: selectedCourse, isHistoryData: this.isHistoryData });
    };
    CourseListPage.prototype.likeDislike = function (clickType, index, value, courseId) {
        var _this = this;
        var actionFlag;
        if (clickType == 'like') {
            if (value == 1) {
                this.offeringList[index].isLike = 0;
                actionFlag = 0;
            }
            else if (value == 0) {
                this.offeringList[index].isLike = 1;
                actionFlag = 1;
            }
            if (value == -1) {
                this.offeringList[index].isLike = 1;
                actionFlag = 1;
            }
        }
        else if (clickType == 'dislike') {
            if (value == -1) {
                this.offeringList[index].isLike = 0;
                actionFlag = 0;
            }
            else if (value == 0) {
                this.offeringList[index].isLike = -1;
                actionFlag = -1;
            }
            if (value == 1) {
                this.offeringList[index].isLike = -1;
                actionFlag = -1;
            }
        }
        var url = "likeOrDislike";
        var data = {
            courseId: courseId,
            action: actionFlag
        };
        this.utility.updateLoader(true);
        this.httpProvider.http
            .commonService({ url: url, data: data, zenLearn: true })
            .subscribe(function (res) {
            _this.utility.updateLoader(false);
        }, function (err) {
            _this.utility.updateLoader(false);
            _this.utility.showAlert('ZenLearn-DashBoard', __WEBPACK_IMPORTED_MODULE_5__app_constants__["a" /* Constants */]["erroMessageFor No Data"]);
        });
    };
    CourseListPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        // if (this.resultPending) {
        this.infinteScroll = infiniteScroll;
        setTimeout(function () {
            _this.startList = _this.endlist;
            _this.endlist = _this.endlist + 10;
            // this.resultPending = false
            _this.getOfferingList(_this.learningType, _this.learningMode);
            infiniteScroll.complete();
        }, 1000);
        // }
    };
    CourseListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-course-list",template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\course-list\course-list.html"*/'<!--\n  Generated template for the CourseListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{pagetitle}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <img src="assets/imgs/dapFilterIcon.svg" />\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="offeringList!= null && offeringList?.length != 0 ">\n    <ion-card class="ion-card" *ngFor="let item of offeringList let i = index" (click)="offeringDetails(item)">\n      <div class="card-container">\n        <!-- <div class="titleName">{{item?.learningType}}</div> -->\n        <!-- <div class="titleName">{{item?.method}}</div>\n        <div class="subTitle">{{item?.title}}</div> -->\n        <div class="card-header {{item.method}}">\n          <div class="titleName">\n            <img *ngIf="item.method==\'\' || item.method==null" src="assets/zenLearn-imgs/dap-icon3.svg" />\n            <img *ngIf="item.method==\'V Learn\'" src="assets/imgs/virtual-icon.svg" />\n            <img *ngIf="item.method==\'Classroom\'" src="assets/imgs/classroom-icon.svg" />\n            <img *ngIf="item.method==\'Online\'" src="assets/imgs/online-icon.svg" />\n          </div>\n          <div class="subTitle">{{item?.title}}</div>\n        </div>\n        <div class="card-data">\n          <div class="align-cont-cent padding-top3per fontp9em" *ngIf="item?.facility">\n            <span class="padding-right8"><img src="assets/imgs/zenLearnlocation.svg" /></span>\n            \n                <span class="color-gray ftWT" *ngIf="item?.itemType && item?.itemType != \'CLASSROOM\'">{{item?.facility}} - {{item?.itemType | titlecase}}</span>\n                <span class="color-gray ftWT" *ngIf="item?.itemType && item?.itemType == \'CLASSROOM\'">{{item?.facility}}</span>\n                <span class="color-gray ftWT" *ngIf="!item?.itemType">{{item?.facility}}</span>\n            <!-- {{item.facility}} -->\n          </div>\n          <div class="flex fontp9em padding-top3per color-gray">\n            <span class="padding-right8"><img src="assets/imgs/zenLearnCredit_Hours.svg" /></span>\n            <span> Credit Hrs : {{item?.creditHours}}</span>\n          </div>\n          <div class="flex padding-top3per" *ngIf="item?.endDate != \'\' || item?.endTime != \'\'">\n            <span class="padding-right8"><img src="assets/imgs/zenLearnCalender.svg" /></span>\n            <span class="column fontp9em heading-color ">\n              <span class="padding-bottom4per">{{item?.startDate}} To {{item?.endDate}}</span>\n              <span class="color-gray">{{item?.startTime}} To\n                {{item?.endTime}}</span></span>\n          </div>\n          <div class="flex padding-top3per" *ngIf="item?.endDate == \'\' || item?.endTime == \'\'">\n            <span class="padding-right8"><img src="assets/imgs/zenLearnCalender.svg" /></span>\n            <span class="column fontp9em heading-color ">\n              <span class="padding-bottom4per">{{item?.startDate}}</span>\n              <span *ngIf="(item?.type ==\'Technical\' || item?.type ==\'Behavioural\')" class="column fontp9em heading-color">\n                <span class="padding-bottom4per">{{item?.completionDate}}</span>\n                </span>\n            </span>\n          </div>\n\n          <div class="flex fontp9em padding-top3per color-gray" *ngIf="item?.financialYear">\n            <span class="padding-right8"><img src="assets/imgs/zenLearnCredit_Hours.svg" /></span>\n            <span>{{item?.financialYear}}</span>\n          </div>\n          \n          <div class="like-dislike-wrapper" *ngIf="!isLearningHistory">\n            <div class="like" (click)="likeDislike(\'like\',i,item?.isLike,item?.itemId);$event.stopPropagation()">\n              <img class="" *ngIf="item?.isLike==0 || item?.isLike==-1" src="assets/zenLearn-imgs/like.svg"\n              onerror="this.src=\'./assets/imgs/logo.png\'" />\n              <img class="" *ngIf="item?.isLike==1" src="assets/zenLearn-imgs/likeBlue.svg"\n              onerror="this.src=\'./assets/imgs/logo.png\'" />\n              \n            </div>\n            <div class="dislike" (click)="likeDislike(\'dislike\',i,item?.isLike,item?.itemId);$event.stopPropagation()">\n              <img class="" *ngIf="item?.isLike==0 || item?.isLike==1" src="assets/zenLearn-imgs/disLike.svg"\n              onerror="this.src=\'./assets/imgs/logo.png\'" />\n              <img class="" *ngIf="item?.isLike ==-1" src="assets/zenLearn-imgs/disLikeBlue.svg"\n              onerror="this.src=\'./assets/imgs/logo.png\'" />\n              \n            </div>\n          </div>\n        </div>\n\n\n      </div>\n    </ion-card>\n    <ion-infinite-scroll threshold="300px" (ionInfinite)="loadData($event)">\n      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data...">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    \n  </div>\n  <div class="nodata" *ngIf="resultPending">No data Available</div>\n</ion-content> '/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\course-list\course-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */]])
    ], CourseListPage);
    return CourseListPage;
}());

//# sourceMappingURL=course-list.js.map

/***/ })

});
//# sourceMappingURL=134.js.map