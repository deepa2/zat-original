webpackJsonp([125],{

/***/ 1402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedCoursesPageModule", function() { return SelectedCoursesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selected_courses__ = __webpack_require__(1824);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectedCoursesPageModule = /** @class */ (function () {
    function SelectedCoursesPageModule() {
    }
    SelectedCoursesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__selected_courses__["a" /* SelectedCoursesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__selected_courses__["a" /* SelectedCoursesPage */]),
            ],
        })
    ], SelectedCoursesPageModule);
    return SelectedCoursesPageModule;
}());

//# sourceMappingURL=selected-courses.module.js.map

/***/ }),

/***/ 1824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedCoursesPage; });
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
 * Generated class for the SelectedCoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectedCoursesPage = /** @class */ (function () {
    function SelectedCoursesPage(navCtrl, navParams, http, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.utils = utils;
        this.dapCoursesList = [];
        //console.log(this.navParams.get("data"))
        //console.log(this.navParams.get("dapId"))
        this.dapId = this.navParams.get("dapId");
    }
    SelectedCoursesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //console.log('ionViewDidLoad SelectedCoursesPage');
        if (this.navParams.get("data")) {
            this.dapCoursesList = this.navParams.get("data");
        }
        else if (this.navParams.get("otherList")) {
            this.otherList = this.navParams.get("otherList");
        }
        else if (this.dapId) {
            this.utils.updateLoader(true);
            var param = {
                url: "getAddedPrograms",
                data: {
                    "dapId": this.dapId.dapId,
                    "dapSectionId": this.dapId.dapSectionId,
                    'userId': this.dapId.userId
                },
                zenLearn: true
            };
            this.http.http.commonService(param).subscribe(function (response) {
                //console.log(response)
                if (response && response.details) {
                    _this.dapCoursesList = response.details.responseList;
                }
                _this.utils.updateLoader(false);
            }, function (error) {
                //console.log(error);
                _this.utils.updateLoader(false);
            });
        }
    };
    SelectedCoursesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-selected-courses',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\selected-courses\selected-courses.html"*/'<!--\n  Generated template for the SelectedCoursesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Selected Courses List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div style="margin-top: 20px;" *ngIf="otherList">\n    <ion-item>\n      <ion-label stacked class="dapLabel"> You have selected "Others" in the competency/skill tab. Please specify the\n        competency/skill that you plan to learn this year.</ion-label>\n\n      <ion-input [(ngModel)]="otherList"></ion-input>\n    </ion-item>\n  </div>\n  <ion-card *ngFor="let courseDetails of dapCoursesList; index as i">\n\n    <div class="card-container">\n      <div class="card-header {{courseDetails.method}}">\n        <div class="titleName">\n          <img *ngIf="courseDetails.method==\'V Learn\'" src="assets/imgs/virtual-icon.svg" />\n          <img *ngIf="courseDetails.method==\'Classroom\'" src="assets/imgs/classroom-icon.svg" />\n          <img *ngIf="courseDetails.method==\'Online\'" src="assets/imgs/online-icon.svg" />\n        </div>\n        <div class="subTitle">{{courseDetails?.title}}</div>\n      </div>\n    </div>\n\n    <div class="text-left" style=" padding: 10px;">\n\n      <div class="subTitle" *ngIf="courseDetails?.itemDescription">{{courseDetails?.itemDescription}}</div>\n      <div class="subTitle" *ngIf="!courseDetails?.itemDescription">No Description Available</div>\n\n      <div class="flex favdiv">\n        <span class="padding-right8">\n\n        </span>\n\n       \n      </div>\n    </div>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\selected-courses\selected-courses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], SelectedCoursesPage);
    return SelectedCoursesPage;
}());

//# sourceMappingURL=selected-courses.js.map

/***/ })

});
//# sourceMappingURL=125.js.map