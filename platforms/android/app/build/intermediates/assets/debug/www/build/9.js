webpackJsonp([9],{

/***/ 1360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewDriverPageModule", function() { return AddNewDriverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__ = __webpack_require__(1455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_new_driver__ = __webpack_require__(1782);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddNewDriverPageModule = /** @class */ (function () {
    function AddNewDriverPageModule() {
    }
    AddNewDriverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__add_new_driver__["a" /* AddNewDriverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__add_new_driver__["a" /* AddNewDriverPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], AddNewDriverPageModule);
    return AddNewDriverPageModule;
}());

//# sourceMappingURL=add-new-driver.module.js.map

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

/***/ 1782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewDriverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_new_driver_model_add_new_driver_model__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_angular_http_angular__ = __webpack_require__(45);
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
 * Generated class for the AddNewDriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddNewDriverPage = /** @class */ (function () {
    function AddNewDriverPage(navCtrl, navParams, httpProvider, utility, modalCtrl, popoverCtrl, formBuilder, httpAngularProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.utility = utility;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.formBuilder = formBuilder;
        this.httpAngularProvider = httpAngularProvider;
        this.routeId = '';
        this.driverScreenOn = true;
        this.isEditNew = this.navParams.get("isEditNew");
        this.user = this.formBuilder.group({
            username: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            number: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
        });
        if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get('title')))
            this.actionType = this.navParams.get('title');
        if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get('routeId')))
            this.routeId = this.navParams.get('routeId');
        if (!this.utility.isEmptyOrNullOrUndefined(this.actionType) && this.actionType.toLowerCase().indexOf("driver") >= 0) {
            this.driverScreenOn = true;
        }
        else {
            this.driverScreenOn = false;
        }
    }
    AddNewDriverPage.prototype.ngOnInit = function () {
        if (this.driverScreenOn)
            this.getDriverList();
        else
            this.getBusIncharge(this.routeId);
    };
    /**
     *
     * @param event popover for edit and delete
     */
    AddNewDriverPage.prototype.popOverMenu = function (event, driverDetails, index) {
        var _this = this;
        event.stopPropagation();
        var popover = this.popoverCtrl.create("PopoverPage", {
            type: "adminBus",
            driverDetails: driverDetails,
            showEdit: true,
            showDelete: true,
        });
        popover.present({ ev: event });
        popover.onDidDismiss(function (data) {
            if (data == "edit") {
                _this.getDriverList();
            }
            else if (data == "delete") {
                _this.utility.presentConfirmation("Do you want to delete driver", "Are you sure?").then(function (res) {
                    _this.deleteRecord(driverDetails.driverId, index);
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    // service for get Bus Incharge list
    AddNewDriverPage.prototype.getBusIncharge = function (busRouteId) {
        var _this = this;
        this.utility.updateLoader(true);
        var getAdminBusInchargeList = {
            url: "getAdminBusInchargeList",
            data: {
            // "busRouteId": busRouteId
            },
            isZenAdmin: true,
        };
        this.httpProvider.http.commonService(getAdminBusInchargeList).subscribe(function (response) {
            if (response) {
                _this.showNoPasstxt = false;
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"])) {
                    _this.responseList = response["data"];
                    _this.listToDisplay = _this.responseList.busInchargeDetailDOs;
                }
                if (response.status["statusCode"] == "16") {
                    _this.showNoPasstxt = true;
                }
            }
            _this.utility.updateLoader(false);
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    // service for get drivers list
    AddNewDriverPage.prototype.getDriverList = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var getAdminDriverDetailList = {
            url: "getAdminDriverDetailList",
            data: {},
            isZenAdmin: true,
        };
        this.httpProvider.http.commonService(getAdminDriverDetailList).subscribe(function (response) {
            if (response) {
                _this.showNoPasstxt = false;
                if (!_this.utility.isEmptyOrNullOrUndefined(response["data"])) {
                    _this.responseList = response["data"];
                    _this.listToDisplay = _this.responseList.driverDetailDOs;
                }
                if (response.status["statusCode"] == "16") {
                    _this.showNoPasstxt = true;
                }
            }
            _this.utility.updateLoader(false);
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    // For Delete perticular record
    AddNewDriverPage.prototype.deleteRecord = function (driverId, index) {
        var _this = this;
        // this.responseList.splice(val.driverId,1)
        console.log("index", index);
        this.utility.updateLoader(true);
        var formData = new FormData();
        formData.append("driverId", driverId);
        formData.append("updationType", "delete");
        var home = {
            url: "getAdminAddUpdateDriverDetails",
            data: formData,
            isZenAdmin: true,
        };
        this.httpAngularProvider.multimediaService(home).subscribe(function (response) {
            if (response) {
                if (!_this.utility.isEmptyOrNullOrUndefined(response.status["statusCode"]) && response.status["statusCode"] == 1) {
                    _this.listToDisplay.splice(index, 1);
                }
            }
            _this.utility.updateLoader(false);
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    // // model function calling
    AddNewDriverPage.prototype.addNewDriverModel = function () {
        var _this = this;
        var reportModel = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__add_new_driver_model_add_new_driver_model__["a" /* AddDriverModelPage */], { isAddNew: true }, { cssClass: "add-driver-model" });
        reportModel.onDidDismiss(function (data) {
            if (data == "add") {
                _this.getDriverList();
            }
        });
        reportModel.present();
    };
    AddNewDriverPage.prototype.editNewDriverModel = function () {
        var reportModel = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__add_new_driver_model_add_new_driver_model__["a" /* AddDriverModelPage */], { isEdit: true }, { cssClass: "add-driver-model" });
        reportModel.present();
    };
    /**
     * Sending Selected/Updated Dirver or BusIncharge Details to previous page
     * @param item Selected Driver or Bus Incharge
     */
    AddNewDriverPage.prototype.selectedItem = function (item) {
        if (this.driverScreenOn)
            this.navCtrl.getPrevious().data.selectedDriver = item;
        else
            this.navCtrl.getPrevious().data.selectedBusIncharge = item;
        this.navCtrl.popTo('AddBusPage');
    };
    AddNewDriverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-add-new-driver",template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\add-new-driver\add-new-driver.html"*/'<!--\n  Generated template for the AddNewDriverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>{{actionType}} List</ion-title>\n    </ion-navbar>\n\n    <!-- <ion-navbar *ngIf="!driverScreenOn">\n        <ion-searchbar [(ngModel)]="busInchargeSearch" animated placeholder="Search">\n        </ion-searchbar>\n    </ion-navbar> -->\n\n</ion-header>\n\n<ion-content>\n    <!-- first card with img and calling function for model -->\n    <ion-card class="add-new-driver" *ngIf="driverScreenOn">\n        <div class="center-align" (click)="addNewDriverModel()">\n            <img src="assets/zenAdmin/add-new-driver-img.svg" alt="" class="add-new-driver-img" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n        </div>\n\n        <div class="center-align">\n            <span class="title-new-driver">Add New {{actionType}}</span>\n        </div>\n\n        <!-- Card for driver details -->\n    </ion-card>\n\n    <ion-card class="driver-detail-card" *ngFor="let item of listToDisplay" [hidden]="driverScreenOn" (click)="selectedItem(item)">\n        <div class="driver-logo">\n            <img class="driver-img" [src]="item?.busInchargeProfilePic" alt="" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n        </div>\n\n        <div class="driver-details">\n            <div class="driver-name">{{item?.busInchargeName}}</div>\n            <div class="driver-id">{{item?.busRouteName ||\'-\'}}</div>\n        </div>\n\n    </ion-card>\n\n    <ion-card class="driver-detail-card" *ngFor="let item of listToDisplay; let i=index" [hidden]="!driverScreenOn" (click)="selectedItem(item)">\n        <div class="driver-logo">\n            <img class="driver-img" [src]="item?.driverProfilePic" alt="" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n        </div>\n\n        <div class="driver-details">\n            <div class="driver-name">{{item?.driverName}}</div>\n            <div class="driver-id">{{item?.busRouteName || \'-\'}}</div>\n        </div>\n\n        <div class="menu-icon">\n            <img src="assets/zenAdmin/three-dot.svg" alt="" class="three-dot" (click)="popOverMenu($event,item,i)" />\n        </div>\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\add-new-driver\add-new-driver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__providers_http_angular_http_angular__["a" /* HttpAngularProvider */]])
    ], AddNewDriverPage);
    return AddNewDriverPage;
}());

//# sourceMappingURL=add-new-driver.js.map

/***/ })

});
//# sourceMappingURL=9.js.map