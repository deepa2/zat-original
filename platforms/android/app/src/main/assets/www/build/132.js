webpackJsonp([132],{

/***/ 1392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DapCoursesListPageModule", function() { return DapCoursesListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dap_courses_list__ = __webpack_require__(1814);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DapCoursesListPageModule = /** @class */ (function () {
    function DapCoursesListPageModule() {
    }
    DapCoursesListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dap_courses_list__["a" /* DapCoursesListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dap_courses_list__["a" /* DapCoursesListPage */]),
            ],
        })
    ], DapCoursesListPageModule);
    return DapCoursesListPageModule;
}());

//# sourceMappingURL=dap-courses-list.module.js.map

/***/ }),

/***/ 1814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DapCoursesListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
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
 * Generated class for the DapCoursesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DapCoursesListPage = /** @class */ (function () {
    function DapCoursesListPage(navCtrl, navParams, httpProvider, utility, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.utility = utility;
        this.popoverCtrl = popoverCtrl;
        this.dapCoursesList = [];
        this.selectedCourses = [];
        this.infiniteScroll = '';
        this.loadedData = [];
        this.start = 0;
        this.end = 10;
        this.learningMode = '';
        this.showMsg = '';
        this.ismsgAvailable = false;
        this.otherDataMsg = false;
        this.filteredData = [];
        this.noDataAvaiable = false;
        this.getData = this.navParams.get('listData');
        if (this.getData.dapID) {
            this.dapID = this.getData.dapID;
        }
        else {
            this.dapID = 0;
        }
        //console.log(this.getData);
    }
    DapCoursesListPage.prototype.ionViewDidLoad = function () {
        if (!this.getData.isOtherSelected) {
            this.getCourseData();
        }
    };
    DapCoursesListPage.prototype.getCourseData = function () {
        var _this = this;
        if (this.loadedData.length == 0) {
            this.utility.updateLoader(true);
        }
        var params;
        //console.log('ionViewDidLoad DapCoursesListPage');
        params = {
            url: 'courses',
            data: {
                "learningId": this.getData.learningId,
                "start": this.start,
                "end": this.end,
                "competencyId": this.getData.competencyId,
                "learningMode": this.learningMode
            },
            zenLearn: true
        };
        this.httpProvider.http.commonService(params).subscribe(function (response) {
            //console.log(response);
            _this.utility.updateLoader(false);
            if (response.status.statusCode == -3) {
                _this.ismsgAvailable = true;
                _this.showMsg = response.details.responseList;
            }
            else if (response && response.details && response.details.responseList.length > 0) {
                _this.loadedData = response.details.responseList;
                _this.noDataAvaiable = false;
                _this.dapCoursesList = _this.dapCoursesList.concat(_this.loadedData);
            }
            else if (response.details.responseList.length == 0 && !_this.infiniteScroll) {
                _this.noDataAvaiable = true;
            }
            else if (_this.infiniteScroll && response.details.responseList.length == 0) {
                _this.noDataAvaiable = false;
            }
            if (_this.infiniteScroll) {
                _this.infiniteScroll.complete();
                _this.infiniteScroll = '';
            }
        }, function (error) {
            //console.log(error);
            _this.utility.updateLoader(false);
        });
    };
    DapCoursesListPage.prototype.selectedCourse = function (course, index) {
        var _this = this;
        //console.log(course);
        this.dapCoursesList.filter(function (value) {
            if (_this.selectedCourses.length == 0) {
                if (value.itemId == course.itemId) {
                    value.selectedItem = true;
                    _this.selectedCourses.push(course);
                }
            }
            else if (_this.selectedCourses.length > 0) {
                //console.log(this.selectedCourses.indexOf(course))
                if (_this.selectedCourses.indexOf(course) == -1) {
                    if (value.itemId == course.itemId) {
                        value.selectedItem = true;
                        _this.selectedCourses.push(course);
                    }
                }
                else if (_this.selectedCourses.indexOf(course) != -1) {
                    var index_1 = _this.selectedCourses.indexOf(course);
                    if (value.itemId == course.itemId) {
                        _this.selectedCourses.splice(index_1, 1);
                        value.selectedItem = false;
                    }
                }
            }
        });
        //console.log(this.dapCoursesList)
        //console.log(this.selectedCourses)
    };
    DapCoursesListPage.prototype.addCouses = function () {
        var _this = this;
        if (this.getData.isOtherSelected && !this.otherData) {
            this.otherDataMsg = true;
            return;
        }
        this.utility.updateLoader(true);
        var uniqueCourseIds = [];
        var data;
        if (this.selectedCourses.length > 0) {
            this.selectedCourses.filter(function (value) {
                uniqueCourseIds.push(value.itemId);
            });
        }
        else {
            uniqueCourseIds = this.otherData.split(",");
        }
        //console.log(uniqueCourseIds);
        var param = {
            url: 'addPrograms',
            data: {
                uniqueIdsList: uniqueCourseIds,
                dapId: this.dapID
            },
            zenLearn: true
        };
        this.httpProvider.http.commonService(param).subscribe(function (response) {
            //console.log(response)
            if (response && response.status.statusCode == 1) {
                _this.utility.updateLoader(false);
                _this.utility.presentAlert("Your course(s) have been added successfully").then(function () {
                    return _this.navCtrl.pop();
                });
            }
        }, function (error) {
            //console.log(error);
            _this.utility.updateLoader(false);
        });
    };
    DapCoursesListPage.prototype.loadCourses = function (infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        this.start = this.end;
        this.end = this.end + 10;
        this.getCourseData();
    };
    DapCoursesListPage.prototype.ionViewWillLeave = function () {
        if (this.selectedCourses.length > 0) {
            this.navCtrl.getPrevious().data.dapCourseList = this.selectedCourses;
            this.navCtrl.getPrevious().data.otherList = "";
        }
        else if (this.otherData) {
            this.navCtrl.getPrevious().data.otherList = this.otherData;
            this.navCtrl.getPrevious().data.dapCourseList = [];
        }
    };
    DapCoursesListPage.prototype.presentOptions = function (myEvent) {
        var _this = this;
        var popover = this
            .popoverCtrl
            .create('PopoverPage', { data: { 'type': 'dapCourseList', 'filteredData': this.filteredData } });
        popover.present({ ev: myEvent });
        popover.onDidDismiss(function (value) {
            //console.log(value)
            if (value) {
                _this.filteredData = value;
                var learningModes_1 = [];
                _this.filteredData.filteredValues.filter(function (val) {
                    if (val.checked) {
                        learningModes_1.push(val.value);
                    }
                });
                if (learningModes_1.length > 0) {
                    _this.learningMode = learningModes_1.toString();
                    _this.start = 0;
                    _this.end = 10;
                    _this.dapCoursesList = [];
                    _this.loadedData = [];
                    _this.getCourseData();
                }
            }
        });
    };
    DapCoursesListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dap-courses-list',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\dap-courses-list\dap-courses-list.html"*/'<!--\n  Generated template for the DapCoursesListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{getData?.selectedLearning}} Courses List</ion-title>\n    <ion-buttons end *ngIf="!getData.isOtherSelected">\n      <button ion-button icon-only (click)="presentOptions($event)">\n        <img src="assets/imgs/dapFilterIcon.svg" />\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="noData" *ngIf="noDataAvaiable">No data available </div>\n  <div class="showMessage" *ngIf="ismsgAvailable">{{showMsg}}</div>\n  <div class="inputBox" *ngIf="getData.isOtherSelected">\n    <ion-item>\n      <ion-label stacked class="dapLabel">You have selected "Others" in the competency/skill tab. Please specify the\n        competency/skill that you plan to learn this year. <img style="position: absolute;\n        height: 12px;padding: 2px;" src="assets/imgs/asterisk.svg" /></ion-label>\n      <ion-input [(ngModel)]="otherData"></ion-input>\n    </ion-item>\n    <p *ngIf="otherDataMsg" class="errorCls">This field is required</p>\n  </div>\n  <ion-card *ngFor="let courseDetails of dapCoursesList; index as i" (click)="selectedCourse(courseDetails,i)">\n\n    <div class="card-container">\n      <div class="card-header {{courseDetails.method}}">\n        <div class="titleName">\n          <img *ngIf="courseDetails.method==\'V Learn\'" src="assets/imgs/virtual-icon.svg" />\n          <img *ngIf="courseDetails.method==\'Classroom\'" src="assets/imgs/classroom-icon.svg" />\n          <img *ngIf="courseDetails.method==\'Online\'" src="assets/imgs/online-icon.svg" />\n        </div>\n        <div class="subTitle">{{courseDetails?.title}}</div>\n      </div>\n    </div>\n\n    <div class="text-left" style=" padding: 10px;">\n\n      <div class="subTitle">{{courseDetails?.itemDescription}}</div>\n\n      <div class="flex favdiv">\n        <span class="padding-right8">\n\n        </span>\n\n        <span class="fav" *ngIf="!courseDetails?.selectedItem"><img class="favImg" src="assets/menu_icons/heart.svg">\n          <span>Shortlist</span>\n        </span>\n\n        <span class="fav" *ngIf="courseDetails?.selectedItem"><img class="favImg"\n            src="assets/menu_icons/Filledheart.svg">\n          <span>Shortlisted</span>\n        </span>\n      </div>\n    </div>\n\n  </ion-card>\n  <ion-infinite-scroll (ionInfinite)="loadCourses($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n<ion-footer>\n  <div class="footerBtn" *ngIf="!getData.isOtherSelected">\n    <p class="footerText" *ngIf="selectedCourses.length > 0">{{selectedCourses.length}} Shortlisted</p>\n    <p class="footerText" *ngIf="selectedCourses.length == 0">Please select the course(s)</p>\n    <button ion-button round [disabled]="selectedCourses.length == 0" (click)="addCouses()">ADD</button>\n  </div>\n  <div class="saveBtn" *ngIf="getData.isOtherSelected">\n    <button ion-button (click)="addCouses()">Save</button>\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\dap-courses-list\dap-courses-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */]])
    ], DapCoursesListPage);
    return DapCoursesListPage;
}());

//# sourceMappingURL=dap-courses-list.js.map

/***/ })

});
//# sourceMappingURL=132.js.map