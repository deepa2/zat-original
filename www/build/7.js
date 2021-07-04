webpackJsonp([7],{

/***/ 1377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPersonnelBusdetailsPageModule", function() { return SecurityPersonnelBusdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security_personnel_busdetails__ = __webpack_require__(1799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(1455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SecurityPersonnelBusdetailsPageModule = /** @class */ (function () {
    function SecurityPersonnelBusdetailsPageModule() {
    }
    SecurityPersonnelBusdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__security_personnel_busdetails__["a" /* SecurityPersonnelBusdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__security_personnel_busdetails__["a" /* SecurityPersonnelBusdetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], SecurityPersonnelBusdetailsPageModule);
    return SecurityPersonnelBusdetailsPageModule;
}());

//# sourceMappingURL=security-personnel-busdetails.module.js.map

/***/ }),

/***/ 1455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search__ = __webpack_require__(1456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sanitize_html_sanitize_html__ = __webpack_require__(1457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toogle_less_more_toogle_less_more__ = __webpack_require__(1458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sort_jobs_sort_jobs__ = __webpack_require__(1459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__safe_video_safe_video__ = __webpack_require__(1460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__replaceUnderscorePipe_replaceUnderscorePipe__ = __webpack_require__(1461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_cotraveller_cotraveller_pipe__ = __webpack_require__(1462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_sort__ = __webpack_require__(1463);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__search_search__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_2__sanitize_html_sanitize_html__["a" /* SanitizeHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_5__safe_video_safe_video__["a" /* SafeVideoPipe */],
                __WEBPACK_IMPORTED_MODULE_3__toogle_less_more_toogle_less_more__["a" /* ToogleLessMorePipe */],
                __WEBPACK_IMPORTED_MODULE_4__sort_jobs_sort_jobs__["a" /* SortJobsPipe */],
                __WEBPACK_IMPORTED_MODULE_6__replaceUnderscorePipe_replaceUnderscorePipe__["a" /* ReplaceUnderscorePipe */],
                __WEBPACK_IMPORTED_MODULE_7__pipes_cotraveller_cotraveller_pipe__["a" /* CotravellerPipe */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_sort__["a" /* SortPipe */]
            ],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__search_search__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_2__sanitize_html_sanitize_html__["a" /* SanitizeHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_5__safe_video_safe_video__["a" /* SafeVideoPipe */],
                __WEBPACK_IMPORTED_MODULE_3__toogle_less_more_toogle_less_more__["a" /* ToogleLessMorePipe */],
                __WEBPACK_IMPORTED_MODULE_4__sort_jobs_sort_jobs__["a" /* SortJobsPipe */],
                __WEBPACK_IMPORTED_MODULE_6__replaceUnderscorePipe_replaceUnderscorePipe__["a" /* ReplaceUnderscorePipe */],
                __WEBPACK_IMPORTED_MODULE_7__pipes_cotraveller_cotraveller_pipe__["a" /* CotravellerPipe */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_sort__["a" /* SortPipe */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 1456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!items)
            return [];
        var key = args[0];
        var searchTerm = args[1];
        if (!searchTerm)
            return items;
        return items.filter(function (it) {
            return it[key].toLowerCase().includes(searchTerm.toLowerCase());
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 1457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanitizeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SanitizeHtmlPipe = /** @class */ (function () {
    function SanitizeHtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeHtmlPipe.prototype.transform = function (v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    SanitizeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sanitizeHtml',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SanitizeHtmlPipe);
    return SanitizeHtmlPipe;
}());

//# sourceMappingURL=sanitize-html.js.map

/***/ }),

/***/ 1458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToogleLessMorePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the ToogleLessMorePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var ToogleLessMorePipe = /** @class */ (function () {
    function ToogleLessMorePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    ToogleLessMorePipe.prototype.transform = function (value, togglePipe, limit) {
        //return value.toLowerCase();
        if (value.length > limit && togglePipe) {
            return value.substring(0, limit) + '...';
        }
        else {
            return value;
        }
    };
    ToogleLessMorePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'toogleLessMore',
        })
    ], ToogleLessMorePipe);
    return ToogleLessMorePipe;
}());

//# sourceMappingURL=toogle-less-more.js.map

/***/ }),

/***/ 1459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortJobsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SortJobsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SortJobsPipe = /** @class */ (function () {
    function SortJobsPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SortJobsPipe.prototype.transform = function (jobs, searchText) {
        if (searchText == null || searchText == '') {
            return jobs;
        }
        else {
            return jobs.filter(function (obj) {
                if (obj.userName) {
                    return obj.userName.toLowerCase().indexOf(searchText.toLowerCase()) != -1;
                }
                else {
                    return obj.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) != -1;
                }
            });
        }
    };
    SortJobsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sortJobs',
        })
    ], SortJobsPipe);
    return SortJobsPipe;
}());

//# sourceMappingURL=sort-jobs.js.map

/***/ }),

/***/ 1460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeVideoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeVideoPipe = /** @class */ (function () {
    function SafeVideoPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeVideoPipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafeVideoPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safe' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafeVideoPipe);
    return SafeVideoPipe;
}());

//# sourceMappingURL=safe-video.js.map

/***/ }),

/***/ 1461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplaceUnderscorePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * pipe for getting the pdf name using the substring function
 */
var ReplaceUnderscorePipe = /** @class */ (function () {
    function ReplaceUnderscorePipe() {
    }
    ReplaceUnderscorePipe.prototype.transform = function (value) {
        return value ? value.replace(/_/g, " ") : value;
    };
    ReplaceUnderscorePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'replaceUnderscorePipe'
        })
    ], ReplaceUnderscorePipe);
    return ReplaceUnderscorePipe;
}());

//# sourceMappingURL=replaceUnderscorePipe.js.map

/***/ }),

/***/ 1462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotravellerPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CotravellerPipe = /** @class */ (function () {
    function CotravellerPipe() {
    }
    CotravellerPipe.prototype.transform = function (items) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!items)
            return [];
        var searchTerm = args[0];
        if (!searchTerm || searchTerm == 'All')
            return items;
        return items.filter(function (obj) {
            switch (searchTerm) {
                case 'Approved':
                    return obj.isApproved;
                    break;
                case 'Rejected':
                    return obj.isRejected;
                    break;
                case 'Pending':
                    return obj.isPending;
                    break;
                case 'Cancelled':
                    return obj.isCancelled;
                    break;
            }
        });
    };
    CotravellerPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'cotraveller',
        })
    ], CotravellerPipe);
    return CotravellerPipe;
}());

//# sourceMappingURL=cotraveller.pipe.js.map

/***/ }),

/***/ 1463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SortPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SortPipe.prototype.transform = function (list, args) {
        var searchText = args[0];
        var key1 = args[1];
        if (searchText == null || searchText == '') {
            return list;
        }
        else {
            return list.filter(function (obj) {
                if (obj[key1]) {
                    return obj[key1].toLowerCase().indexOf(searchText.toLowerCase()) != -1;
                }
                //  else {
                //   return obj[key1].toLowerCase().indexOf(searchText.toLowerCase()) != -1;
                // }
            });
        }
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sort',
        })
    ], SortPipe);
    return SortPipe;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 1799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityPersonnelBusdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_zenadmin_cancel_buspass_modal_cancel_buspass_modal__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
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
 * Generated class for the SecurityPersonnelBusdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SecurityPersonnelBusdetailsPage = /** @class */ (function () {
    function SecurityPersonnelBusdetailsPage(navParams, utility, httpProvider, modalCtrl) {
        this.navParams = navParams;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.segmentModel = 'bus-details';
        this.responseList = [];
        this.bookingStatus = "All";
        this.pickupPointsList = [];
        this.coTravellerList = [];
        this.selectOptions = {
            title: 'Filter',
        };
        if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get('busId')))
            this.busID = this.navParams.get('busId');
    }
    SecurityPersonnelBusdetailsPage.prototype.ionViewDidLoad = function () {
        this.getSecurityPersonnelBusDetail();
    };
    SecurityPersonnelBusdetailsPage.prototype.call = function (number) {
        this.utility.callNumber(number);
    };
    SecurityPersonnelBusdetailsPage.prototype.raiseComplaintReq = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__components_zenadmin_cancel_buspass_modal_cancel_buspass_modal__["a" /* CancelBuspassModalComponent */], {
            requestType: "raiseComplaint",
            busInchargeDetails: this.responseList,
            complainerType: "Security Personnel",
        }, {
            cssClass: 'cancel-pass-modal',
        });
        modal.present();
        modal.onDidDismiss(function (res) { });
    };
    SecurityPersonnelBusdetailsPage.prototype.getSecurityPersonnelBusDetail = function () {
        var _this = this;
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService({
            url: "getSecurityPersonnelBusDetail",
            data: {
                busId: this.busID,
            },
            isZenAdmin: true,
        }).subscribe(function (response) {
            _this.utility.updateLoader(false);
            if (response) {
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1") {
                    _this.responseList = response["data"];
                    _this.busDetails = _this.responseList.busDetailDO;
                    _this.busInchargeDetails = _this.responseList.busInchargeDetailDO;
                    _this.pickupPointsList = _this.responseList.pickupPointsDOs;
                    _this.coTravellerList = _this.responseList.coTravellersDetail;
                    _this.driverDetails = _this.responseList.driverDetailDO;
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    SecurityPersonnelBusdetailsPage.prototype.onTimeChange = function (time, busId, typeOfTime, otherTime) {
        var newTime = otherTime.toLowerCase();
        var formattedTime = __WEBPACK_IMPORTED_MODULE_5_moment__(time);
        var updatedTime = formattedTime.format("hh:mm A");
        if (newTime.indexOf('am' || 'pm') == -1) {
            otherTime = __WEBPACK_IMPORTED_MODULE_5_moment__(otherTime, 'HHmmss').format("hh:mm A");
        }
        this.updateInOutTime(updatedTime, busId, typeOfTime, otherTime);
    };
    SecurityPersonnelBusdetailsPage.prototype.updateInOutTime = function (updatedTime, busId, typeOfTime, otherTime) {
        var _this = this;
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService({
            url: "addUpdateBusInOutTime",
            data: {
                busId: busId,
                inTime: typeOfTime == 'inTime' ? updatedTime : otherTime,
                outTime: typeOfTime == 'outTime' ? updatedTime : otherTime,
            },
            isZenAdmin: true,
        }).subscribe(function (response) {
            _this.utility.updateLoader(false);
            if (response) {
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1") {
                    _this.responseData = response["data"];
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    SecurityPersonnelBusdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-security-personnel-busdetails',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\security-personal\security-personnel-busdetails\security-personnel-busdetails.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Bus Details</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="busDetails-card-parent" *ngIf="busDetails">\n        <ion-card>\n            <ion-card-content class="column">\n                <div class="container-raw">\n                    <div class="bus-icon">\n                        <img src="assets/zenAdmin/bus-icon.svg" />\n                    </div>\n                    <div class="bus-info">\n                        <div class="bus-title-div">\n                            <span class="bus-name label-key">Bus</span>\n                        </div>\n                        <div class="common-alignmnt">\n                            <span class="bus-number label-value">{{busDetails?.busNumber}}</span>\n                        </div>\n\n                    </div>\n                    <div class="available-seats">\n                        <img class="seatIcon" src="assets/zenAdmin/available_seats.svg">\n                        <span class="seats label-value">{{busDetails?.reservedSeats ? busDetails?.reservedSeats :\n                            \'0\'}}/{{busDetails?.totalSeats}}</span>\n                    </div>\n\n                </div>\n\n                <div class="container-raw">\n                    <div class="bus-icon">\n\n                    </div>\n                    <div class="common-alignmnt mt-10">\n                        <img class="small-icon" src="assets/zenAdmin/routeIcon.svg">\n                        <span class="route-title label-key">Route: </span>\n                        <span class="route-name label-value">{{busDetails?.routeName}}</span>\n                    </div>\n                </div>\n                <div class="container-raw">\n                    <div class="bus-icon">\n\n                    </div>\n                    <div class="arrival-seats-parent">\n                        <div class="seats-container">\n                            <img class="small-icon" src="assets/zenAdmin/seaticon.svg">\n                            <span class="route-title label-key">Seats: </span>\n                            <span class="route-name label-value">{{busDetails?.totalSeats}}</span>\n                        </div>\n                        <div class="arrival-container">\n                            <img class="arrival-icon" src="assets/zenAdmin/arrival-icon.svg">\n                            <span class="arrival-title label-key">Arrival</span>\n                            <!-- <span class="route-name">{{item.seatNo}}</span> -->\n                        </div>\n                    </div>\n                </div>\n            </ion-card-content>\n\n            <div class="time-details-container">\n                <div class="in-time-div">\n                    <span class="intimeTxt label-key">In Time: </span>\n                    <ion-datetime class="disabled-date" displayFormat="hh:mm A" placeholder="Time" (ionChange)="onTimeChange($event,busDetails.busId,\'inTime\',busDetails.outTime)"\n                        [(ngModel)]="busDetails.inTime" class="label-value" disabled></ion-datetime>\n                    <!-- <span>{{busDetails?.inTime}}</span> -->\n                    <!-- <ion-datetime displayFormat="hh:mm A" value="2012-12-15T13:47:20.789" placeholder="{{butItem?.inTime ? butItem?.inTime : \'Time\'}}"></ion-datetime> -->\n                </div>\n                <div class="out-time-div">\n                    <span class="outTimeTxt label-key">Out Time: </span>\n                    <ion-datetime class="disabled-date" displayFormat="hh:mm A" placeholder="Time" (ionChange)="onTimeChange($event,busDetails.busId,\'outTime\',busDetails.inTime)"\n                        [(ngModel)]="busDetails.outTime" class="label-value" disabled ></ion-datetime>\n                    <!-- <span>{{busDetails?.outTime}}</span> -->\n                    <!-- <ion-datetime displayFormat="hh:mm A" value="2012-12-15T13:47:20.789" placeholder="{{butItem?.outTime ? butItem?.outTime : \'Time\'}}"></ion-datetime> -->\n                </div>\n            </div>\n        </ion-card>\n\n    </div>\n    <div *ngIf="busDetails">\n        <ion-segment [(ngModel)]="segmentModel">\n            <ion-segment-button value="bus-details" class="custom-segment">Bus Details</ion-segment-button>\n            <ion-segment-button value="pickupPoint" class="custom-segment">Pickup Point</ion-segment-button>\n            <ion-segment-button value="cotravellers" class="custom-segment">Co Travellers</ion-segment-button>\n        </ion-segment>\n    </div>\n    <!-- bus details code -->\n    <div *ngIf="busDetails" [ngSwitch]="segmentModel" class="segment-parent" [ngClass]="{\'background-color-white\':segmentModel===\'bus-details\', \'background-color-white pickup-segment\':segmentModel===\'pickupPoint\', \'background-color-gray\':segmentModel===\'cotravellers\'}">\n        <div *ngSwitchCase="\'bus-details\'">\n            <div>\n                <ion-card class="card-parent">\n                    <div class="card-header padding10">\n                        <div><img class="incharge-img" src="assets/zenAdmin/sp-incharge-icon.svg" onerror="this.src=\'./assets/imgs/annual-status.svg\'" /></div>\n                        <div class="fontWeight">Bus Incharge</div>\n                    </div>\n                    <div class="card-data">\n                        <div class="userProfile-container">\n                            <div class="img-container"><img class="user-icon" [src]="busInchargeDetails?.busInchargeProfilePic"\n                                    onerror="this.src=\'assets/imgs/dummy-profile.png\'" /></div>\n                            <div class="user-info-container">\n                                <span class="associate-name label-key">Name</span>\n                                <span class="key-value label-value">{{busInchargeDetails?.busInchargeName}}</span>\n                            </div>\n                        </div>\n                        <div class="driver-info-container">\n                            <!-- <div class="driver-img-container"><img class="user-icon" src="assets/imgs/dummy-profile.png" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n            </div> -->\n                            <div class="contactimg-container"><img class="contactNo-image" src="assets/zenAdmin/sp-call-icon.svg"\n                                    onerror="this.src=\'assets/imgs/dummy-profile.png\'" /></div>\n                            <div class="driver-info-card">\n                                <span class="associate-name label-key">Contact Number</span>\n                                <span class="key-value label-value">{{busInchargeDetails?.busInchargeContactNumber}}</span>\n                            </div>\n                            <div (click)="call(busInchargeDetails?.busInchargeContactNumber)"> <img class="phone-image"\n                                    src="assets/zenAdmin/call-image.svg">\n                            </div>\n                        </div>\n                    </div>\n                </ion-card>\n            </div>\n            <div>\n                <ion-card class="card-parent">\n                    <div class="card-header padding10">\n                        <div><img class="incharge-img" src="assets/zenAdmin/driver-icon.svg" onerror="this.src=\'./assets/imgs/annual-status.svg\'" /></div>\n                        <div class="fontWeight">Driver Details</div>\n                    </div>\n                    <div class="card-data">\n                        <div class="userProfile-container">\n                            <div class="img-container"><img class="user-icon" src="assets/imgs/dummy-profile.png"\n                                    onerror="this.src=\'assets/imgs/dummy-profile.png\'" /></div>\n                            <div class="user-info-container">\n                                <span class="associate-name label-key">Name</span>\n                                <span class="key-value label-value">{{driverDetails?.driverName}}</span>\n                            </div>\n                        </div>\n                        <div class="driver-info-container">\n                            <!-- <div class="driver-img-container"><img class="user-icon" src="assets/imgs/dummy-profile.png" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n              </div> -->\n                            <div class="contactimg-container"><img class="contactNo-image" src="assets/zenAdmin/sp-call-icon.svg"\n                                    onerror="this.src=\'assets/imgs/dummy-profile.png\'" /></div>\n                            <div class="driver-info-card">\n                                <span class="associate-name label-key">Contact Number</span>\n                                <span class="key-value label-value">{{driverDetails?.driverNumber}}</span>\n                            </div>\n                            <div (click)="call(driverDetails?.driverNumber)"> <img class="phone-image" src="assets/zenAdmin/call-image.svg">\n                            </div>\n                        </div>\n                    </div>\n                </ion-card>\n            </div>\n        </div>\n        <!-- pickup point code -->\n        <div *ngSwitchCase="\'pickupPoint\'" class="pickup-container">\n            <div class="pickup-card-parent" *ngIf="pickupPointsList">\n                <ion-card class="pickup-points-card">\n                    <div class="points-title-container">\n                        <div>\n                            <img class="assetImg" src="assets/zenAdmin/pickup-points-route.svg" onerror="this.src=\'./assets/imgs/annual-status.svg\'" />\n                        </div>\n                        <div class="point-title">Pickup Points</div>\n                    </div>\n\n                    <div *ngFor="let item of pickupPointsList;let index=i;let odd=odd; let even=even;">\n                        <div class="timeline">\n                            <div class="container right" *ngIf="even">\n                                <div class="pick-up-content">\n                                    <div class="placeName">{{item.stopName}}</div>\n                                    <div class="time-parent ">\n                                        <span class="time-icon-container">\n                                            <!-- <ion-icon name="time"></ion-icon> -->\n                                            <img class="clock-img" src="assets/zenAdmin/wall-clock.svg" onerror="this.src=\'./assets/imgs/annual-status.svg\'" />\n                                        </span>\n                                        <span class="colorGrey">{{item.arrivalTime}}</span>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class="container left text-left" *ngIf="odd">\n                                <div class="pick-up-content align-item-end">\n                                    <div class="placeName">{{item.stopName}}</div>\n                                    <div class="time-parent ">\n                                        <span class="time-icon-container">\n                                            <!-- <ion-icon name="time"></ion-icon> -->\n                                            <img class="clock-img" src="assets/zenAdmin/wall-clock.svg" onerror="this.src=\'./assets/imgs/annual-status.svg\'" />\n                                        </span>\n                                        <span class="colorGrey">{{item.arrivalTime}}</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </ion-card>\n            </div>\n        </div>\n        <div *ngSwitchCase="\'cotravellers\'" class="co-taveller-parent">\n            <div class="cotravellers-container">\n                <div class="co-traveller-card">\n\n                    <!-- <ion-buttons end> -->\n                    <ion-select [(ngModel)]="bookingStatus" class="status-select" [selectOptions]="selectOptions"\n                        interface="popover">\n                        <ion-option value="All">All</ion-option>\n                        <ion-option value="Approved">Approved</ion-option>\n                        <!-- <ion-option value="Rejected">Rejected</ion-option>\n                        <ion-option value="Pending">Pending</ion-option> -->\n                        <ion-option value="Cancelled">Cancelled</ion-option>\n\n                    </ion-select>\n                    <!-- </ion-buttons> -->\n\n                </div>\n                <ng-container *ngIf="(coTravellerList | cotraveller: bookingStatus) as result">\n                    <div class="profile-info" *ngFor="let coTravellerItem of coTravellerList | cotraveller: bookingStatus">\n                        <div class="cotraveller-img-container">\n                            <!-- <img class="ringImg-profile" src="assets/zenLearn-imgs/profile-ring-img.svg" onerror="this.src=\'assets/imgs/blank.png\'" /> -->\n                            <img class="user-icon" [src]="coTravellerItem?.profilePicUrl" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n                        </div>\n                        <div class="user-details">\n                            <div style="display: flex;">\n                                <span class="username" [ngClass]="{\'width-100\': !coTravellerItem?.isBusIncharge}">{{coTravellerItem?.userName}}</span>\n                                <span class="incharge" *ngIf="coTravellerItem?.isBusIncharge">Incharge</span>\n                            </div>\n                            <div class="colorGrey fontWt300" *ngIf="coTravellerItem.isNonZensarian">Non-Zensar</div>\n                            <div class="colorGrey fontWt300" *ngIf="!coTravellerItem.isNonZensarian">Zensar</div>\n                        </div>\n                        <div class="contact-id-container">\n                            <span class="id-card"><img src="assets/zenAdmin/id-card-icon.svg" class="id-icon" /></span>\n                            <span (click)="call(coTravellerItem?.userName)">\n                                <img class="call-users" src="assets/zenAdmin/call-image.svg" />\n                            </span>\n                        </div>\n                    </div>\n                    <div *ngIf="result?.length <=\'0\'|| coTravellerList.length <= \'0\'" class="no-data">\n                        <span>No Data Found</span>\n                    </div>\n                </ng-container>\n            </div>\n            <!-- <div *ngIf="!coTravellerList || coTravellerList.length <= \'0\'" class="no-data">\n                <span>No Data Found</span>\n            </div> -->\n        </div>\n    </div>\n    <!-- raise complaint Fab button -->\n    <!-- <div > -->\n    <ion-fab right bottom (click)="raiseComplaintReq()" *ngIf="segmentModel == \'cotravellers\'">\n        <div ion-fab>\n            <img class="raiseComplaint-icon" src="assets/zenAdmin/raiseComplaint-icon.svg" />\n        </div>\n    </ion-fab>\n    <!-- </div> -->\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\security-personal\security-personnel-busdetails\security-personnel-busdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["w" /* ModalController */]])
    ], SecurityPersonnelBusdetailsPage);
    return SecurityPersonnelBusdetailsPage;
}());

//# sourceMappingURL=security-personnel-busdetails.js.map

/***/ })

});
//# sourceMappingURL=7.js.map