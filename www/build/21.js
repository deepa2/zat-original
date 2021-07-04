webpackJsonp([21],{

/***/ 1418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZenwenDashboardPageModule", function() { return ZenwenDashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zenwen_dashboard__ = __webpack_require__(1840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ZenwenDashboardPageModule = /** @class */ (function () {
    function ZenwenDashboardPageModule() {
    }
    ZenwenDashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zenwen_dashboard__["a" /* ZenwenDashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zenwen_dashboard__["a" /* ZenwenDashboardPage */]),
            ],
        })
    ], ZenwenDashboardPageModule);
    return ZenwenDashboardPageModule;
}());

//# sourceMappingURL=zenwen-dashboard.module.js.map

/***/ }),

/***/ 1840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZenwenDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_env__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
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
 * Generated class for the ZenwenDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// declare var window;
var ZenwenDashboardPage = /** @class */ (function () {
    function ZenwenDashboardPage(navCtrl, navParams, httpProvider, utility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.utility = utility;
        this.events = "upcoming";
        this.worldOfWomen = "wallOfFame";
        this.upcomingEvents = [];
        this.pastEvents = [];
        this.zenwenSpeaks = [];
        this.headersMenuList = [];
        this.wallOFameList = [];
        this.headerMenuColorList = ['#b7eccf', '#f9d0da', '#c3ecff', '#d7bbf7'];
        this.headerMenuImgList = ["infoCenter", 'safetyAtZensar', 'vision'];
        this.adminList = [];
        this.smsOptions = {
            replaceLineBreaks: false,
            android: {
                intent: 'INTENT' // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };
        this.imgUrl = __WEBPACK_IMPORTED_MODULE_3__app_env__["Q" /* zenwenImgUrl */];
    }
    ZenwenDashboardPage.prototype.ionViewDidLoad = function () {
        this.getDashboardData();
        // this.getGeolocationDetails().then((geoLink: any) => {
        //   // console.log('this.geoLink: ', geoLink);
        //   this.dataStorage.getData('zenwenLoginDetails').then((res: any) => {
        //     if (res) {
        //       this.message = 'Below associate has raised SOS - Panic button. Kindly get in touch with the associate immediately and following are the associate details.';
        //       this.message += '\nAssociate Name:: ' + res.firstName + " " + res.lastName;
        //       this.message += '\nAssociate ID:: ' + res.employeeId;
        //       this.message += '\n Associate Email Id::' + res.emailAddress;
        //       this.message += '\n Geolocation link::' + geoLink;
        //     }
        //   })
        // }, (err) => {
        //   console.log(err);
        //   this.dataStorage.getData('zenwenLoginDetails').then((res: any) => {
        //     if (res) {
        //       this.message = 'Below associate has raised SOS - Panic button. Kindly get in touch with the associate immediately and following are the associate details.';
        //       this.message += '\nAssociate Name:: ' + res.firstName + " " + res.lastName;
        //       this.message += '\nAssociate ID:: ' + res.employeeId;
        //       this.message += '\n Associate Email Id::' + res.emailAddress;
        //       this.message += '\n Geolocation link::' + '';
        //     }
        //   })
        // });
    };
    // getGeolocationDetails() {
    //   return new Promise((resolve, reject) => {
    //     // let positionOptions = {
    //     //   enableHighAccuracy : true
    //     // }
    //     this.geolocation.getCurrentPosition().then((resp) => {
    //       // resp.coords.latitude
    //       // resp.coords.longitude
    //       if (resp.coords.latitude && resp.coords.longitude) {
    //         let geoLink = "http://maps.google.com/maps?q=" + resp.coords.latitude + "," + resp.coords.longitude + "&ll=" + resp.coords.latitude + "," + resp.coords.longitude + "&z=" + 22;
    //         resolve(geoLink);
    //       }
    //     }).catch((error) => {
    //       reject(error);
    //       console.log('Error getting location', error);
    //     });
    //   })
    // }
    ZenwenDashboardPage.prototype.getDashboardData = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var url = "dashboardList";
        var params = {};
        this.httpProvider.http.zenwenCommonGETService({ url: url, params: params, headermenu: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res.model) {
                var dashboardData = res.model;
                // this.isArray(dashboardData.upcomingEvents) ? this.upcomingEvents = dashboardData.upcomingEvents : this.upcomingEvents.push(dashboardData.upcomingEvents);
                _this.upcomingEvents = dashboardData.upcomingEvents ? (Array.isArray(dashboardData.upcomingEvents) ? dashboardData.upcomingEvents : _this.upcomingEvents.concat([dashboardData.upcomingEvents])) : [];
                _this.pastEvents = dashboardData.pastEvents ? (Array.isArray(dashboardData.pastEvents) ? dashboardData.pastEvents : _this.pastEvents.concat([dashboardData.pastEvents])) : [];
                _this.wallOFameList = dashboardData.wallOFameMenu ? (Array.isArray(dashboardData.wallOFameMenu) ? dashboardData.wallOFameMenu : _this.wallOFameList.concat([dashboardData.wallOFameMenu])) : [];
                _this.zenwenSpeaks = dashboardData.zenWenSpeakMenu ? (Array.isArray(dashboardData.zenWenSpeakMenu) ? dashboardData.zenWenSpeakMenu : _this.zenwenSpeaks.concat([dashboardData.zenWenSpeakMenu])) : [];
                _this.headersMenuList = dashboardData.lstHeadersMenu ? (Array.isArray(dashboardData.lstHeadersMenu) ? dashboardData.lstHeadersMenu : _this.headersMenuList.concat([dashboardData.lstHeadersMenu])) : [];
                if (_this.headersMenuList.length > 0) {
                    _this.headersMenuList.map(function (item, i) {
                        item.image = _this.headerMenuImgList[i];
                    });
                    // console.log('this.headersMenuList: ', this.headersMenuList);
                }
            }
        });
    };
    ZenwenDashboardPage.prototype.dateConversion = function (val) {
        var date = __WEBPACK_IMPORTED_MODULE_4_moment__(val);
        var day = __WEBPACK_IMPORTED_MODULE_4_moment__(date).format('DD') + " " + __WEBPACK_IMPORTED_MODULE_4_moment__(date).format('MMM');
        return day;
    };
    ZenwenDashboardPage.prototype.redirectToZenWENEvent = function (tabname) {
        this.navCtrl.push("ZenwenEventPage", { tabname: tabname });
    };
    ZenwenDashboardPage.prototype.getColor = function (i) {
        return this.headerMenuColorList.find(function (item, index) {
            if (i == index) {
                return item;
            }
        });
    };
    ZenwenDashboardPage.prototype.redirectToWOW = function (tabname, speakdata) {
        var wallOfFameParams = {
            groupId: this.wallOFameList[0].groupId,
            folderId: this.wallOFameList[0].folderId
        };
        var zenwenSpeakParams = {
            groupId: this.zenwenSpeaks[0].groupId,
            folderId: this.zenwenSpeaks[0].folderId
        };
        this.navCtrl.push('WowPage', { wallOfFameParams: wallOfFameParams, zenwenSpeakParams: zenwenSpeakParams, 'tabname': tabname, 'speakdata': speakdata });
    };
    ZenwenDashboardPage.prototype.goToPage = function (menu) {
        if (menu.groupId == 31474) {
            this.navCtrl.push('SafetyZensarPage', {
                groupId: menu.groupId,
                folderId: menu.lstSubMenu.folderId
            });
        }
        else if (menu.groupId == 31469) {
            this.navCtrl.push('InformationCenterPage', {
                groupId: menu.groupId,
                lstSubMenu: menu.lstSubMenu
            });
        }
        else if (menu.groupId == 31449) {
            this.navCtrl.push('VisionPage', {
                groupId: menu.groupId,
                lstSubMenu: menu.lstSubMenu
            });
        }
    };
    ZenwenDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-zenwen-dashboard',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zenwen\zenwen-dashboard\zenwen-dashboard.html"*/'<!--\n  Generated template for the ZenwenDashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ZenWEN</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div>\n    <div class="sub-header">\n      <div class="title">Events</div>\n      <div class="segments">\n        <ion-segment [(ngModel)]="events">\n          <ion-segment-button value="upcoming" class="seg-left">\n            Upcoming\n          </ion-segment-button>\n          <ion-segment-button value="past" class="seg-right">\n            Past\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n    </div>\n\n    <div [ngSwitch]="events" class="sub-content">\n      <ion-slides *ngSwitchCase="\'upcoming\'" slidesPerView="1.4" zoom="false">\n        <ion-slide *ngFor="let upcomingData of upcomingEvents" (click)="redirectToZenWENEvent(\'upcoming\')">\n          <div class="banner-img">\n            <img src="{{imgUrl + upcomingData?.coverPhotoUrl}}" />\n          </div>\n          <div class="e-details">\n            <div class="date">\n              <img src="assets/zents-imgs/calendar_white_icon.svg" />\n              <span>{{dateConversion(upcomingData?.startTime)}}</span>\n            </div>\n            <div class="desc">\n              <div class="title">{{upcomingData?.title}}</div>\n              <div class="location">\n                <!-- <ion-icon name="location-outline"></ion-icon> -->\n                <img src="assets/zenwen-imgs/location_white_icon.svg" />\n                <span class="city">{{upcomingData?.city}}</span>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n        <div class="noevent" *ngIf="upcomingEvents.length == 0">\n          <img  src="assets/zenwen-imgs/noEvent.png" />\n        </div>\n      </ion-slides>\n      \n\n      <ion-slides *ngSwitchCase="\'past\'" slidesPerView="1.2">\n        <ion-slide *ngFor="let pastData of pastEvents" (click)="redirectToZenWENEvent(\'past\')">\n          <div class="banner-img">\n            <img src="{{imgUrl + pastData?.coverPhotoUrl}}" />\n          </div>\n          <div class="e-details">\n            <div class="date">\n              <img src="assets/zents-imgs/calendar_white_icon.svg" />\n              <span>{{dateConversion(pastData?.startTime)}}</span>\n            </div>\n            <div class="desc">\n              <div class="title">{{pastData?.title}}</div>\n              <div class="location">\n                <img src="assets/zenwen-imgs/location_white_icon.svg" />\n                <span class="city">{{pastData?.city}}</span>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n        <div padding *ngIf="pastEvents.length == 0">\n          No Events Found\n        </div>\n      </ion-slides>\n    </div>\n  </div>\n\n  <div class="wow">\n    <div class="sub-header">\n      <div class="title">World of Women</div>\n      <div class="segments">\n        <ion-segment [(ngModel)]="worldOfWomen">\n          <ion-segment-button value="wallOfFame" class="seg-left">\n            Wall Of Fame\n          </ion-segment-button>\n          <ion-segment-button value="zenwenSpeak" class="seg-right">\n            ZenWen Speak\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n    </div>\n\n    <div [ngSwitch]="worldOfWomen" class="sub-content">\n      <ion-slides *ngSwitchCase="\'wallOfFame\'" slidesPerView="1.2">\n        <ion-slide *ngFor="let wof of wallOFameList" (click)="redirectToWOW(\'wallOfFame\')">\n          <ion-card>\n            <ion-item no-padding>\n              <ion-avatar item-start>\n                <img src="{{imgUrl + wof?.worldOfWomen?.fromUserPortraitUrl}}" onerror="this.src = \'assets/imgs/dummy-profile.png\'"/>\n             \n              </ion-avatar>\n              <p>{{wof?.worldOfWomen?.fromUserName}}</p>\n            </ion-item>\n            <!-- <div class="msg">{{wof?.worldOfWomen?.description}}</div> -->\n            <read-more class="msg" [desc]="wof?.worldOfWomen?.description"></read-more>\n            <div class="sendTo">\n              Send To :\n              <img src="{{imgUrl + wof?.worldOfWomen?.toUserPortraitUrl}}" onerror="this.src = \'assets/imgs/dummy-profile.png\'"/>\n              {{wof?.worldOfWomen?.toUserName}}\n            </div>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n\n      <ion-slides *ngSwitchCase="\'zenwenSpeak\'" slidesPerView="1.2">\n        <ion-slide *ngFor="let speakData of zenwenSpeaks" (click)="redirectToWOW(\'zenwenSpeak\',speakData)">\n          <ion-card>\n            <ion-item>\n              <ion-avatar item-start>\n                <img src="{{imgUrl + speakData?.worldOfWomen?.toUserPortraitUrl}}">\n              </ion-avatar>\n              <p>{{speakData?.worldOfWomen?.toUserName}}</p>\n            </ion-item>\n            <!-- <div class="msg" [innerHTML]="speakData?.worldOfWomen?.description"></div> -->\n            <read-more class="msg" [desc]="speakData?.worldOfWomen?.description"></read-more>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n\n  <div class="other-options">\n    <ion-slides slidesPerView="2.5">\n      <ion-slide *ngFor="let menu of headersMenuList;let i = index;" [ngStyle]="{\'background-color\':getColor(i)}" (click)="goToPage(menu)">\n        <div>\n          <img src="assets/zenwen-imgs/{{menu?.image}}.svg" />\n          <span>{{menu?.groupName}}</span>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <!-- <ion-fab right bottom (click)="confirmSOS()">\n    <button ion-fab>SOS</button>\n  </ion-fab> -->\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zenwen\zenwen-dashboard\zenwen-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], ZenwenDashboardPage);
    return ZenwenDashboardPage;
}());

//# sourceMappingURL=zenwen-dashboard.js.map

/***/ })

});
//# sourceMappingURL=21.js.map