webpackJsonp([13],{

/***/ 1427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalJobPostingPageModule", function() { return InternalJobPostingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_posting__ = __webpack_require__(1849);
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
                __WEBPACK_IMPORTED_MODULE_2__job_posting__["a" /* JobPostingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__job_posting__["a" /* JobPostingPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__["a" /* NgCircleProgressModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], InternalJobPostingPageModule);
    return InternalJobPostingPageModule;
}());

//# sourceMappingURL=job-posting.module.js.map

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

/***/ 1849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobPostingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobPostingPage = /** @class */ (function () {
    function JobPostingPage(navCtrl, navParams, utility, httpProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.jobsData = [];
        this.getJobsData();
    }
    JobPostingPage.prototype.getJobsData = function () {
        this.jobsData = [
            {
                "jobName": "Senior Business Analyst",
                "jobCode": "375360",
                "postedDate": "15th April,2020",
                "position": "1",
                "applicants": "5",
                "jobDetails": {
                    "experience": "5-8 Years",
                    "location": "PUNE ZENSAR PREMISES",
                    "project": "JLP DEV MS FLEX",
                    "primarySkills": "PRODUCT CONSULTING-PIM, STIBO",
                    "secondarySkills": "BUSINESS ANALYSIS-BA, CONSULTING",
                    "tertiarySkills": "BUSINESS ANALYSIS - DIGITAL-BA, CONSULTING - DIGITAL",
                    "gradeBrand": "D2",
                    "jobDescription": "",
                    "rolesResponsibiliteis": "Evaluating business processes, anticipating requirements, uncovering areas for improvement Staying up-to-date on the latest process and IT advancements to automate and modernize systems Conducting meetings and presentations to share ideas and findings Performing requirements analysis Effectively communicating insights and plans to cross-functional team members and management Gathering critical information from meetings with various stakeholders and producing useful reports"
                },
                "applicantDetails": [
                    {
                        "userId": "38852",
                        "userName": "Yogesh Kumar",
                        "allocation": "Project",
                        "onBoardingTime": "4 Weeks",
                        "machingPercent": "90",
                        "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=403196&img_id_token=5VSrUw5pY7bR%2F2vHwWv3Jjj4t2c%3D&t=1587680776449"
                    },
                    {
                        "userId": "51013",
                        "userName": "Sushant Singg",
                        "allocation": "Project",
                        "onBoardingTime": "3 Weeks",
                        "machingPercent": "85",
                        "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=221338313&img_id_token=zxJU6j4VCQ7JmjmGpuoPAiJ7UZc%3D&t=1587940555721"
                    },
                    {
                        "userId": "52936",
                        "userName": "Dinesh Vedpathak",
                        "allocation": "Pool",
                        "onBoardingTime": "2 Weeks",
                        "machingPercent": "68",
                        "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=96751453&img_id_token=F7y2ERY4mbMZJKILCRmUUCuPt90%3D&t=1587680738856"
                    },
                    {
                        "userId": "52977",
                        "userName": "Anuj Agrawal",
                        "allocation": "Project",
                        "onBoardingTime": "5 Weeks",
                        "machingPercent": "34",
                        "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=124520352&img_id_token=MKy3x5fEefvnLQcik7blr5w9INU%3D&t=1587940364585"
                    },
                    {
                        "userId": "43663",
                        "userName": "R Mahathi",
                        "allocation": "Pool",
                        "onBoardingTime": "1 Week",
                        "machingPercent": "20",
                        "userPic": "https://zenloungeplus.zensar.com/image/user_female_portrait?img_id=406373&img_id_token=rRPoNI7FF5ZcQSAbh%2Fw7Il8cN5o%3D&t=1587681018812"
                    }
                ]
            },
            {
                "jobName": "Technical Specialist",
                "jobCode": "678905",
                "postedDate": "12th April,2020",
                "position": "2",
                "applicants": "8",
                "jobDetails": {
                    "experience": "2-5 Years",
                    "location": "SAN JOSE",
                    "project": "FLUKE EBS AND DBA - MANAGED SERVICES",
                    "primarySkills": "ORACLE APPS DBA-GOLDEN GATE",
                    "secondarySkills": "ORACLE APPS DBA-RAC",
                    "tertiarySkills": "ORACLE APPS DBA-ORACLE DATABASE SUPPORT",
                    "gradeBrand": "E1",
                    "jobDescription": "",
                    "rolesResponsibiliteis": "Installation, configuration and upgrading of Oracle server software and related products Evaluate Oracle features and Oracle related products Establish and maintain sound backup and recovery policies and procedures. Take care of the Database design and implementation Implement and maintain database security (create and maintain users and roles, assign privileges) Perform database tuning and performance monitoring"
                },
                "applicantDetails": [
                    {
                        "userId": "18987",
                        "userName": "Vijay Pandit",
                        "allocation": "Pool",
                        "onBoardingTime": "0.5 Week",
                        "machingPercent": "90",
                        "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=126425880&img_id_token=Cvkg6P1XJyyksaQW7MT2bXgg5nU%3D&t=1587680831857"
                    },
                    {
                        "userId": "53058",
                        "userName": "Nishad Joshi",
                        "allocation": "Pool",
                        "onBoardingTime": "2 Weeks",
                        "machingPercent": "87",
                        "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=161679392&img_id_token=176hZuH2crpEef6ilHL%2Bxtez89g%3D&t=1587680794800"
                    },
                    {
                        "userId": "23635",
                        "userName": "Sumil Kandare",
                        "allocation": "Pool",
                        "onBoardingTime": "1 Week",
                        "machingPercent": "85",
                        "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=90488750&img_id_token=Y1PbOW91AK8FotxRjAW98al%2BMB4%3D&t=1587681068616"
                    },
                    {
                        "userId": "23278",
                        "userName": "Shekhar Gunjal",
                        "allocation": "Project",
                        "onBoardingTime": "2.5 Weeks",
                        "machingPercent": "82",
                        "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=404415&img_id_token=MR4xATNXzQXLSMg6BcYfZUfNdgA%3D&t=1587680758515"
                    },
                    {
                        "userId": "44195",
                        "userName": "Amarendra Singh",
                        "allocation": "Pool",
                        "onBoardingTime": "1.3 Weeks",
                        "machingPercent": "56",
                        "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=91019414&img_id_token=XCuuFRekriEiluSNoAJeZhpmCWk%3D&t=1587680945253"
                    },
                    {
                        "userId": "52977",
                        "userName": "Anuj Agrawal",
                        "allocation": "Pool",
                        "onBoardingTime": "2 Weeks",
                        "machingPercent": "45",
                        "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=124520352&img_id_token=MKy3x5fEefvnLQcik7blr5w9INU%3D&t=1587681142381"
                    },
                    {
                        "userId": "53378",
                        "userName": "Ruta Kamble",
                        "allocation": "Pool",
                        "onBoardingTime": "1 Week",
                        "machingPercent": "40",
                        "userPic": "https://zenloungeplus.zensar.com/image/user_female_portrait?img_id=146514364&img_id_token=lL%2Fu%2FbAhbFjv50f1hOwMaG3dDkc%3D&t=1587681100297"
                    },
                    {
                        "userId": "24629",
                        "userName": "Radhakrishna Kandalgaonkar",
                        "allocation": "Project",
                        "onBoardingTime": "3 Weeks",
                        "machingPercent": "12",
                        "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=232610076&img_id_token=EE2ZewR0y9kGii827DMfJqJq5hs%3D&t=1587680735594"
                    }
                ]
            },
            {
                "jobName": "Technical Architect",
                "jobCode": "454338",
                "postedDate": "30th March,2020",
                "position": "1",
                "applicants": "6",
                "jobDetails": {
                    "experience": "8-12 Years",
                    "location": "HYDERABAD",
                    "project": "SUNPOWER_CORPORATION_0023901002",
                    "primarySkills": "ENTERPRISE ARCHITECTURE-EA CONSULTING",
                    "secondarySkills": "SOLUTION ARCHITECTURE-SOLUTION ARCHITECTURE",
                    "tertiarySkills": "ENTERPRISE INTEGRATION, SOLUTION ARCHITECTURE ASSESSMENT, DESIGN AUTHORITY",
                    "gradeBrand": "D1",
                    "jobDescription": "",
                    "rolesResponsibiliteis": "Identifying the organisation’s needs Breaking down large scale projects into manageable chunks Working out which IT products to use based on cost benefit analysis and research Agreeing plans with the client Explaining to designers and developers what’s required and overseeing the progress Producing documents that monitor progress and ensure the quality of the project Advising the client on managing future IT needs"
                },
                "applicantDetails": [
                    {
                        "userId": "42768",
                        "userName": "Raja Surya Doddi",
                        "allocation": "Project",
                        "onBoardingTime": "4 Weeks",
                        "machingPercent": "95",
                        "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=92148910&img_id_token=%2B5WnXgF0kVkBhxt1oNhAcoQ%2BkTM%3D&t=1587680751444"
                    },
                    {
                        "userId": "43001",
                        "userName": "Arabi Mohammed",
                        "allocation": "Pool",
                        "onBoardingTime": "1 Week",
                        "machingPercent": "92",
                        "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=410964&img_id_token=iwMrbYcG2k56Ca2TbOXGNfOPSqI%3D&t=1587680896575"
                    },
                    {
                        "userId": "45434",
                        "userName": "Nagendra Mirajkar",
                        "allocation": "Pool",
                        "onBoardingTime": "0.5 Week",
                        "machingPercent": "82",
                        "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=331908139&img_id_token=a7cMjHWigTGgGVRDaMqNepifzrw%3D&t=1587681087539"
                    },
                    {
                        "userId": "20838",
                        "userName": "Sajeed Kazi",
                        "allocation": "Pool",
                        "onBoardingTime": "1 Week",
                        "machingPercent": "72",
                        "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=126235226&img_id_token=YlpKghMC4UviR5Uck5VzroQWQlo%3D&t=1587680965140"
                    },
                    {
                        "userId": "20888",
                        "userName": "Kapil Dhanarale",
                        "allocation": "Pool",
                        "onBoardingTime": "0.5 Week",
                        "machingPercent": "45",
                        "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=410138&img_id_token=OrtqVLkJFrRw2xYbWURqfypXBC4%3D&t=1587680882285"
                    },
                    {
                        "userId": "21832",
                        "userName": "Vaishali Hirve",
                        "allocation": "Project",
                        "onBoardingTime": "2 Weeks",
                        "machingPercent": "23",
                        "userPic": "https://zenloungeplus.zensar.com/image/user_female_portrait?img_id=289390068&img_id_token=hc6TXOxYaQEDtqLveUyFCsYTilg%3D&t=1587681109039"
                    }
                ]
            }
        ];
    };
    JobPostingPage.prototype.goToDetailPage = function (jobitem) {
        this.navCtrl.push("JobDetailsPage", { 'jobItem': jobitem });
    };
    JobPostingPage.prototype.goToApplicantsPage = function (appliedData) {
        this.navCtrl.push("JobApplicantsPage", { 'appliedData': appliedData });
    };
    JobPostingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-job-posting',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\job-posting\job-posting.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-title class="pageTitile">Jobs Posted</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <div class="jobs-wrapper">\n    <div class="jobs-list">\n\n      <div class="job-item" *ngFor="let item of jobsData" >\n        <div class="jobs-info-wrapper" (click)="goToDetailPage(item)">\n          <div class="job-icon">\n            <img src="assets/imgs/jobicon.svg">\n          </div>\n          <div class="job-info">\n            <div class="job-title">{{item.jobName}}</div>\n            <div class="job-info-item">\n              <div class="job-info-title">Job Code</div>\n              <div class="job-info-value">{{item.jobCode}}</div>\n            </div>\n            <div class="job-info-item">\n              <div class="job-info-title">Posted Date</div>\n              <div class="job-info-value">{{item.postedDate}}</div>\n            </div>\n            <div class="job-info-item">\n              <div class="job-info-title">Postion</div>\n              <div class="job-info-value">{{item.position}}</div>\n            </div>\n          </div>\n        </div>\n        <div class="applicants" (click)="goToApplicantsPage(item)">\n          <img class="file-icon" src="assets/imgs/information.svg">\n          <span>{{item.applicants}} Applicants </span>\n          <img src="assets/imgs/Arrow-forward-blue.svg">\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\job-posting\job-posting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */]])
    ], JobPostingPage);
    return JobPostingPage;
}());

//# sourceMappingURL=job-posting.js.map

/***/ })

});
//# sourceMappingURL=13.js.map