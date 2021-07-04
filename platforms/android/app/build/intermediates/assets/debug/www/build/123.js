webpackJsonp([123],{

/***/ 1401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListPageModule", function() { return CourseListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_course_list__ = __webpack_require__(1823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_tooltips__ = __webpack_require__(281);
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
                __WEBPACK_IMPORTED_MODULE_2__view_course_list__["a" /* ViewCourseListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_course_list__["a" /* ViewCourseListPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_tooltips__["a" /* TooltipsModule */]
            ],
        })
    ], CourseListPageModule);
    return CourseListPageModule;
}());

//# sourceMappingURL=view-course-list.module.js.map

/***/ }),

/***/ 1823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewCourseListPage; });
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
var ViewCourseListPage = /** @class */ (function () {
    function ViewCourseListPage(navCtrl, utility, httpProvider, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.startList = 0;
        this.slidePerView = "1.2";
        this.infiniteScroll = '';
        this.start = 0;
        this.end = 10;
        this.loadedData = [];
        this.courseData = [];
        this.learningMode = 'Online,V Learn,Classroom';
        this.learningType = 'Technical,Behavioural';
        this.item_types = [];
        this.itemType = "";
        this.isFilterApplied = false;
        this.isDataUnAvailable = false;
        this.courseType = this.navParams.get('courseType');
        this.courseTitle = this.navParams.get('listTitle');
        this.listType = this.navParams.get('listType');
        this.viewAllCourses();
    }
    // **********Method for fetching practice list**************/
    ViewCourseListPage.prototype.viewAllCourses = function () {
        var _this = this;
        var url = "viewAllCourses";
        var data = {
            offeringType: "RECOMMENDED",
            learningType: this.learningType,
            learningMode: this.learningMode,
            recommendationType: this.listType,
            start: this.start,
            end: this.end,
            itemType: this.itemType,
            item_types: this.item_types
        };
        if (this.isFilterApplied) {
            data.learning_Types = data.learningType.split(',');
            data.learning_modes = data.learningMode.split(',');
        }
        if (this.courseData.length == 0) {
            this.utility.updateLoader(true);
        }
        this.httpProvider.http
            .commonService({ url: url, data: data, zenLearn: true })
            .subscribe(function (res) {
            if (!_this.utility.isEmptyOrNullOrUndefined(res) && !_this.utility.isEmptyOrNullOrUndefined(res.details)) {
                // this.allCourseList = res.details.responseList;
                _this.isDataUnAvailable = false;
                _this.allCourseList = res.details.responseList;
                _this.dapCourseList = _this.allCourseList.dapCourses;
                _this.interestBased = _this.allCourseList.interestBasedCourses;
                _this.poppularPeer = _this.allCourseList.popularPeerCourses;
                _this.ZensarPoppular = _this.allCourseList.zensarPopularCourses;
                if (_this.dapCourseList != null) {
                    _this.loadedData = _this.dapCourseList;
                }
                else if (_this.interestBased != null) {
                    _this.loadedData = _this.interestBased;
                }
                else if (_this.poppularPeer != null) {
                    _this.loadedData = _this.poppularPeer;
                }
                else if (_this.ZensarPoppular != null) {
                    _this.loadedData = _this.ZensarPoppular;
                }
                _this.courseData = _this.courseData.concat(_this.loadedData);
                _this.utility.updateLoader(false);
                if (!_this.infiniteScroll) {
                    if (!_this.loadedData || _this.loadedData.length == 0) {
                        _this.isDataUnAvailable = true;
                    }
                }
                if (_this.infiniteScroll) {
                    _this.infiniteScroll.complete();
                    _this.infiniteScroll = "";
                }
            }
        }, function (err) {
            _this.utility.updateLoader(false);
            _this.utility.showAlert('ZenLearn-DashBoard', __WEBPACK_IMPORTED_MODULE_5__app_constants__["a" /* Constants */]["erroMessageFor No Practice Data"]);
        });
    };
    ViewCourseListPage.prototype.likeDislike = function (clickType, index, value, courseId) {
        var _this = this;
        var actionFlag;
        if (clickType == 'like') {
            if (value == 1) {
                this.loadedData[index].isLike = 0;
                actionFlag = 0;
            }
            else if (value == 0) {
                this.loadedData[index].isLike = 1;
                actionFlag = 1;
            }
            if (value == -1) {
                this.loadedData[index].isLike = 1;
                actionFlag = 1;
            }
        }
        else if (clickType == 'dislike') {
            if (value == -1) {
                this.loadedData[index].isLike = 0;
                actionFlag = 0;
            }
            else if (value == 0) {
                this.loadedData[index].isLike = -1;
                actionFlag = -1;
            }
            if (value == 1) {
                this.loadedData[index].isLike = -1;
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
    ViewCourseListPage.prototype.loadCourses = function (infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        this.start = this.end;
        this.end = this.end + 10;
        this.viewAllCourses();
    };
    ViewCourseListPage.prototype.offeringDetails = function (selectedCourse) {
        //console.log(selectedCourse)
        this.navCtrl.push("OfferingDetailsPage", { selectedCourse: selectedCourse });
    };
    ViewCourseListPage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var filteredData = this.filteredData;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__ZenLearn_zelearn_popover_zelearn_popover__["a" /* ZelearnPopoverPage */], { data: { filteredData: filteredData, offeringType: 'Recommended', showAllFilters: false, isComingFromRecommendations: true } }, { cssClass: 'zenLearn-popover' });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (data) {
            if (!_this.utility.isEmptyOrNullOrUndefined(data)) {
                _this.filteredData = data;
                _this.start = 0;
                _this.end = 10;
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
                _this.courseData = [];
                _this.isFilterApplied = true;
                _this.viewAllCourses();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* Slides */])
    ], ViewCourseListPage.prototype, "slides", void 0);
    ViewCourseListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-view-course-list",template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\view-course-list\view-course-list.html"*/'<!--\n  Generated template for the CourseListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{courseTitle}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <img src="assets/imgs/dapFilterIcon.svg" />\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="allCourseList!= null && allCourseList?.length != 0 ">\n    <!-- Based on Interest -->\n    <!-- <ion-label class="cource-title">{{courseTitle}}</ion-label> -->\n  \n      <!-- learning-card -->\n      <div *ngFor="let item of courseData; let i = index;">\n        <ion-card class="ion-card" (click)="offeringDetails(item)">\n          <div class="card-container">\n            <div class="card-header {{item.method}}">\n              <div class="titleName">\n                <img *ngIf="item.method==\'\' || item.method==null" src="assets/zenLearn-imgs/dap-icon3.svg" />\n                <img *ngIf="item.method==\'V Learn\'" src="assets/imgs/virtual-icon.svg" />\n                <img *ngIf="item.method==\'Classroom\'" src="assets/imgs/classroom-icon.svg" />\n                <img *ngIf="item.method==\'Online\'" src="assets/imgs/online-icon.svg" />\n              </div>\n              <div class="subTitle">{{item?.title}} </div>\n            </div>\n            <div class="card-data">\n              <div class="align-cont-cent padding-top3per fontp9em" *ngIf="item?.facility">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnlocation.svg" /></span>\n               \n                <span class="color-gray ftWT" *ngIf="item?.itemType && item?.itemType != \'CLASSROOM\'">{{item?.facility}} - {{item?.itemType | titlecase}}</span>\n                <span class="color-gray ftWT" *ngIf="item?.itemType && item?.itemType == \'CLASSROOM\'">{{item?.facility}}</span>\n                <span class="color-gray ftWT" *ngIf="!item?.itemType">{{item?.facility}}</span>\n                <!-- {{item.facility}} -->\n              </div>\n              <div class="flex fontp9em padding-top3per color-gray">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnCredit_Hours.svg" /></span>\n                <span> Credit Hrs : {{item?.creditHours}}</span>\n              </div>\n            \n\n              <div class="flex padding-top3per" *ngIf="item?.endDate != \'\' || item?.endTime != \'\'">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnCalender.svg" /> </span>\n                <div class="column fontp9em heading-color">\n                  <span class="padding-bottom2per" *ngIf="item.startDate">{{item.startDate}} To\n                    {{item.endDate}}</span>\n                  <span class="color-gray" *ngIf="item.startTime">{{item.startTime}} To {{item.endTime}}</span>\n                  <span *ngIf="item?.completionDate">{{item?.completionDate}}</span>\n                </div>\n              </div>\n              <div class="flex padding-top3per" *ngIf="item?.endDate == \'\' || item?.endTime == \'\'">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnCalender.svg" /></span>\n                <span class="column fontp9em heading-color ">\n                  <span class="padding-bottom4per">{{item?.startDate}}</span>\n                </span>\n              </div>\n\n              <div class="flex fontp9em padding-top3per color-gray" *ngIf="item?.financialYear">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnCredit_Hours.svg" /></span>\n                <span>{{item?.financialYear}}</span>\n              </div>\n              <div *ngIf="interestBased != null" class="practice-names">\n                <span class="{{item.method}}">{{item?.practiceName}}</span>\n                <span class="{{item.method}}">{{item?.topicName}}</span>\n                \n              </div>\n              <div *ngIf="ZensarPoppular != null" class="practice-names">\n                <span class="{{item.method}}">{{item?.practiceName}}</span>\n                <span class="{{item.method}}" *ngIf="item?.topicName">{{item?.topicName}}</span>\n                \n              </div>\n              <div class="like-dislike-wrapper">\n                <div class="like" (click)="likeDislike(\'like\',i,item?.isLike,item?.itemId);$event.stopPropagation()">\n                  <img class="" *ngIf="item?.isLike==0 || item?.isLike==-1" src="assets/zenLearn-imgs/like.svg"\n                  onerror="this.src=\'./assets/imgs/logo.png\'" />\n                  <img class="" *ngIf="item?.isLike==1" src="assets/zenLearn-imgs/likeBlue.svg"\n                  onerror="this.src=\'./assets/imgs/logo.png\'" />\n                  \n                </div>\n                <div class="dislike" (click)="likeDislike(\'dislike\',i,item?.isLike,item?.itemId);$event.stopPropagation()">\n                  <img class="" *ngIf="item?.isLike==0 || item?.isLike==1" src="assets/zenLearn-imgs/disLike.svg"\n                  onerror="this.src=\'./assets/imgs/logo.png\'" />\n                  <img class="" *ngIf="item?.isLike ==-1" src="assets/zenLearn-imgs/disLikeBlue.svg"\n                  onerror="this.src=\'./assets/imgs/logo.png\'" />\n                  \n                </div>\n              </div>\n            </div>\n\n\n          </div>\n        </ion-card>\n        </div>\n        <div *ngIf="isDataUnAvailable" class="ftWT no-data-msg"> No Data Available </div>\n\n       \n\n              \n  </div>\n  <ion-infinite-scroll (ionInfinite)="loadCourses($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\view-course-list\view-course-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */]])
    ], ViewCourseListPage);
    return ViewCourseListPage;
}());

//# sourceMappingURL=view-course-list.js.map

/***/ })

});
//# sourceMappingURL=123.js.map