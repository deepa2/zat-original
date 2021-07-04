webpackJsonp([15],{

/***/ 1424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalJobPostingPageModule", function() { return InternalJobPostingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_job_posting__ = __webpack_require__(1846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(1455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var InternalJobPostingPageModule = /** @class */ (function () {
    function InternalJobPostingPageModule() {
    }
    InternalJobPostingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__internal_job_posting__["a" /* InternalJobPostingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__internal_job_posting__["a" /* InternalJobPostingPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__["a" /* NgCircleProgressModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], InternalJobPostingPageModule);
    return InternalJobPostingPageModule;
}());

//# sourceMappingURL=internal-job-posting.module.js.map

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

/***/ 1846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalJobPostingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_data__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_http_http__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var InternalJobPostingPage = /** @class */ (function () {
    function InternalJobPostingPage(navCtrl, navParams, dataService, store, utility, httpProvider, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.store = store;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.popoverCtrl = popoverCtrl;
        this.open = false;
        this._internalJobPosting = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subscription"]();
        //internalJobPostingurl: string = "jobOpenings";
        this.internalJobPostingurl = "tabWiseJobOpenings";
        this.startList = 0;
        this.endList = 10;
        this.infiniteScroll = '';
        this.resultPending = false;
        this.searchInput = '';
        //selectedTab:any;
        this.appliedJobs = [];
        this.nonAppliedJobs = [];
        this.allJobs = [];
        this.selectedTab = 0;
        this.refresher = '';
        this.showloader = true;
        this.jobs = [];
        this.jobKeys = [];
        this.jobValues = [];
        this.loadmore = false;
        this.isResult = false;
        this.isServiceCalled = false;
        this.istabChanged = false;
        this.params = {
            "startList": this.startList,
            "endList": this.endList
        };
        this.pageTitle = this.navParams.get('pageTitle');
        if (this.pageTitle == undefined || this.pageTitle == null) {
            this.pageTitle = 'Job Opportunities';
        }
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required);
        this.appliedTabIndex = this.navParams.get('appliedIndex');
    }
    InternalJobPostingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.resolve = this.navParams.get('resolve');
        this.dataService.getData("loginDetails").then(function (result) {
            _this.loading$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_2__app_store__["_59" /* getInternalJobPostingLoading */]);
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__app_store__["A" /* GetInternalJobPostingResetAction */]());
            _this.getData();
            _this.searchControl.valueChanges.debounceTime(1000).subscribe(function (search) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__app_store__["A" /* GetInternalJobPostingResetAction */]());
                _this.startList = 0;
                _this.endList = 10;
                _this.getData();
                //this.selectedIndex(); 
            });
        });
    };
    InternalJobPostingPage.prototype.focusButton = function () {
        var _this = this;
        setTimeout(function () {
            _this.search.setFocus();
        }, 500);
        this.content.scrollToTop();
        this.open = "true";
    };
    InternalJobPostingPage.prototype.ionViewWillLeave = function () {
        this._internalJobPosting.unsubscribe();
        if (this.resolve) {
            this.resolve();
        }
    };
    InternalJobPostingPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() !== '') {
            // this.getData();
            return this.jobList;
        }
    };
    InternalJobPostingPage.prototype.getData = function () {
        var _this = this;
        this.isToggled = true;
        this.utility.updateLoader(true);
        var params = {
            "start": this.startList,
            "end": this.endList,
            "searchText": this.searchInput,
            "type": "complete",
            "id": 0
        };
        var data = {
            url: this.internalJobPostingurl, data: params, ijp: true
        };
        return new Promise(function (resolve) {
            _this.httpProvider.http.commonService(data).subscribe(function (res) {
                if (res) {
                    if (res.details) {
                        _this.jobKeys = res.details;
                        _this.jobType = _this.jobKeys[_this.selectedTab].key;
                        //console.log(this.jobType);
                        _this.jobs = res.details;
                        _this.isServiceCalled = true;
                        if (_this.jobKeys.length == 1) {
                            _this.jobKeys.filter(function (item) {
                                _this.jobTypeName = item.key;
                            });
                        }
                        _this.utility.updateLoader(false);
                        // }
                        resolve();
                    }
                }
            }, function (error) {
                _this.utility.updateLoader(false);
            });
        });
    };
    InternalJobPostingPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (this.istabChanged) {
            //infiniteScroll.enable(false);
            infiniteScroll.complete();
            this.istabChanged = false;
        }
        else {
            this.jobs.filter(function (item) {
                if (item.key == _this.jobType) {
                    _this.startList = item.value.length;
                    _this.endList = _this.startList + 10;
                    //console.log(item.value[item.value.length - 1].jobCode);
                    _this.id = item.value[item.value.length - 1].id;
                }
            });
            var params = {
                "start": this.startList,
                "end": this.endList,
                "searchText": this.searchInput,
                "type": this.jobType,
                "id": this.id
            };
            var data = {
                url: this.internalJobPostingurl, data: params, ijp: true
            };
            this.isServiceCalled = false;
            this.httpProvider.http.commonService(data).subscribe(function (res) {
                if (res) {
                    if (res.details) {
                        //console.log(res.details)
                        //this.jobKeys = res.details;
                        //this.jobs = res.details;
                        var data_1 = res.details;
                        for (var i = 0; i < _this.jobs.length; i++) {
                            if (_this.jobType == _this.jobs[i].key) {
                                _this.jobs[i].value = _this.jobs[i].value.concat(data_1[0].value);
                            }
                        }
                        setTimeout(function () {
                            if (infiniteScroll) {
                                infiniteScroll.complete();
                                _this.isServiceCalled = true;
                            }
                        }, 1000);
                    }
                }
            });
        }
    };
    InternalJobPostingPage.prototype.selectTab = function (i, selectedTabData) {
        this.content.scrollToTop(100);
        this.selectedTab = i;
        //console.log("tab list length", selectedTabData.value.length)
        this.istabChanged = true;
        this.jobType = selectedTabData.key;
    };
    InternalJobPostingPage.prototype.presentOptions = function (myEvent) {
        var popover = this
            .popoverCtrl
            .create('PopoverPage', { 'type': 'others' });
        popover.present({ ev: myEvent });
    };
    InternalJobPostingPage.prototype.formatDate = function (obj) {
        return this.utility.formatDate(obj);
    };
    InternalJobPostingPage.prototype.presentIjpModal = function (data) {
        this.navCtrl.push('JobSkillDataPage', { selectedJob: data });
    };
    // jobInsights() {
    //   //console.log("jobs skill data");
    //   this.navCtrl.push("JobSkillDataPage", {})
    // }
    InternalJobPostingPage.prototype.markInterest = function (selectedData) {
        var _this = this;
        //console.log(selectedData)
        var url = "markInterested";
        if (selectedData.isInterested) {
            var param = {
                "jobCode": selectedData.jobCode,
                "upcomingFlag": -1
            };
            var data = { url: url, data: param, ijp: true };
            this.httpProvider.http.commonService(data).subscribe(function (response) {
                for (var i = 0; i < _this.jobs.length; i++) {
                    if (_this.jobType == _this.jobs[i].key) {
                        //console.log(this.jobs[i].value)
                        for (var j = 0; j < _this.jobs[i].value.length; j++) {
                            if (_this.jobs[i].value[j].jobCode == selectedData.jobCode) {
                                //console.log(this.jobs[i].value[j].jobCode + "  " + selectedData.jobCode)
                                _this.jobs[i].value[j].isInterested = false;
                            }
                        }
                    }
                    //console.log(this.jobs[i].value)
                }
            });
        }
        else if (!selectedData.isInterested) {
            var param = {
                "jobCode": selectedData.jobCode,
                "upcomingFlag": 1
            };
            var data = { url: url, data: param, ijp: true };
            this.httpProvider.http.commonService(data).subscribe(function (response) {
                ////console.log(response);
                for (var i = 0; i < _this.jobs.length; i++) {
                    if (_this.jobType == _this.jobs[i].key) {
                        //console.log(this.jobs[i].value)
                        for (var j = 0; j < _this.jobs[i].value.length; j++) {
                            if (_this.jobs[i].value[j].jobCode == selectedData.jobCode) {
                                //console.log(this.jobs[i].value[j].jobCode + "  " + selectedData.jobCode)
                                _this.jobs[i].value[j].isInterested = true;
                            }
                        }
                    }
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('search'),
        __metadata("design:type", Object)
    ], InternalJobPostingPage.prototype, "search", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], InternalJobPostingPage.prototype, "content", void 0);
    InternalJobPostingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-internal-job-posting',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\internal-job-posting\internal-job-posting.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-title class="pageTitile" *ngIf="jobKeys.length > 1">{{pageTitle}}</ion-title>\n    <ion-title class="pageTitile" *ngIf="jobKeys.length == 1">{{pageTitle}} - {{jobTypeName}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="presentOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-searchbar [(ngModel)]="searchInput" animated placeholder="Search job"\n      [formControl]="searchControl" (ionInput)="getItems($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n\n\n  <div ion-fixed class="parent" *ngIf="jobKeys.length > 1">\n    <div [ngClass]="{\'child2\':jobKeys.length == 2,\'child3\':jobKeys.length > 2}" *ngFor="let tabs of jobKeys;index as i"\n      (click)="selectTab(i,tabs)" [class.selected]="selectedTab == i">\n      {{tabs.key}}\n    </div>\n  </div>\n\n  <div *ngFor="let tabs of jobs ;index as j">\n    <div style="margin-top: 56px;" *ngIf="selectedTab ==j">\n      <!-- <div style="margin-top:5px" text-center *ngIf="tabs.value.length == 0 && isServiceCalled"> -->\n         <div style="margin-top:5px" text-center *ngIf="tabs.value.length == 0">\n        No Data Available\n      </div>\n      \n      <!-- <div style="margin-top:5px" text-center *ngIf="(tabs.value | sortJobs: searchInput).length === 0">\n        No Data Available\n      </div> -->\n\n      <!-- use this code for local search just replace ng for with \'*ngFor="let item of tabs.value | sortJobs: searchInput"\' -->\n      <ion-card *ngFor="let item of tabs.value" class="cardPosition" (click)="presentIjpModal(item)">\n        <div class="row navBg">\n          <div class="column1 left center">\n            <img src="{{item.icon}}" class="iconSize">\n          </div>\n          <div class="column1 middle column justify-content-space-evenly">\n            <span class="jobTitle">{{item?.jobTitle}}</span>\n            <span *ngIf="(item?.jobCode != null || item?.jobCode != \'\')&&(item?.type != \'upcoming\')"\n              class="jobCode">JobCode : {{item?.jobCode}}</span>\n\n          </div>\n          <div class="column1 right text-center">\n            <div class="alLogo">\n              <div class="logoImg">\n                <img src="assets/imgs/Zensar_ERD.png" class="imgPadding">\n              </div>\n              <div class="progressBarDiv">\n                <circle-progress [percent]="item.matchPercentage" [radius]="100" [outerStrokeWidth]="15"\n                  [innerStrokeWidth]="15" [space]="-14" [outerStrokeColor]="item.filledColor"\n                  [innerStrokeColor]="\'#DDDDDD\'" [titleFontSize]="24" [unitsFontSize]="24" [showSubtitle]="false"\n                  [animation]="true" [animationDuration]="300" [responsive]="true">\n                </circle-progress>\n              </div>\n            </div>\n            <div>{{item?.matchPercentage}}%</div>\n          </div>\n\n        </div>\n        <ion-card-content class="cardPadding">\n          <ion-row *ngFor="let itemDetails of item.jobDetails" class="jobDetails">\n            <ion-col col-2>\n              <img [src]="itemDetails.key" class="imgHtWT">\n            </ion-col>\n            <ion-col col-10>\n              <span>{{itemDetails.value}}</span>\n            </ion-col>\n          </ion-row>\n          <ion-item *ngIf="item?.type == \'upcoming\'" class="notify">\n            <ion-label>Notify Me</ion-label>\n            <ion-toggle checked={{item?.isInterested}} (click)="$event.stopPropagation();"\n              (ionChange)="markInterest(item)"></ion-toggle>\n          </ion-item>\n          <div class="btn" *ngIf="item?.type != \'upcoming\'">\n            <button ion-button outline item-right (click)="$event.stopPropagation();"\n              class="btnPosition">{{item?.applicationStatus}}</button>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\internal-job-posting\internal-job-posting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__providers_data_data__["a" /* Data */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_6__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_8__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */]])
    ], InternalJobPostingPage);
    return InternalJobPostingPage;
}());

//# sourceMappingURL=internal-job-posting.js.map

/***/ })

});
//# sourceMappingURL=15.js.map