webpackJsonp([18],{

/***/ 1325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitDashboardPageModule", function() { return ExitDashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exit_dashboard__ = __webpack_require__(1745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(1455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExitDashboardPageModule = /** @class */ (function () {
    function ExitDashboardPageModule() {
    }
    ExitDashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exit_dashboard__["a" /* ExitDashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exit_dashboard__["a" /* ExitDashboardPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ExitDashboardPageModule);
    return ExitDashboardPageModule;
}());

//# sourceMappingURL=exit-dashboard.module.js.map

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

/***/ 1745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExitDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(44);
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
 * Generated class for the ExitDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExitDashboardPage = /** @class */ (function () {
    function ExitDashboardPage(navCtrl, navParams, httpProvider, utility, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.utility = utility;
        this.sanitizer = sanitizer;
        this.isDataAvailable = false;
        this.navParamData = this.navParams.get('data');
        if (this.navParamData && !this.navParamData.isExitUserEntry) {
            this.navCtrl.push('PersonalDetailsPage', {
                'peronalDetails': this.navParamData
            });
        }
    }
    ExitDashboardPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var param = {
            url: 'userDetails',
            data: {},
            zenExit: true
        };
        this.httpProvider.http.commonService(param).subscribe(function (response) {
            console.log(response);
            _this.utility.updateLoader(false);
            if (response && response.details) {
                _this.isDataAvailable = true;
                _this.exitDetailsData = response.details;
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    ExitDashboardPage.prototype.formateDate = function (data) {
        return this.utility.formatDate(data);
    };
    ExitDashboardPage.prototype.goToPersonalDetails = function () {
        this.navCtrl.push('PersonalDetailsPage', {
            'peronalDetails': this.exitDetailsData
        });
    };
    ExitDashboardPage.prototype.goToExitStatus = function () {
        this.navCtrl.push('ExitStatusPage');
    };
    ExitDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-exit-dashboard',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\Exit-Module\exit-dashboard\exit-dashboard.html"*/'<!--\n  Generated template for the ExitDashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Exit Tracker</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div *ngIf="exitDetailsData" class="exit-Details-Conatiner">\n    <div class="exit-Dashboard-Img-Conatiner">\n      <img src="assets/ZenExit-Imgs/exitImg.svg" alt="image">\n\n    </div>\n    <div class="exit-Dashboard-Dates-Conatiner">\n      <span class="exit-Resigned">\n        <img src="assets/ZenExit-Imgs/calender-black.svg" />\n        <span>\n          <span class="exit-FW"> Seperation initiated On: </span>\n          <span class="exit-ResignedColor">{{exitDetailsData?.resignedOn}}</span>\n        </span>\n      </span>\n      <span class="exit-Resigned">\n        <img src="assets/ZenExit-Imgs/calender-black.svg" />\n        <span>\n          <span class="exit-FW">Last working day: </span>\n          <span class="exit-LwdColor">{{exitDetailsData?.lastWorkingDate}}</span>\n        </span>\n      </span>\n    </div>\n  </div>\n  <div *ngIf="exitDetailsData" class="exit-sub-details">\n    <div (click)="goToPersonalDetails()" class="personal-container">\n      <div class="person-details">\n        <img src="assets/ZenExit-Imgs/personalBG.svg">\n        <span class="person-details-container">\n        <img  style="margin:10px"src="assets/ZenExit-Imgs/peronalImg.svg">\n        <span>Personal Details</span>\n      </span>\n      </div>\n      </div>\n      \n    <div (click)="goToExitStatus()" class="exit-tracker">\n      <div class="person-details">\n        <img  src="assets/ZenExit-Imgs/trackBg.svg">\n        <span class="person-details-container">\n        <img style="margin:10px" src="assets/ZenExit-Imgs/Tracker-exit.svg">\n        <span>Track Exit Status</span>\n      </span>\n      </div>\n    </div>\n\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\Exit-Module\exit-dashboard\exit-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ExitDashboardPage);
    return ExitDashboardPage;
}());

//# sourceMappingURL=exit-dashboard.js.map

/***/ })

});
//# sourceMappingURL=18.js.map