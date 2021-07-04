webpackJsonp([136],{

/***/ 1390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListPageModule", function() { return CourseListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_course_list__ = __webpack_require__(1812);
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
                __WEBPACK_IMPORTED_MODULE_2__all_course_list__["a" /* AllCourseListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__all_course_list__["a" /* AllCourseListPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_tooltips__["a" /* TooltipsModule */]
            ],
        })
    ], CourseListPageModule);
    return CourseListPageModule;
}());

//# sourceMappingURL=all-course-list.module.js.map

/***/ }),

/***/ 1812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllCourseListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constants__ = __webpack_require__(37);
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
var AllCourseListPage = /** @class */ (function () {
    function AllCourseListPage(navCtrl, utility, httpProvider, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.startList = 0;
        this.dapCourseList = [];
        this.interestBased = [];
        this.poppularPeer = [];
        this.ZensarPoppular = [];
        this.slidePerView = "1.2";
        this.type = 'All';
        this.tooltipEvent = 'click';
        this.showArrow = true;
        this.duration = 5500;
        this.showInterestLoader = true;
        this.showDapLoader = true;
        this.showPeerLoader = true;
        this.showZensarLoader = true;
        this.mainlist = [];
        this.viewAllCourses('BasedOnInterest');
        this.viewAllCourses('AmongPeers');
        this.viewAllCourses('PopularInZensar');
        this.viewAllCourses('BasedOnDap');
    }
    // **********Method for fetching practice list**************/
    AllCourseListPage.prototype.viewAllCourses = function (recType) {
        var _this = this;
        var url = "viewAllCourses";
        var data = {
            offeringType: "RECOMMENDED",
            learningType: "Technical,Behavioural",
            learningMode: "Online,V Learn,Classroom",
            recommendationType: recType,
            itemType: "",
            item_types: [],
            learning_Types: ["Technical", "Behavioural"],
            learning_modes: ["Online", "Classroom", "V Learn"],
            start: 0,
            end: 10
        };
        // this.utility.updateLoader(true);
        this.httpProvider.http
            .commonService({ url: url, data: data, zenLearn: true })
            .subscribe(function (res) {
            if (!_this.utility.isEmptyOrNullOrUndefined(res) && !_this.utility.isEmptyOrNullOrUndefined(res.details)) {
                _this.allCourseList = res.details.responseList;
                if (recType == "AmongPeers") {
                    _this.poppularPeer = _this.allCourseList.popularPeerCourses;
                    _this.showPeerLoader = false;
                }
                else if (recType == "PopularInZensar") {
                    _this.ZensarPoppular = _this.allCourseList.zensarPopularCourses;
                    _this.showZensarLoader = false;
                }
                else if (recType == "BasedOnDap") {
                    _this.dapCourseList = _this.allCourseList.dapCourses;
                    _this.showDapLoader = false;
                }
                else if (recType == "BasedOnInterest") {
                    _this.interestBased = _this.allCourseList.interestBasedCourses;
                    _this.showInterestLoader = false;
                }
                _this.dapBasedToolTip = _this.allCourseList.dapCourses_tooltip;
                _this.peerBasedToolTip = _this.allCourseList.popularPeerCourses_tooltip;
                _this.prefrrenceBasedToolTip = _this.allCourseList.interestBasedCourses_tooltip;
                _this.popularBasedToolTip = _this.allCourseList.zensarPopularCourses_tooltip;
                // this.utility.updateLoader(false);
            }
        }, function (err) {
            _this.utility.updateLoader(false);
            _this.utility.showAlert('ZenLearn-DashBoard', __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Constants */]["erroMessageFor No Practice Data"]);
        });
    };
    AllCourseListPage.prototype.likeDislike = function (clickType, index, value, listname, courseId) {
        var _this = this;
        // •******************•
        var actionFlag;
        var listnames;
        if (listname == "AmongPeers") {
            listnames = this.poppularPeer;
        }
        else if (listname == "PopularInZensar") {
            listnames = this.ZensarPoppular;
        }
        else if (listname == "BasedOnDap") {
            listnames = this.dapCourseList;
        }
        else if (listname == "BasedOnInterest") {
            listnames = this.interestBased;
        }
        if (clickType == 'like') {
            if (value == 1) {
                listnames[index].isLike = 0;
                actionFlag = 0;
            }
            else if (value == 0) {
                listnames[index].isLike = 1;
                actionFlag = 1;
            }
            if (value == -1) {
                listnames[index].isLike = 1;
                actionFlag = 1;
            }
        }
        else if (clickType == 'dislike') {
            if (value == -1) {
                listnames[index].isLike = 0;
                actionFlag = 0;
            }
            else if (value == 0) {
                listnames[index].isLike = -1;
                actionFlag = -1;
            }
            if (value == 1) {
                listnames[index].isLike = -1;
                actionFlag = -1;
            }
        }
        if (listname == "AmongPeers") {
            this.poppularPeer = listnames;
        }
        else if (listname == "PopularInZensar") {
            this.ZensarPoppular = listnames;
        }
        else if (listname == "BasedOnDap") {
            this.dapCourseList = listnames;
        }
        else if (listname == "BasedOnInterest") {
            this.interestBased = listnames;
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
            if (!_this.utility.isEmptyOrNullOrUndefined(res) && !_this.utility.isEmptyOrNullOrUndefined(res.details)) {
                // this.zenLearnData = res.details.responseList;
            }
            _this.utility.updateLoader(false);
        }, function (err) {
            _this.utility.updateLoader(false);
            _this.utility.showAlert('ZenLearn-DashBoard', __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Constants */]["erroMessageFor No Data"]);
        });
    };
    AllCourseListPage.prototype.offeringDetails = function (selectedCourse) {
        //console.log(selectedCourse)
        this.navCtrl.push("OfferingDetailsPage", { selectedCourse: selectedCourse });
    };
    AllCourseListPage.prototype.getSpecificList = function (type, title, listype) {
        this.navCtrl.push("ViewCourseListPage", { 'courseType': type, 'listTitle': title, 'listType': listype });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* Slides */])
    ], AllCourseListPage.prototype, "slides", void 0);
    AllCourseListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-all-course-list",template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\all-course-list\all-course-list.html"*/'<!--\n  Generated template for the CourseListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>More Recommendations</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <!-- Based on Interest -->\n    <div class="title-con">\n      <div class="course-title">\n        <img src="assets/zenLearn-imgs/based-on-interest.svg" />\n        Based on your preferences\n        <ion-icon *ngIf="prefrrenceBasedToolTip" [tooltip]="prefrrenceBasedToolTip" positionV="bottom" hideOthers="true"\n          [arrow]="showArrow" [event]="tooltipEvent" [duration]="duration" class="showToolTip" color="dark"\n          type="button">\n          <img class="info-icon" src="assets/imgs/tooltipIcon.svg" />\n        </ion-icon>\n      </div>\n      <div class="view-all" *ngIf="interestBased?.length!=0"\n        (click)="getSpecificList(\'Recommended\',\'Based on your preferences\',\'BasedOnInterest\' )">View All</div>\n    </div>\n    <ion-label class="nodata" *ngIf="interestBased?.length==0 && !showInterestLoader">\n      No available recommendations\n    </ion-label>\n    <div class="loader" *ngIf="showInterestLoader">\n      <img src="assets/zenLearn-imgs/sub-loader.gif" />\n    </div>\n    <ion-slides class="height-auto" [slidesPerView]="slidePerView">\n      <!-- learning-card -->\n      <ion-slide *ngFor="let item of interestBased; let i = index;">\n        <ion-card class="ion-card" (click)="offeringDetails(item)">\n          <div class="card-container">\n            <div class="card-header {{item.method}}">\n              <div class="titleName">\n                <img *ngIf="item.method==\'\' || item.method==null" src="assets/zenLearn-imgs/dap-icon3.svg" />\n                <img *ngIf="item.method==\'V Learn\'" src="assets/imgs/virtual-icon.svg" />\n                <img *ngIf="item.method==\'Classroom\'" src="assets/imgs/classroom-icon.svg" />\n                <img *ngIf="item.method==\'Online\'" src="assets/imgs/online-icon.svg" />\n              </div>\n              <div class="subTitle">{{item?.title}}</div>\n            </div>\n            <div class="card-data">\n              <div class="align-cont-cent padding-top3per fontp9em" *ngIf="item?.facility">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnlocation.svg" /></span>\n                <span class="color-gray ftWT" *ngIf="item?.itemType && item?.itemType != \'CLASSROOM\'">{{item?.facility}} - {{item?.itemType | titlecase}}</span>\n                <span class="color-gray ftWT" *ngIf="item?.itemType && item?.itemType == \'CLASSROOM\'">{{item?.facility}}</span>\n                <span class="color-gray ftWT" *ngIf="!item?.itemType">{{item?.facility}}</span>\n                <!-- {{item.facility}} -->\n              </div>\n              <div class="flex fontp9em padding-top3per color-gray">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnCredit_Hours.svg" /></span>\n                <span> Credit Hrs : {{item?.creditHours}}</span>\n              </div>\n              <div class="flex padding-top3per" *ngIf="item?.endDate != \'\' || item?.endTime != \'\'">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnCalender.svg" /></span>\n                <span class="column fontp9em heading-color ">\n                  <span class="padding-bottom4per">{{item?.startDate}} To {{item?.endDate}}</span>\n                  <span class="color-gray">{{item?.startTime}} To\n                    {{item?.endTime}}</span></span>\n              </div>\n              <div class="flex padding-top3per" *ngIf="item?.endDate == \'\' || item?.endTime == \'\'">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnCalender.svg" /></span>\n                <span class="column fontp9em heading-color ">\n                  <span class="padding-bottom4per">{{item?.startDate}}</span>\n                </span>\n              </div>\n\n              <div class="flex fontp9em padding-top3per color-gray" *ngIf="item?.financialYear">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnCredit_Hours.svg" /></span>\n                <span>{{item?.financialYear}}</span>\n              </div>\n              <div class="practice-names">\n                <span class="{{item.method}}">{{item?.practiceName}}</span>\n                <span class="{{item.method}}">{{item?.topicName}}</span>\n\n              </div>\n              <div class="like-dislike-wrapper">\n                <div class="like"\n                  (click)="likeDislike(\'like\',i,item?.isLike,\'BasedOnInterest\',item?.itemId);$event.stopPropagation()">\n                  <img class="" *ngIf="item?.isLike==0 || item?.isLike==-1" src="assets/zenLearn-imgs/like.svg"\n                    onerror="this.src=\'./assets/imgs/logo.png\'" />\n                  <img class="" *ngIf="item?.isLike==1" src="assets/zenLearn-imgs/likeBlue.svg"\n                    onerror="this.src=\'./assets/imgs/logo.png\'" />\n\n                </div>\n                <div class="dislike"\n                  (click)="likeDislike(\'dislike\',i,item?.isLike,\'BasedOnInterest\',item?.itemId);$event.stopPropagation()">\n                  <img class="" *ngIf="item?.isLike==0 || item?.isLike==1" src="assets/zenLearn-imgs/disLike.svg"\n                    onerror="this.src=\'./assets/imgs/logo.png\'" />\n                  <img class="" *ngIf="item?.isLike ==-1" src="assets/zenLearn-imgs/disLikeBlue.svg"\n                    onerror="this.src=\'./assets/imgs/logo.png\'" />\n\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n        </ion-card>\n      </ion-slide>\n\n    </ion-slides>\n\n\n    <!-- Popular among peer -->\n    <div class="title-con">\n      <div class="course-title">\n        <img src="assets/zenLearn-imgs/popular-peer.svg" />\n        Popular amongst peers\n        <ion-icon *ngIf="peerBasedToolTip" [tooltip]="peerBasedToolTip" positionV="bottom" hideOthers="true"\n          [arrow]="showArrow" [event]="tooltipEvent" [duration]="duration" class="showToolTip" color="dark"\n          type="button">\n          <img class="info-icon" src="assets/imgs/tooltipIcon.svg" />\n        </ion-icon>\n      </div>\n      <div class="view-all" *ngIf="poppularPeer?.length!=0"\n        (click)="getSpecificList(\'Recommended\', \'Popular amongst peers\',\'AmongPeers\')">View All</div>\n    </div>\n    <ion-label class="nodata" *ngIf="poppularPeer?.length==0 && !showPeerLoader">No available recommendations</ion-label>\n    <div class="loader" *ngIf="showPeerLoader">\n      <img src="assets/zenLearn-imgs/sub-loader.gif" />\n    </div>\n    <ion-slides class="height-auto" [slidesPerView]="slidePerView">\n      <ion-slide *ngFor="let item of poppularPeer; let i = index;">\n        <ion-card class="ion-card" (click)="offeringDetails(item)">\n          <div class="card-container">\n            <div class="card-header {{item.method}}">\n              <div class="titleName">\n                <img *ngIf="item.method==\'\' || item.method==null" src="assets/zenLearn-imgs/dap-icon3.svg" />\n                <img *ngIf="item.method==\'V Learn\'" src="assets/imgs/virtual-icon.svg" />\n                <img *ngIf="item.method==\'Classroom\'" src="assets/imgs/classroom-icon.svg" />\n                <img *ngIf="item.method==\'Online\'" src="assets/imgs/online-icon.svg" />\n              </div>\n              <div class="subTitle">{{item?.title}}</div>\n            </div>\n            <div class="card-data">\n              <div class="align-cont-cent padding-top3per fontp9em" *ngIf="item?.facility">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnlocation.svg" /></span>\n                \n                <span class="color-gray ftWT" *ngIf="item?.itemType && item?.itemType != \'CLASSROOM\'">{{item?.facility}} - {{item?.itemType | titlecase}}</span>\n                <span class="color-gray ftWT" *ngIf="item?.itemType && item?.itemType == \'CLASSROOM\'">{{item?.facility}}</span>\n                <span class="color-gray ftWT" *ngIf="!item?.itemType">{{item?.facility}}</span>\n                <!-- {{item.facility}} -->\n              </div>\n              <div class="flex fontp9em padding-top3per color-gray">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnCredit_Hours.svg" /></span>\n                <span> Credit Hrs : {{item?.creditHours}}</span>\n              </div>\n              <div class="flex padding-top3per" *ngIf="item?.endDate != \'\' || item?.endTime != \'\'">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnCalender.svg" /></span>\n                <span class="column fontp9em heading-color ">\n                  <span class="padding-bottom4per">{{item?.startDate}} To {{item?.endDate}}</span>\n                  <span class="color-gray">{{item?.startTime}} To\n                    {{item?.endTime}}</span></span>\n              </div>\n              <div class="flex padding-top3per" *ngIf="item?.endDate == \'\' || item?.endTime == \'\'">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnCalender.svg" /></span>\n                <span class="column fontp9em heading-color ">\n                  <span class="padding-bottom4per">{{item?.startDate}}</span>\n                </span>\n              </div>\n\n              <div class="flex fontp9em padding-top3per color-gray" *ngIf="item?.financialYear">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnCredit_Hours.svg" /></span>\n                <span>{{item?.financialYear}}</span>\n              </div>\n\n\n\n              <div class="like-dislike-wrapper">\n                <div class="like"\n                  (click)="likeDislike(\'like\',i,item?.isLike,\'AmongPeers\',item?.itemId);$event.stopPropagation()">\n                  <img class="" *ngIf="item?.isLike==0 || item?.isLike==-1" src="assets/zenLearn-imgs/like.svg"\n                    onerror="this.src=\'./assets/imgs/logo.png\'" />\n                  <img class="" *ngIf="item?.isLike==1" src="assets/zenLearn-imgs/likeBlue.svg"\n                    onerror="this.src=\'./assets/imgs/logo.png\'" />\n\n                </div>\n                <div class="dislike"\n                  (click)="likeDislike(\'dislike\',i,item?.isLike,\'AmongPeers\',item?.itemId);$event.stopPropagation()">\n                  <img class="" *ngIf="item?.isLike==0 || item?.isLike==1" src="assets/zenLearn-imgs/disLike.svg"\n                    onerror="this.src=\'./assets/imgs/logo.png\'" />\n                  <img class="" *ngIf="item?.isLike ==-1" src="assets/zenLearn-imgs/disLikeBlue.svg"\n                    onerror="this.src=\'./assets/imgs/logo.png\'" />\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n    <!-- Popular in Zensar -->\n    <div class="title-con">\n      <div class="course-title">\n        <img src="assets/zenLearn-imgs/popular-in-zensar.svg" />\n        Popular in Zensar <ion-icon *ngIf="popularBasedToolTip" [tooltip]="popularBasedToolTip" positionV="bottom"\n          hideOthers="true" [arrow]="showArrow" [event]="tooltipEvent" [duration]="duration" class="showToolTip"\n          color="dark" type="button">\n          <img class="info-icon" src="assets/imgs/tooltipIcon.svg" />\n        </ion-icon>\n      </div>\n      <div class="view-all" *ngIf="ZensarPoppular?.length!=0"\n        (click)="getSpecificList(\'Recommended\',\'Popular in Zensar\',\'PopularInZensar\')">View All</div>\n    </div>\n    <ion-label class="nodata" *ngIf="ZensarPoppular?.length==0 && !showZensarLoader">No available recommendations</ion-label>\n    <div class="loader" *ngIf="showZensarLoader">\n      <img src="assets/zenLearn-imgs/sub-loader.gif" />\n    </div>\n    <ion-slides class="height-auto" [slidesPerView]="slidePerView">\n      <ion-slide *ngFor="let item of ZensarPoppular; let i = index;">\n        <ion-card class="ion-card" (click)="offeringDetails(item)">\n          <div class="card-container">\n            <div class="card-header {{item.method}}">\n              <div class="titleName">\n                <img *ngIf="item.method==\'\' || item.method==null" src="assets/zenLearn-imgs/dap-icon3.svg" />\n                <img *ngIf="item.method==\'V Learn\'" src="assets/imgs/virtual-icon.svg" />\n                <img *ngIf="item.method==\'Classroom\'" src="assets/imgs/classroom-icon.svg" />\n                <img *ngIf="item.method==\'Online\'" src="assets/imgs/online-icon.svg" />\n              </div>\n              <div class="subTitle">{{item?.title}}</div>\n            </div>\n            <div class="card-data">\n              <div class="align-cont-cent padding-top3per fontp9em" *ngIf="item?.facility">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnlocation.svg" /></span>\n               \n                <span class="color-gray ftWT" *ngIf="item?.itemType && item?.itemType != \'CLASSROOM\'">{{item?.facility}} - {{item?.itemType | titlecase}}</span>\n                <span class="color-gray ftWT" *ngIf="item?.itemType && item?.itemType == \'CLASSROOM\'">{{item?.facility}}</span>\n                <span class="color-gray ftWT" *ngIf="!item?.itemType">{{item?.facility}}</span>\n                <!-- {{item.facility}} -->\n              </div>\n              <div class="flex fontp9em padding-top3per color-gray">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnCredit_Hours.svg" /></span>\n                <span> Credit Hrs : {{item?.creditHours}}</span>\n              </div>\n              <div class="flex padding-top3per" *ngIf="item?.endDate || item?.endTime">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnCalender.svg" /></span>\n                <span class="column fontp9em heading-color ">\n                  <span class="padding-bottom4per">{{item?.startDate}} To {{item?.endDate}}</span>\n                  <span class="color-gray">{{item?.startTime}} To\n                    {{item?.endTime}}</span></span>\n              </div>\n              <div class="flex padding-top3per" *ngIf="item?.startDate">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnCalender.svg" /></span>\n                <span class="column fontp9em heading-color ">\n                  <span class="padding-bottom4per">{{item?.startDate}}</span>\n                </span>\n              </div>\n\n              <div class="flex fontp9em padding-top3per color-gray" *ngIf="item?.financialYear">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnCredit_Hours.svg" /></span>\n                <span>{{item?.financialYear}}</span>\n              </div>\n              <div class="practice-names">\n                <span class="{{item.method}}">{{item?.practiceName}}</span>\n                <span class="{{item.method}}" *ngIf="item?.topicName">{{item?.topicName}}</span>\n\n              </div>\n\n              <div class="like-dislike-wrapper">\n                <div class="like"\n                  (click)="likeDislike(\'like\',i,item?.isLike,\'PopularInZensar\',item?.itemId);$event.stopPropagation()">\n                  <img class="" *ngIf="item?.isLike==0 || item?.isLike==-1" src="assets/zenLearn-imgs/like.svg"\n                    onerror="this.src=\'./assets/imgs/logo.png\'" />\n                  <img class="" *ngIf="item?.isLike==1" src="assets/zenLearn-imgs/likeBlue.svg"\n                    onerror="this.src=\'./assets/imgs/logo.png\'" />\n\n                </div>\n                <div class="dislike"\n                  (click)="likeDislike(\'dislike\',i,item?.isLike,\'PopularInZensar\',item?.itemId);$event.stopPropagation()">\n                  <img class="" *ngIf="item?.isLike==0 || item?.isLike==1" src="assets/zenLearn-imgs/disLike.svg"\n                    onerror="this.src=\'./assets/imgs/logo.png\'" />\n                  <img class="" *ngIf="item?.isLike ==-1" src="assets/zenLearn-imgs/disLikeBlue.svg"\n                    onerror="this.src=\'./assets/imgs/logo.png\'" />\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n\n    <!-- Your Dap Data -->\n    <div class="title-con">\n      <div class="course-title">\n        <img src="assets/zenLearn-imgs/your-dap.svg" />\n        <!-- <span>Based on your DAP </span> -->\n        <span>Shortlisted in DAP</span>\n        <ion-icon *ngIf="dapBasedToolTip" [tooltip]="dapBasedToolTip" positionV="bottom" hideOthers="true"\n          [arrow]="showArrow" [event]="tooltipEvent" [duration]="duration" class="showToolTip" color="dark"\n          type="button">\n          <img class="info-icon" src="assets/imgs/tooltipIcon.svg" />\n        </ion-icon>\n      </div>\n      <div class="view-all" *ngIf="dapCourseList?.length!=0"\n        (click)="getSpecificList(\'Recommended\',\'Based on your DAP\',\'BasedOnDap\')">View All</div>\n    </div>\n    <ion-label class="nodata" *ngIf="dapCourseList?.length==0 && !showDapLoader">No available recommendations</ion-label>\n    <div class="loader" *ngIf="showDapLoader">\n      <img src="assets/zenLearn-imgs/sub-loader.gif" />\n    </div>\n    <ion-slides class="height-auto" [slidesPerView]="slidePerView">\n      <ion-slide *ngFor="let item of dapCourseList; let i = index;">\n        <ion-card class="ion-card" (click)="offeringDetails(item)">\n          <div class="card-container">\n            <div class="card-header {{item.method}}">\n              <div class="titleName">\n                <img *ngIf="item.method==\'\' || item.method==null" src="assets/zenLearn-imgs/dap-icon3.svg" />\n                <img *ngIf="item.method==\'V Learn\'" src="assets/imgs/virtual-icon.svg" />\n                <img *ngIf="item.method==\'Classroom\'" src="assets/imgs/classroom-icon.svg" />\n                <img *ngIf="item.method==\'Online\'" src="assets/imgs/online-icon.svg" />\n              </div>\n              <div class="subTitle">{{item?.title}}</div>\n            </div>\n            <div class="card-data">\n              <div class="align-cont-cent padding-top3per fontp9em" *ngIf="item?.facility">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnlocation.svg" /></span>\n               \n                <span class="color-gray ftWT" *ngIf="item?.itemType && item?.itemType != \'CLASSROOM\'">{{item?.facility}} - {{item?.itemType | titlecase}}</span>\n                <span class="color-gray ftWT" *ngIf="item?.itemType && item?.itemType == \'CLASSROOM\'">{{item?.facility}}</span>\n                <span class="color-gray ftWT" *ngIf="!item?.itemType">{{item?.facility}}</span>\n                <!-- {{item.facility}} -->\n              </div>\n              <div class="flex fontp9em padding-top3per color-gray">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnCredit_Hours.svg" /></span>\n                <span> Credit Hrs : {{item?.creditHours}}</span>\n              </div>\n              <div class="flex padding-top3per" *ngIf="item?.endDate != \'\' || item?.endTime != \'\'">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnCalender.svg" /></span>\n                <span class="column fontp9em heading-color ">\n                  <span class="padding-bottom4per">{{item?.startDate}} To {{item?.endDate}}</span>\n                  <span class="color-gray">{{item?.startTime}} To\n                    {{item?.endTime}}</span></span>\n              </div>\n              <div class="flex padding-top3per" *ngIf="item?.endDate == \'\' || item?.endTime == \'\'">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnCalender.svg" /></span>\n                <span class="column fontp9em heading-color ">\n                  <span class="padding-bottom4per">{{item?.startDate}}</span>\n                </span>\n              </div>\n\n              <div class="flex fontp9em padding-top3per color-gray" *ngIf="item?.financialYear">\n                <span class="padding-right8"><img src="assets/imgs/zenLearnCredit_Hours.svg" /></span>\n                <span>{{item?.financialYear}}</span>\n              </div>\n              <div class="like-dislike-wrapper">\n                <div class="like"\n                  (click)="likeDislike(\'like\',i,item?.isLike,\'BasedOnDap\',item?.itemId);$event.stopPropagation()">\n                  <img class="" *ngIf="item?.isLike==0 || item?.isLike==-1" src="assets/zenLearn-imgs/like.svg"\n                    onerror="this.src=\'./assets/imgs/logo.png\'" />\n                  <img class="" *ngIf="item?.isLike==1" src="assets/zenLearn-imgs/likeBlue.svg"\n                    onerror="this.src=\'./assets/imgs/logo.png\'" />\n\n                </div>\n                <div class="dislike"\n                  (click)="likeDislike(\'dislike\',i,item?.isLike,\'BasedOnDap\',item?.itemId);$event.stopPropagation()">\n                  <img class="" *ngIf="item?.isLike==0 || item?.isLike==1" src="assets/zenLearn-imgs/disLike.svg"\n                    onerror="this.src=\'./assets/imgs/logo.png\'" />\n                  <img class="" *ngIf="item?.isLike ==-1" src="assets/zenLearn-imgs/disLikeBlue.svg"\n                    onerror="this.src=\'./assets/imgs/logo.png\'" />\n\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\all-course-list\all-course-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */]])
    ], AllCourseListPage);
    return AllCourseListPage;
}());

//# sourceMappingURL=all-course-list.js.map

/***/ })

});
//# sourceMappingURL=136.js.map