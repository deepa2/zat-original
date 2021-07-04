webpackJsonp([67],{

/***/ 1372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutePageModule", function() { return SearchRoutePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_route__ = __webpack_require__(1794);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchRoutePageModule = /** @class */ (function () {
    function SearchRoutePageModule() {
    }
    SearchRoutePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_route__["a" /* SearchRoutePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_route__["a" /* SearchRoutePage */]),
            ],
        })
    ], SearchRoutePageModule);
    return SearchRoutePageModule;
}());

//# sourceMappingURL=search-route.module.js.map

/***/ }),

/***/ 1794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchRoutePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the SearchRoutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchRoutePage = /** @class */ (function () {
    function SearchRoutePage(navCtrl, utility, httpProvider) {
        this.navCtrl = navCtrl;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.segmentModel = 'route';
        this.searchResult = [];
        this.routeList = [];
        this.showSegment = false;
        this.showNoDatatxt = false;
    }
    SearchRoutePage.prototype.ionViewDidLoad = function () {
    };
    // Method called when user enters text in search box
    SearchRoutePage.prototype.onSearchRoute = function () {
        if (this.searchInputText.length >= 3) {
            this.getRouteDetails();
        }
        else {
            this.routeList = [];
        }
    };
    /**
     * Service call for route details-Returns list of available routes
     */
    SearchRoutePage.prototype.getRouteDetails = function () {
        var _this = this;
        this.httpProvider.http.commonService({ url: "getSearchBusRouteDetails", isZenAdmin: true, data: { "searchKeyWord": this.searchInputText } })
            .subscribe(function (response) {
            if (!_this.utility.isEmptyOrNullOrUndefined(response) && !_this.utility.isEmptyOrNullOrUndefined(response['data']) && response.status["statusCode"] == '1') {
                _this.searchResult = response['data'];
                _this.routeList = _this.searchResult;
            }
            else if (response.status["statusCode"] == '1' && _this.utility.isEmptyOrNullOrUndefined(response['data'])) {
                // no pass available
                _this.showNoDatatxt = true;
                _this.routeList = [];
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    /**
     * Redirect to route details page
     * @param busRouteId particular route id
     * @param busData bus data to be passed to route details page
     */
    SearchRoutePage.prototype.gotoRouteDetails = function (busRouteId, busData) {
        this.navCtrl.push('ZenadminRouteDetailsPage', { 'busRouteId': busRouteId, 'busDetailsData': busData });
    };
    /**
     * Method called when user clears search text-Clear the searchtext and route list variables
     * @param event event details
     */
    SearchRoutePage.prototype.onCancel = function (event) {
        this.searchInputText = "";
        this.routeList = [];
    };
    SearchRoutePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-search-route',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\search-route\search-route.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-toolbar>\n            <ion-searchbar debounce="500" (ionInput)="onSearchRoute()" placeholder="Search Route/Pickup point"\n                [(ngModel)]="searchInputText" (ionClear)="onCancel($event)"></ion-searchbar>\n        </ion-toolbar>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="search-route-content" [ngClass]="{\'mt-35\': routeList?.length == \'0\'}">\n\n    <div *ngIf="routeList?.length > \'0\'" class="segment-header" slot="fixed">\n        <ion-segment [(ngModel)]="segmentModel">\n            <ion-segment-button value="route" class="custom-segment">Route</ion-segment-button>\n            <ion-segment-button value="pickupPoint" class="custom-segment">Pickup Point</ion-segment-button>\n        </ion-segment>\n    </div>\n\n    <ion-card class="no-data-parent" *ngIf="routeList?.length <= \'0\'">\n        <div class="no-data-found">\n            <span *ngIf="showNoDatatxt">No Route(s) or Pickup point(s) Found</span>\n        </div>\n        <div class="no-route-bg">\n            <img class="" src="assets/zenAdmin/search-route-bg.svg" onerror="this.src=\'assets/imgs/annual-status.svg\'" />\n        </div>\n    </ion-card>\n\n    <div *ngIf="routeList?.length > \'0\'" class="route-details-parent">\n        <div [ngSwitch]="segmentModel">\n            <div *ngFor="let routeItem of routeList; index as i">\n                <div *ngSwitchCase="\'route\'" class="route-container" (click)="gotoRouteDetails(routeItem?.busRouteId,routeItem)">\n                    <div class="list-item">\n                        <img class="routeImg" *ngIf="i % 5 == \'0\'" src="assets/zenAdmin/route-{{i % 5}}.svg" onerror="this.src=\'assets/imgs/annual-status.svg\'" />\n                        <img class="routeImg" *ngIf="i % 5 == \'1\'" src="assets/zenAdmin/route-{{i % 5}}.svg" onerror="this.src=\'assets/imgs/annual-status.svg\'" />\n                        <img class="routeImg" *ngIf="i % 5 == \'2\'" src="assets/zenAdmin/route-{{i % 5}}.svg" onerror="this.src=\'assets/imgs/annual-status.svg\'" />\n                        <img class="routeImg" *ngIf="i % 5 == \'3\'" src="assets/zenAdmin/route-{{i % 5}}.svg" onerror="this.src=\'assets/imgs/annual-status.svg\'" />\n                        <img class="routeImg" *ngIf="i % 5 == \'4\'" src="assets/zenAdmin/route-{{i % 5}}.svg" onerror="this.src=\'assets/imgs/annual-status.svg\'" />\n                        <div class="route-details">\n                            <div class="colorGrey route-title font14">Route:</div>\n                            <div class="padding-lftRt5 font15">{{routeItem?.routeName ? routeItem?.routeName: \'-\'}}<span *ngIf="routeItem?.isShuttleRoute" class="colorGrey">:Shuttle</span></div>\n                        </div>\n                        <div>\n                            <ion-icon name="ios-arrow-forward"></ion-icon>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div *ngSwitchCase="\'pickupPoint\'" class="pickup-container">\n                <div class="pickup-point-item" *ngFor="let pickupItem of routeList;index as i" (click)="gotoRouteDetails(pickupItem.busRouteId,pickupItem)">\n                    <img class="routeImg" *ngIf="i % 5 == \'0\'" src="assets/zenAdmin/pickup-{{i % 5}}.svg" onerror="this.src=\'assets/imgs/annual-status.svg\'" />\n                    <img class="routeImg" *ngIf="i % 5 == \'1\'" src="assets/zenAdmin/pickup-{{i % 5}}.svg" onerror="this.src=\'assets/imgs/annual-status.svg\'" />\n                    <img class="routeImg" *ngIf="i % 5 == \'2\'" src="assets/zenAdmin/pickup-{{i % 5}}.svg" onerror="this.src=\'assets/imgs/annual-status.svg\'" />\n                    <img class="routeImg" *ngIf="i % 5 == \'3\'" src="assets/zenAdmin/pickup-{{i % 5}}.svg" onerror="this.src=\'assets/imgs/annual-status.svg\'" />\n                    <img class="routeImg" *ngIf="i % 5 == \'4\'" src="assets/zenAdmin/pickup-{{i % 5}}.svg" onerror="this.src=\'assets/imgs/annual-status.svg\'" />\n\n                    <div class="pickup-details">\n                        <div class="padding-lftRt5 font14">{{pickupItem?.stopName}} <span *ngIf="pickupItem?.isShuttleRoute" class="colorGrey">:Shuttle</span></div>\n                        <div class="colorGrey padding5">Route: {{pickupItem?.routeName ? pickupItem?.routeName: \'-\'}}</div>\n                    </div>\n\n                    <div class="time-details-container">\n                        <img class="clock-img" *ngIf="pickupItem?.arrivalTime && pickupItem?.departureTime && (pickupItem?.arrivalTime != \'-\' || pickupItem?.departureTime != \'-\')"\n                            src="assets/zenAdmin/wall-clock.svg" onerror="this.src=\'assets/imgs/annual-status.svg\'" />\n                        <div class="time-value" *ngIf="pickupItem?.arrivalTime && pickupItem?.arrivalTime != \'-\'">{{pickupItem?.arrivalTime}}</div>\n                        <div class="time-value" *ngIf="pickupItem?.departureTime && pickupItem?.departureTime != \'-\'">{{pickupItem?.departureTime}}</div>\n                        <div>\n                            <ion-icon name="ios-arrow-forward" class="arrowForward"></ion-icon>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\search-route\search-route.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_0__providers_http_http__["a" /* HttpProvider */]])
    ], SearchRoutePage);
    return SearchRoutePage;
}());

//# sourceMappingURL=search-route.js.map

/***/ })

});
//# sourceMappingURL=67.js.map