webpackJsonp([77],{

/***/ 1359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardPageModule", function() { return AdminDashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_dashboard__ = __webpack_require__(1781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_fusioncharts__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fusioncharts__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fusioncharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fusioncharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fusioncharts_fusioncharts_charts__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fusioncharts_fusioncharts_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_fusioncharts_fusioncharts_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Import angular-fusioncharts

// Import FusionCharts library

// Load FusionCharts Individual Charts

// Use fcRoot function to inject FusionCharts library, and the modules you want to use
__WEBPACK_IMPORTED_MODULE_3_angular_fusioncharts__["a" /* FusionChartsModule */].fcRoot(__WEBPACK_IMPORTED_MODULE_4_fusioncharts__, __WEBPACK_IMPORTED_MODULE_5_fusioncharts_fusioncharts_charts__);
//FusionCharts.options
var AdminDashboardPageModule = /** @class */ (function () {
    function AdminDashboardPageModule() {
    }
    AdminDashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_dashboard__["a" /* AdminDashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_dashboard__["a" /* AdminDashboardPage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular_fusioncharts__["a" /* FusionChartsModule */]
            ],
        })
    ], AdminDashboardPageModule);
    return AdminDashboardPageModule;
}());

//# sourceMappingURL=admin-dashboard.module.js.map

/***/ }),

/***/ 1781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_notification__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reports_reports__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(4);
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
 * Generated class for the AdminDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminDashboardPage = /** @class */ (function () {
    function AdminDashboardPage(navCtrl, utility, httpProvider) {
        this.navCtrl = navCtrl;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.transportModel = 'bus/shuttle';
        // Menu options for admin
        this.adminMenus = [
            {
                logo: "assets/zenAdmin/bus-img.svg",
                label: "Buses",
                pageName: "Buses",
            },
            {
                logo: "assets/zenAdmin/shuttles-imge.svg",
                label: "Shuttles",
                pageName: "Shuttles",
            },
            {
                logo: "assets/zenAdmin/non-zensarien-img.svg",
                label: "Non-Zensarian",
                pageName: "Non-Zensarien",
            },
            {
                logo: "assets/zenAdmin/notifications-announcment-img.svg",
                label: "Notification / Announcements",
                pageName: "Notification",
            },
            {
                logo: "assets/zenAdmin/reports-img.svg",
                label: "Reports",
                pageName: "Reports",
            },
            {
                logo: "",
                label: "",
                pageName: "",
            },
        ];
        // graph dource data
        this.dataSource = {
            chart: {
                palettecolors: "FCC9A9,20D939,279CFB",
                plottooltext: "$label: <b>$dataValue</b>",
                divLineColor: "#FFFFFF",
                bgColor: "#FFFFFF",
                showBorder: "0",
                borderColor: "#FFFFFF",
                borderThickness: "0",
                showAlternateHGridColor: "1",
                interactiveLegend: "0",
                theme: "fusion"
            },
            categories: [],
            dataset: []
        };
        this.selectOptions = {
            title: 'Select',
        };
    }
    AdminDashboardPage.prototype.ionViewDidLoad = function () {
        this.getDashboardData();
    };
    AdminDashboardPage.prototype.ngOnInit = function () {
    };
    // Redirect to respective pages 
    AdminDashboardPage.prototype.goToPage = function (title) {
        switch (title) {
            case "Non-Zensarien":
                this.redirectToPage("NonZensarianListPage");
                break;
            case "Buses":
                this.redirectToPage("BusSearchPage");
                break;
            case "Shuttles":
                this.redirectToPage("ShuttlesListPage");
                break;
            case "Notification":
                this.redirectToPage(__WEBPACK_IMPORTED_MODULE_2__notification_notification__["a" /* NotificationPage */]);
                break;
            case "Reports":
                this.redirectToPage(__WEBPACK_IMPORTED_MODULE_3__reports_reports__["a" /* ReportPage */]);
                break;
            case "Security":
                this.redirectToPage("SecurityPersonnelBuseslistPage");
                break;
            default:
                break;
        }
    };
    /**
     * Method to push to particular page.
     * @param pageName name of page to be redirected
     */
    AdminDashboardPage.prototype.redirectToPage = function (pageName) {
        this.navCtrl.push(pageName, { role: "Associate" });
    };
    /**
     * Service call to get admin dashboard data
     */
    AdminDashboardPage.prototype.getDashboardData = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var home = {
            url: "getAdminBusGraphData",
            data: {},
            isZenAdmin: true,
        };
        this.httpProvider.http.commonService(home).subscribe(function (response) {
            if (response) {
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1") {
                    _this.responseData = response["data"];
                    _this.graphData = response["data"].graphData;
                    _this.dataSource.categories = _this.graphData.categories;
                    _this.dataSource.dataset = _this.graphData.dataset;
                    _this.occupancyRateTotal = _this.responseData.occupancyRate;
                    _this.occupancyRateBus = _this.responseData.occupancyRateBus;
                    _this.occupancyRateShuttle = _this.responseData.occupancyRateShuttle;
                    _this.onOccupancyChange();
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    // called when user changes occupancy rate
    AdminDashboardPage.prototype.onOccupancyChange = function () {
        if (this.transportModel == 'bus')
            this.occupancyRate = this.occupancyRateBus;
        else if (this.transportModel == 'shuttle')
            this.occupancyRate = this.occupancyRateShuttle;
        else
            this.occupancyRate = this.occupancyRateTotal;
    };
    AdminDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-admin-dashboard",template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\admin-dashboard\admin-dashboard.html"*/'<!--\n  Generated template for the AdminDashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>Admin</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="body-main-container">\n        <div class="card-container">\n            <!-- first card for chart -->\n            <ion-card class="card">\n                <ion-card-content>\n                    <div class="main-container">\n                        <img src="assets/zenAdmin/bus-pass-img.svg" class="bus-pass-img" />\n                        <div class="sub-container">\n                            <div class="total-buses">Total Bus Pass</div>\n                            <div class="date" *ngIf="responseData?.monthDetail">{{responseData?.monthDetail}}</div>\n                            <div class="date" *ngIf="!responseData?.monthDetail">-</div>\n                        </div>\n\n                        <div class="display-end">\n                            <div class="common-text">\n                                <span>{{responseData?.totalBusPass}}</span>\n                            </div>\n                            <div class="common-text2">\n                                <span>New: {{responseData?.newBusPass}}</span>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- second content  -->\n                    <div class="main-container">\n                        <img src="assets/zenAdmin/bus-staff-img.svg" class="bus-pass-img" />\n                        <div class="sub-container2">\n                            <div class="occupancy-rate">Occupancy Rate</div>\n                            <div class="date">\n                                <ion-select class="status-select" [(ngModel)]="transportModel" [selectOptions]="selectOptions" (ionChange)="onOccupancyChange()">\n                                    <ion-option value="bus/shuttle">Bus/Shuttle</ion-option>                                    \n                                    <ion-option value="bus" >Bus</ion-option>\n                                    <ion-option value="shuttle" >Shuttle</ion-option>\n                                </ion-select>\n                            </div>\n                        </div>\n\n                        <div class="display-end">\n                            <div class="decimal-value">\n                                <span *ngIf="occupancyRate">{{occupancyRate}}</span>\n                            </div>\n                        </div>\n                    </div>\n                </ion-card-content>\n\n                <fusioncharts width="100%" type="mssplinearea" [dataFormat]="json" [dataSource]="dataSource">\n                </fusioncharts>\n            </ion-card>\n        </div>\n\n        <!-- Grid div -->\n        <div class="second-card-container">\n            <ion-col class="text-center" *ngFor="let item of adminMenus" (click)="goToPage(item?.pageName)">\n                <img class="bus-img" src="{{item?.logo}}" />\n                <div class="buses">{{item?.label}}</div>\n            </ion-col>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\admin-dashboard\admin-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */]])
    ], AdminDashboardPage);
    return AdminDashboardPage;
}());

//# sourceMappingURL=admin-dashboard.js.map

/***/ })

});
//# sourceMappingURL=77.js.map