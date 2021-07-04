webpackJsonp([1,28],{

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

/***/ 1452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBotModule", function() { return ChatBotModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_bot_new__ = __webpack_require__(1875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_linky__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(1455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__container_zents_timesheet_add_task_add_task_module__ = __webpack_require__(1310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_bot_new_services_chat_bot_new_services__ = __webpack_require__(1469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_bot_components_chat_bot_components_module__ = __webpack_require__(1877);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ChatBotModule = /** @class */ (function () {
    function ChatBotModule() {
    }
    ChatBotModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            entryComponents: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_bot_new__["a" /* ChatBotNew */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__chat_bot_components_chat_bot_components_module__["a" /* ChatBotComponentModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_bot_new__["a" /* ChatBotNew */]),
                __WEBPACK_IMPORTED_MODULE_3_ngx_linky__["a" /* LinkyModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_5__container_zents_timesheet_add_task_add_task_module__["AddTaskPageModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__chat_bot_new_services_chat_bot_new_services__["a" /* ChatBotServices */]]
        })
    ], ChatBotModule);
    return ChatBotModule;
}());

//# sourceMappingURL=chat-bot-new.module.js.map

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

/***/ 1469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBotServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_getterSetter_getterSetter__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatBotServices = /** @class */ (function () {
    function ChatBotServices(httpProvider, getterSetter, utility) {
        this.httpProvider = httpProvider;
        this.getterSetter = getterSetter;
        this.utility = utility;
        // action contains the response from service
        this.action = {};
        // state contain the chatList btw bot & user
        this.state = {};
    }
    /**
     * chat bot normal flow service
     * @param serviceParams parameters required to fetch data
     */
    ChatBotServices.prototype._restAPICall = function (serviceParams) {
        var _this = this;
        this.action = serviceParams;
        this.state = {};
        return new Promise(function (resolve, reject) {
            _this.httpProvider.http.commonService({ url: serviceParams.url, data: _this.action.params, apiUrl: true })
                .subscribe(function (serviceResponse) {
                _this.utility.consoleLog(serviceResponse);
                _this.action.payload = serviceResponse;
                var response = {};
                // response.responseList = {
                //     actionName: 'getUserBankDetails',
                //     userDetails: this.action.payload.details.ResponseList,
                //     lifespan: 1,
                //     queryId: this.state[this.state.length - 1].response.responseList.queryId
                // }
                resolve({
                    pending: false,
                    data: serviceResponse
                });
            });
        });
    };
    ChatBotServices.prototype._hrChatBotSetChatList = function (serviceParams) {
        var _this = this;
        this.action = serviceParams;
        this.state = this.getterSetter.getUserChatListData();
        return new Promise(function (resolve, reject) {
            if (!_this.utility.isEmptyOrNullOrUndefined(_this.action)) {
                if (_this.action.actionName == 'pendingTimesheetList' && _this.state.length > 0 && _this.state[_this.state.length - 2].actionName == 'pendingTimesheetList') {
                    _this.state[_this.state.length - 2].query = _this.action.query;
                    resolve({
                        pending: false,
                        data: _this.state
                    });
                }
                resolve({
                    pending: false,
                    data: _this.state.concat(_this.action)
                });
            }
            resolve({
                pending: false,
                data: _this.state
            });
        });
    };
    /**
     * timesheet service
     * @param serviceParams parameters required to fetch data
     */
    ChatBotServices.prototype._timeSheetService = function (serviceParams) {
        var _this = this;
        this.action = serviceParams.data;
        console.log(this.action, serviceParams);
        this.state = this.getterSetter.getUserChatListData();
        return new Promise(function (resolve, reject) {
            _this.httpProvider.http.zentsCommonService({ url: serviceParams.url, data: _this.action.params, timesheet: true })
                .subscribe(function (serviceResponse) {
                _this.utility.consoleLog(serviceResponse);
                if (_this.utility.isEmptyOrNullOrUndefined(_this.action))
                    _this.action = serviceParams.data;
                _this.action.payload = serviceResponse;
                // resolve({ "title": serviceResponse })
                if (_this.action.payload.userMessage && _this.action.extraParams.actionName == "saveTimesheet") {
                    _this.state[_this.state.length - 1].response.responseList.noSpeech = true;
                    resolve({
                        pending: false,
                        message: Object.assign({}, { userMessage: _this.action.payload.userMessage, actionName: _this.action.extraParams.actionName }),
                        data: _this.state
                    });
                }
                else if (_this.action.extraParams.actionName == "submitTimesheet") {
                    var date = __WEBPACK_IMPORTED_MODULE_1_moment___default()(_this.action.extraParams.dateObjForSubmission.date).format('DD MMM YYYY');
                    var msg = _this.action.extraParams.pendingDates.length > 1 ? " for " + date + ".Would you like to submit for the below dates as well." : '';
                    var response = {};
                    response.responseList = {
                        actionName: _this.action.extraParams.actionName,
                        lifespan: _this.action.extraParams.lifespan,
                        queryId: _this.action.extraParams.queryId,
                        speech: _this.action.payload.userMessage + msg,
                        dataList: _this.action.extraParams.pendingDates.filter(function (dateObj) { return JSON.stringify(dateObj) !== JSON.stringify(_this.action.extraParams.dateObjForSubmission); })
                    };
                    resolve({
                        pending: false,
                        data: _this.state.concat({ "from": "bot", "response": response })
                    });
                }
                else if (_this.action.extraParams.indexToUpdate && _this.state[_this.state.length - 1].response.responseList.actionName == "timeEntryDetails" && _this.action.payload.data) {
                    _this.state[_this.action.extraParams.indexToUpdate].response.responseList.data = _this.action.payload.data ? _this.action.payload.data : null;
                    _this.state[_this.action.extraParams.indexToUpdate].response.responseList.dataList = _this.action.payload.data.taskAndTimesheetDetails.length > 0 ? _this.action.payload.data.taskAndTimesheetDetails : [];
                    // this.state[this.action.extraParams.indexToUpdate].response.responseList.speech = null;
                    resolve({
                        pending: false,
                        data: _this.state
                    });
                }
                else {
                    var response = {};
                    if (_this.action.extraParams.actionName == 'ProjectList') {
                        response.responseList = {
                            actionName: _this.action.extraParams.actionName,
                            data: _this.action.payload.data ? _this.action.payload.data : [],
                            lifespan: _this.action.extraParams.lifespan,
                            queryId: _this.action.extraParams.queryId,
                            actionIncomplete: false
                        };
                    }
                    else if (_this.action.extraParams.actionName == 'getApproveTimesheetDetails') {
                        response.responseList = {
                            actionName: _this.action.extraParams.actionName,
                            data: _this.action.payload.data && _this.action.payload.data.data ? _this.action.payload.data.data : [],
                            dataList: _this.action.payload.data && _this.action.payload.data.data && _this.action.payload.data.data.projectList ? _this.action.payload.data.data.projectList : [],
                            speech: _this.action.payload.data.speech,
                            lifespan: _this.action.extraParams.lifespan,
                            queryId: _this.action.extraParams.queryId,
                            showQuestionIcon: true
                        };
                    }
                    else if (_this.action.extraParams.actionName == "pendingTimesheetList") {
                        // this.utility.consoleLog(this.action.payload);
                        if (_this.state[_this.state.length - 1].from == 'bot' && _this.state[_this.state.length - 1].response.responseList.actionName == "pendingTimesheetList" && _this.state[_this.state.length - 1].response.responseList.data) {
                            _this.state[_this.state.length - 1].response.responseList.data = _this.action.payload;
                            _this.state[_this.state.length - 1].response.responseList.pendingList = _this.action.payload && _this.action.payload.allPendingTimesheetList ? _this.action.payload.allPendingTimesheetList : [];
                            _this.state[_this.state.length - 1].response.responseList.noSpeech = true;
                            _this.state[_this.state.length - 1].response.responseList.selectedPendingTimesheetList = [];
                            resolve({
                                pending: false,
                                data: _this.state
                            });
                        }
                        response.responseList = {
                            actionName: _this.action.extraParams.actionName,
                            data: _this.action.payload ? _this.action.payload : null,
                            pendingList: _this.action.payload && _this.action.payload.allPendingTimesheetList ? _this.action.payload.allPendingTimesheetList : [],
                            speech: _this.action.extraParams.speech,
                            lifespan: _this.action.extraParams.lifespan,
                            queryId: _this.action.extraParams.queryId
                        };
                    }
                    else if (_this.action.extraParams.actionName == 'approveAllTimesheets') {
                        response.responseList = {
                            actionName: _this.action.extraParams.actionName,
                            speech: _this.action.extraParams.speech,
                            lifespan: _this.action.extraParams.lifespan,
                            queryId: _this.action.extraParams.queryId
                        };
                    }
                    else {
                        response.responseList = {
                            actionId: _this.action.extraParams.actionId,
                            actionName: _this.action.extraParams.actionName,
                            data: _this.action.extraParams.actionName == 'timeEntryDetails' ? _this.action.payload.data : null,
                            dataList: _this.action.extraParams.actionName == 'timeEntryDetails' ? (_this.action.payload.data.taskAndTimesheetDetails.length > 0 ? _this.action.payload.data.taskAndTimesheetDetails : []) : _this.action.payload.data && _this.action.payload.data.data ? _this.action.payload.data.data : [],
                            speech: _this.action.extraParams.actionName == 'timeEntryDetails' && _this.action.payload.data.taskAndTimesheetDetails.length > 0 ? _this.action.extraParams.speech : (_this.action.extraParams.actionName == 'getFillTimesheetDetails' && _this.action.payload.data && _this.action.payload.data.data && _this.action.payload.data.data.length == 1 ? null : _this.action.payload.data.speech),
                            lifespan: _this.action.extraParams.lifespan,
                            queryId: _this.action.extraParams.queryId,
                            CreateTaskText: _this.action.payload.data.CreateTaskText,
                            createTaskFlag: _this.action.payload.data.createTaskFlag
                        };
                    }
                    resolve({
                        pending: false,
                        data: _this.state.concat({ "from": "bot", "response": response })
                    });
                }
            });
        });
    };
    /**
     * user bank details service
     * @param serviceParams parameters required to fetch data
     */
    ChatBotServices.prototype._userBankDetails = function (serviceParams) {
        var _this = this;
        this.action = serviceParams.data;
        this.state = this.getterSetter.getUserChatListData();
        return new Promise(function (resolve, reject) {
            _this.httpProvider.http.commonService({ url: serviceParams.url, data: _this.action.params, userBankDetails: true })
                .subscribe(function (serviceResponse) {
                _this.utility.consoleLog(serviceResponse);
                _this.action.payload = serviceResponse;
                var response = {};
                response.responseList = {
                    actionName: 'getUserBankDetails',
                    userDetails: _this.action.payload.details.ResponseList,
                    lifespan: 1,
                    queryId: _this.state[_this.state.length - 1].response.responseList.queryId
                };
                if (_this.state[_this.state.length - 1].response.responseList.actionName == 'getARDetails') {
                    response.responseList.actionName = 'arDetails';
                    response.responseList.userDetails = _this.action.payload.details;
                }
                // response.responseList = {
                //     actionName: 'getUserBankDetails',
                //     userDetails: this.action.payload.details.ResponseList,
                //     lifespan: 1,
                //     queryId: this.state[this.state.length - 1].response.responseList.queryId
                // }
                resolve({
                    pending: false,
                    data: _this.state.concat({ "from": "bot", "response": response })
                });
            });
        });
    };
    /**
     * associated details
     * @param serviceParams parameters required to fetch data
     */
    ChatBotServices.prototype._associateDetails = function (serviceParams) {
        var _this = this;
        this.action = serviceParams.data;
        this.state = this.getterSetter.getUserChatListData();
        return new Promise(function (resolve, reject) {
            _this.httpProvider.http.commonService({ url: serviceParams.url, data: _this.action.params, empContactList: true })
                .subscribe(function (serviceResponse) {
                _this.utility.consoleLog(serviceResponse);
                _this.action.payload = serviceResponse;
                if (_this.action.extraParams.actionName == _this.state[_this.state.length - 1].response.responseList.actionName) {
                    _this.state[_this.state.length - 1].response.responseList.doRedirect = true;
                    resolve({
                        pending: false,
                        data: _this.state
                    });
                }
                var response = {};
                response.responseList = {
                    actionName: _this.action.extraParams.actionName,
                    data: _this.action.payload.details,
                    lifespan: _this.action.extraParams.lifespan,
                    queryId: _this.action.extraParams.queryId,
                    doRedirect: true
                };
                resolve({
                    pending: false,
                    data: _this.state.concat({ "from": "bot", "response": response })
                });
            });
        });
    };
    /**
     * global mobility doc mail service
     * @param serviceParams parameters required to fetch data
     */
    ChatBotServices.prototype._mailServiceGlobalMobility = function (serviceParams) {
        var _this = this;
        this.action = serviceParams.data;
        this.state = this.getterSetter.getUserChatListData();
        return new Promise(function (resolve, reject) {
            _this.httpProvider.http.commonService({ url: serviceParams.url, data: _this.action.params, chatBotInfoList: true })
                .subscribe(function (serviceResponse) {
                _this.utility.consoleLog(serviceResponse);
                _this.action.payload = serviceResponse;
                var response = {};
                response.responseList = {
                    actionName: 'globalMobility',
                    speech: _this.action.payload.details.responseList,
                    lifespan: 1
                };
                resolve({
                    pending: false,
                    data: _this.state.concat({ "from": "bot", "response": response })
                });
            });
        });
    };
    /**
     * Employee contact details
     * @param serviceParams parameters required to fetch data
     */
    ChatBotServices.prototype._employeeContactListDetails = function (serviceParams) {
        var _this = this;
        this.action = serviceParams.data;
        this.state = this.getterSetter.getUserChatListData();
        return new Promise(function (resolve, reject) {
            _this.httpProvider.http.commonService({ url: serviceParams.url, data: _this.action.params, empContactList: true })
                .subscribe(function (serviceResponse) {
                _this.utility.consoleLog(serviceResponse);
                _this.action.payload = serviceResponse;
                var response = {};
                response.responseList = {
                    actionName: _this.action.extraParams.actionName,
                    searchResults: _this.action.payload.details.ResponseList,
                    lifespan: _this.action.extraParams.lifespan,
                    queryId: _this.action.extraParams.queryId
                };
                if (_this.action.extraParams.actionName == 'getManagerDetails') {
                    response.responseList.actionName = 'managerDetails';
                }
                resolve({
                    pending: false,
                    data: _this.state.concat({ "from": "bot", "response": response })
                });
            });
        });
    };
    /**
     * Zensar Site service
     * @param serviceParams parameters required to fetch data
     */
    ChatBotServices.prototype._zensarSiteData = function (serviceParams) {
        var _this = this;
        this.action = serviceParams.data;
        this.state = this.getterSetter.getUserChatListData();
        return new Promise(function (resolve, reject) {
            _this.httpProvider.http.getZensarWebsiteData(serviceParams.url)
                .subscribe(function (serviceResponse) {
                _this.utility.consoleLog(serviceResponse);
                _this.action.payload = serviceResponse;
                var response = {};
                response.responseList = {
                    actionName: 'getZensarSiteDataResponse',
                    searchResults: _this.action.payload.SearchResult
                };
                resolve({
                    pending: false,
                    data: _this.state.concat({ "from": "bot", "response": response })
                });
            });
        });
    };
    /**
     * Payroll related details
     * @param serviceParams parameters required to fetch data
     */
    ChatBotServices.prototype._payRollServiceDetails = function (serviceParams) {
        var _this = this;
        this.action = serviceParams.data;
        this.state = this.getterSetter.getUserChatListData();
        return new Promise(function (resolve, reject) {
            _this.httpProvider.http.commonService({ url: serviceParams.url, data: _this.action.params, payrollQuery: true })
                .subscribe(function (serviceResponse) {
                _this.utility.consoleLog(serviceResponse);
                _this.action.payload = serviceResponse;
                var response = {};
                if (_this.action.payload.status && _this.action.payload.status.statusCode && _this.action.payload.status.statusCode == '1') {
                    _this.state[_this.state.length - 1].response.responseList.feedbackSent = true;
                }
                response.responseList = {
                    actionName: 'salary_discrepency_mail_response',
                    speech: _this.action.payload.details.responseList
                };
                resolve({
                    pending: false,
                    data: _this.state.concat({ "from": "bot", "response": response })
                });
            });
        });
    };
    /**
     * feedback submit service
     * @param serviceParams parameters required to fetch data
     */
    ChatBotServices.prototype._submitFeedBack = function (serviceParams) {
        var _this = this;
        this.action = serviceParams.data;
        this.state = this.getterSetter.getUserChatListData();
        return new Promise(function (resolve, reject) {
            _this.httpProvider.http.commonService({ url: serviceParams.url, data: _this.action.params, chatBotFeedback: true })
                .subscribe(function (serviceResponse) {
                _this.utility.consoleLog(serviceResponse);
                _this.action.payload = serviceResponse;
                var response = {};
                var feedbackResponse = "";
                _this.state[_this.state.length - 1].response.responseList.feedbackSent = true;
                if (_this.action.payload.details.responseList.feedbackValue == -1) {
                    feedbackResponse = "Thanks for your feedback";
                    response.responseList = {
                        actionName: 'negativeFeedbackres',
                        feedbackResponse: feedbackResponse,
                        suggestionsList: _this.action.payload.details.responseList.suggestionsList,
                        suggestionPhrase: _this.action.payload.details.responseList.suggestionPhrase,
                        feedbackLoader: true
                        // lifespan: 1,
                        // actionIncomplete: false
                    };
                }
                else if (_this.action.payload.details.responseList.feedbackValue == 1) {
                    feedbackResponse = "Thanks for your feedback";
                    response.responseList = {
                        actionName: 'receivedFeedbackRes',
                        feedbackResponse: feedbackResponse,
                        suggestionsList: _this.action.payload.details.responseList.suggestionsList,
                        suggestionPhrase: _this.action.payload.details.responseList.suggestionPhrase,
                        feedbackLoader: true
                        // lifespan: 1,
                        // actionIncomplete: false
                    };
                }
                else if (_this.action.payload.details.responseList.feedbackValue == 2) {
                    response.responseList = {
                        actionName: 'postQuestionFeedBack',
                        feedbackResponse: null,
                        suggestionsList: _this.action.payload.details.responseList.suggestionsList,
                        suggestionPhrase: _this.action.payload.details.responseList.suggestionPhrase,
                        feedbackLoader: true
                        // lifespan: 1,
                        // actionIncomplete: false
                    };
                }
                resolve({
                    pending: false,
                    data: _this.state.concat({ "from": "bot", "response": response })
                });
            });
        });
    };
    /**
     * chatbot suggestions list
     * @param serviceParams parameters required to fetch data
     */
    ChatBotServices.prototype._getChatBotSuggestion = function (serviceParams) {
        var _this = this;
        this.action = serviceParams.data;
        this.state = this.getterSetter.getUserChatListData();
        return new Promise(function (resolve, reject) {
            _this.httpProvider.http.commonService({ url: serviceParams.url, data: _this.action.params, chatBotSuggestionList: true })
                .subscribe(function (serviceResponse) {
                _this.utility.consoleLog(serviceResponse);
                _this.action.payload = serviceResponse;
                resolve({
                    pending: false,
                    data: _this.state.concat({ "from": "bot", "response": _this.action.payload.details })
                });
            });
        });
    };
    /**
    * get weather report
    * @param serviceParams parameters required to fetch data
    */
    ChatBotServices.prototype._getWeatherData = function (serviceParams) {
        var _this = this;
        this.action = serviceParams.data;
        this.state = this.getterSetter.getUserChatListData();
        return new Promise(function (resolve, reject) {
            _this.httpProvider.http.getWeatherData(serviceParams.url)
                .subscribe(function (serviceResponse) {
                _this.utility.consoleLog(serviceResponse);
                _this.action.payload = serviceResponse;
                var response = {};
                response.responseList = {
                    actionName: 'getWeatherFetched'
                };
                response.responseList.weather = {
                    description: _this.action.payload.weather[0].description,
                    humidity: _this.action.payload.main.humidity,
                    currentTemp: _this.action.payload.main.temp,
                    weatherSymbol: 'http://openweathermap.org/img/w/' + _this.action.payload.weather[0].icon + '.png',
                };
                resolve({
                    pending: false,
                    data: _this.state.concat({ "from": "bot", "response": response })
                });
            });
        });
    };
    ChatBotServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
        /**
         * In place of redux we have made our own state management for data received from diff service in diff format
         * to convert it into one format n use!
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_getterSetter_getterSetter__["a" /* GetterSetter */], __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], ChatBotServices);
    return ChatBotServices;
}());

//# sourceMappingURL=chat-bot-new.services.js.map

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

/***/ 1875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBotNew; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_screenshot_ngx__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_calender_model_calender_model__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__environment_environment__ = __webpack_require__(1876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_env__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_app_version__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_faq_modal_faq_modal__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__chat_bot_new_services_chat_bot_new_services__ = __webpack_require__(1469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_getterSetter_getterSetter__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__chat_bot_modal_chat_bot_suggestion_model_chat_bot_suggestion_model__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__chat_bot_new_services_moveToPage_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__container_ZenSF_sfDaashbord__ = __webpack_require__(804);
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
 * template_id    template_type
*       1           text
*       2           image
*       3           email
*       4           fileDownload
*       5           apiCall
*       6           redirection
*/
var ChatBotNew = /** @class */ (function () {
    function ChatBotNew(getterSetter, chatBotServices, download, platform, navParams, store, data, navCtrl, utilities, zone, speechRecognitionUtility, modalCtrl, screenshot, popoverCtrl, httpProvider, toastCtrl, appversion, formBuilder, moveToPageService, viewCtrl, keyboard, events) {
        var _this = this;
        this.getterSetter = getterSetter;
        this.chatBotServices = chatBotServices;
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
        this.formBuilder = formBuilder;
        this.moveToPageService = moveToPageService;
        this.viewCtrl = viewCtrl;
        this.keyboard = keyboard;
        this.events = events;
        this._roleListener = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subscription"]();
        this.$moveToPageSubscription = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subscription"]();
        this.$updateProfile = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subscription"]();
        this.userDetails = {};
        this.negativeFeedbackMessage = "";
        this.projectMigratedData = null;
        this.role = null;
        this.calendarInfo = null;
        /*integer type*/
        this.selectedIndex = -1;
        this.getTimesheetDetailsCurrentIndex = null;
        this.dapCount = 0;
        // private greetingTime: number = null;
        /*booleans flags */
        this.taskAdded = false;
        this.firstTimeEnter = false;
        this.showChatBotLoader = false;
        this.showKeyboard = false;
        this.mute = false;
        this.showSend = false;
        this.isFromPreviousFetchData = false;
        this.cancelFlag = true;
        this.showQueryBox = false;
        this.listening = false;
        this.tooglePipe = true;
        this.truncating = true;
        this.showSuggestion = true;
        this.expandDiv = false;
        this.showMoreArrow = false;
        this.showMoreArrowForMyTimesheetList = false;
        /*Empty Array */
        this.timeEntrySuggestion = [];
        this.dateListFromTimeSheet = [];
        this.chatList = [];
        // private suggestionList: any = [];
        this.timesheetRestApi = [];
        this.pendingDates = [];
        this.suggestionListForTS = [];
        /*String */
        this.title = '';
        this.inputChatText = "";
        this.positiveFeedbackMessage = "Thank you for your feedback.";
        // private feedbackMessage: string = "Helpful ?";
        this.tsDataType = 'date';
        this.greetingImg = "";
        /*Objects */
        this.indexForEmpContactList = {
            start: 0,
            end: 7
        };
        this.tsTypes = {
            tsDate: 'date',
            taskAndTimesheetDetails: 'ttDetails',
            suggestion: 'suggestion',
            selData: {},
            taskId: null,
            suggestionType: null,
            updateStatus: null,
        };
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
        this.selectedDateForCT = {
            dateSelected: {
                date: "",
                day: "",
                status: ""
            },
            CTforDate: ''
        };
        this.suggestionList = {
            suggestionsList: [],
            newFeaturesList: []
        };
        this.getterSetter.clearUserChatListData();
        this.chatList = [];
        this.title = this.navParams.get('pageTitle');
        this.questionAsked = this.navParams.get('questionAsked');
        this.hrChatBotData = this.navParams.get('hrChatBotData');
        this.getModalData = this.navParams.get('data');
        this.bannerData = this.navParams.get('isComingFromBanner');
        this.userInputGroup = this.formBuilder.group({
            userInput: [''],
        });
        this.$moveToPageSubscription = this.moveToPageService.moveToPage.subscribe(function (res) {
            _this._moveToPage('');
        });
        this.$updateProfile = this.moveToPageService.updateProfile.subscribe(function (res) {
            _this.updateProfile(res.dataObj, res.i);
        });
        if (!this.utilities.isEmptyOrNullOrUndefined(this.hrChatBotData) && !this.utilities.isEmptyOrNullOrUndefined(this.hrChatBotData.actionInfo)) {
            this._addToList(this.questionAsked, this.hrChatBotData.actionInfo.speech, "bot");
            if (!this.utilities.isEmptyOrNullOrUndefined(this.hrChatBotData.actionInfo.speech)) {
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
    ChatBotNew.prototype.ngOnInit = function () {
        this._getGreetingMsg();
        this.getLoginStateFromStore();
        this.isFromPreviousFetchData = this.navParams.get('isFromPreviousFetchData');
    };
    ChatBotNew.prototype._getGreetingMsg = function () {
        var d = new Date();
        var time = d.getHours();
        if (time < 12) {
            this.greetingImg = "morning";
        }
        else if (time >= 12 && time < 17) {
            this.greetingImg = "afternoon";
        }
        else {
            this.greetingImg = "evening";
        }
    };
    ChatBotNew.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.firstTimeEnter) {
            this.firstTimeEnter = false;
            this._getGreetingMsg();
            this.getLoginStateFromStore();
            this.isFromPreviousFetchData = this.navParams.get('isFromPreviousFetchData');
        }
        var newQuestionPosted = this.navParams.get('questionPosted');
        var feedbackResponse = this.navParams.get('feedbackResponse');
        if (!this.utilities.isEmptyOrNullOrUndefined(newQuestionPosted)) {
            if (newQuestionPosted) {
                this.chatList.concat({ "from": "bot", "response": feedbackResponse });
                this.chatList.push({ "from": "bot", "response": { responseList: { speech: 'Question submitted successfully' } }, "readMore": false });
                this.getterSetter.setUserChatListData(this.chatList);
                this.showChatBotLoader = true;
                this.chatBotServices._hrChatBotSetChatList().then(function (response) {
                    _this.chatList = response.data;
                    _this.chatResponseSuccess(_this.chatList);
                    _this.utilities.consoleLog(_this.chatList);
                });
            }
            else {
                this.chatList.push({ "from": "bot", "response": { responseList: { speech: 'Cancelled', suggestions: this.chatList[this.chatList.length - 1].response.responseList.suggestions } }, "readMore": false });
                this.showSuggestion = true;
                this.getterSetter.setUserChatListData(this.chatList);
                this.showChatBotLoader = true;
                this.chatBotServices._hrChatBotSetChatList().then(function (response) {
                    _this.chatList = response.data;
                    _this.chatResponseSuccess(_this.chatList);
                    _this.utilities.consoleLog(_this.chatList);
                });
            }
        }
    };
    ChatBotNew.prototype.ionViewDidLoad = function () {
        this.getCalendarInfo();
        this.getRole();
    };
    ChatBotNew.prototype.getLoginStateFromStore = function () {
        var _this = this;
        this.data.getData('loginDetails').then(function (res) {
            if (res && res.details && res.details.userDetails) {
                _this.userDetails = res.details.userDetails;
                if (_this.getModalData || _this.bannerData) {
                    if (_this.getModalData) {
                        _this.getSuggestionData(_this.getModalData);
                        _this.getModalData = undefined;
                    }
                    if (_this.bannerData) {
                        _this.getSuggestionData('Corona Virus Awareness');
                        _this.bannerData = undefined;
                    }
                }
                else {
                    _this.addSuggestionToChatList();
                }
            }
        });
    };
    ChatBotNew.prototype.ionViewWillLeave = function () {
        this._tts(" ");
        this.getterSetter.clearUserChatListData();
        this.moveToPageService.moveToPage.subscribe();
    };
    ChatBotNew.prototype.ngDestroy = function () {
        this.firstTimeEnter = true;
        this.getterSetter.clearUserChatListData();
        this.chatList = [];
    };
    ChatBotNew.prototype._getHrChatBotData = function (chatBotData) {
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
            chatBotData.clickedChatItem = this.chatList[this.chatList.length - 1].response.responseList;
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
    ChatBotNew.prototype.getSuggestionData = function (value) {
        var params = {
            "userQuery": value,
            "sessionId": "",
            "moduleId": __WEBPACK_IMPORTED_MODULE_8__app_constants__["a" /* Constants */].moduleId
        };
        if (!this.utilities.isEmptyOrNullOrUndefined(this.chatList))
            if (!this.utilities.isEmptyOrNullOrUndefined(this.chatList[this.chatList.length - 1].response) && this.chatList[this.chatList.length - 1].response.responseList.lifespan != 1) {
                params.sessionId = this.chatList[this.chatList.length - 1].response.responseList.sessionId;
            }
        this.isFromPreviousFetchData = false;
        var currentTime = new Date();
        this.chatList = this.chatList.concat({ "from": "me", "query": params.userQuery, currentTime: currentTime.getHours() + ":" + ("0" + currentTime.getMinutes()).slice(-2) });
        this._getChatList(params);
    };
    ChatBotNew.prototype._getChatList = function (params) {
        var _this = this;
        new Promise(function (resolve) {
            var data = {
                url: "",
                data: params,
                chatBot: true
            };
            _this.showChatBotLoader = true;
            _this._scrollToBottom();
            _this.httpProvider.http.commonService(data).subscribe(function (response) {
                if (response.error == null) {
                    _this.showChatBotLoader = false;
                    if (!_this.utilities.isEmptyOrNullOrUndefined(response.details.responseList.suggestionsList)) {
                        _this.suggestionList.suggestionsList = response.details.responseList.suggestionsList.split(",");
                        _this.mangerAcess = response.details.responseList.dialogManager;
                        // setTimeout(() => {
                        //   this.events.publish('setAccess', this.mangerAcess)
                        // }, 1000);
                        if (response.details.responseList.newFeaturesList.length > 0)
                            _this.suggestionList.newFeaturesList = response.details.responseList.newFeaturesList.split(",");
                        else
                            _this.suggestionList.newFeaturesList = [];
                    }
                    _this.chatList.push({ "from": "bot", "response": { responseList: response.details.responseList, "readMore": false } });
                    _this.chatResponseSuccess(_this.chatList);
                    _this._scrollToBottom();
                    resolve();
                }
                else if (response.error) {
                    _this.inputChatText = "";
                    _this._ionChangeToggleSendMic(_this.inputChatText);
                    if ((response.error.actionName == 'saveTimesheet' || response.error.actionName == 'submitTimesheet') && response.error.errorMsg) {
                        _this.utilities.presentAlert(response.error.errorMsg).then(function () {
                            _this.getTimeEntryDetails(_this.tsSelectedDateObj, _this.getTimesheetDetailsCurrentIndex);
                        });
                    }
                }
            }, function (err) {
                _this.showChatBotLoader = false;
                _this.utilities.updateLoader(false);
            });
        });
    };
    ChatBotNew.prototype.chatResponseSuccess = function (chatListResponse, message) {
        var _this = this;
        this.utilities.consoleLog("--------------chat response success----------------");
        this.utilities.consoleLog(this.chatList);
        if (!this.utilities.isEmptyOrNullOrUndefined(chatListResponse) && !this.utilities.isEmptyOrNullOrUndefined(chatListResponse[chatListResponse.length - 1])) {
            //remove lifespan for ZenTS related queries and pass on it to next api call chatListResponse 
            var tempData = chatListResponse;
            if (tempData[tempData.length - 1].from == 'bot' && tempData[tempData.length - 1].response.responseList.actionName && (tempData[tempData.length - 1].response.responseList.actionName.split('.')[0] == "zenTS" || tempData[tempData.length - 1].response.responseList.actionName == 'getFillTimesheetDetails')) {
                delete tempData[tempData.length - 1].response.responseList.lifespan;
            }
            //show success messages of timesheet save and submit action
            if (message && message.userMessage) {
                if (message.actionName == "saveTimesheet") {
                    this.tsTypes.updateStatus = {
                        date: this.tsSelectedDateObj.date,
                        status: 'Saved'
                    };
                    this.onTaskDataSLideChange();
                    this.presentToast(message.userMessage);
                    this.getTimeEntryDetails(this.tsSelectedDateObj, this.getTimesheetDetailsCurrentIndex);
                }
            }
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
                        || tempChatListItemResponseListItem.actionName == 'arHierarchy'
                        || tempChatListItemResponseListItem.actionName == 'salary_discrepency'
                        || tempChatListItemResponseListItem.actionName == 'investment'
                        || tempChatListItemResponseListItem.actionName == 'salaryLetter'
                        || tempChatListItemResponseListItem.actionName == 'visaPolicy'
                        || tempChatListItemResponseListItem.actionName == 'pf_faq'
                        || tempChatListItemResponseListItem.actionName == 'pf_transfer'
                        || tempChatListItemResponseListItem.actionName == 'onsiteReturn'
                        || tempChatListItemResponseListItem.actionName == 'onsiteTravel'
                        || tempChatListItemResponseListItem.templateId == 4
                        || tempChatListItemResponseListItem.actionName == 'updateMyProfile'
                        || tempChatListItemResponseListItem.actionName == 'applyFlexiLeave'
                        || tempChatListItemResponseListItem.actionName == 'getSuggestionListFromServer'
                        || tempChatListItemResponseListItem.actionName == 'approveAllTimesheets'
                        || tempChatListItemResponseListItem.actionName == 'learning.myLearningHours'
                        || tempChatListItemResponseListItem.actionName == 'learning.teamMembersDAP'
                        || tempChatListItemResponseListItem.actionName == 'learning.menteesDAP') {
                        if (tempChatListItemResponseListItem.actionName == 'getSuggestionListFromServer') {
                            this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.chatList[this.chatList.length - 1].response.responseList.suggestionsList.split(",");
                            this.showSuggestion = true;
                            if (this.chatList[this.chatList.length - 2].response.responseList.actionName == "ProjectList") {
                                this.chatList[this.chatList.length - 1].response.responseList.suggestions.unshift('Create Task');
                            }
                        }
                        if (tempChatListItemResponseListItem.templateId == 4) {
                            this.pdfArray = this.chatList[this.chatList.length - 1].response.responseList.restApi.split(",");
                        }
                        if (tempChatListItemResponseListItem.actionName == 'learning.teamMembersDAP' || tempChatListItemResponseListItem.actionName == 'learning.menteesDAP') {
                            this._countteamMembersDAP(tempChatListItemResponseListItem.restApi, tempChatListItemResponseListItem.parameters);
                        }
                    }
                    else if (tempChatListItemResponseListItem.actionName == "pf_faq_yes") {
                        this.queryListenFromFeedback = '';
                        this.showQueryBox = true;
                        if (this.utilities.platformAvailable())
                            this.negativeFeedbackMessage = this._startListening();
                    }
                    else if (tempChatListItemResponseListItem.actionName == 'getZensarSiteData') {
                        this.getZensarSiteData(tempChatListItemResponseListItem.restApi);
                    }
                    else if (tempChatListItemResponseListItem.actionName == 'openNewQuestion' && !this.isFromPreviousFetchData) {
                        this.navCtrl.push('PostQuestionPage');
                    }
                    else if (tempChatListItemResponseListItem.actionName == 'getUserProfileParamsDetails' || tempChatListItemResponseListItem.actionName == 'getARDetails') {
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
                        this.getTimesheetDetails(tempChatListItemResponseListItem);
                        if (tempChatListItemResponseListItem.actionName != 'zenTS.getCreateTaskDetails') {
                            delete tempChatListItemResponseListItem.speech;
                        }
                    }
                    else if (tempChatListItemResponseListItem.actionName == 'zenTalent.getUserProfileData' || tempChatListItemResponseListItem.actionName == 'zenTalent.getMyProfile' || tempChatListItemResponseListItem.actionName == 'getManagerDetails') {
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
                        }
                        this.doDisable(tempChatListItemResponseListItem.data.taskAndTimesheetDetails);
                        if (tempChatListItemResponseListItem.data.taskAndTimesheetDetails.length == 0 && this.chatList[this.chatList.length - 2].response.responseList.actionName != 'zenTS.getCreateTaskDetails') {
                            this.chatList[this.chatList.length - 1].response.responseList.speech = null;
                            this.getProjectList(tempChatListItemResponseListItem.queryId);
                        }
                        this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.timeEntrySuggestion.SuggestionList;
                        if (!this.utilities.isEmptyOrNullOrUndefined(this.chatList[this.chatList.length - 1].response.responseList.suggestions)) {
                            this.chatList[this.chatList.length - 1].response.responseList.suggestionPhrase = this.timeEntrySuggestion.SuggestionPhrase;
                        }
                    }
                    else if (tempChatListItemResponseListItem.actionName == "getFillTimesheetDetails") {
                        this.dateListFromTimeSheet = tempChatListItemResponseListItem.dataList;
                        if (tempChatListItemResponseListItem.dataList && tempChatListItemResponseListItem.dataList.length == 1) {
                            var date = __WEBPACK_IMPORTED_MODULE_17_moment__(tempChatListItemResponseListItem.dataList[0].date).format('DD MMM YYYY');
                            this.getTimeEntryDetails(tempChatListItemResponseListItem.dataList[0], this.chatList.length, tempChatListItemResponseListItem.queryId, "Please see below the timesheet details for " + date);
                        }
                        else if (this.selectedDateForCT.CTforDate) {
                            var date = __WEBPACK_IMPORTED_MODULE_17_moment__(this.selectedDateForCT.CTforDate).format('DD MMM YYYY');
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
                        this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.timeEntrySuggestion.SuggestionsList;
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
                            this._getSuggestionListFromServer("getSuggestionList", { "actionId": 0 });
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
                                        queryId: tempChatListItemResponseListItem.queryId,
                                        lifespan: tempChatListItemResponseListItem.lifespan,
                                        pendingList: tempChatListItemResponseListItem.data.teamsTimesheetList
                                    }
                                }
                            });
                        }
                    }
                    else if (tempChatListItemResponseListItem.actionName == "approveAllTimesheets") {
                        this.chatList[this.chatList.length - 1].response.responseList.suggestionPhrase = tempChatListItemResponseListItem.speech;
                    }
                    // else if (tempChatListItemResponseListItem.actionName == 'learning.myLearningHours'){
                    //   this.getMyLearnigs(tempChatListItemResponseListItem.restApi);
                    // }
                    // called for fist time only
                    if (tempChatListItemResponseListItem.actionName != "getSuggestionListFromServer" && tempChatListItemResponseListItem.hasOwnProperty('suggestionList')) {
                        if (tempChatListItemResponseListItem.suggestionsList.length == 0 && tempChatListItemResponseListItem.lifespan == 1) {
                            this._getSuggestionListFromServer("getSuggestionList", { "actionId": 0 });
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
                    else if (tempChatListItemResponseListItem.actionName == "getApproveTimesheetDetails" && !this.utilities.isEmptyOrNullOrUndefined(tempChatListItemResponseListItem.data.teamsTimesheetList)) {
                        this.chatList[this.chatList.length - 1].response.responseList.suggestions = this.chatList[this.chatList.length - 3].response.responseList.suggestionsList.split(",");
                        this.chatList[this.chatList.length - 1].response.responseList.suggestionPhrase = this.chatList[this.chatList.length - 3].response.responseList.suggestionPhrase;
                        this.showSuggestion = true;
                    }
                }
                if (tempChatListItemResponseListItem.actionId == 0) {
                    this.showSuggestion = true;
                    this.suggestionList.suggestionsList = tempChatListItemResponseListItem.suggestionsList.split(",");
                    if (tempChatListItemResponseListItem.newFeaturesList.length > 0)
                        this.suggestionList.newFeaturesList = tempChatListItemResponseListItem.newFeaturesList.split(",");
                    else
                        this.suggestionList.newFeaturesList = [];
                }
                if (tempChatListItemResponseListItem.actionName == "zenTalent.createDAP"
                    || tempChatListItemResponseListItem.actionName == "zenTalent.ijp"
                    || tempChatListItemResponseListItem.actionName == "referral.referYourFriend.yes.bonusPolicy.yes"
                    || tempChatListItemResponseListItem.actionName == "referrals.FAQs"
                    || tempChatListItemResponseListItem.actionName == "referral.createFriendsProfile"
                    || tempChatListItemResponseListItem.actionName == "learning.technicalCalendar"
                    || tempChatListItemResponseListItem.actionName == "learning.behaviouralCalendar") {
                    this.chatList[this.chatList.length - 1].response.responseList.moveToPage = true;
                    //tempChatListItemResponseListItem.speech = "Click here for Dialog";
                }
                else if (tempChatListItemResponseListItem.actionName == "successfactor.dialog") {
                    this.chatList[this.chatList.length - 1].response.responseList.moveToPage = true;
                    tempChatListItemResponseListItem.speech = "Click here for Dialog";
                }
                if (tempChatListItemResponseListItem.actionName == "getFillTimesheetDetails") {
                    if (this.chatList[this.chatList.length - 1].response.responseList.createTaskFlag && this.chatList[this.chatList.length - 1].response.responseList.suggestions[0] != 'Create Task')
                        this.chatList[this.chatList.length - 1].response.responseList.suggestions.unshift(this.chatList[this.chatList.length - 1].response.responseList.CreateTaskText);
                }
                if (!this.utilities.isEmptyOrNullOrUndefined(tempChatListItemResponseListItem.speech) && !tempChatListItemResponseListItem.noSpeech) {
                    if (!this.isFromPreviousFetchData) {
                        this._tts(tempChatListItemResponseListItem.speech);
                    }
                    this.showKeyboard = false;
                }
            }
            this.showChatBotLoader = false;
            this._scrollToBottom();
        }
        else {
            if (this.firstTimeEnter) {
                this.addSuggestionToChatList();
            }
            else {
            }
        }
    };
    ChatBotNew.prototype.getZensarSiteData = function (zensarSiteUrl) {
        var _this = this;
        var serviceParams = {
            url: zensarSiteUrl
        };
        this.getterSetter.setUserChatListData(this.chatList);
        this.showChatBotLoader = true;
        this._scrollToBottom();
        this.chatBotServices._zensarSiteData(serviceParams).then(function (response) {
            _this.chatList = response.data;
            _this.chatResponseSuccess(_this.chatList);
        });
    };
    ChatBotNew.prototype.getUserBankDetails = function (url, params) {
        var _this = this;
        var serviceParams = {
            url: url,
            data: {
                params: params,
            },
            userBankDetails: true
        };
        this.getterSetter.setUserChatListData(this.chatList);
        this.showChatBotLoader = true;
        this.chatBotServices._userBankDetails(serviceParams).then(function (response) {
            _this.chatList = response.data;
            // this.chatResponseSuccess(this.chatList)
            _this._scrollToBottom();
        });
    };
    // not integrated
    ChatBotNew.prototype.getWeatherData = function (positionCoords) {
        // let latitude = positionCoords.latitude
        // let longitude = positionCoords.longitude
        // var appId = Constants.weatherApiKey;
        // var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + appId + "&units=metric";
        // this.store.dispatch(new fromStore.GetHrChatBotWeatherAction(weatherUrl, {}));
    };
    ChatBotNew.prototype.addSuggestionToChatList = function () {
        var _this = this;
        if (this.getModalData || this.bannerData) {
            this.chatList.push({ from: "bot", response: { responseList: { speech: null } } });
            this.chatList.push({ from: "bot", response: { responseList: { actionName: "zenHelp", speech: null, suggestionList: [{ suggestionPhrase: "Zensar Policies", isNewFeature: false }, { suggestionPhrase: "Holiday Calendar", isNewFeature: false }, { suggestionPhrase: "Know the ARs", isNewFeature: false }] } } });
        }
        else {
            this.chatList.push({ from: "bot", response: { responseList: { speech: "Hi " + this.userDetails.userName.substring(0, this.userDetails.userName.indexOf(" ")) + ',\n' + " How may I help you?" } } });
            setTimeout(function () {
                _this.chatList.push({ from: "bot", response: { responseList: { actionName: "zenHelp", speech: "Type below or check the suggestions below " } } });
                if (_this.chatList.length == 2 && !_this.getModalData) {
                    _this._tts(_this.chatList[0].response.responseList.speech);
                }
                _this.showKeyboard = false;
            }, 500);
            this._getSuggestionListFromServer("getSuggestionList", { "actionId": 0 });
        }
        this.getterSetter.setUserChatListData(this.chatList);
        this.showChatBotLoader = true;
        this._scrollToBottom();
        this.chatBotServices._hrChatBotSetChatList().then(function (response) {
            _this.chatList = response.data;
            _this.showChatBotLoader = false;
            // this.chatResponseSuccess(this.chatList);
        });
    };
    ChatBotNew.prototype._sendText = function () {
        this.showKeyboard = false;
        this._getHrChatBotData({ value: this.inputChatText });
    };
    ChatBotNew.prototype._sendNegativeFeedback = function (event) {
        this.chatList = event.chatList;
        this.showSuggestion = true;
        this._getSuggestionListFromServer("getSuggestionList", { "actionId": 0 });
    };
    ChatBotNew.prototype._submitFeedback = function (event) {
        this.chatList = event.chatList;
    };
    ChatBotNew.prototype._sendPayrollFeedback = function (chatListItem, negativeFeedbackMessage) {
        var _this = this;
        var params = {
            "userId": this.userDetails.userId,
            "queryId": chatListItem.response.responseList.queryId,
            "feedbackValue": -1,
            "feedbackComment": negativeFeedbackMessage
        };
        var serviceParams = {
            url: "",
            data: {
                params: params,
            },
            chatBotFeedback: true
        };
        this.getterSetter.setUserChatListData(this.chatList);
        this.showChatBotLoader = true;
        this._scrollToBottom();
        this.chatBotServices._submitFeedBack(serviceParams).then(function (response) {
            _this.chatList = response.data;
            _this.chatResponseSuccess(_this.chatList);
        });
        this.negativeFeedbackMessage = '';
    };
    ChatBotNew.prototype._ionChangeToggleSendMic = function (value) {
        if (!this.utilities.isEmptyOrNullOrUndefined(this.inputChatText)) {
            this.showSend = false;
        }
        else {
            this.showSend = true;
        }
    };
    ChatBotNew.prototype._startListening = function () {
        var _this = this;
        this.listening = true;
        this.speechRecognitionUtility.startListening().subscribe(function (value) {
            if (_this.utilities.platformAvailable) {
                var tempChatListItemResponseListItem = _this.chatList[_this.chatList.length - 1].response.responseList;
                var actionName = tempChatListItemResponseListItem.actionName;
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
    ChatBotNew.prototype._closeKeyboard = function () {
        this.showKeyboard = false;
        this._startListening();
    };
    ChatBotNew.prototype._openKeyboard = function () {
        this.suggestionListForTS = [];
        this.showKeyboard = true;
        setTimeout(function () {
            // this.ionInput1.nativeElement.focus()
            // this.ionInput1.nativeElement.select()
            // this.keyboard.show()
        }, 100);
        this._scrollToBottom();
    };
    ChatBotNew.prototype._muteSpeech = function () {
        this._tts(" ");
        this.mute = !this.mute;
    };
    ChatBotNew.prototype._tts = function (text) {
        if (!this.mute) {
            this.speechRecognitionUtility.textToSpeech(text);
        }
    };
    ChatBotNew.prototype._addToList = function (questionAsked, speech, from) {
        this.chatList.push({ asked: true, text: questionAsked, from: from });
        this.chatList.push({ asked: false, text: speech, from: from });
    };
    ChatBotNew.prototype._toggleReadMore = function (item, index) {
        item.readMore = !item.readMore;
        this.tooglePipe = !this.tooglePipe;
        this.selectedIndex = index;
    };
    ChatBotNew.prototype._scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.utilities.isEmptyOrNullOrUndefined(_this.content))
                _this.content.scrollToBottom();
        }, 100);
    };
    ChatBotNew.prototype._cancel = function () {
        this.showQueryBox = false;
        this.showSuggestion = true;
        this._getSuggestionListFromServer("getSuggestionList", { "actionId": 0 });
    };
    ChatBotNew.prototype._downloadPDF = function (url) {
        var _this = this;
        if (url) {
            if (this.platform.is('android')) {
                var alert_1 = this.utilities.presentConfirmation('Do you want to download this file ?');
                alert_1.then(function () {
                    _this.download.downloadDocument(url, true);
                }).catch(function (err) { return err; });
            }
            else {
                this.utilities.openWithSystemBrowser(url);
            }
        }
    };
    ChatBotNew.prototype._showClosedData = function () {
        var _this = this;
        this.selectedDateForCT.CTforDate = "";
        this.selectedDateForCT.dateSelected.date = "";
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__components_chat_bot_model_chat_bot_model__["a" /* ChatBotModel */], {
            'title': 'ChatBot Info',
        });
        modal.present();
        modal.onDidDismiss(function (query) {
            if (query)
                _this._getHrChatBotData({ value: query });
            else {
                _this._getSuggestionListFromServer("getSuggestionList", { "actionId": 0 });
            }
        });
    };
    /**
     * open suggestion model on menu icon click
     */
    ChatBotNew.prototype._openSuggestionModal = function () {
        var _this = this;
        this.selectedDateForCT.CTforDate = "";
        this.selectedDateForCT.dateSelected.date = "";
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_23__chat_bot_modal_chat_bot_suggestion_model_chat_bot_suggestion_model__["a" /* ChatBotSuggestionModel */], {
            'title': 'ChatBot Info',
        }, {
            cssClass: 'chat-suggestion-modal'
        });
        modal.present();
        modal.onDidDismiss(function (query) {
            if (query)
                _this._getHrChatBotData({ value: query });
            else {
                _this._getSuggestionListFromServer("getSuggestionList", { "actionId": 0 });
            }
        });
    };
    ChatBotNew.prototype.getTimesheetDetails = function (response) {
        var _this = this;
        var params;
        var actionName = response.actionName.split(".");
        var url;
        var extraParams = {
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
                "version": __WEBPACK_IMPORTED_MODULE_16__environment_environment__["a" /* version */],
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
        var serviceParams = {
            url: url,
            data: {
                params: params,
                extraParams: extraParams
            },
            timesheet: true
        };
        this.getterSetter.setUserChatListData(this.chatList);
        this.utilities.updateLoader(true);
        this._scrollToBottom();
        this.chatBotServices._timeSheetService(serviceParams).then(function (response) {
            _this.chatList = response.data;
            _this.utilities.updateLoader(response.pending);
            _this.chatResponseSuccess(_this.chatList);
        }).catch(function (err) {
            _this.utilities.updateLoader(false);
        });
        // for now diapact is saperate but when api comes in service make it common
        //to clear the selecetd date
        this.selectedDateForCT.dateSelected.date = '';
    };
    ChatBotNew.prototype.expand = function () {
        this.expandDiv = !this.expandDiv;
    };
    /**
     *  get not filled Dates and open Calendar Model
     */
    ChatBotNew.prototype.getMonthwiseCompliancePercentage = function (month, monthseq) {
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
    ChatBotNew.prototype.openModal = function (monthseq, dataObj) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_15__components_calender_model_calender_model__["a" /* CalenderModel */], {
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
    ChatBotNew.prototype.getTimeEntryDetails = function (dateObj, index, queryId, speech) {
        var _this = this;
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
            this.tsFordate = __WEBPACK_IMPORTED_MODULE_17_moment__(this.selectedDateForCT.dateSelected.date).format('D MMM YYYY');
            var url = this.timesheetRestApi[1]; //Get Timeentry Details Url
            var params = {
                "version": __WEBPACK_IMPORTED_MODULE_16__environment_environment__["a" /* version */],
                "selectedDate": dateObj.date
            };
            var extraParams = {
                "actionName": 'timeEntryDetails',
                "queryId": queryId,
                "speech": "Below is the timesheet details :",
                "indexToUpdate": index
            };
            var serviceParams = {
                url: url,
                data: {
                    params: params,
                    extraParams: extraParams
                },
                timesheet: true
            };
            this.getterSetter.setUserChatListData(this.chatList);
            this.showChatBotLoader = true;
            this._scrollToBottom();
            this.chatBotServices._timeSheetService(serviceParams).then(function (response) {
                _this.chatList = response.data;
                _this.showChatBotLoader = response.pending;
                _this.chatResponseSuccess(_this.chatList);
            });
        }
    };
    ChatBotNew.prototype.getEmployeeContactList = function (response) {
        var _this = this;
        var url = response.restApi.split(",")[0];
        var params = {
            "start": this.indexForEmpContactList.start,
            "end": this.indexForEmpContactList.end,
        };
        var extraParams = {
            "lifespan": '1',
            "queryId": response.queryId
        };
        if (response.actionName == 'getManagerDetails') {
            params.search = response.parameters.userId;
            extraParams.actionName = response.actionName;
        }
        else {
            params.search = response.actionName == 'zenTalent.getMyProfile' ? this.userDetails.userId : response.parameters.ZenVerse_First_Name + response.parameters.ZenVerse_User_Name;
            extraParams.actionName = response.actionName.split('.')[1];
        }
        var serviceParams = {
            url: url,
            data: {
                params: params,
                extraParams: extraParams
            },
            empContactList: true
        };
        this.getterSetter.setUserChatListData(this.chatList);
        this.showChatBotLoader = true;
        this._scrollToBottom();
        this.chatBotServices._employeeContactListDetails(serviceParams).then(function (response) {
            _this.chatList = response.data;
            _this.showChatBotLoader = response.pending;
            _this.chatResponseSuccess(_this.chatList);
        });
    };
    ChatBotNew.prototype.goToProfile = function (data) {
        var _this = this;
        new Promise(function (resolve, reject) {
            _this.navCtrl.push('NewProfilePage', {
                'userId': parseInt(data.employeeId),
                'profileType': 'zencontacts',
                resolve: resolve
            });
        }).then(function () {
            _this.getterSetter.setUserChatListData(_this.chatList);
            _this.showChatBotLoader = true;
            _this._scrollToBottom();
            _this.chatBotServices._hrChatBotSetChatList().then(function (response) {
                _this.chatList = response.data;
                _this.chatResponseSuccess(_this.chatList);
            });
        });
    };
    ChatBotNew.prototype.onlastSlideUpdateEmpContactList = function (dataList) {
        this.showMoreArrow = dataList.length == 7 ? true : false;
    };
    ChatBotNew.prototype.onlastSlideUpdateMyTimesheetList = function (dataList) {
        this.showMoreArrowForMyTimesheetList = dataList.length > 5 ? true : false;
    };
    ChatBotNew.prototype.onScrollUpdateEmpContactList = function (event, dataList) {
        if (event.target.scrollWidth - event.target.clientWidth == event.target.scrollLeft) {
            event.target.scrollIntoView({ behavior: 'smooth' });
            this.showMoreArrow = dataList.length == 7 ? true : false;
        }
    };
    ChatBotNew.prototype.onScrollUpdateMyTimesheetList = function (event, dataList) {
        if (event.target.scrollWidth - event.target.clientWidth == event.target.scrollLeft) {
            event.target.scrollIntoView({ behavior: 'smooth' });
            this.showMoreArrowForMyTimesheetList = dataList.length > 5 ? true : false;
        }
    };
    ChatBotNew.prototype.openEmpContactListModal = function () {
        var _this = this;
        var reqParams = {
            "start": 0,
            "end": 50,
            "search": this.empContactListResponse.actionName == 'zenTalent.getMyProfile' ? this.userDetails.userId : this.empContactListResponse.parameters.ZenVerse_First_Name + this.empContactListResponse.parameters.ZenVerse_User_Name
        };
        new Promise(function (resolve, reject) {
            _this.navCtrl.push('UserProfileListPage', {
                reqParams: reqParams,
                resolve: resolve
            });
        }).then(function () {
            if (_this.chatList[_this.chatList.length - 1].response.responseList.actionName == "getUserProfileData") {
                _this.chatList[_this.chatList.length - 1].response.responseList.noSpeech = true;
            }
            _this.getterSetter.setUserChatListData(_this.chatList);
            _this.showChatBotLoader = true;
            _this._scrollToBottom();
            _this.chatBotServices._hrChatBotSetChatList().then(function (response) {
                _this.chatList = response.data;
                _this.chatResponseSuccess(_this.chatList);
            });
        });
    };
    ChatBotNew.prototype.canFillZeroHoursFlag = function () {
        if (this.calendarInfo.AssociatesBU) {
            return this.calendarInfo.PayrollToBeFilledZeroHours.includes(this.calendarInfo.AssociatesBU);
        }
    };
    /**
    * Method to Perform Save Action
    * @param obj : It contains the edited data
    * @param taskData : Task object
    * @param taskAndTimesheetDetails : Task and timesheet details list
    */
    ChatBotNew.prototype.editAndSaveTimesheet = function (obj, taskData, taskAndTimesheetDetails, parentIndex) {
        var _this = this;
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
            };
            var serviceParams = {
                url: url,
                data: {
                    params: params,
                    extraParams: extraParams
                },
                timesheet: true
            };
            this.getterSetter.setUserChatListData(this.chatList);
            this.utilities.updateLoader(true);
            this._scrollToBottom();
            this.chatBotServices._timeSheetService(serviceParams).then(function (response) {
                _this.chatList = response.data;
                _this.utilities.updateLoader(response.pending);
                _this.chatResponseSuccess(_this.chatList, response.message);
            }).catch(function (err) {
                _this.utilities.updateLoader(false);
            });
            ;
        }
    };
    /**
     * Return all task id's except fixed holiday
     * @param timesheetList : Timesheet details list
     */
    ChatBotNew.prototype.getResetTaskIds = function (timesheetList) {
        var taskIds = [];
        if (timesheetList.length > 0) {
            timesheetList.map(function (timesheet) {
                if (timesheet && timesheet.taskList.length > 0) {
                    timesheet.taskList.map(function (task) {
                        if (task.approvalStatus == 2) {
                            taskIds.push(task.taskId);
                        }
                    });
                }
            });
        }
        if (taskIds.length > 0) {
            return taskIds;
        }
    };
    ChatBotNew.prototype.refreshTimesheet = function (index) {
        this.getTimeEntryDetails(this.tsSelectedDateObj, index);
    };
    ChatBotNew.prototype.presentToast = function (msg) {
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
    ChatBotNew.prototype.setSuggestionList = function (data, chatListIndex) {
        this.suggestionListForTS = [];
        if (data.dataList && chatListIndex == (this.chatList.length - 1)) {
            this.suggestionListForTS = data.dataList;
            this.selValue = data.selValue;
            this.tsTypes.suggestionType = data.type;
            this.tsTypes.taskId = data.taskId;
        }
    };
    ChatBotNew.prototype.setSuggestion = function (data) {
        var dataObj = {
            data: data,
            taskId: this.tsTypes.taskId,
            s_type: this.tsTypes.suggestionType
        };
        this.tsTypes.selData = dataObj;
        this.suggestionListForTS = [];
    };
    ChatBotNew.prototype.setIndexTOUpdate = function (index) {
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
    ChatBotNew.prototype.onTaskDataSLideChange = function () {
        this.indexToToggleForm.chatListIndexToUpdate = null;
        this.indexToToggleForm.parentIndexToUpdate = null;
        this.indexToToggleForm.childIndexToUpdate = null;
        this.suggestionListForTS = []; //empty suggestion list if not selected any suggestion and closed the form
    };
    ChatBotNew.prototype.doDisable = function (taskAndTimesheetDetails) {
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
    ChatBotNew.prototype.getHourAndMinutes = function (efforts) {
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
    ChatBotNew.prototype.showSubmitConfirmAlert = function (taskAndTimesheetDetails, queryId, chatListIndex) {
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
    ChatBotNew.prototype.submitTimesheet = function (taskAndTimesheetDetails, queryId) {
        var _this = this;
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
                "versions": __WEBPACK_IMPORTED_MODULE_18__app_env__["E" /* version */],
                "selectedDate": this.tsSelectedDateObj.date,
                "timesheetList": sortedTimesheetList,
                "extendTimesheetFillingDate": this.calendarInfo.CalendarDates.extendTimesheetFillingDate
            };
            if (!queryId) {
                queryId = this.prevQueryID;
            }
            var extraParams = {
                "actionName": "submitTimesheet",
                "lifespan": '1',
                "queryId": queryId,
                "pendingDates": this.pendingDates,
                "dateObjForSubmission": this.tsSelectedDateObj,
            };
            this.selectedDateForCT.dateSelected.date = '';
            // this.store.dispatch(new fromStore.GetTimesheetDeatilsAction(url, params, extraParams));
            var serviceParams = {
                url: url,
                data: {
                    params: params,
                    extraParams: extraParams
                },
                timesheet: true
            };
            this.getterSetter.setUserChatListData(this.chatList);
            this.utilities.updateLoader(true);
            this._scrollToBottom();
            this.chatBotServices._timeSheetService(serviceParams).then(function (response) {
                _this.chatList = response.data;
                _this.utilities.updateLoader(response.pending);
                _this.chatResponseSuccess(_this.chatList);
            }).catch(function (err) {
                _this.utilities.updateLoader(false);
            });
            ;
        }
        else if (rejectedTimesheetFlag) {
            this.utilities.presentAlert('Please add remarks for rejected timesheets');
        }
    };
    ChatBotNew.prototype.getProjectList = function (queryId) {
        var _this = this;
        var url = this.timesheetRestApi[4];
        this.utilities.consoleLog(this.tsSelectedDateObj);
        var params = {
            "currentDate": this.tsSelectedDateObj.date
        };
        var extraParams = {
            "actionName": "ProjectList",
            "lifespan": '1',
            "queryId": queryId
        };
        var serviceParams = {
            url: url,
            data: {
                params: params,
                extraParams: extraParams
            },
            timesheet: true
        };
        this.getterSetter.setUserChatListData(this.chatList);
        this.utilities.updateLoader(true);
        this._scrollToBottom();
        this.chatBotServices._timeSheetService(serviceParams).then(function (response) {
            _this.chatList = response.data;
            _this.utilities.updateLoader(response.pending);
            _this.chatResponseSuccess(_this.chatList);
        }).catch(function (err) {
            _this.utilities.updateLoader(false);
        });
        ;
    };
    ChatBotNew.prototype.setIndexTOUpdateSelDate = function (data, chatlistIndex) {
        var chatListLength = this.chatList[this.chatList.length - 1].response.responseList.actionName == 'timeEntryDetails' ? (this.chatList.length - 1) : this.chatList.length;
        if (chatlistIndex == chatListLength) {
            this.indexToShowDot.chatListIndexForDateToUpdate = data.chatListIndexForDateToUpdate;
            this.indexToShowDot.dateIndexToUpdate = data.dateIndexToUpdate;
        }
    };
    ChatBotNew.prototype.updateProfileDetails = function (responseList) {
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
                var serviceParams = {
                    url: url,
                    data: {
                        params: params,
                        extraParams: extraParams
                    },
                    empContactList: true
                };
                _this.getterSetter.setUserChatListData(_this.chatList);
                _this.showChatBotLoader = true;
                _this._scrollToBottom();
                _this.chatBotServices._associateDetails(serviceParams).then(function (response) {
                    _this.chatList = response.data;
                    _this.showChatBotLoader = response.pending;
                    _this.chatResponseSuccess(_this.chatList);
                });
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
            var serviceParams = {
                url: url,
                data: {
                    params: params,
                    extraParams: extraParams
                },
                empContactList: true
            };
            this.getterSetter.setUserChatListData(this.chatList);
            this.showChatBotLoader = true;
            this.chatBotServices._associateDetails(serviceParams).then(function (response) {
                _this.chatList = response.data;
                _this.chatResponseSuccess(_this.chatList);
            });
        }
    };
    ChatBotNew.prototype.getRole = function () {
        var _this = this;
        this._roleListener = this.store.select(__WEBPACK_IMPORTED_MODULE_6__app_store__["_84" /* getRole */]).subscribe(function (role) {
            _this.role = role;
        });
    };
    ChatBotNew.prototype.getTimeEntryDetailsToRefreshLocalData = function (selDate) {
        var _this = this;
        var url = 'timeEntryDetails';
        var data = {
            "version": __WEBPACK_IMPORTED_MODULE_18__app_env__["E" /* version */],
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
    ChatBotNew.prototype.getCalendarInfo = function () {
        var _this = this;
        var url = 'calenderInfo';
        var data = {
            "version": __WEBPACK_IMPORTED_MODULE_18__app_env__["E" /* version */]
        };
        this.httpProvider.http.zentsCommonService({ url: url, data: data, timeentry: true }).subscribe(function (res) {
            if (res && res.data)
                _this.calendarInfo = res.data;
        }, function (err) { });
    };
    ChatBotNew.prototype.gotToEditProfile = function (value, actionName) {
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
            _this.getterSetter.setUserChatListData(_this.chatList);
            _this.showChatBotLoader = true;
            _this.chatBotServices._hrChatBotSetChatList().then(function (response) {
                _this.chatList = response.data;
                _this.chatResponseSuccess(_this.chatList);
            });
        });
    };
    // Directly go to skills tab of userprofile page 
    ChatBotNew.prototype.updateSkillsFromProfile = function () {
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
            _this.getterSetter.setUserChatListData(_this.chatList);
            _this.showChatBotLoader = true;
            _this.chatBotServices._hrChatBotSetChatList().then(function (response) {
                _this.chatList = response.data;
                _this.chatResponseSuccess(_this.chatList);
            });
        });
    };
    ChatBotNew.prototype.updateProfile = function (obj, index) {
        if (obj.type == 'personal') {
            if (index == this.chatList.length - 1 || index == this.chatList.length - 2)
                this.updateProfileDetails(obj.responseData);
        }
        else if (obj.type == 'skills') {
            if (index == this.chatList.length - 1)
                this.updateSkillsFromProfile();
        }
    };
    ChatBotNew.prototype.getPendingTimesheetList = function (response, data, queryId, parentIndex) {
        var _this = this;
        if (parentIndex == this.chatList.length - 1 || parentIndex == this.chatList.length - 3) {
            var projectName = response == 'all' ? 'All Projects' : response.projectName;
            this.getterSetter.setUserChatListData(this.chatList);
            this.showChatBotLoader = true;
            this.chatBotServices._hrChatBotSetChatList({ "from": "me", "query": projectName, "actionName": "pendingTimesheetList" }).then(function (response) {
                _this.chatList = response.data;
                _this.chatResponseSuccess(_this.chatList);
            });
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
            var serviceParams = {
                url: url,
                data: {
                    params: params,
                    extraParams: extraParams
                },
                timesheet: true
            };
            this.getterSetter.setUserChatListData(this.chatList);
            this.showChatBotLoader = true;
            this.chatBotServices._timeSheetService(serviceParams).then(function (response) {
                _this.chatList = response.data;
                _this.showChatBotLoader = response.pending;
                _this.chatResponseSuccess(_this.chatList);
            });
        }
    };
    ChatBotNew.prototype._sendDataToChatBotResponseSuccess = function (event) {
        this._scrollToBottom();
        this.chatList = event.chatList;
        this.chatResponseSuccess(event);
    };
    ChatBotNew.prototype.openFAQModal = function (faqData) {
        var faqModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_20__components_faq_modal_faq_modal__["a" /* FaqModalComponent */], { faqData: faqData }, {
            cssClass: 'faq-modal'
        });
        faqModal.present();
        faqModal.onDidDismiss(function (res) {
        });
    };
    ChatBotNew.prototype.replacePhoneNumber = function (str, actionName) {
        if (actionName == 'getARDetails') {
            var p_num = str.match(/(?:(?:\+?([1-9]|[0-9][0-9]|[0-9][0-9][0-9])\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([0-9][1-9]|[0-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/g, "");
            var newStr = str.replace(p_num, "<a href='tel:" + p_num + "'>" + p_num + "</a>");
            return newStr;
        }
        else {
            return str;
        }
    };
    ChatBotNew.prototype._getSuggestionListFromServer = function (url, params) {
        var _this = this;
        this.utilities.updateLoader(true);
        var data = {
            url: url,
            data: params,
            chatBotSugessionUrl: true
        };
        this.httpProvider.http.commonService(data).subscribe(function (response) {
            _this.utilities.consoleLog(response);
            _this.utilities.updateLoader(false);
            _this.suggestionList.suggestionsList = response.details.responseList.suggestionsList.split(",");
            if (response.details.responseList.newFeaturesList.length > 0)
                _this.suggestionList.newFeaturesList = response.details.responseList.newFeaturesList.split(",");
            else
                _this.suggestionList.newFeaturesList = [];
            // this.utilities.showAlert(JSON.stringify(this.suggestionList.newFeaturesList), "");
        }, function (error) {
            _this.utilities.updateLoader(false);
            _this.utilities.consoleLog(error);
        });
    };
    ChatBotNew.prototype._moveToPage = function (pageName) {
        var _this = this;
        var moveToPageData = {};
        if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "successfactor.dialog") {
            moveToPageData.moveTo = __WEBPACK_IMPORTED_MODULE_26__container_ZenSF_sfDaashbord__["a" /* SfDashbordPage */];
            moveToPageData.actionName = 'successfactor.dialog';
            moveToPageData.paramsFromChatBot = {
                highlightField: true,
                actionName: 'successfactor.dialog',
                mangerAcess: this.mangerAcess,
                userId: this.userDetails.userId
            };
        }
        else if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "zenTalent.ijp") {
            moveToPageData.moveTo = 'InternalJobPostingPage';
            moveToPageData.actionName = 'zenTalent.ijp';
            moveToPageData.paramsFromChatBot = {
                highlightField: true,
                actionName: 'zenTalent.ijp'
            };
        }
        else if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "zenTalent.createDAP") {
            moveToPageData.moveTo = 'CreateDapPage';
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
        else if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "learning.technicalCalendar" || this.chatList[this.chatList.length - 1].response.responseList.actionName == "learning.behaviouralCalendar") {
            moveToPageData.moveTo = 'CalendarPage';
            moveToPageData.actionName = this.chatList[this.chatList.length - 1].response.responseList.actionName;
            moveToPageData.paramsFromChatBot = {
                actionName: this.chatList[this.chatList.length - 1].response.responseList.actionName,
                selectedCourse: 'recommended',
                showAllFilters: false
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
            _this.getterSetter.setUserChatListData(_this.chatList);
            _this.showChatBotLoader = true;
            _this._scrollToBottom();
            _this.chatBotServices._hrChatBotSetChatList(_this.chatList).then(function (response) {
                _this.chatList = response.data;
                _this.chatResponseSuccess(_this.chatList);
            });
        });
    };
    ChatBotNew.prototype._countteamMembersDAP = function (restApi, body) {
        var _this = this;
        this.utilities.updateLoader(true);
        var data = {
            url: restApi,
            params: body
        };
        this.chatBotServices._restAPICall(data).then(function (response) {
            if (response.data.details.responseList)
                _this.dapCount = response.data.details.responseList.length;
            else
                _this.dapCount = 0;
            _this.utilities.updateLoader(false);
        }, function (error) {
            _this.utilities.updateLoader(false);
        });
    };
    ChatBotNew.prototype._viewAll = function (actionName) {
        if (actionName == 'learning.menteesDAP')
            this.navCtrl.push("MenteeListPage");
        else
            this.navCtrl.push("TeamListPage", { 'role': 'manager' });
    };
    ChatBotNew.prototype.addedTask = function (data) {
        this.utilities.consoleLog(data);
        this.selectedDateForCT.dateSelected.date = '';
        if (data && data.addedTask) {
            var date = __WEBPACK_IMPORTED_MODULE_17_moment__(data.CTforDate).format('DD MMM YYYY');
            this.chatList.push({ "from": "bot", "response": { responseList: { speech: "Task Created successfully, Please \"Fill Timesheet\" for " + date } }, "readMore": false });
            this.selectedDateForCT.CTforDate = data.CTforDate;
            var dateObj = { date: '' };
            dateObj.date = this.selectedDateForCT.CTforDate;
            this.getTimeEntryDetails(dateObj, this.chatList.length, null, "Please see below the timesheet details for " + date);
        }
        else {
            this.chatList.push({ "from": "bot", "response": { responseList: { speech: 'Task Creation canceled' } }, "readMore": false });
            this._getSuggestionListFromServer("getSuggestionList", { "actionId": 0 });
        }
    };
    ChatBotNew.prototype.allocationMessageChatBot = function (data) {
        this.chatList.push({
            "from": "bot", "response": {
                responseList: {
                    speech: data.allocationMessage
                }
            }, "readMore": false
        });
        this._getSuggestionListFromServer("getSuggestionList", { "actionId": 0 });
    };
    // globalmobility pdf mail service
    ChatBotNew.prototype._mailPDFDocuments = function (docSelected) {
        var _this = this;
        var alert = this.utilities.presentConfirmation('Do you want to send mail yourself ?');
        alert.then(function () {
            var url = 'sendMailWithAttachment';
            var params = {
                "actionName": "globalMobility",
                "documentUrl": docSelected
            };
            var serviceParams = {
                url: url,
                data: {
                    params: params
                },
                chatBotInfoList: true
            };
            _this.getterSetter.setUserChatListData(_this.chatList);
            _this.showChatBotLoader = true;
            _this._scrollToBottom();
            _this.chatBotServices._mailServiceGlobalMobility(serviceParams).then(function (response) {
                _this.chatList = response.data;
                _this.chatResponseSuccess(_this.chatList);
            });
            setTimeout(function () {
                _this._getSuggestionListFromServer("getSuggestionList", { "actionId": 0 });
            }, 2000);
        }).catch(function (err) { return err; });
    };
    ChatBotNew.prototype._updateUserQuery = function (userQuery) {
        var _this = this;
        // this.showKeyboard = true;
        // this.ionInput1.value = userQuery;
        setTimeout(function () {
            _this.showKeyboard = true;
            _this.inputChatText = userQuery;
            setTimeout(function () {
                // this.ionInput1.nativeElement.focus()
                // this.ionInput1.nativeElement.select()
                // this.keyboard.show()
            }, 0);
            _this._scrollToBottom();
        }, 1000);
        // let self = this;
        // window.addEventListener('native.keyboardshow', keyboardShowHandler);
        // function keyboardShowHandler(e) {​​​​​
        // this.showKeyboard = true;
        //     }​​​​​
    };
    ChatBotNew.prototype.downloadImage = function (multimediaUrl) {
        this.download.downloadDocument(multimediaUrl);
    };
    ChatBotNew.prototype._closeKeyBoard = function () {
        this.showKeyboard = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], ChatBotNew.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* Slides */])
    ], ChatBotNew.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ionInput1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ChatBotNew.prototype, "ionInput1", void 0);
    ChatBotNew = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat-bot-new',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-new.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title class="pageTitile">\n      <div class="align-cont-base padding-left10">\n        <img class="profileHtWT margin-right10" src="./assets/imgs/chat/chatBot-icon.svg">\n        Zeno\n      </div>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="chat-content">\n  <ion-list id="ionChatList" #ionList class="padding5" no-lines (click)="_closeKeyBoard()">\n    <!-- Chat list for bot and user -->\n    <div #ionListDiv *ngFor="let chatListItem of chatList; let i = index" [attr.data-index]="i">\n\n      <div class="bot-container" *ngIf="chatListItem?.from==\'bot\'">\n        <div class="padding5 position-relative " *ngIf="chatListItem?.response?.responseList?.speech">\n          <!-- Show data from bot response -->\n          <!-- greeting msg from bot -->\n          <div class="slide-from-left" *ngIf="i==0">\n            <img class="greeting-img" src="./assets/imgs/chat/{{greetingImg}}.svg" />\n          </div>\n          <!-- content from bot read-more.ts -->\n          <read-more class="speech slide-from-left"\n            [desc]="replacePhoneNumber(chatListItem?.response?.responseList?.speech,chatListItem?.response?.responseList?.actionName)"\n            [UpdateProfileLinkData]="chatListItem?.response?.responseList?.updateProfileLink"\n            [moveToPage]="chatListItem?.response?.responseList?.moveToPage"\n            [actionName]="chatListItem?.response?.responseList?.actionName" (moveToPageAllow)="_moveToPage()"\n            (updateProfile)="updateProfile($event,i)" [parentIndex]="i"\n            [ngStyle]="{\'width\':chatListItem?.response?.responseList?.showQuestionIcon ? \'80%\' : \'89%\'}"\n            (scrollToBottom)="_scrollToBottom()">\n          </read-more>\n\n          <img *ngIf="chatListItem?.response?.responseList?.showQuestionIcon" class="question-mark"\n            src="assets/imgs/chat/question-mark.svg"\n            (click)="openFAQModal(chatListItem?.response?.responseList?.data?.approvalHelpInfo)" />\n\n        </div>\n\n        <!-- for displaying PDF\'s -->\n        <div class="display-grid width90 margin-bottom6" *ngIf="chatListItem?.response?.responseList?.templateId == 4">\n          <table>\n            <tr *ngFor="let pdfItem of chatListItem?.response?.responseList?.restApi.split(\',\')">\n              <th>\n                <img class="margin-right5" *ngIf="pdfItem.slice( -4) == \'.pdf\'"\n                  src="assets/imgs/chat/pdf-doc-icon.svg" />\n                <img class="margin-right5" *ngIf="pdfItem.slice( -4) == \'pptx\'"\n                  src="assets/imgs/chat/ppt-doc-icon.svg" />\n                <img class="margin-right5" *ngIf="pdfItem.slice( -4) != \'pptx\' && pdfItem.slice( -4) != \'.pdf\'"\n                  src="assets/imgs/chat/word-doc-icon.svg" />\n                <span>\n                  {{pdfItem.slice( pdfItem.lastIndexOf(\'/\') + 1, pdfItem.length - 4) | replaceUnderscorePipe }}</span>\n              </th>\n              <th><img (click)="_downloadPDF(pdfItem)" src="assets/imgs/chat/pdf-download.svg" /></th>\n              <th><img (click)="_mailPDFDocuments(pdfItem)" src="assets/imgs/chat/pdf-email.svg" /></th>\n            </tr>\n          </table>\n\n        </div>\n\n        <!-- To show image -->\n        <div class="width50 position-relative"\n          *ngIf="!chatListItem?.response?.responseList?.actionIncomplete && chatListItem?.response?.responseList?.templateId==2"\n          (click)="utilities.openAsset(chatListItem?.response?.responseList?.restApi)">\n          <img class="chat-item-pic" src="{{chatListItem?.response?.responseList?.restApi}}">\n\n          <div class="download-image-div">\n            <img class="download-img-icon" src="./assets/imgs/chat/download-zeno.svg"\n              (click)="downloadImage(chatListItem?.response?.responseList?.restApi);$event.stopPropagation()">\n            <img class="open-img-icon" src="./assets/imgs/chat/img-exp.svg">\n          </div>\n        </div>\n\n        <!-- To show User Bank Details & AR Details -->\n        <div class="read-more-bubble slide-from-left width50 ar-cont"\n          *ngIf="chatListItem?.response?.responseList?.actionName == \'arDetails\'">\n          <div class="text-center padding10">\n            <img class="ar-profile" src="{{chatListItem?.response?.responseList?.userDetails?.profilePic}}" />\n            <div>{{chatListItem?.response?.responseList?.userDetails?.name}}</div>\n          </div>\n          <div class="infoModal">\n            <div class="align-cont-cent padding5-20">\n              <img class="icon20-20 margin-right8" src="./assets/imgs/chat/phone.svg" />\n              <span class="width80 ar-phone"\n                [innerHTML]="chatListItem?.response?.responseList?.userDetails?.extension | linky "\n                (click)="utilities.callNumber(chatListItem?.response?.responseList?.userDetails?.extension)"></span>\n            </div>\n            <div class="align-cont-cent padding5-20">\n              <img class="icon20-20 margin-right8" src="./assets/imgs/chat/email.svg" />\n              <span class="width80"\n                [innerHTML]="chatListItem?.response?.responseList?.userDetails?.email | linky "></span>\n            </div>\n          </div>\n        </div>\n\n        <div class="chat-list suggestionItem queryContent white-space-nowrap display-inline-block"\n          *ngIf="chatListItem?.response?.responseList?.actionName == \'getUserBankDetails\'">\n          <div *ngFor="let responseItem of chatListItem?.response?.responseList?.userDetails">\n            <div>{{responseItem.key}} : <span [innerHTML]="responseItem.value | linky "></span></div>\n          </div>\n        </div>\n\n        <!--not integarted weather template -->\n        <div *ngIf="chatListItem?.response?.responseList?.actionName"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'getWeatherFetched\'">\n          <div class="chat-list suggestionItem weather-cont">\n            <div class="detail-cloud">\n              <div class="font16">{{chatListItem?.response?.responseList?.weather?.description | titlecase }}</div>\n              <span class="font16">{{chatListItem?.response?.responseList?.weather?.currentTemp}}\n                <span>&deg;C</span>\n              </span>\n              <div>Humidity <span> {{chatListItem?.response?.responseList?.weather?.humidity}} %</span></div>\n            </div>\n            <div>\n              <img [src]="chatListItem?.response?.responseList?.weather?.weatherSymbol" />\n            </div>\n          </div>\n        </div>\n\n        <!-- Timesheet Attendance Details -->\n        <div class="ts-attendance" *ngIf="chatListItem?.response?.responseList?.actionName"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'getMyAttendanceDetails\'">\n          <ion-row *ngFor="let responseItem of chatListItem?.response?.responseList?.dataList">\n            <ion-col col-4>\n              <div class="ts-calendar">\n                <img src="assets/imgs/chat/calendar-Icon.svg" />\n                <span><strong>{{responseItem?.dayName | titlecase}}</strong></span>\n              </div>\n              <p>{{responseItem?.loginDate | date: \'dd MMM yyyy\'}}</p>\n            </ion-col>\n            <ion-col col-8>\n              <div>\n                <div><strong>In:</strong> {{responseItem?.logInTime}} </div>\n                <div><strong>Out:</strong> {{responseItem?.logOutTime}}</div>\n              </div>\n              <div class="efforts">{{responseItem?.efforts}}</div>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <!-- Timesheet Compliance Details -->\n        <div class="ts-compliance" *ngIf="chatListItem?.response?.responseList?.actionName"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'getMyComplianceDetails\'">\n          <div class="outer-div" *ngFor="let responseItem of chatListItem?.response?.responseList?.dataList">\n            <div class="ts-calendar"\n              (click)="getMonthwiseCompliancePercentage(responseItem.month,responseItem?.monthFlag)">\n              <img src="assets/imgs/chat/calendar-Icon.svg" /> <span>{{responseItem?.month}}</span>\n            </div>\n            <div>{{responseItem?.percentage}}</div>\n          </div>\n        </div>\n\n        <!-- Timesheet Allocation Details -->\n        <div class="ts-allocation" *ngIf="chatListItem?.response?.responseList?.actionName"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'getMyAllocationDetails\'">\n          <project-allocation [chatListItem]="chatListItem"></project-allocation>\n        </div>\n\n        <!-- Timesheet Date -->\n        <div class="d-flex horizontal-scroll left-space"\n          *ngIf="chatListItem?.response?.responseList?.actionName && chatListItem?.response?.responseList?.dataList?.length > 1"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'getFillTimesheetDetails\'">\n          <div *ngFor="let responseItem of chatListItem?.response?.responseList?.dataList;let dateIndex = index;">\n            <timesheet-data [dateObj]="responseItem" [type]="tsTypes.tsDate"\n              (onDateChange)="getTimeEntryDetails(responseItem,i + 1,chatListItem?.response?.responseList?.queryId)"\n              [updateStatus]="tsTypes?.updateStatus" [chatListIndexForDate]="i"\n              (setIndexTOUpdateSelDate)="setIndexTOUpdateSelDate($event,i + 1)" [indexToShowDot]="indexToShowDot"\n              [dateIndex]="dateIndex"></timesheet-data>\n          </div>\n        </div>\n\n        <!-- Timesheet Date After Submit-->\n        <div class="d-flex horizontal-scroll left-space" *ngIf="chatListItem?.response?.responseList?.actionName"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'submitTimesheet\'">\n          <div *ngFor="let responseItem of chatListItem?.response?.responseList?.dataList;let dateIndex = index;">\n            <timesheet-data [dateObj]="responseItem" [type]="tsTypes.tsDate"\n              (onDateChange)="getTimeEntryDetails(responseItem,i + 1,chatListItem?.response?.responseList?.queryId)"\n              [updateStatus]="tsTypes?.updateStatus" [chatListIndexForDate]="i"\n              (setIndexTOUpdateSelDate)="setIndexTOUpdateSelDate($event,i + 1)" [indexToShowDot]="indexToShowDot"\n              [dateIndex]="dateIndex"></timesheet-data>\n          </div>\n        </div>\n\n        <!-- TimeEntry Details -->\n        <div class="timesheet horizontal-scroll left-space"\n          *ngIf="chatListItem?.response?.responseList?.actionName && chatList[chatList.length - 1]?.response?.responseList?.showTimeEntryDetails== true"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'timeEntryDetails\'"\n          [hidden]="i!=(chatList.length-1)">\n          <div *ngIf="chatListItem?.response?.responseList?.dataList?.length > 0">\n            <ion-row class="effort-details">\n              <ion-col col-9 class="total-efforts">\n                <div *ngIf="chatListItem?.response?.responseList?.data?.staffLoginLogoutDetails">\n                  <div><strong>{{chatListItem?.response?.responseList?.data?.staffLoginLogoutDetails?.date}}</strong>\n                  </div>\n                  <strong>In: </strong>\n                  <span>{{chatListItem?.response?.responseList?.data?.staffLoginLogoutDetails?.logInTimeHrsMin}}</span>\n                  <strong>Out: </strong>\n                  <span>{{chatListItem?.response?.responseList?.data?.staffLoginLogoutDetails?.logOutHrsMin}}</span>\n                  <span>({{chatListItem?.response?.responseList?.data?.staffLoginLogoutDetails?.efforts}})</span>\n                </div>\n                <div><strong>Total Efforts:\n                    {{chatListItem?.response?.responseList?.totalCalculatedEfforts?.hour}}:{{chatListItem?.response?.responseList?.totalCalculatedEfforts?.minute}}\n                  </strong></div>\n              </ion-col>\n              <ion-col col-3 class="submitBtn">\n                <button ion-button round small [disabled]="tsFlags?.disableSubmit"\n                  (click)="showSubmitConfirmAlert(chatListItem?.response?.responseList?.data?.taskAndTimesheetDetails,chatListItem?.response?.responseList?.queryId,i)"\n                  [ngStyle]="{\'opacity\': i < chatList?.length - 1 || tsFlags?.disableSubmit ? \'0.5\' : \'1\'}">Submit</button>\n              </ion-col>\n            </ion-row>\n          </div>\n          <div class="project-title" *ngIf="!chatListItem?.response?.responseList?.data?.staffLoginLogoutDetails">\n            <strong>For Date :\n            </strong> <span>{{tsFordate}}</span>\n          </div>\n\n\n          <div class="project-card"\n            *ngFor="let responseItem of chatListItem?.response?.responseList?.dataList;let parentIndex = index;">\n            <div class="project-title"> <strong>Project: </strong>\n              <span>{{responseItem.title | titlecase}}</span>\n            </div>\n            <ion-slides slidesPerView="1.2" spaceBetween="5px" (ionSlideWillChange)="onTaskDataSLideChange()">\n              <ion-slide *ngFor="let task of responseItem.taskList;let childIndex = index;">\n                <timesheet-data [taskData]="task" [timesheetData]="responseItem"\n                  [type]="tsTypes.taskAndTimesheetDetails"\n                  [isTimesheetEditable]="chatListItem?.response?.responseList?.data?.isTimesheetEditable"\n                  [isPayrollToBeFilledZeroHours]="canFillZeroHoursFlag()"\n                  (edit)="editAndSaveTimesheet($event,task,chatListItem?.response?.responseList?.dataList,i,chatListItem?.response?.responseList?.actionId)"\n                  (refresh)="refreshTimesheet(i)" (setSuggestionList)="setSuggestionList($event,i)"\n                  [selData]="tsTypes.selData" [parentIndex]="parentIndex" [childIndex]="childIndex"\n                  [indexToToggleForm]="indexToToggleForm" (setIndexTOUpdate)="setIndexTOUpdate($event)"\n                  [chatListIndex]="i" [chatListLength]="chatList?.length"></timesheet-data>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </div>\n\n        <!-- User Profile -->\n        <div class="profile-old" *ngIf="chatListItem?.response?.responseList?.actionName"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'getUserProfileData\' && chatListItem?.response?.responseList?.actionName!=\'getMyProfile\' && chatListItem?.response?.responseList?.actionName!=\'managerDetails\'">\n          <ion-slides slidesPerView="3" spaceBetween="5px"\n            (ionSlideReachEnd)="onlastSlideUpdateEmpContactList(chatListItem?.response?.responseList?.searchResults)"\n            [ngStyle]="{\'width\': (showMoreArrow  && ((chatList.length - 1)  == i)) ? \'90%\' : \'100%\'}">\n            <ion-slide *ngFor="let responseItem of chatListItem?.response?.responseList?.searchResults"\n              (click)="goToProfile(responseItem)">\n              <ion-card>\n                <img src="{{responseItem.profilePicUrl}}" />\n                <div class="name">{{responseItem.employeeName}}</div>\n                <span>{{responseItem.employeeId}}</span>\n              </ion-card>\n            </ion-slide>\n          </ion-slides>\n          <div *ngIf="showMoreArrow && ((chatList.length - 1)  == i)" (click)="openEmpContactListModal()">\n            <ion-icon name="arrow-forward"></ion-icon>\n          </div>\n        </div>\n\n\n        <!-- My Timesheet Details -->\n        <div class="myTimesheet-old" *ngIf="chatListItem?.response?.responseList?.actionName"\n          [hidden]="chatListItem?.response?.responseList?.actionName !== \'getMyTimesheetDetails\'">\n          <my-timesheet-detail class="width100" [chatList]="chatList" [chatListItem]="chatListItem" [parentIndex]="i"\n            (sendDataToChatBotResponseSuccess)="_sendDataToChatBotResponseSuccess($event)"></my-timesheet-detail>\n        </div>\n\n        <!-- Approve Timesheet-->\n        <div class="approve-timesheet left-space" *ngIf="chatListItem?.response?.responseList?.actionName"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'getApproveTimesheetDetails\'">\n          <div class="d-flex"\n            *ngIf="chatListItem?.response?.responseList?.data?.projectList?.length > 0 || chatListItem?.response?.responseList?.data?.teamsTimesheetList?.length > 0">\n            <div class="duration">\n              <img src="assets/imgs/chat/calendar-Icon.svg" />\n              <span>Duration:</span>\n              <strong>{{chatListItem?.response?.responseList?.data?.startDate | date:\'dd MMM, yyyy\'}} -\n                {{chatListItem?.response?.responseList?.data?.endDate | date:\'dd MMM, yyyy\'}}</strong>\n            </div>\n          </div>\n          <ion-list no-lines margin-top *ngIf="chatListItem?.response?.responseList?.dataList?.length > 0">\n            <button ion-item\n              (click)="getPendingTimesheetList(\'all\',chatListItem?.response?.responseList?.data,chatListItem?.response?.responseList?.queryId,i)">\n              <span class="projectName">All Projects</span>\n              <img src="assets/zents-imgs/right-arrow.svg" />\n            </button>\n            <button ion-item *ngFor="let responseItem of chatListItem?.response?.responseList?.dataList;"\n              (click)="getPendingTimesheetList(responseItem,chatListItem?.response?.responseList?.data,chatListItem?.response?.responseList?.queryId,i)">\n              <span class="projectName">{{ responseItem.projectName }}</span>\n              <img src="assets/zents-imgs/right-arrow.svg" />\n            </button>\n          </ion-list>\n        </div>\n\n        <!-- "pendingTimesheetList" -->\n        <div class="approveAll left-space" *ngIf="chatListItem?.response?.responseList?.actionName"\n          [hidden]="chatListItem?.response?.responseList?.actionName!=\'pendingTimesheetList\'">\n          <pending-timesheet [chatList]="chatList" [chatListItem]="chatListItem" [timesheetRestApi]="timesheetRestApi"\n            [parentIndex]="i" (sendDataToChatBotResponseSuccess)="_sendDataToChatBotResponseSuccess($event)">\n          </pending-timesheet>\n        </div>\n\n        <!-- create Task -->\n        <div\n          *ngIf="chatListItem?.response?.responseList?.showTimeEntryDetails == false && chatList[chatList.length - 2]?.response?.responseList?.actionName==\'zenTS.getCreateTaskDetails\' && chatListItem?.response?.responseList?.enableCT == true && i==(chatList.length-1)">\n          <create-task [selectedDateForCT]="sendCTDate" [timeEntryDetailData]="chatListItem?.response?.responseList"\n            [isPayrollToBeFilledZeroHours]="canFillZeroHoursFlag()" (addedTask)="addedTask($event)"\n            (allocationMessageChatBot)="allocationMessageChatBot($event)" (scrollToBottom)="_scrollToBottom()">\n          </create-task>\n        </div>\n\n        <!-- global mobility -->\n        <div class="region-list-cont" [hidden]="i!=(chatList.length-1)"\n          *ngIf="chatListItem?.response?.responseList?.rowRegionList != \'\'">\n          <button class="region-list" *ngFor="let region of chatListItem.response.responseList.rowRegionList"\n            (click)="_getHrChatBotData({value:region,clickedChatItem:chatListItem?.response?.responseList})"><span\n              class="margin-right10">{{region}}</span>\n            <ion-icon name="ios-arrow-forward"></ion-icon>\n          </button>\n        </div>\n\n        <!-- refferal check  -->\n        <div *ngIf="chatListItem?.response?.responseList?.actionName ==\'referral.checkReferralStatus\'">\n          <referral-bot-component [refferalDetails]="chatListItem?.response?.responseList" [dataOnly]="\'false\'"\n            (moreReferralFlag)="_getHrChatBotData({ value: \'More Referral\' })" (scrollToBottom)="_scrollToBottom()">\n          </referral-bot-component>\n        </div>\n\n        <!-- matching profile  in referral-->\n        <div *ngIf="chatListItem?.response?.responseList?.actionName ==\'referrals.matchingPositionsToMyProfile\'">\n          <matching-profile [matchingProfile]="chatListItem?.response?.responseList"\n            (moveToPageAllow)="_moveToPage(\'zenrich\')" (scrollToBottom)="_scrollToBottom()"></matching-profile>\n        </div>\n      </div>\n\n      <!-- implement in future -->\n      <!-- <div [ngSwitch]="chatListItem?.response?.responseList?.actionName">\n        <div *ngSwitchCase="\'learning.myLearningHours\'">\n          <!- learning history in zenlearn ->\n          <learning-hrs [responseList]="chatListItem?.response?.responseList" (scrollToBottom)="_scrollToBottom()">\n          </learning-hrs>\n        </div>\n        <div *ngSwitchCase="\'learning.upcomingEnrolledCourses\'">\n          <!- course list in zenlearn ->\n          <courses-list [responseList]="chatListItem?.response?.responseList" (scrollToBottom)="_scrollToBottom()">\n          </courses-list>\n        </div>\n        <div *ngSwitchCase="\'learning.myDAP\'">\n          <!- my dap ->\n          <my-dap [myDAPDetails]="chatListItem?.response?.responseList" (scrollToBottom)="_scrollToBottom()"></my-dap>\n        </div>\n      </div> -->\n\n      <!-- learning history in zenlearn -->\n      <div *ngIf="chatListItem?.response?.responseList?.actionName == \'learning.myLearningHours\'">\n        <learning-hrs [responseList]="chatListItem?.response?.responseList" (scrollToBottom)="_scrollToBottom()">\n        </learning-hrs>\n      </div>\n\n      <!-- course list in zenlearn -->\n      <div *ngIf="chatListItem?.response?.responseList?.actionName == \'learning.upcomingEnrolledCourses\'">\n        <courses-list [responseList]="chatListItem?.response?.responseList" (scrollToBottom)="_scrollToBottom()">\n        </courses-list>\n      </div>\n\n      <!-- my dap -->\n      <div *ngIf="chatListItem?.response?.responseList?.actionName ==\'learning.myDAP\'">\n        <my-dap [myDAPDetails]="chatListItem?.response?.responseList" (scrollToBottom)="_scrollToBottom()"></my-dap>\n      </div>\n\n      <!-- only for teamDap & menteeDap -->\n      <div class="dap-cont"\n        *ngIf="chatListItem?.response?.responseList?.actionName ==\'learning.teamMembersDAP\' || chatListItem?.response?.responseList?.actionName ==\'learning.menteesDAP\'">\n        <div class="justify-spac-bt-align-cent padding10">Mentees <span class="dap-count center"> {{dapCount}}\n          </span></div>\n        <div class="dap-button" (click)="_viewAll(chatListItem?.response?.responseList?.actionName)">View</div>\n      </div>\n\n      <!-- feedback response -->\n      <div\n        *ngIf="(chatListItem?.response?.responseList?.actionName == \'receivedFeedbackRes\' || chatListItem?.response?.responseList?.actionName == \'negativeFeedbackres\')"\n        class="text-wrapper feedback">\n        <span>{{chatListItem?.response?.responseList?.feedbackResponse}}</span>\n      </div>\n\n      <!-- suggestion phrase -->\n      <div class="text-wrapper" *ngIf="!showChatBotLoader"\n        [ngStyle]="{\'display\': chatListItem?.response?.responseList?.suggestionPhrase ? \'block\':\'none\'}"\n        [hidden]="i!=(chatList.length-1) ">\n        <span class="slide-from-left"> {{chatListItem?.response?.responseList?.suggestionPhrase}}</span>\n      </div>\n\n      <!-- Show Data of User queries -->\n      <div class=" padding5 display-flex justify-content-flex-end" *ngIf="chatListItem?.from==\'me\'"\n        [hidden]="!chatListItem?.query">\n        <div class="chat-item-cont position-relative" (click)="_updateUserQuery(chatListItem.query)">\n          <div class="chat-item slide-from-right">{{chatListItem?.query}}</div>\n          <div class="align-cont-cent colorGray justify-content-flex-end slide-from-right">\n            {{chatListItem?.currentTime}}\n            <img class="edit-query border-radius50" src=\'./assets/imgs/edit-query.svg\' />\n          </div>\n        </div>\n      </div>\n\n\n      <!-- Show Data for feedback  -->\n      <div *ngIf="i==chatList.length-1">\n        <div *ngIf="!chatListItem?.response?.responseList?.feedbackSent">\n          <feedback-componenet [feedbackDetails]="chatListItem?.response?.responseList" [showQueryBox]="showQueryBox"\n            [queryListenFromFeedback]="queryListenFromFeedback" [chatList]="chatList" [currentQueryId]="currentQueryId"\n            [currentActionId]="currentActionId" [userDetails]="userDetails"\n            (sendNegativeFeedback)="_sendNegativeFeedback($event)" (submitFeedback)="_submitFeedback($event)"\n            (tts)="_tts(\'\')" (scrollToBottom)="_scrollToBottom()" (cancel)="_cancel()">\n          </feedback-componenet>\n        </div>\n      </div>\n\n    </div>\n\n    <!-- Bot loader -->\n    <div class="padding5 position-relative" *ngIf="showChatBotLoader">\n      <div class="margin-right10">\n        <img class="chat-item-profile-pic profileHtWT" src="./assets/imgs/chat/chatBot-icon.svg">\n      </div>\n      <div class="margin-left10">\n        <img class="dots-loader" src="./assets/imgs/chat/loader_01.gif" />\n      </div>\n    </div>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <!-- suggestionListForTS -->\n  <select-suggestion [type]="tsTypes.suggestionType" [suggestionList]="suggestionListForTS" [selectedValue]="selValue"\n    (setSuggestion)="setSuggestion($event)"></select-suggestion>\n\n  <!-- normal chatbot suggestions -->\n  <div class="horizontal-scroll sugesstion-cont align-cont-cent"\n    *ngIf="showSuggestion && suggestionList.suggestionsList && suggestionListForTS.length == 0 && !showChatBotLoader">\n    <!-- To show new items in suggestions in horizontal scroll -->\n    <div class="display-flex" *ngIf="suggestionList.newFeaturesList">\n      <button class="padding8 suggestion-list align-cont-cent" *ngFor="let item of suggestionList.newFeaturesList"\n        (click)="_getHrChatBotData({value:item})">\n        <img class="new-item" src="./assets/imgs/chat/new-item.svg" />\n        {{item}}\n      </button>\n    </div><!-- To show suggestions in horizontal scroll -->\n    <div class="display-flex">\n      <button class="padding11 suggestion-list" *ngFor="let item of suggestionList.suggestionsList"\n        (click)="_getHrChatBotData({value:item})">\n        {{item}}\n      </button>\n    </div>\n  </div>\n\n  <div padding>\n    <div [hidden]="showKeyboard" class="holder">\n      <!-- keyboard -->\n      <img class="width9 height9" *ngIf="!showText" (click)="_openKeyboard()"\n        src="./assets/imgs/chat/keyboard-icon.svg" />\n      <!-- Microphone/Listening -->\n      <img class="gifSize" *ngIf="listening || showChatBotLoader" src="./assets/imgs/chat/message-loader.gif" />\n      <!-- Speaker/Mute -->\n      <div class="align-cont-cent" *ngIf="!(listening || showChatBotLoader)">\n        <img class="icon40-40 margin-right20" *ngIf="!showText" (click)="_startListening()"\n          src="./assets/imgs/chat/microphone-icon.svg" />\n        <img *ngIf="mute " (click)="_muteSpeech()" src="./assets/imgs/chat/mute.svg" />\n        <img *ngIf="!mute " (click)="_muteSpeech()" src="./assets/imgs/chat/unmute-icon.svg" />\n      </div>\n      <img class="allIcons" (click)="_openSuggestionModal()" src="./assets/imgs/chat/chatbot-menu.svg" />\n    </div>\n\n    <div [hidden]="!showKeyboard" class="keyboard-holder">\n      <div class="grow">\n        <form [formGroup]="userInputGroup">\n          <ion-input formControlName="userInput" #ionInput1 type="text" [(ngModel)]=\'inputChatText\'\n            (input)=\'_ionChangeToggleSendMic($event.target?.value)\'\n            (ionChange)=\'_ionChangeToggleSendMic($event.target?.value)\' (keyup.enter)="_sendText()"></ion-input>\n        </form>\n      </div>\n      <div>\n        <img *ngIf="showSend" class="icon40-40" (click)="_closeKeyboard()"\n          src="./assets/imgs/chat/microphone-icon.svg" />\n        <img *ngIf="!showSend " class="icon30-30" (click)="_sendText()" src="./assets/imgs/chat/send.svg" />\n      </div>\n    </div>\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-new.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_22__providers_getterSetter_getterSetter__["a" /* GetterSetter */],
            __WEBPACK_IMPORTED_MODULE_21__chat_bot_new_services_chat_bot_new_services__["a" /* ChatBotServices */],
            __WEBPACK_IMPORTED_MODULE_10__providers_download_download__["a" /* Download */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular_platform_platform__["a" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_7__providers_data_data__["a" /* Data */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_2__providers_speechRecognition_speechRecognition__["a" /* SpeechRecognitionUtility */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_screenshot_ngx__["a" /* Screenshot */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_14__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_24__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_25__chat_bot_new_services_moveToPage_service__["a" /* MoveToPageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["H" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Events */]])
    ], ChatBotNew);
    return ChatBotNew;
}());

//# sourceMappingURL=chat-bot-new.js.map

/***/ }),

/***/ 1876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export environment */
/* unused harmony export url */
/* unused harmony export authBaseURL */
/* unused harmony export zenLearnBaseURL */
/* unused harmony export servicesURL */
/* unused harmony export searchURL */
/* unused harmony export associateSelfService */
/* unused harmony export notificationURL */
/* unused harmony export dashboardURL */
/* unused harmony export announcementURL */
/* unused harmony export miscellaneousUrl */
/* unused harmony export chatBotUrl */
/* unused harmony export chatBotSugessionUrl */
/* unused harmony export chatBotFeedbackUrl */
/* unused harmony export baseMediaURL */
/* unused harmony export onBoardingUrl */
/* unused harmony export ijpUrl */
/* unused harmony export bannerUrl */
/* unused harmony export isDev */
/* unused harmony export zenDeavorURL */
/* unused harmony export home */
/* unused harmony export zenloungeBaseUrl */
/* unused harmony export financeURL */
/* unused harmony export sfModuleURL */
/* unused harmony export zenAdminURL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return version; });
/* unused harmony export zentsUrl */
/* unused harmony export loginBaseUrl */
/* unused harmony export timeentryBaseUrl */
/* unused harmony export addTaskBaseUrl */
/* unused harmony export overtimeBaseUrl */
/* unused harmony export dashboardBaseUrl */
/* unused harmony export zenTsPalBaseUrl */
/* unused harmony export addOnBaseUrl */
/* unused harmony export zenwenUrl */
/* unused harmony export zenwenImgUrl */
/* unused harmony export eventBaseUrl */
/* unused harmony export zenEventBaseUrl */
/* unused harmony export headerMenuBaseUrl */
/* unused harmony export mediaServices */
/* unused harmony export zenMediaServices */
/* unused harmony export collaborationServiceUrl */
/* unused harmony export zenCollaborationServiceUrl */
/* unused harmony export userBaseUrl */
/* unused harmony export SOS_EMERGENCY_NUMBER */
/* unused harmony export chatBotInfoList */
/* unused harmony export zenRichBaseUrl */
/* unused harmony export zenTsReport */
/* unused harmony export zenExitBaseUrl */
var environment = {
    production: false
};
//internet
//intranet
//export const url = "http://10.42.204.231:90/";
//export const url = "https://isapp.zensar.com/";
// export const url = "https://zentalent.zensar.com/";
// export const ZenfinanceBaseURL = "http://10.42.204.232:69/"
var url = "https://zentalentdev.zensar.com/";
var authBaseURL = url + "authentication-zenhelp/";
var zenLearnBaseURL = url + "zenlearn-service-zenhelp/";
var servicesURL = url + "interection-zenhelp/";
var searchURL = url + "search-zenhelp/";
var associateSelfService = url + "associates-self-service/";
var notificationURL = url + "notification-zenhelp/";
var dashboardURL = url + "dashboard-zenhelp/";
var announcementURL = url + "announcement-zenhelp/";
var miscellaneousUrl = url + "miscellaneous-service-zenhelp/";
var chatBotUrl = url + "chatbot-zenhelp/getChatBotData/";
var chatBotSugessionUrl = url + "chatbot-zenhelp/";
var chatBotFeedbackUrl = url + "chatbot-zenhelp/getFeedbackData";
var baseMediaURL = url;
var onBoardingUrl = url + "/onboarding-zenhelp/";
var ijpUrl = url + "internal-job-posting/";
var bannerUrl = url + "getBannerDetail/";
var isDev = false;
var zenDeavorURL = url + "zendeavor-service-zentalent/";
var home = url + "landing-service-taz/";
//export const zenlearn = `${url} /`
//Zenloungeplus
var zenloungeBaseUrl = "https://zenloungeplus.zensar.com/o/stagingws/userServices/";
var financeURL = url + "/zenfinance-zenhelp/";
var sfModuleURL = url + "dialog-zenhelp/";
var zenAdminURL = url + "zenadmin-service-zentalent/";
//ZenTS 
//Current Version of App:
var version = "7.0.0";
// For Test :
var zentsUrl = "https://zentalentappdev.zensar.com";
// export const zentsUrl = "https://zentstesting.zensar.com";
// export const url = "https://zents.zensar.com";
// export const url = "https://zentstestservices.zensar.com";
// export const zentsUrl = "https://cmostage.zensar.com";
// export const url = "https://10.42.206.32";
// export const loginBaseUrl = `${zentsUrl}/api/zentslogin/zents-login-service/v1/`;
// export const timeentryBaseUrl = `${zentsUrl}/api/timeentry/timeentry/v1/`;
// export const addTaskBaseUrl = `${zentsUrl}/api/addtask/zents-addtask-service/v1/`;
// export const overtimeBaseUrl = `${zentsUrl}/api/overtime/overtime-service/v1/`;
// export const dashboardBaseUrl = `${zentsUrl}/api/dashboard/zents-dashboard-service/`;
// export const zenTsPalBaseUrl = `${zentsUrl}/api/pal/zents-zenpal-service/v1/getAssistData`;
// export const addOnBaseUrl = `${zentsUrl}/api/addon/addon-service/v1/`;
var loginBaseUrl = zentsUrl + "/zents-login-service/v1/";
var timeentryBaseUrl = zentsUrl + "/timeentry/v1/";
var addTaskBaseUrl = zentsUrl + "/zents-addtask-service/v1/";
var overtimeBaseUrl = zentsUrl + "/overtime-service/v1/";
var dashboardBaseUrl = zentsUrl + "/zents-dashboard-service/";
var zenTsPalBaseUrl = zentsUrl + "/api/pal/zents-zenpal-service/v1/getAssistData";
var addOnBaseUrl = zentsUrl + "/api/addon/addon-service/v1/";
// ZenWEN
//Production:
// export const zenwenUrl = "https://zenloungeplus.zensar.com/o/zenappServices";
// export const zenwenImgUrl = "https://zenloungeplus.zensar.com";
//Development:
var zenwenUrl = "https://zenloungedevbeta.zensar.com/o/zenappServices";
var zenwenImgUrl = "https://zenloungedevbeta.zensar.com";
var eventBaseUrl = zenwenUrl + "/calendar/";
var zenEventBaseUrl = zenwenUrl + "/zenWenCalendar/";
var headerMenuBaseUrl = zenwenUrl + "/headerMenu/";
var mediaServices = zenwenUrl + "/mediaServices/";
var zenMediaServices = zenwenUrl + "/zenMediaServices/";
var collaborationServiceUrl = zenwenUrl + "/collaboration/";
var zenCollaborationServiceUrl = zenwenUrl + "/zenCollaboration/";
var userBaseUrl = zenwenUrl + "/user/";
var SOS_EMERGENCY_NUMBER = "02040704070";
var chatBotInfoList = url + "/com.zensar.zenconverseassist/getDashboardData/";
var zenRichBaseUrl = url + "zenrich-service-zentalent/";
var zenTsReport = url + "zents-report-service/";
var zenExitBaseUrl = url + "exit-service-zentalent/";
// export const chatBotInfoList = `http://10.42.204.141/com.zensar.zenconverseassist/getDashboardData/`;
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 1877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBotComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_emojione__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_selectable__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_linky__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_task_create_task__ = __webpack_require__(1878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__read_more_read_more__ = __webpack_require__(1879);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__timesheet_data_timesheet_data__ = __webpack_require__(1880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_project_task_project_task__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__referral_component_referral_component__ = __webpack_require__(1881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__matching_profile_matching_profile__ = __webpack_require__(1882);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__select_suggestion_select_suggestion__ = __webpack_require__(1883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__feedback_componenet_feedback_componenet__ = __webpack_require__(1884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pending_timesheet_pending_timesheet__ = __webpack_require__(1885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__my_timesheet_detail_my_timesheet_detail__ = __webpack_require__(1886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__project_allocation_project_allocation__ = __webpack_require__(1887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__learning_hrs_learning_hrs__ = __webpack_require__(1888);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__courses_list_courses_list__ = __webpack_require__(1889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__my_dap_my_dap__ = __webpack_require__(1890);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var ChatBotComponentModule = /** @class */ (function () {
    function ChatBotComponentModule() {
    }
    ChatBotComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            entryComponents: [__WEBPACK_IMPORTED_MODULE_9__components_project_task_project_task__["a" /* ProjectTaskComponent */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__read_more_read_more__["a" /* ReadMoreComponent */],
                __WEBPACK_IMPORTED_MODULE_8__timesheet_data_timesheet_data__["a" /* TimesheetDataComponent */],
                __WEBPACK_IMPORTED_MODULE_6__create_task_create_task__["a" /* CreateTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_17__learning_hrs_learning_hrs__["a" /* learningHrsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__referral_component_referral_component__["a" /* ReferralComponent */],
                __WEBPACK_IMPORTED_MODULE_11__matching_profile_matching_profile__["a" /* MatchingProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__select_suggestion_select_suggestion__["a" /* SelectSuggestionComponent */],
                __WEBPACK_IMPORTED_MODULE_13__feedback_componenet_feedback_componenet__["a" /* FeedbackComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pending_timesheet_pending_timesheet__["a" /* PendingTimesheetComponent */],
                __WEBPACK_IMPORTED_MODULE_15__my_timesheet_detail_my_timesheet_detail__["a" /* MyTimesheetDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_16__project_allocation_project_allocation__["a" /* ProjectAllocationComponent */],
                __WEBPACK_IMPORTED_MODULE_18__courses_list_courses_list__["a" /* CoursesListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__my_dap_my_dap__["a" /* MyDAP */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_1_angular_emojione__["a" /* EmojiModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_selectable__["a" /* IonicSelectableModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_linky__["a" /* LinkyModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__read_more_read_more__["a" /* ReadMoreComponent */],
                __WEBPACK_IMPORTED_MODULE_8__timesheet_data_timesheet_data__["a" /* TimesheetDataComponent */],
                __WEBPACK_IMPORTED_MODULE_6__create_task_create_task__["a" /* CreateTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_17__learning_hrs_learning_hrs__["a" /* learningHrsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__referral_component_referral_component__["a" /* ReferralComponent */],
                __WEBPACK_IMPORTED_MODULE_11__matching_profile_matching_profile__["a" /* MatchingProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__select_suggestion_select_suggestion__["a" /* SelectSuggestionComponent */],
                __WEBPACK_IMPORTED_MODULE_13__feedback_componenet_feedback_componenet__["a" /* FeedbackComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pending_timesheet_pending_timesheet__["a" /* PendingTimesheetComponent */],
                __WEBPACK_IMPORTED_MODULE_15__my_timesheet_detail_my_timesheet_detail__["a" /* MyTimesheetDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_16__project_allocation_project_allocation__["a" /* ProjectAllocationComponent */],
                __WEBPACK_IMPORTED_MODULE_18__courses_list_courses_list__["a" /* CoursesListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__my_dap_my_dap__["a" /* MyDAP */]
            ]
        })
    ], ChatBotComponentModule);
    return ChatBotComponentModule;
}());

//# sourceMappingURL=chat-bot-components.module.js.map

/***/ }),

/***/ 1878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_std_task_list_modal_std_task_list_modal__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
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






/**
 * Generated class for the CreateTaskComponent component.
 */
var CreateTaskComponent = /** @class */ (function () {
    function CreateTaskComponent(navCtrl, navParams, fb, utility, httpProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.isPayrollToBeFilledZeroHours = false;
        this.addedTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.allocationMessageChatBot = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.scrollToBottom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
        this.data.task = 'project';
    }
    CreateTaskComponent.prototype.ionViewDidLoad = function () {
    };
    CreateTaskComponent.prototype.ngOnInit = function () {
        if (this.timeEntryDetailData) {
            this.currentDate = this.selectedDateForCT;
            this.hideProjectTask = this.timeEntryDetailData.data.onlyZenCOREProjectAllocation;
            this.data.task = this.hideProjectTask ? 'standard' : 'project';
            this.taskAndtimesheetDetails = this.timeEntryDetailData.taskAndTimesheetDetails;
            this.isPayrollToBeFilledZeroHours = this.isPayrollToBeFilledZeroHours;
        }
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
    CreateTaskComponent.prototype.addTask = function (data) {
        this.addProjectTaskService(data);
    };
    CreateTaskComponent.prototype.onStdProjSelect = function () {
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
    CreateTaskComponent.prototype.onStdTaskSelect = function (e) {
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
    CreateTaskComponent.prototype.onBillabilityChange = function (e) { };
    CreateTaskComponent.prototype.onSubmit = function () {
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
    CreateTaskComponent.prototype.showSaveConfirmAlert = function () {
        var _this = this;
        var alert = this.utility.presentConfirmation('Are you sure you want to save this timesheet ?');
        alert.then(function () {
            _this.addTimesheet();
        });
    };
    /**
     * Get Project List
     */
    CreateTaskComponent.prototype.getProjectList = function () {
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
                else {
                    // this.allocationMessage = res.allocationMessage;
                    _this.allocationMessageChatBot.emit({ allocationMessage: res.allocationMessage });
                }
            }
            _this.scrollToBottom.emit();
        }, function (err) {
            _this.utility.updateLoader(false);
        });
        //}
    };
    /**
     * Get Standard Task List
     */
    CreateTaskComponent.prototype.getStdTaskList = function () {
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
        this.scrollToBottom.emit();
    };
    /**
     * Method to add ProjectTask
     * @param data
     */
    CreateTaskComponent.prototype.addProjectTaskService = function (data) {
        var _this = this;
        this.utility.updateLoader(true);
        var url = 'projectTask';
        this.httpProvider.http.zentsCommonService({ url: url, data: data, addTask: true }).subscribe(function (res) {
            if (res && res.userMessage) {
                _this.utility.updateLoader(false);
                _this.addedTask.emit({ addedTask: true, CTforDate: _this.currentDate });
                // this.navCtrl.pop().then(() => this.resolve(res.userMessage));
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    CreateTaskComponent.prototype.onMilestoneChange = function (e) {
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
    CreateTaskComponent.prototype.saveTimesheet = function (taskId) {
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
                _this.utility.updateLoader(false);
                _this.addedTask.emit({ addedTask: true, CTforDate: _this.currentDate });
                // this.navCtrl.pop().then(() => this.resolve(res.userMessage));
            }
        }, function (err) {
            _this.utility.updateLoader(false);
        });
    };
    /**
     * Method to add Standard Task and then call saveTimesheet to save the task
     */
    CreateTaskComponent.prototype.addTimesheet = function () {
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
    CreateTaskComponent.prototype.getResetTaskIds = function (timesheetList) {
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
    CreateTaskComponent.prototype.openStdTaskListModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var listModal;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.selProjectObj) {
                    listModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__components_std_task_list_modal_std_task_list_modal__["a" /* StdTaskListModalComponent */], {
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
    CreateTaskComponent.prototype.getStdTasksData = function () {
        this.utility.consoleLog("Clicked Std Task");
        if (this.stdTaskList.length == 0) {
            this.getStdTaskList();
        }
    };
    CreateTaskComponent.prototype._cancelCT = function () {
        this.addedTask.emit({ addedTask: false });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CreateTaskComponent.prototype, "selectedDateForCT", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CreateTaskComponent.prototype, "timeEntryDetailData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CreateTaskComponent.prototype, "isPayrollToBeFilledZeroHours", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CreateTaskComponent.prototype, "addedTask", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CreateTaskComponent.prototype, "allocationMessageChatBot", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CreateTaskComponent.prototype, "scrollToBottom", void 0);
    CreateTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'create-task',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\create-task\create-task.html"*/'<div class="margin10-16"*ngIf="projectList.length > 0">\n    <ion-segment [(ngModel)]="data.task">\n        <ion-segment-button value="project" [class.hide]="hideProjectTask">\n            Project Task\n        </ion-segment-button>\n        <ion-segment-button value="standard" (click)="getStdTasksData()">\n            Standard Task\n        </ion-segment-button>\n    </ion-segment>\n\n    <div [ngSwitch]="data?.task">\n        <div class="project-CT task-cont" *ngSwitchCase="\'project\'">\n            <project-task [projectData]="data?.projectListForProjectTask" [selectedDate]="currentDate"\n                (selectedTaskData)="addTask($event)" [type]="data?.type">\n            </project-task>\n            <div class="cancel-ct">\n                <button ion-button round (click)="_cancelCT()"> Cancel </button>\n            </div>\n        </div>\n        <div class="std-task task-cont" *ngSwitchCase="\'standard\'">\n            <form [formGroup]="standardForm" (ngSubmit)="onSubmit(standardForm)">\n                 <ion-list>\n                    <ion-item no-lines class="borderColor mb-5n">\n                        <ion-select formControlName="stdProjectId" placeholder="Select Project" interface="action-sheet"\n                            (ionChange)="onStdProjSelect($event)">\n                            <ion-option *ngFor="let item of projectList" [value]="item.projectId">{{item.projectName}}\n                            </ion-option>\n                        </ion-select>\n                    </ion-item>\n                    <span class="error-msg" *ngIf="standardForm.controls.stdProjectId.errors  && submitted">\n                        <p>* Please select Project Name.</p>\n                    </span>\n                      \n                    <ion-grid no-padding class="stdTaskOption">\n                        <ion-row>\n                            <ion-col col-11>\n                                <ion-item no-lines class="stdInput">\n                                    <ion-input [readonly]="true" formControlName="stdTaskName" type="text"\n                                        placeholder="Select Standard Task"\n                                        [disabled]="standardForm.controls.stdTaskName.disabled"\n                                        (click)="openStdTaskListModal()"></ion-input>\n                                </ion-item>\n                            </ion-col>\n                            <ion-col col-1 class="down-arrow" (click)="openStdTaskListModal()"\n                                [ngStyle]="{\'opacity\': selProjectObj ? 1 : 0.5}">\n                                <ion-icon name="arrow-dropdown"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                    <span class="error-msg" *ngIf="standardForm.controls.stdTaskName.errors  && submitted">\n                        <p>* Please select Task Name.</p>\n                    </span>\n\n                    <ion-item no-lines class="borderColor margin-top12">\n                        <ion-select formControlName="stdBillabilityName" placeholder="Select Billability"\n                            interface="action-sheet" (ionChange)="onBillabilityChange($event)">\n                            <ion-option [value]="billability.value" *ngFor="let billability of billabilityList">\n                                {{billability.name}}</ion-option>\n                        </ion-select>\n                    </ion-item>\n                    <span class="error-msg" *ngIf="standardForm.controls.stdBillabilityName.errors  && submitted">\n                        <p>* Please select Billability Name.</p>\n                    </span>\n\n                    <div class="justify-content-space-btw">\n                        <!-- [ngClass]="{\'w-48\': hideProjectTask}" -->\n                        <ion-item no-lines class=" borderColor margin-top12 w-48">\n                            <ion-datetime #dateTime displayFormat="HH:mm" minuteValues="00,15,30,45" formControlName="stdTime">\n                            </ion-datetime>\n                        </ion-item>\n                        <!-- [class.hide]="!hideProjectTask" -->\n                        <ion-item no-lines class="std-date borderColor margin-top12 w-48">\n                            <ion-label class="margin10">{{ currentDate}}</ion-label>\n                        </ion-item>\n                    </div>\n\n                    <span class="error-msg"\n                        *ngIf="standardForm.controls.stdTime.errors && standardForm.controls.stdTime.errors.min && submitted">\n                        <p>* Please select valid hours.</p>\n                    </span>\n\n                    <ion-item *ngIf="isFixedBidProject == \'YES\'" no-lines class="borderColor" margin-top>\n                        <ion-select placeholder="Select Milestone" formControlName="stdMilestone"\n                            interface="action-sheet" (ionChange)="onMilestoneChange($event)">\n                            <ion-option [value]="milestone" *ngFor="let milestone of milestoneList">\n                                {{milestone.milestoneName}}</ion-option>\n                        </ion-select>\n                    </ion-item>\n                    <span class="error-msg" *ngIf="standardForm.controls.stdMilestone.errors  && submitted">\n                        <p>* Please select Milestone Name.</p>\n                    </span>\n\n                    <ion-item no-lines class="borderColor margin-top12 stdRemarks">\n                        <ion-textarea (keypress)="utility.omit_special_char($event)" formControlName="stdRemarks"\n                            placeholder="Remarks" rows="4" cols="6"></ion-textarea>\n                    </ion-item>\n                    <span class="error-msg" *ngIf="standardForm.controls.stdRemarks.errors  && submitted">\n                        <p>* Please add remarks.</p>\n                    </span>\n                       \n                </ion-list>\n\n                <div class="submitBtn">\n                    <button ion-button round (click)="_cancelCT()"> Cancel </button>\n                    <button ion-button round type="submit"> Add Task</button>\n                </div>\n            </form>\n        </div>\n\n    </div>\n</div>\n'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\create-task\create-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["w" /* ModalController */]])
    ], CreateTaskComponent);
    return CreateTaskComponent;
}());

//# sourceMappingURL=create-task.js.map

/***/ }),

/***/ 1879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadMoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__read_more_popup_read_more_popup__ = __webpack_require__(805);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReadMoreComponent = /** @class */ (function () {
    function ReadMoreComponent(navCtrl, utility, modalController) {
        this.navCtrl = navCtrl;
        this.utility = utility;
        this.modalController = modalController;
        this.showToggle = true;
        this.moveToPage = false;
        this.actionName = '';
        this.updateProfile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.moveToPageAllow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.scrollToBottom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.truncateLength = 150;
        this.maxLength = this.truncateLength;
        this.showMoreSection = false;
        this.readMore = false;
    }
    ReadMoreComponent.prototype.ngOnInit = function () {
        if (this.desc) {
            var myString = this.urlify(this.desc);
            var truncatedString = myString.slice(0, 200);
            if (this.desc.length >= truncatedString.length) {
                var originalString = myString.slice(0, this.desc.length);
                if (originalString.length > truncatedString.length) {
                    this.showMoreSection = true;
                    this.readMore = true;
                    this.text = truncatedString + '...';
                }
                else {
                    this.showMoreSection = false;
                    this.text = truncatedString;
                }
            }
            else {
                this.showMoreSection = false;
                this.text = myString;
            }
        }
    };
    ReadMoreComponent.prototype.showMore = function (descLength) {
        var readMoreModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_3__read_more_popup_read_more_popup__["a" /* ReadMorePopup */], {
            desc: this.urlify(this.desc),
            UpdateProfileLinkData: this.UpdateProfileLinkData,
            actionName: this.actionName,
            parentIndex: this.parentIndex
        }, {
            showBackdrop: true,
            enableBackdropDismiss: true,
            cssClass: "read-more-modal"
        });
        readMoreModal.present();
        readMoreModal.onDidDismiss(function (move) {
        });
    };
    ReadMoreComponent.prototype.showLess = function (descLength) {
        this.readMore = true;
        this.maxLength = descLength;
        var myString = this.urlify(this.desc);
        var truncatedString = myString.slice(0, 200);
        this.text = truncatedString + '...';
    };
    ReadMoreComponent.prototype.toggleRead = function () {
        if (this.showMoreSection && this.showToggle) {
            if (this.readMore) {
                this.showMore(this.desc.length);
            }
            else {
                this.showLess(this.maxLength);
            }
        }
    };
    ReadMoreComponent.prototype.preventClick = function (event) {
        var tagName = event.srcElement.tagName;
        if (tagName === 'A') {
            event.stopPropagation();
        }
    };
    ReadMoreComponent.prototype.urlify = function (text) {
        if (text != undefined) {
            //;
            var newText = text.replace(/\n/g, "<br/>");
            var urlRegex = /(https?:\/\/[^\s]+)/g;
            return newText.replace(urlRegex, function (url) {
                // ;
                return '<a class="linkline">' + url + '</a>';
            });
        }
    };
    ReadMoreComponent.prototype.update = function (dataObj) {
        if (dataObj)
            this.updateProfile.emit(dataObj);
    };
    ReadMoreComponent.prototype._moveToPage = function () {
        this.moveToPageAllow.emit('moveToPage');
    };
    ReadMoreComponent.prototype.checkLink = function (data) {
        this.utility.consoleLog(data);
        var url = data.match(/\bhttps?:\/\/\S+/gi);
        this.utility.consoleLog(url);
        if (url && url[0]) {
            this.utility.consoleLog(url[0]);
            var urlValue = url[0].replace(/(<([^>]+)>)/ig, '');
            this.utility.consoleLog(urlValue);
            this.utility.openWithSystemBrowser(urlValue);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ReadMoreComponent.prototype, "desc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ReadMoreComponent.prototype, "showToggle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ReadMoreComponent.prototype, "UpdateProfileLinkData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ReadMoreComponent.prototype, "moveToPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ReadMoreComponent.prototype, "actionName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ReadMoreComponent.prototype, "parentIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ReadMoreComponent.prototype, "updateProfile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ReadMoreComponent.prototype, "moveToPageAllow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ReadMoreComponent.prototype, "scrollToBottom", void 0);
    ReadMoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'read-more',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\read-more\read-more.html"*/'<div class="chat-list suggestionItem queryContent" *ngIf="desc.length < 200">\n    <span *ngIf="actionName != \'successfactor.dialog\'" [innerHTML]="text|linky" (click)="checkLink(desc)"></span>\n\n    <div *ngIf="UpdateProfileLinkData?.showLink">\n        Click\n        <span class="updateProfileLink" (click)="update(UpdateProfileLinkData)">here</span>\n        to update now.\n    </div>\n\n    <div *ngIf="moveToPage && actionName ==\'zenTalent.createDAP\'">\n        Click <span class="updateProfileLink" (click)="_moveToPage()">here</span> to create\n        Development Action Plan\n    </div>\n\n    <div *ngIf="moveToPage && actionName ==\'zenTalent.ijp\'">\n        Click <span class="updateProfileLink" (click)="_moveToPage()">here</span> to apply\n        for IJP\n    </div>\n\n    <div *ngIf="moveToPage && actionName ==\'referral.referYourFriend.yes.bonusPolicy.yes\'">\n        Click <span class="updateProfileLink" (click)="_moveToPage()">here</span> to refer on\n        ZenRich\n    </div>\n\n    <div *ngIf="moveToPage && actionName ==\'referrals.FAQs\'">\n        Click <span class="updateProfileLink" (click)="_moveToPage()">here</span> for FAQs\n    </div>\n\n    <div *ngIf="moveToPage && actionName ==\'referral.createFriendsProfile\'">\n        Click <span class="updateProfileLink" (click)="_moveToPage()">here</span> to create friend\'s profile\n    </div>\n\n    <div *ngIf="moveToPage && actionName ==\'learning.technicalCalendar\'">\n        Click <span class="updateProfileLink" (click)="_moveToPage()">here</span> to view Technical Calendar\n    </div>\n\n    <div *ngIf="moveToPage && actionName ==\'learning.behaviouralCalendar\'">\n        Click <span class="updateProfileLink" (click)="_moveToPage()">here</span> to view Behavioural Calendar\n    </div>\n    <div *ngIf="moveToPage && actionName == \'successfactor.dialog\'">\n         <span class="updateProfileLink" (click)="_moveToPage()"> Click here for Dialog</span> \n    </div>\n    \n    <span *ngIf="showMoreSection && showToggle">\n        <span class="readMore" (click)="showMore(desc.length)" *ngIf="readMore">Show more</span>\n        <span class="readMore" (click)="showLess(150)" *ngIf="!readMore">Show less</span>\n    </span>\n</div>\n\n<div class="chat-list read-more-bubble" *ngIf="desc.length > 200">\n    <div class="queryContent read-queryContent" [innerHTML]="text|linky" (click)="checkLink(desc)"></div>\n    <div class="read-toogle" *ngIf="showMoreSection && showToggle">\n        <!-- <span class="readMore" (click)="showMore(desc)">Read More</span> -->\n\n        <span class="readMore" (click)="showMore(desc.length)" *ngIf="readMore">Read More</span>\n        <span class="readMore" (click)="showLess(150)" *ngIf="!readMore">Show less</span>\n    </div>\n</div>\n\n<!-- <p (click)="preventClick($event)" no-margin text-justify [innerHTML]="text | linky | emoji "></p> -->'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\read-more\read-more.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */]])
    ], ReadMoreComponent);
    return ReadMoreComponent;
}());

//# sourceMappingURL=read-more.js.map

/***/ }),

/***/ 1880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
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
 * Generated class for the TimesheetDataComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TimesheetDataComponent = /** @class */ (function () {
    function TimesheetDataComponent(utility, fb) {
        this.utility = utility;
        this.fb = fb;
        this.isPayrollToBeFilledZeroHours = false;
        this.onDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.refresh = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.setSuggestionList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.setIndexTOUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.setIndexTOUpdateSelDate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.editedData = {
            billability: null,
            billabilityName: 'Not Selected',
            efforts: "00:00",
            milestoneName: null,
            bapPaymentScheduleKey: null,
            defaultBillability: null
        };
        this.data = {
            taskName: null,
            editEfforts: false,
            iconName: null,
            taskId: null
        };
        this.billabilityList = [];
        this.milestoneMismatchFlag = false;
        this.efforts = {
            hourValues: [
                '00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
                '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
                '20', '21', '22', '23'
            ],
            minuteValues: [
                '00', '15', '30', '45'
            ]
        };
        this.selEfforts = {
            hour: '00',
            minute: '00'
        };
        this.showEditForm = false;
        this.isSubmitted = false;
        this.editTimesheetForm = this.fb.group({
            milestone: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            milestoneObj: [""],
            billability: [""],
            billabilityName: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            remarks: [""],
            hour: ["00"],
            minute: ["00"]
        });
    }
    TimesheetDataComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.taskData && !this.selData) {
            this.editedData.defaultBillability = this.timesheetData.billability;
            this.billabilityList = this.utility.checkBillability(this.timesheetData.billability);
            if (this.billabilityList.length == 1) {
                this.editedData.billability = this.billabilityList[0].value;
                this.editedData.billabilityName = this.billabilityList[0].name;
                //form billability
                this.editTimesheetForm.get('billability').setValue(this.billabilityList[0].value);
                this.editTimesheetForm.get('billabilityName').setValue(this.billabilityList[0].name);
            }
            else if (this.taskData.approvalStatus !== '0') {
                this.editedData.billability = this.taskData.billablityFlag;
                this.editedData.billabilityName = this.taskData.billablityFlag == 'YES' ? 'Billable' : 'Non-Billable';
                //form billability
                this.editTimesheetForm.get('billability').setValue(this.taskData.billablityFlag);
                this.editTimesheetForm.get('billabilityName').setValue(this.editedData.billabilityName);
            }
            if (this.taskData.callWaitingFlag == "YES") {
                this.data.editEfforts = true;
            }
            else {
                this.data.editEfforts = false;
            }
            this.editedData.efforts = this.utility.convertTime(this.taskData.totalEfforts, 2);
            this.getEffortsValue(this.editedData.efforts);
            this.data.taskName = this.utility.toCapitalize(this.taskData.taskName);
            this.data.iconName = this.getStatusIcon(this.taskData.approvalStatus);
            //Form checks
            if (this.taskData.callWaitingFlag == 'YES') {
                this.editTimesheetForm.get('hour').disable();
                this.editTimesheetForm.get('minute').disable();
                this.editTimesheetForm.get('remarks').setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required);
                this.editTimesheetForm.get('remarks').updateValueAndValidity();
            }
            else {
                this.editTimesheetForm.get('hour').enable();
                this.editTimesheetForm.get('minute').enable();
                this.editTimesheetForm.get('remarks').clearValidators();
                this.editTimesheetForm.get('remarks').updateValueAndValidity();
            }
            var efforts = this.editedData.efforts.split(':');
            this.editTimesheetForm.get('hour').setValue(efforts[0]);
            this.editTimesheetForm.get('minute').setValue(efforts[1]);
            this.editTimesheetForm.get('remarks').setValue(this.taskData.comments);
            //IF timesheet appproved already then disabled everything.
            if (this.taskData.approvalStatus == 1) {
                this.editTimesheetForm.get('hour').disable();
                this.editTimesheetForm.get('minute').disable();
                this.editTimesheetForm.get('milestone').disable();
                this.editTimesheetForm.get('billabilityName').disable();
                this.editTimesheetForm.get('remarks').disable();
            }
        }
        //show milestone name if the project is fixed bid project
        if (this.timesheetData && !this.selData) {
            if (this.timesheetData.isFixedBidProject == 'YES') {
                if (this.taskData && this.taskData.zenCoreMigrated && this.timesheetData.milestoneDetails && this.timesheetData.milestoneDetails.length > 0) {
                    var matchFlag_1 = false;
                    this.timesheetData.milestoneDetails.map(function (item) {
                        if (_this.taskData.bapPaymentScheduleKey == item.pdZenCoreMilestoneKey) {
                            matchFlag_1 = true;
                            _this.editedData.milestoneName = item.milestoneName;
                            _this.editedData.bapPaymentScheduleKey = item.currentBapPaymentScheduleKey;
                            //Form Milestone data set
                            _this.editTimesheetForm.get('milestoneObj').setValue(item);
                            _this.editTimesheetForm.get('milestone').setValue(item.milestoneName);
                            _this.editTimesheetForm.get('milestone').disable();
                        }
                    });
                    this.milestoneMismatchFlag = matchFlag_1 ? false : true;
                }
                else if (this.taskData && !this.taskData.zenCoreMigrated && this.timesheetData.milestoneDetails && this.timesheetData.milestoneDetails.length > 0) {
                    if (this.taskData.bapPaymentScheduleKey) {
                        this.timesheetData.milestoneDetails.map(function (obj) {
                            if (obj.bapPaymentScheduleKey == _this.taskData.bapPaymentScheduleKey) {
                                _this.editedData.milestoneName = obj.milestoneName;
                                _this.editedData.bapPaymentScheduleKey = obj.bapPaymentScheduleKey;
                                //Form Milestone data set
                                _this.editTimesheetForm.get('milestoneObj').setValue(obj);
                                _this.editTimesheetForm.get('milestone').setValue(obj.milestoneName);
                            }
                        });
                    }
                    else if (this.timesheetData.milestoneDetails && this.timesheetData.milestoneDetails.length >= 1) {
                        this.editedData.milestoneName = this.timesheetData.milestoneDetails[0].milestoneName;
                        this.editedData.bapPaymentScheduleKey = this.timesheetData.milestoneDetails[0].bapPaymentScheduleKey;
                        //Form Milestone data set
                        this.editTimesheetForm.get('milestoneObj').setValue(this.timesheetData.milestoneDetails[0]);
                        this.editTimesheetForm.get('milestone').setValue(this.timesheetData.milestoneDetails[0].milestoneName);
                    }
                }
            }
            else if (this.timesheetData.isFixedBidProject == 'NO') {
                this.editTimesheetForm.get('milestone').clearValidators();
            }
        }
        if (this.selData && (this.selData.taskId == this.taskData.taskId)) {
            if (this.selData.s_type == 'billability') {
                this.editedData.billability = this.selData.data.value;
                this.editedData.billabilityName = this.selData.data.name;
                this.onDataChange();
            }
            else if (this.selData.s_type == 'hour') {
                this.selEfforts.hour = this.selData.data;
                this.editedData.efforts = this.selEfforts.hour + ':' + this.selEfforts.minute;
                this.onDataChange();
            }
            else if (this.selData.s_type == 'minute') {
                this.selEfforts.minute = this.selData.data;
                this.editedData.efforts = this.selEfforts.hour + ':' + this.selEfforts.minute;
                this.onDataChange();
            }
            else if (this.selData.s_type == 'formBillability') {
                this.editTimesheetForm.get('billability').setValue(this.selData.data.value);
                this.editTimesheetForm.get('billabilityName').setValue(this.selData.data.name);
            }
            else if (this.selData.s_type == 'formHour') {
                this.editTimesheetForm.get('hour').setValue(this.selData.data);
            }
            else if (this.selData.s_type == 'formMinute') {
                this.editTimesheetForm.get('minute').setValue(this.selData.data);
            }
            else if (this.selData.s_type == 'formMilestone') {
                this.editTimesheetForm.get('milestoneObj').setValue(this.selData.data);
                this.editTimesheetForm.get('milestone').setValue(this.selData.data.milestoneName);
            }
        }
        if (this.updateStatus && this.updateStatus.date && this.updateStatus.status) {
            this.dateObj.status = this.dateObj.date == this.updateStatus.date ? this.updateStatus.status : this.dateObj.status;
        }
    };
    TimesheetDataComponent.prototype.dateSelected = function (chatListIndexForDate, dateIndex) {
        var data = {
            chatListIndexForDateToUpdate: chatListIndexForDate,
            dateIndexToUpdate: dateIndex
        };
        this.setIndexTOUpdateSelDate.emit(data);
        this.onDateChange.emit();
    };
    TimesheetDataComponent.prototype.onDataChange = function () {
        var _this = this;
        this.selData = null;
        if (this.milestoneMismatchFlag) {
            this.utility.presentAlert("Your allocation on milestone for " + this.timesheetData.title + " and task assignment on milestone for same project in ZenCORE is not matching.Kindly contact your project manager.");
            this.refresh.emit();
        }
        else if (this.taskData.approvalStatus == '3' && this.taskData.tsRejected && !this.taskData.comments) {
            this.utility.presentAlert('Please add remarks').then(function () {
                _this.refresh.emit();
            });
        }
        else if (!this.data.editEfforts && !this.isPayrollToBeFilledZeroHours && this.editedData.efforts == '00:00') {
            this.utility.presentAlert('Please select valid hours').then(function () {
                _this.refresh.emit();
            });
        }
        else if (this.isPayrollToBeFilledZeroHours && this.editedData.efforts == '00:00' && !this.taskData.comments) {
            this.utility.presentAlert('Please add remarks').then(function () {
                _this.refresh.emit();
            });
        }
        else {
            this.edit.emit(this.editedData);
        }
    };
    /**
    * Returns icon name as per the status
    * @param status
    */
    TimesheetDataComponent.prototype.getStatusIcon = function (status) {
        switch (status) {
            case '0': return 'ts-task-icon';
            case '-1': return 'ts-saved-icon';
            case '2': return 'ts-submitted-icon';
            case '3': return 'ts-rejected-icon';
            case '1': return 'ts-approved-icon';
            default: return 'ts-task-icon';
        }
    };
    TimesheetDataComponent.prototype.setList = function (dataList, type, selValue) {
        if ((type == 'hour' || type == 'minute' || type == 'formHour' || type == 'formMinute') && (this.isTimesheetEditable == 'NO' || this.data.editEfforts)) {
            return false;
        }
        if ((type == 'billability' || type == 'formBillability') && this.isTimesheetEditable == 'NO') {
            return false;
        }
        if (type == 'formMilestone' && this.editTimesheetForm.get('milestone').disabled) {
            return false;
        }
        var data = {
            type: type,
            dataList: dataList,
            taskId: this.taskData.taskId,
            selValue: selValue ? selValue : null
        };
        this.setSuggestionList.emit(data);
    };
    TimesheetDataComponent.prototype.getEffortsValue = function (value) {
        this.selEfforts.hour = value.split(':')[0];
        this.selEfforts.minute = value.split(':')[1];
    };
    TimesheetDataComponent.prototype.openEditForm = function (chatListIndex, parentIndex, childIndex) {
        var index = {
            chatListIndexToUpdate: chatListIndex,
            parentIndexToUpdate: parentIndex,
            childIndexToUpdate: childIndex
        };
        this.setIndexTOUpdate.emit(index);
    };
    TimesheetDataComponent.prototype.onSubmit = function () {
        if (this.taskData.approvalStatus == '3' && this.taskData.tsRejected && !this.editTimesheetForm.get('remarks').value) {
            this.editTimesheetForm.get('remarks').setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required);
            this.editTimesheetForm.get('remarks').updateValueAndValidity();
        }
        else if (!(this.isPayrollToBeFilledZeroHours) && (this.editTimesheetForm.get('hour').value == '00' && this.editTimesheetForm.get('minute').value == '00')) {
            this.editTimesheetForm.get('hour').setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].min(1));
            this.editTimesheetForm.get('hour').updateValueAndValidity();
            this.editTimesheetForm.get('minute').setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].min(15));
            this.editTimesheetForm.get('minute').updateValueAndValidity();
        }
        else if (this.isPayrollToBeFilledZeroHours && this.editTimesheetForm.get('hour').value == '00' && this.editTimesheetForm.get('minute').value == '00' && !this.editTimesheetForm.get('remarks').value) {
            this.editTimesheetForm.get('remarks').setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required);
            this.editTimesheetForm.get('remarks').updateValueAndValidity();
        }
        else {
            this.editTimesheetForm.get('hour').clearValidators();
            this.editTimesheetForm.get('hour').updateValueAndValidity();
            this.editTimesheetForm.get('minute').clearValidators();
            this.editTimesheetForm.get('minute').updateValueAndValidity();
            this.editTimesheetForm.get('remarks').clearValidators();
            this.editTimesheetForm.get('remarks').updateValueAndValidity();
        }
        this.isSubmitted = true;
        if (!this.editTimesheetForm.valid) {
            return false;
        }
        else {
            var milestoneObj = this.editTimesheetForm.get('milestoneObj').value;
            var data = {
                billability: this.editTimesheetForm.get('billability').value,
                efforts: this.editTimesheetForm.get('hour').value + ':' + this.editTimesheetForm.get('minute').value,
                milestoneName: milestoneObj.milestoneName,
                bapPaymentScheduleKey: milestoneObj.currentBapPaymentScheduleKey,
                comments: this.editTimesheetForm.get('remarks').value
            };
            this.edit.emit(data);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimesheetDataComponent.prototype, "dateObj", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimesheetDataComponent.prototype, "timesheetData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimesheetDataComponent.prototype, "taskData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TimesheetDataComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TimesheetDataComponent.prototype, "isTimesheetEditable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], TimesheetDataComponent.prototype, "isPayrollToBeFilledZeroHours", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimesheetDataComponent.prototype, "selData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimesheetDataComponent.prototype, "childIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimesheetDataComponent.prototype, "parentIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimesheetDataComponent.prototype, "chatListIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimesheetDataComponent.prototype, "indexToToggleForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimesheetDataComponent.prototype, "updateStatus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimesheetDataComponent.prototype, "chatListIndexForDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimesheetDataComponent.prototype, "indexToShowDot", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimesheetDataComponent.prototype, "dateIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TimesheetDataComponent.prototype, "chatListLength", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TimesheetDataComponent.prototype, "onDateChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TimesheetDataComponent.prototype, "edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TimesheetDataComponent.prototype, "refresh", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TimesheetDataComponent.prototype, "setSuggestionList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TimesheetDataComponent.prototype, "setIndexTOUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TimesheetDataComponent.prototype, "setIndexTOUpdateSelDate", void 0);
    TimesheetDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timesheet-data',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\timesheet-data\timesheet-data.html"*/'<span class="ts-dates" *ngIf="type == \'date\'" (click)="dateSelected(chatListIndexForDate,dateIndex)">\n  <h6 no-margin>{{dateObj?.day | titlecase}}</h6>\n  <h4 no-margin [class.task]="dateObj.status == \'Pending\'" [class.saved]="dateObj.status == \'Saved\'" [class.approved]="dateObj.status == \'Approved\'"\n    [class.submitted]="dateObj.status == \'Submitted\'" [class.rejected]="dateObj.status == \'Rejected\'">{{dateObj?.date |\n    date: \'d\'}}</h4>\n  <div [class.selected]="chatListIndexForDate == indexToShowDot?.chatListIndexForDateToUpdate && dateIndex == indexToShowDot?.dateIndexToUpdate"></div>\n  <!-- <div>{{dateObj.status}}</div>\n  ?.substring(0, 1) -->\n</span>\n\n<ion-card class="task-card" no-margin *ngIf="type == \'ttDetails\'">\n  <ion-row class="status">\n    <ion-col col-2>\n      <div class="image" [class.saved]="taskData.approvalStatus == \'-1\'" [class.approved]="taskData.approvalStatus == \'1\'"\n        [class.submitted]="taskData.approvalStatus == \'2\'" [class.rejected]="taskData.approvalStatus == \'3\'"\n        [class.task]="taskData.approvalStatus == \'0\'">\n        <img src="assets/zents-imgs/{{data?.iconName}}.svg"/>\n      </div>\n    </ion-col>\n    <ion-col col-8 text-left>\n      <span>Status: Task {{taskData.timesheetStatus}}</span>\n    </ion-col>\n    <ion-col col-2 text-right>\n      <button ion-button clear (click)="openEditForm(chatListIndex,parentIndex,childIndex)" \n      [ngStyle]="{\'opacity\':chatListIndex < chatListLength - 1 ? \'0.5\' : \'1\'}">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-grid [ngStyle]="{\'display\': chatListIndex == indexToToggleForm?.chatListIndexToUpdate && parentIndex == indexToToggleForm?.parentIndexToUpdate && childIndex == indexToToggleForm?.childIndexToUpdate ? \'none\' : \'block\'}">\n    <p text-left>{{data?.taskName}}</p>\n    <ion-row class="border-top" *ngIf="timesheetData.isFixedBidProject == \'YES\'">\n      <ion-col col-4 text-left>\n        <strong>Milestone:</strong>\n      </ion-col>\n      <ion-col class="milestone" col-8 text-left>\n        {{editedData.milestoneName}}\n      </ion-col>\n    </ion-row>\n    <ion-row class="border-bottom border-top">\n      <ion-col col-4 text-left>\n        <strong>Efforts:</strong>\n      </ion-col>\n      <ion-col text-left>\n        <!-- <ion-datetime no-padding [disabled]="taskData?.approvalStatus == \'1\' || isTimesheetEditable == \'NO\' || data?.editEfforts"\n          displayFormat="HH:mm" pickerFormat="HH:mm" [(ngModel)]="editedData.efforts" minuteValues="00,15,30,45"\n          (ionChange)="onEffortsChange($event)"></ion-datetime> -->\n        <ion-row>\n          <ion-col col-6 (click)="setList(efforts.hourValues,\'hour\',selEfforts.hour)">\n            <span [ngStyle]="{\'opacity\':(chatListIndex < chatListLength - 1) || this.isTimesheetEditable == \'NO\' || this.data.editEfforts ? \'0.5\' : \'1\'}">{{selEfforts.hour}} Hrs</span>\n          </ion-col>\n          <ion-col col-6 (click)="setList(efforts.minuteValues,\'minute\',selEfforts.minute)">\n            <span [ngStyle]="{\'opacity\':(chatListIndex < chatListLength - 1) || this.isTimesheetEditable == \'NO\' || this.data.editEfforts ? \'0.5\' : \'1\'}">{{selEfforts.minute}} mins</span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="margin-top-bottom5" col-4 text-left>\n        <strong>Billability:</strong>\n      </ion-col>\n      <ion-col class="margin-top-bottom5" text-left>\n        <!-- <ion-select no-padding [disabled]="taskData?.approvalStatus == \'1\' || isTimesheetEditable == \'NO\'" interface="alert"\n            placeholder="Select Billability" cancelText="Cancel" okText="Save" [(ngModel)]="editedData.billability"\n            (ionChange)="onBillabilityChange($event)">\n            <ion-option *ngFor="let b of billabilityList" [value]="b.value">{{b.name}}</ion-option>\n          </ion-select> -->\n        <button [disabled]="isTimesheetEditable == \'NO\'" (click)="setList(billabilityList,\'billability\',editedData.billability)"\n        [ngStyle]="{\'color\':chatListIndex < chatListLength - 1 ? \'#888888\' : \'#000000\'}">{{editedData.billabilityName}}</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <form [formGroup]="editTimesheetForm" class="ts-edit-form" *ngIf="chatListIndex == indexToToggleForm?.chatListIndexToUpdate && parentIndex == indexToToggleForm?.parentIndexToUpdate && childIndex == indexToToggleForm?.childIndexToUpdate"\n    (ngSubmit)="onSubmit()">\n    <ion-list>\n      <div no-padding class="first-item efforts">\n        <div class="d-flex">\n          <ion-label stacked>Task</ion-label>\n        </div>\n        <div class="division">\n          <ion-input type="text" [value]="data?.taskName" [readonly]="true"></ion-input>\n        </div>\n      </div>\n      <div no-padding class="efforts" *ngIf="timesheetData.isFixedBidProject == \'YES\'">\n        <ion-label stacked>Milestone</ion-label>\n        <div class="division" (click)="setList(timesheetData.milestoneDetails,\'formMilestone\',editTimesheetForm.controls.milestoneObj.value)">\n          <ion-input formControlName="milestone" type="text" [readonly]="true"></ion-input>\n          <img src="assets/imgs/chat/down-arrow.png" [ngStyle]="{\'opacity\': editTimesheetForm.controls.milestone.disabled ? \'0.4\' : \'1\'}">\n        </div>\n      </div>\n      <span class="error-msg" *ngIf="timesheetData.isFixedBidProject == \'YES\' && isSubmitted && editTimesheetForm.controls.milestone.errors">\n        <p>* Milestone is required.</p>\n      </span>\n\n      <div no-padding class="efforts">\n        <ion-label stacked>Efforts</ion-label>\n        <div class="division">\n          <div (click)="setList(efforts.hourValues,\'formHour\',editTimesheetForm.controls.hour.value)">\n            <ion-input formControlName="hour" type="text" [readonly]="true"></ion-input>\n            <span class="hour">Hours</span>\n            <img src="assets/imgs/chat/down-arrow.png">\n          </div>\n          <div (click)="setList(efforts.minuteValues,\'formMinute\',editTimesheetForm.controls.minute.value)">\n            <ion-input formControlName="minute" type="text" [readonly]="true"></ion-input>\n            <span class="min">Mins</span>\n            <img src="assets/imgs/chat/down-arrow.png">\n          </div>\n        </div>\n      </div>\n      <span class="error-msg" *ngIf="isSubmitted && editTimesheetForm.controls.hour.errors && editTimesheetForm.controls.hour.errors.min && editTimesheetForm.controls.minute.errors && editTimesheetForm.controls.minute.errors.min">\n        <p>* Please select valid hours.</p>\n      </span>\n\n      <div class="efforts" no-padding>\n        <ion-label stacked>Billability</ion-label>\n        <div class="division" (click)="setList(billabilityList,\'formBillability\',editTimesheetForm.controls.billability.value)">\n          <ion-input type="text" formControlName="billabilityName" [readonly]="true"></ion-input>\n          <img src="assets/imgs/chat/down-arrow.png">\n        </div>\n      </div>\n      <span class="error-msg" *ngIf="isSubmitted && editTimesheetForm.controls.billabilityName.errors">\n        <p>* Billability is required.</p>\n      </span>\n\n      <ion-item class="comments" no-padding (click)="setList(\'\',\'comments\')">\n        <ion-label stacked>Comments</ion-label>\n        <ion-textarea (keypress)="utility.omit_special_char($event)" rows="2" cols="20" formControlName="remarks"></ion-textarea>\n      </ion-item>\n      <span class="error-msg" *ngIf="isSubmitted && editTimesheetForm.controls.remarks.errors">\n        <p>* Remarks is required.</p>\n      </span>\n\n      <div class="saveBtn">\n        <button ion-button round small type="submit">Save Task</button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-card>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\timesheet-data\timesheet-data.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], TimesheetDataComponent);
    return TimesheetDataComponent;
}());

//# sourceMappingURL=timesheet-data.js.map

/***/ }),

/***/ 1881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferralComponent; });
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




/**
 * Generated class for the ReferralComponent component.
 */
var ReferralComponent = /** @class */ (function () {
    function ReferralComponent(httpProvider, utilities, modalCtrl) {
        this.httpProvider = httpProvider;
        this.utilities = utilities;
        this.modalCtrl = modalCtrl;
        this.moreReferralFlag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.scrollToBottom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showMore = true;
        this.selectedSrfNo = null;
        this.slidePerView = "1";
        this.showError = false;
        this.showMoreReferral = true;
        this.start = 0;
        this.end = 5;
        this.index = null;
    }
    ReferralComponent.prototype.ngOnInit = function () {
        if (this.dataOnly == "false")
            this._getReferralList();
        else {
            this.showError = false;
            this.referralData = this.refferalDetails;
            if (this.refferalDetails) {
                this.selectedSrfNo = this.refferalDetails[0].srfNo;
                if (this.referralData.length > 0)
                    this.slidePerView = "1.2";
            }
        }
    };
    ReferralComponent.prototype._getReferralList = function () {
        var _this = this;
        this.utilities.updateLoader(true);
        var data = {
            url: this.refferalDetails.restApi,
            data: {
                "searchKey": "",
                "start": 0,
                "type": "MY_REFERRALS",
                "end": 10,
            },
            zenRich: true
        };
        this.httpProvider.http.commonService(data).subscribe(function (response) {
            _this.utilities.consoleLog(response);
            if (!_this.utilities.isEmptyOrNullOrUndefined(response.details)) {
                if (!_this.utilities.isEmptyOrNullOrUndefined(response.details.requestData)) {
                    _this.referralData = response.details.requestData;
                    if (_this.referralData.length > 0) {
                        _this.slidePerView = "1.2";
                    }
                    if (!_this.showMoreReferral) {
                        _this.start = 0;
                        _this.end = _this.referralData.length;
                    }
                    _this.selectedSrfNo = _this.referralData[0].srfNo;
                }
                else {
                    _this.showError = true;
                }
                _this.utilities.updateLoader(false);
            }
            _this.scrollToBottom.emit();
        }, function (error) {
            _this.utilities.updateLoader(false);
        });
    };
    ReferralComponent.prototype.ngOnChanges = function (changes) {
        if (!this.utilities.isEmptyOrNullOrUndefined(changes.refferalDetails.currentValue)) {
            if (!this.utilities.isEmptyOrNullOrUndefined(changes.refferalDetails.currentValue.parameters))
                if (changes.refferalDetails.currentValue.parameters.endDate && changes.refferalDetails.currentValue.parameters.startDate) {
                    this.showMoreReferral = false;
                }
        }
        if (changes.refferalDetails && this.dataOnly != "false") {
            this.referralData = changes.refferalDetails.currentValue;
            if (this.referralData) {
                if (this.referralData.length > 1) {
                    this.slidePerView = "1.2";
                    this.start = 0;
                    this.end = this.referralData.length;
                    this.selectedSrfNo = this.referralData[0].srfNo;
                }
                else {
                    this.slidePerView = "1";
                    this.selectedSrfNo = this.referralData[0].srfNo;
                    this.slides.slideTo(0, 500);
                }
            }
        }
    };
    ReferralComponent.prototype._showMore = function (srfNo, index) {
        console.log(index);
        this.index = index;
        this.selectedSrfNo = srfNo;
        this.showMore = !this.showMore;
    };
    ReferralComponent.prototype.moreReferral = function () {
        this.moreReferralFlag.emit('More Referral');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* Slides */])
    ], ReferralComponent.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ReferralComponent.prototype, "refferalDetails", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ReferralComponent.prototype, "dataOnly", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ReferralComponent.prototype, "moreReferralFlag", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ReferralComponent.prototype, "scrollToBottom", void 0);
    ReferralComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'referral-bot-component',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\referral-component\referral-component.html"*/'<div class="">\n\n    <ion-slides [slidesPerView]="slidePerView" class="padding5-0" (ionSlideWillChange)="_ionSlideWillChange()">\n\n        <ion-slide *ngFor="let item of referralData | slice:start:end; let i = index">\n\n            <ion-card>\n\n                <div class="grid-bot text-left referral-header">\n\n                    <div>\n\n                        <div class="padding5-0">Job ID\n\n                        </div>\n\n                        <div class="text-black">\n\n                            {{item?.srfNo}}\n\n                        </div>\n\n                    </div>\n\n                    <div *ngIf="item?.candidateStatus">\n\n                        <div class="padding5-0">Status\n\n                        </div>\n\n                        <div class="text-black">\n\n                            {{item?.candidateStatus}}\n\n                        </div>\n\n                    </div>\n\n\n\n                    <div *ngIf="item?.postedDate">\n\n                        <div class="padding5-0">PostedDate\n\n                        </div>\n\n                        <div class="text-black">\n\n                            {{item?.postedDate}}\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n\n\n                <div class=" text-left referral-detail">\n\n\n\n                    <ion-row *ngIf="item?.candidateName">\n\n                        <ion-col>\n\n                            <div>Referral</div>\n\n                            <div>\n\n                                {{item?.candidateName}}\n\n                                <span *ngIf="!item?.candidateName">N.A.</span>\n\n                            </div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row *ngIf="item?.jobTitle">\n\n                        <ion-col>\n\n                            <div>Job Title</div>\n\n                            <div>\n\n                                <details class="class-{{item.srfNo}} details-animated"\n\n                                    [ngClass]="{\'showMore\': item?.jobTitle.length > 10 }">\n\n                                    <summary>\n\n                                        <p [innerHTML]="item?.jobTitle?.substr(0,10)"></p><span\n\n                                            *ngIf="item?.jobTitle.length > 10">...</span>\n\n                                    </summary>\n\n                                    <p [innerHTML]=" item?.jobTitle?.substr(10)"></p>\n\n                                </details>\n\n                            </div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row *ngIf="item?.referredDate">\n\n                        <ion-col>\n\n                            <div>Referred Date</div>\n\n                            <div>{{item?.referredDate | date:\'d MMM y\'}}<span *ngIf="!item?.referredDate">N.A.</span>\n\n                            </div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row *ngIf="item?.skills">\n\n                        <ion-col>\n\n                            <div>Skills\n\n                            </div>\n\n                            <div>\n\n                                <p *ngIf="showMore"\n\n                                    [innerHtml]="item?.skills.length > 10 ? item?.skills?.substr(0,10)+\'...\':item?.skills">\n\n                                </p>\n\n                                <p *ngIf="!showMore" [innerHtml]="item?.skills"></p>\n\n                                <span class="more-less" *ngIf="showMore && item?.skills.length > 10"\n\n                                    (click)="_showMore(item?.srfNo)">More</span>\n\n                                <span class="more-less" *ngIf="!showMore && item?.skills.length > 10"\n\n                                    (click)="_showMore(item?.srfNo)">Less</span>\n\n                                <span *ngIf="!item?.skills">N.A.</span>\n\n                            </div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row *ngIf="item?.experience">\n\n                        <ion-col>\n\n                            <div>Experience</div>\n\n                            <div>{{item?.experience}}<span *ngIf="!item?.experience">N.A.</span>\n\n                            </div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row *ngIf="item?.location">\n\n                        <ion-col>\n\n                            <div>Location</div>\n\n                            <div>{{item?.location}}<span *ngIf="!item?.location">N.A.</span>\n\n                            </div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </div>\n\n            </ion-card>\n\n        </ion-slide>\n\n    </ion-slides>\n\n\n\n    <div *ngIf="referralData?.length > 5 && dataOnly==\'false\' && showMoreReferral" class="text-wrapper more-refer"\n\n        (click)="moreReferral()">More Referral</div>\n\n\n\n    <div *ngIf="showError" class="text-wrapper">No Data Available</div>\n\n</div>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\referral-component\referral-component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */]])
    ], ReferralComponent);
    return ReferralComponent;
}());

//# sourceMappingURL=referral-component.js.map

/***/ }),

/***/ 1882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchingProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
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
 * Generated class for the ReferralComponent component.
 */
var MatchingProfileComponent = /** @class */ (function () {
    function MatchingProfileComponent(httpProvider, utilities) {
        this.httpProvider = httpProvider;
        this.utilities = utilities;
        this.candidateProfileId = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.moveToPageAllow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.scrollToBottom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.referralList = null;
        this.referralData = null;
        this.noJobsAvailable = '';
    }
    MatchingProfileComponent.prototype.ngOnInit = function () {
        this._getMatchingProfile();
    };
    MatchingProfileComponent.prototype._getMatchingProfile = function () {
        var _this = this;
        this.utilities.updateLoader(true);
        var data = {
            url: this.matchingProfile.restApi.split(",")[0],
            data: {
                "searchKey": "",
                "start": 0,
                "type": "SAVED_PROFILES",
                "end": 10,
            },
            zenRich: true
        };
        this.httpProvider.http.commonService(data).subscribe(function (response) {
            _this.utilities.consoleLog(response);
            if (response.details) {
                _this.referralList = response.details.requestData;
                _this.scrollToBottom.emit();
                _this.errorMsg = 'No Data Available';
                _this.utilities.updateLoader(false);
            }
        }, function (error) {
            _this.utilities.updateLoader(false);
        });
    };
    MatchingProfileComponent.prototype._getCandidateProfileId = function (candidateProfile) {
        var _this = this;
        this.utilities.updateLoader(true);
        var data = {
            url: this.matchingProfile.restApi.split(",")[1],
            data: {
                "candidateProfileId": candidateProfile.candidateProfileId,
                "type": "MATCHING_JOBS",
                "start": 0,
                "end": 10
            },
            zenRich: true
        };
        this.httpProvider.http.commonService(data).subscribe(function (response) {
            _this.utilities.consoleLog(response);
            if (response.details) {
                _this.noJobsAvailable = candidateProfile.jobMatch;
                _this.scrollToBottom.emit();
                _this.referralData = response.details[0].value;
                _this.utilities.updateLoader(false);
            }
        }, function (error) {
            _this.utilities.updateLoader(false);
        });
    };
    MatchingProfileComponent.prototype._getReferralList = function () {
    };
    MatchingProfileComponent.prototype._moveToPage = function () {
        this.moveToPageAllow.emit('moveToPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MatchingProfileComponent.prototype, "matchingProfile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], MatchingProfileComponent.prototype, "candidateProfileId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], MatchingProfileComponent.prototype, "moveToPageAllow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], MatchingProfileComponent.prototype, "scrollToBottom", void 0);
    MatchingProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'matching-profile',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\matching-profile\matching-profile.html"*/'<div *ngFor="let item of referralList">\n\n    <ion-row class="chat-bg width90" (click)="_getCandidateProfileId(item)">\n\n        <ion-col col-5 class="align-cont-cent">\n\n            <div><img class="img30" [src]="item?.profileIcon" /></div>\n\n            <div>{{item?.candidateName}}</div>\n\n        </ion-col>\n\n        <ion-col col-7 class="align-cont-cent">\n\n            <div><img class="img30" [src]="item?.jobMatchIcon" /></div>\n\n            <div>{{item?.jobMatch}}</div>\n\n        </ion-col>\n\n    </ion-row>\n\n</div>\n\n<div class="text-wrapper" *ngIf="noJobsAvailable.slice(0,2) == \'No\'">No job matches this profile </div>\n\n<div *ngIf="referralList == null" class="text-wrapper">{{errorMsg}}</div>\n\n<referral-bot-component [refferalDetails]="referralData" [dataOnly]="\'true\'"></referral-bot-component>\n\n<div class="text-wrapper" *ngIf="referralData">\n\n    Click <span class="updateProfileLink" (click)="_moveToPage()">here</span> to refer now.\n\n</div>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\matching-profile\matching-profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], MatchingProfileComponent);
    return MatchingProfileComponent;
}());

//# sourceMappingURL=matching-profile.js.map

/***/ }),

/***/ 1883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectSuggestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_emp_contact_list_model_emp_contact_list_model__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the SelectSuggestionComponent component.
 */
var SelectSuggestionComponent = /** @class */ (function () {
    function SelectSuggestionComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.suggestionList = [];
        this.type = null;
        this.setSuggestion = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SelectSuggestionComponent.prototype.selectedSuggestion = function (obj) {
        this.setSuggestion.emit(obj);
    };
    SelectSuggestionComponent.prototype.ngOnChanges = function () {
    };
    SelectSuggestionComponent.prototype.openModal = function () {
        var _this = this;
        var title = this.getTitle(this.type);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__components_emp_contact_list_model_emp_contact_list_model__["a" /* EmpContactListModelComponent */], {
            data: this.suggestionList,
            title: title,
            selectedValue: this.selectedValue
        }, {
            cssClass: 'listModal',
        });
        modal.present();
        modal.onDidDismiss(function (res) {
            if (res) {
                _this.selectedSuggestion(res);
            }
        });
    };
    SelectSuggestionComponent.prototype.getTitle = function (type) {
        switch (type) {
            case 'hour':
                {
                    return 'Hour';
                }
            case 'formHour':
                {
                    return 'Hour';
                }
            case 'formMilestone':
                {
                    return 'Milestone';
                }
            default:
                return;
        }
    };
    SelectSuggestionComponent.prototype.matchMilestone = function (selMilestone, milestoneObj) {
        return JSON.stringify(selMilestone) === JSON.stringify(milestoneObj);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], SelectSuggestionComponent.prototype, "suggestionList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SelectSuggestionComponent.prototype, "selectedValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SelectSuggestionComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SelectSuggestionComponent.prototype, "setSuggestion", void 0);
    SelectSuggestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'select-suggestion',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\select-suggestion\select-suggestion.html"*/'<ion-slides slidesPerView="2" spaceBetween="5px" *ngIf="type == \'billability\' || type == \'formBillability\'">\n  <ion-slide *ngFor="let suggestion of suggestionList" (click)="selectedSuggestion(suggestion)">\n    <span [ngStyle]="{\'color\': selectedValue == suggestion.value ? \'#0EA2C8\' : \'black\' }">{{suggestion.name}}</span>\n  </ion-slide>\n</ion-slides>\n\n<ion-slides slidesPerView="2.5" spaceBetween="5px" *ngIf="type == \'formMilestone\'">\n  <ion-slide *ngFor="let suggestion of suggestionList | slice:0:2" (click)="selectedSuggestion(suggestion)">\n    <span [ngStyle]="{\'color\': matchMilestone(selectedValue,suggestion) ? \'#0EA2C8\' : \'black\' }">{{suggestion.milestoneName}}</span>\n  </ion-slide>\n  <button class="moreBtn" (click)="openModal()" *ngIf="suggestionList?.length > 2">More</button>\n</ion-slides>\n\n<ion-slides slidesPerView="5.5" spaceBetween="5px" *ngIf="type == \'hour\' || type == \'formHour\'">\n  <ion-slide *ngFor="let suggestion of suggestionList  | slice:6:11" (click)="selectedSuggestion(suggestion)">\n    <span [ngStyle]="{\'color\': selectedValue == suggestion ? \'#0EA2C8\' : \'black\' }">{{suggestion}}</span>\n  </ion-slide>\n  <ion-slide class="moreBtn" *ngIf="suggestionList.length > 0 && (type == \'hour\' || type == \'formHour\')">\n    <button (click)="openModal()">more</button>\n  </ion-slide>\n</ion-slides>\n\n<ion-slides slidesPerView="4" spaceBetween="5px" *ngIf="type == \'minute\'|| type == \'formMinute\'">\n  <ion-slide *ngFor="let suggestion of suggestionList" (click)="selectedSuggestion(suggestion)">\n    <span [ngStyle]="{\'color\': selectedValue == suggestion ? \'#0EA2C8\' : \'black\' }">{{suggestion}}</span>\n  </ion-slide>\n</ion-slides>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\select-suggestion\select-suggestion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ModalController */]])
    ], SelectSuggestionComponent);
    return SelectSuggestionComponent;
}());

//# sourceMappingURL=select-suggestion.js.map

/***/ }),

/***/ 1884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_screenshot_ngx__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_getterSetter_getterSetter__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container_chat_bot_new_chat_bot_new_services_chat_bot_new_services__ = __webpack_require__(1469);
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
 * Generated class for the CreateTaskComponent component.
 */
var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(chatBotServices, screenshot, popoverCtrl, navCtrl, getterSetter) {
        this.chatBotServices = chatBotServices;
        this.screenshot = screenshot;
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.getterSetter = getterSetter;
        this.sendNegativeFeedback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.submitFeedback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tts = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.scrollToBottom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.feedbackMessage = "Helpful ?";
    }
    FeedbackComponent.prototype.ngOnInit = function () {
    };
    FeedbackComponent.prototype.ngOnChanges = function (changes) {
        if (changes.showQueryBox.currentValue)
            this.scrollToBottom.emit();
    };
    FeedbackComponent.prototype._sendNegativeFeedback = function (chatListItem, negativeFeedbackMessage) {
        var _this = this;
        if (negativeFeedbackMessage) {
            if (chatListItem.actionName == 'investment' || chatListItem.actionName == 'salary_discrepency' || chatListItem.actionName == 'pf_faq_yes' || chatListItem.actionName == 'pf_faq' || chatListItem.actionName == 'visaPolicy' || chatListItem.actionName == 'salaryLetter') {
                var params = {
                    "actionName": chatListItem.actionName,
                    "body": negativeFeedbackMessage,
                    "actionId": this.currentActionId
                };
                var url = chatListItem.restApi;
                var serviceParams = {
                    url: url,
                    data: {
                        params: params,
                    },
                    payrollQuery: true
                };
                this.getterSetter.setUserChatListData(this.chatList);
                this.chatBotServices._payRollServiceDetails(serviceParams).then(function (response) {
                    _this.sendNegativeFeedback.emit({ chatList: response.data });
                });
                this.negativeFeedbackMessage = '';
            }
            else {
                var queryId = void 0;
                if (!chatListItem.queryId) {
                    queryId = this.currentQueryId;
                }
                else {
                    queryId = chatListItem.queryId;
                }
                var params = {
                    "userId": this.userDetails.userId,
                    "queryId": queryId,
                    "feedbackValue": -1,
                    "feedbackComment": negativeFeedbackMessage,
                    "actionId": this.currentActionId
                };
                var serviceParams = {
                    url: "",
                    data: {
                        params: params,
                    },
                    chatBotFeedback: true
                };
                this.getterSetter.setUserChatListData(this.chatList);
                this.chatBotServices._submitFeedBack(serviceParams).then(function (response) {
                    _this.sendNegativeFeedback.emit({ chatList: response.data });
                });
                this.negativeFeedbackMessage = '';
            }
        }
        this.scrollToBottom.emit();
    };
    FeedbackComponent.prototype._submitFeedback = function (flag, chatListItem, myevent) {
        var _this = this;
        this.tts.emit();
        var queryId;
        if (!chatListItem.queryId) {
            queryId = this.currentQueryId;
        }
        else {
            queryId = chatListItem.queryId;
        }
        if (flag == 'Positive') {
            var params = {
                "userId": this.userDetails.userId,
                "queryId": queryId,
                "feedbackValue": 1,
                "feedbackComment": "",
                "actionId": this.currentActionId
            };
            var serviceParams = {
                url: "",
                data: {
                    params: params,
                },
                chatBotFeedback: true
            };
            this.getterSetter.setUserChatListData(this.chatList);
            this.chatBotServices._submitFeedBack(serviceParams).then(function (response) {
                _this.submitFeedback.emit({ chatList: response.data });
            });
        }
        else if (flag == 'Negative') {
            var popover = this.popoverCtrl.create('PopoverPage', { 'type': 'chatBot' });
            popover.present({ ev: myevent });
            popover.onDidDismiss(function (data) {
                if (data == 'askquestion') {
                    chatListItem.negativeFeedback = false;
                    _this.screenshot.save('png', 80, queryId.toString()).then(function (response) {
                        if (response) {
                            _this.navCtrl.push('PostQuestionPage', {
                                "screenShotPath": {
                                    queryId: queryId,
                                    userId: _this.userDetails.userId,
                                    screenshot: response
                                }
                            });
                        }
                    }, function (error) {
                    });
                }
                else if (data == 'feedback') {
                    _this.showQueryBox = true;
                    chatListItem.negativeFeedback = !chatListItem.negativeFeedback;
                    _this.scrollToBottom.emit();
                }
            });
        }
    };
    FeedbackComponent.prototype._cancel = function () {
        this.showQueryBox = false;
        this.cancel.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FeedbackComponent.prototype, "feedbackDetails", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FeedbackComponent.prototype, "currentActionId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FeedbackComponent.prototype, "currentQueryId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FeedbackComponent.prototype, "chatList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FeedbackComponent.prototype, "userDetails", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FeedbackComponent.prototype, "queryListenFromFeedback", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FeedbackComponent.prototype, "showQueryBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FeedbackComponent.prototype, "sendNegativeFeedback", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FeedbackComponent.prototype, "submitFeedback", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FeedbackComponent.prototype, "tts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FeedbackComponent.prototype, "scrollToBottom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FeedbackComponent.prototype, "cancel", void 0);
    FeedbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'feedback-componenet',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\feedback-componenet\feedback-componenet.html"*/'<div class="feedbackTextarea slide-from-left-1"\n\n    *ngIf="(feedbackDetails?.actionName == \'salary_discrepency\' && feedbackDetails?.lifespan == 2 && showQueryBox) || (feedbackDetails?.actionName == \'pf_faq\' && feedbackDetails?.lifespan == 2 && showQueryBox) || (feedbackDetails?.actionName == \'investment\' && feedbackDetails?.lifespan == 2 && showQueryBox) || (feedbackDetails?.actionName == \'pf_faq_yes\' && feedbackDetails?.lifespan == 1 && showQueryBox) || (feedbackDetails?.actionName == \'salaryLetter\' && feedbackDetails?.lifespan == 2 && showQueryBox) || (feedbackDetails?.actionName == \'visaPolicy\' && feedbackDetails?.lifespan == 2 && showQueryBox)">\n\n    <textarea placeholder="Please provide your query" [(ngModel)]=\'queryListenFromFeedback\'></textarea>\n\n    <div class="display-flex justify-content-flex-end margin5">\n\n        <div class="cancel-button" (click)="_cancel()">Cancel</div>\n\n        <div class="send-button" (click)="_sendNegativeFeedback(feedbackDetails, queryListenFromFeedback)">Send Email\n\n        </div>\n\n    </div>\n\n</div>\n\n\n\n<div *ngIf="feedbackDetails?.lifespan == 1 && feedbackDetails?.actionName != \'getUserProfileParamsDetails\'"\n\n    class="horizontal-scroll align-cont-cent feedback slide-from-left-1">\n\n    <span class="fromBot margin-left5">{{feedbackMessage}}</span>\n\n    <img class="thum-icon" *ngIf="!flag" (click)="_submitFeedback(\'Positive\', feedbackDetails)"\n\n        src="./assets/imgs/chat/thumbs-up.svg" alt="thumns up">\n\n    <img class="thum-icon" *ngIf="!flag" (click)="_submitFeedback(\'Negative\', feedbackDetails, $event)"\n\n        src="./assets/imgs/chat/thumbs-down.svg" alt="thumns down">\n\n\n\n</div>\n\n\n\n<div class="feedbackTextarea slide-from-left-1"\n\n    *ngIf="feedbackDetails?.lifespan == 1 && feedbackDetails?.negativeFeedback && showQueryBox">\n\n    <textarea placeholder="Please provide your feedback" [(ngModel)]=\'negativeFeedbackMessage\'></textarea>\n\n    <div class="display-flex justify-content-flex-end margin5">\n\n        <div class="cancel-button" (click)="_cancel()">Cancel</div>\n\n        <div class="send-button" (click)="_sendNegativeFeedback(feedbackDetails, negativeFeedbackMessage)">Send Feedback\n\n        </div>\n\n    </div>\n\n</div>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\feedback-componenet\feedback-componenet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__container_chat_bot_new_chat_bot_new_services_chat_bot_new_services__["a" /* ChatBotServices */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_screenshot_ngx__["a" /* Screenshot */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_getterSetter_getterSetter__["a" /* GetterSetter */]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());

//# sourceMappingURL=feedback-componenet.js.map

/***/ }),

/***/ 1885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingTimesheetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_pending_timesheet_list_modal_pending_timesheet_list_modal__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_getterSetter_getterSetter__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_bot_new_services_chat_bot_new_services__ = __webpack_require__(1469);
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
 * Generated class for the CreateTaskComponent component.
 */
var PendingTimesheetComponent = /** @class */ (function () {
    function PendingTimesheetComponent(chatBotServices, modalCtrl, getterSetter) {
        this.chatBotServices = chatBotServices;
        this.modalCtrl = modalCtrl;
        this.getterSetter = getterSetter;
        this.sendDataToChatBotResponseSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PendingTimesheetComponent.prototype.ngOnInit = function () {
    };
    PendingTimesheetComponent.prototype._openPendingTimesheetListModal = function (list, parentIndex) {
        var _this = this;
        if (parentIndex == this.chatList.length - 1) {
            var pendingListModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__components_pending_timesheet_list_modal_pending_timesheet_list_modal__["a" /* PendingTimesheetListModalComponent */], {
                dataList: list,
                selectedList: this.chatList[this.chatList.length - 1].response.responseList.selectedPendingTimesheetList ? this.chatList[this.chatList.length - 1].response.responseList.selectedPendingTimesheetList : []
            }, {
                cssClass: 'pendingTimesheetListModal',
            });
            pendingListModal.present();
            pendingListModal.onDidDismiss(function (res) {
                if (res && res.length > 0) {
                    _this.chatList[_this.chatList.length - 1].response.responseList.selectedPendingTimesheetList = res;
                }
            });
        }
    };
    PendingTimesheetComponent.prototype._approveAllPendingTimesheets = function (responseList, parentIndex) {
        var _this = this;
        if (parentIndex == this.chatList.length - 1) {
            var showApproveText = responseList.selectedPendingTimesheetList && responseList.selectedPendingTimesheetList.length > 0 && responseList.selectedPendingTimesheetList.length !== responseList.pendingList.length ? "Approve Selected" : "Approve All";
            this.chatList.concat({ "from": "me", "query": showApproveText });
            this.getterSetter.setUserChatListData(this.chatList);
            this.chatBotServices._hrChatBotSetChatList({ "from": "me", "query": showApproveText }).then(function (response) {
                _this.chatList = response.data;
                _this.sendDataToChatBotResponseSuccess.emit({ chatList: _this.chatList });
            });
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
            var serviceParams = {
                url: url,
                data: {
                    params: params,
                    extraParams: extraParams
                },
                timesheet: true
            };
            this.getterSetter.setUserChatListData(this.chatList);
            this.chatBotServices._timeSheetService(serviceParams).then(function (response) {
                _this.chatList = response.data;
                _this.sendDataToChatBotResponseSuccess.emit({ chatList: _this.chatList });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PendingTimesheetComponent.prototype, "chatListItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PendingTimesheetComponent.prototype, "chatList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PendingTimesheetComponent.prototype, "timesheetRestApi", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PendingTimesheetComponent.prototype, "parentIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PendingTimesheetComponent.prototype, "sendDataToChatBotResponseSuccess", void 0);
    PendingTimesheetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pending-timesheet',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\pending-timesheet\pending-timesheet.html"*/'<div class="d-flex">\n\n    <span>Timesheets</span>\n\n    <div>\n\n        <strong><span\n\n                *ngIf="chatListItem?.response?.responseList?.selectedPendingTimesheetList?.length > 0">{{chatListItem?.response?.responseList?.selectedPendingTimesheetList?.length}}\n\n                / </span>{{chatListItem?.response?.responseList?.pendingList?.length}}</strong>\n\n        <button (click)="_openPendingTimesheetListModal(chatListItem?.response?.responseList?.pendingList,parentIndex)"\n\n            [disabled]="(parentIndex != (chatList?.length - 1) || chatListItem?.response?.responseList?.pendingList?.length == 0)">View</button>\n\n    </div>\n\n</div>\n\n<div class="message" *ngIf="chatListItem?.response?.responseList?.selectedPendingTimesheetList?.length > 0">\n\n    Do\n\n    you want to approve all selected timesheets?</div>\n\n<button class="approveAllBtn" ion-button round small\n\n    (click)="_approveAllPendingTimesheets(chatListItem?.response?.responseList,parentIndex)"\n\n    [disabled]="(parentIndex != (chatList?.length - 1) || chatListItem?.response?.responseList?.pendingList?.length == 0)">Approve\n\n    <span class="text">{{chatListItem?.response?.responseList?.selectedPendingTimesheetList?.length > 0 &&\n\n        chatListItem?.response?.responseList?.selectedPendingTimesheetList?.length !==\n\n        chatListItem?.response?.responseList?.pendingList?.length ? \'Selected\' : \'All\'}}</span>\n\n</button>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\pending-timesheet\pending-timesheet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__chat_bot_new_services_chat_bot_new_services__["a" /* ChatBotServices */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_getterSetter_getterSetter__["a" /* GetterSetter */]])
    ], PendingTimesheetComponent);
    return PendingTimesheetComponent;
}());

//# sourceMappingURL=pending-timesheet.js.map

/***/ }),

/***/ 1886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTimesheetDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__container_chat_bot_new_chat_bot_new_services_chat_bot_new_services__ = __webpack_require__(1469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_getterSetter_getterSetter__ = __webpack_require__(58);
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
 * Generated class for the CreateTaskComponent component.
 */
var MyTimesheetDetailComponent = /** @class */ (function () {
    function MyTimesheetDetailComponent(navCtrl, getterSetter, chatBotServices) {
        this.navCtrl = navCtrl;
        this.getterSetter = getterSetter;
        this.chatBotServices = chatBotServices;
        this.sendDataToChatBotResponseSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showMoreArrow = false;
        this.showMoreArrowForMyTimesheetList = false;
    }
    MyTimesheetDetailComponent.prototype.onlastSlideUpdateEmpContactList = function (dataList) {
        this.showMoreArrow = dataList.length == 7 ? true : false;
    };
    MyTimesheetDetailComponent.prototype.onlastSlideUpdateMyTimesheetList = function (dataList) {
        this.showMoreArrowForMyTimesheetList = dataList.length > 5 ? true : false;
    };
    MyTimesheetDetailComponent.prototype.getApproverStatusBoxType = function (status) {
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
    MyTimesheetDetailComponent.prototype.getTimesheetTypeIcon = function (status) {
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
    MyTimesheetDetailComponent.prototype.goToMyTimesheetsPage = function (dataList) {
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
            _this.getterSetter.setUserChatListData(_this.chatList);
            _this.chatBotServices._hrChatBotSetChatList().then(function (response) {
                _this.chatList = response.data;
                _this.sendDataToChatBotResponseSuccess.emit({ chatList: _this.chatList });
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MyTimesheetDetailComponent.prototype, "chatList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MyTimesheetDetailComponent.prototype, "chatListItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MyTimesheetDetailComponent.prototype, "parentIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], MyTimesheetDetailComponent.prototype, "sendDataToChatBotResponseSuccess", void 0);
    MyTimesheetDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-timesheet-detail',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\my-timesheet-detail\my-timesheet-detail.html"*/'<ion-slides slidesPerView="1.2"\n\n    (ionSlideReachEnd)="onlastSlideUpdateMyTimesheetList(chatListItem?.response?.responseList?.dataList)"\n\n    [ngStyle]="{\'width\': (showMoreArrowForMyTimesheetList  && ((chatList.length - 1)  == parentIndex)) ? \'90%\' : \'100%\'}">\n\n    <ion-slide *ngFor="let responseItem of chatListItem?.response?.responseList?.dataList | slice:0:5">\n\n        <ion-card class="myTimesheetCard">\n\n            <ion-row class="details">\n\n                <ion-col col-2>\n\n                    <div class="image" [ngClass]="getApproverStatusBoxType(responseItem.approvalStatusId)">\n\n                        <img [src]="getTimesheetTypeIcon(responseItem.approvalStatusId)" />\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-10 text-left padding-left>\n\n                    <p><strong>{{responseItem?.taskName | titlecase}}</strong></p>\n\n                    <p><strong>Project: </strong><span>{{responseItem?.projectName | titlecase}}</span></p>\n\n                    <p>Date: <span>{{responseItem?.taskUpdateDate}}</span></p>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col text-left col-5>\n\n                    <strong>Efforts:</strong>\n\n                </ion-col>\n\n                <ion-col text-left col-7>\n\n                    <span>{{responseItem?.totalEfforts?.split(\'.\')[0]}} Hrs</span>\n\n                    <span>{{responseItem?.totalEfforts?.split(\'.\')[1]}}\n\n                        Mins</span>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col text-left col-5>\n\n                    <strong>Billability:</strong>\n\n                </ion-col>\n\n                <ion-col text-left col-7>\n\n                    <span>{{responseItem?.billablityFlag | titlecase}}</span>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row class="comments-row">\n\n                <ion-col text-left col-5 *ngIf="responseItem?.comments">\n\n                    <strong>Comments:</strong>\n\n                </ion-col>\n\n                <ion-col text-left class="comments">\n\n                    {{responseItem?.comments}}\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card>\n\n    </ion-slide>\n\n</ion-slides>\n\n<div *ngIf="showMoreArrowForMyTimesheetList && ((chatList.length - 1)  == parentIndex)"\n\n    (click)="goToMyTimesheetsPage(chatListItem?.response?.responseList?.dataList)">\n\n    <ion-icon name="arrow-forward"></ion-icon>\n\n</div>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\my-timesheet-detail\my-timesheet-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_getterSetter_getterSetter__["a" /* GetterSetter */], __WEBPACK_IMPORTED_MODULE_1__container_chat_bot_new_chat_bot_new_services_chat_bot_new_services__["a" /* ChatBotServices */]])
    ], MyTimesheetDetailComponent);
    return MyTimesheetDetailComponent;
}());

//# sourceMappingURL=my-timesheet-detail.js.map

/***/ }),

/***/ 1887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectAllocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the CreateTaskComponent component.
 */
var ProjectAllocationComponent = /** @class */ (function () {
    function ProjectAllocationComponent() {
    }
    ProjectAllocationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectAllocationComponent.prototype, "chatListItem", void 0);
    ProjectAllocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'project-allocation',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\project-allocation\project-allocation.html"*/'<ion-slides slidesPerView="1.2" spaceBetween="5px">\n\n    <ion-slide *ngFor="let responseItem of chatListItem?.response?.responseList?.dataList">\n\n        <ion-row>\n\n            <div>\n\n                <img src="assets/imgs/chat/proj-d-proj-icon.svg" />\n\n                Project\n\n            </div>\n\n            <div (click)="expand()" [ngClass]="{\'expand\' : expandDiv}">{{responseItem?.projectName | titlecase}}\n\n            </div>\n\n        </ion-row>\n\n        <ion-row>\n\n            <div>\n\n                <img src="assets/imgs/chat/proj-d-manager-icon.svg" />\n\n                1Up Manager\n\n            </div>\n\n            <div>{{responseItem?.projectManagerName | titlecase}}</div>\n\n        </ion-row>\n\n        <ion-row>\n\n            <div>\n\n                <img src="assets/imgs/chat/proj-d-date-icon.svg" />\n\n                Allocation Start Date\n\n            </div>\n\n            <div>{{responseItem?.resourceAllocationStartDate}}</div>\n\n        </ion-row>\n\n        <ion-row>\n\n            <div>\n\n                <img src="assets/imgs/chat/proj-d-date-icon.svg" />\n\n                Allocation End Date\n\n            </div>\n\n            <div>{{responseItem?.resourceAllocationEndDate}}</div>\n\n        </ion-row>\n\n        <ion-row>\n\n            <div>\n\n                <img src="assets/imgs/chat/proj-d-date-icon.svg" />\n\n                Project Start Date\n\n            </div>\n\n            <div>{{responseItem?.projectStartDate}}</div>\n\n        </ion-row>\n\n        <ion-row>\n\n            <div>\n\n                <img src="assets/imgs/chat/proj-d-date-icon.svg" />\n\n                Project End Date\n\n            </div>\n\n            <div>{{responseItem?.projectEndDate}}</div>\n\n        </ion-row>\n\n        <ion-row>\n\n            <div>\n\n                <img src="assets/imgs/chat/proj-d-utilization-icon.svg" />\n\n                Utilization\n\n            </div>\n\n            <div>{{responseItem?.utilization}}</div>\n\n        </ion-row>\n\n    </ion-slide>\n\n</ion-slides>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\project-allocation\project-allocation.html"*/,
        })
    ], ProjectAllocationComponent);
    return ProjectAllocationComponent;
}());

//# sourceMappingURL=project-allocation.js.map

/***/ }),

/***/ 1888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return learningHrsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_getterSetter_getterSetter__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container_chat_bot_new_chat_bot_new_services_chat_bot_new_services__ = __webpack_require__(1469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the CreateTaskComponent component.
 */
var learningHrsComponent = /** @class */ (function () {
    function learningHrsComponent(httpProvider, utilities, chatBotServices, getterSetter, navCtrl) {
        this.httpProvider = httpProvider;
        this.utilities = utilities;
        this.chatBotServices = chatBotServices;
        this.getterSetter = getterSetter;
        this.navCtrl = navCtrl;
        this.scrollToBottom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.learningHistory = null;
        this.referralData = null;
        this.noJobsAvailable = '';
    }
    learningHrsComponent.prototype.ngOnInit = function () {
        this._getLearningHrs();
    };
    learningHrsComponent.prototype._getLearningHrs = function () {
        var _this = this;
        this.utilities.updateLoader(true);
        var data = {
            url: this.responseList.restApi.split(",")[0],
            params: {},
        };
        this.chatBotServices._restAPICall(data).then(function (response) {
            _this.utilities.consoleLog(response);
            _this.learningHistory = response.data.details.responseList.learningHistory;
            _this.scrollToBottom.emit();
            _this.utilities.updateLoader(false);
        }, function (error) {
            _this.utilities.updateLoader(false);
        });
    };
    learningHrsComponent.prototype.allOffering = function (selectedCourse) {
        var showAllFilters = true;
        if (this.utilities.isEmptyOrNullOrUndefined(selectedCourse)) {
            selectedCourse = selectedCourse;
            showAllFilters = false;
        }
        this.navCtrl.push("CourseListPage", { selectedCourse: selectedCourse, showAllFilters: showAllFilters });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], learningHrsComponent.prototype, "responseList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], learningHrsComponent.prototype, "scrollToBottom", void 0);
    learningHrsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'learning-hrs',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\learning-hrs\learning-hrs.html"*/'<div class="container-card" *ngIf="learningHistory">\n  <div class="learning-card" *ngFor="let item of learningHistory?.learningList" (click)="allOffering(item.type)">\n    <div class="learning-icon"> <span><img class="icon-header" [src]=item?.icon\n          onerror="this.src=\'./assets/imgs/logo.png\'" /></span></div>\n    <div class="flex-column-center width88per padding0-5">\n      <div class=" width100per">\n        <span class="justify-content-space-btw width100per">\n          <span class="center font-1p2 learn-sum-title">{{item?.title}}</span>\n          <span class="center">\n            <span class="lerning-pecent-value font-bold">{{item?.percentage}}%</span>\n            <span class="lerning-hr">{{item?.totalCreditHrs}} Hrs</span>\n            <ion-icon class="padding-left12" end name="ios-arrow-forward">\n              <!-- (click)="goToZenLearnDashboard(item?.title)" -->\n            </ion-icon>\n          </span>\n        </span>\n      </div>\n      <div class="progress-outer">\n        <div class="progress-inner" [ngStyle]="{\'background-color\':\'#01C275\',\'width\':item?.percentage +\'%\'}">\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div *ngIf="!learningHistory" class="nodata">No Data Available</div> -->\n\n</div>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\learning-hrs\learning-hrs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_4__container_chat_bot_new_chat_bot_new_services_chat_bot_new_services__["a" /* ChatBotServices */], __WEBPACK_IMPORTED_MODULE_3__providers_getterSetter_getterSetter__["a" /* GetterSetter */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["x" /* NavController */]])
    ], learningHrsComponent);
    return learningHrsComponent;
}());

//# sourceMappingURL=learning-hrs.js.map

/***/ }),

/***/ 1889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_bot_new_services_chat_bot_new_services__ = __webpack_require__(1469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container_chat_bot_new_chat_bot_new_services_moveToPage_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
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
 * Generated class for the CreateTaskComponent component.
 */
var CoursesListComponent = /** @class */ (function () {
    function CoursesListComponent(moveToPageService, utilities, chatBotServices, navCtrl) {
        var _this = this;
        this.moveToPageService = moveToPageService;
        this.utilities = utilities;
        this.chatBotServices = chatBotServices;
        this.navCtrl = navCtrl;
        this.scrollToBottom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.$withDrawCourse = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Subscription"]();
        this.courseList = [];
        this.$withDrawCourse = this.moveToPageService.withDrawCourse.subscribe(function (res) {
            _this._getCoursesList();
        });
    }
    CoursesListComponent.prototype.ngOnInit = function () {
        this._getCoursesList();
    };
    CoursesListComponent.prototype.ngOnDestroy = function () {
        this.$withDrawCourse.unsubscribe();
    };
    CoursesListComponent.prototype._getCoursesList = function () {
        var _this = this;
        this.utilities.updateLoader(true);
        var data = {
            url: this.responseList.restApi.split(",")[0],
            params: this.responseList.parameters
        };
        this.chatBotServices._restAPICall(data).then(function (response) {
            if (response.data.details) {
                _this.courseList = response.data.details;
                _this.scrollToBottom.emit();
                _this.utilities.updateLoader(false);
            }
        }, function (error) {
            _this.utilities.updateLoader(false);
        });
    };
    CoursesListComponent.prototype._viewAll = function (selectedCourse) {
        this.navCtrl.push("OfferingDetailsPage", { selectedCourse: selectedCourse });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CoursesListComponent.prototype, "responseList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CoursesListComponent.prototype, "scrollToBottom", void 0);
    CoursesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'courses-list',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\courses-list\courses-list.html"*/'<div *ngIf="courseList">\n  <div class="dap-cont" *ngFor="let item of courseList?.responseList">\n    <div class="padding10">{{item?.title}}<div class="font-weight600 padding-top5">{{item?.startDate |\n        date:\'d MMM\'}} to {{item?.endDate | date:\'d MMM yyyy\'}}\n      </div>\n    </div>\n    <div class="dap-button" (click)="_viewAll(item)">View</div>\n  </div>\n</div>\n<div *ngIf="!courseList?.responseList" class="text-wrapper">No Data Available</div>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\courses-list\courses-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__container_chat_bot_new_chat_bot_new_services_moveToPage_service__["a" /* MoveToPageService */], __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_2__chat_bot_new_services_chat_bot_new_services__["a" /* ChatBotServices */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["x" /* NavController */]])
    ], CoursesListComponent);
    return CoursesListComponent;
}());

//# sourceMappingURL=courses-list.js.map

/***/ }),

/***/ 1890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDAP; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__container_chat_bot_new_chat_bot_new_services_chat_bot_new_services__ = __webpack_require__(1469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the ReferralComponent component.
 */
var MyDAP = /** @class */ (function () {
    function MyDAP(utilities, chatBotServices) {
        this.utilities = utilities;
        this.chatBotServices = chatBotServices;
        this.scrollToBottom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.slidePerView = '1';
    }
    MyDAP.prototype.ngOnInit = function () {
        this._countteamMembersDAP(this.myDAPDetails.restApi, this.myDAPDetails.parameters);
    };
    MyDAP.prototype._countteamMembersDAP = function (restApi, body) {
        var _this = this;
        this.utilities.updateLoader(true);
        this.chatBotServices._restAPICall({ url: restApi, params: body }).then(function (response) {
            if (response.data.details) {
                _this.myDAPData = response.data.details;
                if (_this.myDAPData.length > 0)
                    _this.slidePerView = "1.2";
            }
            _this.scrollToBottom.emit();
            _this.utilities.updateLoader(false);
        }, function (error) {
            _this.utilities.updateLoader(false);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["D" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["D" /* Slides */])
    ], MyDAP.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MyDAP.prototype, "myDAPDetails", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], MyDAP.prototype, "scrollToBottom", void 0);
    MyDAP = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-dap',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\my-dap\my-dap.html"*/'<ion-slides *ngIf="myDAPData?.responseList" [slidesPerView]="slidePerView" class="chat-item-padding5-top0">\n\n    <ion-slide *ngFor="let item of myDAPData.responseList">\n\n        <ion-card>\n\n            <div class="text-left referral-detail">\n\n                <ion-row *ngFor="let subItem of item.list">\n\n                    <ion-col>\n\n                        <div>{{subItem?.key}}</div>\n\n                        <div>\n\n                            {{subItem?.value}}\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </ion-card>\n\n    </ion-slide>\n\n</ion-slides>\n\n<div *ngIf="myDAPData?.message" class="text-wrapper">No Data Available</div>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\chat-bot-new\chat-bot-components\my-dap\my-dap.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1__container_chat_bot_new_chat_bot_new_services_chat_bot_new_services__["a" /* ChatBotServices */]])
    ], MyDAP);
    return MyDAP;
}());

//# sourceMappingURL=my-dap.js.map

/***/ })

});
//# sourceMappingURL=1.js.map