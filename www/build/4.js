webpackJsonp([4],{

/***/ 1407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZenrichPageModule", function() { return ZenrichPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zenrich__ = __webpack_require__(1829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_emojione__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(1455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ZenrichPageModule = /** @class */ (function () {
    function ZenrichPageModule() {
    }
    ZenrichPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zenrich__["a" /* ZenrichPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular_emojione__["a" /* EmojiModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zenrich__["a" /* ZenrichPage */]),
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* PipesModule */]
            ]
        })
    ], ZenrichPageModule);
    return ZenrichPageModule;
}());

//# sourceMappingURL=zenrich.module.js.map

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

/***/ 1829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZenrichPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_filter_job_filter_job__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_clipboard__ = __webpack_require__(735);
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
 * Generated class for the WowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZenrichPage = /** @class */ (function () {
    //private pd_data: any = [];
    function ZenrichPage(navCtrl, navParams, httpProvider, modalCtrl, popoverctr, utility, clipBoard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.popoverctr = popoverctr;
        this.utility = utility;
        this.clipBoard = clipBoard;
        this.openingsData = [];
        this.tabData = "Openings";
        this.infinteScroll = '';
        this.start = 0;
        this.end = 10;
        this.isDataAvailable = false;
        this.isShown = true;
        this.isFilter = false;
        this.skills_data = [];
        this.bu_data = [];
        this.city_data = [];
        this.parameters = this.navParams.get('getData');
        if (this.navParams.get('paramsFromChatBot')) {
            this.parameters = this.navParams.get('paramsFromChatBot');
        }
        this.getZenrichData();
    }
    ZenrichPage.prototype.getZenrichData = function (type) {
        var _this = this;
        if (type === void 0) { type = ''; }
        if (this.openingsData.length == 0) {
            this.utility.updateLoader(true);
        }
        var data;
        var url = "requestData";
        if (this.parameters.parameter == 'JOB_OPENINGS' && type == '') {
            data = {
                "searchKey": "",
                "start": this.start,
                "type": this.parameters.parameter,
                "end": this.end,
                "isFilter": this.isFilter,
                "skillCodes": this.skills_data,
                "buCodes": this.bu_data,
                "cities": this.city_data,
            };
        }
        else if (this.parameters.parameter == 'JOB_OPENINGS' && type != '') {
            //console.log(type);
            data = {
                "searchKey": "",
                "start": this.start,
                "type": this.parameters.parameter,
                "end": this.end,
                "isFilter": this.isFilter,
                "skillCodes": type.data.skills,
                "buCodes": type.data.bu,
                "cities": type.data.city,
                'startDate': type.data.startDate,
                'endDate': type.data.endDate
            };
        }
        else if (this.parameters.parameter != 'JOB_OPENINGS') {
            data = {
                "searchKey": "",
                "start": this.start,
                "type": this.parameters.parameter,
                "end": this.end
            };
        }
        this.httpProvider.http
            .commonService({ url: url, data: data, zenRich: true })
            .subscribe(function (res) {
            if (res && res.details) {
                if (res.details.requestData && res.details.requestData.length > 0) {
                    _this.isDataAvailable = true;
                    _this.openingsData = _this.openingsData.concat(res.details.requestData);
                }
            }
            if (_this.infinteScroll) {
                _this.infinteScroll.complete();
                _this.infinteScroll = "";
                return;
            }
            if (!res.details.requestData) {
                _this.isDataAvailable = true;
                _this.openingsData = [];
            }
            _this.utility.updateLoader(false);
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    ZenrichPage.prototype.presentpopover = function (myEvent, jobCode, jobtitle, item) {
        var _this = this;
        var popover = this
            .popoverctr
            .create('PopoverPage', { 'type': 'ZenRich' });
        popover.present({ ev: myEvent });
        popover.onDidDismiss(function (value) {
            if (value != null) {
                if (value == 'CopyCode') {
                    _this.clipBoard.copy(jobCode).then(function () {
                        _this.utility.showToast("Copied to clipboard");
                    });
                }
                else {
                    var title = _this.utility.formateData(item.jobTitle);
                    var skillsStr = _this.utility.formateData(item.skills);
                    var str = "Title: " + title + "\nGrade: " + item.grade + "\nExperience:" + item.experience + "\nSkills: " + skillsStr + "\nLocation: " + item.location;
                    _this.clipBoard.copy(str).then(function () {
                        _this.utility.showToast("Copied to clipboard");
                    });
                }
            }
        });
    };
    ZenrichPage.prototype.goToJobDetails = function (srfNo) {
        this.navCtrl.push("ZenrichJobDetailPage", { 'srfNo': srfNo });
    };
    ZenrichPage.prototype.goToRefDetails = function (refId, srfNo) {
        this.navCtrl.push("ZenrichRefDetailPage", { 'referralMappingId': refId, 'srfNo': srfNo });
    };
    ZenrichPage.prototype.goToSavedProfileDetails = function (data) {
        this.navCtrl.push('ZenRichSavedProfilesPage', { 'profileDetails': data });
    };
    ZenrichPage.prototype.goToCandidateProfile = function () {
        this.navCtrl.push('ReferralDetailsPage', {
            'candidateProfileId': 0,
            "createNew": true,
            'isCominFromProfile': true
        });
    };
    ZenrichPage.prototype.bookMarked = function (selectedItem, index) {
        var _this = this;
        var bookedmarkValue;
        this.openingsData.filter(function (value) {
            if (value.srfNo == selectedItem.srfNo) {
                bookedmarkValue = !value.isBookmarked;
                value.isBookmarked = !value.isBookmarked;
            }
        });
        var param = {
            url: 'bookmarkSpecificJob',
            data: {
                srfNo: selectedItem.srfNo,
                save: bookedmarkValue
            },
            zenRich: true
        };
        this.httpProvider.http.commonService(param).subscribe(function (response) {
            //console.log(response)
            _this.utility.showToast(response.details.toastMessage);
        });
    };
    ZenrichPage.prototype.goToSearchPage = function () {
        this.navCtrl.push('ZenRichSearchPage', {
            'type': this.parameters
        });
    };
    ZenrichPage.prototype.loadData = function (event) {
        this.infinteScroll = event;
        this.start = this.end;
        this.end += 10;
        this.getZenrichData();
    };
    ZenrichPage.prototype.removeItem = function (item, index) {
        var data = this.bookMarked(item, index);
        //console.log(data);
        this.openingsData = this.openingsData.filter(function (value) { return value.srfNo != item.srfNo; });
        //console.log(this.openingsData);
    };
    ZenrichPage.prototype.formatDate = function (obj) {
        return this.utility.formatDate(obj);
    };
    ZenrichPage.prototype.goToJobFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_filter_job_filter_job__["a" /* FilterJobComponent */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                if (data.data) {
                    var param = {};
                    _this.isFilter = true;
                    _this.skills_data = data.data.skills;
                    var startDate = data.data.startDate;
                    var endDate = data.data.endDate;
                    _this.city_data = data.data.city,
                        _this.bu_data = data.data.bu,
                        _this.start = 0;
                    _this.end = 10;
                    _this.openingsData = [];
                    _this.isDataAvailable = false;
                    _this.getZenrichData(data);
                }
                else {
                    _this.isFilter = true;
                    _this.skills_data = [];
                    _this.city_data = [],
                        _this.bu_data = [],
                        _this.start = 0;
                    _this.end = 10;
                    _this.openingsData = [];
                    _this.isDataAvailable = false;
                    _this.getZenrichData();
                }
                //console.log(data);
            }
        });
    };
    ZenrichPage.prototype.getMainSkills = function (value) {
        return this.utility.formateData(value);
    };
    ZenrichPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-zenrich',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zenrich\zenrich.html"*/'<!--\n  Generated template for the WowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{this.parameters.value}}</ion-title>\n    <ion-buttons end>\n      <button *ngIf="parameters.parameter !=\'SAVED_PROFILES\'" ion-button icon-only (click)="goToSearchPage()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <!-- <button class="btnSize"  ion-button icon-only\n        (click)="goToCandidateProfile()">\n        <ion-icon name="ios-add-circle-outline"></ion-icon>\n      </button> -->\n\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="wow_content" class="bgColor">\n  <div *ngIf="isDataAvailable" class="main-container">\n    <div *ngIf="this.parameters.parameter ==\'JOB_OPENINGS\'">\n      <div class="opening-card" *ngFor="let item of openingsData; index as i">\n        <div class="job-wrapper">\n          <div [ngClass]="{\'hot-job\': item.hotJobFlag != \'\'}" class="job-icon jobIcon{{i}}">\n            <!-- <img class="" src="assets/imgs/annual-status.svg" /> -->\n            <img class="" src="assets/imgs/job-item-icon.svg" />\n            <span>{{item?.srfNo}}</span>\n            <div class="hot-con" *ngIf="item.hotJobFlag != \'\'"><img class="hot-icon" src="assets/imgs/hot-icon.svg"> {{item.hotJobFlag}}</div>\n      \n          </div>\n          <div class="job-info" (click)="goToJobDetails(item.srfNo)">\n            <div class="job-title">\n              <span class="job-title-wrap"> <span>{{item?.jobTitle}}</span> </span>\n              <div class="niche-wrap" *ngIf="item.nicheSkillFlag">\n                <img  src="assets/imgs/nicheStar.svg"> \n                <span class="niche-skills">Niche skill</span>\n              </div>\n           \n            </div>\n            <div class="skills info">\n              <span class="img-mar5"><img src="assets/icon/dashboard-icons/ZenRich_skills.svg"></span>\n              <span class="job-skills">{{getMainSkills(item?.skills)}}</span>\n            </div>\n           \n             <!-- bonus info -->\n             <div class="job-info-footer">\n              <div class="experience">\n                <img class="money-icon" src="assets/imgs/money.svg" />\n                <span>Bonus: Upto <img class="rupee-icon" src="assets/imgs/rupee.svg" /><span [ngClass]="{\'bonus\': ((item.hotJobReferralAmount != \'\' && item.hotJobFlag != \'\') &&  item.referralBonus != (item.hotJobReferralAmount | number))}" class="inr">{{item?.referralBonus}}</span></span>\n                <span *ngIf="item.hotJobFlag != \'\' &&  item.referralBonus != (item.hotJobReferralAmount | number)  && item.hotJobReferralAmount != \'\'" class="hot-amount"><img class="rupee-icon" src="assets/imgs/rupee-green.svg" />{{item?.hotJobReferralAmount}}</span>\n              </div>\n              <div class="referral-Bonus">\n                <span><img class="money-icon" src="assets/imgs/Person.png"></span>\n                <span>{{item?.profileMatchCount}}</span></div>\n            </div>\n          </div>\n          <div class="save-job">\n            <img class="bookMarkIcon" (click)="$event.stopPropagation()" (click)="bookMarked(item,i)"\n              *ngIf="!item?.isBookmarked" src="assets/icon/dashboard-icons/bookMarked.svg">\n            <img class="bookMarkIcon" (click)="$event.stopPropagation()" (click)="bookMarked(item,i)"\n              *ngIf="item?.isBookmarked" src="assets/icon/dashboard-icons/bookMarkFilled.svg">\n            <ion-icon name="more" (click)="presentpopover($event,item?.srfNo, item?.jobTitle,item)"></ion-icon>\n          </div>\n          \n        </div>\n        <div class="job-footer job-info-footer">\n          <div class="experience">\n            <img class="experience-icon" src="assets/icon/dashboard-icons/ZenRich_experiance.svg" />\n            <span class="job-skills">Exp: {{item?.experience}}</span>\n          </div>\n          <div class="job-location"><span><img class="experience-icon"\n                src="assets/icon/dashboard-icons/ZenRich_location.svg"></span>\n            <span class="job-skills">{{item?.location}}</span>\n          </div>\n        </div>\n      </div>\n      <div class="no-data-msg" *ngIf="openingsData.length == 0">No data available </div>\n    </div>\n\n\n    <div *ngIf="this.parameters.parameter ==\'MY_BOOKMARKED_JOBS\'">\n      <div class="opening-card" *ngFor="let item of openingsData; index as i">\n        <div class="job-wrapper">\n          <div class="job-icon" [ngClass]="{\'hot-job\': item.hotJobFlag != \'\'}">\n            <img class="" src="assets/imgs/job-item-icon.svg" />\n            <span>{{item?.srfNo}}</span>\n            <div class="hot-con" *ngIf="item.hotJobFlag != \'\'"><img class="hot-icon" src="assets/imgs/hot-icon.svg"> {{item.hotJobFlag}}</div>\n      \n          </div>\n          <div class="job-info" (click)="goToJobDetails(item.srfNo)">\n            <div class="job-title">{{item?.jobTitle}}</div>\n            <div class="skills info"><span class="img-mar5"><img\n                  src="assets/icon/dashboard-icons/ZenRich_skills.svg"></span>\n              <span class="job-skills">{{getMainSkills(item?.skills)}}</span></div>\n               <!-- bonus info -->\n             <div class="job-info-footer">\n              <div class="experience">\n                <img class="money-icon" src="assets/imgs/money.svg" />\n                <span>Bonus: Upto <img class="rupee-icon" src="assets/imgs/rupee.svg" /><span [ngClass]="{\'bonus\': ((item.hotJobReferralAmount != \'\' && item.hotJobFlag != \'\') &&  item.referralBonus != (item.hotJobReferralAmount | number))}" class="inr">{{item?.referralBonus}}</span></span>\n                <span *ngIf="item.hotJobFlag != \'\' &&  item.referralBonus != (item.hotJobReferralAmount | number) && item.hotJobReferralAmount != \'\'" class="hot-amount"><img class="rupee-icon" src="assets/imgs/rupee-green.svg" />{{item?.hotJobReferralAmount}}</span>\n              </div>\n              <div class="referral-Bonus">\n                <span><img class="money-icon" src="assets/imgs/Person.png"></span>\n                <span>{{item?.profileMatchCount}}</span></div>\n            </div>\n          </div>\n          <div class="save-job">\n            <img class="bookMarkIcon" (click)="$event.stopPropagation()" (click)="removeItem(item,i)"\n              *ngIf="item?.isBookmarked" src="assets/icon/dashboard-icons/bookMarkFilled.svg">\n            <ion-icon name="more" (click)="presentpopover($event,item?.srfNo, item?.jobTitle,item)"></ion-icon>\n          </div>\n        </div>\n        <div class="job-footer job-info-footer">\n          <div class="experience">\n            <img class="experience-icon" src="assets/icon/dashboard-icons/ZenRich_experiance.svg" />\n            <span class="job-skills">Exp: {{item?.experience}}</span>\n          </div>\n          <div class="job-location"><span><img class="experience-icon"\n                src="assets/icon/dashboard-icons/ZenRich_location.svg"></span>\n            <span class="job-skills">{{item?.location}}</span>\n          </div>\n        </div>\n      </div>\n\n      <div class="no-data-msg" *ngIf="openingsData.length == 0">No data available </div>\n    </div>\n\n    <div *ngIf="this.parameters.parameter ==\'SAVED_PROFILES\'">\n      <div class="opening-card" *ngFor="let item of openingsData">\n        <div class="job-wrapper" (click)="goToSavedProfileDetails(item)">\n          <div lass="job-icon">\n            <img class="profileIcon" src="assets/imgs/Person.png" />\n          </div>\n          <div class="job-info">\n            <div lass="job-title">\n              {{item?.candidateName}}\n            </div>\n            <div class="skills info">\n              <!-- <img [src]="item?.jobMatchIcon"> -->\n              <img class="profileIcon" src="assets/imgs/Person.png" />\n              <span>{{item?.jobMatch}}</span>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <div class="no-data-msg" *ngIf="openingsData.length == 0">No data available </div>\n    </div>\n\n    <div *ngIf="this.parameters.parameter ==\'MY_REFERRALS\'">\n      <div class="opening-card" *ngFor="let item of openingsData; index as i">\n        <div class="job-wrapper">\n          <div class="job-icon" [ngClass]="{\'hot-job\': item.hotJobFlag != \'\'}">\n            <img src="assets/imgs/job-item-icon.svg" />\n            <span>{{item?.srfNo}}</span>\n            <div class="hot-con" *ngIf="item.hotJobFlag != \'\'"><img class="hot-icon" src="assets/imgs/hot-icon.svg"> {{item.hotJobFlag}}</div>\n      \n          </div>\n          <div class="job-info" (click)="goToRefDetails(item.referralMappingId,item.srfNo)">\n            <div class="job-title">{{item?.jobTitle}}</div>\n            <div class="skills info"><span><img class="imgStyle" src="assets/imgs/Person.png"></span>\n              <span class="job-skills">{{item?.candidateName}}</span></div>\n            <div class="job-location info"><span class="img-mar5"><img\n                  src="assets/icon/dashboard-icons/ZenRich_calendar.svg"></span>\n              <span class="job-skills">Referred Date : {{formatDate(item?.referredDate) | date}}</span>\n            </div>\n            <div *ngIf="item.isCancelled" class="job-cancelled">Job Cancelled</div>\n            <div *ngIf="item.isExpired" class="job-expired">Referral Expired</div>\n            <div *ngIf="item.isOnHold" class="job-onhold">Job On Hold</div>\n            <!-- bonus info -->\n            <div class="job-info-footer">\n              <div class="experience">\n                <img class="money-icon" src="assets/imgs/money.svg" />\n                <span>Bonus: Upto <img class="rupee-icon" src="assets/imgs/rupee.svg" /><span [ngClass]="{\'bonus\': ((item.hotJobReferralAmount != \'\' && item.hotJobFlag != \'\') &&  item.referralBonus != (item.hotJobReferralAmount | number))}" class="inr">{{item?.referralBonus}}</span></span>\n                <span *ngIf="item.hotJobFlag != \'\' &&  item.referralBonus != (item.hotJobReferralAmount | number)  && item.hotJobReferralAmount != \'\'" class="hot-amount"><img class="rupee-icon" src="assets/imgs/rupee-green.svg" />{{item?.hotJobReferralAmount}}</span>\n              </div>\n              <div class="referral-status">\n                <span><img class="img-mar5" src="assets/icon/dashboard-icons/ZenRich_process.svg"></span>\n                <span>Status : {{item?.candidateStatus}}</span>  \n              </div>\n            </div>\n          </div>\n          <div class="save-job">\n            <ion-icon name="more" (click)="presentpopover($event, item?.srfNo, item?.jobTitle,item)"></ion-icon>\n          </div>\n        </div>\n        \n      </div>\n      <div class="no-data-msg" *ngIf="openingsData.length == 0">No data available </div>\n    </div>\n\n\n    <ion-infinite-scroll (ionInfinite)="loadData($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n     \n    </ion-infinite-scroll>\n </div>\n <ion-fab (click)="goToJobFilter()" bottom right *ngIf="parameters.parameter ==\'JOB_OPENINGS\'">\n  <button ion-fab>\n    <ion-icon name="options"></ion-icon>\n  </button>\n</ion-fab>\n<ion-fab (click)="goToCandidateProfile()" bottom right *ngIf="parameters.parameter ==\'SAVED_PROFILES\'">\n  <button ion-fab>\n    <ion-icon name="ios-add-outline"></ion-icon>\n  </button>\n</ion-fab>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zenrich\zenrich.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_clipboard__["a" /* Clipboard */]])
    ], ZenrichPage);
    return ZenrichPage;
}());

//# sourceMappingURL=zenrich.js.map

/***/ })

});
//# sourceMappingURL=4.js.map