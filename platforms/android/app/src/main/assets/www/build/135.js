webpackJsonp([135],{

/***/ 1391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListPageModule", function() { return CourseListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar__ = __webpack_require__(1813);
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
                __WEBPACK_IMPORTED_MODULE_2__calendar__["a" /* CalendarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__calendar__["a" /* CalendarPage */]),
            ],
        })
    ], CourseListPageModule);
    return CourseListPageModule;
}());

//# sourceMappingURL=calendar.module.js.map

/***/ }),

/***/ 1813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
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
var CalendarPage = /** @class */ (function () {
    function CalendarPage(navCtrl, utility, httpProvider, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.offeringList = [];
        this.learningType = "Technical,Behavioural";
        this.learningMode = "Classroom,V Learn";
        this.resultPending = false;
        this.startList = 0;
        this.month = "";
        this.monthList = [];
        this.isDataAvailable = false;
        this.offeringType = this.navParams.get("selectedCourse");
        // this.learningType = this.navParams.get("learningType");
        this.showAllFilters = this.navParams.get("showAllFilters");
        this.getOfferingList(this.learningType, this.learningMode);
    }
    CalendarPage.prototype.getOfferingList = function (learningType, learningMode) {
        var _this = this;
        var url;
        var data;
        var learningTypeList = learningType.split(',');
        var learningModeList = learningMode.split(',');
        url = "viewAllScheduledOfferings";
        data = {
            offeringType: "Calendar",
            start: this.startList,
            month: this.month,
            itemType: "",
            item_types: [],
            learning_Types: learningTypeList,
            learning_modes: learningModeList
        };
        data.learningType = learningType;
        data.learningMode = learningMode;
        if (this.offeringList.length == 0) {
            this.utility.updateLoader(true);
        }
        this.httpProvider.http.commonService({ url: url, data: data, zenLearn: true })
            .subscribe(function (res) {
            if (!_this.utility.isEmptyOrNullOrUndefined(res) && !_this.utility.isEmptyOrNullOrUndefined(res.details)) {
                _this.isDataAvailable = true;
                _this.offeringData = res.details.responseList;
                _this.monthList = res.details.monthList;
                if (_this.month == '') {
                    _this.month = _this.monthList[0].value;
                }
                if (_this.offeringData !== null) {
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
    CalendarPage.prototype.selctMonth = function (month) {
        this.month = month;
        this.offeringList = [];
        this.startList = 0;
        this.getOfferingList(this.learningType, this.learningMode);
    };
    CalendarPage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var filteredData = this.filteredData;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__ZenLearn_zelearn_popover_zelearn_popover__["a" /* ZelearnPopoverPage */], { data: { filteredData: filteredData, offeringType: this.offeringType, showAllFilters: this.showAllFilters, isFromCalendar: true } }, { cssClass: 'zenLearn-popover' });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (data) {
            if (!_this.utility.isEmptyOrNullOrUndefined(data)) {
                _this.filteredData = data;
                _this.startList = 0;
                var learningType_1 = [];
                var learningMode_1 = [];
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
                _this.learningType = learningType_1.toString();
                _this.learningMode = learningMode_1.toString();
                _this.offeringList = [];
                _this.getOfferingList(_this.learningType, _this.learningMode);
            }
        });
    };
    CalendarPage.prototype.offeringDetails = function (selectedCourse) {
        //console.log(selectedCourse)
        this.navCtrl.push("OfferingDetailsPage", { selectedCourse: selectedCourse });
    };
    CalendarPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        // if (this.resultPending) {
        this.infinteScroll = infiniteScroll;
        setTimeout(function () {
            _this.startList = _this.startList + 10;
            // this.resultPending = false
            _this.getOfferingList(_this.learningType, _this.learningMode);
            infiniteScroll.complete();
        }, 1000);
        // }
    };
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-calendar",template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\calender\calendar.html"*/'<!--\n  Generated template for the CourseListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Learning Calendar</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <img src="assets/imgs/dapFilterIcon.svg" />\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="isDataAvailable">\n    <div class="cal-header">\n      <div class="date-title">Date</div>\n      <div class="events-title">\n        <div>Training Details</div>\n        <div class="month-list">\n          <div class="month-item" [ngClass]="{\'active\': item.value == month}" *ngFor="let item of monthList" (click)="selctMonth(item?.value)">\n            <ion-label>{{item?.value | titlecase}}</ion-label>\n          </div>\n        </div>\n        \n      </div>\n    </div>\n    <div class="nodata" *ngIf="offeringList.length==0">Learning calendar releasing  soon</div>\n    <ng-container *ngFor="let item of offeringList; let i = index ">\n     \n      <ion-card class="ion-card" [ngClass]="{\'is-today\': item.isToday}"  (click)="offeringDetails(item)">\n        <div class="claendar-date">\n          <ng-container *ngIf="offeringList[i - 1]?.startDate !=item.startDate" >\n            <div class="date">{{item.startDate | date: \'dd\' }}</div>\n            <div class="day">{{item.startDate | date: \'EEE\' }}</div>\n          </ng-container>\n        </div>\n        <div class="card-container {{item?.learningType}}">\n          <!-- <div class="titleName">{{item?.learningType}}</div> -->\n          <div class="titleName">\n            <span>{{item?.method}}</span>\n            <span class="learning-type">{{item?.learningType}}</span>\n          </div>\n          <div class="padding-bottom2per" *ngIf="item.startDate">{{item?.startTime}}  To {{item?.endTime}} </div>\n          <div class="subTitle">{{item?.title}}</div>\n          <div>\n            <div class="align-cont-cent padding-top3per fontp9em" *ngIf="item?.facility">\n              <span class="padding-right8"><img src="assets/imgs/zenLearnlocation.svg" /></span>\n              <span class="color-gray">{{item?.facility}}</span>\n              <!-- {{item.facility}} -->\n            </div>\n           \n            <div class="flex fontp9em padding-top3per color-gray" *ngIf="item?.financialYear">\n              <span class="padding-right8"><img src="assets/imgs/zenLearnCredit_Hours.svg" /></span>\n              <span>{{item?.financialYear}}</span>\n            </div>\n\n\n          </div>\n\n          <div *ngIf="item?.learningType == \'Behavioural\' && item?.band" class="band">\n           Band - {{item?.band}}\n          </div>\n  \n  \n        </div>\n      </ion-card>\n    </ng-container>\n   \n    <ion-infinite-scroll threshold="300px" (ionInfinite)="loadData($event)">\n      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data...">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    \n  </div>\n  \n</ion-content> '/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\calender\calendar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ })

});
//# sourceMappingURL=135.js.map