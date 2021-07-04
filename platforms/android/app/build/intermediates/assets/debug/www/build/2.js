webpackJsonp([2,28],{

/***/ 1310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskPageModule", function() { return AddTaskPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_task__ = __webpack_require__(1477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddTaskPageModule = /** @class */ (function () {
    function AddTaskPageModule() {
    }
    AddTaskPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_task__["a" /* AddTaskPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_task__["a" /* AddTaskPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__add_task__["a" /* AddTaskPage */]]
        })
    ], AddTaskPageModule);
    return AddTaskPageModule;
}());

//# sourceMappingURL=add-task.module.js.map

/***/ }),

/***/ 1451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBotModule", function() { return ChatBotModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_bot__ = __webpack_require__(1874);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(1455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_linky__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__container_zents_timesheet_add_task_add_task_module__ = __webpack_require__(1310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/*import { TruncateModule } from 'ng2-truncate'; */



// container/zents/timesheet/add-task/add-task.module
var ChatBotModule = /** @class */ (function () {
    function ChatBotModule() {
    }
    ChatBotModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            entryComponents: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_bot__["a" /* ChatBot */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_bot__["a" /* ChatBot */]),
                __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["c" /* StoreModule */].forFeature('app', __WEBPACK_IMPORTED_MODULE_5__store__["_98" /* reducers */], { metaReducers: __WEBPACK_IMPORTED_MODULE_5__store__["_96" /* metaReducers */] }),
                __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["EffectsModule"].forFeature(__WEBPACK_IMPORTED_MODULE_5__store__["_28" /* effects */]),
                __WEBPACK_IMPORTED_MODULE_8_ngx_linky__["a" /* LinkyModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_9__container_zents_timesheet_add_task_add_task_module__["AddTaskPageModule"]
            ],
        })
    ], ChatBotModule);
    return ChatBotModule;
}());

//# sourceMappingURL=chat-bot.module.js.map

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

/***/ 1477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_std_task_list_modal_std_task_list_modal__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var AddTaskPage = /** @class */ (function () {
    function AddTaskPage(navCtrl, navParams, fb, utility, httpProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.data = {
            type: "add-task",
            task: null,
            projectListForProjectTask: []
        };
        this.projectList = [];
        this.stdTaskList = [];
        this.projRelatedStdTasks = [];
        this.orgRelatedStdTasks = [];
        this.submitted = false;
        this.billabilityList = [];
        this.isFixedBidProject = null;
        this.milestoneList = [];
        this.hideProjectTask = false;
        this.taskAndtimesheetDetails = [];
        this.isPayrollToBeFilledZeroHours = false;
        this.data.task = 'project';
        var data = this.navParams.get('timeEntryData');
        if (data) {
            this.currentDate = data.selectedDate;
            this.hideProjectTask = data.hideProjectTask;
            this.data.task = this.hideProjectTask ? 'standard' : 'project';
            this.taskAndtimesheetDetails = data.taskAndTimesheetDetails;
            this.isPayrollToBeFilledZeroHours = data.isPayrollToBeFilledZeroHours;
            this.resolve = data.resolve;
        }
    }
    AddTaskPage.prototype.ionViewDidLoad = function () {
    };
    AddTaskPage.prototype.ngOnInit = function () {
        //console.log("this.hideProjectTask", this.hideProjectTask);
        this.getProjectList();
        if (this.hideProjectTask) {
            this.getStdTaskList();
        }
        this.standardForm = this.fb.group({
            stdProjectId: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            stdTaskId: [{ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            stdTaskName: [{ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            stdBillabilityName: [{ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            stdTime: [{ value: '', disabled: true }],
            stdRemarks: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            stdMilestone: ['']
        });
        this.standardForm.get('stdTime').setValue(this.isPayrollToBeFilledZeroHours ? '00:00' : '01:00');
    };
    AddTaskPage.prototype.addTask = function (data) {
        this.addProjectTaskService(data);
    };
    AddTaskPage.prototype.onStdProjSelect = function () {
        var _this = this;
        this.standardForm.get('stdTaskId').enable();
        this.standardForm.get('stdTaskName').enable();
        var projId = this.standardForm.get('stdProjectId').value;
        if (this.projectList) {
            this.projectList.map(function (item) {
                if (projId == item.projectId) {
                    _this.selProjectObj = item;
                    _this.billabilityList = _this.utility.checkBillability(item.projectBillability);
                    if (_this.billabilityList.length == 1) {
                        _this.standardForm.get('stdBillabilityName').setValue(_this.billabilityList[0].value);
                    }
                    else {
                        _this.standardForm.get('stdBillabilityName').setValue('');
                    }
                    _this.isFixedBidProject = item.isFixedBidProject;
                    if (_this.isFixedBidProject == 'YES' && item.milestoneDetailsDTOs.length > 0) {
                        _this.milestoneList = item.milestoneDetailsDTOs;
                        _this.standardForm.get('stdMilestone').setValue(_this.milestoneList.length == 1 ? _this.milestoneList[0] : '');
                        _this.milestoneObj = _this.milestoneList[0];
                        _this.standardForm.get('stdMilestone').setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required);
                    }
                    else {
                        _this.standardForm.get('stdMilestone').clearValidators();
                        _this.standardForm.get('stdMilestone').setValue('');
                    }
                }
            });
        }
    };
    AddTaskPage.prototype.onStdTaskSelect = function (e) {
        var _this = this;
        this.standardForm.get('stdBillabilityName').enable();
        this.stdTaskList.map(function (data) {
            if (e == data.taskId) {
                _this.stdTaskObj = data;
                if ((_this.stdTaskObj.taskId == 1039 || _this.stdTaskObj.taskId == 1040 ||
                    _this.stdTaskObj.taskId == 1041 || _this.stdTaskObj.taskId == 1042) && _this.stdTaskObj.zeroHrsCallWaitingFlag == 'YES') {
                    _this.standardForm.get('stdTime').setValue('00:00');
                    _this.standardForm.get('stdTime').disable();
                    _this.standardForm.get('stdRemarks').setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required);
                    _this.standardForm.get('stdRemarks').updateValueAndValidity();
                }
                else {
                    _this.standardForm.get('stdTime').enable();
                    _this.standardForm.get('stdRemarks').clearValidators();
                    _this.standardForm.get('stdRemarks').updateValueAndValidity();
                }
            }
        });
    };
    AddTaskPage.prototype.onBillabilityChange = function (e) { };
    AddTaskPage.prototype.onSubmit = function () {
        if (this.isPayrollToBeFilledZeroHours && this.standardForm.get('stdTime').value == '00:00' && this.standardForm.get('stdRemarks').value == '') {
            this.standardForm.get('stdRemarks').setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required);
            this.standardForm.get('stdRemarks').updateValueAndValidity();
        }
        else if (!this.isPayrollToBeFilledZeroHours && this.standardForm.get('stdTime').value == '00:00') {
            this.standardForm.get('stdTime').setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].min(1));
            this.standardForm.get('stdTime').updateValueAndValidity();
        }
        else {
            this.standardForm.get('stdRemarks').clearValidators();
            this.standardForm.get('stdRemarks').updateValueAndValidity();
        }
        this.submitted = true;
        if (this.standardForm.valid) {
            this.showSaveConfirmAlert();
        }
        else {
            return false;
        }
    };
    //Confirm save 
    AddTaskPage.prototype.showSaveConfirmAlert = function () {
        var _this = this;
        var alert = this.utility.presentConfirmation('Are you sure you want to save this timesheet ?');
        alert.then(function () {
            _this.addTimesheet();
        });
    };
    /**
     * Get Project List
     */
    AddTaskPage.prototype.getProjectList = function () {
        var _this = this;
        var url = 'projectList';
        var data = {
            "currentDate": this.currentDate
        };
        this.utility.updateLoader(true);
        this.httpProvider.http.zentsCommonService({ url: url, data: data, addTask: true }).subscribe(function (res) {
            _this.utility.updateLoader(false);
            if (res && res.data) {
                _this.projectList = res.data;
                if (_this.projectList && _this.projectList.length > 0) {
                    _this.data.projectListForProjectTask = _this.projectList.filter(function (item) { return item.isZencoreMigrated != 'YES'; });
                    if (_this.projectList.length == 1) {
                        _this.standardForm.get('stdProjectId').setValue(_this.projectList[0].projectId);
                        _this.onStdProjSelect();
                    }
                }
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
        //}
    };
    /**
     * Get Standard Task List
     */
    AddTaskPage.prototype.getStdTaskList = function () {
        var _this = this;
        var url = 'standardTask';
        var data = {
            "currentDate": this.currentDate
        };
        this.httpProvider.http.zentsCommonService({ url: url, data: data, addTask: true }).subscribe(function (res) {
            if (res && res.data) {
                _this.stdTaskList = res.data;
                _this.stdTaskList.map(function (task) {
                    if (task.serviceId == '201') {
                        _this.projRelatedStdTasks.push(task);
                    }
                    else if (task.serviceId == '202') {
                        _this.orgRelatedStdTasks.push(task);
                    }
                });
            }
        });
    };
    /**
     * Method to add ProjectTask
     * @param data
     */
    AddTaskPage.prototype.addProjectTaskService = function (data) {
        var _this = this;
        this.utility.updateLoader(true);
        var url = 'projectTask';
        this.httpProvider.http.zentsCommonService({ url: url, data: data, addTask: true }).subscribe(function (res) {
            if (res && res.userMessage) {
                _this.navCtrl.pop().then(function () { return _this.resolve(res.userMessage); });
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    AddTaskPage.prototype.onMilestoneChange = function (e) {
        var _this = this;
        if (this.milestoneList.length > 0) {
            this.milestoneList.map(function (data) {
                if (e.uuId == data.uuId) {
                    _this.milestoneObj = data;
                }
            });
        }
    };
    /**
     * Call to Save Timesheet
     * @param taskId
     */
    AddTaskPage.prototype.saveTimesheet = function (taskId) {
        var _this = this;
        this.utility.updateLoader(true);
        var url = "processtimeentrytimesheet";
        var data = {
            "taskUpdateDate": this.currentDate,
            "taskName": this.stdTaskObj.taskName,
            "projectName": this.selProjectObj.projectName,
            "projectId": "",
            "totalEfforts": this.utility.convertTime(this.standardForm.get('stdTime').value, 1),
            "billablityFlag": this.standardForm.get('stdBillabilityName').value,
            "approvalStatus": "-1",
            "comments": this.standardForm.get('stdRemarks').value,
            "errorCode": 0,
            "taskId": taskId,
            "staffTaskUpdateCommentsTrackerId": 0,
            "taskInformationId": 0,
            "tokenId": 0,
            "nonbillableEffort": "0.00",
            "billableEffort": "0.00",
            "taskActualEffort": 0,
            "capping": 0,
            "previousEfforts": 0,
            "currentEfforts": 0,
            "approverId": "20542",
            "actualStartDate": "2019-04-30",
            "actualEfforts": 0,
            "startTime": "09:00:00",
            "endTime": "18:00:00",
            "complianceAccessFlag": "",
            "tsRejected": false,
            "billabilityFlag": this.standardForm.get('stdBillabilityName').value,
            "dateLockLimit": 0,
            "listSize": 4,
            "totalEffortsUS": 0,
            "taskEffortsUS": 0,
            "totalEffortsForSave": 0,
            "taskEffortsForSave": 0,
            "isDeleteFlag": 0,
            "isUpdateForDelete": 0,
            "rejectedFlag": "0",
            "validForPriv": "",
            "cappingHrs": 0,
            "callWaitingFlag": "NO",
            "flagForDeleteMealTime": "YES",
            "poInvoiceKey": this.selProjectObj.poInvoiceKey,
            "uuId": this.selProjectObj.uuId == '0' ? this.milestoneObj.uuId : this.selProjectObj.uuId,
            "timesheetStatus": "Saved",
            "effort": 0,
            "versionUpdated": false,
            "zenCoreMigrated": false,
            "selectedDate": this.currentDate,
            "staffId": null,
            "orgStdTask": this.standardForm.get('stdTaskId').value,
            "prjIdStdTask": this.selProjectObj.projectId,
            "effortTypeStdTask": this.standardForm.get('stdBillabilityName').value,
            "remarksStdTask": this.standardForm.get('stdRemarks').value,
            "orgTotalEfforts": this.utility.convertTime(this.standardForm.get('stdTime').value, 1),
            "orgStdTaskName": this.stdTaskObj.taskName,
            "bapPaymentScheduleKey": this.selProjectObj.isFixedBidProject == "YES" ? this.milestoneObj.bapPaymentScheduleKey : "0",
            "milestoneName": this.selProjectObj.isFixedBidProject == "YES" ? this.milestoneObj.milestoneName : "0",
            "mealTimeFlag": this.stdTaskObj.taskName == 'MEAL TIME' ? true : false,
            "resetTaskIds": this.taskAndtimesheetDetails ? this.getResetTaskIds(this.taskAndtimesheetDetails) : null
        };
        this.httpProvider.http.zentsCommonService({ url: url, data: data, timeentry: true }).subscribe(function (res) {
            if (res && res.userMessage) {
                _this.navCtrl.pop().then(function () { return _this.resolve(res.userMessage); });
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    /**
     * Method to add Standard Task and then call saveTimesheet to save the task
     */
    AddTaskPage.prototype.addTimesheet = function () {
        var _this = this;
        var url = 'projectTask';
        var data = {
            "projectId": this.selProjectObj.projectId,
            "taskStartDate": this.currentDate,
            "taskEndDate": this.currentDate,
            "serviceId": this.stdTaskObj.serviceId,
            "taskId": this.standardForm.get('stdTaskId').value,
            "selectedDate": this.currentDate,
            "taskAlias1": this.stdTaskObj.taskName,
            "taskAlias2": this.stdTaskObj.taskName
        };
        this.httpProvider.http.zentsCommonService({ url: url, data: data, addTask: true }).subscribe(function (res) {
            var result = res.data;
            if (result && result.taskId) {
                _this.saveTimesheet(result.taskId);
            }
        });
    };
    /**
    * Return all task id's except fixed holiday
    * @param timesheetList : Timesheet details list
    */
    AddTaskPage.prototype.getResetTaskIds = function (timesheetList) {
        var taskIds = [];
        if (timesheetList.length > 0) {
            timesheetList.map(function (timesheet) {
                if (timesheet && timesheet.taskList && timesheet.taskList.length > 0) {
                    timesheet.taskList.map(function (task) {
                        if (task.approvalStatus == 2) {
                            if (task.taskName !== 'FIXED HOLIDAY') {
                                taskIds.push(task.taskId);
                            }
                        }
                    });
                }
            });
        }
        if (taskIds.length > 0) {
            return taskIds;
        }
    };
    //Open Standard Task List modal
    AddTaskPage.prototype.openStdTaskListModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var listModal;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.selProjectObj) {
                    listModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_std_task_list_modal_std_task_list_modal__["a" /* StdTaskListModalComponent */], {
                        projRelatedStdTasks: this.selProjectObj.isZencoreMigrated == 'YES' ? [] : this.projRelatedStdTasks,
                        orgRelatedStdTasks: this.orgRelatedStdTasks,
                    });
                    listModal.present();
                    listModal.onDidDismiss(function (res) {
                        if (res) {
                            _this.standardForm.get('stdTaskId').setValue(res.taskId);
                            _this.standardForm.get('stdTaskName').setValue(res.taskName);
                            _this.onStdTaskSelect(res.taskId);
                        }
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    AddTaskPage.prototype.getStdTasksData = function () {
        //console.log("Clicked Std Task");
        if (this.stdTaskList.length == 0) {
            this.getStdTaskList();
        }
    };
    AddTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-task',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\timesheet\add-task\add-task.html"*/'<ion-header class="ts-header">\n  <ion-navbar>\n    <ion-title>Add Task</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-segment [(ngModel)]="data.task">\n    <ion-segment-button value="project" [class.hide]="hideProjectTask">\n      Project Task\n    </ion-segment-button>\n    <ion-segment-button value="standard" (click)="getStdTasksData()">\n      Standard Task\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]="data?.task">\n    <div padding *ngSwitchCase="\'project\'">\n      <project-task [projectData]="data?.projectListForProjectTask" [selectedDate]="currentDate"\n        (selectedTaskData)="addTask($event)" [type]="data?.type">\n      </project-task>\n    </div>\n    <div class="std-task" padding *ngSwitchCase="\'standard\'">\n      <form [formGroup]="standardForm" (ngSubmit)="onSubmit(standardForm)">\n         <ion-list>\n          <ion-item no-lines class="borderColor">\n            <ion-select formControlName="stdProjectId" placeholder="Select Project" interface="action-sheet"\n              (ionChange)="onStdProjSelect($event)">\n              <ion-option *ngFor="let item of projectList" [value]="item.projectId">{{item.projectName}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n          <span class="error-msg" *ngIf="standardForm.controls.stdProjectId.errors  && submitted">\n            <p>* Please select Project Name.</p>\n          </span>\n            \n          <ion-grid no-padding class="stdTaskOption">\n            <ion-row>\n              <ion-col col-11>\n                <ion-item no-lines class="stdInput">\n                  <ion-input [readonly]="true" formControlName="stdTaskName" type="text"\n                    placeholder="Select Standard Task" [disabled]="standardForm.controls.stdTaskName.disabled"\n                    (click)="openStdTaskListModal()"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-1 class="down-arrow" (click)="openStdTaskListModal()"\n                [ngStyle]="{\'opacity\': selProjectObj ? 1 : 0.5}">\n                <ion-icon name="arrow-dropdown"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <span class="error-msg" *ngIf="standardForm.controls.stdTaskName.errors  && submitted">\n            <p>* Please select Task Name.</p>\n          </span>\n\n          <ion-item no-lines class="borderColor" margin-top>\n            <ion-select formControlName="stdBillabilityName" placeholder="Select Billability" interface="action-sheet"\n              (ionChange)="onBillabilityChange($event)">\n              <ion-option [value]="billability.value" *ngFor="let billability of billabilityList">\n                {{billability.name}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <span class="error-msg" *ngIf="standardForm.controls.stdBillabilityName.errors  && submitted">\n            <p>* Please select Billability Name.</p>\n          </span>\n\n          <ion-item no-lines class="borderColor" margin-top>\n            <ion-datetime #dateTime displayFormat="HH:mm" minuteValues="00,15,30,45" formControlName="stdTime">\n            </ion-datetime>\n          </ion-item>\n          <span class="error-msg"\n            *ngIf="standardForm.controls.stdTime.errors && standardForm.controls.stdTime.errors.min && submitted">\n            <p>* Please select valid hours.</p>\n          </span>\n\n          <ion-item *ngIf="isFixedBidProject == \'YES\'" no-lines class="borderColor" margin-top>\n            <ion-select placeholder="Select Milestone" formControlName="stdMilestone" interface="action-sheet"\n              (ionChange)="onMilestoneChange($event)">\n              <ion-option [value]="milestone" *ngFor="let milestone of milestoneList">\n                {{milestone.milestoneName}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <span class="error-msg" *ngIf="standardForm.controls.stdMilestone.errors  && submitted">\n            <p>* Please select Milestone Name.</p>\n          </span>\n\n          <ion-item margin-top no-lines class="borderColor stdRemarks">\n            <ion-textarea (keypress)="utility.omit_special_char($event)" formControlName="stdRemarks"\n              placeholder="Remarks" rows="6" cols="6"></ion-textarea>\n          </ion-item>\n          <span class="error-msg" *ngIf="standardForm.controls.stdRemarks.errors  && submitted">\n            <p>* Please add remarks.</p>\n          </span>\n             \n        </ion-list>\n\n        <div class="submitBtn" float-right>\n          <button ion-button round type="submit"> Add Task</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zents\timesheet\add-task\add-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */]])
    ], AddTaskPage);
    return AddTaskPage;
}());

//# sourceMappingURL=add-task.js.map

/***/ }),

/***/ 1874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBot; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_speechRecognition_speechRecognition__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_data__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_constants__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_platform_platform__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_download_download__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_chat_bot_model_chat_bot_model__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_screenshot_ngx__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_calender_model_calender_model__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environment_environment_dev__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_env__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_app_version__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_pending_timesheet_list_modal_pending_timesheet_list_modal__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_faq_modal_faq_modal__ = __webpack_require__(747);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var ChatBot = /** @class */ (function () {
    function ChatBot(download, platform, navParams, store, data, navCtrl, utilities, zone, speechRecognitionUtility, modalCtrl, screenshot, popoverCtrl, httpProvider, toastCtrl, appversion) {
        var _this = this;
        this.download = download;
        this.platform = platform;
        this.navParams = navParams;
        this.store = store;
        this.data = data;
        this.navCtrl = navCtrl;
        this.utilities = utilities;
        this.zone = zone;
        this.speechRecognitionUtility = speechRecognitionUtility;
        this.modalCtrl = modalCtrl;
        this.screenshot = screenshot;
        this.popoverCtrl = popoverCtrl;
        this.httpProvider = httpProvider;
        this.toastCtrl = toastCtrl;
        this.appversion = appversion;
        // private _chatBotLoadingListener: Subscription = new Subscription();
        this._hrChatBotListener = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subscription"]();
        this._weatherDataListener = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subscription"]();
        this._roleListener = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subscription"]();
        this.title = '';
        this.userDetails = {};
        this.showKeyboard = false;
        this.mute = false;
        this.inputChatText = "";
        this.showSend = false;
        this.isFromPreviousFetchData = false;
        this.cancelFlag = true;
        this.showQueryBox = false;
        this.positiveFeedbackMessage = "Thank you for your feedback.";
        this.feedbackMessage = "Was this message helpful ?";
        this.negativeFeedbackMessage = "";
        this.chatList = [];
        this.listening = false;
        this.tooglePipe = true;
        this.selectedIndex = -1;
        this.truncating = true;
        this.showSuggestion = true;
        this.expandDiv = false;
        this.indexForEmpContactList = {
            start: 0,
            end: 7
        };
        this.timesheetRestApi = [];
        this.showMoreArrow = false;
        this.showMoreArrowForMyTimesheetList = false;
        this.tsDataType = 'date';
        this.tsTypes = {
            tsDate: 'date',
            taskAndTimesheetDetails: 'ttDetails',
            suggestion: 'suggestion',
            selData: {},
            taskId: null,
            suggestionType: null,
            updateStatus: null,
        };
        this.getTimesheetDetailsCurrentIndex = null;
        this.suggestionListForTS = [];
        this.indexToToggleForm = {
            chatListIndexToUpdate: null,
            parentIndexToUpdate: null,
            childIndexToUpdate: null
        };
        this.indexToShowDot = {
            chatListIndexForDateToUpdate: null,
            dateIndexToUpdate: null
        };
        this.tsFlags = {
            disableSubmit: false,
            showZencoreMigratedMessage: false
        };
        this.pendingDates = [];
        this.projectMigratedData = null;
        this.role = null;
        this.calendarInfo = null;
        this.timeEntrySuggestion = [];
        this.dateListFromTimeSheet = [];
        this.selectedDateForCT = {
            dateSelected: {
                date: "",
                day: "",
                status: ""
            },
            CTforDate: ''
        };
        // private dataCT: any;
        this.taskAdded = false;
        this.firstTimeEnter = false;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["u" /* GetHrChatBotClearData */]());
        this.title = this.navParams.get('pageTitle');
        this.questionAsked = this.navParams.get('questionAsked');
        this.hrChatBotData = this.navParams.get('hrChatBotData');
        this.getModalData = this.navParams.get('data');
        this.bannerData = this.navParams.get('isComingFromBanner');
        // //////console.log(this.getModalData);
        if (!this.utilities.isEmptyOrNullOrUndefined(this.hrChatBotData) && !this.utilities.isEmptyOrNullOrUndefined(this.hrChatBotData.actionInfo)) {
            this._addToList(this.questionAsked, this.hrChatBotData.actionInfo.speech, "bot");
            if (!this.utilities.isEmptyOrNullOrUndefined(this.hrChatBotData.actionInfo.speech)) {
                // this._tts(this.hrChatBotData.actionInfo.speech);
            }
        }
        this.platform.ready().then(function () {
            _this.platform.pause.subscribe(function () {
                _this._tts(" ");
                // this.platform.resume.unsubscribe();
            });
            _this.platform.resume.subscribe(function () {
                // this.platform.resume.unsubscribe();
            });
        });
    }
    ChatBot.prototype.ngOnInit = function () {
        this.firstTimeEnter = true;
        // this.getLoginStateFromStore();
    };
    ChatBot.prototype._getChatList = function () {
        var _this = this;
        new Promise(function (resolve) {
            _this._hrChatBotListener = _this.store.select(__WEBPACK_IMPORTED_MODULE_6__app_store__["_58" /* getHrChatBotState */])
                .subscribe(function (response) {
                // //////console.log('get chat list response============== ', response);
                if (response.error == null) {
                    _this.chatResponseSuccess(response);
                    _this._scrollToBottom();
                    resolve();
                }
                else if (response.error) {
                    _this.inputChatText = "";
                    _this._ionChangeToggleSendMic(_this.inputChatText);
                    if ((response.error.actionName == 'saveTimesheet' || response.error.actionName == 'submitTimesheet') && response.error.errorMsg) {
                        // //////console.log(response.error.errorMsg);
                        _this.utilities.presentAlert(response.error.errorMsg).then(function () {
                            // //////console.log(this.tsSelectedDateObj, this.getTimesheetDetailsCurrentIndex);
                            _this.getTimeEntryDetails(_this.tsSelectedDateObj, _this.getTimesheetDetailsCurrentIndex);
                        });
                    }
                }
            }, function (err) {
                // ////console.log(err);
            });
        });
    };
    ChatBot.prototype.ionViewWillEnter = function () {
        this.getLoginStateFromStore();
        this.isFromPreviousFetchData = this.navParams.get('isFromPreviousFetchData');
        var newQuestionPosted = this.navParams.get('questionPosted');
        if ((newQuestionPosted != null) || (newQuestionPosted != undefined)) {
            if (newQuestionPosted) {
                this.chatList.push({ "from": "bot", "response": { responseList: { speech: 'Question submitted successfully' } }, "readMore": false });
                this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["_18" /* SetHrChatBotListAction */](this.chatList));
            }
            else {
                this.chatList.push({ "from": "bot", "response": { responseList: { speech: 'Cancelled', suggestions: this.chatList[this.chatList.length - 1].response.responseList.suggestions } }, "readMore": false });
                this.showSuggestion = true;
                this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["_18" /* SetHrChatBotListAction */](this.chatList));
            }
        }
        // this._chatBotLoadingListener = this.store.select<any>(fromStore.getHrChatBotLoading).subscribe(loading => {
        // });
    };
    ChatBot.prototype.ionViewDidLoad = function () {
        this.getCalendarInfo();
        this.getRole();
        this.loading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_6__app_store__["_57" /* getHrChatBotLoading */]);
        // this.store.select<any>(fromStore.getHrChatBotMessage).subscribe((msg) => {
        //   if (msg){
        //     this.presentToast(msg);
        //     this.getTimeEntryDetails(this.tsSelectedDateObj, this.getTimesheetDetailsCurrentIndex);
        //   }
        //   this.onTaskDataSLideChange();
        // });
    };
    ChatBot.prototype.getLoginStateFromStore = function () {
        var _this = this;
        this.data.getData('loginDetails').then(function (res) {
            if (res && res.details && res.details.userDetails) {
                _this.userDetails = res.details.userDetails;
                _this._getChatList();
                if (_this.getModalData) {
                    _this._getHrChatBotData({ value: _this.getModalData });
                    _this.getModalData = undefined;
                }
                if (_this.bannerData) {
                    _this._getHrChatBotData({ value: 'Corona Virus Awareness' });
                    _this.bannerData = undefined;
                }
                // check if your coming from modal popup
                // if(this.getModalData){
                //   this._getHrChatBotData({value:this.getModalData})
                // }else{
                //   this._getChatList()
                // }
            }
        });
    };
    ChatBot.prototype.ionViewWillLeave = function () {
        this.firstTimeEnter = false;
        // this._chatBotLoadingListener.unsubscribe();
        this._hrChatBotListener.unsubscribe();
        this._tts(" ");
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["u" /* GetHrChatBotClearData */]());
    };
    ChatBot.prototype._getHrChatBotData = function (chatBotData) {
        //Reset values for new queries
        this.showMoreArrow = false;
        this.showMoreArrowForMyTimesheetList = false;
        this.empContactListResponse = {};
        this.suggestionListForTS = [];
        this.tsSelectedDateObj = null;
        this.indexToShowDot.chatListIndexForDateToUpdate = null;
        this.indexToShowDot.dateIndexToUpdate = null;
        this.showSuggestion = false;
        this._tts("");
        this.showQueryBox = false;
        if (this.utilities.isEmptyOrNullOrUndefined(chatBotData.value)) {
            return;
        }
        if (chatBotData.value.toLowerCase() == 'more') {
            this._showClosedData();
        }
        else {
            // if (this.chatList.length > 2 && this.chatList[this.chatList.length - 2].response) {
            //   if (this.chatList[this.chatList.length - 2].response.responseList.actionName == 'zenTS.getCreateTaskDetails') {
            //     this.chatList[this.chatList.length - 2].response.responseList.enableCT = false;
            //   }
            //   // if (tempChatListItemResponseListItem.actionName == 'zenTS.getCreateTaskDetails') {
            //   //   this.chatList[this.chatList.length - 1].response.responseList.enableCT = true;
            //   // }
            // }
            if (this.utilities.isEmptyOrNullOrUndefined(!chatBotData.clickedChatItem) && chatBotData.value == 'Yes') {
                if (chatBotData.clickedChatItem.actionName == 'salary_discrepency' || chatBotData.clickedChatItem.actionName == 'investment' || chatBotData.clickedChatItem.actionName == 'salaryLetter' || chatBotData.clickedChatItem.actionName == 'visaPolicy') {
                    this.queryListenFromFeedback = '';
                    this.showQueryBox = true;
                    if (this.utilities.platformAvailable())
                        this.negativeFeedbackMessage = this._startListening();
                }
                else {
                    this.getSuggestionData(chatBotData.value);
                }
            }
            else {
                this._tts(" ");
                this.getSuggestionData(chatBotData.value);
            }
        }
    };
    ChatBot.prototype.getSuggestionData = function (value) {
        var params = {
            "userQuery": value,
            "sessionId": "",
            "moduleId": __WEBPACK_IMPORTED_MODULE_8__app_constants__["a" /* Constants */].moduleId
        };
        this.isFromPreviousFetchData = false;
        this.chatList = this.chatList.concat({ "from": "me", "query": params.userQuery });
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["t" /* GetHrChatBotAction */]("", params));
        // setTimeout(() => {
        //   this.chatList.concat({ "from": "me", "query": params.userQuery });
        // }, 1000);
    };
    ChatBot.prototype.chatResponseSuccess = function (response) {
        var _this = this;
        if (response.pending == false) {
            if (!this.utilities.isEmptyOrNullOrUndefined(response) && !this.utilities.isEmptyOrNullOrUndefined(response.data)) {
                //remove lifespan for ZenTS related queries and pass on it to next api call response 
                var tempData = response.data;
                if (tempData[tempData.length - 1].from == 'bot' && tempData[tempData.length - 1].response.responseList.actionName && (tempData[tempData.length - 1].response.responseList.actionName.split('.')[0] == "zenTS" || tempData[tempData.length - 1].response.responseList.actionName == 'getFillTimesheetDetails')) {
                    delete tempData[tempData.length - 1].response.responseList.lifespan;
                }
                //show success messages of timesheet save and submit action
                if (response.message && response.message.userMessage) {
                    if (response.message.actionName == "saveTimesheet") {
                        this.tsTypes.updateStatus = {
                            date: this.tsSelectedDateObj.date,
                            status: 'Saved'
                        };
                        this.onTaskDataSLideChange();
                        this.presentToast(response.message.userMessage);
                        this.getTimeEntryDetails(this.tsSelectedDateObj, this.getTimesheetDetailsCurrentIndex);
                    }
                }
                this.chatList = response.data;
                // if (this.chatList.length > 2) {
                //   this.isFromPreviousFetchData = true;
                // }
                this.inputChatText = "";
                this._ionChangeToggleSendMic(this.inputChatText);
                // fetching last item of the list
                if (this.chatList[this.chatList.length - 1].from == 'bot') {
                    var tempChatListItemResponseListItem = this.chatList[this.chatList.length - 1].response.responseList;
                    if (!this.utilities.isEmptyOrNullOrUndefined(tempChatListItemResponseListItem.actionId))
                        this.currentActionId = tempChatListItemResponseListItem.actionId;
                    if (!this.utilities.isEmptyOrNullOrUndefined(tempChatListItemResponseListItem.queryId)) {
                        this.currentQueryId = tempChatListItemResponseListItem.queryId;
                    }
                    if (!this.utilities.isEmptyOrNullOrUndefined(tempChatListItemResponseListItem.actionName)) {
                        if (tempChatListItemResponseListItem.actionName == 'zenHelp'
                            || tempChatListItemResponseListItem.actionName == 'salary_discrepency'
                            || tempChatListItemResponseListItem.actionName == 'investment'
                            || tempChatListItemResponseListItem.actionName == 'pf_faq'
                            || tempChatListItemResponseListItem.actionName == 'pf_transfer'
                            || tempChatListItemResponseListItem.actionName == 'salaryLetter'
                            || tempChatListItemResponseListItem.actionName == 'visaPolicy'
                            || tempChatListItemResponseListItem.actionName == 'updateMyProfile'
                            || tempChatListItemResponseListItem.actionName == 'onsiteReturn'
                            || tempChatListItemResponseListItem.actionName == 'onsiteTravel'
                            || tempChatListItemResponseListItem.actionName == 'getARDetails'
                            || tempChatListItemResponseListItem.actionName == 'applyFlexiLeave'
                            || tempChatListItemResponseListItem.actionName == 'arHierarchy'
                            || tempChatListItemResponseListItem.actionName == 'getSuggestionListFromServer'
                            || tempChatListItemResponseListItem.templateId == 4) {
                            if (tempChatListItemResponseListItem.actionName == 'getSuggestionListFromServer') {
                                this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.chatList[this.chatList.length - 1].response.responseList.suggestionsList;
                                this.showSuggestion = true;
                                if (this.chatList[this.chatList.length - 2].response.responseList.actionName == "ProjectList") {
                                    this.chatList[this.chatList.length - 1].response.responseList.suggestions.unshift('Create Task');
                                }
                            }
                            if (tempChatListItemResponseListItem.actionName == 'pf_faq' || tempChatListItemResponseListItem.actionName == 'pf_transfer' || tempChatListItemResponseListItem.actionName == 'onsiteReturn' || tempChatListItemResponseListItem.actionName == 'onsiteTravel' || tempChatListItemResponseListItem.templateId == 4) {
                                this.pdfArray = this.chatList[this.chatList.length - 1].response.responseList.restApi.split(",");
                            }
                        }
                        else if (tempChatListItemResponseListItem.actionName == "pf_faq_yes") {
                            this.queryListenFromFeedback = '';
                            this.showQueryBox = true;
                            if (this.utilities.platformAvailable())
                                this.negativeFeedbackMessage = this._startListening();
                        }
                        else if (tempChatListItemResponseListItem.actionName == "salary_discrepency_mail_response") {
                        }
                        else if (tempChatListItemResponseListItem.actionName == 'getHolidayCalendar') {
                        }
                        else if (tempChatListItemResponseListItem.actionName == 'getWellnessCalendar') {
                        }
                        else if (tempChatListItemResponseListItem.actionName == 'arHierarchy') {
                        }
                        else if (tempChatListItemResponseListItem.actionName == 'arLocation') {
                        }
                        else if (tempChatListItemResponseListItem.actionName == 'getZensarSiteData') {
                            this.getZensarSiteData(tempChatListItemResponseListItem.restApi);
                        }
                        else if (tempChatListItemResponseListItem.actionName == 'openNewQuestion' && !this.isFromPreviousFetchData) {
                            this.navCtrl.push('PostQuestionPage');
                        }
                        // } else if (tempChatListItemResponseListItem.actionName == 'getUserBankDetails') {
                        //   if (this.tempSuggestions) {
                        //     this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.tempSuggestions.split(",")
                        //   }
                        // }
                        else if (tempChatListItemResponseListItem.actionName == 'getUserProfileParamsDetails') {
                            this.getUserBankDetails(tempChatListItemResponseListItem.restApi, tempChatListItemResponseListItem.parameters);
                        }
                        else if (tempChatListItemResponseListItem.actionName == 'getWeather' && !this.isFromPreviousFetchData) {
                            this.utilities.getLocation()
                                .then(function (positionCoords) {
                                _this.getWeatherData(positionCoords);
                            })
                                .catch(function (error) {
                                _this.utilities.presentAlert('Unable to get the location');
                            });
                        }
                        else if (tempChatListItemResponseListItem.actionName.split('.')[0] == 'zenTS') {
                            this.timesheetRestApi = tempChatListItemResponseListItem.restApi.split(",");
                            // if (this.chatList[this.chatList.length - 2].response.responseList.actionName == 'zenTS.getCreateTaskDetails') {
                            //   this.chatList[this.chatList.length - 1].response.responseList.enableCT = false;
                            // }
                            this.getTimesheetDetails(tempChatListItemResponseListItem);
                            if (tempChatListItemResponseListItem.actionName != 'zenTS.getCreateTaskDetails') {
                                delete tempChatListItemResponseListItem.speech;
                            }
                            // }
                        }
                        else if (tempChatListItemResponseListItem.actionName == 'zenTalent.getUserProfileData' || tempChatListItemResponseListItem.actionName == 'zenTalent.getMyProfile') {
                            this.empContactListResponse = tempChatListItemResponseListItem;
                            this.getEmployeeContactList(tempChatListItemResponseListItem);
                        }
                        else if (tempChatListItemResponseListItem.actionName == "timeEntryDetails") {
                            if (this.chatList[this.chatList.length - 2].response.responseList.actionName == "zenTS.getCreateTaskDetails") {
                                this.prevQueryID = this.chatList[this.chatList.length - 2].response.responseList.queryId;
                                this.chatList[this.chatList.length - 1].response.responseList.showTimeEntryDetails = false;
                                this.chatList[this.chatList.length - 1].response.responseList.enableCT = true;
                            }
                            else {
                                this.chatList[this.chatList.length - 1].response.responseList.showTimeEntryDetails = true;
                                // this.dataCT = this.chatList[this.chatList.length - 1].response.responseList;
                            }
                            this.doDisable(tempChatListItemResponseListItem.data.taskAndTimesheetDetails);
                            if (tempChatListItemResponseListItem.data.taskAndTimesheetDetails.length == 0 && this.chatList[this.chatList.length - 2].response.responseList.actionName != 'zenTS.getCreateTaskDetails') {
                                this.chatList[this.chatList.length - 1].response.responseList.speech = null;
                                this.getProjectList(tempChatListItemResponseListItem.queryId);
                            }
                            this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.timeEntrySuggestion.SuggestionList;
                            //  uncomment for task creation 
                            if (!this.utilities.isEmptyOrNullOrUndefined(this.chatList[this.chatList.length - 1].response.responseList.suggestions)) {
                                // this.chatList[this.chatList.length - 1].response.responseList.suggestions.shift();
                                // this.chatList[this.chatList.length - 1].response.responseList.suggestions.unshift('Create Task');
                                this.chatList[this.chatList.length - 1].response.responseList.suggestionPhrase = this.timeEntrySuggestion.SuggestionPhrase;
                            }
                        }
                        else if (tempChatListItemResponseListItem.actionName == "getFillTimesheetDetails") {
                            this.dateListFromTimeSheet = tempChatListItemResponseListItem.dataList;
                            if (tempChatListItemResponseListItem.dataList && tempChatListItemResponseListItem.dataList.length == 1) {
                                var date = __WEBPACK_IMPORTED_MODULE_16_moment__(tempChatListItemResponseListItem.dataList[0].date).format('DD MMM YYYY');
                                //  i have un-commented
                                this.getTimeEntryDetails(tempChatListItemResponseListItem.dataList[0], this.chatList.length, tempChatListItemResponseListItem.queryId, "Please see below the timesheet details for " + date);
                            }
                            else if (this.selectedDateForCT.CTforDate) {
                                var date = __WEBPACK_IMPORTED_MODULE_16_moment__(this.selectedDateForCT.CTforDate).format('DD MMM YYYY');
                                var dateObj = { date: '' };
                                dateObj.date = this.selectedDateForCT.CTforDate;
                                this.getTimeEntryDetails(dateObj, this.chatList.length, tempChatListItemResponseListItem.queryId, "Please see below the timesheet details for " + date);
                            }
                            this.pendingDates = tempChatListItemResponseListItem.dataList.filter(function (dateObj) { return dateObj.status == 'Pending' || dateObj.status == 'Saved'; });
                        }
                        else if (tempChatListItemResponseListItem.actionName == "submitTimesheet") {
                            this.getTimeEntryDetailsToRefreshLocalData(this.tsSelectedDateObj.date);
                            this.pendingDates = tempChatListItemResponseListItem.dataList.filter(function (dateObj) { return dateObj.status == 'Pending' || dateObj.status == 'Saved'; });
                            this.tsTypes.updateStatus = {
                                date: this.tsSelectedDateObj.date,
                                status: 'Submitted'
                            };
                            this.indexToShowDot.chatListIndexForDateToUpdate = null;
                            this.indexToShowDot.dateIndexToUpdate = null;
                            this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.timeEntrySuggestion.SuggestionList;
                            this.chatList[this.chatList.length - 1].response.responseList.suggestionPhrase = this.timeEntrySuggestion.SuggestionPhrase;
                        }
                        else if (tempChatListItemResponseListItem.actionName == "ProjectList" && tempChatListItemResponseListItem.data.length > 0) {
                            this.projectMigratedData = null;
                            var speech = null;
                            var list = tempChatListItemResponseListItem.data;
                            list.map(function (item) {
                                if (item.isZencoreMigrated == 'YES' &&
                                    (_this.tsSelectedDateObj.date >= item.zencoreMigratedDate)) {
                                    _this.projectMigratedData = item;
                                }
                            });
                            if (this.projectMigratedData) {
                                speech = "Your task for " + this.projectMigratedData.projectName + " are now being managed from ZenCore platform\n                effective " + this.projectMigratedData.zencoreMigratedDate + ". Please get in touch with your manager to get task assigned in ZenCore.";
                                this._getSuggestionListFromServer(__WEBPACK_IMPORTED_MODULE_15__environment_environment_dev__["C" /* url */] + "chatbot-zenhelp/getSuggestionData", {
                                    "actionId": 0
                                });
                            }
                            else {
                                speech = "There are no filled timesheets/tasks for the selected date. Click on \"Create Task\" suggestion below to create task.";
                                this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.chatList[this.chatList.length - 2].response.responseList.suggestions;
                            }
                            this.chatList[this.chatList.length - 1].response.responseList.speech = speech;
                        }
                        else if (tempChatListItemResponseListItem.actionName == 'zenTalent.myProfileDetails.update.maritalStatus' || tempChatListItemResponseListItem.actionName == 'zenTalent.myProfileDetails.update.experience') {
                            this.chatList[this.chatList.length - 1].response.responseList.updateProfileLink = {
                                showLink: true,
                                type: 'personal',
                                responseData: tempChatListItemResponseListItem
                            };
                        }
                        else if (tempChatListItemResponseListItem.actionName == "zenTalent.myProfileDetails.update.skills") {
                            this.chatList[this.chatList.length - 1].response.responseList.updateProfileLink = {
                                showLink: true,
                                type: 'skills'
                            };
                        }
                        else if ((tempChatListItemResponseListItem.actionName == 'maritalStatus' || tempChatListItemResponseListItem.actionName == 'experience') && tempChatListItemResponseListItem.doRedirect) {
                            if (tempChatListItemResponseListItem.data && tempChatListItemResponseListItem.data.userProfiledetails && tempChatListItemResponseListItem.data.userProfiledetails.length > 0 && tempChatListItemResponseListItem.data.userProfiledetails[0].key == "Personal") {
                                this.gotToEditProfile(tempChatListItemResponseListItem.data.userProfiledetails[0], tempChatListItemResponseListItem.actionName);
                            }
                        }
                        else if (tempChatListItemResponseListItem.actionName == "getApproveTimesheetDetails") {
                            if (tempChatListItemResponseListItem.dataList.length == 0 && tempChatListItemResponseListItem.data && tempChatListItemResponseListItem.data.teamsTimesheetList && tempChatListItemResponseListItem.data.teamsTimesheetList.length > 0) {
                                this.chatList.push({
                                    from: "bot",
                                    response: {
                                        responseList: {
                                            actionName: "pendingTimesheetList",
                                            // speech: "Showing results for your pending timesheet only",
                                            queryId: tempChatListItemResponseListItem.queryId,
                                            lifespan: tempChatListItemResponseListItem.lifespan,
                                            pendingList: tempChatListItemResponseListItem.data.teamsTimesheetList
                                        }
                                    }
                                });
                                // this.store.dispatch(new fromStore.SetHrChatBotListAction(this.chatList));
                            }
                        }
                        // called for fist time only
                        if (tempChatListItemResponseListItem.actionName != "getSuggestionListFromServer" && tempChatListItemResponseListItem.hasOwnProperty('suggestionsList')) {
                            if (tempChatListItemResponseListItem.suggestionsList.length == 0 && tempChatListItemResponseListItem.lifespan == 1) {
                                // https://zentalentappdev.zensar.com/chatbot-zenhelp/getSuggestionData
                                this._getSuggestionListFromServer(__WEBPACK_IMPORTED_MODULE_15__environment_environment_dev__["C" /* url */] + "chatbot-zenhelp/getSuggestionData", {
                                    "actionId": 0
                                });
                            }
                        }
                        // suggestion list for all based on actionName
                        if (!this.utilities.isEmptyOrNullOrUndefined(tempChatListItemResponseListItem.suggestionsList) && tempChatListItemResponseListItem.suggestionsList.length > 0 && tempChatListItemResponseListItem.actionName != 'getSuggestionListFromServer') {
                            this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.chatList[this.chatList.length - 1].response.responseList.suggestionsList.split(",");
                            this.chatList[this.chatList.length - 1].response.responseList.suggestionPhrase = this.chatList[this.chatList.length - 1].response.responseList.suggestionPhrase;
                            this.showSuggestion = true;
                        }
                        else if ((tempData[tempData.length - 1].from == 'bot') && (tempChatListItemResponseListItem.actionName == "getUserBankDetails" ||
                            tempChatListItemResponseListItem.actionName == "getMyAttendanceDetails" ||
                            tempChatListItemResponseListItem.actionName == "getMyComplianceDetails" ||
                            tempChatListItemResponseListItem.actionName == "getMyAllocationDetails" ||
                            tempChatListItemResponseListItem.actionName == "getFillTimesheetDetails" ||
                            tempChatListItemResponseListItem.actionName == "getMyTimesheetDetails" ||
                            tempChatListItemResponseListItem.actionName == "getMyProfile" ||
                            tempChatListItemResponseListItem.actionName == "getUserProfileData" ||
                            (tempChatListItemResponseListItem.actionName == "getApproveTimesheetDetails" && this.utilities.isEmptyOrNullOrUndefined(tempChatListItemResponseListItem.data.teamsTimesheetList)))) {
                            this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.chatList[this.chatList.length - 2].response.responseList.suggestionsList.split(",");
                            this.chatList[this.chatList.length - 1].response.responseList.suggestionPhrase = this.chatList[this.chatList.length - 2].response.responseList.suggestionPhrase;
                            this.timeEntrySuggestion.SuggestionPhrase = this.chatList[this.chatList.length - 2].response.responseList.suggestionPhrase;
                            this.timeEntrySuggestion.SuggestionList = this.chatList[this.chatList.length - 2].response.responseList.suggestionsList.split(",");
                            this.showSuggestion = true;
                        }
                        else if (tempChatListItemResponseListItem.actionName == "getApproveTimesheetDetails" && !this.utilities.isEmptyOrNullOrUndefined(tempChatListItemResponseListItem.data.teamsTimesheetList)
                        // tempChatListItemResponseListItem.actionName == "submitTimesheet"
                        ) {
                            this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.chatList[this.chatList.length - 3].response.responseList.suggestionsList.split(",");
                            this.chatList[this.chatList.length - 1].response.responseList.suggestionPhrase = this.chatList[this.chatList.length - 3].response.responseList.suggestionPhrase;
                            this.showSuggestion = true;
                        }
                    }
                    if (tempChatListItemResponseListItem.actionName == "zenTalent.createDAP" || tempChatListItemResponseListItem.actionName == "zenTalent.ijp" || tempChatListItemResponseListItem.actionName == "referral.referYourFriend.yes.bonusPolicy.yes" || tempChatListItemResponseListItem.actionName == "referrals.FAQs" || tempChatListItemResponseListItem.actionName == "referral.createFriendsProfile") {
                        this.chatList[this.chatList.length - 1].response.responseList.moveToPage = true;
                    }
                    // uncomment all for task creation
                    if (tempChatListItemResponseListItem.actionName == "getFillTimesheetDetails") {
                        if (this.chatList[this.chatList.length - 1].response.responseList.createTaskFlag && this.chatList[this.chatList.length - 1].response.responseList.suggestions[0] != 'Create Task')
                            this.chatList[this.chatList.length - 1].response.responseList.suggestions.unshift(this.chatList[this.chatList.length - 1].response.responseList.CreateTaskText);
                        //   // console.log(this.chatList[this.chatList.length - 1].response.responseList)
                    }
                    // if (tempChatListItemResponseListItem.actionName == "ProjectList") {
                    //   this.chatList[this.chatList.length - 1].response.responseList.suggestions.unshift('Create Task');
                    // }
                    if (!this.utilities.isEmptyOrNullOrUndefined(tempChatListItemResponseListItem.speech) && !tempChatListItemResponseListItem.noSpeech) {
                        if (this.chatList.length == 2 && !this.getModalData) {
                            this._tts(this.chatList[0].response.responseList.speech);
                        }
                        else if (!this.isFromPreviousFetchData) {
                            this._tts(tempChatListItemResponseListItem.speech);
                        }
                        this.showKeyboard = false;
                    }
                }
                this._scrollToBottom();
            }
            else {
                if (this.firstTimeEnter) {
                    this.addSuggestionToChatList();
                }
                else {
                    this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["_18" /* SetHrChatBotListAction */](this.chatList));
                }
            }
        }
    };
    ChatBot.prototype.getChatBotSuggestionList = function (suggestionUrl) {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["v" /* GetHrChatBotGetSuggestionsAction */](suggestionUrl, {}));
        return new Promise(function (resolve) {
            _this._hrChatBotListener = _this.store.select(__WEBPACK_IMPORTED_MODULE_6__app_store__["_58" /* getHrChatBotState */]).subscribe(function (response) {
                if (response.pending == false) {
                    if (!_this.utilities.isEmptyOrNullOrUndefined(response) && !_this.utilities.isEmptyOrNullOrUndefined(response.data)) {
                        _this.chatList = response.data;
                        _this.inputChatText = "";
                    }
                    resolve();
                }
            }, function (err) {
            });
        });
    };
    ChatBot.prototype.getZensarSiteData = function (zensarSiteUrl) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["z" /* GetHrChatBotZensarSiteDataAction */](zensarSiteUrl, {}));
    };
    ChatBot.prototype.getUserBankDetails = function (url, params) {
        // this.store.dispatch(new fromStore.GetHrChPatBotUserBankDeatilsAction(url, { "profileParam": "bankDetails" }));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["x" /* GetHrChatBotUserBankDeatilsAction */](url, params));
    };
    ChatBot.prototype.getWeatherData = function (positionCoords) {
        var latitude = positionCoords.latitude;
        var longitude = positionCoords.longitude;
        var appId = __WEBPACK_IMPORTED_MODULE_8__app_constants__["a" /* Constants */].weatherApiKey;
        var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + appId + "&units=metric";
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["y" /* GetHrChatBotWeatherAction */](weatherUrl, {}));
    };
    ChatBot.prototype.addSuggestionToChatList = function () {
        if (this.getModalData || this.bannerData) {
            this.chatList.push({ from: "bot", response: { responseList: { speech: null } } });
            this.chatList.push({ from: "bot", response: { responseList: { actionName: "zenHelp", speech: null, suggestionsList: "Zensar Policies,Holiday Calendar,Know the ARs" } } });
        }
        else {
            this.chatList.push({ from: "bot", response: { responseList: { speech: "Hi " + this.userDetails.userName.substring(0, this.userDetails.userName.indexOf(" ")) + ',\n' + " How may I help you?" } } });
            this.chatList.push({ from: "bot", response: { responseList: { actionName: "zenHelp", speech: "Type below or check the suggestions below " } } });
            this._getSuggestionListFromServer(__WEBPACK_IMPORTED_MODULE_15__environment_environment_dev__["C" /* url */] + "chatbot-zenhelp/getSuggestionData", {
                "actionId": 0
            });
        }
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["_18" /* SetHrChatBotListAction */](this.chatList));
    };
    ChatBot.prototype._sendText = function () {
        // if (this.chatList.length > 2 && this.chatList[this.chatList.length - 2].response) {
        //   if (this.chatList[this.chatList.length - 2].response.responseList.actionName == 'zenTS.getCreateTaskDetails') {
        //     this.chatList[this.chatList.length - 1].response.responseList.enableCT = false;
        //   }
        // if (tempChatListItemResponseListItem.actionName == 'zenTS.getCreateTaskDetails') {
        //   this.chatList[this.chatList.length - 1].response.responseList.enableCT = true;
        // }
        // }
        this._getHrChatBotData({ value: this.inputChatText });
    };
    ChatBot.prototype._submitFeedback = function (flag, chatListItem, myevent) {
        var _this = this;
        this._tts(" ");
        var queryId;
        if (!chatListItem.response.responseList.queryId) {
            queryId = this.currentQueryId;
        }
        else {
            queryId = chatListItem.response.responseList.queryId;
        }
        if (flag == 'Positive') {
            var params = {
                "userId": this.userDetails.userId,
                "queryId": queryId,
                "feedbackValue": 1,
                "feedbackComment": "",
                "actionId": this.currentActionId
            };
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["w" /* GetHrChatBotSubmitFeedbackAction */]("", params));
        }
        else if (flag == 'Negative') {
            //
            // 
            var popover = this.popoverCtrl.create('PopoverPage', { 'type': 'chatBot' });
            popover.present({ ev: myevent });
            popover.onDidDismiss(function (data) {
                if (data == 'askquestion') {
                    chatListItem.negativeFeedback = false;
                    // let queryId = chatListItem.response.responseList.queryId;
                    _this.screenshot.save('png', 80, queryId.toString()).then(function (response) {
                        if (response) {
                            // ////console.log(response)
                            _this.navCtrl.push('PostQuestionPage', {
                                "screenShotPath": {
                                    queryId: queryId,
                                    userId: _this.userDetails.userId,
                                    screenshot: response
                                }
                            });
                        }
                    }, function (error) {
                        // ////console.log(error)
                    });
                }
                else if (data == 'feedback') {
                    chatListItem.negativeFeedback = !chatListItem.negativeFeedback;
                }
            });
        }
        this._scrollToBottom();
    };
    ChatBot.prototype.sendNegativeFeedback = function (chatListItem, negativeFeedbackMessage) {
        if (negativeFeedbackMessage) {
            if (chatListItem.response.responseList.actionName == 'investment' || chatListItem.response.responseList.actionName == 'salary_discrepency' || chatListItem.response.responseList.actionName == 'pf_faq_yes' || chatListItem.response.responseList.actionName == 'pf_faq' || chatListItem.response.responseList.actionName == 'visaPolicy' || chatListItem.response.responseList.actionName == 'salaryLetter') {
                var params = {
                    "actionName": chatListItem.response.responseList.actionName,
                    "body": negativeFeedbackMessage,
                    "actionId": this.currentActionId
                };
                var url = chatListItem.response.responseList.restApi;
                this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["I" /* GetPayrollQueryChatBotZensarDataAction */](url, params));
                this.negativeFeedbackMessage = '';
            }
            else {
                var queryId = void 0;
                if (!chatListItem.response.responseList.queryId) {
                    queryId = this.currentQueryId;
                }
                else {
                    queryId = chatListItem.response.responseList.queryId;
                }
                var params = {
                    "userId": this.userDetails.userId,
                    "queryId": queryId,
                    "feedbackValue": -1,
                    "feedbackComment": negativeFeedbackMessage,
                    "actionId": this.currentActionId
                };
                this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["w" /* GetHrChatBotSubmitFeedbackAction */]("", params));
                this.negativeFeedbackMessage = '';
            }
        }
    };
    ChatBot.prototype._sendPayrollFeedback = function (chatListItem, negativeFeedbackMessage) {
        var params = {
            "userId": this.userDetails.userId,
            "queryId": chatListItem.response.responseList.queryId,
            "feedbackValue": -1,
            "feedbackComment": negativeFeedbackMessage
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["w" /* GetHrChatBotSubmitFeedbackAction */]("", params));
        this.negativeFeedbackMessage = '';
    };
    ChatBot.prototype._ionChangeToggleSendMic = function (value) {
        this.inputChatText = value;
        if (!this.utilities.isEmptyOrNullOrUndefined(this.inputChatText)) {
            this.showSend = true;
        }
        else {
            this.showSend = false;
        }
    };
    ChatBot.prototype._startListening = function () {
        var _this = this;
        this.listening = true;
        this.speechRecognitionUtility.startListening().subscribe(function (value) {
            if (_this.utilities.platformAvailable) {
                var tempChatListItemResponseListItem = _this.chatList[_this.chatList.length - 1].response.responseList;
                // let actionId = tempChatListItemResponseListItem.actionId-----> previous code
                var actionName = tempChatListItemResponseListItem.actionName; //---------->New changes to action name
                if ((actionName == 'investment' || actionName == 'salary_discrepency' || actionName == 'pf_faq_yes' || actionName == 'pf_faq') && _this.showQueryBox) {
                    _this.queryListenFromFeedback = value;
                }
                else {
                    _this._getHrChatBotData({ value: value });
                }
            }
            _this.zone.run(function () {
                _this.listening = false;
            });
        }, function (error) {
            _this.zone.run(function () {
                _this.listening = false;
            });
        });
    };
    ChatBot.prototype._closeKeyboard = function () {
        this.showKeyboard = false;
        this._startListening();
    };
    ChatBot.prototype._openKeyboard = function () {
        this.suggestionListForTS = [];
        this.showKeyboard = true;
    };
    ChatBot.prototype._muteSpeech = function () {
        this._tts(" ");
        this.mute = !this.mute;
    };
    ChatBot.prototype._tts = function (text) {
        if (!this.mute) {
            this.speechRecognitionUtility.textToSpeech(text);
        }
    };
    ChatBot.prototype._addToList = function (questionAsked, speech, from) {
        this.chatList.push({ asked: true, text: questionAsked, from: from });
        this.chatList.push({ asked: false, text: speech, from: from });
    };
    ChatBot.prototype._openChatInfo = function () {
        // this.modalCtrl.create(ChatInfoModel, {}, { cssClass: 'inset-modal-chat-info' }).present();
    };
    ChatBot.prototype._toggleReadMore = function (item, index) {
        item.readMore = !item.readMore;
        this.tooglePipe = !this.tooglePipe;
        this.selectedIndex = index;
    };
    ChatBot.prototype._scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.utilities.isEmptyOrNullOrUndefined(_this.content))
                _this.content.scrollToBottom();
        }, 100);
    };
    ChatBot.prototype._cancel = function () {
        this.showQueryBox = false;
    };
    ChatBot.prototype._downloadPDF = function (url) {
        var _this = this;
        if (this.platform.is('android')) {
            if (url) {
                var alert_1 = this.utilities.presentConfirmation('Do you want to download this file ?');
                alert_1.then(function () {
                    _this.download.downloadDocument(url, true);
                }).catch(function (err) { return err; });
            }
        }
        else {
            this.utilities.openWithSystemBrowser(url);
        }
    };
    ChatBot.prototype._showClosedData = function () {
        var _this = this;
        // removing for now as last time issue to fix hahaha
        this.selectedDateForCT.CTforDate = "";
        this.selectedDateForCT.dateSelected.date = "";
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__components_chat_bot_model_chat_bot_model__["a" /* ChatBotModel */], {
            'title': 'ChatBot Info',
        }
        /* {
          cssClass: 'inset-modal-close-positions'
        } */ );
        modal.present();
        modal.onDidDismiss(function (query) {
            if (query)
                _this._getHrChatBotData({ value: query });
            else {
                _this._getSuggestionListFromServer(__WEBPACK_IMPORTED_MODULE_15__environment_environment_dev__["C" /* url */] + "chatbot-zenhelp/getSuggestionData", {
                    "actionId": 0
                });
            }
        });
    };
    // urlify(text, tooglePipe, limit, Selectedindex, currentIndex) {
    //   if (text != undefined) {
    //     //;
    //    // var newText = text.replace(/\n/g, "<br/>");
    //     //
    //     var urlRegex = /(https?:\/\/[^\s]+)/g;
    //     return text.replace(urlRegex, function (url) {
    //       // ;
    //       return '<a href="' + url + '">' + url + '</a>';
    //     })
    //     //return this.getData(abc,tooglePipe,limit,Selectedindex,currentIndex);
    //   }
    //   // or alternatively
    //   // return text.replace(urlRegex, '<a href="$1">$1</a>')
    // }
    ChatBot.prototype.getTimesheetDetails = function (response) {
        console.log(this.dateListFromTimeSheet);
        console.log(this.selectedDateForCT);
        var params;
        var actionName = response.actionName.split(".");
        var url;
        var extraParams = {
            // "actionId": response.actionId,
            "actionName": actionName[1],
            "lifespan": '1',
            "queryId": response.queryId
        };
        if (response.actionName == "zenTS.getCreateTaskDetails") {
            url = this.timesheetRestApi[1];
            if (this.selectedDateForCT.dateSelected.date == '') {
                if (this.chatList[this.chatList.length - 3].response.responseList.dataList && this.chatList[this.chatList.length - 3].response.responseList.dataList[0]) {
                    if (this.chatList[this.chatList.length - 3].response.responseList.dataList[0].date) {
                        var date = JSON.stringify(this.chatList[this.chatList.length - 3].response.responseList.dataList[0].date);
                        this.selectedDateForCT.dateSelected.date = JSON.parse(date);
                    }
                }
                else {
                    var date = new Date();
                    this.selectedDateForCT.dateSelected.date = date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + (date.getDate())).slice(-2);
                }
            }
            this.sendCTDate = this.selectedDateForCT.dateSelected.date;
            params = {
                "version": __WEBPACK_IMPORTED_MODULE_15__environment_environment_dev__["E" /* version */],
                "selectedDate": this.selectedDateForCT.dateSelected.date
            };
            extraParams.actionName = 'timeEntryDetails';
        }
        else {
            url = this.timesheetRestApi[0];
            params = {
                "actionName": actionName[1],
                "parameters": response.parameters,
            };
        }
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["O" /* GetTimesheetDeatilsAction */](url, params, extraParams));
        // for now diapact is saperate but when api comes in service make it common
        //to clear the selecetd date
        this.selectedDateForCT.dateSelected.date = '';
        // this.dateListFromTimeSheet.length = 0;
    };
    ChatBot.prototype.expand = function () {
        this.expandDiv = !this.expandDiv;
    };
    /**
     *  get not filled Dates and open Calendar Model
     */
    ChatBot.prototype.getMonthwiseCompliancePercentage = function (month, monthseq) {
        var _this = this;
        this.utilities.updateLoader(true);
        var url = 'getMonthwiseCompliancePercentage';
        var data = { "month": month };
        this.httpProvider.http.zentsCommonService({ url: url, data: data, dashboard: true }).subscribe(function (res) {
            _this.utilities.updateLoader(false);
            if (res && res.data) {
                var percentage = res.data.percentage;
                var details = res.data.dateDetails;
                var data_1 = {
                    pendingDates: details.notFilledDates,
                    rejectedDates: details.rejectedDates,
                    percentage: percentage
                };
                _this.openModal(monthseq, data_1);
            }
        }, function (err) {
            _this.utilities.updateLoader(false);
        });
    };
    ChatBot.prototype.openModal = function (monthseq, dataObj) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_14__components_calender_model_calender_model__["a" /* CalenderModel */], {
            dataParams: {
                rejectedDates: dataObj.rejectedDates,
                pendingDates: dataObj.pendingDates,
                percentage: dataObj.percentage,
                key: monthseq,
                type: 'chat-bot',
            }
        }, {
            cssClass: 'calendermodel',
        });
        modal.present();
        modal.onDidDismiss(function (res) {
        });
    };
    ChatBot.prototype.getTimeEntryDetails = function (dateObj, index, queryId, speech) {
        if (queryId === void 0) { queryId = null; }
        if (speech === void 0) { speech = ''; }
        this.suggestionListForTS = []; //hide on date change;
        var selectedDate = JSON.stringify(dateObj);
        this.selectedDateForCT.dateSelected = JSON.parse(selectedDate);
        var chatListLength = this.chatList[this.chatList.length - 1].response.responseList.actionName == 'timeEntryDetails' ? (this.chatList.length - 1) : this.chatList.length;
        if (index == chatListLength) {
            this.tsSelectedDateObj = dateObj;
            this.getTimesheetDetailsCurrentIndex = index;
            this.tsTypes.selData = null;
            this.tsFordate = __WEBPACK_IMPORTED_MODULE_16_moment__(this.selectedDateForCT.dateSelected.date).format('D MMM YYYY');
            var url = this.timesheetRestApi[1]; //Get Timeentry Details Url
            var params = {
                "version": __WEBPACK_IMPORTED_MODULE_15__environment_environment_dev__["E" /* version */],
                "selectedDate": dateObj.date
            };
            var extraParams = {
                "actionName": 'timeEntryDetails',
                "queryId": queryId,
                // speech ? speech : 
                "speech": "Below is the timesheet details :",
                "indexToUpdate": index
            };
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["O" /* GetTimesheetDeatilsAction */](url, params, extraParams));
        }
    };
    ChatBot.prototype.getEmployeeContactList = function (response) {
        var url = response.restApi.split(",")[0];
        var params = {
            "start": this.indexForEmpContactList.start,
            "end": this.indexForEmpContactList.end,
            "search": response.actionName == 'zenTalent.getMyProfile' ? this.userDetails.userId : response.parameters.ZenVerse_First_Name + response.parameters.ZenVerse_User_Name
        };
        var extraParams = {
            "actionName": response.actionName.split('.')[1],
            "lifespan": '1',
            "queryId": response.queryId
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["q" /* GetEmployeeContactListAction */](url, params, extraParams));
    };
    ChatBot.prototype.goToProfile = function (data) {
        var _this = this;
        new Promise(function (resolve, reject) {
            _this.navCtrl.push('NewProfilePage', {
                'userId': parseInt(data.employeeId),
                'profileType': 'zencontacts',
                resolve: resolve
            });
        }).then(function () {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["_18" /* SetHrChatBotListAction */](_this.chatList));
        });
    };
    ChatBot.prototype.onlastSlideUpdateEmpContactList = function (dataList) {
        this.showMoreArrow = dataList.length == 7 ? true : false;
    };
    ChatBot.prototype.onlastSlideUpdateMyTimesheetList = function (dataList) {
        this.showMoreArrowForMyTimesheetList = dataList.length > 5 ? true : false;
    };
    // onScrollUpdateEmpContactList(event: Event, dataList) {
    //   if ((event.target as HTMLElement).scrollWidth - (event.target as HTMLElement).clientWidth == (event.target as HTMLElement).scrollLeft) {
    //     (event.target as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    //     this.showMoreArrow = dataList.length == 7 ? true : false;
    //   }
    // }
    // onScrollUpdateMyTimesheetList(event: Event, dataList) {
    //   if ((event.target as HTMLElement).scrollWidth - (event.target as HTMLElement).clientWidth == (event.target as HTMLElement).scrollLeft) {
    //     (event.target as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    //     this.showMoreArrowForMyTimesheetList = dataList.length > 5 ? true : false;
    //   }
    // }
    ChatBot.prototype.openEmpContactListModal = function () {
        var _this = this;
        var reqParams = {
            "start": 0,
            "end": 50,
            "search": this.empContactListResponse.actionName == 'zenTalent.getMyProfile' ? this.userDetails.userId : this.empContactListResponse.parameters.ZenVerse_First_Name + this.empContactListResponse.parameters.ZenVerse_User_Name
        };
        // let modal = this.modalCtrl.create(EmpContactListModelComponent, {
        //   reqParams
        // }, {
        //     cssClass: 'empContactListModel',
        //   });
        // modal.present();
        // modal.onDidDismiss((res) => {
        //   if(res){
        //     this.goToProfile(res);
        //   }
        // })
        new Promise(function (resolve, reject) {
            _this.navCtrl.push('UserProfileListPage', {
                reqParams: reqParams,
                resolve: resolve
            });
        }).then(function () {
            if (_this.chatList[_this.chatList.length - 1].response.responseList.actionName == "getUserProfileData") {
                _this.chatList[_this.chatList.length - 1].response.responseList.noSpeech = true;
            }
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["_18" /* SetHrChatBotListAction */](_this.chatList));
        });
    };
    ChatBot.prototype.canFillZeroHoursFlag = function () {
        if (this.calendarInfo.AssociatesBU) {
            return this.calendarInfo.PayrollToBeFilledZeroHours.includes(this.calendarInfo.AssociatesBU);
        }
        // return false;
    };
    /**
    * Method to Perform Save Action
    * @param obj : It contains the edited data
    * @param taskData : Task object
    * @param taskAndTimesheetDetails : Task and timesheet details list
    */
    ChatBot.prototype.editAndSaveTimesheet = function (obj, taskData, taskAndTimesheetDetails, parentIndex) {
        if (parentIndex == (this.chatList.length - 1)) {
            this.getTimesheetDetailsCurrentIndex = parentIndex;
            //reset timesheet if submitted timesheet edited to save
            var taskIds = this.getResetTaskIds(taskAndTimesheetDetails);
            //update required fields after edit
            taskData.selectedDate = this.tsSelectedDateObj.date;
            taskData.totalEfforts = this.utilities.convertTime(obj.efforts, 1);
            taskData.nonbillableEffort = this.utilities.convertTime(obj.efforts, 1);
            ;
            taskData.billableEffort = '0.00';
            if (obj.comments) {
                taskData.comments = obj.comments;
            }
            if (obj.billability) {
                taskData.billablityFlag = obj.billability;
                taskData.billabilityFlag = obj.billability;
            }
            else if (obj.defaultBillability) { //default value set if user doesn't select billability
                taskData.billablityFlag = obj.defaultBillability;
                taskData.billabilityFlag = obj.defaultBillability;
            }
            if (obj.milestoneName) {
                taskData.milestoneName = obj.milestoneName;
            }
            if (obj.bapPaymentScheduleKey) {
                taskData.bapPaymentScheduleKey = obj.bapPaymentScheduleKey;
            }
            if (taskIds && taskIds.length > 0) {
                taskData.resetTaskIds = taskIds;
            }
            var url = this.timesheetRestApi[2]; //Save Timesheet Url
            var params = taskData;
            var extraParams = {
                "actionName": "saveTimesheet"
                // "lifespan": '1',
                // "queryId": response.queryId
            };
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["O" /* GetTimesheetDeatilsAction */](url, params, extraParams));
        }
    };
    /**
     * Return all task id's except fixed holiday
     * @param timesheetList : Timesheet details list
     */
    ChatBot.prototype.getResetTaskIds = function (timesheetList) {
        var taskIds = [];
        if (timesheetList.length > 0) {
            timesheetList.map(function (timesheet) {
                if (timesheet && timesheet.taskList.length > 0) {
                    timesheet.taskList.map(function (task) {
                        if (task.approvalStatus == 2) {
                            // if (task.taskName !== 'FIXED HOLIDAY') {
                            taskIds.push(task.taskId);
                            // }
                        }
                    });
                }
            });
        }
        if (taskIds.length > 0) {
            return taskIds;
        }
    };
    ChatBot.prototype.refreshTimesheet = function (index) {
        this.getTimeEntryDetails(this.tsSelectedDateObj, index);
    };
    ChatBot.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            cssClass: 'zenoToastMsg',
            showCloseButton: true,
            closeButtonText: "Ok"
        });
        toast.onDidDismiss(function () { });
        toast.present();
    };
    ChatBot.prototype.setSuggestionList = function (data, chatListIndex) {
        this.suggestionListForTS = [];
        if (data.dataList && chatListIndex == (this.chatList.length - 1)) {
            this.suggestionListForTS = data.dataList;
            this.selValue = data.selValue;
            this.tsTypes.suggestionType = data.type;
            this.tsTypes.taskId = data.taskId;
        }
    };
    ChatBot.prototype.setSuggestion = function (data) {
        var dataObj = {
            data: data,
            taskId: this.tsTypes.taskId,
            s_type: this.tsTypes.suggestionType
        };
        this.tsTypes.selData = dataObj;
        this.suggestionListForTS = [];
    };
    ChatBot.prototype.setIndexTOUpdate = function (index) {
        if (index.chatListIndexToUpdate == (this.chatList.length - 1)) {
            if (JSON.stringify(this.indexToToggleForm) === JSON.stringify(index)) {
                this.onTaskDataSLideChange();
            }
            else {
                this.indexToToggleForm.chatListIndexToUpdate = index.chatListIndexToUpdate;
                this.indexToToggleForm.parentIndexToUpdate = index.parentIndexToUpdate;
                this.indexToToggleForm.childIndexToUpdate = index.childIndexToUpdate;
                this._scrollToBottom();
            }
        }
    };
    ChatBot.prototype.onTaskDataSLideChange = function () {
        this.indexToToggleForm.chatListIndexToUpdate = null;
        this.indexToToggleForm.parentIndexToUpdate = null;
        this.indexToToggleForm.childIndexToUpdate = null;
        this.suggestionListForTS = []; //empty suggestion list if not selected any suggestion and closed the form
    };
    ChatBot.prototype.doDisable = function (taskAndTimesheetDetails) {
        var _this = this;
        var totalEfforts = {
            hour: 0,
            minute: 0
        };
        //disable submit if there are no saved timesheet
        var list = [];
        if (taskAndTimesheetDetails && taskAndTimesheetDetails.length > 0) {
            taskAndTimesheetDetails.map(function (timesheet) {
                if (timesheet.taskList.length > 0) {
                    timesheet.taskList.map(function (task) {
                        if (task.approvalStatus == '-1' || task.approvalStatus == '3') {
                            list.push(task);
                        }
                        //calculate total efforts after every action and display on UI
                        var efforts = _this.getHourAndMinutes(_this.utilities.convertTime(task.totalEfforts, 2));
                        totalEfforts.hour += efforts.hour;
                        totalEfforts.minute += efforts.minute;
                    });
                }
            });
        }
        //set total efforts value in chat-list
        this.chatList[this.chatList.length - 1].response.responseList.totalCalculatedEfforts = totalEfforts;
        this.tsFlags.disableSubmit = list.length > 0 ? false : true;
    };
    ChatBot.prototype.getHourAndMinutes = function (efforts) {
        var effortsArray = efforts.split(':');
        var hour = parseInt(effortsArray[0]);
        var minute = parseInt(effortsArray[1]);
        var data = {
            hour: hour,
            minute: minute
        };
        return data;
    };
    //Confirm submit 
    ChatBot.prototype.showSubmitConfirmAlert = function (taskAndTimesheetDetails, queryId, chatListIndex) {
        var _this = this;
        if (chatListIndex == (this.chatList.length - 1)) {
            var alert_2 = this.utilities.presentConfirmation('Are you sure you want to submit this timesheet ?');
            alert_2.then(function () {
                _this.suggestionListForTS = []; //empty suggestion list if not selected any suggestion and clicked on submit button
                _this.submitTimesheet(taskAndTimesheetDetails, queryId);
            });
        }
    };
    /**
     *
     * Method to Perform Submit Action
     */
    ChatBot.prototype.submitTimesheet = function (taskAndTimesheetDetails, queryId) {
        var rejectedTimesheetFlag = false;
        var rejectedTaskName = null;
        var sortedTimesheetList = [];
        if (taskAndTimesheetDetails && taskAndTimesheetDetails.length > 0) {
            taskAndTimesheetDetails.map(function (item) {
                if (item.taskList.length > 0) {
                    item.taskList.map(function (task) {
                        if (task.approvalStatus !== '0') {
                            //comments mandatory while submitting rejected timesheet
                            if (task.approvalStatus == '3' && task.tsRejected && !task.comments && !rejectedTimesheetFlag) {
                                rejectedTimesheetFlag = true;
                                rejectedTaskName = task.taskName;
                            }
                            sortedTimesheetList.push(task);
                        }
                    });
                }
            });
        }
        if (sortedTimesheetList.length > 0 && !rejectedTimesheetFlag) {
            var url = this.timesheetRestApi[3]; //submit timesheet url
            var params = {
                "versions": __WEBPACK_IMPORTED_MODULE_17__app_env__["E" /* version */],
                "selectedDate": this.tsSelectedDateObj.date,
                "timesheetList": sortedTimesheetList
            };
            if (!queryId) {
                queryId = this.prevQueryID;
            }
            var extraParams = {
                "actionName": "submitTimesheet",
                "lifespan": '1',
                "queryId": queryId,
                "pendingDates": this.pendingDates,
                "dateObjForSubmission": this.tsSelectedDateObj
            };
            this.selectedDateForCT.dateSelected.date = '';
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["O" /* GetTimesheetDeatilsAction */](url, params, extraParams));
        }
        else if (rejectedTimesheetFlag) {
            this.utilities.presentAlert('Please add remarks for rejected timesheets');
        }
    };
    ChatBot.prototype.getProjectList = function (queryId) {
        var url = this.timesheetRestApi[4];
        console.log(this.tsSelectedDateObj);
        var params = {
            "currentDate": this.tsSelectedDateObj.date
        };
        var extraParams = {
            "actionName": "ProjectList",
            "lifespan": '1',
            "queryId": queryId
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["O" /* GetTimesheetDeatilsAction */](url, params, extraParams));
    };
    ChatBot.prototype.setIndexTOUpdateSelDate = function (data, chatlistIndex) {
        var chatListLength = this.chatList[this.chatList.length - 1].response.responseList.actionName == 'timeEntryDetails' ? (this.chatList.length - 1) : this.chatList.length;
        if (chatlistIndex == chatListLength) {
            this.indexToShowDot.chatListIndexForDateToUpdate = data.chatListIndexForDateToUpdate;
            this.indexToShowDot.dateIndexToUpdate = data.dateIndexToUpdate;
        }
    };
    ChatBot.prototype.getApproverStatusBoxType = function (status) {
        // -1 - saved
        // 1 - approved
        // 2 - submited
        // 3 - rejected
        return {
            'statustype-box-saved': status == -1 ? true : false,
            'statustype-box-approved': status == 1 ? true : false,
            'statustype-box-submited': status == 2 ? true : false,
            'statustype-box-rejected': status == 3 ? true : false,
        };
    };
    ChatBot.prototype.getTimesheetTypeIcon = function (status) {
        // -1 - saved
        // 1 - approved
        // 2 - submited
        // 3 - rejected
        switch (status) {
            case '-1': return 'assets/zents-imgs/ts-saved-icon.svg';
            case '1': return 'assets/zents-imgs/ts-approved-icon.svg';
            case '2': return 'assets/zents-imgs/ts-submitted-icon.svg';
            case '3': return 'assets/zents-imgs/ts-rejected-icon.svg';
            default: return 'assets/zents-imgs/ts-saved-icon.svg';
        }
    };
    ChatBot.prototype.goToMyTimesheetsPage = function (dataList) {
        var _this = this;
        new Promise(function (resolve, reject) {
            _this.navCtrl.push('MyTimesheetsPage', {
                type: 'chat-bot',
                dataList: dataList,
                resolve: resolve
            });
        }).then(function () {
            if (_this.chatList[_this.chatList.length - 1].response.responseList.actionName == "getMyTimesheetDetails") {
                _this.chatList[_this.chatList.length - 1].response.responseList.noSpeech = true;
            }
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["_18" /* SetHrChatBotListAction */](_this.chatList));
        });
    };
    ChatBot.prototype.updateProfileDetails = function (responseList) {
        var _this = this;
        var actionType = responseList.actionName.split('.');
        var url = responseList.restApi;
        if (this.utilities.platformAvailable()) {
            this.appversion.getVersionNumber().then(function (version) {
                var params = {
                    'userId': _this.userDetails.userId,
                    'type': 'userProfile',
                    'role': _this.role,
                    'versionNo': version
                };
                var extraParams = {
                    "actionName": actionType[3],
                    "lifespan": responseList.lifespan,
                    "queryId": responseList.queryId
                };
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["m" /* GetAssociateDetailsAction */](url, params, extraParams));
            });
        }
        else {
            var params = {
                'userId': this.userDetails.userId,
                'type': 'userProfile',
                'role': this.role,
                'versionNo': __WEBPACK_IMPORTED_MODULE_8__app_constants__["a" /* Constants */].new_version
            };
            var extraParams = {
                "actionName": actionType[3],
                "lifespan": responseList.lifespan,
                "queryId": responseList.queryId
            };
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["m" /* GetAssociateDetailsAction */](url, params, extraParams));
        }
    };
    ChatBot.prototype.getRole = function () {
        var _this = this;
        this._roleListener = this.store.select(__WEBPACK_IMPORTED_MODULE_6__app_store__["_84" /* getRole */]).subscribe(function (role) {
            _this.role = role;
        });
    };
    ChatBot.prototype.getTimeEntryDetailsToRefreshLocalData = function (selDate) {
        var _this = this;
        var url = 'timeEntryDetails';
        var data = {
            "version": __WEBPACK_IMPORTED_MODULE_17__app_env__["E" /* version */],
            "selectedDate": selDate
        };
        this.httpProvider.http.zentsCommonService({ url: url, data: data, timeentry: true }).subscribe(function (res) {
            if (res && res.data) {
                var data_2 = res.data;
                if (_this.chatList[_this.chatList.length - 2].response.responseList.actionName == "timeEntryDetails") {
                    _this.chatList[_this.chatList.length - 2].response.responseList.data = data_2;
                    _this.chatList[_this.chatList.length - 2].response.responseList.dataList = data_2.taskAndTimesheetDetails;
                }
            }
        }, function (err) { });
    };
    ChatBot.prototype.getCalendarInfo = function () {
        var _this = this;
        var url = 'calenderInfo';
        var data = {
            "version": __WEBPACK_IMPORTED_MODULE_17__app_env__["E" /* version */]
        };
        this.httpProvider.http.zentsCommonService({ url: url, data: data, timeentry: true }).subscribe(function (res) {
            if (res && res.data)
                _this.calendarInfo = res.data;
        }, function (err) { });
    };
    ChatBot.prototype.gotToEditProfile = function (value, actionName) {
        var _this = this;
        new Promise(function (resolve, reject) {
            var experienceData;
            value.value.filter(function (item) {
                if (item.type == 'experience') {
                    experienceData = item;
                }
            });
            var selectedfield = {
                'section': 'personal',
                'formMessage': value.hasRequestedShowMsg,
                'isAvailableForFinalSubmit': value.hasRequested,
                'isComingFromProfile': true,
                'experienceData': experienceData
            };
            _this.navCtrl.push('ObAddDetailsPage', {
                'selectedField': selectedfield,
                'highlightField': actionName,
                resolve: resolve
            });
        })
            .then(function () {
            if ((_this.chatList[_this.chatList.length - 1].response.responseList.actionName == 'maritalStatus' || _this.chatList[_this.chatList.length - 1].response.responseList.actionName == 'experience') && _this.chatList[_this.chatList.length - 1].response.responseList.doRedirect) {
                _this.chatList[_this.chatList.length - 1].response.responseList.doRedirect = false;
            }
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["_18" /* SetHrChatBotListAction */](_this.chatList));
        });
    };
    // Directly go to skills tab of userprofile page 
    ChatBot.prototype.updateSkillsFromProfile = function () {
        var _this = this;
        new Promise(function (resolve, reject) {
            _this.navCtrl.push('NewProfilePage', {
                'userId': _this.userDetails.userId,
                'profileType': 'userProfile',
                'fromZeno': true,
                resolve: resolve
            });
        }).then(function () {
            if (_this.chatList[_this.chatList.length - 1].response.responseList.actionName == "zenTalent.myProfileDetails.update.skills") {
                _this.chatList[_this.chatList.length - 1].response.responseList.noSpeech = true;
            }
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["_18" /* SetHrChatBotListAction */](_this.chatList));
        });
    };
    ChatBot.prototype.updateProfile = function (obj, index) {
        if (obj.type == 'personal') {
            if (index == this.chatList.length - 1 || index == this.chatList.length - 2)
                this.updateProfileDetails(obj.responseData);
        }
        else if (obj.type == 'skills') {
            if (index == this.chatList.length - 1)
                this.updateSkillsFromProfile();
        }
    };
    ChatBot.prototype.getPendingTimesheetList = function (response, data, queryId, parentIndex) {
        if (parentIndex == this.chatList.length - 1 || parentIndex == this.chatList.length - 3) {
            var projectName = response == 'all' ? 'All Projects' : response.projectName;
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["_18" /* SetHrChatBotListAction */]({ "from": "me", "query": projectName, "actionName": "pendingTimesheetList" }));
            var url = this.timesheetRestApi[1];
            var params = {
                "projectId": response == 'all' ? response : response.projectId,
                "startDate": data.startDate,
                "endDate": data.endDate,
                "category": "ALL" //no billability selection, default ALL
            };
            var extraParams = {
                "actionName": 'pendingTimesheetList',
                "lifespan": '1',
                "queryId": queryId,
                "speech": "Showing results for your pending timesheet only"
            };
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["O" /* GetTimesheetDeatilsAction */](url, params, extraParams));
        }
    };
    ChatBot.prototype.openPendingTimesheetListModal = function (list, parentIndex) {
        var _this = this;
        if (parentIndex == this.chatList.length - 1) {
            var pendingListModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_19__components_pending_timesheet_list_modal_pending_timesheet_list_modal__["a" /* PendingTimesheetListModalComponent */], {
                dataList: list,
                selectedList: this.chatList[this.chatList.length - 1].response.responseList.selectedPendingTimesheetList ? this.chatList[this.chatList.length - 1].response.responseList.selectedPendingTimesheetList : []
            }, {
                cssClass: 'pendingTimesheetListModal',
            });
            pendingListModal.present();
            pendingListModal.onDidDismiss(function (res) {
                // ////console.log('res: ', res);
                if (res && res.length > 0) {
                    _this.chatList[_this.chatList.length - 1].response.responseList.selectedPendingTimesheetList = res;
                }
            });
        }
    };
    ChatBot.prototype.approveAllPendingTimesheets = function (responseList, parentIndex) {
        if (parentIndex == this.chatList.length - 1) {
            var showApproveText = responseList.selectedPendingTimesheetList && responseList.selectedPendingTimesheetList.length > 0 && responseList.selectedPendingTimesheetList.length !== responseList.pendingList.length ? "Approve Selected" : "Approve All";
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["_18" /* SetHrChatBotListAction */]({ "from": "me", "query": showApproveText }));
            var url = this.timesheetRestApi[2];
            var params = {
                "approvalStatus": "1",
                "comments": "",
                "timesheetList": responseList.selectedPendingTimesheetList ? responseList.selectedPendingTimesheetList : responseList.pendingList
            };
            var extraParams = {
                "actionName": 'approveAllTimesheets',
                "lifespan": responseList.lifespan,
                "queryId": responseList.queryId,
                "speech": "Timesheet approved successfully"
            };
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["O" /* GetTimesheetDeatilsAction */](url, params, extraParams));
        }
    };
    ChatBot.prototype.openFAQModal = function (faqData) {
        var faqModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_20__components_faq_modal_faq_modal__["a" /* FaqModalComponent */], { faqData: faqData }, {
            cssClass: 'faq-modal'
        });
        faqModal.present();
        faqModal.onDidDismiss(function (res) {
            // ////console.log('res: ', res);
        });
    };
    ChatBot.prototype.replacePhoneNumber = function (str, actionName) {
        // /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
        // /\D/g
        if (actionName == 'getARDetails') {
            var p_num = str.match(/(?:(?:\+?([1-9]|[0-9][0-9]|[0-9][0-9][0-9])\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([0-9][1-9]|[0-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/g, "");
            var newStr = str.replace(p_num, "<a href='tel:" + p_num + "'>" + p_num + "</a>");
            return newStr;
        }
        else {
            return str;
        }
    };
    ChatBot.prototype._getSuggestionListFromServer = function (url, params) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["M" /* GetSuggestionListFromServerAction */](url, params));
    };
    // _getTimeEntryCreateTaskDetails(response: any) {
    //   console.log(response)
    //   // dateObj, index, queryId = null, speech = ''
    //   this.suggestionListForTS = [];  //hide on date change
    //   // let chatListLength = this.chatList[this.chatList.length - 1].response.responseList.actionName == 'timeEntryDetails' ? (this.chatList.length - 1) : this.chatList.length;
    //   // if (index == chatListLength) {
    //   //   this.tsSelectedDateObj = dateObj;
    //   //   this.getTimesheetDetailsCurrentIndex = index;
    //   //   this.tsTypes.selData = null;
    //   //   let date = moment(dateObj.date).format('D MMM YYYY');
    //   const url = 'https://zentalentappdev.zensar.com/timeentry/v1/timeEntryDetails'; //Get Timeentry Details Url
    //   const params = {
    //     "version": environment.version,
    //     "selectedDate": this.dateListFromTimeSheet[0].date
    //   }
    //   const extraParams = {
    //     "actionName": 'zenTS.getCreateTaskDetails',
    //     "queryId": response.queryId,
    //     "speech": response.speech ? response.speech : "Below is the task creation details :",
    //     // "indexToUpdate": index
    //   }
    //   this.store.dispatch(new fromStore.GetTimesheetDeatilsAction(url, params, extraParams));
    //   // }
    // }
    // // _getProjectList(queryId) {
    // //   let url = this.timesheetRestApi[4];
    // //   console.log(this.tsSelectedDateObj)
    // //   const params = {
    // //     "currentDate": this.tsSelectedDateObj.date
    // //   };
    // //   let extraParams = {
    // //     "actionName": "ProjectList",
    // //     "lifespan": '1',
    // //     "queryId": queryId
    // //   }
    // //   this.store.dispatch(new fromStore.GetTimesheetDeatilsAction(url, params, extraParams));
    // // }
    ChatBot.prototype._moveToPage = function (pageName) {
        var _this = this;
        var moveToPageData = {};
        // let moveTo: string;
        // let actionName: string;
        // let params
        if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "zenTalent.ijp") {
            moveToPageData.moveTo = 'InternalJobPostingPage';
            moveToPageData.actionName = 'zenTalent.ijp';
            moveToPageData.paramsFromChatBot = {
                highlightField: true,
                actionName: 'zenTalent.ijp'
            };
        }
        else if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "zenTalent.createDAP") {
            moveToPageData.moveTo = 'ZenLearnDashboardPage';
            moveToPageData.actionName = 'zenTalent.createDAP';
            moveToPageData.paramsFromChatBot = {
                highlightField: true,
                actionName: 'zenTalent.createDAP'
            };
        }
        else if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "referral.referYourFriend.yes.bonusPolicy.yes" || pageName == 'zenrich') {
            moveToPageData.moveTo = 'ZenRichLandingPage';
            moveToPageData.actionName = 'referral.referYourFriend.yes.bonusPolicy.yes';
            moveToPageData.paramsFromChatBot = {
                // highlightField: true,
                actionName: 'referral.referYourFriend.yes.bonusPolicy.yes',
                icon: "",
                key: "All Openings",
                parameter: "JOB_OPENINGS",
                type: null,
                value: "All Openings"
            };
        }
        else if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "referrals.FAQs") {
            moveToPageData.moveTo = 'FaqPage';
            moveToPageData.actionName = 'referrals.FAQs';
            moveToPageData.paramsFromChatBot = {
                pageTitle: 'FAQs',
                departmentId: 4,
                actionName: 'referrals.FAQs',
                openModal: true
            };
        }
        else if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "referral.createFriendsProfile") {
            moveToPageData.moveTo = 'ReferralDetailsPage';
            moveToPageData.actionName = 'referral.createFriendsProfile';
            moveToPageData.paramsFromChatBot = {
                actionName: 'referral.createFriendsProfile',
                createNew: true,
                candidateProfileId: 0
            };
        }
        new Promise(function (resolve, reject) {
            _this.navCtrl.push(moveToPageData.moveTo, {
                paramsFromChatBot: moveToPageData.paramsFromChatBot,
                resolve: resolve
            });
        })
            .then(function () {
            if (_this.chatList[_this.chatList.length - 1].response.responseList.actionName == moveToPageData.actionName) {
                _this.chatList[_this.chatList.length - 1].response.responseList.doRedirect = false;
            }
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["_18" /* SetHrChatBotListAction */](_this.chatList));
        });
    };
    ChatBot.prototype.addedTask = function (data) {
        console.log(data);
        this.selectedDateForCT.dateSelected.date = '';
        if (data && data.addedTask) {
            // this.taskAdded = data.addedTask;
            var date = __WEBPACK_IMPORTED_MODULE_16_moment__(data.CTforDate).format('DD MMM YYYY');
            this.chatList.push({ "from": "bot", "response": { responseList: { speech: "Task Created successfully, Please \"Fill Timesheet\" for " + date } }, "readMore": false });
            this.selectedDateForCT.CTforDate = data.CTforDate;
            // this._getHrChatBotData({ value: 'Fill My Timesheet' });
            var dateObj = { date: '' };
            dateObj.date = this.selectedDateForCT.CTforDate;
            this.getTimeEntryDetails(dateObj, this.chatList.length, null, "Please see below the timesheet details for " + date);
        }
        else {
            this.chatList.push({ "from": "bot", "response": { responseList: { speech: 'Task Creation canceled' } }, "readMore": false });
            this._getSuggestionListFromServer(__WEBPACK_IMPORTED_MODULE_15__environment_environment_dev__["C" /* url */] + "chatbot-zenhelp/getSuggestionData", {
                "actionId": 0
            });
        }
    };
    ChatBot.prototype.allocationMessageChatBot = function (data) {
        this.chatList.push({
            "from": "bot", "response": {
                responseList: {
                    speech: data.allocationMessage
                }
            }, "readMore": false
        });
        this._getSuggestionListFromServer(__WEBPACK_IMPORTED_MODULE_15__environment_environment_dev__["C" /* url */] + "chatbot-zenhelp/getSuggestionData", {
            "actionId": 0
        });
    };
    // globalmobility pdf mail service
    ChatBot.prototype._mailPDFDocuments = function (docSelected) {
        var _this = this;
        var alert = this.utilities.presentConfirmation('Do you want to send mail yourself ?');
        alert.then(function () {
            var url = 'sendMailWithAttachment';
            var params = {
                "actionName": "globalMobility",
                "documentUrl": docSelected
            };
            // setTimeout(() => {
            // }, 10000);
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_store__["C" /* GetMailServiceGlobalmobilityAction */](url, params));
            setTimeout(function () {
                _this._getSuggestionListFromServer(__WEBPACK_IMPORTED_MODULE_15__environment_environment_dev__["C" /* url */] + "chatbot-zenhelp/getSuggestionData", {
                    "actionId": 0
                });
            }, 2000);
        }).catch(function (err) { return err; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], ChatBot.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* Slides */])
    ], ChatBot.prototype, "slides", void 0);
    ChatBot = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat-bot',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot\chat-bot.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="pageTitile">Zeno</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="_showClosedData()">\n        <ion-icon name="information-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="">\n  <ion-list id="ionChatList" #ionList class="padding5" no-lines>\n\n    <!-- Chat list for bot and user -->\n    <div #ionListDiv *ngFor="let chatListItem of chatList; let i = index" [attr.data-index]="i">\n\n      <div class="" *ngIf="chatListItem?.from==\'bot\'">\n\n\n\n\n        <div class="padding5 row justify-content-flex-start align-item-center parentDiv"\n          *ngIf="chatListItem?.response?.responseList?.speech">\n          <!-- Show data from bot response -->\n          <div class="bot-icon">\n            <!-- <img class="chat-item-profile-pic profileHtWT" src="./assets/imgs/chat/Chatbot---Zeno.png"> -->\n            <img class="chat-item-profile-pic profileHtWT" src="./assets/imgs/chat/chatBot-icon.svg">\n\n          </div>\n          <!-- <div  class="chat-list suggestionItem queryContent" [class.noEllipsis]=\'(chatListItem?.readMore)\'>\n            <span class="" [innerHTML]="urlify((chatListItem?.response?.responseList?.speech) |toogleLessMore:tooglePipe:160:selectedIndex:i)"></span>\n            <span (click)="_toggleReadMore(chatListItem,i)" class="textColor" *ngIf="chatListItem?.response?.responseList?.speech.length > 170">{{tooglePipe ? "ReadMore" :"ReadLess"}}</span>\n          </div> -->\n          <read-more class="speech"\n            [desc]="replacePhoneNumber(chatListItem?.response?.responseList?.speech,chatListItem?.response?.responseList?.actionName)"\n            [UpdateProfileLinkData]="chatListItem?.response?.responseList?.updateProfileLink"\n            [moveToPage]="chatListItem?.response?.responseList?.moveToPage"\n            [actionName]="chatListItem?.response?.responseList?.actionName" (moveToPageAllow)="_moveToPage()"\n            (updateProfile)="updateProfile($event,i)"\n            [ngStyle]="{\'width\':chatListItem?.response?.responseList?.showQuestionIcon ? \'80%\' : \'89%\'}"></read-more>\n\n          <img *ngIf="chatListItem?.response?.responseList?.showQuestionIcon" class="question-mark"\n            src="assets/imgs/chat/question-mark.svg"\n            (click)="openFAQModal(chatListItem?.response?.responseList?.data?.approvalHelpInfo)" />\n\n          <!-- <div class="chat-list suggestionItem queryContent" >\n            <span [class.noEllipsis]=\'chatListItem?.readMore\'>{{chatListItem?.response?.responseList?.speech |toogleLessMore:200}}</span>\n            <span  (click)="_toggleReadMore(chatListItem)">{{chatListItem.readMore ? "Show Less":"Show More"}}</span>\n          </div> -->\n        </div>\n\n        <!-- download pdf starts -->\n        <div class="download-con horizontal-scroll margin2per-0" [hidden]="i!=(chatList.length-1)"\n          *ngIf="chatListItem?.response?.responseList?.actionName == \'pf_faq\' || chatListItem?.response?.responseList?.actionName == \'pf_transfer\' || chatListItem?.response?.responseList?.actionName == \'onsiteReturn\' || chatListItem?.response?.responseList?.actionName == \'onsiteTravel\'">\n          <button class="download-btn" *ngFor="let pdfItem of pdfArray " (click)="_downloadPDF(pdfItem)"><span\n              class="margin-right10">{{pdfItem.slice( pdfItem.lastIndexOf(\'/\') + 1, pdfItem.length - 4) | replaceUnderscorePipe }}</span>\n            <ion-icon name="download"></ion-icon>\n          </button>\n        </div>\n        <!-- download pdf ends -->\n\n        <!-- globalmobility  download pdf starts -->\n        <!-- [hidden]="i!=(chatList.length-1)" -->\n        <div *ngIf="chatListItem?.response?.responseList?.templateId == 4">\n          <button class="pdf-cont" *ngFor="let pdfItem of chatListItem?.response?.responseList?.restApi.split(\',\')">\n            <span class="pdf-item text-left">\n              <img class="padding-right12" *ngIf="pdfItem.slice( -4) == \'.pdf\'"\n                src="assets/imgs/chat/pdf-doc-icon.svg" />\n              <img class="padding-right12" *ngIf="pdfItem.slice( -4) == \'pptx\'"\n                src="assets/imgs/chat/ppt-doc-icon.svg" />\n              <img class="padding-right12" *ngIf="pdfItem.slice( -4) != \'pptx\' && pdfItem.slice( -4) != \'.pdf\'"\n                src="assets/imgs/chat/word-doc-icon.svg" />\n\n              <span>\n                {{pdfItem.slice( pdfItem.lastIndexOf(\'/\') + 1, pdfItem.length - 4) | replaceUnderscorePipe }}</span>\n            </span>\n            <img class="d-m" (click)="_downloadPDF(pdfItem)" src="assets/imgs/chat/pdf-download.svg" />\n            <img class="d-m" (click)="_mailPDFDocuments(pdfItem)" src="assets/imgs/chat/pdf-email.svg" />\n\n          </button>\n        </div>\n        <!-- globalmobility download pdf ends -->\n\n        <!-- To show Holiday calendar image -->\n        <div *ngIf="!chatListItem?.response?.responseList?.actionIncomplete"\n          [hidden]="(chatListItem?.response?.responseList?.actionName!=\'getHolidayCalendar\')"\n          (click)="utilities.openAsset(chatListItem?.response?.responseList?.restApi)">\n          <img class="chat-item-pic" src="{{chatListItem?.response?.responseList?.restApi}}"\n            onerror="this.src=\'./assets/imgs/logo.png\'">\n        </div>\n        <!-- for ar hierarchy -->\n        <div *ngIf="!chatListItem?.response?.responseList?.actionIncomplete"\n          [hidden]="(chatListItem?.response?.responseList?.actionName!=\'arHierarchy\')"\n          (click)="utilities.openAsset(chatListItem?.response?.responseList?.restApi)">\n          <img class="chat-item-pic" src="{{chatListItem?.response?.responseList?.restApi}}"\n            onerror="this.src=\'./assets/imgs/logo.png\'">\n        </div>\n        <!-- for ar location -->\n        <!-- <div *ngIf="!chatListItem?.response?.responseList?.actionIncomplete"\n          [hidden]="(chatListItem?.response?.responseList?.actionName!=\'arLocation\')"\n          (click)="utilities.openAsset(chatListItem?.response?.responseList?.restApi)">\n          <img class="chat-item-pic" src="{{chatListItem?.response?.responseList?.restApi}}"\n            onerror="this.src=\'./assets/imgs/logo.png\'">\n        </div> -->\n\n        <div *ngIf="!chatListItem?.response?.responseList?.actionIncomplete"\n          [hidden]="(chatListItem?.response?.responseList?.templateId!=2)"\n          (click)="utilities.openAsset(chatListItem?.response?.responseList?.restApi)">\n          <img class="chat-item-pic" src="{{chatListItem?.response?.responseList?.restApi}}"\n            onerror="this.src=\'./assets/imgs/logo.png\'">\n        </div>\n\n        <!-- To show wellness calendar image -->\n        <div *ngIf="!chatListItem?.response?.responseList?.actionIncomplete"\n          [hidden]="(chatListItem?.response?.responseList?.actionName!=\'getWellnessCalendar\')"\n          (click)="utilities.openAsset(chatListItem?.response?.responseList?.restApi)">\n          <img class="chat-item-pic" src="{{chatListItem?.response?.responseList?.restApi}}"\n            onerror="this.src=\'./assets/imgs/logo.png\'">\n        </div>\n\n        <!-- To show User Bank Details -->\n        <div class="chat-list suggestionItem queryContent white-space-nowrap display-inline-block"\n          *ngIf="chatListItem?.response?.responseList?.actionName"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'getUserBankDetails\'">\n          <div *ngFor="let responseItem of chatListItem?.response?.responseList?.userDetails">\n            <div>{{responseItem.key}} : <span [innerHTML]="responseItem.value | linky "></span></div>\n          </div>\n        </div>\n\n        <!-- zensarSite template -->\n        <!-- <div class="horizontal-scroll" *ngIf="chatListItem?.response?.responseList?.actionId!=9"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'getZensarSiteDataResponse\'">\n          <div class="chat-list" *ngFor="let item of chatListItem?.response?.responseList?.searchResults">\n            <div class="zensarCard" (click)="openLink(chat,item)">\n              <div class="cardTitle">{{item?.pageName}}</div>\n              <div *ngIf="item?.snippet">\n                <div *ngIf="!item.posterURL" class="from text chat-card">{{chatListItem.response.responseList.snippet}}\n                </div>\n              </div>\n              <div  *ngIf="item?.description" class="from text chat-card">\n                {{chatListItem.response.responseList.description}}</div>\n\n              <div *ngIf="item?.videoPreviewImage\'" class="poster-container">\n                <img class="poster-img" src="{{item?.videoPreviewImage}}" />\n                <div class="video-overlay">\n                  <img class="play-icon img-loaded" src="img/play-icon.png">\n                </div>\n              </div>\n\n              <div *ngIf="item?.type==\'document\'" class="overlay">\n                <img class="overlayImage" src="{{item?.docType}}" />\n              </div>\n              <div class="chat-date chat-card">\n                {{item?.releaseDate | date:\'MMM dd yyyy | HH:mm\'}}</div>\n            </div>\n          </div>\n        </div> -->\n\n        <!-- <div *ngIf="chatListItem?.response?.responseList?.actionName"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'openNewQuestion\'">\n          <textarea id="add" [(ngModel)]="askedQuestion"></textarea>\n        </div> -->\n\n        <!-- weather template -->\n        <div *ngIf="chatListItem?.response?.responseList?.actionName"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'getWeatherFetched\'">\n          <div class="chat-list suggestionItem weather-cont">\n            <!-- <div class="tableFlex"> -->\n            <div class="detail-cloud">\n              <div class="font16">{{chatListItem?.response?.responseList?.weather?.description | titlecase }}</div>\n              <span class="font16">{{chatListItem?.response?.responseList?.weather?.currentTemp}}\n                <span>&deg;C</span>\n              </span>\n              <div>Humidity <span> {{chatListItem?.response?.responseList?.weather?.humidity}} %</span></div>\n            </div>\n            <div>\n              <img [src]="chatListItem?.response?.responseList?.weather?.weatherSymbol" />\n            </div>\n            <!-- </div> -->\n          </div>\n        </div>\n\n        <!-- Timesheet Attendance Details -->\n        <div class="ts-attendance" *ngIf="chatListItem?.response?.responseList?.actionName"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'getMyAttendanceDetails\'">\n          <ion-row *ngFor="let responseItem of chatListItem?.response?.responseList?.dataList">\n            <ion-col col-4>\n              <div class="ts-calendar">\n                <img src="assets/imgs/chat/calendar-Icon.svg" />\n                <span><strong>{{responseItem?.dayName | titlecase}}</strong></span>\n              </div>\n              <p>{{responseItem?.loginDate | date: \'dd MMM yyyy\'}}</p>\n            </ion-col>\n            <ion-col col-8>\n              <div>\n                <div><strong>In:</strong> {{responseItem?.logInTime}} </div>\n                <div><strong>Out:</strong> {{responseItem?.logOutTime}}</div>\n              </div>\n              <div class="efforts">{{responseItem?.efforts}}</div>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <!-- Timesheet Compliance Details -->\n        <div class="ts-compliance" *ngIf="chatListItem?.response?.responseList?.actionName"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'getMyComplianceDetails\'">\n          <div class="outer-div" *ngFor="let responseItem of chatListItem?.response?.responseList?.dataList">\n            <div class="ts-calendar"\n              (click)="getMonthwiseCompliancePercentage(responseItem.month,responseItem?.monthFlag)">\n              <img src="assets/imgs/chat/calendar-Icon.svg" /> <span>{{responseItem?.month}}</span>\n            </div>\n            <div>{{responseItem?.percentage}}</div>\n          </div>\n        </div>\n\n        <!-- Timesheet Allocation Details -->\n        <div class="ts-allocation" *ngIf="chatListItem?.response?.responseList?.actionName"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'getMyAllocationDetails\'">\n          <div>\n            <ion-slides slidesPerView="1.2" spaceBetween="5px">\n              <ion-slide *ngFor="let responseItem of chatListItem?.response?.responseList?.dataList">\n                <ion-row>\n                  <div>Project</div>\n                  <div (click)="expand()" [ngClass]="{\'expand\' : expandDiv}">{{responseItem.projectName | titlecase}}\n                  </div>\n                </ion-row>\n                <ion-row>\n                  <div>1Up Manager</div>\n                  <div>{{responseItem.projectManagerName | titlecase}}</div>\n                </ion-row>\n                <ion-row>\n                  <div>Allocation Start Date</div>\n                  <div>{{responseItem.resourceAllocationStartDate}}</div>\n                </ion-row>\n                <ion-row>\n                  <div>Allocation End Date</div>\n                  <div>{{responseItem.resourceAllocationEndDate}}</div>\n                </ion-row>\n                <ion-row>\n                  <div>Project Start Date</div>\n                  <div>{{responseItem.projectStartDate}}</div>\n                </ion-row>\n                <ion-row>\n                  <div>Project End Date</div>\n                  <div>{{responseItem.projectEndDate}}</div>\n                </ion-row>\n                <ion-row>\n                  <div>Utilization</div>\n                  <div>{{responseItem.utilization}}</div>\n                </ion-row>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <!-- Timesheet Date -->\n        <!-- {{chatListItem?.response?.responseList?.actionName!=\'getFillTimesheetDetails\'}} -->\n        <!-- changing in create task state -->\n        <!-- {{chatListItem?.response?.responseList?.actionName}} -->\n        <div class="d-flex horizontal-scroll left-space"\n          *ngIf="chatListItem?.response?.responseList?.actionName && chatListItem?.response?.responseList?.dataList?.length > 1"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'getFillTimesheetDetails\'">\n          <!--  -->\n          <div *ngFor="let responseItem of chatListItem?.response?.responseList?.dataList;let dateIndex = index;">\n            <timesheet-data [dateObj]="responseItem" [type]="tsTypes.tsDate"\n              (onDateChange)="getTimeEntryDetails(responseItem,i + 1,chatListItem?.response?.responseList?.queryId)"\n              [updateStatus]="tsTypes?.updateStatus" [chatListIndexForDate]="i"\n              (setIndexTOUpdateSelDate)="setIndexTOUpdateSelDate($event,i + 1)" [indexToShowDot]="indexToShowDot"\n              [dateIndex]="dateIndex"></timesheet-data>\n          </div>\n        </div>\n\n        <!-- Timesheet Date After Submit-->\n        <!-- {{chatListItem?.response?.responseList?.actionName!=\'submitTimesheet\'}}\n        {{chatListItem?.response?.responseList?.actionName}} -->\n        <div class="d-flex horizontal-scroll left-space" *ngIf="chatListItem?.response?.responseList?.actionName"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'submitTimesheet\'">\n          <div *ngFor="let responseItem of chatListItem?.response?.responseList?.dataList;let dateIndex = index;">\n            <timesheet-data [dateObj]="responseItem" [type]="tsTypes.tsDate"\n              (onDateChange)="getTimeEntryDetails(responseItem,i + 1,chatListItem?.response?.responseList?.queryId)"\n              [updateStatus]="tsTypes?.updateStatus" [chatListIndexForDate]="i"\n              (setIndexTOUpdateSelDate)="setIndexTOUpdateSelDate($event,i + 1)" [indexToShowDot]="indexToShowDot"\n              [dateIndex]="dateIndex"></timesheet-data>\n          </div>\n        </div>\n\n        <!-- TimeEntry Details -->\n        <div class="timesheet horizontal-scroll left-space"\n          *ngIf="chatListItem?.response?.responseList?.actionName && chatList[chatList.length - 1]?.response?.responseList?.showTimeEntryDetails== true"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'timeEntryDetails\'"\n          [hidden]="i!=(chatList.length-1)">\n\n\n          <div *ngIf="chatListItem?.response?.responseList?.dataList?.length > 0">\n            <ion-row class="effort-details">\n              <ion-col col-9 class="total-efforts">\n                <div *ngIf="chatListItem?.response?.responseList?.data?.staffLoginLogoutDetails">\n                  <div><strong>{{chatListItem?.response?.responseList?.data?.staffLoginLogoutDetails?.date}}</strong>\n                  </div>\n                  <strong>In: </strong>\n                  <span>{{chatListItem?.response?.responseList?.data?.staffLoginLogoutDetails?.logInTimeHrsMin}}</span>\n                  <strong>Out: </strong>\n                  <span>{{chatListItem?.response?.responseList?.data?.staffLoginLogoutDetails?.logOutHrsMin}}</span>\n                  <span>({{chatListItem?.response?.responseList?.data?.staffLoginLogoutDetails?.efforts}})</span>\n                </div>\n                <div><strong>Total Efforts:\n                    {{chatListItem?.response?.responseList?.totalCalculatedEfforts?.hour}}:{{chatListItem?.response?.responseList?.totalCalculatedEfforts?.minute}}\n                  </strong></div>\n              </ion-col>\n              <ion-col col-3 class="submitBtn">\n                <button ion-button round small [disabled]="tsFlags?.disableSubmit"\n                  (click)="showSubmitConfirmAlert(chatListItem?.response?.responseList?.data?.taskAndTimesheetDetails,chatListItem?.response?.responseList?.queryId,i)"\n                  [ngStyle]="{\'opacity\': i < chatList?.length - 1 || tsFlags?.disableSubmit ? \'0.5\' : \'1\'}">Submit</button>\n              </ion-col>\n            </ion-row>\n          </div>\n          <div class="project-title" *ngIf="!chatListItem?.response?.responseList?.data?.staffLoginLogoutDetails">\n            <strong>For Date :\n            </strong> <span>{{tsFordate}}</span>\n          </div>\n\n          <!-- <div class="project-card" *ngFor="let responseItem of chatListItem?.response?.responseList?.dataList;let parentIndex = index;">\n            <div class="project-title">{{responseItem?.title}}</div>\n              <div class="d-flex horizontal-scroll" (scroll)="onScrollTaskAndTimesheetDetails($event)">\n                <div *ngFor="let task of responseItem.taskList;let childIndex = index;">\n                  <timesheet-data [taskData]="task" [timesheetData]="responseItem" [type]="tsTypes.taskAndTimesheetDetails"\n                    [isTimesheetEditable]="responseItem?.isTimesheetEditable" [isPayrollToBeFilledZeroHours]="canFillZeroHoursFlag()"\n                    (edit)="editAndSaveTimesheet($event,task,chatListItem?.response?.responseList?.dataList,i,chatListItem?.response?.responseList?.actionId)"\n                    (refresh)="refreshTimesheet(i)" (setSuggestionList)="setSuggestionList($event,i)" [selData]="tsTypes.selData"\n                    [parentIndex]="parentIndex" [childIndex]="childIndex" [indexToToggleForm]="indexToToggleForm"\n                    (setIndexTOUpdate)="setIndexTOUpdate($event)" [chatListIndex]="i" [chatListLength]="chatList?.length"\n                    [statusToUpdateIcon]="tsTypes?.statusToUpdateIcon"></timesheet-data>\n                </div>\n              </div>\n          </div> -->\n\n          <div class="project-card"\n            *ngFor="let responseItem of chatListItem?.response?.responseList?.dataList;let parentIndex = index;">\n            <div class="project-title"> <strong>Project: </strong>\n              <span>{{responseItem.title | titlecase}}</span>\n            </div>\n            <ion-slides slidesPerView="1.2" spaceBetween="5px" (ionSlideWillChange)="onTaskDataSLideChange()">\n              <ion-slide *ngFor="let task of responseItem.taskList;let childIndex = index;">\n                <timesheet-data [taskData]="task" [timesheetData]="responseItem"\n                  [type]="tsTypes.taskAndTimesheetDetails"\n                  [isTimesheetEditable]="chatListItem?.response?.responseList?.data?.isTimesheetEditable"\n                  [isPayrollToBeFilledZeroHours]="canFillZeroHoursFlag()"\n                  (edit)="editAndSaveTimesheet($event,task,chatListItem?.response?.responseList?.dataList,i,chatListItem?.response?.responseList?.actionId)"\n                  (refresh)="refreshTimesheet(i)" (setSuggestionList)="setSuggestionList($event,i)"\n                  [selData]="tsTypes.selData" [parentIndex]="parentIndex" [childIndex]="childIndex"\n                  [indexToToggleForm]="indexToToggleForm" (setIndexTOUpdate)="setIndexTOUpdate($event)"\n                  [chatListIndex]="i" [chatListLength]="chatList?.length"></timesheet-data>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <!-- User Profile -->\n        <div class="profile-old" *ngIf="chatListItem?.response?.responseList?.actionName"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'getUserProfileData\' && chatListItem?.response?.responseList?.actionName!=\'getMyProfile\'">\n          <ion-slides slidesPerView="3" spaceBetween="5px"\n            (ionSlideReachEnd)="onlastSlideUpdateEmpContactList(chatListItem?.response?.responseList?.searchResults)"\n            [ngStyle]="{\'width\': (showMoreArrow  && ((chatList.length - 1)  == i)) ? \'90%\' : \'100%\'}">\n            <ion-slide *ngFor="let responseItem of chatListItem?.response?.responseList?.searchResults"\n              (click)="goToProfile(responseItem)">\n              <ion-card>\n                <img src="{{responseItem.profilePicUrl}}" />\n                <div class="name">{{responseItem.employeeName}}</div>\n                <span>{{responseItem.employeeId}}</span>\n              </ion-card>\n            </ion-slide>\n          </ion-slides>\n          <div *ngIf="showMoreArrow && ((chatList.length - 1)  == i)" (click)="openEmpContactListModal()">\n            <ion-icon name="arrow-forward"></ion-icon>\n          </div>\n        </div>\n\n        <!-- User Profile -->\n        <!-- <div class="profile d-flex horizontal-scroll left-space" (scroll)="onScrollUpdateEmpContactList($event,chatListItem?.response?.responseList?.searchResults)"\n          *ngIf="chatListItem?.response?.responseList?.actionName" [hidden]="chatListItem?.response?.responseList?.actionName!=\'getUserProfileData\' && chatListItem?.response?.responseList?.actionName!=\'getMyProfile\'">\n          <div class="innerProfile" *ngFor="let responseItem of chatListItem?.response?.responseList?.searchResults"\n            (click)="goToProfile(responseItem)">\n            <ion-card>\n              <img src="{{responseItem.profilePicUrl}}" />\n              <div class="name">{{responseItem.employeeName}}</div>\n              <span>{{responseItem.employeeId}}</span>\n            </ion-card>\n          </div>\n          <div class="right-arrow" *ngIf="showMoreArrow && ((chatList.length - 1)  == i)" (click)="openEmpContactListModal()">\n            <ion-icon name="arrow-forward"></ion-icon>\n          </div>\n        </div> -->\n\n        <!-- My Timesheet Details -->\n        <!-- <div class="myTimesheet d-flex horizontal-scroll left-space" (scroll)="onScrollUpdateMyTimesheetList($event,chatListItem?.response?.responseList?.dataList)"\n          *ngIf="chatListItem?.response?.responseList?.actionName" [hidden]="chatListItem?.response?.responseList?.actionName!=\'getMyTimesheetDetails\'">\n          <div *ngFor="let responseItem of chatListItem?.response?.responseList?.dataList | slice:0:5">\n            <ion-card class="myTimesheetCard">\n              <ion-row class="details">\n                <ion-col col-2>\n                  <div class="image" [ngClass]="getApproverStatusBoxType(responseItem.approvalStatusId)">\n                    <img [src]="getTimesheetTypeIcon(responseItem.approvalStatusId)" />\n                  </div>\n                </ion-col>\n                <ion-col col-10 text-left padding-left>\n                  <p><strong>{{responseItem?.taskName | titlecase}}</strong></p>\n                  <p><strong>Project: </strong><span>{{responseItem?.projectName | titlecase}}</span></p>\n                  <p><strong>Date: </strong><span>{{responseItem?.taskUpdateDate}}</span></p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col text-left col-5>\n                  <strong>Efforts:</strong>\n                </ion-col>\n                <ion-col text-left col-7>\n                  <span>{{responseItem?.totalEfforts?.split(\'.\')[0]}} Hrs</span> <span>{{responseItem?.totalEfforts?.split(\'.\')[1]}}\n                    Mins</span>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col text-left col-5>\n                  <strong>Billability:</strong>\n                </ion-col>\n                <ion-col text-left col-7>\n                  <span>{{responseItem?.billablityFlag | titlecase}}</span>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </div>\n          <div *ngIf="showMoreArrowForMyTimesheetList && ((chatList.length - 1)  == i)" (click)="goToMyTimesheetsPage(chatListItem?.response?.responseList?.dataList)">\n            <ion-icon name="arrow-forward"></ion-icon>\n          </div>\n        </div> -->\n\n        <!-- My Timesheet Details -->\n        <div class="myTimesheet-old" *ngIf="chatListItem?.response?.responseList?.actionName"\n          [hidden]="chatListItem?.response?.responseList?.actionName !== \'getMyTimesheetDetails\'">\n          <ion-slides slidesPerView="1.2"\n            (ionSlideReachEnd)="onlastSlideUpdateMyTimesheetList(chatListItem?.response?.responseList?.dataList)"\n            [ngStyle]="{\'width\': (showMoreArrowForMyTimesheetList  && ((chatList.length - 1)  == i)) ? \'90%\' : \'100%\'}">\n            <ion-slide *ngFor="let responseItem of chatListItem?.response?.responseList?.dataList | slice:0:5">\n              <ion-card class="myTimesheetCard">\n                <ion-row class="details">\n                  <ion-col col-2>\n                    <div class="image" [ngClass]="getApproverStatusBoxType(responseItem.approvalStatusId)">\n                      <img [src]="getTimesheetTypeIcon(responseItem.approvalStatusId)" />\n                    </div>\n                  </ion-col>\n                  <ion-col col-10 text-left padding-left>\n                    <p><strong>{{responseItem?.taskName | titlecase}}</strong></p>\n                    <p><strong>Project: </strong><span>{{responseItem?.projectName | titlecase}}</span></p>\n                    <p>Date: <span>{{responseItem?.taskUpdateDate}}</span></p>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col text-left col-5>\n                    <strong>Efforts:</strong>\n                  </ion-col>\n                  <ion-col text-left col-7>\n                    <span>{{responseItem?.totalEfforts?.split(\'.\')[0]}} Hrs</span>\n                    <span>{{responseItem?.totalEfforts?.split(\'.\')[1]}}\n                      Mins</span>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col text-left col-5>\n                    <strong>Billability:</strong>\n                  </ion-col>\n                  <ion-col text-left col-7>\n                    <span>{{responseItem?.billablityFlag | titlecase}}</span>\n                  </ion-col>\n                </ion-row>\n                <ion-row class="comments-row">\n                  <ion-col text-left col-5 *ngIf="responseItem?.comments">\n                    <strong>Comments:</strong>\n                  </ion-col>\n                  <ion-col text-left class="comments">\n                    {{responseItem?.comments}}\n                  </ion-col>\n                </ion-row>\n              </ion-card>\n            </ion-slide>\n          </ion-slides>\n          <div *ngIf="showMoreArrowForMyTimesheetList && ((chatList.length - 1)  == i)"\n            (click)="goToMyTimesheetsPage(chatListItem?.response?.responseList?.dataList)">\n            <ion-icon name="arrow-forward"></ion-icon>\n          </div>\n        </div>\n\n        <!-- Approve Timesheet-->\n        <div class="approve-timesheet left-space" *ngIf="chatListItem?.response?.responseList?.actionName"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'getApproveTimesheetDetails\'">\n          <div class="d-flex"\n            *ngIf="chatListItem?.response?.responseList?.data?.projectList?.length > 0 || chatListItem?.response?.responseList?.data?.teamsTimesheetList?.length > 0">\n            <div class="duration">\n              <img src="assets/imgs/chat/calendar-Icon.svg" />\n              <span>Duration:</span>\n              <strong>{{chatListItem?.response?.responseList?.data?.startDate | date:\'dd MMM, yyyy\'}} -\n                {{chatListItem?.response?.responseList?.data?.endDate | date:\'dd MMM, yyyy\'}}</strong>\n            </div>\n          </div>\n          <ion-list no-lines margin-top *ngIf="chatListItem?.response?.responseList?.dataList?.length > 0">\n            <button ion-item\n              (click)="getPendingTimesheetList(\'all\',chatListItem?.response?.responseList?.data,chatListItem?.response?.responseList?.queryId,i)">\n              <span class="projectName">All Projects</span>\n              <img src="assets/zents-imgs/right-arrow.svg" />\n            </button>\n            <button ion-item *ngFor="let responseItem of chatListItem?.response?.responseList?.dataList;"\n              (click)="getPendingTimesheetList(responseItem,chatListItem?.response?.responseList?.data,chatListItem?.response?.responseList?.queryId,i)">\n              <span class="projectName">{{ responseItem.projectName }}</span>\n              <img src="assets/zents-imgs/right-arrow.svg" />\n            </button>\n          </ion-list>\n        </div>\n\n        <!-- "pendingTimesheetList" -->\n        <div class="approveAll left-space" *ngIf="chatListItem?.response?.responseList?.actionName"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'pendingTimesheetList\'">\n          <div class="d-flex">\n            <span>Timesheets</span>\n            <div>\n              <strong><span\n                  *ngIf="chatListItem?.response?.responseList?.selectedPendingTimesheetList?.length > 0">{{chatListItem?.response?.responseList?.selectedPendingTimesheetList?.length}}\n                  / </span>{{chatListItem?.response?.responseList?.pendingList?.length}}</strong>\n              <button (click)="openPendingTimesheetListModal(chatListItem?.response?.responseList?.pendingList,i)"\n                [disabled]="(i != (chatList?.length - 1) || chatListItem?.response?.responseList?.pendingList?.length == 0)">View</button>\n            </div>\n          </div>\n          <div class="message" *ngIf="chatListItem?.response?.responseList?.selectedPendingTimesheetList?.length > 0">\n            Do\n            you want to approve all selected timesheets?</div>\n          <button class="approveAllBtn" ion-button round small\n            (click)="approveAllPendingTimesheets(chatListItem?.response?.responseList,i)"\n            [disabled]="(i != (chatList?.length - 1) || chatListItem?.response?.responseList?.pendingList?.length == 0)">Approve\n            <span class="text">{{chatListItem?.response?.responseList?.selectedPendingTimesheetList?.length > 0 &&\n              chatListItem?.response?.responseList?.selectedPendingTimesheetList?.length !==\n              chatListItem?.response?.responseList?.pendingList?.length ? \'Selected\' : \'All\'}}</span>\n          </button>\n        </div>\n\n        <!-- create Task starts-->\n        <div\n          *ngIf="chatListItem?.response?.responseList?.showTimeEntryDetails == false && chatList[chatList.length - 2]?.response?.responseList?.actionName==\'zenTS.getCreateTaskDetails\' && chatListItem?.response?.responseList?.enableCT == true && i==(chatList.length-1)">\n          <create-task [selectedDateForCT]="sendCTDate" [timeEntryDetailData]="chatListItem?.response?.responseList"\n            [isPayrollToBeFilledZeroHours]="canFillZeroHoursFlag()" (addedTask)="addedTask($event)"\n            (allocationMessageChatBot)="allocationMessageChatBot($event)">\n          </create-task>\n        </div>\n        <!-- create task ends -->\n\n        <!-- global mobility starts -->\n        <div class="region-list-cont" [hidden]="i!=(chatList.length-1)"\n          *ngIf="chatListItem?.response?.responseList?.rowRegionList != \'\'">\n          <button class="region-list" *ngFor="let region of chatListItem.response.responseList.rowRegionList"\n            (click)="_getHrChatBotData({value:region,clickedChatItem:chatListItem?.response?.responseList})"><span\n              class="margin-right10">{{region}}</span>\n            <ion-icon name="ios-arrow-forward"></ion-icon>\n          </button>\n        </div>\n        <!-- global mobility ends -->\n\n        <!-- refferal check starts -->\n        <div *ngIf="chatListItem?.response?.responseList?.actionName ==\'referral.checkReferralStatus\'">\n          <referral-component [refferalDetails]="chatListItem?.response?.responseList" [dataOnly]="\'false\'"\n            (moreReferralFlag)="_getHrChatBotData({ value: \'More Referral\' })">\n          </referral-component>\n        </div>\n        <!-- refferal check ends -->\n\n        <!-- matching profile starts -->\n        <div *ngIf="chatListItem?.response?.responseList?.actionName ==\'referrals.matchingPositionsToMyProfile\'">\n          <matching-profile [matchingProfile]="chatListItem?.response?.responseList" (moveToPageAllow)="_moveToPage(\'zenrich\')"></matching-profile>\n        </div>\n        <!-- matching profile ends -->\n\n        <!-- skeleton block -->\n        <!-- <div class=" skeleton-cont" *ngIf="((loading$ | async) &&\n  i==(chatList.length-1) &&\n   chatListItem?.response?.responseList?.lifespan != 1 && \n   chatListItem?.response?.responseList?.actionIncomplete != \'false\' &&\n   chatListItem?.response?.responseList?.actionName != \'timeEntryDetails\') ||\n   ((loading$ | async) &&\n   i==(chatList.length-1) &&\n    chatListItem?.response?.responseList?.lifespan != 1 && \n    chatListItem?.response?.responseList?.actionIncomplete != \'false\' && \n    chatListItem?.response?.responseList?.actionName != \'timeEntryDetails\' &&\n   chatListItem?.response?.responseList?.actionName != \'ProjectList\')">\n          <div class="display-flex align-item-flex-start">\n            <div class="margin-top5" [hidden]="chatListItem?.response?.responseList?.actionName == \'getUserProfileParamsDetails\' || \n     chatListItem?.response?.responseList?.actionName == \'zenTalent.getMyProfile\' ||\n      chatListItem?.response?.responseList?.actionName == \'getUserBankDetails\' ||\n       chatListItem?.response?.responseList?.actionName == \'getMyProfile\'">\n              <img class="chat-item-profile-pic profileHtWT" src="./assets/imgs/chat/chatBot-icon.svg">\n            </div>\n            <div class="card_description loading"></div>\n          </div>\n          <div class="card_title loading"></div>\n        </div> -->\n\n        <!-- loader-dots -->\n\n\n        <div class="align-cont-cent" *ngIf="(loading$ | async) &&\n        i==(chatList.length-1) &&\n         chatListItem?.response?.responseList?.lifespan != 1 && \n         chatListItem?.response?.responseList?.actionIncomplete != \'false\' &&\n         chatListItem?.response?.responseList?.actionName != \'timeEntryDetails\'">\n          <div class="margin-top5 margin-right10">\n            <img class="chat-item-profile-pic profileHtWT" src="./assets/imgs/chat/chatBot-icon.svg">\n          </div>\n          <div class="loader-cont loader-dots">\n            <span></span>\n            <span></span>\n            <span></span>\n          </div>\n        </div>\n      </div>\n\n\n      <!-- feedback response -->\n      <div\n        *ngIf="(chatListItem?.response?.responseList?.actionName == \'receivedFeedbackRes\' || chatListItem?.response?.responseList?.actionName == \'negativeFeedbackres\')"\n        class="horizontal-scroll align-cont-cent feedback">\n        <span class="fromBot">{{chatListItem?.response?.responseList?.feedbackResponse}}</span>\n      </div>\n\n      <!-- suggestion phrase -->\n      <div class="text-wrapper" *ngIf="!(loading$ | async)"\n        [ngStyle]="{\'display\': chatListItem?.response?.responseList?.suggestionPhrase ? \'block\':\'none\'}"\n        [hidden]="i!=(chatList.length-1) ">\n        {{chatListItem?.response?.responseList?.suggestionPhrase}}</div>\n\n      <!-- To show suggestions in horizontal scroll -->\n      <div class="horizontal-scroll position-bottom"\n        *ngIf="chatListItem?.response?.responseList?.suggestions && showSuggestion && !(loading$ | async)"\n        [hidden]="i!=(chatList.length-1)">\n        <button class="chat-list suggestionItem"\n          (click)="_getHrChatBotData({value:item,clickedChatItem:chatListItem?.response?.responseList})"\n          *ngFor="let item of chatListItem?.response?.responseList?.suggestions"\n          [disabled]="i!=(chatList.length-1)">{{item}}</button>\n      </div>\n\n      <!-- Show Data of User queries -->\n      <div class=" padding5 row justify-content-flex-end align-item-center" *ngIf="chatListItem?.from==\'me\'"\n        [hidden]="!chatListItem?.query">\n        <span class="chat-item">{{chatListItem?.query}}</span>\n        <img class="chat-item-profile-pic" src="{{userDetails?.profilePic}}"\n          onerror="this.src=\'./assets/imgs/Username.svg\'">\n      </div>\n\n\n      <!-- Show Data for feedback  -->\n      <div *ngIf="i==chatList.length-1">\n        <div *ngIf="!chatListItem?.response?.responseList?.feedbackSent">\n          <div class="feedbackTextarea"\n            *ngIf="(chatListItem?.response?.responseList?.actionName == \'salary_discrepency\' && chatListItem?.response?.responseList?.lifespan == 2 && showQueryBox) || (chatListItem?.response?.responseList?.actionName == \'pf_faq\' && chatListItem?.response?.responseList?.lifespan == 2 && showQueryBox) || (chatListItem?.response?.responseList?.actionName == \'investment\' && chatListItem?.response?.responseList?.lifespan == 2 && showQueryBox) || (chatListItem?.response?.responseList?.actionName == \'pf_faq_yes\' && chatListItem?.response?.responseList?.lifespan == 1 && showQueryBox) || (chatListItem?.response?.responseList?.actionName == \'salaryLetter\' && chatListItem?.response?.responseList?.lifespan == 2 && showQueryBox) || (chatListItem?.response?.responseList?.actionName == \'visaPolicy\' && chatListItem?.response?.responseList?.lifespan == 2 && showQueryBox)">\n            <textarea placeholder="Please provide your query" [(ngModel)]=\'queryListenFromFeedback\'></textarea>\n            <div class="justify-cont-center">\n              <div class="send-button" (click)="sendNegativeFeedback(chatListItem, queryListenFromFeedback)">Send\n              </div>\n              <div class="cancel-button" (click)="_cancel()">Cancel</div>\n            </div>\n          </div>\n\n          <div\n            *ngIf="chatListItem?.response?.responseList?.lifespan == 1 && chatListItem?.response?.responseList?.actionName != \'getUserProfileParamsDetails\'"\n            class="horizontal-scroll align-cont-cent feedback">\n            <span class="fromBot">{{feedbackMessage}}</span>\n            <ion-icon name="thumbs-up" class="thum-icon" *ngIf="!flag"\n              (click)="_submitFeedback(\'Positive\', chatListItem)">\n            </ion-icon>\n            <ion-icon name="thumbs-down" class="thum-icon" *ngIf="!flag"\n              (click)="_submitFeedback(\'Negative\', chatListItem,$event)"></ion-icon>\n          </div>\n\n          <div class="feedbackTextarea"\n            *ngIf="chatListItem?.response?.responseList?.lifespan == 1 && chatListItem?.negativeFeedback">\n            <textarea placeholder="Please provide your feedback" [(ngModel)]=\'negativeFeedbackMessage\'></textarea>\n            <div class="sendFeedback" (click)="sendNegativeFeedback(chatListItem, negativeFeedbackMessage)">Send\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n\n    </div>\n\n  </ion-list>\n\n  <!-- <div class="screen" >hi</div> -->\n</ion-content>\n\n<ion-footer padding>\n  <select-suggestion [type]="tsTypes.suggestionType" [suggestionList]="suggestionListForTS" [selectedValue]="selValue"\n    (setSuggestion)="setSuggestion($event)"></select-suggestion>\n  <!-- <ion-slides slidesPerView="3" spaceBetween="5px">\n    <ion-slide *ngFor="let suggestion of suggestionListForTS" (click)="setSelectedSuggestion(suggestion)">\n      {{suggestion.name}}\n    </ion-slide>\n  </ion-slides> -->\n\n  <div class="spinner-container">\n    <ion-spinner name="dots" class="loader" *ngIf="loading$ | async"></ion-spinner>\n  </div>\n\n  <div *ngIf="!(loading$ | async)">\n    <div [hidden]="showKeyboard" class="holder">\n      <!-- keyboard -->\n      <img class="width9 height9" *ngIf="!showText" (click)="_openKeyboard()"\n        src="./assets/imgs/chat/keyboard-icon.svg" />\n\n      <!-- Microphone/Listening -->\n      <img class="allIcons" *ngIf="!showText && !listening" (click)="_startListening()"\n        src="./assets/imgs/chat/microphone-icon.svg" />\n      <img class="gifSize" *ngIf="listening" src="./assets/imgs/chat/message-loader.gif" />\n\n      <!-- Speaker/Mute -->\n      <img class="allIcons" *ngIf="mute" (click)="_muteSpeech()" src="./assets/imgs/chat/mute.svg" />\n      <img class="allIcons" *ngIf="!mute" (click)="_muteSpeech()" src="./assets/imgs/chat/unmute-icon.svg" />\n    </div>\n\n    <div [hidden]="!showKeyboard" class="keyboard-holder">\n      <div class="grow">\n        <ion-input type="text" [(ngModel)]=\'inputChatText\' (input)=\'_ionChangeToggleSendMic($event.target?.value)\'\n          (ionChange)=\'_ionChangeToggleSendMic($event.target?.value)\' (keyup.enter)="_sendText()"></ion-input>\n      </div>\n      <div class="allIcons">\n        <img *ngIf="!showSend" (click)="_closeKeyboard()" src="./assets/imgs/chat/microphone-icon.svg" />\n        <img *ngIf="showSend" (click)="_sendText()" src="./assets/imgs/chat/send.svg" />\n      </div>\n    </div>\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot\chat-bot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__providers_download_download__["a" /* Download */], __WEBPACK_IMPORTED_MODULE_9_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_7__providers_data_data__["a" /* Data */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_2__providers_speechRecognition_speechRecognition__["a" /* SpeechRecognitionUtility */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_screenshot_ngx__["a" /* Screenshot */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_13__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ToastController */], __WEBPACK_IMPORTED_MODULE_18__ionic_native_app_version__["a" /* AppVersion */]])
    ], ChatBot);
    return ChatBot;
}());

//# sourceMappingURL=chat-bot.js.map

/***/ })

});
//# sourceMappingURL=2.js.map