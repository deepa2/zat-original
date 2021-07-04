webpackJsonp([5],{

/***/ 1376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelerListDetailsPageModule", function() { return TravelerListDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__ = __webpack_require__(1455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__traveler_list_details__ = __webpack_require__(1798);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TravelerListDetailsPageModule = /** @class */ (function () {
    function TravelerListDetailsPageModule() {
    }
    TravelerListDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__traveler_list_details__["a" /* TravelerListDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__traveler_list_details__["a" /* TravelerListDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], TravelerListDetailsPageModule);
    return TravelerListDetailsPageModule;
}());

//# sourceMappingURL=traveler-list-details.module.js.map

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

/***/ 1798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelerListDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_zenadmin_cancel_buspass_modal_cancel_buspass_modal__ = __webpack_require__(734);
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
 * Generated class for the TravelerListDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TravelerListDetailsPage = /** @class */ (function () {
    function TravelerListDetailsPage(navCtrl, navParams, utility, httpProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.busDetails = [];
        this.coTravellerList = [];
        this.bookingStatus = "All";
    }
    TravelerListDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TravelerListDetailsPage');
        this.getBusInchargeCompleteDetails();
    };
    TravelerListDetailsPage.prototype.getBusInchargeCompleteDetails = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var home = {
            url: 'getBusInchargeCompleteDetails',
            data: {
            // busId: 1
            // coTravellerFilter: "Rejected"
            },
            isZenAdmin: true
        };
        this.httpProvider.http.commonService(home).subscribe(function (response) {
            if (response) {
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response['data']) && response.status["statusCode"] == '1') {
                    _this.busDetails = response['data'];
                    console.log("busDetails", _this.busDetails);
                    _this.inchargeDetails = response['data'].busInchargeDetailDO;
                    console.log("inchargeDetails", _this.inchargeDetails);
                    _this.coTravellerList = _this.inchargeDetails.coTravellerList;
                    // this.showNoPassPage = false;
                }
                // if (response.status["statusCode"] == '16' && !this.utility.isEmptyOrNullOrUndefined(response['data']))
                // {
                //   // no pass available
                //   // this.showNoPassPage = true;
                //   // this.passDetails = response['data'];
                // }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    TravelerListDetailsPage.prototype.call = function (number) {
        this.utility.callNumber(number);
    };
    TravelerListDetailsPage.prototype.raiseComplaintReq = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_zenadmin_cancel_buspass_modal_cancel_buspass_modal__["a" /* CancelBuspassModalComponent */], {
            passID: this.busDetails.busPassId,
            passType: this.busDetails.passType,
            passValidity: this.busDetails.busPassValidity,
            requestType: "raiseComplaint",
            busInchargeDetails: this.busDetails,
            complainerType: "Bus Incharge",
        }, {
            cssClass: "cancel-pass-modal",
        });
        modal.present();
        modal.onDidDismiss(function (res) {
            // console.log("response", res);
            // this.utility.updateLoader(true)
            // if (res) {
            //   if (res.key == 'passCancelled') {
            //     this.utility.updateLoader(false)
            //     // this.isPassCancelled = true;
            //     console.log("cancelled data", res.cancelledData);
            //     // this.busDetails = ''
            //     // this.cancelBusDetails = res.cancelledData
            //     this.cancelMsg = res.cancelledData.busPassStatusMessageDetails
            //     console.log("cancelMsg", this.cancelMsg);
            //     console.log("cancelBusDetails", this.cancelBusDetails.userName);
            //   }
            // }
            // else {
            //   this.utility.updateLoader(false)
            // }
        });
    };
    TravelerListDetailsPage.prototype.onSelectChange = function (data) {
        if (!this.utility.isEmptyOrNullOrUndefined(data)) {
            this.getBusInchargeCompleteDetails();
        }
    };
    TravelerListDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-traveler-list-details',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\traveler-list-details\traveler-list-details.html"*/'<!--\n  Generated template for the TravelerListDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Travellers List</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="mainContent">\n    <div class="ticket-parent">\n\n        <!-- (click)="openCalendarModal()" busInchargeDetailDOs-->\n        <div class="date-container">\n            <div>\n                <img class="calendar-icon" src="assets/zenAdmin/calendar-img.svg" />\n            </div>\n            <div>\n                <!-- <div class="day-value">{{inchargeDetails?.currDay}}</div> -->\n                <div class="display-flex">\n                    <div class="currDate">{{busDetails?.date}}</div>\n                    <!-- <span class="display-flex">\n                <img class="blk-down-arrow" src="assets/zenAdmin/down-arrow.svg" />\n              </span> -->\n                </div>\n\n            </div>\n        </div>\n        <div>\n\n\n            <ion-card color="light" class="ion-card ion-text-center margin5 post-relative">\n\n                <div class="bus-details-card">\n                    <div class="busNumber-details">\n                        <span>\n                            <img class="bus-img" src="assets/zenAdmin/bus-image.svg" />\n                        </span>\n                        <div class="busNumber-info-card">\n                            <span class="colorGrey">\n                                Bus\n                            </span>\n                            <span class="bus-number">\n                                {{inchargeDetails?.busNumber}}\n                            </span>\n                        </div>\n                    </div>\n                    <div class="busUser-count-details">\n                        <div>\n                            <img class="grp-image" src="assets/zenAdmin/group-image.svg" />\n                        </div>\n                        <div class="usersCount"> {{inchargeDetails?.reservedSeats}}/{{inchargeDetails?.totalSeats}}</div>\n                    </div>\n                </div>\n                <div class="profile-wrapper">\n\n                </div>\n                <div class="container-items">\n                    <div class="route-pic">\n                        <img class="route-img" src="assets/zenAdmin/route-icon.svg">\n                        <!-- <img class="userpic-bg" src="assets/zenLearn-imgs/User_profile_BG.svg"> -->\n                    </div>\n                    <div style="display: flex;flex-direction: column;padding-top: 8px;width: 80%;">\n                        <span class="associate-name colorGrey">Route</span>\n                        <span class="key-value fontWeight">{{inchargeDetails?.busRouteName}}</span>\n                    </div>\n                </div>\n                <div class="driver-info-container">\n                    <!-- <div class="user-pic">\n            <img class="img-style" [src]="inchargeDetails?.driverProfilePic" onerror="this.src=\'./assets/imgs/logo.png\'">\n            <img class="userpic-bg" src="assets/zenLearn-imgs/User_profile_BG.svg">\n          </div> -->\n                    <div class="profile-img-container">\n                        <!-- <img class="ringImg-profile" src="assets/zenLearn-imgs/profile-ring-img.svg" onerror="this.src=\'assets/imgs/blank.png\'" /> -->\n                        <img class="userImage" [src]="inchargeDetails?.driverProfilePic" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n                    </div>\n                    <div style="display: flex;flex-direction: column;padding-top: 8px;width: 80%;">\n                        <span class="associate-name colorGrey">Driver</span>\n                        <span class="key-value fontWeight"> {{inchargeDetails?.driverName}}</span>\n                    </div>\n                    <div (click)="call(inchargeDetails?.driverNumber)">\n                        <img class="phone-image" src="assets/zenAdmin/call-image.svg">\n                    </div>\n                </div>\n\n            </ion-card>\n        </div>\n    </div>\n    <div class="cotravellers-container">\n        <div class="co-traveller-card">\n            <div class="co-travller-info">\n                <img class="user-icon" src="assets/zenAdmin/co-traveler-icon.svg" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n                <span class="co-travller-title">Co-Travellers</span>\n            </div>\n            <div>\n                <!-- <ion-buttons end> -->\n                <ion-select [(ngModel)]="bookingStatus" class="status-select" interface="popover" (ionChange)="onSelectChange($event)">\n                    <ion-option value="All">All</ion-option>\n                    <ion-option value="Approved">Approved</ion-option>\n                    <!-- <ion-option value="Rejected">Rejected</ion-option>\n          <ion-option value="Pending">Pending</ion-option> -->\n                    <ion-option value="Cancelled">Cancelled</ion-option>\n                </ion-select>\n                <!-- </ion-buttons> -->\n            </div>\n        </div>\n        <ng-container *ngIf="(coTravellerList | cotraveller: bookingStatus) as result">\n            <div class="profile-info" *ngFor="let coTravellerItem of coTravellerList | cotraveller: bookingStatus">\n                <div class="cotraveller-img-container">\n                    <!-- <img class="ringImg-profile" src="assets/zenLearn-imgs/profile-ring-img.svg" onerror="this.src=\'assets/imgs/blank.png\'" /> -->\n                    <img class="user-icon" [src]="coTravellerItem?.profilePicUrl" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n                </div>\n                <div class="user-details">\n                    <div style="display: flex;">\n                        <span [ngClass]="{\'width-100\': !coTravellerItem?.isBusIncharge}" class="username fontWeight">{{coTravellerItem?.userName}}</span>\n                        <span class="incharge" *ngIf="coTravellerItem?.isBusIncharge">Incharge</span>\n                    </div>\n                    <div class="colorGrey fontWt300" *ngIf="coTravellerItem.isNonZensarian">Non-Zensar</div>\n                    <div class="colorGrey fontWt300" *ngIf="!coTravellerItem.isNonZensarian">Zensar</div>\n                </div>\n                <div class="contact-id-container">\n                    <span class="id-card"><img src="assets/zenAdmin/id-card-icon.svg" class="id-icon" /></span>\n                    <span (click)="call(coTravellerItem?.userName)">\n                        <img class="call-users" src="assets/zenAdmin/call-image.svg">\n                    </span>\n                </div>\n            </div>\n            <div *ngIf="result?.length <=\'0\'|| coTravellerList.length <= \'0\'" class="no-data">\n                <span>No Data Found</span>\n            </div>\n        </ng-container>\n    </div>\n    <ion-fab right bottom (click)="raiseComplaintReq()">\n        <div ion-fab>\n            <img class="raiseComplaint-icon" src="assets/zenAdmin/raiseComplaint-icon.svg" />\n        </div>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\traveler-list-details\traveler-list-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_0__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["w" /* ModalController */]])
    ], TravelerListDetailsPage);
    return TravelerListDetailsPage;
}());

//# sourceMappingURL=traveler-list-details.js.map

/***/ })

});
//# sourceMappingURL=5.js.map